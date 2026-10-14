// Groq calls for the free browser tools. The key stays on the server
// (GROQ_API_KEY); the browser only ever talks to our own /api/tools routes.
//
// The free tools deliberately run on Groq's smallest, cheapest models so they
// cost almost nothing per use. The Oravo app uses stronger models, and every
// tool page says so.

const GROQ_BASE = process.env.GROQ_BASE_URL || "https://api.groq.com/openai/v1";

// Groq retires models with a few weeks' notice (llama-3.1-8b-instant went on
// 16 August 2026), so each kind of call has a list of models to try in order.
// GROQ_TEXT_MODEL / GROQ_STT_MODEL, when set, go first. The first model that
// answers is remembered for the life of the function instance.

/** Speech to text: Whisper Large v3 Turbo, about $0.04 per hour of audio. */
const STT_MODELS = candidates(process.env.GROQ_STT_MODEL, ["whisper-large-v3-turbo", "whisper-large-v3"]);
/** Text: GPT-OSS 20B, Groq's replacement for Llama 3.1 8B; cents per million tokens. */
const TEXT_MODELS = candidates(process.env.GROQ_TEXT_MODEL, ["openai/gpt-oss-20b", "openai/gpt-oss-120b"]);

function candidates(preferred: string | undefined, defaults: string[]) {
  return [...new Set([preferred?.trim(), ...defaults].filter((m): m is string => Boolean(m)))];
}

const working: { stt?: string; text?: string } = {};

function order(list: string[], known?: string) {
  return known ? [known, ...list.filter((m) => m !== known)] : list;
}

/** A model that has been retired or is not enabled for this key. */
function modelUnavailable(status: number, message: string) {
  return status === 404 || (status === 400 && /model/i.test(message) && /exist|decommission|deprecat|not (found|supported)|no access/i.test(message));
}

/** Reasoning models spend output tokens thinking before they answer. */
const isReasoningModel = (model: string) => /gpt-oss|qwen3|deepseek-r1/i.test(model);

export class GroqError extends Error {
  constructor(message: string, readonly status: number) {
    super(message);
  }
}

function apiKey() {
  const key = process.env.GROQ_API_KEY;
  if (!key) throw new GroqError("Free tools are not configured yet.", 503);
  return key;
}

async function readError(res: Response) {
  try {
    const body = await res.json();
    return body?.error?.message || res.statusText;
  } catch {
    return res.statusText;
  }
}

export type TranscriptSegment = { start: number; end: number; text: string };
export type Transcript = { text: string; language?: string; duration?: number; segments: TranscriptSegment[] };

export async function transcribe(file: File, language?: string): Promise<Transcript> {
  let lastStatus = 502;
  for (const model of order(STT_MODELS, working.stt)) {
    const form = new FormData();
    form.append("file", file, file.name || "audio.webm");
    form.append("model", model);
    form.append("response_format", "verbose_json");
    form.append("temperature", "0");
    if (language && language !== "auto") form.append("language", language);

    const res = await fetch(`${GROQ_BASE}/audio/transcriptions`, {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey()}` },
      body: form,
    });
    if (!res.ok) {
      const message = await readError(res);
      console.error("[tools] groq transcription failed", model, res.status, message);
      lastStatus = res.status;
      if (modelUnavailable(res.status, message)) continue;
      break;
    }
    working.stt = model;
    const data = await res.json();
    const segments: TranscriptSegment[] = Array.isArray(data.segments)
      ? data.segments.map((s: { start: number; end: number; text: string }) => ({
          start: Number(s.start) || 0,
          end: Number(s.end) || 0,
          text: String(s.text ?? "").trim(),
        }))
      : [];
    return { text: String(data.text ?? "").trim(), language: data.language, duration: data.duration, segments };
  }
  throw new GroqError(
    lastStatus === 429 ? "The free tools are busy right now. Try again in a minute." : "We could not transcribe that audio.",
    lastStatus === 429 ? 429 : 502,
  );
}

export async function complete({
  system,
  user,
  maxTokens,
  json = false,
  temperature = 0.3,
}: {
  system: string;
  user: string;
  /** Tokens for the answer itself; reasoning models get headroom on top. */
  maxTokens: number;
  json?: boolean;
  temperature?: number;
}): Promise<string> {
  let lastStatus = 502;
  for (const model of order(TEXT_MODELS, working.text)) {
    const reasoning = isReasoningModel(model);
    const body: Record<string, unknown> = {
      model,
      temperature,
      max_completion_tokens: maxTokens + (reasoning ? 1024 : 0),
      ...(reasoning ? { reasoning_effort: "low" } : {}),
      ...(json ? { response_format: { type: "json_object" } } : {}),
      messages: [
        { role: "system", content: system },
        { role: "user", content: user },
      ],
    };
    const send = () =>
      fetch(`${GROQ_BASE}/chat/completions`, {
        method: "POST",
        headers: { Authorization: `Bearer ${apiKey()}`, "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

    let res = await send();
    let message = res.ok ? "" : await readError(res);
    // Not every reasoning model takes reasoning_effort; retry once without it.
    if (res.status === 400 && /reasoning/i.test(message) && "reasoning_effort" in body) {
      delete body.reasoning_effort;
      res = await send();
      message = res.ok ? "" : await readError(res);
    }
    if (!res.ok) {
      console.error("[tools] groq completion failed", model, res.status, message);
      lastStatus = res.status;
      if (modelUnavailable(res.status, message)) continue;
      break;
    }

    const data = await res.json();
    const choice = data.choices?.[0];
    // Some models put their reasoning inline in <think> tags; keep only the answer.
    const text = String(choice?.message?.content ?? "")
      .replace(/<think>[\s\S]*?<\/think>/g, "")
      .trim();
    if (!text) {
      console.error("[tools] groq completion empty", model, choice?.finish_reason);
      lastStatus = 502;
      break;
    }
    working.text = model;
    return text;
  }
  throw new GroqError(
    lastStatus === 429 ? "The free tools are busy right now. Try again in a minute." : "The model could not answer that. Try again in a moment.",
    lastStatus === 429 ? 429 : 502,
  );
}

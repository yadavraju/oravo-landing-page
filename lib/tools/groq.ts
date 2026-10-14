// Groq calls for the free browser tools. The key stays on the server
// (GROQ_API_KEY); the browser only ever talks to our own /api/tools routes.
//
// The free tools deliberately run on Groq's smallest, cheapest models so they
// cost almost nothing per use. The Oravo app uses stronger models, and every
// tool page says so.
//
// Groq retires models with a few weeks' notice (llama-3.1-8b-instant went on
// 16 August 2026), so each kind of call tries a list of models in order:
// GROQ_TEXT_MODEL / GROQ_STT_MODEL first when set, then the defaults below,
// then, if none of those exist for this key, whatever matching models Groq's
// /models endpoint lists. The first model that answers is remembered for the
// life of the function instance.

const DEFAULT_STT_MODELS = ["whisper-large-v3-turbo", "whisper-large-v3"];
/** GPT-OSS 20B is Groq's named replacement for Llama 3.1 8B. */
const DEFAULT_TEXT_MODELS = ["openai/gpt-oss-20b", "openai/gpt-oss-120b"];

/** Extra output tokens a reasoning model may spend thinking before it answers. */
const REASONING_HEADROOM = 1024;

type Kind = "stt" | "text";

const state: { working: Partial<Record<Kind, string>>; discovered: Partial<Record<Kind, string[]>> } = {
  working: {},
  discovered: {},
};

/** Forget remembered and discovered models. For tests. */
export function resetGroqState() {
  state.working = {};
  state.discovered = {};
}

const base = () => process.env.GROQ_BASE_URL || "https://api.groq.com/openai/v1";

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

function configured(kind: Kind) {
  const preferred = (kind === "stt" ? process.env.GROQ_STT_MODEL : process.env.GROQ_TEXT_MODEL)?.trim();
  const defaults = kind === "stt" ? DEFAULT_STT_MODELS : DEFAULT_TEXT_MODELS;
  const list = [...new Set([preferred, ...defaults].filter((m): m is string => Boolean(m)))];
  const known = state.working[kind];
  return known ? [known, ...list.filter((m) => m !== known)] : list;
}

/** A model that has been retired or is not enabled for this key. */
export function modelUnavailable(status: number, message: string) {
  return status === 404 || (status === 400 && /model/i.test(message) && /exist|decommission|deprecat|not (found|supported)|no access/i.test(message));
}

/** Reasoning models spend output tokens thinking before they answer. */
export const isReasoningModel = (model: string) => /gpt-oss|qwen3|deepseek-r1|magistral/i.test(model);

/**
 * Asks Groq which models this key can use, for when every configured model
 * is gone. Cheaper-looking chat models come first.
 */
async function discover(kind: Kind): Promise<string[]> {
  if (state.discovered[kind]) return state.discovered[kind]!;
  let ids: string[] = [];
  try {
    const res = await fetch(`${base()}/models`, { headers: { Authorization: `Bearer ${apiKey()}` } });
    if (res.ok) {
      const data = await res.json();
      ids = (Array.isArray(data?.data) ? data.data : [])
        .filter((m: { id?: unknown; active?: unknown }) => typeof m.id === "string" && m.active !== false)
        .map((m: { id: string }) => m.id);
    }
  } catch {
    /* fall through with no extra models */
  }
  const list =
    kind === "stt"
      ? ids.filter((id) => /whisper/i.test(id))
      : ids
          .filter((id) => !/whisper|tts|orpheus|playai|guard|compound|allam|embed/i.test(id))
          .sort((a, b) => cost(a) - cost(b));
  state.discovered[kind] = list;
  console.error(`[tools] groq discovered ${kind} models`, list.join(", ") || "(none)");
  return list;
}

/** Rough rank so the discovery fallback prefers small, cheap models. */
function cost(id: string) {
  const m = /(\d+)b\b/i.exec(id);
  return m ? Number(m[1]) : /mini|small|instant|lite/i.test(id) ? 1 : 500;
}

async function readError(res: Response) {
  try {
    const body = await res.json();
    return body?.error?.message || res.statusText;
  } catch {
    return res.statusText;
  }
}

/**
 * Runs `attempt` on each candidate model until one works. Models Groq says are
 * missing are skipped; any other failure stops the walk.
 */
async function withModels<T>(kind: Kind, attempt: (model: string) => Promise<{ ok: true; value: T } | { ok: false; status: number; unavailable: boolean }>) {
  const tried = new Set<string>();
  let lastStatus = 502;
  let queue = configured(kind);
  let discovered = false;
  while (queue.length) {
    const model = queue.shift()!;
    if (tried.has(model)) continue;
    tried.add(model);
    const result = await attempt(model);
    if (result.ok) {
      state.working[kind] = model;
      return { ok: true as const, value: result.value };
    }
    lastStatus = result.status;
    if (!result.unavailable) break;
    if (!queue.length && !discovered) {
      discovered = true;
      queue = (await discover(kind)).filter((m) => !tried.has(m));
    }
  }
  return { ok: false as const, status: lastStatus };
}

export type TranscriptSegment = { start: number; end: number; text: string };
export type Transcript = { text: string; language?: string; duration?: number; segments: TranscriptSegment[] };

export async function transcribe(file: File, language?: string): Promise<Transcript> {
  const result = await withModels<Transcript>("stt", async (model) => {
    const form = new FormData();
    form.append("file", file, file.name || "audio.webm");
    form.append("model", model);
    form.append("response_format", "verbose_json");
    form.append("temperature", "0");
    if (language && language !== "auto") form.append("language", language);

    const res = await fetch(`${base()}/audio/transcriptions`, {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey()}` },
      body: form,
    });
    if (!res.ok) {
      const message = await readError(res);
      console.error("[tools] groq transcription failed", model, res.status, message);
      return { ok: false, status: res.status, unavailable: modelUnavailable(res.status, message) };
    }
    const data = await res.json();
    const segments: TranscriptSegment[] = Array.isArray(data.segments)
      ? data.segments.map((s: { start: number; end: number; text: string }) => ({
          start: Number(s.start) || 0,
          end: Number(s.end) || 0,
          text: String(s.text ?? "").trim(),
        }))
      : [];
    return { ok: true, value: { text: String(data.text ?? "").trim(), language: data.language, duration: data.duration, segments } };
  });
  if (result.ok) return result.value;
  throw new GroqError(
    result.status === 429 ? "The free tools are busy right now. Try again in a minute." : "We could not transcribe that audio.",
    result.status === 429 ? 429 : 502,
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
  const result = await withModels<string>("text", async (model) => {
    const reasoning = isReasoningModel(model);
    const body: Record<string, unknown> = {
      model,
      temperature,
      max_completion_tokens: maxTokens + (reasoning ? REASONING_HEADROOM : 0),
      ...(reasoning ? { reasoning_effort: "low" } : {}),
      ...(json ? { response_format: { type: "json_object" } } : {}),
      messages: [
        { role: "system", content: system },
        { role: "user", content: user },
      ],
    };
    const send = () =>
      fetch(`${base()}/chat/completions`, {
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
      return { ok: false, status: res.status, unavailable: modelUnavailable(res.status, message) };
    }

    let data = await res.json();
    // If the model thought until it hit the cap, give it one more go with room to answer.
    if (!answer(data) && data.choices?.[0]?.finish_reason === "length") {
      body.max_completion_tokens = Number(body.max_completion_tokens) * 2;
      const retry = await send();
      if (retry.ok) data = await retry.json();
    }
    const text = answer(data);
    if (!text) {
      console.error("[tools] groq completion empty", model, data.choices?.[0]?.finish_reason);
      return { ok: false, status: 502, unavailable: false };
    }
    return { ok: true, value: text };
  });
  if (result.ok) return result.value;
  throw new GroqError(
    result.status === 429 ? "The free tools are busy right now. Try again in a minute." : "The model could not answer that. Try again in a moment.",
    result.status === 429 ? 429 : 502,
  );
}

/** The model's answer, without any inline <think> reasoning. */
function answer(data: { choices?: { message?: { content?: unknown } }[] }) {
  return String(data?.choices?.[0]?.message?.content ?? "")
    .replace(/<think>[\s\S]*?<\/think>/g, "")
    .trim();
}

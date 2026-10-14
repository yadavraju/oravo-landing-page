// Groq calls for the free browser tools. The key stays on the server
// (GROQ_API_KEY); the browser only ever talks to our own /api/tools routes.
//
// The free tools deliberately run on Groq's smallest, cheapest models so they
// cost almost nothing per use. The Oravo app uses stronger models, and every
// tool page says so.

const GROQ_BASE = process.env.GROQ_BASE_URL || "https://api.groq.com/openai/v1";

/** Speech to text: Whisper Large v3 Turbo, about $0.04 per hour of audio. */
export const STT_MODEL = process.env.GROQ_STT_MODEL || "whisper-large-v3-turbo";
/** Text: Llama 3.1 8B Instant, a few cents per million tokens. */
export const TEXT_MODEL = process.env.GROQ_TEXT_MODEL || "llama-3.1-8b-instant";

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
  const form = new FormData();
  form.append("file", file, file.name || "audio.webm");
  form.append("model", STT_MODEL);
  form.append("response_format", "verbose_json");
  form.append("temperature", "0");
  if (language && language !== "auto") form.append("language", language);

  const res = await fetch(`${GROQ_BASE}/audio/transcriptions`, {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey()}` },
    body: form,
  });
  if (!res.ok) {
    console.error("[tools] groq transcription failed", res.status, await readError(res));
    throw new GroqError(
      res.status === 429 ? "The free tools are busy right now. Try again in a minute." : "We could not transcribe that audio.",
      res.status === 429 ? 429 : 502,
    );
  }
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

export async function complete({
  system,
  user,
  maxTokens,
  json = false,
}: {
  system: string;
  user: string;
  maxTokens: number;
  json?: boolean;
}): Promise<string> {
  const res = await fetch(`${GROQ_BASE}/chat/completions`, {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey()}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      model: TEXT_MODEL,
      temperature: 0.3,
      max_tokens: maxTokens,
      ...(json ? { response_format: { type: "json_object" } } : {}),
      messages: [
        { role: "system", content: system },
        { role: "user", content: user },
      ],
    }),
  });
  if (!res.ok) {
    console.error("[tools] groq completion failed", res.status, await readError(res));
    throw new GroqError(
      res.status === 429 ? "The free tools are busy right now. Try again in a minute." : "The model could not answer that.",
      res.status === 429 ? 429 : 502,
    );
  }
  const data = await res.json();
  return String(data.choices?.[0]?.message?.content ?? "").trim();
}

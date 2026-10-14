import { vi } from "vitest";

// A stand-in for api.groq.com: tests list which models exist and how the fake
// answers, and every request is recorded for assertions.

export type ChatBody = {
  model: string;
  temperature?: number;
  max_tokens?: number;
  max_completion_tokens?: number;
  reasoning_effort?: string;
  response_format?: { type: string };
  messages: { role: string; content: string }[];
};

export type FakeGroqOptions = {
  /** Chat models the key can use. Anything else gets Groq's 404. */
  textModels?: string[];
  /** Speech models the key can use. */
  sttModels?: string[];
  /** Models listed by GET /models (defaults to textModels + sttModels). */
  listed?: string[];
  /** Override a chat answer: return a Response to send instead of the default. */
  onChat?: (body: ChatBody, call: number) => Response | undefined;
  /** Models that reject reasoning_effort with a 400. */
  noReasoningEffort?: string[];
};

const json = (body: unknown, status = 200) => new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json" } });

const notFound = (model: string) => json({ error: { message: `The model \`${model}\` does not exist or you do not have access to it.` } }, 404);

export function fakeGroq(opts: FakeGroqOptions = {}) {
  const textModels = opts.textModels ?? ["openai/gpt-oss-20b"];
  const sttModels = opts.sttModels ?? ["whisper-large-v3-turbo"];
  const chats: ChatBody[] = [];
  const transcriptions: string[] = [];
  const urls: string[] = [];

  const fetchMock = vi.fn(async (input: RequestInfo | URL, init?: RequestInit) => {
    const url = String(input);
    urls.push(url);
    if (url.endsWith("/models")) {
      const ids = opts.listed ?? [...textModels, ...sttModels];
      return json({ data: ids.map((id) => ({ id, active: true })) });
    }
    if (url.endsWith("/audio/transcriptions")) {
      const form = init?.body as FormData;
      const model = String(form.get("model"));
      transcriptions.push(model);
      if (!sttModels.includes(model)) return notFound(model);
      return json({ text: `transcribed by ${model}`, language: "en", duration: 2, segments: [{ start: 0, end: 2, text: "hello" }] });
    }
    if (url.endsWith("/chat/completions")) {
      const body = JSON.parse(String(init?.body)) as ChatBody;
      chats.push(body);
      if (!textModels.includes(body.model)) return notFound(body.model);
      if (body.max_tokens !== undefined) return json({ error: { message: "'max_tokens' is deprecated, use 'max_completion_tokens'" } }, 400);
      if (body.reasoning_effort && opts.noReasoningEffort?.includes(body.model))
        return json({ error: { message: "property 'reasoning_effort' is unsupported for this model" } }, 400);
      const custom = opts.onChat?.(body, chats.length);
      if (custom) return custom;
      const content = body.response_format
        ? JSON.stringify({ title: "Launch plan", summary: "We ship Friday.", keyPoints: ["Design done"], decisions: ["Ship Friday"], actionItems: [{ task: "Write notes", owner: "Sam", due: "Thu" }] })
        : `answer from ${body.model}`;
      return json({ choices: [{ message: { content }, finish_reason: "stop" }] });
    }
    return json({ error: { message: "unknown endpoint" } }, 404);
  });

  vi.stubGlobal("fetch", fetchMock);
  return { fetchMock, chats, transcriptions, urls };
}

export const chatReply = (content: string, finish_reason = "stop") =>
  json({ choices: [{ message: { content }, finish_reason }] });

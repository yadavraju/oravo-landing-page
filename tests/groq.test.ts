import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { GroqError, complete, isReasoningModel, modelUnavailable, resetGroqState, transcribe } from "@/lib/tools/groq";
import { chatReply, fakeGroq } from "./fakeGroq";

const ask = (extra: Partial<Parameters<typeof complete>[0]> = {}) => complete({ system: "Fix grammar.", user: "i has a apple", maxTokens: 300, ...extra });

beforeEach(() => {
  resetGroqState();
  vi.stubEnv("GROQ_API_KEY", "test-key");
  vi.stubEnv("GROQ_TEXT_MODEL", "");
  vi.stubEnv("GROQ_STT_MODEL", "");
  vi.spyOn(console, "error").mockImplementation(() => {});
});

afterEach(() => {
  vi.unstubAllGlobals();
  vi.unstubAllEnvs();
  vi.restoreAllMocks();
});

describe("complete (text tools)", () => {
  it("answers with the default model, gpt-oss-20b", async () => {
    const groq = fakeGroq();
    await expect(ask()).resolves.toBe("answer from openai/gpt-oss-20b");
    expect(groq.chats[0].model).toBe("openai/gpt-oss-20b");
  });

  it("never asks for the retired llama-3.1-8b-instant by default", async () => {
    const groq = fakeGroq();
    await ask();
    expect(groq.chats.map((c) => c.model)).not.toContain("llama-3.1-8b-instant");
  });

  it("skips a retired model set in GROQ_TEXT_MODEL and uses the replacement", async () => {
    vi.stubEnv("GROQ_TEXT_MODEL", "llama-3.1-8b-instant");
    const groq = fakeGroq();
    await expect(ask()).resolves.toBe("answer from openai/gpt-oss-20b");
    expect(groq.chats.map((c) => c.model)).toEqual(["llama-3.1-8b-instant", "openai/gpt-oss-20b"]);
  });

  it("remembers the working model so later calls skip dead ones", async () => {
    vi.stubEnv("GROQ_TEXT_MODEL", "llama-3.1-8b-instant");
    const groq = fakeGroq();
    await ask();
    await ask();
    expect(groq.chats.map((c) => c.model)).toEqual(["llama-3.1-8b-instant", "openai/gpt-oss-20b", "openai/gpt-oss-20b"]);
  });

  it("falls back to gpt-oss-120b when gpt-oss-20b is unavailable", async () => {
    fakeGroq({ textModels: ["openai/gpt-oss-120b"] });
    await expect(ask()).resolves.toBe("answer from openai/gpt-oss-120b");
  });

  it("asks Groq for its model list when every configured model is gone", async () => {
    const groq = fakeGroq({ textModels: ["qwen/qwen3-32b"], listed: ["whisper-large-v3", "meta-llama/llama-guard-4-12b", "qwen/qwen3-32b"] });
    await expect(ask()).resolves.toBe("answer from qwen/qwen3-32b");
    expect(groq.urls.some((u) => u.endsWith("/models"))).toBe(true);
    // Guard and speech models are never used for chat.
    expect(groq.chats.map((c) => c.model)).not.toContain("meta-llama/llama-guard-4-12b");
    expect(groq.chats.map((c) => c.model)).not.toContain("whisper-large-v3");
  });

  it("gives reasoning models low effort and token headroom, using max_completion_tokens", async () => {
    const groq = fakeGroq();
    await ask({ maxTokens: 300 });
    const body = groq.chats[0];
    expect(body.reasoning_effort).toBe("low");
    expect(body.max_completion_tokens).toBe(300 + 1024);
    expect(body.max_tokens).toBeUndefined();
  });

  it("retries without reasoning_effort when a model rejects it", async () => {
    const groq = fakeGroq({ noReasoningEffort: ["openai/gpt-oss-20b"] });
    await expect(ask()).resolves.toBe("answer from openai/gpt-oss-20b");
    expect(groq.chats).toHaveLength(2);
    expect(groq.chats[1].reasoning_effort).toBeUndefined();
  });

  it("strips inline <think> reasoning from the answer", async () => {
    fakeGroq({ onChat: () => chatReply("<think>let me look</think>\nI have an apple.") });
    await expect(ask()).resolves.toBe("I have an apple.");
  });

  it("retries with more room when reasoning used up the whole budget", async () => {
    const groq = fakeGroq({ onChat: (_body, call) => (call === 1 ? chatReply("", "length") : chatReply("I have an apple.")) });
    await expect(ask({ maxTokens: 300 })).resolves.toBe("I have an apple.");
    expect(groq.chats[1].max_completion_tokens).toBe((300 + 1024) * 2);
  });

  it("treats an empty answer as an error instead of returning nothing", async () => {
    fakeGroq({ onChat: () => chatReply("   ") });
    await expect(ask()).rejects.toMatchObject({ status: 502 });
  });

  it("sends JSON mode for the meeting summarizer", async () => {
    const groq = fakeGroq();
    const raw = await ask({ json: true });
    expect(groq.chats[0].response_format).toEqual({ type: "json_object" });
    expect(JSON.parse(raw).title).toBe("Launch plan");
  });

  it("reports Groq rate limits as busy (429), not as a model failure", async () => {
    fakeGroq({ onChat: () => new Response(JSON.stringify({ error: { message: "Rate limit reached" } }), { status: 429 }) });
    await expect(ask()).rejects.toMatchObject({ status: 429, message: expect.stringMatching(/busy/) });
  });

  it("does not walk the whole model list on an auth error", async () => {
    const groq = fakeGroq({ onChat: () => new Response(JSON.stringify({ error: { message: "Invalid API Key" } }), { status: 401 }) });
    await expect(ask()).rejects.toBeInstanceOf(GroqError);
    expect(groq.chats).toHaveLength(1);
  });

  it("says the tools are not configured when the key is missing", async () => {
    vi.stubEnv("GROQ_API_KEY", "");
    fakeGroq();
    await expect(ask()).rejects.toMatchObject({ status: 503 });
  });
});

describe("transcribe (speech tools)", () => {
  const audio = () => new File([new Uint8Array(2000)], "clip.webm", { type: "audio/webm" });

  it("transcribes with Whisper Large v3 Turbo", async () => {
    const groq = fakeGroq();
    const result = await transcribe(audio(), "en");
    expect(result.text).toBe("transcribed by whisper-large-v3-turbo");
    expect(result.segments).toHaveLength(1);
    expect(groq.transcriptions).toEqual(["whisper-large-v3-turbo"]);
  });

  it("falls back to Whisper Large v3 if Turbo is retired", async () => {
    fakeGroq({ sttModels: ["whisper-large-v3"] });
    await expect(transcribe(audio())).resolves.toMatchObject({ text: "transcribed by whisper-large-v3" });
  });
});

describe("helpers", () => {
  it("recognises retired-model errors", () => {
    expect(modelUnavailable(404, "The model `x` does not exist")).toBe(true);
    expect(modelUnavailable(400, "The model `x` has been decommissioned")).toBe(true);
    expect(modelUnavailable(400, "messages: field required")).toBe(false);
    expect(modelUnavailable(401, "Invalid API Key")).toBe(false);
  });

  it("knows which models reason before answering", () => {
    expect(isReasoningModel("openai/gpt-oss-20b")).toBe(true);
    expect(isReasoningModel("qwen/qwen3-32b")).toBe(true);
    expect(isReasoningModel("whisper-large-v3")).toBe(false);
  });
});

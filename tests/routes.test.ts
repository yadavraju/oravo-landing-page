import { NextRequest } from "next/server";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { POST as meetingPOST } from "@/app/api/tools/meeting-summary/route";
import { POST as rewritePOST } from "@/app/api/tools/rewrite/route";
import { POST as transcribePOST } from "@/app/api/tools/transcribe/route";
import { resetGroqState } from "@/lib/tools/groq";
import { TEXT_TASKS, type TextTask } from "@/lib/tools/prompts";
import { fakeGroq } from "./fakeGroq";

// The API routes behind every AI tool, run end to end against the fake Groq.
// Each test uses its own IP so the in-memory daily limits do not interfere.

const ORIGIN = "https://oravo.ai";
let ip = 0;
const nextIp = () => `10.0.${Math.floor(++ip / 250)}.${ip % 250}`;

function jsonRequest(path: string, body: unknown, { origin = ORIGIN, from = nextIp() } = {}) {
  return new NextRequest(`${ORIGIN}${path}`, {
    method: "POST",
    headers: { "content-type": "application/json", host: "oravo.ai", ...(origin ? { origin } : {}), "x-forwarded-for": from },
    body: JSON.stringify(body),
  });
}

function formRequest(path: string, form: FormData, { from = nextIp(), cookie = "" } = {}) {
  return new NextRequest(`${ORIGIN}${path}`, {
    method: "POST",
    headers: { host: "oravo.ai", origin: ORIGIN, "x-forwarded-for": from, ...(cookie ? { cookie } : {}) },
    body: form,
  });
}

beforeEach(() => {
  resetGroqState();
  vi.stubEnv("GROQ_API_KEY", "test-key");
  vi.stubEnv("GROQ_TEXT_MODEL", "");
  vi.spyOn(console, "error").mockImplementation(() => {});
});

afterEach(() => {
  vi.unstubAllGlobals();
  vi.unstubAllEnvs();
  vi.restoreAllMocks();
});

describe("POST /api/tools/rewrite: every AI text tool", () => {
  // Every mode the grammar checker, paraphraser, summarizer, cleaner and voice to email pages offer.
  const tasks = Object.keys(TEXT_TASKS) as TextTask[];

  it.each(tasks)("%s returns the model's answer", async (task) => {
    const groq = fakeGroq();
    const res = await rewritePOST(jsonRequest("/api/tools/rewrite", { text: "i has a apple and their is two of them.", format: task }));
    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ text: "answer from openai/gpt-oss-20b" });
    const sent = groq.chats[0];
    expect(sent.messages[0].content).toBe(TEXT_TASKS[task].prompt);
    expect(sent.max_completion_tokens).toBe(TEXT_TASKS[task].maxTokens + 1024);
  });

  it("the grammar checker runs at temperature 0", async () => {
    const groq = fakeGroq();
    await rewritePOST(jsonRequest("/api/tools/rewrite", { text: "i has a apple.", format: "grammar" }));
    expect(groq.chats[0].temperature).toBe(0);
  });

  it("still works while Groq has retired the old Llama model", async () => {
    vi.stubEnv("GROQ_TEXT_MODEL", "llama-3.1-8b-instant");
    fakeGroq();
    const res = await rewritePOST(jsonRequest("/api/tools/rewrite", { text: "i has a apple.", format: "grammar" }));
    expect(res.status).toBe(200);
  });

  it("returns a clear 502 when no model can answer", async () => {
    fakeGroq({ textModels: [], listed: [] });
    const res = await rewritePOST(jsonRequest("/api/tools/rewrite", { text: "i has a apple.", format: "grammar" }));
    expect(res.status).toBe(502);
    expect((await res.json()).error).toMatch(/could not answer/);
  });

  it("refuses requests from other sites", async () => {
    fakeGroq();
    const res = await rewritePOST(jsonRequest("/api/tools/rewrite", { text: "i has a apple.", format: "grammar" }, { origin: "https://evil.example" }));
    expect(res.status).toBe(403);
  });

  it("rejects text over the task's limit without calling Groq", async () => {
    const groq = fakeGroq();
    const res = await rewritePOST(jsonRequest("/api/tools/rewrite", { text: "a".repeat(TEXT_TASKS.grammar.maxChars + 1), format: "grammar" }));
    expect(res.status).toBe(413);
    expect(groq.chats).toHaveLength(0);
  });

  it("stops a visitor after the daily limit", async () => {
    vi.stubEnv("TOOLS_REWRITE_PER_DAY", "30");
    fakeGroq();
    const from = nextIp();
    let last = 0;
    for (let i = 0; i < 31; i++) last = (await rewritePOST(jsonRequest("/api/tools/rewrite", { text: "i has a apple.", format: "grammar" }, { from }))).status;
    expect(last).toBe(429);
  });
});

describe("POST /api/tools/transcribe: speech, audio and subtitle tools", () => {
  it("returns the transcript and its segments", async () => {
    fakeGroq();
    const form = new FormData();
    form.append("file", new File([new Uint8Array(4000)], "clip.webm", { type: "audio/webm" }));
    const res = await transcribePOST(formRequest("/api/tools/transcribe", form));
    expect(res.status).toBe(200);
    expect(await res.json()).toMatchObject({ text: "transcribed by whisper-large-v3-turbo", segments: [{ text: "hello" }] });
  });
});

describe("POST /api/tools/meeting-summary: one free try", () => {
  const transcript = "Alice: we ship Friday. Bob: design is done. ".repeat(10);

  it("summarises a pasted transcript, then refuses a second try", async () => {
    fakeGroq();
    const from = nextIp();
    const form = () => {
      const f = new FormData();
      f.append("transcript", transcript);
      return f;
    };
    const first = await meetingPOST(formRequest("/api/tools/meeting-summary", form(), { from }));
    expect(first.status).toBe(200);
    expect((await first.json()).summary).toMatchObject({ title: "Launch plan", decisions: ["Ship Friday"] });
    const cookie = first.headers.get("set-cookie")?.split(";")[0] ?? "";
    expect(cookie).toMatch(/oravo_meeting_trial=/);

    const second = await meetingPOST(formRequest("/api/tools/meeting-summary", form(), { from, cookie }));
    expect(second.status).toBe(403);
    expect((await second.json()).trialUsed).toBe(true);
  });

  it("gives the try back when the model fails", async () => {
    fakeGroq({ textModels: [], listed: [] });
    const from = nextIp();
    const f = () => {
      const x = new FormData();
      x.append("transcript", transcript);
      return x;
    };
    expect((await meetingPOST(formRequest("/api/tools/meeting-summary", f(), { from }))).status).toBe(502);
    fakeGroq();
    resetGroqState();
    expect((await meetingPOST(formRequest("/api/tools/meeting-summary", f(), { from }))).status).toBe(200);
  });
});

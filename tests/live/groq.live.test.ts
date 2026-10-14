import { beforeAll, describe, expect, it } from "vitest";
import { complete, resetGroqState, transcribe } from "@/lib/tools/groq";
import { MEETING_PROMPT, TEXT_TASKS, type TextTask } from "@/lib/tools/prompts";

// Calls the real Groq API with GROQ_API_KEY: `pnpm test:live`.
// Checks that the models behind every AI tool exist for this key and answer.

const SAMPLE = "i has been working on this report since monday but their is still alot of things to fix.";

beforeAll(() => {
  if (!process.env.GROQ_API_KEY) throw new Error("Set GROQ_API_KEY to run the live tests.");
  resetGroqState();
});

describe("live Groq: text tools", () => {
  it.each(Object.keys(TEXT_TASKS) as TextTask[])("%s answers", async (name) => {
    const task = TEXT_TASKS[name];
    const text = await complete({
      system: task.prompt,
      user: SAMPLE,
      maxTokens: task.maxTokens,
      temperature: "temperature" in task ? task.temperature : undefined,
    });
    expect(text.length).toBeGreaterThan(10);
  });

  it("grammar checker actually fixes the sample", async () => {
    const text = await complete({ system: TEXT_TASKS.grammar.prompt, user: SAMPLE, maxTokens: TEXT_TASKS.grammar.maxTokens, temperature: 0 });
    expect(text).toMatch(/I have/);
    expect(text).toMatch(/there are|there is/i);
  });

  it("meeting summarizer returns valid JSON", async () => {
    const raw = await complete({
      system: MEETING_PROMPT,
      user: "Alice: we ship on Friday. Bob: design is done, I will write the release notes by Thursday.",
      maxTokens: 1200,
      json: true,
    });
    const summary = JSON.parse(raw.slice(raw.indexOf("{"), raw.lastIndexOf("}") + 1));
    expect(typeof summary.summary).toBe("string");
    expect(Array.isArray(summary.actionItems)).toBe(true);
  });
});

describe("live Groq: speech tools", () => {
  it("whisper accepts a short WAV", async () => {
    // One second of a quiet tone: enough to prove the model exists and decodes audio.
    const rate = 16000;
    const samples = new Int16Array(rate).map((_, i) => Math.round(Math.sin((2 * Math.PI * 440 * i) / rate) * 2000));
    const header = new DataView(new ArrayBuffer(44));
    const w = (o: number, s: string) => [...s].forEach((c, i) => header.setUint8(o + i, c.charCodeAt(0)));
    w(0, "RIFF"); header.setUint32(4, 36 + samples.byteLength, true); w(8, "WAVE"); w(12, "fmt ");
    header.setUint32(16, 16, true); header.setUint16(20, 1, true); header.setUint16(22, 1, true);
    header.setUint32(24, rate, true); header.setUint32(28, rate * 2, true); header.setUint16(32, 2, true); header.setUint16(34, 16, true);
    w(36, "data"); header.setUint32(40, samples.byteLength, true);
    const file = new File([header.buffer, samples.buffer], "tone.wav", { type: "audio/wav" });
    await expect(transcribe(file, "en")).resolves.toHaveProperty("text");
  });
});

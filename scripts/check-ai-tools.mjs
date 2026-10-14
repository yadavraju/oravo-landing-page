#!/usr/bin/env node
// Checks the AI free tools on a deployed site, the way a visitor's browser
// calls them. Usage:
//   node scripts/check-ai-tools.mjs https://oravo.ai
//   node scripts/check-ai-tools.mjs https://deploy-preview-33--oravoai.netlify.app
// Each check counts against that site's daily limits for your IP. The meeting
// summarizer is skipped because it allows one free try per visitor.

const base = (process.argv[2] || "https://oravo.ai").replace(/\/$/, "");
const SAMPLE = "i has been working on this report since monday but their is still alot of things to fix.";

const textChecks = [
  ["AI Grammar Checker", "grammar"],
  ["AI Paraphrasing Tool (standard)", "paraphrase-standard"],
  ["AI Text Summarizer (short)", "summary-short"],
  ["AI Transcript Cleaner", "clean"],
  ["Voice to Email", "email"],
];

async function check(name, run) {
  const started = Date.now();
  try {
    const detail = await run();
    console.log(`PASS  ${name}  (${Date.now() - started} ms)  ${detail}`);
    return true;
  } catch (e) {
    console.log(`FAIL  ${name}  (${Date.now() - started} ms)  ${e.message}`);
    return false;
  }
}

async function post(path, init) {
  const res = await fetch(base + path, { method: "POST", ...init, headers: { origin: base, ...(init.headers || {}) } });
  const body = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${body.error || "no error message"}`);
  return body;
}

function wav() {
  const rate = 16000;
  const samples = new Int16Array(rate).map((_, i) => Math.round(Math.sin((2 * Math.PI * 440 * i) / rate) * 2000));
  const h = Buffer.alloc(44);
  h.write("RIFF", 0); h.writeUInt32LE(36 + samples.byteLength, 4); h.write("WAVE", 8); h.write("fmt ", 12);
  h.writeUInt32LE(16, 16); h.writeUInt16LE(1, 20); h.writeUInt16LE(1, 22); h.writeUInt32LE(rate, 24);
  h.writeUInt32LE(rate * 2, 28); h.writeUInt16LE(2, 32); h.writeUInt16LE(16, 34); h.write("data", 36); h.writeUInt32LE(samples.byteLength, 40);
  return new Blob([h, Buffer.from(samples.buffer)], { type: "audio/wav" });
}

console.log(`Checking AI tools on ${base}\n`);
const results = [];
for (const [name, format] of textChecks) {
  results.push(
    await check(name, async () => {
      const { text } = await post("/api/tools/rewrite", { headers: { "content-type": "application/json" }, body: JSON.stringify({ text: SAMPLE, format }) });
      if (!text || text.length < 10) throw new Error("empty answer");
      return JSON.stringify(text.slice(0, 70));
    }),
  );
}
results.push(
  await check("Speech to Text / Audio to Text / Subtitles", async () => {
    const form = new FormData();
    form.append("file", wav(), "tone.wav");
    form.append("language", "en");
    try {
      const body = await post("/api/tools/transcribe", { body: form });
      return `transcript: ${JSON.stringify((body.text || "").slice(0, 40))}`;
    } catch (e) {
      // A pure tone has no words; "could not hear any speech" still proves Whisper ran.
      if (/HTTP 422/.test(e.message)) return "Whisper ran (no speech in the test tone, as expected)";
      throw e;
    }
  }),
);

const failed = results.filter((ok) => !ok).length;
console.log(`\n${results.length - failed}/${results.length} passed`);
process.exit(failed ? 1 : 0);

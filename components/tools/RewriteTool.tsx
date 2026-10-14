"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import type { RewriteFormat } from "@/lib/tools/prompts";
import {
  CopyButton,
  ErrorNote,
  FIELD,
  RecordKey,
  ResultUpsell,
  Spinner,
  ToolApiError,
  audioFileName,
  postTool,
  useRecorder,
} from "./shared";

const MAX_CHARS = 4000;
const MAX_SECONDS = 60;

const FORMATS: { id: RewriteFormat; label: string }[] = [
  { id: "clean", label: "Clean text" },
  { id: "email", label: "Email" },
  { id: "bullets", label: "Bullet points" },
  { id: "message", label: "Chat message" },
];

const SAMPLE =
  "um so yeah I wanted to, uh, follow up on the the launch thing, like, we said friday but honestly I think we need, you know, one more week because design isn't done and um the copy still needs a pass so maybe next friday? let me know if that's, like, okay with everyone";

// Transcript cleaner and voice to email: speak or paste, pick a format, get
// clean text back from the lite model.
export function RewriteTool({ tool, defaultFormat }: { tool: "transcript-cleaner" | "voice-to-email"; defaultFormat: RewriteFormat }) {
  const [input, setInput] = useState("");
  const [format, setFormat] = useState<RewriteFormat>(defaultFormat);
  const [output, setOutput] = useState("");
  const [busy, setBusy] = useState<"" | "transcribing" | "rewriting">("");
  const [error, setError] = useState("");

  const rewrite = async (text: string) => {
    setBusy("rewriting");
    setError("");
    try {
      const result = await postTool<{ text: string }>("/api/tools/rewrite", { text, format });
      setOutput(result.text);
      trackEvent("tool_run", { tool, format });
    } catch (e) {
      setError(e instanceof ToolApiError ? e.message : "Something went wrong. Try again.");
    } finally {
      setBusy("");
    }
  };

  const recorder = useRecorder(MAX_SECONDS, async (blob) => {
    setBusy("transcribing");
    setError("");
    const form = new FormData();
    form.append("file", blob, audioFileName(blob));
    try {
      const result = await postTool<{ text: string }>("/api/tools/transcribe", form);
      const text = (input ? `${input} ${result.text}` : result.text).slice(0, MAX_CHARS);
      setInput(text);
      await rewrite(text);
    } catch (e) {
      setError(e instanceof ToolApiError ? e.message : "Something went wrong. Try again.");
      setBusy("");
    }
  });

  const tooLong = input.length > MAX_CHARS;

  return (
    <div className="flex flex-col gap-5">
      <div role="radiogroup" aria-label="Output format" className="flex flex-wrap gap-2">
        {FORMATS.map((f) => (
          <button
            key={f.id}
            type="button"
            role="radio"
            aria-checked={format === f.id}
            onClick={() => setFormat(f.id)}
            className={`chip h-9 px-3.5 font-display text-[13px] font-semibold ${format === f.id ? "key-on !border-cloud" : "text-ink-soft"}`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        <div className="flex flex-col">
          <div className="mb-2 flex items-baseline justify-between">
            <label htmlFor={`${tool}-in`} className="eyebrow">
              What you said
            </label>
            <button type="button" onClick={() => setInput(SAMPLE)} className="font-display text-[12.5px] font-semibold text-primary-500 hover:underline">
              Use an example
            </button>
          </div>
          <textarea
            id={`${tool}-in`}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Paste a transcript or a rambling voice note, or record one below."
            className={`${FIELD} min-h-[220px] flex-1 resize-y py-3 leading-relaxed`}
          />
          <p className={`mt-1.5 text-right font-display text-[12px] ${tooLong ? "text-brand" : "text-ink-faint"}`}>
            {input.length.toLocaleString()} / {MAX_CHARS.toLocaleString()}
          </p>
          <div className="mt-2 flex flex-col items-stretch gap-4 rounded-xl bg-canvas p-4 sm:flex-row sm:items-center sm:justify-between">
            <RecordKey recorder={recorder} maxSeconds={MAX_SECONDS} disabled={Boolean(busy)} idleLabel="Or speak it" quiet />
            <button
              type="button"
              disabled={Boolean(busy) || input.trim().length < 10 || tooLong || recorder.state === "recording"}
              onClick={() => rewrite(input.trim())}
              className="btn-primary disabled:cursor-not-allowed disabled:opacity-60"
            >
              {busy === "rewriting" ? <Spinner label="Writing…" /> : busy === "transcribing" ? <Spinner label="Listening…" /> : <>Clean it up <ArrowRight aria-hidden="true" className="h-4 w-4" /></>}
            </button>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="mb-2 flex items-center justify-between">
            <label htmlFor={`${tool}-out`} className="eyebrow">
              Ready to send
            </label>
            {output && <CopyButton text={output} />}
          </div>
          <textarea
            id={`${tool}-out`}
            value={output}
            onChange={(e) => setOutput(e.target.value)}
            placeholder="The cleaned-up version appears here."
            className="paper-ruled min-h-[220px] flex-1 resize-y rounded-xl border border-line p-4 text-[15px] leading-[28px] text-ink outline-none focus:border-primary-500/50"
          />
        </div>
      </div>
      {error && <ErrorNote>{error}</ErrorNote>}
      {output && <ResultUpsell tool={tool} line="Oravo does this as you speak, inside Gmail, Slack, Notion or any app, with no copying and pasting." />}
    </div>
  );
}

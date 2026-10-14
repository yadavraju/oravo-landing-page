"use client";

import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import type { TextTask } from "@/lib/tools/prompts";
import { CopyButton, ErrorNote, FIELD, ResultUpsell, Spinner, ToolApiError, postTool } from "./shared";

/** maxChars mirrors TEXT_TASKS on the server, which enforces it. */
export type TextMode = { id: TextTask; label: string; maxChars: number };

/** Word-level diff (LCS) so the grammar checker can show what it changed. */
function diffWords(before: string, after: string) {
  const a = before.split(/(\s+)/);
  const b = after.split(/(\s+)/);
  // Long texts would make the table huge; past that, just show the result.
  if (a.length * b.length > 4_000_000) return [{ type: "same" as const, text: after }];
  const dp = Array.from({ length: a.length + 1 }, () => new Uint32Array(b.length + 1));
  for (let i = a.length - 1; i >= 0; i--)
    for (let j = b.length - 1; j >= 0; j--) dp[i][j] = a[i] === b[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
  const out: { type: "same" | "added" | "removed"; text: string }[] = [];
  const push = (type: "same" | "added" | "removed", text: string) => {
    const last = out[out.length - 1];
    if (last && last.type === type) last.text += text;
    else out.push({ type, text });
  };
  let i = 0;
  let j = 0;
  while (i < a.length && j < b.length) {
    if (a[i] === b[j]) {
      push("same", a[i]);
      i++;
      j++;
    } else if (dp[i + 1][j] >= dp[i][j + 1]) push("removed", a[i++]);
    else push("added", b[j++]);
  }
  while (i < a.length) push("removed", a[i++]);
  while (j < b.length) push("added", b[j++]);
  return out;
}

const countWords = (t: string) => (t.trim() ? t.trim().split(/\s+/).length : 0);

// Grammar checker, paraphrasing tool and text summarizer: paste text, pick a
// mode, and get the lite model's version back.
export function TextTransformTool({
  tool,
  modes,
  sample,
  action,
  inputLabel = "Your text",
  outputLabel = "Result",
  showDiff = false,
  upsell,
}: {
  tool: string;
  modes: TextMode[];
  sample: string;
  action: string;
  inputLabel?: string;
  outputLabel?: string;
  showDiff?: boolean;
  upsell: string;
}) {
  const [mode, setMode] = useState<TextTask>(modes[0].id);
  const [input, setInput] = useState("");
  const [submitted, setSubmitted] = useState("");
  const [output, setOutput] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const maxChars = modes.find((m) => m.id === mode)!.maxChars;
  const tooLong = input.length > maxChars;

  const run = async () => {
    const text = input.trim();
    setBusy(true);
    setError("");
    try {
      const result = await postTool<{ text: string }>("/api/tools/rewrite", { text, format: mode });
      setSubmitted(text);
      setOutput(result.text);
      trackEvent("tool_run", { tool, format: mode });
    } catch (e) {
      setError(e instanceof ToolApiError ? e.message : "Something went wrong. Try again.");
    } finally {
      setBusy(false);
    }
  };

  const diff = useMemo(() => (showDiff && output ? diffWords(submitted, output) : null), [showDiff, submitted, output]);
  const changes = diff ? diff.filter((d) => d.type === "added").length : 0;

  return (
    <div className="flex flex-col gap-5">
      {modes.length > 1 && (
        <div role="radiogroup" aria-label="Mode" className="flex flex-wrap gap-2">
          {modes.map((m) => (
            <button
              key={m.id}
              type="button"
              role="radio"
              aria-checked={mode === m.id}
              onClick={() => setMode(m.id)}
              className={`chip h-9 px-3.5 font-display text-[13px] font-semibold ${mode === m.id ? "key-on !border-cloud" : "text-ink-soft"}`}
            >
              {m.label}
            </button>
          ))}
        </div>
      )}

      <div className="grid gap-5 lg:grid-cols-2">
        <div className="flex flex-col">
          <div className="mb-2 flex items-baseline justify-between">
            <label htmlFor={`${tool}-in`} className="eyebrow">
              {inputLabel}
            </label>
            <button type="button" onClick={() => setInput(sample)} className="font-display text-[12.5px] font-semibold text-primary-500 hover:underline">
              Use an example
            </button>
          </div>
          <textarea
            id={`${tool}-in`}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Paste or type your text here."
            className={`${FIELD} min-h-[260px] flex-1 resize-y py-3 leading-relaxed`}
          />
          <div className="mt-1.5 flex justify-between font-display text-[12px]">
            <span className="text-ink-faint">{countWords(input).toLocaleString()} words</span>
            <span className={tooLong ? "text-brand" : "text-ink-faint"}>
              {input.length.toLocaleString()} / {maxChars.toLocaleString()} characters
            </span>
          </div>
          <button
            type="button"
            onClick={run}
            disabled={busy || input.trim().length < 10 || tooLong}
            className="btn-primary mt-3 self-start disabled:cursor-not-allowed disabled:opacity-60"
          >
            {busy ? <Spinner label="Working…" /> : <>{action} <ArrowRight aria-hidden="true" className="h-4 w-4" /></>}
          </button>
        </div>

        <div className="flex flex-col">
          <div className="mb-2 flex items-center justify-between">
            <span className="eyebrow">{outputLabel}</span>
            {output && <CopyButton text={output} />}
          </div>
          {diff ? (
            <div className="paper-ruled min-h-[260px] flex-1 whitespace-pre-wrap rounded-xl border border-line p-4 text-[15px] leading-[28px] text-ink">
              {diff.map((d, i) =>
                d.type === "same" ? (
                  <span key={i}>{d.text}</span>
                ) : d.type === "added" ? (
                  <ins key={i} className="rounded bg-cloud px-0.5 text-cloud-ink no-underline">
                    {d.text}
                  </ins>
                ) : (
                  <del key={i} className="text-ink-faint decoration-brand/60">
                    {d.text}
                  </del>
                ),
              )}
            </div>
          ) : (
            <textarea
              aria-label={outputLabel}
              value={output}
              onChange={(e) => setOutput(e.target.value)}
              placeholder="The result appears here."
              className="paper-ruled min-h-[260px] flex-1 resize-y rounded-xl border border-line p-4 text-[15px] leading-[28px] text-ink outline-none focus:border-primary-500/50"
            />
          )}
          {output && (
            <p className="mt-1.5 font-display text-[12px] text-ink-faint">
              {diff
                ? changes
                  ? `${changes} correction${changes === 1 ? "" : "s"}, highlighted in blue. Removed words are struck through.`
                  : "No mistakes found."
                : `${countWords(output).toLocaleString()} words`}
            </p>
          )}
        </div>
      </div>
      {error && <ErrorNote>{error}</ErrorNote>}
      {output && <ResultUpsell tool={tool} line={upsell} />}
    </div>
  );
}

"use client";

import { useState } from "react";
import { FIELD } from "./shared";

const PACES = [
  { id: "slow", label: "Slow", wpm: 120 },
  { id: "average", label: "Average", wpm: 150 },
  { id: "fast", label: "Fast", wpm: 170 },
] as const;

export const SPEECH_LENGTHS = [1, 2, 3, 5, 7, 10, 15, 20, 30, 45, 60];

function clock(seconds: number) {
  const s = Math.max(0, Math.round(seconds));
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const r = s % 60;
  return h ? `${h} h ${m} min` : m ? `${m} min ${r ? `${r} sec` : ""}`.trim() : `${r} sec`;
}

// Words to speaking time and back, at a chosen pace.
export function SpeechTimeTool() {
  const [mode, setMode] = useState<"text" | "count">("text");
  const [text, setText] = useState("");
  const [count, setCount] = useState("750");
  const [pace, setPace] = useState<number>(150);
  const [targetMinutes, setTargetMinutes] = useState("5");

  const words = mode === "text" ? (text.trim() ? text.trim().split(/\s+/).length : 0) : Math.max(0, Number(count) || 0);
  const seconds = (words / pace) * 60;
  const needed = Math.round((Number(targetMinutes) || 0) * pace);

  return (
    <div className="flex flex-col gap-6">
      <div className="grid gap-5 lg:grid-cols-[1fr_18rem]">
        <div className="flex flex-col gap-3">
          <div role="tablist" className="inline-flex self-start rounded-lg bg-canvas p-1">
            {(
              [
                ["text", "Paste your speech"],
                ["count", "Enter a word count"],
              ] as const
            ).map(([id, label]) => (
              <button
                key={id}
                role="tab"
                type="button"
                aria-selected={mode === id}
                onClick={() => setMode(id)}
                className={`h-9 rounded-md px-3.5 font-display text-[13px] font-semibold ${mode === id ? "key-on" : "text-ink-soft"}`}
              >
                {label}
              </button>
            ))}
          </div>
          {mode === "text" ? (
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              aria-label="Your speech"
              placeholder="Paste your speech, script or presentation notes."
              className={`${FIELD} min-h-[220px] resize-y py-3 leading-relaxed`}
            />
          ) : (
            <label className="flex max-w-xs flex-col gap-1.5">
              <span className="eyebrow">Number of words</span>
              <input type="number" min={0} value={count} onChange={(e) => setCount(e.target.value)} className={`${FIELD} h-12 text-[18px]`} />
            </label>
          )}
        </div>

        <div className="flex flex-col gap-4 self-start rounded-xl bg-canvas p-5">
          <div>
            <span className="eyebrow">Speaking pace</span>
            <div role="radiogroup" aria-label="Speaking pace" className="mt-2 grid grid-cols-3 gap-1 rounded-lg bg-raised p-1">
              {PACES.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  role="radio"
                  aria-checked={pace === p.wpm}
                  onClick={() => setPace(p.wpm)}
                  className={`flex h-12 flex-col items-center justify-center rounded-md font-display text-[12.5px] font-semibold ${pace === p.wpm ? "key-on" : "text-ink-soft"}`}
                >
                  {p.label}
                  <span className="text-[11px] font-normal">{p.wpm} wpm</span>
                </button>
              ))}
            </div>
            <label className="mt-3 flex items-center gap-2 font-display text-[12.5px] text-ink-soft">
              Custom
              <input type="number" min={60} max={250} value={pace} onChange={(e) => setPace(Math.max(1, Number(e.target.value) || 150))} className={`${FIELD} h-9 w-20`} />
              words per minute
            </label>
          </div>
          <div className="border-t border-line pt-4">
            <p className="eyebrow">{words.toLocaleString()} words takes</p>
            <p className="mt-1 font-serif text-[36px] leading-none text-brand">{clock(seconds)}</p>
          </div>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-[18rem_1fr]">
        <div className="rounded-xl bg-canvas p-5">
          <p className="font-display text-[14px] font-semibold text-ink">Words needed for a set time</p>
          <label className="mt-3 flex items-center gap-2 font-display text-[13px] text-ink-soft">
            <input type="number" min={0} step={0.5} value={targetMinutes} onChange={(e) => setTargetMinutes(e.target.value)} className={`${FIELD} h-10 w-24`} />
            minutes
          </label>
          <p className="mt-3 font-display text-[14px] text-ink-soft">
            ≈ <span className="font-serif text-[28px] leading-none text-ink">{needed.toLocaleString()}</span> words at {pace} wpm
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="surface-solid w-full overflow-hidden !rounded-xl text-left font-display text-[13.5px]">
            <caption className="sr-only">How many words for a speech of each length</caption>
            <thead>
              <tr className="bg-canvas text-ink-soft">
                <th scope="col" className="px-4 py-2.5 font-semibold">Speech length</th>
                {PACES.map((p) => (
                  <th key={p.id} scope="col" className="px-4 py-2.5 font-semibold">
                    {p.label} ({p.wpm} wpm)
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {SPEECH_LENGTHS.map((m) => (
                <tr key={m}>
                  <th scope="row" className="px-4 py-2 font-semibold text-ink">
                    {m} minute{m === 1 ? "" : "s"}
                  </th>
                  {PACES.map((p) => (
                    <td key={p.id} className="px-4 py-2 text-ink-soft tabular-nums">
                      {(m * p.wpm).toLocaleString()} words
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

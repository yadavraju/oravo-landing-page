"use client";

import { useMemo, useState } from "react";
import { CopyButton, FIELD } from "./shared";

const STOP = new Set(
  "a an and are as at be but by for from has have he her his i if in into is it its me my not of on or our she so that the their them there they this to was we were what when which who will with you your".split(" "),
);

const LIMITS = [
  { label: "X post", max: 280 },
  { label: "Meta description", max: 160 },
  { label: "Instagram caption", max: 2200 },
  { label: "LinkedIn post", max: 3000 },
];

function minutes(words: number, wpm: number) {
  const s = Math.round((words / wpm) * 60);
  return s < 60 ? `${s} sec` : `${Math.floor(s / 60)} min ${s % 60 ? `${s % 60} sec` : ""}`.trim();
}

export function WordCounterTool() {
  const [text, setText] = useState("");

  const stats = useMemo(() => {
    const trimmed = text.trim();
    const words = trimmed ? trimmed.split(/\s+/).filter((w) => /[\p{L}\p{N}]/u.test(w)) : [];
    const sentences = trimmed ? trimmed.split(/[.!?…]+(?=\s|$)/).filter((s) => s.trim()).length : 0;
    const paragraphs = trimmed ? trimmed.split(/\n\s*\n/).filter((p) => p.trim()).length : 0;
    const freq = new Map<string, number>();
    for (const w of words) {
      const k = w.toLowerCase().replace(/[^\p{L}\p{N}'-]/gu, "");
      if (k.length > 2 && !STOP.has(k)) freq.set(k, (freq.get(k) ?? 0) + 1);
    }
    return {
      words: words.length,
      chars: text.length,
      charsNoSpaces: text.replace(/\s/g, "").length,
      sentences,
      paragraphs,
      avgWord: words.length ? (words.join("").length / words.length).toFixed(1) : "0",
      top: [...freq.entries()].sort((a, b) => b[1] - a[1]).slice(0, 8),
    };
  }, [text]);

  const tiles: [string, string | number][] = [
    ["Words", stats.words.toLocaleString()],
    ["Characters", stats.chars.toLocaleString()],
    ["No spaces", stats.charsNoSpaces.toLocaleString()],
    ["Sentences", stats.sentences.toLocaleString()],
    ["Paragraphs", stats.paragraphs.toLocaleString()],
    ["Reading time", minutes(stats.words, 238)],
    ["Speaking time", minutes(stats.words, 150)],
    ["Avg. word length", stats.avgWord],
  ];

  return (
    <div className="grid gap-5 lg:grid-cols-[1fr_18rem]">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <div className="mb-2 flex items-center justify-between">
            <label htmlFor="wc-in" className="eyebrow">
              Your text
            </label>
            <div className="flex gap-2">
              {text && <CopyButton text={text} />}
              {text && (
                <button type="button" onClick={() => setText("")} className="chip h-9 px-3 font-display text-[13px] font-semibold text-ink-soft">
                  Clear
                </button>
              )}
            </div>
          </div>
          <textarea
            id="wc-in"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type or paste your text. Counts update as you write."
            className={`${FIELD} min-h-[320px] resize-y py-3 text-[15px] leading-relaxed`}
          />
        </div>
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-line shadow-[0_0_0_1px_var(--o-line)] sm:grid-cols-4">
          {tiles.map(([label, value]) => (
            <div key={label} className="bg-raised px-4 py-3.5">
              <dt className="eyebrow">{label}</dt>
              <dd className="mt-1 font-serif text-[24px] leading-tight text-ink tabular-nums">{value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="flex flex-col gap-4 self-start">
        <div className="rounded-xl bg-canvas p-5">
          <p className="eyebrow">Character limits</p>
          <ul className="mt-3 space-y-3">
            {LIMITS.map((l) => {
              const pct = Math.min(100, (stats.chars / l.max) * 100);
              const over = stats.chars > l.max;
              return (
                <li key={l.label}>
                  <div className="flex justify-between font-display text-[13px]">
                    <span className="text-ink">{l.label}</span>
                    <span className={over ? "font-semibold text-brand" : "text-ink-soft"}>
                      {stats.chars.toLocaleString()} / {l.max.toLocaleString()}
                    </span>
                  </div>
                  <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-raised">
                    <div className={`h-full rounded-full ${over ? "bg-brand" : "bg-primary-500"}`} style={{ width: `${pct}%` }} />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        {stats.top.length > 0 && (
          <div className="rounded-xl bg-canvas p-5">
            <p className="eyebrow">Top keywords</p>
            <ul className="mt-3 space-y-1.5">
              {stats.top.map(([word, n]) => (
                <li key={word} className="flex justify-between font-display text-[13.5px]">
                  <span className="text-ink">{word}</span>
                  <span className="text-ink-soft">
                    {n} · {((n / stats.words) * 100).toFixed(1)}%
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
        <p className="font-display text-[12.5px] leading-snug text-ink-faint">
          Writing a lot? Speak it instead: Oravo types about three times faster than a keyboard, in any app.
        </p>
      </div>
    </div>
  );
}

"use client";

import { useMemo, useState } from "react";
import { FIELD } from "./shared";

// Longest phrases first so "you know" wins over a stray "know".
const FILLERS = [
  "you know what i mean",
  "you know",
  "i mean",
  "sort of",
  "kind of",
  "or something",
  "basically",
  "actually",
  "literally",
  "honestly",
  "totally",
  "like",
  "right",
  "okay",
  "so",
  "well",
  "umm",
  "um",
  "uhh",
  "uh",
  "er",
  "erm",
  "ah",
  "hmm",
];

const PATTERN = new RegExp(`\\b(${FILLERS.map((f) => f.replace(/ /g, "\\s+")).join("|")})\\b`, "gi");

const SAMPLE =
  "So, um, I think the main thing is, like, we basically need to ship the update before Friday. You know, the team has been, uh, working on it for a while and, honestly, it's sort of ready. I mean, there are a few bugs but, like, nothing major. Um, so yeah, let's just, you know, get it out.";

export function FillerWordCounterTool() {
  const [text, setText] = useState("");

  const stats = useMemo(() => {
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    const counts = new Map<string, number>();
    const parts: { text: string; filler: boolean }[] = [];
    let last = 0;
    let total = 0;
    for (const m of text.matchAll(PATTERN)) {
      const key = m[0].toLowerCase().replace(/\s+/g, " ");
      counts.set(key, (counts.get(key) ?? 0) + 1);
      total += 1;
      if (m.index! > last) parts.push({ text: text.slice(last, m.index), filler: false });
      parts.push({ text: m[0], filler: true });
      last = m.index! + m[0].length;
    }
    if (last < text.length) parts.push({ text: text.slice(last), filler: false });
    const rate = words ? (total / words) * 100 : 0;
    return { words, total, rate, parts, counts: [...counts.entries()].sort((a, b) => b[1] - a[1]) };
  }, [text]);

  const verdict =
    stats.words < 20 ? "" : stats.rate < 2 ? "Fluent. Listeners will barely notice." : stats.rate < 5 ? "Typical for unscripted speech." : "High. Listeners will notice the fillers.";

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col">
        <div className="mb-2 flex items-baseline justify-between">
          <label htmlFor="filler-in" className="eyebrow">
            Transcript
          </label>
          <button type="button" onClick={() => setText(SAMPLE)} className="font-display text-[12.5px] font-semibold text-primary-500 hover:underline">
            Use an example
          </button>
        </div>
        <textarea
          id="filler-in"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste a transcript of a talk, a call or a voice note."
          className={`${FIELD} min-h-[180px] resize-y py-3 leading-relaxed`}
        />
      </div>

      <dl className="surface-solid grid grid-cols-3 divide-x divide-line">
        {[
          ["Words", stats.words.toLocaleString()],
          ["Fillers", stats.total.toLocaleString()],
          ["Per 100 words", stats.rate.toFixed(1)],
        ].map(([label, value]) => (
          <div key={label} className="px-4 py-4 text-center">
            <dt className="eyebrow">{label}</dt>
            <dd className="mt-1 font-serif text-[28px] leading-none text-ink">{value}</dd>
          </div>
        ))}
      </dl>
      {verdict && <p className="-mt-2 text-center font-display text-[14px] text-ink-soft">{verdict}</p>}

      {stats.total > 0 && (
        <div className="grid gap-5 lg:grid-cols-[15rem_1fr]">
          <ul className="surface-solid divide-y divide-line self-start">
            {stats.counts.map(([word, n]) => (
              <li key={word} className="flex items-center justify-between px-4 py-2.5 font-display text-[14px]">
                <span className="text-ink">{word}</span>
                <span className="font-semibold text-ink-soft">{n}</span>
              </li>
            ))}
          </ul>
          <p className="paper-ruled whitespace-pre-wrap rounded-xl border border-line p-4 text-[15px] leading-[28px] text-ink">
            {stats.parts.map((p, i) =>
              p.filler ? (
                <mark key={i} className="rounded bg-clay px-0.5 text-brand">
                  {p.text}
                </mark>
              ) : (
                <span key={i}>{p.text}</span>
              ),
            )}
          </p>
        </div>
      )}
    </div>
  );
}

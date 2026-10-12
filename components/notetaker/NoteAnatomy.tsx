"use client";

import { useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Reveal } from "@/components/landing/Reveal";
import { Avatar, TimeChip } from "./bits";
import { CLAIMS, SUMMARY, TRANSCRIPT } from "./data";

/*
 * Anatomy of a finished note: the note in the middle, labelled parts either
 * side. Hovering (or focusing) a label lights up its part; on its own the
 * highlight walks down the note while the section is on screen.
 */

const PARTS = [
  { n: 1, title: "Summary", copy: "What happened, in a short paragraph you can paste anywhere." },
  { n: 2, title: "Decisions", copy: "What changed, each one with the moment it was agreed." },
  { n: 3, title: "Risks and open questions", copy: "What could slip, and what nobody answered yet." },
  { n: 4, title: "Action items", copy: "An owner, a due date and the line in the transcript that backs it up." },
  { n: 5, title: "Transcript", copy: "Searchable, with speaker labels and timestamps. The source for everything above." },
];

function Callout({ part, on, onHover, align }: { part: (typeof PARTS)[number]; on: boolean; onHover: (n: number | null) => void; align: "left" | "right" }) {
  return (
    <button
      type="button"
      onMouseEnter={() => onHover(part.n)}
      onMouseLeave={() => onHover(null)}
      onFocus={() => onHover(part.n)}
      onBlur={() => onHover(null)}
      className={`group flex w-full items-start gap-3 rounded-xl p-3 text-left transition-colors ${on ? "bg-raised/80 shadow-[0_0_0_1px_var(--o-line)]" : "hover:bg-raised/50"} ${
        align === "right" ? "lg:flex-row-reverse lg:text-right" : ""
      }`}
    >
      <span
        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg font-display text-[12px] font-bold transition-colors ${
          on ? "bg-brand text-raised" : "bg-raised text-brand ring-1 ring-line"
        }`}
      >
        {part.n}
      </span>
      <span>
        <span className="block font-display text-[15px] font-semibold text-ink">{part.title}</span>
        <span className="mt-1 block text-[13.5px] leading-relaxed text-ink-soft">{part.copy}</span>
      </span>
    </button>
  );
}

function Part({ n, on, children }: { n: number; on: boolean; children: ReactNode }) {
  return (
    <div className={`relative rounded-lg px-3 py-2.5 transition-all duration-300 ${on ? "bg-brand-soft/45 ring-1 ring-brand/30" : ""}`}>
      <span
        className={`absolute -left-3 top-2.5 flex h-5 w-5 items-center justify-center rounded-md font-display text-[10px] font-bold transition-colors ${
          on ? "bg-brand text-raised" : "bg-canvas text-ink-faint ring-1 ring-line"
        }`}
        aria-hidden="true"
      >
        {n}
      </span>
      {children}
    </div>
  );
}

export function NoteAnatomy() {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.35 });
  const [hover, setHover] = useState<number | null>(null);
  const [walk, setWalk] = useState(1);

  useEffect(() => {
    if (hover !== null || !inView || reduceMotion) return;
    const id = setTimeout(() => setWalk((w) => (w % PARTS.length) + 1), 2600);
    return () => clearTimeout(id);
  }, [hover, inView, walk, reduceMotion]);

  const on = hover ?? walk;
  const left = PARTS.filter((p) => p.n % 2 === 1);
  const right = PARTS.filter((p) => p.n % 2 === 0);

  return (
    <div ref={ref} className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_1.25fr_1fr] lg:gap-6">
      <div className="order-2 grid min-w-0 gap-2 lg:order-1">
        {left.map((p, i) => (
          <Reveal key={p.n} delay={0.1 + i * 0.08}>
            <Callout part={p} on={on === p.n} onHover={setHover} align="right" />
          </Reveal>
        ))}
      </div>

      <Reveal className="order-1 min-w-0 lg:order-2" y={24}>
        <div className="paper-ruled relative -rotate-[0.6deg] rounded-2xl px-6 py-5 shadow-[0_0_0_1px_var(--o-line),0_40px_70px_-40px_rgba(51,48,42,0.55)] sm:px-8">
          <div className="flex items-center justify-between">
            <p className="font-serif text-[22px] text-ink">Product launch review</p>
            <span className="font-display text-[11px] text-ink-faint">Tue · 60 min</span>
          </div>
          <div className="mt-3 space-y-2">
            <Part n={1} on={on === 1}>
              <p className="text-[13px] leading-relaxed text-ink-soft">{SUMMARY}</p>
            </Part>
            <Part n={2} on={on === 2}>
              <ul className="space-y-1">
                {CLAIMS.filter((c) => c.kind === "decision").map((c) => (
                  <li key={c.id} className="flex items-start gap-2 text-[13px] text-ink">
                    <span className="flex-1">{c.text}</span>
                    <TimeChip at={c.at} />
                  </li>
                ))}
              </ul>
            </Part>
            <Part n={3} on={on === 3}>
              <ul className="space-y-1">
                {CLAIMS.filter((c) => c.kind === "risk" || c.kind === "question").map((c) => (
                  <li key={c.id} className="flex items-start gap-2 text-[13px] text-ink">
                    <span className="mt-0.5 font-display text-[10px] font-bold uppercase tracking-wider text-ink-faint">{c.kind === "risk" ? "Risk" : "Q"}</span>
                    <span className="flex-1">{c.text}</span>
                    <TimeChip at={c.at} />
                  </li>
                ))}
              </ul>
            </Part>
            <Part n={4} on={on === 4}>
              <ul className="space-y-1.5">
                {CLAIMS.filter((c) => c.kind === "action")
                  .slice(0, 2)
                  .map((c) => (
                    <li key={c.id} className="flex items-center gap-2 text-[13px] text-ink">
                      <span className="h-3.5 w-3.5 shrink-0 rounded-[4px] ring-1 ring-ink/30" aria-hidden="true" />
                      <span className="min-w-0 flex-1 truncate">
                        <span className="font-semibold">{c.owner}</span> · {c.text}
                      </span>
                      <span className="font-display text-[11px] text-ink-faint">{c.due}</span>
                    </li>
                  ))}
              </ul>
            </Part>
            <Part n={5} on={on === 5}>
              <div className="flex items-start gap-2.5">
                <Avatar name={TRANSCRIPT[7].who} size="sm" />
                <p className="text-[12.5px] leading-snug text-ink-soft">
                  <span className="font-semibold text-ink">{TRANSCRIPT[7].who}</span> <span className="font-mono text-[10.5px] text-ink-faint">{TRANSCRIPT[7].at}</span>
                  <br />
                  {TRANSCRIPT[7].text}
                </p>
              </div>
            </Part>
          </div>
        </div>
      </Reveal>

      <div className="order-3 grid min-w-0 gap-2">
        {right.map((p, i) => (
          <Reveal key={p.n} delay={0.14 + i * 0.08}>
            <Callout part={p} on={on === p.n} onHover={setHover} align="left" />
          </Reveal>
        ))}
      </div>
    </div>
  );
}

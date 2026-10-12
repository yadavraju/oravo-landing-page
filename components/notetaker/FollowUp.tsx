"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { Mic } from "lucide-react";
import { useEffect, useRef, useState } from "react";

/*
 * The cross-sell picture: the meeting's action items on one side, and the
 * follow-up email being dictated with Oravo on the other. Loops while visible.
 */

const SPOKEN = "Hi team, quick recap: we're running the Android pilot with all five cohorts. Maya shares the test build Thursday, and Raju reviews the benchmark on Monday.";

export function FollowUp() {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.4 });
  const [chars, setChars] = useState(0);

  useEffect(() => {
    if (reduceMotion) {
      setChars(SPOKEN.length);
      return;
    }
    if (!inView) return;
    const done = chars >= SPOKEN.length;
    const id = setTimeout(() => setChars(done ? 0 : chars + 2), done ? 3200 : 34);
    return () => clearTimeout(id);
  }, [chars, inView, reduceMotion]);

  const speaking = chars > 0 && chars < SPOKEN.length;

  return (
    <div ref={ref} className="relative grid gap-3 sm:grid-cols-[auto_1fr] sm:items-center">
      <div className="rotate-[-2deg] rounded-xl bg-raised p-4 shadow-[0_0_0_1px_var(--o-line),0_18px_36px_-24px_rgba(51,48,42,0.45)]">
        <p className="eyebrow !text-[10px]">From your notes</p>
        <ul className="mt-2 space-y-1.5 whitespace-nowrap font-display text-[12.5px] text-ink">
          <li className="flex gap-2"><span className="mt-[3px] h-3 w-3 shrink-0 rounded-[3px] ring-1 ring-ink/30" />Maya · test build, Thu</li>
          <li className="flex gap-2"><span className="mt-[3px] h-3 w-3 shrink-0 rounded-[3px] ring-1 ring-ink/30" />Raju · benchmark, Mon</li>
          <li className="flex gap-2"><span className="mt-[3px] h-3 w-3 shrink-0 rounded-[3px] ring-1 ring-ink/30" />Aisha · support FAQ, Fri</li>
        </ul>
      </div>

      <div className="overflow-hidden rounded-xl bg-raised shadow-[0_0_0_1px_var(--o-line),0_24px_44px_-26px_rgba(51,48,42,0.5)]">
        <div className="flex items-center justify-between border-b border-line bg-canvas px-3.5 py-2">
          <span className="font-display text-[12px] font-semibold text-ink-soft">New message · Follow-up</span>
          <span className={`inline-flex items-center gap-1.5 rounded-md px-1.5 py-0.5 font-display text-[10.5px] font-semibold ${speaking ? "bg-brand-soft text-brand" : "text-ink-faint"}`}>
            <Mic aria-hidden="true" className="h-3 w-3" />
            {speaking ? "Dictating" : "Oravo Dictation"}
          </span>
        </div>
        <div className="min-h-[132px] p-3.5">
          <p className="text-[13px] leading-relaxed text-ink">
            {SPOKEN.slice(0, chars)}
            {speaking && <span className="o-caret ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] bg-ink" />}
          </p>
        </div>
        <div className="flex h-7 items-center gap-[3px] border-t border-line px-3.5" aria-hidden="true">
          {Array.from({ length: 26 }).map((_, i) => (
            <motion.span
              key={i}
              className="w-[3px] rounded-full bg-brand"
              animate={speaking && !reduceMotion ? { height: [3, 6 + ((i * 7) % 12), 4] } : { height: 3, opacity: 0.35 }}
              transition={{ duration: 0.55 + (i % 4) * 0.1, repeat: speaking ? Infinity : 0, delay: i * 0.02 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

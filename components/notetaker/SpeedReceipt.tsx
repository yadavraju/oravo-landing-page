"use client";

import { animate, motion, useInView, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";

/*
 * The processing receipt: what happens after a one-hour transcript is ready,
 * printed line by line with a running clock that stops at the ~30 second
 * target. It is labelled a target everywhere it appears.
 */

const ROWS = [
  { label: "Transcript ready", note: "one hour, speaker-labelled", at: 0 },
  { label: "Summary", note: "what happened", at: 0.3 },
  { label: "Decisions, risks, open questions", note: "what changed", at: 0.6 },
  { label: "Action items + evidence", note: "what is next", at: 0.9 },
];

export function SpeedReceipt() {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5, once: true });
  const [t, setT] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduceMotion) {
      setT(1);
      return;
    }
    const controls = animate(0, 1, { duration: 3.2, ease: [0.33, 0.1, 0.25, 1], onUpdate: setT });
    return () => controls.stop();
  }, [inView, reduceMotion]);

  const seconds = Math.round(t * 30);

  return (
    <div ref={ref} className="relative mx-auto w-full max-w-[420px]">
      <motion.div
        className="relative rotate-[1.5deg] bg-raised px-6 pb-10 pt-7 text-ink shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)] sm:px-8"
        initial={reduceMotion ? false : { y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.14em] text-ink-faint">
          <span>Processing receipt</span>
          <span>Target</span>
        </div>
        <div className="mt-3 border-t border-dashed border-ink/20" />

        <ul className="mt-4 space-y-3.5">
          {ROWS.map((row) => {
            const done = t >= row.at + 0.08 || (row.at === 0 && t > 0);
            return (
              <li key={row.label} className={`flex items-start gap-3 transition-opacity duration-500 ${done ? "opacity-100" : "opacity-30"}`}>
                <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md ${done ? "bg-[#E9ECDD] text-[#4E6B47]" : "ring-1 ring-line"}`}>
                  {done && <Check aria-hidden="true" className="h-3 w-3" strokeWidth={3} />}
                </span>
                <span className="flex-1">
                  <span className="block font-display text-[14px] font-semibold">{row.label}</span>
                  <span className="block font-mono text-[11.5px] text-ink-faint">{row.note}</span>
                </span>
              </li>
            );
          })}
        </ul>

        <div className="mt-6 border-t border-dashed border-ink/20 pt-5">
          <div className="flex items-end justify-between">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-faint">Summary in about</span>
            <span className="flex items-baseline gap-1.5">
              <span className="font-serif text-[64px] leading-none tracking-[-0.03em] tabular-nums">~{seconds}</span>
              <span className="font-display text-[15px] text-ink-soft">sec</span>
            </span>
          </div>
          <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-canvas ring-1 ring-line">
            <div className="h-full rounded-full bg-brand" style={{ width: `${t * 100}%` }} />
          </div>
          <p className="mt-3 font-mono text-[11px] leading-relaxed text-ink-faint">Target · measured after the transcript is ready · capture time not included</p>
        </div>

        {/* Torn edge */}
        <svg className="absolute -bottom-[9px] left-0 h-[10px] w-full" viewBox="0 0 200 10" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 0 L5 10 L10 0 L15 10 L20 0 L25 10 L30 0 L35 10 L40 0 L45 10 L50 0 L55 10 L60 0 L65 10 L70 0 L75 10 L80 0 L85 10 L90 0 L95 10 L100 0 L105 10 L110 0 L115 10 L120 0 L125 10 L130 0 L135 10 L140 0 L145 10 L150 0 L155 10 L160 0 L165 10 L170 0 L175 10 L180 0 L185 10 L190 0 L195 10 L200 0 Z" fill="var(--o-raised)" />
        </svg>
      </motion.div>
    </div>
  );
}

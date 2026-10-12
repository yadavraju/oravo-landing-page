"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/landing/Reveal";

/*
 * "After you install": three steps on one ruled sheet, with a progress rail
 * that fills step by step while the section is on screen, and a keycap that
 * keeps being pressed on the last step. Settles to the finished state under
 * reduced motion.
 */

const STEPS = [
  {
    title: "Open the installer",
    body: "Run the file you just downloaded and follow the prompts. Your 14-day Pro trial starts as soon as Oravo is installed.",
  },
  {
    title: "Allow microphone access",
    body: "When asked, let Oravo use your microphone so it can hear you. You can pick a specific mic later in Settings.",
  },
  {
    title: "Hold your hotkey and talk",
    body: "Put your cursor in any text box, hold the hotkey, speak, and let go. Your words land as clean, formatted text.",
  },
];

function Keycap({ label, pressed }: { label: string; pressed: boolean }) {
  return (
    <motion.kbd
      className="inline-flex min-w-[2.6rem] items-center justify-center rounded-md border-b-[3px] border-sand-deep bg-raised px-2.5 py-1 font-mono text-[12px] font-semibold text-ink shadow-[0_0_0_1px_var(--o-line)]"
      animate={pressed ? { y: 2, borderBottomWidth: 1 } : { y: 0, borderBottomWidth: 3 }}
      transition={{ duration: 0.12 }}
    >
      {label}
    </motion.kbd>
  );
}

export function InstallSteps() {
  const ref = useRef<HTMLOListElement>(null);
  const inView = useInView(ref, { amount: 0.4 });
  const reduceMotion = useReducedMotion();
  const [step, setStep] = useState(reduceMotion ? STEPS.length : 0);
  const [pressed, setPressed] = useState(false);

  // Walk through the steps once the sheet is on screen, then loop the keypress.
  useEffect(() => {
    if (reduceMotion) {
      setStep(STEPS.length);
      return;
    }
    if (!inView) return;
    const id = setInterval(() => setStep((s) => (s >= STEPS.length ? s : s + 1)), 900);
    return () => clearInterval(id);
  }, [inView, reduceMotion]);

  useEffect(() => {
    if (reduceMotion || !inView || step < STEPS.length) return;
    const id = setInterval(() => setPressed((p) => !p), 1100);
    return () => clearInterval(id);
  }, [inView, reduceMotion, step]);

  return (
    <div className="relative overflow-hidden rounded-2xl bg-raised shadow-[0_0_0_1px_var(--o-line),0_30px_60px_-40px_rgba(51,48,42,0.5)]">
      <ol ref={ref} className="relative divide-y divide-line">
        {/* The rail that fills as each step completes. */}
        <span className="absolute bottom-10 left-[2.35rem] top-10 w-px bg-line sm:left-[2.6rem]" aria-hidden="true" />
        <motion.span
          className="absolute left-[2.35rem] top-10 w-px origin-top bg-brand sm:left-[2.6rem]"
          style={{ height: "calc(100% - 5rem)" }}
          initial={false}
          animate={{ scaleY: Math.min(1, Math.max(0, (step - 1) / (STEPS.length - 1))) }}
          transition={{ duration: reduceMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden="true"
        />
        {STEPS.map((item, i) => {
          const done = step > i;
          return (
            <li key={item.title} className="relative flex gap-5 px-5 py-6 sm:px-7 sm:py-7">
              <span
                className={`relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg font-display text-[13px] font-bold transition-colors duration-500 ${
                  done ? "bg-canvas text-ink ring-1 ring-ink/25" : "bg-raised text-ink-faint ring-1 ring-line"
                }`}
              >
                {done ? <Check aria-hidden="true" className="h-4 w-4" strokeWidth={2.5} /> : i + 1}
              </span>
              <div className="min-w-0">
                <h3 className="font-display text-[16px] font-semibold tracking-[-0.01em] text-ink">{item.title}</h3>
                <p className="mt-1.5 text-[14.5px] leading-relaxed text-ink-soft">{item.body}</p>
                {i === STEPS.length - 1 && (
                  <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 font-display text-[12.5px] text-ink-faint">
                    <span className="flex items-center gap-2">
                      Mac <Keycap label="Fn" pressed={pressed} />
                    </span>
                    <span className="flex items-center gap-2">
                      Windows <Keycap label="Ctrl" pressed={pressed} /> + <Keycap label="Win" pressed={pressed} />
                    </span>
                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ol>
      <Reveal>
        <a
          href="/how-to-use"
          className="group flex items-center justify-between gap-3 border-t border-line bg-canvas/70 px-5 py-4 font-display text-[13.5px] font-semibold text-primary-500 sm:px-7"
        >
          Read the full setup guide
          <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </a>
      </Reveal>
    </div>
  );
}

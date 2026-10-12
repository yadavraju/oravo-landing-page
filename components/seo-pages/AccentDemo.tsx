"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { Caret, typed, useLoopClock } from "./useLoopClock";

/*
 * Hero demo for /voice-typing-for-accents: one sentence spoken with an accent,
 * what a generic dictation tool might hear, and what Oravo writes. The misheard
 * words are illustrative of common vowel and consonant confusions.
 */

type Word = { w: string; heard?: string };

const TAKES: { accent: string; initials: string; words: Word[] }[] = [
  {
    accent: "Indian English",
    initials: "IN",
    words: [{ w: "Can" }, { w: "you" }, { w: "revert", heard: "reward" }, { w: "by" }, { w: "EOD" }, { w: "on" }, { w: "the" }, { w: "vendor" }, { w: "contract?", heard: "contact" }],
  },
  {
    accent: "Spanish English",
    initials: "ES",
    words: [{ w: "I" }, { w: "think" }, { w: "we" }, { w: "should" }, { w: "ship", heard: "sheep" }, { w: "the" }, { w: "new" }, { w: "feature" }, { w: "this" }, { w: "week." }],
  },
  {
    accent: "Chinese English",
    initials: "ZH",
    words: [{ w: "Let's" }, { w: "review" }, { w: "the" }, { w: "third", heard: "tired" }, { w: "quarter" }, { w: "results", heard: "resorts" }, { w: "on" }, { w: "Friday." }],
  },
  {
    accent: "Arabic English",
    initials: "AR",
    words: [{ w: "Please" }, { w: "park", heard: "bark" }, { w: "the" }, { w: "van" }, { w: "near" }, { w: "the" }, { w: "back" }, { w: "gate." }],
  },
];

const SLOT = 6500;

export function AccentDemo() {
  const { ref, t } = useLoopClock(SLOT * TAKES.length);
  const index = Math.floor(t / SLOT) % TAKES.length;
  const local = t % SLOT;
  const take = TAKES[index];
  const listening = local < 1800;
  const genericShown = Math.min(take.words.length, Math.max(0, Math.floor((local - 1900) / 110)));
  const oravoText = take.words.map((x) => x.w).join(" ");
  const oravoOut = typed(oravoText, local, 3300, 22);

  return (
    <figure ref={ref} className="relative">
      <div className="frame-dotted absolute -inset-4 hidden sm:block" aria-hidden="true" />
      <div className="relative overflow-hidden rounded-2xl bg-raised shadow-[0_0_0_1px_var(--o-line),0_30px_60px_-30px_rgba(51,48,42,0.45)]" aria-hidden="true">
        {/* Speaker */}
        <div className="flex items-center gap-3 border-b border-line bg-canvas px-5 py-4 sm:px-6">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sand font-display text-[11px] font-bold text-ink ring-1 ring-sand-deep">{take.initials}</span>
          <div className="min-w-0 flex-1">
            <p className="font-display text-[13px] font-semibold text-ink">{take.accent}</p>
            <p className="font-display text-[11px] text-ink-faint">{listening ? "Speaking naturally…" : "Done speaking"}</p>
          </div>
          <span className="flex h-7 items-center gap-[2px]">
            {Array.from({ length: 16 }).map((_, i) => (
              <motion.span
                key={i}
                className="w-[2.5px] rounded-full bg-brand"
                animate={listening ? { height: [3, 6 + ((i * 7) % 18), 4] } : { height: 3 }}
                transition={{ duration: 0.65, repeat: listening ? Infinity : 0, delay: i * 0.04 }}
              />
            ))}
          </span>
        </div>

        <div className="space-y-3 p-5 sm:p-6">
          {/* Generic */}
          <div className="rounded-xl bg-canvas p-4 ring-1 ring-line">
            <div className="flex items-center justify-between">
              <span className="eyebrow">Generic dictation heard</span>
              <span className="flex h-5 w-5 items-center justify-center rounded-md bg-paper text-ink-faint ring-1 ring-line">
                <X className="h-3 w-3" strokeWidth={2.5} />
              </span>
            </div>
            <p className="mt-2 min-h-[48px] font-mono text-[13px] leading-relaxed text-ink-faint">
              {take.words.slice(0, genericShown).map((x, i) => (
                <span key={i}>
                  {x.heard ? <span className="rounded bg-brand-soft px-1 text-ink line-through decoration-brand/70">{x.heard}</span> : x.w.replace(/[.?]$/, "").toLowerCase()}{" "}
                </span>
              ))}
            </p>
          </div>

          {/* Oravo */}
          <div className="rounded-xl bg-raised p-4 shadow-[0_0_0_1px_var(--o-line),inset_3px_0_0_var(--o-accent)]">
            <div className="flex items-center justify-between">
              <span className="eyebrow">Oravo wrote</span>
              <span className="flex h-5 w-5 items-center justify-center rounded-md bg-cloud text-cloud-ink">
                <Check className="h-3 w-3" strokeWidth={3} />
              </span>
            </div>
            <p className="mt-2 min-h-[52px] text-[16px] font-medium leading-relaxed text-ink">
              {oravoOut}
              <Caret show={oravoOut.length > 0 && oravoOut.length < oravoText.length} />
            </p>
          </div>

          <div className="flex items-center justify-between pt-1">
            <span className="flex gap-1.5">
              {TAKES.map((x, i) => (
                <span key={x.accent} className={`h-1.5 rounded-full transition-all duration-300 ${i === index ? "w-6 bg-cloud-ink" : "w-1.5 bg-line"}`} />
              ))}
            </span>
            <span className="font-display text-[11px] text-ink-faint">Illustrative example</span>
          </div>
        </div>
      </div>
      <figcaption className="sr-only">
        Illustrative demo: sentences spoken with Indian, Spanish, Chinese and Arabic accents, showing words a generic dictation tool might mishear and the correct text Oravo writes.
      </figcaption>
    </figure>
  );
}

/* ------------------------------------------------------------------------ */
/* Context awareness: two words that sound alike, and the sentence decides. */
/* ------------------------------------------------------------------------ */

const PAIRS = [
  { before: "Can you", after: "the package today?", right: "ship", wrong: "sheep" },
  { before: "I'll", after: "the office at six.", right: "leave", wrong: "live" },
  { before: "My calendar is", after: "this week.", right: "full", wrong: "fool" },
];

export function ContextDemo() {
  const SLOT = 3800;
  const { ref, t } = useLoopClock(SLOT * PAIRS.length);
  const i = Math.floor(t / SLOT) % PAIRS.length;
  const local = t % SLOT;
  const p = PAIRS[i];
  const decided = local > 1500;
  const options = i % 2 ? [p.right, p.wrong] : [p.wrong, p.right];

  return (
    <div ref={ref} className="frame-dotted bg-paper/50 p-6 sm:p-8" aria-hidden="true">
      <p className="eyebrow">Sounds alike in your accent</p>
      <p className="mt-5 font-serif text-[24px] leading-[1.7] text-ink sm:text-[28px]">
        {p.before}{" "}
        <span className="inline-flex items-baseline gap-1.5">
          {options.map((opt) => {
            const isRight = opt === p.right;
            const struck = decided && !isRight;
            return (
              <motion.span
                key={opt + i}
                className={`rounded-md px-2 transition-colors duration-300 ${
                  isRight && decided ? "bg-cloud text-cloud-ink ring-1 ring-cloud-line" : struck ? "text-ink-faint line-through decoration-brand" : "bg-raised text-ink-soft ring-1 ring-line"
                }`}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: struck ? 0.45 : 1, y: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                {opt}
              </motion.span>
            );
          })}
        </span>{" "}
        {p.after}
      </p>
      <p className="mt-5 font-display text-[12.5px] text-ink-faint">{decided ? "Context picked the word you meant." : "Two candidates…"}</p>
    </div>
  );
}

"use client";

import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { Check, Hash, MousePointer2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { MacWindow } from "../landing/MacWindow";

/*
 * The four-step desktop walkthrough as one animated scene. A single clock
 * drives every element so the steps can never drift apart: the cursor finds
 * the text box, the hotkey goes down, you speak, you let go and the polished
 * text lands. Click a step to jump to it. The clock runs only while the stage
 * is on screen; under reduced motion each step shows its finished frame and
 * nothing advances on its own.
 */

export const WALKTHROUGH_STEPS = [
  { title: "Put your cursor in a text box", body: "Any app: Slack, Teams, Google Docs, Notion, email." },
  { title: "Press and hold your hotkey", body: "Fn on Mac, Ctrl + Win on Windows." },
  { title: "Speak freely", body: "Talk the way you would to a colleague. Ums and restarts are fine." },
  { title: "Let go to see your formatted transcript", body: "Oravo pastes clean, punctuated text where your cursor is." },
];

const SLOT = 3600;
const PERIOD = SLOT * WALKTHROUGH_STEPS.length;
const SAID = "so um can we push the standup to ten tomorrow and i'll share the notes after";
const TYPED = "Can we push the stand-up to 10 tomorrow? I'll share the notes after.";

const typed = (text: string, t: number, start: number, msPerChar: number) =>
  text.slice(0, Math.max(0, Math.min(text.length, Math.floor((t - start) / msPerChar))));

function useWalkthroughClock() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.35 });
  const reduceMotion = useReducedMotion();
  const [t, setT] = useState(0);
  const offset = useRef(0);
  const start = useRef(0);

  useEffect(() => {
    if (reduceMotion || !inView) return;
    start.current = performance.now() - offset.current;
    const id = setInterval(() => {
      const next = (performance.now() - start.current) % PERIOD;
      offset.current = next;
      setT(next);
    }, 40);
    return () => clearInterval(id);
  }, [inView, reduceMotion]);

  const jump = (step: number) => {
    // Under reduced motion, show the finished frame of the chosen step.
    const next = reduceMotion ? step * SLOT + SLOT - 1 : step * SLOT;
    offset.current = next;
    start.current = performance.now() - next;
    setT(next);
  };

  // Reduced motion with no interaction yet: show the final frame.
  const shown = reduceMotion && t === 0 ? PERIOD - 1 : t;
  return { ref, t: shown, jump, reduceMotion };
}

function Caret({ className = "bg-ink" }: { className?: string }) {
  return <span className={`o-caret ml-px inline-block h-[1.05em] w-[2px] translate-y-[2px] ${className}`} />;
}

function Key({ label, down }: { label: string; down: boolean }) {
  return (
    <motion.kbd
      className="inline-flex min-w-[2.4rem] items-center justify-center rounded-md border-b-[3px] border-sand-deep bg-raised px-2 py-1 font-mono text-[11px] font-semibold text-ink shadow-[0_0_0_1px_var(--o-line)]"
      animate={down ? { y: 2, borderBottomWidth: 1, backgroundColor: "var(--o-accent-soft)" } : { y: 0, borderBottomWidth: 3, backgroundColor: "var(--o-raised)" }}
      transition={{ duration: 0.14 }}
    >
      {label}
    </motion.kbd>
  );
}

function Pill({ state }: { state: "hidden" | "listening" | "polishing" | "done" }) {
  return (
    <AnimatePresence>
      {state !== "hidden" && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 6 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-2 rounded-lg bg-cloud px-3 py-2 text-cloud-ink ring-1 ring-cloud-line shadow-[0_12px_26px_-12px_rgba(51,48,42,0.7)]"
        >
          <span className="flex h-4 items-center gap-[2px]" aria-hidden="true">
            {Array.from({ length: 9 }).map((_, i) => (
              <motion.span
                key={i}
                className="w-[2px] rounded-full bg-brand-soft"
                animate={state === "listening" ? { height: [3, 6 + ((i * 7) % 9), 4] } : { height: 3 }}
                transition={{ duration: 0.7 + (i % 3) * 0.15, repeat: state === "listening" ? Infinity : 0, delay: i * 0.05 }}
              />
            ))}
          </span>
          <span className="font-display text-[11.5px] font-semibold">
            {state === "listening" ? "Listening…" : state === "polishing" ? "Polishing…" : "Typed by Oravo"}
          </span>
          {state === "done" && <Check aria-hidden="true" className="h-3.5 w-3.5 text-brand-soft" />}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Message({ name, initial, lines, tone }: { name: string; initial: string; lines: string; tone: string }) {
  return (
    <div className="flex gap-2.5">
      <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md font-display text-[11px] font-bold ${tone}`}>{initial}</span>
      <div className="min-w-0">
        <p className="font-display text-[12px] font-semibold text-ink">
          {name} <span className="ml-1 font-normal text-ink-faint">9:41</span>
        </p>
        <p className="text-[12.5px] leading-snug text-ink-soft">{lines}</p>
      </div>
    </div>
  );
}

function Stage({ t }: { t: number }) {
  const step = Math.floor(t / SLOT) % WALKTHROUGH_STEPS.length;
  const local = t % SLOT;
  const focused = step > 0 || local > 1500;
  const keyDown = step === 1 ? local > 900 : step === 2;
  const pill = step === 0 || (step === 1 && local < 1300) ? "hidden" : step === 1 || step === 2 ? "listening" : local < 900 ? "polishing" : "done";
  const said = step === 2 ? typed(SAID, local, 200, 34) : step === 3 ? SAID : "";
  const out = step === 3 ? typed(TYPED, local, 900, 24) : "";

  // Cursor path: from the corner to the composer, then it clicks.
  const cursorAt = step === 0 ? Math.min(1, local / 1300) : 1;
  const clicking = step === 0 && local > 1300 && local < 1700;

  return (
    <MacWindow app="slack" title="team-updates" subtitle="Northwind" className="h-full" bodyClassName="flex flex-col p-0">

      <div className="flex flex-1 flex-col gap-3.5 p-4 sm:p-5">
        <Message name="Maya" initial="M" tone="bg-sand text-ink-soft" lines="Morning! Are we still on for the stand-up at 9?" />
        <Message name="Daniel" initial="D" tone="bg-clay text-ink-soft" lines="I might be a few minutes late, train delays." />

        <div className="flex-1" />

        {/* What you said, shown while you speak. */}
        <div className="min-h-[52px]">
          <AnimatePresence>
            {said && step === 2 && (
              <motion.div
                key="said"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6, filter: "blur(4px)" }}
                className="rounded-lg bg-canvas px-3 py-2 text-[12px] italic leading-snug text-ink-soft ring-1 ring-line"
              >
                <span className="mr-1.5 font-display text-[10px] font-semibold uppercase not-italic tracking-[0.12em] text-ink-faint">You said</span>
                {said}
                <Caret className="bg-ink-faint" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="flex items-end justify-between gap-3">
          <Pill state={pill} />
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <Key label="Fn" down={keyDown} />
            <span className="font-display text-[10px] text-ink-faint">or</span>
            <Key label="Ctrl" down={keyDown} />
            <Key label="Win" down={keyDown} />
          </div>
        </div>

        {/* The composer: where your cursor is. */}
        <div
          className={`relative min-h-[64px] rounded-lg bg-paper px-3.5 py-3 text-[13.5px] leading-relaxed text-ink transition-shadow duration-300 ${
            focused ? "shadow-[0_0_0_1.5px_var(--o-ink)]" : "shadow-[0_0_0_1px_var(--o-line)]"
          }`}
        >
          {out ? (
            <>
              {out}
              {out.length < TYPED.length && <Caret />}
            </>
          ) : (
            <span className="text-ink-faint">
              {focused && <Caret />}
              {!focused && "Message #team-updates"}
            </span>
          )}
          {step === 3 && out.length >= TYPED.length && (
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute -top-2.5 right-3 inline-flex items-center gap-1 rounded-md bg-cloud px-1.5 py-0.5 font-display text-[10px] font-semibold text-cloud-ink ring-1 ring-cloud-line"
            >
              <Check aria-hidden="true" className="h-3 w-3" strokeWidth={3} /> Pasted
            </motion.span>
          )}
        </div>
      </div>

      {/* The pointer. */}
      <motion.div
        className="pointer-events-none absolute z-10"
        initial={false}
        animate={{ left: `${88 - cursorAt * 46}%`, top: `${18 + cursorAt * 66}%`, opacity: step === 0 || step === 1 ? 1 : 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        aria-hidden="true"
      >
        <span className="relative block">
          {clicking && (
            <motion.span
              className="absolute -left-3 -top-3 h-8 w-8 rounded-full border-2 border-brand"
              initial={{ scale: 0.3, opacity: 1 }}
              animate={{ scale: 1.4, opacity: 0 }}
              transition={{ duration: 0.45 }}
            />
          )}
          <MousePointer2 className="h-5 w-5 fill-ink text-paper drop-shadow-[0_2px_3px_rgba(51,48,42,0.35)]" />
        </span>
      </motion.div>
    </MacWindow>
  );
}

const SHORT = ["Cursor", "Hotkey", "Speak", "Let go"];

export function Walkthrough() {
  const { ref, t, jump, reduceMotion } = useWalkthroughClock();
  const active = Math.floor(t / SLOT) % WALKTHROUGH_STEPS.length;
  const progress = (t % SLOT) / SLOT;
  const step = WALKTHROUGH_STEPS[active];

  return (
    <div ref={ref} className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
      <div>
        {/* Compact segmented switch: small rectangular keys, one per step. */}
        <div role="tablist" aria-label="Walkthrough steps" className="inline-flex max-w-full gap-1 overflow-x-auto rounded-lg bg-canvas p-1 ring-1 ring-line [scrollbar-width:none]">
          {SHORT.map((label, i) => {
            const on = i === active;
            return (
              <button
                key={label}
                type="button"
                role="tab"
                aria-selected={on}
                aria-label={`Step ${i + 1}: ${WALKTHROUGH_STEPS[i].title}`}
                onClick={() => jump(i)}
                className={`relative shrink-0 overflow-hidden rounded-md px-3 py-1.5 font-display text-[12.5px] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/40 ${
                  on ? "bg-raised text-ink shadow-[0_0_0_1px_var(--o-line),0_2px_6px_-2px_rgba(51,48,42,0.2)]" : "text-ink-faint hover:text-ink-soft"
                }`}
              >
                <span className="tabular-nums text-ink-faint">{i + 1}</span> {label}
                {on && !reduceMotion && (
                  <span className="absolute inset-x-2 bottom-0.5 h-[2px] overflow-hidden rounded-full bg-line" aria-hidden="true">
                    <span className="block h-full origin-left bg-brand" style={{ transform: `scaleX(${progress})` }} />
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <div className="relative mt-7 min-h-[8.5rem]" aria-live="polite">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="eyebrow">
                Step {active + 1} of {WALKTHROUGH_STEPS.length}
              </p>
              <h3 className="display-3 mt-3 text-ink">{step.title}</h3>
              <p className="mt-3 max-w-md text-[15.5px] leading-relaxed text-ink-soft">{step.body}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* All four, as a quiet checklist, so nothing hides behind the switch. */}
        <ol className="mt-4 grid gap-2 border-t border-line pt-5">
          {WALKTHROUGH_STEPS.map((item, i) => (
            <li key={item.title} className={`flex items-center gap-3 font-display text-[13.5px] transition-colors ${i === active ? "text-ink" : "text-ink-faint"}`}>
              <span className={`h-1.5 w-1.5 shrink-0 rounded-full transition-colors ${i === active ? "bg-brand" : i < active ? "bg-ink/40" : "bg-ink/15"}`} aria-hidden="true" />
              {item.title}
            </li>
          ))}
        </ol>
      </div>

      <div className="frame-dotted bg-canvas/50 p-3 sm:p-5">
        <div className="h-[420px] sm:h-[440px]">
          <Stage t={t} />
        </div>
      </div>
    </div>
  );
}

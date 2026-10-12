"use client";

import { motion, useInView, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { MousePointer2 } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Reveal } from "@/components/landing/Reveal";

/*
 * The illustrated parts of /how-to-use: the detailed steps on a rail that
 * fills as you scroll, and the two other ways to start a dictation. Loops run
 * only on screen and hold still under reduced motion.
 */

/* A keycap that can be held down. */
export function Kbd({ children, down = false, size = "md" }: { children: ReactNode; down?: boolean; size?: "sm" | "md" | "lg" }) {
  const sizes = {
    sm: "min-w-[1.9rem] px-1.5 py-0.5 text-[11px]",
    md: "min-w-[2.4rem] px-2 py-1 text-[12px]",
    lg: "min-w-[3.6rem] px-3.5 py-2.5 text-[15px]",
  };
  return (
    <motion.kbd
      className={`inline-flex items-center justify-center rounded-md border-b-[3px] border-sand-deep bg-raised font-mono font-semibold text-ink shadow-[0_0_0_1px_var(--o-line)] ${sizes[size]}`}
      animate={down ? { y: 2, borderBottomWidth: 1, backgroundColor: "var(--o-accent-soft)" } : { y: 0, borderBottomWidth: 3, backgroundColor: "var(--o-raised)" }}
      transition={{ duration: 0.14 }}
    >
      {children}
    </motion.kbd>
  );
}

/* Toggles while the element is on screen; false under reduced motion. */
function useTicker(ms: number) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.4 });
  const reduceMotion = useReducedMotion();
  const [on, setOn] = useState(false);
  useEffect(() => {
    if (reduceMotion || !inView) return;
    const id = setInterval(() => setOn((v) => !v), ms);
    return () => clearInterval(id);
  }, [inView, reduceMotion, ms]);
  return { ref, on };
}

/* ------------------------------------------------------------------------ */
/* Step illustrations                                                        */
/* ------------------------------------------------------------------------ */

const APPS = ["Slack", "Microsoft Teams", "Google Docs", "Notion", "Gmail", "Linear"];

function AppsArt() {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.4 });
  const [i, setI] = useState(0);
  useEffect(() => {
    if (reduceMotion || !inView) return;
    const id = setInterval(() => setI((v) => (v + 1) % APPS.length), 1400);
    return () => clearInterval(id);
  }, [inView, reduceMotion]);
  return (
    <div ref={ref} className="grid grid-cols-2 gap-2 sm:grid-cols-3">
      {APPS.map((app, n) => {
        const on = n === i;
        return (
          <div
            key={app}
            className={`relative flex items-center gap-2 rounded-lg px-2.5 py-2 transition-all duration-500 ${
              on ? "bg-raised shadow-[0_0_0_1.5px_var(--o-ink)]" : "bg-raised/60 shadow-[0_0_0_1px_var(--o-line)]"
            }`}
          >
            <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md font-display text-[11px] font-bold transition-colors duration-500 ${on ? "bg-cloud text-cloud-ink ring-1 ring-cloud-line" : "bg-canvas text-ink-faint"}`}>
              {app.charAt(0)}
            </span>
            <span className="truncate font-display text-[12px] font-semibold text-ink-soft">{app}</span>
            {on && <span className="o-caret ml-auto h-3.5 w-[2px] shrink-0 bg-ink" aria-hidden="true" />}
          </div>
        );
      })}
    </div>
  );
}

function HotkeyArt() {
  const { ref, on } = useTicker(1200);
  return (
    <div ref={ref} className="grid gap-3 sm:grid-cols-2">
      <div className="rounded-xl bg-raised/70 p-4 shadow-[0_0_0_1px_var(--o-line)]">
        <p className="eyebrow !text-[10px]">Mac default</p>
        <div className="mt-3 flex items-center gap-2">
          <Kbd size="lg" down={on}>
            Fn
          </Kbd>
        </div>
      </div>
      <div className="rounded-xl bg-raised/70 p-4 shadow-[0_0_0_1px_var(--o-line)]">
        <p className="eyebrow !text-[10px]">Windows default</p>
        <div className="mt-3 flex items-center gap-2">
          <Kbd size="lg" down={on}>
            Ctrl
          </Kbd>
          <span className="font-display text-ink-faint">+</span>
          <Kbd size="lg" down={on}>
            Win
          </Kbd>
        </div>
      </div>
      <div className="flex items-center gap-3 rounded-xl bg-cloud px-4 py-3 text-cloud-ink ring-1 ring-cloud-line sm:col-span-2">
        <span className="flex h-4 items-center gap-[3px]" aria-hidden="true">
          {Array.from({ length: 14 }).map((_, n) => (
            <motion.span
              key={n}
              className="w-[2px] rounded-full bg-brand-soft"
              animate={on ? { height: [3, 6 + ((n * 5) % 10), 4] } : { height: 3 }}
              transition={{ duration: 0.6 + (n % 3) * 0.15, repeat: on ? Infinity : 0, delay: n * 0.04 }}
            />
          ))}
        </span>
        <span className="font-display text-[12px] font-semibold">{on ? "Ping! Listening…" : "Hold the hotkey to start"}</span>
      </div>
    </div>
  );
}

function ReleaseArt() {
  return (
    <div className="relative">
      <div className="rounded-xl bg-raised p-4 shadow-[0_0_0_1px_var(--o-line)]">
        <p className="eyebrow !text-[10px]">Pasted where your cursor was</p>
        <p className="mt-2 text-[13.5px] leading-relaxed text-ink">
          Thanks for the update! Let&apos;s review the draft on Thursday and send it to the client on Friday.
        </p>
      </div>
      <div className="paper-ruled relative mt-4 rotate-[-1.5deg] rounded-xl p-4 shadow-[0_0_0_1px_var(--o-line),0_14px_28px_-20px_rgba(51,48,42,0.45)] sm:ml-10">
        <span className="absolute -top-2 left-6 h-4 w-12 rotate-[-4deg] rounded-sm bg-sand-deep/80" aria-hidden="true" />
        <p className="text-[13.5px] leading-relaxed text-ink-soft">
          <strong className="font-semibold text-ink">P.S.</strong> If you press <Kbd size="sm">Esc</Kbd>, your transcript is cancelled. Don&apos;t worry, you can still find it on the
          Recent Activity page.
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------------ */
/* Detailed steps on a scroll-filled rail                                     */
/* ------------------------------------------------------------------------ */

const DETAILED = [
  {
    title: "Put your cursor in a text box",
    body: "For Oravo to know where you want to transcribe, your cursor must be in a text box. This can be in any application on your computer: Slack, Microsoft Teams, Google Docs, Notion, you name it. Just look for the flashing cursor.",
    art: <AppsArt />,
  },
  {
    title: "Press your hotkey",
    body: "Once you hear Oravo's signature ping or see the bars start moving, you can start dictating.",
    art: <HotkeyArt />,
  },
  {
    title: "Let go of your hotkey",
    body: "Let go of the hotkey to paste the text into the text box you're in. Ta-da, Oravo should have pasted your dictation. If not, please let us know.",
    art: <ReleaseArt />,
  },
];

export function DetailedSteps() {
  const ref = useRef<HTMLOListElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <ol ref={ref} className="relative">
      <span className="absolute bottom-6 left-[1.2rem] top-6 w-px bg-ink/10 sm:left-[1.45rem]" aria-hidden="true" />
      <motion.span
        className="absolute bottom-6 left-[1.2rem] top-6 w-px origin-top bg-brand sm:left-[1.45rem]"
        style={{ scaleY: reduceMotion ? 1 : fill }}
        aria-hidden="true"
      />
      {DETAILED.map((step, i) => (
        <li key={step.title} className="relative grid gap-6 pb-14 pl-14 last:pb-0 sm:pl-20 lg:grid-cols-[1fr_1.05fr] lg:gap-12">
          <Reveal className="absolute left-0 top-0">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-raised font-serif text-[20px] text-ink shadow-[0_0_0_1px_var(--o-line),0_8px_18px_-10px_rgba(51,48,42,0.35)] sm:h-12 sm:w-12 sm:text-[24px]">
              {i + 1}
            </span>
          </Reveal>
          <Reveal>
            <h3 className="display-3 pt-1 text-ink sm:pt-2">{step.title}</h3>
            <p className="mt-3 max-w-md text-[15px] leading-relaxed text-ink-soft">{step.body}</p>
          </Reveal>
          <Reveal delay={0.12}>{step.art}</Reveal>
        </li>
      ))}
    </ol>
  );
}

/* ------------------------------------------------------------------------ */
/* Other ways to start a dictation                                            */
/* ------------------------------------------------------------------------ */

function BarArt() {
  const { ref, on } = useTicker(1600);
  return (
    <div ref={ref} className="relative flex h-40 items-end justify-center overflow-hidden rounded-xl bg-canvas ring-1 ring-line">
      {/* A desktop with the Oravo bar centred at the bottom. */}
      <div className="absolute inset-x-6 top-5 space-y-2" aria-hidden="true">
        <span className="block h-2 w-2/3 rounded-sm bg-ink/10" />
        <span className="block h-2 w-1/2 rounded-sm bg-ink/10" />
        <span className="block h-2 w-3/5 rounded-sm bg-ink/10" />
      </div>
      <motion.div
        className="relative mb-5 flex items-center gap-2 rounded-lg bg-cloud px-3 py-1.5 text-cloud-ink ring-1 ring-cloud-line"
        animate={{ scale: on ? 1.06 : 1 }}
        transition={{ duration: 0.25 }}
      >
        <span className="flex h-3 items-center gap-[2px]" aria-hidden="true">
          {Array.from({ length: 7 }).map((_, n) => (
            <motion.span
              key={n}
              className="w-[2px] rounded-full bg-brand-soft"
              animate={on ? { height: [2, 5 + ((n * 5) % 7), 3] } : { height: 2 }}
              transition={{ duration: 0.6, repeat: on ? Infinity : 0, delay: n * 0.05 }}
            />
          ))}
        </span>
        <span className="font-display text-[11px] font-semibold">{on ? "Listening…" : "Oravo"}</span>
      </motion.div>
      <motion.div
        className="pointer-events-none absolute"
        animate={on ? { left: "54%", bottom: "14%" } : { left: "72%", bottom: "48%" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        aria-hidden="true"
      >
        <MousePointer2 className="h-5 w-5 fill-ink text-paper drop-shadow-[0_2px_3px_rgba(51,48,42,0.35)]" />
      </motion.div>
    </div>
  );
}

function HandsFreeArt() {
  const { ref, on } = useTicker(1500);
  return (
    <div ref={ref} className="flex h-40 flex-col justify-center gap-4 rounded-xl bg-canvas px-5 ring-1 ring-line">
      <div className="flex flex-wrap items-center gap-2">
        <span className="w-16 font-display text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-faint">Mac</span>
        <Kbd down={on}>Fn</Kbd>
        <span className="text-ink-faint">+</span>
        <Kbd down={on}>Space</Kbd>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <span className="w-16 font-display text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-faint">Windows</span>
        <Kbd down={on}>Ctrl</Kbd>
        <span className="text-ink-faint">+</span>
        <Kbd down={on}>Win</Kbd>
        <span className="text-ink-faint">+</span>
        <Kbd down={on}>Space</Kbd>
      </div>
    </div>
  );
}

export function StartOptions() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      <Reveal className="h-full">
        <article className="flex h-full flex-col rounded-2xl bg-raised p-5 shadow-[0_0_0_1px_var(--o-line),0_18px_40px_-30px_rgba(51,48,42,0.4)] sm:p-6">
          <BarArt />
          <span className="mt-5 font-display text-xs font-semibold text-brand">01</span>
          <h3 className="display-3 mt-1 text-ink">Click the Oravo bar</h3>
          <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">Click on your Oravo bar in the center of your screen to start a dictation with your mouse.</p>
        </article>
      </Reveal>
      <Reveal delay={0.08} className="h-full">
        <article className="flex h-full flex-col rounded-2xl bg-raised p-5 shadow-[0_0_0_1px_var(--o-line),0_18px_40px_-30px_rgba(51,48,42,0.4)] sm:p-6">
          <HandsFreeArt />
          <span className="mt-5 font-display text-xs font-semibold text-brand">02</span>
          <h3 className="display-3 mt-1 text-ink">Go hands-free</h3>
          <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">
            Press <Kbd size="sm">Fn</Kbd> + <Kbd size="sm">Space</Kbd> (Mac) or <Kbd size="sm">Ctrl</Kbd> + <Kbd size="sm">Win</Kbd> + <Kbd size="sm">Space</Kbd> (Windows) to
            go hands-free, then <Kbd size="sm">Fn</Kbd> or <Kbd size="sm">Ctrl</Kbd> to paste.
          </p>
        </article>
      </Reveal>
    </div>
  );
}

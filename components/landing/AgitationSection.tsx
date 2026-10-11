"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Reveal, RevealWords } from "./Reveal";

// The same message, rewritten over and over. Each draft types in, hesitates,
// and is deleted, which is the pain this section names.
const DRAFTS = [
  "Hi, I am writing for inform you that",
  "Hello, I wanted to let you know about",
  "Hi Sarah, just a small update regarding the",
  "Hi Sarah, quick update on the timeline —",
];

const PAINS = [
  {
    title: "Rewriting one message four times",
    body: "You know what you mean. Finding words that sound “native” is what takes the time.",
  },
  {
    title: "Juggling translator, grammar checker, and Slack",
    body: "Copy, paste, fix, paste again. Every message has to go through three tools before you can send it.",
  },
  {
    title: "Staying quiet when you have something to say",
    body: "You skip the thread or keep the reply short because writing it properly would take too long.",
  },
];

function useRewritingDraft(active: boolean) {
  const [draft, setDraft] = useState(0);
  const [count, setCount] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!active) return;
    const text = DRAFTS[draft];
    let t: ReturnType<typeof setTimeout>;
    if (!deleting && count < text.length) {
      t = setTimeout(() => setCount((c) => c + 1), 55 + Math.random() * 70);
    } else if (!deleting) {
      t = setTimeout(() => setDeleting(true), 1300);
    } else if (count > 0) {
      t = setTimeout(() => setCount((c) => c - 1), 18);
    } else {
      t = setTimeout(() => {
        setDeleting(false);
        setDraft((d) => (d + 1) % DRAFTS.length);
      }, 400);
    }
    return () => clearTimeout(t);
  }, [active, draft, count, deleting]);

  return { text: DRAFTS[draft].slice(0, count), draft };
}

function useElapsed(active: boolean, startSeconds: number) {
  const [seconds, setSeconds] = useState(startSeconds);
  useEffect(() => {
    if (!active) return;
    const id = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, [active]);
  const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");
  return { label: `${mm}:${ss}`, seconds };
}

function Clock({ seconds, animate }: { seconds: number; animate: boolean }) {
  // The minute hand advances a full turn every 60 s so the time loss is visible.
  // Cumulative angle, so the hand never spins backwards when a minute rolls over.
  const minuteDeg = seconds * 6;
  const hourDeg = (seconds / 12) * 6;
  return (
    <svg viewBox="0 0 120 120" className="h-28 w-28 sm:h-32 sm:w-32" aria-hidden="true">
      <defs>
        <linearGradient id="clock-rim" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0.95" />
          <stop offset="1" stopColor="#fff" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="56" fill="rgba(255,255,255,0.55)" stroke="url(#clock-rim)" strokeWidth="2" />
      {Array.from({ length: 12 }).map((_, i) => (
        <line
          key={i}
          x1="60"
          y1="10"
          x2="60"
          y2={i % 3 === 0 ? 18 : 15}
          stroke="#2b2824"
          strokeOpacity={i % 3 === 0 ? 0.55 : 0.25}
          strokeWidth={i % 3 === 0 ? 2.5 : 1.5}
          strokeLinecap="round"
          transform={`rotate(${i * 30} 60 60)`}
        />
      ))}
      {/* Elapsed-time wedge */}
      <motion.circle
        cx="60"
        cy="60"
        r="30"
        fill="none"
        stroke="#f2661c"
        strokeOpacity="0.18"
        strokeWidth="60"
        strokeDasharray={`${2 * Math.PI * 30}`}
        animate={{ strokeDashoffset: 2 * Math.PI * 30 * (1 - (seconds % 60) / 60) }}
        transition={{ duration: animate ? 0.9 : 0, ease: "linear" }}
        transform="rotate(-90 60 60)"
      />
      <line x1="60" y1="60" x2="60" y2="36" stroke="#2b2824" strokeWidth="4" strokeLinecap="round" transform={`rotate(${hourDeg} 60 60)`} />
      <line
        x1="60"
        y1="60"
        x2="60"
        y2="22"
        stroke="#f2661c"
        strokeWidth="2.5"
        strokeLinecap="round"
        style={{
          transform: `rotate(${minuteDeg}deg)`,
          transformOrigin: "60px 60px",
          transition: animate ? "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)" : "none",
        }}
      />
      <circle cx="60" cy="60" r="4" fill="#2b2824" />
    </svg>
  );
}

export default function AgitationSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.35 });
  const reduceMotion = useReducedMotion();
  const active = inView && !reduceMotion;

  const { text } = useRewritingDraft(active);
  const elapsed = useElapsed(active, 14 * 60 + 32);

  return (
    <section id="the-real-problem" aria-labelledby="agitation-heading" className="relative w-full px-4 sm:px-6 py-20 sm:py-28">
      <div className="mx-auto grid max-w-[1120px] items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        <div className="flex flex-col gap-6">
          <Reveal>
            <p className="eyebrow">The real problem</p>
          </Reveal>
          <h2 id="agitation-heading" className="display-2 text-ink">
            <RevealWords text="Your ideas are fast. Your English typing is slow." />
          </h2>
          <Reveal delay={0.15}>
            <p className="subtitle max-w-[540px]">
              You think in seconds, in your own language. Then you sit in front of a blinking cursor,
              rewriting one Slack message until it sounds right. The idea took a moment. The English
              took twenty minutes.
            </p>
          </Reveal>

          <ul className="mt-2 grid gap-3">
            {PAINS.map((pain, i) => (
              <Reveal as="li" key={pain.title} delay={0.2 + i * 0.08}>
                <div className="glass glass-rim rounded-2xl px-5 py-4 flex gap-4">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#ffe3d1] font-display text-xs font-bold text-[#b4532a]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-display text-[15px] font-semibold text-ink">{pain.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-ink-soft">{pain.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal delay={0.1}>
          <div ref={ref} className="glass-strong glass-rim relative overflow-hidden rounded-[32px] p-6 sm:p-8">
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#ffc8a6] opacity-60 blur-3xl" aria-hidden="true" />
            <div className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-[#d8cbff] opacity-60 blur-3xl" aria-hidden="true" />

            <div className="relative flex items-center justify-between gap-6">
              <div>
                <p className="eyebrow">Time on this message</p>
                <p className="mt-2 font-display text-5xl sm:text-6xl font-semibold tabular-nums tracking-tight text-ink" aria-label="Fourteen minutes and counting">
                  {elapsed.label}
                </p>
                <p className="mt-2 text-sm text-ink-faint">Draft #4 · still not sent</p>
              </div>
              <Clock seconds={elapsed.seconds} animate={active} />
            </div>

            <div className="relative mt-8 rounded-2xl border border-black/[0.06] bg-white/80 p-5 shadow-[0_1px_0_#fff_inset]">
              <div className="mb-3 flex items-center gap-2 text-xs text-ink-faint">
                <span className="font-semibold text-ink-soft">To:</span> sarah@client.com
                <span className="ml-auto rounded-full bg-black/[0.04] px-2 py-0.5">Re: Project timeline</span>
              </div>
              <p className="min-h-[56px] text-lg leading-relaxed text-ink" aria-hidden="true">
                {reduceMotion ? DRAFTS[DRAFTS.length - 1] : text}
                <span className="o-caret ml-0.5 inline-block h-[1.2em] w-[2px] translate-y-[3px] bg-ink" />
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Grammar check", "Translate", "Rephrase"].map((tool) => (
                  <span key={tool} className="rounded-full border border-black/[0.06] bg-[#f7f5f2] px-3 py-1 text-xs font-medium text-ink-soft">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

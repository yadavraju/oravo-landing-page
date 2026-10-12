"use client";

import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowRight, Check, FileText, Mic, Play, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Doodle } from "./Doodle";
import { Parallax } from "./Parallax";
import { Reveal, RevealWords } from "./Reveal";
import { VideoTutorial } from "./VideoTutorial";

/* ======================================================================== */
/* Dictation: the desktop tutorial in the warm player.                      */
/* ======================================================================== */

const DICTATION_STEPS = [
  { title: "Press your hotkey", body: "Fn on Mac, Ctrl + Win on Windows, in any app with a text field." },
  { title: "Speak naturally", body: "In your accent, or in your own language. Fillers and false starts are fine." },
  { title: "Polished text lands", body: "Grammar fixed, filler removed, typed where your cursor is." },
];

function DictationTutorial() {
  return (
    <div className="grid items-center gap-6 lg:min-h-[500px] lg:grid-cols-[1.5fr_0.62fr] lg:gap-8">
      <VideoTutorial note="Watch it once, then try it in any app." />
      <ol className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
        {DICTATION_STEPS.map((step, i) => (
          <li key={step.title} className="rounded-xl bg-[var(--t-panel)] p-4 ring-1 ring-[var(--t-line)]">
            <span className="font-serif text-[26px] leading-none text-[var(--t-accent)]">0{i + 1}</span>
            <p className="mt-2 font-display text-[14.5px] font-semibold text-ink">{step.title}</p>
            <p className="mt-1 text-[13px] leading-relaxed text-ink-soft">{step.body}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

/* ======================================================================== */

const ROUGH = ["pricing → push to Q3?", "android pilot, 5 cohorts ok", "maya – test build thu", "benchmark before any claims!!"];

const ENHANCED = {
  summary:
    "The team agreed to run the Android pilot with five accent cohorts, moved the pricing change to Q3, and will hold every public performance claim until the benchmark report is reviewed.",
  decisions: [
    { text: "Run the Android pilot with the five approved accent cohorts", at: "08:12" },
    { text: "Move the pricing change to Q3", at: "21:40" },
  ],
  actions: [
    { owner: "Maya", text: "Share the final test build", due: "Thu", at: "34:05" },
    { owner: "Raju", text: "Review the benchmark report before launch copy", due: "Mon", at: "51:18" },
  ],
};

type NotePhase = "meeting" | "processing" | "ready";

function NotetakerTry() {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.4 });
  const [phase, setPhase] = useState<NotePhase>("meeting");
  const [typed, setTyped] = useState(0);
  const [clock, setClock] = useState(0);
  const total = ROUGH.join("\n").length;

  // The rough notes type themselves in, like someone jotting during a call.
  useEffect(() => {
    if (!inView || phase !== "meeting" || typed >= total) return;
    const id = setTimeout(() => setTyped((c) => c + 1), reduceMotion ? 0 : 45);
    return () => clearTimeout(id);
  }, [inView, phase, typed, total, reduceMotion]);

  useEffect(() => {
    if (phase !== "processing") return;
    setClock(0);
    const started = performance.now();
    const id = setInterval(() => {
      const s = (performance.now() - started) / 1000;
      setClock(s);
      if (s >= 1.6) {
        clearInterval(id);
        setPhase("ready");
      }
    }, 50);
    return () => clearInterval(id);
  }, [phase]);

  const roughText = ROUGH.join("\n").slice(0, typed);

  return (
    <div ref={ref} className="grid gap-6 lg:min-h-[500px] lg:grid-cols-[0.8fr_1.2fr] lg:gap-8">
      <div className="flex flex-col">
        <div className="flex items-center justify-between">
          <p className="eyebrow">During the meeting · your notes</p>
          <span className="inline-flex items-center gap-1.5 font-display text-[11.5px] font-semibold text-[var(--t-accent)]">
            <span className={`h-2 w-2 rounded-full bg-[var(--t-accent)] ${phase === "meeting" ? "animate-pulse" : "opacity-40"}`} />
            {phase === "meeting" ? "Transcribing" : "Ended"}
          </span>
        </div>
        <div className="paper-ruled relative mt-3 min-h-[260px] flex-1 rounded-2xl p-5 ring-1 ring-[var(--t-line)] shadow-[0_24px_44px_-28px_var(--t-shadow)]">
          <p className="font-display text-[11.5px] font-semibold text-ink-faint">Product launch review · 60 min</p>
          <p className="mt-3 whitespace-pre-line font-mono text-[14px] leading-[28px] text-ink">
            {roughText}
            {phase === "meeting" && <span className="o-caret ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] bg-ink" />}
          </p>
        </div>
        <button
          type="button"
          onClick={() => (phase === "ready" ? (setPhase("meeting"), setTyped(0)) : setPhase("processing"))}
          disabled={phase === "processing"}
          className="mt-4 inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-[var(--t-accent)] font-display text-[15px] font-semibold text-white shadow-[0_10px_22px_-12px_var(--t-shadow)] transition-transform hover:-translate-y-px disabled:opacity-70"
        >
          {phase === "ready" ? (
            <>
              <Play aria-hidden="true" className="h-4 w-4" /> Replay the meeting
            </>
          ) : (
            <>
              <Sparkles aria-hidden="true" className="h-4 w-4" /> {phase === "processing" ? "Writing your notes…" : "End meeting"}
            </>
          )}
        </button>
      </div>

      <div className="flex flex-col overflow-hidden rounded-2xl bg-raised shadow-[0_0_0_1px_var(--t-line),0_24px_44px_-26px_var(--t-shadow)]">
        <div className="flex items-center justify-between border-b border-[var(--t-line)] bg-[var(--t-panel)] px-4 py-2.5">
          <span className="font-display text-[12px] font-semibold text-ink-soft">Oravo notes</span>
          <span className="font-display text-[11.5px] tabular-nums text-ink-faint">
            {phase === "processing" ? `Summarising… ${clock.toFixed(1)}s` : phase === "ready" ? "Ready · linked to transcript" : "Waiting for the meeting to end"}
          </span>
        </div>
        <div className="relative min-h-[300px] flex-1 p-5">
          {phase !== "ready" ? (
            <div className="space-y-3" aria-hidden="true">
              {[96, 88, 72, 90, 60].map((w, i) => (
                <motion.div
                  key={i}
                  className="h-3 rounded bg-[var(--t-panel)]"
                  style={{ width: `${w}%` }}
                  animate={phase === "processing" ? { opacity: [0.35, 1, 0.35] } : { opacity: 0.5 }}
                  transition={{ duration: 0.9, repeat: phase === "processing" ? Infinity : 0, delay: i * 0.08 }}
                />
              ))}
              {phase === "meeting" && (
                <p className="pt-4 text-center font-display text-[13px] text-ink-faint">Press “End meeting” to turn your notes into a summary.</p>
              )}
            </div>
          ) : (
            <div className="space-y-5">
              <motion.div initial={reduceMotion ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
                <p className="eyebrow">Summary</p>
                <p className="mt-2 text-[14.5px] leading-relaxed text-ink">{ENHANCED.summary}</p>
              </motion.div>
              <motion.div initial={reduceMotion ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
                <p className="eyebrow">Decisions</p>
                <ul className="mt-2 space-y-1.5">
                  {ENHANCED.decisions.map((d) => (
                    <li key={d.text} className="flex items-start gap-2 text-[14px] text-ink">
                      <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[var(--t-accent)]" />
                      <span className="flex-1">{d.text}</span>
                      <span className="shrink-0 rounded bg-[var(--t-panel)] px-1.5 py-0.5 font-mono text-[11px] text-[var(--t-deep)] ring-1 ring-[var(--t-line)]">▶ {d.at}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div initial={reduceMotion ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                <p className="eyebrow">Action items</p>
                <ul className="mt-2 divide-y divide-[var(--t-line)] rounded-lg ring-1 ring-[var(--t-line)]">
                  {ENHANCED.actions.map((a) => (
                    <li key={a.text} className="flex items-center gap-3 px-3 py-2.5 text-[13.5px]">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[var(--t-panel)] font-display text-[11px] font-bold text-[var(--t-deep)]">{a.owner[0]}</span>
                      <span className="flex-1 text-ink">
                        <span className="font-semibold">{a.owner}</span> · {a.text}
                      </span>
                      <span className="font-display text-[11.5px] text-ink-faint">Due {a.due}</span>
                      <span className="hidden rounded bg-[var(--t-panel)] px-1.5 py-0.5 font-mono text-[11px] text-[var(--t-deep)] ring-1 ring-[var(--t-line)] sm:inline">▶ {a.at}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ======================================================================== */

// Each product has its own theme. The stage repaints when you switch.
const THEMES = {
  dictation: {
    "--t-bg": "#f6e4d6",
    "--t-panel": "#fbeee3",
    "--t-line": "#ecd2bf",
    "--t-accent": "#c4572f",
    "--t-deep": "#7a3519",
    "--t-shadow": "rgba(122,53,25,0.35)",
  },
  notetaker: {
    "--t-bg": "#e6eadb",
    "--t-panel": "#eff2e6",
    "--t-line": "#d5dcc4",
    "--t-accent": "#4e6b47",
    "--t-deep": "#2f4430",
    "--t-shadow": "rgba(47,68,48,0.32)",
  },
} as const;

const PRODUCTS = [
  { id: "dictation", icon: Mic, doodle: "mic", name: "Dictation", line: "Speak in any app. Send polished English.", href: "/download", cta: "Download Dictation" },
  { id: "notetaker", icon: FileText, doodle: "notebook", name: "Notetaker", line: "Your meeting, turned into decisions and next steps.", href: "/notetaker", cta: "Explore Notetaker" },
] as const;

export default function ProductDuo() {
  const [active, setActive] = useState<(typeof PRODUCTS)[number]["id"]>("dictation");
  const product = PRODUCTS.find((p) => p.id === active)!;
  const theme = THEMES[active] as unknown as React.CSSProperties;

  return (
    <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8">
      <div className="mx-auto flex max-w-[760px] flex-col items-center text-center">
        <Parallax speed={18} className="mb-4">
          <Doodle name="mic" className="w-32 sm:w-36" />
        </Parallax>
        <Reveal><p className="eyebrow">Two ways to stop typing</p></Reveal>
        <h2 className="display-2 mt-3 text-ink">
          <RevealWords text="Try both, right here." />
        </h2>
        <Reveal delay={0.12}>
          <p className="subtitle mt-4 max-w-xl">Dictation writes what you say, in any app. Notetaker writes up the meeting you were just in.</p>
        </Reveal>
      </div>

      {/* Product switch: two compact keys. */}
      <Reveal delay={0.1} className="mt-10 flex justify-center">
        <div role="tablist" aria-label="Oravo products" className="inline-flex items-center gap-1 rounded-xl bg-raised/70 p-1 ring-1 ring-line">
          {PRODUCTS.map((p) => {
            const selected = p.id === active;
            return (
              <button
                key={p.id}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls={`${p.id}-panel`}
                onClick={() => setActive(p.id)}
                className="relative inline-flex h-10 items-center gap-2 rounded-lg px-4 font-display text-[14px] font-semibold"
              >
                {selected && (
                  <motion.span layoutId="product-key" className="absolute inset-0 rounded-lg bg-cloud ring-1 ring-cloud-line" transition={{ type: "spring", stiffness: 420, damping: 34 }} />
                )}
                <p.icon aria-hidden="true" className={`relative h-4 w-4 ${selected ? "text-cloud-ink" : "text-ink-faint"}`} />
                <span className={`relative ${selected ? "text-cloud-ink" : "text-ink-soft"}`}>{p.name}</span>
              </button>
            );
          })}
        </div>
      </Reveal>
      <Reveal delay={0.12}>
        <p className="mt-3 text-center font-display text-[13.5px] text-ink-soft">{product.line}</p>
      </Reveal>

      <Reveal delay={0.15} className="mt-6">
        <motion.div
          style={theme}
          className="relative overflow-hidden rounded-[28px] bg-[var(--t-bg)] p-4 transition-colors duration-500 sm:p-8 lg:p-10"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-60"
            aria-hidden="true"
            style={{ backgroundImage: "radial-gradient(rgba(51,48,42,0.09) 1px, transparent 1px)", backgroundSize: "20px 20px" }}
          />
          <div className="pointer-events-none absolute inset-3 rounded-[22px] border-[1.5px] border-dashed border-[var(--t-line)]" aria-hidden="true" />
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                id={`${active}-panel`}
                role="tabpanel"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                {active === "dictation" ? <DictationTutorial /> : <NotetakerTry />}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href={product.href} className="btn-neutral">
            {product.cta}
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </a>
          {active === "notetaker" && (
            <p className="max-w-sm text-center font-display text-[12px] text-ink-faint sm:text-left">
              Sample meeting. Summary target: about 30 seconds after the transcript is ready.
            </p>
          )}
        </div>
      </Reveal>
    </div>
  );
}

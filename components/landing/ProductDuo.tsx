"use client";

import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowRight, Check, FileText, Mic, Play, Sparkles } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Doodle } from "./Doodle";
import { Parallax } from "./Parallax";
import { Reveal, RevealWords } from "./Reveal";

/* ======================================================================== */
/* Dictation: hold to speak a sample, release to polish.                    */
/* ======================================================================== */

const VOICES = [
  {
    id: "zh",
    label: "Mandarin accent",
    raw: "please help me to check the contract, i think the price have some problem, can we discuss tomorrow morning",
    polished: "Could you take a look at the contract? I think there's an issue with the pricing. Can we discuss it tomorrow morning?",
  },
  {
    id: "ar",
    label: "Arabic accent",
    raw: "i want to make the meeting with the team for discuss the new design, maybe wednesday is good for everybody",
    polished: "I'd like to set up a meeting with the team to discuss the new design. Would Wednesday work for everyone?",
  },
  {
    id: "fr",
    label: "Speaking French",
    raw: "peux-tu dire à paul que la présentation est prête et que je l'envoie ce soir",
    polished: "Could you let Paul know the presentation is ready? I'll send it over tonight.",
  },
];

type DictPhase = "ready" | "listening" | "polishing" | "done";

function DictationTry() {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5, once: true });
  const [voice, setVoice] = useState(0);
  const [phase, setPhase] = useState<DictPhase>("ready");
  const [words, setWords] = useState(0);
  const [chars, setChars] = useState(0);
  const holding = useRef(false);
  const autoplayed = useRef(false);
  const v = VOICES[voice];
  const rawWords = v.raw.split(" ");

  const start = useCallback(() => {
    holding.current = true;
    setWords(0);
    setChars(0);
    setPhase("listening");
  }, []);
  const stop = useCallback(() => {
    if (!holding.current) return;
    holding.current = false;
    setPhase((p) => (p === "listening" ? "polishing" : p));
  }, []);

  // Words arrive while the button is held; the sample ends on its own too.
  useEffect(() => {
    if (phase !== "listening") return;
    if (words >= rawWords.length) {
      holding.current = false;
      setPhase("polishing");
      return;
    }
    const id = setTimeout(() => setWords((w) => w + 1), 120);
    return () => clearTimeout(id);
  }, [phase, words, rawWords.length]);

  useEffect(() => {
    if (phase !== "polishing") return;
    const id = setTimeout(() => setPhase("done"), 900);
    return () => clearTimeout(id);
  }, [phase]);

  useEffect(() => {
    if (phase !== "done" || chars >= v.polished.length) return;
    const id = setTimeout(() => setChars((c) => Math.min(c + 2, v.polished.length)), reduceMotion ? 0 : 18);
    return () => clearTimeout(id);
  }, [phase, chars, v.polished.length, reduceMotion]);

  // Play the first sample once on its own, so the panel is never empty.
  useEffect(() => {
    if (!inView || autoplayed.current) return;
    autoplayed.current = true;
    const id = setTimeout(() => {
      start();
      holding.current = false; // let it run to the end of the sample
    }, 600);
    return () => clearTimeout(id);
  }, [inView, start]);

  // Space bar works like the hotkey.
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.code !== "Space" || e.repeat || !ref.current?.contains(document.activeElement)) return;
      e.preventDefault();
      start();
    };
    const up = (e: KeyboardEvent) => {
      if (e.code === "Space") stop();
    };
    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);
    return () => {
      window.removeEventListener("keydown", down);
      window.removeEventListener("keyup", up);
    };
  }, [start, stop]);

  const listening = phase === "listening";
  const shownRaw = rawWords.slice(0, words).join(" ");

  return (
    <div ref={ref} className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8">
      <div className="flex flex-col">
        <p className="eyebrow">Try it · pick a voice</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {VOICES.map((item, i) => (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                setVoice(i);
                setPhase("ready");
                setWords(0);
                setChars(0);
              }}
              className={`rounded-lg px-3 py-2 font-display text-[13px] font-semibold ring-1 transition-colors ${
                i === voice ? "bg-primary-500 text-white ring-primary-500" : "bg-raised text-ink-soft ring-line hover:text-ink"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="mt-8 flex flex-1 flex-col items-center justify-center gap-4 rounded-xl bg-canvas/70 px-5 py-8 ring-1 ring-line">
          <button
            type="button"
            onPointerDown={(e) => {
              e.preventDefault();
              start();
            }}
            onPointerUp={stop}
            onPointerLeave={stop}
            aria-label="Hold to speak the sample"
            className="group relative flex h-24 w-24 select-none items-center justify-center rounded-2xl bg-primary-500 text-white shadow-[0_14px_30px_-10px_rgba(15,106,158,0.6)] transition-transform active:scale-95"
          >
            {listening && !reduceMotion && (
              <>
                <span className="absolute inset-0 animate-ping rounded-2xl bg-primary-500/30" />
                <span className="absolute -inset-3 rounded-[22px] border-2 border-dashed border-primary-500/40" style={{ animation: "o-spin 6s linear infinite" }} />
              </>
            )}
            <Mic aria-hidden="true" className="relative h-9 w-9" />
          </button>
          <p className="text-center font-display text-[13px] text-ink-soft">
            {listening ? "Listening… let go when you're done" : phase === "polishing" ? "Polishing…" : "Hold to speak (or press Space)"}
          </p>
          <div className="flex h-8 items-center gap-[3px]" aria-hidden="true">
            {Array.from({ length: 24 }).map((_, i) => (
              <motion.span
                key={i}
                className="w-[3px] rounded-full bg-brand"
                animate={listening ? { height: [4, 8 + ((i * 11) % 20), 6] } : { height: 4, opacity: 0.4 }}
                transition={{ duration: 0.6 + (i % 4) * 0.12, repeat: listening ? Infinity : 0, delay: i * 0.03 }}
              />
            ))}
          </div>
          <p className="text-center font-display text-[11.5px] text-ink-faint">Plays a recorded sample. No microphone needed.</p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="min-h-[110px] rounded-xl bg-raised p-4 ring-1 ring-line">
          <p className="eyebrow">What you said · {v.label}</p>
          <p className="mt-2 text-[15px] italic leading-relaxed text-ink-soft">
            {phase === "ready" ? <span className="text-ink-faint">Hold the button to start…</span> : `“${shownRaw}${words >= rawWords.length ? "”" : ""}`}
            {listening && <span className="o-caret ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] bg-ink-faint" />}
          </p>
        </div>

        <div className="flex flex-1 flex-col overflow-hidden rounded-xl bg-raised shadow-[0_0_0_1px_var(--o-line),0_20px_40px_-24px_rgba(51,48,42,0.35)]">
          <div className="flex items-center gap-2 border-b border-line bg-canvas px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-2 font-display text-[12px] font-semibold text-ink-soft">Gmail</span>
            <span className="text-[12px] text-ink-faint">— Reply to client</span>
          </div>
          <div className="relative min-h-[170px] flex-1 p-5">
            <p className="text-[15.5px] leading-relaxed text-ink">
              {phase === "done" ? v.polished.slice(0, chars) : null}
              {phase === "done" && chars < v.polished.length && <span className="o-caret ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] bg-primary-500" />}
            </p>
            {phase === "polishing" && (
              <div className="space-y-2" aria-hidden="true">
                {[92, 78, 64].map((w) => (
                  <motion.div key={w} className="h-3 rounded bg-canvas" style={{ width: `${w}%` }} animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 0.9, repeat: Infinity }} />
                ))}
              </div>
            )}
            <AnimatePresence>
              {phase === "done" && chars >= v.polished.length && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-4 flex flex-wrap gap-2"
                >
                  {["Grammar fixed", "Filler removed", "Tone: professional"].map((chip) => (
                    <span key={chip} className="inline-flex items-center gap-1 rounded-md bg-primary-soft px-2 py-1 font-display text-[11.5px] font-semibold text-primary-500">
                      <Check aria-hidden="true" className="h-3 w-3" />
                      {chip}
                    </span>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ======================================================================== */
/* Notetaker: your rough notes, enhanced when the meeting ends.             */
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
    <div ref={ref} className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-8">
      <div className="flex flex-col">
        <div className="flex items-center justify-between">
          <p className="eyebrow">During the meeting · your notes</p>
          <span className="inline-flex items-center gap-1.5 font-display text-[11.5px] font-semibold text-brand">
            <span className={`h-2 w-2 rounded-full bg-brand ${phase === "meeting" ? "animate-pulse" : "opacity-40"}`} />
            {phase === "meeting" ? "Transcribing" : "Ended"}
          </span>
        </div>
        <div className="paper-ruled relative mt-3 min-h-[220px] flex-1 rounded-xl p-5 ring-1 ring-line">
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
          className="btn-primary mt-4 w-full"
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

      <div className="flex flex-col overflow-hidden rounded-xl bg-raised shadow-[0_0_0_1px_var(--o-line),0_20px_40px_-24px_rgba(51,48,42,0.35)]">
        <div className="flex items-center justify-between border-b border-line bg-canvas px-4 py-2.5">
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
                  className="h-3 rounded bg-canvas"
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
                      <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-primary-500" />
                      <span className="flex-1">{d.text}</span>
                      <span className="shrink-0 rounded bg-canvas px-1.5 py-0.5 font-mono text-[11px] text-ink-soft ring-1 ring-line">▶ {d.at}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div initial={reduceMotion ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                <p className="eyebrow">Action items</p>
                <ul className="mt-2 divide-y divide-line rounded-lg ring-1 ring-line">
                  {ENHANCED.actions.map((a) => (
                    <li key={a.text} className="flex items-center gap-3 px-3 py-2.5 text-[13.5px]">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-brand-soft font-display text-[11px] font-bold text-brand">{a.owner[0]}</span>
                      <span className="flex-1 text-ink">
                        <span className="font-semibold">{a.owner}</span> · {a.text}
                      </span>
                      <span className="font-display text-[11.5px] text-ink-faint">Due {a.due}</span>
                      <span className="hidden rounded bg-canvas px-1.5 py-0.5 font-mono text-[11px] text-ink-soft ring-1 ring-line sm:inline">▶ {a.at}</span>
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

const PRODUCTS = [
  { id: "dictation", icon: Mic, name: "Dictation", line: "Speak in any app. Send polished English.", href: "/download", cta: "Download Dictation" },
  { id: "notetaker", icon: FileText, name: "Notetaker", line: "Your meeting, turned into decisions and next steps.", href: "/notetaker", cta: "Explore Notetaker" },
] as const;

export default function ProductDuo() {
  const [active, setActive] = useState<(typeof PRODUCTS)[number]["id"]>("dictation");
  const product = PRODUCTS.find((p) => p.id === active)!;

  return (
    <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
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

      <Reveal delay={0.1} className="mt-10">
        <div role="tablist" aria-label="Oravo products" className="mx-auto grid max-w-2xl grid-cols-2 gap-2 rounded-xl bg-canvas p-1.5 ring-1 ring-line">
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
                className="relative rounded-lg px-4 py-3 text-left"
              >
                {selected && (
                  <motion.span layoutId="product-tab" className="absolute inset-0 rounded-lg bg-raised shadow-[0_0_0_1px_var(--o-line),0_6px_16px_-8px_rgba(51,48,42,0.25)]" transition={{ type: "spring", stiffness: 380, damping: 34 }} />
                )}
                <span className="relative flex items-center gap-2.5">
                  <span className={`flex h-8 w-8 items-center justify-center rounded-lg ${selected ? "bg-primary-500 text-white" : "bg-raised text-ink-soft ring-1 ring-line"}`}>
                    <p.icon aria-hidden="true" className="h-4 w-4" />
                  </span>
                  <span className="min-w-0">
                    <span className={`block font-display text-[14.5px] font-semibold ${selected ? "text-ink" : "text-ink-soft"}`}>{p.name}</span>
                    <span className="hidden truncate font-display text-[12px] text-ink-faint sm:block">{p.line}</span>
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </Reveal>

      <Reveal delay={0.15} className="mt-8">
        <div className="frame-dotted bg-paper/70 p-4 sm:p-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              id={`${active}-panel`}
              role="tabpanel"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              {active === "dictation" ? <DictationTry /> : <NotetakerTry />}
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href={product.href} className="btn-primary">
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

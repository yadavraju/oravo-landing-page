"use client";

import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowLeftRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Doodle } from "./Doodle";
import { Parallax } from "./Parallax";
import { Reveal, RevealWords } from "./Reveal";

type Pair = {
  id: string;
  native: string;
  from: string;
  to: string;
  input: string;
  output: string;
  app: string;
  rtl?: boolean;
  reverse?: boolean;
};

// Real work sentences, not "hello, how are you": the point is the message
// you would actually send.
const PAIRS: Pair[] = [
  { id: "es", native: "Español", from: "Spanish", to: "English", app: "Email", input: "Dile a María que terminé el diseño y se lo envío en una hora.", output: "Hi María, I've finished the design and will send it over within the hour." },
  { id: "hi", native: "हिन्दी", from: "Hindi", to: "English", app: "Slack", input: "क्लाइंट को बता दो कि रिपोर्ट कल सुबह तक भेज देंगे।", output: "Please let the client know we'll send the report by tomorrow morning." },
  { id: "pt", native: "Português", from: "Portuguese", to: "English", app: "Teams", input: "Podemos remarcar a reunião para quinta? Tive um imprevisto.", output: "Could we move the meeting to Thursday? Something unexpected came up." },
  { id: "zh", native: "中文", from: "Mandarin", to: "English", app: "Email", input: "我们下周一之前会把报价单发给你们。", output: "We'll send you the quote before next Monday." },
  { id: "ar", native: "العربية", from: "Arabic", to: "English", app: "WhatsApp", input: "سأرسل لك العقد المعدّل بعد الظهر.", output: "I'll send you the revised contract this afternoon.", rtl: true },
  { id: "rev", native: "English → Español", from: "English", to: "Spanish", app: "WhatsApp", input: "Tell them I'm running ten minutes late.", output: "Diles que voy diez minutos tarde.", reverse: true },
];

const SLOT = 5200;

export default function TranslationShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.3 });
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [t, setT] = useState(0);

  useEffect(() => {
    if (reduceMotion) {
      setT(SLOT);
      return;
    }
    if (!inView) return;
    const started = performance.now();
    setT(0);
    const id = setInterval(() => {
      const elapsed = performance.now() - started;
      if (elapsed >= SLOT) {
        setIndex((i) => (i + 1) % PAIRS.length);
      } else {
        setT(elapsed);
      }
    }, 40);
    return () => clearInterval(id);
  }, [index, inView, reduceMotion]);

  const pair = PAIRS[index];
  const inChars = Math.floor(Math.max(0, t - 250) / 38);
  const input = reduceMotion ? pair.input : pair.input.slice(0, inChars);
  const inputDone = input.length >= pair.input.length;
  const outStart = 250 + pair.input.length * 38 + 500;
  const output = reduceMotion ? pair.output : pair.output.slice(0, Math.floor(Math.max(0, t - outStart) / 22));
  const polishing = inputDone && output.length === 0;

  return (
    <div ref={ref} className="mx-auto grid w-full max-w-6xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
      <div>
        <Parallax speed={18} className="mb-4">
          <Doodle name="globe" className="w-32 sm:w-36" />
        </Parallax>
        <Reveal><p className="eyebrow">Real-time translation</p></Reveal>
        <h2 id="translation-heading" className="display-2 mt-3 text-ink">
          <RevealWords text="Think in your language. Send it in English." />
        </h2>
        <Reveal delay={0.12}>
          <p className="subtitle mt-4 max-w-md">
            Speak Spanish, Hindi, Portuguese, or any of 60+ languages. Oravo writes fluent, context-aware
            English, and works in reverse when you need it to.
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <div role="tablist" aria-label="Example languages" className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-3">
            {PAIRS.map((p, i) => {
              const active = i === index;
              return (
                <button
                  key={p.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setIndex(i)}
                  className={`relative overflow-hidden rounded-lg px-3 py-2.5 text-left ring-1 transition-colors ${
                    active ? "bg-raised ring-primary-500/40" : "bg-raised/60 ring-line hover:bg-raised"
                  } ${p.reverse ? "col-span-2 sm:col-span-1" : ""}`}
                >
                  <span className={`block font-display text-[13.5px] font-semibold ${active ? "text-ink" : "text-ink-soft"}`}>{p.native}</span>
                  <span className="mt-0.5 flex items-center gap-1 font-display text-[11px] text-ink-faint">
                    {p.reverse && <ArrowLeftRight aria-hidden="true" className="h-3 w-3" />}
                    {p.reverse ? "Works in reverse" : `${p.from} → English`}
                  </span>
                  {active && !reduceMotion && (
                    <span className="absolute inset-x-0 bottom-0 h-[2px] bg-line">
                      <span className="block h-full bg-primary-500" style={{ width: `${Math.min(100, (t / SLOT) * 100)}%` }} />
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <Parallax speed={24}>
          <div className="surface-solid relative overflow-hidden !rounded-2xl">
            <div
              className="pointer-events-none absolute inset-0 opacity-60"
              aria-hidden="true"
              style={{ backgroundImage: "radial-gradient(rgba(51,48,42,0.08) 1px, transparent 1px)", backgroundSize: "18px 18px" }}
            />
            <div className="relative p-5 sm:p-7">
              <div className="flex items-center justify-between">
                <span className="eyebrow">You speak · {pair.from}</span>
                <span className="rounded-md bg-canvas px-2 py-1 font-display text-[11px] font-semibold text-ink-soft ring-1 ring-line">{pair.app}</span>
              </div>
              <AnimatePresence mode="wait">
                <motion.p
                  key={`in-${pair.id}`}
                  dir={pair.rtl ? "rtl" : undefined}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  className={`mt-3 min-h-[64px] font-serif text-[22px] leading-snug text-ink-soft sm:text-[24px] ${pair.rtl ? "text-right" : ""}`}
                >
                  {input}
                  {!inputDone && <span className="o-caret ml-0.5 inline-block h-[0.9em] w-[2px] translate-y-[2px] bg-ink-faint" />}
                </motion.p>
              </AnimatePresence>

              <div className="my-5 flex items-center gap-3" aria-hidden="true">
                <span className="h-px flex-1 bg-line" />
                <motion.span
                  className={`flex h-9 items-center gap-2 rounded-lg px-3 font-display text-[12px] font-semibold ${
                    polishing ? "bg-ink text-white" : "bg-canvas text-ink-soft ring-1 ring-line"
                  }`}
                  animate={polishing ? { scale: [1, 1.05, 1] } : { scale: 1 }}
                  transition={{ duration: 0.8, repeat: polishing ? Infinity : 0 }}
                >
                  <ArrowDown className="h-3.5 w-3.5" />
                  {polishing ? "Oravo is translating…" : `Oravo · ${pair.to}`}
                </motion.span>
                <span className="h-px flex-1 bg-line" />
              </div>

              <span className="eyebrow">Oravo writes · {pair.to}</span>
              <div className="mt-3 min-h-[92px] rounded-xl bg-primary-soft/70 p-4 ring-1 ring-primary-500/15">
                <p className="text-[16.5px] font-medium leading-relaxed text-ink">
                  {output}
                  {output.length > 0 && output.length < pair.output.length && (
                    <span className="o-caret ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] bg-primary-500" />
                  )}
                </p>
              </div>
            </div>
          </div>
        </Parallax>
      </Reveal>
    </div>
  );
}

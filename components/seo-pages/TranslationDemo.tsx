"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Languages, Mic, Type } from "lucide-react";
import { useState } from "react";
import { Caret, typed, useLoopClock } from "./useLoopClock";

/*
 * Hero demo for /voice-typing-with-translation: a deck of cards, one per
 * language. The top card is spoken, Oravo writes the English underneath,
 * then the card is dealt away and the next language comes forward.
 */

const DECK = [
  { flag: "🇪🇸", lang: "Spanish", said: "¿Podemos mover la llamada al jueves por la tarde?", wrote: "Can we move the call to Thursday afternoon?" },
  { flag: "🇮🇳", lang: "Hindi", said: "मैं आज शाम तक प्रेज़ेंटेशन भेज दूँगा।", wrote: "I'll send the presentation by this evening." },
  { flag: "🇨🇳", lang: "Chinese", said: "这个问题我们已经修复了，今天下午上线。", wrote: "We've fixed this issue, and it goes live this afternoon." },
  { flag: "🇫🇷", lang: "French", said: "Peux-tu relire le contrat avant demain midi ?", wrote: "Could you review the contract before noon tomorrow?" },
  { flag: "🇯🇵", lang: "Japanese", said: "資料は明日の朝までにお送りします。", wrote: "I'll send the materials over by tomorrow morning." },
  { flag: "🇸🇦", lang: "Arabic", said: "سأرسل لك العقد المعدّل بعد الظهر.", wrote: "I'll send you the revised contract this afternoon.", rtl: true },
];

const SLOT = 6400;

export function TranslationDemo() {
  const { ref, t } = useLoopClock(SLOT * DECK.length);
  const index = Math.floor(t / SLOT) % DECK.length;
  const local = t % SLOT;
  const card = DECK[index];
  const msIn = card.said.length > 30 ? 40 : 55;
  const said = typed(card.said, local, 300, msIn);
  const outStart = 300 + card.said.length * msIn + 500;
  const wrote = typed(card.wrote, local, outStart, 20);
  const translating = said.length === card.said.length && wrote.length === 0;

  return (
    <figure ref={ref} className="relative">
      <div className="frame-dotted absolute -inset-4 hidden sm:block" aria-hidden="true" />
      <div className="relative" aria-hidden="true">
        {/* Language rail */}
        <div className="mb-4 flex flex-wrap gap-1.5">
          {DECK.map((item, i) => (
            <span
              key={item.lang}
              className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 font-display text-[11.5px] font-semibold transition-all duration-300 ${
                i === index ? "bg-cloud text-cloud-ink ring-1 ring-cloud-line" : "bg-raised/70 text-ink-faint ring-1 ring-line"
              }`}
            >
              <span className="text-[12px]">{item.flag}</span>
              {item.lang}
            </span>
          ))}
        </div>

        {/* The deck */}
        <div className="relative">
          <div className="absolute inset-x-6 -bottom-3 top-6 rotate-[2.5deg] rounded-2xl bg-sand-deep/70 ring-1 ring-line" />
          <div className="absolute inset-x-3 -bottom-1.5 top-3 -rotate-[1.5deg] rounded-2xl bg-canvas ring-1 ring-line" />
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
              key={card.lang}
              initial={{ opacity: 0, y: 18, rotate: 1.5 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              exit={{ opacity: 0, x: -60, rotate: -7 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-2xl bg-raised p-5 shadow-[0_0_0_1px_var(--o-line),0_30px_60px_-30px_rgba(51,48,42,0.45)] sm:p-7"
            >
              <div className="flex items-center justify-between">
                <span className="eyebrow inline-flex items-center gap-2">
                  <span className="text-[14px]">{card.flag}</span> You speak {card.lang}
                </span>
                <span className="font-mono text-[11px] text-ink-faint">
                  {String(index + 1).padStart(2, "0")} / {String(DECK.length).padStart(2, "0")}
                </span>
              </div>
              <p dir={card.rtl ? "rtl" : undefined} className={`mt-3 min-h-[64px] font-serif text-[21px] leading-snug text-ink-soft sm:text-[23px] ${card.rtl ? "text-right" : ""}`}>
                {said}
                <Caret show={said.length < card.said.length} className="bg-ink-faint" />
              </p>
              <div className="my-4 flex items-center gap-3">
                <span className="h-px flex-1 border-t-[1.5px] border-dashed border-line" />
                <motion.span
                  className={`flex h-8 items-center gap-1.5 rounded-lg px-3 font-display text-[11.5px] font-semibold ${translating ? "bg-cloud text-cloud-ink ring-1 ring-cloud-line" : "bg-canvas text-ink-soft ring-1 ring-line"}`}
                  animate={translating ? { scale: [1, 1.05, 1] } : { scale: 1 }}
                  transition={{ duration: 0.8, repeat: translating ? Infinity : 0 }}
                >
                  <Languages className="h-3.5 w-3.5" />
                  {translating ? "Translating…" : "Oravo · English"}
                </motion.span>
                <span className="h-px flex-1 border-t-[1.5px] border-dashed border-line" />
              </div>
              <div className="min-h-[72px] rounded-xl bg-canvas/70 p-4 shadow-[inset_3px_0_0_var(--o-accent)]">
                <p className="text-[16px] font-medium leading-relaxed text-ink">
                  {wrote}
                  <Caret show={wrote.length > 0 && wrote.length < card.wrote.length} />
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <figcaption className="sr-only">Demo: short work messages spoken in Spanish, Hindi, Chinese, French, Japanese and Arabic, each written by Oravo in English.</figcaption>
    </figure>
  );
}

/* ------------------------------------------------------------------------ */
/* Speak → Translate → Type: three stages lit in turn, joined by a track.   */
/* ------------------------------------------------------------------------ */

const STAGES = [
  { icon: Mic, title: "Speak Your Language", body: "Talk naturally in Spanish, Hindi, Chinese, or any of 60+ languages." },
  { icon: Languages, title: "AI Translates", body: "Our AI translates your speech into professional English as you talk." },
  { icon: Type, title: "Text Appears", body: "Perfectly formatted English text types into any app instantly." },
];

export function TranslatePipeline() {
  const PERIOD = 6000;
  const { ref, t, reduceMotion } = useLoopClock(PERIOD);
  const active = reduceMotion ? -1 : Math.min(2, Math.floor(t / (PERIOD / 3)));
  const progress = reduceMotion ? 1 : Math.min(1, t / (PERIOD * 0.9));
  return (
    <div ref={ref} className="relative">
      <div className="pointer-events-none absolute left-[16%] right-[16%] top-[27px] hidden h-[2px] overflow-hidden rounded-full bg-ink/10 md:block" aria-hidden="true">
        <div className="h-full rounded-full bg-brand transition-[width] duration-100 ease-linear" style={{ width: `${progress * 100}%` }} />
      </div>
      <ol className="relative grid gap-5 md:grid-cols-3">
        {STAGES.map((stage, i) => {
          const on = active === i || active === -1;
          const Icon = stage.icon;
          return (
            <li key={stage.title} className="flex flex-col items-center text-center">
              <motion.span
                className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-xl bg-raised transition-all duration-500 ${
                  on ? "text-ink shadow-[0_0_0_1.5px_var(--o-ink),0_12px_26px_-14px_rgba(51,48,42,0.45)]" : "text-ink-faint shadow-[0_0_0_1px_var(--o-line)]"
                }`}
                animate={on && active !== -1 ? { scale: [1, 1.06, 1] } : { scale: 1 }}
                transition={{ duration: 0.9 }}
              >
                <Icon className="h-5 w-5" strokeWidth={1.8} />
                <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-md bg-paper font-display text-[11px] font-bold text-brand ring-1 ring-line">
                  {i + 1}
                </span>
              </motion.span>
              <h3 className="display-3 mt-6 text-ink">{stage.title}</h3>
              <p className="mt-2 max-w-[260px] text-[14.5px] leading-relaxed text-ink-soft">{stage.body}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

/* ------------------------------------------------------------------------ */
/* Language postcards: hover, focus or tap to see the English.              */
/* ------------------------------------------------------------------------ */

export function LanguagePostcards({ languages }: { languages: { flag: string; language: string; example: string; english?: string; rtl?: boolean }[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();
  return (
    <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
      {languages.map((lang, i) => {
        const flipped = open === i;
        return (
          <motion.li
            key={lang.language}
            initial={reduceMotion ? false : { opacity: 0, y: 14, rotate: i % 2 ? 1.5 : -1.5 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: (i % 4) * 0.06, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              type="button"
              aria-pressed={flipped}
              onClick={() => setOpen(flipped ? null : i)}
              onMouseEnter={() => setOpen(i)}
              onMouseLeave={() => setOpen((cur) => (cur === i ? null : cur))}
              className={`group relative flex h-full min-h-[150px] w-full flex-col justify-between overflow-hidden rounded-2xl p-4 text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30 sm:p-5 ${
                flipped ? "-translate-y-1 bg-canvas text-ink shadow-[0_0_0_1.5px_var(--o-ink),0_18px_36px_-24px_rgba(51,48,42,0.5)]" : "bg-raised text-ink shadow-[0_0_0_1px_var(--o-line)] hover:-translate-y-1"
              }`}
            >
              <span className="flex items-center justify-between">
                <span className="text-[22px] leading-none">{lang.flag}</span>
                <span className={`font-display text-[11px] font-semibold uppercase tracking-[0.12em] ${flipped ? "text-brand" : "text-ink-faint"}`}>
                  {flipped ? "English" : lang.language}
                </span>
              </span>
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={flipped ? "en" : "native"}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  dir={!flipped && lang.rtl ? "rtl" : undefined}
                  className={`mt-6 block font-serif text-[18px] leading-snug sm:text-[20px] ${!flipped && lang.rtl ? "text-right" : ""}`}
                >
                  {flipped ? lang.english ?? "Hello, how are you?" : lang.example}
                </motion.span>
              </AnimatePresence>
            </button>
          </motion.li>
        );
      })}
    </ul>
  );
}

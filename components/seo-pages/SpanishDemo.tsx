"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, Check } from "lucide-react";
import { useState } from "react";
import { Caret, typed, useLoopClock } from "./useLoopClock";

/*
 * Hero demo for /speech-to-text-spanish: one work message per dialect, spoken
 * in Spanish and written in English. The dialect strip shows which one is on.
 */

const DIALECTS = [
  {
    region: "México",
    said: "Oye, ¿me pasas el reporte antes de la junta del jueves?",
    wrote: "Could you send me the report before Thursday's meeting?",
  },
  {
    region: "Colombia",
    said: "Te cuento que el cliente ya aprobó la propuesta, así que arrancamos el lunes.",
    wrote: "Quick update: the client approved the proposal, so we start on Monday.",
  },
  {
    region: "España",
    said: "Vale, te mando el presupuesto esta tarde y lo vemos mañana.",
    wrote: "Okay, I'll send you the quote this afternoon and we can go over it tomorrow.",
  },
  {
    region: "Argentina",
    said: "Che, ¿podemos pasar la reunión para el viernes? Estoy a mil.",
    wrote: "Could we move the meeting to Friday? I'm swamped right now.",
  },
];

const SLOT = 7000;

export function SpanishDemo() {
  const { ref, t } = useLoopClock(SLOT * DIALECTS.length);
  const index = Math.floor(t / SLOT) % DIALECTS.length;
  const local = t % SLOT;
  const d = DIALECTS[index];
  const said = typed(d.said, local, 250, 38);
  const outStart = 250 + d.said.length * 38 + 650;
  const wrote = typed(d.wrote, local, outStart, 20);
  const listening = said.length < d.said.length;
  const translating = !listening && wrote.length === 0;

  return (
    <figure ref={ref} className="relative">
      <div className="frame-dotted absolute -inset-4 hidden sm:block" aria-hidden="true" />
      <div className="relative overflow-hidden rounded-2xl bg-raised shadow-[0_0_0_1px_var(--o-line),0_30px_60px_-30px_rgba(51,48,42,0.45)]" aria-hidden="true">
        <div className="flex border-b border-line bg-canvas">
          {DIALECTS.map((item, i) => (
            <span
              key={item.region}
              className={`relative flex-1 px-2 py-3 text-center font-display text-[11.5px] font-semibold transition-colors duration-300 sm:text-[12px] ${
                i === index ? "text-ink" : "text-ink-faint"
              }`}
            >
              {item.region}
              {i === index && <motion.span layoutId="dialect-bar" className="absolute inset-x-3 bottom-0 h-[2px] rounded-full bg-brand" />}
            </span>
          ))}
        </div>

        <div className="p-5 sm:p-7">
          <div className="flex items-start gap-3">
            <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sand font-display text-[11px] font-bold text-ink ring-1 ring-sand-deep">ES</span>
            <div className="min-w-0 flex-1 rounded-2xl rounded-tl-md bg-canvas p-4 ring-1 ring-line">
              <div className="flex items-center justify-between">
                <span className="eyebrow">Hablas en español</span>
                <span className="flex h-3.5 items-center gap-[2px]">
                  {Array.from({ length: 7 }).map((_, i) => (
                    <motion.span
                      key={i}
                      className="w-[2px] rounded-full bg-brand"
                      animate={listening ? { height: [3, 6 + ((i * 5) % 8), 3] } : { height: 3 }}
                      transition={{ duration: 0.6, repeat: listening ? Infinity : 0, delay: i * 0.05 }}
                    />
                  ))}
                </span>
              </div>
              <p className="mt-2 min-h-[64px] font-serif text-[19px] leading-snug text-ink-soft sm:text-[21px]">
                {said}
                <Caret show={listening} className="bg-ink-faint" />
              </p>
            </div>
          </div>

          <div className="my-4 flex items-center gap-3 pl-11">
            <span className="h-px flex-1 border-t-[1.5px] border-dashed border-line" />
            <motion.span
              className={`flex h-8 items-center gap-1.5 rounded-lg px-3 font-display text-[11.5px] font-semibold ${translating ? "bg-espresso text-white" : "bg-canvas text-ink-soft ring-1 ring-line"}`}
              animate={translating ? { scale: [1, 1.05, 1] } : { scale: 1 }}
              transition={{ duration: 0.8, repeat: translating ? Infinity : 0 }}
            >
              <ArrowDown className="h-3.5 w-3.5" />
              {translating ? "Traduciendo…" : "Español → English"}
            </motion.span>
            <span className="h-px flex-1 border-t-[1.5px] border-dashed border-line" />
          </div>

          <div className="flex items-start gap-3">
            <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-espresso font-display text-[11px] font-bold text-[#e8a07f]">EN</span>
            <div className="min-w-0 flex-1 rounded-2xl rounded-tl-md bg-raised p-4 shadow-[0_0_0_1px_var(--o-line),inset_3px_0_0_var(--o-accent)]">
              <span className="eyebrow">Oravo writes in English</span>
              <p className="mt-2 min-h-[56px] text-[16px] font-medium leading-relaxed text-ink">
                {wrote}
                <Caret show={wrote.length > 0 && wrote.length < d.wrote.length} />
              </p>
            </div>
          </div>
        </div>
      </div>
      <figcaption className="sr-only">
        Demo: Spanish sentences from Mexico, Colombia, Spain and Argentina, spoken aloud and written by Oravo as natural English.
      </figcaption>
    </figure>
  );
}

/* ------------------------------------------------------------------------ */
/* Dos modos: pick a mode and see what it does.                              */
/* ------------------------------------------------------------------------ */

const MODES = [
  {
    id: "translate",
    tab: "Español → English",
    title: "Spanish → English",
    body: "Speak in Spanish, get English text. Perfect for writing emails, documents, and messages to English-speaking colleagues.",
    said: "Hola, ¿cómo estás?",
    saidLabel: "Dices",
    wrote: "Hello, how are you?",
    stamp: "Translated as you speak",
  },
  {
    id: "accent",
    tab: "English, Spanish accent",
    title: "English with Spanish Accent",
    body: "Speak English with your natural accent. Oravo understands Spanish-accented English and writes clean, punctuated text.",
    said: "I need to send the email to the client before the meeting",
    saidLabel: "You say, in English",
    wrote: "I need to send the email to the client before the meeting.",
    stamp: "Your accent is understood, not corrected",
  },
];

export function ModeSwitcher() {
  const [active, setActive] = useState(0);
  const mode = MODES[active];
  return (
    <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
      <ol className="divide-y divide-line border-y border-line">
        {MODES.map((m, i) => {
          const on = i === active;
          return (
            <li key={m.id} className={`flex gap-4 py-6 transition-opacity duration-300 ${on ? "opacity-100" : "opacity-55"}`}>
              <span className={`mt-1 font-display text-[12px] font-bold ${on ? "text-brand" : "text-ink-faint"}`}>{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="display-3 text-ink">{m.title}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">{m.body}</p>
              </div>
            </li>
          );
        })}
      </ol>

      <div className="frame-dotted flex flex-col bg-paper/50 p-5 sm:p-8">
        <div role="tablist" aria-label="Modes" className="mb-6 inline-flex self-start rounded-lg bg-canvas p-1 ring-1 ring-line">
          {MODES.map((m, i) => {
            const on = i === active;
            return (
              <button
                key={m.id}
                role="tab"
                type="button"
                id={`mode-tab-${m.id}`}
                aria-selected={on}
                aria-controls={`mode-panel-${m.id}`}
                onClick={() => setActive(i)}
                className={`rounded-md px-3 py-1.5 font-display text-[12.5px] font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30 ${
                  on ? "bg-raised text-ink shadow-[0_0_0_1px_var(--o-line),0_2px_4px_rgba(51,48,42,0.08)]" : "text-ink-faint hover:text-ink"
                }`}
              >
                {m.tab}
              </button>
            );
          })}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={mode.id}
            role="tabpanel"
            id={`mode-panel-${mode.id}`}
            aria-labelledby={`mode-tab-${mode.id}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="eyebrow">{mode.saidLabel}</p>
            <p className="mt-2 font-serif text-[24px] italic leading-snug text-ink-soft sm:text-[28px]">&ldquo;{mode.said}&rdquo;</p>
            <div className="my-5 flex items-center gap-3" aria-hidden="true">
              <span className="h-px flex-1 border-t-[1.5px] border-dashed border-line" />
              <ArrowDown className="h-4 w-4 text-brand" />
              <span className="h-px flex-1 border-t-[1.5px] border-dashed border-line" />
            </div>
            <div className="rounded-xl bg-raised p-5 shadow-[0_0_0_1px_var(--o-line),0_14px_30px_-22px_rgba(51,48,42,0.45)]">
              <p className="eyebrow">Oravo writes</p>
              <p className="mt-2 text-[18px] font-medium leading-relaxed text-ink">&ldquo;{mode.wrote}&rdquo;</p>
            </div>
            <p className="mt-5 inline-flex items-center gap-2 font-display text-[13px] font-semibold text-ink">
              <span className="flex h-5 w-5 items-center justify-center rounded-md bg-espresso text-[#e8a07f]">
                <Check className="h-3 w-3" strokeWidth={3} />
              </span>
              {mode.stamp}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

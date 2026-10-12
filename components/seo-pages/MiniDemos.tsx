"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Caret, typed, useLoopClock } from "./useLoopClock";

/* ------------------------------------------------------------------------ */
/* The bottom row of a Mac keyboard; fn sinks, sound leaves, text arrives.  */
/* ------------------------------------------------------------------------ */

export function KeyboardRow({ line = "Sounds good, I'll join the call at 4." }: { line?: string }) {
  const PERIOD = 6000;
  const { ref, t } = useLoopClock(PERIOD);
  const held = t > 500 && t < 3000;
  const out = typed(line, t, 3100, 32);
  const keys = [
    { label: "fn", w: "w-12", hot: true },
    { label: "control", w: "w-14" },
    { label: "option", w: "w-14" },
    { label: "command", w: "w-[72px]" },
    { label: "", w: "flex-1" },
    { label: "command", w: "w-[72px] hidden sm:flex" },
  ];
  return (
    <div ref={ref} className="frame-dotted bg-paper/50 p-5 sm:p-6" aria-hidden="true">
      <div className="flex min-h-[54px] items-center justify-center">
        <AnimatePresence mode="wait">
          {held ? (
            <motion.span key="wave" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex h-8 items-center gap-[3px]">
              {Array.from({ length: 18 }).map((_, i) => (
                <motion.span
                  key={i}
                  className="w-[3px] rounded-full bg-brand"
                  animate={{ height: [4, 8 + ((i * 11) % 22), 5] }}
                  transition={{ duration: 0.7, repeat: Infinity, delay: i * 0.04 }}
                />
              ))}
            </motion.span>
          ) : (
            <motion.p key="text" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center font-serif text-[20px] text-ink">
              {out || <span className="text-ink-faint">Hold fn and talk</span>}
              <Caret show={out.length > 0 && out.length < line.length} />
            </motion.p>
          )}
        </AnimatePresence>
      </div>
      <div className="mt-5 flex gap-1.5 rounded-xl bg-canvas p-2 ring-1 ring-line">
        {keys.map((key, i) => (
          <motion.span
            key={i}
            className={`flex h-12 flex-col items-start justify-end rounded-md px-2 pb-1.5 font-display text-[10px] ${key.w} ${
              key.hot ? (held ? "bg-espresso text-[#e8a07f]" : "bg-raised text-ink") : "bg-raised text-ink-faint"
            } shadow-[0_0_0_1px_var(--o-line),0_2px_0_var(--o-band-sand-deep)]`}
            animate={key.hot && held ? { y: 2, boxShadow: "0 0 0 1px var(--o-line), 0 0px 0 var(--o-band-sand-deep)" } : { y: 0 }}
            transition={{ duration: 0.12 }}
          >
            {key.label}
          </motion.span>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------------ */
/* Spoken in one language, written in English. Cycles through a few pairs.  */
/* ------------------------------------------------------------------------ */

const PAIRS = [
  { lang: "Spanish", said: "¿Puedes enviarme el contrato antes del viernes?", wrote: "Could you send me the contract before Friday?" },
  { lang: "Hindi", said: "मैं दस मिनट में कॉल पर आ जाऊँगा।", wrote: "I'll join the call in ten minutes." },
  { lang: "French", said: "Le rapport est prêt, je te l'envoie ce soir.", wrote: "The report is ready; I'll send it to you tonight." },
];

export function MiniTranslate() {
  const SLOT = 5200;
  const { ref, t } = useLoopClock(SLOT * PAIRS.length);
  const i = Math.floor(t / SLOT) % PAIRS.length;
  const local = t % SLOT;
  const pair = PAIRS[i];
  const said = typed(pair.said, local, 150, 30);
  const wroteStart = 150 + pair.said.length * 30 + 450;
  const wrote = typed(pair.wrote, local, wroteStart, 20);
  return (
    <div ref={ref} className="grid gap-3 sm:grid-cols-[1fr_auto_1fr] sm:items-stretch" aria-hidden="true">
      <div className="rounded-xl bg-canvas p-4 ring-1 ring-line">
        <p className="eyebrow">You say · {pair.lang}</p>
        <p className="mt-2 min-h-[48px] font-serif text-[17px] leading-snug text-ink-soft">
          {said}
          <Caret show={said.length < pair.said.length} className="bg-ink-faint" />
        </p>
      </div>
      <span className="flex items-center justify-center text-brand">
        <ArrowRight className="h-4 w-4 rotate-90 sm:rotate-0" />
      </span>
      <div className="rounded-xl bg-raised p-4 shadow-[0_0_0_1px_var(--o-line),inset_3px_0_0_var(--o-accent)]">
        <p className="eyebrow">Oravo writes · English</p>
        <p className="mt-2 min-h-[48px] text-[15px] font-medium leading-snug text-ink">
          {wrote}
          <Caret show={wrote.length > 0 && wrote.length < pair.wrote.length} />
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------------ */
/* Typing speed vs speaking speed: two bars race to the same sentence end.  */
/* ------------------------------------------------------------------------ */

export function SpeedRace({ typing = 40, speaking = 150 }: { typing?: number; speaking?: number }) {
  const PERIOD = 7000;
  const { ref, t } = useLoopClock(PERIOD);
  const progress = Math.min(1, Math.max(0, (t - 400) / 4200));
  const rows = [
    { label: "Typing", wpm: typing, fill: "bg-ink-faint/50", text: "text-ink-soft" },
    { label: "Speaking with Oravo", wpm: speaking, fill: "bg-brand", text: "text-ink" },
  ];
  return (
    <div ref={ref} className="space-y-5">
      {rows.map((row) => {
        const pct = Math.min(1, progress * (row.wpm / speaking));
        return (
          <div key={row.label}>
            <div className="flex items-baseline justify-between">
              <span className={`font-display text-[13px] font-semibold ${row.text}`}>{row.label}</span>
              <span className="font-display text-[13px] tabular-nums text-ink-faint">
                <span className={`font-serif text-[22px] ${row.text}`}>{row.wpm}</span> wpm
              </span>
            </div>
            <div className="mt-2 h-3 overflow-hidden rounded-full bg-canvas ring-1 ring-line">
              <div className={`h-full rounded-full ${row.fill} transition-[width] duration-100 ease-linear`} style={{ width: `${pct * 100}%` }} />
            </div>
          </div>
        );
      })}
      <p className="font-display text-[12px] text-ink-faint">Typical speeds. Your mileage depends on how fast you talk and type.</p>
    </div>
  );
}

/* ------------------------------------------------------------------------ */
/* Code-switching: the Spanish words in a mixed sentence settle into English */
/* ------------------------------------------------------------------------ */

type SwitchPart = { text: string } | { from: string; to: string };

export function CodeSwitch({
  parts = [
    { text: "Send the " },
    { from: "reporte", to: "report" },
    { text: " to marketing by " },
    { from: "viernes", to: "Friday" },
    { text: "." },
  ],
}: {
  parts?: SwitchPart[];
}) {
  const PERIOD = 5000;
  const { ref, t } = useLoopClock(PERIOD);
  const settled = t > 2200;
  return (
    <div ref={ref}>
      <div className="flex items-center gap-2">
        <span className={`h-1.5 w-1.5 rounded-full ${settled ? "bg-ink" : "bg-brand"}`} />
        <span className="eyebrow">{settled ? "Oravo writes" : "You say"}</span>
      </div>
      <p className="mt-3 font-serif text-[24px] leading-snug text-ink sm:text-[26px]">
        {parts.map((part, i) =>
          "text" in part ? (
            <span key={i}>{part.text}</span>
          ) : (
            <span key={i} className="relative inline-block">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={settled ? "to" : "from"}
                  initial={{ opacity: 0, y: 8, filter: "blur(3px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -8, filter: "blur(3px)" }}
                  transition={{ duration: 0.35 }}
                  className={`inline-block ${settled ? "text-ink" : "text-brand"}`}
                >
                  {settled ? part.to : part.from}
                </motion.span>
              </AnimatePresence>
              <span className={`absolute inset-x-0 -bottom-0.5 h-[2px] rounded-full transition-colors duration-500 ${settled ? "bg-ink/15" : "bg-brand/50"}`} aria-hidden="true" />
            </span>
          ),
        )}
      </p>
    </div>
  );
}

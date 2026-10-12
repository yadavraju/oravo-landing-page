"use client";

import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Scenario = {
  speaker: string;
  initials: string;
  input: string;
  inputDetail: string;
  raw: string;
  channel: string;
  polished: string;
};

// Each scenario is one loop of the hero: raw speech on the left, the message
// Oravo types into Slack on the right.
const SCENARIOS: Scenario[] = [
  {
    speaker: "Arjun",
    initials: "AR",
    input: "Hindi accent",
    inputDetail: "Speaking English",
    raw: "so basically the build is getting delay by two days only, API is not giving proper response… we will do release on thursday, kindly adjust",
    channel: "client-acme",
    polished:
      "Quick update: the release is moving to Thursday. The API is returning inconsistent responses, so we're taking two extra days to ship it properly. Thanks for your patience!",
  },
  {
    speaker: "Lucía",
    initials: "LM",
    input: "Español",
    inputDetail: "Speaking Spanish",
    raw: "oye, dile al equipo que la demo con el cliente se mueve al lunes, todavía estamos arreglando el onboarding y quiero que salga perfecto",
    channel: "product-team",
    polished:
      "Heads-up, team: the client demo is moving to Monday. We're still polishing the onboarding flow and want it to be solid before we show it.",
  },
  {
    speaker: "Rafael",
    initials: "RS",
    input: "Portuguese accent",
    inputDetail: "Speaking English",
    raw: "I am needing the invoice until friday, if is not possible please to tell me and we find other way, ok?",
    channel: "finance-ops",
    polished:
      "Could you send the invoice by Friday? If that doesn't work, just let me know and we'll figure out another option.",
  },
];

type Phase = "listening" | "processing" | "typing" | "sent";

const BAR_COUNT = 28;

function Waveform({ active }: { active: boolean }) {
  return (
    <div className="flex h-12 items-center gap-[3px]" aria-hidden="true">
      {Array.from({ length: BAR_COUNT }).map((_, i) => {
        const envelope = Math.sin((i / (BAR_COUNT - 1)) * Math.PI);
        return (
          <motion.span
            key={i}
            className="w-[3px] rounded-full bg-brand"
            animate={
              active
                ? {
                    height: [6, 10 + envelope * 30 * ((i % 3) + 1) / 3, 8 + envelope * 14, 6],
                    opacity: [0.55, 1, 0.8, 0.55],
                  }
                : { height: 4, opacity: 0.35 }
            }
            transition={
              active
                ? { duration: 0.9 + (i % 5) * 0.12, repeat: Infinity, ease: "easeInOut", delay: i * 0.03 }
                : { duration: 0.4 }
            }
          />
        );
      })}
    </div>
  );
}

export default function AccentToSlackDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.3 });
  const reduceMotion = useReducedMotion();

  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>("listening");
  const [rawCount, setRawCount] = useState(0);
  const [typedCount, setTypedCount] = useState(0);

  const scenario = SCENARIOS[index];
  const rawWords = scenario.raw.split(" ");

  // Reduced motion: show the finished state of the first scenario and stop.
  useEffect(() => {
    if (!reduceMotion) return;
    setRawCount(rawWords.length);
    setTypedCount(scenario.polished.length);
    setPhase("sent");
  }, [reduceMotion, rawWords.length, scenario.polished.length]);

  useEffect(() => {
    if (reduceMotion || !inView) return;
    let timer: ReturnType<typeof setTimeout>;

    if (phase === "listening") {
      if (rawCount < rawWords.length) {
        timer = setTimeout(() => setRawCount((c) => c + 1), 150);
      } else {
        timer = setTimeout(() => setPhase("processing"), 450);
      }
    } else if (phase === "processing") {
      timer = setTimeout(() => setPhase("typing"), 1000);
    } else if (phase === "typing") {
      if (typedCount < scenario.polished.length) {
        timer = setTimeout(() => setTypedCount((c) => Math.min(c + 2, scenario.polished.length)), 22);
      } else {
        timer = setTimeout(() => setPhase("sent"), 500);
      }
    } else {
      timer = setTimeout(() => {
        setIndex((i) => (i + 1) % SCENARIOS.length);
        setRawCount(0);
        setTypedCount(0);
        setPhase("listening");
      }, 3600);
    }
    return () => clearTimeout(timer);
  }, [phase, rawCount, typedCount, inView, reduceMotion, rawWords.length, scenario.polished.length]);

  const listening = phase === "listening";
  const processing = phase === "processing";

  return (
    <div ref={ref} className="relative w-full">
      <div className="grid items-stretch gap-4 md:grid-cols-[minmax(0,1fr)_72px_minmax(0,1.25fr)] md:gap-0">
        {/* Left: raw speech */}
        <div className="surface !rounded-2xl p-5 sm:p-6 flex flex-col gap-5 min-h-[300px]">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-ink text-white">
                {listening && !reduceMotion && (
                  <span className="absolute inset-0 rounded-lg bg-brand/40 animate-ping" />
                )}
                <svg viewBox="0 0 24 24" className="relative h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 15a4 4 0 0 0 4-4V6a4 4 0 1 0-8 0v5a4 4 0 0 0 4 4Zm-7-4a7 7 0 0 0 14 0M12 18v3" />
                </svg>
              </span>
              <div className="leading-tight">
                <p className="font-display text-sm font-semibold text-ink">You speak</p>
                <p className="text-xs text-ink-faint">{scenario.inputDetail}</p>
              </div>
            </div>
            <AnimatePresence mode="wait">
              <motion.span
                key={scenario.input}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                className="chip px-2.5 py-1 font-display text-[11px] font-semibold text-ink-soft"
              >
                {scenario.input}
              </motion.span>
            </AnimatePresence>
          </div>

          <Waveform active={listening && !reduceMotion} />

          <p className="text-[15px] leading-relaxed text-ink-soft italic min-h-[96px]" aria-live="off">
            “
            {rawWords.slice(0, rawCount).map((word, i) => (
              <motion.span
                key={`${index}-${i}`}
                initial={reduceMotion ? false : { opacity: 0, filter: "blur(4px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.35 }}
              >
                {i > 0 ? " " : ""}
                {word}
              </motion.span>
            ))}
            {listening && <span className="o-caret inline-block h-4 w-[2px] translate-y-[2px] bg-ink-faint" />}
            {rawCount >= rawWords.length && "”"}
          </p>

          <p className="mt-auto text-[11px] font-medium uppercase tracking-[0.14em] text-ink-faint">
            Raw speech · accent, filler, grammar slips
          </p>
        </div>

        {/* Middle: Oravo, polishing */}
        <div className="relative flex items-center justify-center py-1 md:py-0" aria-hidden="true">
          <div className="absolute inset-y-10 left-1/2 hidden w-px -translate-x-1/2 bg-line md:block" />
          <motion.div
            className="relative z-10 flex h-14 w-14 items-center justify-center rounded-xl bg-ink text-white shadow-[0_6px_16px_-6px_rgba(51,48,42,0.45)]"
            animate={processing && !reduceMotion ? { scale: [1, 1.1, 1] } : { scale: 1 }}
            transition={{ duration: 1, repeat: processing ? Infinity : 0, ease: "easeInOut" }}
          >
            <span
              className="absolute -inset-1.5 rounded-[14px] border-2 border-brand border-b-transparent border-l-transparent"
              style={{
                animation: reduceMotion ? undefined : `o-spin ${processing ? 0.9 : 5}s linear infinite`,
                opacity: processing ? 1 : 0.35,
                transition: "opacity 0.3s",
              }}
            />
            <svg viewBox="0 0 24 24" className="relative h-5 w-5 rotate-90 md:rotate-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </motion.div>
        </div>

        {/* Right: Slack window */}
        <div className="surface-solid !rounded-2xl overflow-hidden flex flex-col min-h-[300px]">
          <div className="flex items-center gap-2 border-b border-line bg-canvas px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
            <span className="ml-3 font-display text-xs font-semibold text-ink-soft">Slack</span>
            <span className="text-xs text-ink-faint">— #{scenario.channel}</span>
          </div>

          <div className="flex flex-1 min-h-0">
            <div className="hidden sm:flex w-[52px] shrink-0 flex-col items-center gap-3 bg-[#3f0e40] py-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-raised/90 font-display text-xs font-bold text-[#3f0e40]">O</span>
              <span className="h-8 w-8 rounded-lg bg-raised/10" />
              <span className="h-8 w-8 rounded-lg bg-raised/10" />
            </div>

            <div className="flex flex-1 min-w-0 flex-col p-4 sm:p-5 gap-4">
              <div className="flex gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#cdeedd] font-display text-xs font-bold text-[#2c6b4f]">JD</span>
                <div className="min-w-0">
                  <p className="text-sm"><span className="font-semibold text-ink">Jordan</span> <span className="text-xs text-ink-faint">9:41 AM</span></p>
                  <p className="text-sm text-ink-soft">Any update on timing? 🙏</p>
                </div>
              </div>

              <AnimatePresence>
                {phase === "sent" && (
                  <motion.div
                    key={`sent-${index}`}
                    initial={reduceMotion ? false : { opacity: 0, y: 14, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="flex gap-3"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-soft font-display text-xs font-bold text-brand">{scenario.initials}</span>
                    <div className="min-w-0">
                      <p className="text-sm"><span className="font-semibold text-ink">{scenario.speaker}</span> <span className="text-xs text-ink-faint">9:42 AM</span></p>
                      <p className="text-sm leading-relaxed text-ink">{scenario.polished}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="mt-auto rounded-lg border border-line bg-raised p-3">
                <p className="min-h-[60px] text-sm leading-relaxed text-ink">
                  {phase === "typing" ? scenario.polished.slice(0, typedCount) : null}
                  {phase === "processing" && <span className="text-ink-faint">Oravo is polishing…</span>}
                  {(phase === "listening" || phase === "sent") && (
                    <span className="text-ink-faint">Message #{scenario.channel}</span>
                  )}
                  {phase === "typing" && <span className="o-caret ml-px inline-block h-4 w-[2px] translate-y-[2px] bg-brand" />}
                </p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-ink-faint">
                    {phase === "typing" ? "Typed by Oravo" : "\u00a0"}
                  </span>
                  <span className={`flex h-7 w-7 items-center justify-center rounded-md transition-colors ${phase === "typing" ? "bg-[#007a5a] text-white" : "bg-black/5 text-ink-faint"}`}>
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true"><path d="M3 20.5 21 12 3 3.5l2.5 7.1L14 12l-8.5 1.4L3 20.5Z" /></svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scenario dots */}
      <div className="mt-5 flex justify-center gap-2" aria-hidden="true">
        {SCENARIOS.map((s, i) => (
          <span key={s.speaker} className={`h-1 rounded-sm transition-all duration-500 ${i === index ? "w-6 bg-ink" : "w-3 bg-ink/20"}`} />
        ))}
      </div>
    </div>
  );
}

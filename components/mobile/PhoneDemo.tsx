"use client";

import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { Check, ChevronLeft, Send, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

/*
 * A coded Android phone: you hold the Oravo bubble, say something messy, and
 * clean text lands in the app's text field. Warm palette only. Loops while on
 * screen, pauses off-screen, and shows the finished message under reduced
 * motion.
 */

export type PhoneScene = {
  app: string;
  glyph: string;
  title: string;
  context: string;
  raw: string;
  polished: string;
  chips: string[];
};

export const SCENES: PhoneScene[] = [
  {
    app: "WhatsApp",
    glyph: "W",
    title: "Priya",
    context: "Can you send the client update before 5?",
    raw: "umm yeah so tell them the deck is ready and uh we can meet thursday, no wait, friday",
    polished: "The deck is ready. Can we meet on Friday?",
    chips: ["Filler removed", "Self-correction applied"],
  },
  {
    app: "Email",
    glyph: "@",
    title: "Re: Contract review",
    context: "From: Daniel · Any update on the contract?",
    raw: "hi daniel i check the contract, i think the price have some problem, we discuss tomorrow morning ok",
    polished: "Hi Daniel, I've checked the contract and I think there's an issue with the pricing. Could we discuss it tomorrow morning?",
    chips: ["Grammar fixed", "Tone: professional"],
  },
  {
    app: "Slack",
    glyph: "#",
    title: "#launch-team",
    context: "Maya: Is the build ready for QA?",
    raw: "yes build is ready, uh, three things to test, login, the payments, and offline mode",
    polished: "Yes, the build is ready. Three things to test:\n1. Login\n2. Payments\n3. Offline mode",
    chips: ["Numbered list", "Filler removed"],
  },
  {
    app: "LinkedIn",
    glyph: "in",
    title: "New post",
    context: "Share your thoughts…",
    raw: "so excited, we shipped voice notes this week, it was like a lot of work but the team is amazing",
    polished: "So excited: we shipped voice notes this week! It was a lot of work, and the team was amazing.",
    chips: ["Punctuation added", "Filler removed"],
  },
  {
    app: "Notion",
    glyph: "N",
    title: "Weekly ideas",
    context: "Type '/' for commands",
    raw: "idea, onboarding checklist for new users, and um maybe a short video in hindi and spanish",
    polished: "Idea: an onboarding checklist for new users, plus a short video in Hindi and Spanish.",
    chips: ["Formatted", "Filler removed"],
  },
  {
    app: "Gmail",
    glyph: "G",
    title: "Reply to Sofía",
    context: "Sofía: ¿Puedes mandarme el resumen?",
    raw: "claro, te mando el resumen hoy por la tarde",
    polished: "Of course, I'll send you the summary this afternoon.",
    chips: ["Translated to English", "Ready to send"],
  },
];

type Phase = "idle" | "listening" | "polishing" | "typing" | "done";

export function PhoneDemo({
  scene,
  onLoopEnd,
  className = "",
}: {
  scene: PhoneScene;
  onLoopEnd?: () => void;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.35 });
  const [phase, setPhase] = useState<Phase>("idle");
  const [words, setWords] = useState(0);
  const [chars, setChars] = useState(0);
  const rawWords = scene.raw.split(" ");

  // Restart when the scene changes.
  useEffect(() => {
    setWords(0);
    setChars(0);
    setPhase(reduceMotion ? "done" : "idle");
  }, [scene, reduceMotion]);

  useEffect(() => {
    if (reduceMotion) {
      setChars(scene.polished.length);
      return;
    }
    if (!inView) return;
    let id: ReturnType<typeof setTimeout>;
    if (phase === "idle") id = setTimeout(() => setPhase("listening"), 900);
    else if (phase === "listening") {
      if (words < rawWords.length) id = setTimeout(() => setWords((w) => w + 1), 150);
      else id = setTimeout(() => setPhase("polishing"), 350);
    } else if (phase === "polishing") id = setTimeout(() => setPhase("typing"), 750);
    else if (phase === "typing") {
      if (chars < scene.polished.length) id = setTimeout(() => setChars((c) => Math.min(c + 2, scene.polished.length)), 22);
      else id = setTimeout(() => setPhase("done"), 200);
    } else if (phase === "done") {
      id = setTimeout(() => {
        if (onLoopEnd) onLoopEnd();
        else {
          setWords(0);
          setChars(0);
          setPhase("idle");
        }
      }, 3400);
    }
    return () => clearTimeout(id!);
  }, [phase, words, chars, inView, reduceMotion, rawWords.length, scene.polished.length, onLoopEnd]);

  const listening = phase === "listening";
  const showText = phase === "typing";

  return (
    <div ref={ref} className={`relative mx-auto w-[280px] sm:w-[300px] ${className}`}>
      <div className="rounded-[46px] bg-espresso p-[9px] shadow-[0_50px_90px_-40px_rgba(42,33,27,0.75),0_0_0_1px_rgba(42,33,27,0.4)]">
        <div className="relative flex h-[560px] flex-col overflow-hidden rounded-[38px] bg-raised sm:h-[590px]">
          {/* status bar */}
          <div className="flex items-center justify-between px-6 pb-1 pt-3 font-display text-[11px] font-semibold text-ink">
            <span>9:41</span>
            <span className="absolute left-1/2 top-2.5 h-4 w-4 -translate-x-1/2 rounded-full bg-espresso" aria-hidden="true" />
            <span className="flex items-center gap-1" aria-hidden="true">
              <span className="flex items-end gap-[1.5px]">
                {[4, 6, 8, 10].map((h) => (
                  <span key={h} className="w-[2.5px] rounded-sm bg-ink" style={{ height: h }} />
                ))}
              </span>
              <span className="ml-1 h-[9px] w-[18px] rounded-[3px] border border-ink p-[1px]">
                <span className="block h-full w-3/4 rounded-[1px] bg-ink" />
              </span>
            </span>
          </div>

          {/* app bar */}
          <div className="flex items-center gap-2.5 border-b border-line px-4 py-3">
            <ChevronLeft aria-hidden="true" className="h-4 w-4 text-ink-soft" />
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-canvas font-display text-[12px] font-bold text-ink ring-1 ring-line">{scene.glyph}</span>
            <div className="min-w-0">
              <p className="truncate font-display text-[13px] font-semibold text-ink">{scene.title}</p>
              <p className="font-display text-[10.5px] text-ink-faint">{scene.app}</p>
            </div>
          </div>

          {/* conversation */}
          <div className="flex-1 space-y-3 overflow-hidden bg-paper px-4 py-4">
            <p className="text-center font-display text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-faint">Today</p>
            <div className="max-w-[85%] rounded-2xl rounded-tl-md bg-raised px-3.5 py-2.5 text-[12.5px] leading-snug text-ink-soft shadow-[0_0_0_1px_var(--o-line)]">{scene.context}</div>
            <AnimatePresence>
              {phase === "done" && (
                <motion.div
                  key="sent"
                  className="ml-auto max-w-[85%] whitespace-pre-line rounded-2xl rounded-tr-md bg-espresso px-3.5 py-2.5 text-[12.5px] leading-snug text-sand"
                  initial={reduceMotion ? false : { opacity: 0, y: 40, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 28 }}
                >
                  {scene.polished}
                </motion.div>
              )}
              {phase === "done" && (
                <motion.div
                  key="chips"
                  className="flex flex-wrap justify-end gap-1.5"
                  initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.25 }}
                >
                  {scene.chips.map((c) => (
                    <span key={c} className="inline-flex items-center gap-1 rounded-md bg-brand-soft px-2 py-1 font-display text-[10.5px] font-semibold text-brand">
                      <Check aria-hidden="true" className="h-3 w-3" strokeWidth={3} />
                      {c}
                    </span>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* what Oravo heard */}
          <AnimatePresence>
            {(listening || phase === "polishing") && (
              <motion.div
                key="heard"
                className="absolute inset-x-4 bottom-[150px] rounded-xl bg-espresso/90 px-3.5 py-2.5 text-[11.5px] italic leading-snug text-sand/80"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 4 }}
              >
                <span className="mb-1 block font-display text-[9.5px] font-semibold uppercase not-italic tracking-[0.14em] text-sand/50">
                  {phase === "polishing" ? "Polishing…" : "You said"}
                </span>
                “{rawWords.slice(0, words).join(" ")}
                {listening && <span className="o-caret ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] bg-sand/70" />}”
              </motion.div>
            )}
          </AnimatePresence>

          {/* the Oravo bubble */}
          <div className="absolute bottom-[96px] right-3 flex h-11 items-center gap-2.5 rounded-full bg-espresso pl-3.5 pr-1.5 shadow-[0_12px_24px_-10px_rgba(42,33,27,0.7)]">
            <X aria-hidden="true" className="h-3.5 w-3.5 text-sand/70" />
            <span className="flex h-5 w-[86px] items-center gap-[2px]" aria-hidden="true">
              {Array.from({ length: 18 }).map((_, i) => (
                <motion.span
                  key={i}
                  className="w-[2.5px] rounded-full bg-brand"
                  animate={listening && !reduceMotion ? { height: [3, 6 + ((i * 7) % 13), 4] } : { height: 2, opacity: 0.6 }}
                  transition={{ duration: 0.5 + (i % 4) * 0.1, repeat: listening ? Infinity : 0, delay: i * 0.02 }}
                />
              ))}
            </span>
            <span className={`relative flex h-8 w-8 items-center justify-center rounded-full ring-2 ${listening ? "ring-brand" : "ring-sand/30"}`}>
              {listening && !reduceMotion && <span className="absolute inset-0 animate-ping rounded-full bg-brand/30" />}
              <span className={`h-3.5 w-3.5 rounded-full ${listening ? "bg-brand" : "bg-sand/40"}`} />
            </span>
          </div>

          {/* compose */}
          <div className="border-t border-line bg-raised px-3 pb-6 pt-3">
            <div className="flex items-end gap-2">
              <div className="min-h-[52px] flex-1 rounded-2xl bg-canvas px-3.5 py-2.5 text-[12.5px] leading-snug text-ink ring-1 ring-line">
                {showText ? (
                  <span className="whitespace-pre-line">
                    {scene.polished.slice(0, chars)}
                    {phase === "typing" && <span className="o-caret ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] bg-ink" />}
                  </span>
                ) : phase === "polishing" ? (
                  <span className="block space-y-1.5 pt-1" aria-hidden="true">
                    <motion.span className="block h-2 w-[85%] rounded bg-line" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 0.8, repeat: Infinity }} />
                    <motion.span className="block h-2 w-[60%] rounded bg-line" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 0.8, repeat: Infinity, delay: 0.1 }} />
                  </span>
                ) : (
                  <span className="text-ink-faint">Message</span>
                )}
              </div>
              <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors ${phase === "done" ? "bg-cloud text-cloud-ink ring-1 ring-cloud-line" : "bg-canvas text-ink-faint ring-1 ring-line"}`}>
                <Send aria-hidden="true" className="h-4 w-4" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

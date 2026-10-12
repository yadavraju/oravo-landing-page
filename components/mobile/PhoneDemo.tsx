"use client";

import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { Check, CheckCheck, ChevronLeft, Mic, MoreVertical, Send, Signal, Wifi } from "lucide-react";
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
  const sent = phase === "done";

  return (
    <div ref={ref} className={`relative mx-auto w-[288px] sm:w-[308px] ${className}`}>
      {/* Side keys: volume rocker and power, on the right edge as on Android. */}
      <span className="absolute -right-[3px] top-[118px] h-[54px] w-[4px] rounded-r-[3px] bg-[#d3c5b3] shadow-[inset_-1px_0_0_rgba(255,255,255,0.5)]" aria-hidden="true" />
      <span className="absolute -right-[3px] top-[196px] h-[34px] w-[4px] rounded-r-[3px] bg-[#d3c5b3] shadow-[inset_-1px_0_0_rgba(255,255,255,0.5)]" aria-hidden="true" />

      {/* Body: a cream finish with a polished rim, not a black slab. */}
      <div className="rounded-[50px] bg-[#e9dfd1] p-[7px] shadow-[inset_0_0_0_1px_#cbbca9,inset_0_0_0_3px_#f4ede3,0_1px_0_0_rgba(255,255,255,0.7),0_50px_90px_-42px_rgba(51,48,42,0.55),0_18px_30px_-20px_rgba(51,48,42,0.35)]">
        {/* Bezel */}
        <div className="rounded-[44px] bg-[#d9cdbd] p-[3px]">
          <div className="relative flex h-[600px] flex-col overflow-hidden rounded-[41px] bg-paper sm:h-[630px]">
            {/* status bar with the punch-hole camera */}
            <div className="relative flex h-9 shrink-0 items-center justify-between px-6 font-display text-[11.5px] font-semibold text-ink">
              <span>9:41</span>
              <span className="absolute left-1/2 top-2.5 h-[13px] w-[13px] -translate-x-1/2 rounded-full bg-[#3b342e] shadow-[inset_0_0_0_2px_#5a514a,0_0_0_1.5px_#e4d9cb]" aria-hidden="true">
                <span className="absolute left-[3px] top-[3px] h-[3px] w-[3px] rounded-full bg-[#8a8fa0]" />
              </span>
              <span className="flex items-center gap-1.5 text-ink" aria-hidden="true">
                <Wifi className="h-3.5 w-3.5" strokeWidth={2.4} />
                <Signal className="h-3.5 w-3.5" strokeWidth={2.4} />
                <span className="flex items-center gap-[1px]">
                  <span className="h-[10px] w-[20px] rounded-[3px] border-[1.5px] border-ink/80 p-[1.5px]">
                    <span className="block h-full w-[72%] rounded-[1px] bg-ink/80" />
                  </span>
                  <span className="h-[4px] w-[1.5px] rounded-r-sm bg-ink/60" />
                </span>
              </span>
            </div>

            {/* app bar */}
            <div className="flex shrink-0 items-center gap-2.5 border-b border-line bg-raised px-3.5 py-2.5">
              <ChevronLeft aria-hidden="true" className="h-4 w-4 text-ink-soft" />
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-soft font-display text-[12px] font-bold text-brand">{scene.glyph}</span>
              <div className="min-w-0 flex-1">
                <p className="truncate font-display text-[13px] font-semibold text-ink">{scene.title}</p>
                <p className="font-display text-[10.5px] text-ink-faint">{scene.app}</p>
              </div>
              <MoreVertical aria-hidden="true" className="h-4 w-4 text-ink-faint" />
            </div>

            {/* conversation, on a faint dotted wallpaper */}
            <div className="relative flex-1 space-y-3 overflow-hidden px-3.5 py-4" style={{ backgroundImage: "radial-gradient(rgba(51,48,42,0.07) 1px, transparent 1px)", backgroundSize: "14px 14px" }}>
              <p className="text-center"><span className="rounded-md bg-raised/80 px-2 py-0.5 font-display text-[10px] font-semibold uppercase tracking-[0.12em] text-ink-faint ring-1 ring-line">Today</span></p>
              <div className="max-w-[84%] rounded-2xl rounded-tl-md bg-raised px-3.5 py-2.5 text-[12.5px] leading-snug text-ink-soft shadow-[0_0_0_1px_var(--o-line)]">
                {scene.context}
                <span className="mt-1 block text-right font-display text-[9.5px] text-ink-faint">9:38</span>
              </div>
              <AnimatePresence>
                {sent && (
                  <motion.div
                    key="sent"
                    className="ml-auto max-w-[84%] whitespace-pre-line rounded-2xl rounded-tr-md bg-cloud px-3.5 py-2.5 text-[12.5px] leading-snug text-cloud-ink shadow-[0_0_0_1px_var(--o-cloud-line)]"
                    initial={reduceMotion ? false : { opacity: 0, y: 40, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 28 }}
                  >
                    {scene.polished}
                    <span className="mt-1 flex items-center justify-end gap-1 font-display text-[9.5px] text-cloud-ink/60">
                      9:41 <CheckCheck aria-hidden="true" className="h-3 w-3" />
                    </span>
                  </motion.div>
                )}
                {sent && (
                  <motion.div
                    key="chips"
                    className="flex flex-wrap justify-end gap-1.5"
                    initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 0.25 }}
                  >
                    {scene.chips.map((c) => (
                      <span key={c} className="inline-flex items-center gap-1 rounded-md bg-raised px-2 py-1 font-display text-[10.5px] font-semibold text-ink-soft ring-1 ring-line">
                        <Check aria-hidden="true" className="h-3 w-3 text-brand" strokeWidth={3} />
                        {c}
                      </span>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* what Oravo heard */}
              <AnimatePresence>
                {(listening || phase === "polishing") && (
                  <motion.div
                    key="heard"
                    className="absolute inset-x-3.5 bottom-3 rounded-xl bg-raised/95 px-3.5 py-2.5 text-[11.5px] italic leading-snug text-ink-soft shadow-[0_0_0_1px_var(--o-line),0_12px_24px_-14px_rgba(51,48,42,0.4)]"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                  >
                    <span className="mb-1 block font-display text-[9.5px] font-semibold uppercase not-italic tracking-[0.14em] text-ink-faint">
                      {phase === "polishing" ? "Polishing…" : "Oravo is listening"}
                    </span>
                    “{rawWords.slice(0, words).join(" ")}
                    {listening && <span className="o-caret ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] bg-brand" />}”
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* compose */}
            <div className="shrink-0 bg-raised px-2.5 pb-2 pt-2">
              <div className="flex items-end gap-2">
                <div className="min-h-[40px] flex-1 rounded-[20px] bg-canvas px-3.5 py-2.5 text-[12.5px] leading-snug text-ink ring-1 ring-line">
                  {showText ? (
                    <span className="whitespace-pre-line">
                      {scene.polished.slice(0, chars)}
                      <span className="o-caret ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] bg-brand" />
                    </span>
                  ) : phase === "polishing" ? (
                    <span className="block space-y-1.5 pt-1" aria-hidden="true">
                      <motion.span className="block h-2 w-[85%] rounded bg-line" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 0.8, repeat: Infinity }} />
                    </span>
                  ) : (
                    <span className="text-ink-faint">Message</span>
                  )}
                </div>
                <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors ${sent ? "bg-cloud text-cloud-ink ring-1 ring-cloud-line" : "bg-canvas text-ink-faint ring-1 ring-line"}`}>
                  <Send aria-hidden="true" className="h-4 w-4" />
                </span>
              </div>
            </div>

            {/* keyboard, with Oravo in its toolbar */}
            <div className="shrink-0 bg-[#efe8de] px-1.5 pb-1 pt-1.5" aria-hidden="true">
              <div className="mb-1.5 flex h-9 items-center gap-2 px-1.5">
                <span className={`flex h-8 flex-1 items-center gap-2 rounded-full px-2.5 transition-colors ${listening ? "bg-cloud ring-1 ring-cloud-line" : "bg-raised/70 ring-1 ring-line"}`}>
                  <span className={`relative flex h-5 w-5 items-center justify-center rounded-full ${listening ? "bg-raised text-cloud-ink" : "bg-canvas text-ink-soft"}`}>
                    {listening && !reduceMotion && <span className="absolute inset-0 animate-ping rounded-full bg-cloud-line/70" />}
                    <Mic className="relative h-3 w-3" />
                  </span>
                  <span className="flex h-4 flex-1 items-center gap-[2px] overflow-hidden">
                    {Array.from({ length: 22 }).map((_, i) => (
                      <motion.span
                        key={i}
                        className={`w-[2.5px] shrink-0 rounded-full ${listening ? "bg-cloud-ink/70" : "bg-ink/20"}`}
                        animate={listening && !reduceMotion ? { height: [3, 5 + ((i * 7) % 11), 3] } : { height: 3 }}
                        transition={{ duration: 0.5 + (i % 4) * 0.1, repeat: listening ? Infinity : 0, delay: i * 0.02 }}
                      />
                    ))}
                  </span>
                  <span className={`font-display text-[10.5px] font-semibold ${listening ? "text-cloud-ink" : "text-ink-faint"}`}>
                    {listening ? "Listening" : phase === "polishing" ? "Polishing" : "Oravo"}
                  </span>
                </span>
              </div>
              {KEY_ROWS.map((row, r) => (
                <div key={r} className="mb-[5px] flex justify-center gap-[4px]" style={{ paddingInline: r === 1 ? 12 : 0 }}>
                  {row.map((k) => (
                    <span
                      key={k}
                      className={`flex h-[30px] items-center justify-center rounded-[6px] font-display text-[12px] text-ink shadow-[0_1px_0_0_rgba(51,48,42,0.12)] ${
                        k.length > 1 || k === "↵" ? "w-[34px] bg-[#e2d8ca] text-[10px] text-ink-soft" : "w-[22px] bg-raised"
                      } ${k === "space" ? "!w-[118px]" : ""}`}
                    >
                      {k === "space" ? "" : k === "shift" ? "⇧" : k === "del" ? "⌫" : k}
                    </span>
                  ))}
                </div>
              ))}
              {/* gesture bar */}
              <div className="flex justify-center pb-1 pt-1.5">
                <span className="h-[4px] w-[96px] rounded-full bg-ink/45" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const KEY_ROWS = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  ["shift", "z", "x", "c", "v", "b", "n", "m", "del"],
  ["?123", ",", "space", ".", "↵"],
];

"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { SimpleIconData } from "./UseCasePageTemplate";
import { MacWindow, macAppFor } from "../landing/MacWindow";

// One realistic sample per app category: what you say, and what lands in the app.
const SAMPLES: Record<string, { raw: string; polished: string; field: string }> = {
  communication: {
    field: "Message",
    raw: "hey team so um the client call moved to thursday at two, can someone share the updated deck before that",
    polished: "Hey team, the client call moved to Thursday at 2 PM. Could someone share the updated deck before then?",
  },
  productivity: {
    field: "Comment",
    raw: "update on this, design is done, uh, waiting on copy from marketing, should be ready for review by friday",
    polished: "Update: design is done. We're waiting on copy from marketing, and it should be ready for review by Friday.",
  },
  developer: {
    field: "Pull request description",
    raw: "this pr fixes the race condition in the token refresh, um, added a mutex and two tests for the retry path",
    polished: "This PR fixes the race condition in the token refresh. It adds a mutex and two tests for the retry path.",
  },
  ai: {
    field: "Prompt",
    raw: "write a follow up email to a client who missed our demo, keep it friendly, offer two new time slots next week",
    polished: "Write a follow-up email to a client who missed our demo. Keep it friendly and offer two new time slots next week.",
  },
  writing: {
    field: "Draft",
    raw: "most people think writing in a second language is about vocabulary but honestly its more about confidence",
    polished: "Most people think writing in a second language is about vocabulary. Honestly, it's more about confidence.",
  },
  design: {
    field: "Comment",
    raw: "love the new layout, maybe we increase the spacing above the headline and try the darker blue for the button",
    polished: "Love the new layout! Maybe we increase the spacing above the headline and try the darker blue for the button.",
  },
  browser: {
    field: "Text field",
    raw: "hi i'm interested in the senior designer role, i have eight years experience in product design mostly b2b",
    polished: "Hi, I'm interested in the Senior Designer role. I have eight years of experience in product design, mostly B2B.",
  },
  crm: {
    field: "Activity note",
    raw: "call with priya from acme, they liked the pilot, um, need security review, next step send proposal by tuesday",
    polished: "Call with Priya from Acme: they liked the pilot and need a security review. Next step: send the proposal by Tuesday.",
  },
  support: {
    field: "Reply",
    raw: "hi sorry for the trouble, i've reset your account, um, can you try logging in again and let me know if it works",
    polished: "Hi, sorry for the trouble! I've reset your account. Could you try logging in again and let me know if it works?",
  },
};

export function AppDictationDemo({
  appName,
  icon,
  accent,
  category = "communication",
}: {
  appName: string;
  icon: SimpleIconData;
  accent: string;
  category?: string;
}) {
  const sample = SAMPLES[category] ?? SAMPLES.communication;
  const chrome = macAppFor(appName);
  const mark = icon ? (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill={accent} aria-hidden="true">
      <path d={icon.path} />
    </svg>
  ) : (
    <span className="h-2 w-2 rounded-full" style={{ background: accent }} />
  );
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.3 });
  const reduceMotion = useReducedMotion();
  const PERIOD = 10000;
  const [t, setT] = useState(reduceMotion ? PERIOD - 1 : 0);

  useEffect(() => {
    if (reduceMotion || !inView) return;
    const started = performance.now() - t;
    const id = setInterval(() => setT((performance.now() - started) % PERIOD), 40);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, reduceMotion]);

  const rawWords = sample.raw.split(" ");
  const words = Math.min(rawWords.length, Math.floor(Math.max(0, t - 500) / 130));
  const listenEnd = 500 + rawWords.length * 130 + 300;
  const polishStart = listenEnd + 700;
  const chars = Math.max(0, Math.min(sample.polished.length, Math.floor((t - polishStart) / 20)));
  const state = t < listenEnd ? "listening" : t < polishStart ? "polishing" : "done";

  return (
    <div ref={ref} className="relative">
      <div className="frame-dotted absolute -inset-4 hidden sm:block" aria-hidden="true" />
      <MacWindow app={chrome} title={chrome === "plain" || chrome === "browser" ? appName : sample.field} subtitle={chrome === "plain" ? `— ${sample.field}` : undefined} icon={mark} className="!rounded-2xl" bodyClassName="p-0">

        <div className="space-y-4 p-5 sm:p-6">
          <div className="min-h-[76px] rounded-xl bg-canvas p-3.5 ring-1 ring-line">
            <p className="eyebrow">You say</p>
            <p className="mt-1.5 text-[14px] italic leading-relaxed text-ink-soft">
              {rawWords.slice(0, words).join(" ")}
              {state === "listening" && <span className="o-caret ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] bg-ink-faint" />}
            </p>
          </div>

          <div className="min-h-[120px] rounded-xl p-4 ring-1" style={{ boxShadow: `inset 3px 0 0 ${accent}`, borderColor: "transparent" }}>
            <p className="eyebrow">In {appName}</p>
            <p className="mt-1.5 text-[15.5px] leading-relaxed text-ink">
              {sample.polished.slice(0, chars)}
              {state === "done" && chars < sample.polished.length && (
                <span className="o-caret ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] bg-primary-500" />
              )}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2 rounded-lg bg-cloud px-3 py-2 text-cloud-ink ring-1 ring-cloud-line">
              <span className="flex h-4 items-center gap-[2px]" aria-hidden="true">
                {Array.from({ length: 9 }).map((_, i) => (
                  <motion.span
                    key={i}
                    className="w-[2px] rounded-full bg-cloud-ink/70"
                    animate={state === "listening" ? { height: [3, 6 + ((i * 7) % 9), 4] } : { height: 3 }}
                    transition={{ duration: 0.7, repeat: state === "listening" ? Infinity : 0, delay: i * 0.05 }}
                  />
                ))}
              </span>
              <span className="font-display text-[11.5px] font-semibold">
                {state === "listening" ? "Listening…" : state === "polishing" ? "Polishing…" : "Typed by Oravo"}
              </span>
            </span>
            {chars >= sample.polished.length && (
              <span className="inline-flex items-center gap-1 font-display text-[11.5px] font-semibold text-primary-500">
                <Check aria-hidden="true" className="h-3.5 w-3.5" /> Punctuation and grammar fixed
              </span>
            )}
          </div>
        </div>
      </MacWindow>
    </div>
  );
}

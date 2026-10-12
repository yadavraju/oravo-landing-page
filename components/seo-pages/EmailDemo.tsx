"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Mail, Paperclip, Send } from "lucide-react";
import { useState } from "react";
import { Keycap, OravoPill, type PillState } from "./OravoPill";
import { Caret, typed, useLoopClock } from "./useLoopClock";

/*
 * Hero demo for /voice-dictation-for-email: a compose window. You hold the
 * shortcut, ramble the email out loud, and Oravo writes it with a greeting,
 * paragraphs and a sign-off. Then it is sent, and the loop starts again.
 */

const RAW = "hi priya thanks for the call today um as discussed we'll send the revised pilot proposal by thursday and uh set up a review the week after, best sam";
const POLISHED = "Hi Priya,\n\nThanks for the call today. As discussed, we'll send the revised pilot proposal by Thursday and set up a review the following week.\n\nBest,\nSam";

const PERIOD = 15000;
const LISTEN = 900;
const RAW_MS = 26;

export function EmailDemo() {
  const { ref, t } = useLoopClock(PERIOD);
  const listenEnd = LISTEN + RAW.length * RAW_MS + 200;
  const polishEnd = listenEnd + 800;
  const typedEnd = polishEnd + POLISHED.length * 16;
  const sentAt = typedEnd + 1600;
  const state: PillState = t < LISTEN ? "idle" : t < listenEnd ? "listening" : t < polishEnd ? "polishing" : "done";
  const raw = typed(RAW, t, LISTEN, RAW_MS);
  const body = typed(POLISHED, t, polishEnd, 16);
  const sent = t > sentAt;
  const pressed = t > 300 && t < 900;

  return (
    <figure ref={ref} className="relative">
      <div className="frame-dotted absolute -inset-4 hidden sm:block" aria-hidden="true" />
      <div className="absolute -top-9 right-2 z-20 flex items-center gap-1.5 rounded-lg bg-paper/90 px-2 py-1.5 ring-1 ring-line sm:-top-6 sm:right-4" aria-hidden="true">
        <Keycap label="fn" pressed={pressed} />
        <span className="font-display text-[11px] text-ink-faint">or</span>
        <Keycap label="Ctrl" pressed={pressed} />
        <Keycap label="Win" pressed={pressed} />
      </div>

      <div className="relative overflow-hidden rounded-2xl bg-raised shadow-[0_0_0_1px_var(--o-line),0_30px_60px_-30px_rgba(51,48,42,0.45)]" aria-hidden="true">
        <div className="flex items-center gap-2 border-b border-line bg-canvas px-4 py-3 text-ink">
          <Mail className="h-3.5 w-3.5 text-ink-soft" />
          <span className="font-display text-[12.5px] font-semibold">New message</span>
          <span className="ml-auto flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-line" />
            <span className="h-2 w-2 rounded-full bg-line" />
          </span>
        </div>
        <div className="divide-y divide-line px-5 text-[13px]">
          <p className="py-2.5 text-ink-faint">
            To <span className="ml-2 rounded-md bg-canvas px-2 py-0.5 text-ink ring-1 ring-line">priya@northwind.co</span>
          </p>
          <p className="py-2.5 text-ink-faint">
            Subject <span className="ml-2 font-medium text-ink">Pilot next steps</span>
          </p>
        </div>

        <div className="relative min-h-[260px] border-t border-line px-5 pt-4 pb-24">
          <AnimatePresence>
            {sent && (
              <motion.div
                key="sent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-raised/95"
              >
                <motion.span
                  initial={{ x: -30, y: 20, rotate: -10, opacity: 0 }}
                  animate={{ x: 0, y: 0, rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-canvas text-ink ring-1 ring-line"
                >
                  <Send className="h-5 w-5" />
                </motion.span>
                <span className="font-display text-[13px] font-semibold text-ink">Sent, without typing a word.</span>
              </motion.div>
            )}
          </AnimatePresence>
          <p className="whitespace-pre-line text-[14px] leading-relaxed text-ink">
            {body}
            <Caret show={state === "done" && body.length < POLISHED.length} />
          </p>

          <div className="absolute inset-x-5 bottom-4 flex flex-col items-start gap-2">
            <AnimatePresence>
              {t > LISTEN && t < polishEnd && (
                <motion.div
                  key="raw"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6, filter: "blur(4px)" }}
                  className="max-w-full rounded-lg bg-canvas px-3 py-2 text-[12px] italic leading-snug text-ink-soft ring-1 ring-line"
                >
                  <span className="mr-1.5 font-display text-[10px] font-semibold uppercase not-italic tracking-[0.12em] text-ink-faint">You said</span>
                  {raw}
                  <Caret show={state === "listening"} className="bg-ink-faint" />
                </motion.div>
              )}
            </AnimatePresence>
            <div className="flex w-full items-center justify-between">
              <OravoPill state={state} />
              <span className="flex items-center gap-2">
                <Paperclip className="h-4 w-4 text-ink-faint" />
                <motion.span
                  className={`flex h-8 items-center gap-1.5 rounded-lg px-3 font-display text-[12px] font-semibold ${body.length === POLISHED.length ? "bg-cloud text-cloud-ink ring-1 ring-cloud-line" : "bg-canvas text-ink-faint ring-1 ring-line"}`}
                  animate={t > typedEnd + 900 && t < sentAt ? { scale: [1, 0.94, 1] } : { scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  Send <Send className="h-3 w-3" />
                </motion.span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <figcaption className="sr-only">
        Demo: dictating an email by voice. The rambling spoken version becomes a polished email with a greeting, paragraphs and a sign-off, then it is sent.
      </figcaption>
    </figure>
  );
}

/* ------------------------------------------------------------------------ */
/* One thought, five apps: the tone follows the app you are writing in.     */
/* ------------------------------------------------------------------------ */

const SAID = "tell the team the launch moved to friday because qa found a bug we want to fix first";

const TONES = [
  { app: "Gmail", tone: "Professional", text: "Hi team,\n\nQuick update: the launch has moved to Friday. QA found a bug we want to fix before release.\n\nThanks,\nSam" },
  { app: "Slack", tone: "Casual", text: "Heads up, launch is moving to Friday. QA caught a bug we're fixing first." },
  { app: "Teams", tone: "Business casual", text: "Hi all, the launch is now scheduled for Friday. QA found a bug, and we're fixing it before release." },
  { app: "WhatsApp", tone: "Concise", text: "Launch moved to Friday. QA found a bug, fixing it first." },
  { app: "LinkedIn", tone: "Polished", text: "Hi Maya, a quick note that our launch has moved to Friday while we fix an issue QA found. I'll share an update as soon as it's live." },
];

export function ToneSwitcher() {
  const SLOT = 4200;
  const { ref, t } = useLoopClock(SLOT * TONES.length);
  const [picked, setPicked] = useState<number | null>(null);
  const active = picked ?? Math.floor(t / SLOT) % TONES.length;
  const tone = TONES[active];

  return (
    <div ref={ref} className="frame-dotted bg-paper/50 p-5 sm:p-8">
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10">
        <div>
          <p className="eyebrow">You say, once</p>
          <p className="mt-3 font-serif text-[22px] italic leading-snug text-ink-soft sm:text-[24px]">&ldquo;{SAID}&rdquo;</p>
          <div role="tablist" aria-label="Apps" className="mt-6 inline-flex flex-wrap gap-0.5 rounded-lg bg-canvas p-1 ring-1 ring-line">
            {TONES.map((item, i) => {
              const on = i === active;
              return (
                <button
                  key={item.app}
                  type="button"
                  role="tab"
                  aria-selected={on}
                  aria-controls="tone-panel"
                  onClick={() => setPicked(i)}
                  className={`rounded-md px-3 py-1.5 font-display text-[12.5px] font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30 ${
                    on ? "bg-raised text-ink shadow-[0_0_0_1px_var(--o-line),0_2px_4px_rgba(51,48,42,0.08)]" : "text-ink-faint hover:text-ink"
                  }`}
                >
                  {item.app}
                </button>
              );
            })}
          </div>
          {picked === null && <p className="mt-3 font-display text-[12px] text-ink-faint">Cycling through apps. Pick one to stop.</p>}
        </div>

        <div id="tone-panel" role="tabpanel" className="relative min-h-[230px] rounded-xl bg-raised p-5 shadow-[0_0_0_1px_var(--o-line),0_20px_40px_-28px_rgba(51,48,42,0.45)] sm:p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={tone.app}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center justify-between border-b border-line pb-3">
                <span className="font-display text-[13px] font-semibold text-ink">In {tone.app}</span>
                <span className="rounded-md bg-brand-soft px-2 py-0.5 font-display text-[11.5px] font-semibold text-brand">{tone.tone}</span>
              </div>
              <p className="mt-4 whitespace-pre-line text-[15px] leading-relaxed text-ink">{tone.text}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

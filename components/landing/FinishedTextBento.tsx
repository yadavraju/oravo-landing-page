"use client";

import dynamic from "next/dynamic";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";
import { SectionIntro } from "./PageBlocks";

const EffortlessIntegration = dynamic(() => import("../effortless-integration-updated"));
const SmartSimpleBrilliant = dynamic(() => import("../smart-simple-brilliant"));
const YourWorkInSync = dynamic(() => import("../your-work-in-sync"));

/* The filler words get struck through by a pen, then the sentence closes up. */
const WORDS: { w: string; filler?: boolean }[] = [
  { w: "So", filler: true },
  { w: "um,", filler: true },
  { w: "I" },
  { w: "think" },
  { w: "we" },
  { w: "should," },
  { w: "like,", filler: true },
  { w: "move" },
  { w: "the" },
  { w: "launch" },
  { w: "to," },
  { w: "you", filler: true },
  { w: "know,", filler: true },
  { w: "next" },
  { w: "Tuesday" },
];

function FillerStrike() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  const reduceMotion = useReducedMotion();
  const [stage, setStage] = useState<0 | 1 | 2>(reduceMotion ? 2 : 0); // 0 raw, 1 struck, 2 clean

  // raw (1.2s) -> struck through (1.4s) -> clean (3.6s) -> raw again
  useEffect(() => {
    if (reduceMotion || !inView) return;
    const wait = stage === 0 ? 1200 : stage === 1 ? 1400 : 3600;
    const id = setTimeout(() => setStage(((stage + 1) % 3) as 0 | 1 | 2), wait);
    return () => clearTimeout(id);
  }, [stage, inView, reduceMotion]);

  return (
    <div ref={ref} className="paper-ruled relative rounded-xl p-5 ring-1 ring-line sm:p-6">
      <p className="eyebrow mb-3">{stage === 2 ? "What Oravo types" : "What you said"}</p>
      <p className="flex min-h-[64px] flex-wrap items-baseline gap-x-[0.32em] gap-y-1 font-serif text-[22px] leading-snug text-ink sm:text-[26px]">
        {WORDS.map((word, i) => {
          if (word.filler) {
            return (
              <motion.span
                key={i}
                layout
                className="relative inline-block overflow-hidden whitespace-nowrap text-ink-faint"
                animate={stage === 2 ? { width: 0, opacity: 0, marginRight: "-0.32em" } : { width: "auto", opacity: 1, marginRight: 0 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                {word.w}
                <motion.span
                  className="absolute left-0 top-1/2 h-[2.5px] w-full origin-left rounded bg-brand"
                  initial={false}
                  animate={{ scaleX: stage >= 1 ? 1 : 0 }}
                  transition={{ duration: 0.35, delay: (i % 5) * 0.06 }}
                />
              </motion.span>
            );
          }
          // Capitalise the first kept word and finish the sentence once it is clean.
          let text = word.w;
          if (stage === 2 && word.w === "to,") text = "to";
          if (stage === 2 && word.w === "should,") text = "should";
          if (stage === 2 && word.w === "Tuesday") text = "Tuesday.";
          return (
            <motion.span key={i} layout transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }} className="inline-block">
              {text}
            </motion.span>
          );
        })}
      </p>
    </div>
  );
}

export default function FinishedTextBento() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
      <SectionIntro
        doodle="sparkle"
        eyebrow="Polished, not just transcribed"
        title="Speak once. Get finished text."
        lede="Oravo doesn't just transcribe. It removes filler words, fixes grammar, adds punctuation, and matches the tone of whatever app you're writing in, automatically."
      />

      <div className="mt-12 grid gap-4 lg:grid-cols-3 lg:gap-5">
        {/* 1. Filler words, struck out live */}
        <Reveal className="lg:col-span-2">
          <article className="flex h-full flex-col gap-5 rounded-2xl bg-brand-soft/60 p-6 ring-1 ring-brand/15 sm:p-8">
            <div>
              <span className="font-display text-xs font-semibold text-brand">01</span>
              <h3 className="display-3 mt-2 text-ink">No more &ldquo;um, like, you know.&rdquo;</h3>
              <p className="mt-2 max-w-lg text-[14.5px] leading-relaxed text-ink-soft">
                Oravo removes filler words, fixes false starts, and turns rambling thoughts into clean sentences, so what comes out sounds intentional, not dictated.
              </p>
            </div>
            <FillerStrike />
          </article>
        </Reveal>

        {/* 2. Works where you write (tall) */}
        <Reveal delay={0.06} className="lg:row-span-2">
          <article className="flex h-full flex-col gap-5 rounded-2xl bg-raised p-6 ring-1 ring-line sm:p-8">
            <div>
              <span className="font-display text-xs font-semibold text-brand">02</span>
              <h3 className="display-3 mt-2 text-ink">Works where you write</h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">
                Gmail, Slack, Notion, Google Docs, Word, Linear, Jira, Figma, VS Code, LinkedIn: anywhere your cursor blinks, Oravo types.
              </p>
            </div>
            <div className="relative flex min-h-[300px] flex-1 items-center justify-center overflow-hidden rounded-xl bg-canvas">
              <EffortlessIntegration width={400} height={300} className="max-h-full max-w-full" />
            </div>
          </article>
        </Reveal>

        {/* 3. Formatting */}
        <Reveal>
          <article className="flex h-full flex-col gap-5 rounded-2xl bg-raised p-6 ring-1 ring-line sm:p-8">
            <div>
              <span className="font-display text-xs font-semibold text-brand">03</span>
              <h3 className="display-3 mt-2 text-ink">Punctuation, paragraphs, capitalization.</h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">
                Bullet lists when you say &ldquo;three things.&rdquo; Line breaks when you pause. No voice commands needed.
              </p>
            </div>
            <div className="relative flex h-[240px] items-center justify-center overflow-hidden rounded-xl bg-canvas">
              <YourWorkInSync width="400" height="240" theme="light" className="scale-75 sm:scale-80" />
            </div>
          </article>
        </Reveal>

        {/* 4. Tone per app */}
        <Reveal delay={0.06}>
          <article className="flex h-full flex-col gap-5 rounded-2xl bg-clay/70 p-6 ring-1 ring-line sm:p-8">
            <div>
              <span className="font-display text-xs font-semibold text-brand">04</span>
              <h3 className="display-3 mt-2 text-ink">Same thought, different apps.</h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">
                Casual in chat, professional in email, structured in docs. Oravo learns your style over time.
              </p>
            </div>
            <div className="flex flex-1 flex-col justify-center gap-3">
              <p className="text-center text-[13.5px] italic text-ink-soft">&ldquo;tell them I&apos;ll be late&rdquo;</p>
              <div className="rounded-lg bg-raised p-3 ring-1 ring-line">
                <p className="eyebrow mb-1 !text-[10px]">Email</p>
                <p className="text-[14px] text-ink">I&apos;ll be arriving shortly after the scheduled time.</p>
              </div>
              <div className="ml-6 rounded-lg bg-raised p-3 ring-1 ring-line">
                <p className="eyebrow mb-1 !text-[10px]">Slack</p>
                <p className="text-[14px] text-ink">Running a few mins late!</p>
              </div>
            </div>
          </article>
        </Reveal>

        {/* 5. Context (full width) */}
        <Reveal className="lg:col-span-3">
          <article className="grid items-center gap-6 rounded-2xl bg-raised p-6 ring-1 ring-line sm:p-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <span className="font-display text-xs font-semibold text-brand">05</span>
              <h3 className="display-3 mt-2 text-ink">Context-aware AI</h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">
                Understands technical jargon, proper nouns from your contacts, and what you&apos;re working on. Works with multilingual speech and professional vocabulary. Benchmark results will be published with the method and sample sizes.
              </p>
            </div>
            <div className="flex h-[260px] items-center justify-center overflow-hidden rounded-xl bg-canvas">
              <SmartSimpleBrilliant width="100%" height="100%" theme="light" className="scale-75 sm:scale-85" />
            </div>
          </article>
        </Reveal>
      </div>
    </div>
  );
}

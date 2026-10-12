"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { useRef, type ReactNode } from "react";
import { Doodle, type DoodleName } from "@/components/landing/Doodle";
import { FaqAccordion } from "@/components/landing/FaqAccordion";
import { CtaPanel, SectionIntro } from "@/components/landing/PageBlocks";
import { Parallax } from "@/components/landing/Parallax";
import { Reveal, RevealWords } from "@/components/landing/Reveal";
import type { Action, Intro } from "./types";

/* ------------------------------------------------------------------------ */
/* A statement band: one big line and the promises that back it. Sits on the
   cool mist band or any warm ground (ink text; the dark tone is kept only for
   small dark stages). */

export function Statement({
  eyebrow,
  title,
  body,
  points,
  doodle,
  tone = "light",
  aside,
  pointsLabel,
}: {
  eyebrow: string;
  title: string;
  body?: ReactNode;
  points?: string[];
  doodle: DoodleName;
  tone?: "dark" | "light";
  aside?: ReactNode;
  pointsLabel?: string;
}) {
  const dark = tone === "dark";
  return (
    <div className="relative grid grid-cols-1 items-center gap-12 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
      <div className="flex flex-col items-start">
        <Parallax speed={18} className="mb-4">
          <Doodle name={doodle} tone={tone} className="w-32 sm:w-36" />
        </Parallax>
        <Reveal>
          <p className={`eyebrow ${dark ? "!text-white/45" : ""}`}>{eyebrow}</p>
        </Reveal>
        <h2 className={`display-2 mt-3 ${dark ? "text-white" : "text-ink"}`}>
          <RevealWords text={title} />
        </h2>
        {body && (
          <Reveal delay={0.12}>
            <p className={`mt-5 max-w-[540px] text-base leading-relaxed sm:text-lg ${dark ? "text-white/70" : "text-ink-soft"}`}>{body}</p>
          </Reveal>
        )}
      </div>
      <Reveal delay={0.1}>
        <Parallax speed={30}>
          {aside ?? (
            <div className={`rounded-2xl p-6 sm:p-7 ${dark ? "bg-white/[0.06] ring-1 ring-white/10 backdrop-blur-xl" : "surface-solid"}`}>
              {pointsLabel && <p className={`eyebrow mb-5 ${dark ? "!text-white/45" : ""}`}>{pointsLabel}</p>}
              <ul className={`grid divide-y text-sm sm:text-base ${dark ? "divide-white/10 text-white/85" : "divide-line text-ink"}`}>
                {(points ?? []).map((point) => (
                  <li key={point} className="flex items-start gap-3 py-3.5 first:pt-0 last:pb-0">
                    <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center ${dark ? "text-brand-soft" : "text-brand"}`}>
                      <Check aria-hidden="true" className="h-3.5 w-3.5" strokeWidth={2.5} />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Parallax>
      </Reveal>
    </div>
  );
}

/* ------------------------------------------------------------------------ */
/* Two counter-running rows of language names. Pauses under reduced motion
   (globals.css pauses any element animating o-marquee). */

export function LanguageRibbon({ languages, tone = "light" }: { languages: string[]; tone?: "dark" | "light" }) {
  const dark = tone === "dark";
  const half = Math.ceil(languages.length / 2);
  const rows = [languages.slice(0, half), languages.slice(half)];
  return (
    <div
      className={`overflow-hidden rounded-2xl py-6 ${dark ? "bg-white/[0.06] ring-1 ring-white/10" : "surface-solid"}`}
      style={{ maskImage: "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)", WebkitMaskImage: "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)" }}
    >
      {rows.map((row, r) => (
        <div key={r} className={`flex w-max gap-2.5 ${r ? "mt-3" : ""}`} style={{ animation: `o-marquee ${38 + r * 8}s linear infinite ${r ? "reverse" : ""}` }}>
          {[...row, ...row].map((lang, i) => (
            <span
              key={`${lang}-${i}`}
              className={`rounded-lg px-3.5 py-2 font-display text-[13.5px] font-medium ${dark ? "bg-white/[0.07] text-white/80 ring-1 ring-white/10" : "chip text-ink"}`}
            >
              {lang}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------------ */
/* How it works in three beats, each with a small looping stage:
   a key that presses, a waveform that listens, a line that types. */

function KeyStage({ active }: { active: boolean }) {
  return (
    <div className="flex h-full items-center justify-center">
      <motion.span
        className="flex h-14 min-w-[92px] items-center justify-center rounded-xl bg-raised px-4 font-display text-[13px] font-semibold text-ink shadow-[0_0_0_1px_var(--o-line),0_5px_0_0_var(--o-line)]"
        animate={active ? { y: [0, 4, 4, 0], boxShadow: ["0 0 0 1px var(--o-line), 0 5px 0 0 var(--o-line)", "0 0 0 1px var(--o-line), 0 1px 0 0 var(--o-line)", "0 0 0 1px var(--o-line), 0 1px 0 0 var(--o-line)", "0 0 0 1px var(--o-line), 0 5px 0 0 var(--o-line)"] } : undefined}
        transition={{ duration: 2.4, times: [0, 0.12, 0.7, 0.82], repeat: Infinity, repeatDelay: 0.6 }}
      >
        Hotkey
      </motion.span>
    </div>
  );
}

function WaveStage({ active }: { active: boolean }) {
  return (
    <div className="flex h-full items-center justify-center gap-[3px]" aria-hidden="true">
      {Array.from({ length: 18 }).map((_, i) => (
        <motion.span
          key={i}
          className={`w-[3px] rounded-full ${i % 5 === 2 ? "bg-brand" : "bg-ink/35"}`}
          style={{ height: 6 }}
          animate={active ? { height: [6, 10 + ((i * 11) % 26), 6] } : undefined}
          transition={{ duration: 1.1, repeat: Infinity, delay: i * 0.06, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

function TypeStage({ active, text }: { active: boolean; text: string }) {
  return (
    <div className="flex h-full items-center px-5">
      <p className="relative font-serif text-[17px] leading-snug text-ink">
        <motion.span
          className="inline-block overflow-hidden whitespace-nowrap align-bottom"
          initial={false}
          animate={active ? { maxWidth: ["0ch", `${text.length + 2}ch`, `${text.length + 2}ch`, "0ch"] } : { maxWidth: `${text.length + 2}ch` }}
          transition={{ duration: 5, times: [0, 0.45, 0.85, 1], repeat: active ? Infinity : 0, ease: "easeInOut" }}
        >
          {text}
        </motion.span>
        <span className="o-caret ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] bg-brand" aria-hidden="true" />
      </p>
    </div>
  );
}

export function ThreeBeats({
  intro,
  beats,
  typed = "See you at three.",
}: {
  intro: Intro;
  beats: [{ title: string; description: string }, { title: string; description: string }, { title: string; description: string }];
  typed?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.3 });
  const reduceMotion = useReducedMotion();
  const active = inView && !reduceMotion;
  const stages = [<KeyStage key="k" active={active} />, <WaveStage key="w" active={active} />, <TypeStage key="t" active={active} text={typed} />];
  return (
    <div ref={ref}>
      <SectionIntro {...intro} />
      <ol className="mt-12 grid gap-5 md:grid-cols-3">
        {beats.map((beat, i) => (
          <Reveal as="li" key={beat.title} delay={0.12 + i * 0.12}>
            <div className="flex h-full flex-col">
              <div className="frame-dotted h-36 bg-paper/50">{stages[i]}</div>
              <div className="mt-5 flex items-baseline gap-3 px-1">
                <span className="font-display text-xs font-semibold text-brand">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-display text-[16px] font-semibold tracking-[-0.01em] text-ink">{beat.title}</h3>
                  <p className="mt-1.5 text-[14.5px] leading-relaxed text-ink-soft">{beat.description}</p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </div>
  );
}

/* ------------------------------------------------------------------------ */
/* FAQ, split: the intro and a way to reach a person on the left, the
   accordion on the right. */

export function AudienceFaq({ intro, items, aside }: { intro: Intro; items: { question: string; answer: string }[]; aside?: ReactNode }) {
  return (
    <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
      <div className="lg:sticky lg:top-28 lg:self-start">
        <SectionIntro {...intro} align="left" />
        <Reveal delay={0.2}>
          <div className="mt-8 border-t border-line pt-6 font-display text-[14px] leading-relaxed text-ink-soft">
            {aside ?? (
              <>
                Still have a question? Email{" "}
                <a href="mailto:hi@oravo.ai" className="font-semibold text-primary-500 underline-offset-4 hover:underline">
                  hi@oravo.ai
                </a>{" "}
                and a person will reply.
              </>
            )}
          </div>
        </Reveal>
      </div>
      <Reveal delay={0.1}>
        <FaqAccordion items={items} />
      </Reveal>
    </div>
  );
}

/* ------------------------------------------------------------------------ */

export function AudienceCta({
  eyebrow,
  title,
  description,
  bullets = [],
  doodle,
  primary = { label: "Download free", href: "/download" },
  secondary,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  bullets?: string[];
  doodle: DoodleName;
  primary?: Action;
  secondary?: Action;
}) {
  return (
    <CtaPanel
      eyebrow={eyebrow}
      title={title}
      doodle={doodle}
      primary={primary}
      secondary={secondary}
      description={
        <>
          {description}
          {bullets.length > 0 && (
            <span className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-1.5 font-display text-[12.5px] text-ink-faint">
              {bullets.map((b) => (
                <span key={b} className="inline-flex items-center gap-1.5">
                  <Check aria-hidden="true" className="h-3 w-3 text-brand" strokeWidth={2.5} />
                  {b}
                </span>
              ))}
            </span>
          )}
        </>
      }
    />
  );
}

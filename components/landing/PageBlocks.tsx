"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import type { ReactNode } from "react";
import { Doodle, type DoodleName } from "./Doodle";
import { Parallax } from "./Parallax";
import { Reveal, RevealWords } from "./Reveal";

/*
 * Shared page building blocks, so every route is built from the same parts:
 * the hero, section intros, step timelines, feature grids and the closing
 * panel. See docs/design-guide.md.
 */

export type Action = { label: string; href: string };

export const SHELL = "mx-auto w-full max-w-6xl px-5 sm:px-8";

/* ------------------------------------------------------------------------ */

export function SectionIntro({
  eyebrow,
  title,
  lede,
  doodle,
  align = "center",
  tone = "light",
  as = "h2",
  id,
  className = "",
}: {
  eyebrow?: string;
  title: string;
  lede?: ReactNode;
  doodle?: DoodleName;
  align?: "center" | "left";
  tone?: "light" | "dark";
  as?: "h1" | "h2";
  id?: string;
  className?: string;
}) {
  const Heading = as;
  const centred = align === "center";
  return (
    <div className={`flex flex-col ${centred ? "mx-auto max-w-[760px] items-center text-center" : "max-w-xl items-start"} ${className}`}>
      {doodle && (
        <Parallax speed={18} className="mb-4">
          <Doodle name={doodle} tone={tone} className="w-28 sm:w-32" />
        </Parallax>
      )}
      {eyebrow && (
        <Reveal>
          <p className={`eyebrow ${tone === "dark" ? "!text-white/45" : ""}`}>{eyebrow}</p>
        </Reveal>
      )}
      <Heading id={id} className={`${as === "h1" ? "display-1" : "display-2"} mt-3 ${tone === "dark" ? "text-white" : "text-ink"}`}>
        <RevealWords text={title} />
      </Heading>
      {lede && (
        <Reveal delay={0.12}>
          <p className={`subtitle mt-4 max-w-xl ${centred ? "mx-auto" : ""} ${tone === "dark" ? "!text-white/65" : ""}`}>{lede}</p>
        </Reveal>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------------ */

export function PageHero({
  eyebrow,
  eyebrowIcon,
  title,
  description,
  primary,
  secondary,
  note,
  visual,
  doodles = ["speech", "plane"],
}: {
  eyebrow?: string;
  eyebrowIcon?: ReactNode;
  title: string;
  description: ReactNode;
  primary?: Action;
  secondary?: Action;
  note?: ReactNode;
  visual?: ReactNode;
  doodles?: [DoodleName, DoodleName];
}) {
  const split = Boolean(visual);
  return (
    <section className="relative w-full overflow-hidden bg-sand pt-32 pb-16 sm:pt-40 sm:pb-24">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <Parallax speed={140} className="absolute -left-40 top-16 sm:-left-24">
          <div className="h-[360px] w-[360px] rounded-full bg-sand-deep sm:h-[440px] sm:w-[440px]" />
        </Parallax>
        <Parallax speed={-90} className="absolute -right-32 top-[48%] sm:-right-16">
          <div className="h-[280px] w-[280px] rotate-12 rounded-[56px] bg-clay sm:h-[340px] sm:w-[340px]" />
        </Parallax>
        {!split && (
          <>
            <Parallax speed={60} className="absolute left-[3%] top-[240px] hidden xl:block">
              <Doodle name={doodles[0]} className="w-40" />
            </Parallax>
            <Parallax speed={-40} className="absolute right-[3%] top-[150px] hidden xl:block">
              <Doodle name={doodles[1]} className="w-40" />
            </Parallax>
          </>
        )}
      </div>

      <div className={`${SHELL} relative ${split ? "grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-14" : ""}`}>
        <div className={split ? "" : "mx-auto flex max-w-[56rem] flex-col items-center text-center"}>
          {split && <Doodle name={doodles[0]} className="mb-5 w-24" />}
          {!split && <Doodle name={doodles[0]} className="mb-5 w-24 xl:hidden" />}
          {eyebrow && (
            <Reveal>
              <p className="eyebrow inline-flex items-center gap-2">
                {eyebrowIcon}
                {eyebrow}
              </p>
            </Reveal>
          )}
          <h1 className={`display-1 mt-4 text-ink ${split ? "" : "text-balance"}`}>
            <RevealWords text={title} delay={0.05} />
          </h1>
          <Reveal delay={0.3}>
            <p className={`subtitle mt-5 max-w-[620px] ${split ? "" : "mx-auto text-balance"}`}>{description}</p>
          </Reveal>
          {(primary || secondary) && (
            <Reveal delay={0.4}>
              <div className={`mt-8 flex flex-col gap-3 sm:flex-row ${split ? "" : "justify-center"}`}>
                {primary && (
                  <a href={primary.href} className="btn-primary">
                    {primary.label}
                    <ArrowRight aria-hidden="true" className="h-4 w-4" />
                  </a>
                )}
                {secondary && (
                  <a href={secondary.href} className="btn-secondary">
                    {secondary.label}
                  </a>
                )}
              </div>
            </Reveal>
          )}
          {note && (
            <Reveal delay={0.5}>
              <p className="mt-4 font-display text-[12.5px] text-ink-faint">{note}</p>
            </Reveal>
          )}
        </div>
        {visual && (
          <Reveal delay={0.25} y={24}>
            <Parallax speed={30}>{visual}</Parallax>
          </Reveal>
        )}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------------ */

export function FeatureGrid({
  items,
  columns = 3,
}: {
  items: { title: string; description: string; icon?: ReactNode }[];
  columns?: 2 | 3;
}) {
  return (
    <Reveal>
      <div
        className={`surface-solid grid grid-cols-1 gap-px overflow-hidden !rounded-2xl bg-line ${
          columns === 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2"
        }`}
      >
        {items.map((item, i) => (
          <div key={item.title} className="group bg-raised p-6 transition-colors hover:bg-paper sm:p-7">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-soft text-primary-500 ring-1 ring-primary-500/15 transition-transform duration-300 group-hover:-rotate-6">
              {item.icon ?? <span className="font-display text-[12px] font-bold">{String(i + 1).padStart(2, "0")}</span>}
            </span>
            <h3 className="mt-4 font-display text-[16px] font-semibold tracking-[-0.01em] text-ink">{item.title}</h3>
            <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">{item.description}</p>
          </div>
        ))}
      </div>
    </Reveal>
  );
}

/* ------------------------------------------------------------------------ */

export function StepsTimeline({ steps }: { steps: { title: string; description: string }[] }) {
  const reduceMotion = useReducedMotion();
  return (
    <div className="relative">
      {/* The dotted line that joins the steps draws itself across. */}
      <svg className="pointer-events-none absolute left-0 right-0 top-6 hidden h-2 w-full md:block" preserveAspectRatio="none" viewBox="0 0 100 2" aria-hidden="true">
        <motion.line
          x1="4"
          y1="1"
          x2="96"
          y2="1"
          stroke="rgba(51,48,42,0.25)"
          strokeWidth="1.5"
          strokeDasharray="1.2 1.6"
          vectorEffect="non-scaling-stroke"
          initial={reduceMotion ? false : { pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
        />
      </svg>
      <ol className={`relative grid gap-5 sm:grid-cols-2 ${{ 2: "md:grid-cols-2", 3: "md:grid-cols-3", 4: "md:grid-cols-4", 5: "md:grid-cols-5" }[steps.length] ?? "md:grid-cols-3"}`}>
        {steps.map((step, i) => (
          <Reveal as="li" key={step.title} delay={0.15 + i * 0.12}>
            <div className="flex h-full flex-col">
              <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-xl bg-raised font-display text-[15px] font-bold text-primary-500 shadow-[0_0_0_1px_var(--o-line),0_8px_18px_-10px_rgba(51,48,42,0.35)]">
                {i + 1}
              </span>
              <div className="frame-dotted mt-4 flex-1 bg-paper/60 p-5">
                <h3 className="font-display text-[15.5px] font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">{step.description}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </div>
  );
}

/* ------------------------------------------------------------------------ */

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-[15px] leading-relaxed text-ink">
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-primary-soft text-primary-500">
            <Check aria-hidden="true" className="h-3.5 w-3.5" strokeWidth={2.5} />
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

/* ------------------------------------------------------------------------ */

export function CtaPanel({
  eyebrow = "Start in under a minute",
  title,
  description,
  primary,
  secondary,
  doodle = "mic",
}: {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  primary: Action;
  secondary?: Action;
  doodle?: DoodleName;
}) {
  return (
    <section className="relative isolate w-full overflow-hidden rounded-3xl bg-sand px-6 py-16 text-center ring-1 ring-line sm:px-16 sm:py-20">
      <Parallax speed={80} className="pointer-events-none absolute -left-20 -top-16" aria-hidden="true">
        <div className="h-64 w-64 rounded-full bg-sand-deep" />
      </Parallax>
      <Parallax speed={-60} className="pointer-events-none absolute -bottom-24 -right-16" aria-hidden="true">
        <div className="h-72 w-72 rotate-12 rounded-[48px] bg-clay" />
      </Parallax>
      <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center">
        <Doodle name={doodle} className="mb-4 w-28 sm:w-32" />
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
        </Reveal>
        <h2 className="display-2 mt-3 text-ink">
          <RevealWords text={title} />
        </h2>
        {description && (
          <Reveal delay={0.12}>
            <p className="subtitle mx-auto mt-4 max-w-lg text-balance">{description}</p>
          </Reveal>
        )}
        <Reveal delay={0.2}>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={primary.href} className="btn-primary">
              {primary.label}
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </a>
            {secondary && (
              <a href={secondary.href} className="btn-secondary">
                {secondary.label}
              </a>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

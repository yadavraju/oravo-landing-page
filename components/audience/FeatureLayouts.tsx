"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { SectionIntro } from "@/components/landing/PageBlocks";
import { Reveal } from "@/components/landing/Reveal";
import type { Feature, Intro } from "./types";

/*
 * Three ways to lay out an audience page's features, so neighbouring pages
 * never share a composition:
 *   FeatureIndex  sticky intro on the left, a numbered index on the right
 *   FeatureSpec   centred intro over a spec sheet (title | description rows)
 *   FeatureBento  one large tile with live art, smaller tiles around it
 */

function IconTile({ icon, index, size = "md" }: { icon?: ReactNode; index: number; size?: "md" | "lg" }) {
  // Small and neutral: the accent is kept for tiny touches, not icon blocks.
  const box = size === "lg" ? "h-9 w-9 [&_svg]:h-[18px] [&_svg]:w-[18px]" : "h-8 w-8 [&_svg]:h-4 [&_svg]:w-4";
  return (
    <span
      className={`flex shrink-0 items-center justify-center rounded-lg bg-canvas text-ink-soft ring-1 ring-line transition-transform duration-300 group-hover:-rotate-6 ${box}`}
    >
      {icon ?? <span className="font-display text-[12px] font-bold">{String(index + 1).padStart(2, "0")}</span>}
    </span>
  );
}

/* ------------------------------------------------------------------------ */

export function FeatureIndex({ intro, items, aside }: { intro: Intro; items: Feature[]; aside?: ReactNode }) {
  return (
    <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
      <div className="lg:sticky lg:top-28 lg:self-start">
        <SectionIntro {...intro} align="left" />
        {aside && <Reveal delay={0.2} className="mt-10 hidden lg:block">{aside}</Reveal>}
      </div>
      <Reveal>
        <ol className="surface-solid divide-y divide-line overflow-hidden !rounded-2xl">
          {items.map((item, i) => (
            <li key={item.title} className="group flex gap-5 p-6 transition-colors hover:bg-paper sm:p-7">
              <IconTile icon={item.icon} index={i} />
              <div className="flex-1">
                <h3 className="font-display text-[16px] font-semibold tracking-[-0.01em] text-ink">{item.title}</h3>
                <p className="mt-1.5 text-[14.5px] leading-relaxed text-ink-soft">{item.description}</p>
              </div>
              <span className="hidden font-display text-[12px] font-semibold text-ink-faint sm:block">{String(i + 1).padStart(2, "0")}</span>
            </li>
          ))}
        </ol>
      </Reveal>
    </div>
  );
}

/* ------------------------------------------------------------------------ */

export function FeatureSpec({ intro, items }: { intro: Intro; items: Feature[] }) {
  return (
    <>
      <SectionIntro {...intro} />
      <Reveal className="mt-12">
        <div className="frame-dotted p-2 sm:p-3">
          <dl className="surface-solid divide-y divide-line overflow-hidden !rounded-2xl">
            {items.map((item, i) => (
              <div
                key={item.title}
                className="group grid gap-3 px-6 py-6 transition-colors hover:bg-paper sm:px-8 md:grid-cols-[44px_0.9fr_1.4fr] md:items-baseline md:gap-8"
              >
                <IconTile icon={item.icon} index={i} />
                <dt className="display-3 text-ink">{item.title}</dt>
                <dd className="text-[15px] leading-relaxed text-ink-soft">{item.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Reveal>
    </>
  );
}

/* ------------------------------------------------------------------------ */

export function FeatureBento({ intro, items, art }: { intro: Intro; items: Feature[]; art: ReactNode }) {
  const [lead, ...rest] = items;
  const last = rest.length === 5 ? rest[4] : null;
  const middle = last ? rest.slice(0, 4) : rest;
  const tile = "group rounded-2xl bg-raised p-6 shadow-[0_0_0_1px_var(--o-line),0_1px_2px_rgba(51,48,42,0.04)] transition-transform duration-300 hover:-translate-y-1";
  return (
    <>
      <SectionIntro {...intro} />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Reveal className="sm:col-span-2 lg:row-span-2">
          <article className={`${tile} flex h-full flex-col sm:p-8`}>
            <IconTile icon={lead.icon} index={0} size="lg" />
            <h3 className="display-3 mt-5 text-ink">{lead.title}</h3>
            <p className="mt-2 max-w-md text-[15px] leading-relaxed text-ink-soft">{lead.description}</p>
            <div className="mt-6 flex-1 rounded-xl bg-canvas ring-1 ring-line">{art}</div>
          </article>
        </Reveal>
        {middle.map((item, i) => (
          <Reveal key={item.title} delay={0.06 * (i + 1)}>
            <article className={`${tile} h-full`}>
              <IconTile icon={item.icon} index={i + 1} />
              <h3 className="mt-4 font-display text-[15.5px] font-semibold tracking-[-0.01em] text-ink">{item.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">{item.description}</p>
            </article>
          </Reveal>
        ))}
        {last && (
          <Reveal className="sm:col-span-2 lg:col-span-4" delay={0.3}>
            <article className={`${tile} flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6`}>
              <IconTile icon={last.icon} index={5} size="lg" />
              <h3 className="font-display text-[16px] font-semibold tracking-[-0.01em] text-ink sm:w-56 sm:shrink-0">{last.title}</h3>
              <p className="text-[14.5px] leading-relaxed text-ink-soft">{last.description}</p>
            </article>
          </Reveal>
        )}
      </div>
    </>
  );
}

/* ------------------------------------------------------------------------ */

/* Live art for the bento's lead tile: the vocabulary this reader uses,
   floating as keys. The first `marked` terms carry the accent. */
export function TermCloud({ terms, marked = 2, caption }: { terms: string[]; marked?: number; caption?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.3 });
  const reduceMotion = useReducedMotion();
  return (
    <div ref={ref} className="flex h-full min-h-[180px] flex-col justify-center gap-4 p-5 sm:p-6">
      <div className="flex flex-wrap justify-center gap-2.5">
        {terms.map((term, i) => (
          <motion.span
            key={term}
            className={`chip px-3 py-1.5 font-display text-[13px] font-medium ${i < marked ? "text-brand" : "text-ink"}`}
            animate={inView && !reduceMotion ? { y: [0, i % 2 ? -5 : 5, 0] } : { y: 0 }}
            transition={{ duration: 3.4 + (i % 3) * 0.6, repeat: inView && !reduceMotion ? Infinity : 0, ease: "easeInOut", delay: i * 0.18 }}
          >
            {term}
          </motion.span>
        ))}
      </div>
      {caption && <p className="text-center font-display text-[12px] text-ink-faint">{caption}</p>}
    </div>
  );
}

"use client";

import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { SectionIntro } from "@/components/landing/PageBlocks";
import { Reveal } from "@/components/landing/Reveal";
import type { Intro, Scenario } from "./types";

/*
 * Four ways to tell an audience's real workflows:
 *   ScenarioTickets   story on the left, a torn-off stub with where it happens
 *   ScenarioTimeline  a week or a day, drawn down a line
 *   ScenarioDeck      notes pinned to the band, a little askew
 *   ScenarioSwitcher  pick a workflow, see what you say and what lands
 */

/* ------------------------------------------------------------------------ */

export function ScenarioTickets({ intro, items, stubLabel = "Where" }: { intro: Intro; items: Scenario[]; stubLabel?: string }) {
  return (
    <>
      <SectionIntro {...intro} />
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {items.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.06}>
            <article className="flex h-full overflow-hidden rounded-2xl bg-raised shadow-[0_0_0_1px_var(--o-line),0_12px_28px_-20px_rgba(51,48,42,0.35)] transition-transform duration-300 hover:-translate-y-1">
              <div className="flex-1 p-6">
                <span className="font-display text-xs font-semibold text-brand">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="display-3 mt-2 text-ink">{item.title}</h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-ink-soft">{item.description}</p>
              </div>
              {item.tag && (
                <div className="relative flex w-28 shrink-0 flex-col items-center justify-center border-l-[1.5px] border-dashed border-line bg-canvas p-4 text-center sm:w-36">
                  <span className="absolute -left-[9px] -top-[9px] h-4 w-4 rounded-full bg-paper ring-1 ring-line" aria-hidden="true" />
                  <span className="absolute -bottom-[9px] -left-[9px] h-4 w-4 rounded-full bg-paper ring-1 ring-line" aria-hidden="true" />
                  <span className="eyebrow !text-[10px]">{stubLabel}</span>
                  <span className="mt-1.5 font-display text-[13.5px] font-bold leading-tight text-ink">{item.tag}</span>
                </div>
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </>
  );
}

/* ------------------------------------------------------------------------ */

export function ScenarioTimeline({ intro, items }: { intro: Intro; items: Scenario[] }) {
  const reduceMotion = useReducedMotion();
  return (
    <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
      <div className="lg:sticky lg:top-28 lg:self-start">
        <SectionIntro {...intro} align="left" />
      </div>
      <ol className="relative">
        <motion.span
          aria-hidden="true"
          className="absolute bottom-6 left-[19px] top-6 w-px origin-top bg-ink/20 sm:left-[91px]"
          initial={reduceMotion ? false : { scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
        />
        {items.map((item, i) => (
          <Reveal as="li" key={item.title} delay={0.15 + i * 0.12} className="relative grid grid-cols-[40px_1fr] gap-4 pb-6 last:pb-0 sm:grid-cols-[72px_40px_1fr]">
            <span className="hidden pt-3 text-right font-display text-[13px] font-semibold text-ink-soft sm:block">{item.time}</span>
            <span className="relative z-10 mt-1.5 flex h-10 w-10 items-center justify-center rounded-xl bg-raised font-display text-[13px] font-bold text-brand shadow-[0_0_0_1px_var(--o-line),0_8px_18px_-10px_rgba(51,48,42,0.35)]">
              {i + 1}
            </span>
            <div className="rounded-2xl bg-raised p-5 shadow-[0_0_0_1px_var(--o-line)] sm:p-6">
              <p className="eyebrow sm:hidden">{item.time}</p>
              <h3 className="font-display text-[16px] font-semibold tracking-[-0.01em] text-ink">{item.title}</h3>
              <p className="mt-1.5 text-[14.5px] leading-relaxed text-ink-soft">{item.description}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </div>
  );
}

/* ------------------------------------------------------------------------ */

const TILTS = ["-rotate-1", "rotate-[0.8deg]", "rotate-[0.6deg]", "-rotate-[0.9deg]"];

export function ScenarioDeck({ intro, items }: { intro: Intro; items: Scenario[] }) {
  return (
    <>
      <SectionIntro {...intro} />
      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:gap-10">
        {items.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.08} className={i % 2 ? "sm:mt-10" : ""}>
            <article
              className={`paper-ruled relative rounded-xl px-7 pb-7 pt-9 shadow-[0_0_0_1px_var(--o-line),0_18px_34px_-22px_rgba(51,48,42,0.45)] transition-transform duration-300 hover:-translate-y-1 hover:rotate-0 ${TILTS[i % TILTS.length]}`}
            >
              <span className="absolute -top-3 left-1/2 h-6 w-20 -translate-x-1/2 rotate-[-3deg] rounded-[3px] bg-sand-deep/80" aria-hidden="true" />
              <div className="flex items-baseline justify-between gap-3">
                <span className="font-display text-xs font-semibold text-brand">{String(i + 1).padStart(2, "0")}</span>
                {item.tag && <span className="eyebrow !text-[10px]">{item.tag}</span>}
              </div>
              <h3 className="display-3 mt-2 text-ink">{item.title}</h3>
              <p className="mt-3 text-[15px] leading-[28px] text-ink-soft">{item.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </>
  );
}

/* ------------------------------------------------------------------------ */

export function ScenarioSwitcher({ intro, items }: { intro: Intro; items: Scenario[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.4 });
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const DWELL = 6500;

  // Gentle auto-advance while on screen; stops for hover, focus, a click or reduced motion.
  useEffect(() => {
    if (!inView || paused || reduceMotion) return;
    const id = setTimeout(() => setActive((a) => (a + 1) % items.length), DWELL);
    return () => clearTimeout(id);
  }, [active, inView, paused, reduceMotion, items.length]);

  const item = items[active];

  return (
    <div ref={ref} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocusCapture={() => setPaused(true)}>
      <SectionIntro {...intro} />

      <Reveal className="mt-10 flex justify-center">
        <div role="tablist" aria-label="Workflows" className="flex max-w-full gap-1 overflow-x-auto rounded-xl bg-raised/70 p-1 ring-1 ring-line backdrop-blur-sm [scrollbar-width:none]">
          {items.map((s, i) => {
            const on = i === active;
            return (
              <button
                key={s.title}
                type="button"
                role="tab"
                id={`scenario-tab-${i}`}
                aria-selected={on}
                aria-controls="scenario-panel"
                onClick={() => {
                  setActive(i);
                  setPaused(true);
                }}
                className={`h-9 shrink-0 whitespace-nowrap rounded-lg px-3.5 font-display text-[13px] font-medium transition-colors ${
                  on ? "key-on" : "text-ink-soft hover:bg-canvas hover:text-ink"
                }`}
              >
                {s.title}
              </button>
            );
          })}
        </div>
      </Reveal>

      <Reveal delay={0.1} className="mt-8">
        <div className="frame-dotted p-3 sm:p-4">
          <div
            id="scenario-panel"
            role="tabpanel"
            aria-labelledby={`scenario-tab-${active}`}
            className="relative overflow-hidden rounded-2xl bg-raised p-6 shadow-[0_0_0_1px_var(--o-line)] sm:p-8"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10"
              >
                <div>
                  <span className="font-display text-xs font-semibold text-brand">{String(active + 1).padStart(2, "0")}</span>
                  <h3 className="display-3 mt-2 text-ink">{item.title}</h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">{item.description}</p>
                </div>
                <div className="grid gap-3 sm:grid-cols-[1fr_auto_1fr] sm:items-stretch">
                  {item.say && (
                    <div className="rounded-xl bg-canvas p-4 ring-1 ring-line">
                      <p className="eyebrow">
                        You say{item.sayLang ? <span className="normal-case tracking-normal"> · in {item.sayLang}</span> : null}
                      </p>
                      <p className="mt-1.5 text-[14px] italic leading-relaxed text-ink-soft">“{item.say}”</p>
                    </div>
                  )}
                  <div className="flex items-center justify-center text-ink-faint" aria-hidden="true">
                    <ArrowDown className="h-4 w-4 sm:-rotate-90" />
                  </div>
                  {item.get && (
                    <div className="rounded-xl p-4 ring-1 ring-line" style={{ boxShadow: "inset 3px 0 0 var(--o-accent)" }}>
                      <p className="eyebrow">{item.where ? `In ${item.where}` : "Oravo types"}</p>
                      <p className="mt-1.5 whitespace-pre-line text-[14.5px] leading-relaxed text-ink">{item.get}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Reveal>
    </div>
  );
}

"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { Reveal } from "@/components/landing/Reveal";

/*
 * A vertical timeline: brand numerals joined by a dashed spine that draws
 * itself down the page as the steps come into view.
 */
export function Timeline({
  steps,
  size = "md",
}: {
  steps: { title: string; description: ReactNode; detail?: ReactNode; label?: string }[];
  size?: "md" | "lg";
}) {
  const reduceMotion = useReducedMotion();
  const lg = size === "lg";
  return (
    <ol className="relative">
      <motion.span
        aria-hidden="true"
        className={`absolute top-6 bottom-6 w-0 origin-top border-l-[1.5px] border-dashed border-ink/20 ${lg ? "left-[27px]" : "left-[21px]"}`}
        initial={reduceMotion ? false : { scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.6, ease: [0.33, 0.1, 0.25, 1] }}
      />
      {steps.map((step, i) => (
        <Reveal as="li" key={step.title} delay={0.1 + i * 0.12} className={`relative flex gap-5 sm:gap-7 ${i < steps.length - 1 ? (lg ? "pb-14" : "pb-9") : ""}`}>
          <span
            className={`relative z-10 flex shrink-0 items-center justify-center rounded-xl bg-raised font-display font-bold text-brand shadow-[0_0_0_1px_var(--o-line),0_8px_18px_-10px_rgba(51,48,42,0.35)] ${
              lg ? "h-14 w-14 text-[17px]" : "h-11 w-11 text-[14px]"
            }`}
          >
            {String(i + 1).padStart(2, "0")}
          </span>
          <div className="min-w-0 flex-1 pt-1">
            {step.label && <p className="eyebrow mb-1.5">{step.label}</p>}
            <h3 className={lg ? "display-3 text-ink" : "font-display text-[16px] font-semibold tracking-[-0.01em] text-ink"}>{step.title}</h3>
            <div className={`mt-2 leading-relaxed text-ink-soft ${lg ? "text-[15.5px]" : "text-[14.5px]"}`}>{step.description}</div>
            {step.detail && <div className="mt-4">{step.detail}</div>}
          </div>
        </Reveal>
      ))}
    </ol>
  );
}

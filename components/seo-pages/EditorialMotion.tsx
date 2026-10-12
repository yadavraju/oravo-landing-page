"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import type { ReactNode } from "react";

/* A hairline at the top of the viewport that fills as you read. */
export function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  const reduceMotion = useReducedMotion();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 });
  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-brand"
      style={{ scaleX: reduceMotion ? scrollYProgress : scaleX }}
    />
  );
}

/* A phrase with a hand-drawn stroke under it that sketches itself in on view. */
export function DrawnUnderline({ children, className = "" }: { children: ReactNode; className?: string }) {
  const reduceMotion = useReducedMotion();
  return (
    <span className={`relative inline-block ${className}`}>
      {children}
      <svg className="pointer-events-none absolute -bottom-[0.18em] left-0 h-[0.32em] w-full overflow-visible" viewBox="0 0 200 12" preserveAspectRatio="none" aria-hidden="true">
        <motion.path
          d="M3 8 C 40 3, 80 11, 120 6 S 180 4, 197 7"
          fill="none"
          stroke="var(--o-accent)"
          strokeWidth="1.4"
          strokeLinecap="round"
          initial={reduceMotion ? false : { pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1.1, delay: 0.5, ease: [0.33, 0.1, 0.25, 1] }}
        />
      </svg>
    </span>
  );
}

/* A typed cursor line: keyboard vs voice, as a tiny figure in the margin. */
export function KeysVersusVoice() {
  const reduceMotion = useReducedMotion();
  return (
    <figure className="frame-dotted bg-paper/60 p-5" aria-hidden="true">
      <div className="space-y-4">
        <div>
          <p className="eyebrow">Typing</p>
          <div className="mt-2 h-2 overflow-hidden rounded-full bg-canvas ring-1 ring-line">
            <motion.div
              className="h-full rounded-full bg-ink-faint/60"
              initial={reduceMotion ? false : { width: "0%" }}
              whileInView={{ width: "27%" }}
              viewport={{ once: true }}
              transition={{ duration: 3, ease: "linear" }}
            />
          </div>
        </div>
        <div>
          <p className="eyebrow">Speaking</p>
          <div className="mt-2 h-2 overflow-hidden rounded-full bg-canvas ring-1 ring-line">
            <motion.div
              className="h-full rounded-full bg-brand"
              initial={reduceMotion ? false : { width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 3, ease: "linear" }}
            />
          </div>
        </div>
      </div>
      <figcaption className="mt-4 font-display text-[11.5px] leading-relaxed text-ink-faint">Same three seconds, same thought.</figcaption>
    </figure>
  );
}

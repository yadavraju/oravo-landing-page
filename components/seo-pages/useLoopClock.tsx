"use client";

import { useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/*
 * A looping clock for the hero demos: `t` runs from 0 to `period` ms and wraps.
 * It only ticks while the element is on screen, and under reduced motion it
 * parks just before the end of the loop so every demo shows its finished state.
 */
export function useLoopClock<T extends HTMLElement = HTMLDivElement>(period: number) {
  const ref = useRef<T>(null);
  const inView = useInView(ref, { amount: 0.25 });
  const reduceMotion = useReducedMotion();
  const [t, setT] = useState(0);

  useEffect(() => {
    if (reduceMotion) {
      setT(period - 1);
      return;
    }
    if (!inView) return;
    let started = performance.now() - t;
    const id = setInterval(() => {
      const elapsed = performance.now() - started;
      if (elapsed >= period) started += period * Math.floor(elapsed / period);
      setT((performance.now() - started) % period);
    }, 40);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, reduceMotion, period]);

  return { ref, t, reduceMotion: Boolean(reduceMotion) };
}

/** The first `n` characters of `text` typed at `msPerChar` from `start`. */
export function typed(text: string, t: number, start: number, msPerChar: number) {
  return text.slice(0, Math.max(0, Math.min(text.length, Math.floor((t - start) / msPerChar))));
}

export function Caret({ show, className = "bg-ink" }: { show: boolean; className?: string }) {
  if (!show) return null;
  return <span className={`o-caret ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] ${className}`} aria-hidden="true" />;
}

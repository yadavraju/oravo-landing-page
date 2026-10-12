"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

/*
 * Small shared parts for the product pages (/features, /dictation-app,
 * /voice-typing, /voice-dictation-software, /voice-to-text-app, /use-cases).
 * Demo colours stay warm: ink and a touch of brand terracotta. Sky blue is
 * reserved for buttons and links.
 */

export type IconData = { title: string; hex: string; path: string } | null;

/**
 * A looping clock for scripted demos. It only ticks while the element is on
 * screen, and under reduced motion it parks at the end of the loop so the demo
 * shows its finished state.
 */
export function useLoopClock(period: number, { amount = 0.3, tick = 40 }: { amount?: number; tick?: number } = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount });
  const reduce = useReducedMotion();
  const [t, setT] = useState(0);
  const tRef = useRef(0);

  useEffect(() => {
    if (reduce) {
      setT(period - 1);
      return;
    }
    if (!inView) return;
    const started = performance.now() - tRef.current;
    const id = setInterval(() => {
      const next = (performance.now() - started) % period;
      tRef.current = next;
      setT(next);
    }, tick);
    return () => clearInterval(id);
  }, [inView, reduce, period, tick]);

  const reset = () => {
    tRef.current = 0;
    setT(0);
  };

  return { ref, t, inView, reduce: Boolean(reduce), reset };
}

/** Advances an index every `every` ms while on screen; clicking a tab calls `select`. */
export function useAutoAdvance(count: number, every: number) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.35 });
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (reduce || !inView || paused) return;
    const started = performance.now();
    setProgress(0);
    const id = setInterval(() => {
      const p = (performance.now() - started) / every;
      if (p >= 1) setIndex((i) => (i + 1) % count);
      else setProgress(p);
    }, 50);
    return () => clearInterval(id);
  }, [index, inView, reduce, paused, count, every]);

  const select = (i: number) => {
    setIndex(i);
    setPaused(true);
  };

  return { ref, index, select, progress: reduce || paused ? 0 : progress, paused, setPaused };
}

/**
 * A compact segmented switch: small rectangular keys in one recessed tray.
 * The active key is raised; an optional thin terracotta line shows autoplay
 * progress.
 */
export function Segmented({
  options,
  value,
  onChange,
  label,
  progress,
  className = "",
  idPrefix,
}: {
  options: { id: string; label: string; icon?: ReactNode }[];
  value: number;
  onChange: (index: number) => void;
  label: string;
  progress?: number;
  className?: string;
  idPrefix?: string;
}) {
  return (
    <div
      role="tablist"
      aria-label={label}
      className={`inline-flex max-w-full flex-wrap gap-1 rounded-lg bg-canvas p-1 ring-1 ring-line ${className}`}
    >
      {options.map((o, i) => {
        const on = i === value;
        return (
          <button
            key={o.id}
            type="button"
            role="tab"
            id={idPrefix ? `${idPrefix}-${i}` : undefined}
            aria-selected={on}
            onClick={() => onChange(i)}
            className={`relative flex h-8 shrink-0 items-center gap-1.5 overflow-hidden whitespace-nowrap rounded-md px-3 font-display text-[12.5px] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/25 ${
              on ? "bg-raised text-ink shadow-[0_0_0_1px_var(--o-line),0_1px_3px_rgba(51,48,42,0.1)]" : "text-ink-soft hover:text-ink"
            }`}
          >
            {o.icon}
            {o.label}
            {on && progress !== undefined && progress > 0 && (
              <span className="absolute inset-x-2 bottom-0.5 h-[2px] overflow-hidden rounded-full" aria-hidden="true">
                <span className="block h-full bg-brand/70" style={{ width: `${Math.min(100, progress * 100)}%` }} />
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}

export function Caret({ className = "bg-ink-faint" }: { className?: string }) {
  return <span className={`o-caret ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] ${className}`} aria-hidden="true" />;
}

/** A small live waveform; bars rise while `active`. */
export function Waveform({
  active,
  bars = 9,
  height = 16,
  className = "bg-brand",
  quiet = false,
}: {
  active: boolean;
  bars?: number;
  height?: number;
  className?: string;
  quiet?: boolean;
}) {
  const reduce = useReducedMotion();
  return (
    <span className="flex items-center gap-[2px]" style={{ height }} aria-hidden="true">
      {Array.from({ length: bars }).map((_, i) => {
        const peak = quiet ? 3 + (i % 3) : 5 + ((i * 7) % (height - 4));
        return (
          <motion.span
            key={i}
            className={`w-[2px] rounded-full ${className}`}
            initial={{ height: 3 }}
            animate={active && !reduce ? { height: [3, peak, 4] } : { height: 3 }}
            transition={{ duration: 0.7, repeat: active && !reduce ? Infinity : 0, delay: i * 0.05 }}
          />
        );
      })}
    </span>
  );
}

function isBlue(hex: string) {
  const m = /^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(hex.trim());
  if (!m) return false;
  const [r, g, b] = m.slice(1).map((v) => parseInt(v, 16));
  return b > r + 40 && b >= g;
}

/**
 * A brand mark on a tile. Marks sit in warm ink at rest (so demos never pick up
 * stray brand blues) and take their own colour when a parent `.group` is
 * hovered, unless `tone="brand"` asks for colour all the time.
 */
export function AppGlyph({
  icon,
  color,
  size = 32,
  title,
  tone = "ink",
  className = "",
}: {
  icon: IconData;
  color: string;
  size?: number;
  title?: string;
  tone?: "ink" | "brand";
  className?: string;
}) {
  const inner = Math.round(size * 0.5);
  const label = title ?? icon?.title ?? "";
  // Blue brand marks stay in ink: blue is reserved for buttons and links.
  const glyph = isBlue(color) ? "var(--o-ink)" : color;
  const style = { width: size, height: size, ["--glyph" as string]: glyph } as CSSProperties;
  const fill = tone === "brand" ? "fill-[var(--glyph)]" : "fill-ink transition-[fill] duration-300 group-hover:fill-[var(--glyph)]";
  return (
    <span className={`flex shrink-0 items-center justify-center rounded-lg bg-canvas ring-1 ring-line ${className}`} style={style}>
      {icon ? (
        <svg width={inner} height={inner} viewBox="0 0 24 24" className={fill} role="img" aria-label={label}>
          <path d={icon.path} />
        </svg>
      ) : (
        <span className="font-serif text-ink" style={{ fontSize: Math.round(size * 0.46), lineHeight: 1 }} aria-hidden="true">
          {label.charAt(0)}
        </span>
      )}
    </span>
  );
}

/**
 * Runs a sequence of fixed-length slots: `t` counts up inside the current
 * slot and `index` moves on when it fills. Pauses off screen; under reduced
 * motion every slot shows its finished state.
 */
export function useSlotClock(count: number, slot: number | ((index: number) => number), { amount = 0.3 }: { amount?: number } = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount });
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [t, setT] = useState(0);
  const length = typeof slot === "function" ? slot(index) : slot;

  useEffect(() => {
    if (reduce) {
      setT(length);
      return;
    }
    if (!inView) return;
    const started = performance.now();
    setT(0);
    const id = setInterval(() => {
      const elapsed = performance.now() - started;
      if (elapsed >= length) setIndex((i) => (i + 1) % count);
      else setT(elapsed);
    }, 40);
    return () => clearInterval(id);
  }, [index, inView, reduce, length, count]);

  return { ref, index, setIndex, t, length, reduce: Boolean(reduce), inView };
}

/** App window chrome on a raised surface. */
export function DemoWindow({
  title,
  subtitle,
  leading,
  children,
  className = "",
  bodyClassName = "p-5 sm:p-6",
}: {
  title: string;
  subtitle?: string;
  leading?: ReactNode;
  children: ReactNode;
  className?: string;
  bodyClassName?: string;
}) {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-raised shadow-[0_0_0_1px_var(--o-line),0_30px_60px_-30px_rgba(51,48,42,0.45)] ${className}`}>
      <div className="flex items-center gap-2 border-b border-line bg-canvas px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
        {leading && <span className="ml-2">{leading}</span>}
        <span className={`${leading ? "" : "ml-2"} truncate font-display text-[12.5px] font-semibold text-ink`}>{title}</span>
        {subtitle && <span className="truncate text-[12px] text-ink-faint">— {subtitle}</span>}
      </div>
      <div className={bodyClassName}>{children}</div>
    </div>
  );
}

/** The dark "Oravo is listening" pill used under the demos. */
export function ListeningPill({ state, labels }: { state: "listening" | "polishing" | "done"; labels?: Partial<Record<"listening" | "polishing" | "done", string>> }) {
  const text = { listening: "Listening…", polishing: "Polishing…", done: "Typed by Oravo", ...labels }[state];
  return (
    <span className="inline-flex items-center gap-2 rounded-lg bg-espresso px-3 py-2 text-white">
      <Waveform active={state === "listening"} className="bg-[#e8a07f]" />
      <span className="font-display text-[11.5px] font-semibold">{text}</span>
    </span>
  );
}

/** Splits a spoken line and a polished line into a three-phase script. */
export function scriptPhases(t: number, raw: string, polished: string, { wordMs = 120, charMs = 18, lead = 400, gap = 700 } = {}) {
  const rawWords = raw.split(" ");
  const words = Math.min(rawWords.length, Math.floor(Math.max(0, t - lead) / wordMs));
  const listenEnd = lead + rawWords.length * wordMs + 250;
  const polishStart = listenEnd + gap;
  const chars = Math.max(0, Math.min(polished.length, Math.floor((t - polishStart) / charMs)));
  const state: "listening" | "polishing" | "done" = t < listenEnd ? "listening" : t < polishStart ? "polishing" : "done";
  return { heard: rawWords.slice(0, words).join(" "), typed: polished.slice(0, chars), state, complete: chars >= polished.length };
}

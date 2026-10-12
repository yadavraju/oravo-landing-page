"use client";

import { motion } from "framer-motion";

export type PillState = "idle" | "listening" | "polishing" | "done";

const LABEL: Record<PillState, string> = {
  idle: "Oravo ready",
  listening: "Listening…",
  polishing: "Polishing…",
  done: "Typed by Oravo",
};

/* The floating Oravo bar: espresso, a warm waveform, and what it is doing. */
export function OravoPill({ state, className = "" }: { state: PillState; className?: string }) {
  const live = state === "listening";
  return (
    <span className={`inline-flex items-center gap-2 rounded-lg bg-espresso px-3 py-2 text-white shadow-[0_10px_24px_-12px_rgba(42,33,27,0.7)] ${className}`}>
      <span className="flex h-4 items-center gap-[2px]" aria-hidden="true">
        {Array.from({ length: 9 }).map((_, i) => (
          <motion.span
            key={i}
            className="w-[2px] rounded-full bg-[#e8a07f]"
            animate={live ? { height: [3, 6 + ((i * 7) % 9), 4] } : { height: state === "polishing" ? [3, 5, 3] : 3 }}
            transition={{ duration: live ? 0.7 : 0.9, repeat: live || state === "polishing" ? Infinity : 0, delay: i * 0.05 }}
          />
        ))}
      </span>
      <span className="font-display text-[11.5px] font-semibold">{LABEL[state]}</span>
    </span>
  );
}

/* A keycap that sinks while it is held. */
export function Keycap({ label, pressed }: { label: string; pressed: boolean }) {
  return (
    <motion.kbd
      className="rounded-md border-b-[3px] border-sand-deep bg-raised px-2.5 py-1 font-mono text-[11px] font-semibold text-ink shadow-[0_0_0_1px_var(--o-line)]"
      animate={pressed ? { y: 2, borderBottomWidth: 1 } : { y: 0, borderBottomWidth: 3 }}
      transition={{ duration: 0.12 }}
    >
      {label}
    </motion.kbd>
  );
}

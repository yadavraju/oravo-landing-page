"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useLoopClock } from "./useLoopClock";

/*
 * A stage of app keys. A single Oravo cursor hops from app to app and types a
 * short line into each, to show the same shortcut works everywhere.
 */
export function AppHopper({
  apps,
  caption = "Same shortcut, any text field",
}: {
  apps: { name: string; line: string }[];
  caption?: string;
}) {
  const SLOT = 2200;
  const { ref, t } = useLoopClock(SLOT * apps.length);
  const active = Math.floor(t / SLOT) % apps.length;
  const local = t % SLOT;
  const line = apps[active].line;
  const chars = Math.max(0, Math.min(line.length, Math.floor((local - 250) / 22)));

  return (
    <div ref={ref} className="frame-dotted bg-paper/50 p-5 sm:p-7">
      <div className="flex items-center justify-between">
        <span className="eyebrow">{caption}</span>
        <span className="flex items-center gap-1.5 font-display text-[11px] text-ink-faint">
          <span className="h-1.5 w-1.5 rounded-full bg-brand" /> live
        </span>
      </div>
      <ul className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
        {apps.map((app, i) => {
          const on = i === active;
          return (
            <li
              key={app.name}
              className={`relative flex h-12 items-center gap-2.5 rounded-lg px-3 font-display text-[13.5px] font-semibold transition-colors duration-300 ${
                on ? "bg-espresso text-white" : "bg-raised text-ink ring-1 ring-line"
              }`}
            >
              <span
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md font-display text-[11px] font-bold ${on ? "bg-raised/10 text-[#e8a07f]" : "bg-canvas text-ink-soft"}`}
                aria-hidden="true"
              >
                {app.name.charAt(0)}
              </span>
              <span className="truncate">{app.name}</span>
              {on && (
                <span className="ml-auto flex h-3.5 items-center gap-[2px]" aria-hidden="true">
                  {[0, 1, 2, 3].map((b) => (
                    <motion.span
                      key={b}
                      className="w-[2px] rounded-full bg-[#e8a07f]"
                      animate={{ height: [3, 10 - b * 2, 4] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: b * 0.08 }}
                    />
                  ))}
                </span>
              )}
            </li>
          );
        })}
      </ul>
      <div className="mt-5 rounded-xl bg-raised p-4 ring-1 ring-line" aria-live="off">
        <AnimatePresence mode="wait">
          <motion.p
            key={apps[active].name}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2 }}
            className="font-display text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-faint"
          >
            In {apps[active].name}
          </motion.p>
        </AnimatePresence>
        <p className="mt-1.5 min-h-[48px] text-[14.5px] leading-relaxed text-ink">
          {line.slice(0, chars)}
          {chars < line.length && <span className="o-caret ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] bg-ink" aria-hidden="true" />}
        </p>
      </div>
    </div>
  );
}

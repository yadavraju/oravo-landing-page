"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Search, X } from "lucide-react";
import { useMemo, useState } from "react";
import { AppGlyph, Caret, Waveform, useSlotClock, type IconData } from "./kit";

/*
 * The /use-cases directory: every app page, filterable by category and
 * searchable by name. Marks sit in ink and take their brand colour on hover.
 */

export type DirectoryApp = {
  name: string;
  route: string;
  category: string;
  color: string;
  icon: IconData;
  blurb: string;
};

export type DirectoryCategory = { id: string; label: string };

export function UseCaseDirectory({ apps, categories }: { apps: DirectoryApp[]; categories: DirectoryCategory[] }) {
  const [active, setActive] = useState("all");
  const [query, setQuery] = useState("");
  const reduce = useReducedMotion();

  const counts = useMemo(() => {
    const c: Record<string, number> = { all: apps.length };
    for (const a of apps) c[a.category] = (c[a.category] ?? 0) + 1;
    return c;
  }, [apps]);

  const q = query.trim().toLowerCase();
  const filtered = apps.filter(
    (a) => (active === "all" || a.category === active) && (!q || a.name.toLowerCase().includes(q) || a.blurb.toLowerCase().includes(q)),
  );
  const grouped = active === "all" && !q;
  const label = (id: string) => categories.find((c) => c.id === id)?.label ?? id;

  return (
    <div>
      {/* Filter bar: sticks under the header while you browse. */}
      <div className="z-20 -mx-5 px-5 py-3 sm:sticky sm:top-[76px] sm:-mx-8 sm:px-8">
        <div className="rounded-2xl bg-paper/90 p-2 shadow-[0_0_0_1px_var(--o-line),0_12px_30px_-24px_rgba(51,48,42,0.45)] backdrop-blur-md">
          <div className="flex flex-col gap-2 lg:flex-row lg:items-center">
            <label className="relative flex items-center lg:order-last lg:ml-auto lg:w-52 lg:shrink-0">
              <span className="sr-only">Search apps</span>
              <Search aria-hidden="true" className="pointer-events-none absolute left-3 h-4 w-4 text-ink-faint" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={`Search ${apps.length} apps…`}
                className="h-10 w-full rounded-lg bg-raised pl-9 pr-9 font-display text-[14px] text-ink ring-1 ring-line placeholder:text-ink-faint focus:outline-none focus:ring-2 focus:ring-brand/40"
              />
              {query && (
                <button type="button" onClick={() => setQuery("")} aria-label="Clear search" className="absolute right-2 flex h-6 w-6 items-center justify-center rounded-md text-ink-faint hover:bg-canvas hover:text-ink">
                  <X aria-hidden="true" className="h-3.5 w-3.5" />
                </button>
              )}
            </label>
            <div role="group" aria-label="Filter by category" className="-mx-2 flex gap-1 overflow-x-auto px-2 [scrollbar-width:none] lg:mx-0 lg:px-0">
              {[{ id: "all", label: "All" }, ...categories].map((c) => {
                const on = active === c.id;
                return (
                  <button
                    key={c.id}
                    type="button"
                    aria-pressed={on}
                    onClick={() => setActive(c.id)}
                    className={`relative flex h-10 shrink-0 items-center gap-1.5 rounded-lg px-2.5 font-display text-[12.5px] font-semibold transition-colors ${on ? "text-cloud-ink" : "text-ink-soft hover:bg-raised hover:text-ink"}`}
                  >
                    {on && (
                      <motion.span
                        layoutId={reduce ? undefined : "dir-chip"}
                        className="absolute inset-0 rounded-lg bg-cloud ring-1 ring-cloud-line"
                        transition={{ type: "spring", stiffness: 420, damping: 34 }}
                      />
                    )}
                    <span className="relative">{c.label}</span>
                    <span className={`relative font-display text-[11px] ${on ? "text-cloud-ink/60" : "text-ink-faint"}`}>{counts[c.id] ?? 0}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <p className="mt-4 font-display text-[12.5px] text-ink-faint" aria-live="polite">
        {filtered.length === apps.length ? `Showing all ${apps.length} apps` : `${filtered.length} of ${apps.length} apps`}
        {active !== "all" && <> in {label(active)}</>}
        {q && <> matching &ldquo;{query.trim()}&rdquo;</>}
      </p>

      {filtered.length === 0 ? (
        <div className="frame-dotted mt-8 flex flex-col items-center px-6 py-14 text-center">
          <p className="display-3 text-ink">Not listed? Oravo still works there.</p>
          <p className="mt-2 max-w-md text-[14.5px] leading-relaxed text-ink-soft">
            Oravo is a system-level voice keyboard, so it types into any text field on your computer, whether or not the app has its own page here.
          </p>
          <a href="/download" className="btn-neutral mt-6">
            Download free
          </a>
        </div>
      ) : grouped ? (
        <div className="mt-8 space-y-14">
          {categories.map((c) => {
            const list = apps.filter((a) => a.category === c.id);
            if (!list.length) return null;
            return (
              <section key={c.id} aria-labelledby={`cat-${c.id}`}>
                <div className="flex items-baseline gap-4">
                  <h3 id={`cat-${c.id}`} className="display-3 text-ink">
                    {c.label}
                  </h3>
                  <span className="font-display text-[12px] font-semibold text-brand">{String(list.length).padStart(2, "0")}</span>
                  <span className="h-px flex-1 bg-line" aria-hidden="true" />
                  <button type="button" onClick={() => setActive(c.id)} className="font-display text-[12.5px] font-semibold text-ink-soft hover:text-ink">
                    Show only these
                  </button>
                </div>
                <AppGrid apps={list} showCategory={false} label={label} />
              </section>
            );
          })}
        </div>
      ) : (
        <AppGrid apps={filtered} showCategory label={label} />
      )}
    </div>
  );
}

function AppGrid({ apps, showCategory, label }: { apps: DirectoryApp[]; showCategory: boolean; label: (id: string) => string }) {
  const reduce = useReducedMotion();
  return (
    <motion.ul layout={!reduce} className="mt-5 grid grid-cols-2 gap-2.5 sm:gap-3 lg:grid-cols-3">
      <AnimatePresence mode="popLayout" initial={false}>
        {apps.map((app) => (
          <motion.li
            key={app.route}
            layout={!reduce}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <a
              href={app.route}
              className="group flex h-full flex-col items-start gap-3 rounded-2xl bg-raised p-3.5 shadow-[0_0_0_1px_var(--o-line)] transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_0_1px_rgba(51,48,42,0.22),0_14px_28px_-18px_rgba(51,48,42,0.35)] sm:flex-row sm:gap-4 sm:p-5"
            >
              <AppGlyph icon={app.icon} color={app.color} size={44} title={app.name} className="transition-transform duration-300 group-hover:-rotate-6" />
              <span className="w-full min-w-0 flex-1">
                <span className="flex items-center justify-between gap-2">
                  <span className="truncate font-display text-[14.5px] font-semibold text-ink sm:text-[15.5px]">{app.name}</span>
                  <ArrowUpRight aria-hidden="true" className="hidden h-4 w-4 shrink-0 text-ink-faint sm:block transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
                </span>
                {showCategory && <span className="mt-0.5 block font-display text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-faint">{label(app.category)}</span>}
                <span className="mt-1.5 hidden text-[13.5px] leading-relaxed text-ink-soft sm:line-clamp-2">{app.blurb}</span>
              </span>
            </a>
          </motion.li>
        ))}
      </AnimatePresence>
    </motion.ul>
  );
}

/* ------------------------------------------------------------------------ */
/* Hero visual: a wall of apps, one lighting up at a time.                   */
/* ------------------------------------------------------------------------ */

const LINES: Record<string, string> = {
  communication: "Running 5 minutes late, start without me.",
  productivity: "Moved to review. Copy lands Friday.",
  developer: "Fixes the race in token refresh.",
  ai: "Summarize this thread in three bullets.",
  writing: "The best ideas arrive mid-sentence.",
  design: "Try 8px more space above the title.",
  browser: "Senior designer, eight years in B2B.",
  crm: "Next step: proposal by Tuesday.",
  support: "I've reset your account, try again?",
};

export function AppWallHero({ apps }: { apps: DirectoryApp[] }) {
  const wall = apps.slice(0, 16);
  const order = [5, 10, 2, 13, 7, 0, 15, 9, 3, 12, 6, 1, 14, 8, 4, 11].filter((i) => i < wall.length);
  const { ref, index, t } = useSlotClock(order.length, 2600);
  const app = wall[order[index]];
  const line = LINES[app.category] ?? LINES.communication;
  const typed = line.slice(0, Math.floor(Math.max(0, t - 300) / 32));

  return (
    <div ref={ref} className="relative">
      <div className="frame-dotted absolute -inset-4 hidden sm:block" aria-hidden="true" />
      <div className="relative rounded-2xl bg-raised p-5 shadow-[0_0_0_1px_var(--o-line),0_30px_60px_-30px_rgba(51,48,42,0.45)] sm:p-6">
        <ul className="grid grid-cols-4 gap-2.5 sm:gap-3" aria-hidden="true">
          {wall.map((a, i) => {
            const on = i === order[index];
            return (
              <motion.li
                key={a.route}
                animate={{ y: on ? -5 : 0, scale: on ? 1.04 : 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`flex aspect-square items-center justify-center rounded-xl transition-colors duration-300 ${on ? "bg-raised shadow-[0_0_0_1px_rgba(51,48,42,0.18),0_10px_20px_-12px_rgba(51,48,42,0.35)]" : "bg-canvas/60"}`}
              >
                <AppGlyph icon={a.icon} color={a.color} size={40} title={a.name} tone={on ? "brand" : "ink"} className={on ? "" : "!bg-transparent !ring-0"} />
              </motion.li>
            );
          })}
        </ul>
        <div className="mt-5 grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3 rounded-xl bg-canvas px-4 py-3 ring-1 ring-line">
          <Waveform active={typed.length < line.length} className="bg-brand" />
          <span className="min-w-0">
            <span className="block font-display text-[10.5px] font-semibold uppercase tracking-[0.14em] text-ink-faint">
              Typing in {app.name}
            </span>
            <span className="mt-0.5 block truncate text-[14px] text-ink">
              {typed}
              {typed.length < line.length && <Caret className="bg-brand" />}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

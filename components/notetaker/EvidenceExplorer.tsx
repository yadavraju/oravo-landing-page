"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { Search, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { Avatar, TimeChip } from "./bits";
import { CLAIMS, KIND_LABEL, TRANSCRIPT, type Claim } from "./data";

/*
 * "Zoom to the moment": pick any generated line on the left and the
 * transcript on the right jumps to the sentence behind it. The transcript is
 * searchable, with speaker labels and timestamps. Cycles through the claims
 * by itself while on screen, until the reader clicks or types.
 */

const GROUPS: { kind: Claim["kind"]; title: string }[] = [
  { kind: "decision", title: "Decisions" },
  { kind: "risk", title: "Risks" },
  { kind: "question", title: "Open questions" },
  { kind: "action", title: "Action items" },
];

function highlight(text: string, q: string) {
  if (!q) return text;
  const i = text.toLowerCase().indexOf(q.toLowerCase());
  if (i < 0) return text;
  return (
    <>
      {text.slice(0, i)}
      <mark className="rounded-sm bg-brand-soft px-0.5 text-ink">{text.slice(i, i + q.length)}</mark>
      {text.slice(i + q.length)}
    </>
  );
}

export function EvidenceExplorer() {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLOListElement>(null);
  const inView = useInView(ref, { amount: 0.35 });
  const [active, setActive] = useState<string>(CLAIMS[0].id);
  const [query, setQuery] = useState("");
  const [auto, setAuto] = useState(true);

  const claim = CLAIMS.find((c) => c.id === active)!;
  const lines = useMemo(
    () => (query ? TRANSCRIPT.filter((l) => `${l.who} ${l.text}`.toLowerCase().includes(query.toLowerCase())) : TRANSCRIPT),
    [query],
  );

  // Walk through the claims on a slow loop while visible.
  useEffect(() => {
    if (!auto || !inView || reduceMotion) return;
    const id = setTimeout(() => {
      const i = CLAIMS.findIndex((c) => c.id === active);
      setActive(CLAIMS[(i + 1) % CLAIMS.length].id);
    }, 3200);
    return () => clearTimeout(id);
  }, [auto, inView, active, reduceMotion]);

  // Scroll the transcript (not the page) to the evidence line.
  useEffect(() => {
    const list = listRef.current;
    const row = list?.querySelector<HTMLElement>(`[data-at="${claim.at}"]`);
    if (!list || !row) return;
    const top = row.offsetTop - list.clientHeight / 2 + row.clientHeight / 2;
    list.scrollTo({ top: Math.max(0, top), behavior: reduceMotion ? "auto" : "smooth" });
  }, [claim.at, lines, reduceMotion]);

  const pick = (id: string) => {
    setAuto(false);
    setActive(id);
  };

  return (
    <div ref={ref} className="grid gap-5 lg:grid-cols-[1fr_1.05fr] lg:gap-6">
      {/* Generated notes */}
      <div className="flex flex-col overflow-hidden rounded-2xl bg-raised shadow-[0_0_0_1px_var(--o-line),0_20px_40px_-28px_rgba(51,48,42,0.4)]">
        <div className="flex items-center justify-between border-b border-line bg-canvas px-4 py-2.5">
          <span className="font-display text-[12.5px] font-semibold text-ink">Enhanced notes</span>
          <span className="font-display text-[11.5px] text-ink-faint">Tap a line to see its source</span>
        </div>
        <div className="flex-1 space-y-4 p-4 sm:p-5">
          {GROUPS.map((g) => (
            <div key={g.kind}>
              <p className="eyebrow !text-[10px]">{g.title}</p>
              <ul className="mt-1.5 space-y-1">
                {CLAIMS.filter((c) => c.kind === g.kind).map((c) => {
                  const on = c.id === active;
                  return (
                    <li key={c.id}>
                      <button
                        type="button"
                        onClick={() => pick(c.id)}
                        aria-pressed={on}
                        className={`relative flex w-full items-start gap-2.5 rounded-lg px-2.5 py-2 text-left text-[13.5px] leading-snug transition-colors ${
                          on ? "text-ink" : "text-ink-soft hover:bg-canvas/70 hover:text-ink"
                        }`}
                      >
                        {on && (
                          <motion.span
                            layoutId="evidence-active"
                            className="absolute inset-0 rounded-lg bg-[#E9ECDD]/70 ring-1 ring-[#4E6B47]/25"
                            transition={{ type: "spring", stiffness: 420, damping: 36 }}
                          />
                        )}
                        <span className="relative flex-1">
                          {c.owner && <span className="font-semibold text-ink">{c.owner} · </span>}
                          {c.text}
                          {c.due && <span className="font-display text-[11.5px] text-ink-faint"> · due {c.due}</span>}
                        </span>
                        <TimeChip at={c.at} active={on} className="relative" />
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Transcript */}
      <div className="flex flex-col overflow-hidden rounded-2xl bg-raised shadow-[0_0_0_1px_var(--o-line),0_20px_40px_-28px_rgba(51,48,42,0.4)]">
        <div className="flex items-center gap-2 border-b border-line bg-canvas px-3 py-2">
          <Search aria-hidden="true" className="ml-1 h-4 w-4 text-ink-faint" />
          <label htmlFor="nt-search" className="sr-only">
            Search the transcript
          </label>
          <input
            id="nt-search"
            value={query}
            onChange={(e) => {
              setAuto(false);
              setQuery(e.target.value);
            }}
            placeholder="Search the transcript… try “pilot”"
            className="h-8 min-w-0 flex-1 bg-transparent font-display text-[13px] text-ink placeholder:text-ink-faint focus:outline-none"
          />
          {query && (
            <button type="button" onClick={() => setQuery("")} className="rounded-md p-1 text-ink-faint hover:text-ink" aria-label="Clear search">
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
        <ol ref={listRef} className="relative h-[380px] overflow-y-auto overscroll-contain px-2 py-2 sm:h-[400px]" aria-label="Transcript">
          {lines.length === 0 && <li className="px-3 py-6 text-center font-display text-[13px] text-ink-faint">No lines match “{query}”.</li>}
          {lines.map((l) => {
            const on = l.at === claim.at;
            return (
                <li
                  key={l.at}
                  data-at={l.at}
                  className={`relative flex gap-3 rounded-lg px-3 py-2.5 transition-colors duration-300 ${on ? "bg-[#E9ECDD]/70" : ""}`}
                >
                  {on && <span className="absolute inset-y-2 left-0 w-[3px] rounded-full bg-[#4E6B47]" aria-hidden="true" />}
                  <Avatar name={l.who} />
                  <div className="min-w-0 flex-1">
                    <p className="flex items-center gap-2 font-display text-[12px]">
                      <span className="font-semibold text-ink">{l.who}</span>
                      <span className="font-mono text-[11px] tabular-nums text-ink-faint">{l.at}</span>
                      {on && (
                        <span className="rounded bg-[#4E6B47] px-1.5 py-px text-[10px] font-semibold uppercase tracking-wider text-[#F4F1E6]">
                          Source · {KIND_LABEL[claim.kind]}
                        </span>
                      )}
                    </p>
                    <p className={`mt-0.5 text-[13.5px] leading-relaxed ${on ? "text-ink" : "text-ink-soft"}`}>{highlight(l.text, query)}</p>
                  </div>
                </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

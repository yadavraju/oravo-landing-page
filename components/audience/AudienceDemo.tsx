"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Fragment, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { MacWindow, macAppFor } from "../landing/MacWindow";

/*
 * The audience hero demo: one realistic thing this reader writes, said out
 * loud and landing as finished text. It loops (listen, polish, type, hold)
 * while on screen, pauses off-screen and shows the finished state under
 * reduced motion.
 *
 * `output` is plain text, one line per row, with three light conventions:
 *   "## Heading"      a heading row
 *   "- item"          a bullet row
 *   "Label | value"   a labelled field row (CRM fields, SOAP sections)
 *   ""                a paragraph gap
 */

export type DemoSkin = "window" | "editor" | "paper";

export type AudienceDemoProps = {
  app: string;
  field: string;
  icon: ReactNode;
  say: string;
  /** When set, the demo reads as translation: you speak this language. */
  sayLang?: string;
  /** Language the text lands in, shown in translation mode. */
  outLang?: string;
  output: string;
  /** Words to mark once they are typed: the jargon Oravo got right. */
  terms?: string[];
  skin?: DemoSkin;
  /** Shown when the text has finished landing. */
  doneNote?: string;
  /** Small print under the demo. */
  caption?: string;
  /** Larger reading size (accessibility hero). */
  large?: boolean;
};

type Phase = "listening" | "polishing" | "done";

function tokenise(text: string) {
  const words = text.match(/\S+\s*/g) ?? [];
  if (words.length >= 4) return words;
  // Scripts without spaces (Japanese, Chinese): reveal two characters at a time.
  return Array.from(text).reduce<string[]>((acc, ch, i) => {
    if (i % 2 === 0) acc.push(ch);
    else acc[acc.length - 1] += ch;
    return acc;
  }, []);
}

function escapeRe(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function useLoop(total: number, inView: boolean, reduceMotion: boolean | null) {
  const [t, setT] = useState(0);
  useEffect(() => {
    if (reduceMotion || !inView) return;
    const started = performance.now() - t;
    const id = setInterval(() => setT((performance.now() - started) % total), 40);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, reduceMotion, total]);
  return reduceMotion ? total - 1 : t;
}

export function AudienceDemo({
  app,
  field,
  icon,
  say,
  sayLang,
  outLang,
  output,
  terms = [],
  skin = "window",
  doneNote,
  caption,
  large = false,
}: AudienceDemoProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.3 });
  const reduceMotion = useReducedMotion();

  const tokens = useMemo(() => tokenise(say), [say]);
  const STEP = 115;
  const CHAR = 17;
  const listenEnd = 500 + tokens.length * STEP + 300;
  const polishEnd = listenEnd + 800;
  const typeEnd = polishEnd + output.length * CHAR;
  const total = typeEnd + 2800;
  const t = useLoop(total, inView, reduceMotion);

  const spoken = Math.min(tokens.length, Math.floor(Math.max(0, t - 500) / STEP));
  const typed = Math.max(0, Math.min(output.length, Math.floor((t - polishEnd) / CHAR)));
  const phase: Phase = t < listenEnd ? "listening" : t < polishEnd ? "polishing" : "done";
  const complete = typed >= output.length;

  const termRe = useMemo(
    () => (terms.length ? new RegExp(`(${terms.map(escapeRe).join("|")})`, "g") : null),
    [terms],
  );

  const mono = skin === "editor";
  const translating = Boolean(sayLang);
  const statusLabel =
    phase === "listening" ? "Listening…" : phase === "polishing" ? (translating ? "Translating…" : "Polishing…") : "Typed by Oravo";

  const mark = (text: string) => {
    if (!termRe) return text;
    return text.split(termRe).map((part, i) =>
      i % 2 === 1 ? (
        <span
          key={i}
          className={
            mono
              ? "rounded-[4px] bg-brand-soft/60 px-1 text-ink"
              : "text-brand underline decoration-brand/35 decoration-[1.5px] underline-offset-[3px]"
          }
        >
          {part}
        </span>
      ) : (
        <Fragment key={i}>{part}</Fragment>
      ),
    );
  };

  // Walk the lines, giving each the part of the typed budget that reaches it.
  const lines = output.split("\n");
  const caret = (
    <span
      className={`o-caret ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] bg-brand`}
      aria-hidden="true"
    />
  );
  let start = 0;
  const rows = lines.map((line, i) => {
    const from = start;
    start += line.length + 1;
    if (i > 0 && typed < from) return null;
    const visible = line.slice(0, Math.max(0, typed - from));
    const showCaret = phase === "done" && !complete && typed >= from && typed <= from + line.length;
    const tail = showCaret ? caret : null;

    if (line === "") return <div key={i} className="h-3" />;

    if (mono) {
      const heading = visible.startsWith("#");
      return (
        <p key={i} className={`font-mono text-[12.5px] leading-[1.75] sm:text-[13px] ${heading ? "font-semibold text-ink" : "text-ink-soft"}`}>
          {heading ? (
            <>
              <span className="text-ink-faint">{visible.match(/^#+\s?/)?.[0]}</span>
              {mark(visible.replace(/^#+\s?/, ""))}
            </>
          ) : visible.startsWith("- ") ? (
            <>
              <span className="text-ink-faint">- </span>
              {mark(visible.slice(2))}
            </>
          ) : (
            mark(visible)
          )}
          {tail}
        </p>
      );
    }

    const base = skin === "paper" ? "font-serif text-[17px] leading-[28px] text-ink" : large ? "text-[18px] leading-relaxed text-ink sm:text-[19px]" : "text-[15px] leading-relaxed text-ink";

    if (line.startsWith("## ")) {
      return (
        <p key={i} className={`font-display font-semibold tracking-[-0.01em] text-ink ${large ? "text-[19px]" : "text-[15.5px]"}`}>
          {mark(visible.slice(3))}
          {tail}
        </p>
      );
    }
    if (line.startsWith("- ")) {
      return (
        <p key={i} className={`flex gap-2.5 ${base}`}>
          <span className="mt-[0.62em] h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden="true" />
          <span>
            {mark(visible.slice(2))}
            {tail}
          </span>
        </p>
      );
    }
    if (line.includes(" | ")) {
      const [label, value] = line.split(" | ");
      const shown = visible.length > label.length + 3 ? visible.slice(label.length + 3) : "";
      return (
        <div key={i} className="grid grid-cols-[88px_1fr] gap-3 border-t border-line py-2 first:border-t-0 sm:grid-cols-[104px_1fr]">
          <span className="pt-[3px] font-display text-[11px] font-semibold uppercase tracking-[0.1em] text-ink-faint">{label}</span>
          <span className="text-[14.5px] leading-relaxed text-ink">
            {mark(shown)}
            {tail}
          </span>
        </div>
      );
    }
    return (
      <p key={i} className={base}>
        {mark(visible)}
        {tail}
      </p>
    );
  });

  const waveform = (
    <span className="flex h-4 items-center gap-[2px]" aria-hidden="true">
      {Array.from({ length: 9 }).map((_, i) => (
        <motion.span
          key={i}
          className="w-[2px] rounded-full bg-brand-soft"
          animate={phase === "listening" && !reduceMotion ? { height: [3, 6 + ((i * 7) % 9), 4] } : { height: 3 }}
          transition={{ duration: 0.7, repeat: phase === "listening" && !reduceMotion ? Infinity : 0, delay: i * 0.05 }}
        />
      ))}
    </span>
  );

  const status = (
    <div className="flex flex-wrap items-center justify-between gap-2">
      <span className={`flex items-center gap-2 rounded-lg px-3 py-2 bg-cloud text-cloud-ink ring-1 ring-cloud-line`}>
        {waveform}
        <span className="font-display text-[11.5px] font-semibold">{statusLabel}</span>
      </span>
      {complete && doneNote && (
        <motion.span
          initial={reduceMotion ? false : { opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          className={`inline-flex items-center gap-1 font-display text-[11.5px] font-semibold text-brand`}
        >
          <Check aria-hidden="true" className="h-3.5 w-3.5" /> {doneNote}
        </motion.span>
      )}
    </div>
  );

  const speech = (
    <div className={`rounded-xl p-3.5 bg-canvas ring-1 ring-line`}>
      <p className={`eyebrow `}>
        You say{sayLang ? <span className="normal-case tracking-normal"> · in {sayLang}</span> : null}
      </p>
      <p className={`mt-1.5 min-h-[44px] italic leading-relaxed ${large ? "text-[16px] text-ink-soft" : "text-[14px] text-ink-soft"}`} lang={sayLang ? "und" : undefined}>
        {tokens.slice(0, spoken).join("")}
        {phase === "listening" && <span className={`o-caret ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] bg-ink-faint`} />}
      </p>
    </div>
  );

  /* ---- Paper skin: a manuscript sheet with the speech as a floating card. */
  if (skin === "paper") {
    return (
      <div ref={ref} className="relative pb-36 sm:pb-28">
        <div className="absolute inset-x-6 top-4 bottom-24 rotate-[3deg] rounded-2xl bg-canvas ring-1 ring-line sm:bottom-20" aria-hidden="true" />
        <div className="paper-ruled relative min-h-[330px] rounded-2xl px-6 pb-10 pt-5 shadow-[0_0_0_1px_var(--o-line),0_30px_60px_-30px_rgba(51,48,42,0.45)] sm:px-9">
          <div className="mb-4 flex items-center gap-2 border-b border-line pb-3">
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-ink/[0.06] text-ink-soft [&_svg]:h-3.5 [&_svg]:w-3.5">{icon}</span>
            <span className="font-display text-[12.5px] font-semibold text-ink">{app}</span>
            <span className="text-[12px] text-ink-faint">· {field}</span>
          </div>
          <div aria-live="off">{rows}</div>
        </div>
        <div className="absolute bottom-0 left-0 right-6 sm:-left-6 sm:right-auto sm:w-[78%]">
          <div className="rounded-2xl bg-raised p-3 shadow-[0_0_0_1px_var(--o-line),0_18px_36px_-18px_rgba(51,48,42,0.45)]">
            {speech}
            <div className="mt-3">{status}</div>
          </div>
        </div>
        {caption && <p className="mt-8 text-center font-display text-[12px] text-ink-faint">{caption}</p>}
      </div>
    );
  }

  /* ---- Window and editor skins. */
  return (
    <div ref={ref} className="relative">
      <div className="frame-dotted absolute -inset-4 hidden sm:block" aria-hidden="true" />
      <MacWindow app={macAppFor(app)} title={["plain", "browser"].includes(macAppFor(app)) ? app : field} subtitle={macAppFor(app) === "plain" ? `— ${field}` : undefined} icon={<span className="flex h-5 w-5 items-center justify-center rounded-md bg-ink/[0.06] text-ink-soft [&_svg]:h-3 [&_svg]:w-3">{icon}</span>} className="!rounded-2xl" bodyClassName="p-0">

        <div className="space-y-4 p-5 sm:p-6">
          {speech}

          {translating && (
            <div className="-my-1 flex items-center gap-2 font-display text-[11px] font-semibold text-ink-faint">
              <span className="h-px flex-1 bg-line" />
              <span className="inline-flex items-center gap-1.5">
                {sayLang} <ArrowRight aria-hidden="true" className="h-3 w-3 text-brand" /> {outLang ?? "English"}
              </span>
              <span className="h-px flex-1 bg-line" />
            </div>
          )}

          <div
            className={`rounded-xl p-4 ring-1 ring-line ${large ? "min-h-[170px]" : "min-h-[150px]"} ${mono ? "bg-canvas/60" : ""}`}
            style={{ boxShadow: "inset 3px 0 0 var(--o-accent)" }}
          >
            <p className={`eyebrow mb-1.5 `}>In {app}</p>
            <div className={mono ? "" : "space-y-1"}>{rows}</div>
          </div>

          {status}
        </div>
      </MacWindow>
      {caption && <p className="relative mt-7 text-center font-display text-[12px] leading-relaxed text-ink-faint">{caption}</p>}
    </div>
  );
}

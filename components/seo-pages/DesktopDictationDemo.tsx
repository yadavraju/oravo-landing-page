"use client";

import { AnimatePresence, motion } from "framer-motion";
import { FileText, Folder, Globe, Mail, Mic, Minus, Search, Square, StickyNote, Wifi, X } from "lucide-react";
import { Caret, typed, useLoopClock } from "./useLoopClock";
import { Keycap, OravoPill, type PillState } from "./OravoPill";

/*
 * Hero demo for the platform pages: a Windows or macOS desktop where you hold
 * the Oravo shortcut, speak a messy sentence, and finished text lands in the
 * open document. Loops while on screen; finished state under reduced motion.
 */

const SCRIPT = {
  windows: {
    keys: ["Ctrl", "Win"],
    raw: "okay so for the proposal um we should lead with the pilot results, then pricing, and uh keep the whole thing under two pages",
    polished: "We should lead with the pilot results, then pricing, and keep the whole proposal under two pages.",
  },
  mac: {
    keys: ["fn"],
    raw: "reminders for tomorrow um call the landlord about the lease, book flights for march and send amir the slides",
    polished: "Reminders for tomorrow:\n•  Call the landlord about the lease\n•  Book flights for March\n•  Send Amir the slides",
  },
} as const;

const PERIOD = 12000;
const PRESS = [300, 900];
const LISTEN_START = 900;
const MS_PER_CHAR = 24;

function useScript(os: "windows" | "mac") {
  const script = SCRIPT[os];
  const { ref, t } = useLoopClock(PERIOD);
  const listenEnd = LISTEN_START + script.raw.length * MS_PER_CHAR + 250;
  const polishEnd = listenEnd + 800;
  const state: PillState = t < LISTEN_START ? "idle" : t < listenEnd ? "listening" : t < polishEnd ? "polishing" : "done";
  return {
    ref,
    t,
    script,
    state,
    pressed: t > PRESS[0] && t < PRESS[1],
    raw: typed(script.raw, t, LISTEN_START, MS_PER_CHAR),
    out: typed(script.polished, t, polishEnd, 18),
    showRaw: t > LISTEN_START && t < polishEnd,
    polishEnd,
  };
}

function RawBubble({ text, show, live }: { text: string; show: boolean; live: boolean }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="raw"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6, filter: "blur(4px)" }}
          className="max-w-[min(100%,380px)] rounded-lg bg-raised px-3 py-2 text-[12px] italic leading-snug text-ink-soft shadow-[0_0_0_1px_var(--o-line),0_10px_24px_-16px_rgba(51,48,42,0.4)]"
        >
          <span className="mr-1.5 font-display text-[10px] font-semibold uppercase not-italic tracking-[0.12em] text-ink-faint">You said</span>
          {text}
          <Caret show={live} className="bg-ink-faint" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function WindowsLogo({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M3 12V6.75l6-1.32v6.48L3 12zm17-9v8.75l-10 .15V5.21L20 3zM3 13l6 .09v6.81l-6-1.15V13zm17 .25V22l-10-1.91V13.1l10 .15z" />
    </svg>
  );
}

/* ------------------------------------------------------------------------ */

function WindowsDesktop() {
  const s = useScript("windows");
  return (
    <div ref={s.ref} className="relative">
      <div className="frame-dotted absolute -inset-4 hidden sm:block" aria-hidden="true" />
      <div className="absolute -top-9 right-2 z-20 flex items-center gap-1.5 rounded-lg bg-paper/90 px-2 py-1.5 ring-1 ring-line sm:-top-6 sm:right-4" aria-hidden="true">
        {s.script.keys.map((k) => (
          <Keycap key={k} label={k} pressed={s.pressed} />
        ))}
        <span className="ml-1 font-display text-[11px] text-ink-faint">hold to dictate</span>
      </div>

      <div className="relative overflow-hidden rounded-xl bg-raised shadow-[0_0_0_1px_var(--o-line),0_30px_60px_-30px_rgba(51,48,42,0.45)]" aria-hidden="true">
        {/* Title bar */}
        <div className="flex h-10 items-center border-b border-line bg-canvas pl-3">
          <span className="flex h-5 w-5 items-center justify-center rounded-[5px] bg-cloud font-display text-[10px] font-bold text-cloud-ink">W</span>
          <span className="ml-2.5 truncate font-display text-[12px] text-ink">Q3 proposal.docx</span>
          <span className="ml-1.5 hidden text-[12px] text-ink-faint sm:inline">— Word</span>
          <span className="ml-auto flex h-full">
            {[Minus, Square, X].map((Icon, i) => (
              <span key={i} className="flex w-10 items-center justify-center text-ink-soft">
                <Icon className={i === 1 ? "h-3 w-3" : "h-3.5 w-3.5"} strokeWidth={1.6} />
              </span>
            ))}
          </span>
        </div>
        {/* Ribbon */}
        <div className="flex items-center gap-4 border-b border-line bg-canvas/60 px-4 py-2 font-display text-[11px] text-ink-soft">
          {["File", "Home", "Insert", "Layout", "Review"].map((tab) => (
            <span key={tab} className={tab === "Home" ? "border-b-2 border-brand pb-0.5 font-semibold text-ink" : "pb-0.5"}>
              {tab}
            </span>
          ))}
          <span className="ml-auto hidden gap-1.5 sm:flex">
            {[28, 18, 18, 36].map((w, i) => (
              <span key={i} className="h-3 rounded-sm bg-line" style={{ width: w }} />
            ))}
          </span>
        </div>
        {/* Page */}
        <div className="relative bg-canvas px-4 pt-5 pb-24 sm:px-8">
          <div className="paper-ruled mx-auto min-h-[200px] max-w-[420px] rounded-md p-5 shadow-[0_0_0_1px_var(--o-line),0_8px_20px_-14px_rgba(51,48,42,0.35)] sm:p-6">
            <p className="font-serif text-[20px] leading-tight text-ink">Q3 proposal</p>
            <p className="mt-1 font-display text-[11px] text-ink-faint">Draft · Outline</p>
            <p className="mt-4 text-[13.5px] leading-[28px] text-ink">
              {s.out}
              <Caret show={s.state === "done" && s.out.length < s.script.polished.length} />
            </p>
          </div>
          <div className="absolute inset-x-4 bottom-4 flex flex-col items-center gap-2">
            <RawBubble text={s.raw} show={s.showRaw} live={s.state === "listening"} />
            <OravoPill state={s.state} />
          </div>
        </div>
        {/* Taskbar */}
        <div className="flex h-11 items-center border-t border-line bg-paper px-3">
          <span className="hidden w-16 sm:block" />
          <span className="mx-auto flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-md text-ink">
              <WindowsLogo />
            </span>
            <span className="hidden h-7 items-center gap-1.5 rounded-md bg-canvas px-2.5 text-[11px] text-ink-faint ring-1 ring-line sm:flex">
              <Search className="h-3 w-3" /> Search
            </span>
            {[Globe, Mail, FileText].map((Icon, i) => (
              <span key={i} className={`flex h-7 w-7 items-center justify-center rounded-md ${i === 2 ? "bg-canvas ring-1 ring-line" : ""} text-ink-soft`}>
                <Icon className="h-3.5 w-3.5" />
              </span>
            ))}
          </span>
          <span className="flex w-16 items-center justify-end gap-2 text-ink-soft">
            <motion.span
              className={`flex h-6 w-6 items-center justify-center rounded-md ${s.state === "listening" ? "bg-cloud text-cloud-ink" : "text-ink-soft"}`}
              animate={s.state === "listening" ? { scale: [1, 1.1, 1] } : { scale: 1 }}
              transition={{ duration: 0.9, repeat: s.state === "listening" ? Infinity : 0 }}
            >
              <Mic className="h-3.5 w-3.5" />
            </motion.span>
            <span className="font-display text-[10.5px]">9:41</span>
          </span>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------------ */

function MacDesktop() {
  const s = useScript("mac");
  const notes = ["Tomorrow", "Lease questions", "Trip ideas", "Reading list"];
  return (
    <div ref={s.ref} className="relative">
      <div className="frame-dotted absolute -inset-4 hidden sm:block" aria-hidden="true" />
      <div className="relative overflow-hidden rounded-2xl bg-clay/70 shadow-[0_0_0_1px_var(--o-line),0_30px_60px_-30px_rgba(51,48,42,0.45)]" aria-hidden="true">
        {/* Menu bar */}
        <div className="flex h-7 items-center gap-4 bg-paper/80 px-3 font-display text-[11px] text-ink">
          <span className="h-2.5 w-2.5 rounded-full bg-ink" />
          <span className="font-semibold">Notes</span>
          <span className="hidden text-ink-soft sm:inline">File</span>
          <span className="hidden text-ink-soft sm:inline">Edit</span>
          <span className="hidden text-ink-soft sm:inline">Format</span>
          <span className="ml-auto flex items-center gap-3 text-ink-soft">
            <motion.span
              className={`flex h-5 items-center gap-1 rounded-md px-1.5 ${s.state === "listening" ? "bg-cloud text-cloud-ink" : ""}`}
              animate={s.state === "listening" ? { scale: [1, 1.08, 1] } : { scale: 1 }}
              transition={{ duration: 0.9, repeat: s.state === "listening" ? Infinity : 0 }}
            >
              <Mic className="h-3 w-3" />
            </motion.span>
            <Wifi className="h-3 w-3" />
            <span>Tue 9:41</span>
          </span>
        </div>

        <div className="relative px-3 pt-4 pb-20 sm:px-6 sm:pt-6">
          {/* Notes window */}
          <div className="overflow-hidden rounded-xl bg-raised shadow-[0_0_0_1px_var(--o-line),0_18px_40px_-24px_rgba(51,48,42,0.5)]">
            <div className="flex h-9 items-center gap-1.5 border-b border-line bg-canvas px-3">
              <span className="h-2.5 w-2.5 rounded-full bg-brand/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-sand-deep" />
              <span className="h-2.5 w-2.5 rounded-full bg-line" />
              <span className="ml-3 font-display text-[12px] font-semibold text-ink">Notes</span>
              <span className="ml-auto flex items-center gap-1.5 rounded-md bg-raised px-2 py-1 text-[10.5px] text-ink-faint ring-1 ring-line">
                <Search className="h-2.5 w-2.5" /> Search
              </span>
            </div>
            <div className="grid min-h-[236px] grid-cols-1 sm:grid-cols-[150px_1fr]">
              <div className="hidden border-r border-line bg-canvas/70 p-2.5 sm:block">
                <p className="flex items-center gap-1.5 px-1.5 pb-2 font-display text-[10.5px] font-semibold text-ink-faint">
                  <Folder className="h-3 w-3" /> iCloud
                </p>
                {notes.map((n, i) => (
                  <div key={n} className={`rounded-md px-2 py-1.5 ${i === 0 ? "bg-sand ring-1 ring-sand-deep" : ""}`}>
                    <p className="truncate font-display text-[11.5px] font-semibold text-ink">{n}</p>
                    <p className="truncate text-[10px] text-ink-faint">{i === 0 ? "Now" : "Yesterday"}</p>
                  </div>
                ))}
              </div>
              <div className="p-5">
                <p className="text-center font-display text-[10.5px] text-ink-faint">Today at 9:41</p>
                <p className="mt-3 flex items-center gap-2 font-serif text-[19px] text-ink">
                  <StickyNote className="h-4 w-4 text-brand" /> Tomorrow
                </p>
                <p className="mt-2 whitespace-pre-line text-[13.5px] leading-[1.8] text-ink">
                  {s.out}
                  <Caret show={s.state === "done" && s.out.length < s.script.polished.length} />
                </p>
              </div>
            </div>
          </div>

          <div className="absolute inset-x-4 bottom-16 flex flex-col items-center gap-2 sm:bottom-[68px]">
            <RawBubble text={s.raw} show={s.showRaw} live={s.state === "listening"} />
            <OravoPill state={s.state} />
          </div>

          {/* Dock */}
          <div className="absolute inset-x-0 bottom-2.5 flex justify-center">
            <div className="flex items-center gap-1.5 rounded-xl bg-paper/70 px-2 py-1.5 ring-1 ring-line backdrop-blur">
              {[Globe, Mail, StickyNote, FileText].map((Icon, i) => (
                <span key={i} className={`flex h-8 w-8 items-center justify-center rounded-lg ${i === 2 ? "bg-cloud text-cloud-ink" : "bg-raised text-ink-soft ring-1 ring-line"}`}>
                  <Icon className="h-4 w-4" />
                </span>
              ))}
              <span className="mx-1 h-6 w-px bg-line" />
              <motion.span
                className="flex h-8 w-8 items-center justify-center gap-0.5 rounded-lg bg-raised ring-1 ring-line"
                animate={s.pressed ? { y: 2 } : { y: 0 }}
                transition={{ duration: 0.12 }}
              >
                <span className="font-mono text-[10px] font-semibold text-ink">fn</span>
              </motion.span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-12 left-2 z-20 flex items-center gap-1.5 rounded-lg bg-paper/90 px-2 py-1.5 ring-1 ring-line sm:-bottom-6 sm:left-4" aria-hidden="true">
        {s.script.keys.map((k) => (
          <Keycap key={k} label={k} pressed={s.pressed} />
        ))}
        <span className="ml-1 font-display text-[11px] text-ink-faint">hold to dictate</span>
      </div>
    </div>
  );
}

export function DesktopDictationDemo({ os }: { os: "windows" | "mac" }) {
  return (
    <figure>
      {os === "windows" ? <WindowsDesktop /> : <MacDesktop />}
      <figcaption className="sr-only">
        {os === "windows"
          ? "Demo: holding Ctrl and Win in Microsoft Word on Windows, speaking a rough sentence, and Oravo typing a clean sentence into the document."
          : "Demo: holding fn in Apple Notes on a Mac, speaking a list of reminders, and Oravo typing a formatted list into the note."}
      </figcaption>
    </figure>
  );
}

export { WindowsLogo };

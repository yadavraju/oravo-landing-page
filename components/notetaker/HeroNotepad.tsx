"use client";

import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { Check, RotateCcw, Square } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Avatar, NoteWindow, TimeChip } from "./bits";
import { CLAIMS, MEETING, ROUGH_NOTES, SUMMARY, TRANSCRIPT } from "./data";

/*
 * The hero demo, in three beats: you jot rough notes while the transcript
 * runs underneath; you press "End meeting"; the notes come back enhanced,
 * your own lines kept and every point linked to its moment in the transcript.
 * Plays itself once in view, loops while visible, and hands over to the
 * reader as soon as they press anything.
 */

type Phase = "meeting" | "processing" | "ready";

const ROUGH = ROUGH_NOTES.join("\n");
const STEPS = ["Transcript ready", "Writing the summary", "Finding decisions, risks and open questions", "Linking action items to evidence"];
const PROCESS_MS = 2600;

function fmt(seconds: number) {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

export function HeroNotepad() {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.35 });
  const [phase, setPhase] = useState<Phase>("meeting");
  const [typed, setTyped] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const [auto, setAuto] = useState(true);
  const total = ROUGH.length;

  // Under reduced motion the notes are already written and nothing plays on its own.
  useEffect(() => {
    if (!reduceMotion) return;
    setAuto(false);
    setTyped(total);
  }, [reduceMotion, total]);

  // Rough notes type themselves in while the meeting runs.
  useEffect(() => {
    if (!inView || phase !== "meeting" || typed >= total) return;
    const ch = ROUGH[typed];
    const id = setTimeout(() => setTyped((c) => c + 1), ch === "\n" ? 420 : 52);
    return () => clearTimeout(id);
  }, [inView, phase, typed, total]);

  // Autoplay: end the meeting a beat after the last note.
  useEffect(() => {
    if (!auto || !inView || phase !== "meeting" || typed < total) return;
    const id = setTimeout(() => setPhase("processing"), 1800);
    return () => clearTimeout(id);
  }, [auto, inView, phase, typed, total]);

  // Processing: a visible state with an elapsed clock, never a blank wait.
  useEffect(() => {
    if (phase !== "processing") return;
    const duration = reduceMotion ? 500 : PROCESS_MS;
    const started = performance.now();
    setElapsed(0);
    const id = setInterval(() => {
      const t = performance.now() - started;
      setElapsed(t);
      if (t >= duration) {
        clearInterval(id);
        setPhase("ready");
      }
    }, 60);
    return () => clearInterval(id);
  }, [phase, reduceMotion]);

  // Loop while visible, until the reader takes over.
  useEffect(() => {
    if (!auto || !inView || phase !== "ready") return;
    const id = setTimeout(() => {
      setTyped(0);
      setPhase("meeting");
    }, 9000);
    return () => clearTimeout(id);
  }, [auto, inView, phase]);

  const endMeeting = () => {
    setAuto(false);
    setTyped(total);
    setPhase("processing");
  };
  const replay = () => {
    setAuto(false);
    setTyped(reduceMotion ? total : 0);
    setPhase("meeting");
  };

  const progress = typed / total;
  const clock = fmt(progress * 58 * 60 + 14);
  const lineIndex = Math.min(TRANSCRIPT.length - 1, Math.floor(progress * (TRANSCRIPT.length - 1)));
  const line = TRANSCRIPT[lineIndex];
  const stepsDone = Math.min(STEPS.length, Math.floor((elapsed / PROCESS_MS) * STEPS.length) + 1);
  const decisions = CLAIMS.filter((c) => c.kind === "decision");
  const actions = CLAIMS.filter((c) => c.kind === "action" && c.mine);

  const status =
    phase === "meeting" ? (
      <span className="inline-flex items-center gap-1.5 rounded-md bg-brand-soft px-2 py-0.5 font-display text-[11px] font-semibold tabular-nums text-brand">
        <span className={`h-1.5 w-1.5 rounded-full bg-brand ${reduceMotion ? "" : "animate-pulse"}`} />
        Live · {clock}
      </span>
    ) : phase === "processing" ? (
      <span className="inline-flex items-center gap-1.5 rounded-md bg-canvas px-2 py-0.5 font-display text-[11px] font-semibold text-ink-soft ring-1 ring-line">
        Processing
      </span>
    ) : (
      <span className="inline-flex items-center gap-1 rounded-md bg-[#E9ECDD] px-2 py-0.5 font-display text-[11px] font-semibold text-[#4E6B47]">
        <Check aria-hidden="true" className="h-3 w-3" strokeWidth={3} />
        Ready
      </span>
    );

  return (
    <div ref={ref} className="relative">
      <div className="frame-dotted absolute -inset-3 hidden sm:block" aria-hidden="true" />
      <NoteWindow right={status} className="relative">
        <div className="relative h-[452px] sm:h-[468px]">
          <AnimatePresence mode="wait" initial={false}>
            {phase === "meeting" && (
              <motion.div
                key="meeting"
                className="absolute inset-0 flex flex-col"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.3 }}
              >
                <div className="paper-ruled relative flex-1 px-5 pt-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <p className="eyebrow">My notes</p>
                    <span className="flex -space-x-1.5" aria-label="3 people in the meeting">
                      {MEETING.people.map((p) => (
                        <span key={p.id} className="rounded-full ring-2 ring-raised">
                          <Avatar name={p.name} size="sm" />
                        </span>
                      ))}
                    </span>
                  </div>
                  <ul className="mt-2 font-mono text-[14.5px] leading-[28px] text-ink" aria-label="Rough notes typed during the meeting">
                    {(typed ? ROUGH.slice(0, typed).split("\n") : [])
                      .map((note, i, arr) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-ink-faint" aria-hidden="true">–</span>
                          <span>
                            {note}
                            {i === arr.length - 1 && typed < total && (
                              <span className="o-caret ml-0.5 inline-block h-[1em] w-[2px] translate-y-[3px] bg-ink" />
                            )}
                          </span>
                        </li>
                      ))}
                  </ul>
                  {typed === 0 && <p className="mt-1 font-mono text-[14px] text-ink-faint">Jot what matters…</p>}
                </div>

                <div className="border-t border-line bg-canvas/60 px-5 py-3 sm:px-6">
                  <div className="flex items-center justify-between">
                    <p className="eyebrow !text-[10px]">Transcript · live</p>
                    <span className="flex h-3 items-end gap-[2px]" aria-hidden="true">
                      {[0, 1, 2, 3, 4].map((i) => (
                        <motion.span
                          key={i}
                          className="w-[2px] rounded-full bg-brand/70"
                          animate={reduceMotion || !inView ? { height: 4 } : { height: [3, 11, 5, 9, 3] }}
                          transition={{ duration: 0.9 + i * 0.1, repeat: Infinity, ease: "easeInOut" }}
                        />
                      ))}
                    </span>
                  </div>
                  <div className="relative mt-2 h-[44px] overflow-hidden">
                    <AnimatePresence mode="popLayout" initial={false}>
                      <motion.div
                        key={lineIndex}
                        className="flex items-start gap-2.5"
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -14 }}
                        transition={{ duration: 0.35 }}
                      >
                        <Avatar name={line.who} size="sm" />
                        <p className="min-w-0 text-[12.5px] leading-snug text-ink-soft">
                          <span className="font-semibold text-ink">{line.who}</span> <span className="font-mono text-[10.5px] text-ink-faint">{line.at}</span>
                          <br />
                          <span className="line-clamp-1">{line.text}</span>
                        </p>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-3 border-t border-line bg-raised px-5 py-3 sm:px-6">
                  <p className="font-display text-[12px] text-ink-faint">{typed < total ? "Taking notes…" : "Meeting's wrapping up"}</p>
                  <button
                    type="button"
                    onClick={endMeeting}
                    className="relative inline-flex h-9 items-center gap-2 rounded-lg bg-espresso px-3.5 font-display text-[13px] font-semibold text-sand transition-transform hover:-translate-y-px active:translate-y-0"
                  >
                    {typed >= total && !reduceMotion && (
                      <span className="absolute -inset-1 animate-ping rounded-xl border-2 border-brand/40" aria-hidden="true" />
                    )}
                    <Square aria-hidden="true" className="h-3 w-3 fill-current" />
                    End meeting
                  </button>
                </div>
              </motion.div>
            )}

            {phase === "processing" && (
              <motion.div
                key="processing"
                className="absolute inset-0 flex flex-col items-center justify-center px-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                role="status"
                aria-live="polite"
              >
                <div className="w-full max-w-sm">
                  <div className="flex items-baseline justify-between">
                    <p className="font-display text-[14px] font-semibold text-ink">Enhancing your notes</p>
                    <p className="font-mono text-[12px] tabular-nums text-ink-soft">{(elapsed / 1000).toFixed(1)}s</p>
                  </div>
                  <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-canvas ring-1 ring-line">
                    <div className="h-full rounded-full bg-[#4E6B47] transition-[width] duration-100" style={{ width: `${Math.min(100, (elapsed / PROCESS_MS) * 100)}%` }} />
                  </div>
                  <ul className="mt-5 space-y-2.5">
                    {STEPS.map((step, i) => {
                      const done = i < stepsDone - 1 || elapsed >= PROCESS_MS;
                      const current = i === stepsDone - 1 && !done;
                      return (
                        <li key={step} className={`flex items-center gap-2.5 font-display text-[13px] ${i < stepsDone ? "text-ink" : "text-ink-faint"}`}>
                          <span
                            className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md ${done ? "bg-[#E9ECDD] text-[#4E6B47]" : "bg-canvas ring-1 ring-line"}`}
                          >
                            {done ? (
                              <Check aria-hidden="true" className="h-3 w-3" strokeWidth={3} />
                            ) : current ? (
                              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#4E6B47]" />
                            ) : null}
                          </span>
                          {step}
                        </li>
                      );
                    })}
                  </ul>
                  <p className="mt-6 font-display text-[11.5px] text-ink-faint">Sample meeting, sped up for the demo.</p>
                </div>
              </motion.div>
            )}

            {phase === "ready" && (
              <motion.div
                key="ready"
                className="absolute inset-0 flex flex-col"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex-1 overflow-hidden px-5 pt-4 sm:px-6">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-display text-[11px] text-ink-faint">
                    <span className="inline-flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-sm bg-ink" /> Your notes
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-sm bg-[#4E6B47]" /> Added from the transcript
                    </span>
                  </div>
                  <Stagger i={0}>
                    <p className="eyebrow mt-4">Summary</p>
                    <p className="mt-1.5 border-l-2 border-[#4E6B47]/50 pl-3 text-[13.5px] leading-relaxed text-ink-soft">{SUMMARY}</p>
                  </Stagger>
                  <Stagger i={1}>
                    <p className="eyebrow mt-4">Decisions</p>
                    <ul className="mt-1.5 space-y-1.5">
                      {decisions.map((d) => (
                        <li key={d.id} className="flex items-start gap-2 text-[13.5px] leading-snug">
                          <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-ink" aria-hidden="true" />
                          <span className="flex-1 font-medium text-ink">{d.text}</span>
                          <TimeChip at={d.at} />
                        </li>
                      ))}
                    </ul>
                  </Stagger>
                  <Stagger i={2}>
                    <p className="eyebrow mt-4">Action items</p>
                    <ul className="mt-1.5 divide-y divide-line rounded-lg bg-canvas/50 ring-1 ring-line">
                      {actions.map((a) => (
                        <li key={a.id} className="flex items-center gap-2.5 px-3 py-2 text-[13px]">
                          <Avatar name={a.owner!} size="sm" />
                          <span className="min-w-0 flex-1 truncate text-ink">
                            <span className="font-semibold">{a.owner}</span> · {a.text}
                          </span>
                          <span className="hidden font-display text-[11px] text-ink-faint sm:inline">Due {a.due}</span>
                          <TimeChip at={a.at} />
                        </li>
                      ))}
                    </ul>
                  </Stagger>
                </div>
                <div className="flex items-center justify-between gap-3 border-t border-line bg-raised px-5 py-3 sm:px-6">
                  <a href="#evidence" className="font-display text-[12px] text-ink-soft underline decoration-line underline-offset-4 hover:text-ink">
                    + 1 risk, 1 open question, 1 more action
                  </a>
                  <button
                    type="button"
                    onClick={replay}
                    className="inline-flex h-9 items-center gap-2 rounded-lg bg-canvas px-3 font-display text-[13px] font-semibold text-ink ring-1 ring-line transition-colors hover:bg-paper"
                  >
                    <RotateCcw aria-hidden="true" className="h-3.5 w-3.5" />
                    Replay
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </NoteWindow>
    </div>
  );
}

function Stagger({ i, children }: { i: number; children: React.ReactNode }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.1 + i * 0.16, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

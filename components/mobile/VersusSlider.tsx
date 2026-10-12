"use client";

import { animate, AnimatePresence, motion, useInView, useMotionValue, useMotionValueEvent, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { Fragment, useEffect, useRef, useState, type KeyboardEvent, type PointerEvent } from "react";

/*
 * Oravo vs. built-in voice typing, as one sentence you scrub through.
 *
 * Left end of the track is what the phone's own voice typing leaves you:
 * every filler, the change of mind, no punctuation. Drag towards Oravo and the
 * same sentence is edited in front of you, one fix at a time (fillers struck
 * and dropped, the false start removed, capitals and punctuation, then the
 * list), each fix numbered on the track and in the legend. It plays on its
 * own until the visitor takes the handle; arrow keys move it too.
 */

type Tok = {
  raw: string;
  clean?: string;
  kind?: "filler" | "rethink" | "drop";
  /** Starts list item n once the list is formed. */
  item?: number;
  /** Drops its trailing comma once the list is formed. */
  ls?: boolean;
};

type Sample = {
  id: string;
  label: string;
  tokens: Tok[];
  /** Replaces the whole sentence at the last stop (translation). */
  english?: string;
  fixes: { at: number; label: string }[];
};

const SAMPLES: Sample[] = [
  {
    id: "messy",
    label: "Messy English",
    tokens: [
      { raw: "hey", clean: "Hey" },
      { raw: "sarah", clean: "Sarah," },
      { raw: "umm", kind: "filler" },
      { raw: "there" },
      { raw: "are" },
      { raw: "two", kind: "rethink" },
      { raw: "no", kind: "rethink" },
      { raw: "wait", kind: "rethink" },
      { raw: "actually", kind: "rethink" },
      { raw: "three" },
      { raw: "things" },
      { raw: "oravo", clean: "Oravo" },
      { raw: "does" },
      { raw: "really" },
      { raw: "well", clean: "well:" },
      { raw: "its", clean: "it's", item: 1 },
      { raw: "fast", clean: "fast,", ls: true },
      { raw: "its", clean: "it's", item: 2 },
      { raw: "accurate", clean: "accurate,", ls: true },
      { raw: "and", kind: "drop" },
      { raw: "uh", kind: "filler" },
      { raw: "it", item: 3 },
      { raw: "fixes" },
      { raw: "your" },
      { raw: "mistakes", clean: "mistakes." },
    ],
    fixes: [
      { at: 22, label: "Filler words removed" },
      { at: 44, label: "Kept what you meant" },
      { at: 66, label: "Capitals and punctuation" },
      { at: 86, label: "Formatted as a list" },
    ],
  },
  {
    id: "spanish",
    label: "Speaking Spanish",
    tokens: [
      { raw: "hola", clean: "Hola" },
      { raw: "equipo", clean: "equipo," },
      { raw: "eh", kind: "filler" },
      { raw: "la" },
      { raw: "reunión" },
      { raw: "es" },
      { raw: "mañana" },
      { raw: "a", kind: "rethink" },
      { raw: "las", kind: "rethink" },
      { raw: "tres", kind: "rethink" },
      { raw: "no", kind: "rethink" },
      { raw: "a" },
      { raw: "las" },
      { raw: "cuatro", clean: "cuatro." },
      { raw: "traigan", clean: "Traigan" },
      { raw: "el" },
      { raw: "informe", clean: "informe." },
    ],
    english: "Hi team, the meeting is tomorrow at 4 PM. Please bring the report.",
    fixes: [
      { at: 22, label: "Filler words removed" },
      { at: 44, label: "Kept what you meant" },
      { at: 66, label: "Capitals and punctuation" },
      { at: 86, label: "Translated to English" },
    ],
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

function Sentence({ sample, p }: { sample: Sample; p: number }) {
  const [f1, f2, f3, f4] = sample.fixes.map((f) => f.at);
  const strikeFiller = p >= f1 - 10;
  const dropFiller = p >= f1;
  const strikeRethink = p >= f2 - 10;
  const dropRethink = p >= f2;
  const punctuate = p >= f3;
  const finished = p >= f4;
  const listed = finished && !sample.english;

  if (finished && sample.english) {
    return (
      <AnimatePresence mode="wait">
        <motion.p
          key="en"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: EASE }}
          className="text-[18px] leading-[1.7] text-ink sm:text-[21px]"
        >
          {sample.english}
        </motion.p>
      </AnimatePresence>
    );
  }

  return (
    <p className="flex flex-wrap items-baseline gap-x-[0.3em] gap-y-1 text-[18px] leading-[1.7] sm:text-[21px]">
      {sample.tokens.map((t, i) => {
        const gone =
          (t.kind === "filler" && dropFiller) || (t.kind === "rethink" && dropRethink) || (t.kind === "drop" && listed);
        const struck = (t.kind === "filler" && strikeFiller) || (t.kind === "rethink" && strikeRethink);
        let word = punctuate && t.clean ? t.clean : t.raw;
        if (listed && t.ls) word = word.replace(/,$/, "");
        if (listed && t.item) word = word[0].toUpperCase() + word.slice(1);
        return (
          <Fragment key={i}>
            {listed && t.item && <span className="basis-full" aria-hidden="true" />}
            <motion.span
              layout
              transition={{ duration: 0.45, ease: EASE }}
              className={`relative inline-flex items-baseline whitespace-nowrap ${struck ? "text-ink-faint" : punctuate ? "text-ink" : "text-ink-soft"}`}
              animate={gone ? { opacity: 0, width: 0, marginRight: "-0.3em" } : { opacity: 1, width: "auto", marginRight: 0 }}
              style={{ overflow: "hidden" }}
            >
              {listed && t.item && (
                <span className="mr-2 font-display text-[15px] font-semibold tabular-nums text-cloud-ink sm:text-[17px]">{t.item}.</span>
              )}
              {word}
              {t.kind && t.kind !== "drop" && (
                <motion.span
                  className="absolute left-0 top-[55%] h-[2px] w-full origin-left rounded bg-brand"
                  initial={false}
                  animate={{ scaleX: struck ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.span>
          </Fragment>
        );
      })}
    </p>
  );
}

export function VersusSlider() {
  const reduce = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const inView = useInView(stageRef, { amount: 0.4 });
  const [sample, setSample] = useState(0);
  const [touched, setTouched] = useState(false);
  const [dragging, setDragging] = useState(false);
  const pos = useMotionValue(reduce ? 100 : 0);
  const [p, setP] = useState(reduce ? 100 : 0);
  useMotionValueEvent(pos, "change", (v) => setP(v));

  // Plays raw -> Oravo -> raw on its own until someone takes the handle.
  useEffect(() => {
    if (reduce || touched || !inView) return;
    const controls = animate(pos, [0, 0, 100, 100], { duration: 9, times: [0, 0.12, 0.62, 1], ease: "easeInOut", repeat: Infinity });
    return () => controls.stop();
  }, [reduce, touched, inView, pos, sample]);

  const moveTo = (clientX: number) => {
    const box = trackRef.current?.getBoundingClientRect();
    if (!box) return;
    pos.set(Math.min(100, Math.max(0, ((clientX - box.left) / box.width) * 100)));
  };
  const grab = (e: PointerEvent<HTMLDivElement>) => {
    setTouched(true);
    setDragging(true);
    pos.stop();
    (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
    moveTo(e.clientX);
  };
  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    const step = e.key === "ArrowLeft" ? -6 : e.key === "ArrowRight" ? 6 : e.key === "Home" ? -100 : e.key === "End" ? 100 : 0;
    if (!step) return;
    e.preventDefault();
    setTouched(true);
    pos.stop();
    pos.set(Math.min(100, Math.max(0, pos.get() + step)));
  };

  const s = SAMPLES[sample];
  const done = p >= s.fixes[3].at;
  const raw = p < s.fixes[0].at - 10;
  const status = raw ? "Built-in voice typing" : done ? "Typed by Oravo" : "Oravo is cleaning up…";

  return (
    <div ref={stageRef} className="mx-auto max-w-4xl">
      <div className="flex justify-center">
        <div className="inline-flex rounded-lg bg-raised/70 p-1 ring-1 ring-line" role="tablist" aria-label="Sample">
          {SAMPLES.map((x, i) => (
            <button
              key={x.id}
              type="button"
              role="tab"
              aria-selected={i === sample}
              onClick={() => {
                setSample(i);
                if (touched) pos.set(0);
              }}
              className={`h-9 rounded-md px-3.5 font-display text-[13px] font-semibold transition-colors ${i === sample ? "key-on" : "text-ink-soft hover:text-ink"}`}
            >
              {x.label}
            </button>
          ))}
        </div>
      </div>

      {/* The message being edited */}
      <div className="relative mt-8">
        <div className="frame-dotted absolute -inset-3 hidden sm:block sm:-inset-4" aria-hidden="true" />
        <div
          className="relative overflow-hidden rounded-2xl px-6 pb-8 pt-6 shadow-[0_0_0_1px_var(--o-line),0_30px_60px_-34px_rgba(51,48,42,0.4)] transition-colors duration-500 sm:px-10 sm:pb-10 sm:pt-8"
          style={{ background: done ? "var(--o-raised)" : raw ? "#efe9e1" : "#f6f1ea" }}
        >
          <div className="flex items-center justify-between gap-3">
            <span
              className={`inline-flex items-center gap-2 rounded-md px-2.5 py-1.5 font-display text-[12px] font-semibold ring-1 transition-colors duration-300 ${
                raw ? "bg-raised/70 text-ink-soft ring-line" : "bg-cloud text-cloud-ink ring-cloud-line"
              }`}
            >
              <span className={`flex h-5 w-5 items-center justify-center rounded text-[10px] font-bold ${raw ? "bg-canvas text-ink-faint" : "bg-raised text-cloud-ink"}`}>
                {raw ? "Aa" : done ? <Check aria-hidden="true" className="h-3 w-3" strokeWidth={3} /> : "O"}
              </span>
              {status}
            </span>
            <span className="hidden items-center gap-1.5 font-display text-[11.5px] text-ink-faint sm:flex" aria-hidden="true">
              <span className="flex h-4 items-center gap-[2px]">
                {Array.from({ length: 8 }).map((_, i) => (
                  <motion.span
                    key={i}
                    className="w-[2px] rounded-full bg-brand/70"
                    animate={reduce ? { height: 5 } : { height: [3, 6 + ((i * 5) % 9), 4] }}
                    transition={{ duration: 0.7 + (i % 3) * 0.15, repeat: Infinity }}
                  />
                ))}
              </span>
              Same recording
            </span>
          </div>
          <div className="mt-6 min-h-[150px] sm:min-h-[132px]">
            <Sentence sample={s} p={p} />
          </div>
        </div>
      </div>

      {/* The track */}
      <div className="mx-auto mt-10 max-w-3xl px-2">
        <div className="mb-3 flex justify-between font-display text-[12.5px] font-semibold">
          <span className="text-ink-soft">Built-in voice typing</span>
          <span className="text-cloud-ink">Oravo</span>
        </div>
        <div
          ref={trackRef}
          onPointerDown={grab}
          onPointerMove={(e) => dragging && moveTo(e.clientX)}
          onPointerUp={() => setDragging(false)}
          onPointerCancel={() => setDragging(false)}
          className={`relative h-10 touch-none select-none ${dragging ? "cursor-grabbing" : "cursor-pointer"}`}
        >
          <span className="absolute inset-x-0 top-1/2 h-[3px] -translate-y-1/2 rounded-full bg-line" aria-hidden="true" />
          <span className="absolute left-0 top-1/2 h-[3px] -translate-y-1/2 rounded-full bg-cloud-ink/60" style={{ width: `${p}%` }} aria-hidden="true" />
          {s.fixes.map((f, i) => (
            <span
              key={f.label}
              className={`absolute top-1/2 flex h-5 w-5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full font-display text-[10px] font-bold ring-2 ring-mist transition-colors duration-300 ${
                p >= f.at ? "bg-brand text-raised" : "bg-raised text-ink-faint shadow-[0_0_0_1px_var(--o-line)]"
              }`}
              style={{ left: `${f.at}%` }}
              aria-hidden="true"
            >
              {i + 1}
            </span>
          ))}
          <div
            role="slider"
            tabIndex={0}
            aria-label="From built-in voice typing to Oravo"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(p)}
            aria-valuetext={status}
            onKeyDown={onKey}
            className="absolute top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cloud shadow-[0_6px_14px_-6px_rgba(13,84,128,0.55)] ring-1 ring-cloud-line focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
            style={{ left: `${p}%` }}
          >
            <span className="absolute inset-[9px] rounded-full bg-cloud-ink/80" aria-hidden="true" />
          </div>
        </div>
      </div>

      {/* Legend, numbered to match the track */}
      <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {s.fixes.map((f, i) => {
          const on = p >= f.at;
          return (
            <li
              key={f.label}
              className={`flex items-center gap-2.5 rounded-lg px-3 py-2.5 ring-1 transition-colors duration-300 ${on ? "bg-raised ring-line" : "bg-raised/40 ring-line/60"}`}
            >
              <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full font-display text-[10px] font-bold transition-colors duration-300 ${on ? "bg-brand text-raised" : "bg-canvas text-ink-faint"}`}>
                {on ? <Check aria-hidden="true" className="h-3 w-3" strokeWidth={3} /> : i + 1}
              </span>
              <span className={`font-display text-[13px] font-semibold leading-tight transition-colors duration-300 ${on ? "text-ink" : "text-ink-faint"}`}>{f.label}</span>
            </li>
          );
        })}
      </ul>
      <p className="mt-4 text-center font-display text-[12.5px] text-ink-faint">Drag along the track, or use the arrow keys.</p>
    </div>
  );
}

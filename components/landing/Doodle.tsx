"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

/*
 * Hand-drawn line art, one piece per section.
 *
 * Every piece is plain stroked paths so it can be "drawn" on first view: each
 * path animates its pathLength from 0 to 1, staggered, so the illustration
 * appears to be sketched in front of the reader. It never fully stops after
 * that: the whole piece floats and sways on a slow loop, and the accent stroke
 * keeps erasing and re-sketching itself, like a pen going over the line again.
 * Strokes are warm ink with one accent per piece. Decorative only: hidden from
 * assistive tech, and frozen in its drawn state under reduced motion.
 */

type Stroke = { d: string; accent?: boolean; width?: number };
type Art = { viewBox: string; strokes: Stroke[]; glyphs?: { x: number; y: number; text: string }[] };

const ART = {
  // A speech bubble with sound leaving it.
  speech: {
    viewBox: "0 0 180 110",
    strokes: [
      { d: "M20 30 Q20 12 40 12 H110 Q130 12 130 30 V62 Q130 80 110 80 H58 L36 98 L40 80 Q20 80 20 62 Z" },
      { d: "M40 36 H104" },
      { d: "M40 54 H88" },
      { d: "M144 32 Q154 46 144 60", accent: true },
      { d: "M157 22 Q174 46 157 70", accent: true },
    ],
  },
  // A paper plane: the message, sent.
  plane: {
    viewBox: "0 0 170 120",
    strokes: [
      { d: "M24 58 L152 14 L108 104 L86 70 Z" },
      { d: "M86 70 L152 14" },
      { d: "M86 70 L82 96 L98 82" },
      { d: "M70 80 C46 98 34 70 10 102", accent: true },
    ],
  },
  // Drafts crossed out and rewritten.
  scribble: {
    viewBox: "0 0 170 90",
    strokes: [
      { d: "M12 20 H150" },
      { d: "M12 44 H122" },
      { d: "M12 68 H140" },
      { d: "M6 46 C28 22 42 64 62 40 S94 20 104 46 S134 64 158 34", accent: true, width: 2.5 },
    ],
  },
  // A globe with an orbit of scripts.
  globe: {
    viewBox: "0 0 190 150",
    strokes: [
      { d: "M95 25 A50 50 0 1 1 94.9 25" },
      { d: "M95 25 C66 45 66 105 95 125 C124 105 124 45 95 25" },
      { d: "M45 75 H145" },
      { d: "M53 50 H137" },
      { d: "M53 100 H137" },
      { d: "M18 86 C18 40 172 40 172 74 C172 108 18 118 18 86", accent: true },
    ],
    glyphs: [
      { x: 10, y: 52, text: "あ" },
      { x: 166, y: 40, text: "ñ" },
      { x: 160, y: 128, text: "अ" },
    ],
  },
  // A waveform over a measuring rule.
  measure: {
    viewBox: "0 0 190 110",
    strokes: [
      { d: "M10 50 H22 L28 32 L36 70 L44 18 L52 82 L60 34 L68 64 L76 42 L84 58 L92 50 H180", accent: true },
      { d: "M10 92 H180" },
      { d: "M10 92 V82 M31 92 V86 M52 92 V82 M73 92 V86 M94 92 V82 M115 92 V86 M136 92 V82 M157 92 V86 M178 92 V82" },
    ],
  },
  // Sparkles over a finished underline.
  sparkle: {
    viewBox: "0 0 150 110",
    strokes: [
      { d: "M44 10 L50 34 L74 40 L50 46 L44 70 L38 46 L14 40 L38 34 Z" },
      { d: "M108 18 L111 29 L122 32 L111 35 L108 46 L105 35 L94 32 L105 29 Z", accent: true },
      { d: "M12 94 C32 82 52 106 72 94 S112 82 136 94" },
    ],
  },
  // Stacked app windows and a cursor.
  windows: {
    viewBox: "0 0 170 120",
    strokes: [
      { d: "M46 12 H156 V82 H132" },
      { d: "M20 32 H130 V102 H20 Z" },
      { d: "M20 46 H130" },
      { d: "M34 64 H96 M34 80 H82" },
      { d: "M118 74 L118 108 L127 99 L134 114 L141 111 L134 96 L147 96 Z", accent: true },
    ],
  },
  // A microphone, ready.
  mic: {
    viewBox: "0 0 176 120",
    strokes: [
      { d: "M70 22 A18 18 0 0 1 106 22 V58 A18 18 0 0 1 70 58 Z" },
      { d: "M56 54 A32 32 0 0 0 120 54" },
      { d: "M88 86 V104 M70 104 H106" },
      { d: "M40 30 Q28 42 40 54 M136 30 Q148 42 136 54", accent: true },
    ],
  },
  // A speedometer: thought outruns the keyboard.
  speed: {
    viewBox: "0 0 180 110",
    strokes: [
      { d: "M30 92 A60 60 0 0 1 150 92" },
      { d: "M42 92 H52 M128 92 H138 M90 40 V50 M54 56 L61 63 M126 56 L119 63" },
      { d: "M90 92 L128 58", accent: true, width: 2.5 },
      { d: "M84 92 A6 6 0 1 0 96 92 A6 6 0 1 0 84 92" },
    ],
  },
  // An open notebook with a pen.
  notebook: {
    viewBox: "0 0 180 120",
    strokes: [
      { d: "M20 24 Q50 14 88 26 V104 Q50 92 20 102 Z" },
      { d: "M88 26 Q126 14 156 24 V102 Q126 92 88 104" },
      { d: "M34 44 H72 M34 58 H70 M34 72 H64 M104 44 H142 M104 58 H136" },
      { d: "M118 84 L158 44 L166 52 L126 92 L114 96 Z", accent: true },
    ],
  },
  // A keycap being pressed.
  hotkey: {
    viewBox: "0 0 170 110",
    strokes: [
      { d: "M40 30 H130 Q138 30 138 38 V78 Q138 86 130 86 H40 Q32 86 32 78 V38 Q32 30 40 30 Z" },
      { d: "M46 40 H124 V70 H46 Z" },
      { d: "M70 56 H100" },
      { d: "M20 20 L30 30 M150 20 L140 30 M85 6 V18", accent: true },
    ],
  },
  // Two chat bubbles: one rough, one polished.
  bubbles: {
    viewBox: "0 0 180 120",
    strokes: [
      { d: "M14 22 Q14 10 26 10 H92 Q104 10 104 22 V50 Q104 62 92 62 H44 L28 76 L30 62 Q14 62 14 50 Z" },
      { d: "M28 28 C40 22 50 40 62 30 S82 26 90 34", accent: true },
      { d: "M76 70 Q76 58 88 58 H154 Q166 58 166 70 V98 Q166 110 154 110 H140 L150 120 L126 110 H88 Q76 110 76 98 Z" },
      { d: "M92 76 H150 M92 92 H134" },
    ],
  },
  // A price tag.
  tag: {
    viewBox: "0 0 170 120",
    strokes: [
      { d: "M30 20 H96 L150 66 L104 112 L30 50 Z" },
      { d: "M52 38 A7 7 0 1 1 51.9 38" },
      { d: "M86 64 H118 M92 80 H112" },
      { d: "M12 30 C2 50 18 64 30 50", accent: true },
    ],
  },
  // A question mark with a spark of insight.
  question: {
    viewBox: "0 0 150 120",
    strokes: [
      { d: "M50 40 Q50 14 76 14 Q102 14 102 38 Q102 54 84 62 Q76 66 76 78" },
      { d: "M76 96 V98" , width: 4 },
      { d: "M118 20 L124 34 L138 40 L124 46 L118 60 L112 46 L98 40 L112 34 Z", accent: true },
    ],
  },
  // A balance scale: weighing the options.
  scales: {
    viewBox: "0 0 180 120",
    strokes: [
      { d: "M90 14 V100 M60 104 H120" },
      { d: "M34 30 H146" },
      { d: "M34 30 L18 66 H50 Z" },
      { d: "M146 30 L130 66 H162 Z", accent: true },
      { d: "M90 8 A6 6 0 1 1 89.9 8" },
    ],
  },
  // A quotation mark.
  quote: {
    viewBox: "0 0 150 110",
    strokes: [
      { d: "M30 70 Q30 30 62 22 M30 70 A14 14 0 1 0 44 56" },
      { d: "M78 70 Q78 30 110 22 M78 70 A14 14 0 1 0 92 56" },
      { d: "M24 96 C50 86 90 106 126 92", accent: true },
    ],
  },
  // People who write for a living.
  people: {
    viewBox: "0 0 190 110",
    strokes: [
      { d: "M60 34 A14 14 0 1 1 59.9 34 M34 96 Q34 66 60 66 Q86 66 86 96" },
      { d: "M130 34 A14 14 0 1 1 129.9 34 M104 96 Q104 66 130 66 Q156 66 156 96" },
      { d: "M86 30 L104 14 M98 14 H104 V20", accent: true },
    ],
  },
} satisfies Record<string, Art>;

export type DoodleName = keyof typeof ART;

export function Doodle({
  name,
  className = "",
  tone = "light",
}: {
  name: DoodleName;
  className?: string;
  tone?: "light" | "dark";
}) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const reduceMotion = useReducedMotion();
  const art: Art = ART[name];
  const ink = tone === "dark" ? "rgba(255,255,255,0.42)" : "rgba(51,48,42,0.38)";
  const accent = tone === "dark" ? "#e8a07f" : "var(--o-accent)";
  // A per-piece phase so neighbouring doodles do not sway in lockstep.
  const phase = (name.length % 5) * 0.7;

  return (
    <motion.svg
      ref={ref}
      viewBox={art.viewBox}
      className={className}
      fill="none"
      aria-hidden="true"
      animate={reduceMotion || !inView ? undefined : { y: [0, -6, 0], rotate: [0, -2, 0, 1.5, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: phase }}
    >
      {art.strokes.map((stroke, i) => {
        const delay = 0.15 + i * 0.18;
        const drawn = { pathLength: 1, opacity: 1 };
        // The accent stroke loops: draw, hold, erase back to its start, redraw.
        const loop = stroke.accent && !reduceMotion;
        return (
          <motion.path
            key={i}
            d={stroke.d}
            stroke={stroke.accent ? accent : ink}
            strokeWidth={stroke.width ?? 2}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
            animate={
              !inView || reduceMotion
                ? reduceMotion ? drawn : undefined
                : loop
                  ? { pathLength: [0, 1, 1, 0, 1], opacity: 1 }
                  : drawn
            }
            transition={
              loop
                ? { duration: 6, times: [0, 0.22, 0.7, 0.86, 1], repeat: Infinity, repeatDelay: 0.6, delay, ease: "easeInOut" }
                : { duration: 1.3, delay, ease: [0.33, 0.1, 0.25, 1] }
            }
          />
        );
      })}
      {art.glyphs?.map((glyph, i) => (
        <motion.text
          key={glyph.text}
          x={glyph.x}
          y={glyph.y}
          fill={ink}
          fontSize="18"
          fontFamily="var(--font-serif)"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={
            !inView || reduceMotion
              ? undefined
              : { opacity: [0, 1, 1, 0.5, 1], y: [glyph.y + 6, glyph.y, glyph.y - 3, glyph.y, glyph.y] }
          }
          transition={{ duration: 5, delay: 1 + i * 0.4, repeat: Infinity, repeatDelay: 0.4 + i * 0.3, ease: "easeInOut" }}
        >
          {glyph.text}
        </motion.text>
      ))}
    </motion.svg>
  );
}

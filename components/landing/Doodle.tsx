"use client";

import { motion, useReducedMotion } from "framer-motion";

/*
 * Hand-drawn line art, one piece per section.
 *
 * Every piece is plain stroked paths so it can be "drawn" on first view: each
 * path animates its pathLength from 0 to 1, staggered, so the illustration
 * appears to be sketched in front of the reader. Strokes are warm ink with one
 * accent stroke per piece. Decorative only: hidden from assistive tech.
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
  const reduceMotion = useReducedMotion();
  const art: Art = ART[name];
  const ink = tone === "dark" ? "rgba(255,255,255,0.42)" : "rgba(51,48,42,0.38)";
  const accent = tone === "dark" ? "#e8a07f" : "var(--o-accent)";

  return (
    <svg viewBox={art.viewBox} className={className} fill="none" aria-hidden="true">
      {art.strokes.map((stroke, i) => (
        <motion.path
          key={i}
          d={stroke.d}
          stroke={stroke.accent ? accent : ink}
          strokeWidth={stroke.width ?? 2}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.3, delay: 0.15 + i * 0.18, ease: [0.33, 0.1, 0.25, 1] }}
        />
      ))}
      {art.glyphs?.map((glyph, i) => (
        <motion.text
          key={glyph.text}
          x={glyph.x}
          y={glyph.y}
          fill={ink}
          fontSize="18"
          fontFamily="var(--font-serif)"
          initial={reduceMotion ? false : { opacity: 0, y: glyph.y + 6 }}
          whileInView={{ opacity: 1, y: glyph.y }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 1 + i * 0.2 }}
        >
          {glyph.text}
        </motion.text>
      ))}
    </svg>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { FIELD } from "./shared";

const PASSAGE =
  "Most of us can speak about three times faster than we can type. When an idea arrives, the words are already there, but our fingers slow them down. We pause to fix a typo, we lose the thread, and the sentence that felt clear in our head comes out shorter and flatter on the page. Speaking keeps the thought whole. You say what you mean, in the order you think it, and the rhythm of your voice carries the meaning along. That is why a quick voice note often explains more than a long message. The trick is turning that speech into writing that reads well, without the pauses, the repeats and the little words we lean on while we think.";

const PASSAGE_WORDS = PASSAGE.split(/\s+/).length;

function band(wpm: number) {
  if (wpm < 110) return "Slow and deliberate: good for teaching or complex ideas.";
  if (wpm < 130) return "Measured: a comfortable pace for presentations.";
  if (wpm < 160) return "Conversational: the natural pace of most speakers.";
  if (wpm < 190) return "Quick: energetic, but slow down for key points.";
  return "Very fast: listeners may struggle to keep up.";
}

export function SpeakingSpeedTool() {
  const [startedAt, setStartedAt] = useState<number | null>(null);
  const [now, setNow] = useState(0);
  const [result, setResult] = useState<number | null>(null);
  const [words, setWords] = useState("300");
  const [minutes, setMinutes] = useState("2");
  const timer = useRef<number>();

  useEffect(() => () => window.clearInterval(timer.current), []);

  const start = () => {
    setResult(null);
    const t = Date.now();
    setStartedAt(t);
    setNow(t);
    timer.current = window.setInterval(() => setNow(Date.now()), 100);
  };

  const stop = () => {
    window.clearInterval(timer.current);
    if (startedAt) setResult(Math.round(PASSAGE_WORDS / ((Date.now() - startedAt) / 60000)));
    setStartedAt(null);
  };

  const elapsed = startedAt ? (now - startedAt) / 1000 : 0;
  const calc = Number(words) > 0 && Number(minutes) > 0 ? Math.round(Number(words) / Number(minutes)) : null;

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_17rem]">
      <div className="flex flex-col gap-4">
        <p className="eyebrow">Read this aloud at your normal pace ({PASSAGE_WORDS} words)</p>
        <p className={`paper-ruled rounded-xl border border-line p-5 font-serif text-[18px] leading-[28px] text-ink transition-opacity ${startedAt ? "" : "opacity-80"}`}>{PASSAGE}</p>
        <div className="flex flex-wrap items-center gap-4">
          {startedAt ? (
            <button type="button" onClick={stop} className="btn-soft min-w-[180px]">
              I&apos;m done ({elapsed.toFixed(1)}s)
            </button>
          ) : (
            <button type="button" onClick={start} className="btn-primary min-w-[180px]">
              {result ? "Try again" : "Start the timer"}
            </button>
          )}
          {result !== null && (
            <p className="font-display text-[15px] text-ink">
              <span className="font-serif text-[34px] leading-none text-brand">{result}</span> words per minute.{" "}
              <span className="text-ink-soft">{band(result)}</span>
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-4 self-start rounded-xl bg-canvas p-5">
        <p className="font-display text-[14px] font-semibold text-ink">Or work it out</p>
        <label className="flex flex-col gap-1.5">
          <span className="eyebrow">Words spoken</span>
          <input type="number" min={1} value={words} onChange={(e) => setWords(e.target.value)} className={`${FIELD} h-11`} />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="eyebrow">Minutes</span>
          <input type="number" min={0.1} step={0.1} value={minutes} onChange={(e) => setMinutes(e.target.value)} className={`${FIELD} h-11`} />
        </label>
        {calc !== null && (
          <p className="font-display text-[14px] text-ink-soft">
            <span className="font-serif text-[28px] leading-none text-ink">{calc}</span> WPM · {band(calc)}
          </p>
        )}
        <p className="border-t border-line pt-3 font-display text-[12.5px] leading-snug text-ink-faint">
          For comparison, most people type 40 words per minute. Oravo lets you write at the speed you speak.
        </p>
      </div>
    </div>
  );
}

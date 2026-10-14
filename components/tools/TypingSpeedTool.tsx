"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { RotateCcw } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

const PASSAGES = [
  "The best ideas often arrive when you are away from the keyboard. You are walking, cooking or driving, and the sentence you have been looking for all morning suddenly appears in full. By the time you sit down to type it, half of it has gone. Writing is thinking, but typing is a slow way to think out loud, and most of us type far slower than we speak.",
  "Good emails are short, clear and kind. Start with what you need, give the one piece of context that matters, and end with a question that is easy to answer. Most messages that feel hard to write are hard because we are not sure what we want yet. Say it out loud first, and the words usually come out in the right order.",
  "Every team has a meeting that could have been a message, and a message that should have been a meeting. The difference is rarely the topic. It is whether people need to react to each other in real time. When decisions need debate, talk. When they need a record, write. And when you can, do both at once.",
  "A typing test measures how quickly your fingers can keep up with your eyes. The average person types around forty words per minute, while a fast typist reaches seventy or more. Speaking is different. Most people talk at about one hundred and fifty words per minute without trying, which is why dictation can feel like a superpower.",
];

const DURATIONS = [30, 60, 120] as const;
const SPEAKING_WPM = 150;

function verdict(wpm: number) {
  if (wpm < 30) return "Below average. Practice a few minutes a day and it climbs fast.";
  if (wpm < 45) return "About average. Most people type 35 to 45 words per minute.";
  if (wpm < 65) return "Above average. Faster than most office workers.";
  if (wpm < 85) return "Fast. You type quicker than about nine in ten people.";
  return "Very fast. That is professional typist territory.";
}

export function TypingSpeedTool() {
  const [duration, setDuration] = useState<(typeof DURATIONS)[number]>(60);
  const [passageIndex, setPassageIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [startedAt, setStartedAt] = useState<number | null>(null);
  const [now, setNow] = useState(0);
  const [finishedAt, setFinishedAt] = useState<number | null>(null);
  const input = useRef<HTMLTextAreaElement>(null);
  const timer = useRef<number>();
  const passage = PASSAGES[passageIndex];

  useEffect(() => () => window.clearInterval(timer.current), []);

  const reset = (next = passageIndex) => {
    window.clearInterval(timer.current);
    setPassageIndex(next);
    setTyped("");
    setStartedAt(null);
    setFinishedAt(null);
    setTimeout(() => input.current?.focus(), 0);
  };

  const finish = (at: number) => {
    window.clearInterval(timer.current);
    setFinishedAt(at);
  };

  const onType = (value: string) => {
    if (finishedAt) return;
    const text = value.slice(0, passage.length);
    if (!startedAt && text) {
      const t = Date.now();
      setStartedAt(t);
      setNow(t);
      timer.current = window.setInterval(() => {
        const n = Date.now();
        setNow(n);
        if ((n - t) / 1000 >= duration) finish(t + duration * 1000);
      }, 100);
    }
    setTyped(text);
    if (text.length === passage.length) finish(Date.now());
  };

  const stats = useMemo(() => {
    const end = finishedAt ?? now;
    const minutes = startedAt ? Math.max(1, end - startedAt) / 60000 : 0;
    let correct = 0;
    for (let i = 0; i < typed.length; i++) if (typed[i] === passage[i]) correct++;
    const wpm = minutes ? Math.round(correct / 5 / minutes) : 0;
    const accuracy = typed.length ? Math.round((correct / typed.length) * 100) : 100;
    return { wpm, accuracy, correct, errors: typed.length - correct };
  }, [typed, passage, startedAt, now, finishedAt]);

  useEffect(() => {
    if (finishedAt) trackEvent("tool_run", { tool: "typing-speed-test", wpm: stats.wpm });
    // Only when a run ends.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [finishedAt]);

  const left = startedAt ? Math.max(0, duration - ((finishedAt ?? now) - startedAt) / 1000) : duration;
  const done = Boolean(finishedAt);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-wrap items-center gap-3">
        <div role="radiogroup" aria-label="Test length" className="inline-flex rounded-lg bg-canvas p-1">
          {DURATIONS.map((d) => (
            <button
              key={d}
              type="button"
              role="radio"
              aria-checked={duration === d}
              disabled={Boolean(startedAt) && !done}
              onClick={() => {
                setDuration(d);
                reset();
              }}
              className={`h-8 rounded-md px-3 font-display text-[13px] font-semibold disabled:opacity-50 ${duration === d ? "key-on" : "text-ink-soft"}`}
            >
              {d < 60 ? `${d} sec` : `${d / 60} min`}
            </button>
          ))}
        </div>
        <button type="button" onClick={() => reset((passageIndex + 1) % PASSAGES.length)} className="chip h-9 px-3 font-display text-[13px] font-semibold text-ink">
          <RotateCcw aria-hidden="true" className="h-3.5 w-3.5" /> New text
        </button>
        <span className="ml-auto font-serif text-[30px] leading-none text-ink tabular-nums" aria-live="off">
          {Math.ceil(left)}s
        </span>
      </div>

      <div className="relative cursor-text rounded-xl border border-line bg-raised p-5 sm:p-6" onClick={() => input.current?.focus()}>
        <p className="select-none font-display text-[19px] leading-[1.75] tracking-[0.005em] sm:text-[21px]" aria-hidden="true">
          {passage.split("").map((ch, i) => {
            const state = i < typed.length ? (typed[i] === ch ? "ok" : "bad") : i === typed.length ? "cursor" : "todo";
            return (
              <span
                key={i}
                className={
                  state === "ok"
                    ? "text-ink"
                    : state === "bad"
                      ? "rounded-sm bg-rose text-brand"
                      : state === "cursor"
                        ? "border-l-2 border-primary-500 text-ink-faint"
                        : "text-ink-faint"
                }
              >
                {ch}
              </span>
            );
          })}
        </p>
        <textarea
          ref={input}
          value={typed}
          onChange={(e) => onType(e.target.value)}
          onPaste={(e) => e.preventDefault()}
          disabled={done}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck={false}
          aria-label="Type the passage here"
          className="absolute inset-0 h-full w-full resize-none opacity-0"
        />
        {!startedAt && <p className="mt-3 font-display text-[13px] text-ink-faint">Start typing to begin. The clock starts on your first key.</p>}
      </div>

      <dl className="surface-solid grid grid-cols-3 divide-x divide-line">
        {[
          ["Words per minute", stats.wpm],
          ["Accuracy", `${stats.accuracy}%`],
          ["Errors", stats.errors],
        ].map(([label, value]) => (
          <div key={label} className="px-4 py-4 text-center">
            <dt className="eyebrow">{label}</dt>
            <dd className="mt-1 font-serif text-[30px] leading-none text-ink tabular-nums">{value}</dd>
          </div>
        ))}
      </dl>

      {done && (
        <div className="rounded-xl bg-blush p-5 shadow-[inset_0_0_0_1px_var(--o-line)] sm:p-6">
          <p className="font-display text-[15px] text-ink">
            <span className="font-semibold">{stats.wpm} WPM.</span> {verdict(stats.wpm)}
          </p>
          <p className="mt-2 font-display text-[14px] leading-relaxed text-ink-soft">
            Most people speak at about {SPEAKING_WPM} words per minute
            {stats.wpm > 0 ? (
              <>
                , which is <span className="font-semibold text-brand">{(SPEAKING_WPM / stats.wpm).toFixed(1)}x faster</span> than you just typed
              </>
            ) : null}
            . Oravo turns that speed into finished, punctuated text in any app.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <a
              href="/download"
              onClick={() => trackEvent("primary_cta_click", { cta: "tools_typing_result", destination: "download", variant: "typing-speed-test" })}
              className="btn-primary !h-10 !px-4 !text-[14px]"
            >
              Type by voice with Oravo
            </a>
            <button type="button" onClick={() => reset()} className="btn-neutral !h-10 !px-4 !text-[14px]">
              Try again
            </button>
            <a href="/tools/speaking-speed-test" className="btn-neutral !h-10 !px-4 !text-[14px]">
              Test your speaking speed
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

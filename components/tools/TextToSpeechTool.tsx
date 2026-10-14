"use client";

import { useEffect, useState } from "react";
import { Pause, Play, Square } from "lucide-react";
import { FIELD } from "./shared";

const SAMPLE =
  "Hi everyone, quick update on the launch. Design is wrapping up this week, and the copy gets its final pass on Thursday. If nothing changes, we ship next Friday.";

// Text to speech with the voices built into the device: no API, no cost.
export function TextToSpeechTool() {
  const [supported, setSupported] = useState(true);
  const [text, setText] = useState(SAMPLE);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [voice, setVoice] = useState("");
  const [rate, setRate] = useState(1);
  const [state, setState] = useState<"idle" | "speaking" | "paused">("idle");

  useEffect(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      setSupported(false);
      return;
    }
    const load = () => {
      const list = window.speechSynthesis.getVoices().sort((a, b) => a.lang.localeCompare(b.lang) || a.name.localeCompare(b.name));
      setVoices(list);
      setVoice((v) => v || list.find((x) => x.default)?.voiceURI || list.find((x) => x.lang.startsWith("en"))?.voiceURI || list[0]?.voiceURI || "");
    };
    load();
    window.speechSynthesis.addEventListener("voiceschanged", load);
    return () => {
      window.speechSynthesis.removeEventListener("voiceschanged", load);
      window.speechSynthesis.cancel();
    };
  }, []);

  const play = () => {
    const synth = window.speechSynthesis;
    if (state === "paused") {
      synth.resume();
      setState("speaking");
      return;
    }
    synth.cancel();
    const u = new SpeechSynthesisUtterance(text.slice(0, 5000));
    const v = voices.find((x) => x.voiceURI === voice);
    if (v) {
      u.voice = v;
      u.lang = v.lang;
    }
    u.rate = rate;
    u.onend = () => setState("idle");
    u.onerror = () => setState("idle");
    synth.speak(u);
    setState("speaking");
  };

  if (!supported) {
    return <p className="py-12 text-center font-display text-[14px] text-ink-soft">This browser has no built-in voices. Try Chrome, Edge or Safari.</p>;
  }

  return (
    <div className="grid gap-5 lg:grid-cols-[1fr_17rem]">
      <div className="flex flex-col">
        <label htmlFor="tts-in" className="eyebrow mb-2">
          Text to read
        </label>
        <textarea id="tts-in" value={text} onChange={(e) => setText(e.target.value)} maxLength={5000} className={`${FIELD} min-h-[240px] flex-1 resize-y py-3 leading-relaxed`} />
        <p className="mt-1.5 text-right font-display text-[12px] text-ink-faint">{text.length.toLocaleString()} / 5,000</p>
      </div>
      <div className="flex flex-col gap-4 self-start rounded-xl bg-canvas p-5">
        <label className="flex flex-col gap-1.5">
          <span className="eyebrow">Voice</span>
          <select value={voice} onChange={(e) => setVoice(e.target.value)} className={`${FIELD} h-11`}>
            {voices.map((v) => (
              <option key={v.voiceURI} value={v.voiceURI}>
                {v.name} ({v.lang})
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="eyebrow">Speed · {rate.toFixed(1)}x</span>
          <input type="range" min={0.5} max={2} step={0.1} value={rate} onChange={(e) => setRate(Number(e.target.value))} className="accent-primary-500" />
        </label>
        <div className="flex gap-2">
          {state === "speaking" ? (
            <button
              type="button"
              onClick={() => {
                window.speechSynthesis.pause();
                setState("paused");
              }}
              className="btn-soft flex-1"
            >
              <Pause aria-hidden="true" className="h-4 w-4" /> Pause
            </button>
          ) : (
            <button type="button" onClick={play} disabled={!text.trim()} className="btn-primary flex-1 disabled:opacity-60">
              <Play aria-hidden="true" className="h-4 w-4" /> {state === "paused" ? "Resume" : "Play"}
            </button>
          )}
          {state !== "idle" && (
            <button
              type="button"
              aria-label="Stop"
              onClick={() => {
                window.speechSynthesis.cancel();
                setState("idle");
              }}
              className="btn-neutral !px-4"
            >
              <Square aria-hidden="true" className="h-4 w-4 fill-current" />
            </button>
          )}
        </div>
        <p className="border-t border-line pt-3 font-display text-[12.5px] leading-snug text-ink-faint">
          These are your device&apos;s built-in voices. The Oravo app reads any text aloud with natural AI voices, in any app.
        </p>
      </div>
    </div>
  );
}

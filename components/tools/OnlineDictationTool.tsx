"use client";

import { useEffect, useRef, useState } from "react";
import { Mic, Square } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { CopyButton, DownloadButton, FIELD, ResultUpsell, download } from "./shared";

// The Web Speech API is prefixed in Chrome and Safari and missing in Firefox.
type Recognition = {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  start: () => void;
  stop: () => void;
  onresult: ((e: { resultIndex: number; results: ArrayLike<{ isFinal: boolean; 0: { transcript: string } }> }) => void) | null;
  onerror: ((e: { error: string }) => void) | null;
  onend: (() => void) | null;
};

const LANGS: [string, string][] = [
  ["en-US", "English (US)"],
  ["en-GB", "English (UK)"],
  ["en-IN", "English (India)"],
  ["hi-IN", "Hindi"],
  ["es-ES", "Spanish (Spain)"],
  ["es-MX", "Spanish (Mexico)"],
  ["fr-FR", "French"],
  ["de-DE", "German"],
  ["pt-BR", "Portuguese (Brazil)"],
  ["it-IT", "Italian"],
  ["nl-NL", "Dutch"],
  ["ja-JP", "Japanese"],
  ["ko-KR", "Korean"],
  ["zh-CN", "Chinese (Mandarin)"],
  ["ar-SA", "Arabic"],
  ["ru-RU", "Russian"],
  ["tr-TR", "Turkish"],
  ["vi-VN", "Vietnamese"],
  ["id-ID", "Indonesian"],
  ["fil-PH", "Filipino"],
];

/** Spoken punctuation, so people can dictate "period" and "new line". */
const COMMANDS: [RegExp, string][] = [
  [/\s*\b(new paragraph)\b\s*/gi, "\n\n"],
  [/\s*\b(new line|next line)\b\s*/gi, "\n"],
  [/\s*\b(full stop|period)\b/gi, "."],
  [/\s*\bcomma\b/gi, ","],
  [/\s*\bquestion mark\b/gi, "?"],
  [/\s*\bexclamation (mark|point)\b/gi, "!"],
  [/\s*\bcolon\b/gi, ":"],
];

function applyCommands(text: string) {
  let out = text;
  for (const [re, rep] of COMMANDS) out = out.replace(re, rep);
  // Capitalise after sentence ends and line breaks.
  return out.replace(/(^|[.!?]\s+|\n)([a-z])/g, (_, p, c) => p + c.toUpperCase());
}

export function OnlineDictationTool() {
  const [supported, setSupported] = useState(true);
  const [lang, setLang] = useState("en-US");
  const [listening, setListening] = useState(false);
  const [text, setText] = useState("");
  const [interim, setInterim] = useState("");
  const [error, setError] = useState("");
  const rec = useRef<Recognition | null>(null);
  const wantOn = useRef(false);

  useEffect(() => {
    const w = window as unknown as { SpeechRecognition?: new () => Recognition; webkitSpeechRecognition?: new () => Recognition };
    if (!w.SpeechRecognition && !w.webkitSpeechRecognition) setSupported(false);
    const browserLang = navigator.language;
    if (LANGS.some(([code]) => code === browserLang)) setLang(browserLang);
    return () => {
      wantOn.current = false;
      rec.current?.stop();
    };
  }, []);

  const start = () => {
    const w = window as unknown as { SpeechRecognition?: new () => Recognition; webkitSpeechRecognition?: new () => Recognition };
    const Ctor = w.SpeechRecognition || w.webkitSpeechRecognition;
    if (!Ctor) return setSupported(false);
    setError("");
    const r = new Ctor();
    r.lang = lang;
    r.continuous = true;
    r.interimResults = true;
    r.onresult = (e) => {
      let finals = "";
      let pending = "";
      for (let i = e.resultIndex; i < e.results.length; i++) {
        const res = e.results[i];
        if (res.isFinal) finals += res[0].transcript;
        else pending += res[0].transcript;
      }
      if (finals) {
        setText((prev) => {
          const joined = prev && !/[\s\n]$/.test(prev) ? `${prev} ${finals.trim()}` : `${prev}${finals.trim()}`;
          return applyCommands(joined);
        });
      }
      setInterim(pending);
    };
    r.onerror = (e) => {
      if (e.error === "not-allowed" || e.error === "service-not-allowed") {
        wantOn.current = false;
        setError("Microphone access was blocked. Allow it from the icon in the address bar, then try again.");
      } else if (e.error === "network") {
        setError("The browser's speech service could not be reached. Check your connection.");
      }
    };
    // Browsers end a session after a pause; restart while the user wants it on.
    r.onend = () => {
      setInterim("");
      if (wantOn.current) {
        try {
          r.start();
          return;
        } catch {
          /* fall through */
        }
      }
      setListening(false);
    };
    rec.current = r;
    wantOn.current = true;
    r.start();
    setListening(true);
    trackEvent("tool_run", { tool: "online-dictation", language: lang });
  };

  const stop = () => {
    wantOn.current = false;
    rec.current?.stop();
    setListening(false);
  };

  if (!supported) {
    return (
      <div className="flex min-h-[220px] flex-col items-center justify-center gap-3 text-center">
        <p className="max-w-md font-display text-[15px] text-ink">This browser has no built-in speech recognition. Firefox does not support it yet.</p>
        <p className="max-w-md font-display text-[13.5px] text-ink-soft">Open this page in Chrome, Edge or Safari, or use our Speech to Text tool, which works in every browser.</p>
        <a href="/tools/speech-to-text" className="btn-primary mt-2">
          Open Speech to Text
        </a>
      </div>
    );
  }

  const words = text.trim() ? text.trim().split(/\s+/).length : 0;

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-4 rounded-xl bg-canvas p-4 sm:flex-row sm:items-end sm:justify-between sm:p-5">
        <label className="flex flex-col gap-1.5 sm:w-64">
          <span className="eyebrow">Language</span>
          <select value={lang} disabled={listening} onChange={(e) => setLang(e.target.value)} className={`${FIELD} h-11`}>
            {LANGS.map(([code, name]) => (
              <option key={code} value={code}>
                {name}
              </option>
            ))}
          </select>
        </label>
        <button type="button" onClick={listening ? stop : start} aria-pressed={listening} className={`${listening ? "btn-soft" : "btn-primary"} min-w-[220px]`}>
          {listening ? <Square aria-hidden="true" className="h-4 w-4 fill-current" /> : <Mic aria-hidden="true" className="h-4 w-4" />}
          {listening ? "Stop dictating" : "Start dictating"}
        </button>
      </div>

      <div className="relative">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          aria-label="Dictated text"
          placeholder={'Press Start dictating and talk. Say "comma", "period" or "new line" for punctuation.'}
          className="paper-ruled min-h-[300px] w-full resize-y rounded-xl border border-line p-4 text-[15.5px] leading-[28px] text-ink outline-none focus:border-primary-500/50"
        />
        {interim && (
          <p className="pointer-events-none absolute bottom-3 left-4 right-4 truncate rounded-md bg-cloud/90 px-2.5 py-1 font-display text-[13.5px] italic text-cloud-ink" aria-live="polite">
            {interim}
          </p>
        )}
      </div>
      {error && <p className="font-display text-[13.5px] text-brand">{error}</p>}

      <div className="flex flex-wrap items-center gap-2">
        <span className="mr-auto font-display text-[12.5px] text-ink-faint">
          {words.toLocaleString()} words · {listening ? "Listening…" : "Stopped"}
        </span>
        {text && (
          <>
            <CopyButton text={text} />
            <DownloadButton label="Save TXT" onClick={() => download("dictation.txt", text)} />
            <button type="button" onClick={() => setText("")} className="chip h-9 px-3 font-display text-[13px] font-semibold text-ink-soft">
              Clear
            </button>
          </>
        )}
      </div>
      {words >= 15 && !listening && (
        <ResultUpsell
          tool="online-dictation"
          lead="That was your browser's basic recognition."
          line="Oravo dictates into any app on your computer or phone, removes fillers, adds punctuation for you and understands accents."
        />
      )}
    </div>
  );
}

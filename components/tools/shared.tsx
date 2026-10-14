"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowRight, Check, Copy, Download, LoaderCircle, Mic, Sparkles, Square } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

// Building blocks shared by the free tool stages: the app upsell, result
// boxes, the record key, the language picker and the API helpers.

/* --- API ------------------------------------------------------------------ */

export class ToolApiError extends Error {
  constructor(message: string, readonly status: number, readonly body: Record<string, unknown> = {}) {
    super(message);
  }
}

export async function postTool<T>(path: string, body: FormData | Record<string, unknown>): Promise<T> {
  const isForm = body instanceof FormData;
  let res: Response;
  try {
    res = await fetch(path, {
      method: "POST",
      body: isForm ? body : JSON.stringify(body),
      headers: isForm ? undefined : { "Content-Type": "application/json" },
    });
  } catch {
    throw new ToolApiError("Could not reach the server. Check your connection and try again.", 0);
  }
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new ToolApiError(data.error || "Something went wrong. Try again.", res.status, data);
  return data as T;
}

/** Name the upload after its real container so the model can decode it. */
export function audioFileName(blob: Blob) {
  const type = blob.type || "";
  const ext = type.includes("mp4") || type.includes("aac") ? "m4a" : type.includes("ogg") ? "ogg" : type.includes("wav") ? "wav" : type.includes("mpeg") ? "mp3" : "webm";
  return `recording.${ext}`;
}

export const MAX_UPLOAD_BYTES = 4 * 1024 * 1024;

/* --- Upsell --------------------------------------------------------------- */

/** The banner above every AI tool: says plainly this is the lite model. */
export function LiteModelNotice({ tool }: { tool: string }) {
  return (
    <div className="flex flex-col gap-3 rounded-xl bg-cloud/70 px-4 py-3.5 shadow-[inset_0_0_0_1px_var(--o-cloud-line)] sm:flex-row sm:items-center sm:gap-4 sm:px-5">
      <Sparkles aria-hidden="true" className="hidden h-5 w-5 shrink-0 text-cloud-ink sm:block" />
      <p className="flex-1 font-display text-[13.5px] leading-snug text-cloud-ink">
        <span className="font-semibold">Free preview on a lighter AI model.</span> To keep this free, it runs on a smaller,
        lower-cost model with daily limits. Download the Oravo app for our best models, better accuracy and no limits.
      </p>
      <a
        href="/download"
        onClick={() => trackEvent("primary_cta_click", { cta: "tools_lite_notice", destination: "download", variant: tool })}
        className="inline-flex h-9 shrink-0 items-center justify-center gap-1.5 rounded-lg bg-primary-500 px-3.5 font-display text-[13px] font-semibold text-white transition-colors hover:bg-primary-600"
      >
        Get the app <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
      </a>
    </div>
  );
}

/** Shown under a finished result, when the visitor has just seen the value. */
export function ResultUpsell({ tool, line, lead = "That was the lite model." }: { tool: string; line: string; lead?: string }) {
  return (
    <div className="mt-4 flex flex-col gap-3 rounded-xl bg-blush px-4 py-4 shadow-[inset_0_0_0_1px_var(--o-line)] sm:flex-row sm:items-center sm:px-5">
      <p className="flex-1 font-display text-[13.5px] leading-snug text-ink-soft">
        <span className="font-semibold text-ink">{lead}</span> {line}
      </p>
      <a
        href="/download"
        onClick={() => trackEvent("primary_cta_click", { cta: "tools_result_upsell", destination: "download", variant: tool })}
        className="btn-primary !h-10 !px-4 !text-[14px]"
      >
        Download Oravo free
      </a>
    </div>
  );
}

export function ErrorNote({ children, action }: { children: ReactNode; action?: ReactNode }) {
  return (
    <div role="alert" className="mt-3 flex flex-col gap-2 rounded-lg bg-rose/60 px-4 py-3 font-display text-[13.5px] text-ink sm:flex-row sm:items-center">
      <span className="flex-1">{children}</span>
      {action}
    </div>
  );
}

/* --- Results -------------------------------------------------------------- */

export function download(filename: string, content: string, type = "text/plain") {
  const url = URL.createObjectURL(new Blob([content], { type: `${type};charset=utf-8` }));
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export function CopyButton({ text, label = "Copy" }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text);
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        } catch {
          /* clipboard blocked; the text is still selectable */
        }
      }}
      className="chip h-9 px-3 font-display text-[13px] font-semibold text-ink"
    >
      {copied ? <Check aria-hidden="true" className="h-3.5 w-3.5" /> : <Copy aria-hidden="true" className="h-3.5 w-3.5" />}
      {copied ? "Copied" : label}
    </button>
  );
}

export function DownloadButton({ onClick, label }: { onClick: () => void; label: string }) {
  return (
    <button type="button" onClick={onClick} className="chip h-9 px-3 font-display text-[13px] font-semibold text-ink">
      <Download aria-hidden="true" className="h-3.5 w-3.5" />
      {label}
    </button>
  );
}

export function Spinner({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-2">
      <LoaderCircle aria-hidden="true" className="h-4 w-4 animate-spin" />
      {label}
    </span>
  );
}

/* --- Inputs --------------------------------------------------------------- */

export const LANGUAGES: [string, string][] = [
  ["auto", "Auto-detect"],
  ["en", "English"],
  ["hi", "Hindi"],
  ["es", "Spanish"],
  ["fr", "French"],
  ["de", "German"],
  ["pt", "Portuguese"],
  ["it", "Italian"],
  ["nl", "Dutch"],
  ["ja", "Japanese"],
  ["ko", "Korean"],
  ["zh", "Chinese"],
  ["ar", "Arabic"],
  ["ru", "Russian"],
  ["tr", "Turkish"],
  ["vi", "Vietnamese"],
  ["tl", "Tagalog"],
  ["id", "Indonesian"],
  ["pl", "Polish"],
  ["uk", "Ukrainian"],
  ["bn", "Bengali"],
  ["ta", "Tamil"],
  ["te", "Telugu"],
  ["mr", "Marathi"],
  ["ur", "Urdu"],
];

export const FIELD =
  "w-full rounded-lg border border-line bg-raised px-3 font-display text-[14px] text-ink outline-none transition-colors focus:border-primary-500/60 focus:ring-2 focus:ring-primary-500/15";

export function LanguageSelect({ value, onChange, disabled }: { value: string; onChange: (v: string) => void; disabled?: boolean }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="eyebrow">Spoken language</span>
      <select value={value} disabled={disabled} onChange={(e) => onChange(e.target.value)} className={`${FIELD} h-11`}>
        {LANGUAGES.map(([code, name]) => (
          <option key={code} value={code}>
            {name}
          </option>
        ))}
      </select>
    </label>
  );
}

/* --- Recording ------------------------------------------------------------ */

export type RecorderState = "idle" | "recording" | "denied" | "unsupported";

/** MediaRecorder with a live level, an elapsed clock and a hard stop. */
export function useRecorder(maxSeconds: number, onDone: (blob: Blob) => void) {
  const [state, setState] = useState<RecorderState>("idle");
  const [elapsed, setElapsed] = useState(0);
  const [level, setLevel] = useState(0);
  const rec = useRef<MediaRecorder | null>(null);
  const stream = useRef<MediaStream | null>(null);
  const timer = useRef<number>();
  const raf = useRef<number>();
  const ctx = useRef<AudioContext | null>(null);
  const done = useRef(onDone);
  done.current = onDone;

  const cleanup = () => {
    window.clearInterval(timer.current);
    if (raf.current) cancelAnimationFrame(raf.current);
    stream.current?.getTracks().forEach((t) => t.stop());
    ctx.current?.close().catch(() => {});
    ctx.current = null;
    stream.current = null;
    setLevel(0);
  };

  useEffect(() => cleanup, []);

  const stop = () => {
    if (rec.current?.state === "recording") rec.current.stop();
  };

  const start = async () => {
    if (typeof window === "undefined" || !navigator.mediaDevices?.getUserMedia || typeof MediaRecorder === "undefined") {
      setState("unsupported");
      return;
    }
    try {
      const media = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true } });
      stream.current = media;
      const mime = ["audio/webm;codecs=opus", "audio/webm", "audio/mp4", "audio/ogg"].find((m) => MediaRecorder.isTypeSupported(m));
      // 32 kbps Opus: plenty for speech and keeps a minute well under the upload cap.
      const recorder = new MediaRecorder(media, { ...(mime ? { mimeType: mime } : {}), audioBitsPerSecond: 32000 });
      const chunks: Blob[] = [];
      recorder.ondataavailable = (e) => e.data.size && chunks.push(e.data);
      recorder.onstop = () => {
        cleanup();
        setState("idle");
        const blob = new Blob(chunks, { type: recorder.mimeType || mime || "audio/webm" });
        if (blob.size > 0) done.current(blob);
      };
      rec.current = recorder;

      const audio = new AudioContext();
      ctx.current = audio;
      const analyser = audio.createAnalyser();
      analyser.fftSize = 512;
      audio.createMediaStreamSource(media).connect(analyser);
      const data = new Uint8Array(analyser.fftSize);
      const tick = () => {
        analyser.getByteTimeDomainData(data);
        let sum = 0;
        for (const v of data) sum += ((v - 128) / 128) ** 2;
        setLevel(Math.min(1, Math.sqrt(sum / data.length) * 4));
        raf.current = requestAnimationFrame(tick);
      };
      tick();

      const started = Date.now();
      setElapsed(0);
      timer.current = window.setInterval(() => {
        const s = (Date.now() - started) / 1000;
        setElapsed(s);
        if (s >= maxSeconds) stop();
      }, 200);

      recorder.start(1000);
      setState("recording");
    } catch {
      cleanup();
      setState("denied");
    }
  };

  return { state, elapsed, level, start, stop };
}

export function RecordKey({
  recorder,
  maxSeconds,
  disabled,
  idleLabel = "Start recording",
  quiet = false,
}: {
  recorder: ReturnType<typeof useRecorder>;
  maxSeconds: number;
  disabled?: boolean;
  idleLabel?: string;
  /** Use the soft key at rest, when another button on the stage is the primary action. */
  quiet?: boolean;
}) {
  const recording = recorder.state === "recording";
  const left = Math.max(0, Math.ceil(maxSeconds - recorder.elapsed));
  return (
    <div className="flex flex-col items-center gap-3">
      <button
        type="button"
        disabled={disabled}
        onClick={recording ? recorder.stop : recorder.start}
        aria-pressed={recording}
        className={`${recording || quiet ? "btn-soft" : "btn-primary"} min-w-[210px] disabled:cursor-not-allowed disabled:opacity-60`}
      >
        {recording ? <Square aria-hidden="true" className="h-4 w-4 fill-current" /> : <Mic aria-hidden="true" className="h-4 w-4" />}
        {recording ? `Stop (${left}s left)` : idleLabel}
      </button>
      <div className="flex h-6 items-end gap-[3px]" aria-hidden="true">
        {Array.from({ length: 24 }).map((_, i) => {
          const wave = recording ? recorder.level * (0.45 + 0.55 * Math.abs(Math.sin(i * 1.7 + recorder.elapsed * 6))) : 0;
          return <span key={i} className="w-[3px] rounded-full bg-primary-500/70 transition-[height] duration-75" style={{ height: `${4 + wave * 20}px` }} />;
        })}
      </div>
      {recorder.state === "denied" && (
        <p className="font-display text-[13px] text-ink-soft">Microphone access was blocked. Allow it from the icon in the address bar, then try again.</p>
      )}
      {recorder.state === "unsupported" && <p className="font-display text-[13px] text-ink-soft">This browser cannot record audio. Try Chrome, Edge or Safari.</p>}
    </div>
  );
}

export function formatTimestamp(seconds: number, sep: "," | ".") {
  const ms = Math.max(0, Math.round(seconds * 1000));
  const h = Math.floor(ms / 3600000);
  const m = Math.floor((ms % 3600000) / 60000);
  const s = Math.floor((ms % 60000) / 1000);
  const pad = (n: number, w = 2) => String(n).padStart(w, "0");
  return `${pad(h)}:${pad(m)}:${pad(s)}${sep}${pad(ms % 1000, 3)}`;
}

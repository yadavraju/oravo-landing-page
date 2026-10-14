"use client";

import { useEffect, useRef, useState } from "react";
import { Upload } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import {
  MAX_AUDIO_FILE_BYTES,
  MAX_AUDIO_SECONDS,
  decodeToMono,
  encodeWav,
  formatDuration,
  nextFrame,
  reduceNoise,
  shortenSilences,
  type MonoAudio,
} from "./audio";
import { DownloadButton, ErrorNote, RecordKey, ResultUpsell, Spinner, useRecorder } from "./shared";

type Mode = "silence" | "noise";

type Result = { url: string; blob: Blob; duration: number; note: string };

function useObjectUrl(blob: Blob | null) {
  const [url, setUrl] = useState("");
  useEffect(() => {
    if (!blob) return setUrl("");
    const u = URL.createObjectURL(blob);
    setUrl(u);
    return () => URL.revokeObjectURL(u);
  }, [blob]);
  return url;
}

function Slider({
  label,
  value,
  min,
  max,
  step,
  format,
  onChange,
  hint,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  format: (v: number) => string;
  onChange: (v: number) => void;
  hint?: string;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="flex items-baseline justify-between">
        <span className="eyebrow">{label}</span>
        <span className="font-display text-[13px] font-semibold text-ink">{format(value)}</span>
      </span>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} className="accent-primary-500" />
      {hint && <span className="font-display text-[12px] leading-snug text-ink-faint">{hint}</span>}
    </label>
  );
}

// Silence remover and noise remover: both decode in the tab, process the
// samples locally and hand back a WAV. Nothing is uploaded and nothing costs.
export function AudioCleanupTool({ mode }: { mode: Mode }) {
  const tool = mode === "silence" ? "silence-remover" : "audio-noise-remover";
  const input = useRef<HTMLInputElement>(null);
  const [source, setSource] = useState<{ blob: Blob; name: string } | null>(null);
  const [decoded, setDecoded] = useState<MonoAudio | null>(null);
  const [busy, setBusy] = useState("");
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState("");
  const [result, setResult] = useState<Result | null>(null);

  const [thresholdDb, setThresholdDb] = useState(-42);
  const [minSilence, setMinSilence] = useState(0.6);
  const [keepPause, setKeepPause] = useState(0.25);
  const [strength, setStrength] = useState(0.6);

  const originalUrl = useObjectUrl(source?.blob ?? null);
  const resultUrl = result?.url ?? "";
  useEffect(() => () => (resultUrl ? URL.revokeObjectURL(resultUrl) : undefined), [resultUrl]);

  const load = async (blob: Blob, name: string) => {
    setError("");
    setResult(null);
    setDecoded(null);
    if (blob.size > MAX_AUDIO_FILE_BYTES) {
      setError("That file is over 100 MB. Trim it first, or use the Oravo app.");
      return;
    }
    setSource({ blob, name });
    setBusy("Reading audio…");
    try {
      const audio = await decodeToMono(blob);
      if (audio.samples.length / audio.sampleRate > MAX_AUDIO_SECONDS) {
        setError(`That recording is ${formatDuration(audio.samples.length / audio.sampleRate)} long. The free tool takes up to 10 minutes.`);
        setSource(null);
      } else {
        setDecoded(audio);
      }
    } catch {
      setError("This browser could not read that file. Try an MP3, WAV or M4A.");
      setSource(null);
    } finally {
      setBusy("");
    }
  };

  const recorder = useRecorder(120, (blob) => load(blob, "recording"));

  const run = async () => {
    if (!decoded) return;
    setError("");
    setProgress(0);
    setBusy(mode === "silence" ? "Finding the pauses…" : "Learning the noise…");
    await nextFrame();
    try {
      const before = decoded.samples.length / decoded.sampleRate;
      let audio: MonoAudio;
      let note: string;
      if (mode === "silence") {
        const out = shortenSilences(decoded, { thresholdDb, minSilence, keepPause });
        audio = out.audio;
        note = out.cuts
          ? `Shortened ${out.cuts} pause${out.cuts === 1 ? "" : "s"} and saved ${out.removedSeconds.toFixed(1)}s (${Math.round((out.removedSeconds / before) * 100)}%).`
          : "No pauses were long or quiet enough to cut. Raise the threshold or lower the minimum pause.";
      } else {
        audio = await reduceNoise(decoded, strength, setProgress);
        note = "Steady background noise reduced. Compare both versions before you save.";
      }
      const blob = encodeWav(audio);
      setResult({ blob, url: URL.createObjectURL(blob), duration: audio.samples.length / audio.sampleRate, note });
      trackEvent("tool_run", { tool });
    } catch {
      setError("Something went wrong while processing. Try a shorter recording.");
    } finally {
      setBusy("");
    }
  };

  const baseName = (source?.name ?? "audio").replace(/\.[^.]+$/, "");
  const duration = decoded ? decoded.samples.length / decoded.sampleRate : 0;

  return (
    <div className="flex flex-col gap-5">
      <div className="grid gap-5 lg:grid-cols-[1fr_17rem]">
        <div className="grid gap-4 sm:grid-cols-[1fr_auto]">
          <button
            type="button"
            onClick={() => input.current?.click()}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              e.preventDefault();
              const f = e.dataTransfer.files[0];
              if (f) load(f, f.name);
            }}
            className="flex min-h-[150px] flex-col items-center justify-center gap-2 rounded-xl border-[1.5px] border-dashed border-line bg-canvas px-5 py-6 text-center hover:bg-canvas/60"
          >
            <Upload aria-hidden="true" className="h-6 w-6 text-ink-faint" />
            <span className="font-display text-[15px] font-semibold text-ink">{source ? source.name : "Drop an audio file, or browse"}</span>
            <span className="font-display text-[12.5px] text-ink-faint">
              {decoded ? `${formatDuration(duration)} · click to change` : "MP3, WAV, M4A, WebM, OGG · up to 10 minutes"}
            </span>
          </button>
          <input
            ref={input}
            type="file"
            accept="audio/*,video/*"
            className="hidden"
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) load(f, f.name);
              e.target.value = "";
            }}
          />
          <div className="flex flex-col items-center justify-center gap-1 rounded-xl bg-canvas px-4 py-4">
            <RecordKey recorder={recorder} maxSeconds={120} disabled={Boolean(busy)} idleLabel="Or record" quiet />
          </div>
        </div>

        <div className="flex flex-col gap-4 rounded-xl bg-canvas p-5">
          {mode === "silence" ? (
            <>
              <Slider
                label="Silence threshold"
                value={thresholdDb}
                min={-60}
                max={-20}
                step={1}
                format={(v) => `${v} dB`}
                onChange={setThresholdDb}
                hint="Raise it if background noise keeps pauses from being found."
              />
              <Slider label="Shorten pauses longer than" value={minSilence} min={0.3} max={2} step={0.1} format={(v) => `${v.toFixed(1)}s`} onChange={setMinSilence} />
              <Slider label="Leave each pause at" value={keepPause} min={0} max={0.8} step={0.05} format={(v) => `${v.toFixed(2)}s`} onChange={setKeepPause} />
            </>
          ) : (
            <Slider
              label="Strength"
              value={strength}
              min={0.1}
              max={1}
              step={0.05}
              format={(v) => `${Math.round(v * 100)}%`}
              onChange={setStrength}
              hint="Higher removes more noise but can make a voice sound thin. Start around 60%."
            />
          )}
          <button type="button" onClick={run} disabled={!decoded || Boolean(busy)} className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60">
            {busy ? (
              <Spinner label={progress > 0 && progress < 1 ? `${busy} ${Math.round(progress * 100)}%` : busy} />
            ) : mode === "silence" ? (
              "Remove silences"
            ) : (
              "Reduce noise"
            )}
          </button>
        </div>
      </div>

      {error && <ErrorNote>{error}</ErrorNote>}

      {source && originalUrl && (
        <div className="surface-solid grid overflow-hidden !rounded-2xl md:grid-cols-2 md:divide-x md:divide-line">
          <div className="flex flex-col gap-2 p-5">
            <p className="eyebrow">Original{decoded ? ` · ${formatDuration(duration)}` : ""}</p>
            <audio src={originalUrl} controls className="w-full" />
          </div>
          <div className="flex flex-col gap-2 border-t border-line bg-cloud/30 p-5 md:border-t-0">
            <p className="eyebrow">Cleaned{result ? ` · ${formatDuration(result.duration)}` : ""}</p>
            {result ? (
              <>
                <audio src={result.url} controls className="w-full" />
                <p className="font-display text-[13px] text-ink-soft">{result.note}</p>
                <div>
                  <DownloadButton
                    label="Save WAV"
                    onClick={() => {
                      const a = document.createElement("a");
                      a.href = result.url;
                      a.download = `${baseName}-${mode === "silence" ? "tightened" : "cleaned"}.wav`;
                      a.click();
                    }}
                  />
                </div>
              </>
            ) : (
              <p className="py-3 font-display text-[13px] text-ink-faint">Adjust the settings and press {mode === "silence" ? "Remove silences" : "Reduce noise"}.</p>
            )}
          </div>
        </div>
      )}

      {result && (
        <ResultUpsell
          tool={tool}
          lead="Done, right in your browser."
          line={
            mode === "silence"
              ? "In Oravo, pauses never reach the page: you speak, and clean, finished text lands in whatever app you are using."
              : "Oravo is tuned for real rooms, so dictation stays accurate with fans, traffic and cafés in the background."
          }
        />
      )}
    </div>
  );
}

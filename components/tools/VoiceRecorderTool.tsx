"use client";

import { useEffect, useRef, useState } from "react";
import { Mic, Pause, Play, Square, Trash2 } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { decodeToMono, encodeWav, formatDuration } from "./audio";
import { DownloadButton, ResultUpsell, audioFileName } from "./shared";

const MAX_SECONDS = 30 * 60;

type Take = { id: number; blob: Blob; url: string; seconds: number; at: Date };

// An online voice recorder: record, pause, resume, keep several takes, and
// download each one. Nothing leaves the tab.
export function VoiceRecorderTool() {
  const [state, setState] = useState<"idle" | "recording" | "paused">("idle");
  const [elapsed, setElapsed] = useState(0);
  const [level, setLevel] = useState(0);
  const [takes, setTakes] = useState<Take[]>([]);
  const [error, setError] = useState("");
  const [converting, setConverting] = useState<number | null>(null);
  const rec = useRef<MediaRecorder | null>(null);
  const stream = useRef<MediaStream | null>(null);
  const ctx = useRef<AudioContext | null>(null);
  const raf = useRef<number>();
  const clock = useRef({ total: 0, since: 0 });
  const timer = useRef<number>();
  const takesRef = useRef<Take[]>([]);
  takesRef.current = takes;

  const release = () => {
    window.clearInterval(timer.current);
    if (raf.current) cancelAnimationFrame(raf.current);
    stream.current?.getTracks().forEach((t) => t.stop());
    ctx.current?.close().catch(() => {});
    stream.current = null;
    ctx.current = null;
    setLevel(0);
  };

  useEffect(
    () => () => {
      release();
      takesRef.current.forEach((t) => URL.revokeObjectURL(t.url));
    },
    [],
  );

  const seconds = () => clock.current.total + (clock.current.since ? (Date.now() - clock.current.since) / 1000 : 0);

  const start = async () => {
    setError("");
    if (!navigator.mediaDevices?.getUserMedia || typeof MediaRecorder === "undefined") {
      setError("This browser cannot record audio. Try Chrome, Edge, Firefox or Safari.");
      return;
    }
    try {
      const media = await navigator.mediaDevices.getUserMedia({ audio: true });
      stream.current = media;
      const mime = ["audio/webm;codecs=opus", "audio/webm", "audio/mp4", "audio/ogg"].find((m) => MediaRecorder.isTypeSupported(m));
      const recorder = new MediaRecorder(media, mime ? { mimeType: mime } : undefined);
      const chunks: Blob[] = [];
      recorder.ondataavailable = (e) => e.data.size && chunks.push(e.data);
      recorder.onstop = () => {
        const total = seconds();
        clock.current = { total: 0, since: 0 };
        release();
        setState("idle");
        setElapsed(0);
        const blob = new Blob(chunks, { type: recorder.mimeType || mime || "audio/webm" });
        if (blob.size) {
          setTakes((all) => [{ id: Date.now(), blob, url: URL.createObjectURL(blob), seconds: total, at: new Date() }, ...all]);
          trackEvent("tool_run", { tool: "voice-recorder", seconds: Math.round(total) });
        }
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

      clock.current = { total: 0, since: Date.now() };
      timer.current = window.setInterval(() => {
        const s = seconds();
        setElapsed(s);
        if (s >= MAX_SECONDS) recorder.stop();
      }, 200);
      recorder.start(1000);
      setState("recording");
    } catch {
      release();
      setError("Microphone access was blocked. Allow it from the icon in the address bar, then try again.");
    }
  };

  const pause = () => {
    rec.current?.pause();
    clock.current = { total: seconds(), since: 0 };
    setState("paused");
  };

  const resume = () => {
    rec.current?.resume();
    clock.current = { ...clock.current, since: Date.now() };
    setState("recording");
  };

  const saveWav = async (take: Take) => {
    setConverting(take.id);
    try {
      const wav = encodeWav(await decodeToMono(take.blob));
      const a = document.createElement("a");
      a.href = URL.createObjectURL(wav);
      a.download = `recording-${take.at.toISOString().slice(0, 19).replace(/[:T]/g, "-")}.wav`;
      a.click();
      setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    } catch {
      setError("This browser could not convert the recording to WAV. Download the original instead.");
    } finally {
      setConverting(null);
    }
  };

  const recording = state !== "idle";

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col items-center gap-5 rounded-xl bg-canvas px-5 py-8">
        <p className="font-serif text-[52px] leading-none text-ink tabular-nums" aria-live="off">
          {formatDuration(elapsed)}
        </p>
        <div className="flex h-10 items-end gap-[3px]" aria-hidden="true">
          {Array.from({ length: 40 }).map((_, i) => {
            const wave = state === "recording" ? level * (0.4 + 0.6 * Math.abs(Math.sin(i * 1.3 + elapsed * 5))) : 0;
            return <span key={i} className="w-[3px] rounded-full bg-primary-500/70 transition-[height] duration-75" style={{ height: `${4 + wave * 34}px` }} />;
          })}
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {!recording ? (
            <button type="button" onClick={start} className="btn-primary min-w-[200px]">
              <Mic aria-hidden="true" className="h-4 w-4" /> Start recording
            </button>
          ) : (
            <>
              {state === "recording" ? (
                <button type="button" onClick={pause} className="btn-soft">
                  <Pause aria-hidden="true" className="h-4 w-4" /> Pause
                </button>
              ) : (
                <button type="button" onClick={resume} className="btn-soft">
                  <Play aria-hidden="true" className="h-4 w-4" /> Resume
                </button>
              )}
              <button type="button" onClick={() => rec.current?.stop()} className="btn-primary">
                <Square aria-hidden="true" className="h-4 w-4 fill-current" /> Stop and save
              </button>
            </>
          )}
        </div>
        <p className="font-display text-[12.5px] text-ink-faint">Up to 30 minutes per take. Recordings stay in this tab until you download them.</p>
        {error && <p className="font-display text-[13.5px] text-brand">{error}</p>}
      </div>

      {takes.length > 0 && (
        <>
          <ul className="surface-solid divide-y divide-line overflow-hidden !rounded-2xl">
            {takes.map((take, i) => (
              <li key={take.id} className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:gap-4 sm:px-5">
                <div className="min-w-[8rem]">
                  <p className="font-display text-[14px] font-semibold text-ink">Take {takes.length - i}</p>
                  <p className="font-display text-[12.5px] text-ink-faint">
                    {formatDuration(take.seconds)} · {take.at.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </p>
                </div>
                <audio src={take.url} controls className="w-full flex-1" />
                <div className="flex flex-wrap gap-2">
                  <DownloadButton
                    label={audioFileName(take.blob).split(".")[1].toUpperCase()}
                    onClick={() => {
                      const a = document.createElement("a");
                      a.href = take.url;
                      a.download = `recording-${take.at.toISOString().slice(0, 19).replace(/[:T]/g, "-")}.${audioFileName(take.blob).split(".")[1]}`;
                      a.click();
                    }}
                  />
                  <DownloadButton label={converting === take.id ? "Converting…" : "WAV"} onClick={() => saveWav(take)} />
                  <button
                    type="button"
                    aria-label={`Delete take ${takes.length - i}`}
                    onClick={() => {
                      URL.revokeObjectURL(take.url);
                      setTakes((all) => all.filter((t) => t.id !== take.id));
                    }}
                    className="chip h-9 px-2.5 text-ink-soft"
                  >
                    <Trash2 aria-hidden="true" className="h-3.5 w-3.5" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <ResultUpsell
            tool="voice-recorder"
            lead="Done, right in your browser."
            line="Want the words, not just the audio? Oravo turns what you say into finished text in any app, or transcribes recordings in Studio."
          />
        </>
      )}
    </div>
  );
}

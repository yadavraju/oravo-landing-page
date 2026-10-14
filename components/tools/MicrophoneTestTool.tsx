"use client";

import { useEffect, useRef, useState } from "react";
import { Mic, Play } from "lucide-react";
import { FIELD } from "./shared";

const SAMPLE_SECONDS = 5;

function rating(peak: number) {
  if (peak < 0.04) return { label: "No signal", note: "Nothing is reaching the browser. Check the device and that it is not muted." };
  if (peak < 0.15) return { label: "Quiet", note: "Move closer to the mic or raise its input level in your system settings." };
  if (peak < 0.85) return { label: "Good", note: "A clean, healthy level for calls and dictation." };
  return { label: "Too loud", note: "Your voice is clipping. Lower the input level or move back a little." };
}

export function MicrophoneTestTool() {
  const [active, setActive] = useState(false);
  const [error, setError] = useState("");
  const [devices, setDevices] = useState<MediaDeviceInfo[]>([]);
  const [deviceId, setDeviceId] = useState("");
  const [label, setLabel] = useState("");
  const [level, setLevel] = useState(0);
  const [peak, setPeak] = useState(0);
  const [sampleUrl, setSampleUrl] = useState("");
  const [sampling, setSampling] = useState(false);
  const canvas = useRef<HTMLCanvasElement>(null);
  const stream = useRef<MediaStream | null>(null);
  const ctx = useRef<AudioContext | null>(null);
  const raf = useRef<number>();
  const peakRef = useRef(0);

  const stopAll = () => {
    if (raf.current) cancelAnimationFrame(raf.current);
    stream.current?.getTracks().forEach((t) => t.stop());
    ctx.current?.close().catch(() => {});
    stream.current = null;
    ctx.current = null;
  };

  useEffect(() => stopAll, []);
  useEffect(() => () => (sampleUrl ? URL.revokeObjectURL(sampleUrl) : undefined), [sampleUrl]);

  const start = async (id?: string) => {
    stopAll();
    setError("");
    try {
      const media = await navigator.mediaDevices.getUserMedia({ audio: id ? { deviceId: { exact: id } } : true });
      stream.current = media;
      const track = media.getAudioTracks()[0];
      setLabel(track?.label || "Default microphone");
      setDeviceId(track?.getSettings().deviceId || id || "");
      setDevices((await navigator.mediaDevices.enumerateDevices()).filter((d) => d.kind === "audioinput"));

      const audio = new AudioContext();
      ctx.current = audio;
      const analyser = audio.createAnalyser();
      analyser.fftSize = 2048;
      audio.createMediaStreamSource(media).connect(analyser);
      const data = new Uint8Array(analyser.fftSize);
      peakRef.current = 0;
      setPeak(0);

      const draw = () => {
        analyser.getByteTimeDomainData(data);
        let sum = 0;
        let max = 0;
        for (const v of data) {
          const x = (v - 128) / 128;
          sum += x * x;
          max = Math.max(max, Math.abs(x));
        }
        setLevel(Math.min(1, Math.sqrt(sum / data.length) * 4));
        if (max > peakRef.current) {
          peakRef.current = max;
          setPeak(max);
        }
        const c = canvas.current;
        const g = c?.getContext("2d");
        if (c && g) {
          const w = (c.width = c.clientWidth * devicePixelRatio);
          const h = (c.height = c.clientHeight * devicePixelRatio);
          g.clearRect(0, 0, w, h);
          g.lineWidth = 2 * devicePixelRatio;
          g.strokeStyle = "#0f6a9e";
          g.beginPath();
          for (let i = 0; i < data.length; i++) {
            const x = (i / (data.length - 1)) * w;
            const y = (data[i] / 255) * h;
            if (i) g.lineTo(x, y);
            else g.moveTo(x, y);
          }
          g.stroke();
        }
        raf.current = requestAnimationFrame(draw);
      };
      draw();
      setActive(true);
    } catch {
      setActive(false);
      setError("Microphone access was blocked or no microphone was found. Allow it from the icon in the address bar and try again.");
    }
  };

  const recordSample = () => {
    if (!stream.current || typeof MediaRecorder === "undefined") return;
    const rec = new MediaRecorder(stream.current);
    const chunks: Blob[] = [];
    rec.ondataavailable = (e) => chunks.push(e.data);
    rec.onstop = () => {
      setSampling(false);
      setSampleUrl(URL.createObjectURL(new Blob(chunks, { type: rec.mimeType })));
    };
    setSampling(true);
    rec.start();
    setTimeout(() => rec.state === "recording" && rec.stop(), SAMPLE_SECONDS * 1000);
  };

  const r = rating(peak);

  if (!active) {
    return (
      <div className="flex min-h-[260px] flex-col items-center justify-center gap-4 text-center">
        <button type="button" onClick={() => start()} className="btn-primary">
          <Mic aria-hidden="true" className="h-4 w-4" /> Test my microphone
        </button>
        <p className="max-w-sm font-display text-[13px] text-ink-faint">Your browser will ask for microphone access. Nothing is recorded or uploaded unless you play back a sample, which stays in this tab.</p>
        {error && <p className="max-w-md font-display text-[13.5px] text-brand">{error}</p>}
      </div>
    );
  }

  return (
    <div className="grid gap-5 lg:grid-cols-[1fr_17rem]">
      <div className="flex flex-col gap-3">
        <canvas ref={canvas} className="h-40 w-full rounded-xl bg-canvas" aria-label="Live microphone waveform" role="img" />
        <div className="h-2.5 overflow-hidden rounded-full bg-canvas" aria-hidden="true">
          <div className="h-full rounded-full bg-primary-500 transition-[width] duration-75" style={{ width: `${level * 100}%` }} />
        </div>
        <p className="font-display text-[14px] text-ink">
          <span className="font-semibold">{r.label}.</span> <span className="text-ink-soft">{r.note}</span>
        </p>
      </div>

      <div className="flex flex-col gap-4 rounded-xl bg-canvas p-5">
        <label className="flex flex-col gap-1.5">
          <span className="eyebrow">Device</span>
          <select value={deviceId} onChange={(e) => start(e.target.value)} className={`${FIELD} h-11`}>
            {devices.map((d, i) => (
              <option key={d.deviceId || i} value={d.deviceId}>
                {d.label || `Microphone ${i + 1}`}
              </option>
            ))}
          </select>
        </label>
        <p className="font-display text-[12.5px] text-ink-faint">Using: {label}</p>
        <button type="button" onClick={recordSample} disabled={sampling} className="btn-soft w-full disabled:opacity-60">
          {sampling ? "Recording 5 seconds…" : "Record a 5-second sample"}
        </button>
        {sampleUrl && (
          <div className="flex flex-col gap-1.5">
            <span className="eyebrow flex items-center gap-1.5">
              <Play aria-hidden="true" className="h-3 w-3" /> Playback
            </span>
            <audio src={sampleUrl} controls className="w-full" />
          </div>
        )}
      </div>
    </div>
  );
}

"use client";

import { useRef, useState } from "react";
import { Upload } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import {
  CopyButton,
  DownloadButton,
  ErrorNote,
  LanguageSelect,
  MAX_UPLOAD_BYTES,
  ResultUpsell,
  Spinner,
  ToolApiError,
  download,
  formatTimestamp,
  postTool,
} from "./shared";

type Cue = { start: number; end: number; text: string };

function toSrt(cues: Cue[]) {
  return cues.map((c, i) => `${i + 1}\n${formatTimestamp(c.start, ",")} --> ${formatTimestamp(c.end, ",")}\n${c.text}\n`).join("\n");
}

function toVtt(cues: Cue[]) {
  return `WEBVTT\n\n${cues.map((c) => `${formatTimestamp(c.start, ".")} --> ${formatTimestamp(c.end, ".")}\n${c.text}\n`).join("\n")}`;
}

const baseName = (name: string) => name.replace(/\.[^.]+$/, "") || "transcript";

// Audio to text (mode "text") and the subtitle generator (mode "subtitles"):
// the same upload, opened on the transcript or on the editable cues.
export function FileTranscriberTool({ mode }: { mode: "text" | "subtitles" }) {
  const input = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [language, setLanguage] = useState("auto");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [text, setText] = useState("");
  const [cues, setCues] = useState<Cue[]>([]);
  const [view, setView] = useState<"text" | "subtitles">(mode);
  const [dragging, setDragging] = useState(false);

  const pick = (f: File | undefined) => {
    setError("");
    if (!f) return;
    if (!/^(audio|video)\//.test(f.type) && !/\.(mp3|m4a|mp4|wav|webm|ogg|oga|flac|mpeg|mpga|mov)$/i.test(f.name)) {
      setError("Choose an audio or video file (MP3, M4A, MP4, WAV, WebM, OGG or FLAC).");
      return;
    }
    if (f.size > MAX_UPLOAD_BYTES) {
      setError(`That file is ${(f.size / 1024 / 1024).toFixed(1)} MB. The free tool takes up to 4 MB; the Oravo app has no limit.`);
      return;
    }
    setFile(f);
  };

  const run = async () => {
    if (!file) return;
    setBusy(true);
    setError("");
    const form = new FormData();
    form.append("file", file, file.name);
    form.append("language", language);
    try {
      const result = await postTool<{ text: string; segments: Cue[] }>("/api/tools/transcribe", form);
      setText(result.text);
      setCues(result.segments.length ? result.segments : [{ start: 0, end: 5, text: result.text }]);
      trackEvent("tool_run", { tool: mode === "text" ? "audio-to-text" : "subtitle-generator", language });
    } catch (e) {
      setError(e instanceof ToolApiError ? e.message : "Something went wrong. Try again.");
    } finally {
      setBusy(false);
    }
  };

  const name = file ? baseName(file.name) : "transcript";
  const done = Boolean(text);

  return (
    <div className="flex flex-col gap-5">
      <div className="grid gap-5 lg:grid-cols-[1fr_17rem]">
        <button
          type="button"
          onClick={() => input.current?.click()}
          onDragOver={(e) => {
            e.preventDefault();
            setDragging(true);
          }}
          onDragLeave={() => setDragging(false)}
          onDrop={(e) => {
            e.preventDefault();
            setDragging(false);
            pick(e.dataTransfer.files[0]);
          }}
          className={`flex min-h-[170px] flex-col items-center justify-center gap-2 rounded-xl border-[1.5px] border-dashed px-5 py-8 text-center transition-colors ${dragging ? "border-primary-500 bg-cloud/60" : "border-line bg-canvas hover:bg-canvas/60"}`}
        >
          <Upload aria-hidden="true" className="h-6 w-6 text-ink-faint" />
          <span className="font-display text-[15px] font-semibold text-ink">{file ? file.name : "Drop an audio or video file, or browse"}</span>
          <span className="font-display text-[12.5px] text-ink-faint">
            {file ? `${(file.size / 1024 / 1024).toFixed(2)} MB · click to change` : "MP3, M4A, MP4, WAV, WebM, OGG, FLAC · up to 4 MB"}
          </span>
        </button>
        <input ref={input} type="file" accept="audio/*,video/*" className="hidden" onChange={(e) => pick(e.target.files?.[0])} />

        <div className="flex flex-col justify-between gap-4 rounded-xl bg-canvas p-5">
          <LanguageSelect value={language} onChange={setLanguage} disabled={busy} />
          <button type="button" onClick={run} disabled={!file || busy} className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60">
            {busy ? <Spinner label="Transcribing…" /> : mode === "text" ? "Transcribe file" : "Generate subtitles"}
          </button>
        </div>
      </div>
      {error && <ErrorNote>{error}</ErrorNote>}

      {done && (
        <div>
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <div role="tablist" className="mr-auto inline-flex rounded-lg bg-canvas p-1">
              {(["text", "subtitles"] as const).map((v) => (
                <button
                  key={v}
                  role="tab"
                  aria-selected={view === v}
                  type="button"
                  onClick={() => setView(v)}
                  className={`h-8 rounded-md px-3 font-display text-[13px] font-semibold ${view === v ? "key-on" : "text-ink-soft"}`}
                >
                  {v === "text" ? "Transcript" : `Cues (${cues.length})`}
                </button>
              ))}
            </div>
            {view === "text" ? (
              <>
                <CopyButton text={text} />
                <DownloadButton label="TXT" onClick={() => download(`${name}.txt`, text)} />
              </>
            ) : (
              <>
                <DownloadButton label="SRT" onClick={() => download(`${name}.srt`, toSrt(cues), "application/x-subrip")} />
                <DownloadButton label="VTT" onClick={() => download(`${name}.vtt`, toVtt(cues), "text/vtt")} />
              </>
            )}
          </div>

          {view === "text" ? (
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              aria-label="Transcript"
              className="paper-ruled min-h-[240px] w-full resize-y rounded-xl border border-line p-4 text-[15px] leading-[28px] text-ink outline-none focus:border-primary-500/50"
            />
          ) : (
            <ol className="surface-solid max-h-[440px] divide-y divide-line overflow-y-auto">
              {cues.map((cue, i) => (
                <li key={i} className="flex flex-col gap-2 px-4 py-3 sm:flex-row sm:items-start sm:gap-4">
                  <span className="shrink-0 pt-2 font-mono text-[12px] text-ink-faint">
                    {formatTimestamp(cue.start, ",").slice(3, 11)} → {formatTimestamp(cue.end, ",").slice(3, 11)}
                  </span>
                  <textarea
                    value={cue.text}
                    rows={Math.max(1, Math.ceil(cue.text.length / 70))}
                    aria-label={`Cue ${i + 1}`}
                    onChange={(e) => setCues((all) => all.map((c, j) => (j === i ? { ...c, text: e.target.value } : c)))}
                    className="w-full resize-none rounded-md bg-transparent px-2 py-1.5 text-[14.5px] text-ink outline-none hover:bg-canvas focus:bg-canvas"
                  />
                </li>
              ))}
            </ol>
          )}
          <ResultUpsell
            tool={mode === "text" ? "audio-to-text" : "subtitle-generator"}
            line="Oravo Studio transcribes recordings of any length on your own computer, offline, and exports text or SRT."
          />
        </div>
      )}
    </div>
  );
}

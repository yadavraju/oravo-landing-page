"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Lock, Upload } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import type { MeetingSummary } from "@/lib/tools/prompts";
import {
  CopyButton,
  DownloadButton,
  ErrorNote,
  FIELD,
  MAX_UPLOAD_BYTES,
  RecordKey,
  Spinner,
  ToolApiError,
  audioFileName,
  download,
  postTool,
  useRecorder,
} from "./shared";

const MAX_RECORD_SECONDS = 300;
const MAX_CHARS = 24000;
const STORAGE_KEY = "oravo-meeting-trial";

type Source = "paste" | "audio";

function asMarkdown(s: MeetingSummary) {
  const list = (items: string[]) => items.map((i) => `- ${i}`).join("\n");
  const actions = s.actionItems
    .map((a) => `- [ ] ${a.task}${a.owner ? ` (${a.owner})` : ""}${a.due ? `, due ${a.due}` : ""}`)
    .join("\n");
  return [
    `# ${s.title}`,
    s.summary,
    s.keyPoints.length ? `## Key points\n${list(s.keyPoints)}` : "",
    s.decisions.length ? `## Decisions\n${list(s.decisions)}` : "",
    s.actionItems.length ? `## Action items\n${actions}` : "",
  ]
    .filter(Boolean)
    .join("\n\n");
}

function readSaved(): MeetingSummary | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw).summary ?? null) : null;
  } catch {
    return null;
  }
}

export function MeetingSummarizerTool() {
  const [status, setStatus] = useState<"checking" | "available" | "used">("checking");
  const [source, setSource] = useState<Source>("paste");
  const [transcript, setTranscript] = useState("");
  const [file, setFile] = useState<Blob | null>(null);
  const [fileLabel, setFileLabel] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [summary, setSummary] = useState<MeetingSummary | null>(null);
  const [truncated, setTruncated] = useState(false);
  const input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const saved = readSaved();
    if (saved) {
      setSummary(saved);
      setStatus("used");
      return;
    }
    fetch("/api/tools/meeting-summary", { cache: "no-store" })
      .then((r) => r.json())
      .then((d) => setStatus(d.used ? "used" : "available"))
      .catch(() => setStatus("available"));
  }, []);

  const recorder = useRecorder(MAX_RECORD_SECONDS, (blob) => {
    setFile(blob);
    setFileLabel(`Recording, ${Math.round(blob.size / 1024)} KB`);
  });

  const pickFile = (f: File | undefined) => {
    setError("");
    if (!f) return;
    if (f.size > MAX_UPLOAD_BYTES) {
      setError(`That file is ${(f.size / 1024 / 1024).toFixed(1)} MB. The free try takes up to 4 MB.`);
      return;
    }
    setFile(f);
    setFileLabel(f.name);
  };

  const ready = source === "paste" ? transcript.trim().length >= 200 && transcript.length <= MAX_CHARS : Boolean(file);

  const run = async () => {
    setBusy(true);
    setError("");
    const form = new FormData();
    if (source === "paste") form.append("transcript", transcript.trim());
    else if (file) form.append("file", file, file instanceof File ? file.name : audioFileName(file));
    try {
      const result = await postTool<{ summary: MeetingSummary; truncated: boolean }>("/api/tools/meeting-summary", form);
      setSummary(result.summary);
      setTruncated(result.truncated);
      setStatus("used");
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({ summary: result.summary, at: Date.now() }));
      } catch {
        /* private mode: the cookie still marks the try */
      }
      trackEvent("tool_run", { tool: "meeting-summarizer", source });
    } catch (e) {
      if (e instanceof ToolApiError && e.body.trialUsed) setStatus("used");
      setError(e instanceof ToolApiError ? e.message : "Something went wrong. Try again.");
    } finally {
      setBusy(false);
    }
  };

  if (status === "checking") {
    return (
      <div className="flex min-h-[240px] items-center justify-center font-display text-[14px] text-ink-soft">
        <Spinner label="Loading…" />
      </div>
    );
  }

  if (summary) return <SummaryView summary={summary} truncated={truncated} />;

  if (status === "used") return <TrialUsed />;

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-wrap items-center gap-3">
        <div role="tablist" className="inline-flex rounded-lg bg-canvas p-1">
          {(
            [
              ["paste", "Paste transcript"],
              ["audio", "Record or upload"],
            ] as const
          ).map(([id, label]) => (
            <button
              key={id}
              role="tab"
              type="button"
              aria-selected={source === id}
              onClick={() => setSource(id)}
              className={`h-9 rounded-md px-3.5 font-display text-[13px] font-semibold ${source === id ? "key-on" : "text-ink-soft"}`}
            >
              {label}
            </button>
          ))}
        </div>
        <span className="chip h-8 px-3 font-display text-[12.5px] font-semibold text-brand">1 free summary</span>
      </div>

      {source === "paste" ? (
        <div>
          <textarea
            value={transcript}
            onChange={(e) => setTranscript(e.target.value)}
            aria-label="Meeting transcript"
            placeholder="Paste the transcript from Zoom, Google Meet, Teams or any notetaker. At least a few lines."
            className={`${FIELD} min-h-[260px] resize-y py-3 leading-relaxed`}
          />
          <p className={`mt-1.5 text-right font-display text-[12px] ${transcript.length > MAX_CHARS ? "text-brand" : "text-ink-faint"}`}>
            {transcript.length.toLocaleString()} / {MAX_CHARS.toLocaleString()}
          </p>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex flex-col items-center justify-center gap-2 rounded-xl bg-canvas p-5">
            <RecordKey recorder={recorder} maxSeconds={MAX_RECORD_SECONDS} disabled={busy} idleLabel="Record the meeting" />
            <p className="text-center font-display text-[12.5px] text-ink-faint">Up to 5 minutes, in this tab.</p>
          </div>
          <button
            type="button"
            onClick={() => input.current?.click()}
            className="flex flex-col items-center justify-center gap-2 rounded-xl border-[1.5px] border-dashed border-line bg-canvas px-5 py-8 text-center hover:bg-canvas/60"
          >
            <Upload aria-hidden="true" className="h-6 w-6 text-ink-faint" />
            <span className="font-display text-[14.5px] font-semibold text-ink">Upload a recording</span>
            <span className="font-display text-[12.5px] text-ink-faint">MP3, M4A, WAV, WebM or MP4 · up to 4 MB</span>
          </button>
          <input ref={input} type="file" accept="audio/*,video/*" className="hidden" onChange={(e) => pickFile(e.target.files?.[0])} />
          {fileLabel && (
            <p className="flex items-center gap-2 font-display text-[13.5px] text-ink sm:col-span-2">
              <Check aria-hidden="true" className="h-4 w-4 text-primary-500" /> {fileLabel}
            </p>
          )}
        </div>
      )}

      {error && <ErrorNote>{error}</ErrorNote>}

      <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-display text-[12.5px] text-ink-faint">You get one free summary. It is not saved on our servers.</p>
        <button type="button" onClick={run} disabled={!ready || busy || recorder.state === "recording"} className="btn-primary disabled:cursor-not-allowed disabled:opacity-60">
          {busy ? <Spinner label={source === "audio" ? "Transcribing and summarising…" : "Summarising…"} /> : "Summarise my meeting"}
        </button>
      </div>
    </div>
  );
}

function SummaryView({ summary, truncated }: { summary: MeetingSummary; truncated: boolean }) {
  const md = asMarkdown(summary);
  return (
    <div className="flex flex-col gap-5">
      <article className="paper-ruled rounded-xl border border-line p-5 sm:p-7">
        <h2 className="display-3 text-ink">{summary.title}</h2>
        {summary.summary && <p className="mt-3 text-[15px] leading-[28px] text-ink">{summary.summary}</p>}
        {summary.keyPoints.length > 0 && <Section title="Key points" items={summary.keyPoints} />}
        {summary.decisions.length > 0 && <Section title="Decisions" items={summary.decisions} />}
        {summary.actionItems.length > 0 && (
          <div className="mt-5">
            <p className="eyebrow">Action items</p>
            <ul className="mt-2 space-y-1.5">
              {summary.actionItems.map((a, i) => (
                <li key={i} className="flex gap-2.5 text-[15px] leading-relaxed text-ink">
                  <span aria-hidden="true" className="mt-[5px] h-3.5 w-3.5 shrink-0 rounded-[4px] border-[1.5px] border-ink-faint" />
                  <span>
                    {a.task}
                    {(a.owner || a.due) && (
                      <span className="text-ink-soft">
                        {" "}
                        · {[a.owner, a.due && `due ${a.due}`].filter(Boolean).join(", ")}
                      </span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
        {truncated && <p className="mt-5 font-display text-[12.5px] text-ink-faint">The free try read the first 24,000 characters of your transcript.</p>}
      </article>
      <div className="flex flex-wrap gap-2">
        <CopyButton text={md} label="Copy as Markdown" />
        <DownloadButton label="Save .md" onClick={() => download("meeting-summary.md", md, "text/markdown")} />
      </div>
      <TrialUsed afterResult />
    </div>
  );
}

function Section({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="mt-5">
      <p className="eyebrow">{title}</p>
      <ul className="mt-2 list-disc space-y-1 pl-5 text-[15px] leading-relaxed text-ink marker:text-ink-faint">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function TrialUsed({ afterResult = false }: { afterResult?: boolean }) {
  return (
    <div className="flex flex-col items-start gap-4 rounded-xl bg-blush p-5 shadow-[inset_0_0_0_1px_var(--o-line)] sm:flex-row sm:items-center sm:p-6">
      <Lock aria-hidden="true" className="h-5 w-5 shrink-0 text-brand" />
      <div className="flex-1">
        <p className="font-display text-[15px] font-semibold text-ink">
          {afterResult ? "That was your free summary, made with the lite model." : "You have used your free meeting summary."}
        </p>
        <p className="mt-1 font-display text-[13.5px] leading-snug text-ink-soft">
          Oravo Notetaker summarises every meeting with our best models: it joins Zoom, Meet and Teams, names who said what, and keeps notes you can search.
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        <a
          href="/download"
          onClick={() => trackEvent("primary_cta_click", { cta: "tools_meeting_trial", destination: "download", variant: "meeting-summarizer" })}
          className="btn-primary !h-11 !px-5 !text-[14px]"
        >
          Download Oravo
        </a>
        <a href="/notetaker" className="btn-neutral !h-11 !px-4 !text-[14px]">
          See Notetaker
        </a>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics";
import {
  CopyButton,
  DownloadButton,
  ErrorNote,
  LanguageSelect,
  RecordKey,
  ResultUpsell,
  Spinner,
  ToolApiError,
  audioFileName,
  download,
  postTool,
  useRecorder,
} from "./shared";

const MAX_SECONDS = 60;

export function SpeechToTextTool() {
  const [language, setLanguage] = useState("auto");
  const [busy, setBusy] = useState(false);
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const recorder = useRecorder(MAX_SECONDS, async (blob) => {
    setBusy(true);
    setError("");
    const form = new FormData();
    form.append("file", blob, audioFileName(blob));
    form.append("language", language);
    try {
      const result = await postTool<{ text: string }>("/api/tools/transcribe", form);
      setText((prev) => (prev ? `${prev}\n\n${result.text}` : result.text));
      trackEvent("tool_run", { tool: "speech-to-text", language });
    } catch (e) {
      setError(e instanceof ToolApiError ? e.message : "Something went wrong. Try again.");
    } finally {
      setBusy(false);
    }
  });

  return (
    <div className="grid gap-5 lg:grid-cols-[17rem_1fr]">
      <div className="flex flex-col gap-5 rounded-xl bg-canvas p-5">
        <LanguageSelect value={language} onChange={setLanguage} disabled={recorder.state === "recording" || busy} />
        <RecordKey recorder={recorder} maxSeconds={MAX_SECONDS} disabled={busy} />
        <p className="text-center font-display text-[12.5px] leading-snug text-ink-faint">Up to {MAX_SECONDS} seconds. Record again to add more.</p>
      </div>

      <div className="flex min-h-[260px] flex-col">
        <label htmlFor="stt-out" className="eyebrow mb-2">
          Transcript
        </label>
        <textarea
          id="stt-out"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={busy ? "" : "Your words appear here. You can edit them before copying."}
          className="paper-ruled min-h-[220px] flex-1 resize-y rounded-xl border border-line p-4 font-sans text-[15px] leading-[28px] text-ink outline-none focus:border-primary-500/50"
        />
        {busy && (
          <p className="mt-2 font-display text-[13px] text-ink-soft">
            <Spinner label="Transcribing…" />
          </p>
        )}
        {error && <ErrorNote>{error}</ErrorNote>}
        {text && (
          <>
            <div className="mt-3 flex flex-wrap gap-2">
              <CopyButton text={text} />
              <DownloadButton label="Save TXT" onClick={() => download("transcript.txt", text)} />
              <button type="button" onClick={() => setText("")} className="chip h-9 px-3 font-display text-[13px] font-semibold text-ink-soft">
                Clear
              </button>
            </div>
            <ResultUpsell tool="speech-to-text" line="In the app you hold one key and speak into any text box, with fillers removed and no time limit." />
          </>
        )}
      </div>
    </div>
  );
}

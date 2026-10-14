"use client";

import { useRef, useState } from "react";
import { FileText, Upload } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { buildDocx } from "./docx";
import { CopyButton, DownloadButton, ErrorNote, ResultUpsell, Spinner, download } from "./shared";

const MAX_BYTES = 50 * 1024 * 1024;
const MAX_PAGES = 300;

type Extracted = { name: string; pages: string[][] };

/**
 * Reads the text layer of each page with pdf.js and rebuilds paragraphs: a
 * line break where the PDF ends a line, and a new paragraph where the gap to
 * the next line is clearly bigger than the usual line spacing or the font
 * size changes.
 */
async function extract(file: File, onPage: (n: number, total: number) => void): Promise<string[][]> {
  const pdfjs = await import("pdfjs-dist/legacy/build/pdf.mjs");
  pdfjs.GlobalWorkerOptions.workerSrc = new URL("pdfjs-dist/legacy/build/pdf.worker.min.mjs", import.meta.url).toString();
  const doc = await pdfjs.getDocument({ data: new Uint8Array(await file.arrayBuffer()) }).promise;
  if (doc.numPages > MAX_PAGES) throw new Error(`pages:${doc.numPages}`);
  const pages: string[][] = [];
  for (let n = 1; n <= doc.numPages; n++) {
    onPage(n, doc.numPages);
    const page = await doc.getPage(n);
    const content = await page.getTextContent();
    const lines: { text: string; y: number; h: number }[] = [];
    let current = "";
    let y = 0;
    let h = 0;
    for (const item of content.items) {
      if (!("str" in item)) continue;
      if (!current) {
        y = item.transform[5];
        h = item.height || Math.abs(item.transform[3]) || 10;
      }
      current += item.str;
      if (item.hasEOL) {
        lines.push({ text: current.trim(), y, h });
        current = "";
      }
    }
    if (current.trim()) lines.push({ text: current.trim(), y, h });

    const paras: string[] = [];
    let para = "";
    lines.forEach((line, i) => {
      if (!line.text) {
        if (para) paras.push(para);
        para = "";
        return;
      }
      const prev = lines[i - 1];
      const gap = prev ? Math.abs(prev.y - line.y) : 0;
      // A wide gap or a change of font size (a heading) starts a new paragraph.
      const sizeChange = prev && Math.abs(prev.h - line.h) > Math.max(prev.h, line.h) * 0.2;
      if (para && (gap > Math.max(prev.h, line.h) * 1.8 || sizeChange)) {
        paras.push(para);
        para = "";
      }
      // Join hyphenated line ends; otherwise a space.
      para = para ? (para.endsWith("-") ? para.slice(0, -1) + line.text : `${para} ${line.text}`) : line.text;
    });
    if (para) paras.push(para);
    pages.push(paras);
    page.cleanup();
  }
  await doc.destroy();
  return pages;
}

const asText = (pages: string[][]) => pages.map((p, i) => `--- Page ${i + 1} ---\n\n${p.join("\n\n")}`).join("\n\n");

// PDF to text and PDF to Word: the same extraction, saved as TXT or DOCX.
export function PdfConvertTool({ mode }: { mode: "text" | "word" }) {
  const tool = mode === "text" ? "pdf-to-text" : "pdf-to-word";
  const input = useRef<HTMLInputElement>(null);
  const [busy, setBusy] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState<Extracted | null>(null);

  const run = async (file: File | undefined) => {
    if (!file) return;
    setError("");
    setResult(null);
    if (file.type && file.type !== "application/pdf" && !/\.pdf$/i.test(file.name)) {
      setError("Choose a PDF file.");
      return;
    }
    if (file.size > MAX_BYTES) {
      setError("That PDF is over 50 MB. Split it first.");
      return;
    }
    setBusy("Opening the PDF…");
    try {
      const pages = await extract(file, (n, total) => setBusy(`Reading page ${n} of ${total}…`));
      const chars = pages.flat().join("").length;
      if (chars < 20) {
        setError("This PDF has no selectable text. It is probably a scan or an image, which needs OCR (text recognition) first.");
        return;
      }
      setResult({ name: file.name.replace(/\.pdf$/i, ""), pages });
      trackEvent("tool_run", { tool, pages: pages.length });
    } catch (e) {
      const msg = e instanceof Error ? e.message : "";
      setError(
        msg.startsWith("pages:")
          ? `That PDF has ${msg.slice(6)} pages. The free tool reads up to ${MAX_PAGES}.`
          : /password/i.test(msg)
            ? "This PDF is password-protected. Remove the password first."
            : "We could not read that PDF. It may be damaged or protected.",
      );
    } finally {
      setBusy("");
    }
  };

  const text = result ? asText(result.pages) : "";
  const words = text ? text.split(/\s+/).length : 0;

  return (
    <div className="flex flex-col gap-5">
      <button
        type="button"
        onClick={() => input.current?.click()}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault();
          run(e.dataTransfer.files[0]);
        }}
        disabled={Boolean(busy)}
        className="flex min-h-[180px] flex-col items-center justify-center gap-2 rounded-xl border-[1.5px] border-dashed border-line bg-canvas px-5 py-8 text-center hover:bg-canvas/60 disabled:cursor-wait"
      >
        {busy ? (
          <span className="font-display text-[14.5px] text-ink">
            <Spinner label={busy} />
          </span>
        ) : (
          <>
            <Upload aria-hidden="true" className="h-6 w-6 text-ink-faint" />
            <span className="font-display text-[15px] font-semibold text-ink">{result ? `${result.name}.pdf · drop another` : "Drop a PDF here, or browse"}</span>
            <span className="font-display text-[12.5px] text-ink-faint">Up to 50 MB and {MAX_PAGES} pages · converted in your browser, never uploaded</span>
          </>
        )}
      </button>
      <input
        ref={input}
        type="file"
        accept="application/pdf,.pdf"
        className="hidden"
        onChange={(e) => {
          run(e.target.files?.[0]);
          e.target.value = "";
        }}
      />
      {error && <ErrorNote>{error}</ErrorNote>}

      {result && (
        <>
          <div className="flex flex-wrap items-center gap-2">
            <p className="mr-auto flex items-center gap-2 font-display text-[13.5px] text-ink">
              <FileText aria-hidden="true" className="h-4 w-4 text-ink-faint" />
              {result.pages.length} page{result.pages.length === 1 ? "" : "s"} · {words.toLocaleString()} words
            </p>
            {mode === "word" ? (
              <>
                <DownloadButton
                  label="Download DOCX"
                  onClick={() => {
                    const blob = buildDocx(result.name, result.pages);
                    const a = document.createElement("a");
                    a.href = URL.createObjectURL(blob);
                    a.download = `${result.name}.docx`;
                    a.click();
                    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
                  }}
                />
                <DownloadButton label="TXT" onClick={() => download(`${result.name}.txt`, text)} />
              </>
            ) : (
              <>
                <CopyButton text={text} />
                <DownloadButton label="Download TXT" onClick={() => download(`${result.name}.txt`, text)} />
                <DownloadButton
                  label="DOCX"
                  onClick={() => {
                    const a = document.createElement("a");
                    a.href = URL.createObjectURL(buildDocx(result.name, result.pages));
                    a.download = `${result.name}.docx`;
                    a.click();
                  }}
                />
              </>
            )}
          </div>
          <textarea
            readOnly
            value={text}
            aria-label="Extracted text"
            className="paper-ruled max-h-[480px] min-h-[300px] w-full resize-y rounded-xl border border-line p-4 text-[14.5px] leading-[28px] text-ink outline-none"
          />
          <p className="font-display text-[12.5px] text-ink-faint">
            {mode === "word"
              ? "The Word file keeps the text and paragraphs, one PDF page per Word page. Images, tables and exact layout are not rebuilt."
              : "Text is grouped into paragraphs per page. Scanned pages have no text layer and come out empty."}
          </p>
          <ResultUpsell
            tool={tool}
            lead="Done, right in your browser."
            line="Need to write about what you just read? Oravo lets you speak your notes, replies and reports into any app, three times faster than typing."
          />
        </>
      )}
    </div>
  );
}

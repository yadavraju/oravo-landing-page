"use client";

import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { Check, Copy, Download, PencilLine } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Avatar, TimeChip } from "./bits";
import { CLAIMS, MEETING, SUMMARY, trackCta } from "./data";

/*
 * Editable output with real copy and export controls, on the sample notes.
 * On first view an edit types itself into the last action item, so it is
 * obvious the fields are yours to change.
 */

type Row = { id: string; owner: string; text: string; due: string; at: string };

const START: Row[] = CLAIMS.filter((c) => c.kind === "action").map((c) => ({ id: c.id, owner: c.owner!, text: c.text, due: c.due!, at: c.at }));
const AUTO_EDIT = " (one page)";

function asMarkdown(rows: Row[], summary: string) {
  return [
    `# ${MEETING.title}`,
    "",
    "## Summary",
    summary,
    "",
    "## Decisions",
    ...CLAIMS.filter((c) => c.kind === "decision").map((c) => `- ${c.text} [${c.at}]`),
    "",
    "## Risks and open questions",
    ...CLAIMS.filter((c) => c.kind === "risk" || c.kind === "question").map((c) => `- ${c.text} [${c.at}]`),
    "",
    "## Action items",
    ...rows.map((r) => `- [ ] ${r.owner}: ${r.text} (due ${r.due}) [${r.at}]`),
    "",
  ].join("\n");
}

export function EditShare() {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5, once: true });
  const [rows, setRows] = useState<Row[]>(START);
  const [summary, setSummary] = useState(SUMMARY);
  const [editing, setEditing] = useState<string | null>(null);
  const [toast, setToast] = useState<string | null>(null);
  const touched = useRef(false);

  // Type a small edit into the last action item, once.
  useEffect(() => {
    if (!inView || reduceMotion) return;
    let i = 0;
    let timer: ReturnType<typeof setTimeout>;
    const target = START[START.length - 1];
    const step = () => {
      if (touched.current) return setEditing(null);
      i += 1;
      setEditing(target.id);
      setRows((rs) => rs.map((r) => (r.id === target.id ? { ...r, text: target.text + AUTO_EDIT.slice(0, i) } : r)));
      if (i < AUTO_EDIT.length) timer = setTimeout(step, 85);
      else timer = setTimeout(() => setEditing(null), 900);
    };
    timer = setTimeout(step, 900);
    return () => clearTimeout(timer);
  }, [inView, reduceMotion]);

  useEffect(() => {
    if (!toast) return;
    const id = setTimeout(() => setToast(null), 2200);
    return () => clearTimeout(id);
  }, [toast]);

  const update = (id: string, key: keyof Row, value: string) => {
    touched.current = true;
    setRows((rs) => rs.map((r) => (r.id === id ? { ...r, [key]: value } : r)));
  };

  const copy = async () => {
    trackCta("demo_copy_notes", "clipboard");
    try {
      await navigator.clipboard.writeText(asMarkdown(rows, summary));
      setToast("Notes copied as Markdown");
    } catch {
      setToast("Copy isn't available in this browser");
    }
  };

  const exportFile = () => {
    trackCta("demo_export_notes", "download");
    const blob = new Blob([asMarkdown(rows, summary)], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "product-launch-review.md";
    a.click();
    URL.revokeObjectURL(url);
    setToast("Exported product-launch-review.md");
  };

  const field = "min-w-0 rounded-md bg-transparent px-1.5 py-1 text-ink outline-none ring-1 ring-transparent transition focus:bg-raised focus:ring-brand/40 hover:ring-line";

  return (
    <div ref={ref} className="relative">
      <div className="frame-dotted absolute -inset-3 hidden sm:block" aria-hidden="true" />
      <div className="relative overflow-hidden rounded-2xl bg-raised shadow-[0_0_0_1px_var(--o-line),0_30px_60px_-34px_rgba(51,48,42,0.5)]">
        <div className="flex items-center justify-between gap-3 border-b border-line bg-canvas px-4 py-2.5">
          <span className="inline-flex items-center gap-2 font-display text-[12.5px] font-semibold text-ink">
            <PencilLine aria-hidden="true" className="h-3.5 w-3.5 text-brand" />
            Edit anything
          </span>
          <div className="flex gap-1.5">
            <button type="button" onClick={copy} className="inline-flex h-8 items-center gap-1.5 rounded-md bg-raised px-2.5 font-display text-[12px] font-semibold text-ink ring-1 ring-line transition-colors hover:bg-paper">
              <Copy aria-hidden="true" className="h-3.5 w-3.5" />
              Copy notes
            </button>
            <button type="button" onClick={exportFile} className="inline-flex h-8 items-center gap-1.5 rounded-md bg-cloud px-2.5 font-display text-[12px] font-semibold text-cloud-ink ring-1 ring-cloud-line transition-transform hover:-translate-y-px">
              <Download aria-hidden="true" className="h-3.5 w-3.5" />
              Export
            </button>
          </div>
        </div>

        <div className="p-4 sm:p-5">
          <label htmlFor="nt-summary" className="eyebrow !text-[10px]">
            Summary
          </label>
          <textarea
            id="nt-summary"
            value={summary}
            onChange={(e) => {
              touched.current = true;
              setSummary(e.target.value);
            }}
            rows={3}
            className={`${field} mt-1 w-full resize-none text-[13.5px] leading-relaxed text-ink-soft`}
          />

          <p className="eyebrow mt-4 !text-[10px]">Action items</p>
          <ul className="mt-1.5 divide-y divide-line rounded-xl ring-1 ring-line">
            {rows.map((r) => (
              <li key={r.id} className={`grid grid-cols-[auto_1fr_auto_auto] items-center gap-x-2 gap-y-0.5 px-3 py-2.5 transition-colors ${editing === r.id ? "bg-brand-soft/30" : ""}`}>
                <Avatar name={r.owner} size="sm" />
                <input aria-label="Owner" value={r.owner} onChange={(e) => update(r.id, "owner", e.target.value)} className={`${field} w-full font-display text-[13px] font-semibold`} />
                <label className="flex items-center gap-1 font-display text-[11px] text-ink-faint">
                  Due
                  <input aria-label="Due date" value={r.due} onChange={(e) => update(r.id, "due", e.target.value)} className={`${field} w-12 text-[12.5px]`} />
                </label>
                <TimeChip at={r.at} />
                <input
                  aria-label="Action"
                  value={r.text}
                  onChange={(e) => update(r.id, "text", e.target.value)}
                  className={`${field} col-span-3 col-start-2 w-full text-[13.5px]`}
                />
              </li>
            ))}
          </ul>
          <p className="mt-3 font-display text-[11.5px] text-ink-faint">Try it: change an owner or a date, then copy or export the sample notes.</p>
        </div>

        <AnimatePresence>
          {toast && (
            <motion.div
              role="status"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              className="absolute bottom-4 left-1/2 inline-flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-lg bg-cloud px-3.5 py-2 text-cloud-ink ring-1 ring-cloud-line font-display text-[12.5px] font-semibold text-sand shadow-lg"
            >
              <Check aria-hidden="true" className="h-3.5 w-3.5 text-[#BFCBB0]" strokeWidth={3} />
              {toast}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

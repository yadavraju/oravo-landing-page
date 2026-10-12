"use client";

import type { ReactNode } from "react";
import { MEETING } from "./data";

/* ▶ 08:12 — the link from a generated line back to its transcript moment. */
export function TimeChip({
  at,
  active = false,
  onClick,
  className = "",
}: {
  at: string;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}) {
  const cls = `inline-flex shrink-0 items-center gap-1 rounded-md px-1.5 py-0.5 font-mono text-[11px] tabular-nums ring-1 transition-colors ${
    active ? "bg-[#4E6B47] text-[#F4F1E6] ring-[#4E6B47]" : "bg-canvas text-ink-soft ring-line hover:bg-[#E9ECDD] hover:text-[#4E6B47] hover:ring-[#4E6B47]/30"
  } ${className}`;
  const body = (
    <>
      <span aria-hidden="true" className="text-[8px]">▶</span>
      {at}
    </>
  );
  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={cls} aria-label={`Jump to ${at} in the transcript`}>
        {body}
      </button>
    );
  }
  return <span className={cls}>{body}</span>;
}

const AVATAR_TONES: Record<string, string> = {
  Raju: "bg-cloud text-cloud-ink",
  Maya: "bg-brand-soft text-brand",
  Aisha: "bg-[#E9ECDD] text-[#4E6B47]",
};

export function Avatar({ name, size = "md" }: { name: string; size?: "sm" | "md" }) {
  return (
    <span
      className={`flex shrink-0 items-center justify-center rounded-full font-display font-bold ${size === "sm" ? "h-6 w-6 text-[10px]" : "h-8 w-8 text-[11px]"} ${AVATAR_TONES[name] ?? "bg-canvas text-ink-soft"}`}
      aria-hidden="true"
    >
      {name[0]}
    </span>
  );
}

/* A desktop-app window chrome in warm tones. */
export function NoteWindow({ right, children, className = "" }: { right?: ReactNode; children: ReactNode; className?: string }) {
  return (
    <div className={`flex flex-col overflow-hidden rounded-2xl bg-raised shadow-[0_0_0_1px_var(--o-line),0_30px_60px_-34px_rgba(51,48,42,0.5)] ${className}`}>
      <div className="flex items-center gap-3 border-b border-line bg-canvas px-4 py-2.5">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-[#E3B5A0]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#E8D3A6]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#BFCBB0]" />
        </span>
        <span className="min-w-0 flex-1 truncate font-display text-[12.5px] font-semibold text-ink">
          {MEETING.title}
          <span className="font-normal text-ink-faint"> · {MEETING.when}</span>
        </span>
        {right}
      </div>
      {children}
    </div>
  );
}

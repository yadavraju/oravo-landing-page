"use client";

import { Check, ChevronDown, Link2 } from "lucide-react";
import { useEffect, useState } from "react";

export type TocItem = { id: string; number: string; title: string };

/*
 * Scroll-spy: the section whose heading most recently crossed the upper third
 * of the viewport is the active one. Falls back to the first section above
 * the fold, and to the last one once the reader reaches the bottom.
 */
function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0] ?? "");

  useEffect(() => {
    if (ids.length === 0) return;
    const update = () => {
      const line = window.innerHeight * 0.32;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top - line <= 0) current = id;
      }
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      if (atBottom) {
        // Only jump to the last section if its heading is actually on screen.
        const last = document.getElementById(ids[ids.length - 1]);
        if (last && last.getBoundingClientRect().top < window.innerHeight) current = ids[ids.length - 1];
      }
      setActive(current);
    };
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ids]);

  return active;
}

function TocList({ items, active, onNavigate }: { items: TocItem[]; active: string; onNavigate?: () => void }) {
  return (
    <ol className="relative grid gap-0.5 border-l border-line">
      {items.map((item) => {
        const isActive = item.id === active;
        return (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={onNavigate}
              aria-current={isActive ? "location" : undefined}
              className={`-ml-px flex gap-2.5 border-l-2 py-1.5 pl-4 pr-2 font-display text-[13px] leading-snug transition-colors duration-200 ${
                isActive
                  ? "border-ink font-semibold text-ink"
                  : "border-transparent text-ink-soft hover:border-line hover:text-ink"
              }`}
            >
              <span className={`w-5 shrink-0 tabular-nums ${isActive ? "text-brand" : "text-ink-faint"}`}>{item.number}</span>
              <span>{item.title}</span>
            </a>
          </li>
        );
      })}
    </ol>
  );
}

// Desktop: a sticky list beside the reading column.
export function LegalToc({ items }: { items: TocItem[] }) {
  const [ids] = useState(() => items.map((item) => item.id));
  const active = useActiveSection(ids);
  return (
    <nav aria-label="On this page">
      <p className="eyebrow mb-3">On this page</p>
      <TocList items={items} active={active} />
    </nav>
  );
}

// Phones and tablets: the same list folded into a disclosure above the text.
export function LegalTocMobile({ items }: { items: TocItem[] }) {
  const [open, setOpen] = useState(false);
  const [ids] = useState(() => items.map((item) => item.id));
  const active = useActiveSection(ids);
  const current = items.find((item) => item.id === active);
  return (
    <nav aria-label="On this page" className="surface-solid overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left"
      >
        <span className="flex min-w-0 flex-col">
          <span className="eyebrow">On this page</span>
          {current && (
            <span className="mt-1 truncate font-display text-[13.5px] font-semibold text-ink">
              <span className="text-brand">{current.number}</span> {current.title}
            </span>
          )}
        </span>
        <ChevronDown aria-hidden="true" className={`h-4 w-4 shrink-0 text-ink-faint transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="border-t border-line px-4 py-3">
          <TocList items={items} active={active} onNavigate={() => setOpen(false)} />
        </div>
      )}
    </nav>
  );
}

// The "#" beside each heading: follows the anchor and copies its URL.
export function HeadingAnchor({ id, label }: { id: string; label: string }) {
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 1600);
    return () => clearTimeout(t);
  }, [copied]);
  return (
    <a
      href={`#${id}`}
      aria-label={`Link to section: ${label}`}
      onClick={() => {
        try {
          const url = `${window.location.origin}${window.location.pathname}#${id}`;
          void navigator.clipboard?.writeText(url).then(() => setCopied(true), () => undefined);
        } catch {
          /* Clipboard is optional; the anchor still navigates. */
        }
      }}
      className="relative ml-2 inline-flex h-7 w-7 translate-y-[-0.1em] items-center justify-center rounded-md align-middle text-ink-faint opacity-50 ring-line lg:opacity-0 transition-[opacity,color] duration-200 hover:text-ink hover:ring-1 focus-visible:opacity-100 group-hover:opacity-100 lg:focus-visible:opacity-100 lg:group-hover:opacity-100"
    >
      {copied ? <Check aria-hidden="true" className="h-3.5 w-3.5" /> : <Link2 aria-hidden="true" className="h-3.5 w-3.5" />}
      {copied && (
        <span role="status" className="absolute left-full ml-1.5 whitespace-nowrap rounded-md bg-ink px-2 py-1 font-display text-[11px] font-semibold text-paper">
          Link copied
        </span>
      )}
    </a>
  );
}

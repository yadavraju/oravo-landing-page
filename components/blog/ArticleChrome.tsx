"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import type { Heading } from "./PortableText";

/*
 * Reading aids for /blog/[slug]: a thin terracotta progress bar pinned to the
 * top of the window, and a table of contents that tracks the section you are
 * reading (sticky on desktop, a disclosure on phones).
 */

export function ReadingProgress({ targetId }: { targetId: string }) {
  const reduceMotion = useReducedMotion();
  const progress = useMotionValue(0);
  const smooth = useSpring(progress, { stiffness: 260, damping: 40, restDelta: 0.001 });

  useEffect(() => {
    const target = document.getElementById(targetId);
    if (!target) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = target.getBoundingClientRect();
      const total = rect.height - window.innerHeight * 0.6;
      const read = Math.min(1, Math.max(0, -rect.top / Math.max(1, total)));
      progress.set(read);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [targetId, progress]);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[3px] bg-transparent" aria-hidden="true">
      <motion.div className="h-full origin-left bg-brand" style={{ scaleX: reduceMotion ? progress : smooth }} />
    </div>
  );
}

/*
 * position: sticky cannot work here because the page shell clips overflow-x
 * (which makes it the scroll container), so the rail follows the scroll in
 * JS instead: it stays `offset` px below the top of the window while its
 * column is on screen, and never leaves the column.
 */
export function StickyRail({ children, offset = 112, className = "" }: { children: ReactNode; offset?: number; className?: string }) {
  const outer = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const column = outer.current;
    const rail = inner.current;
    if (!column || !rail) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const box = column.getBoundingClientRect();
      const travel = Math.max(0, box.height - rail.offsetHeight);
      const y = Math.min(travel, Math.max(0, offset - box.top));
      rail.style.transform = `translate3d(0, ${y}px, 0)`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [offset]);

  return (
    <div ref={outer} className={`h-full ${className}`}>
      <div ref={inner} className="will-change-transform">
        {children}
      </div>
    </div>
  );
}

function useActiveHeading(headings: Heading[]) {
  const [active, setActive] = useState<string | null>(headings[0]?.id ?? null);

  useEffect(() => {
    const elements = headings.map((h) => document.getElementById(h.id)).filter((el): el is HTMLElement => Boolean(el));
    if (elements.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-96px 0px -65% 0px", threshold: 0 },
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [headings]);

  return active;
}

function TocList({ headings, active, markerId, onNavigate }: { headings: Heading[]; active: string | null; markerId: string; onNavigate?: () => void }) {
  return (
    <ol className="relative space-y-0.5 border-l border-line">
      {headings.map((heading) => {
        const on = heading.id === active;
        return (
          <li key={heading.id} className="relative">
            {on && (
              <motion.span
                layoutId={markerId}
                className="absolute -left-px top-1 bottom-1 w-[2px] rounded-full bg-brand"
                transition={{ type: "spring", stiffness: 400, damping: 36 }}
              />
            )}
            <a
              href={`#${heading.id}`}
              onClick={onNavigate}
              aria-current={on ? "location" : undefined}
              className={`block py-1.5 font-display text-[13px] leading-snug transition-colors ${heading.level === 3 ? "pl-7" : "pl-4"} ${
                on ? "font-semibold text-ink" : "text-ink-faint hover:text-ink-soft"
              }`}
            >
              {heading.text}
            </a>
          </li>
        );
      })}
    </ol>
  );
}

export function TableOfContents({ headings }: { headings: Heading[] }) {
  const active = useActiveHeading(headings);
  return (
    <nav aria-label="On this page">
      <p className="eyebrow mb-4">On this page</p>
      <TocList headings={headings} active={active} markerId="toc-marker-desktop" />
    </nav>
  );
}

export function MobileTableOfContents({ headings }: { headings: Heading[] }) {
  const [open, setOpen] = useState(false);
  const active = useActiveHeading(headings);
  return (
    <nav aria-label="On this page" className="surface-solid mb-10 overflow-hidden !rounded-xl lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between px-4 py-3.5 text-left"
      >
        <span className="eyebrow">On this page · {headings.length} sections</span>
        <ChevronDown aria-hidden="true" className={`h-4 w-4 text-ink-faint transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <div className={`grid transition-[grid-template-rows] duration-300 ease-entrance ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          <div className="px-4 pb-4">
            <TocList headings={headings} active={active} markerId="toc-marker-mobile" onNavigate={() => setOpen(false)} />
          </div>
        </div>
      </div>
    </nav>
  );
}

"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import type { FaqItem } from "@/lib/faq";

// One surface split by hairlines, video-shala style. Answers open with a
// grid-rows transition so the height animates without measuring.
export function FaqAccordion({ items, defaultOpen = 0 }: { items: FaqItem[]; defaultOpen?: number | null }) {
  const [open, setOpen] = useState<number | null>(defaultOpen);

  return (
    <div className="surface-solid overflow-hidden !rounded-2xl">
      {items.map((item, i) => {
        const isOpen = open === i;
        const id = `faq-${i}`;
        return (
          <div key={item.question} className="border-t border-line first:border-t-0">
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`${id}-panel`}
                id={`${id}-button`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="group flex w-full items-start gap-4 px-5 py-5 text-left transition-colors hover:bg-canvas/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500/40 sm:px-7"
              >
                <span className="flex-1 font-display text-[15.5px] font-semibold leading-snug tracking-[-0.01em] text-ink sm:text-base">
                  {item.question}
                </span>
                <span
                  className={`mt-px flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ring-1 transition-all duration-300 ease-entrance ${
                    isOpen ? "bg-primary-500 text-white ring-primary-500" : "bg-raised text-ink-soft ring-line group-hover:ring-ink/25"
                  }`}
                >
                  <ChevronDown aria-hidden="true" className={`h-4 w-4 transition-transform duration-300 ease-entrance ${isOpen ? "rotate-180" : ""}`} />
                </span>
              </button>
            </h3>
            <div
              id={`${id}-panel`}
              role="region"
              aria-labelledby={`${id}-button`}
              className={`grid transition-[grid-template-rows] duration-300 ease-entrance ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
            >
              <div className={`overflow-hidden ${isOpen ? "visible" : "invisible"}`}>
                <p className="px-5 pb-6 pr-14 text-[15px] leading-[1.65] text-ink-soft sm:px-7 sm:pr-20">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

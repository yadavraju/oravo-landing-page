"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { useRef } from "react";

/* The student offer as a ticket: price on top, a perforated tear line, the
   action on the stub. A "50% off" stamp rocks gently while on screen. */
export function StudentOfferCard({ features, href = "/download" }: { features: string[]; href?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.4 });
  const reduceMotion = useReducedMotion();
  const live = inView && !reduceMotion;
  return (
    <div ref={ref} className="relative mx-auto max-w-md">
      <div className="frame-dotted absolute -inset-4 hidden sm:block" aria-hidden="true" />
      <motion.div
        aria-hidden="true"
        className="absolute -right-3 -top-6 z-10 flex h-24 w-24 flex-col items-center justify-center rounded-full border-2 border-dashed border-ink/25 bg-raised text-ink-soft sm:-right-8"
        animate={live ? { rotate: [-12, -4, -12] } : { rotate: -12 }}
        transition={{ duration: 4, repeat: live ? Infinity : 0, ease: "easeInOut" }}
      >
        <span className="font-serif text-[26px] leading-none text-brand">50%</span>
        <span className="mt-0.5 font-display text-[10px] font-bold uppercase tracking-[0.14em]">off</span>
      </motion.div>

      <div className="relative overflow-hidden rounded-2xl bg-raised shadow-[0_0_0_1px_var(--o-line),0_30px_60px_-30px_rgba(51,48,42,0.45)]">
        <div className="p-7 sm:p-8">
          <p className="eyebrow">Oravo Pro for Students</p>
          <div className="mt-4 flex items-baseline gap-1.5">
            <span className="font-serif text-[64px] leading-none text-ink">$5</span>
            <span className="font-display text-[18px] font-medium text-ink-soft">/mo</span>
          </div>
          <p className="mt-1 font-display text-[13px] text-ink-faint">billed annually</p>
          <p className="mt-4 inline-flex rounded-md bg-brand-soft px-2.5 py-1 font-display text-[12.5px] font-semibold text-brand">50% off, just for students</p>
          <ul className="mt-6 grid gap-2.5">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-[14.5px] leading-relaxed text-ink">
                <Check aria-hidden="true" className="mt-1 h-3.5 w-3.5 shrink-0 text-brand" strokeWidth={2.5} />
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative border-t-[1.5px] border-dashed border-line bg-canvas p-7 sm:p-8">
          <span className="absolute -left-[9px] -top-[9px] h-4 w-4 rounded-full bg-sand ring-1 ring-line" aria-hidden="true" />
          <span className="absolute -right-[9px] -top-[9px] h-4 w-4 rounded-full bg-sand ring-1 ring-line" aria-hidden="true" />
          <p className="font-display text-[14px] font-semibold text-ink">Start your free trial today</p>
          <a
            href={href}
            className="btn-neutral mt-4 inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg border-2 border-[#d9cebf] bg-[#ebe3d8] font-display text-[15px] font-semibold text-ink transition-colors hover:bg-[#e3d9cb]"
          >
            Start Today for Free
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </a>
          <p className="mt-3 text-center font-display text-[12px] text-ink-faint">Auto renews at 50% off. Cancel anytime.</p>
        </div>
      </div>
    </div>
  );
}

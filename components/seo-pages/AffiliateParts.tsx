"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check, Copy } from "lucide-react";
import { useLoopClock } from "./useLoopClock";

/*
 * Visuals for /affiliate: the referral key as a ticket (hero), and the
 * commission explained as twelve monthly tiles plus the payout threshold.
 * Numbers mirror the programme terms on the page: 20% recurring for the first
 * 12 months, paid monthly once you pass $50.
 */

const CODE = "ORAVO-YOURNAME-2024";
const CHANNELS = ["Social media", "Blog & newsletter", "Your network", "Your own content"];

export function ReferralTicket() {
  const PERIOD = 9000;
  const { ref, t } = useLoopClock(PERIOD);
  const chars = Math.max(0, Math.min(CODE.length, Math.floor((t - 300) / 70)));
  const copied = t > 2400 && t < 4200;
  const channel = t < 4200 ? -1 : Math.min(CHANNELS.length - 1, Math.floor((t - 4200) / 900));

  return (
    <figure ref={ref} className="relative">
      <div className="frame-dotted absolute -inset-4 hidden sm:block" aria-hidden="true" />
      <div className="relative" aria-hidden="true">
        <div className="flex overflow-hidden rounded-2xl bg-raised shadow-[0_0_0_1px_var(--o-line),0_30px_60px_-30px_rgba(51,48,42,0.45)]">
          <div className="min-w-0 flex-1 p-6 sm:p-8">
            <div className="flex items-center justify-between">
              <span className="eyebrow">Your affiliate key</span>
              <span className="font-display text-[11px] text-ink-faint">Account · Settings</span>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <code className="min-w-0 flex-1 truncate rounded-lg bg-canvas px-3 py-3 font-mono text-[15px] font-semibold tracking-[0.04em] text-brand ring-1 ring-line sm:text-[17px]">
                {CODE.slice(0, chars)}
                {chars < CODE.length && <span className="o-caret ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] bg-ink" />}
              </code>
              <motion.span
                className={`flex h-11 shrink-0 items-center gap-1.5 rounded-lg px-3 font-display text-[12px] font-semibold ring-1 transition-colors ${copied ? "bg-cloud text-cloud-ink ring-cloud-line" : "bg-raised text-ink-soft ring-line"}`}
                animate={t > 2200 && t < 2450 ? { scale: 0.93 } : { scale: 1 }}
              >
                {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                {copied ? "Copied" : "Copy"}
              </motion.span>
            </div>
            <p className="mt-6 eyebrow">Share it anywhere</p>
            <ul className="mt-3 grid grid-cols-2 gap-2">
              {CHANNELS.map((c, i) => {
                const on = i <= channel;
                return (
                  <li
                    key={c}
                    className={`flex items-center gap-2 rounded-lg px-3 py-2 font-display text-[12.5px] transition-all duration-300 ${on ? "bg-canvas text-ink ring-1 ring-ink/30" : "bg-paper text-ink-faint ring-1 ring-line"}`}
                  >
                    <span className={`flex h-4 w-4 items-center justify-center rounded-[5px] ${on ? "bg-cloud text-cloud-ink ring-1 ring-cloud-line" : "bg-canvas ring-1 ring-line"}`}>
                      {on && <Check className="h-2.5 w-2.5" strokeWidth={3} />}
                    </span>
                    {c}
                  </li>
                );
              })}
            </ul>
          </div>
          {/* Stub */}
          <div className="relative hidden w-36 shrink-0 flex-col items-center justify-center border-l-[1.5px] border-dashed border-line bg-canvas p-4 text-center sm:flex">
            <span className="absolute -left-[9px] -top-[9px] h-4 w-4 rounded-full bg-sand ring-1 ring-line" />
            <span className="absolute -bottom-[9px] -left-[9px] h-4 w-4 rounded-full bg-sand ring-1 ring-line" />
            <span className="eyebrow !text-[10px]">You earn</span>
            <span className="mt-1 font-serif text-[40px] leading-none text-ink">20%</span>
            <span className="mt-2 font-display text-[11.5px] leading-snug text-ink-soft">recurring, first 12 months</span>
          </div>
        </div>
        <div className="mt-3 flex items-center justify-between rounded-xl bg-raised/80 px-4 py-3 ring-1 ring-line sm:hidden">
          <span className="font-display text-[12px] text-ink-soft">You earn</span>
          <span className="font-display text-[13px] font-semibold text-ink">20% recurring · first 12 months</span>
        </div>
      </div>
      <figcaption className="sr-only">An example affiliate key, ORAVO-YOURNAME-2024, being copied and shared on social media, blogs, newsletters and your network.</figcaption>
    </figure>
  );
}

/* ------------------------------------------------------------------------ */

export function CommissionStrip() {
  const PERIOD = 9000;
  const { ref, t } = useLoopClock(PERIOD);
  const filled = Math.max(0, Math.min(12, Math.floor((t - 300) / 420)));
  const payoutProgress = Math.min(1, Math.max(0, (t - 1200) / 3000));
  const paid = payoutProgress >= 1;

  return (
    <div ref={ref} className="frame-dotted bg-paper/50 p-5 sm:p-8">
      <div className="flex items-baseline justify-between">
        <p className="eyebrow">A referral&apos;s first year</p>
        <p className="font-display text-[12px] text-ink-faint">
          Month <span className="font-semibold tabular-nums text-ink">{Math.max(1, filled)}</span> of 12
        </p>
      </div>
      <ol className="mt-5 grid grid-cols-4 gap-2 sm:grid-cols-6 lg:grid-cols-12" aria-label="Commission on each of the first 12 months of subscription payments">
        {Array.from({ length: 12 }).map((_, i) => {
          const on = i < filled;
          return (
            <li
              key={i}
              className={`flex h-20 flex-col justify-between rounded-lg p-2 transition-colors duration-300 ${on ? "bg-raised ring-1 ring-ink/25" : "bg-canvas ring-1 ring-line"}`}
            >
              <span className="font-display text-[10px] font-semibold uppercase tracking-[0.1em] text-ink-faint">M{i + 1}</span>
              <span className={`font-serif text-[18px] leading-none transition-colors duration-300 ${on ? "text-ink" : "text-ink-faint/50"}`}>20%</span>
              <span className={`h-1 rounded-full transition-colors duration-300 ${on ? "bg-brand" : "bg-line"}`} />
            </li>
          );
        })}
      </ol>

      <div className="mt-6 grid gap-5 border-t border-line pt-6 sm:grid-cols-[1fr_auto] sm:items-center">
        <div>
          <div className="flex items-baseline justify-between font-display text-[12.5px]">
            <span className="text-ink-soft">Your balance, toward the payout threshold</span>
            <span className="font-semibold text-ink">$50</span>
          </div>
          <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-canvas ring-1 ring-line">
            <div className="h-full rounded-full bg-ink/70 transition-[width] duration-100 ease-linear" style={{ width: `${payoutProgress * 100}%` }} />
          </div>
        </div>
        <AnimatePresence mode="wait">
          <motion.span
            key={paid ? "paid" : "pending"}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className={`inline-flex items-center gap-2 rounded-lg px-3 py-2 font-display text-[12.5px] font-semibold ${paid ? "bg-raised text-ink ring-1 ring-ink/30" : "bg-canvas text-ink-faint ring-1 ring-line"}`}
          >
            {paid && <Check className="h-3.5 w-3.5" strokeWidth={3} />}
            {paid ? "Paid out monthly via PayPal or bank transfer" : "Building up…"}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
}

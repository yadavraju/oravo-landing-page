"use client";

import { useEffect, useState } from "react";
import { CONSENT_STORAGE_KEY, consentUpdate, needsConsentPrompt, type ConsentChoice } from "@/lib/consent";

/** Cookie choice for EEA/UK/Swiss visitors; drives Google Consent Mode v2 (defaults live in app/layout.tsx). */
export default function ConsentBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = localStorage.getItem(CONSENT_STORAGE_KEY);
    } catch {
      // Storage blocked: ask every visit rather than never.
    }
    if (stored) return;
    setOpen(needsConsentPrompt(Intl.DateTimeFormat().resolvedOptions().timeZone));
  }, []);

  const choose = (choice: ConsentChoice) => {
    window.gtag?.("consent", "update", consentUpdate(choice));
    try {
      localStorage.setItem(CONSENT_STORAGE_KEY, choice);
    } catch {
      // Choice still applies for this page view.
    }
    setOpen(false);
  };

  if (!open) return null;
  return (
    <div role="dialog" aria-label="Cookie preferences" className="fixed inset-x-3 bottom-3 z-[100] mx-auto max-w-xl rounded-2xl bg-raised p-4 shadow-[0_0_0_1px_var(--o-line),0_20px_40px_-20px_rgba(51,48,42,0.45)] sm:p-5">
      <p className="text-[14px] leading-relaxed text-ink-soft">
        We use cookies to measure our ads and improve Oravo. See our{" "}
        <a href="/privacy" className="font-medium text-ink underline underline-offset-2">privacy policy</a>.
      </p>
      <div className="mt-3 flex gap-2">
        <button type="button" onClick={() => choose("granted")} className="btn-primary !h-10 !px-4 !text-[14px]">
          Accept
        </button>
        <button type="button" onClick={() => choose("denied")} className="btn-secondary !h-10 !px-4 !text-[14px]">
          Decline
        </button>
      </div>
    </div>
  );
}

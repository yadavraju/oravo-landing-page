export type AnalyticsParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/** Google Ads conversion ID of account 881-538-2831 (the AW-16703603891 Google tag forwards to it). */
export const GOOGLE_ADS_ID = "AW-17859635419";

/** Conversion actions created in Google Ads (Goals > Conversions). Values are rough per-action worth in USD. */
export const ADS_CONVERSIONS = {
  desktopDownload: { sendTo: `${GOOGLE_ADS_ID}/HG3oCMv-qcAdENvRkcRC`, value: 5 },
  playStoreClick: { sendTo: `${GOOGLE_ADS_ID}/95KeCM7-qcAdENvRkcRC`, value: 1 },
} as const;
export type AdsConversion = keyof typeof ADS_CONVERSIONS;

/** If gtag.js is blocked (ad blockers) or slow, its callback never fires; don't strand the visitor. */
export const CONVERSION_CALLBACK_TIMEOUT_MS = 1200;

export function trackEvent(name: string, params: AnalyticsParams = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  const cleanParams = Object.fromEntries(
    Object.entries(params).filter(([, value]) => value !== undefined),
  );
  window.gtag("event", name, cleanParams);
}

/**
 * Report a Google Ads conversion. `onDone` runs once: when Google confirms the hit, or after
 * a short timeout if gtag is missing or blocked, so a download never depends on analytics.
 */
export function reportAdsConversion(kind: AdsConversion, onDone?: () => void) {
  let done = false;
  const finish = () => {
    if (done) return;
    done = true;
    onDone?.();
  };
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    finish();
    return;
  }
  const { sendTo, value } = ADS_CONVERSIONS[kind];
  window.gtag("event", "conversion", {
    send_to: sendTo,
    value,
    currency: "USD",
    transport_type: "beacon",
    event_callback: finish,
  });
  if (onDone) window.setTimeout(finish, CONVERSION_CALLBACK_TIMEOUT_MS);
}

/** Count a desktop download as an Ads conversion, then start the file download in this tab. */
export function startDesktopDownload(url: string) {
  reportAdsConversion("desktopDownload", () => window.location.assign(url));
}

/** Count Play intent without waiting for analytics or redirecting this page. */
export function trackPlayStoreOutbound(variant: string) {
  trackEvent("play_store_outbound", { destination: "google_play", variant });
  trackEvent("primary_cta_click", { cta: "google_play", destination: "google_play", variant });
  reportAdsConversion("playStoreClick");
}

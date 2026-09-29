export type AnalyticsParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(name: string, params: AnalyticsParams = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  const cleanParams = Object.fromEntries(
    Object.entries(params).filter(([, value]) => value !== undefined),
  );
  window.gtag("event", name, cleanParams);
}

/** Count Play intent without waiting for analytics or redirecting this page. */
export function trackPlayStoreOutbound(variant: string) {
  trackEvent("play_store_outbound", { destination: "google_play", variant });
  trackEvent("primary_cta_click", { cta: "google_play", destination: "google_play", variant });
}

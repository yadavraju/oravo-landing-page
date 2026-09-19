"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

export default function LandingAnalytics({ variant }: { variant: string }) {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    trackEvent("landing_view", {
      variant,
      source: params.get("utm_source") || "direct",
      medium: params.get("utm_medium") || "none",
      campaign: params.get("utm_campaign") || "none",
      landing_path: window.location.pathname,
      device: window.matchMedia("(max-width: 767px)").matches ? "mobile" : "desktop",
    });
  }, [variant]);

  return null;
}

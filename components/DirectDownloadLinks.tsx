"use client";

import { useEffect } from "react";
import { platformForLink, startDesktopInstaller } from "@/lib/desktopDownload";

/**
 * One-click downloads: on a Mac or Windows computer, a click on any link to /download
 * (hero CTAs, closing panels, nav) starts the right installer right away and counts the
 * Google Ads conversion, instead of sending people to /download to click again.
 * Phones, modified clicks (new tab) and failures keep the normal link to /download.
 */
export default function DirectDownloadLinks() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = (event.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!link || link.dataset.noDirectDownload !== undefined || link.target === "_blank") return;
      const url = new URL(link.href, window.location.href);
      if (url.origin !== window.location.origin || url.pathname !== "/download" || url.hash) return;
      const platform = platformForLink(link.textContent ?? "", navigator.userAgent, navigator.maxTouchPoints);
      if (!platform) return;
      event.preventDefault();
      startDesktopInstaller(platform, `link:${window.location.pathname}`)
        .then((started) => {
          if (!started) window.location.assign(link.href);
        })
        .catch(() => window.location.assign(link.href));
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return null;
}

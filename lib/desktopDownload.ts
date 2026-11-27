import { fetchDownloadUrls, getLatestDownloads, type DownloadData } from "@/lib/downloadApi";
import { startDesktopDownload, trackEvent } from "@/lib/analytics";
import { detectVisitorDevice } from "@/lib/device";

export type DesktopPlatform = "macos" | "windows";
export type MacArch = "arm64" | "x64" | null;

/** Apple Silicon vs Intel from the WebGL renderer string; null when unknown. */
export function detectMacArchitecture(): MacArch {
  try {
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    const ext = gl && (gl as WebGLRenderingContext).getExtension("WEBGL_debug_renderer_info");
    const renderer = ext ? String((gl as WebGLRenderingContext).getParameter(ext.UNMASKED_RENDERER_WEBGL)) : "";
    if (/Apple M|Apple GPU/.test(renderer)) return "arm64";
    if (/Intel|AMD|Radeon/.test(renderer)) return "x64";
  } catch {
    // WebGL unavailable
  }
  return null;
}

/** The build for a platform, preferring the matching Mac architecture. */
export function findBestDownload(downloads: DownloadData[], platform: DesktopPlatform | null, arch: MacArch): DownloadData | null {
  if (!platform) return null;
  const forPlatform = downloads.filter((d) => d.platform === platform);
  if (forPlatform.length === 0) return null;
  if (platform === "macos" && arch) return forPlatform.find((d) => d.architecture === arch) ?? forPlatform[0];
  return forPlatform[0];
}

/**
 * Which installer a "Download" link should start: the platform named in the link
 * ("Download for Mac"), else the visitor's own desktop OS. Null on phones and other
 * systems, where the link keeps going to /download.
 */
export function platformForLink(label: string, userAgent: string, maxTouchPoints = 0): DesktopPlatform | null {
  const device = detectVisitorDevice(userAgent, maxTouchPoints);
  if (device !== "mac" && device !== "windows") return null;
  if (/\bmac(os)?\b/i.test(label)) return "macos";
  if (/\bwindows\b|\bpc\b/i.test(label)) return "windows";
  return device === "mac" ? "macos" : "windows";
}

/** Start the latest installer for a platform; false when no build could be found. */
export async function startDesktopInstaller(platform: DesktopPlatform, source: string): Promise<boolean> {
  const { data } = await fetchDownloadUrls();
  const best = findBestDownload(getLatestDownloads(data), platform, platform === "macos" ? detectMacArchitecture() : null);
  if (!best) return false;
  trackEvent("primary_cta_click", { cta: platform === "macos" ? "download_mac" : "download_windows", destination: "desktop_download", variant: source });
  startDesktopDownload(best.file_path);
  return true;
}

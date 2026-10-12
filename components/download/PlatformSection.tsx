"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Terminal } from "lucide-react";
import { trackPlayStoreOutbound } from "@/lib/analytics";
import type { DownloadData } from "@/lib/downloadApi";

// Detect user's Mac architecture
function useDetectedArchitecture() {
  const [detectedArch, setDetectedArch] = useState<"arm64" | "x64" | null>(null);

  useEffect(() => {
    // Check if running on macOS
    const isMac = navigator.platform.toLowerCase().includes("mac");
    if (!isMac) {
      setDetectedArch(null);
      return;
    }

    // Try to detect Apple Silicon vs Intel
    // Method 1: Check WebGL renderer (most reliable)
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (gl) {
        const debugInfo = (gl as WebGLRenderingContext).getExtension("WEBGL_debug_renderer_info");
        if (debugInfo) {
          const renderer = (gl as WebGLRenderingContext).getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
          // Apple Silicon GPUs contain "Apple" in their name
          if (renderer && (renderer.includes("Apple M") || renderer.includes("Apple GPU"))) {
            setDetectedArch("arm64");
            return;
          }
          // Intel GPUs on Mac
          if (renderer && (renderer.includes("Intel") || renderer.includes("AMD") || renderer.includes("Radeon"))) {
            setDetectedArch("x64");
            return;
          }
        }
      }
    } catch (e) {
      // WebGL detection failed, try other methods
    }

    // Method 2: Check userAgentData (newer browsers)
    if ("userAgentData" in navigator) {
      (navigator as any).userAgentData?.getHighEntropyValues(["architecture"]).then((data: any) => {
        if (data.architecture === "arm") {
          setDetectedArch("arm64");
        } else if (data.architecture) {
          setDetectedArch("x64");
        }
        // If no architecture data, leave as null (no recommendation)
      }).catch(() => {
        // Can't detect reliably, don't show recommendation
        setDetectedArch(null);
      });
    }
    // If userAgentData not available and WebGL didn't work, don't show recommendation
  }, []);

  return detectedArch;
}

// Which device the visitor is on, so its card can be marked.
type VisitorDevice = "windows" | "macos" | "android" | "ios" | null;
function useVisitorDevice(): VisitorDevice {
  const [device, setDevice] = useState<VisitorDevice>(null);
  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    if (/android/.test(ua)) setDevice("android");
    else if (/iphone|ipad|ipod/.test(ua)) setDevice("ios");
    else if (ua.includes("mac")) setDevice("macos");
    else if (ua.includes("win")) setDevice("windows");
  }, []);
  return device;
}

const DownloadIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
    <path d="M8.5 1.5v9.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 11.293V1.5a.5.5 0 0 1 1 0z" />
    <path d="M2 13.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
  </svg>
);

const ChevronIcon = ({ isExpanded }: { isExpanded: boolean }) => (
  <svg
    className={`h-5 w-5 text-ink-faint transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

// Chip icon for macOS variants
const ChipIcon = ({ type }: { type: "silicon" | "intel" }) => {
  if (type === "silicon") {
    return (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="8" y="8" width="8" height="8" rx="1" />
        <path d="M4 9H2M4 12H2M4 15H2M22 9h-2M22 12h-2M22 15h-2M9 4V2M12 4V2M15 4V2M9 22v-2M12 22v-2M15 22v-2" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <rect x="5" y="5" width="14" height="14" rx="2" />
      <path d="M9 9h6M9 12h6M9 15h3" strokeLinecap="round" />
      <path d="M5 9H3M5 12H3M5 15H3M21 9h-2M21 12h-2M21 15h-2M9 5V3M12 5V3M15 5V3M9 21v-2M12 21v-2M15 21v-2" strokeLinecap="round" />
    </svg>
  );
};

export const AppleIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
  </svg>
);

export const WindowsIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
  </svg>
);

const AndroidIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.6 9.48l1.84-3.18a.38.38 0 00-.66-.38l-1.86 3.22a11.5 11.5 0 00-9.84 0L5.22 5.92a.38.38 0 10-.66.38L6.4 9.48A10.8 10.8 0 001 18h22a10.8 10.8 0 00-5.4-8.52zM7 15.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm10 0a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z" />
  </svg>
);

const PhoneIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
    <rect x="6" y="2.5" width="12" height="19" rx="3" />
    <path d="M10.5 18.5h3" strokeLinecap="round" />
  </svg>
);

function getArchitectureInfo(platform: string, architecture: string): { label: string; subtitle: string; chipType?: "silicon" | "intel" } {
  if (platform === "macos") {
    if (architecture === "arm64") {
      return {
        label: "Apple Silicon",
        subtitle: "For M1, M2, M3, M4 Macs",
        chipType: "silicon",
      };
    }
    if (architecture === "x64" || architecture === "x86_64") {
      return {
        label: "Intel",
        subtitle: "For Intel-based Macs",
        chipType: "intel",
      };
    }
  }

  if (platform === "windows") {
    return {
      label: "Windows",
      subtitle: "64-bit (x64)",
    };
  }

  if (platform === "linux") {
    return {
      label: "Linux",
      subtitle: architecture === "arm64" ? "ARM64 (.deb)" : "x64 (.deb)",
    };
  }

  return {
    label: architecture,
    subtitle: "",
  };
}

// Sort so the recommended Mac build comes first (only if we detected architecture).
function sortMacDownloads(downloads: any[], detectedArch: "arm64" | "x64" | null) {
  return detectedArch
    ? [...downloads].sort((a, b) => {
        const aIsRecommended = detectedArch === "arm64" ? a.architecture === "arm64" : a.architecture !== "arm64";
        const bIsRecommended = detectedArch === "arm64" ? b.architecture === "arm64" : b.architecture !== "arm64";
        return bIsRecommended ? 1 : aIsRecommended ? -1 : 0;
      })
    : downloads; // Keep original order if no detection
}

function isRecommendedMac(download: any, detectedArch: "arm64" | "x64" | null) {
  const isSilicon = download.architecture === "arm64";
  return detectedArch !== null && ((detectedArch === "arm64" && isSilicon) || (detectedArch === "x64" && !isSilicon));
}

function RecommendedTag() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-md bg-brand-soft px-1.5 py-0.5 font-display text-[10.5px] font-semibold text-brand">
      <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
      Recommended
    </span>
  );
}

const MacHelp = () => (
  <p className="font-display text-[12px] leading-snug text-ink-faint">
    <span className="font-semibold text-ink-soft">Not sure which to choose?</span>{" "}
    <span className="hidden sm:inline">Click </span>
    <span className="sm:hidden">Tap </span>
    <AppleIcon className="inline h-3 w-3 -translate-y-px" /> → About This Mac to check your processor.
  </p>
);

/* ------------------------------------------------------------------------ */
/* Per-version platform rows, inside the release history accordion.        */
/* ------------------------------------------------------------------------ */

export function PlatformSection({
  platform,
  label,
  icon,
  downloads,
}: {
  platform: string;
  label: string;
  icon?: React.ReactNode;
  downloads: any[];
}) {
  const [isExpanded, setIsExpanded] = useState(true);
  const detectedArch = useDetectedArchitecture();

  // Linux - Coming Soon (always show this state for now)
  if (platform === "linux") {
    return (
      <div className="flex items-center justify-between gap-3 rounded-xl bg-canvas/60 px-4 py-3.5 ring-1 ring-line sm:px-5">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-raised text-ink-faint ring-1 ring-line"><Terminal aria-hidden="true" className="h-4 w-4" /></span>
          <h3 className="font-display text-[15px] font-semibold text-ink-faint">{label}</h3>
        </div>
        <span className="rounded-md bg-raised px-2 py-1 font-display text-[11px] font-semibold text-ink-faint ring-1 ring-line">Coming soon</span>
      </div>
    );
  }

  const isMac = platform === "macos" && downloads.length > 0;
  const rows = isMac ? sortMacDownloads(downloads, detectedArch) : downloads;

  return (
    <div className="overflow-hidden rounded-xl bg-raised ring-1 ring-line">
      <button
        type="button"
        aria-expanded={isExpanded}
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left transition-colors hover:bg-canvas/60 sm:px-5"
      >
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-canvas text-ink ring-1 ring-line">{icon}</span>
          <h3 className="font-display text-[15px] font-semibold text-ink">{label}</h3>
          {isMac && <span className="hidden font-display text-[12.5px] text-ink-faint sm:inline">Choose your Mac processor type</span>}
        </div>
        <ChevronIcon isExpanded={isExpanded} />
      </button>

      {isExpanded && (
        <div className="divide-y divide-line border-t border-line">
          {rows.map((download) => {
            const info = getArchitectureInfo(platform, download.architecture);
            const recommended = isMac && isRecommendedMac(download, detectedArch);
            return (
              <div key={download.id} className="flex flex-col gap-3 px-4 py-3.5 transition-colors hover:bg-canvas/40 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-5">
                <div className="flex items-center gap-3">
                  {info.chipType && (
                    <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${"bg-canvas text-ink-soft ring-1 ring-line"}`}>
                      <ChipIcon type={info.chipType} />
                    </span>
                  )}
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-display text-[14.5px] font-semibold text-ink">{info.label}</span>
                      {recommended && <RecommendedTag />}
                    </div>
                    <p className="mt-0.5 font-display text-[12.5px] text-ink-faint">
                      {info.subtitle}
                      {download.file_size_formatted && <span> · {download.file_size_formatted}</span>}
                    </p>
                  </div>
                </div>
                <a
                  href={download.file_path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${recommended ? "btn-neutral" : "btn-secondary !border-line"} !h-10 w-full !px-4 !text-[13.5px] sm:w-auto`}
                >
                  <DownloadIcon />
                  Download
                </a>
              </div>
            );
          })}
          {isMac && (
            <div className="bg-canvas/50 px-4 py-3 sm:px-5">
              <MacHelp />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------------ */
/* The hero's platform cards: latest build per platform, Android, iOS.     */
/* ------------------------------------------------------------------------ */

const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=ai.oravo";

/* Hairline device with a voice waveform that plays while the card is on screen. */
function DeviceArt({ kind, idle }: { kind: "laptop" | "phone"; idle?: boolean }) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  const reduceMotion = useReducedMotion();
  const live = inView && !reduceMotion && !idle;
  const bars = kind === "laptop" ? [6, 12, 18, 10, 22, 14, 8, 16, 11, 6] : [6, 14, 20, 12, 8];
  const mid = kind === "laptop" ? 60 : 60;
  const startX = mid - ((bars.length - 1) * 7) / 2;
  return (
    <svg ref={ref} viewBox="0 0 120 64" className="h-16 w-full" fill="none" aria-hidden="true">
      {kind === "laptop" ? (
        <>
          <rect x="26" y="6" width="68" height="44" rx="4" stroke="rgba(51,48,42,0.28)" strokeWidth="1.5" />
          <path d="M16 56h88l-6-6H22z" stroke="rgba(51,48,42,0.28)" strokeWidth="1.5" strokeLinejoin="round" />
        </>
      ) : (
        <>
          <rect x="44" y="3" width="32" height="58" rx="6" stroke="rgba(51,48,42,0.28)" strokeWidth="1.5" />
          <path d="M55 55h10" stroke="rgba(51,48,42,0.28)" strokeWidth="1.5" strokeLinecap="round" />
        </>
      )}
      {bars.map((h, i) => (
        <motion.rect
          key={i}
          x={startX + i * 7 - 1.25}
          width="2.5"
          rx="1.25"
          fill={idle ? "rgba(51,48,42,0.2)" : "var(--o-accent)"}
          initial={false}
          animate={live ? { height: [3, h, 4, h * 0.7, 3], y: [28 - 1.5, 28 - h / 2, 28 - 2, 28 - (h * 0.7) / 2, 28 - 1.5] } : { height: idle ? 3 : h * 0.6, y: 28 - (idle ? 1.5 : (h * 0.6) / 2) }}
          transition={live ? { duration: 1.6 + (i % 3) * 0.2, repeat: Infinity, ease: "easeInOut", delay: i * 0.08 } : { duration: 0.4 }}
        />
      ))}
    </svg>
  );
}

function PlatformCard({
  icon,
  name,
  detail,
  device,
  mine,
  muted,
  index,
  children,
}: {
  icon: React.ReactNode;
  name: string;
  detail: string;
  device: "laptop" | "phone";
  mine?: boolean;
  muted?: boolean;
  index: number;
  children: React.ReactNode;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.62, delay: 0.15 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative flex h-full flex-col rounded-2xl p-5 text-left transition-[transform,box-shadow] duration-300 sm:p-6 ${
        muted
          ? "frame-dotted bg-raised/40"
          : `bg-raised hover:-translate-y-1 ${
              mine
                ? "shadow-[0_0_0_1.5px_var(--o-ink),0_24px_48px_-28px_rgba(51,48,42,0.5)]"
                : "shadow-[0_0_0_1px_var(--o-line),0_18px_40px_-30px_rgba(51,48,42,0.4)] hover:shadow-[0_0_0_1px_rgba(51,48,42,0.25),0_24px_48px_-28px_rgba(51,48,42,0.45)]"
            }`
      }`}
    >
      {mine && (
        <span className="absolute -top-3 left-5 rounded-md bg-ink px-2 py-1 font-display text-[10.5px] font-semibold uppercase tracking-[0.12em] text-paper">
          Your device
        </span>
      )}
      <div className="flex items-center gap-3">
        <span
          className={`flex h-11 w-11 items-center justify-center rounded-xl transition-transform duration-300 group-hover:-rotate-6 ${
            muted ? "bg-canvas text-ink-faint ring-1 ring-line" : "bg-canvas text-ink ring-1 ring-line"
          }`}
        >
          {icon}
        </span>
        <div>
          <h3 className={`font-serif text-[1.35rem] leading-tight ${muted ? "text-ink-soft" : "text-ink"}`}>{name}</h3>
          <p className="font-display text-[12.5px] text-ink-faint">{detail}</p>
        </div>
      </div>
      <div className="my-5 hidden flex-1 items-center justify-center rounded-xl bg-canvas/60 py-3 sm:flex">
        <DeviceArt kind={device} idle={muted} />
      </div>
      <div className="mt-5 flex flex-col gap-2.5 sm:mt-0">{children}</div>
    </motion.div>
  );
}

function Unavailable() {
  return (
    <p className="rounded-lg bg-canvas px-3 py-2.5 font-display text-[12.5px] leading-snug text-ink-soft ring-1 ring-line">
      Downloads are briefly unavailable. Refresh in a moment, or email{" "}
      <a href="mailto:hi@oravo.ai" className="font-semibold text-primary-500 underline-offset-4 hover:underline">
        hi@oravo.ai
      </a>
      .
    </p>
  );
}

export function PlatformCards({ downloads }: { downloads: DownloadData[] }) {
  const detectedArch = useDetectedArchitecture();
  const device = useVisitorDevice();

  const windows = downloads.filter((d) => d.platform === "windows");
  const mac = sortMacDownloads(
    downloads.filter((d) => d.platform === "macos"),
    detectedArch,
  );

  return (
    <div className="grid gap-5 pt-3 sm:grid-cols-2 lg:grid-cols-4">
      <PlatformCard index={0} icon={<WindowsIcon className="h-[18px] w-[18px]" />} name="Windows" detail="64-bit (x64)" device="laptop" mine={device === "windows"}>
        {windows.length === 0 ? (
          <Unavailable />
        ) : (
          windows.map((download) => (
            <a key={download.id} href={download.file_path} target="_blank" rel="noopener noreferrer" className="btn-primary w-full !px-4">
              <DownloadIcon />
              {windows.length > 1 ? `Windows ${download.architecture}` : "Download for Windows"}
            </a>
          ))
        )}
        {windows[0]?.file_size_formatted && <p className="text-center font-display text-[12px] text-ink-faint">{windows[0].file_size_formatted} · .{windows[0].file_extension}</p>}
      </PlatformCard>

      <PlatformCard index={1} icon={<AppleIcon />} name="macOS" detail="Apple Silicon and Intel" device="laptop" mine={device === "macos"}>
        {mac.length === 0 ? (
          <Unavailable />
        ) : (
          <>
            {mac.map((download, i) => {
              const info = getArchitectureInfo("macos", download.architecture);
              const recommended = isRecommendedMac(download, detectedArch);
              // With no detection, the first build (Apple Silicon in the feed) stays the solid button.
              const solid = detectedArch ? recommended : i === 0;
              return (
                <a
                  key={download.id}
                  href={download.file_path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${solid ? "btn-primary" : "btn-secondary !border-line"} w-full !justify-between !px-4`}
                >
                  <span className="flex items-center gap-2">
                    <DownloadIcon />
                    {info.label}
                  </span>
                  <span className={`text-[11.5px] font-medium ${solid ? "text-white/75" : "text-ink-faint"}`}>
                    {recommended ? "Recommended" : download.file_size_formatted ?? ""}
                  </span>
                </a>
              );
            })}
            <MacHelp />
          </>
        )}
      </PlatformCard>

      <PlatformCard index={2} icon={<AndroidIcon />} name="Android" detail="Phones and tablets" device="phone" mine={device === "android"}>
        <a
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackPlayStoreOutbound("download-page")}
          className={`${device === "android" ? "btn-primary" : "btn-secondary !border-line"} w-full !px-4`}
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M7 4.5v15a1 1 0 001.5.86l12.4-7.5a1 1 0 000-1.72L8.5 3.64A1 1 0 007 4.5z" />
          </svg>
          Get it on Google Play
        </a>
        <p className="text-center font-display text-[12px] text-ink-faint">Free on Google Play</p>
      </PlatformCard>

      <PlatformCard index={3} icon={<PhoneIcon />} name="iPhone & iPad" detail="iOS" device="phone" muted mine={device === "ios"}>
        <div className="flex items-center gap-2 rounded-lg bg-canvas px-3 py-2.5 ring-1 ring-line">
          <span className="relative flex h-2 w-2" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand/50 motion-reduce:animate-none" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
          </span>
          <span className="font-display text-[13px] font-semibold text-ink-soft">iOS coming soon</span>
        </div>
        <p className="font-display text-[12px] leading-snug text-ink-faint">Use Oravo on your Mac, PC or Android phone in the meantime.</p>
      </PlatformCard>
    </div>
  );
}

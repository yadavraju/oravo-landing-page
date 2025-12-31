"use client";

import React, { useState, useEffect } from "react";

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

const DownloadIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
    <path d="M8.5 1.5v9.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 11.293V1.5a.5.5 0 0 1 1 0z" />
    <path d="M2 13.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
  </svg>
);

const ChevronIcon = ({ isExpanded }: { isExpanded: boolean }) => (
  <svg
    className={`w-5 h-5 transition-transform duration-200 ${
      isExpanded ? "rotate-180" : ""
    }`}
    viewBox="0 0 20 20"
    fill="currentColor"
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
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="8" y="8" width="8" height="8" rx="1" />
        <path d="M4 9H2M4 12H2M4 15H2M22 9h-2M22 12h-2M22 15h-2M9 4V2M12 4V2M15 4V2M9 22v-2M12 22v-2M15 22v-2" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="5" y="5" width="14" height="14" rx="2" />
      <path d="M9 9h6M9 12h6M9 15h3" strokeLinecap="round" />
      <path d="M5 9H3M5 12H3M5 15H3M21 9h-2M21 12h-2M21 15h-2M9 5V3M12 5V3M15 5V3M9 21v-2M12 21v-2M15 21v-2" strokeLinecap="round" />
    </svg>
  );
};

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

export function PlatformSection({
  platform,
  label,
  icon,
  downloads,
}: {
  platform: string;
  label: string;
  icon: React.ReactNode;
  downloads: any[];
}) {
  const [isExpanded, setIsExpanded] = useState(true);
  const detectedArch = useDetectedArchitecture();

  // For macOS, show special chip-based layout
  if (platform === "macos" && downloads.length > 0) {
    // Sort downloads so the recommended one appears first (only if we detected architecture)
    const sortedDownloads = detectedArch
      ? [...downloads].sort((a, b) => {
          const aIsRecommended = detectedArch === "arm64" ? a.architecture === "arm64" : a.architecture !== "arm64";
          const bIsRecommended = detectedArch === "arm64" ? b.architecture === "arm64" : b.architecture !== "arm64";
          return bIsRecommended ? 1 : aIsRecommended ? -1 : 0;
        })
      : downloads; // Keep original order if no detection

    return (
      <div className="border border-[rgba(55,50,47,0.12)] rounded-xl overflow-hidden">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full px-4 sm:px-6 py-4 bg-[#F7F5F3] flex items-center justify-between hover:bg-[#F0EDE9] transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className="text-[#37322F]">{icon}</div>
            <h3 className="text-base sm:text-lg font-semibold text-[#37322F]">{label}</h3>
          </div>
          <ChevronIcon isExpanded={isExpanded} />
        </button>

        {isExpanded && (
          <div className="bg-white p-4 sm:p-6">
            <p className="text-sm text-[#605A57] mb-4">
              Choose your Mac processor type:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {sortedDownloads.map((download) => {
                const info = getArchitectureInfo(platform, download.architecture);
                const isSilicon = download.architecture === "arm64";

                // Show recommended badge based on detected architecture
                const isRecommended = detectedArch !== null && (
                  (detectedArch === "arm64" && isSilicon) ||
                  (detectedArch === "x64" && !isSilicon)
                );

                return (
                  <a
                    key={download.id}
                    href={download.file_path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group p-4 sm:p-5 rounded-xl border-2 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${
                      isSilicon
                        ? "border-[#FF8C42]/30 bg-gradient-to-br from-[#FFF7ED] to-[#FFEDD5] hover:border-[#FF8C42]"
                        : "border-[#6366F1]/30 bg-gradient-to-br from-[#EEF2FF] to-[#E0E7FF] hover:border-[#6366F1]"
                    }`}
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      {/* Chip Icon */}
                      <div
                        className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0 ${
                          isSilicon
                            ? "bg-[#FF8C42]/20 text-[#FF8C42]"
                            : "bg-[#6366F1]/20 text-[#6366F1]"
                        }`}
                      >
                        <ChipIcon type={info.chipType!} />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h4 className={`font-semibold text-base sm:text-lg ${
                            isSilicon ? "text-[#C2410C]" : "text-[#4338CA]"
                          }`}>
                            {info.label}
                          </h4>
                          {isRecommended && (
                            <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                              isSilicon
                                ? "bg-[#FF8C42]/20 text-[#FF8C42]"
                                : "bg-[#6366F1]/20 text-[#6366F1]"
                            }`}>
                              Recommended
                            </span>
                          )}
                        </div>
                        <p className="text-xs sm:text-sm text-[#605A57] mt-1">
                          {info.subtitle}
                        </p>
                        {download.file_size_formatted && (
                          <p className="text-xs text-[#847971] mt-1">
                            {download.file_size_formatted}
                          </p>
                        )}
                      </div>

                      {/* Download indicator */}
                      <div
                        className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                          isSilicon
                            ? "bg-[#FF8C42] text-white group-hover:bg-[#EA580C]"
                            : "bg-[#6366F1] text-white group-hover:bg-[#4F46E5]"
                        }`}
                      >
                        <DownloadIcon />
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Help text */}
            <div className="mt-4 p-3 bg-[#F7F5F3] rounded-lg">
              <p className="text-xs text-[#605A57]">
                <span className="font-medium">Not sure which to choose?</span>{" "}
                <span className="hidden sm:inline">Click </span>
                <span className="sm:hidden">Tap </span>
                <span className="inline-flex items-center gap-1">
                  <svg className="w-3 h-3 inline" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
                    <path d="M12 12V2" />
                  </svg>
                  → About This Mac
                </span>
                {" "}to check your processor.
              </p>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Linux - Coming Soon (always show this state for now)
  if (platform === "linux") {
    return (
      <div className="border border-[rgba(55,50,47,0.12)] rounded-xl overflow-hidden opacity-75">
        <div className="w-full px-4 sm:px-6 py-4 bg-[#F7F5F3] flex items-center justify-between">
          <div className="flex items-center gap-3 flex-wrap">
            <div className="text-[#847971]">{icon}</div>
            <h3 className="text-base sm:text-lg font-semibold text-[#847971]">{label}</h3>
            <span className="px-2.5 py-1 bg-[#847971]/10 text-[#847971] text-xs font-medium rounded-full">
              Coming Soon
            </span>
          </div>
        </div>
      </div>
    );
  }

  // Default layout for Windows
  return (
    <div className="border border-[rgba(55,50,47,0.12)] rounded-xl overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-4 sm:px-6 py-4 bg-[#F7F5F3] flex items-center justify-between hover:bg-[#F0EDE9] transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="text-[#37322F]">{icon}</div>
          <h3 className="text-base sm:text-lg font-semibold text-[#37322F]">{label}</h3>
        </div>
        <ChevronIcon isExpanded={isExpanded} />
      </button>

      {isExpanded && (
        <div className="bg-white">
          {downloads.map((download, index) => {
            const info = getArchitectureInfo(platform, download.architecture);

            return (
              <div
                key={download.id}
                className={`px-4 sm:px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 hover:bg-[#F7F5F3] transition-colors ${
                  index !== downloads.length - 1
                    ? "border-b border-[rgba(55,50,47,0.06)]"
                    : ""
                }`}
              >
                <div className="flex-1">
                  <div className="text-[#37322F] font-medium text-sm sm:text-base">
                    {info.label}
                  </div>
                  {info.subtitle && (
                    <div className="text-xs sm:text-sm text-[#605A57] mt-0.5">
                      {info.subtitle}
                    </div>
                  )}
                  {download.file_size_formatted && (
                    <div className="text-xs text-[#847971] mt-1">
                      {download.file_size_formatted}
                    </div>
                  )}
                </div>
                <a
                  href={download.file_path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-4 py-2.5 bg-linear-to-b from-[#6366F1] to-[#4F46E5] hover:from-[#5558E3] hover:to-[#4338CA] text-white text-sm font-medium rounded-lg flex items-center justify-center gap-2 shadow-[0px_0px_0px_2.5px_rgba(255,255,255,0.08)_inset,0px_4px_12px_rgba(99,102,241,0.4)] transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  <DownloadIcon />
                  Download
                </a>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

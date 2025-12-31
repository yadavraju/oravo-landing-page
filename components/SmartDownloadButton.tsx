"use client";

import React, { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { fetchDownloadUrls, getLatestDownloads, DownloadData } from "@/lib/downloadApi";

type DetectedPlatform = "macos" | "windows" | "linux" | null;
type DetectedArch = "arm64" | "x64" | null;

interface DetectionResult {
  platform: DetectedPlatform;
  arch: DetectedArch;
}

// Detect user's OS and architecture
function detectPlatformAndArch(): DetectionResult {
  if (typeof window === "undefined") {
    return { platform: null, arch: null };
  }

  const userAgent = navigator.userAgent.toLowerCase();
  const platform = navigator.platform?.toLowerCase() || "";

  // Detect OS
  let detectedPlatform: DetectedPlatform = null;
  if (platform.includes("mac") || userAgent.includes("mac")) {
    detectedPlatform = "macos";
  } else if (platform.includes("win") || userAgent.includes("win")) {
    detectedPlatform = "windows";
  } else if (platform.includes("linux") || userAgent.includes("linux")) {
    detectedPlatform = "linux";
  }

  // Detect architecture (mainly for macOS)
  let detectedArch: DetectedArch = null;

  if (detectedPlatform === "macos") {
    // Method 1: Check WebGL renderer (most reliable for Mac)
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (gl) {
        const debugInfo = (gl as WebGLRenderingContext).getExtension("WEBGL_debug_renderer_info");
        if (debugInfo) {
          const renderer = (gl as WebGLRenderingContext).getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
          if (renderer && (renderer.includes("Apple M") || renderer.includes("Apple GPU"))) {
            detectedArch = "arm64";
          } else if (renderer && (renderer.includes("Intel") || renderer.includes("AMD") || renderer.includes("Radeon"))) {
            detectedArch = "x64";
          }
        }
      }
    } catch {
      // WebGL detection failed
    }
  } else if (detectedPlatform === "windows") {
    // Windows is typically x64
    detectedArch = "x64";
  }

  return { platform: detectedPlatform, arch: detectedArch };
}

// Find the best matching download for the detected platform/arch
function findBestDownload(
  downloads: DownloadData[],
  platform: DetectedPlatform,
  arch: DetectedArch
): DownloadData | null {
  if (!platform || downloads.length === 0) return null;

  // Filter by platform
  const platformDownloads = downloads.filter((d) => d.platform === platform);
  if (platformDownloads.length === 0) return null;

  // For macOS, try to match architecture
  if (platform === "macos" && arch) {
    const archMatch = platformDownloads.find((d) => d.architecture === arch);
    if (archMatch) return archMatch;
  }

  // For Windows, just return the first match (usually x64)
  if (platform === "windows") {
    return platformDownloads[0];
  }

  // Fallback: return first download for the platform
  return platformDownloads[0];
}

interface SmartDownloadButtonProps {
  className?: string;
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "text";
  showIcon?: boolean;
}

export function SmartDownloadButton({
  className = "",
  children,
  variant = "primary",
  showIcon = true,
}: SmartDownloadButtonProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = useCallback(async () => {
    setIsLoading(true);

    try {
      // Detect platform and architecture
      const { platform, arch } = detectPlatformAndArch();

      // If we can't detect platform, go to download page
      if (!platform) {
        router.push("/download");
        return;
      }

      // For macOS without architecture detection, go to download page
      if (platform === "macos" && !arch) {
        router.push("/download");
        return;
      }

      // Fetch download URLs and get only latest version
      const response = await fetchDownloadUrls();
      const latestDownloads = getLatestDownloads(response.data);

      // Find the best matching download from latest version
      const bestDownload = findBestDownload(latestDownloads, platform, arch);

      if (bestDownload) {
        // Trigger download
        window.open(bestDownload.file_path, "_blank");
      } else {
        // No matching download found, go to download page
        router.push("/download");
      }
    } catch (error) {
      console.error("Error during smart download:", error);
      // On error, fallback to download page
      router.push("/download");
    } finally {
      setIsLoading(false);
    }
  }, [router]);

  const baseStyles = {
    primary:
      "bg-gradient-to-b from-[#1877F2] to-[#166FE5] hover:from-[#1570E8] hover:to-[#1466D8] text-white shadow-[0px_0px_0px_2.5px_rgba(255,255,255,0.08)_inset,0px_4px_12px_rgba(24,119,242,0.4)]",
    secondary:
      "bg-white border border-[#E0DEDB] text-[#37322F] hover:bg-[#F7F5F3]",
    text: "text-[#1877F2] hover:text-[#166FE5]",
  };

  const DownloadIcon = () => (
    <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
      <path d="M8.5 1.5v9.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 11.293V1.5a.5.5 0 0 1 1 0z" />
      <path d="M2 13.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
    </svg>
  );

  const LoadingSpinner = () => (
    <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );

  return (
    <button
      onClick={handleClick}
      disabled={isLoading}
      className={`
        inline-flex items-center justify-center gap-2 font-medium rounded-full
        transition-all duration-300 hover:scale-105 active:scale-95
        disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100
        ${baseStyles[variant]}
        ${className}
      `}
    >
      {showIcon && (isLoading ? <LoadingSpinner /> : <DownloadIcon />)}
      {children || "Download"}
    </button>
  );
}

// Text link variant for header navigation
export function DownloadLink({
  className = "",
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const router = useRouter();

  const handleClick = () => {
    router.push("/download");
  };

  return (
    <button
      onClick={handleClick}
      className={`text-[#6366F1] font-semibold hover:text-[#4F46E5] transition-colors ${className}`}
    >
      {children || "Download"}
    </button>
  );
}

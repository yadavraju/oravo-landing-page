"use client";

import { useState, useCallback } from "react";
import { fetchDownloadUrls, getLatestDownloads, DownloadData } from "@/lib/downloadApi";
import { motion } from "framer-motion";

type DetectedPlatform = "macos" | "windows" | "linux" | null;
type DetectedArch = "arm64" | "x64" | null;

function detectMacArchitecture(): DetectedArch {
  try {
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    if (gl) {
      const debugInfo = (gl as WebGLRenderingContext).getExtension("WEBGL_debug_renderer_info");
      if (debugInfo) {
        const renderer = (gl as WebGLRenderingContext).getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
        if (renderer && (renderer.includes("Apple M") || renderer.includes("Apple GPU"))) {
          return "arm64";
        }
        if (renderer && (renderer.includes("Intel") || renderer.includes("AMD") || renderer.includes("Radeon"))) {
          return "x64";
        }
      }
    }
  } catch {
    // WebGL detection failed
  }
  return null;
}

function findBestDownload(
  downloads: DownloadData[],
  platform: DetectedPlatform,
  arch: DetectedArch
): DownloadData | null {
  if (!platform || downloads.length === 0) return null;

  const platformDownloads = downloads.filter((d) => d.platform === platform);
  if (platformDownloads.length === 0) return null;

  if (platform === "macos" && arch) {
    const archMatch = platformDownloads.find((d) => d.architecture === arch);
    if (archMatch) return archMatch;
  }

  return platformDownloads[0];
}

export default function ImprovedDownloadHero() {
  const [loadingPlatform, setLoadingPlatform] = useState<"mac" | "windows" | "android" | null>(null);

  const handleMacDownload = useCallback(async () => {
    setLoadingPlatform("mac");
    try {
      const arch = detectMacArchitecture();
      const response = await fetchDownloadUrls();
      const latestDownloads = getLatestDownloads(response.data);
      const bestDownload = findBestDownload(latestDownloads, "macos", arch);

      if (bestDownload) {
        if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
          (window as any).gtag_report_conversion(bestDownload.file_path);
        } else {
          window.open(bestDownload.file_path, "_blank");
        }
      } else {
        window.location.assign("/download");
      }
    } catch (error) {
      console.error("Mac download error:", error);
      window.location.assign("/download");
    } finally {
      setLoadingPlatform(null);
    }
  }, []);

  const handleWindowsDownload = useCallback(async () => {
    setLoadingPlatform("windows");
    try {
      const response = await fetchDownloadUrls();
      const latestDownloads = getLatestDownloads(response.data);
      const bestDownload = findBestDownload(latestDownloads, "windows", "x64");

      if (bestDownload) {
        if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
          (window as any).gtag_report_conversion(bestDownload.file_path);
        } else {
          window.open(bestDownload.file_path, "_blank");
        }
      } else {
        window.location.assign("/download");
      }
    } catch (error) {
      console.error("Windows download error:", error);
      window.location.assign("/download");
    } finally {
      setLoadingPlatform(null);
    }
  }, []);

  const handleAndroidDownload = useCallback(() => {
    setLoadingPlatform("android");
    const playStoreUrl = "https://play.google.com/store/apps/details?id=ai.oravo";

    if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
      (window as any).gtag_report_conversion(playStoreUrl);
    } else {
      window.open(playStoreUrl, "_blank");
    }
    setLoadingPlatform(null);
  }, []);

  const LoadingSpinner = () => (
    <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
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
    <div className="w-full max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Main Content Container */}
      <div className="relative">
        {/* Background Gradient Orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center text-center gap-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/50 rounded-full"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-sm font-medium text-gray-700">5,000 words free • No credit card</span>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            <h1 className="text-[48px] sm:text-[60px] md:text-[72px] font-bold leading-[1.1] tracking-tight">
              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                Stop typing.
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                Start talking.
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-[600px] mx-auto">
              Install in 30 seconds. Type 4× faster with AI-powered voice dictation.
            </p>
          </motion.div>

          {/* Download Buttons Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full max-w-[800px] mt-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Desktop Card */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-[0px_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0px_12px_40px_rgba(0,0,0,0.12)] transition-all duration-300">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <h3 className="text-sm font-semibold text-gray-900">Desktop</h3>
                      <p className="text-xs text-gray-500">Mac & Windows</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <button
                      onClick={handleMacDownload}
                      disabled={loadingPlatform !== null}
                      className="group w-full h-12 px-4 bg-gradient-to-b from-[#1877F2] to-[#166FE5] hover:from-[#1570E8] hover:to-[#1466D8] rounded-xl flex items-center justify-between transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      <div className="flex items-center gap-2">
                        {loadingPlatform === "mac" ? (
                          <LoadingSpinner />
                        ) : (
                          <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                          </svg>
                        )}
                        <span className="text-sm font-medium text-white">Mac</span>
                      </div>
                      <svg className="w-4 h-4 text-white/60 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>

                    <button
                      onClick={handleWindowsDownload}
                      disabled={loadingPlatform !== null}
                      className="group w-full h-12 px-4 bg-white border border-gray-200 hover:border-gray-300 hover:bg-gray-50 rounded-xl flex items-center justify-between transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      <div className="flex items-center gap-2">
                        {loadingPlatform === "windows" ? (
                          <LoadingSpinner />
                        ) : (
                          <svg className="w-4 h-4 text-[#0078D4]" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
                          </svg>
                        )}
                        <span className="text-sm font-medium text-gray-700">Windows</span>
                      </div>
                      <svg className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Mobile Card */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-[0px_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0px_12px_40px_rgba(0,0,0,0.12)] transition-all duration-300">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <h3 className="text-sm font-semibold text-gray-900">Mobile</h3>
                      <p className="text-xs text-gray-500">Android & iOS</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <button
                      onClick={handleAndroidDownload}
                      disabled={loadingPlatform !== null}
                      className="group w-full h-12 px-4 bg-gradient-to-b from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 rounded-xl flex items-center justify-between transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      <div className="flex items-center gap-2">
                        {loadingPlatform === "android" ? (
                          <LoadingSpinner />
                        ) : (
                          <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M1.815 11.456c-.216 0-.39.174-.39.39v4.308c0 .216.174.39.39.39.216 0 .39-.174.39-.39v-4.308c0-.216-.174-.39-.39-.39zm20.37 0c-.216 0-.39.174-.39.39v4.308c0 .216.174.39.39.39.216 0 .39-.174.39-.39v-4.308c0-.216-.174-.39-.39-.39z"/>
                          </svg>
                        )}
                        <span className="text-sm font-medium text-white">Google Play</span>
                      </div>
                      <svg className="w-4 h-4 text-white/60 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>

                    <button
                      disabled
                      className="w-full h-12 px-4 bg-gray-50 border border-gray-200 rounded-xl flex items-center justify-between opacity-50 cursor-not-allowed"
                    >
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                        </svg>
                        <span className="text-sm font-medium text-gray-400">App Store Soon</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500"
          >
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Free 5,000 words</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span>No credit card</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>30 second setup</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

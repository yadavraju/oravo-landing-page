"use client";

import React, { useState } from "react";
import { PlatformSection } from "./PlatformSection";
import type { DownloadData } from "@/lib/downloadApi";

// Icons for platforms
const AppleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
  </svg>
);

const WindowsIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 5.45v6.38l8.04.87V5.45zm8.04 7.38L3 13.7v6.38l8.04 1.17zm.96-7.69v7.31L21.96 13V3zm0 15.73V13.7L21.96 13v10z" />
  </svg>
);

const ChevronIcon = ({ isExpanded }: { isExpanded: boolean }) => (
  <svg
    className={`w-5 h-5 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
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

function groupByPlatform(downloads: DownloadData[]) {
  const grouped: Record<string, DownloadData[]> = {
    macos: [],
    windows: [],
    linux: [],
  };

  downloads.forEach((item) => {
    if (grouped[item.platform]) {
      grouped[item.platform].push(item);
    }
  });

  return grouped;
}

interface VersionSectionProps {
  version: string;
  downloads: DownloadData[];
  isLatest: boolean;
  defaultExpanded?: boolean;
}

export function VersionSection({
  version,
  downloads,
  isLatest,
  defaultExpanded = false,
}: VersionSectionProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const groupedDownloads = groupByPlatform(downloads);

  // Get release date from first download
  const releaseDate = downloads[0]?.formatted_date || "";

  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-[rgba(55,50,47,0.12)] overflow-hidden">
      {/* Version Header - Clickable */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-6 md:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 hover:bg-white/80 transition-colors"
      >
        <div className="flex items-center gap-3">
          <h2 className="text-2xl lg:text-3xl font-normal text-[#37322F] font-serif">
            {version}
          </h2>
          {isLatest && (
            <span className="px-3 py-1 bg-gradient-to-b from-[#1877F2] to-[#166FE5] text-white text-xs font-semibold rounded-full">
              Latest
            </span>
          )}
        </div>
        <div className="flex items-center gap-4 self-start sm:self-auto">
          {releaseDate && (
            <span className="text-[#847971] text-sm">{releaseDate}</span>
          )}
          <ChevronIcon isExpanded={isExpanded} />
        </div>
      </button>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0">
          {/* Download Sections */}
          <div className="space-y-4">
            {/* macOS Section */}
            {groupedDownloads.macos.length > 0 && (
              <PlatformSection
                platform="macos"
                label="macOS"
                icon={<AppleIcon />}
                downloads={groupedDownloads.macos}
              />
            )}

            {/* Windows Section */}
            {groupedDownloads.windows.length > 0 && (
              <PlatformSection
                platform="windows"
                label="Windows"
                icon={<WindowsIcon />}
                downloads={groupedDownloads.windows}
              />
            )}

            {/* Linux Section */}
            {groupedDownloads.linux.length > 0 && (
              <PlatformSection
                platform="linux"
                label="Linux"
                downloads={groupedDownloads.linux}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

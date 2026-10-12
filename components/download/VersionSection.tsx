"use client";

import React, { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { AppleIcon, PlatformSection, WindowsIcon } from "./PlatformSection";
import type { DownloadData } from "@/lib/downloadApi";

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
  const reduceMotion = useReducedMotion();
  const groupedDownloads = groupByPlatform(downloads);

  // Get release date from first download
  const releaseDate = downloads[0]?.formatted_date || "";
  const platformCount = ["macos", "windows"].filter((p) => groupedDownloads[p].length > 0).length;

  return (
    <div
      className={`overflow-hidden rounded-2xl transition-shadow duration-300 ${
        isExpanded ? "bg-raised shadow-[0_0_0_1px_var(--o-line),0_20px_40px_-30px_rgba(51,48,42,0.4)]" : "bg-raised/60 shadow-[0_0_0_1px_var(--o-line)]"
      }`}
    >
      {/* Version Header - Clickable */}
      <button
        type="button"
        aria-expanded={isExpanded}
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-canvas/50 sm:px-7"
      >
        <div className="flex min-w-0 flex-wrap items-center gap-x-3 gap-y-1">
          <h3 className="font-serif text-[1.5rem] leading-none tracking-[-0.015em] text-ink sm:text-[1.7rem]">{version}</h3>
          {isLatest && (
            <span className="inline-flex items-center gap-1.5 rounded-md bg-brand-soft px-2 py-1 font-display text-[11px] font-semibold text-brand">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
              Latest
            </span>
          )}
          <span className="hidden font-display text-[12.5px] text-ink-faint sm:inline">
            {platformCount === 2 ? "Mac and Windows" : groupedDownloads.macos.length ? "Mac" : "Windows"}
          </span>
        </div>
        <div className="flex shrink-0 items-center gap-4">
          {releaseDate && <span className="font-display text-[12.5px] tabular-nums text-ink-faint">{releaseDate}</span>}
          <ChevronIcon isExpanded={isExpanded} />
        </div>
      </button>

      {/* Expanded Content */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            key="content"
            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="space-y-3 px-5 pb-5 sm:px-7 sm:pb-7">
              {/* macOS Section */}
              {groupedDownloads.macos.length > 0 && (
                <PlatformSection platform="macos" label="macOS" icon={<AppleIcon className="h-4 w-4" />} downloads={groupedDownloads.macos} />
              )}

              {/* Windows Section */}
              {groupedDownloads.windows.length > 0 && (
                <PlatformSection platform="windows" label="Windows" icon={<WindowsIcon className="h-3.5 w-3.5" />} downloads={groupedDownloads.windows} />
              )}

              {/* Linux Section */}
              {groupedDownloads.linux.length > 0 && (
                <PlatformSection platform="linux" label="Linux" downloads={groupedDownloads.linux} />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

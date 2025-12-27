'use client';

import React, { useState } from 'react';

const DownloadIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
    <path d="M8.5 1.5v9.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 11.293V1.5a.5.5 0 0 1 1 0z"/>
    <path d="M2 13.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
  </svg>
);

const ChevronIcon = ({ isExpanded }: { isExpanded: boolean }) => (
  <svg
    className={`w-5 h-5 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
);

function getArchitectureLabel(architecture: string): string {
  const labels: Record<string, string> = {
    'arm64': 'Mac (ARM64)',
    'Intel_x86_64': 'Mac (x64)',
    'x64': 'Windows (x64) (System)',
    'x86_64': 'Linux .deb (ARM64)',
  };
  return labels[architecture] || architecture;
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

  return (
    <div className="border border-[rgba(55,50,47,0.12)] rounded-xl overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-6 py-4 bg-[#F7F5F3] flex items-center justify-between hover:bg-[#F0EDE9] transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="text-[#37322F]">{icon}</div>
          <h3 className="text-lg font-semibold text-[#37322F]">{label}</h3>
        </div>
        <ChevronIcon isExpanded={isExpanded} />
      </button>

      {isExpanded && (
        <div className="bg-white">
          {downloads.map((download, index) => (
            <div
              key={download.id}
              className={`px-6 py-4 flex items-center justify-between hover:bg-[#F7F5F3] transition-colors ${
                index !== downloads.length - 1 ? 'border-b border-[rgba(55,50,47,0.06)]' : ''
              }`}
            >
              <div className="flex-1">
                <div className="text-[#37322F] font-medium">
                  {getArchitectureLabel(download.architecture)}
                </div>
                {download.file_size_formatted && (
                  <div className="text-sm text-[#605A57] mt-1">
                    {download.file_size_formatted}
                  </div>
                )}
              </div>
              <a
                href={download.file_path}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gradient-to-b from-[#6366F1] to-[#4F46E5] hover:from-[#5558E3] hover:to-[#4338CA] text-white text-sm font-medium rounded-lg flex items-center gap-2 shadow-[0px_0px_0px_2.5px_rgba(255,255,255,0.08)_inset,0px_4px_12px_rgba(99,102,241,0.4)] transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <DownloadIcon />
                Download
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

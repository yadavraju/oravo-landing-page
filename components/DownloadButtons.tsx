"use client";

export default function DownloadButtons() {
  return (
    <div className="w-full max-w-[650px] lg:w-[650px] flex flex-col justify-center items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 relative z-10">
      <div className="backdrop-blur-[8.25px] flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
        {/* Mac Download Button */}
        <button className="group relative h-12 px-8 bg-gradient-to-b from-[#6366F1] to-[#4F46E5] hover:from-[#5558E3] hover:to-[#4338CA] shadow-[0px_0px_0px_2.5px_rgba(255,255,255,0.08)_inset,0px_4px_12px_rgba(99,102,241,0.4)] overflow-hidden rounded-full flex items-center gap-3 transition-all duration-300 hover:scale-105 active:scale-95">
          {/* Glossy overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/10 pointer-events-none"></div>
          {/* Apple logo */}
          <svg
            className="w-5 h-5 relative z-10"
            viewBox="0 0 24 24"
            fill="white"
          >
            <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
          </svg>
          <span className="text-white text-base font-medium leading-5 font-sans relative z-10">
            Download for Mac
          </span>
        </button>

        {/* Windows Download Button */}
        <button className="group relative h-12 px-8 bg-gradient-to-b from-white to-gray-100 hover:from-gray-50 hover:to-gray-200 shadow-[0px_0px_0px_2.5px_rgba(0,0,0,0.05)_inset,0px_4px_12px_rgba(0,0,0,0.1)] overflow-hidden rounded-full flex items-center gap-3 transition-all duration-300 hover:scale-105 active:scale-95 border border-gray-200">
          {/* Glossy overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-black/5 pointer-events-none"></div>
          {/* Windows logo */}
          <svg
            className="w-5 h-5 relative z-10"
            viewBox="0 0 24 24"
            fill="#0078D4"
          >
            <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
          </svg>
          <span className="text-gray-800 text-base font-medium leading-5 font-sans relative z-10">
            Download for Windows
          </span>
        </button>
      </div>
    </div>
  );
}

"use client";

import { useSearchParams, usePathname } from "next/navigation";
import { Suspense } from "react";

function ModeToggleInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const mode = searchParams.get("mode") === "agent" ? "agent" : "human";

  const switchMode = (newMode: "human" | "agent") => {
    if (newMode === "agent") {
      window.location.href = `${pathname}?mode=agent`;
    } else {
      window.location.href = pathname;
    }
  };

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-9999">
      <div className="flex items-center bg-[#1a1a1a] rounded-full p-[3px] shadow-[0_4px_16px_rgba(0,0,0,0.3)]">
        <button
          type="button"
          onClick={() => switchMode("human")}
          className={`px-3 py-1 rounded-full text-[11px] font-medium transition-all duration-300 cursor-pointer ${
            mode === "human"
              ? "bg-[#333] text-white"
              : "text-[#888] hover:text-[#aaa]"
          }`}
        >
          human
        </button>
        <button
          type="button"
          onClick={() => switchMode("agent")}
          className={`px-3 py-1 rounded-full text-[11px] font-medium transition-all duration-300 cursor-pointer ${
            mode === "agent"
              ? "bg-[#333] text-white"
              : "text-[#888] hover:text-[#aaa]"
          }`}
        >
          agent
        </button>
      </div>
    </div>
  );
}

export default function ModeToggleFAB() {
  return (
    <Suspense fallback={null}>
      <ModeToggleInner />
    </Suspense>
  );
}

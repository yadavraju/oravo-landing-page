"use client";

import { usePathname } from "next/navigation";
import Logo from "./Logo";

export function Header() {
  const pathname = usePathname();
  const onNotetaker = pathname.startsWith("/notetaker");

  const productTab = (href: string, label: string, active: boolean) => (
    <a
      href={href}
      aria-current={active ? "page" : undefined}
      className={`relative flex min-w-[88px] items-center justify-center rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200 sm:min-w-[104px] sm:px-5 sm:text-[13px] ${
        active
          ? "bg-white text-[#292524] shadow-[0_2px_10px_rgba(55,50,47,0.11),0_0_0_1px_rgba(55,50,47,0.05)]"
          : "text-[#847971] hover:text-[#37322F]"
      }`}
    >
      {label}
    </a>
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex h-[72px] items-center justify-center border-b border-[rgba(55,50,47,0.10)] bg-[#F7F5F3]/90 px-4 backdrop-blur-xl sm:h-[82px] sm:px-6">
      <div className="flex w-full max-w-[1060px] items-center justify-between gap-3">
        <a href="/" aria-label="Oravo home" className="flex shrink-0 items-center gap-1.5">
          <Logo />
          <span className="font-sans text-base font-semibold text-[#2F3037] sm:text-lg">oravo</span>
        </a>

        <nav aria-label="Oravo products" className="absolute left-1/2 -translate-x-1/2">
          <div className="flex items-center rounded-full bg-[#ECE8E4] p-1 shadow-[inset_0_0_0_1px_rgba(55,50,47,0.06)]">
            {productTab("/", "Dictation", !onNotetaker)}
            {productTab("/notetaker", "Notetaker", onNotetaker)}
          </div>
        </nav>

        <a
          href={onNotetaker ? "#experience" : "/download"}
          className="hidden shrink-0 rounded-full bg-[#292524] px-5 py-2.5 text-xs font-semibold text-white transition-transform hover:scale-[1.02] sm:inline-flex"
        >
          {onNotetaker ? "See how it works" : "Download"}
        </a>
        <div className="w-[54px] sm:hidden" aria-hidden="true" />
      </div>
    </header>
  );
}

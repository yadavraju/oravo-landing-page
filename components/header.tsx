"use client";

import { usePathname } from "next/navigation";
import Logo from "./Logo";

const actionBase = "inline-flex items-center justify-center rounded-full border px-4 py-2 text-[11px] font-bold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.32),0_8px_18px_rgba(55,50,47,0.14)] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0";

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

  const actions = (
    <div className="flex items-center gap-2">
      <a
        href="/download"
        className={`${actionBase} border-[#FF9453] bg-gradient-to-b from-[#FF964F] to-[#FF6B1A] shadow-[inset_0_1px_0_rgba(255,255,255,0.38),0_8px_20px_rgba(255,107,26,0.26)]`}
      >
        Download
      </a>
      <a
        href="/how-to-use"
        className={`${actionBase} border-[#4D9BFF] bg-gradient-to-b from-[#4598FF] to-[#1877F2] shadow-[inset_0_1px_0_rgba(255,255,255,0.34),0_8px_20px_rgba(24,119,242,0.24)]`}
      >
        How to use
      </a>
    </div>
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex h-[122px] items-start justify-center border-b border-[rgba(55,50,47,0.10)] bg-[#F7F5F3]/92 px-4 backdrop-blur-xl md:h-[82px] md:items-center sm:px-6">
      <div className="flex h-[72px] w-full max-w-[1120px] items-center justify-between gap-3 md:h-auto">
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

        <div className="hidden shrink-0 md:block">{actions}</div>
        <div className="w-[54px] md:hidden" aria-hidden="true" />
      </div>
      <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 md:hidden">{actions}</div>
    </header>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

const actionBase = "inline-flex items-center justify-center rounded-full border px-4 py-2 text-[11px] font-bold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.36),0_3px_0_rgba(55,50,47,0.13),0_8px_18px_rgba(55,50,47,0.12)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_4px_0_rgba(55,50,47,0.12),0_10px_22px_rgba(55,50,47,0.15)] active:translate-y-[2px] active:shadow-[inset_0_1px_0_rgba(255,255,255,0.28),0_1px_0_rgba(55,50,47,0.14),0_4px_10px_rgba(55,50,47,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1877F2] focus-visible:ring-offset-2";

export function Header() {
  const pathname = usePathname();
  const onDictation = pathname === "/";
  const onNotetaker = pathname.startsWith("/notetaker");
  const onMobile = pathname.startsWith("/mobile");
  const [menuOpen, setMenuOpen] = useState(false);
  const [productMenuOpen, setProductMenuOpen] = useState(false);
  const shellRef = useRef<HTMLDivElement>(null);
  const firstMenuLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => { setMenuOpen(false); setProductMenuOpen(false); }, [pathname]);
  useEffect(() => {
    if (!menuOpen && !productMenuOpen) return;
    if (menuOpen) firstMenuLinkRef.current?.focus();
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setMenuOpen(false); setProductMenuOpen(false); }
    };
    const outside = (event: PointerEvent) => {
      if (!shellRef.current?.contains(event.target as Node)) { setMenuOpen(false); setProductMenuOpen(false); }
    };
    document.addEventListener("keydown", close);
    document.addEventListener("pointerdown", outside);
    return () => { document.removeEventListener("keydown", close); document.removeEventListener("pointerdown", outside); };
  }, [menuOpen, productMenuOpen]);

  const productTab = (href: string, label: string, active: boolean) => (
    <a href={href} aria-current={active ? "page" : undefined} className={`relative flex min-w-[76px] items-center justify-center rounded-full px-3 py-2 text-[11px] font-semibold transition-all duration-300 sm:min-w-[96px] sm:px-4 sm:text-xs ${active ? "bg-white text-[#292524] shadow-[0_2px_9px_rgba(55,50,47,0.12),inset_0_1px_0_white]" : "text-[#847971] hover:text-[#37322F]"}`}>{label}</a>
  );

  const mobileLinkClass = (active: boolean) => `flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-semibold transition-colors ${active ? "bg-white text-[#292524] shadow-sm" : "text-[#605A57] hover:bg-white/70 hover:text-[#292524]"}`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex h-[76px] items-center justify-center px-4 sm:h-[88px] sm:px-6">
      <div className="pointer-events-none absolute inset-x-0 top-1/2 border-t border-[rgba(55,50,47,0.10)] shadow-[0_1px_0_white]" />
      <div ref={shellRef} className="relative z-10 flex h-[52px] w-full max-w-[920px] items-center justify-between gap-2 rounded-full border border-white/90 bg-[#F7F5F3]/94 px-3 shadow-[0_2px_0_rgba(55,50,47,0.08),0_12px_32px_rgba(55,50,47,0.10),inset_0_0_0_1px_rgba(55,50,47,0.05)] backdrop-blur-xl sm:px-4">
        <a href="/" aria-label="Oravo home" className="flex shrink-0 items-center gap-1.5 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1877F2]"><Logo /><span className="font-sans text-sm font-semibold text-[#2F3037] sm:text-lg">oravo</span></a>

        <nav aria-label="Oravo products" className="absolute left-1/2 -translate-x-1/2">
          <div className="flex items-center rounded-full border border-[rgba(55,50,47,0.05)] bg-[#ECE8E4] p-1 shadow-[inset_0_1px_2px_rgba(55,50,47,0.06)]">
            {productTab("/", "Dictation", onDictation)}
            {productTab("/notetaker", "Notetaker", onNotetaker)}
          </div>
        </nav>

        <div className="hidden shrink-0 items-center gap-2 md:flex">
          <div className="flex items-center gap-2">
            <a href="/download" className={`${actionBase} border-[#FF9453] bg-gradient-to-b from-[#FF964F] to-[#FF6B1A]`}>Download</a>
            <a href="/how-to-use" className={`${actionBase} border-[#4D9BFF] bg-gradient-to-b from-[#4598FF] to-[#1877F2]`}>How to use</a>
          </div>
          <button type="button" aria-label={productMenuOpen ? "Close product menu" : "Open product menu"} aria-expanded={productMenuOpen} aria-controls="product-destinations" onClick={() => { setProductMenuOpen((open) => !open); setMenuOpen(false); }} className="flex h-9 items-center justify-center gap-1.5 rounded-full border border-white bg-gradient-to-b from-white to-[#F0ECE8] px-3 text-[11px] font-bold text-[#49423D] shadow-[inset_0_1px_0_white,0_2px_0_rgba(55,50,47,0.10),0_7px_16px_rgba(55,50,47,0.11)] transition-all hover:-translate-y-0.5 active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1877F2]">
            Products
            <svg aria-hidden="true" viewBox="0 0 20 20" className={`h-3.5 w-3.5 transition-transform ${productMenuOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 8 4 4 4-4" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
        </div>

        <button type="button" aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen} aria-controls="mobile-product-actions" onClick={() => { setMenuOpen((open) => !open); setProductMenuOpen(false); }} className="flex h-9 w-9 shrink-0 flex-col items-center justify-center gap-1 rounded-full border border-white bg-[#ECE8E4] shadow-[0_2px_0_rgba(55,50,47,0.10),0_6px_14px_rgba(55,50,47,0.10)] transition-transform active:translate-y-px md:hidden">
          <span className={`h-0.5 w-4 bg-[#37322F] transition-transform ${menuOpen ? "translate-y-1.5 rotate-45" : ""}`} /><span className={`h-0.5 w-4 bg-[#37322F] transition-opacity ${menuOpen ? "opacity-0" : ""}`} /><span className={`h-0.5 w-4 bg-[#37322F] transition-transform ${menuOpen ? "-translate-y-1.5 -rotate-45" : ""}`} />
        </button>

        {productMenuOpen && (
          <div id="product-destinations" className="absolute right-0 top-[calc(100%+10px)] hidden w-[250px] rounded-[22px] border border-white bg-[#F7F5F3]/98 p-3 shadow-[0_2px_0_rgba(55,50,47,0.08),0_20px_45px_rgba(55,50,47,0.18),inset_0_0_0_1px_rgba(55,50,47,0.05)] backdrop-blur-xl md:block">
            <p className="px-2 pb-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#9A9089]">Products</p>
            {[
              ["/", "Dictation", "Voice typing in every app", onDictation, "M5 4h10v12H5z M8 7h4 M8 10h4 M8 13h2"],
              ["/notetaker", "Notetaker", "Meeting notes in seconds", onNotetaker, "M4 5h12v10H4z M7 8h6 M7 11h4"],
              ["/mobile", "Mobile App", "Oravo while you are moving", onMobile, "M7 3h6v14H7z M9 14h2"],
            ].map(([href, label, detail, active, icon]) => (
              <a key={href as string} href={href as string} aria-current={active ? "page" : undefined} className={`group flex items-start gap-3 rounded-2xl px-3 py-3 transition-all ${active ? "bg-white shadow-[0_2px_0_rgba(55,50,47,0.06),0_7px_16px_rgba(55,50,47,0.07)]" : "hover:bg-white/70"}`}>
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-[#E2DDD8] bg-white text-[#F97316] shadow-sm"><svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7"><path d={icon as string} strokeLinecap="round" strokeLinejoin="round" /></svg></span>
                <span><span className="block text-sm font-bold text-[#37322F]">{label as string}</span><span className="mt-0.5 block text-xs font-medium text-[#847971]">{detail as string}</span></span>
              </a>
            ))}
          </div>
        )}

        {menuOpen && (
          <div id="mobile-product-actions" role="menu" aria-label="Product navigation and actions" className="absolute right-0 top-[calc(100%+10px)] w-[240px] rounded-[22px] border border-white bg-[#F7F5F3]/98 p-3 shadow-[0_2px_0_rgba(55,50,47,0.08),0_20px_45px_rgba(55,50,47,0.18),inset_0_0_0_1px_rgba(55,50,47,0.05)] backdrop-blur-xl md:hidden">
            <p className="px-2 pb-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#9A9089]">Products</p>
            <a ref={firstMenuLinkRef} role="menuitem" href="/" aria-current={onDictation ? "page" : undefined} onClick={() => setMenuOpen(false)} className={mobileLinkClass(onDictation)}>Dictation</a>
            <a role="menuitem" href="/notetaker" aria-current={onNotetaker ? "page" : undefined} onClick={() => setMenuOpen(false)} className={mobileLinkClass(onNotetaker)}>Notetaker</a>
            <a role="menuitem" href="/mobile" aria-current={onMobile ? "page" : undefined} onClick={() => setMenuOpen(false)} className={mobileLinkClass(onMobile)}>Mobile App</a>
            <div className="my-3 border-t border-[rgba(55,50,47,0.10)]" />
            <div className="grid gap-2"><a role="menuitem" href="/download" onClick={() => setMenuOpen(false)} className={`${actionBase} w-full border-[#FF9453] bg-gradient-to-b from-[#FF964F] to-[#FF6B1A] py-3 text-xs`}>Download</a><a role="menuitem" href="/how-to-use" onClick={() => setMenuOpen(false)} className={`${actionBase} w-full border-[#4D9BFF] bg-gradient-to-b from-[#4598FF] to-[#1877F2] py-3 text-xs`}>How to use</a></div>
          </div>
        )}
      </div>
    </header>
  );
}

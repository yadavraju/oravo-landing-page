"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

type DesktopMenu = "products" | "resources" | null;

const actionBase = "inline-flex h-11 items-center justify-center rounded-[10px] border px-5 text-sm font-bold text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1877F2] focus-visible:ring-offset-2";
const navButtonBase = "inline-flex h-11 items-center justify-center gap-2 rounded-[10px] border border-white bg-white px-5 text-sm font-bold text-[#37322F] transition-colors duration-200 hover:bg-[#F3F0ED] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1877F2]";

export function Header() {
  const pathname = usePathname();
  const onDictation = pathname === "/";
  const onNotetaker = pathname.startsWith("/notetaker");
  const onMobile = pathname.startsWith("/mobile");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopMenu, setDesktopMenu] = useState<DesktopMenu>(null);
  const shellRef = useRef<HTMLDivElement>(null);
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => { setMobileOpen(false); setDesktopMenu(null); }, [pathname]);
  useEffect(() => {
    if (!mobileOpen && !desktopMenu) return;
    if (mobileOpen) firstMobileLinkRef.current?.focus();
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setMobileOpen(false); setDesktopMenu(null); }
    };
    const outside = (event: PointerEvent) => {
      if (!shellRef.current?.contains(event.target as Node)) { setMobileOpen(false); setDesktopMenu(null); }
    };
    document.addEventListener("keydown", close);
    document.addEventListener("pointerdown", outside);
    return () => { document.removeEventListener("keydown", close); document.removeEventListener("pointerdown", outside); };
  }, [mobileOpen, desktopMenu]);

  const chevron = (open: boolean) => (
    <svg aria-hidden="true" viewBox="0 0 20 20" className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 8 4 4 4-4" strokeLinecap="round" strokeLinejoin="round" /></svg>
  );
  const mobileLinkClass = (active = false) => `flex items-center justify-between rounded-[10px] px-3 py-2.5 text-sm font-semibold transition-colors ${active ? "bg-white text-[#292524] shadow-sm" : "text-[#605A57] hover:bg-white/70 hover:text-[#292524]"}`;
  const menuIcon = (kind: string) => {
    const paths: Record<string, string> = {
      dictation: "M12 15a4 4 0 0 0 4-4V6a4 4 0 1 0-8 0v5a4 4 0 0 0 4 4Zm-7-4a7 7 0 0 0 14 0M12 18v3M9 21h6",
      notetaker: "M6 3h9l3 3v15H6V3Zm8 0v4h4M9 11h6M9 15h6",
      mobile: "M8 2h8v20H8V2Zm3 17h2",
      features: "M12 3l1.7 4.3L18 9l-4.3 1.7L12 15l-1.7-4.3L6 9l4.3-1.7L12 3Zm7 11 .8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8L19 14Z",
      usecases: "M4 5h16v12H4V5Zm4 16h8M12 17v4",
      blog: "M5 3h14v18H5V3Zm3 5h8M8 12h8M8 16h5",
    };
    return <span className="flex h-9 w-9 shrink-0 items-center justify-center text-[#9A9089]"><svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8"><path d={paths[kind]} strokeLinecap="round" strokeLinejoin="round" /></svg></span>;
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex h-[80px] items-center justify-center border-b border-[rgba(55,50,47,0.08)] bg-[#F7F5F3]/96 px-4 backdrop-blur-xl sm:h-[92px] sm:px-6">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 border-t border-white/80" />
      <div ref={shellRef} className="relative z-10 flex h-[60px] w-full max-w-[1120px] items-center justify-between gap-4 px-1 sm:px-2">
        <a href="/" aria-label="Oravo home" className="flex shrink-0 items-center gap-1.5 rounded-[10px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1877F2]"><Logo /><span className="font-sans text-lg font-semibold text-[#2F3037]">oravo</span></a>

        <nav aria-label="Primary navigation" className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-3 lg:flex">
          <button type="button" aria-expanded={desktopMenu === "products"} aria-controls="product-destinations" onClick={() => setDesktopMenu((open) => open === "products" ? null : "products")} className={navButtonBase}>Products {chevron(desktopMenu === "products")}</button>
          <button type="button" aria-expanded={desktopMenu === "resources"} aria-controls="resource-destinations" onClick={() => setDesktopMenu((open) => open === "resources" ? null : "resources")} className={navButtonBase}>Resources {chevron(desktopMenu === "resources")}</button>
          <a href="/#pricing-section" className={navButtonBase}>Pricing</a>
        </nav>

        <div className="hidden shrink-0 items-center gap-3 lg:flex">
          <a href="/how-to-use" className={`${actionBase} border-[#1877F2] bg-[#1877F2]`}>How to use</a>
          <a href="/download" className={`${actionBase} border-[#F97316] bg-[#F97316]`}>Download</a>
        </div>

        <button type="button" aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={mobileOpen} aria-controls="mobile-navigation" onClick={() => { setMobileOpen((open) => !open); setDesktopMenu(null); }} className="flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-1 rounded-[10px] border border-white bg-[#ECE8E4] transition-colors hover:bg-[#E2DDD8] lg:hidden">
          <span className={`h-0.5 w-4 bg-[#37322F] transition-transform ${mobileOpen ? "translate-y-1.5 rotate-45" : ""}`} /><span className={`h-0.5 w-4 bg-[#37322F] transition-opacity ${mobileOpen ? "opacity-0" : ""}`} /><span className={`h-0.5 w-4 bg-[#37322F] transition-transform ${mobileOpen ? "-translate-y-1.5 -rotate-45" : ""}`} />
        </button>

        {desktopMenu === "products" && (
          <div id="product-destinations" className="absolute left-1/2 top-[calc(100%+10px)] hidden w-[270px] -translate-x-[156px] rounded-[14px] border border-white bg-[#F7F5F3]/98 p-3 shadow-[0_2px_0_rgba(55,50,47,0.08),0_20px_45px_rgba(55,50,47,0.18),inset_0_0_0_1px_rgba(55,50,47,0.05)] backdrop-blur-xl lg:block">
            {[
              ["/", "Dictation", "Voice typing in every app", onDictation, "dictation"],
              ["/notetaker", "Notetaker", "Meeting notes in seconds", onNotetaker, "notetaker"],
              ["/mobile", "Mobile App", "Oravo while you are moving", onMobile, "mobile"],
            ].map(([href, label, detail, active, icon]) => (
              <a key={href as string} href={href as string} aria-current={active ? "page" : undefined} className={`flex items-start gap-3 rounded-[10px] px-3 py-3 transition-all ${active ? "bg-white shadow-[0_2px_0_rgba(55,50,47,0.06),0_7px_16px_rgba(55,50,47,0.07)]" : "hover:bg-white/70"}`}>{menuIcon(icon as string)}<span><span className="block text-sm font-bold text-[#37322F]">{label as string}</span><span className="mt-0.5 block text-xs font-medium text-[#847971]">{detail as string}</span></span></a>
            ))}
          </div>
        )}

        {desktopMenu === "resources" && (
          <div id="resource-destinations" className="absolute left-1/2 top-[calc(100%+10px)] hidden w-[230px] translate-x-[-12px] rounded-[14px] border border-white bg-[#F7F5F3]/98 p-3 shadow-[0_2px_0_rgba(55,50,47,0.08),0_20px_45px_rgba(55,50,47,0.18),inset_0_0_0_1px_rgba(55,50,47,0.05)] backdrop-blur-xl lg:block">
            {[
              ["/features", "Features", "Explore what Oravo can do", "features"],
              ["/use-cases", "Use Cases", "Ways teams work by voice", "usecases"],
              ["/blog", "Blog", "Guides and product updates", "blog"],
            ].map(([href, label, detail, icon]) => (
              <a key={href} href={href} className="flex items-start gap-3 rounded-[10px] px-3 py-3 transition-colors hover:bg-white/70">{menuIcon(icon)}<span><span className="block text-sm font-bold text-[#37322F]">{label}</span><span className="mt-0.5 block text-xs font-medium text-[#847971]">{detail}</span></span></a>
            ))}
          </div>
        )}

        {mobileOpen && (
          <div id="mobile-navigation" role="menu" aria-label="Primary navigation" className="absolute right-0 top-[calc(100%+10px)] w-[260px] rounded-[14px] border border-white bg-[#F7F5F3]/98 p-3 shadow-[0_2px_0_rgba(55,50,47,0.08),0_20px_45px_rgba(55,50,47,0.18),inset_0_0_0_1px_rgba(55,50,47,0.05)] backdrop-blur-xl lg:hidden">
            <p className="px-3 pb-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#9A9089]">Products</p>
            <a ref={firstMobileLinkRef} role="menuitem" href="/" aria-current={onDictation ? "page" : undefined} className={mobileLinkClass(onDictation)}>Dictation</a>
            <a role="menuitem" href="/notetaker" aria-current={onNotetaker ? "page" : undefined} className={mobileLinkClass(onNotetaker)}>Notetaker</a>
            <a role="menuitem" href="/mobile" aria-current={onMobile ? "page" : undefined} className={mobileLinkClass(onMobile)}>Mobile App</a>
            <p className="mt-3 border-t border-[rgba(55,50,47,0.10)] px-3 pb-1 pt-3 text-[10px] font-bold uppercase tracking-[0.14em] text-[#9A9089]">Resources</p>
            <a role="menuitem" href="/features" className={mobileLinkClass()}>Features</a>
            <a role="menuitem" href="/use-cases" className={mobileLinkClass()}>Use Cases</a>
            <a role="menuitem" href="/blog" className={mobileLinkClass()}>Blog</a>
            <a role="menuitem" href="/#pricing-section" className={`${mobileLinkClass()} mt-1 border-t border-[rgba(55,50,47,0.10)]`}>Pricing</a>
            <div className="mt-3 grid gap-2"><a role="menuitem" href="/how-to-use" className={`${actionBase} w-full border-[#1877F2] bg-[#1877F2]`}>How to use</a><a role="menuitem" href="/download" className={`${actionBase} w-full border-[#F97316] bg-[#F97316]`}>Download</a></div>
          </div>
        )}
      </div>
    </header>
  );
}

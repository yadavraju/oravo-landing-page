"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

type DesktopMenu = "products" | "resources" | null;

const navButtonBase = "inline-flex h-10 items-center justify-center gap-1.5 rounded-full px-4 font-display text-sm font-medium text-ink-soft transition-colors duration-200 hover:bg-white/70 hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand";
const menuPanel = "glass-strong glass-rim absolute top-[calc(100%+12px)] rounded-[22px] p-2";

export function Header() {
  const pathname = usePathname();
  const onDictation = pathname === "/";
  const onNotetaker = pathname.startsWith("/notetaker");
  const onMobile = pathname.startsWith("/mobile");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopMenu, setDesktopMenu] = useState<DesktopMenu>(null);
  const [scrolled, setScrolled] = useState(false);
  const shellRef = useRef<HTMLDivElement>(null);
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => { setMobileOpen(false); setDesktopMenu(null); }, [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
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
  const mobileLinkClass = (active = false) => `flex items-center justify-between rounded-[14px] px-3 py-2.5 font-display text-sm font-medium transition-colors ${active ? "bg-white text-ink shadow-sm" : "text-ink-soft hover:bg-white/70 hover:text-ink"}`;
  const menuIcon = (kind: string) => {
    const paths: Record<string, string> = {
      dictation: "M12 15a4 4 0 0 0 4-4V6a4 4 0 1 0-8 0v5a4 4 0 0 0 4 4Zm-7-4a7 7 0 0 0 14 0M12 18v3M9 21h6",
      notetaker: "M6 3h9l3 3v15H6V3Zm8 0v4h4M9 11h6M9 15h6",
      mobile: "M8 2h8v20H8V2Zm3 17h2",
      features: "M12 3l1.7 4.3L18 9l-4.3 1.7L12 15l-1.7-4.3L6 9l4.3-1.7L12 3Zm7 11 .8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8L19 14Z",
      usecases: "M4 5h16v12H4V5Zm4 16h8M12 17v4",
      blog: "M5 3h14v18H5V3Zm3 5h8M8 12h8M8 16h5",
    };
    return <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/70 text-ink-soft shadow-[0_1px_0_#fff_inset,0_0_0_1px_rgba(43,40,36,0.06)]"><svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8"><path d={paths[kind]} strokeLinecap="round" strokeLinejoin="round" /></svg></span>;
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:px-6 sm:pt-4">
      <div ref={shellRef} className={`glass glass-rim relative z-10 flex h-[60px] w-full items-center justify-between gap-4 rounded-full pl-4 pr-2 transition-[max-width,background-color,box-shadow] duration-500 ease-entrance sm:pl-5 ${scrolled ? "max-w-[980px] bg-white/70" : "max-w-[1120px]"}`}>
        <a href="/" aria-label="Oravo home" className="flex shrink-0 items-center gap-1.5 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"><Logo /><span className="font-display text-lg font-semibold tracking-tight text-ink">oravo</span></a>

        <nav aria-label="Primary navigation" className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 lg:flex">
          <button type="button" aria-expanded={desktopMenu === "products"} aria-controls="product-destinations" onClick={() => setDesktopMenu((open) => open === "products" ? null : "products")} className={navButtonBase}>Products {chevron(desktopMenu === "products")}</button>
          <button type="button" aria-expanded={desktopMenu === "resources"} aria-controls="resource-destinations" onClick={() => setDesktopMenu((open) => open === "resources" ? null : "resources")} className={navButtonBase}>Resources {chevron(desktopMenu === "resources")}</button>
          <a href="/#pricing-section" className={navButtonBase}>Pricing</a>
        </nav>

        <div className="hidden shrink-0 items-center gap-2 lg:flex">
          <a href="/how-to-use" className={navButtonBase}>How to use</a>
          <a href="/download" className="btn-liquid !h-11 !px-5 !text-sm">Download</a>
        </div>

        <button type="button" aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={mobileOpen} aria-controls="mobile-navigation" onClick={() => { setMobileOpen((open) => !open); setDesktopMenu(null); }} className="flex h-11 w-11 shrink-0 flex-col items-center justify-center gap-1 rounded-full bg-white/70 shadow-[0_1px_0_#fff_inset,0_0_0_1px_rgba(43,40,36,0.06)] transition-colors hover:bg-white lg:hidden">
          <span className={`h-0.5 w-4 bg-ink transition-transform ${mobileOpen ? "translate-y-1.5 rotate-45" : ""}`} /><span className={`h-0.5 w-4 bg-ink transition-opacity ${mobileOpen ? "opacity-0" : ""}`} /><span className={`h-0.5 w-4 bg-ink transition-transform ${mobileOpen ? "-translate-y-1.5 -rotate-45" : ""}`} />
        </button>

        {desktopMenu === "products" && (
          <div id="product-destinations" className={`${menuPanel} left-1/2 hidden w-[320px] -translate-x-[181px] lg:block`}>
            {[
              ["/", "Dictation", "Voice typing in every app", onDictation, "dictation"],
              ["/notetaker", "Notetaker", "Meeting notes in seconds", onNotetaker, "notetaker"],
              ["/mobile", "Mobile App", "Oravo while you are moving", onMobile, "mobile"],
            ].map(([href, label, detail, active, icon]) => (
              <a key={href as string} href={href as string} aria-current={active ? "page" : undefined} className={`flex w-full items-start gap-3 rounded-[16px] px-3 py-3 transition-colors ${active ? "bg-white/80" : "hover:bg-white/70"}`}>{menuIcon(icon as string)}<span><span className="block font-display text-sm font-semibold text-ink">{label as string}</span><span className="mt-0.5 block text-xs text-ink-faint">{detail as string}</span></span></a>
            ))}
          </div>
        )}

        {desktopMenu === "resources" && (
          <div id="resource-destinations" className={`${menuPanel} left-1/2 hidden w-[250px] translate-x-[-12px] lg:block`}>
            {[
              ["/features", "Features", "Explore what Oravo can do", "features"],
              ["/use-cases", "Use Cases", "Ways teams work by voice", "usecases"],
              ["/blog", "Blog", "Guides and product updates", "blog"],
            ].map(([href, label, detail, icon]) => (
              <a key={href} href={href} className="flex items-start gap-3 rounded-[16px] px-3 py-3 transition-colors hover:bg-white/70">{menuIcon(icon)}<span><span className="block font-display text-sm font-semibold text-ink">{label}</span><span className="mt-0.5 block text-xs text-ink-faint">{detail}</span></span></a>
            ))}
          </div>
        )}

        {mobileOpen && (
          <div id="mobile-navigation" role="menu" aria-label="Primary navigation" className={`${menuPanel} right-0 w-[270px] p-3 lg:hidden`}>
            <p className="px-3 pb-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-faint">Products</p>
            <a ref={firstMobileLinkRef} role="menuitem" href="/" aria-current={onDictation ? "page" : undefined} className={mobileLinkClass(onDictation)}>Dictation</a>
            <a role="menuitem" href="/notetaker" aria-current={onNotetaker ? "page" : undefined} className={mobileLinkClass(onNotetaker)}>Notetaker</a>
            <a role="menuitem" href="/mobile" aria-current={onMobile ? "page" : undefined} className={mobileLinkClass(onMobile)}>Mobile App</a>
            <p className="mt-3 border-t border-black/[0.06] px-3 pb-1 pt-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-faint">Resources</p>
            <a role="menuitem" href="/features" className={mobileLinkClass()}>Features</a>
            <a role="menuitem" href="/use-cases" className={mobileLinkClass()}>Use Cases</a>
            <a role="menuitem" href="/blog" className={mobileLinkClass()}>Blog</a>
            <a role="menuitem" href="/#pricing-section" className={`${mobileLinkClass()} mt-1 border-t border-black/[0.06]`}>Pricing</a>
            <div className="mt-3 grid gap-2"><a role="menuitem" href="/how-to-use" className="btn-glass w-full !h-11 !text-sm">How to use</a><a role="menuitem" href="/download" className="btn-liquid w-full !h-11 !text-sm">Download</a></div>
          </div>
        )}
      </div>
    </header>
  );
}

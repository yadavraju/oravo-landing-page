"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

type DesktopMenu = "products" | "resources" | null;

// Video-shala's header vocabulary: rectangular glass keys (8px radius, 2px
// white bevel, white-to-quarter-white fill) and exactly one solid button.
const navButtonBase = "inline-flex h-10 items-center justify-center gap-1.5 rounded-lg border-2 border-white bg-gradient-to-b from-white to-white/25 px-4 font-display text-[14px] font-medium text-ink shadow-[0_2px_4px_rgba(51,48,42,0.05)] transition-all duration-300 ease-out hover:to-white/60 hover:shadow-[0_4px_10px_-2px_rgba(51,48,42,0.10)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30";
const navButtonSolid = "inline-flex h-10 items-center justify-center rounded-lg border-2 border-ink bg-ink px-5 font-display text-[14px] font-semibold text-white shadow-[0_2px_4px_rgba(51,48,42,0.10)] transition-all duration-300 ease-out hover:bg-ink/90 hover:shadow-[0_4px_10px_-2px_rgba(51,48,42,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30 focus-visible:ring-offset-2";
const menuPanel = "surface-solid absolute top-[calc(100%+10px)] !rounded-xl p-2 shadow-[0_0_0_1px_var(--o-line),0_20px_45px_-12px_rgba(51,48,42,0.22)]";

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
  const mobileLinkClass = (active = false) => `flex items-center justify-between rounded-lg px-3 py-2.5 font-display text-sm font-medium transition-colors ${active ? "bg-canvas text-ink" : "text-ink-soft hover:bg-canvas hover:text-ink"}`;
  const menuIcon = (kind: string) => {
    const paths: Record<string, string> = {
      dictation: "M12 15a4 4 0 0 0 4-4V6a4 4 0 1 0-8 0v5a4 4 0 0 0 4 4Zm-7-4a7 7 0 0 0 14 0M12 18v3M9 21h6",
      notetaker: "M6 3h9l3 3v15H6V3Zm8 0v4h4M9 11h6M9 15h6",
      mobile: "M8 2h8v20H8V2Zm3 17h2",
      features: "M12 3l1.7 4.3L18 9l-4.3 1.7L12 15l-1.7-4.3L6 9l4.3-1.7L12 3Zm7 11 .8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8L19 14Z",
      usecases: "M4 5h16v12H4V5Zm4 16h8M12 17v4",
      blog: "M5 3h14v18H5V3Zm3 5h8M8 12h8M8 16h5",
    };
    return <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-canvas text-ink-soft ring-1 ring-line"><svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8"><path d={paths[kind]} strokeLinecap="round" strokeLinejoin="round" /></svg></span>;
  };

  return (
    <header className={`fixed inset-x-0 top-0 z-50 flex justify-center px-5 transition-[background-color,box-shadow,backdrop-filter] duration-300 sm:px-8 ${scrolled ? "bg-[#f7f5f2]/85 shadow-[0_1px_0_var(--o-line)] backdrop-blur-xl" : "bg-transparent"}`}>
      <div ref={shellRef} className="relative z-10 flex h-[68px] w-full max-w-6xl items-center justify-between gap-4 sm:h-[76px]">
        <a href="/" aria-label="Oravo home" className="flex shrink-0 items-center gap-1.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30"><Logo /><span className="font-display text-[17px] font-bold tracking-[-0.02em] text-ink">oravo</span></a>

        <nav aria-label="Primary navigation" className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-2 lg:flex">
          <button type="button" aria-expanded={desktopMenu === "products"} aria-controls="product-destinations" onClick={() => setDesktopMenu((open) => open === "products" ? null : "products")} className={navButtonBase}>Products {chevron(desktopMenu === "products")}</button>
          <button type="button" aria-expanded={desktopMenu === "resources"} aria-controls="resource-destinations" onClick={() => setDesktopMenu((open) => open === "resources" ? null : "resources")} className={navButtonBase}>Resources {chevron(desktopMenu === "resources")}</button>
          <a href="/#pricing-section" className={navButtonBase}>Pricing</a>
        </nav>

        <div className="hidden shrink-0 items-center gap-2 lg:flex">
          <a href="/how-to-use" className={navButtonBase}>How to use</a>
          <a href="/download" className={navButtonSolid}>Download</a>
        </div>

        <button type="button" aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={mobileOpen} aria-controls="mobile-navigation" onClick={() => { setMobileOpen((open) => !open); setDesktopMenu(null); }} className="flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-1 rounded-lg border-2 border-white bg-gradient-to-b from-white to-white/25 shadow-[0_2px_4px_rgba(51,48,42,0.05)] transition-all hover:to-white/60 lg:hidden">
          <span className={`h-0.5 w-4 bg-ink transition-transform ${mobileOpen ? "translate-y-1.5 rotate-45" : ""}`} /><span className={`h-0.5 w-4 bg-ink transition-opacity ${mobileOpen ? "opacity-0" : ""}`} /><span className={`h-0.5 w-4 bg-ink transition-transform ${mobileOpen ? "-translate-y-1.5 -rotate-45" : ""}`} />
        </button>

        {desktopMenu === "products" && (
          <div id="product-destinations" className={`${menuPanel} left-1/2 hidden w-[320px] -translate-x-[181px] lg:block`}>
            {[
              ["/", "Dictation", "Voice typing in every app", onDictation, "dictation"],
              ["/notetaker", "Notetaker", "Meeting notes in seconds", onNotetaker, "notetaker"],
              ["/mobile", "Mobile App", "Oravo while you are moving", onMobile, "mobile"],
            ].map(([href, label, detail, active, icon]) => (
              <a key={href as string} href={href as string} aria-current={active ? "page" : undefined} className={`flex w-full items-start gap-3 rounded-lg px-3 py-3 transition-colors ${active ? "bg-canvas" : "hover:bg-canvas"}`}>{menuIcon(icon as string)}<span><span className="block font-display text-sm font-semibold text-ink">{label as string}</span><span className="mt-0.5 block text-xs text-ink-faint">{detail as string}</span></span></a>
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
              <a key={href} href={href} className="flex items-start gap-3 rounded-lg px-3 py-3 transition-colors hover:bg-canvas">{menuIcon(icon)}<span><span className="block font-display text-sm font-semibold text-ink">{label}</span><span className="mt-0.5 block text-xs text-ink-faint">{detail}</span></span></a>
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
            <div className="mt-3 grid gap-2"><a role="menuitem" href="/how-to-use" className={`${navButtonBase} w-full !border-line`}>How to use</a><a role="menuitem" href="/download" className={`${navButtonSolid} w-full`}>Download</a></div>
          </div>
        )}
      </div>
    </header>
  );
}

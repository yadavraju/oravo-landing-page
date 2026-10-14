"use client";

/**
 * Site header, built on the video-shala marketing nav.
 *
 * - A three-column grid so the menus sit on the page's true centre line,
 *   whatever width the logo and the actions either side of it take.
 * - Every item is the same rectangular key (8px radius, 2px white bevel,
 *   white-to-quarter-white fill); exactly one element is filled: Download.
 * - Menus open on hover, click and focus. The close waits ~120ms so the
 *   diagonal trip from trigger to panel does not dismiss it halfway.
 * - Transparent at rest; a warm canvas shelf with a blur once scrolled.
 */

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import {
  ArrowRight,
  BookOpen,
  Captions,
  ChevronDown,
  CircleHelp,
  FileText,
  LayoutGrid,
  Menu,
  Mic,
  NotebookPen,
  Scissors,
  Smartphone,
  Sparkles,
  WandSparkles,
  Wrench,
  X,
  type LucideIcon,
} from "lucide-react";
import Logo from "./Logo";

type NavItem = { href: string; icon: LucideIcon; title: string; blurb: string };
type NavMenu = { id: "products" | "tools" | "resources"; label: string; items: NavItem[]; footer?: { href: string; label: string } };

const NAV: NavMenu[] = [
  {
    id: "products",
    label: "Products",
    items: [
      { href: "/", icon: Mic, title: "Dictation", blurb: "Voice typing in every app" },
      { href: "/notetaker", icon: FileText, title: "Notetaker", blurb: "Meeting notes in seconds" },
      { href: "/mobile", icon: Smartphone, title: "Mobile App", blurb: "Oravo while you are moving" },
    ],
  },
  // Between Products and Resources so people find them: the five most used,
  // then a link to the whole catalogue.
  {
    id: "tools",
    label: "Free Tools",
    items: [
      { href: "/tools/speech-to-text", icon: Mic, title: "Speech to Text", blurb: "Record and get a transcript" },
      { href: "/tools/meeting-summarizer", icon: NotebookPen, title: "AI Meeting Summarizer", blurb: "Summary, decisions, action items" },
      { href: "/tools/transcript-cleaner", icon: WandSparkles, title: "AI Transcript Cleaner", blurb: "Messy speech to clean text" },
      { href: "/tools/subtitle-generator", icon: Captions, title: "Subtitle Generator", blurb: "SRT and VTT from any clip" },
      { href: "/tools/silence-remover", icon: Scissors, title: "Audio Silence Remover", blurb: "Cut the dead air from a recording" },
    ],
    footer: { href: "/tools", label: "See all free tools" },
  },
  {
    id: "resources",
    label: "Resources",
    items: [
      { href: "/features", icon: Sparkles, title: "Features", blurb: "Explore what Oravo can do" },
      { href: "/use-cases", icon: LayoutGrid, title: "Use Cases", blurb: "Ways teams work by voice" },
      { href: "/blog", icon: BookOpen, title: "Blog", blurb: "Guides and product updates" },
      { href: "/faq", icon: CircleHelp, title: "FAQ", blurb: "Accents, translation and privacy" },
    ],
  },
];

const NAV_LINKS = [{ href: "/pricing", label: "Pricing" }];

const NAV_PILL =
  "inline-flex h-9 items-center gap-1.5 rounded-lg border-2 border-white bg-gradient-to-b from-white to-white/25 px-3.5 " +
  "font-display text-[14px] font-medium text-ink shadow-[0_2px_4px_rgba(51,48,42,0.05)] " +
  "transition-all duration-300 ease-out hover:to-white/60 hover:shadow-[0_4px_10px_-2px_rgba(51,48,42,0.10)] active:shadow-none " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30 xl:h-10 xl:px-5 xl:text-[15px]";

const NAV_PILL_OPEN = "to-white shadow-[0_4px_10px_-2px_rgba(51,48,42,0.12)]";

const NAV_PILL_SOLID =
  "inline-flex h-9 items-center justify-center rounded-lg border-2 border-primary-500 bg-primary-500 px-4 font-display text-[14px] font-semibold text-white " +
  "shadow-[0_2px_4px_rgba(15,106,158,0.18)] transition-all duration-300 ease-out hover:border-primary-600 hover:bg-primary-600 " +
  "hover:shadow-[0_6px_14px_-4px_rgba(15,106,158,0.4)] active:shadow-none " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/40 focus-visible:ring-offset-2 xl:h-10 xl:px-6 xl:text-[15px]";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

function SiteNav({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState<NavMenu["id"] | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout>>();
  const navRef = useRef<HTMLElement>(null);

  const hold = useCallback(() => clearTimeout(closeTimer.current), []);
  const scheduleClose = useCallback(() => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(null), 120);
  }, []);

  useEffect(() => () => clearTimeout(closeTimer.current), []);
  useEffect(() => setOpen(null), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(null);
    };
    const onPointer = (event: PointerEvent) => {
      if (!navRef.current?.contains(event.target as Node)) setOpen(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  return (
    <nav ref={navRef} aria-label="Primary navigation" className="relative hidden items-center gap-2 lg:flex" onMouseLeave={scheduleClose}>
      {NAV.map((menu) => {
        const isOpen = open === menu.id;
        return (
          <div key={menu.id} className="relative" onMouseEnter={() => { hold(); setOpen(menu.id); }}>
            <button
              type="button"
              aria-expanded={isOpen}
              aria-haspopup="true"
              aria-controls={`${menu.id}-menu`}
              onClick={() => setOpen(isOpen ? null : menu.id)}
              onFocus={() => { hold(); setOpen(menu.id); }}
              className={`${NAV_PILL} ${isOpen ? NAV_PILL_OPEN : ""}`}
            >
              {menu.label}
              <ChevronDown aria-hidden="true" className={`h-3.5 w-3.5 text-ink-faint transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
            </button>

            {isOpen && (
              // Padding, not margin, for the gap: the pointer never crosses dead space.
              <div id={`${menu.id}-menu`} onMouseEnter={hold} className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-2">
                <div className="w-[19rem] rounded-2xl bg-raised p-2 shadow-[0_1px_2px_rgba(51,48,42,0.04),0_16px_40px_-16px_rgba(51,48,42,0.22)] ring-1 ring-line">
                  {menu.items.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      aria-current={isActive(pathname, item.href) ? "page" : undefined}
                      onClick={() => setOpen(null)}
                      className={`flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-canvas ${isActive(pathname, item.href) ? "bg-canvas" : ""}`}
                    >
                      <item.icon aria-hidden="true" className="mt-0.5 h-[18px] w-[18px] shrink-0 text-ink-faint" />
                      <span className="min-w-0">
                        <span className="block font-display text-[14px] font-semibold text-ink">{item.title}</span>
                        <span className="mt-0.5 block font-display text-[12.5px] leading-snug text-ink-soft">{item.blurb}</span>
                      </span>
                    </a>
                  ))}
                  {menu.footer && (
                    <a
                      href={menu.footer.href}
                      onClick={() => setOpen(null)}
                      className="mt-1 flex items-center justify-between rounded-xl border-t border-line px-3 pb-2 pt-3 font-display text-[13.5px] font-semibold text-primary-500 transition-colors hover:bg-canvas"
                    >
                      {menu.footer.label}
                      <ArrowRight aria-hidden="true" className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        );
      })}

      {NAV_LINKS.map((link) => (
        <a key={link.href} href={link.href} onMouseEnter={scheduleClose} className={NAV_PILL}>
          {link.label}
        </a>
      ))}
    </nav>
  );
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => setMenuOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    firstMobileLinkRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ease-out ${
        scrolled || menuOpen ? "bg-canvas/90 shadow-[0_2px_4px_rgba(51,48,42,0.05)] backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto grid h-[4.25rem] w-full max-w-[76rem] grid-cols-[1fr_auto_1fr] items-center gap-4 px-5 sm:h-[4.75rem] sm:px-8">
        <a href="/" aria-label="Oravo home" className="flex w-fit shrink-0 items-center gap-2 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30">
          <Logo />
          <span className="font-display text-[17px] font-bold tracking-[-0.02em] text-ink">oravo</span>
        </a>

        <SiteNav pathname={pathname} />

        <div className="hidden items-center justify-end gap-2 lg:flex">
          <a href="/how-to-use" className={NAV_PILL}>How to use</a>
          <a href="/download" className={NAV_PILL_SOLID}>Download</a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className="col-start-3 -mr-2 flex h-11 w-11 items-center justify-center justify-self-end rounded-lg text-ink active:bg-ink/5 lg:hidden"
        >
          {menuOpen ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
        </button>
      </div>

      {menuOpen && (
        <div id="mobile-navigation" className="border-t border-line bg-paper px-5 pb-5 pt-3 lg:hidden">
          {NAV.map((menu, m) => (
            <div key={menu.id} className="mb-3">
              <p className="mb-1 font-display text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-faint">{menu.label}</p>
              {menu.items.map((item, i) => (
                <a
                  key={item.href}
                  ref={m === 0 && i === 0 ? firstMobileLinkRef : undefined}
                  href={item.href}
                  aria-current={isActive(pathname, item.href) ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                  className="flex min-h-[44px] items-center gap-2.5 font-display text-[15px] font-medium text-ink"
                >
                  <item.icon aria-hidden="true" className="h-[18px] w-[18px] text-ink-faint" />
                  {item.title}
                </a>
              ))}
              {menu.footer && (
                <a
                  href={menu.footer.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex min-h-[44px] items-center gap-2.5 font-display text-[15px] font-semibold text-primary-500"
                >
                  <Wrench aria-hidden="true" className="h-[18px] w-[18px]" />
                  {menu.footer.label}
                </a>
              )}
            </div>
          ))}

          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="flex min-h-[44px] items-center font-display text-[15px] font-medium text-ink">
              {link.label}
            </a>
          ))}

          <div className="mt-2 flex flex-col gap-2">
            <a href="/download" className={`${NAV_PILL_SOLID} !h-11 w-full`}>Download</a>
            <a href="/how-to-use" className={`${NAV_PILL} !h-11 w-full justify-center !border-line`}>How to use</a>
          </div>
        </div>
      )}
    </header>
  );
}

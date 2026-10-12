"use client";

import { motion, useReducedMotion } from "framer-motion";
import Logo from "../Logo";

/*
 * The footer every route shares.
 *
 * A full-bleed rosy-clay band (--o-band-rose), the warmest ground on the site,
 * so the page ends somewhere instead of fading out. The two products each get
 * a drawn ticket: a mic whose words land on a line for Dictation, a notebook
 * that fills itself in for Notetaker. Under the link columns sits the promise
 * as a timeline (Press, Speak, Done), the way video-shala closes on
 * Generate, Share, Grow. The wordmark is part of the footer's own flow and
 * sized from the viewport, so it renders the same on every page instead of
 * depending on the width of whatever wraps it.
 */

const PRODUCT_LINKS = [
  { text: "Dictation", href: "/" },
  { text: "Notetaker", href: "/notetaker" },
  { text: "Mobile app", href: "/mobile" },
  { text: "Features", href: "/features" },
  { text: "Pricing", href: "/pricing" },
  { text: "Download", href: "/download" },
  { text: "How to use", href: "/how-to-use" },
];

const SOLUTION_LINKS = [
  { text: "Use cases", href: "/use-cases" },
  { text: "Multilingual teams", href: "/for-multilingual-teams" },
  { text: "Founders & operators", href: "/for-creators" },
  { text: "Healthcare", href: "/for-healthcare" },
  { text: "Developers", href: "/for-developers" },
  { text: "Students", href: "/students" },
];

const COMPARE_LINKS = [
  { text: "vs Wispr Flow", href: "/compare/wispr-flow" },
  { text: "vs Willow Voice", href: "/compare/willow-voice" },
  { text: "vs Dragon", href: "/compare/dragon" },
  { text: "vs Otter.ai", href: "/compare/otter-ai" },
  { text: "vs Google Voice Typing", href: "/compare/google-voice-typing" },
  { text: "vs Apple Dictation", href: "/compare/apple-dictation" },
];

const COMPANY_LINKS = [
  { text: "Blog", href: "/blog" },
  { text: "FAQ", href: "/faq" },
  { text: "Manifesto", href: "/manifesto" },
  { text: "Affiliate", href: "/affiliate" },
  { text: "Privacy", href: "/privacy" },
  { text: "Terms", href: "/terms" },
  { text: "Contact", href: "mailto:hi@oravo.ai" },
];

const SOCIALS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/oravo-ai/", viewBox: "0 0 24 24", path: "M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" },
  { label: "X", href: "https://x.com/Rajuyadav2", viewBox: "0 0 24 24", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
  { label: "Discord", href: "https://discord.gg/eAEsqsXmr2", viewBox: "0 0 24 24", path: "M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.36-.698.772-1.362 1.225-1.993a.076.076 0 0 0-.041-.107 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.12-.094.246-.194.373-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" },
  { label: "Reddit", href: "https://www.reddit.com/r/oravo/", viewBox: "0 0 24 24", path: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.066 13.71c.147.322.22.674.22 1.04 0 2.654-3.1 4.81-6.93 4.81s-6.93-2.156-6.93-4.81c0-.38.08-.744.236-1.08a1.56 1.56 0 0 1-.653-1.27 1.573 1.573 0 0 1 2.69-1.1 8.684 8.684 0 0 1 4.192-1.36l.786-3.69a.338.338 0 0 1 .404-.268l2.617.556a1.09 1.09 0 1 1-.122.574l-2.346-.499-.696 3.27a8.63 8.63 0 0 1 4.073 1.353 1.572 1.572 0 0 1 2.69 1.1c0 .478-.213.907-.55 1.195l.02.04zM9.6 14.4a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4zm5.28 2.173c-.372.37-1.092.5-2.88.5s-2.508-.13-2.88-.5a.335.335 0 0 1 .474-.474c.228.228.86.39 2.406.39s2.178-.162 2.406-.39a.335.335 0 0 1 .474.474zM14.4 14.4a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4z" },
  { label: "YouTube", href: "https://www.youtube.com/@oravoai", viewBox: "0 0 24 24", path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" },
  { label: "TikTok", href: "https://www.tiktok.com/@oravo.ai", viewBox: "0 0 448 512", path: "M448 209.91a210.06 210.06 0 0 1-122.77-39.25v178.72A162.55 162.55 0 1 1 185 188.31v89.89a74.62 74.62 0 1 0 52.23 71.18V0h88a121.18 121.18 0 0 0 1.86 22.17A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14z" },
  { label: "Instagram", href: "https://www.instagram.com/oravo.ai/", viewBox: "0 0 24 24", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" },
];

/* ------------------------------------------------------------------------ */
/* Doodles                                                                  */
/* ------------------------------------------------------------------------ */

const INK = "#6b655b";
const ACCENT = "var(--o-accent)";

/** A mic speaks; the words travel over and land as a typed line. */
function DictationDoodle() {
  const still = useReducedMotion();
  const loop = (delay = 0, duration = 4.8) =>
    still ? { duration: 0 } : { duration, delay, repeat: Infinity, ease: "easeInOut" as const, times: [0, 0.35, 0.8, 1] };
  return (
    <svg viewBox="0 0 168 96" className="h-auto w-full" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {/* mic */}
      <motion.g animate={still ? undefined : { rotate: [-3, 3, -3] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} style={{ originX: "30px", originY: "70px" }}>
        <rect x="20" y="20" width="20" height="34" rx="10" stroke={INK} strokeWidth="2" />
        <path d="M14 44c0 9 7 16 16 16s16-7 16-16" stroke={INK} strokeWidth="2" />
        <path d="M30 60v12M22 74h16" stroke={INK} strokeWidth="2" />
        <path d="M25 30h10M25 36h10" stroke={INK} strokeWidth="1.4" opacity="0.5" />
      </motion.g>
      {/* sound waves */}
      {[0, 1, 2].map((i) => (
        <motion.path
          key={i}
          d={`M${52 + i * 8} ${30 - i * 3}c${5 + i} ${6 + i * 2} ${5 + i} ${14 + i * 4} 0 ${20 + i * 6}`}
          stroke={ACCENT}
          strokeWidth="2"
          initial={false}
          animate={still ? { opacity: 1 } : { opacity: [0.15, 1, 0.15] }}
          transition={still ? { duration: 0 } : { duration: 1.4, delay: i * 0.18, repeat: Infinity }}
        />
      ))}
      {/* the line the words land on */}
      <rect x="86" y="22" width="74" height="54" rx="7" stroke={INK} strokeWidth="2" />
      {[34, 46, 58].map((y, i) => (
        <motion.path
          key={y}
          d={`M96 ${y}h${i === 2 ? 30 : 52}`}
          stroke={i === 0 ? ACCENT : INK}
          strokeWidth="2"
          initial={{ pathLength: still ? 1 : 0 }}
          animate={{ pathLength: still ? 1 : [0, 1, 1, 0] }}
          transition={loop(i * 0.45)}
        />
      ))}
      <motion.path
        d="M131 53v10"
        stroke={ACCENT}
        strokeWidth="2"
        animate={still ? undefined : { opacity: [1, 0, 1] }}
        transition={{ duration: 0.9, repeat: Infinity }}
      />
    </svg>
  );
}

/** A notebook fills itself in while two voices talk beside it. */
function NotetakerDoodle() {
  const still = useReducedMotion();
  const loop = (delay = 0) =>
    still ? { duration: 0 } : { duration: 5.4, delay, repeat: Infinity, ease: "easeInOut" as const, times: [0, 0.3, 0.85, 1] };
  return (
    <svg viewBox="0 0 168 96" className="h-auto w-full" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {/* two voices */}
      <motion.g animate={still ? undefined : { y: [0, -3, 0] }} transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}>
        <path d="M10 22h34a6 6 0 0 1 6 6v12a6 6 0 0 1-6 6H24l-8 7v-7h-6a6 6 0 0 1-6-6V28a6 6 0 0 1 6-6z" stroke={INK} strokeWidth="2" />
        <path d="M14 32h22M14 38h14" stroke={INK} strokeWidth="1.6" opacity="0.6" />
      </motion.g>
      <motion.g animate={still ? undefined : { y: [0, 3, 0] }} transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}>
        <path d="M20 58h28a6 6 0 0 1 6 6v8a6 6 0 0 1-6 6h-4v6l-7-6H20a6 6 0 0 1-6-6v-8a6 6 0 0 1 6-6z" stroke={ACCENT} strokeWidth="2" />
        <path d="M22 67h20" stroke={ACCENT} strokeWidth="1.6" opacity="0.7" />
      </motion.g>
      {/* notebook */}
      <rect x="72" y="14" width="86" height="72" rx="7" stroke={INK} strokeWidth="2" />
      {[86, 100, 114, 128, 142].map((x) => (
        <path key={x} d={`M${x} 9v10`} stroke={INK} strokeWidth="2" />
      ))}
      <motion.path d="M82 32h40" stroke={INK} strokeWidth="2.4" initial={{ pathLength: still ? 1 : 0 }} animate={{ pathLength: still ? 1 : [0, 1, 1, 0] }} transition={loop(0)} />
      {[46, 58, 70].map((y, i) => (
        <g key={y}>
          <motion.path
            d={`M84 ${y - 4}l3 3 5-6`}
            stroke={ACCENT}
            strokeWidth="2"
            initial={{ pathLength: still ? 1 : 0 }}
            animate={{ pathLength: still ? 1 : [0, 1, 1, 0] }}
            transition={loop(0.5 + i * 0.5)}
          />
          <motion.path
            d={`M98 ${y - 3}h${i === 1 ? 36 : 48}`}
            stroke={INK}
            strokeWidth="2"
            initial={{ pathLength: still ? 1 : 0 }}
            animate={{ pathLength: still ? 1 : [0, 1, 1, 0] }}
            transition={loop(0.6 + i * 0.5)}
          />
        </g>
      ))}
    </svg>
  );
}

/* ------------------------------------------------------------------------ */

function ProductTicket({
  name,
  line,
  cta,
  href,
  children,
}: {
  name: string;
  line: string;
  cta: string;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="group frame-dotted relative flex flex-col gap-3 bg-[#f7e8de]/70 p-3.5 transition-colors duration-300 hover:bg-[#f9ede5] sm:p-5"
    >
      <div className="w-full max-w-[200px]">{children}</div>
      <div>
        <p className="font-serif text-[19px] leading-none text-ink sm:text-[22px]">{name}</p>
        <p className="mt-1.5 text-[12.5px] leading-snug text-ink-soft sm:text-[13.5px]">{line}</p>
        <p className="mt-3 font-display text-[13px] font-semibold text-ink underline-offset-4 group-hover:underline">{cta} →</p>
      </div>
    </a>
  );
}

function FooterColumn({ title, links }: { title: string; links: { text: string; href: string }[] }) {
  return (
    <div>
      <h3 className="font-display text-[12px] font-bold uppercase tracking-[0.11em] text-ink">{title}</h3>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.text}>
            <a href={link.href} className="font-display text-[14px] leading-[1.45] text-ink-soft underline-offset-4 transition-colors hover:text-ink hover:underline">
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Press, Speak, Done: three words on one line, a dot travelling between them. */
function PromiseLine() {
  const still = useReducedMotion();
  const words = ["Press", "Speak", "Done."];
  return (
    <div aria-label="Press. Speak. Done." className="flex items-center gap-3 sm:gap-5">
      {words.map((word, i) => (
        <div key={word} className={`flex items-center gap-3 sm:gap-5 ${i < words.length - 1 ? "flex-1" : ""}`}>
          <span className="flex items-baseline gap-2">
            <span className="font-display text-[11px] font-semibold tabular-nums text-brand" aria-hidden="true">
              0{i + 1}
            </span>
            <span className="font-serif text-[19px] text-ink sm:text-[24px]">{word}</span>
          </span>
          {i < words.length - 1 && (
            <span className="relative h-px flex-1 bg-gradient-to-r from-ink/5 via-brand/50 to-ink/5" aria-hidden="true">
              <motion.span
                className="absolute -top-[3px] h-[7px] w-[7px] rounded-full bg-brand"
                initial={{ left: still ? "50%" : "0%", opacity: still ? 1 : 0 }}
                animate={still ? undefined : { left: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
                transition={{ duration: 2.2, delay: i * 1.1, repeat: Infinity, repeatDelay: 1.1, ease: "easeInOut" }}
              />
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------------ */

export function SiteFooter({ from }: { from?: string }) {
  return (
    <footer
      className="relative w-full overflow-clip font-display text-ink-soft"
      style={{ background: from ? `linear-gradient(180deg, ${from} 0px, var(--o-band-rose) 140px)` : "var(--o-band-rose)" }}
    >
      <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${from ? "pt-28 sm:pt-32" : "border-t border-ink/[0.06] pt-16 sm:pt-20"}`}>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.25fr] lg:gap-14">
          <div>
            <a href="/" className="flex w-fit items-center gap-2 text-ink">
              <Logo className="h-6 w-6" />
              <span className="text-[19px] font-bold tracking-[-0.02em]">oravo</span>
            </a>
            <p className="mt-3 max-w-sm text-[14.5px] leading-relaxed text-ink-soft">
              Voice is your new keyboard. Speak in your accent, write in clear business English, and let your meetings take their own notes.
            </p>
            <div className="mt-7 grid grid-cols-2 gap-3 sm:gap-4">
              <ProductTicket name="Dictation" line="Speak in any app. Oravo types it, polished." cta="Get Dictation" href="/download">
                <DictationDoodle />
              </ProductTicket>
              <ProductTicket name="Notetaker" line="Meeting notes, decisions and actions, written for you." cta="Try Notetaker" href="/notetaker">
                <NotetakerDoodle />
              </ProductTicket>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
            <FooterColumn title="Product" links={PRODUCT_LINKS} />
            <FooterColumn title="Solutions" links={SOLUTION_LINKS} />
            <FooterColumn title="Compare" links={COMPARE_LINKS} />
            <FooterColumn title="Company" links={COMPANY_LINKS} />
          </div>
        </div>

        <div className="mt-14 sm:mt-16">
          <PromiseLine />
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-ink/[0.08] pt-7 sm:flex-row">
          <p className="text-[13px] text-ink-soft">© {new Date().getFullYear()} Oravo AI. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink/[0.09] bg-raised/50 text-ink-soft transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-ink/20 hover:bg-raised hover:text-ink"
              >
                <svg width="16" height="16" viewBox={s.viewBox} fill="currentColor" aria-hidden="true">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* The wordmark: in flow, sized from the viewport, cropped by the band. */}
      <div className="pointer-events-none mt-2 select-none overflow-hidden" aria-hidden="true">
        <p
          className="mb-[-0.19em] text-center font-display font-bold leading-[0.8] tracking-[-0.055em] text-rose-deep"
          style={{ fontSize: "clamp(110px, 25vw, 360px)" }}
        >
          oravo
        </p>
      </div>
    </footer>
  );
}

export default SiteFooter;

import type { Metadata } from "next";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Band } from "@/components/landing/Band";
import { Doodle } from "@/components/landing/Doodle";
import { MarketingShell } from "@/components/landing/MarketingShell";
import { Parallax } from "@/components/landing/Parallax";
import { Reveal, RevealWords } from "@/components/landing/Reveal";

export const metadata: Metadata = {
  title: "Page Not Found | Oravo",
  description: "The page you're looking for doesn't exist. Explore Oravo's AI voice typing and dictation features instead.",
  robots: { index: false, follow: true },
  openGraph: {
    title: "Page Not Found | Oravo",
    description: "The page you're looking for doesn't exist. Explore Oravo's AI voice typing and dictation features instead.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Page Not Found | Oravo",
  },
};

const PLACES = [
  { href: "/features", title: "Features", blurb: "Everything Oravo can do" },
  { href: "/pricing", title: "Pricing", blurb: "Free plan, Pro from $9.99" },
  { href: "/blog", title: "Blog", blurb: "Guides and product updates" },
  { href: "/faq", title: "FAQ", blurb: "Accents, translation and privacy" },
];

export default function NotFound() {
  return (
    <MarketingShell>
      <Band color="var(--o-band-sand)" className="pt-32 pb-20 sm:pt-40 sm:pb-28">
        <Parallax speed={120} className="pointer-events-none absolute -left-32 top-10" aria-hidden="true">
          <div className="h-80 w-80 rounded-full bg-sand-deep" />
        </Parallax>
        <Parallax speed={-70} className="pointer-events-none absolute -right-24 top-[45%] hidden sm:block" aria-hidden="true">
          <div className="h-72 w-72 rotate-12 rounded-[48px] bg-clay" />
        </Parallax>
        {/* The paper plane that took a wrong turn, with its looping trail. */}
        <Parallax speed={60} className="pointer-events-none absolute left-[5%] top-36 hidden lg:block" aria-hidden="true">
          <Doodle name="plane" className="w-44 -scale-x-100" />
        </Parallax>
        <Parallax speed={-40} className="pointer-events-none absolute right-[6%] top-[52%] hidden lg:block" aria-hidden="true">
          <Doodle name="scribble" className="w-40" />
        </Parallax>

        <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-5 text-center sm:px-8">
          {/* "404" where the zero has gone missing: a dashed outline where it
              should be, with a hand-drawn question mark inside. */}
          <Reveal>
            <p className="flex items-center justify-center font-serif text-[112px] leading-none tracking-[-0.04em] text-ink sm:text-[168px]">
              <span className="sr-only">404</span>
              <span aria-hidden="true">4</span>
              <span aria-hidden="true" className="mx-1 inline-flex h-[0.84em] w-[0.66em] items-center justify-center rounded-full border-[3px] border-dashed border-ink/40 sm:mx-2 sm:border-4">
                <Doodle name="question" className="w-[0.6em] translate-x-[0.03em]" />
              </span>
              <span aria-hidden="true">4</span>
            </p>
          </Reveal>
          <h1 className="display-2 mt-6 text-ink">
            <RevealWords text="Page not found" />
          </h1>
          <Reveal delay={0.12}>
            <p className="subtitle mx-auto mt-4 max-w-md text-balance">
              The page you're looking for doesn't exist or has been moved. Let's get you back on track.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a href="/" className="btn-primary">
                Go Home
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </a>
              <a href="/download" className="btn-secondary">
                Download Oravo
              </a>
            </div>
          </Reveal>
        </div>
      </Band>

      <Band color="var(--o-paper)" from="var(--o-band-sand)" className="pb-20 pt-16 sm:pb-24 sm:pt-20">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <Reveal>
            <p className="eyebrow text-center">Or try one of these</p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="surface-solid mx-auto mt-5 grid max-w-4xl grid-cols-1 gap-px overflow-hidden !rounded-2xl bg-line sm:grid-cols-2 lg:grid-cols-4">
              {PLACES.map((place) => (
                <a key={place.href} href={place.href} className="group flex items-start justify-between gap-3 bg-raised p-5 transition-colors hover:bg-paper">
                  <span>
                    <span className="block font-display text-[15px] font-semibold text-ink">{place.title}</span>
                    <span className="mt-1 block font-display text-[13px] leading-snug text-ink-soft">{place.blurb}</span>
                  </span>
                  <ArrowUpRight aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-ink-faint transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </Band>
    </MarketingShell>
  );
}

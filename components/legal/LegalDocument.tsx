import { ArrowUp, ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { Band } from "@/components/landing/Band";
import { Doodle, type DoodleName } from "@/components/landing/Doodle";
import { MarketingShell } from "@/components/landing/MarketingShell";
import { Parallax } from "@/components/landing/Parallax";
import { Reveal, RevealWords } from "@/components/landing/Reveal";
import styles from "./legal.module.css";
import { HeadingAnchor, LegalToc, LegalTocMobile, type TocItem } from "./LegalToc";

/*
 * Shared layout for the legal documents: a sand hero with the title, the
 * "last updated" line and a doodle; then a warm paper sheet with a ~70ch
 * reading column, numbered serif section headings with anchor links, and a
 * sticky table of contents with scroll-spy on desktop.
 *
 * The legal copy itself stays in each page file, untouched; this component
 * only decides how it is presented.
 */

export type LegalSection = {
  id: string;
  /** Rendered as "1." before the title, exactly as the original heading. */
  number: string;
  title: string;
  body: ReactNode;
};

type LegalDoc = "privacy" | "terms" | "subprocessors";

const DOCS: { key: LegalDoc; href: string; title: string; blurb: string }[] = [
  { key: "privacy", href: "/privacy", title: "Privacy Policy", blurb: "What we collect, why, and how you stay in control." },
  { key: "terms", href: "/terms", title: "Terms of Service", blurb: "The agreement for using Oravo's apps and services." },
  { key: "subprocessors", href: "/subprocessors", title: "Subprocessors", blurb: "The third-party services that help run Oravo." },
];

export function LegalDocument({
  doc,
  title,
  updated,
  intro,
  doodle,
  sections,
  children,
}: {
  doc: LegalDoc;
  title: string;
  /** The date line, shown exactly as given (e.g. "Last Updated: 04/30/2025"). */
  updated: string;
  intro?: ReactNode;
  doodle: DoodleName;
  /** Numbered sections; when present they also build the table of contents. */
  sections?: LegalSection[];
  /** Free-form body for documents without numbered sections. */
  children?: ReactNode;
}) {
  const toc: TocItem[] = (sections ?? []).map(({ id, number, title }) => ({ id, number, title }));
  const hasToc = toc.length > 0;
  const others = DOCS.filter((d) => d.key !== doc);

  return (
    <MarketingShell>
      <div className={styles.page}>
        {/* Hero */}
        <Band id="top" color="var(--o-band-sand)" className="pt-32 pb-14 sm:pt-40 sm:pb-20">
          <Parallax speed={110} className="pointer-events-none absolute -left-32 top-12" aria-hidden="true">
            <div className="h-80 w-80 rounded-full bg-sand-deep" />
          </Parallax>
          <Parallax speed={-60} className="pointer-events-none absolute -right-24 top-[42%] hidden sm:block" aria-hidden="true">
            <div className="h-64 w-64 rotate-12 rounded-[48px] bg-clay" />
          </Parallax>
          <Parallax speed={45} className="pointer-events-none absolute right-[7%] top-32 hidden lg:block" aria-hidden="true">
            <Doodle name={doodle} className="w-44" />
          </Parallax>

          <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
            <div className="max-w-2xl">
              <Doodle name={doodle} className="mb-5 w-24 lg:hidden" />
              <Reveal>
                <nav aria-label="Legal documents" className="flex flex-wrap items-center gap-x-1 gap-y-1">
                  <span className="eyebrow mr-2">Legal</span>
                  {DOCS.map((d) => (
                    <a
                      key={d.key}
                      href={d.href}
                      aria-current={d.key === doc ? "page" : undefined}
                      className={`rounded-md px-2 py-1 font-display text-[12.5px] transition-colors ${
                        d.key === doc ? "bg-raised/70 font-semibold text-ink ring-1 ring-line" : "text-ink-soft hover:text-ink"
                      }`}
                    >
                      {d.title}
                    </a>
                  ))}
                </nav>
              </Reveal>
              <h1 className="display-1 mt-5 text-ink">
                <RevealWords text={title} delay={0.05} />
              </h1>
              <Reveal delay={0.2}>
                <p className="mt-5 inline-flex items-center gap-2.5 font-display text-[13.5px] font-medium text-ink-soft">
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-brand" />
                  {updated}
                </p>
              </Reveal>
              {intro && (
                <Reveal delay={0.28}>
                  <p className="subtitle mt-4 max-w-xl">{intro}</p>
                </Reveal>
              )}
            </div>
          </div>
        </Band>

        {/* Document */}
        <Band color="var(--o-paper)" from="var(--o-band-sand)" blend={120} className={`${styles.unclip} pb-12 sm:pb-16`}>
          <div
            className={`relative mx-auto w-full max-w-6xl px-5 sm:px-8 ${
              hasToc ? "lg:grid lg:grid-cols-[14.5rem_minmax(0,1fr)] lg:items-start lg:gap-12" : ""
            }`}
          >
            {hasToc && (
              <aside className="hidden lg:sticky lg:top-28 lg:block lg:pt-10">
                <LegalToc items={toc} />
                <a
                  href="#top"
                  className="mt-6 inline-flex items-center gap-1.5 font-display text-[12.5px] font-semibold text-ink-soft transition-colors hover:text-ink"
                >
                  <ArrowUp aria-hidden="true" className="h-3.5 w-3.5" />
                  Back to top
                </a>
              </aside>
            )}

            <div className="min-w-0">
              {hasToc && (
                <div className="sticky top-20 z-20 mb-5 lg:hidden">
                  <LegalTocMobile items={toc} />
                </div>
              )}

              <article className="surface-solid relative !rounded-2xl px-5 py-10 sm:px-12 sm:py-14 lg:px-16">
                <div className={`${styles.prose} ${sections ? "mx-auto max-w-[70ch]" : ""}`}>
                  {sections?.map((section, i) => (
                    <section
                      key={section.id}
                      aria-labelledby={`${section.id}-heading`}
                      className={i === 0 ? "" : "mt-12 border-t border-line pt-10"}
                    >
                      <h2
                        id={section.id}
                        className="group display-3 mb-5 scroll-mt-44 text-ink lg:scroll-mt-28"
                      >
                        <span id={`${section.id}-heading`}>
                          <span className="font-display text-[0.78em] font-semibold tabular-nums text-brand">{section.number}.</span>{" "}
                          {section.title}
                        </span>
                        <HeadingAnchor id={section.id} label={section.title} />
                      </h2>
                      {section.body}
                    </section>
                  ))}
                  {children}
                </div>
              </article>
            </div>
          </div>
        </Band>

        {/* Related documents */}
        <Band color="var(--o-blush)" from="var(--o-paper)" blend={120} className="pb-20 pt-10 sm:pb-24">
          <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
            <Reveal>
              <p className="eyebrow">Related documents</p>
            </Reveal>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {others.map((d, i) => (
                <Reveal key={d.key} delay={0.06 * i}>
                  <a href={d.href} className="surface-solid surface-interactive group flex h-full items-start justify-between gap-4 p-6">
                    <span>
                      <span className="display-3 block text-ink">{d.title}</span>
                      <span className="mt-1.5 block font-display text-[13.5px] leading-snug text-ink-soft">{d.blurb}</span>
                    </span>
                    <ArrowUpRight
                      aria-hidden="true"
                      className="mt-1 h-4 w-4 shrink-0 text-ink-faint transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
                    />
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </Band>
      </div>
    </MarketingShell>
  );
}

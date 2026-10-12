import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { Band } from "@/components/landing/Band";
import { Doodle, type DoodleName } from "@/components/landing/Doodle";
import { FaqAccordion } from "@/components/landing/FaqAccordion";
import { CtaPanel, SectionIntro, type Action } from "@/components/landing/PageBlocks";
import { SHELL } from "./shell";
import { Parallax } from "@/components/landing/Parallax";
import { Reveal } from "@/components/landing/Reveal";
import type { FaqItem } from "@/lib/faq";

/*
 * Server-safe section blocks shared by the product pages: the FAQ band, the
 * related-topics shelf and the closing CTA band.
 */

export type TopicLink = { title: string; href: string; note?: string };

/** One surface split by hairlines: an index of internal links. */
export function TopicShelf({ links, columns = 3 }: { links: TopicLink[]; columns?: 2 | 3 }) {
  return (
    <Reveal>
      <ul
        className={`grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-line shadow-[0_0_0_1px_var(--o-line)] sm:grid-cols-2 ${columns === 3 ? "lg:grid-cols-3" : ""}`}
      >
        {links.map((link, i) => (
          <li key={link.href} className="bg-raised">
            <a href={link.href} className="group flex h-full items-center gap-4 px-5 py-4 transition-colors hover:bg-paper sm:px-6">
              <span className="w-6 shrink-0 font-display text-[11.5px] font-semibold text-brand">{String(i + 1).padStart(2, "0")}</span>
              <span className="flex-1">
                <span className="block font-display text-[14.5px] font-semibold text-ink">{link.title}</span>
                {link.note && <span className="mt-0.5 block text-[12.5px] text-ink-faint">{link.note}</span>}
              </span>
              <ArrowUpRight
                aria-hidden="true"
                className="h-4 w-4 shrink-0 text-ink-faint transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
              />
            </a>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

export function RelatedBand({
  title = "Related topics",
  lede,
  links,
  color,
  from,
  doodle = "windows",
}: {
  title?: string;
  lede?: string;
  links: TopicLink[];
  color: string;
  from: string;
  doodle?: DoodleName;
}) {
  return (
    <Band color={color} from={from} className="py-20 sm:py-24">
      <div className={`${SHELL} grid gap-10 lg:grid-cols-[0.8fr_1.6fr] lg:items-start lg:gap-14`}>
        <SectionIntro align="left" doodle={doodle} eyebrow="Keep exploring" title={title} lede={lede} />
        <TopicShelf links={links} columns={2} />
      </div>
    </Band>
  );
}

export function FaqBand({
  title,
  items,
  color,
  from,
  eyebrow = "FAQ",
  lede,
}: {
  title: string;
  items: FaqItem[];
  color: string;
  from: string;
  eyebrow?: string;
  lede?: string;
}) {
  return (
    <Band color={color} from={from} blend={200} className="pt-24 pb-20 sm:pt-28 sm:pb-24">
      <Parallax speed={-50} className="pointer-events-none absolute right-[4%] top-40 hidden xl:block" aria-hidden="true">
        <Doodle name="speech" className="w-36" />
      </Parallax>
      <div className="mx-auto w-full max-w-3xl px-5 sm:px-8">
        <SectionIntro doodle="question" eyebrow={eyebrow} title={title} lede={lede} />
        <Reveal className="mt-10">
          <FaqAccordion items={items} />
        </Reveal>
        <p className="mt-6 text-center font-display text-[13.5px] text-ink-soft">
          Still curious?{" "}
          <a href="/faq" className="font-semibold text-primary-500 underline-offset-4 hover:underline">
            Read the full FAQ
          </a>{" "}
          or email{" "}
          <a href="mailto:hi@oravo.ai" className="font-semibold text-primary-500 underline-offset-4 hover:underline">
            hi@oravo.ai
          </a>
          .
        </p>
      </div>
    </Band>
  );
}

export function ClosingBand({
  from,
  title,
  description,
  primary = { label: "Download free", href: "/download" },
  secondary,
  eyebrow,
  footnote,
}: {
  from: string;
  title: string;
  description?: ReactNode;
  primary?: Action;
  secondary?: Action;
  eyebrow?: string;
  footnote?: string[];
}) {
  return (
    <Band color="var(--o-blush)" from={from} className="pt-16 pb-20 sm:pt-20">
      <div className={SHELL}>
        <CtaPanel eyebrow={eyebrow} title={title} description={description} primary={primary} secondary={secondary} />
        {footnote && (
          <p className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 font-display text-[12.5px] text-ink-faint">
            {footnote.map((item, i) => (
              <span key={item} className="flex items-center gap-3">
                {i > 0 && <span className="h-1 w-1 rounded-full bg-ink-faint/60" aria-hidden="true" />}
                {item}
              </span>
            ))}
          </p>
        )}
      </div>
    </Band>
  );
}

/**
 * An editorial feature list: big serif numerals, hairline rules, no boxes.
 * Reads like a spec sheet rather than a grid of identical cards.
 */
export function NumberedFeatures({
  items,
  columns = 3,
  tone = "light",
}: {
  items: { title: string; description: string }[];
  columns?: 2 | 3;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <ol className={`grid gap-x-10 sm:grid-cols-2 ${columns === 3 ? "lg:grid-cols-3" : ""}`}>
      {items.map((item, i) => (
        <Reveal as="li" key={item.title} delay={(i % 3) * 0.08}>
          <div className={`group flex h-full gap-5 border-t py-7 ${dark ? "border-white/15" : "border-line"}`}>
            <span
              className={`font-serif text-[2.4rem] leading-none transition-colors duration-300 ${dark ? "text-white/25 group-hover:text-[#e8a07f]" : "text-ink/20 group-hover:text-brand"}`}
              aria-hidden="true"
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <span>
              <h3 className={`font-display text-[16.5px] font-semibold tracking-[-0.01em] ${dark ? "text-white" : "text-ink"}`}>{item.title}</h3>
              <p className={`mt-2 text-[14.5px] leading-relaxed ${dark ? "text-white/60" : "text-ink-soft"}`}>{item.description}</p>
            </span>
          </div>
        </Reveal>
      ))}
    </ol>
  );
}

/** JSON-LD script tag. */
export function JsonLd({ data }: { data: unknown }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

import { ArrowRight, ArrowUpRight, Check, Minus } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { Band } from "@/components/landing/Band";
import { Doodle, type DoodleName } from "@/components/landing/Doodle";
import { FaqAccordion } from "@/components/landing/FaqAccordion";
import { Parallax } from "@/components/landing/Parallax";
import { CtaPanel, SectionIntro, type Action } from "@/components/landing/PageBlocks";
import { Reveal, RevealWords } from "@/components/landing/Reveal";
import type { FaqItem } from "@/lib/faq";

/*
 * Building blocks shared by the SEO landing pages (platform, language and
 * email pages). They sit on top of components/landing so the pages speak the
 * same warm-band vocabulary as the homepage. See docs/design-guide.md.
 */

/* Same as SHELL in components/landing/PageBlocks; redeclared here because a
   server module cannot read plain values exported from a client module. */
export const SHELL = "mx-auto w-full max-w-6xl px-5 sm:px-8";

export const PAPER = "var(--o-paper)";
export const CANVAS = "var(--o-canvas)";
export const SAND = "var(--o-band-sand)";
export const CLAY = "var(--o-band-clay)";
/* The one cool band (no dark bands on these pages). */
export const MIST = "var(--o-band-mist, #e3ebee)";
export const BLUSH = "var(--o-blush)";

/* ------------------------------------------------------------------------ */
/* Hero: sand ground, copy on the left, a live demo on the right.            */
/* ------------------------------------------------------------------------ */

export function SeoHero({
  eyebrow,
  eyebrowIcon,
  lines,
  description,
  secondaryDescription,
  primary,
  secondary,
  ticks,
  visual,
  doodle = "speech",
}: {
  eyebrow: string;
  eyebrowIcon?: ReactNode;
  /** The headline, one block per entry. Mark the phrase that carries the promise with `accent`. */
  lines: { text: string; accent?: boolean }[];
  description: ReactNode;
  secondaryDescription?: ReactNode;
  primary: Action;
  secondary?: Action;
  ticks?: string[];
  visual: ReactNode;
  doodle?: DoodleName;
}) {
  return (
    <section className="relative w-full overflow-hidden bg-sand pt-32 pb-16 sm:pt-40 sm:pb-24">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <Parallax speed={140} className="absolute -left-40 top-16 sm:-left-24">
          <div className="h-[360px] w-[360px] rounded-full bg-sand-deep sm:h-[440px] sm:w-[440px]" />
        </Parallax>
        <Parallax speed={-90} className="absolute -right-32 top-[52%] sm:-right-16">
          <div className="h-[280px] w-[280px] rotate-12 rounded-[56px] bg-clay sm:h-[340px] sm:w-[340px]" />
        </Parallax>
      </div>

      <div className={`${SHELL} relative grid items-center gap-14 lg:grid-cols-[1fr_1.08fr] lg:gap-14`}>
        <div>
          <Doodle name={doodle} className="mb-5 w-24" />
          <Reveal>
            <p className="eyebrow inline-flex items-center gap-2">
              {eyebrowIcon}
              {eyebrow}
            </p>
          </Reveal>
          <h1 className="display-1 mt-4 text-ink">
            {lines.map((line, i) => (
              <span key={line.text} className={`block ${line.accent ? "text-accent" : ""}`}>
                <RevealWords text={line.text} delay={0.05 + i * 0.12} />
              </span>
            ))}
          </h1>
          <Reveal delay={0.3}>
            <p className="subtitle mt-5 max-w-[560px]">{description}</p>
            {secondaryDescription && <p className="mt-3 max-w-[560px] font-display text-[14px] italic leading-relaxed text-ink-faint">{secondaryDescription}</p>}
          </Reveal>
          <Reveal delay={0.4}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={primary.href} className="btn-primary">
                {primary.label}
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </a>
              {secondary && (
                <a href={secondary.href} className="btn-secondary">
                  {secondary.label}
                </a>
              )}
            </div>
          </Reveal>
          {ticks && (
            <Reveal delay={0.5}>
              <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
                {ticks.map((tick) => (
                  <li key={tick} className="inline-flex items-center gap-2 font-display text-[12.5px] text-ink-soft">
                    <span className="flex h-4 w-4 items-center justify-center rounded-[5px] bg-raised text-ink ring-1 ring-line">
                      <Check aria-hidden="true" className="h-3 w-3" strokeWidth={2.5} />
                    </span>
                    {tick}
                  </li>
                ))}
              </ul>
            </Reveal>
          )}
        </div>
        <Reveal delay={0.25} y={24}>
          <Parallax speed={26}>{visual}</Parallax>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------------ */
/* A split section: a sticky intro on the left, a numbered list on the right */
/* ------------------------------------------------------------------------ */

export type ListItem = { title: string; description: string; icon?: ReactNode };

export function NumberedList({ items, columns = 1 }: { items: ListItem[]; columns?: 1 | 2 }) {
  return (
    <Reveal>
      <ol className={`surface-solid grid overflow-hidden !rounded-2xl ${columns === 2 ? "gap-px bg-line sm:grid-cols-2" : "divide-y divide-line"}`}>
        {items.map((item, i) => (
          <li key={item.title} className="group flex gap-5 bg-raised p-6 transition-colors hover:bg-paper sm:p-7">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-canvas text-ink ring-1 ring-line transition-transform duration-300 group-hover:-rotate-6">
              {item.icon ?? <span className="font-display text-[12px] font-bold text-brand">{String(i + 1).padStart(2, "0")}</span>}
            </span>
            <div>
              <h3 className="font-display text-[16px] font-semibold tracking-[-0.01em] text-ink">{item.title}</h3>
              <p className="mt-1.5 text-[14.5px] leading-relaxed text-ink-soft">{item.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </Reveal>
  );
}

export function SplitSection({
  eyebrow,
  title,
  lede,
  doodle,
  aside,
  children,
  reverse = false,
}: {
  eyebrow: string;
  title: string;
  lede?: ReactNode;
  doodle: DoodleName;
  aside?: ReactNode;
  children: ReactNode;
  reverse?: boolean;
}) {
  return (
    <div className={`grid items-start gap-12 lg:gap-16 ${reverse ? "lg:grid-cols-[1.15fr_0.85fr]" : "lg:grid-cols-[0.85fr_1.15fr]"}`}>
      <div className={`lg:sticky lg:top-28 ${reverse ? "lg:order-2" : ""}`}>
        <SectionIntro align="left" doodle={doodle} eyebrow={eyebrow} title={title} lede={lede} />
        {aside && <div className="mt-10">{aside}</div>}
      </div>
      <div className={reverse ? "lg:order-1" : ""}>{children}</div>
    </div>
  );
}

/* ------------------------------------------------------------------------ */
/* Feature-by-feature table. The Oravo column is set in, never coloured blue */
/* ------------------------------------------------------------------------ */

type Cell = string | boolean;

function CompareCell({ value, strong }: { value: Cell; strong?: boolean }) {
  if (value === true) {
    return (
      <span className={`inline-flex h-6 w-6 items-center justify-center rounded-md ${strong ? "bg-ink text-raised" : "bg-canvas text-ink-soft ring-1 ring-line"}`}>
        <Check aria-label="Yes" className="h-3.5 w-3.5" strokeWidth={2.5} />
      </span>
    );
  }
  if (value === false) {
    return (
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-canvas text-ink-faint ring-1 ring-line">
        <Minus aria-label="No" className="h-3.5 w-3.5" strokeWidth={2.5} />
      </span>
    );
  }
  return <span className={`text-[14px] leading-snug ${strong ? "font-semibold text-ink" : "text-ink-soft"}`}>{value}</span>;
}

export function CompareTable({
  columns,
  rows,
}: {
  /** Column headings after "Feature"; the first one is Oravo. */
  columns: string[];
  rows: { feature: string; values: Cell[] }[];
}) {
  const grid = { 2: "grid-cols-[1.3fr_1fr_1fr]", 3: "grid-cols-[1.3fr_1fr_1fr_1fr]" }[columns.length] ?? "grid-cols-[1.3fr_1fr_1fr]";
  return (
    <Reveal>
      <div className="overflow-x-auto rounded-2xl bg-raised shadow-[0_0_0_1px_var(--o-line)]">
        <div className={columns.length > 2 ? "min-w-[540px]" : ""}>
          <div className={`grid ${grid} items-center gap-3 border-b border-line bg-canvas px-5 py-3.5 sm:px-7`}>
            <span className="eyebrow">Feature</span>
            {columns.map((c, i) => (
              <span key={c} className={`font-display text-[13px] font-semibold ${i === 0 ? "text-brand" : "text-ink-soft"}`}>
                {c}
              </span>
            ))}
          </div>
          {rows.map((row, r) => (
            <Reveal key={row.feature} delay={Math.min(r, 8) * 0.04} y={8}>
              <div className={`grid ${grid} items-center gap-3 border-b border-line px-5 py-4 last:border-b-0 sm:px-7`}>
                <span className="font-display text-[14px] font-medium text-ink">{row.feature}</span>
                {row.values.map((v, i) => (
                  <span key={i}>
                    <CompareCell value={v} strong={i === 0} />
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

/* ------------------------------------------------------------------------ */
/* FAQ band with related links, then the closing CTA                         */
/* ------------------------------------------------------------------------ */

export function RelatedLinks({ links, title = "Related topics" }: { links: Action[]; title?: string }) {
  return (
    <Reveal>
      <nav aria-label={title} className="flex flex-col items-center gap-4">
        <p className="eyebrow">{title}</p>
        <ul className="flex flex-wrap justify-center gap-2.5">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="group inline-flex items-center gap-1.5 rounded-lg bg-raised px-3.5 py-2 font-display text-[13.5px] font-medium text-ink ring-1 ring-line transition-all hover:-translate-y-0.5 hover:ring-ink/25"
              >
                {link.label}
                <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5 text-ink-faint transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </Reveal>
  );
}

export function FaqBand({
  from,
  items,
  title = "Frequently Asked Questions",
  eyebrow = "FAQ",
  related,
}: {
  from: string;
  items: FaqItem[];
  title?: string;
  eyebrow?: string;
  related?: Action[];
}) {
  return (
    <Band color={CANVAS} from={from} blend={200} className="pt-24 pb-20 sm:pt-28 sm:pb-24">
      <div className="mx-auto w-full max-w-3xl px-5 sm:px-8">
        <SectionIntro doodle="question" eyebrow={eyebrow} title={title} />
        <Reveal className="mt-10">
          <FaqAccordion items={items} />
        </Reveal>
        {related && (
          <div className="mt-14">
            <RelatedLinks links={related} />
          </div>
        )}
      </div>
    </Band>
  );
}

export function ClosingBand({
  title,
  description,
  primary,
  secondary,
  eyebrow,
  doodle,
  from = CANVAS,
  footnote,
}: {
  title: string;
  description?: ReactNode;
  primary: Action;
  secondary?: Action;
  eyebrow?: string;
  doodle?: DoodleName;
  from?: string;
  footnote?: string[];
}) {
  return (
    <Band color={BLUSH} from={from} className="pt-16 pb-20 sm:pt-20">
      <div className={SHELL}>
        <CtaPanel eyebrow={eyebrow} title={title} description={description} primary={primary} secondary={secondary} doodle={doodle} />
        {footnote && (
          <p className="mt-5 text-center font-display text-[12.5px] text-ink-faint">{footnote.join("  ·  ")}</p>
        )}
      </div>
    </Band>
  );
}

/* Two takes on the same sentence: the built-in tool, then Oravo. */
export function BeforeAfter({
  before,
  after,
  note,
}: {
  before: { label: string; text: string };
  after: { label: string; text: string };
  note?: string;
}) {
  return (
    <Reveal>
      <div className="relative">
        <div className="rotate-[-1.5deg] rounded-xl bg-canvas p-4 ring-1 ring-line">
          <p className="eyebrow">{before.label}</p>
          <p className="mt-2 font-mono text-[12.5px] leading-relaxed text-ink-faint">{before.text}</p>
        </div>
        <div className="relative -mt-2 ml-5 rotate-[1deg] rounded-xl bg-raised p-4 shadow-[0_0_0_1px_var(--o-line),0_18px_36px_-22px_rgba(51,48,42,0.45)] sm:ml-10">
          <p className="eyebrow !text-brand">{after.label}</p>
          <p className="mt-2 text-[14.5px] leading-relaxed text-ink">{after.text}</p>
        </div>
        {note && <p className="mt-4 font-display text-[12px] text-ink-faint">{note}</p>}
      </div>
    </Reveal>
  );
}

/* A soft margin doodle that drifts at its own speed; for wide screens only. */
export function MarginDoodle({ name, position, speed = 50, tone }: { name: DoodleName; position: string; speed?: number; tone?: "light" | "dark" }) {
  return (
    <Parallax speed={speed} className={`pointer-events-none absolute hidden xl:block ${position}`} aria-hidden="true">
      <Doodle name={name} tone={tone} className="w-36" />
    </Parallax>
  );
}

/* A bento: one lead tile with its own visual, then smaller tiles around it. */
export function Bento({ lead, items }: { lead: ListItem & { visual: ReactNode }; items: ListItem[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Reveal className="md:col-span-2 md:row-span-2">
        <article className="flex h-full flex-col rounded-2xl bg-raised p-6 shadow-[0_0_0_1px_var(--o-line),0_20px_40px_-28px_rgba(51,48,42,0.4)] sm:p-8">
          <span className="font-display text-xs font-semibold text-brand">01</span>
          <h3 className="display-3 mt-2 text-ink">{lead.title}</h3>
          <p className="mt-2 max-w-md text-[14.5px] leading-relaxed text-ink-soft">{lead.description}</p>
          <div className="mt-6 flex-1">{lead.visual}</div>
        </article>
      </Reveal>
      {items.map((item, i) => (
        <Reveal key={item.title} delay={0.06 * (i + 1)}>
          <article className="surface-interactive h-full rounded-2xl bg-raised p-6 shadow-[0_0_0_1px_var(--o-line)]">
            <span className="font-display text-xs font-semibold text-brand">{String(i + 2).padStart(2, "0")}</span>
            <h3 className="mt-2 font-display text-[16px] font-semibold tracking-[-0.01em] text-ink">{item.title}</h3>
            <p className="mt-1.5 text-[14px] leading-relaxed text-ink-soft">{item.description}</p>
          </article>
        </Reveal>
      ))}
    </div>
  );
}

/* A spec sheet: label / value rows on one ruled surface. */
export function SpecSheet({ title, rows }: { title: string; rows: { label: string; value: ReactNode }[] }) {
  return (
    <Reveal>
      <div className="overflow-hidden rounded-2xl bg-raised shadow-[0_0_0_1px_var(--o-line),0_24px_48px_-30px_rgba(51,48,42,0.45)]">
        <div className="flex items-center justify-between border-b border-line bg-canvas px-6 py-4">
          <span className="eyebrow">{title}</span>
          <span className="font-mono text-[11px] text-ink-faint">spec sheet</span>
        </div>
        <dl className="divide-y divide-line">
          {rows.map((row) => (
            <div key={row.label} className="grid grid-cols-[96px_1fr] gap-4 px-6 py-4 sm:grid-cols-[130px_1fr]">
              <dt className="pt-0.5 font-display text-[11.5px] font-semibold uppercase tracking-[0.12em] text-ink-faint">{row.label}</dt>
              <dd className="text-[15px] leading-relaxed text-ink">{row.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Reveal>
  );
}

import type { ReactNode } from "react";
import { Doodle, type DoodleName } from "@/components/landing/Doodle";
import { Parallax } from "@/components/landing/Parallax";
import { Reveal, RevealWords } from "@/components/landing/Reveal";

/*
 * Editorial building blocks for long-form pages (the manifesto): a numbered
 * part with a sticky margin label, serif body copy at a reading measure, and
 * pull quotes that break out of the column.
 */

export function EssayPart({
  numeral,
  label,
  title,
  doodle,
  margin,
  children,
}: {
  numeral: string;
  label?: string;
  title: string;
  doodle?: DoodleName;
  /** Optional figure for the margin on wide screens. */
  margin?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className="mx-auto grid w-full max-w-6xl gap-6 px-5 sm:px-8 lg:grid-cols-[200px_minmax(0,680px)_1fr] lg:gap-12">
      <div className="lg:sticky lg:top-28 lg:self-start">
        <Reveal>
          <p className="font-serif text-[44px] leading-none text-brand lg:text-[56px]">{numeral}</p>
          {label && <p className="eyebrow mt-3">{label}</p>}
        </Reveal>
        {doodle && (
          <Parallax speed={24} className="mt-6 hidden lg:block">
            <Doodle name={doodle} className="w-28" />
          </Parallax>
        )}
      </div>
      <div>
        <h2 className="display-2 text-ink">
          <RevealWords text={title} />
        </h2>
        <Reveal delay={0.1}>
          <div className="mt-7 space-y-6 font-serif text-[19px] leading-[1.75] text-ink-soft sm:text-[20.5px]">{children}</div>
        </Reveal>
      </div>
      {margin && <div className="hidden pt-24 xl:block">{margin}</div>}
    </section>
  );
}

export function DropCap({ children }: { children: ReactNode }) {
  return (
    <p className="first-letter:float-left first-letter:mr-3 first-letter:mt-[0.12em] first-letter:font-serif first-letter:text-[4.4em] first-letter:leading-[0.78] first-letter:text-ink">
      {children}
    </p>
  );
}

export function PullQuote({ children, cite }: { children: string; cite?: string }) {
  return (
    <figure className="relative mx-auto w-full max-w-4xl px-5 py-6 text-center sm:px-8">
      <Parallax speed={20} className="mx-auto mb-4 w-24">
        <Doodle name="quote" className="w-24" />
      </Parallax>
      <blockquote className="font-serif text-[clamp(1.9rem,4.4vw,3.2rem)] leading-[1.12] tracking-[-0.02em] text-ink text-balance">
        <RevealWords text={children} />
      </blockquote>
      {cite && (
        <Reveal delay={0.3}>
          <figcaption className="eyebrow mt-6">{cite}</figcaption>
        </Reveal>
      )}
    </figure>
  );
}

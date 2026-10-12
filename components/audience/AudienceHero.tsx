"use client";

import { ArrowRight, Check } from "lucide-react";
import type { ReactNode } from "react";
import { Doodle, type DoodleName } from "@/components/landing/Doodle";
import { Parallax } from "@/components/landing/Parallax";
import { Reveal, RevealWords } from "@/components/landing/Reveal";
import { SHELL } from "./shell";
import type { Action } from "./types";

/*
 * Audience hero on solid sand. The H1 keeps the page's SEO phrase, set as
 * two blocks with the audience half in the accent. Three layouts so the
 * audience pages do not read as clones:
 *   split    copy left, demo right
 *   reverse  demo left, copy right
 *   stacked  centred copy, wide demo underneath
 */
export function AudienceHero({
  eyebrow,
  icon,
  lead,
  accent,
  description,
  proof = [],
  primary = { label: "Download free", href: "/download" },
  secondary = { label: "See how it works", href: "/how-to-use" },
  note = "Free plan · Mac, Windows and Android · iOS coming soon",
  visual,
  doodles,
  layout = "split",
}: {
  eyebrow: string;
  icon?: ReactNode;
  lead: string;
  accent: string;
  description: ReactNode;
  proof?: string[];
  primary?: Action;
  secondary?: Action | null;
  note?: string | null;
  visual: ReactNode;
  doodles: [DoodleName, DoodleName];
  layout?: "split" | "reverse" | "stacked";
}) {
  const stacked = layout === "stacked";
  // Long SEO headlines step down a size so they hold to three lines.
  const long = lead.length + accent.length > 36;

  const copy = (
    <div className={stacked ? "mx-auto flex max-w-[52rem] flex-col items-center text-center" : "relative"}>
      <Doodle name={doodles[0]} className={`mb-5 w-24 ${stacked ? "xl:hidden" : ""}`} />
      <Reveal>
        <p className="eyebrow inline-flex items-center gap-2">
          {icon && (
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-raised/70 text-ink-soft ring-1 ring-line [&_svg]:h-3.5 [&_svg]:w-3.5">{icon}</span>
          )}
          {eyebrow}
        </p>
      </Reveal>
      <h1 className={`display-1 mt-4 text-ink ${stacked ? "text-balance" : ""}`} style={long ? { fontSize: "clamp(2rem, 3.6vw, 2.8rem)" } : undefined}>
        <span className="block">
          <RevealWords text={lead} delay={0.05} />
        </span>{" "}
        <span className="block text-accent">
          <RevealWords text={accent} delay={0.2} />
        </span>
      </h1>
      <Reveal delay={0.3}>
        <p className={`subtitle mt-5 max-w-[580px] ${stacked ? "mx-auto text-balance" : ""}`}>{description}</p>
      </Reveal>
      <Reveal delay={0.4}>
        <div className={`mt-8 flex flex-col gap-3 sm:flex-row ${stacked ? "justify-center" : ""}`}>
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
      {proof.length > 0 && (
        <Reveal delay={0.5}>
          <ul className={`mt-7 flex flex-wrap gap-x-5 gap-y-2 ${stacked ? "justify-center" : ""}`}>
            {proof.map((item) => (
              <li key={item} className="inline-flex items-center gap-1.5 font-display text-[13px] font-medium text-ink-soft">
                <Check aria-hidden="true" className="h-3.5 w-3.5 text-brand" strokeWidth={2.5} />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      )}
      {note && (
        <Reveal delay={0.55}>
          <p className="mt-4 font-display text-[12.5px] text-ink-faint">{note}</p>
        </Reveal>
      )}
    </div>
  );

  const demo = (
    <Reveal delay={0.25} y={24}>
      <Parallax speed={stacked ? 20 : 30}>{visual}</Parallax>
    </Reveal>
  );

  return (
    <section className="relative w-full overflow-hidden bg-sand pt-32 pb-16 sm:pt-40 sm:pb-24">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <Parallax speed={140} className={`absolute top-16 ${layout === "reverse" ? "-right-40 sm:-right-24" : "-left-40 sm:-left-24"}`}>
          <div className="h-[360px] w-[360px] rounded-full bg-sand-deep sm:h-[440px] sm:w-[440px]" />
        </Parallax>
        <Parallax speed={-90} className={`absolute top-[52%] ${layout === "reverse" ? "-left-32 sm:-left-16" : "-right-32 sm:-right-16"}`}>
          <div className="h-[280px] w-[280px] rotate-12 rounded-[56px] bg-clay sm:h-[340px] sm:w-[340px]" />
        </Parallax>
        {stacked ? (
          <>
            <Parallax speed={60} className="absolute left-[4%] top-[210px] hidden xl:block">
              <Doodle name={doodles[0]} className="w-40" />
            </Parallax>
            <Parallax speed={-40} className="absolute right-[4%] top-[150px] hidden xl:block">
              <Doodle name={doodles[1]} className="w-40" />
            </Parallax>
          </>
        ) : (
          <Parallax speed={-50} className={`absolute top-24 hidden xl:block ${layout === "reverse" ? "left-[3%]" : "right-[3%]"}`}>
            <Doodle name={doodles[1]} className="w-24" />
          </Parallax>
        )}
      </div>

      {stacked ? (
        <div className={`${SHELL} relative`}>
          {copy}
          <div className="mx-auto mt-14 max-w-3xl sm:mt-16">{demo}</div>
        </div>
      ) : (
        <div className={`${SHELL} relative grid items-center gap-12 lg:gap-14 ${layout === "reverse" ? "lg:grid-cols-[1.05fr_1fr]" : "lg:grid-cols-[1fr_1.05fr]"}`}>
          <div className={layout === "reverse" ? "lg:order-2" : ""}>{copy}</div>
          <div className={layout === "reverse" ? "lg:order-1" : ""}>{demo}</div>
        </div>
      )}
    </section>
  );
}

import type { Metadata } from "next";
import { LifeBuoy, Tag } from "lucide-react";
import { Band } from "@/components/landing/Band";
import { Doodle } from "@/components/landing/Doodle";
import { FaqAccordion } from "@/components/landing/FaqAccordion";
import { MarketingShell } from "@/components/landing/MarketingShell";
import { Parallax } from "@/components/landing/Parallax";
import { Reveal, RevealWords } from "@/components/landing/Reveal";
import { FAQ_ITEMS, FAQ_LEDE, FAQ_TITLE, faqJsonLd } from "@/lib/faq";

export const metadata: Metadata = {
  title: "FAQ — Accents, Translation and Privacy",
  description:
    "Answers about Oravo: accent support, speaking your native language to get English, how it compares to Wispr Flow and Dragon, supported apps, context awareness, privacy, and the free plan.",
  alternates: { canonical: "https://oravo.ai/faq" },
  openGraph: {
    title: "Oravo FAQ",
    description: FAQ_LEDE,
    url: "https://oravo.ai/faq",
  },
};

export default function FaqPage() {
  return (
    <MarketingShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd()) }} />

      <Band color="var(--o-band-sand)" className="pt-32 pb-16 sm:pt-40 sm:pb-20">
        <Parallax speed={120} className="pointer-events-none absolute -left-32 top-10" aria-hidden="true">
          <div className="h-80 w-80 rounded-full bg-sand-deep" />
        </Parallax>
        <Parallax speed={-60} className="pointer-events-none absolute -right-24 bottom-0 hidden sm:block" aria-hidden="true">
          <div className="h-64 w-64 rotate-12 rounded-[48px] bg-clay" />
        </Parallax>
        <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-5 text-center sm:px-8">
          <Doodle name="question" className="mb-4 w-32 sm:w-36" />
          <Reveal><p className="eyebrow">Support</p></Reveal>
          <h1 className="display-2 mt-3 text-ink">
            <RevealWords text={FAQ_TITLE} />
          </h1>
          <Reveal delay={0.12}>
            <p className="subtitle mx-auto mt-4 max-w-md text-balance">{FAQ_LEDE}</p>
          </Reveal>
        </div>
      </Band>

      <Band color="var(--o-paper)" from="var(--o-band-sand)" className="pb-20 pt-10 sm:pb-28">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_17rem] lg:items-start">
          <Reveal>
            <FaqAccordion items={FAQ_ITEMS} />
          </Reveal>
          <aside className="flex flex-col gap-4 lg:sticky lg:top-28">
            <Reveal delay={0.1}>
              <div className="surface-solid p-5">
                <LifeBuoy aria-hidden="true" className="h-[18px] w-[18px] text-ink-faint" />
                <p className="mt-2.5 font-display text-[14px] font-semibold text-ink">Still have a question?</p>
                <p className="mt-1 font-display text-[13px] leading-snug text-ink-soft">We reply to every email, usually within a day.</p>
                <a href="mailto:hi@oravo.ai" className="mt-3 inline-block font-display text-[13px] font-semibold text-primary-500 underline-offset-4 hover:underline">
                  hi@oravo.ai
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.16}>
              <a href="/pricing" className="surface-solid surface-interactive block p-5">
                <Tag aria-hidden="true" className="h-[18px] w-[18px] text-ink-faint" />
                <p className="mt-2.5 font-display text-[14px] font-semibold text-ink">See plans and pricing</p>
                <p className="mt-1 font-display text-[13px] leading-snug text-ink-soft">Free forever plan. Pro from $9.99 a month.</p>
              </a>
            </Reveal>
          </aside>
        </div>
      </Band>
    </MarketingShell>
  );
}

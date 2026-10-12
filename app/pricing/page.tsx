import type { Metadata } from "next";
import { Band } from "@/components/landing/Band";
import { Doodle } from "@/components/landing/Doodle";
import { FaqAccordion } from "@/components/landing/FaqAccordion";
import { MarketingShell } from "@/components/landing/MarketingShell";
import { Parallax } from "@/components/landing/Parallax";
import { PricingPlans } from "@/components/landing/PricingPlans";
import { Reveal, RevealWords } from "@/components/landing/Reveal";
import { FAQ_ITEMS, FAQ_LEDE, FAQ_TITLE, faqJsonLd } from "@/lib/faq";

export const metadata: Metadata = {
  title: "Pricing — Free Voice Typing, Pro From $9.99",
  description:
    "Start free with 30 minutes a month, no credit card. Oravo Pro is $9.99/month or $99.99/year for unlimited voice typing and translation. Team plans from $8.99 per user.",
  alternates: { canonical: "https://oravo.ai/pricing" },
  openGraph: {
    title: "Oravo Pricing — Free to start, Pro from $9.99",
    description: "Unlimited voice typing for non-native English speakers. Free forever plan; cancel any time.",
    url: "https://oravo.ai/pricing",
  },
};

export default function PricingPage() {
  return (
    <MarketingShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd()) }} />

      <Band color="var(--o-band-sand)" className="pt-32 pb-16 sm:pt-40 sm:pb-24">
        <Parallax speed={120} className="pointer-events-none absolute -left-32 top-10" aria-hidden="true">
          <div className="h-80 w-80 rounded-full bg-sand-deep" />
        </Parallax>
        <Parallax speed={-70} className="pointer-events-none absolute -right-24 top-[45%] hidden sm:block" aria-hidden="true">
          <div className="h-72 w-72 rotate-12 rounded-[48px] bg-clay" />
        </Parallax>
        <Parallax speed={50} className="pointer-events-none absolute right-[6%] top-28 hidden xl:block" aria-hidden="true">
          <Doodle name="tag" className="w-40" />
        </Parallax>

        <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-5 text-center sm:px-8">
          <Doodle name="sparkle" className="mb-4 w-28 sm:w-32 xl:hidden" />
          <Reveal><p className="eyebrow">Plans &amp; pricing</p></Reveal>
          <h1 className="display-2 mt-3 text-ink">
            <RevealWords text="Start free. Upgrade when you're ready." />
          </h1>
          <Reveal delay={0.12}>
            <p className="subtitle mx-auto mt-4 max-w-lg text-balance">
              Try Oravo free. Go Pro for unlimited voice typing, faster processing, and custom vocabulary.
            </p>
          </Reveal>
        </div>

        <div className="relative mt-10">
          <PricingPlans />
        </div>
      </Band>

      <Band id="faq" color="var(--o-paper)" from="var(--o-band-sand)" blend={200} className="scroll-mt-24 pt-24 pb-20 sm:pt-28 sm:pb-28" aria-labelledby="faq-heading">
        <div className="mx-auto w-full max-w-3xl px-5 sm:px-8">
          <div className="flex flex-col items-center text-center">
            <Parallax speed={18} className="mb-4">
              <Doodle name="question" className="w-28 sm:w-32" />
            </Parallax>
            <Reveal><p className="eyebrow">FAQ</p></Reveal>
            <h2 id="faq-heading" className="display-2 mt-3 text-ink">
              <RevealWords text={FAQ_TITLE} />
            </h2>
            <Reveal delay={0.12}>
              <p className="subtitle mx-auto mt-4 max-w-md text-balance">{FAQ_LEDE}</p>
            </Reveal>
          </div>
          <Reveal className="mt-10">
            <FaqAccordion items={FAQ_ITEMS} />
          </Reveal>
          <p className="mt-6 text-center font-display text-[13.5px] text-ink-soft">
            More questions?{" "}
            <a href="/faq" className="font-semibold text-primary-500 underline-offset-4 hover:underline">Visit the FAQ</a>{" "}
            or email{" "}
            <a href="mailto:hi@oravo.ai" className="font-semibold text-primary-500 underline-offset-4 hover:underline">hi@oravo.ai</a>.
          </p>
        </div>
      </Band>
    </MarketingShell>
  );
}

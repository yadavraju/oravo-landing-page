import type { ReactNode } from "react";
import { Check, Minus } from "lucide-react";
import { Band } from "@/components/landing/Band";
import { Doodle } from "@/components/landing/Doodle";
import { FaqAccordion } from "@/components/landing/FaqAccordion";
import { MarketingShell } from "@/components/landing/MarketingShell";
import { CtaPanel, FeatureGrid, PageHero, SectionIntro } from "@/components/landing/PageBlocks";
import { Reveal } from "@/components/landing/Reveal";
import { SHELL } from "@/components/landing/shell";
import { buildBreadcrumbJsonLd } from "@/lib/breadcrumbs";
import { faqJsonLd } from "@/lib/faq";

export type ComparisonFeature = {
  feature: string;
  oravo: string | boolean;
  competitor: string | boolean;
};

export type ComparisonDifferentiator = {
  title: string;
  description: string;
  icon?: ReactNode;
};

export type ComparisonFaq = {
  question: string;
  answer: string;
};

export type ComparisonPageConfig = {
  slug: string;
  route: string;
  competitorName: string;
  accentColor: string;

  heroBadgeText: string;
  heroTitle: string;
  heroDescription: string;

  comparisonFeatures: ComparisonFeature[];

  differentiatorTitle: string;
  differentiatorDescription: string;
  differentiators: ComparisonDifferentiator[];

  oravoPricing: { plan: string; price: string; note?: string };
  competitorPricing: { plan: string; price: string; note?: string };

  faqs: ComparisonFaq[];

  ctaTitle: string;
  ctaDescription: string;
  ctaButtonText: string;
  ctaButtonHref: string;
};

function Cell({ value, strong }: { value: string | boolean; strong?: boolean }) {
  if (value === true) {
    return (
      <span className={`inline-flex h-6 w-6 items-center justify-center rounded-md ${strong ? "bg-primary-500 text-white" : "bg-canvas text-ink-soft ring-1 ring-line"}`}>
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

function PriceCard({ name, pricing, featured }: { name: string; pricing: { plan: string; price: string; note?: string }; featured?: boolean }) {
  return (
    <div className={`flex h-full flex-col rounded-2xl p-6 sm:p-7 ${featured ? "bg-raised shadow-[0_0_0_1.5px_var(--o-primary),0_20px_40px_-24px_rgba(15,106,158,0.45)]" : "bg-raised/70 shadow-[0_0_0_1px_var(--o-line)]"}`}>
      <p className={`font-display text-[13px] font-semibold ${featured ? "text-primary-500" : "text-ink-soft"}`}>{name}</p>
      <p className="mt-1 font-display text-[12.5px] text-ink-faint">{pricing.plan}</p>
      <p className="mt-4 font-display text-[2.2rem] font-bold leading-none tracking-[-0.04em] text-ink">{pricing.price}</p>
      {pricing.note && <p className="mt-3 text-[13.5px] leading-relaxed text-ink-soft">{pricing.note}</p>}
    </div>
  );
}

/* The hero visual: a head-to-head card. */
function FaceOff({ config }: { config: ComparisonPageConfig }) {
  const wins = config.comparisonFeatures.filter((f) => f.oravo === true && f.competitor !== true).length;
  return (
    <div className="relative">
      <div className="frame-dotted absolute -inset-4 hidden sm:block" aria-hidden="true" />
      <div className="relative rounded-2xl bg-raised p-6 shadow-[0_0_0_1px_var(--o-line),0_30px_60px_-30px_rgba(51,48,42,0.45)] sm:p-8">
        <div className="flex items-center justify-between">
          <span className="eyebrow">Head to head</span>
          <Doodle name="scales" className="w-20" />
        </div>
        <div className="mt-4 grid grid-cols-[1fr_auto_1fr] items-center gap-4">
          <div>
            <p className="font-display text-[13px] font-semibold text-primary-500">Oravo</p>
            <p className="mt-1 font-display text-[1.8rem] font-bold leading-none tracking-[-0.04em] text-ink">{config.oravoPricing.price}</p>
            <p className="mt-1 font-display text-[12px] text-ink-faint">{config.oravoPricing.plan}</p>
          </div>
          <span className="flex h-11 w-11 items-center justify-center rounded-full border-[1.5px] border-dashed border-line font-serif text-[15px] text-ink-faint">vs</span>
          <div className="text-right">
            <p className="font-display text-[13px] font-semibold text-ink-soft">{config.competitorName}</p>
            <p className="mt-1 font-display text-[1.8rem] font-bold leading-none tracking-[-0.04em] text-ink-soft">{config.competitorPricing.price}</p>
            <p className="mt-1 font-display text-[12px] text-ink-faint">{config.competitorPricing.plan}</p>
          </div>
        </div>
        <ul className="mt-6 divide-y divide-line border-t border-line">
          {config.comparisonFeatures.slice(0, 4).map((f) => (
            <li key={f.feature} className="grid grid-cols-[1fr_auto_auto] items-center gap-4 py-2.5">
              <span className="font-display text-[13px] text-ink">{f.feature}</span>
              <span className="w-16 text-center"><Cell value={typeof f.oravo === "boolean" ? f.oravo : true} strong /></span>
              <span className="w-16 text-center"><Cell value={typeof f.competitor === "boolean" ? f.competitor : true} /></span>
            </li>
          ))}
        </ul>
        {wins > 0 && (
          <p className="mt-4 font-display text-[12.5px] text-ink-soft">
            Oravo includes <span className="font-semibold text-primary-500">{wins}</span> features {config.competitorName} doesn&apos;t, in the full table below.
          </p>
        )}
      </div>
    </div>
  );
}

export function ComparisonPageTemplate({ config }: { config: ComparisonPageConfig }) {
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Home", url: "https://oravo.ai" },
    { name: "Compare", url: "https://oravo.ai/compare" },
    { name: "Oravo vs " + config.competitorName, url: "https://oravo.ai" + config.route },
  ]);

  return (
    <MarketingShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(config.faqs)) }} />

      <PageHero
        eyebrow={config.heroBadgeText}
        title={config.heroTitle}
        description={config.heroDescription}
        primary={{ label: config.ctaButtonText, href: config.ctaButtonHref }}
        secondary={{ label: "See pricing", href: "/pricing" }}
        doodles={["scales", "sparkle"]}
        visual={<FaceOff config={config} />}
      />

      <Band color="var(--o-paper)" from="var(--o-band-sand)" blend={200} className="pt-24 pb-20 sm:pt-28 sm:pb-24">
        <div className={SHELL}>
          <SectionIntro doodle="scales" eyebrow="Feature by feature" title={`Oravo vs ${config.competitorName}`} lede="The details, side by side." />
          <Reveal className="mt-12">
            <div className="overflow-hidden rounded-2xl bg-raised shadow-[0_0_0_1px_var(--o-line)]">
              <div className="grid grid-cols-[1.4fr_1fr_1fr] items-center border-b border-line bg-canvas px-5 py-3.5 sm:px-7">
                <span className="eyebrow">Feature</span>
                <span className="font-display text-[13px] font-semibold text-primary-500">Oravo</span>
                <span className="font-display text-[13px] font-semibold text-ink-soft">{config.competitorName}</span>
              </div>
              {config.comparisonFeatures.map((f, i) => (
                <Reveal key={f.feature} delay={Math.min(i, 10) * 0.04} y={8}>
                  <div className="grid grid-cols-[1.4fr_1fr_1fr] items-center gap-3 border-b border-line px-5 py-4 last:border-b-0 sm:px-7">
                    <span className="font-display text-[14px] font-medium text-ink">{f.feature}</span>
                    <span className="-my-4 flex h-full items-center bg-primary-soft/50 py-4 pl-3"><Cell value={f.oravo} strong /></span>
                    <span><Cell value={f.competitor} /></span>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </Band>

      <Band color="var(--o-band-clay)" from="var(--o-paper)" blend={200} className="pt-24 pb-20 sm:pt-28 sm:pb-24">
        <div className={SHELL}>
          <SectionIntro doodle="sparkle" eyebrow="Why people switch" title={config.differentiatorTitle} lede={config.differentiatorDescription} />
          <div className="mt-12">
            <FeatureGrid items={config.differentiators} />
          </div>
        </div>
      </Band>

      <Band color="var(--o-paper)" from="var(--o-band-clay)" blend={200} className="pt-24 pb-20 sm:pt-28 sm:pb-24">
        <div className={SHELL}>
          <SectionIntro doodle="tag" eyebrow="Pricing" title="What you pay" lede="Compare current plans before you decide." />
          <Reveal className="relative mx-auto mt-12 grid max-w-3xl gap-5 sm:grid-cols-2">
            <PriceCard name="Oravo" pricing={config.oravoPricing} featured />
            <PriceCard name={config.competitorName} pricing={config.competitorPricing} />
            <span className="absolute left-1/2 top-1/2 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[1.5px] border-dashed border-line bg-paper font-serif text-[15px] text-ink-faint sm:flex" aria-hidden="true">
              vs
            </span>
          </Reveal>
        </div>
      </Band>

      <Band color="var(--o-canvas)" from="var(--o-paper)" className="py-20 sm:py-24">
        <div className="mx-auto w-full max-w-3xl px-5 sm:px-8">
          <SectionIntro doodle="question" eyebrow="FAQ" title={`Oravo vs ${config.competitorName}: questions`} />
          <Reveal className="mt-10">
            <FaqAccordion items={config.faqs} />
          </Reveal>
        </div>
      </Band>

      <Band color="var(--o-blush)" from="var(--o-canvas)" className="pt-16 pb-20 sm:pt-20">
        <div className={SHELL}>
          <CtaPanel title={config.ctaTitle} description={config.ctaDescription} primary={{ label: config.ctaButtonText, href: config.ctaButtonHref }} secondary={{ label: "See pricing", href: "/pricing" }} />
        </div>
      </Band>
    </MarketingShell>
  );
}

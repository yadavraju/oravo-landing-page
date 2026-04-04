import Link from "next/link";
import type { ReactNode } from "react";
import { Header } from "@/components/header";
import FooterSection from "@/components/footer-section";

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

function Badge({ icon, text }: { icon: ReactNode; text: string }) {
  return (
    <div className="px-[14px] py-[6px] bg-white shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] overflow-hidden rounded-[90px] flex justify-start items-center gap-[8px] border border-[rgba(2,6,23,0.08)] shadow-xs">
      <div className="w-[14px] h-[14px] relative overflow-hidden flex items-center justify-center">
        {icon}
      </div>
      <div className="text-center flex justify-center flex-col text-[#37322F] text-xs font-medium leading-3 font-sans">
        {text}
      </div>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-[#22C55E]" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg className="w-5 h-5 text-[#DC2626]" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
    </svg>
  );
}

function FeatureValue({ value }: { value: string | boolean }) {
  if (typeof value === "boolean") {
    return value ? <CheckIcon /> : <CrossIcon />;
  }
  return <span className="text-[#605A57] text-sm font-sans">{value}</span>;
}

function ComparisonTable({
  features,
  competitorName,
}: {
  features: ComparisonFeature[];
  competitorName: string;
}) {
  return (
    <>
      {/* Desktop Table */}
      <div className="hidden md:block overflow-hidden rounded-xl border border-[#E0DEDB]">
        <table className="w-full">
          <thead>
            <tr className="bg-[#F7F5F3]">
              <th className="text-left py-4 px-5 text-[#847971] text-sm font-medium font-sans w-[45%]">
                Feature
              </th>
              <th className="text-center py-4 px-5 text-[#37322F] text-sm font-semibold font-sans w-[27.5%]">
                Oravo
              </th>
              <th className="text-center py-4 px-5 text-[#847971] text-sm font-medium font-sans w-[27.5%]">
                {competitorName}
              </th>
            </tr>
          </thead>
          <tbody>
            {features.map((f, i) => (
              <tr
                key={f.feature}
                className={`${i % 2 === 0 ? "bg-white" : "bg-[#FAFAF9]"} border-t border-[#E0DEDB]`}
              >
                <td className="py-4 px-5 text-[#37322F] text-sm font-medium font-sans">
                  {f.feature}
                </td>
                <td className="py-4 px-5 text-center">
                  <div className="flex justify-center">
                    <FeatureValue value={f.oravo} />
                  </div>
                </td>
                <td className="py-4 px-5 text-center">
                  <div className="flex justify-center">
                    <FeatureValue value={f.competitor} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-3">
        {features.map((f) => (
          <div key={f.feature} className="p-4 bg-white border border-[#E0DEDB] rounded-xl">
            <div className="text-[#37322F] text-sm font-medium font-sans mb-3">
              {f.feature}
            </div>
            <div className="flex justify-between gap-4">
              <div className="flex-1">
                <div className="text-[#847971] text-xs font-medium mb-1">Oravo</div>
                <div className="flex items-center">
                  <FeatureValue value={f.oravo} />
                </div>
              </div>
              <div className="flex-1">
                <div className="text-[#847971] text-xs font-medium mb-1">{competitorName}</div>
                <div className="flex items-center">
                  <FeatureValue value={f.competitor} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function DifferentiatorCard({
  icon,
  title,
  description,
}: {
  icon?: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <article className="group p-5 bg-white border border-[#E0DEDB] rounded-xl flex flex-col gap-4 transition-all duration-200 hover:border-[#847971]">
      <div className="w-10 h-10 rounded-lg bg-[#F7F5F3] flex items-center justify-center text-[#605A57] group-hover:text-[#37322F] transition-colors">
        {icon ?? (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-[#37322F] text-base font-semibold leading-tight font-sans">
          {title}
        </h3>
        <p className="text-[#605A57] text-sm font-normal leading-relaxed font-sans">
          {description}
        </p>
      </div>
    </article>
  );
}

function PricingComparison({
  oravoPricing,
  competitorPricing,
  competitorName,
  accentColor,
}: {
  oravoPricing: ComparisonPageConfig["oravoPricing"];
  competitorPricing: ComparisonPageConfig["competitorPricing"];
  competitorName: string;
  accentColor: string;
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[600px] mx-auto">
      {/* Oravo */}
      <div className="p-6 bg-[#37322F] rounded-xl text-white">
        <div className="text-white/60 text-xs font-medium uppercase tracking-wider font-sans mb-2">
          Oravo
        </div>
        <div className="text-3xl font-medium font-serif mb-1">{oravoPricing.price}</div>
        <div className="text-white/70 text-sm font-sans">{oravoPricing.plan}</div>
        {oravoPricing.note && (
          <div className="mt-3 text-white/50 text-xs font-sans">{oravoPricing.note}</div>
        )}
      </div>

      {/* Competitor */}
      <div className="p-6 bg-white border border-[#E0DEDB] rounded-xl">
        <div className="text-[#847971] text-xs font-medium uppercase tracking-wider font-sans mb-2">
          {competitorName}
        </div>
        <div className="text-[#37322F] text-3xl font-medium font-serif mb-1">
          {competitorPricing.price}
        </div>
        <div className="text-[#847971] text-sm font-sans">{competitorPricing.plan}</div>
        {competitorPricing.note && (
          <div className="mt-3 text-[#847971] text-xs font-sans">{competitorPricing.note}</div>
        )}
      </div>
    </div>
  );
}

function FAQItem({ question, answer }: ComparisonFaq) {
  return (
    <article className="p-5 bg-white border border-[#E0DEDB] rounded-xl">
      <h4 className="text-[#37322F] text-base font-semibold font-sans mb-2">
        {question}
      </h4>
      <p className="text-[#605A57] text-sm leading-relaxed font-sans">{answer}</p>
    </article>
  );
}

export function ComparisonPageTemplate({ config }: { config: ComparisonPageConfig }) {
  const accent = config.accentColor;

  return (
    <div className="w-full min-h-screen relative bg-[#F7F5F3] overflow-x-hidden flex flex-col justify-start items-center">
      <div className="relative flex flex-col justify-start items-center w-full">
        <div className="w-full max-w-none px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1060px] lg:w-[1060px] relative flex flex-col justify-start items-start min-h-screen">
          {/* Left vertical line */}
          <div className="w-[1px] h-full absolute left-4 sm:left-6 md:left-8 lg:left-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0" />
          {/* Right vertical line */}
          <div className="w-[1px] h-full absolute right-4 sm:right-6 md:right-8 lg:right-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0" />

          <Header />

          <main className="flex-1 w-full mt-20 md:mt-24 lg:mt-28 relative z-10">
            {/* Hero */}
            <section className="px-6 md:px-12 py-12 md:py-20 border-b border-[rgba(55,50,47,0.12)]">
              <div className="max-w-[800px] mx-auto text-center">
                <div className="flex justify-center mb-6">
                  <Badge
                    icon={
                      <svg className="w-3.5 h-3.5" fill={accent} viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    }
                    text={config.heroBadgeText}
                  />
                </div>

                <h1 className="text-[#37322F] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight font-serif mb-6">
                  {config.heroTitle}
                </h1>

                <p className="text-[#605A57] text-lg md:text-xl leading-relaxed font-sans mb-8 max-w-[640px] mx-auto">
                  {config.heroDescription}
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Link
                    href={config.ctaButtonHref}
                    className="group relative h-12 px-8 bg-gradient-to-b from-[#1877F2] to-[#166FE5] hover:from-[#1570E8] hover:to-[#1466D8] shadow-[0px_0px_0px_2.5px_rgba(255,255,255,0.08)_inset,0px_4px_12px_rgba(24,119,242,0.4)] overflow-hidden rounded-full flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95"
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/10 pointer-events-none"></div>
                    <span className="text-white text-base font-medium leading-5 font-sans relative z-10">
                      {config.ctaButtonText}
                    </span>
                    <svg className="w-5 h-5 relative z-10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <path d="M12 5v14M5 12l7 7 7-7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </section>

            {/* Comparison Table */}
            <section className="px-6 md:px-12 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)]">
              <div className="max-w-[900px] mx-auto">
                <div className="text-center mb-12">
                  <div className="flex justify-center mb-4">
                    <Badge
                      icon={
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#37322F" strokeWidth="2">
                          <path d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                        </svg>
                      }
                      text="Feature Comparison"
                    />
                  </div>
                  <h2 className="text-[#49423D] text-[28px] sm:text-3xl md:text-4xl font-stretch-semi-condensed font-medium leading-tight font-serif mb-4">
                    Oravo vs {config.competitorName} — Side by Side
                  </h2>
                  <p className="text-[#605A57] text-base md:text-lg font-sans max-w-[600px] mx-auto">
                    See how the features, pricing, and capabilities compare.
                  </p>
                </div>

                <ComparisonTable
                  features={config.comparisonFeatures}
                  competitorName={config.competitorName}
                />
              </div>
            </section>

            {/* Key Differentiators */}
            <section className="px-6 md:px-12 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)]">
              <div className="max-w-[900px] mx-auto">
                <div className="text-center mb-12">
                  <div className="flex justify-center mb-4">
                    <Badge
                      icon={
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#37322F" strokeWidth="2">
                          <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      }
                      text="Why Oravo"
                    />
                  </div>
                  <h2 className="text-[#49423D] text-[28px] sm:text-3xl md:text-4xl font-stretch-semi-condensed font-medium leading-tight font-serif mb-4">
                    {config.differentiatorTitle}
                  </h2>
                  <p className="text-[#605A57] text-base md:text-lg font-sans max-w-[600px] mx-auto">
                    {config.differentiatorDescription}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {config.differentiators.map((d) => (
                    <DifferentiatorCard key={d.title} {...d} />
                  ))}
                </div>
              </div>
            </section>

            {/* Pricing Comparison */}
            <section className="px-6 md:px-12 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)]">
              <div className="max-w-[900px] mx-auto">
                <div className="text-center mb-12">
                  <div className="flex justify-center mb-4">
                    <Badge
                      icon={
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#37322F" strokeWidth="2">
                          <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      }
                      text="Pricing"
                    />
                  </div>
                  <h2 className="text-[#49423D] text-[28px] sm:text-3xl md:text-4xl font-stretch-semi-condensed font-medium leading-tight font-serif mb-4">
                    Pricing Comparison
                  </h2>
                </div>

                <PricingComparison
                  oravoPricing={config.oravoPricing}
                  competitorPricing={config.competitorPricing}
                  competitorName={config.competitorName}
                  accentColor={accent}
                />
              </div>
            </section>

            {/* FAQ */}
            <section className="px-6 md:px-12 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)]">
              <div className="max-w-[800px] mx-auto">
                <div className="text-center mb-12">
                  <div className="flex justify-center mb-4">
                    <Badge
                      icon={
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#37322F" strokeWidth="2">
                          <path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      }
                      text="FAQ"
                    />
                  </div>
                  <h2 className="text-[#49423D] text-[28px] sm:text-3xl md:text-4xl font-stretch-semi-condensed font-medium leading-tight font-serif mb-4">
                    Frequently Asked Questions
                  </h2>
                </div>

                <div className="space-y-4">
                  {config.faqs.map((f) => (
                    <FAQItem key={f.question} {...f} />
                  ))}
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="px-6 md:px-12 py-16 md:py-20">
              <div className="max-w-[700px] mx-auto text-center">
                <div
                  className="rounded-3xl p-8 md:p-12 shadow-[0_8px_48px_rgba(55,50,47,0.15)]"
                  style={{ background: accent }}
                >
                  <h2 className="text-white text-2xl md:text-4xl font-normal font-serif mb-4">
                    {config.ctaTitle}
                  </h2>
                  <p className="text-white/90 text-base md:text-lg leading-relaxed font-sans mb-8">
                    {config.ctaDescription}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                    <Link
                      href={config.ctaButtonHref}
                      className="group relative h-12 px-8 bg-gradient-to-b from-white to-gray-100 hover:from-gray-50 hover:to-gray-200 shadow-[0px_0px_0px_2.5px_rgba(0,0,0,0.05)_inset,0px_4px_12px_rgba(0,0,0,0.1)] overflow-hidden rounded-full flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95"
                    >
                      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-black/5 pointer-events-none"></div>
                      <span className="text-gray-800 text-base font-medium leading-5 font-sans relative z-10">
                        {config.ctaButtonText}
                      </span>
                      <svg className="w-5 h-5 relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 5v14M5 12l7 7 7-7" />
                      </svg>
                    </Link>
                  </div>

                  <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-white/80 text-sm font-sans">
                    <span>No credit card required</span>
                    <span>•</span>
                    <span>2-minute setup</span>
                    <span>•</span>
                    <span>Works everywhere</span>
                  </div>
                </div>
              </div>
            </section>
          </main>

          <FooterSection />
        </div>
      </div>
    </div>
  );
}

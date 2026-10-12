import type { ReactNode } from "react";
import { Band } from "@/components/landing/Band";
import { FaqAccordion } from "@/components/landing/FaqAccordion";
import { MarketingShell } from "@/components/landing/MarketingShell";
import { CtaPanel, FeatureGrid, PageHero, SectionIntro, StepsTimeline } from "@/components/landing/PageBlocks";
import { Reveal } from "@/components/landing/Reveal";
import { SHELL } from "@/components/landing/shell";
import { buildBreadcrumbJsonLd } from "@/lib/breadcrumbs";
import { faqJsonLd } from "@/lib/faq";
import { AppDictationDemo } from "./AppDictationDemo";

export type SimpleIconData = { title: string; hex: string; path: string } | null;

export type UseCaseFeature = {
  title: string;
  description: string;
  icon?: ReactNode;
};

export type UseCaseStep = {
  title: string;
  description: string;
};

export type UseCaseScenario = {
  title: string;
  scenario?: string;
  withOravo: string;
  result?: string;
  timeSaved?: string;
};

export type UseCaseFaq = {
  question: string;
  answer: string;
};

export type UseCasePageConfig = {
  /** Directory name in /app, e.g. "voice-keyboard-for-outlook" */
  dir: string;
  /** Route path starting with "/", e.g. "/voice-keyboard-for-outlook" */
  route: string;
  appName: string;
  /** e.g. "#EA4335" */
  accentColor: string;
  /** simple-icons data. If null, Oravo logo fallback will be used. */
  brandIcon: SimpleIconData;
  /** Copy category; picks the sample message in the hero demo. */
  category?: string;

  heroBadgeText: string;
  heroTitle: string;
  heroDescription: string;

  featuresTitle: string;
  featuresDescription: string;
  features: UseCaseFeature[];

  howItWorksTitle: string;
  howItWorksDescription: string;
  steps: UseCaseStep[];

  useCasesTitle: string;
  useCasesDescription: string;
  useCases: UseCaseScenario[];

  faqTitle: string;
  faqs: UseCaseFaq[];

  ctaTitle: string;
  ctaDescription: string;
  ctaPrimaryText: string;
  ctaPrimaryHref: string;
  ctaSecondaryText?: string;
  ctaSecondaryHref?: string;
};

function BrandTile({ icon, color }: { icon: SimpleIconData; color: string }) {
  return (
    <span className="flex h-6 w-6 items-center justify-center rounded-md" style={{ background: `${color}1f` }}>
      {icon ? (
        <svg width={13} height={13} viewBox="0 0 24 24" fill={color} role="img" aria-label={icon.title}>
          <path d={icon.path} />
        </svg>
      ) : (
        <span className="h-2 w-2 rounded-full" style={{ background: color }} />
      )}
    </span>
  );
}

/* A scenario as a ticket: the story on the left, a torn-off stub with the outcome. */
function ScenarioTicket({ item, index }: { item: UseCaseScenario; index: number }) {
  const outcome = item.timeSaved ? { label: "Time saved", value: item.timeSaved } : item.result ? { label: "Result", value: item.result } : null;
  return (
    <Reveal delay={index * 0.06}>
      <article className="flex h-full overflow-hidden rounded-2xl bg-raised shadow-[0_0_0_1px_var(--o-line),0_12px_28px_-20px_rgba(51,48,42,0.35)] transition-transform duration-300 hover:-translate-y-1">
        <div className="flex-1 p-6">
          <span className="font-display text-xs font-semibold text-brand">{String(index + 1).padStart(2, "0")}</span>
          <h3 className="display-3 mt-2 text-ink">{item.title}</h3>
          {item.scenario && <p className="mt-2 font-display text-[13px] text-ink-faint">{item.scenario}</p>}
          <p className="mt-3 text-[14.5px] leading-relaxed text-ink-soft">{item.withOravo}</p>
        </div>
        {outcome && (
          <div className="relative flex w-32 shrink-0 flex-col items-center justify-center border-l-[1.5px] border-dashed border-line bg-canvas p-4 text-center sm:w-36">
            <span className="absolute -left-[9px] -top-[9px] h-4 w-4 rounded-full bg-paper ring-1 ring-line" aria-hidden="true" />
            <span className="absolute -bottom-[9px] -left-[9px] h-4 w-4 rounded-full bg-paper ring-1 ring-line" aria-hidden="true" />
            <span className="eyebrow !text-[10px]">{outcome.label}</span>
            <span className={`mt-1.5 font-display font-bold leading-tight text-primary-500 ${outcome.value.length > 12 ? "text-[13.5px]" : "text-[22px]"}`}>
              {outcome.value}
            </span>
          </div>
        )}
      </article>
    </Reveal>
  );
}

export function UseCasePageTemplate({ config }: { config: UseCasePageConfig }) {
  const accent = config.accentColor;
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Home", url: "https://oravo.ai" },
    { name: "Use Cases", url: "https://oravo.ai/use-cases" },
    { name: config.appName, url: "https://oravo.ai" + config.route },
  ]);

  return (
    <MarketingShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(config.faqs)) }} />

      <PageHero
        eyebrow={config.heroBadgeText}
        eyebrowIcon={<BrandTile icon={config.brandIcon} color={accent} />}
        title={config.heroTitle}
        description={config.heroDescription}
        primary={{ label: config.ctaPrimaryText, href: config.ctaPrimaryHref }}
        secondary={config.ctaSecondaryHref && config.ctaSecondaryText ? { label: config.ctaSecondaryText, href: config.ctaSecondaryHref } : undefined}
        note="Free plan · Mac, Windows and Android"
        doodles={["speech", "plane"]}
        visual={<AppDictationDemo appName={config.appName} icon={config.brandIcon} accent={accent} category={config.category} />}
      />

      <Band color="var(--o-paper)" from="var(--o-band-sand)" blend={200} className="pt-24 pb-20 sm:pt-28 sm:pb-24">
        <div className={SHELL}>
          <SectionIntro doodle="sparkle" eyebrow={`Oravo in ${config.appName}`} title={config.featuresTitle} lede={config.featuresDescription} />
          <div className="mt-12">
            <FeatureGrid items={config.features} />
          </div>
        </div>
      </Band>

      <Band color="var(--o-band-clay)" from="var(--o-paper)" blend={200} className="pt-24 pb-20 sm:pt-28 sm:pb-24">
        <div className={SHELL}>
          <SectionIntro doodle="hotkey" eyebrow="Set up in two minutes" title={config.howItWorksTitle} lede={config.howItWorksDescription} />
          <div className="mt-14">
            <StepsTimeline steps={config.steps} />
          </div>
        </div>
      </Band>

      <Band color="var(--o-paper)" from="var(--o-band-clay)" blend={200} className="pt-24 pb-20 sm:pt-28 sm:pb-24">
        <div className={SHELL}>
          <SectionIntro doodle="bubbles" eyebrow="Real workflows" title={config.useCasesTitle} lede={config.useCasesDescription} />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {config.useCases.map((item, i) => (
              <ScenarioTicket key={item.title} item={item} index={i} />
            ))}
          </div>
        </div>
      </Band>

      <Band color="var(--o-canvas)" from="var(--o-paper)" className="py-20 sm:py-24">
        <div className="mx-auto w-full max-w-3xl px-5 sm:px-8">
          <SectionIntro doodle="question" eyebrow="FAQ" title={config.faqTitle} />
          <Reveal className="mt-10">
            <FaqAccordion items={config.faqs} />
          </Reveal>
        </div>
      </Band>

      <Band color="var(--o-blush)" from="var(--o-canvas)" className="pt-16 pb-20 sm:pt-20">
        <div className={SHELL}>
          <CtaPanel
            title={config.ctaTitle}
            description={config.ctaDescription}
            primary={{ label: config.ctaPrimaryText, href: config.ctaPrimaryHref }}
            secondary={config.ctaSecondaryHref && config.ctaSecondaryText ? { label: config.ctaSecondaryText, href: config.ctaSecondaryHref } : undefined}
          />
        </div>
      </Band>
    </MarketingShell>
  );
}

import { Band } from "@/components/landing/Band";
import { FaqAccordion } from "@/components/landing/FaqAccordion";
import { MarketingShell } from "@/components/landing/MarketingShell";
import { CheckList, CtaPanel, FeatureGrid, PageHero, SectionIntro, StepsTimeline } from "@/components/landing/PageBlocks";
import { Reveal } from "@/components/landing/Reveal";
import { SHELL } from "@/components/landing/shell";
import { faqJsonLd } from "@/lib/faq";
import type { LanguagePairConfig } from "@/lib/languagePairPages";
import { LanguagePairDemo } from "./LanguagePairDemo";

export function LanguagePairPageTemplate({ config }: { config: LanguagePairConfig }) {
  const language = config.sourceLanguage;

  return (
    <MarketingShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(config.faqs)) }} />

      <PageHero
        eyebrow={config.heroBadge}
        eyebrowIcon={<span className="text-base leading-none">{config.flag}</span>}
        title={`${config.heroTitle} ${config.heroHighlight}`}
        description={
          <>
            {config.heroDescription} <span className="text-ink-faint">{config.heroSubDescription}</span>
          </>
        }
        primary={{ label: "Download free", href: "/download" }}
        secondary={{ label: "See how it works", href: "/how-to-use" }}
        note="Real-time translation · 60+ languages · Mac, Windows and Android"
        doodles={["globe", "bubbles"]}
        visual={<LanguagePairDemo language={language} flag={config.flag} accent={config.accentColor} />}
      />

      <Band color="var(--o-paper)" from="var(--o-band-sand)" blend={200} className="pt-24 pb-20 sm:pt-28 sm:pb-24">
        <div className={SHELL}>
          <SectionIntro
            doodle="globe"
            eyebrow={`${language} to English`}
            title={`Why ${language} speakers write with Oravo`}
            lede={`Think in ${language}. Send fluent, professional English in any app.`}
          />
          <div className="mt-12">
            <FeatureGrid items={config.features} />
          </div>
        </div>
      </Band>

      <Band color="var(--o-band-clay)" from="var(--o-paper)" blend={200} className="pt-24 pb-20 sm:pt-28 sm:pb-24">
        <div className={SHELL}>
          <SectionIntro doodle="hotkey" eyebrow="How it works" title={`Speak ${language}. Get English.`} lede="Three steps, and it works in every app where you can type." />
          <div className="mt-14">
            <StepsTimeline steps={config.steps} />
          </div>
        </div>
      </Band>

      <Band color="var(--o-paper)" from="var(--o-band-clay)" blend={200} className="pt-24 pb-20 sm:pt-28 sm:pb-24">
        <div className={`${SHELL} grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]`}>
          <SectionIntro align="left" doodle="speech" eyebrow="Works where you write" title="Your English, in every app you use." lede="Emails, chat, docs, tickets and prompts. Oravo types where your cursor is." />
          <Reveal delay={0.1}>
            <div className="frame-dotted bg-raised/70 p-6 sm:p-8">
              <CheckList
                items={[
                  `Speak naturally in ${language}, including mixed ${language} and English`,
                  "Oravo writes fluent, context-aware English, not a word-for-word translation",
                  "Tone adapts to the app: casual in chat, professional in email",
                  "Punctuation, paragraphs and formatting are added for you",
                  "Works in reverse when you need to reply in your own language",
                ]}
              />
            </div>
          </Reveal>
        </div>
      </Band>

      <Band color="var(--o-canvas)" from="var(--o-paper)" className="py-20 sm:py-24">
        <div className="mx-auto w-full max-w-3xl px-5 sm:px-8">
          <SectionIntro doodle="question" eyebrow="FAQ" title={`${language} to English: common questions`} />
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
            primary={{ label: "Download free", href: "/download" }}
            secondary={{ label: "See pricing", href: "/pricing" }}
            doodle="globe"
          />
        </div>
      </Band>
    </MarketingShell>
  );
}

import type { Metadata } from "next";
import { ArrowRight, BookA, Briefcase, Languages, Lock, PenLine, Scale, Sparkles, Stethoscope, Target } from "lucide-react";
import { Band } from "@/components/landing/Band";
import { Doodle } from "@/components/landing/Doodle";
import { MarketingShell } from "@/components/landing/MarketingShell";
import { PageHero, SectionIntro } from "@/components/landing/PageBlocks";
import { Parallax } from "@/components/landing/Parallax";
import { Reveal } from "@/components/landing/Reveal";
import { ClosingBand, FaqBand, JsonLd, RelatedBand } from "@/components/product-pages/blocks";
import { MemoDictationDemo } from "@/components/product-pages/ProductPageDemos";
import { SHELL } from "@/components/product-pages/shell";
import { faqJsonLd, type FaqItem } from "@/lib/faq";

export const metadata: Metadata = {
  title: "Voice Dictation Software | Best AI Dictation App 2024",
  description:
    "Best voice dictation software for professionals. AI-powered with accent support & translation. 4x faster than typing. Free trial.",
  keywords: [
    "voice dictation software",
    "dictation software",
    "best dictation software",
    "professional dictation software",
    "AI dictation software",
    "voice dictation app",
    "dictation program",
    "speech dictation software",
    "dictation software free",
    "best voice dictation",
    "dictation tools",
    "voice recognition software",
    "dictation application",
    "Dragon dictation alternative",
    "professional voice dictation",
  ],
  openGraph: {
    title: "Voice Dictation Software | Best AI Dictation App 2024",
    description: "Best voice dictation software for professionals. AI-powered with accent support. 4x faster.",
    url: "https://oravo.ai/voice-dictation-software",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Voice Dictation Software | Oravo",
    description: "Best voice dictation software for professionals. 4x faster than typing.",
  },
  alternates: {
    canonical: "https://oravo.ai/voice-dictation-software",
  },
};

const FAQS: FaqItem[] = [
  {
    question: "What is voice dictation software?",
    answer:
      "Voice dictation software converts your speech into written text. Instead of typing, you speak into a microphone and the software transcribes your words. Oravo uses AI to ensure high accuracy.",
  },
  {
    question: "Is Oravo better than Dragon NaturallySpeaking?",
    answer:
      "Oravo is built for accent support and real-time translation, with a modern interface and cross-platform apps. It's also more affordable, with transparent pricing.",
  },
  {
    question: "Can I use it for medical or legal dictation?",
    answer:
      "Yes. You can add custom medical or legal terminology so specialist terms come out right. If you work with regulated data, review Oravo's privacy policy and your organization's requirements before you start.",
  },
  {
    question: "Does it work with my accent?",
    answer: "Yes! Oravo is specifically built to understand non-native English speakers and accents.",
  },
];

const FEATURES = [
  { icon: Target, title: "AI-Powered Accuracy", description: "State-of-the-art speech recognition that learns your voice and holds up with accents." },
  { icon: Languages, title: "Real-Time Translation", description: "Dictate in Spanish, Chinese, Hindi—get perfect English text. Built for global teams." },
  { icon: PenLine, title: "Smart Formatting", description: "Automatic punctuation, paragraphs, and capitalization. Professional output with minimal editing." },
  {
    icon: Lock,
    title: "Privacy-First",
    description: "Your dictation is never used to train our models, and the privacy policy spells out how voice is processed, so your team can review it first.",
  },
  { icon: Briefcase, title: "Works Everywhere", description: "Google Docs, Microsoft Office, Slack, Gmail, CRM systems—dictate in any application." },
  { icon: BookA, title: "Custom Vocabulary", description: "Add industry terms, names, and jargon to your dictionary for perfect recognition." },
];

const MADE_FOR = [
  { icon: Stethoscope, label: "Healthcare", href: "/for-healthcare" },
  { icon: Scale, label: "Legal", href: "/for-lawyers" },
  { icon: Briefcase, label: "Sales", href: "/for-sales" },
  { icon: PenLine, label: "Writers", href: "/for-writers" },
];

const DRAGON = [
  { label: "Translation", oravo: "Speak 60+ languages, type English", other: "Not included" },
  { label: "Platforms", oravo: "Mac, Windows and Android", other: "Windows-first" },
  { label: "Pricing", oravo: "Free plan, Pro from $9.99/mo", other: "Paid licence" },
];

const RELATED = [
  { title: "All Features", href: "/features", note: "Everything Oravo does" },
  { title: "Best Dictation App", href: "/dictation-app", note: "Accents and translation" },
  { title: "Voice to Text App", href: "/voice-to-text-app", note: "Speech to text on every device" },
  { title: "For Healthcare", href: "/for-healthcare", note: "Notes and letters" },
  { title: "For Lawyers", href: "/for-lawyers", note: "Memos and case notes" },
  { title: "All Use Cases", href: "/use-cases", note: "50+ app guides" },
];

export default function VoiceDictationSoftwarePage() {
  return (
    <MarketingShell>
      <JsonLd data={faqJsonLd(FAQS)} />

      <PageHero
        eyebrow="Professional dictation"
        eyebrowIcon={<Sparkles aria-hidden="true" className="h-3.5 w-3.5 text-brand" />}
        title="Voice Dictation Software"
        description="Professional voice dictation software powered by AI. Dictate documents, emails, and notes 4x faster than typing. Perfect for non-native English speakers."
        primary={{ label: "Try free", href: "/download" }}
        secondary={{ label: "See demo", href: "/how-to-use" }}
        note="Mac & Windows · 60+ languages · Custom vocabulary"
        doodles={["notebook", "scales"]}
        visual={<MemoDictationDemo />}
      />

      {/* Why professionals */}
      <Band color="var(--o-paper)" from="var(--o-band-sand)" blend={200} className="pt-24 pb-20 sm:pt-28 sm:pb-28">
        <div className={`${SHELL} grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16`}>
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionIntro
              align="left"
              doodle="notebook"
              eyebrow="Why Oravo"
              title="Why Professionals Choose Oravo"
              lede="Professional-grade dictation software that understands every accent."
            />
            <Reveal delay={0.2}>
              <p className="mt-8 eyebrow">Made for</p>
              <ul className="mt-3 grid grid-cols-2 gap-2">
                {MADE_FOR.map((m) => (
                  <li key={m.href}>
                    <a href={m.href} className="group flex items-center gap-2.5 rounded-lg bg-raised px-3 py-2.5 font-display text-[13.5px] font-semibold text-ink ring-1 ring-line transition-colors hover:ring-ink/25">
                      <m.icon aria-hidden="true" className="h-4 w-4 text-ink-soft transition-transform group-hover:-rotate-6" />
                      {m.label}
                      <ArrowRight aria-hidden="true" className="ml-auto h-3.5 w-3.5 text-ink-faint opacity-0 transition-opacity group-hover:opacity-100" />
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <ol className="relative space-y-4">
            <span className="absolute bottom-6 left-[27px] top-6 hidden w-px border-l border-dashed border-ink/20 sm:block" aria-hidden="true" />
            {FEATURES.map((f, i) => (
              <Reveal as="li" key={f.title} delay={0.05 * i}>
                <div className="group relative flex gap-5 rounded-2xl bg-raised p-5 shadow-[0_0_0_1px_var(--o-line)] transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_0_1px_rgba(51,48,42,0.2),0_16px_32px_-22px_rgba(51,48,42,0.4)] sm:p-6">
                  <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-canvas text-ink-soft ring-1 ring-line transition-colors group-hover:text-ink">
                    <f.icon aria-hidden="true" className="h-[18px] w-[18px]" strokeWidth={1.75} />
                  </span>
                  <span>
                    <span className="font-display text-[11.5px] font-semibold text-brand">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="mt-0.5 font-display text-[16.5px] font-semibold tracking-[-0.01em] text-ink">{f.title}</h3>
                    <p className="mt-1.5 text-[14.5px] leading-relaxed text-ink-soft">{f.description}</p>
                  </span>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </Band>

      {/* Switching from Dragon */}
      <Band color="var(--o-band-clay)" from="var(--o-paper)" blend={200} className="pt-24 pb-20 sm:pt-28 sm:pb-24">
        <Parallax speed={90} className="pointer-events-none absolute -left-28 top-24" aria-hidden="true">
          <div className="h-80 w-80 rounded-full bg-sand" />
        </Parallax>
        <Parallax speed={-40} className="pointer-events-none absolute right-[5%] top-28 hidden xl:block" aria-hidden="true">
          <Doodle name="plane" className="w-32" />
        </Parallax>
        <div className={`${SHELL} relative grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]`}>
          <div>
            <SectionIntro
              align="left"
              doodle="scales"
              eyebrow="Switching from Dragon?"
              title="A modern Dragon alternative"
              lede="Dragon set the standard for desktop dictation. Oravo brings it to every app and every accent, with translation built in."
            />
            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="/compare/dragon" className="btn-neutral">
                  Oravo vs Dragon
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.1} y={24}>
            <div className="relative">
              <div className="absolute inset-0 -rotate-2 rounded-2xl bg-sand-deep" aria-hidden="true" />
              <div className="relative overflow-hidden rounded-2xl bg-raised shadow-[0_0_0_1px_var(--o-line),0_30px_60px_-36px_rgba(51,48,42,0.5)]">
                <div className="grid grid-cols-[0.9fr_1fr_1fr] border-b border-line bg-canvas px-5 py-3.5 sm:px-6">
                  <span className="eyebrow">At a glance</span>
                  <span className="font-display text-[13px] font-semibold text-brand">Oravo</span>
                  <span className="font-display text-[13px] font-semibold text-ink-soft">Dragon</span>
                </div>
                {DRAGON.map((row) => (
                  <div key={row.label} className="grid grid-cols-[0.9fr_1fr_1fr] items-center gap-3 border-b border-line px-5 py-4 last:border-b-0 sm:px-6">
                    <span className="font-display text-[13px] font-semibold text-ink">{row.label}</span>
                    <span className="text-[13.5px] leading-snug text-ink">{row.oravo}</span>
                    <span className="text-[13.5px] leading-snug text-ink-faint">{row.other}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Band>

      <FaqBand title="Frequently Asked Questions" items={FAQS} color="var(--o-paper)" from="var(--o-band-clay)" />

      <RelatedBand title="Related Topics" lede="Dictation for your profession and platform." links={RELATED} color="var(--o-canvas)" from="var(--o-paper)" doodle="notebook" />

      <ClosingBand
        from="var(--o-canvas)"
        eyebrow="Free trial"
        title="Try Professional Voice Dictation"
        description="Dictate 4x faster with Oravo. Free to try, no credit card required."
        primary={{ label: "Download free", href: "/download" }}
        footnote={["Mac & Windows", "Free trial", "No credit card"]}
      />
    </MarketingShell>
  );
}

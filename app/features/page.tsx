import type { Metadata } from "next";
import { ArrowRight, Check, Lock, Sparkles } from "lucide-react";
import { Band } from "@/components/landing/Band";
import { Doodle } from "@/components/landing/Doodle";
import { MarketingShell } from "@/components/landing/MarketingShell";
import { PageHero, SectionIntro } from "@/components/landing/PageBlocks";
import { SHELL } from "@/components/product-pages/shell";
import { Parallax } from "@/components/landing/Parallax";
import { Reveal } from "@/components/landing/Reveal";
import { ClosingBand, FaqBand, JsonLd } from "@/components/product-pages/blocks";
import { AppDeckHero, DevEditorDemo, PersonalizeBento, PlatformShelf, RefineShowcase, SpeakShowcase } from "@/components/product-pages/FeatureDemos";
import { faqJsonLd, type FaqItem } from "@/lib/faq";

export const metadata: Metadata = {
  title: "Voice to Text Features | AI Dictation & Speech Recognition | Oravo",
  description:
    "Discover Oravo's powerful voice-to-text features: real-time transcription, automatic punctuation, 60+ languages, smart formatting, custom vocabulary, and seamless app integration. Type 4x faster with AI dictation.",
  keywords: [
    "voice to text features",
    "speech to text software",
    "AI dictation features",
    "voice typing capabilities",
    "automatic punctuation",
    "multi-language dictation",
    "real-time translation",
    "voice recognition software",
    "dictation app features",
    "speech recognition technology",
    "hands-free typing",
    "voice keyboard features",
    "AI transcription",
    "voice input software",
    "dictation accuracy",
    "natural language processing",
    "voice commands",
    "text formatting voice",
    "professional dictation",
    "enterprise voice to text",
    "custom vocabulary dictation",
    "filler word removal",
    "voice shortcuts",
    "developer dictation",
    "code dictation",
    "whisper mode dictation",
    "backtrack voice correction",
    "voice snippets",
    "team dictation tools",
    "Whisper Flow alternative",
    "Willow Voice alternative",
    "Wispr Flow alternative",
    "Dragon alternative",
    "Otter.ai alternative",
    "Notta alternative",
    "Speechnotes alternative",
    "Voice In alternative",
    "Superwhisper alternative",
    "MacWhisper alternative",
    "best dictation for non-native English speakers",
    "write English like a native speaker",
  ],
  openGraph: {
    title: "Voice to Text Features | AI Dictation & Speech Recognition | Oravo",
    description:
      "Speak naturally. Oravo transcribes, formats, and translates your words into polished text — in any app, any language. 4x faster than typing.",
    url: "https://oravo.ai/features",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Voice to Text Features | Oravo AI",
    description:
      "Discover Oravo's powerful voice-to-text features. Perfect transcription with automatic punctuation, 60+ languages, and seamless integration.",
  },
  alternates: {
    canonical: "https://oravo.ai/features",
  },
};

const FAQS: FaqItem[] = [
  {
    question: "Does Oravo work in all apps?",
    answer:
      "Yes. Oravo works anywhere you can type—browsers, desktop apps, documents, emails, chat apps, and more. It's a system-level voice keyboard that works in Notion, Gmail, Google Docs, Slack, and any text field on your computer.",
  },
  {
    question: "How accurate is Oravo's transcription?",
    answer:
      "Oravo is built for real speech, including strong accents. It uses context to spell names, dates, and technical terms, learns your vocabulary, and cleans up the text as it types, so there is far less to fix afterwards. We're publishing an accent benchmark so you can inspect the method and results.",
  },
  {
    question: "Can I dictate in languages other than English?",
    answer:
      "Yes. Oravo supports 60+ languages including Spanish, Hindi, Chinese, Korean, Arabic, French, German, and more. You can also translate your speech in real time—speak in Spanish, get text in English.",
  },
  {
    question: "Does Oravo clean up my speech automatically?",
    answer:
      "Yes. Oravo automatically removes filler words like 'um' and 'uh', adds punctuation based on your natural pauses, and handles corrections when you change your mind mid-sentence.",
  },
  {
    question: "Can I add industry-specific terminology?",
    answer:
      "Absolutely. Oravo learns your specialized vocabulary—medical terminology, legal phrases, tech acronyms—after hearing them once. Add terms manually or let Oravo learn from your corrections.",
  },
  {
    question: "Is my data secure with Oravo?",
    answer:
      "Oravo is designed privacy-first: your dictation isn't used to train our models, and you stay in control of your history. Read the privacy policy for exact details on how voice is processed and retained.",
  },
];

const EXPLORE: { heading: string; links: { title: string; href: string }[] }[] = [
  {
    heading: "By Platform",
    links: [
      { title: "Speech to Text Mac", href: "/speech-to-text-mac" },
      { title: "Speech to Text Windows", href: "/speech-to-text-windows" },
      { title: "Voice to Text App", href: "/voice-to-text-app" },
      { title: "Dictation App", href: "/dictation-app" },
      { title: "Voice Dictation Software", href: "/voice-dictation-software" },
    ],
  },
  {
    heading: "By Profession",
    links: [
      { title: "Healthcare", href: "/for-healthcare" },
      { title: "Lawyers", href: "/for-lawyers" },
      { title: "Students", href: "/for-students" },
      { title: "Developers", href: "/for-developers" },
      { title: "Creators", href: "/for-creators" },
      { title: "Writers", href: "/for-writers" },
      { title: "Sales Teams", href: "/for-sales" },
      { title: "Accessibility", href: "/for-accessibility" },
    ],
  },
  {
    heading: "By Language & Accent",
    links: [
      { title: "Voice Typing with Translation", href: "/voice-typing-with-translation" },
      { title: "Voice Typing for Accents", href: "/voice-typing-for-accents" },
      { title: "Spanish Speech to Text", href: "/speech-to-text-spanish" },
    ],
  },
];

const PRIVACY = [
  "Your dictation is never used to train our models",
  "Encrypted processing",
  "Complete control over your information",
  "A plain-language privacy policy you can check",
];

const DEV_POINTS = [
  {
    title: "File Tagging",
    description: "Using Cursor or VS Code? Oravo recognizes filenames as you speak and automatically tags the right file in your workspace.",
  },
  {
    title: "Syntax Awareness",
    description: "Preserves exact spacing, formatting, camelCase, snake_case, acronyms, and CLI commands. Code stays code.",
  },
  {
    title: "Dev Terminology",
    description: "Automatically recognizes Supabase, Cloudflare, Vercel, React, TypeScript, and thousands of tech terms.",
  },
];

export default function FeaturesPage() {
  return (
    <MarketingShell>
      <JsonLd data={faqJsonLd(FAQS)} />

      <PageHero
        eyebrow="Feature highlights"
        eyebrowIcon={<Sparkles aria-hidden="true" className="h-3.5 w-3.5 text-brand" />}
        title="Voice to Text, Perfected"
        description="Speak naturally. Oravo transcribes, formats, and translates your words into polished text — in any app, any language."
        primary={{ label: "Download free", href: "/download" }}
        secondary={{ label: "See how it works", href: "/how-to-use" }}
        note="4x faster than typing · Works everywhere · Mac, Windows and Android"
        doodles={["sparkle", "windows"]}
        visual={<AppDeckHero />}
      />

      {/* Speak */}
      <Band color="var(--o-paper)" from="var(--o-band-sand)" blend={200} className="pt-24 pb-20 sm:pt-28 sm:pb-28">
        <Parallax speed={-60} className="pointer-events-none absolute -right-28 top-24 hidden lg:block" aria-hidden="true">
          <div className="h-64 w-64 rounded-full bg-canvas" />
        </Parallax>
        <div className={`${SHELL} relative`}>
          <SpeakShowcase
            intro={
              <SectionIntro
                align="left"
                doodle="mic"
                eyebrow="Dictation"
                title="Speak Naturally. Oravo Does the Rest."
                lede="AI-powered dictation that understands context, accents, and technical jargon. Works in noisy environments."
              />
            }
          />
        </div>
      </Band>

      {/* Refine */}
      <Band color="var(--o-band-clay)" from="var(--o-paper)" blend={200} className="pt-24 pb-20 sm:pt-28 sm:pb-28">
        <Parallax speed={70} className="pointer-events-none absolute left-[4%] top-36 hidden xl:block" aria-hidden="true">
          <Doodle name="bubbles" className="w-36" />
        </Parallax>
        <div className={`${SHELL} relative`}>
          <SectionIntro
            doodle="scribble"
            eyebrow="Auto-formatting"
            title="Clean, Polished Text. Automatically."
            lede="Punctuation, paragraphs, and capitalization added automatically. Just speak naturally."
          />
          <div className="mt-10">
            <RefineShowcase />
          </div>
        </div>
      </Band>

      {/* Personalize */}
      <Band color="var(--o-paper)" from="var(--o-band-clay)" blend={200} className="pt-24 pb-20 sm:pt-28 sm:pb-28">
        <div className={SHELL}>
          <div className="grid items-end gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <SectionIntro
              align="left"
              doodle="notebook"
              eyebrow="Personalization"
              title="Learns Your Style. Speaks Your Language."
              lede="AI learns your writing style, recognizes names, dates, and technical terms automatically."
            />
            <Reveal delay={0.15} className="hidden lg:block">
              <p className="ml-auto max-w-sm border-l-2 border-brand pl-5 font-serif text-[1.2rem] leading-snug text-ink-soft">
                The more you speak, the more it sounds like you, and the less you edit.
              </p>
            </Reveal>
          </div>
          <div className="mt-12">
            <PersonalizeBento />
          </div>
        </div>
      </Band>

      {/* Developers */}
      <Band color="var(--o-band-mist)" from="var(--o-paper)" blend={200} className="pt-24 pb-20 sm:pt-28 sm:pb-24">
        <Parallax speed={90} className="pointer-events-none absolute -left-24 bottom-10" aria-hidden="true">
          <div className="h-72 w-72 rounded-full bg-paper/50" />
        </Parallax>
        <div className={`${SHELL} relative grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]`}>
          <div>
            <SectionIntro
              align="left"
              doodle="windows"
              eyebrow="For developers"
              title="Built for Code, Not Just Prose"
              lede="Oravo understands syntax, file names, and code formatting—so your voice fits seamlessly into your IDE."
            />
            <ul className="mt-8 divide-y divide-ink/10 border-y border-ink/10">
              {DEV_POINTS.map((p, i) => (
                <Reveal as="li" key={p.title} delay={0.1 + i * 0.08}>
                  <div className="flex gap-4 py-4">
                    <span className="pt-0.5 font-display text-[12px] font-semibold text-brand">{String(i + 1).padStart(2, "0")}</span>
                    <span>
                      <span className="block font-display text-[15px] font-semibold text-ink">{p.title}</span>
                      <span className="mt-1 block text-[14px] leading-relaxed text-ink-soft">{p.description}</span>
                    </span>
                  </div>
                </Reveal>
              ))}
            </ul>
            <Reveal delay={0.3}>
              <a href="/for-developers" className="group mt-7 inline-flex items-center gap-2 font-display text-[14px] font-semibold text-primary-500 underline-offset-4 hover:underline">
                Learn more about developer features
                <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Reveal>
          </div>
          <Reveal delay={0.15} y={24}>
            <Parallax speed={28}>
              <DevEditorDemo />
            </Parallax>
          </Reveal>
        </div>
      </Band>

      {/* Platforms */}
      <Band color="var(--o-canvas)" from="var(--o-band-mist)" blend={200} className="pt-24 pb-20 sm:pt-28 sm:pb-24">
        <div className={SHELL}>
          <SectionIntro
            doodle="hotkey"
            eyebrow="Platforms"
            title="Available on All Your Devices"
            lede="Native apps for Mac, Windows and Android, with iOS coming soon. Your vocabulary and settings sync across every device."
          />
          <div className="mt-12">
            <PlatformShelf />
          </div>
        </div>
      </Band>

      {/* Privacy */}
      <Band color="var(--o-band-sand)" from="var(--o-canvas)" blend={200} className="pt-24 pb-20 sm:pt-28 sm:pb-24">
        <Parallax speed={110} className="pointer-events-none absolute -right-24 top-20" aria-hidden="true">
          <div className="h-80 w-80 rotate-12 rounded-[56px] bg-sand-deep" />
        </Parallax>
        <div className={`${SHELL} relative grid items-center gap-12 lg:grid-cols-2`}>
          <Reveal y={24} className="order-2 lg:order-1">
            <div className="relative mx-auto max-w-md">
              <div className="absolute inset-0 translate-x-3 translate-y-3 rotate-2 rounded-2xl bg-clay" aria-hidden="true" />
              <div className="paper-ruled relative rounded-2xl p-7 shadow-[0_0_0_1px_var(--o-line),0_30px_60px_-36px_rgba(51,48,42,0.5)] sm:p-8">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-canvas text-ink-soft ring-1 ring-line">
                    <Lock aria-hidden="true" className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-display text-[14px] font-semibold text-ink">Your words, your control</p>
                    <p className="font-display text-[12px] text-ink-faint">How Oravo treats your voice</p>
                  </div>
                </div>
                <ul className="mt-6 space-y-3.5">
                  {PRIVACY.map((item, i) => (
                    <Reveal as="li" key={item} delay={0.15 + i * 0.08}>
                      <span className="flex items-start gap-3 text-[15px] leading-relaxed text-ink">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-brand-soft text-brand">
                          <Check aria-hidden="true" className="h-3.5 w-3.5" strokeWidth={2.5} />
                        </span>
                        {item}
                      </span>
                    </Reveal>
                  ))}
                </ul>
                <a href="/privacy" className="mt-6 inline-flex font-display text-[13.5px] font-semibold text-primary-500 underline-offset-4 hover:underline">
                  Read the privacy policy
                </a>
              </div>
            </div>
          </Reveal>
          <div className="order-1 lg:order-2">
            <SectionIntro
              align="left"
              doodle="scales"
              eyebrow="Privacy & Security"
              title="Privacy-First Architecture"
              lede="Built for professionals who can't compromise on security. Encrypted processing and complete control over your information."
            />
          </div>
        </div>
      </Band>

      <FaqBand title="Frequently Asked Questions" items={FAQS} color="var(--o-paper)" from="var(--o-band-sand)" />

      {/* Explore more */}
      <Band color="var(--o-canvas)" from="var(--o-paper)" className="py-20 sm:py-24">
        <div className={SHELL}>
          <SectionIntro doodle="people" eyebrow="Explore more" title="Find Your Use Case" lede="Discover how Oravo works for your specific workflow." />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {EXPLORE.map((col, ci) => (
              <Reveal key={col.heading} delay={ci * 0.08}>
                <div className="h-full rounded-2xl bg-raised p-6 shadow-[0_0_0_1px_var(--o-line)]">
                  <h3 className="display-3 text-ink">{col.heading}</h3>
                  <ul className="mt-4 divide-y divide-line border-t border-line">
                    {col.links.map((link) => (
                      <li key={link.href}>
                        <a href={link.href} className="group flex items-center justify-between py-2.5 text-[14.5px] text-ink-soft transition-colors hover:text-ink">
                          {link.title}
                          <ArrowRight aria-hidden="true" className="h-3.5 w-3.5 -translate-x-1 text-brand opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2} className="mt-10 flex justify-center">
            <a href="/use-cases" className="btn-neutral">
              See all 50+ app integrations
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </a>
          </Reveal>
        </div>
      </Band>

      <ClosingBand
        from="var(--o-canvas)"
        eyebrow="Free to start"
        title="4x Faster Than Typing"
        description="Try in your next email, Slack message, or AI prompt. It's free and works everywhere."
        primary={{ label: "Download free", href: "/download" }}
        footnote={["No credit card required", "2-minute setup", "Works everywhere"]}
      />
    </MarketingShell>
  );
}

import type { Metadata } from "next";
import { Check, Keyboard, Minus } from "lucide-react";
import { Band } from "@/components/landing/Band";
import { Doodle } from "@/components/landing/Doodle";
import { MarketingShell } from "@/components/landing/MarketingShell";
import { PageHero, SectionIntro } from "@/components/landing/PageBlocks";
import { Parallax } from "@/components/landing/Parallax";
import { Reveal, RevealWords } from "@/components/landing/Reveal";
import { ClosingBand, FaqBand, JsonLd, NumberedFeatures, RelatedBand } from "@/components/product-pages/blocks";
import { HotkeyTypingDemo, TypingRace } from "@/components/product-pages/ProductPageDemos";
import { SHELL } from "@/components/product-pages/shell";
import { faqJsonLd, type FaqItem } from "@/lib/faq";

export const metadata: Metadata = {
  title: "Voice Typing — Type with Your Voice in Any App | Oravo",
  description:
    "Voice typing app that works everywhere — Gmail, Slack, Notion, Google Docs & 50+ apps. AI-powered, accent-friendly, supports 60+ languages. Free to try.",
  keywords: [
    "voice typing",
    "voice typing app",
    "best voice typing app",
    "voice typing online",
    "voice typing for Mac",
    "voice typing for Windows",
    "voice typing software",
    "voice typing Chrome",
    "voice typing Google Docs",
    "free voice typing",
    "AI voice typing",
    "voice typing extension",
    "fastest voice typing",
    "real-time voice typing",
    "voice typing for professionals",
    "voice typing for non-native speakers",
    "voice typing with accent support",
    "voice typing tool",
    "voice typing desktop app",
    "voice typing for PC",
  ],
  openGraph: {
    title: "Voice Typing — Type with Your Voice in Any App | Oravo",
    description:
      "AI voice typing that works in every app. 60+ languages, accent support. 4x faster than keyboard typing.",
    url: "https://oravo.ai/voice-typing",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Voice Typing App | Oravo",
    description:
      "AI voice typing that works in every app. 60+ languages, accent support.",
  },
  alternates: {
    canonical: "https://oravo.ai/voice-typing",
  },
};

const FAQS: FaqItem[] = [
  {
    question: "What is voice typing?",
    answer:
      "Voice typing is the process of converting spoken words into written text in real-time. Instead of pressing keys on a keyboard, you speak naturally and the software transcribes your voice into text. Oravo uses AI-powered voice typing across 60+ languages, adding punctuation and formatting as it goes.",
  },
  {
    question: "What is the best voice typing app?",
    answer:
      "Oravo is the best voice typing app for professionals and non-native English speakers. It works in any application (Gmail, Slack, Notion, Google Docs, and 50+ more), supports 60+ languages with real-time translation, and is built to handle accents.",
  },
  {
    question: "Is voice typing free?",
    answer:
      "Yes! Oravo has a free plan, and Pro starts with 5,000 free words, no credit card required. You can use voice typing in any app immediately after installing. Pro plans start at $9.99/month for unlimited voice typing.",
  },
  {
    question: "Does voice typing work with accents?",
    answer:
      "Oravo is specifically designed to understand all accents. Whether you're a non-native English speaker from India, China, Brazil, or anywhere else, Oravo's AI recognizes your speech patterns and produces accurate, natural English text.",
  },
  {
    question: "How is voice typing different from speech-to-text?",
    answer:
      "Voice typing and speech-to-text are essentially the same technology — converting spoken words to written text. Voice typing typically refers to real-time dictation within apps (like typing an email with your voice), while speech-to-text can also include transcription of recorded audio files.",
  },
  {
    question: "Can I use voice typing in Google Docs, Gmail, and Slack?",
    answer:
      "Yes! Oravo works as a system-level voice typing tool, meaning it works in any application on your computer — Google Docs, Gmail, Slack, Notion, Microsoft Word, WhatsApp, LinkedIn, Salesforce, and 50+ more apps. No browser extension needed.",
  },
];

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Oravo",
  applicationCategory: "ProductivityApplication",
  operatingSystem: "macOS, Windows, Android",
  description: "AI voice typing app that works in any application. 60+ languages, accent support. Type 4x faster with your voice.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Free plan; Pro starts with 5,000 free words, no credit card required",
  },
};

const FEATURES = [
  {
    title: "4x Faster Than Typing",
    description:
      "Average typing speed is 40 WPM. With Oravo voice typing, you hit 150+ WPM — compose emails, documents, and messages in a fraction of the time.",
  },
  {
    title: "Accurate and Context-Aware",
    description: "AI-powered speech recognition that understands context, adds punctuation, and gets names right, so there's little left to correct.",
  },
  {
    title: "Works in Every App",
    description: "Gmail, Slack, Notion, Google Docs, Word, WhatsApp, LinkedIn, Salesforce — Oravo voice typing works in any text field on your computer.",
  },
  {
    title: "60+ Languages",
    description: "Voice type in English, Spanish, Hindi, Chinese, Arabic, and 60+ more. Or speak one language and get text in another with real-time translation.",
  },
  {
    title: "Accent-Friendly",
    description: "Built for non-native English speakers. Whether you have an Indian, Chinese, Spanish, or any other accent — Oravo is built to understand you.",
  },
  {
    title: "Privacy-First",
    description: "Your voice is processed to write your text and is never used to train our models. The privacy policy spells out exactly how it's handled.",
  },
];

type Cell = boolean | string;
const COMPARISON: { feature: string; oravo: Cell; google: Cell; apple: Cell }[] = [
  { feature: "Works in any app", oravo: true, google: "Google Docs only", apple: "Apple devices only" },
  { feature: "Accent support", oravo: "Built for accents", google: "Fair", apple: "Fair" },
  { feature: "Real-time translation", oravo: true, google: false, apple: false },
  { feature: "Auto punctuation", oravo: true, google: "Limited", apple: true },
  { feature: "Smart formatting", oravo: true, google: false, apple: false },
];

function CellView({ value, strong }: { value: Cell; strong?: boolean }) {
  if (value === true)
    return (
      <span className={`inline-flex h-6 w-6 items-center justify-center rounded-md ${strong ? "bg-ink text-raised" : "bg-canvas text-ink-soft ring-1 ring-line"}`}>
        <Check aria-label="Yes" className="h-3.5 w-3.5" strokeWidth={2.75} />
      </span>
    );
  if (value === false)
    return (
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-canvas text-ink-faint ring-1 ring-line">
        <Minus aria-label="No" className="h-3.5 w-3.5" strokeWidth={2.5} />
      </span>
    );
  return <span className={`text-[13.5px] leading-snug ${strong ? "font-semibold text-ink" : "text-ink-soft"}`}>{value}</span>;
}

const RELATED = [
  { title: "Voice to Text App", href: "/voice-to-text-app", note: "Speech to text on every device" },
  { title: "Voice Dictation Software", href: "/voice-dictation-software", note: "For professional documents" },
  { title: "Speech to Text Mac", href: "/speech-to-text-mac", note: "The Mac app" },
  { title: "Voice Typing with Translation", href: "/voice-typing-with-translation", note: "Speak any language, type English" },
  { title: "Voice Typing for Accents", href: "/voice-typing-for-accents", note: "Built for how you speak" },
  { title: "vs Google Voice Typing", href: "/compare/google-voice-typing", note: "Side by side" },
];

export default function VoiceTypingPage() {
  return (
    <MarketingShell>
      <JsonLd data={faqJsonLd(FAQS)} />
      <JsonLd data={softwareJsonLd} />

      <PageHero
        eyebrow="Voice typing"
        eyebrowIcon={<Keyboard aria-hidden="true" className="h-3.5 w-3.5 text-brand" />}
        title="Voice Typing That Works in Every App"
        description="Voice typing for Mac, Windows and Android, with iOS coming soon. Press a hotkey, speak naturally, and get perfectly formatted text in Gmail, Slack, Notion, Google Docs, and 50+ apps."
        primary={{ label: "Try voice typing free", href: "/download" }}
        secondary={{ label: "See how it works", href: "/how-to-use" }}
        note="5,000 words free · Works in any app · 60+ languages"
        doodles={["hotkey", "speech"]}
        visual={<HotkeyTypingDemo />}
      />

      {/* What is voice typing */}
      <Band color="var(--o-paper)" from="var(--o-band-sand)" blend={200} className="pt-24 pb-20 sm:pt-28 sm:pb-28">
        <div className={`${SHELL} grid items-center gap-14 lg:grid-cols-[1fr_1fr]`}>
          <div>
            <Parallax speed={18} className="mb-4">
              <Doodle name="speed" className="w-28 sm:w-32" />
            </Parallax>
            <Reveal>
              <p className="eyebrow">The basics</p>
            </Reveal>
            <h2 className="display-2 mt-3 text-ink">
              <RevealWords text="What is Voice Typing?" />
            </h2>
            <div className="mt-6 space-y-4 text-[15.5px] leading-[1.7] text-ink-soft">
              <Reveal delay={0.1}>
                <p className="font-serif text-[1.3rem] leading-snug text-ink">
                  Voice typing lets you type with your voice instead of a keyboard. Speak naturally into your microphone and your words appear as text — in real-time,
                  in any app on your computer or phone.
                </p>
              </Reveal>
              <Reveal delay={0.16}>
                <p>
                  Unlike basic built-in dictation (like Google Voice Typing or Apple Dictation), Oravo is an AI-powered voice typing app that works system-wide. That means
                  you can voice type in Gmail, Slack, Notion, Google Docs, WhatsApp, LinkedIn — any text field on your device.
                </p>
              </Reveal>
              <Reveal delay={0.22}>
                <p>
                  Oravo&apos;s voice typing is built for professionals and non-native English speakers. It handles accents, adds punctuation and formatting
                  automatically, and even translates from 60+ languages to English in real-time.
                </p>
              </Reveal>
            </div>
          </div>
          <Reveal delay={0.15} y={24}>
            <Parallax speed={24}>
              <TypingRace />
            </Parallax>
          </Reveal>
        </div>
      </Band>

      {/* Features */}
      <Band color="var(--o-band-clay)" from="var(--o-paper)" blend={200} className="pt-24 pb-20 sm:pt-28 sm:pb-24">
        <Parallax speed={-70} className="pointer-events-none absolute -left-24 top-1/3" aria-hidden="true">
          <div className="h-72 w-72 rounded-full bg-sand" />
        </Parallax>
        <div className={`${SHELL} relative`}>
          <SectionIntro doodle="sparkle" eyebrow="Features" title="Why Oravo is the Best Voice Typing App" lede="AI-powered voice typing with features built for real work." />
          <div className="mt-12">
            <NumberedFeatures items={FEATURES} />
          </div>
        </div>
      </Band>

      {/* Comparison */}
      <Band color="var(--o-band-mist)" from="var(--o-band-clay)" blend={200} className="pt-24 pb-20 sm:pt-28 sm:pb-24">
        <Parallax speed={60} className="pointer-events-none absolute right-[5%] top-40 hidden xl:block" aria-hidden="true">
          <Doodle name="tag" className="w-36" />
        </Parallax>
        <div className={`${SHELL} relative`}>
          <SectionIntro doodle="scales" eyebrow="Compare" title="Oravo vs Other Voice Typing Tools" lede="How system-wide AI voice typing stacks up against the dictation built into your browser and OS." />
          <Reveal delay={0.1} className="mx-auto mt-12 max-w-4xl">
            <div className="overflow-x-auto rounded-2xl bg-raised shadow-[0_0_0_1px_var(--o-line),0_24px_50px_-34px_rgba(51,48,42,0.45)]">
              <table className="w-full min-w-[560px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-line bg-canvas">
                    <th scope="col" className="px-5 py-4 font-display text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-faint sm:px-7">
                      Feature
                    </th>
                    <th scope="col" className="bg-brand-soft/40 px-5 py-4 font-display text-[13.5px] font-semibold text-brand">
                      Oravo
                    </th>
                    <th scope="col" className="px-5 py-4 font-display text-[13px] font-semibold text-ink-soft">
                      Google Voice Typing
                    </th>
                    <th scope="col" className="px-5 py-4 font-display text-[13px] font-semibold text-ink-soft">
                      Apple Dictation
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.map((row) => (
                    <tr key={row.feature} className="border-b border-line last:border-b-0">
                      <th scope="row" className="px-5 py-4 font-display text-[14px] font-medium text-ink sm:px-7">
                        {row.feature}
                      </th>
                      <td className="bg-brand-soft/25 px-5 py-4">
                        <CellView value={row.oravo} strong />
                      </td>
                      <td className="px-5 py-4">
                        <CellView value={row.google} />
                      </td>
                      <td className="px-5 py-4">
                        <CellView value={row.apple} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-5 text-center font-display text-[13px] text-ink-soft">
              Full breakdowns:{" "}
              <a href="/compare/google-voice-typing" className="font-semibold text-primary-500 underline-offset-4 hover:underline">
                Oravo vs Google Voice Typing
              </a>{" "}
              ·{" "}
              <a href="/compare/apple-dictation" className="font-semibold text-primary-500 underline-offset-4 hover:underline">
                Oravo vs Apple Dictation
              </a>
            </p>
          </Reveal>
        </div>
      </Band>

      <FaqBand title="Voice Typing FAQ" items={FAQS} color="var(--o-paper)" from="var(--o-band-mist)" />

      <RelatedBand title="Related Topics" lede="Go deeper on voice typing for your setup." links={RELATED} color="var(--o-canvas)" from="var(--o-paper)" doodle="hotkey" />

      <ClosingBand
        from="var(--o-canvas)"
        eyebrow="5,000 words free"
        title="Start Voice Typing Today"
        description="Type 4x faster with your voice. 5,000 words free, no credit card required."
        primary={{ label: "Download free", href: "/download" }}
        footnote={["Mac, Windows & Android", "60+ languages", "No credit card"]}
      />
    </MarketingShell>
  );
}

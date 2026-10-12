import type { Metadata } from "next";
import Link from "next/link";
import { Band } from "@/components/landing/Band";
import { MarketingShell } from "@/components/landing/MarketingShell";
import { SectionIntro } from "@/components/landing/PageBlocks";
import { Reveal } from "@/components/landing/Reveal";
import { EmailDemo, ToneSwitcher } from "@/components/seo-pages/EmailDemo";
import { SpeedRace } from "@/components/seo-pages/MiniDemos";
import {
  CLAY,
  ClosingBand,
  CompareTable,
  FaqBand,
  MarginDoodle,
  MIST,
  PAPER,
  SAND,
  SeoHero,
  SHELL,
} from "@/components/seo-pages/SeoSections";
import { faqJsonLd, type FaqItem } from "@/lib/faq";

export const metadata: Metadata = {
  title:
    "Voice Dictation for Email & Messaging Apps — Gmail, Slack, Teams | Oravo",
  description:
    "Voice dictation software built for email and messaging. Dictate emails in Gmail, messages in Slack & Teams, and replies in WhatsApp — 4x faster than typing. AI-powered, works system-wide.",
  keywords: [
    "voice dictation software for email",
    "voice dictation for messaging apps",
    "dictate emails",
    "voice typing Gmail",
    "voice typing Slack",
    "voice dictation email",
    "dictate messages",
    "voice typing for email",
    "speech to text email",
    "voice typing Teams",
    "voice typing WhatsApp",
    "dictation for business email",
    "voice email app",
    "hands-free email",
    "voice to text Gmail",
    "speak to type email",
    "voice dictation Outlook",
    "dictation for Slack messages",
    "voice typing for professional email",
    "AI email dictation",
  ],
  openGraph: {
    title: "Voice Dictation for Email & Messaging | Oravo",
    description:
      "Dictate emails and messages 4x faster. Works in Gmail, Slack, Teams, WhatsApp & more. AI-powered voice dictation.",
    url: "https://oravo.ai/voice-dictation-for-email",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Voice Dictation for Email & Messaging | Oravo",
    description:
      "Dictate emails and messages 4x faster in Gmail, Slack, Teams & more.",
  },
  alternates: {
    canonical: "https://oravo.ai/voice-dictation-for-email",
  },
};

const APP_FEATURES = [
  {
    title: "Gmail & Outlook",
    description: "Dictate professional emails with automatic formatting, greetings, and sign-offs. Context-aware tone adjustment.",
  },
  {
    title: "Slack & Teams",
    description: "Quick voice messages with casual, natural tone. Perfect for status updates, standups, and team chat.",
  },
  {
    title: "WhatsApp & iMessage",
    description: "Hands-free messaging on desktop and Android. Speak naturally and send polished messages instantly.",
  },
  {
    title: "LinkedIn Messages",
    description: "Professional networking messages and connection requests. Sound polished without spending 10 minutes per message.",
  },
  {
    title: "Secure & Private",
    description: "Built with privacy in mind. Our privacy policy explains exactly how voice data is processed and retained.",
  },
  {
    title: "Multilingual Support",
    description: "Speak in Spanish, Hindi, or any of 60+ languages and get English emails. Perfect for non-native English speakers.",
  },
];

const FAQS: FaqItem[] = [
  {
    question: "What is the best voice dictation software for email?",
    answer:
      "Oravo is the best voice dictation software for email. Unlike browser-only tools, Oravo works system-wide — dictate in Gmail, Outlook, Apple Mail, or any email client. It automatically adjusts tone for professional emails, adds punctuation, and formats your text. It's an alternative to Willow Voice, Voice In, and Dragon for email dictation.",
  },
  {
    question: "Can I use voice dictation in Gmail?",
    answer:
      "Yes! Oravo works with Gmail. Press a hotkey, speak your email, and Oravo types it out with proper formatting, punctuation, and professional tone. No Chrome extension required — it works at the system level.",
  },
  {
    question: "Does voice dictation work in Slack and Microsoft Teams?",
    answer:
      "Yes. Oravo works in Slack, Microsoft Teams, WhatsApp, Discord, and any messaging app. It detects the app context and adjusts tone automatically — casual in Slack, professional in email, concise in messaging.",
  },
  {
    question: "How does Oravo compare to Willow Voice for email dictation?",
    answer:
      "Oravo offers context-aware dictation that adjusts tone based on whether you're in Gmail, Slack, or Teams. Oravo also supports 60+ languages with real-time translation, accent support for non-native speakers, and works in any app without browser extensions.",
  },
  {
    question: "Is voice dictation for email secure?",
    answer:
      "Oravo is built with privacy in mind. Check Oravo's current privacy policy for exact details about voice processing, retention, and third-party services before you use it for sensitive business communications.",
  },
];

const RELATED = [
  { label: "Voice Typing", href: "/voice-typing" },
  { label: "Voice Dictation Software", href: "/voice-dictation-software" },
  { label: "Voice Keyboard for Gmail", href: "/voice-keyboard-for-gmail" },
  { label: "Oravo vs Willow Voice", href: "/compare/willow-voice" },
  { label: "Voice to Text App", href: "/voice-to-text-app" },
];

export default function VoiceDictationForEmailPage() {
  const softwareJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Oravo - Voice Dictation for Email",
    applicationCategory: "ProductivityApplication",
    operatingSystem: "macOS, Windows, Android",
    description: "Voice dictation software for email and messaging apps. Dictate in Gmail, Slack, Teams, and any other app with AI-powered accuracy.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "5,000 words free, no credit card required",
    },
  };

  return (
    <MarketingShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }} />

      <SeoHero
        eyebrow="Email & Chat"
        lines={[{ text: "Voice Dictation for" }, { text: "Email & Messaging Apps", accent: true }]}
        description="Dictate emails in Gmail, messages in Slack, replies in Teams, all with your voice. Oravo detects the app and adjusts tone automatically. 4x faster than typing, with professional formatting built in."
        primary={{ label: "Try Free — 5,000 Words", href: "/download" }}
        secondary={{ label: "See How It Works", href: "/how-to-use" }}
        ticks={["Gmail, Outlook, Apple Mail", "Slack, Teams, WhatsApp", "No credit card"]}
        doodle="plane"
        visual={<EmailDemo />}
      />

      {/* How it works for email */}
      <Band color={PAPER} from={SAND} blend={200} className="pt-24 pb-20 sm:pt-28 sm:pb-24">
        <MarginDoodle name="notebook" position="right-[2%] top-24" speed={-40} />
        <div className={`${SHELL} grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16`}>
          <div>
            <SectionIntro align="left" doodle="speed" eyebrow="Why dictate email" title="How Voice Dictation Works for Email" />
            <Reveal delay={0.1}>
              <div className="mt-8 max-w-[600px] space-y-5 text-[16px] leading-[1.75] text-ink-soft">
                <p className="first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-serif first-letter:text-[52px] first-letter:leading-[0.85] first-letter:text-ink">
                  Many professionals write dozens of emails a day. At an average typing speed of 40 WPM, that&apos;s hours spent on the keyboard. Voice dictation for email lets you speak naturally at 150+ WPM and get professionally formatted messages, complete with greetings, proper punctuation, and appropriate sign-offs.
                </p>
                <p>
                  Oravo is different from browser-based voice dictation tools like Voice In or Dictation.io. It works at the system level, so it&apos;s not limited to Chrome. Dictate in Gmail&apos;s web interface, the Outlook desktop app, Apple Mail, or any other email client. Same for messaging: Slack desktop app, Teams, WhatsApp, iMessage, Discord all work seamlessly.
                </p>
                <p>
                  What makes Oravo the best choice for email dictation is <span className="font-semibold text-ink">context awareness</span>. The AI detects whether you&apos;re in Gmail (professional tone), Slack (casual tone), or Teams (business casual) and formats accordingly. No need to switch modes or correct tone manually.
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.15} className="lg:sticky lg:top-28 lg:mt-24">
            <div className="rounded-2xl bg-raised p-6 shadow-[0_0_0_1px_var(--o-line),0_24px_48px_-30px_rgba(51,48,42,0.45)] sm:p-8">
              <p className="eyebrow mb-6">One email, two ways</p>
              <SpeedRace typing={40} speaking={150} />
            </div>
          </Reveal>
        </div>
      </Band>

      {/* Works in every app */}
      <Band color={CLAY} from={PAPER} blend={200} className="pt-24 pb-20 sm:pt-28 sm:pb-24">
        <div className={SHELL}>
          <SectionIntro
            doodle="bubbles"
            eyebrow="Context-aware tone"
            title="Works in Every Email & Messaging App"
            lede="No extensions, no plugins: just press a hotkey and dictate. The same thought comes out right for each app."
          />
          <Reveal className="mt-12">
            <ToneSwitcher />
          </Reveal>
          <Reveal className="mt-6">
            <div className="surface-solid grid grid-cols-1 gap-px overflow-hidden !rounded-2xl bg-line sm:grid-cols-2 lg:grid-cols-3">
              {APP_FEATURES.map((f, i) => (
                <div key={f.title} className="bg-raised p-6 transition-colors hover:bg-paper sm:p-7">
                  <span className="font-display text-xs font-semibold text-brand">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="display-3 mt-2 text-ink">{f.title}</h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">{f.description}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Band>

      {/* Comparison */}
      <Band color={MIST} from={CLAY} blend={200} className="pt-24 pb-20 sm:pt-28 sm:pb-24">
        <div className={SHELL}>
          <SectionIntro doodle="scales" eyebrow="Compare" title="Oravo vs Other Voice Dictation Tools for Email" />
          <div className="mx-auto mt-12 max-w-4xl">
            <CompareTable
              columns={["Oravo", "Willow Voice", "Voice In"]}
              rows={[
                { feature: "Works in desktop email apps", values: [true, true, "Chrome only"] },
                { feature: "Context-aware tone", values: [true, false, false] },
                { feature: "Real-time translation", values: ["60+ languages", "Limited", false] },
                { feature: "Accent support", values: ["Built for accents", "Good", "Fair"] },
                { feature: "Works in Slack & Teams", values: [true, true, "Chrome only"] },
                { feature: "Free tier", values: ["5,000 words", "Trial only", "Limited"] },
              ]}
            />
            <Reveal delay={0.1}>
              <p className="mt-6 text-center text-[14.5px] text-ink-soft">
                Looking for alternatives?{" "}
                <Link href="/compare/willow-voice" className="font-semibold text-primary-500 underline-offset-4 hover:underline">
                  See full Oravo vs Willow comparison
                </Link>
              </p>
            </Reveal>
          </div>
        </div>
      </Band>

      <FaqBand from={MIST} items={FAQS} title="Frequently Asked Questions" related={RELATED} />

      <ClosingBand
        title="Dictate Emails & Messages 4x Faster"
        description="Stop typing every email. Speak naturally and let Oravo handle formatting, tone, and punctuation. 5,000 words free."
        primary={{ label: "Download Free", href: "/download" }}
        doodle="plane"
        footnote={["Gmail, Outlook, Apple Mail", "Slack, Teams, WhatsApp", "No credit card"]}
      />
    </MarketingShell>
  );
}

import type { Metadata } from "next";
import { Band } from "@/components/landing/Band";
import { Doodle } from "@/components/landing/Doodle";
import { MarketingShell } from "@/components/landing/MarketingShell";
import { Parallax } from "@/components/landing/Parallax";
import { SectionIntro } from "@/components/landing/PageBlocks";
import { Reveal } from "@/components/landing/Reveal";
import { DesktopDictationDemo } from "@/components/seo-pages/DesktopDictationDemo";
import { KeyboardRow, MiniTranslate } from "@/components/seo-pages/MiniDemos";
import {
  Bento,
  CLAY,
  ClosingBand,
  CompareTable,
  MIST,
  FaqBand,
  PAPER,
  SAND,
  SeoHero,
  SHELL,
  SpecSheet,
} from "@/components/seo-pages/SeoSections";
import { buildBreadcrumbJsonLd } from "@/lib/breadcrumbs";
import { faqJsonLd, type FaqItem } from "@/lib/faq";

export const metadata: Metadata = {
  title: "Speech to Text for Mac | Best Voice Typing App for macOS",
  description:
    "Best speech to text app for Mac. Native macOS voice typing with accent support. Works in all apps. 4x faster than typing. Try free.",
  keywords: [
    "speech to text mac",
    "speech to text for mac",
    "voice to text mac",
    "mac dictation app",
    "macOS speech to text",
    "voice typing mac",
    "mac voice recognition",
    "dictation software mac",
    "best speech to text mac",
    "mac voice to text app",
    "speech recognition macOS",
    "voice dictation mac",
    "macos voice typing",
    "apple speech to text",
    "mac transcription app",
    "speech to text macbook",
  ],
  openGraph: {
    title: "Speech to Text for Mac | Best Voice Typing App for macOS",
    description:
      "Best speech to text app for Mac. Native macOS voice typing with accent support. Works in all apps. 4x faster.",
    url: "https://oravo.ai/speech-to-text-mac",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Speech to Text for Mac | Oravo",
    description: "Best speech to text app for Mac. Works in all apps. 4x faster than typing.",
  },
  alternates: {
    canonical: "https://oravo.ai/speech-to-text-mac",
  },
};

const FAQS: FaqItem[] = [
  {
    question: "What macOS versions are supported?",
    answer: "Oravo supports macOS 12 (Monterey) and later. It's optimized for Apple Silicon (M1, M2, M3) but also works great on Intel Macs.",
  },
  {
    question: "Is Oravo better than Mac's built-in dictation?",
    answer:
      "If you write a lot, or speak English with an accent, it's built for you. Oravo adds real-time translation, smart formatting and tone that matches the app you're in, on top of accent-friendly recognition. Mac's built-in dictation gives you plain text to clean up.",
  },
  {
    question: "Does it work with all Mac apps?",
    answer: "Yes! Oravo works in any app where you can type: Google Docs, Microsoft Word, Slack, Gmail, VS Code, Notion, and thousands more.",
  },
  {
    question: "Can I use it offline?",
    answer: "Yes. Oravo Pro includes an offline dictation mode, so you can keep dictating on your Mac without an internet connection.",
  },
];

const RELATED = [
  { label: "All Features", href: "/features" },
  { label: "Voice to Text App", href: "/voice-to-text-app" },
  { label: "Best Dictation App", href: "/dictation-app" },
  { label: "Voice Typing for Accents", href: "/voice-typing-for-accents" },
  { label: "All Use Cases", href: "/use-cases" },
];

export default function SpeechToTextMacPage() {
  const breadcrumbs = buildBreadcrumbJsonLd([
    { name: "Home", url: "https://oravo.ai" },
    { name: "Speech to Text for Mac", url: "https://oravo.ai/speech-to-text-mac" },
  ]);

  return (
    <MarketingShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

      <SeoHero
        eyebrow="For macOS"
        lines={[{ text: "Speech to Text" }, { text: "for Mac", accent: true }]}
        description="The best speech to text app for macOS. Native Mac experience with AI-powered accuracy. Works in every app, so you type 4x faster with your voice."
        primary={{ label: "Download for Mac", href: "/download" }}
        secondary={{ label: "See How It Works", href: "/how-to-use" }}
        ticks={["macOS 12+ supported", "M1/M2/M3 optimized", "Free to try"]}
        doodle="hotkey"
        visual={<DesktopDictationDemo os="mac" />}
      />

      {/* Why better than built-in */}
      <Band color={PAPER} from={SAND} blend={200} className="pt-24 pb-20 sm:pt-28 sm:pb-24">
        <div className={SHELL}>
          <SectionIntro
            doodle="sparkle"
            eyebrow="Why Oravo"
            title="Better Than Built-in Mac Dictation"
            lede="Mac's built-in dictation is limited. Oravo gives you professional-grade speech to text."
          />
          <div className="mt-12">
            <Bento
              lead={{
                title: "Real-Time Translation",
                description: "Speak in Spanish, get English text. Mac dictation can't do this. Oravo translates as you speak.",
                visual: <MiniTranslate />,
              }}
              items={[
                {
                  title: "4x Faster, More Accurate",
                  description: "AI speech recognition built to beat Apple's built-in dictation, especially for accents.",
                },
                {
                  title: "60+ Languages",
                  description: "Speak in any of 60+ languages and get clean text, or polished English if you prefer.",
                },
                {
                  title: "Auto Formatting",
                  description: "Automatic punctuation, paragraphs, and capitalization. Mac dictation gives you a wall of text.",
                },
                {
                  title: "Privacy First",
                  description: "Built with privacy in mind, plus an offline dictation mode on Pro for when you'd rather stay off the network.",
                },
                {
                  title: "Works Everywhere",
                  description: "Type in any app: Google Docs, Slack, Gmail, VS Code and more. No compatibility issues.",
                },
              ]}
            />
          </div>
        </div>
      </Band>

      {/* Native on macOS */}
      <Band color={CLAY} from={PAPER} blend={200} className="pt-24 pb-20 sm:pt-28 sm:pb-24">
        <div className={`${SHELL} grid items-center gap-12 lg:grid-cols-2 lg:gap-16`}>
          <div>
            <SectionIntro
              align="left"
              doodle="hotkey"
              eyebrow="Made for the Mac"
              title="Hold fn. Talk. Let go."
              lede="Oravo lives in your menu bar. Hold the fn key in any app, say what you mean, and finished text appears where your cursor is."
            />
            <Reveal delay={0.15} className="mt-10">
              <KeyboardRow />
            </Reveal>
          </div>
          <div className="relative">
            <Parallax speed={30} className="pointer-events-none absolute -right-6 -top-16 hidden lg:block" aria-hidden="true">
              <Doodle name="windows" className="w-32" />
            </Parallax>
            <SpecSheet
              title="Oravo for Mac"
              rows={[
                { label: "macOS", value: "macOS 12 (Monterey) and later" },
                { label: "Chips", value: "Optimized for Apple Silicon (M1, M2, M3); works great on Intel Macs" },
                { label: "Shortcut", value: "Hold fn to dictate, release to type" },
                { label: "Apps", value: "Google Docs, Microsoft Word, Slack, Gmail, VS Code, Notion and any text field" },
                { label: "Price", value: "Free to try, no credit card required" },
              ]}
            />
          </div>
        </div>
      </Band>

      {/* Comparison, on the dark band */}
      <Band color={MIST} from={CLAY} blend={200} className="pt-24 pb-20 sm:pt-28 sm:pb-24">
        <Parallax speed={-70} className="pointer-events-none absolute right-[6%] top-40 hidden md:block" aria-hidden="true">
          <div className="h-40 w-40 rotate-12 rounded-[36px] bg-raised/50" />
        </Parallax>
        <Parallax speed={50} className="pointer-events-none absolute left-[4%] top-[55%] hidden md:block" aria-hidden="true">
          <div className="h-24 w-24 rounded-full bg-raised/40" />
        </Parallax>
        <div className={`${SHELL} relative`}>
          <SectionIntro
            doodle="scales"
            eyebrow="Side by side"
            title="Oravo vs Mac Built-in Dictation"
            lede="What changes when you switch from the dictation key to Oravo."
          />
          <div className="mx-auto mt-12 max-w-4xl">
            <CompareTable
              columns={["Oravo", "Mac Dictation"]}
              rows={[
                { feature: "Accuracy with accents", values: ["Built for accented speech", "Tuned for standard accents"] },
                { feature: "Real-time translation", values: [true, false] },
                { feature: "Auto punctuation", values: ["Smart AI", "Basic"] },
                { feature: "Languages supported", values: ["60+, with translation", "Dictation only"] },
                { feature: "Tone that matches the app", values: [true, false] },
                { feature: "Works offline", values: ["Offline mode (Pro)", "Limited"] },
              ]}
            />
            <Reveal delay={0.1}>
              <p className="mt-5 text-center font-display text-[12.5px] text-ink-faint">Based on each product&apos;s published features. Check current details before you decide.</p>
            </Reveal>
          </div>
        </div>
      </Band>

      <FaqBand from={MIST} items={FAQS} related={RELATED} />

      <ClosingBand
        title="Try the Best Speech to Text for Mac"
        description="Type 4x faster with your voice in every Mac app. Free to try, no credit card required."
        primary={{ label: "Download for Mac", href: "/download" }}
        doodle="mic"
        footnote={["macOS 12+", "M1/M2/M3 optimized", "Free trial"]}
      />
    </MarketingShell>
  );
}

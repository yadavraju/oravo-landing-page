import type { Metadata } from "next";
import { Band } from "@/components/landing/Band";
import { MarketingShell } from "@/components/landing/MarketingShell";
import { SectionIntro } from "@/components/landing/PageBlocks";
import { AppHopper } from "@/components/seo-pages/AppHopper";
import { DesktopDictationDemo, WindowsLogo } from "@/components/seo-pages/DesktopDictationDemo";
import { Keycap } from "@/components/seo-pages/OravoPill";
import {
  BeforeAfter,
  CLAY,
  ClosingBand,
  FaqBand,
  MarginDoodle,
  NumberedList,
  PAPER,
  SAND,
  SeoHero,
  SHELL,
  SplitSection,
} from "@/components/seo-pages/SeoSections";
import { Timeline } from "@/components/seo-pages/Timeline";
import { buildBreadcrumbJsonLd } from "@/lib/breadcrumbs";
import { faqJsonLd, type FaqItem } from "@/lib/faq";

export const metadata: Metadata = {
  title: "Speech to Text for Windows | Best Voice Typing App for PC",
  description:
    "Best speech to text app for Windows 10/11. Voice typing with accent support. Works in all apps. 4x faster than typing. Try free.",
  keywords: [
    "speech to text windows",
    "speech to text for windows",
    "voice to text windows",
    "windows dictation app",
    "windows 11 speech to text",
    "windows 10 voice typing",
    "voice typing windows",
    "windows voice recognition",
    "dictation software windows",
    "best speech to text windows",
    "windows voice to text app",
    "speech recognition windows",
    "voice dictation windows",
    "pc voice typing",
    "windows transcription app",
  ],
  openGraph: {
    title: "Speech to Text for Windows | Best Voice Typing App for PC",
    description:
      "Best speech to text app for Windows. Voice typing with accent support. Works in all apps. 4x faster.",
    url: "https://oravo.ai/speech-to-text-windows",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Speech to Text for Windows | Oravo",
    description: "Best speech to text app for Windows. Works in all apps. 4x faster than typing.",
  },
  alternates: {
    canonical: "https://oravo.ai/speech-to-text-windows",
  },
};

const FEATURES = [
  {
    title: "Superior Accuracy",
    description:
      "AI-powered speech recognition built to do better than Windows' built-in voice typing, especially for non-native speakers.",
  },
  {
    title: "Real-Time Translation",
    description: "Speak in your native language, get English text instantly. Windows voice typing can't translate.",
  },
  {
    title: "Smart Formatting",
    description: "Automatic punctuation, paragraphs, and capitalization. No more editing walls of text.",
  },
  {
    title: "Privacy First",
    description:
      "Built with privacy in mind, with an offline dictation mode on Pro. Our privacy policy spells out exactly how audio is processed.",
  },
  {
    title: "Universal Compatibility",
    description: "Works in Chrome, Edge, Office, Notepad++, VS Code, and any Windows app.",
  },
  {
    title: "Accent Recognition",
    description: "Built for accented English, so non-native speakers can talk naturally instead of performing for the mic.",
  },
];

const APPS = [
  { name: "Word", line: "Thanks for the feedback. I've updated section two with the new timeline." },
  { name: "Outlook", line: "Hi Dana, could we move our call to Thursday at 3 PM?" },
  { name: "Excel", line: "Q3 actuals include the late invoices from Northwind." },
  { name: "Chrome", line: "best quiet coworking spaces near downtown" },
  { name: "VS Code", line: "// Retry the upload twice before showing an error." },
  { name: "Teams", line: "Running five minutes late, start without me." },
];

const FAQS: FaqItem[] = [
  {
    question: "Does it work on Windows 10 and Windows 11?",
    answer: "Yes! Oravo works on Windows 10 (version 1903+) and Windows 11. It's optimized for both operating systems.",
  },
  {
    question: "Is Oravo better than Windows Voice Typing (Win+H)?",
    answer:
      "For most people who write a lot, yes. Oravo adds real-time translation, smart formatting and accent-friendly recognition on top of plain dictation. Windows Voice Typing is basic and gives you raw text to clean up.",
  },
  {
    question: "Does it work with Microsoft Office?",
    answer: "Yes! Oravo works with Word, Excel, PowerPoint, Outlook, and all Microsoft Office apps.",
  },
  {
    question: "Can I use it offline?",
    answer: "Yes. Oravo Pro includes an offline dictation mode, so you can keep dictating on your Windows PC without an internet connection.",
  },
];

const RELATED = [
  { label: "All Features", href: "/features" },
  { label: "Speech to Text Mac", href: "/speech-to-text-mac" },
  { label: "Voice to Text App", href: "/voice-to-text-app" },
  { label: "Voice Typing for Accents", href: "/voice-typing-for-accents" },
  { label: "All Use Cases", href: "/use-cases" },
];

export default function SpeechToTextWindowsPage() {
  const breadcrumbs = buildBreadcrumbJsonLd([
    { name: "Home", url: "https://oravo.ai" },
    { name: "Speech to Text for Windows", url: "https://oravo.ai/speech-to-text-windows" },
  ]);

  return (
    <MarketingShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

      <SeoHero
        eyebrow="For Windows"
        eyebrowIcon={<WindowsLogo className="h-3.5 w-3.5 text-ink" />}
        lines={[{ text: "Speech to Text" }, { text: "for Windows", accent: true }]}
        description="The best speech to text app for Windows 10 and 11. AI-powered accuracy that works in every app. Type 4x faster with your voice."
        primary={{ label: "Download for Windows", href: "/download" }}
        secondary={{ label: "See How It Works", href: "/how-to-use" }}
        ticks={["Windows 10 & 11", "Works in all apps", "Free to try"]}
        doodle="windows"
        visual={<DesktopDictationDemo os="windows" />}
      />

      {/* Better than Win+H */}
      <Band color={PAPER} from={SAND} blend={200} className="pt-24 pb-20 sm:pt-28 sm:pb-24">
        <MarginDoodle name="scribble" position="right-[2%] top-24" speed={-40} />
        <div className={SHELL}>
          <SplitSection
            doodle="sparkle"
            eyebrow="Oravo vs Win + H"
            title="Better Than Windows Voice Typing"
            lede="Windows Voice Typing (Win+H) is limited. Oravo gives you professional-grade speech to text."
            aside={
              <BeforeAfter
                before={{ label: "Win + H", text: "so the client call moved to thursday um i will send the deck tonight and uh the budget tomorrow" }}
                after={{ label: "Oravo", text: "The client call moved to Thursday. I'll send the deck tonight and the budget tomorrow." }}
                note="Same sentence, spoken once. Illustrative example."
              />
            }
          >
            <NumberedList items={FEATURES} />
          </SplitSection>
        </div>
      </Band>

      {/* Works everywhere */}
      <Band color={CLAY} from={PAPER} blend={200} className="pt-24 pb-20 sm:pt-28 sm:pb-24">
        <div className={SHELL}>
          <SectionIntro
            doodle="hotkey"
            eyebrow="Universal compatibility"
            title="One shortcut, every Windows app"
            lede="No plugins and no copy-paste. Oravo types wherever your cursor is, from Office to your browser to your code editor."
          />
          <div className="mt-14 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <AppHopper apps={APPS} caption="Typing into Windows apps" />
            <Timeline
              steps={[
                {
                  title: "Install Oravo for Windows",
                  description: "Download the app, sign in, and pick your languages. It runs quietly in the tray.",
                },
                {
                  title: "Hold the shortcut anywhere",
                  description: "Click into any text field and hold the shortcut while you speak.",
                  detail: (
                    <span className="inline-flex items-center gap-1.5" aria-hidden="true">
                      <Keycap label="Ctrl" pressed={false} />
                      <span className="text-ink-faint">+</span>
                      <Keycap label="Win" pressed={false} />
                    </span>
                  ),
                },
                {
                  title: "Release and it's written",
                  description: "Punctuated, formatted text lands at your cursor, in English or translated from your language.",
                },
              ]}
            />
          </div>
        </div>
      </Band>

      <FaqBand from={CLAY} items={FAQS} related={RELATED} />

      <ClosingBand
        title="Try the Best Speech to Text for Windows"
        description="Type 4x faster with your voice in every Windows app. Free to try, no credit card required."
        primary={{ label: "Download for Windows", href: "/download" }}
        doodle="windows"
        footnote={["Windows 10 & 11", "Works in all apps", "Free trial"]}
      />
    </MarketingShell>
  );
}

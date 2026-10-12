import type { Metadata } from "next";
import { AudioLines } from "lucide-react";
import { Band } from "@/components/landing/Band";
import { Doodle } from "@/components/landing/Doodle";
import { MarketingShell } from "@/components/landing/MarketingShell";
import { PageHero, SectionIntro } from "@/components/landing/PageBlocks";
import { Parallax } from "@/components/landing/Parallax";
import { ClosingBand, FaqBand, JsonLd, NumberedFeatures, RelatedBand } from "@/components/product-pages/blocks";
import { DeviceConvertDemo, VoiceFlow } from "@/components/product-pages/ProductPageDemos";
import { SHELL } from "@/components/product-pages/shell";
import { faqJsonLd, type FaqItem } from "@/lib/faq";

export const metadata: Metadata = {
  title: "Voice to Text App | Best Speech Recognition App 2024",
  description:
    "Best voice to text app for Mac & Windows. AI-powered speech recognition with accent support. 4x faster than typing. Free download.",
  keywords: [
    "voice to text app",
    "voice to text",
    "speech to text app",
    "voice text app",
    "voice typing app",
    "best voice to text app",
    "voice to text converter app",
    "speech recognition app",
    "voice transcription app",
    "talk to text app",
    "voice to text free app",
    "voice to text app for pc",
    "voice to text app mac",
    "voice to text app windows",
    "AI voice to text",
    "audio to text app",
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
    "voice to text for non-native speakers",
  ],
  openGraph: {
    title: "Voice to Text App | Best Speech Recognition App 2024",
    description: "Best voice to text app with AI accuracy. Works with any accent. 4x faster than typing.",
    url: "https://oravo.ai/voice-to-text-app",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Voice to Text App | Oravo",
    description: "Best voice to text app with AI accuracy. Works with any accent.",
  },
  alternates: {
    canonical: "https://oravo.ai/voice-to-text-app",
  },
};

const FAQS: FaqItem[] = [
  {
    question: "What is a voice to text app?",
    answer:
      "A voice to text app converts your spoken words into written text. Instead of typing, you speak into your microphone and the app transcribes your speech in real-time. Oravo uses AI to ensure high accuracy.",
  },
  {
    question: "What is the best voice to text app?",
    answer:
      "Oravo is the best voice to text app for non-native English speakers. It offers strong accent recognition, real-time translation, smart formatting, and works in any application on Mac, Windows and Android.",
  },
  {
    question: "Is there a free voice to text app?",
    answer: "Yes! Oravo offers a free tier that lets you try all features. You can convert voice to text without paying, with no credit card required.",
  },
  {
    question: "Does voice to text work with accents?",
    answer:
      "Oravo is specifically designed to understand all accents. It's built for multilingual speakers and strong accents, so you can speak the way you naturally do.",
  },
];

const FLOW = [
  { title: "Speak Naturally", description: "No special commands needed. Just talk naturally and Oravo captures every word accurately." },
  { title: "Instant Conversion", description: "Real-time voice to text conversion. See your words appear as you speak." },
  { title: "Auto Formatting", description: "Automatic punctuation, capitalization, and paragraphs. Professional output every time." },
];

const MORE = [
  { title: "Any Language", description: "Voice to text in 60+ languages. Speak in your native tongue, get perfect text." },
  { title: "Built-in Translation", description: "Speak in Spanish, get English text. Real-time translation as you dictate." },
  { title: "Universal Compatibility", description: "Works in every app—Gmail, Docs, Slack, Word, Notion, and any other text field." },
];

const RELATED = [
  { title: "All Features", href: "/features", note: "Everything Oravo does" },
  { title: "Speech to Text Mac", href: "/speech-to-text-mac", note: "The Mac app" },
  { title: "Speech to Text Windows", href: "/speech-to-text-windows", note: "The Windows app" },
  { title: "Best Dictation App", href: "/dictation-app", note: "Accents and translation" },
  { title: "Voice Typing Translation", href: "/voice-typing-with-translation", note: "Speak any language, type English" },
  { title: "All Use Cases", href: "/use-cases", note: "50+ app guides" },
];

export default function VoiceToTextAppPage() {
  return (
    <MarketingShell>
      <JsonLd data={faqJsonLd(FAQS)} />

      <PageHero
        eyebrow="Voice to text"
        eyebrowIcon={<AudioLines aria-hidden="true" className="h-3.5 w-3.5 text-brand" />}
        title="Voice to Text App"
        description="The best voice to text app for converting speech to text. AI-powered accuracy that understands every accent. Type 4x faster with your voice."
        primary={{ label: "Download free", href: "/download" }}
        secondary={{ label: "See how it works", href: "/how-to-use" }}
        note="Works in any app · Mac, Windows and Android · Free tier available"
        doodles={["measure", "speech"]}
        visual={<DeviceConvertDemo />}
      />

      {/* How it works */}
      <Band color="var(--o-paper)" from="var(--o-band-sand)" blend={200} className="pt-24 pb-20 sm:pt-28 sm:pb-28">
        <Parallax speed={-50} className="pointer-events-none absolute right-[4%] top-32 hidden xl:block" aria-hidden="true">
          <Doodle name="measure" className="w-36" />
        </Parallax>
        <div className={`${SHELL} relative`}>
          <SectionIntro doodle="mic" eyebrow="How it works" title="How Our Voice to Text App Works" lede="Simply speak, and Oravo converts your voice to text in real-time." />
          <div className="mt-14">
            <VoiceFlow steps={FLOW} />
          </div>
        </div>
      </Band>

      {/* More than transcription */}
      <Band color="var(--o-band-mist)" from="var(--o-paper)" blend={200} className="pt-24 pb-16 sm:pt-28 sm:pb-20">
        <Parallax speed={80} className="pointer-events-none absolute -left-24 top-24" aria-hidden="true">
          <div className="h-72 w-72 rounded-full bg-paper/50" />
        </Parallax>
        <div className={`${SHELL} relative`}>
          <SectionIntro doodle="globe" eyebrow="Beyond transcription" title="Any language, any app" lede="Your voice, written properly, wherever you need it." />
          <div className="mt-12">
            <NumberedFeatures items={MORE} />
          </div>
        </div>
      </Band>

      <FaqBand title="Frequently Asked Questions" items={FAQS} color="var(--o-paper)" from="var(--o-band-mist)" />

      <RelatedBand title="Related Topics" lede="Voice to text for your platform and language." links={RELATED} color="var(--o-canvas)" from="var(--o-paper)" doodle="speech" />

      <ClosingBand
        from="var(--o-canvas)"
        eyebrow="Free tier"
        title="Try Our Voice to Text App"
        description="Convert voice to text 4x faster. Free to try, no credit card required."
        primary={{ label: "Download free", href: "/download" }}
        footnote={["Mac, Windows & Android", "60+ languages", "Free tier"]}
      />
    </MarketingShell>
  );
}

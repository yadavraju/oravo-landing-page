import type { Metadata } from "next";
import { Check, Minus } from "lucide-react";
import { Band } from "@/components/landing/Band";
import { Doodle } from "@/components/landing/Doodle";
import { MarketingShell } from "@/components/landing/MarketingShell";
import { Parallax } from "@/components/landing/Parallax";
import { SectionIntro } from "@/components/landing/PageBlocks";
import { Reveal, RevealWords } from "@/components/landing/Reveal";
import { AccentDemo, ContextDemo } from "@/components/seo-pages/AccentDemo";
import {
  CLAY,
  ClosingBand,
  MIST,
  FaqBand,
  NumberedList,
  PAPER,
  SAND,
  SeoHero,
  SHELL,
  SplitSection,
} from "@/components/seo-pages/SeoSections";
import { buildBreadcrumbJsonLd } from "@/lib/breadcrumbs";
import { faqJsonLd, type FaqItem } from "@/lib/faq";

export const metadata: Metadata = {
  title: "Voice Typing for Accents | Speech Recognition That Understands You",
  description:
    "Voice typing built for accents. Indian, Chinese, Spanish, French and more: speak naturally and get clean, punctuated English. Built for multilingual speakers.",
  keywords: [
    "voice typing accent",
    "voice typing for accents",
    "accent recognition",
    "speech recognition accent",
    "voice to text accent",
    "dictation for accents",
    "accent friendly voice typing",
    "Indian accent voice typing",
    "Chinese accent speech to text",
    "Spanish accent dictation",
    "French accent voice recognition",
    "non-native speaker voice typing",
    "ESL voice typing",
    "accent detection",
    "multilingual voice typing",
    "foreign accent transcription",
    "Whisper Flow alternative",
    "Willow Voice alternative",
    "Wispr Flow alternative",
    "Dragon alternative",
    "Otter.ai alternative",
    "Notta alternative",
    "Speechnotes alternative",
    "Voice In alternative",
    "Superwhisper alternative",
    "best dictation for non-native English speakers",
    "write English like a native speaker",
    "voice typing for immigrants",
    "accent friendly dictation app",
  ],
  openGraph: {
    title: "Voice Typing for Accents | Works with Any Accent",
    description: "Voice typing built for accents. Indian, Chinese, Spanish and more: speak naturally, get clean English.",
    url: "https://oravo.ai/voice-typing-for-accents",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Voice Typing for Accents | Oravo",
    description: "Voice typing built for accents and multilingual speakers.",
  },
  alternates: {
    canonical: "https://oravo.ai/voice-typing-for-accents",
  },
};

const ACCENTS = [
  { flag: "🇮🇳", accent: "Indian English" },
  { flag: "🇨🇳", accent: "Chinese English" },
  { flag: "🇪🇸", accent: "Spanish English" },
  { flag: "🇫🇷", accent: "French English" },
  { flag: "🇩🇪", accent: "German English" },
  { flag: "🇯🇵", accent: "Japanese English" },
  { flag: "🇧🇷", accent: "Brazilian English" },
  { flag: "🇷🇺", accent: "Russian English" },
  { flag: "🇰🇷", accent: "Korean English" },
  { flag: "🇮🇹", accent: "Italian English" },
  { flag: "🇳🇱", accent: "Dutch English" },
  { flag: "🇸🇦", accent: "Arabic English" },
];

const FEATURES = [
  { title: "Adaptive Learning", description: "Oravo learns your vocabulary and writing style over time, getting more accurate with use." },
  { title: "Context Awareness", description: "Understands words that sound similar in your accent by analyzing context." },
  { title: "Real-Time Processing", description: "See accurate text moments after you speak. No waiting, no batch processing." },
  { title: "No Training Required", description: "Works from the first use. No voice enrollment or training sessions." },
  { title: "Smart Grammar", description: "Corrects grammar automatically, so your text sounds like native English." },
  { title: "Works Everywhere", description: "Type with your accent in any app: Gmail, Docs, Slack, and more." },
];

const FAQS: FaqItem[] = [
  {
    question: "Why does Oravo work better with accents than other apps?",
    answer:
      "Many voice typing apps are tuned mainly for native English speakers. Oravo is built for multilingual speakers and strong accents, and it uses context to resolve words that sound alike in your accent.",
  },
  {
    question: "Do I need to change how I speak?",
    answer:
      "No! Speak naturally with your accent. Oravo adapts to you, not the other way around. The more you use it, the better it learns your vocabulary and style.",
  },
  {
    question: "My accent is quite strong. Will it still work?",
    answer:
      "Oravo is designed for exactly this scenario. Try it free with your own voice and your own sentences. We are also running a same-script benchmark across accent cohorts so you can inspect the method and results.",
  },
  {
    question: "Does it work with code-switching (mixing languages)?",
    answer:
      "Yes! If you naturally mix English with words from your native language, Oravo can handle that too. It recognizes when you switch and transcribes accordingly.",
  },
];

const RELATED = [
  { label: "All Features", href: "/features" },
  { label: "Voice Typing Translation", href: "/voice-typing-with-translation" },
  { label: "Spanish Speech to Text", href: "/speech-to-text-spanish" },
  { label: "Voice to Text App", href: "/voice-to-text-app" },
  { label: "For Accessibility", href: "/for-accessibility" },
  { label: "All Use Cases", href: "/use-cases" },
];

export default function VoiceTypingForAccentsPage() {
  const breadcrumbs = buildBreadcrumbJsonLd([
    { name: "Home", url: "https://oravo.ai" },
    { name: "Voice Typing for Accents", url: "https://oravo.ai/voice-typing-for-accents" },
  ]);

  return (
    <MarketingShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

      <SeoHero
        eyebrow="Built for accented English"
        lines={[{ text: "Voice Typing" }, { text: "for Accents", accent: true }]}
        description="Finally, voice typing that understands you. Oravo is built for multilingual speakers and strong accents. No more frustrating misrecognitions."
        primary={{ label: "Try Free", href: "/download" }}
        secondary={{ label: "See How It Works", href: "/how-to-use" }}
        ticks={["Any accent welcome", "No voice training", "Free trial"]}
        doodle="measure"
        visual={<AccentDemo />}
      />

      {/* The problem */}
      <Band color={PAPER} from={SAND} blend={200} className="pt-24 pb-20 sm:pt-28 sm:pb-24">
        <div className={SHELL}>
          <SectionIntro
            doodle="scribble"
            eyebrow="The problem"
            title="Why Other Apps Fail Non-Native Speakers"
            lede="Most voice typing apps are tuned for native English speakers."
          />
          <div className="mt-12 grid items-stretch gap-5 lg:grid-cols-[1fr_1fr_1.2fr]">
            {[
              { name: "Siri / Google Voice Typing", body: "Tuned mainly for American accents. Many Indian, Chinese, and European speakers find themselves repeating words." },
              { name: "Windows Voice Typing", body: "Basic accent support. Frequent misrecognitions force constant corrections." },
            ].map((tool, i) => (
              <Reveal key={tool.name} delay={i * 0.08}>
                <article className="flex h-full flex-col rounded-2xl bg-canvas p-6 ring-1 ring-line sm:p-7">
                  <span className="flex h-7 w-7 items-center justify-center rounded-md bg-paper text-ink-faint ring-1 ring-line">
                    <Minus className="h-3.5 w-3.5" strokeWidth={2.5} />
                  </span>
                  <h3 className="mt-4 font-display text-[16px] font-semibold text-ink-soft">{tool.name}</h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">{tool.body}</p>
                </article>
              </Reveal>
            ))}
            <Reveal delay={0.18}>
              <article className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-raised p-6 shadow-[0_0_0_1.5px_var(--o-ink),0_24px_48px_-28px_rgba(51,48,42,0.5)] sm:p-8">
                <Parallax speed={20} className="pointer-events-none absolute -right-4 -top-4" aria-hidden="true">
                  <Doodle name="sparkle" className="w-24" />
                </Parallax>
                <span className="flex h-7 w-7 items-center justify-center rounded-md bg-espresso text-[#e8a07f]">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                <h3 className="display-3 mt-4 text-ink">Oravo</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                  Built for multilingual speakers and strong accents, with context that settles words which sound alike. Your accent isn&apos;t a bug. It&apos;s supported.
                </p>
                <p className="mt-auto pt-6 font-display text-[13px] font-semibold text-ink">Professional-quality text, whatever your accent.</p>
              </article>
            </Reveal>
          </div>
        </div>
      </Band>

      {/* Built for non-native speakers */}
      <Band color={CLAY} from={PAPER} blend={200} className="pt-24 pb-20 sm:pt-28 sm:pb-24">
        <div className={SHELL}>
          <SplitSection
            doodle="measure"
            eyebrow="Under the hood"
            title="Built for Non-Native Speakers"
            lede="Oravo listens for meaning, not a textbook accent."
            aside={<ContextDemo />}
          >
            <NumberedList items={FEATURES} />
          </SplitSection>
        </div>
      </Band>

      {/* Accuracy by accent: honest version */}
      <Band color={MIST} from={CLAY} blend={200} className="pt-24 pb-20 sm:pt-28 sm:pb-24">
        <Parallax speed={-70} className="pointer-events-none absolute right-[6%] top-40 hidden md:block" aria-hidden="true">
          <div className="h-40 w-40 rotate-12 rounded-[36px] bg-raised/50" />
        </Parallax>
        <div className={`${SHELL} relative grid items-center gap-12 md:grid-cols-[1fr_1fr]`}>
          <div className="flex flex-col items-start">
            <Parallax speed={18} className="mb-4">
              <Doodle name="measure" className="w-32 sm:w-36" />
            </Parallax>
            <Reveal>
              <p className="eyebrow">Accuracy by accent</p>
            </Reveal>
            <h2 className="display-2 mt-3 text-ink">
              <RevealWords text="Measured with the same script, not vague claims." />
            </h2>
            <Reveal delay={0.12}>
              <p className="mt-5 max-w-[520px] text-base leading-relaxed text-ink-soft">
                We are testing Oravo end to end across Hindi-accented English, Spanish-accented English, Hindi and Spanish speech to polished English, plus a native-English control.
              </p>
              <p className="mt-4 max-w-[520px] text-sm leading-relaxed text-ink-faint">
                The report will publish sample sizes, corrections and meaning errors. Until then, the fairest test is your own voice: try it free on the sentences you actually write.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <div className="rounded-2xl bg-raised p-6 shadow-[0_0_0_1px_var(--o-line),0_24px_48px_-30px_rgba(51,48,42,0.4)] sm:p-7">
              <p className="eyebrow mb-5">Speak English with your accent</p>
              <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {ACCENTS.map((a) => (
                  <li key={a.accent} className="flex items-center gap-2 rounded-lg bg-canvas px-3 py-2.5 font-display text-[12.5px] text-ink ring-1 ring-line">
                    <span className="text-[14px]">{a.flag}</span>
                    {a.accent}
                  </li>
                ))}
              </ul>
              <p className="mt-5 border-t border-line pt-4 text-xs leading-relaxed text-ink-faint">And many more. If you speak English with an accent, Oravo is made for you.</p>
            </div>
          </Reveal>
        </div>
      </Band>

      <FaqBand from={MIST} items={FAQS} related={RELATED} />

      <ClosingBand
        title="Voice Typing That Gets Your Accent"
        description="Stop fighting with voice recognition. Try Oravo free and see what it writes with your own voice."
        primary={{ label: "Download Free", href: "/download" }}
        doodle="speech"
        footnote={["Any accent welcome", "Works in every app", "Free trial"]}
      />
    </MarketingShell>
  );
}

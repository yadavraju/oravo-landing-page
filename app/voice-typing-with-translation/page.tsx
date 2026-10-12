import type { Metadata } from "next";
import { Band } from "@/components/landing/Band";
import { Doodle } from "@/components/landing/Doodle";
import { MarketingShell } from "@/components/landing/MarketingShell";
import { Parallax } from "@/components/landing/Parallax";
import { SectionIntro } from "@/components/landing/PageBlocks";
import { Reveal } from "@/components/landing/Reveal";
import { CANVAS, CLAY, ClosingBand, FaqBand, MarginDoodle, PAPER, SAND, SeoHero, SHELL } from "@/components/seo-pages/SeoSections";
import { LanguagePostcards, TranslatePipeline, TranslationDemo } from "@/components/seo-pages/TranslationDemo";
import { buildBreadcrumbJsonLd } from "@/lib/breadcrumbs";
import { faqJsonLd, type FaqItem } from "@/lib/faq";

export const metadata: Metadata = {
  title: "Voice Typing with Translation | Speak Any Language, Type English",
  description:
    "Voice typing with real-time translation. Speak Spanish, Hindi, Chinese—get English text instantly. Perfect for non-native speakers.",
  keywords: [
    "voice typing translation",
    "voice typing with translation",
    "speech to text translation",
    "speak and translate to text",
    "dictation with translation",
    "voice to text translator",
    "speak spanish type english",
    "voice typing translate",
    "real-time translation typing",
    "multilingual voice typing",
    "translate while typing",
    "voice translator to text",
    "dictation translation software",
    "speak any language type english",
    "voice input translation",
    "transcribe and translate",
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
    "ESL voice typing with translation",
  ],
  openGraph: {
    title: "Voice Typing with Translation | Speak Any Language, Type English",
    description: "Voice typing with real-time translation. Speak in your language, get English text instantly.",
    url: "https://oravo.ai/voice-typing-with-translation",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Voice Typing with Translation | Oravo",
    description: "Speak Spanish, Hindi, Chinese—get English text instantly.",
  },
  alternates: {
    canonical: "https://oravo.ai/voice-typing-with-translation",
  },
};

const LANGUAGES = [
  { flag: "🇪🇸", language: "Spanish", example: "Hola, ¿cómo estás?" },
  { flag: "🇮🇳", language: "Hindi", example: "नमस्ते, आप कैसे हैं?" },
  { flag: "🇨🇳", language: "Chinese", example: "你好，你好吗？" },
  { flag: "🇫🇷", language: "French", example: "Bonjour, comment allez-vous?" },
  { flag: "🇩🇪", language: "German", example: "Hallo, wie geht es Ihnen?" },
  { flag: "🇯🇵", language: "Japanese", example: "こんにちは、お元気ですか？" },
  { flag: "🇧🇷", language: "Portuguese", example: "Olá, como vai você?" },
  { flag: "🇸🇦", language: "Arabic", example: "مرحبا، كيف حالك؟", rtl: true },
];

const PERSONAS = [
  {
    title: "Remote Workers",
    description: "Communicate with English-speaking colleagues naturally. Think in your language, write in English.",
    note: "Standup in five. I'll share the release notes first.",
  },
  {
    title: "International Students",
    description: "Write essays and assignments in English while thinking in your native language.",
    note: "The second argument rests on a weaker assumption.",
  },
  {
    title: "Global Businesses",
    description: "Respond to English clients and partners faster. No more struggling with grammar.",
    note: "Thanks for your order. It ships on Monday.",
  },
  {
    title: "Immigrants & Expats",
    description: "Navigate English-speaking countries with confidence. Write emails, fill forms, communicate.",
    note: "I'd like to book an appointment for next Tuesday.",
  },
];

const FAQS: FaqItem[] = [
  {
    question: "How accurate is the translation?",
    answer:
      "Oravo uses state-of-the-art AI models for both transcription and translation. The result is professional-quality English text that sounds natural, not machine-translated.",
  },
  {
    question: "Can I speak in one language and get text in another (not English)?",
    answer: "Yes! While English is the most popular target, you can translate between Oravo's 60+ supported languages. Speak in Spanish, get German text, for example.",
  },
  {
    question: "Is there a delay in translation?",
    answer: "The translation is nearly real-time. Your English text appears moments after you finish speaking, with no copy-paste step.",
  },
  {
    question: "Does it preserve my original meaning?",
    answer: "Yes! Our AI understands context and nuance. It translates meaning, not just words, so your message comes across naturally in English.",
  },
];

const RELATED = [
  { label: "All Features", href: "/features" },
  { label: "Voice Typing for Accents", href: "/voice-typing-for-accents" },
  { label: "Spanish Speech to Text", href: "/speech-to-text-spanish" },
  { label: "Voice to Text App", href: "/voice-to-text-app" },
  { label: "All Use Cases", href: "/use-cases" },
];

export default function VoiceTypingWithTranslationPage() {
  const breadcrumbs = buildBreadcrumbJsonLd([
    { name: "Home", url: "https://oravo.ai" },
    { name: "Voice Typing with Translation", url: "https://oravo.ai/voice-typing-with-translation" },
  ]);

  return (
    <MarketingShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

      <SeoHero
        eyebrow="60+ Languages"
        lines={[{ text: "Voice Typing" }, { text: "with Translation", accent: true }]}
        description="Speak in Spanish, Hindi, Chinese, and get perfect English text. Real-time translation as you dictate. Built for non-native English speakers."
        primary={{ label: "Try Free", href: "/download" }}
        secondary={{ label: "See Demo", href: "/how-to-use" }}
        ticks={["60+ languages", "Real-time translation", "Free trial"]}
        doodle="globe"
        visual={<TranslationDemo />}
      />

      {/* How it works */}
      <Band color={PAPER} from={SAND} blend={200} className="pt-24 pb-20 sm:pt-28 sm:pb-24">
        <MarginDoodle name="plane" position="right-[3%] top-28" speed={-45} />
        <div className={SHELL}>
          <SectionIntro
            doodle="speech"
            eyebrow="How it works"
            title="Speak → Translate → Type"
            lede="Three simple steps to type in English using any language."
          />
          <div className="mt-16">
            <TranslatePipeline />
          </div>
        </div>
      </Band>

      {/* Supported languages */}
      <Band color={CLAY} from={PAPER} blend={200} className="pt-24 pb-20 sm:pt-28 sm:pb-24">
        <div className={SHELL}>
          <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
            <SectionIntro
              align="left"
              doodle="globe"
              eyebrow="Supported Languages"
              title="Speak your language. Read it in English."
              lede="Speak in any of these languages and get perfect English text. Hover or tap a card to see what Oravo writes."
            />
            <Reveal delay={0.1}>
              <p className="max-w-[260px] font-display text-[13.5px] leading-relaxed text-ink-soft lg:text-right">
                <span className="font-serif text-[40px] leading-none text-ink">60+</span>
                <br />
                languages, including Korean, Vietnamese, Thai, Polish, Turkish, and more.
              </p>
            </Reveal>
          </div>
          <div className="mt-12">
            <LanguagePostcards languages={LANGUAGES} />
          </div>
        </div>
      </Band>

      {/* Who uses it */}
      <Band color={PAPER} from={CLAY} blend={200} className="pt-24 pb-20 sm:pt-28 sm:pb-24">
        <div className={SHELL}>
          <SectionIntro
            doodle="people"
            eyebrow="Who it's for"
            title="Who Uses Voice Typing with Translation"
            lede="People who think in one language and work in another."
          />
          <div className="relative mt-14 grid gap-6 sm:grid-cols-2">
            <Parallax speed={40} className="pointer-events-none absolute -left-16 top-1/2 hidden xl:block" aria-hidden="true">
              <Doodle name="notebook" className="w-32" />
            </Parallax>
            {PERSONAS.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.07}>
                <article
                  className={`group paper-ruled relative h-full rounded-2xl p-6 shadow-[0_0_0_1px_var(--o-line),0_18px_36px_-26px_rgba(51,48,42,0.45)] transition-transform duration-300 hover:rotate-0 sm:p-8 ${
                    ["-rotate-[1deg]", "rotate-[0.8deg]", "rotate-[0.6deg]", "-rotate-[0.8deg]"][i]
                  }`}
                >
                  <span className="absolute -top-2.5 left-1/2 h-5 w-16 -translate-x-1/2 rotate-[-2deg] rounded-sm bg-sand-deep/80" aria-hidden="true" />
                  <span className="font-display text-xs font-semibold text-brand">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="display-3 mt-2 text-ink">{p.title}</h3>
                  <p className="mt-2 text-[14.5px] leading-[28px] text-ink-soft">{p.description}</p>
                  <p className="mt-4 border-t border-dashed border-line pt-3 font-serif text-[16px] leading-[28px] text-ink">
                    <span className="mr-2 font-display text-[10.5px] font-semibold uppercase tracking-[0.12em] text-ink-faint">Example</span>
                    {p.note}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Band>

      <FaqBand from={PAPER} items={FAQS} related={RELATED} />

      <ClosingBand
        from={CANVAS}
        title="Start Typing in English Today"
        description="Speak your language, type English, and communicate faster."
        primary={{ label: "Download Free", href: "/download" }}
        doodle="globe"
        footnote={["60+ languages", "Real-time translation", "Free trial"]}
      />
    </MarketingShell>
  );
}

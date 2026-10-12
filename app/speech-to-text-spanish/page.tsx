import type { Metadata } from "next";
import { Band } from "@/components/landing/Band";
import { MarketingShell } from "@/components/landing/MarketingShell";
import { SectionIntro } from "@/components/landing/PageBlocks";
import { Reveal } from "@/components/landing/Reveal";
import { CodeSwitch, SpeedRace } from "@/components/seo-pages/MiniDemos";
import {
  CLAY,
  ClosingBand,
  FaqBand,
  MarginDoodle,
  NumberedList,
  PAPER,
  SAND,
  SeoHero,
  SHELL,
} from "@/components/seo-pages/SeoSections";
import { ModeSwitcher, SpanishDemo } from "@/components/seo-pages/SpanishDemo";
import { buildBreadcrumbJsonLd } from "@/lib/breadcrumbs";
import { faqJsonLd, type FaqItem } from "@/lib/faq";

export const metadata: Metadata = {
  title: "Speech to Text Spanish | Habla Español, Escribe en Inglés",
  description:
    "Speech to text for Spanish speakers. Speak Spanish, get English text. Perfect for bilingual professionals. AI-powered, with natural-sounding English.",
  keywords: [
    "speech to text spanish",
    "spanish speech to text",
    "spanish to english voice typing",
    "speak spanish type english",
    "spanish voice recognition",
    "spanish dictation",
    "voz a texto español",
    "spanish accent voice typing",
    "spanish english translation voice",
    "bilingual voice typing",
    "hispanic voice typing",
    "latino voice recognition",
    "spanish transcription",
    "dictado español a inglés",
    "reconocimiento de voz español",
  ],
  openGraph: {
    title: "Speech to Text Spanish | Habla Español, Escribe en Inglés",
    description: "Speech to text for Spanish speakers. Speak Spanish, get natural English text.",
    url: "https://oravo.ai/speech-to-text-spanish",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Speech to Text Spanish | Oravo",
    description: "Speak Spanish, get English text. Perfect for bilingual professionals.",
  },
  alternates: {
    canonical: "https://oravo.ai/speech-to-text-spanish",
  },
};

const FEATURES = [
  { title: "All Spanish Dialects", description: "Mexican, Colombian, Spanish, Argentine: built for regional accents and variations." },
  { title: "Proper Grammar", description: "Automatic English grammar correction. Your text reads like a native English speaker wrote it." },
  { title: "Real-Time", description: "See English text appear as you speak Spanish. No waiting for translation." },
  { title: "All Apps", description: "Gmail, Slack, Word, WhatsApp: write in English in any app using Spanish." },
];

const FAQS: FaqItem[] = [
  {
    question: "¿Funciona con español mexicano?",
    answer:
      "¡Sí! Oravo está hecho para todos los dialectos del español: mexicano, colombiano, español peninsular, argentino, y más. Tu acento regional es bienvenido.",
  },
  {
    question: "Can I switch between Spanish and English mid-sentence?",
    answer: "Yes! Oravo handles code-switching naturally. If you say 'Necesito enviar el email to the client,' it understands and transcribes appropriately.",
  },
  {
    question: "How accurate is Spanish to English translation?",
    answer:
      "Oravo produces natural-sounding English. It's not word-for-word: it captures your meaning and expresses it professionally, and you can always review the text before you send it.",
  },
  {
    question: "¿Puedo usarlo sin conexión?",
    answer: "Sí. Oravo Pro incluye un modo de dictado sin conexión en Mac y Windows, para que sigas dictando incluso sin internet.",
  },
];

const RELATED = [
  { label: "All Features", href: "/features" },
  { label: "Voice Typing Translation", href: "/voice-typing-with-translation" },
  { label: "Voice Typing for Accents", href: "/voice-typing-for-accents" },
  { label: "Voice to Text App", href: "/voice-to-text-app" },
  { label: "All Use Cases", href: "/use-cases" },
];

export default function SpeechToTextSpanishPage() {
  const breadcrumbs = buildBreadcrumbJsonLd([
    { name: "Home", url: "https://oravo.ai" },
    { name: "Speech to Text Spanish", url: "https://oravo.ai/speech-to-text-spanish" },
  ]);

  return (
    <MarketingShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

      <SeoHero
        eyebrow="Para Hispanohablantes"
        eyebrowIcon={<span className="text-[14px] leading-none">🇪🇸</span>}
        lines={[{ text: "Speech to Text" }, { text: "Español", accent: true }]}
        description={<span lang="es">Habla en español, obtén texto en inglés perfecto. Diseñado para hispanohablantes que trabajan en inglés.</span>}
        secondaryDescription="Speak Spanish, get perfect English text. Built for Spanish speakers working in English."
        primary={{ label: "Descargar Gratis", href: "/download" }}
        secondary={{ label: "Ver Demo", href: "/how-to-use" }}
        ticks={["Mac & Windows", "Todos los dialectos", "Prueba gratis"]}
        doodle="bubbles"
        visual={<SpanishDemo />}
      />

      {/* Two modes */}
      <Band color={PAPER} from={SAND} blend={200} className="pt-24 pb-20 sm:pt-28 sm:pb-24">
        <MarginDoodle name="globe" position="left-[2%] top-32" speed={40} />
        <div className={SHELL}>
          <SectionIntro
            doodle="bubbles"
            eyebrow="Dos Modos"
            title="Choose Your Mode"
            lede="Write in English from Spanish, or speak English with your own accent. Switch whenever you like."
          />
          <div className="mt-12">
            <ModeSwitcher />
          </div>
        </div>
      </Band>

      {/* Built for Spanish speakers */}
      <Band color={CLAY} from={PAPER} blend={200} className="pt-24 pb-20 sm:pt-28 sm:pb-24">
        <div className={SHELL}>
          <SectionIntro
            doodle="speed"
            eyebrow="Hecho para ti"
            title="Built for Spanish Speakers"
            lede="Every dialect, mixed sentences, proper English grammar, and the speed of talking instead of typing."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            <Reveal>
              <div className="flex h-full flex-col justify-between rounded-2xl bg-raised p-6 shadow-[0_0_0_1px_var(--o-line),0_20px_40px_-28px_rgba(51,48,42,0.4)] sm:p-8">
                <CodeSwitch />
                <p className="mt-6 border-t border-line pt-4 text-[14px] leading-relaxed text-ink-soft">
                  <span className="font-semibold text-ink">Code-Switching.</span> Mix Spanish and English naturally. Say &ldquo;Send the reporte to marketing&rdquo; and we&apos;ll handle it.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="flex h-full flex-col justify-between rounded-2xl bg-raised p-6 shadow-[0_0_0_1px_var(--o-line),0_20px_40px_-28px_rgba(51,48,42,0.4)] sm:p-8">
                <SpeedRace typing={40} speaking={150} />
                <p className="mt-6 border-t border-line pt-4 text-[14px] leading-relaxed text-ink-soft">
                  <span className="font-semibold text-ink">4x Faster.</span> Think and speak in Spanish at 150 wpm instead of typing in English at 40 wpm.
                </p>
              </div>
            </Reveal>
          </div>
          <div className="mt-5">
            <NumberedList columns={2} items={FEATURES} />
          </div>
        </div>
      </Band>

      <FaqBand from={CLAY} items={FAQS} eyebrow="Preguntas frecuentes" related={RELATED} />

      <ClosingBand
        eyebrow="Prueba gratis"
        title="Habla Español, Escribe en Inglés"
        description={<span lang="es">Escribe en inglés 4x más rápido, en cualquier app. Prueba gratis.</span>}
        primary={{ label: "Descargar Gratis", href: "/download" }}
        doodle="speech"
        footnote={["Mac & Windows", "Todos los dialectos", "Prueba gratis"]}
      />
    </MarketingShell>
  );
}

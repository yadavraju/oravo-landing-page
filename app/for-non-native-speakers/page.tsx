import type { Metadata } from "next";
import { AppWindow, Ear, Languages, Mail, MessagesSquare, SpellCheck2, Zap } from "lucide-react";
import { AudienceDemo } from "@/components/audience/AudienceDemo";
import { AudienceHero } from "@/components/audience/AudienceHero";
import { AudienceCta, AudienceFaq, Statement } from "@/components/audience/AudienceSections";
import { FeatureSpec } from "@/components/audience/FeatureLayouts";
import { ScenarioSwitcher } from "@/components/audience/ScenarioLayouts";
import { BAND_PAD, GROUND, SHELL } from "@/components/audience/shell";
import { Band } from "@/components/landing/Band";
import { MarketingShell } from "@/components/landing/MarketingShell";
import { faqJsonLd } from "@/lib/faq";

export const metadata: Metadata = {
  title: "Write Professional English by Speaking Your Language | Oravo AI",
  description:
    "AI voice typing for non-native English speakers. Speak in your language, get perfect professional English. Built for real accents, with real-time translation in any app.",
  keywords: [
    "voice typing for non-native speakers",
    "english dictation non-native",
    "speak my language type english",
    "ESL voice typing",
    "accent-friendly dictation",
    "voice typing translation english",
    "non-native english writing tool",
    "ai writing assistant non-native",
    "professional english voice typing",
    "speech to text accent support",
    "dictation for ESL students",
    "voice typing for immigrants",
    "multilingual voice keyboard",
    "speak hindi type english",
    "speak spanish type english",
    "non-native speaker productivity",
  ],
  openGraph: {
    title: "Write Professional English by Speaking Your Language | Oravo AI",
    description:
      "AI voice typing for non-native English speakers. Speak in your language, get perfect professional English.",
    url: "https://oravo.ai/for-non-native-speakers",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Write Professional English by Speaking Your Language | Oravo AI",
    description:
      "AI voice typing for non-native English speakers. Speak in your language, get perfect professional English.",
  },
  alternates: {
    canonical: "https://oravo.ai/for-non-native-speakers",
  },
};

const FEATURES = [
  {
    icon: <Languages />,
    title: "Speak Your Language, Type English",
    description: "Think in your native language and speak naturally. Oravo translates and writes professional English in real time — no mental translation needed.",
  },
  {
    icon: <Ear />,
    title: "Understands Your Accent",
    description: "Built for real accents, whether you speak English with an Indian, Chinese, Arabic, or any other accent. No voice training needed.",
  },
  {
    icon: <SpellCheck2 />,
    title: "Grammar & Phrasing Perfected",
    description: "Oravo doesn't just transcribe — it fixes grammar, improves phrasing, and makes your writing read naturally. No more second-guessing emails.",
  },
  {
    icon: <MessagesSquare />,
    title: "Context-Aware Tone",
    description: "Writing an email? It's professional. Messaging on Slack? It's casual. Oravo matches the tone to the app and context automatically.",
  },
  {
    icon: <Zap />,
    title: "Faster Writing",
    description: "Stop agonizing over English grammar and word choice. Speak naturally and let AI handle the language. Write emails, docs, and messages in seconds.",
  },
  {
    icon: <AppWindow />,
    title: "Works Everywhere",
    description: "Gmail, Slack, Notion, Google Docs, LinkedIn, WhatsApp — Oravo works in any app with a text field. Write professional English anywhere you type.",
  },
];

const SCENARIOS = [
  {
    title: "Professional Emails",
    description:
      "Stop spending 20 minutes crafting one English email. Speak in your language, get a polished professional email in seconds. Clean grammar, natural phrasing, appropriate tone.",
    sayLang: "Spanish",
    say: "Hola Laura, te confirmo que el informe estará listo el jueves. Si necesitas algo antes, avísame.",
    where: "Gmail",
    get: "Hi Laura, I can confirm the report will be ready on Thursday. If you need anything before then, just let me know.",
  },
  {
    title: "Workplace Communication",
    description:
      "Respond to Slack messages, write Notion docs, and participate in team discussions with confidence. Your English output reads clearly and naturally.",
    sayLang: "Portuguese",
    say: "Pessoal, terminei a revisão do design. Só falta o texto da página inicial.",
    where: "Slack",
    get: "Hey team, I've finished the design review. The only thing left is the homepage copy.",
  },
  {
    title: "Academic Writing",
    description:
      "International students write essays, research papers, and assignments by speaking in their native language. Oravo handles the English writing with proper academic tone.",
    sayLang: "Hindi",
    say: "इस अध्ययन से पता चलता है कि नींद की कमी से याददाश्त पर असर पड़ता है।",
    where: "Google Docs",
    get: "This study suggests that sleep deprivation has a measurable effect on memory.",
  },
  {
    title: "Job Applications & LinkedIn",
    description:
      "Write compelling cover letters, LinkedIn posts, and professional bios that showcase your expertise — without worrying about English fluency limitations.",
    sayLang: "Korean",
    say: "저는 5년 동안 핀테크 스타트업에서 제품 디자이너로 일했습니다.",
    where: "LinkedIn",
    get: "I've spent five years as a product designer at a fintech startup.",
  },
];

const FAQS = [
  {
    question: "Do I need to speak English at all?",
    answer:
      "No! You can speak entirely in your native language and Oravo will translate to professional English. You can also speak English with your accent — Oravo is built for real accents.",
  },
  {
    question: "How natural does the English output sound?",
    answer:
      "Natural. Oravo's AI aims for text that reads like fluent, professional English — proper grammar, natural phrasing, and appropriate vocabulary. It goes beyond word-for-word translation to produce writing you'd be happy to send.",
  },
  {
    question: "Which languages can I speak in?",
    answer:
      "Oravo supports 60+ languages including Spanish, Hindi, Mandarin, Japanese, Korean, Arabic, Portuguese, French, German, Italian, Russian, and more. New languages are added regularly.",
  },
  {
    question: "Will it understand my accent when I speak English?",
    answer:
      "Oravo is built for accented English, including Indian, Chinese, Arabic, and Latin American English. We are measuring accent performance end to end and will publish the results; in the meantime, try it free with your own voice.",
  },
];

export default function ForNonNativeSpeakersPage() {
  return (
    <MarketingShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQS)) }} />

      <AudienceHero
        layout="reverse"
        eyebrow="For Non-Native Speakers"
        icon={<Languages />}
        lead="Write Professional English"
        accent="by Speaking Your Language"
        description="Stop struggling with English grammar and phrasing. Speak naturally in your language — Oravo writes polished, professional English for you."
        primary={{ label: "Try Oravo free", href: "/download" }}
        proof={["Built for real accents", "Real-time translation", "Professional English output"]}
        doodles={["bubbles", "globe"]}
        visual={
          <AudienceDemo
            app="Gmail"
            field="Reply to Mr. Sharma"
            icon={<Mail />}
            sayLang="Hindi"
            outLang="English"
            say="शर्मा जी, कल वाली रिपोर्ट मैं आज शाम तक भेज दूँगा। देरी के लिए माफ़ी चाहता हूँ।"
            output={"Hi Mr. Sharma,\n\nI'll send yesterday's report by this evening. Apologies for the delay."}
            terms={["Apologies for the delay"]}
            doneNote="Polished English"
          />
        }
      />

      <Band color={GROUND.paper} from={GROUND.sand} blend={200} className={BAND_PAD}>
        <div className={SHELL}>
          <FeatureSpec
            intro={{
              doodle: "bubbles",
              eyebrow: "Features",
              title: "Built for Your Voice, Your Language",
              lede: "Oravo was designed from the ground up for non-native English speakers.",
            }}
            items={FEATURES}
          />
        </div>
      </Band>

      <Band color={GROUND.canvas} from={GROUND.paper} blend={200} className={BAND_PAD}>
        <div className={SHELL}>
          <ScenarioSwitcher
            intro={{
              doodle: "globe",
              eyebrow: "Use cases",
              title: "How Non-Native Speakers Use Oravo",
              lede: "Real scenarios where Oravo removes the language barrier.",
            }}
            items={SCENARIOS}
          />
        </div>
      </Band>

      <Band color={GROUND.clay} from={GROUND.canvas} blend={200} className={BAND_PAD}>
        <div className={SHELL}>
          <Statement
            tone="light"
            doodle="speech"
            eyebrow="Confidence, not just correctness"
            title="You know exactly what you mean. Now it reads that way."
            body="Your expertise shouldn't be hidden behind second-guessed grammar. Say it the way you'd explain it to a colleague in your own language, and send English you're proud of."
            pointsLabel="Every time you speak"
            points={["Translated from 60+ languages", "Grammar and phrasing fixed", "Tone matched to the app", "Typed where your cursor is"]}
          />
        </div>
      </Band>

      <Band color={GROUND.paper} from={GROUND.clay} blend={200} className={BAND_PAD}>
        <div className={SHELL}>
          <AudienceFaq intro={{ doodle: "question", eyebrow: "FAQ", title: "Frequently Asked Questions" }} items={FAQS} />
        </div>
      </Band>

      <Band color={GROUND.blush} from={GROUND.paper} className="pt-16 pb-20 sm:pt-20">
        <div className={SHELL}>
          <AudienceCta
            doodle="bubbles"
            eyebrow="Speak your language"
            title="Your Language, Professional English"
            description="Stop struggling with English. Start speaking your language and let Oravo write clear, professional English for you."
            primary={{ label: "Try Oravo free", href: "/download" }}
            bullets={["No English required", "Built for real accents", "Free to start"]}
          />
        </div>
      </Band>
    </MarketingShell>
  );
}

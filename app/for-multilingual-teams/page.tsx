import type { Metadata } from "next";
import { AppWindow, ArrowLeftRight, Globe2, Hash, Mic2, Users, UsersRound, Zap } from "lucide-react";
import { AudienceDemo } from "@/components/audience/AudienceDemo";
import { AudienceHero } from "@/components/audience/AudienceHero";
import { AudienceCta, AudienceFaq, LanguageRibbon, Statement } from "@/components/audience/AudienceSections";
import { FeatureIndex } from "@/components/audience/FeatureLayouts";
import { ScenarioTickets } from "@/components/audience/ScenarioLayouts";
import { BAND_PAD, GROUND, SHELL } from "@/components/audience/shell";
import { Band } from "@/components/landing/Band";
import { MarketingShell } from "@/components/landing/MarketingShell";
import { faqJsonLd } from "@/lib/faq";

export const metadata: Metadata = {
  title: "Voice Typing With Real-Time Translation for Global Teams | Oravo AI",
  description:
    "Break language barriers with AI voice typing that translates in real time. Speak your language, get perfect text in any language. Built for multilingual teams.",
  keywords: [
    "multilingual voice typing",
    "real-time translation voice typing",
    "voice typing for global teams",
    "multilingual dictation software",
    "translate speech to text",
    "voice typing translation",
    "team collaboration translation",
    "cross-language voice typing",
    "international team dictation",
    "multilingual productivity tools",
    "voice typing 20 languages",
    "real-time language translation",
    "global team communication",
    "ai translation voice",
    "speak one language type another",
  ],
  openGraph: {
    title: "Voice Typing With Real-Time Translation for Global Teams | Oravo AI",
    description:
      "Break language barriers with AI voice typing that translates in real time. Speak your language, get perfect text in any language.",
    url: "https://oravo.ai/for-multilingual-teams",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Voice Typing With Real-Time Translation | Oravo AI",
    description:
      "Break language barriers with AI voice typing that translates in real time.",
  },
  alternates: {
    canonical: "https://oravo.ai/for-multilingual-teams",
  },
};

const FEATURES = [
  {
    icon: <ArrowLeftRight />,
    title: "Two-Way Translation",
    description: "Speak Spanish, get English. Speak Japanese, get German. Translate across 60+ languages in real time while you dictate.",
  },
  {
    icon: <Mic2 />,
    title: "Built for Real Accents",
    description: "Whether your team speaks English with Indian, Brazilian, German, or Korean accents, Oravo is built to understand the way people actually talk.",
  },
  {
    icon: <UsersRound />,
    title: "Team-Wide Consistency",
    description: "Everyone writes in the same professional tone regardless of their native language. Oravo adapts formatting to match your team's communication style.",
  },
  {
    icon: <AppWindow />,
    title: "Works in Every App",
    description: "Slack, Gmail, Notion, Google Docs, Teams — Oravo works in any app with a text field. Your multilingual team can dictate anywhere they work.",
  },
  {
    icon: <Users />,
    title: "Team Plan & Admin Controls",
    description: "Centralized billing, administrative controls and team-wide personalization on the Enterprise plan. See the privacy policy for how voice is processed.",
  },
  {
    icon: <Zap />,
    title: "Faster Than Typing",
    description: "Most people speak far faster than they type. Multiply that by every team member across every language and the time adds up.",
  },
];

const SCENARIOS = [
  {
    title: "Cross-Border Client Communication",
    description:
      "Your team in Tokyo speaks to clients in English — but thinks in Japanese. They speak Japanese, Oravo outputs professional English emails in Gmail, Slack, or any app.",
    tag: "Japanese → English",
  },
  {
    title: "Multilingual Documentation",
    description:
      "Engineering teams across offices write docs in English regardless of their native language. Speak in Hindi, Portuguese, or Korean — get polished English documentation.",
    tag: "Hindi → English",
  },
  {
    title: "International Sales Follow-Ups",
    description:
      "Sales reps speak their language after a call and get professional follow-up emails in the client's language. No translator needed, no awkward phrasing.",
    tag: "Spanish → German",
  },
  {
    title: "Global Support Teams",
    description: "Support agents respond to tickets in any language by speaking their native tongue. Oravo translates and formats responses professionally.",
    tag: "Portuguese → English",
  },
];

const FAQS = [
  {
    question: "Which languages does Oravo translate between?",
    answer:
      "Oravo supports real-time translation across 60+ languages including English, Spanish, French, German, Japanese, Korean, Chinese, Hindi, Portuguese, Arabic, and more. New languages are added regularly.",
  },
  {
    question: "How accurate is the translation?",
    answer:
      "Oravo uses advanced AI models for translation, aiming for output that reads naturally rather than like word-for-word machine translation. It takes context, idioms, and business terminology into account. Try it free with your own team's phrasing.",
  },
  {
    question: "Can team members use different languages simultaneously?",
    answer:
      "Yes. Each team member configures their own source and target language. One person speaks Japanese, another speaks Spanish — both output professional English (or any target language).",
  },
  {
    question: "Is there a team/enterprise plan?",
    answer:
      "Yes. The Enterprise plan is $8.99 per user per month (minimum 3 users) with centralized billing, admin controls, and priority support. See the pricing page, or contact us at hi@oravo.ai for larger teams.",
  },
];

const LANGUAGES = [
  "Español",
  "हिन्दी",
  "日本語",
  "Português",
  "한국어",
  "Deutsch",
  "Français",
  "中文",
  "العربية",
  "Italiano",
  "Русский",
  "Türkçe",
  "Tiếng Việt",
  "Bahasa Indonesia",
  "Polski",
  "Nederlands",
  "ไทย",
  "বাংলা",
];

export default function ForMultilingualTeamsPage() {
  return (
    <MarketingShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQS)) }} />

      <AudienceHero
        eyebrow="For Multilingual Teams"
        icon={<Globe2 />}
        lead="Voice Typing With Real-Time Translation"
        accent="for Global Teams"
        description="Speak in your language. Get polished text in the language your team works in. Oravo translates across 60+ languages in real time — no copy-paste, no extra tools."
        primary={{ label: "Try Oravo free", href: "/download" }}
        proof={["60+ languages", "Real-time translation", "Built for real accents"]}
        doodles={["globe", "bubbles"]}
        visual={
          <AudienceDemo
            app="Slack"
            field="#launch-apac"
            icon={<Hash />}
            sayLang="Japanese"
            outLang="English"
            say="明日の打ち合わせは午後3時に変更になりました。資料は今日中に共有します。"
            output="Tomorrow's meeting has moved to 3 PM. I'll share the materials by end of day."
            terms={["3 PM"]}
            doneNote="Translated and posted"
          />
        }
      />

      <Band color={GROUND.paper} from={GROUND.sand} blend={200} className={BAND_PAD}>
        <div className={SHELL}>
          <FeatureIndex
            intro={{
              doodle: "globe",
              eyebrow: "Features",
              title: "Built for Global Collaboration",
              lede: "Every feature designed to help multilingual teams communicate faster and more clearly.",
            }}
            items={FEATURES}
          />
        </div>
      </Band>

      <Band color={GROUND.clay} from={GROUND.paper} blend={200} className={BAND_PAD}>
        <div className={SHELL}>
          <ScenarioTickets
            intro={{
              doodle: "bubbles",
              eyebrow: "Use cases",
              title: "How Global Teams Use Oravo",
              lede: "Real scenarios where multilingual voice typing transforms team productivity.",
            }}
            items={SCENARIOS}
            stubLabel="Speak → get"
          />
        </div>
      </Band>

      <Band color={GROUND.mist} from={GROUND.clay} blend={200} className={BAND_PAD}>
        <div className={SHELL}>
          <Statement
            doodle="globe"
            eyebrow="60+ languages"
            title="Everyone writes in their best language: the one they think in."
            body="Your strongest people shouldn't sound hesitant just because English is their second or third language. They speak naturally; the team reads clear, professional text."
            aside={<LanguageRibbon languages={LANGUAGES} />}
          />
        </div>
      </Band>

      <Band color={GROUND.canvas} from={GROUND.mist} blend={200} className={BAND_PAD}>
        <div className={SHELL}>
          <AudienceFaq intro={{ doodle: "question", eyebrow: "FAQ", title: "Frequently Asked Questions" }} items={FAQS} />
        </div>
      </Band>

      <Band color={GROUND.blush} from={GROUND.canvas} className="pt-16 pb-20 sm:pt-20">
        <div className={SHELL}>
          <AudienceCta
            doodle="globe"
            eyebrow="For global teams"
            title="Break Language Barriers Today"
            description="Give your global team the power to communicate in any language — effortlessly. Start with the free plan."
            primary={{ label: "Try Oravo free", href: "/download" }}
            secondary={{ label: "Team pricing", href: "/pricing" }}
            bullets={["60+ languages", "Real accents", "Works everywhere"]}
          />
        </div>
      </Band>
    </MarketingShell>
  );
}

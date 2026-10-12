import type { Metadata } from "next";
import { Accessibility, AppWindow, Eye, Hand, Languages, MessageCircle, Move, Sparkles } from "lucide-react";
import { AudienceDemo } from "@/components/audience/AudienceDemo";
import { AudienceHero } from "@/components/audience/AudienceHero";
import { AudienceCta, AudienceFaq, ThreeBeats } from "@/components/audience/AudienceSections";
import { FeatureIndex } from "@/components/audience/FeatureLayouts";
import { ScenarioDeck } from "@/components/audience/ScenarioLayouts";
import { BAND_PAD, GROUND, SHELL } from "@/components/audience/shell";
import { Band } from "@/components/landing/Band";
import { MarketingShell } from "@/components/landing/MarketingShell";
import { faqJsonLd } from "@/lib/faq";

export const metadata: Metadata = {
  title: "Voice Typing for Accessibility | Hands-Free Dictation | Oravo AI",
  description:
    "Type hands-free with accuracy and independence. Perfect for RSI, mobility challenges, or visual impairments. Accessible voice to text for everyone.",
  keywords: [
    "voice typing for accessibility",
    "accessible dictation software",
    "hands-free typing",
    "RSI voice to text",
    "mobility impairment dictation",
    "visual impairment typing",
    "assistive technology voice",
    "adaptive dictation",
    "carpal tunnel voice typing",
    "disability voice to text",
    "accessible computer use",
    "speech to text accessibility",
    "ergonomic voice typing",
    "repetitive strain voice",
    "accessible productivity",
    "voice input accessibility",
  ],
  openGraph: {
    title: "Voice Typing for Accessibility | Hands-Free Dictation | Oravo AI",
    description: "Type hands-free with accuracy and independence. Perfect for RSI, mobility challenges, or visual impairments.",
    url: "https://oravo.ai/for-accessibility",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Voice Typing for Accessibility | Oravo AI",
    description: "Type hands-free with accuracy and independence.",
  },
  alternates: {
    canonical: "https://oravo.ai/for-accessibility",
  },
};

const FEATURES = [
  {
    icon: <Hand />,
    title: "RSI & Carpal Tunnel",
    description: "Rest your hands while staying productive. Speaking instead of typing cuts out most of the repetitive keystrokes that make strain worse.",
  },
  {
    icon: <Move />,
    title: "Mobility Challenges",
    description: "Write in any application by voice, with far less keyboard use. One shortcut starts dictation; your voice does the rest.",
  },
  {
    icon: <Eye />,
    title: "Visual Impairments",
    description: "Speak instead of hunting for keys. Oravo types where your cursor is focused, like a keyboard, so it fits alongside screen readers and other assistive technology.",
  },
  {
    icon: <Sparkles />,
    title: "Clean, Punctuated Text",
    description: "Modern speech recognition that understands natural, continuous speech and adds punctuation for you. Fewer corrections, more independence.",
  },
  {
    icon: <AppWindow />,
    title: "Works Everywhere",
    description: "Use Oravo in any application—email, documents, browsers, chat, and more. One solution for all your typing needs.",
  },
  {
    icon: <Languages />,
    title: "60+ Languages",
    description: "Speak in your native language. Oravo supports 60+ languages.",
  },
];

const SCENARIOS = [
  {
    title: "Professional Work",
    tag: "At work",
    description: "Send emails, write documents, and communicate with colleagues with far less keyboard and mouse use. Maintain your productivity and career.",
  },
  {
    title: "Education",
    tag: "At school",
    description: "Take notes, write papers, and complete assignments by voice. Stay engaged in learning without physical barriers.",
  },
  {
    title: "Personal Communication",
    tag: "At home",
    description: "Stay connected with friends and family. Send messages, write emails, and engage on social media comfortably.",
  },
  {
    title: "Creative Projects",
    tag: "For yourself",
    description: "Write stories, journal entries, and creative works. Your voice is your input device—express yourself freely.",
  },
];

const FAQS = [
  {
    question: "Can I use Oravo 100% hands-free?",
    answer:
      "Almost. Dictation starts with a single keyboard shortcut, which you can trigger from a switch, foot pedal or any assistive device that sends key presses. After that you speak and Oravo types, with no further typing needed.",
  },
  {
    question: "Does it work with screen readers?",
    answer:
      "Oravo types text wherever your cursor is focused, the same way a keyboard does, so it can be used alongside screen readers and other assistive technologies. If something doesn't work with your setup, tell us at hi@oravo.ai.",
  },
  {
    question: "How accurate is the speech recognition?",
    answer:
      "Oravo uses modern AI speech recognition that understands natural speech patterns, accents, and continuous dictation, and it adds punctuation for you. Try it free on your own voice and setup.",
  },
  {
    question: "Is there a trial or free version?",
    answer:
      "Yes. Oravo offers a free tier so you can experience the accessibility benefits before committing. We believe everyone deserves access to these tools.",
  },
];

export default function ForAccessibilityPage() {
  return (
    <MarketingShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQS)) }} />

      <AudienceHero
        layout="stacked"
        eyebrow="For Accessibility"
        icon={<Accessibility />}
        lead="Voice Typing"
        accent="for Accessibility"
        description="Type with your voice, comfortably and independently. Made for RSI, mobility challenges, or visual impairments."
        proof={["Far fewer keystrokes", "Punctuation handled", "Works everywhere"]}
        doodles={["mic", "people"]}
        visual={
          <AudienceDemo
            large
            app="Messages"
            field="Reply to Mum"
            icon={<MessageCircle />}
            say="hey mum, just got home, physio went really well today, i'll call you after dinner, love you"
            output={"Hey Mum, just got home. Physio went really well today! I'll call you after dinner. Love you."}
            doneNote="Punctuated for you"
          />
        }
      />

      <Band color={GROUND.paper} from={GROUND.sand} blend={200} className={BAND_PAD}>
        <div className={SHELL}>
          <ThreeBeats
            intro={{
              doodle: "hotkey",
              eyebrow: "How it works",
              title: "One shortcut. Then just talk.",
              lede: "No training sessions, no commands to memorize. If your device can send a key press, it can start Oravo.",
            }}
            beats={[
              { title: "Start with one key", description: "Press your shortcut, or trigger it from a switch, pedal or other assistive input." },
              { title: "Speak naturally", description: "Talk at your own pace. Pauses, accents and long sentences are fine." },
              { title: "Text appears where you are", description: "Punctuated text lands at your cursor in whatever app you're using." },
            ]}
            typed="Physio went really well today!"
          />
        </div>
      </Band>

      <Band color={GROUND.canvas} from={GROUND.paper} blend={200} className={BAND_PAD}>
        <div className={SHELL}>
          <FeatureIndex
            intro={{
              doodle: "people",
              eyebrow: "Features",
              title: "Built for Independence",
              lede: "Computer use should be comfortable and accessible to everyone.",
            }}
            items={FEATURES}
          />
        </div>
      </Band>

      <Band color={GROUND.clay} from={GROUND.canvas} blend={200} className={BAND_PAD}>
        <div className={SHELL}>
          <ScenarioDeck
            intro={{ doodle: "speech", eyebrow: "Use cases", title: "Use Cases", lede: "See how people use Oravo for accessible computing." }}
            items={SCENARIOS}
          />
        </div>
      </Band>

      <Band color={GROUND.paper} from={GROUND.clay} blend={200} className={BAND_PAD}>
        <div className={SHELL}>
          <AudienceFaq
            intro={{ doodle: "question", eyebrow: "FAQ", title: "Frequently Asked Questions" }}
            items={FAQS}
            aside={
              <>
                Using Oravo with assistive technology? We&apos;d like to hear what works and what doesn&apos;t:{" "}
                <a href="mailto:hi@oravo.ai" className="font-semibold text-primary-500 underline-offset-4 hover:underline">
                  hi@oravo.ai
                </a>
                .
              </>
            }
          />
        </div>
      </Band>

      <Band color={GROUND.blush} from={GROUND.paper} className="pt-16 pb-20 sm:pt-20">
        <div className={SHELL}>
          <AudienceCta
            doodle="mic"
            eyebrow="Your voice is your keyboard"
            title="Type with Your Voice"
            description="Find comfort and independence at the computer. Start free, on your own voice and setup."
            bullets={["Fewer keystrokes", "Works in any app", "Free to start"]}
          />
        </div>
      </Band>
    </MarketingShell>
  );
}

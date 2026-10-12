import type { Metadata } from "next";
import { AppWindow, AudioLines, BookOpen, Feather, Languages, PilcrowRight, Zap } from "lucide-react";
import { AudienceDemo } from "@/components/audience/AudienceDemo";
import { AudienceHero } from "@/components/audience/AudienceHero";
import { AudienceCta, AudienceFaq, Statement } from "@/components/audience/AudienceSections";
import { FeatureSpec } from "@/components/audience/FeatureLayouts";
import { ScenarioTimeline } from "@/components/audience/ScenarioLayouts";
import { BAND_PAD, GROUND, SHELL } from "@/components/audience/shell";
import { Band } from "@/components/landing/Band";
import { MarketingShell } from "@/components/landing/MarketingShell";
import { faqJsonLd } from "@/lib/faq";

export const metadata: Metadata = {
  title: "Voice Typing for Writers | Beat Writer's Block | Oravo AI",
  description:
    "Beat writer's block by speaking your first draft. Get words flowing at the natural pace of human thought. Draft at speaking speed with AI voice dictation for authors and writers.",
  keywords: [
    "voice typing for writers",
    "dictation for authors",
    "writer voice to text",
    "beat writer's block",
    "author dictation software",
    "novel writing voice",
    "book writing dictation",
    "creative writing voice",
    "first draft dictation",
    "writing productivity",
    "author tools",
    "manuscript dictation",
    "fiction writing voice",
    "non-fiction dictation",
    "writing flow state",
    "writer productivity app",
  ],
  openGraph: {
    title: "Voice Typing for Writers | Beat Writer's Block | Oravo AI",
    description:
      "Beat writer's block by speaking your first draft. Get words flowing at the natural pace of human thought.",
    url: "https://oravo.ai/for-writers",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Voice Typing for Writers | Oravo AI",
    description: "Beat writer's block by speaking your first draft. Draft at speaking speed.",
  },
  alternates: {
    canonical: "https://oravo.ai/for-writers",
  },
};

const FEATURES = [
  {
    icon: <Feather />,
    title: "Beat Writer's Block",
    description: "When you're stuck, just start talking. Saying an idea out loud is often easier than facing a blank page, and it gets the words moving again.",
  },
  {
    icon: <Zap />,
    title: "First Drafts, Fast",
    description: "Get the first draft down at speaking speed, which is far quicker than most people type. Edit and polish later.",
  },
  {
    icon: <AudioLines />,
    title: "Natural Voice",
    description: "Your authentic voice comes through when you speak. Oravo captures your natural rhythm, tone, and style.",
  },
  {
    icon: <PilcrowRight />,
    title: "Auto Formatting",
    description: "Oravo handles punctuation, paragraphs, and capitalization automatically. Speak naturally; get polished text.",
  },
  {
    icon: <AppWindow />,
    title: "Works Anywhere",
    description: "Scrivener, Google Docs, Word, Notion—Oravo works in any writing app. Your workflow, enhanced.",
  },
  {
    icon: <Languages />,
    title: "60+ Languages",
    description: "Write in any of 60+ languages. Perfect for multilingual authors or translation workflows.",
  },
];

const SCENARIOS = [
  {
    time: "7:00",
    title: "Journaling",
    description: "Capture daily reflections, morning pages, and stream-of-consciousness writing effortlessly.",
  },
  {
    time: "9:30",
    title: "Novel Writing",
    description: "Dictate chapters while walking, pacing, or lying down. Many authors find they write better when moving.",
  },
  {
    time: "13:00",
    title: "Blog Posts & Articles",
    description: "Draft blog posts and articles at speaking speed. Get your ideas down fast, then edit for polish.",
  },
  {
    time: "16:30",
    title: "Research Notes",
    description: "Dictate notes while reading sources. Capture insights without breaking your reading flow.",
  },
];

const FAQS = [
  {
    question: "Does speaking really help with writer's block?",
    answer:
      "For many writers, yes. Talking through an idea skips the pressure of the blank page: you explain the scene or argument the way you would to a friend, then shape it on the page afterwards.",
  },
  {
    question: "Will my writing still sound like me?",
    answer:
      "Absolutely. Oravo transcribes your exact words. Many writers find their authentic voice comes through more naturally when speaking than when typing.",
  },
  {
    question: "Can I use it with Scrivener?",
    answer: "Yes. Oravo works in Scrivener, Google Docs, Microsoft Word, Notion, and any other writing app with a text field.",
  },
  {
    question: "What about dialogue and character voices?",
    answer:
      "Oravo captures exactly what you say. Many fiction writers dictate dialogue by voicing their characters out loud—it often sounds more natural than typed dialogue.",
  },
];

export default function ForWritersPage() {
  return (
    <MarketingShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQS)) }} />

      <AudienceHero
        eyebrow="For Writers & Authors"
        icon={<Feather />}
        lead="Voice Typing"
        accent="for Writers"
        description="Beat writer's block by speaking your first draft. Get words flowing at the natural pace of human thought."
        proof={["Draft at speaking speed", "Beat writer's block", "Natural flow state"]}
        doodles={["scribble", "notebook"]}
        visual={
          <AudienceDemo
            skin="paper"
            app="Scrivener"
            field="Chapter 3"
            icon={<BookOpen />}
            say="the house was quieter than she remembered, new paragraph, even the clock in the hall seemed to be holding its breath, she set her bag down and waited"
            output={"The house was quieter than she remembered.\n\nEven the clock in the hall seemed to be holding its breath. She set her bag down and waited."}
            doneNote="New paragraph, as you said"
          />
        }
      />

      <Band color={GROUND.paper} from={GROUND.sand} blend={200} className={BAND_PAD}>
        <div className={SHELL}>
          <FeatureSpec
            intro={{
              doodle: "scribble",
              eyebrow: "Features",
              title: "Write Like You Think",
              lede: "Speaking is faster than typing. Let your ideas flow at the speed of thought.",
            }}
            items={FEATURES}
          />
        </div>
      </Band>

      <Band color={GROUND.canvas} from={GROUND.paper} blend={200} className={BAND_PAD}>
        <div className={SHELL}>
          <ScenarioTimeline
            intro={{
              doodle: "notebook",
              eyebrow: "A writing day",
              title: "Writer Workflows",
              lede: "See how authors use Oravo to write more, from morning pages to the last research note.",
            }}
            items={SCENARIOS}
          />
        </div>
      </Band>

      <Band color={GROUND.mist} from={GROUND.canvas} blend={200} className={BAND_PAD}>
        <div className={SHELL}>
          <Statement
            doodle="quote"
            eyebrow="Draft now, edit later"
            title="The first draft is for getting it out. Say it."
            body="Most of the friction in writing is the gap between the sentence in your head and the one on the screen. Speaking closes it. Keep the inner editor for the second pass."
            pointsLabel="While you dictate"
            points={["Punctuation and capitals handled for you", "Say “new paragraph” to break the page", "Your words, not rewritten ones", "Works in Scrivener, Word, Docs and Notion"]}
          />
        </div>
      </Band>

      <Band color={GROUND.paper} from={GROUND.mist} blend={200} className={BAND_PAD}>
        <div className={SHELL}>
          <AudienceFaq intro={{ doodle: "question", eyebrow: "FAQ", title: "Frequently Asked Questions" }} items={FAQS} />
        </div>
      </Band>

      <Band color={GROUND.blush} from={GROUND.paper} className="pt-16 pb-20 sm:pt-20">
        <div className={SHELL}>
          <AudienceCta
            doodle="notebook"
            eyebrow="For writers"
            title="Write at the Speed of Thought"
            description="Break through the block and get the draft down. Polish it later."
            bullets={["No credit card required", "2-minute setup", "Works everywhere"]}
          />
        </div>
      </Band>
    </MarketingShell>
  );
}

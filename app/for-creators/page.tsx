import type { Metadata } from "next";
import { Clapperboard, FileText, Lightbulb, Mail, MessageSquareText, Mic, PenTool, Video } from "lucide-react";
import { AudienceDemo } from "@/components/audience/AudienceDemo";
import { AudienceHero } from "@/components/audience/AudienceHero";
import { AudienceCta, AudienceFaq, Statement } from "@/components/audience/AudienceSections";
import { FeatureBento, TermCloud } from "@/components/audience/FeatureLayouts";
import { ScenarioSwitcher } from "@/components/audience/ScenarioLayouts";
import { BAND_PAD, GROUND, SHELL } from "@/components/audience/shell";
import { Band } from "@/components/landing/Band";
import { MarketingShell } from "@/components/landing/MarketingShell";
import { faqJsonLd } from "@/lib/faq";

export const metadata: Metadata = {
  title: "Voice to Text for Creators | Dictate Scripts & Content | Oravo AI",
  description:
    "Dictate video scripts, podcast notes, and social media content at the speed of thought. Keep your creative flow uninterrupted with Oravo's AI voice typing for content creators.",
  keywords: [
    "voice to text for creators",
    "dictation for content creators",
    "video script dictation",
    "podcast notes voice typing",
    "social media content dictation",
    "youtube script voice to text",
    "content creator tools",
    "creative writing dictation",
    "blogger voice typing",
    "influencer productivity tools",
    "tiktok content creation",
    "voice typing for youtubers",
    "dictate blog posts",
    "creative flow tools",
    "hands-free content creation",
  ],
  openGraph: {
    title: "Voice to Text for Creators | Dictate Scripts & Content | Oravo AI",
    description:
      "Dictate video scripts, podcast notes, and social media content at the speed of thought. Keep your creative flow uninterrupted.",
    url: "https://oravo.ai/for-creators",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Voice to Text for Creators | Oravo AI",
    description:
      "Dictate video scripts, podcast notes, and social media content at the speed of thought.",
  },
  alternates: {
    canonical: "https://oravo.ai/for-creators",
  },
};

const FEATURES = [
  {
    icon: <Video />,
    title: "Video Scripts",
    description: "Dictate YouTube scripts, TikTok hooks, and video outlines while pacing around your studio.",
  },
  {
    icon: <Mic />,
    title: "Podcast Notes",
    description: "Capture episode ideas, show notes, and interview prep at speaking speed.",
  },
  {
    icon: <MessageSquareText />,
    title: "Social Media Content",
    description: "Draft tweets, LinkedIn posts, and Instagram captions in seconds.",
  },
  {
    icon: <FileText />,
    title: "Blog Posts",
    description: "Beat writer's block by speaking your first draft. Edit and polish later.",
  },
  {
    icon: <Mail />,
    title: "Email Newsletters",
    description: "Write to your audience like you're talking to a friend.",
  },
  {
    icon: <Lightbulb />,
    title: "Brainstorming",
    description: "Capture every idea in a creative session. Speak freely and let Oravo organize.",
  },
];

const SCENARIOS = [
  {
    title: "YouTube Video Production",
    description: "Outline your video, dictate the full script, and write your description—all by voice.",
    say: "description, in this video i test three budget mics under fifty dollars, timestamps below, links to everything in the first comment",
    where: "YouTube Studio",
    get: "In this video, I test three budget mics under $50. Timestamps are below, and links to everything are in the first comment.",
  },
  {
    title: "Content Batching",
    description: "Record a week's worth of social posts in one session. Speak your ideas, Oravo formats them.",
    say: "post two, nobody tells you the first hundred videos are practice, post the hundred and first anyway",
    where: "Buffer",
    get: "Nobody tells you the first 100 videos are practice.\n\nPost the 101st anyway.",
  },
  {
    title: "Podcast Show Notes",
    description: "Capture timestamps, key points, and resources while listening back.",
    say: "twelve thirty, maya explains why she quit sponsorships, twenty one ten, her three rules for brand deals",
    where: "Notion",
    get: "12:30 · Maya explains why she quit sponsorships\n21:10 · Her three rules for brand deals",
  },
  {
    title: "Course Creation",
    description: "Outline modules, dictate lesson scripts, and write workbook content at the speed of thought.",
    say: "module three, lighting on a budget, lesson one, using a window as your key light",
    where: "Google Docs",
    get: "Module 3: Lighting on a Budget\nLesson 1: Using a window as your key light",
  },
];

const FAQS = [
  {
    question: "Can I use Oravo while editing video?",
    answer: "Yes! Oravo works in any app. Dictate into Premiere Pro, Final Cut, DaVinci Resolve—anywhere you can type.",
  },
  {
    question: "Does it capture my authentic voice and style?",
    answer: "Absolutely. Oravo transcribes exactly what you say with proper punctuation and formatting.",
  },
  {
    question: "Can I dictate in different languages?",
    answer: "Yes, Oravo supports 60+ languages. Perfect for multilingual creators or reaching global audiences.",
  },
  {
    question: "Will it work with my content management tools?",
    answer: "Oravo works everywhere—Notion, Google Docs, WordPress, Substack, and any other tool with a text field.",
  },
];

export default function ForCreatorsPage() {
  return (
    <MarketingShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQS)) }} />

      <AudienceHero
        layout="reverse"
        eyebrow="For Content Creators"
        icon={<Clapperboard />}
        lead="Voice to Text"
        accent="for Creators"
        description="Dictate video scripts, podcast notes, and social media content at the speed of thought. Keep your creative flow uninterrupted."
        proof={["Faster than typing", "Never break creative flow", "Works in any app"]}
        doodles={["speech", "sparkle"]}
        visual={
          <AudienceDemo
            app="Notion"
            field="Script · Episode 14"
            icon={<PenTool />}
            say="hook, i wrote every script for thirty days by voice, um, here's what actually changed. new line, b roll, me pacing around the kitchen talking to my phone"
            output={"## Hook\nI wrote every script for 30 days by voice. Here's what actually changed.\n\n## B-roll\nMe pacing around the kitchen, talking to my phone."}
            terms={["30 days", "B-roll"]}
            doneNote="Script-ready"
          />
        }
      />

      <Band color={GROUND.paper} from={GROUND.sand} blend={200} className={BAND_PAD}>
        <div className={SHELL}>
          <FeatureBento
            intro={{
              doodle: "sparkle",
              eyebrow: "Features",
              title: "Built for Creative Workflows",
              lede: "Capture ideas the moment they strike. No typing delays, no lost inspiration.",
            }}
            items={FEATURES}
            art={
              <TermCloud
                terms={["Hook", "Cold open", "B-roll", "Call to action", "Sponsor read", "Thumbnail idea", "Outro", "Chapter 3"]}
                caption="Say the beat, get the script line"
              />
            }
          />
        </div>
      </Band>

      <Band color={GROUND.clay} from={GROUND.paper} blend={200} className={BAND_PAD}>
        <div className={SHELL}>
          <ScenarioSwitcher
            intro={{ doodle: "bubbles", eyebrow: "Use cases", title: "Real Creator Workflows", lede: "See how creators use Oravo to produce more content, faster." }}
            items={SCENARIOS}
          />
        </div>
      </Band>

      <Band color={GROUND.mist} from={GROUND.clay} blend={200} className={BAND_PAD}>
        <div className={SHELL}>
          <Statement
            doodle="speech"
            eyebrow="Keep the energy"
            title="Ideas arrive mid-walk, mid-shower, mid-edit. Catch them."
            body="Your best lines show up when you're not at the keyboard. Say them the moment they land, in the voice your audience already knows, and shape them later."
            pointsLabel="One session, a week of content"
            points={["Scripts and hooks drafted out loud", "Captions written for every platform", "Show notes while you listen back", "Newsletter that sounds like you"]}
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
            doodle="sparkle"
            eyebrow="For creators"
            title="Create More. Type Less."
            description="Get the idea down while it's still exciting. Scripts, captions and notes at speaking speed."
            bullets={["No credit card required", "2-minute setup", "Works everywhere"]}
          />
        </div>
      </Band>
    </MarketingShell>
  );
}

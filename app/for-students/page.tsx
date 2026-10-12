import type { Metadata } from "next";
import { AppWindow, CalendarClock, FileText, GraduationCap, Languages, Lightbulb, NotebookPen } from "lucide-react";
import { AudienceDemo } from "@/components/audience/AudienceDemo";
import { AudienceHero } from "@/components/audience/AudienceHero";
import { AudienceCta, AudienceFaq, Statement } from "@/components/audience/AudienceSections";
import { FeatureBento, TermCloud } from "@/components/audience/FeatureLayouts";
import { ScenarioTimeline } from "@/components/audience/ScenarioLayouts";
import { BAND_PAD, GROUND, SHELL } from "@/components/audience/shell";
import { Band } from "@/components/landing/Band";
import { MarketingShell } from "@/components/landing/MarketingShell";
import { faqJsonLd } from "@/lib/faq";

export const metadata: Metadata = {
  title: "Dictation App for Students | Write Essays Faster | Oravo AI",
  description:
    "Write essays, research papers, and study notes at speaking speed. Focus on learning, not typing. The best voice to text app for students and academic writing.",
  keywords: [
    "dictation app for students",
    "student voice to text",
    "essay writing dictation",
    "research paper voice typing",
    "study notes dictation",
    "college student tools",
    "academic writing voice",
    "homework dictation",
    "student productivity",
    "dissertation dictation",
    "thesis writing voice",
    "note taking voice",
    "lecture notes dictation",
    "student essay help",
    "academic voice typing",
    "university student tools",
    "Whisper Flow alternative",
    "Willow Voice alternative",
    "Wispr Flow alternative",
    "Dragon alternative for students",
    "Otter.ai alternative for students",
    "Notta alternative",
    "Speechnotes alternative",
    "Voice In alternative",
    "best dictation for non-native English speakers",
    "ESL student dictation app",
    "write English like a native speaker",
    "voice typing for international students",
  ],
  openGraph: {
    title: "Dictation App for Students | Write Essays Faster | Oravo AI",
    description: "Write essays, research papers, and study notes at speaking speed. Focus on learning, not typing.",
    url: "https://oravo.ai/for-students",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dictation App for Students | Oravo AI",
    description: "Write essays and research papers faster with voice dictation.",
  },
  alternates: {
    canonical: "https://oravo.ai/for-students",
  },
};

const FEATURES = [
  {
    icon: <FileText />,
    title: "Essays & Papers",
    description: "Dictate essays, research papers, and assignments at speaking speed. Get your ideas down fast, then edit and polish.",
  },
  {
    icon: <NotebookPen />,
    title: "Study Notes",
    description: "Capture lecture notes, reading notes, and study guides by voice. Review material while dictating summaries.",
  },
  {
    icon: <CalendarClock />,
    title: "Assignment Deadlines",
    description: "Write faster when deadlines loom. Dictate first drafts in a fraction of the time it takes to type.",
  },
  {
    icon: <Lightbulb />,
    title: "Brainstorming",
    description: "Talk through your ideas before writing. Speaking helps clarify thoughts and overcome blank page anxiety.",
  },
  {
    icon: <AppWindow />,
    title: "Works Everywhere",
    description: "Google Docs, Word, Canvas, Notion—Oravo works in any app you use for school. Your tools, enhanced.",
  },
  {
    icon: <Languages />,
    title: "60+ Languages",
    description: "Perfect for ESL students or foreign language courses. Dictate in any of 60+ languages.",
  },
];

const SCENARIOS = [
  {
    time: "Mon",
    title: "Essay Writing",
    description: "Outline your essay, then dictate each section. Get a full first draft in one session, then edit for clarity and citations.",
  },
  {
    time: "Tue",
    title: "Research Notes",
    description: "Dictate summaries while reading sources. Capture key quotes, page numbers, and your analysis without switching contexts.",
  },
  {
    time: "Wed",
    title: "Lab Reports",
    description: "Document procedures, observations, and conclusions hands-free. Perfect for when you're working in the lab.",
  },
  {
    time: "Thu",
    title: "Discussion Posts",
    description: "Knock out weekly discussion posts at speaking speed. Engage thoughtfully without the typing burden.",
  },
];

const FAQS = [
  {
    question: "Is there a student discount?",
    answer: "Yes! Oravo offers special pricing for students: Oravo Pro at 50% off when you verify with your .edu email. See the student offer page for details.",
  },
  {
    question: "Does it work with Google Docs?",
    answer: "Absolutely. Oravo works in Google Docs, Microsoft Word, Canvas, Blackboard, and any other app where you can type.",
  },
  {
    question: "Can it help with citations?",
    answer: "You can dictate your citations and references just like any other text. Oravo transcribes exactly what you say, formatted correctly.",
  },
  {
    question: "What about academic integrity?",
    answer: "Oravo transcribes your own words—it's just a faster way to type. The ideas and writing are still entirely yours.",
  },
];

export default function ForStudentsPage() {
  return (
    <MarketingShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQS)) }} />

      <AudienceHero
        layout="reverse"
        eyebrow="For Students"
        icon={<GraduationCap />}
        lead="Dictation App"
        accent="for Students"
        description="Write essays, research papers, and study notes at speaking speed. Focus on learning, not typing."
        proof={["Draft faster than you type", "Free plan to start", "Works in Google Docs"]}
        doodles={["notebook", "question"]}
        visual={
          <AudienceDemo
            app="Google Docs"
            field="BIO 101 lecture notes"
            icon={<NotebookPen />}
            say="photosynthesis key points, light reactions happen in the thylakoid membrane, the calvin cycle fixes carbon dioxide in the stroma, exam is on chapter six"
            output={"## Photosynthesis: key points\n- Light reactions happen in the thylakoid membrane\n- The Calvin cycle fixes CO₂ in the stroma\n- Exam covers chapter 6"}
            terms={["thylakoid", "Calvin cycle", "CO₂"]}
            doneNote="Notes, not a wall of text"
          />
        }
      />

      <Band color={GROUND.paper} from={GROUND.sand} blend={200} className={BAND_PAD}>
        <div className={SHELL}>
          <FeatureBento
            intro={{ doodle: "notebook", eyebrow: "Features", title: "Study Smarter, Not Harder", lede: "Spend less time typing and more time learning." }}
            items={FEATURES}
            art={
              <TermCloud
                terms={["Thesis statement", "Mitochondria", "Works cited", "Hypothesis", "Ibid.", "Chapter 6", "Lab report", "Bibliography"]}
                caption="Course vocabulary, spelled right"
              />
            }
          />
        </div>
      </Band>

      <Band color={GROUND.canvas} from={GROUND.paper} blend={200} className={BAND_PAD}>
        <div className={SHELL}>
          <ScenarioTimeline
            intro={{
              doodle: "people",
              eyebrow: "A week of coursework",
              title: "Student Use Cases",
              lede: "See how students use Oravo to get through their coursework.",
            }}
            items={SCENARIOS}
          />
        </div>
      </Band>

      <Band color={GROUND.clay} from={GROUND.canvas} blend={200} className={BAND_PAD}>
        <div className={SHELL}>
          <Statement
            tone="light"
            doodle="tag"
            eyebrow="Student offer"
            title="Oravo Pro, half price for students."
            body={
              <>
                Verify with your .edu email to get Oravo Pro at 50% off: unlimited dictation for every essay, lab report and discussion post.{" "}
                <a href="/students" className="font-semibold text-primary-500 underline-offset-4 hover:underline">
                  See the student offer
                </a>
              </>
            }
            pointsLabel="What you get"
            points={["Every Pro feature, unlocked", "50% off with a .edu email", "Works in Docs, Word, Canvas and Notion", "Cancel anytime"]}
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
            doodle="notebook"
            eyebrow="For students"
            title="Write Faster, Study Smarter"
            description="Get the draft down at speaking speed and keep more time for what matters."
            bullets={["Student pricing", "2-minute setup", "Works everywhere"]}
            secondary={{ label: "Student offer", href: "/students" }}
          />
        </div>
      </Band>
    </MarketingShell>
  );
}

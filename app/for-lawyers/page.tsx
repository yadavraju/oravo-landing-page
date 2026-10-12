import type { Metadata } from "next";
import { BookOpenText, Clock, FileSignature, Lock, Mail, NotebookPen, Scale, Send } from "lucide-react";
import { AudienceDemo } from "@/components/audience/AudienceDemo";
import { AudienceHero } from "@/components/audience/AudienceHero";
import { AudienceCta, AudienceFaq, Statement } from "@/components/audience/AudienceSections";
import { FeatureSpec } from "@/components/audience/FeatureLayouts";
import { ScenarioTickets } from "@/components/audience/ScenarioLayouts";
import { BAND_PAD, GROUND, SHELL } from "@/components/audience/shell";
import { Band } from "@/components/landing/Band";
import { MarketingShell } from "@/components/landing/MarketingShell";
import { faqJsonLd } from "@/lib/faq";

export const metadata: Metadata = {
  title: "Voice to Text for Lawyers | Legal Dictation Software | Oravo AI",
  description:
    "Dictate legal documents, case notes, and client communications with precision. Understands legal terminology. Voice typing built for attorneys and law firms.",
  keywords: [
    "voice to text for lawyers",
    "legal dictation software",
    "attorney voice to text",
    "law firm dictation",
    "legal document dictation",
    "case notes voice typing",
    "legal terminology recognition",
    "lawyer productivity tools",
    "deposition notes dictation",
    "legal memo voice",
    "court documents dictation",
    "client communications voice",
    "legal transcription",
    "attorney productivity",
    "law practice management",
    "legal writing voice",
  ],
  openGraph: {
    title: "Voice to Text for Lawyers | Legal Dictation Software | Oravo AI",
    description: "Dictate legal documents, case notes, and client communications with precision. Understands legal terminology.",
    url: "https://oravo.ai/for-lawyers",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Voice to Text for Lawyers | Oravo AI",
    description: "Dictate legal documents and case notes with precision.",
  },
  alternates: {
    canonical: "https://oravo.ai/for-lawyers",
  },
};

const FEATURES = [
  {
    icon: <FileSignature />,
    title: "Legal Documents",
    description: "Dictate contracts, briefs, memos, and letters at speaking speed. Professional legal writing, faster.",
  },
  {
    icon: <BookOpenText />,
    title: "Legal Terminology",
    description: "Oravo recognizes legal terms, Latin phrases, case citations, and statute references, and custom vocabulary covers the names and terms specific to your matters.",
  },
  {
    icon: <Lock />,
    title: "Client Confidentiality",
    description: "Oravo only listens while you hold the hotkey, and nothing is typed anywhere you didn't put your cursor. Review our privacy policy and your firm's rules before dictating privileged material.",
  },
  {
    icon: <NotebookPen />,
    title: "Case Notes",
    description: "Document case developments, witness interviews, and strategy notes while your thoughts are fresh.",
  },
  {
    icon: <Clock />,
    title: "Time Entries",
    description: "Dictate detailed time entries after calls and meetings. Accurate billing descriptions, minimal effort.",
  },
  {
    icon: <Send />,
    title: "Client Communications",
    description: "Draft client emails and letters quickly. Professional correspondence without the typing burden.",
  },
];

const SCENARIOS = [
  {
    title: "Litigation",
    description: "Dictate case strategy memos, deposition summaries, and motion drafts. Document while the details are fresh.",
    tag: "After the deposition",
  },
  {
    title: "Transactional Work",
    description: "Draft contracts, agreements, and deal documents faster. Review and edit from a complete first draft.",
    tag: "First draft",
  },
  {
    title: "Client Meetings",
    description: "Capture meeting notes and follow-up items immediately after client calls. Better documentation, better service.",
    tag: "Right after the call",
  },
  {
    title: "Court Appearances",
    description: "Document court observations, rulings, and next steps before leaving the courthouse.",
    tag: "Before you leave court",
  },
];

const FAQS = [
  {
    question: "Is Oravo secure enough for legal work?",
    answer:
      "Oravo is a general-purpose voice typing app: it listens only while you hold the hotkey and types where your cursor is. Whether it fits a given matter is your call. Read our privacy policy for how voice is processed and retained, check it against your firm's confidentiality obligations, and email hi@oravo.ai with any questions.",
  },
  {
    question: "Does it understand legal terminology?",
    answer:
      "Yes. Oravo recognizes common legal terms, including Latin phrases, case citations, statute references, and practice-specific vocabulary. Add party names and unusual terms to your custom vocabulary for consistent results.",
  },
  {
    question: "Can I use it with my practice management software?",
    answer: "Oravo works in any application where you can type—including Clio, MyCase, PracticePanther, and other legal software.",
  },
  {
    question: "Will it help me bill more hours?",
    answer:
      "It makes time entries easier to write while the details are fresh. Dictating a detailed description right after a call takes seconds, which tends to mean fuller, more accurate time capture.",
  },
];

export default function ForLawyersPage() {
  return (
    <MarketingShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQS)) }} />

      <AudienceHero
        layout="reverse"
        eyebrow="For Legal Professionals"
        icon={<Scale />}
        lead="Voice to Text"
        accent="for Lawyers"
        description="Dictate legal documents, case notes, and client communications with precision. Understands legal terminology."
        proof={["Legal terminology", "Listens only on the hotkey", "Detailed time entries"]}
        doodles={["scales", "quote"]}
        visual={
          <AudienceDemo
            app="Outlook"
            field="Reply to client"
            icon={<Mail />}
            say="hi margaret, following up on today's call, we filed the motion to compel this morning, opposing counsel has fourteen days to respond, i'll update you as soon as we hear back, best daniel"
            output={"Hi Margaret,\n\nFollowing up on today's call: we filed the motion to compel this morning. Opposing counsel has 14 days to respond, and I'll update you as soon as we hear back.\n\nBest,\nDaniel"}
            terms={["motion to compel", "Opposing counsel"]}
            doneNote="Client-ready"
          />
        }
      />

      <Band color={GROUND.paper} from={GROUND.sand} blend={200} className={BAND_PAD}>
        <div className={SHELL}>
          <FeatureSpec
            intro={{
              doodle: "scales",
              eyebrow: "Features",
              title: "Built for Legal Workflows",
              lede: "Document faster, capture your time, serve clients better.",
            }}
            items={FEATURES}
          />
        </div>
      </Band>

      <Band color={GROUND.clay} from={GROUND.paper} blend={200} className={BAND_PAD}>
        <div className={SHELL}>
          <ScenarioTickets
            intro={{ doodle: "notebook", eyebrow: "Use cases", title: "Legal Practice Use Cases", lede: "See how attorneys use Oravo to practice more efficiently." }}
            items={SCENARIOS}
            stubLabel="When"
          />
        </div>
      </Band>

      <Band color={GROUND.paper} from={GROUND.clay} blend={200} className={BAND_PAD}>
        <div className={SHELL}>
          <Statement
            tone="light"
            doodle="quote"
            eyebrow="Practice management"
            title="Your words, in the software you already bill from."
            body="Oravo types wherever your cursor is, so the same voice drafts the brief in Word, the note in Clio and the email in Outlook. No new system to learn, no copy and paste."
            pointsLabel="Works in"
            points={["Microsoft Word and Google Docs", "Clio, MyCase and PracticePanther", "Outlook, Gmail and your firm's chat", "Any browser-based e-filing or research tool"]}
          />
        </div>
      </Band>

      <Band color={GROUND.canvas} from={GROUND.paper} className={BAND_PAD}>
        <div className={SHELL}>
          <AudienceFaq
            intro={{ doodle: "question", eyebrow: "FAQ", title: "Frequently Asked Questions" }}
            items={FAQS}
            aside={
              <>
                Questions about confidentiality? Read the{" "}
                <a href="/privacy" className="font-semibold text-primary-500 underline-offset-4 hover:underline">
                  privacy policy
                </a>{" "}
                or email{" "}
                <a href="mailto:hi@oravo.ai" className="font-semibold text-primary-500 underline-offset-4 hover:underline">
                  hi@oravo.ai
                </a>
                .
              </>
            }
          />
        </div>
      </Band>

      <Band color={GROUND.blush} from={GROUND.canvas} className="pt-16 pb-20 sm:pt-20">
        <div className={SHELL}>
          <AudienceCta
            doodle="plane"
            eyebrow="For attorneys"
            title="Practice Law, Not Typing"
            description="Draft, document and follow up at speaking speed. Better documentation, fuller time entries."
            bullets={["Legal terminology built-in", "Custom vocabulary", "Works everywhere"]}
          />
        </div>
      </Band>
    </MarketingShell>
  );
}

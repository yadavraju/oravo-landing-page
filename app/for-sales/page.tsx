import type { Metadata } from "next";
import { BarChart3, Database, FileSpreadsheet, Hash, Mail, NotebookPen, PhoneCall, TrendingUp } from "lucide-react";
import { AudienceDemo } from "@/components/audience/AudienceDemo";
import { AudienceHero } from "@/components/audience/AudienceHero";
import { AudienceCta, AudienceFaq, Statement } from "@/components/audience/AudienceSections";
import { FeatureBento, TermCloud } from "@/components/audience/FeatureLayouts";
import { ScenarioDeck } from "@/components/audience/ScenarioLayouts";
import { BAND_PAD, GROUND, SHELL } from "@/components/audience/shell";
import { Band } from "@/components/landing/Band";
import { MarketingShell } from "@/components/landing/MarketingShell";
import { faqJsonLd } from "@/lib/faq";

export const metadata: Metadata = {
  title: "Voice Typing for Sales Teams | CRM Dictation | Oravo AI",
  description:
    "Follow up faster, close deals quicker. Dictate emails and CRM updates between meetings. Voice to text built for sales professionals.",
  keywords: [
    "voice typing for sales",
    "sales team dictation",
    "CRM voice to text",
    "salesforce dictation",
    "hubspot voice typing",
    "sales productivity",
    "follow up email dictation",
    "sales notes voice",
    "meeting notes dictation",
    "sales call notes",
    "deal updates voice",
    "sales rep tools",
    "pipeline updates voice",
    "sales email voice",
    "account executive tools",
    "SDR productivity",
  ],
  openGraph: {
    title: "Voice Typing for Sales Teams | CRM Dictation | Oravo AI",
    description: "Follow up faster, close deals quicker. Dictate emails and CRM updates between meetings.",
    url: "https://oravo.ai/for-sales",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Voice Typing for Sales Teams | Oravo AI",
    description: "Follow up faster, close deals quicker with voice dictation.",
  },
  alternates: {
    canonical: "https://oravo.ai/for-sales",
  },
};

const FEATURES = [
  {
    icon: <Mail />,
    title: "Follow-Up Emails",
    description: "Dictate personalized follow-ups between meetings. Send while the conversation is fresh, close deals faster.",
  },
  {
    icon: <Database />,
    title: "CRM Updates",
    description: "Update Salesforce, HubSpot, and Pipedrive by voice. Detailed notes, minimal effort.",
  },
  {
    icon: <PhoneCall />,
    title: "Call Notes",
    description: "Capture meeting notes immediately after calls. Document key points, next steps, and commitments.",
  },
  {
    icon: <FileSpreadsheet />,
    title: "Proposals",
    description: "Draft proposals and quotes faster. Speak your value prop, let Oravo handle the typing.",
  },
  {
    icon: <Hash />,
    title: "Slack Updates",
    description: "Keep your team informed with quick deal updates. Dictate between meetings without breaking stride.",
  },
  {
    icon: <BarChart3 />,
    title: "Pipeline Notes",
    description: "Document deal progression, objections, and competitive intel. Better notes, better forecasting.",
  },
];

const SCENARIOS = [
  {
    title: "Account Executives",
    tag: "Closing",
    description: "Follow up within minutes of a call. Dictate personalized emails while walking to your next meeting.",
  },
  {
    title: "SDRs/BDRs",
    tag: "Prospecting",
    description: "Send more outreach with personalized details. Dictate cadence emails and LinkedIn messages at scale.",
  },
  {
    title: "Sales Managers",
    tag: "Coaching",
    description: "Document coaching notes, pipeline reviews, and team updates quickly. More time for actual coaching.",
  },
  {
    title: "Customer Success",
    tag: "Renewals",
    description: "Document account health, renewal notes, and upsell opportunities. Stay on top of your book of business.",
  },
];

const FAQS = [
  {
    question: "Does it work with Salesforce?",
    answer: "Yes. Oravo works in Salesforce, HubSpot, Pipedrive, and any CRM with text fields. If you can click in a field, Oravo can type there.",
  },
  {
    question: "Can I use it on mobile between meetings?",
    answer: "Yes on Android, as well as macOS and Windows. The iOS app is coming soon; until then, iPhone users can dictate when they're back at a laptop.",
  },
  {
    question: "How fast can I send follow-ups?",
    answer: "A typical follow-up email takes a minute or two to dictate and send, while the conversation is still fresh.",
  },
  {
    question: "Is it secure for customer data?",
    answer:
      "Oravo listens only while you hold the hotkey and types only where your cursor is. For how voice is processed and retained, read our privacy policy, and email hi@oravo.ai if your security team has questions.",
  },
];

export default function ForSalesPage() {
  return (
    <MarketingShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQS)) }} />

      <AudienceHero
        layout="stacked"
        eyebrow="For Sales Teams"
        icon={<TrendingUp />}
        lead="Voice Typing"
        accent="for Sales Teams"
        description="Follow up faster, close deals quicker. Dictate emails and CRM updates between meetings."
        proof={["Works in Salesforce", "Follow up faster", "Notes while it's fresh"]}
        doodles={["speed", "plane"]}
        visual={
          <AudienceDemo
            app="Salesforce"
            field="Log a call"
            icon={<NotebookPen />}
            say="call with priya from acme, they loved the pilot, um, blocker is the security review, next step send the proposal by tuesday and loop in their it lead"
            output={"Contact | Priya Raman, Acme\nSummary | Loved the pilot. Main blocker is the security review.\nNext step | Send the proposal by Tuesday and loop in their IT lead."}
            terms={["security review", "Tuesday"]}
            doneNote="Fields filled"
          />
        }
      />

      <Band color={GROUND.paper} from={GROUND.sand} blend={200} className={BAND_PAD}>
        <div className={SHELL}>
          <FeatureBento
            intro={{ doodle: "speed", eyebrow: "Features", title: "Built for Sales Velocity", lede: "Spend less time typing, more time selling." }}
            items={FEATURES}
            art={
              <TermCloud
                terms={["Next steps", "Champion", "Q3 renewal", "MSA", "Procurement", "Pilot", "Pricing", "Decision maker", "Security review"]}
                caption="Deal vocabulary, typed the way you say it"
              />
            }
          />
        </div>
      </Band>

      <Band color={GROUND.clay} from={GROUND.paper} blend={200} className={BAND_PAD}>
        <div className={SHELL}>
          <ScenarioDeck
            intro={{ doodle: "people", eyebrow: "Use cases", title: "Sales Use Cases", lede: "See how sales pros use Oravo to hit quota." }}
            items={SCENARIOS}
          />
        </div>
      </Band>

      <Band color={GROUND.mist} from={GROUND.clay} blend={200} className={BAND_PAD}>
        <div className={SHELL}>
          <Statement
            doodle="plane"
            eyebrow="Between meetings"
            title="The follow-up goes out before you reach the elevator."
            body="Deals stall in the gap between the call and the email. Say what you heard while it's fresh, and Oravo writes it up in your CRM, your inbox and your team channel."
            pointsLabel="Five minutes after the call"
            points={["Personalized follow-up email sent", "Call logged with next steps", "Deal update posted to Slack", "Objections noted for forecasting"]}
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
            doodle="speed"
            eyebrow="For sales teams"
            title="Sell More. Type Less."
            description="Follow up faster and keep your CRM current without the typing."
            bullets={["Works in your CRM", "Follow up in minutes", "Free to start"]}
          />
        </div>
      </Band>
    </MarketingShell>
  );
}

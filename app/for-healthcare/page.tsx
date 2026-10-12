import type { Metadata } from "next";
import { BookMarked, ClipboardPlus, Hospital, MonitorSmartphone, Pill, ShieldQuestion, Stethoscope, Timer } from "lucide-react";
import { AudienceDemo } from "@/components/audience/AudienceDemo";
import { AudienceHero } from "@/components/audience/AudienceHero";
import { AudienceCta, AudienceFaq, Statement } from "@/components/audience/AudienceSections";
import { FeatureIndex } from "@/components/audience/FeatureLayouts";
import { ScenarioTickets } from "@/components/audience/ScenarioLayouts";
import { BAND_PAD, GROUND, SHELL } from "@/components/audience/shell";
import { Band } from "@/components/landing/Band";
import { MarketingShell } from "@/components/landing/MarketingShell";
import { faqJsonLd } from "@/lib/faq";

export const metadata: Metadata = {
  title: "Speech to Text for Healthcare | Medical Dictation | Oravo AI",
  description:
    "Document patient notes and medical reports by voice, with medical terminology recognition built-in. Voice typing that works in any EHR.",
  keywords: [
    "speech to text for healthcare",
    "medical dictation software",
    "healthcare voice to text",
    "patient notes dictation",
    "medical transcription",
    "clinical documentation",
    "EHR voice typing",
    "doctor dictation app",
    "nurse documentation tools",
    "medical terminology recognition",
    "healthcare productivity",
    "hands-free medical notes",
    "physician voice to text",
    "clinical notes dictation",
    "medical report voice typing",
  ],
  openGraph: {
    title: "Speech to Text for Healthcare | Medical Dictation | Oravo AI",
    description:
      "Document patient notes and medical reports by voice, with medical terminology recognition built-in.",
    url: "https://oravo.ai/for-healthcare",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Speech to Text for Healthcare | Oravo AI",
    description:
      "Document patient notes and medical reports by voice, with medical terminology recognition.",
  },
  alternates: {
    canonical: "https://oravo.ai/for-healthcare",
  },
};

const FEATURES = [
  {
    icon: <ClipboardPlus />,
    title: "Patient Notes",
    description: "Dictate SOAP notes, progress notes, and discharge summaries in your own words, and Oravo types them as clean, punctuated text.",
  },
  {
    icon: <Pill />,
    title: "Medical Terminology",
    description: "Oravo recognizes common drug names, procedures, diagnoses, and medical abbreviations, so there is less to correct after you dictate.",
  },
  {
    icon: <ShieldQuestion />,
    title: "You Control When It Listens",
    description: "Oravo only listens while you hold the hotkey. Before dictating patient information, check your organization's policies and our privacy policy.",
  },
  {
    icon: <MonitorSmartphone />,
    title: "Works in Any EHR",
    description: "Epic, Cerner, Meditech, Athena—Oravo types in any electronic health record system. Type anywhere you can click.",
  },
  {
    icon: <Timer />,
    title: "Real-Time Documentation",
    description: "Document while the encounter is fresh, not at the end of the day. Speak the note, review it, sign it.",
  },
  {
    icon: <BookMarked />,
    title: "Custom Medical Dictionary",
    description: "Add specialty-specific terms, facility names, and physician names to your personal dictionary so they come out right.",
  },
];

const SCENARIOS = [
  {
    title: "Physician Documentation",
    description: "Dictate H&P, progress notes, and orders between patients. Finish documentation before moving to the next room.",
    tag: "Physicians",
  },
  {
    title: "Nursing Notes",
    description: "Document assessments, interventions, and patient responses by voice. Keep your focus on patient care.",
    tag: "Nursing",
  },
  {
    title: "Radiology Reports",
    description: "Dictate imaging findings directly into your PACS or reporting system as clean, punctuated text.",
    tag: "Radiology",
  },
  {
    title: "Referral Letters",
    description: "Create detailed referral letters and consultation notes quickly. Professional correspondence without the typing burden.",
    tag: "Outpatient",
  },
];

const FAQS = [
  {
    question: "Is Oravo HIPAA compliant?",
    answer:
      "Oravo is a general-purpose voice typing app and does not claim HIPAA compliance. Before using it with protected health information, check your organization's policies and our privacy policy, and email hi@oravo.ai about BAA or other requirements.",
  },
  {
    question: "Does it understand medical terminology?",
    answer:
      "Yes. Oravo recognizes common medical terms, including drug names, procedures, diagnoses, and abbreviations. You can also add specialty-specific terms to your dictionary.",
  },
  {
    question: "Will it work with my EHR system?",
    answer:
      "Oravo works in any application where you can type—including Epic, Cerner, Meditech, Athena, and other EHR systems. If you can click in a text field, Oravo can type there.",
  },
  {
    question: "Can I use it during patient encounters?",
    answer:
      "Many clinicians dictate right after an encounter, while details are fresh. If you dictate in the room, follow your organization's rules on consent and recording.",
  },
];

export default function ForHealthcarePage() {
  return (
    <MarketingShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQS)) }} />

      <AudienceHero
        eyebrow="For Healthcare Professionals"
        icon={<Stethoscope />}
        lead="Speech to Text"
        accent="for Healthcare"
        description="Document patient notes and medical reports by voice, with medical terminology recognition built in."
        proof={["Medical terminology", "Custom dictionary", "Works in any EHR"]}
        doodles={["notebook", "mic"]}
        visual={
          <AudienceDemo
            app="EHR"
            field="Progress note"
            icon={<Hospital />}
            say="subjective, reports better sleep, mild headaches in the morning. objective, BP one twenty eight over eighty two, heart rate seventy two. assessment, hypertension improving. plan, continue lisinopril ten milligrams daily, recheck in four weeks"
            output={"S | Reports better sleep; mild morning headaches.\nO | BP 128/82, HR 72.\nA | Hypertension, improving.\nP | Continue lisinopril 10 mg daily. Recheck in 4 weeks."}
            terms={["lisinopril 10 mg", "128/82"]}
            doneNote="Structured as SOAP"
            caption="Illustrative note. Follow your organization's policies before dictating patient information."
          />
        }
      />

      <Band color={GROUND.paper} from={GROUND.sand} blend={200} className={BAND_PAD}>
        <div className={SHELL}>
          <FeatureIndex
            intro={{
              doodle: "notebook",
              eyebrow: "Features",
              title: "Built for Clinical Workflows",
              lede: "Spend more time with patients, less time on documentation.",
            }}
            items={FEATURES}
            aside={
              <div className="frame-dotted p-5">
                <p className="eyebrow">Types into</p>
                <p className="mt-2 font-display text-[14px] leading-relaxed text-ink-soft">Epic · Cerner · Meditech · Athena · PACS reporting · email · any text field</p>
              </div>
            }
          />
        </div>
      </Band>

      <Band color={GROUND.clay} from={GROUND.paper} blend={200} className={BAND_PAD}>
        <div className={SHELL}>
          <ScenarioTickets
            intro={{
              doodle: "people",
              eyebrow: "Use cases",
              title: "Clinical Documentation Made Easy",
              lede: "See how healthcare professionals use Oravo to document faster.",
            }}
            items={SCENARIOS}
            stubLabel="For"
          />
        </div>
      </Band>

      <Band color={GROUND.canvas} from={GROUND.clay} blend={200} className={BAND_PAD}>
        <div className={SHELL}>
          <Statement
            tone="light"
            doodle="mic"
            eyebrow="Before you dictate"
            title="A voice keyboard, not a compliance product."
            body={
              <>
                Oravo is general-purpose voice typing. It is not a medical device and does not claim HIPAA compliance, so treat it like any other app on your machine and follow your organization&apos;s rules. Read the{" "}
                <a href="/privacy" className="font-semibold text-primary-500 underline-offset-4 hover:underline">
                  privacy policy
                </a>{" "}
                for how voice is processed.
              </>
            }
            pointsLabel="Good practice"
            points={[
              "Check your organization's policy on dictation tools",
              "Hold the hotkey only while you mean to dictate",
              "Review every note before you sign it",
              "Questions? Email hi@oravo.ai",
            ]}
          />
        </div>
      </Band>

      <Band color={GROUND.paper} from={GROUND.canvas} className={BAND_PAD}>
        <div className={SHELL}>
          <AudienceFaq intro={{ doodle: "question", eyebrow: "FAQ", title: "Frequently Asked Questions" }} items={FAQS} />
        </div>
      </Band>

      <Band color={GROUND.blush} from={GROUND.paper} className="pt-16 pb-20 sm:pt-20">
        <div className={SHELL}>
          <AudienceCta
            doodle="mic"
            eyebrow="For clinicians"
            title="Focus on Patients, Not Paperwork"
            description="Speak the note, review it, and get back to the people in front of you."
            bullets={["Medical terminology built-in", "Custom dictionary", "Works in any EHR"]}
          />
        </div>
      </Band>
    </MarketingShell>
  );
}

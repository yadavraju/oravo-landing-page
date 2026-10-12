import type { Metadata } from "next";
import { GraduationCap } from "lucide-react";
import { AudienceHero } from "@/components/audience/AudienceHero";
import { AudienceCta, Statement } from "@/components/audience/AudienceSections";
import { ScenarioTimeline } from "@/components/audience/ScenarioLayouts";
import { BAND_PAD, GROUND, SHELL } from "@/components/audience/shell";
import { StudentOfferCard } from "@/components/audience/StudentOffer";
import { Band } from "@/components/landing/Band";
import { MarketingShell } from "@/components/landing/MarketingShell";

export const metadata: Metadata = {
  title: "Oravo for Students",
  description: "Voice typing for students and academics. Get Oravo Pro at 50% off with your .edu email.",
  openGraph: {
    title: "Oravo for Students",
    description: "Voice typing for students and academics",
    url: "https://oravo.ai/students",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oravo for Students",
    description: "Voice typing for students and academics",
  },
  alternates: {
    canonical: "https://oravo.ai/students",
  },
};

const STEPS = [
  {
    time: "Step 1",
    title: "Sign Up",
    description: "Click “Start Today for Free” and sign in to create an account.",
  },
  {
    time: "Step 2",
    title: "Download the App",
    description: "Choose where you want to use Oravo: available now on macOS, Windows and Android, with iOS and Linux coming soon.",
  },
  {
    time: "Step 3",
    title: "Get Verified",
    description: "Sign in to the app with your .edu email and we'll auto-activate your student offer for free, then $5/month (50% off). Cancel anytime.",
  },
];

const BENEFITS = [
  "3 months completely free to get started",
  "50% off the regular price after trial ends",
  "Full access to all Pro features",
  "Cancel anytime, no questions asked",
  "Easy verification with your .edu email address",
];

export default function StudentsPage() {
  return (
    <MarketingShell>
      <AudienceHero
        eyebrow="Student offer"
        icon={<GraduationCap />}
        lead="Oravo Pro"
        accent="for Students"
        description="Get started for free. Auto renews at 50% off. Cancel anytime."
        primary={{ label: "Start Today for Free", href: "/download" }}
        secondary={{ label: "Why students use Oravo", href: "/for-students" }}
        proof={["50% off Pro", "Verify with your .edu email", "Cancel anytime"]}
        note="Mac, Windows and Android · iOS coming soon"
        doodles={["tag", "notebook"]}
        visual={<StudentOfferCard features={["Use all of our features on our Pro Plan", "Unlimited dictation for essays, notes and papers", "Works in Docs, Word, Canvas and Notion"]} />}
      />

      <Band color={GROUND.paper} from={GROUND.sand} blend={200} className={BAND_PAD}>
        <div className={SHELL}>
          <ScenarioTimeline
            intro={{
              doodle: "hotkey",
              eyebrow: "Three steps",
              title: "How to sign up",
              lede: "Takes about two minutes. Have your .edu email ready.",
            }}
            items={STEPS}
          />
        </div>
      </Band>

      <Band color={GROUND.clay} from={GROUND.paper} blend={200} className={BAND_PAD}>
        <div className={SHELL}>
          <Statement
            tone="light"
            doodle="sparkle"
            eyebrow="Student Benefits"
            title="Everything in Pro, at half the price."
            body={
              <>
                Dictate essays, lecture notes and discussion posts at speaking speed, in 60+ languages.{" "}
                <a href="/for-students" className="font-semibold text-primary-500 underline-offset-4 hover:underline">
                  See how students use Oravo
                </a>
              </>
            }
            pointsLabel="Student Benefits"
            points={BENEFITS}
          />
        </div>
      </Band>

      <Band color={GROUND.blush} from={GROUND.clay} className="pt-16 pb-20 sm:pt-20">
        <div className={SHELL}>
          <AudienceCta
            doodle="notebook"
            eyebrow="Student offer"
            title="Start Today for Free"
            description="Questions about verification? Email hi@oravo.ai with your .edu address and we'll help."
            primary={{ label: "Start Today for Free", href: "/download" }}
            secondary={{ label: "Compare plans", href: "/pricing" }}
            bullets={["50% off Pro", "Cancel anytime", ".edu verification"]}
          />
        </div>
      </Band>
    </MarketingShell>
  );
}

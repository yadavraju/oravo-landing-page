import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Band } from "@/components/landing/Band";
import { FaqAccordion } from "@/components/landing/FaqAccordion";
import { MarketingShell } from "@/components/landing/MarketingShell";
import { SectionIntro } from "@/components/landing/PageBlocks";
import { Reveal } from "@/components/landing/Reveal";
import { CommissionStrip, ReferralTicket } from "@/components/seo-pages/AffiliateParts";
import { CANVAS, CLAY, ClosingBand, MarginDoodle, MIST, PAPER, SAND, SeoHero, SHELL, SplitSection } from "@/components/seo-pages/SeoSections";
import { Timeline } from "@/components/seo-pages/Timeline";
import { faqJsonLd, type FaqItem } from "@/lib/faq";

export const metadata: Metadata = {
  title: "Affiliate Program | Oravo",
  description:
    "Join the Oravo affiliate program. Get your unique referral key, share with your network, and start earning commissions for every user you bring to Oravo.",
  openGraph: {
    title: "Affiliate Program | Oravo",
    description: "Earn with Oravo's affiliate program",
    url: "https://oravo.ai/affiliate",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Affiliate Program | Oravo",
    description: "Earn with Oravo's affiliate program",
  },
  alternates: {
    canonical: "https://oravo.ai/affiliate",
  },
};

const SIGNUP = "https://app.oravo.ai/signup";

const SHARE = ["Share on social media", "Include in blog posts or newsletters", "Recommend to your professional network", "Create content about your Oravo experience"];

const WHY = [
  {
    title: "Promote a Product You Believe In",
    description: "Share something that actually improves people's productivity and workflow. Oravo is built for real users who need fast, accurate voice dictation.",
  },
  {
    title: "Generous Commission Structure",
    description: "20% recurring commission for 12 months means you earn continuously as your referrals stay subscribed.",
  },
  {
    title: "Easy to Track and Manage",
    description: "View all your referrals, conversions, and earnings in real-time through your affiliate dashboard.",
  },
  {
    title: "No Limits on Earnings",
    description: "Share with as many people as you want. There's no cap on how much you can earn.",
  },
];

const FAQS: FaqItem[] = [
  {
    question: "Do I need to be an Oravo user to join the affiliate program?",
    answer: "Yes, we require all affiliates to be active Oravo users so you can authentically share your experience with potential customers.",
  },
  {
    question: "When do I get paid?",
    answer: "Commission payments are processed monthly via PayPal or bank transfer once you reach a minimum threshold of $50.",
  },
  {
    question: "Can I track my referrals?",
    answer: "Absolutely. Your affiliate dashboard shows real-time data on clicks, sign-ups, conversions, and earnings.",
  },
  {
    question: "Is there a limit to how many people I can refer?",
    answer: "No limits. Refer as many people as you'd like and grow your affiliate earnings without restrictions.",
  },
];

export default function AffiliatePage() {
  return (
    <MarketingShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQS)) }} />

      <SeoHero
        eyebrow="Oravo affiliate program"
        lines={[{ text: "Become an" }, { text: "Affiliate", accent: true }]}
        description="Share Oravo with your network and earn rewards for every user you bring on board."
        primary={{ label: "Join the Affiliate Program", href: SIGNUP }}
        secondary={{ label: "How it works", href: "#how-it-works" }}
        ticks={["20% recurring commission", "First 12 months", "No cap on earnings"]}
        doodle="tag"
        visual={<ReferralTicket />}
      />

      {/* How it works */}
      <Band id="how-it-works" color={PAPER} from={SAND} blend={200} className="scroll-mt-20 pt-24 pb-20 sm:pt-28 sm:pb-24">
        <MarginDoodle name="plane" position="right-[3%] top-40" speed={-40} />
        <div className={SHELL}>
          <SplitSection
            doodle="hotkey"
            eyebrow="How it works"
            title="Four steps from user to affiliate"
            lede="Join, grab your key, share it, and earn on every paying customer you refer."
          >
            <Timeline
              size="lg"
              steps={[
                {
                  title: "Join the App",
                  description: "Sign up for Oravo and create your account. Experience the power of voice dictation firsthand so you can authentically share it with others.",
                },
                {
                  title: "Get Your Affiliate Key",
                  description: "Once you're in, navigate to your account settings and generate your unique affiliate key. This key tracks all referrals that come from you.",
                  detail: (
                    <div className="rounded-xl bg-canvas p-4 ring-1 ring-line">
                      <p className="text-[13.5px] text-ink-soft">Your unique referral code will look like:</p>
                      <code className="mt-2 inline-block rounded-md bg-raised px-3 py-2 font-mono text-[15px] font-semibold text-brand ring-1 ring-line">ORAVO-YOURNAME-2024</code>
                    </div>
                  ),
                },
                {
                  title: "Start Sharing Your Referral Code",
                  description: "Share your referral code with friends, colleagues, your audience, or anyone who could benefit from faster, smarter voice dictation.",
                  detail: (
                    <ul className="grid gap-2 sm:grid-cols-2">
                      {SHARE.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-[14.5px] leading-snug text-ink">
                          <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-[5px] bg-raised text-ink ring-1 ring-line">
                            <Check aria-hidden="true" className="h-3 w-3" strokeWidth={2.5} />
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  ),
                },
                {
                  title: "Start Earning",
                  description: "For every user who signs up with your referral code and becomes a paying customer, you earn a commission. It's that simple.",
                },
              ]}
            />
          </SplitSection>
        </div>
      </Band>

      {/* Earnings explainer */}
      <Band color={CLAY} from={PAPER} blend={200} className="pt-24 pb-20 sm:pt-28 sm:pb-24">
        <div className={SHELL}>
          <SectionIntro
            doodle="tag"
            eyebrow="Earning potential"
            title="20% recurring, for the first 12 months"
            lede={
              <>
                Earn <span className="font-semibold text-ink">20% recurring commission</span> on all subscription payments from users you refer for their first 12
                months.
              </>
            }
          />
          <Reveal className="mt-12">
            <CommissionStrip />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 text-center sm:flex-row">
              <p className="font-display text-[13.5px] text-ink-soft">Paid monthly once your balance reaches $50.</p>
              <a href={SIGNUP} className="btn-neutral">
                Join the Affiliate Program
              </a>
            </div>
          </Reveal>
        </div>
      </Band>

      {/* Why join */}
      <Band color={MIST} from={CLAY} blend={200} className="pt-24 pb-20 sm:pt-28 sm:pb-24">
        <div className={SHELL}>
          <SectionIntro doodle="sparkle" eyebrow="Why join" title="Why Join the Oravo Affiliate Program" />
          <Reveal className="mt-12">
            <div className="surface-solid grid gap-px overflow-hidden !rounded-2xl bg-line sm:grid-cols-2">
              {WHY.map((w, i) => (
                <div key={w.title} className="bg-raised p-7 transition-colors hover:bg-paper sm:p-9">
                  <span className="font-display text-xs font-semibold text-brand">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="display-3 mt-2 text-ink">{w.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{w.description}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Band>

      {/* FAQ */}
      <Band color={CANVAS} from={MIST} blend={200} className="pt-24 pb-20 sm:pt-28 sm:pb-24">
        <div className="mx-auto w-full max-w-3xl px-5 sm:px-8">
          <SectionIntro doodle="question" eyebrow="FAQ" title="Frequently Asked Questions" />
          <Reveal className="mt-10">
            <FaqAccordion items={FAQS} />
          </Reveal>
          <Reveal className="mt-10">
            <p className="text-center text-[15px] leading-relaxed text-ink-soft">
              Have questions about the affiliate program?{" "}
              <a href="mailto:hi@oravo.ai" className="font-semibold text-primary-500 underline-offset-4 hover:underline">
                Contact our team
              </a>{" "}
              and we&apos;ll be happy to help.
            </p>
          </Reveal>
        </div>
      </Band>

      <ClosingBand
        eyebrow="Getting started"
        title="Ready to Get Started?"
        description="Join Oravo today and start sharing your unique voice dictation experience with the world."
        primary={{ label: "Join the Affiliate Program", href: SIGNUP }}
        doodle="people"
      />
    </MarketingShell>
  );
}

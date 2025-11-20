import { Header } from "@/components/header";
import FooterSection from "@/components/footer-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Become an Affiliate - Oravo.ai",
  description:
    "Join the Oravo affiliate program. Get your unique referral key, share with your network, and start earning commissions for every user you bring to Oravo.",
};

export default function AffiliatePage() {
  return (
    <div className="w-full min-h-screen relative bg-[#F7F5F3] overflow-x-hidden flex flex-col justify-start items-center">
      <div className="relative flex flex-col justify-start items-center w-full">
        {/* Main container with proper margins */}
        <div className="w-full max-w-none px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1060px] lg:w-[1060px] relative flex flex-col justify-start items-start min-h-screen">
          {/* Left vertical line */}
          <div className="w-[1px] h-full absolute left-4 sm:left-6 md:left-8 lg:left-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0"></div>

          {/* Right vertical line */}
          <div className="w-[1px] h-full absolute right-4 sm:right-6 md:right-8 lg:right-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0"></div>

          {/* Header */}
          <Header />

          {/* Main Content */}
          <main className="flex-1 w-full mt-20 md:mt-24 lg:mt-28 relative z-10">
            <div className="max-w-[800px] mx-auto px-6 md:px-12 py-12 md:py-16">
              {/* Title Section */}
              <div className="mb-16">
                <h1 className="text-[#37322F] text-4xl md:text-5xl lg:text-6xl font-normal leading-tight font-serif mb-6">
                  Become an Affiliate
                </h1>
                <p className="text-[#605A57] text-lg md:text-xl leading-relaxed font-sans">
                  Share Oravo with your network and earn rewards for every user
                  you bring on board.
                </p>
              </div>

              {/* Content Sections */}
              <div className="prose prose-lg max-w-none">
                {/* How It Works */}
                <section className="mb-16">
                  <h2 className="text-[#37322F] text-xs font-semibold uppercase tracking-wider mb-6 font-sans">
                    HOW IT WORKS
                  </h2>

                  <div className="space-y-10">
                    {/* Step 1 */}
                    <div className="flex gap-6">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#FF8C42] to-[#FF6B1A] flex items-center justify-center">
                        <span className="text-white text-xl font-bold font-sans">
                          1
                        </span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-[#49423D] text-2xl md:text-3xl font-normal font-serif mb-4">
                          Join the App
                        </h3>
                        <p className="text-[#605A57] text-base leading-7 font-sans">
                          Sign up for Oravo and create your account. Experience
                          the power of voice dictation firsthand so you can
                          authentically share it with others.
                        </p>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex gap-6">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#FF8C42] to-[#FF6B1A] flex items-center justify-center">
                        <span className="text-white text-xl font-bold font-sans">
                          2
                        </span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-[#49423D] text-2xl md:text-3xl font-normal font-serif mb-4">
                          Get Your Affiliate Key
                        </h3>
                        <p className="text-[#605A57] text-base leading-7 font-sans mb-4">
                          Once you're in, navigate to your account settings and
                          generate your unique affiliate key. This key tracks
                          all referrals that come from you.
                        </p>
                        <div className="bg-[#F7F5F3] border border-[rgba(55,50,47,0.12)] rounded-lg p-4">
                          <p className="text-[#605A57] text-sm font-sans mb-2">
                            Your unique referral code will look like:
                          </p>
                          <code className="text-[#FF6B1A] text-base font-mono bg-white px-3 py-2 rounded border border-[rgba(55,50,47,0.08)] inline-block">
                            ORAVO-YOURNAME-2024
                          </code>
                        </div>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex gap-6">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#FF8C42] to-[#FF6B1A] flex items-center justify-center">
                        <span className="text-white text-xl font-bold font-sans">
                          3
                        </span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-[#49423D] text-2xl md:text-3xl font-normal font-serif mb-4">
                          Start Sharing Your Referral Code
                        </h3>
                        <p className="text-[#605A57] text-base leading-7 font-sans mb-4">
                          Share your referral code with friends, colleagues,
                          your audience, or anyone who could benefit from
                          faster, smarter voice dictation.
                        </p>
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-[#FF8C42]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M10 3L4.5 8.5L2 6"
                                  stroke="#FF6B1A"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                            <p className="text-[#605A57] text-base leading-7 font-sans">
                              Share on social media
                            </p>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-[#FF8C42]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M10 3L4.5 8.5L2 6"
                                  stroke="#FF6B1A"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                            <p className="text-[#605A57] text-base leading-7 font-sans">
                              Include in blog posts or newsletters
                            </p>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-[#FF8C42]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M10 3L4.5 8.5L2 6"
                                  stroke="#FF6B1A"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                            <p className="text-[#605A57] text-base leading-7 font-sans">
                              Recommend to your professional network
                            </p>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-[#FF8C42]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M10 3L4.5 8.5L2 6"
                                  stroke="#FF6B1A"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                            <p className="text-[#605A57] text-base leading-7 font-sans">
                              Create content about your Oravo experience
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Step 4 */}
                    <div className="flex gap-6">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#FF8C42] to-[#FF6B1A] flex items-center justify-center">
                        <span className="text-white text-xl font-bold font-sans">
                          4
                        </span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-[#49423D] text-2xl md:text-3xl font-normal font-serif mb-4">
                          Start Earning
                        </h3>
                        <p className="text-[#605A57] text-base leading-7 font-sans mb-4">
                          For every user who signs up with your referral code
                          and becomes a paying customer, you earn a commission.
                          It's that simple.
                        </p>
                        <div className="bg-gradient-to-br from-[#FF8C42]/5 to-[#FF6B1A]/5 rounded-2xl p-6 border border-[rgba(255,107,26,0.1)]">
                          <p className="text-[#49423D] text-lg font-medium font-sans mb-2">
                            Earning Potential
                          </p>
                          <p className="text-[#605A57] text-base leading-7 font-sans">
                            Earn <span className="text-[#FF6B1A] font-semibold">20% recurring commission</span> on all
                            subscription payments from users you refer for their
                            first 12 months.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Why Join */}
                <section className="mb-16">
                  <h2 className="text-[#37322F] text-xs font-semibold uppercase tracking-wider mb-6 font-sans">
                    WHY JOIN THE ORAVO AFFILIATE PROGRAM
                  </h2>

                  <div className="space-y-6">
                    <div className="border-l-4 border-[#FF6B1A] pl-6">
                      <h3 className="text-[#49423D] text-xl font-medium font-sans mb-2">
                        Promote a Product You Believe In
                      </h3>
                      <p className="text-[#605A57] text-base leading-7 font-sans">
                        Share something that actually improves people's
                        productivity and workflow. Oravo is built for real
                        users who need fast, accurate voice dictation.
                      </p>
                    </div>

                    <div className="border-l-4 border-[#FF6B1A] pl-6">
                      <h3 className="text-[#49423D] text-xl font-medium font-sans mb-2">
                        Generous Commission Structure
                      </h3>
                      <p className="text-[#605A57] text-base leading-7 font-sans">
                        20% recurring commission for 12 months means you earn
                        continuously as your referrals stay subscribed.
                      </p>
                    </div>

                    <div className="border-l-4 border-[#FF6B1A] pl-6">
                      <h3 className="text-[#49423D] text-xl font-medium font-sans mb-2">
                        Easy to Track and Manage
                      </h3>
                      <p className="text-[#605A57] text-base leading-7 font-sans">
                        View all your referrals, conversions, and earnings in
                        real-time through your affiliate dashboard.
                      </p>
                    </div>

                    <div className="border-l-4 border-[#FF6B1A] pl-6">
                      <h3 className="text-[#49423D] text-xl font-medium font-sans mb-2">
                        No Limits on Earnings
                      </h3>
                      <p className="text-[#605A57] text-base leading-7 font-sans">
                        Share with as many people as you want. There's no cap
                        on how much you can earn.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Getting Started CTA */}
                <section className="mb-12">
                  <div className="bg-gradient-to-br from-[#6366F1]/5 to-[#4F46E5]/5 rounded-2xl p-8 md:p-10 border border-[rgba(99,102,241,0.1)]">
                    <h3 className="text-[#49423D] text-2xl md:text-3xl font-normal font-serif mb-4">
                      Ready to Get Started?
                    </h3>
                    <p className="text-[#605A57] text-base leading-7 font-sans mb-6">
                      Join Oravo today and start sharing your unique voice
                      dictation experience with the world.
                    </p>
                    <a
                      href="https://app.oravo.ai/signup"
                      className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#FF8C42] to-[#FF6B1A] text-white text-base font-semibold rounded-lg hover:shadow-lg transition-all duration-200 font-sans"
                    >
                      Join the Affiliate Program
                    </a>
                  </div>
                </section>

                {/* FAQ */}
                <section className="mb-12">
                  <h2 className="text-[#37322F] text-xs font-semibold uppercase tracking-wider mb-6 font-sans">
                    FREQUENTLY ASKED QUESTIONS
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-[#49423D] text-lg font-medium font-sans mb-2">
                        Do I need to be an Oravo user to join the affiliate
                        program?
                      </h3>
                      <p className="text-[#605A57] text-base leading-7 font-sans">
                        Yes, we require all affiliates to be active Oravo users
                        so you can authentically share your experience with
                        potential customers.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#49423D] text-lg font-medium font-sans mb-2">
                        When do I get paid?
                      </h3>
                      <p className="text-[#605A57] text-base leading-7 font-sans">
                        Commission payments are processed monthly via PayPal or
                        bank transfer once you reach a minimum threshold of $50.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#49423D] text-lg font-medium font-sans mb-2">
                        Can I track my referrals?
                      </h3>
                      <p className="text-[#605A57] text-base leading-7 font-sans">
                        Absolutely. Your affiliate dashboard shows real-time
                        data on clicks, sign-ups, conversions, and earnings.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#49423D] text-lg font-medium font-sans mb-2">
                        Is there a limit to how many people I can refer?
                      </h3>
                      <p className="text-[#605A57] text-base leading-7 font-sans">
                        No limits. Refer as many people as you'd like and grow
                        your affiliate earnings without restrictions.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Contact */}
                <section className="mb-12">
                  <div className="border-t border-[rgba(55,50,47,0.12)] pt-8">
                    <p className="text-[#605A57] text-base leading-7 font-sans">
                      Have questions about the affiliate program?{" "}
                      <a
                        href="mailto:hello@oravo.ai"
                        className="text-[#FF6B1A] hover:text-[#FF8C42] transition-colors font-medium"
                      >
                        Contact our team
                      </a>{" "}
                      and we'll be happy to help.
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </main>

          {/* Footer */}
          <FooterSection />
        </div>
      </div>
    </div>
  );
}

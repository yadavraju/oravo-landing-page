import { Header } from "@/components/header";
import FooterSection from "@/components/footer-section";

export default function TermsPage() {
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
              <div className="mb-12">
                <h1 className="text-[#37322F] text-4xl md:text-5xl lg:text-6xl font-normal leading-tight font-serif mb-4">
                  Terms of Service
                </h1>
                <p className="text-[#847971] text-base font-medium font-sans">
                  Last Updated: 04/30/2025
                </p>
              </div>

              {/* Terms Content */}
              <div className="prose prose-lg max-w-none">
                {/* Section 1 */}
                <section className="mb-10">
                  <h2 className="text-[#49423D] text-2xl md:text-3xl font-normal font-serif mb-4">
                    1. Introduction
                  </h2>
                  <p className="text-[#605A57] text-base leading-7 font-sans mb-4">
                    These Terms of Use ("Terms") apply to all agreements between
                    Oravo, Inc. ("Oravo," "we," "our," or "us") and you, our
                    customer ("you" or "Customer"). You are only allowed to use
                    Oravo's services if you accept these Terms.
                  </p>
                </section>

                {/* Section 2 */}
                <section className="mb-10">
                  <h2 className="text-[#49423D] text-2xl md:text-3xl font-normal font-serif mb-4">
                    2. Services
                  </h2>
                  <p className="text-[#605A57] text-base leading-7 font-sans mb-4">
                    Oravo provides software, applications, and integrations
                    designed to help you convert speech to text, generate
                    transcripts, and improve overall communication workflows.
                    The Services may include:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li className="text-[#605A57] text-base leading-7 font-sans">
                      <strong className="text-[#49423D]">AI Features:</strong>{" "}
                      Automated transcription, text generation, or similar
                      capabilities using large language models ("LLMs").
                    </li>
                    <li className="text-[#605A57] text-base leading-7 font-sans">
                      <strong className="text-[#49423D]">
                        Platform Access:
                      </strong>{" "}
                      Via our website, desktop application, mobile app, or API.
                    </li>
                    <li className="text-[#605A57] text-base leading-7 font-sans">
                      <strong className="text-[#49423D]">
                        Optional Integrations:
                      </strong>{" "}
                      Connections to third-party services or platforms for
                      enhanced functionality.
                    </li>
                  </ul>
                  <p className="text-[#605A57] text-base leading-7 font-sans mb-4">
                    <strong className="text-[#49423D]">Service Quality:</strong>{" "}
                    While we strive to deliver accurate AI-generated outputs,
                    various factors—such as audio clarity, background noise, and
                    system availability—can impact results. You acknowledge
                    that:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li className="text-[#605A57] text-base leading-7 font-sans">
                      <strong className="text-[#49423D]">
                        No Guaranteed Accuracy:
                      </strong>{" "}
                      AI-generated content may contain errors, omissions, or
                      other inaccuracies.
                    </li>
                    <li className="text-[#605A57] text-base leading-7 font-sans">
                      <strong className="text-[#49423D]">
                        Independent Verification:
                      </strong>{" "}
                      You are responsible for verifying the correctness of any
                      AI outputs before relying on them.
                    </li>
                    <li className="text-[#605A57] text-base leading-7 font-sans">
                      <strong className="text-[#49423D]">
                        Personal Use Only:
                      </strong>{" "}
                      You agree that you will use the Services solely for your
                      personal or internal business purposes, and you will not
                      resell or transfer access to any other party without our
                      express permission.
                    </li>
                  </ul>
                </section>

                {/* Section 3 */}
                <section className="mb-10">
                  <h2 className="text-[#49423D] text-2xl md:text-3xl font-normal font-serif mb-4">
                    3. User Responsibilities
                  </h2>
                  <ul className="list-disc pl-6 mb-4 space-y-3">
                    <li className="text-[#605A57] text-base leading-7 font-sans">
                      <strong className="text-[#49423D]">
                        Account Security:
                      </strong>{" "}
                      You must maintain the confidentiality of your login
                      credentials and promptly notify us of any unauthorized
                      access.
                    </li>
                    <li className="text-[#605A57] text-base leading-7 font-sans">
                      <strong className="text-[#49423D]">
                        Lawful Conduct:
                      </strong>{" "}
                      You agree to use the Services in compliance with all
                      applicable laws and regulations.
                    </li>
                    <li className="text-[#605A57] text-base leading-7 font-sans">
                      <strong className="text-[#49423D]">
                        Respect for Others:
                      </strong>{" "}
                      You will not attempt to breach the security of our
                      Services, disrupt network performance, or access other
                      users' accounts without permission.
                    </li>
                    <li className="text-[#605A57] text-base leading-7 font-sans">
                      <strong className="text-[#49423D]">
                        Prohibited Misuse:
                      </strong>{" "}
                      You may not circumvent usage controls, engage in automated
                      decision-making that affects individuals' rights without
                      appropriate safeguards, or use the Services in a manner
                      inconsistent with these Terms.
                    </li>
                    <li className="text-[#605A57] text-base leading-7 font-sans">
                      <strong className="text-[#49423D]">Consequences:</strong>{" "}
                      Any misuse or abuse of the Services (e.g., reverse
                      engineering, spamming, hacking, or infringing intellectual
                      property rights) can result in immediate suspension or
                      termination of your account.
                    </li>
                  </ul>
                </section>

                {/* Section 4 */}
                <section className="mb-10">
                  <h2 className="text-[#49423D] text-2xl md:text-3xl font-normal font-serif mb-4">
                    4. Account and Service Area
                  </h2>
                  <ul className="list-disc pl-6 mb-4 space-y-3">
                    <li className="text-[#605A57] text-base leading-7 font-sans">
                      <strong className="text-[#49423D]">Eligibility:</strong>{" "}
                      You must be at least 18 years old or the age of majority
                      in your jurisdiction—to create an account.
                    </li>
                    <li className="text-[#605A57] text-base leading-7 font-sans">
                      <strong className="text-[#49423D]">
                        Account Information:
                      </strong>{" "}
                      All registration details you provide must be truthful,
                      current, and accurate.
                    </li>
                    <li className="text-[#605A57] text-base leading-7 font-sans">
                      <strong className="text-[#49423D]">
                        Geographic Considerations:
                      </strong>{" "}
                      Oravo seeks to support users globally, but availability
                      and functionality may vary depending on your location and
                      applicable local regulations.
                    </li>
                    <li className="text-[#605A57] text-base leading-7 font-sans">
                      <strong className="text-[#49423D]">
                        No Liability for Unauthorized Use:
                      </strong>{" "}
                      Oravo is not responsible for losses arising from
                      unauthorized access if you fail to secure your account or
                      promptly report suspicious activity.
                    </li>
                  </ul>
                </section>

                {/* Section 5 */}
                <section className="mb-10">
                  <h2 className="text-[#49423D] text-2xl md:text-3xl font-normal font-serif mb-4">
                    5. Pricing
                  </h2>
                  <ul className="list-disc pl-6 mb-4 space-y-3">
                    <li className="text-[#605A57] text-base leading-7 font-sans">
                      <strong className="text-[#49423D]">
                        Subscription and Fees:
                      </strong>{" "}
                      Some features may require a paid subscription or
                      usage-based fees. You agree to provide accurate billing
                      information and promptly pay all charges.
                    </li>
                    <li className="text-[#605A57] text-base leading-7 font-sans">
                      <strong className="text-[#49423D]">Renewals:</strong>{" "}
                      Subscriptions renew automatically unless canceled prior to
                      the renewal date.
                    </li>
                    <li className="text-[#605A57] text-base leading-7 font-sans">
                      <strong className="text-[#49423D]">
                        Referral discounts:
                      </strong>{" "}
                      We may offer free months based on referrals rewards. If
                      you continue after the free month of Oravo's Individual
                      Plan, regular fees apply.
                    </li>
                    <li className="text-[#605A57] text-base leading-7 font-sans">
                      <strong className="text-[#49423D]">
                        Taxes and Adjustments:
                      </strong>{" "}
                      You may be responsible for any taxes or additional charges
                      associated with your location. We will notify you of any
                      material changes in pricing.
                    </li>
                  </ul>
                </section>

                {/* Section 6 */}
                <section className="mb-10">
                  <h2 className="text-[#49423D] text-2xl md:text-3xl font-normal font-serif mb-4">
                    6. Privacy
                  </h2>
                  <p className="text-[#605A57] text-base leading-7 font-sans mb-4">
                    We handle your personal information in accordance with our
                    Privacy Policy, which explains how we collect, use, and
                    protect your data.
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-3">
                    <li className="text-[#605A57] text-base leading-7 font-sans">
                      <strong className="text-[#49423D]">
                        Consent and Control:
                      </strong>{" "}
                      You can manage certain data usage settings in your account
                      to enable or disable your content for AI model training,
                      subject to the Privacy Policy.
                    </li>
                    <li className="text-[#605A57] text-base leading-7 font-sans">
                      <strong className="text-[#49423D]">
                        Security Measures:
                      </strong>{" "}
                      While we take reasonable steps to safeguard your data, no
                      method of internet transmission is 100% secure.
                    </li>
                  </ul>
                </section>

                {/* Section 7 */}
                <section className="mb-10">
                  <h2 className="text-[#49423D] text-2xl md:text-3xl font-normal font-serif mb-4">
                    7. Limitations of Liability
                  </h2>
                  <p className="text-[#605A57] text-base leading-7 font-sans mb-4">
                    To the fullest extent permitted by law:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-3">
                    <li className="text-[#605A57] text-base leading-7 font-sans">
                      <strong className="text-[#49423D]">
                        No Special Damages:
                      </strong>{" "}
                      Oravo is not liable for any indirect, incidental, special,
                      consequential, punitive, or exemplary damages, including
                      lost profits or data.
                    </li>
                    <li className="text-[#605A57] text-base leading-7 font-sans">
                      <strong className="text-[#49423D]">
                        Service Interruptions:
                      </strong>{" "}
                      We assume no responsibility for damages arising from
                      service downtime, errors in AI outputs, or reliance on
                      such outputs.
                    </li>
                    <li className="text-[#605A57] text-base leading-7 font-sans">
                      <strong className="text-[#49423D]">
                        Maximum Liability:
                      </strong>{" "}
                      Our total liability is limited to the amount you have paid
                      to Oravo for the Services in the preceding twelve (12)
                      months, or one hundred US dollars (USD $100), whichever is
                      greater.
                    </li>
                  </ul>
                  <p className="text-[#605A57] text-base leading-7 font-sans">
                    Some jurisdictions do not allow such limitations, so some or
                    all of these limitations may not apply to you.
                  </p>
                </section>

                {/* Section 8 */}
                <section className="mb-10">
                  <h2 className="text-[#49423D] text-2xl md:text-3xl font-normal font-serif mb-4">
                    8. Modifications
                  </h2>
                  <p className="text-[#605A57] text-base leading-7 font-sans mb-4">
                    Oravo may revise these Terms at any time to reflect changes
                    in our Services, legal requirements, or business practices.
                    If we make significant modifications:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-3">
                    <li className="text-[#605A57] text-base leading-7 font-sans">
                      <strong className="text-[#49423D]">Notice:</strong> We
                      will notify you in advance by email or by posting a
                      prominent notice on our website or app.
                    </li>
                    <li className="text-[#605A57] text-base leading-7 font-sans">
                      <strong className="text-[#49423D]">Acceptance:</strong>{" "}
                      Continued use of the Services after the revised Terms
                      become effective constitutes your acceptance of those
                      changes.
                    </li>
                  </ul>
                </section>

                {/* Section 9 */}
                <section className="mb-10">
                  <h2 className="text-[#49423D] text-2xl md:text-3xl font-normal font-serif mb-4">
                    9. Termination
                  </h2>
                  <ul className="list-disc pl-6 mb-4 space-y-3">
                    <li className="text-[#605A57] text-base leading-7 font-sans">
                      <strong className="text-[#49423D]">
                        User Cancellation:
                      </strong>{" "}
                      You may cancel your account at any time by contacting
                      support or through your account settings.
                    </li>
                    <li className="text-[#605A57] text-base leading-7 font-sans">
                      <strong className="text-[#49423D]">
                        Suspension or Termination by Oravo:
                      </strong>{" "}
                      We reserve the right to suspend or terminate your account
                      if you breach these Terms, if your use poses a risk to the
                      platform or other users, or if required by law.
                    </li>
                    <li className="text-[#605A57] text-base leading-7 font-sans">
                      <strong className="text-[#49423D]">
                        Effect of Termination:
                      </strong>{" "}
                      Upon termination, you remain responsible for all fees
                      incurred through the termination date. Sections of these
                      Terms that by nature should survive termination (e.g.,
                      liability, warranties, dispute resolution) will remain in
                      effect.
                    </li>
                  </ul>
                </section>

                {/* Section 10 */}
                <section className="mb-10">
                  <h2 className="text-[#49423D] text-2xl md:text-3xl font-normal font-serif mb-4">
                    10. Dispute Resolution
                  </h2>
                  <ul className="list-disc pl-6 mb-4 space-y-3">
                    <li className="text-[#605A57] text-base leading-7 font-sans">
                      <strong className="text-[#49423D]">
                        Informal Resolution:
                      </strong>{" "}
                      We encourage you to contact us first at support@oravo.com
                      to resolve any disputes in good faith.
                    </li>
                    <li className="text-[#605A57] text-base leading-7 font-sans">
                      <strong className="text-[#49423D]">Arbitration:</strong>{" "}
                      If informal efforts fail, disputes will be resolved
                      through binding arbitration, unless otherwise prohibited
                      by local law. Each party will be responsible for its own
                      arbitration-related costs unless agreed otherwise.
                    </li>
                    <li className="text-[#605A57] text-base leading-7 font-sans">
                      <strong className="text-[#49423D]">
                        No Class Actions:
                      </strong>{" "}
                      To the extent permitted by law, you agree to resolve
                      disputes on an individual basis and not as part of any
                      class or representative action.
                    </li>
                  </ul>
                </section>

                {/* Section 11 */}
                <section className="mb-10">
                  <h2 className="text-[#49423D] text-2xl md:text-3xl font-normal font-serif mb-4">
                    11. Our Rights
                  </h2>
                  <p className="text-[#605A57] text-base leading-7 font-sans mb-4">
                    We reserve the right, at any time and in our sole
                    discretion, and without liability or notice to you (except
                    where required by applicable law), to do the following:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-3">
                    <li className="text-[#605A57] text-base leading-7 font-sans">
                      <strong className="text-[#49423D]">
                        Alter Features:
                      </strong>{" "}
                      We may change, update, or remove some or all
                      functionalities of the Services;
                    </li>
                    <li className="text-[#605A57] text-base leading-7 font-sans">
                      <strong className="text-[#49423D]">
                        Suspend or Discontinue:
                      </strong>{" "}
                      We may temporarily or permanently suspend or discontinue
                      certain parts of the Services or the Services in their
                      entirety;
                    </li>
                    <li className="text-[#605A57] text-base leading-7 font-sans">
                      <strong className="text-[#49423D]">
                        Restrict Access:
                      </strong>{" "}
                      We may terminate, suspend, restrict, or otherwise disable
                      your ability to use any or all parts of the Services;
                    </li>
                    <li className="text-[#605A57] text-base leading-7 font-sans">
                      <strong className="text-[#49423D]">
                        Modify or Close Accounts:
                      </strong>{" "}
                      We may suspend, terminate, or limit access to your account
                      or any content associated with it; and
                    </li>
                    <li className="text-[#605A57] text-base leading-7 font-sans">
                      <strong className="text-[#49423D]">
                        Change Eligibility:
                      </strong>{" "}
                      We may update our eligibility criteria for using the
                      Services. If such criteria changes are not permitted by
                      law in your jurisdiction, we may revoke your right to use
                      the Services in that location.
                    </li>
                  </ul>
                </section>

                {/* Section 12 */}
                <section className="mb-10">
                  <h2 className="text-[#49423D] text-2xl md:text-3xl font-normal font-serif mb-4">
                    12. Final Provisions
                  </h2>
                  <ul className="list-disc pl-6 mb-4 space-y-3">
                    <li className="text-[#605A57] text-base leading-7 font-sans">
                      <strong className="text-[#49423D]">Governing Law:</strong>{" "}
                      These Terms are governed by the laws of California,
                      excluding its conflict-of-law provisions. However, some
                      countries, including those in the EU, have laws that
                      require agreements to be governed by the local laws of the
                      user's country. This paragraph does not override those
                      laws.
                    </li>
                    <li className="text-[#605A57] text-base leading-7 font-sans">
                      <strong className="text-[#49423D]">Severability:</strong>{" "}
                      If any provision is deemed invalid or unenforceable, the
                      remaining provisions remain in full force and effect.
                    </li>
                    <li className="text-[#605A57] text-base leading-7 font-sans">
                      <strong className="text-[#49423D]">No Waiver:</strong>{" "}
                      Oravo's failure to enforce any right or provision of these
                      Terms does not constitute a waiver of such right or
                      provision.
                    </li>
                    <li className="text-[#605A57] text-base leading-7 font-sans">
                      <strong className="text-[#49423D]">
                        Entire Agreement:
                      </strong>{" "}
                      These Terms, along with our Privacy Policy and any
                      additional terms referenced herein, constitute the entire
                      agreement between you and Oravo regarding the Services.
                    </li>
                  </ul>
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

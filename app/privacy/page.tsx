import { Header } from "@/components/header";
import FooterSection from "@/components/footer-section";

export default function PrivacyPage() {
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
              Oravo Privacy Policy
            </h1>
            <p className="text-[#847971] text-base font-medium font-sans">
              Last Updated: 04/30/2025
            </p>
          </div>

          {/* Privacy Content */}
          <div className="prose prose-lg max-w-none">
            {/* Section 1 */}
            <section className="mb-10">
              <h2 className="text-[#49423D] text-2xl md:text-3xl font-normal font-serif mb-4">
                1. Introduction
              </h2>
              <p className="text-[#605A57] text-base leading-7 font-sans mb-4">
                Your privacy is our top priority. That's why we've made our privacy policy simple and easy to understand. With Oravo, you're in full control of your data. We give you two clear options: share minimal, anonymized data to help improve the app OR keep everything private. Here's how it works:
              </p>
            </section>

            {/* Section 2 */}
            <section className="mb-10">
              <h2 className="text-[#49423D] text-2xl md:text-3xl font-normal font-serif mb-4">
                2. Why We Use Cloud Processing
              </h2>
              <p className="text-[#605A57] text-base leading-7 font-sans mb-4">
                Oravo uses cloud servers instead of on-device processing to give you the fastest and most accurate voice dictation experience possible. This lets us run advanced AI models that make dictation quick and reliable.
              </p>
              <p className="text-[#605A57] text-base leading-7 font-sans mb-4">
                We know privacy matters, and some people prefer to keep their data completely to themselves. That's why we have a Private Mode, which gives you full control and keeps your data entirely on your device.
              </p>
              <p className="text-[#605A57] text-base leading-7 font-sans">
                Our goal is to deliver the best of both worlds: top performance and strong privacy.
              </p>
            </section>

            {/* Section 3 */}
            <section className="mb-10">
              <h2 className="text-[#49423D] text-2xl md:text-3xl font-normal font-serif mb-4">
                3. Choose Your Privacy Mode
              </h2>
              <p className="text-[#605A57] text-base leading-7 font-sans mb-4">
                When you create an Oravo account, you can choose between:
              </p>
              <div className="mb-4">
                <h3 className="text-[#49423D] text-xl font-medium font-sans mb-2">
                  Private Mode (DEFAULT Opt-Out):
                </h3>
                <p className="text-[#605A57] text-base leading-7 font-sans">
                  Prefer not to share anything? That's perfectly fine. In private mode, Oravo only collects basic technical and account-related data needed to run the app and nothing else. No voice, no dictated text, no sensitive content.
                </p>
              </div>
              <div className="mb-4">
                <h3 className="text-[#49423D] text-xl font-medium font-sans mb-2">
                  Help Improve Oravo (Optional Opt-In Mode):
                </h3>
                <p className="text-[#605A57] text-base leading-7 font-sans">
                  You can allow Oravo to collect minimal usage data to help improve our text correction models. This data is anonymized, secure, and never accessible to anyone outside of our training system. It's never sold or shared to any third-party.
                </p>
              </div>
              <p className="text-[#605A57] text-base leading-7 font-sans">
                You can switch between modes at any time in your settings. Learn more about what we collect below.
              </p>
            </section>

            {/* Section 4 */}
            <section className="mb-10">
              <h2 className="text-[#49423D] text-2xl md:text-3xl font-normal font-serif mb-4">
                4. What We Collect and Why
              </h2>
              <div className="mb-6">
                <h3 className="text-[#49423D] text-xl font-medium font-sans mb-3">
                  If You Opt In (Help Improve Oravo):
                </h3>
                <p className="text-[#605A57] text-base leading-7 font-sans mb-3">
                  We collect only what's necessary to improve the app:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li className="text-[#605A57] text-base leading-7 font-sans">
                    <strong className="text-[#49423D]">Recognized dictated text (not audio):</strong> Used to improve speech-to-text accuracy. This is fully anonymized, processed securely, and never shared or sold beyond our model training system.
                  </li>
                  <li className="text-[#605A57] text-base leading-7 font-sans">
                    <strong className="text-[#49423D]">Basic usage data:</strong> Device type, app performance, and similar technical metrics help us make Oravo smoother and more reliable.
                  </li>
                </ul>
                <p className="text-[#605A57] text-base leading-7 font-sans">
                  This data is never linked to you (anonymized), and no one can access your personal content.
                </p>
              </div>
              <div>
                <h3 className="text-[#49423D] text-xl font-medium font-sans mb-3">
                  If You Opt Out (Private Mode):
                </h3>
                <p className="text-[#605A57] text-base leading-7 font-sans mb-3">
                  We collect the bare minimum to keep your account working:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li className="text-[#605A57] text-base leading-7 font-sans">
                    <strong className="text-[#49423D]">Account details:</strong> Like your email address and name
                  </li>
                  <li className="text-[#605A57] text-base leading-7 font-sans">
                    <strong className="text-[#49423D]">Basic usage stats:</strong> Your words-per-minute rate and number of words dictated
                  </li>
                  <li className="text-[#605A57] text-base leading-7 font-sans">
                    <strong className="text-[#49423D]">Device info and performance metrics:</strong> For maintaining a stable app experience
                  </li>
                </ul>
                <p className="text-[#605A57] text-base leading-7 font-sans">
                  We do not collect any dictated text, audio, or screen content in this mode.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section className="mb-10">
              <h2 className="text-[#49423D] text-2xl md:text-3xl font-normal font-serif mb-4">
                5. How Long We Keep Data
              </h2>
              <p className="text-[#605A57] text-base leading-7 font-sans mb-4">
                In Opt-In Mode, we keep anonymized text and usage data only as long as needed to train and improve the app.
              </p>
              <p className="text-[#605A57] text-base leading-7 font-sans">
                In Private Mode, we don't collect any dictated content. Only basic, non-private operational data is stored to maintain core functionality.
              </p>
            </section>

            {/* Section 6 */}
            <section className="mb-10">
              <h2 className="text-[#49423D] text-2xl md:text-3xl font-normal font-serif mb-4">
                6. How "Transcript History" Works
              </h2>
              <p className="text-[#605A57] text-base leading-7 font-sans">
                You may notice you can view your transcript history and recordings for dictation in the app. This is only stored locally on your device for you to view.
              </p>
            </section>

            {/* Section 7 */}
            <section className="mb-10">
              <h2 className="text-[#49423D] text-2xl md:text-3xl font-normal font-serif mb-4">
                7. How "Context Awareness" Works (Optional Opt-In)
              </h2>
              <p className="text-[#605A57] text-base leading-7 font-sans mb-4">
                If you turn on Context Awareness, Oravo can read, not collect, relevant text data from the active window to improve dictation accuracy.
              </p>
              <p className="text-[#605A57] text-base leading-7 font-sans mb-4">
                This helps the app better understand what you're trying to say and recognize niche terms and names to spell them right.
              </p>
              <p className="text-[#605A57] text-base leading-7 font-sans mb-4">
                You can turn this feature on or off anytime in your settings.
              </p>
              <p className="text-[#605A57] text-base leading-7 font-sans">
                When it's off, no app content is used for transcription. This data is never stored.
              </p>
            </section>

            {/* Section 8 */}
            <section className="mb-10">
              <h2 className="text-[#49423D] text-2xl md:text-3xl font-normal font-serif mb-4">
                8. Data Security
              </h2>
              <p className="text-[#605A57] text-base leading-7 font-sans mb-4">
                We use a combination of technical and organizational measures to protect your data. This includes the following:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-3">
                <li className="text-[#605A57] text-base leading-7 font-sans">
                  <strong className="text-[#49423D]">Secure at rest:</strong> Anything stored in our database is encrypted, so it stays safe even when it's not being used.
                </li>
                <li className="text-[#605A57] text-base leading-7 font-sans">
                  <strong className="text-[#49423D]">Secure in transit:</strong> Your data is protected with encryption (TLS) when it moves between your device and our servers.
                </li>
                <li className="text-[#605A57] text-base leading-7 font-sans">
                  <strong className="text-[#49423D]">Access controls:</strong> We use strict rules to make sure only the right people or systems can access the right data (this includes row-level security and role-based permissions).
                </li>
                <li className="text-[#605A57] text-base leading-7 font-sans">
                  <strong className="text-[#49423D]">Compliance matters:</strong> We follow best practices and standards like GDPR and SOC 2 to stay responsible and reliable.
                </li>
              </ul>
            </section>

            {/* Section 9 */}
            <section className="mb-10">
              <h2 className="text-[#49423D] text-2xl md:text-3xl font-normal font-serif mb-4">
                9. When We Share Data
              </h2>
              <p className="text-[#605A57] text-base leading-7 font-sans">
                We may share limited information with trusted partners to operate and improve Oravo. These partners help us with essential services like troubleshooting coverage issues and managing customer service. In rare cases, we may share information if required by law or for security reasons.
              </p>
            </section>

            {/* Section 10 */}
            <section className="mb-10">
              <h2 className="text-[#49423D] text-2xl md:text-3xl font-normal font-serif mb-4">
                10. Children Data
              </h2>
              <p className="text-[#605A57] text-base leading-7 font-sans">
                Oravo is not intended for children under 13 (or under 16 in some regions) without parental consent. If you believe a child's data has been shared with us in error, contact us right away.
              </p>
            </section>

            {/* Section 11 */}
            <section className="mb-10">
              <h2 className="text-[#49423D] text-2xl md:text-3xl font-normal font-serif mb-4">
                11. Policy Updates
              </h2>
              <p className="text-[#605A57] text-base leading-7 font-sans">
                We may update this Privacy Policy as the app evolves. If we make any major changes, we'll notify you in the app or via email. You can always find the latest version here.
              </p>
            </section>

            {/* Section 12 */}
            <section className="mb-10">
              <h2 className="text-[#49423D] text-2xl md:text-3xl font-normal font-serif mb-4">
                12. Contact Us
              </h2>
              <p className="text-[#605A57] text-base leading-7 font-sans">
                If you have questions or concerns about this Privacy Policy, email us at support@oravo.com.
              </p>
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

import { Header } from "@/components/header";
import FooterSection from "@/components/footer-section";

export default function StudentsPage() {
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
                <h1 className="text-[#37322F] text-4xl md:text-5xl lg:text-6xl font-normal leading-tight font-serif mb-6">
                  Oravo Pro for Students
                </h1>
                <p className="text-[#605A57] text-xl md:text-2xl leading-relaxed font-sans mb-6">
                  Get started for free
                </p>
                <p className="text-[#847971] text-base font-medium font-sans">
                  Auto renews at 50% off. Cancel anytime.
                </p>
              </div>

              {/* Pricing Card */}
              <div className="mb-16 bg-gradient-to-br from-[#6366F1] to-[#4F46E5] rounded-3xl p-8 md:p-10 shadow-[0_8px_48px_rgba(99,102,241,0.3)]">
                <div className="text-white/90 text-sm font-semibold uppercase tracking-wider mb-4">
                  Flow Pro for Students
                </div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-white text-5xl md:text-6xl font-serif">
                    $5
                  </span>
                  <span className="text-white/80 text-xl font-medium">/mo</span>
                </div>
                <p className="text-white/70 text-sm mb-2">billed annually</p>
                <p className="text-white/90 text-base font-medium mb-8">
                  50% off, just for students
                </p>
                <div className="space-y-3 mb-8">
                  <p className="text-white text-base leading-relaxed">
                    Use all of our features on our Pro Plan
                  </p>
                  <p className="text-white/90 text-base font-semibold">
                    Start your free trail today
                  </p>
                </div>
                <button className="w-full h-14 bg-white hover:bg-gray-50 text-[#4F46E5] text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg">
                  Start Today for Free
                </button>
              </div>

              {/* How to Sign Up Section */}
              <div className="mb-16">
                <h2 className="text-[#49423D] text-3xl md:text-4xl font-normal font-serif mb-8">
                  How to sign up
                </h2>

                <div className="space-y-8">
                  {/* Step 1 */}
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#6366F1] to-[#4F46E5] flex items-center justify-center">
                      <span className="text-white text-xl font-semibold">
                        1
                      </span>
                    </div>
                    <div className="flex-1 pt-2">
                      <h3 className="text-[#49423D] text-xl font-semibold font-sans mb-2">
                        Sign Up
                      </h3>
                      <p className="text-[#605A57] text-base leading-7 font-sans">
                        Click "Start Today for Free" and sign in to create an
                        account.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#6366F1] to-[#4F46E5] flex items-center justify-center">
                      <span className="text-white text-xl font-semibold">
                        2
                      </span>
                    </div>
                    <div className="flex-1 pt-2">
                      <h3 className="text-[#49423D] text-xl font-semibold font-sans mb-2">
                        Download the App
                      </h3>
                      <p className="text-[#605A57] text-base leading-7 font-sans">
                        Choose where you want to Flow: now available on MacOS,
                        Windows, Linux, Android and iOS.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#6366F1] to-[#4F46E5] flex items-center justify-center">
                      <span className="text-white text-xl font-semibold">
                        3
                      </span>
                    </div>
                    <div className="flex-1 pt-2">
                      <h3 className="text-[#49423D] text-xl font-semibold font-sans mb-2">
                        Get Verified
                      </h3>
                      <p className="text-[#605A57] text-base leading-7 font-sans">
                        Sign in to the app with your .edu email—we'll
                        auto-activate your student offer for free, then $5/month
                        (50% off). Cancel anytime.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-[rgba(55,50,47,0.12)]">
                <h3 className="text-[#49423D] text-xl font-semibold font-sans mb-4">
                  Student Benefits
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-[#6366F1] flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-[#605A57] text-base leading-7 font-sans">
                      3 months completely free to get started
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-[#6366F1] flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-[#605A57] text-base leading-7 font-sans">
                      50% off the regular price after trial ends
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-[#6366F1] flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-[#605A57] text-base leading-7 font-sans">
                      Full access to all Pro features
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-[#6366F1] flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-[#605A57] text-base leading-7 font-sans">
                      Cancel anytime, no questions asked
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-[#6366F1] flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-[#605A57] text-base leading-7 font-sans">
                      Easy verification with your .edu email address
                    </span>
                  </li>
                </ul>
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

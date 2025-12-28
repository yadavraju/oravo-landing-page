import { Header } from "@/components/header";
import FooterSection from "@/components/footer-section";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Use Oravo - Voice Typing + AI Meeting Notes Setup Guide",
  description:
    "Learn how to use Oravo AI voice assistant. Complete setup guide for voice typing and AI meeting notes, keyboard shortcuts, troubleshooting tips for 100+ languages.",
  keywords: [
    "how to use voice dictation",
    "Oravo tutorial",
    "voice dictation guide",
    "AI dictation setup",
    "meeting notes setup",
    "speech to text tutorial",
    "voice typing how to",
    "AI meeting recorder guide",
    "dictation keyboard shortcuts",
    "microphone setup guide",
  ],
  openGraph: {
    title: "How to Use Oravo - Voice Typing + Meeting Notes Guide",
    description:
      "Complete guide to using Oravo: Voice typing + AI meeting notes setup, shortcuts, and tips for 100+ languages.",
    url: "https://oravo.ai/how-to-use",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Use Oravo - Complete Setup Guide",
    description:
      "Master Oravo voice typing and AI meeting notes with our complete guide.",
  },
  alternates: {
    canonical: "https://oravo.ai/how-to-use",
  },
};

export default function HowToUsePage() {
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
                  How to do voice typing with Oravo
                </h1>
                <p className="text-[#605A57] text-xl md:text-2xl leading-relaxed font-sans">
                  Learn how to use Oravo Desktop
                </p>
              </div>

              {/* Overview Section */}
              <div className="mb-16 bg-gradient-to-br from-[#6366F1] to-[#4F46E5] rounded-3xl p-8 md:p-10 shadow-[0_8px_48px_rgba(99,102,241,0.3)]">
                <h2 className="text-white text-2xl md:text-3xl font-normal font-serif mb-6">
                  Oravo on Desktop
                </h2>
                <p className="text-white/90 text-base leading-7 font-sans mb-6">
                  Once you've downloaded and installed the Oravo app on your
                  desktop, you're ready to go.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                      <span className="text-white text-sm font-semibold">
                        1
                      </span>
                    </div>
                    <p className="text-white/90 text-base leading-7 font-sans pt-1">
                      Put your cursor in a text box
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                      <span className="text-white text-sm font-semibold">
                        2
                      </span>
                    </div>
                    <p className="text-white/90 text-base leading-7 font-sans pt-1">
                      Press and hold your hotkey
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                      <span className="text-white text-sm font-semibold">
                        3
                      </span>
                    </div>
                    <p className="text-white/90 text-base leading-7 font-sans pt-1">
                      Speak freely
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                      <span className="text-white text-sm font-semibold">
                        4
                      </span>
                    </div>
                    <p className="text-white/90 text-base leading-7 font-sans pt-1">
                      Let go of the hotkey to see your formatted transcript
                    </p>
                  </div>
                </div>
              </div>

              {/* Detailed Steps */}
              <div className="space-y-12 mb-16">
                {/* Step 1 */}
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-[rgba(55,50,47,0.12)]">
                  <h3 className="text-[#49423D] text-2xl font-normal font-serif mb-4">
                    1. Put your cursor in a text box
                  </h3>
                  <p className="text-[#605A57] text-base leading-7 font-sans">
                    For Oravo to know where you want to transcribe, your cursor
                    must be in a textbox. This can be in any application on your
                    computer—Slack, Microsoft Teams, Google Docs, Notion, you
                    name it. Just look for the flashing cursor.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-[rgba(55,50,47,0.12)]">
                  <h3 className="text-[#49423D] text-2xl font-normal font-serif mb-4">
                    2. Press your hotkey
                  </h3>
                  <div className="flex flex-wrap gap-3 mb-4">
                    <span className="px-4 py-2 bg-white rounded-lg border border-[rgba(55,50,47,0.12)] text-[#37322F] text-sm font-medium">
                      Mac default: Fn
                    </span>
                    <span className="px-4 py-2 bg-white rounded-lg border border-[rgba(55,50,47,0.12)] text-[#37322F] text-sm font-medium">
                      Windows default: Ctrl + Win
                    </span>
                  </div>
                  <p className="text-[#605A57] text-base leading-7 font-sans">
                    Once you hear Oravo's signature ping or see the white bars
                    start moving, you can start dictating.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-[rgba(55,50,47,0.12)]">
                  <h3 className="text-[#49423D] text-2xl font-normal font-serif mb-4">
                    3. Let go of your hotkey
                  </h3>
                  <p className="text-[#605A57] text-base leading-7 font-sans mb-4">
                    To paste the text, let go of the hotkey to paste in the text
                    box you're in. Ta-da, Oravo should have pasted your
                    dictation in the textbox. If not, please let us know.
                  </p>
                  <div className="bg-[#F7F5F3] rounded-lg p-4 border-l-4 border-[#6366F1]">
                    <p className="text-[#605A57] text-sm leading-6 font-sans">
                      <strong className="text-[#37322F]">P.S.</strong> If you
                      click{" "}
                      <kbd className="px-2 py-1 bg-white rounded border border-[rgba(55,50,47,0.12)] text-xs font-medium">
                        Esc
                      </kbd>
                      , your transcript will be canceled, but don't worry—you
                      can still find it in the Recent Activity page.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bonus Section */}
              <div className="mb-16 bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-[rgba(55,50,47,0.12)]">
                <h3 className="text-[#49423D] text-2xl font-normal font-serif mb-6">
                  [Bonus] More ways to start a dictation on your desktop
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
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
                        d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                      />
                    </svg>
                    <p className="text-[#605A57] text-base leading-7 font-sans">
                      Click on your Oravo bar in the center of your screen
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
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
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                    <div className="flex-1">
                      <p className="text-[#605A57] text-base leading-7 font-sans">
                        Press{" "}
                        <kbd className="px-2 py-1 bg-white rounded border border-[rgba(55,50,47,0.12)] text-xs font-medium">
                          Fn + Space
                        </kbd>{" "}
                        (Mac) or{" "}
                        <kbd className="px-2 py-1 bg-white rounded border border-[rgba(55,50,47,0.12)] text-xs font-medium">
                          Ctrl + Win + Space
                        </kbd>{" "}
                        (Windows) to go hands-free mode, then{" "}
                        <kbd className="px-2 py-1 bg-white rounded border border-[rgba(55,50,47,0.12)] text-xs font-medium">
                          Fn
                        </kbd>{" "}
                        or{" "}
                        <kbd className="px-2 py-1 bg-white rounded border border-[rgba(55,50,47,0.12)] text-xs font-medium">
                          Ctrl
                        </kbd>{" "}
                        to paste
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Troubleshooting Section */}
              <div className="mb-16">
                <h2 className="text-[#37322F] text-3xl md:text-4xl font-normal font-serif mb-8">
                  Troubleshooting: Microphone Not Detected
                </h2>
                <p className="text-[#605A57] text-base leading-7 font-sans mb-8">
                  If Oravo isn't detecting your microphone or you're not seeing
                  any transcription, try these steps:
                </p>

                <div className="space-y-6">
                  {/* Choose Microphone */}
                  <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-[rgba(55,50,47,0.12)]">
                    <h4 className="text-[#49423D] text-xl font-semibold font-sans mb-4">
                      Choose Your Microphone in Settings:
                    </h4>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-3">
                        <span className="text-[#6366F1] mt-1.5">•</span>
                        <span className="text-[#605A57] text-base leading-7 font-sans">
                          Open Settings in Oravo
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#6366F1] mt-1.5">•</span>
                        <span className="text-[#605A57] text-base leading-7 font-sans">
                          Select your specific microphone instead of "Built-in
                          mic" or "Auto-Detect"
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#6366F1] mt-1.5">•</span>
                        <span className="text-[#605A57] text-base leading-7 font-sans">
                          Click Save and Close—changes won't save automatically
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#6366F1] mt-1.5">•</span>
                        <span className="text-[#605A57] text-base leading-7 font-sans">
                          If your mic isn't listed, quit and reopen the app to
                          refresh the list
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* System Permissions */}
                  <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-[rgba(55,50,47,0.12)]">
                    <h4 className="text-[#49423D] text-xl font-semibold font-sans mb-4">
                      Check System Microphone Permissions:
                    </h4>
                    <ul className="space-y-3 list-none">
                      <li className="flex items-start gap-3">
                        <span className="text-[#6366F1] mt-1.5 font-semibold">
                          Mac:
                        </span>
                        <span className="text-[#605A57] text-base leading-7 font-sans">
                          Go to System Settings → Privacy & Security →
                          Microphone and ensure Oravo is allowed access
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#6366F1] mt-1.5 font-semibold">
                          Windows:
                        </span>
                        <span className="text-[#605A57] text-base leading-7 font-sans">
                          Go to Start → Settings → Privacy & security →
                          Microphone and make sure Microphone access is on and
                          apps can use your mic
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Audio Settings */}
                  <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-[rgba(55,50,47,0.12)]">
                    <h4 className="text-[#49423D] text-xl font-semibold font-sans mb-4">
                      Check Audio Input Settings:
                    </h4>
                    <ul className="space-y-3 list-none">
                      <li className="flex items-start gap-3">
                        <span className="text-[#6366F1] mt-1.5 font-semibold">
                          Mac:
                        </span>
                        <span className="text-[#605A57] text-base leading-7 font-sans">
                          Open System Settings → Sound → Input and ensure the
                          microphone is not muted with proper input volume
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#6366F1] mt-1.5 font-semibold">
                          Windows:
                        </span>
                        <span className="text-[#605A57] text-base leading-7 font-sans">
                          Right-click the speaker icon and select Open Sound
                          settings → Input to adjust input volume and check mute
                          status
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Test Microphone */}
                  <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-[rgba(55,50,47,0.12)]">
                    <h4 className="text-[#49423D] text-xl font-semibold font-sans mb-4">
                      Test Your Microphone:
                    </h4>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-3">
                        <span className="text-[#6366F1] mt-1.5">•</span>
                        <span className="text-[#605A57] text-base leading-7 font-sans">
                          Use the Oravo bar to speak and check if text appears
                          in Recent Activity
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#6366F1] mt-1.5">•</span>
                        <span className="text-[#605A57] text-base leading-7 font-sans">
                          If no text appears, download the audio file to verify
                          if sound was recorded
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Common Issues */}
                  <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-[rgba(55,50,47,0.12)]">
                    <h4 className="text-[#49423D] text-xl font-semibold font-sans mb-4">
                      Check for Common Issues:
                    </h4>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-3">
                        <span className="text-[#6366F1] mt-1.5">•</span>
                        <span className="text-[#605A57] text-base leading-7 font-sans">
                          Confirm your mic isn't muted (check hardware mute
                          keys)
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#6366F1] mt-1.5">•</span>
                        <span className="text-[#605A57] text-base leading-7 font-sans">
                          Ensure your internet connection is stable
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#6366F1] mt-1.5">•</span>
                        <span className="text-[#605A57] text-base leading-7 font-sans">
                          Temporarily disable VPNs, firewalls, or proxies that
                          might block the app
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Warning */}
                <div className="mt-8 bg-[#FFF7ED] border-l-4 border-[#F59E0B] rounded-lg p-6">
                  <p className="text-[#92400E] text-base leading-7 font-sans">
                    <strong className="font-semibold">Note:</strong> Bluetooth
                    microphones often cause delays and lower audio quality. We
                    recommend using a built-in or wired microphone for the best
                    experience.
                  </p>
                </div>

                <div className="mt-8 bg-[#EFF6FF] border-l-4 border-[#6366F1] rounded-lg p-6">
                  <p className="text-[#1E3A8A] text-base leading-7 font-sans">
                    If these steps don't resolve the issue, use the "Report an
                    issue" feature in the app with details about what you've
                    tried.
                  </p>
                </div>
              </div>

              {/* CTA Section */}
              <div className="text-center bg-gradient-to-br from-[#6366F1] to-[#4F46E5] rounded-3xl p-8 md:p-10 shadow-[0_8px_48px_rgba(99,102,241,0.3)]">
                <h3 className="text-white text-2xl md:text-3xl font-normal font-serif mb-4">
                  Ready to get started?
                </h3>
                <p className="text-white/90 text-base leading-7 font-sans mb-6">
                  Download Oravo and start dictating today
                </p>
                <Link
                  href="/download"
                  className="inline-flex h-14 px-8 bg-white hover:bg-gray-50 text-[#4F46E5] text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg items-center justify-center"
                >
                  Download Oravo
                </Link>
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

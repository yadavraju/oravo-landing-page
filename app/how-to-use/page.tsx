import type { Metadata } from "next";
import { AlertTriangle, LifeBuoy } from "lucide-react";
import { AppleIcon, WindowsIcon } from "@/components/download/PlatformSection";
import { DetailedSteps, StartOptions } from "@/components/how-to-use/HowToSections";
import { Walkthrough } from "@/components/how-to-use/Walkthrough";
import { Band } from "@/components/landing/Band";
import { VideoTutorial } from "@/components/landing/VideoTutorial";
import { MarketingShell } from "@/components/landing/MarketingShell";
import { CtaPanel, PageHero, SectionIntro } from "@/components/landing/PageBlocks";
import { Reveal } from "@/components/landing/Reveal";

// Local copy: constants exported from a "use client" module arrive in server
// components as client references, not strings.
const SHELL = "mx-auto w-full max-w-6xl px-5 sm:px-8";

export const metadata: Metadata = {
  title: "How to Use Oravo - Voice Typing",
  description:
    "Learn how to use Oravo AI voice assistant. Complete setup guide for voice typing and AI meeting notes, keyboard shortcuts, troubleshooting tips for 60+ languages.",
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
      "Complete guide to using Oravo: Voice typing + AI meeting notes setup, shortcuts, and tips for 60+ languages.",
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

type Fix = { title: string; items: { os?: "mac" | "windows"; text: string }[] };

const TROUBLESHOOTING: Fix[] = [
  {
    title: "Choose your microphone in Settings",
    items: [
      { text: "Open Settings in Oravo." },
      { text: "Select your specific microphone instead of “Built-in mic” or “Auto-Detect”." },
      { text: "Click Save and Close. Changes don't save automatically." },
      { text: "If your mic isn't listed, quit and reopen the app to refresh the list." },
    ],
  },
  {
    title: "Check system microphone permissions",
    items: [
      { os: "mac", text: "Go to System Settings → Privacy & Security → Microphone and make sure Oravo is allowed access." },
      { os: "windows", text: "Go to Start → Settings → Privacy & security → Microphone and make sure microphone access is on and apps can use your mic." },
    ],
  },
  {
    title: "Check audio input settings",
    items: [
      { os: "mac", text: "Open System Settings → Sound → Input and make sure the microphone is not muted and the input volume is up." },
      { os: "windows", text: "Right-click the speaker icon and select Open Sound settings → Input to adjust input volume and check mute status." },
    ],
  },
  {
    title: "Test your microphone",
    items: [
      { text: "Use the Oravo bar to speak and check if text appears in Recent Activity." },
      { text: "If no text appears, download the audio file to check whether sound was recorded." },
    ],
  },
  {
    title: "Check for common issues",
    items: [
      { text: "Confirm your mic isn't muted (check hardware mute keys)." },
      { text: "Make sure your internet connection is stable." },
      { text: "Temporarily disable VPNs, firewalls or proxies that might block the app." },
    ],
  },
];

function OsTag({ os }: { os: "mac" | "windows" }) {
  return (
    <span className="mt-0.5 inline-flex w-[5.5rem] shrink-0 items-center gap-1.5 rounded-md bg-canvas px-2 py-1 font-display text-[11.5px] font-semibold text-ink-soft ring-1 ring-line">
      {os === "mac" ? <AppleIcon className="h-3.5 w-3.5" /> : <WindowsIcon className="h-3 w-3" />}
      {os === "mac" ? "Mac" : "Windows"}
    </span>
  );
}

export default function HowToUsePage() {
  return (
    <MarketingShell>
      <PageHero
        eyebrow="Setup guide"
        title="How to do voice typing with Oravo"
        description="Learn how to use Oravo Desktop. Once it is installed, it is the same three moves in every app: press your hotkey, speak, let go."
        primary={{ label: "Download Oravo", href: "/download" }}
        secondary={{ label: "See the steps", href: "#walkthrough" }}
        note="Mac default: Fn · Windows default: Ctrl + Win"
        doodles={["hotkey", "speech"]}
        visual={<VideoTutorial />}
      />

      {/* The four moves, animated. */}
      <Band id="walkthrough" color="var(--o-paper)" from="var(--o-band-sand)" blend={200} className="scroll-mt-20 pb-20 pt-24 sm:pb-24 sm:pt-28">
        <div className={SHELL}>
          <SectionIntro
            doodle="windows"
            eyebrow="Oravo on desktop"
            title="Four moves, any app."
            lede="Once you've downloaded and installed the Oravo app on your desktop, you're ready to go."
          />
          <div className="mt-12 sm:mt-14">
            <Walkthrough />
          </div>
        </div>
      </Band>

      {/* Each step in detail. */}
      <Band color="var(--o-band-clay)" from="var(--o-paper)" blend={200} className="pb-20 pt-24 sm:pb-24 sm:pt-28">
        <div className={SHELL}>
          <SectionIntro align="left" doodle="hotkey" eyebrow="Step by step" title="The details, one step at a time." />
          <div className="mt-12 sm:mt-16">
            <DetailedSteps />
          </div>
        </div>
      </Band>

      {/* Bonus: other ways to start. */}
      <Band color="var(--o-paper)" from="var(--o-band-clay)" blend={200} className="pb-20 pt-24 sm:pb-24 sm:pt-28">
        <div className={SHELL}>
          <SectionIntro doodle="mic" eyebrow="Bonus" title="More ways to start a dictation." lede="Two more ways to start talking on your desktop." />
          <div className="mt-12">
            <StartOptions />
          </div>
        </div>
      </Band>

      {/* Troubleshooting. */}
      <Band color="var(--o-canvas)" from="var(--o-paper)" className="pb-20 pt-24 sm:pb-24">
        <div className={`${SHELL} grid gap-10 lg:grid-cols-[20rem_1fr] lg:gap-14`}>
          <div>
            <SectionIntro
              align="left"
              doodle="question"
              eyebrow="Troubleshooting"
              title="Microphone not detected?"
              lede="If Oravo isn't detecting your microphone or you're not seeing any transcription, work through these checks."
            />
            <Reveal delay={0.15}>
              <div className="mt-8 rounded-xl border-l-[3px] border-brand bg-raised p-5 shadow-[0_0_0_1px_var(--o-line)]">
                <p className="flex items-center gap-2 font-display text-[13.5px] font-semibold text-ink">
                  <AlertTriangle aria-hidden="true" className="h-4 w-4 text-ink-soft" />
                  A note on Bluetooth
                </p>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">
                  Bluetooth microphones often cause delays and lower audio quality. We recommend a built-in or wired microphone for the best experience.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-4 rounded-xl bg-raised p-5 shadow-[0_0_0_1px_var(--o-line)]">
                <p className="flex items-center gap-2 font-display text-[13.5px] font-semibold text-ink">
                  <LifeBuoy aria-hidden="true" className="h-4 w-4 text-ink-faint" />
                  Still stuck?
                </p>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">
                  Use the &ldquo;Report an issue&rdquo; feature in the app with details about what you&apos;ve tried, or email{" "}
                  <a href="mailto:hi@oravo.ai" className="font-semibold text-primary-500 underline-offset-4 hover:underline">
                    hi@oravo.ai
                  </a>
                  .
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <ol className="surface-solid divide-y divide-line overflow-hidden !rounded-2xl">
              {TROUBLESHOOTING.map((fix, i) => (
                <li key={fix.title} className="grid gap-3 px-5 py-6 sm:grid-cols-[2.75rem_1fr] sm:gap-4 sm:px-7">
                  <span className="font-serif text-[1.6rem] leading-none text-ink-faint">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="font-display text-[16px] font-semibold tracking-[-0.01em] text-ink">{fix.title}</h3>
                    <ul className="mt-3 space-y-2.5">
                      {fix.items.map((item) => (
                        <li key={item.text} className="flex flex-col gap-2 text-[14.5px] leading-relaxed text-ink-soft sm:flex-row sm:items-start sm:gap-3">
                          {item.os ? <OsTag os={item.os} /> : <span className="mt-[0.6em] hidden h-1.5 w-1.5 shrink-0 rotate-45 rounded-[1px] bg-brand/60 sm:block" aria-hidden="true" />}
                          <span>{item.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </Band>

      <Band color="var(--o-blush)" from="var(--o-canvas)" className="pb-20 pt-16 sm:pt-20">
        <div className={SHELL}>
          <CtaPanel
            eyebrow="Ready to get started?"
            title="Download Oravo and start dictating today."
            description="Available for Mac, Windows and Android. Your 14-day Pro trial starts when you install."
            primary={{ label: "Download Oravo", href: "/download" }}
            secondary={{ label: "Email support", href: "mailto:hi@oravo.ai" }}
            doodle="plane"
          />
        </div>
      </Band>
    </MarketingShell>
  );
}

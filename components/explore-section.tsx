"use client";

import Link from "next/link";

const COMPARE_LINKS = [
  { label: "Oravo vs Wispr Flow", href: "/compare/wispr-flow" },
  { label: "Oravo vs Willow Voice", href: "/compare/willow-voice" },
  { label: "Oravo vs Dragon", href: "/compare/dragon" },
  { label: "Oravo vs Otter.ai", href: "/compare/otter-ai" },
];

const AUDIENCE_LINKS = [
  { label: "For Healthcare", href: "/for-healthcare" },
  { label: "For Developers", href: "/for-developers" },
  { label: "For Students", href: "/for-students" },
  { label: "For Writers", href: "/for-writers" },
  { label: "For Lawyers", href: "/for-lawyers" },
  { label: "For Sales Teams", href: "/for-sales" },
  { label: "For Creators", href: "/for-creators" },
  { label: "For Accessibility", href: "/for-accessibility" },
  { label: "For Multilingual Teams", href: "/for-multilingual-teams" },
  { label: "For Non-Native Speakers", href: "/for-non-native-speakers" },
];

const APP_LINKS = [
  { label: "Gmail", href: "/voice-keyboard-for-gmail" },
  { label: "Slack", href: "/voice-keyboard-for-slack" },
  { label: "Notion", href: "/voice-keyboard-for-notion" },
  { label: "Google Docs", href: "/voice-keyboard-for-google-docs" },
  { label: "VS Code", href: "/voice-keyboard-for-vscode" },
  { label: "LinkedIn", href: "/voice-keyboard-for-linkedin" },
  { label: "WhatsApp", href: "/voice-keyboard-for-whatsapp" },
  { label: "ChatGPT", href: "/voice-keyboard-for-chatgpt" },
  { label: "Jira", href: "/voice-keyboard-for-jira" },
  { label: "Teams", href: "/voice-keyboard-for-teams" },
  { label: "Figma", href: "/voice-keyboard-for-figma" },
  { label: "Outlook", href: "/voice-keyboard-for-outlook" },
];

function LinkPill({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="px-4 py-2 bg-white border border-[rgba(55,50,47,0.12)] rounded-full text-sm font-medium text-[#37322F] font-sans hover:bg-[#37322F] hover:text-white transition-colors duration-200"
    >
      {label}
    </Link>
  );
}

export default function ExploreSection() {
  return (
    <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
      <div className="w-full max-w-[960px] px-4 sm:px-6 md:px-8 py-12 md:py-16">
        <h2 className="text-center text-[#37322F] text-[28px] sm:text-3xl md:text-4xl font-medium leading-tight font-serif mb-3">
          Explore Oravo
        </h2>
        <p className="text-center text-[#605A57] text-sm sm:text-base font-normal leading-relaxed font-sans mb-10 max-w-[600px] mx-auto">
          See how Oravo compares, who it's built for, and which apps it works with.
        </p>

        {/* Compare */}
        <div className="mb-8">
          <h3 className="text-[#847971] text-xs font-semibold uppercase tracking-wider mb-3 font-sans">
            Compare
          </h3>
          <div className="flex flex-wrap gap-2">
            {COMPARE_LINKS.map((link) => (
              <LinkPill key={link.href} {...link} />
            ))}
          </div>
        </div>

        {/* Built For */}
        <div className="mb-8">
          <h3 className="text-[#847971] text-xs font-semibold uppercase tracking-wider mb-3 font-sans">
            Built For
          </h3>
          <div className="flex flex-wrap gap-2">
            {AUDIENCE_LINKS.map((link) => (
              <LinkPill key={link.href} {...link} />
            ))}
          </div>
        </div>

        {/* Works With */}
        <div>
          <h3 className="text-[#847971] text-xs font-semibold uppercase tracking-wider mb-3 font-sans">
            Works With
          </h3>
          <div className="flex flex-wrap gap-2">
            {APP_LINKS.map((link) => (
              <LinkPill key={link.href} {...link} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

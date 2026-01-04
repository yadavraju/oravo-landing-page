"use client";

import { Header } from "@/components/header";
import FooterSection from "@/components/footer-section";
import Link from "next/link";
import { useState } from "react";

// Badge component
function Badge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="px-[14px] py-[6px] bg-white shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] overflow-hidden rounded-[90px] flex justify-start items-center gap-[8px] border border-[rgba(2,6,23,0.08)] shadow-xs">
      <div className="w-[14px] h-[14px] relative overflow-hidden flex items-center justify-center">
        {icon}
      </div>
      <div className="text-center flex justify-center flex-col text-[#37322F] text-xs font-medium leading-3 font-sans">
        {text}
      </div>
    </div>
  );
}

// App Card Component
function AppCard({
  icon,
  name,
  description,
  href,
  color,
}: {
  icon: React.ReactNode;
  name: string;
  description: string;
  href: string;
  color: string;
}) {
  return (
    <Link
      href={href}
      className="bg-white rounded-2xl p-6 border border-[rgba(55,50,47,0.12)] hover:shadow-[0px_8px_24px_rgba(55,50,47,0.12)] transition-all duration-300 hover:border-[rgba(55,50,47,0.2)] group"
    >
      <div className="flex items-start justify-between mb-4">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: `${color}15` }}
        >
          {icon}
        </div>
        <div className="w-8 h-8 rounded-full border border-[rgba(55,50,47,0.12)] flex items-center justify-center group-hover:bg-[#F7F5F3] transition-colors">
          <svg
            className="w-4 h-4 text-[#847971] group-hover:text-[#37322F] transition-colors"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      </div>
      <h3 className="text-[#37322F] text-lg font-semibold font-sans mb-2">
        {name}
      </h3>
      <p className="text-[#605A57] text-sm leading-relaxed font-sans">
        {description}
      </p>
    </Link>
  );
}

// Category Tab Component
function CategoryTab({
  name,
  isActive,
  onClick,
}: {
  name: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-full text-sm font-medium font-sans transition-all duration-200 cursor-pointer ${
        isActive
          ? "bg-[#6366F1] text-white shadow-[0px_4px_12px_rgba(99,102,241,0.3)]"
          : "bg-white border border-[rgba(55,50,47,0.12)] text-[#605A57] hover:border-[rgba(55,50,47,0.2)] hover:text-[#37322F]"
      }`}
    >
      {name}
    </button>
  );
}

// App data organized by category
const categories = {
  Productivity: [
    {
      name: "Slack",
      description:
        "Use voice dictation in Slack to capture task updates and ideas as they come to you.",
      href: "/voice-keyboard-for-slack",
      color: "#E01E5A",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#E01E5A">
          <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zm10.124 2.521a2.528 2.528 0 0 1 2.52-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.52V8.834zm-1.271 0a2.528 2.528 0 0 1-2.521 2.521 2.528 2.528 0 0 1-2.521-2.521V2.522A2.528 2.528 0 0 1 15.166 0a2.528 2.528 0 0 1 2.521 2.522v6.312zm-2.521 10.124a2.528 2.528 0 0 1 2.521 2.52A2.528 2.528 0 0 1 15.166 24a2.528 2.528 0 0 1-2.521-2.522v-2.52h2.521zm0-1.271a2.528 2.528 0 0 1-2.521-2.521 2.528 2.528 0 0 1 2.521-2.521h6.312A2.528 2.528 0 0 1 24 15.166a2.528 2.528 0 0 1-2.522 2.521h-6.312z" />
        </svg>
      ),
    },
    {
      name: "Microsoft Teams",
      description:
        "Use Oravo voice dictation in Teams to record detailed notes without breaking your flow.",
      href: "/voice-keyboard-for-teams",
      color: "#6264A7",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#6264A7">
          <path d="M20.625 6.188a2.062 2.062 0 1 0 0-4.125 2.062 2.062 0 0 0 0 4.125zm-5.063.437a2.75 2.75 0 1 0 0-5.5 2.75 2.75 0 0 0 0 5.5zm5.063 1.75h-2.75a2.75 2.75 0 0 0-2.563 1.75h-2.062v-1.5a3.437 3.437 0 0 0-3.438-3.438H5.5A3.437 3.437 0 0 0 2.062 8.625v6.188a.688.688 0 0 0 .688.687h3.438v4.125a.688.688 0 0 0 .687.688h6.188a.688.688 0 0 0 .687-.688V15.5h1.375a2.75 2.75 0 0 0 2.75-2.75v-1.625h2.75a.687.687 0 0 0 .688-.688v-1.374a.687.687 0 0 0-.688-.688z" />
        </svg>
      ),
    },
    {
      name: "Notion",
      description:
        "Notion works smoothly with hands-free dictation to record detailed notes without breaking your flow.",
      href: "/voice-keyboard-for-notion",
      color: "#000000",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#000000">
          <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.934zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952l1.448.327s0 .84-1.168.84l-3.22.186c-.094-.187 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.453-.233 4.764 7.279v-6.44l-1.215-.14c-.093-.514.28-.887.747-.933z" />
        </svg>
      ),
    },
    {
      name: "Gmail",
      description:
        "Dictate professional emails in Gmail 4x faster than typing with automatic formatting.",
      href: "/voice-keyboard-for-gmail",
      color: "#EA4335",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#EA4335">
          <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
        </svg>
      ),
    },
    {
      name: "Google Docs",
      description:
        "Better than built-in voice typing. 98%+ accuracy with automatic punctuation.",
      href: "/voice-keyboard-for-google-docs",
      color: "#4285F4",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#4285F4">
          <path d="M14.727 6.727H14V0H4.91c-.905 0-1.637.732-1.637 1.636v20.728c0 .904.732 1.636 1.636 1.636h14.182c.904 0 1.636-.732 1.636-1.636V6.727h-6zm0 10.91H7.273v-1.455h7.454v1.454zm2.182-2.91H7.273v-1.454h9.636v1.454zm0-2.909H7.273v-1.454h9.636v1.454zM14.727 6h5.455l-5.455-5.455V6z" />
        </svg>
      ),
    },
  ],
  Developer: [
    {
      name: "Technical Documentation",
      description:
        "Write API docs, READMEs, and developer guides 4x faster with technical vocabulary support.",
      href: "/voice-keyboard-for-technical-documentation",
      color: "#10B981",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#10B981"
          strokeWidth="2"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
        </svg>
      ),
    },
    {
      name: "Slack",
      description:
        "Keep up with engineering discussions by speaking your responses in Slack channels.",
      href: "/voice-keyboard-for-slack",
      color: "#E01E5A",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#E01E5A">
          <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z" />
        </svg>
      ),
    },
    {
      name: "Notion",
      description:
        "Build wikis and technical documentation at speaking speed with automatic formatting.",
      href: "/voice-keyboard-for-notion",
      color: "#000000",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#000000">
          <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466z" />
        </svg>
      ),
    },
  ],
  Communication: [
    {
      name: "Slack",
      description:
        "Send messages in channels, threads, and DMs at speaking speed.",
      href: "/voice-keyboard-for-slack",
      color: "#E01E5A",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#E01E5A">
          <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52z" />
        </svg>
      ),
    },
    {
      name: "Discord",
      description:
        "Chat in servers and DMs while gaming or multitasking. No typing required.",
      href: "/voice-keyboard-for-discord",
      color: "#5865F2",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#5865F2">
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
        </svg>
      ),
    },
    {
      name: "Microsoft Teams",
      description:
        "Chat in meetings and channels without unmuting. Stay productive in enterprise.",
      href: "/voice-keyboard-for-teams",
      color: "#6264A7",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#6264A7">
          <path d="M20.625 6.188a2.062 2.062 0 1 0 0-4.125 2.062 2.062 0 0 0 0 4.125z" />
        </svg>
      ),
    },
    {
      name: "Gmail",
      description:
        "Compose and reply to emails 4x faster with professional formatting.",
      href: "/voice-keyboard-for-gmail",
      color: "#EA4335",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#EA4335">
          <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
        </svg>
      ),
    },
  ],
  Writing: [
    {
      name: "Google Docs",
      description:
        "Write documents, reports, and content at thinking speed with auto-formatting.",
      href: "/voice-keyboard-for-google-docs",
      color: "#4285F4",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#4285F4">
          <path d="M14.727 6.727H14V0H4.91c-.905 0-1.637.732-1.637 1.636v20.728c0 .904.732 1.636 1.636 1.636h14.182c.904 0 1.636-.732 1.636-1.636V6.727h-6z" />
        </svg>
      ),
    },
    {
      name: "Notion",
      description:
        "Build your second brain at speaking speed. Notes, wikis, and journals.",
      href: "/voice-keyboard-for-notion",
      color: "#000000",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#000000">
          <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466z" />
        </svg>
      ),
    },
    {
      name: "Gmail",
      description:
        "Professional email writing with natural speech. Perfect punctuation included.",
      href: "/voice-keyboard-for-gmail",
      color: "#EA4335",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#EA4335">
          <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457z" />
        </svg>
      ),
    },
    {
      name: "Technical Docs",
      description:
        "API documentation, READMEs, and developer guides with technical accuracy.",
      href: "/voice-keyboard-for-technical-documentation",
      color: "#10B981",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#10B981"
          strokeWidth="2"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
        </svg>
      ),
    },
  ],
};

type CategoryKey = keyof typeof categories;

export default function UseCasesPage() {
  const [activeCategory, setActiveCategory] =
    useState<CategoryKey>("Productivity");

  const categoryNames = Object.keys(categories) as CategoryKey[];

  return (
    <div className="w-full min-h-screen relative bg-[#F7F5F3] overflow-x-hidden flex flex-col justify-start items-center">
      <div className="relative flex flex-col justify-start items-center w-full">
        <div className="w-full max-w-none px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1060px] lg:w-[1060px] relative flex flex-col justify-start items-start min-h-screen">
          {/* Left vertical line */}
          <div className="w-[1px] h-full absolute left-4 sm:left-6 md:left-8 lg:left-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0"></div>

          {/* Right vertical line */}
          <div className="w-[1px] h-full absolute right-4 sm:right-6 md:right-8 lg:right-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0"></div>

          {/* Header */}
          <Header />

          {/* Main Content */}
          <main className="flex-1 w-full mt-20 md:mt-24 lg:mt-28 relative z-10">
            {/* Hero Section */}
            <section className="px-6 md:px-12 py-12 md:py-20 border-b border-[rgba(55,50,47,0.12)]">
              <div className="max-w-[800px] mx-auto text-center">
                <div className="flex justify-center mb-6">
                  <Badge
                    icon={
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#37322F"
                        strokeWidth="2"
                      >
                        <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    }
                    text="Discover Real Use Cases"
                  />
                </div>

                <h1 className="text-[#37322F] text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-normal leading-tight font-serif mb-6">
                  Explore Using Oravo Voice
                  <br />
                  in Every App and Language
                </h1>

                <p className="text-[#605A57] text-lg md:text-xl leading-relaxed font-sans max-w-[640px] mx-auto">
                  Browse Oravo use cases by category. Instant voice-to-text that
                  you can use anywhere from communication apps to AI tools to
                  different languages.
                </p>
              </div>
            </section>

            {/* Category Tabs */}
            <section className="px-6 md:px-12 py-8 border-b border-[rgba(55,50,47,0.12)]">
              <div className="flex flex-wrap justify-center gap-3">
                {categoryNames.map((category) => (
                  <CategoryTab
                    key={category}
                    name={category}
                    isActive={activeCategory === category}
                    onClick={() => setActiveCategory(category)}
                  />
                ))}
              </div>
            </section>

            {/* App Cards Grid */}
            <section className="px-6 md:px-12 py-12 md:py-16">
              <div className="max-w-[900px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categories[activeCategory].map((app) => (
                    <AppCard
                      key={app.name}
                      icon={app.icon}
                      name={app.name}
                      description={app.description}
                      href={app.href}
                      color={app.color}
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="px-6 md:px-12 py-16 md:py-20 border-t border-[rgba(55,50,47,0.12)]">
              <div className="max-w-[700px] mx-auto text-center">
                <div className="bg-gradient-to-br from-[#1877F2] to-[#166FE5] rounded-3xl p-8 md:p-12 shadow-[0_8px_48px_rgba(24,119,242,0.3)]">
                  <h2 className="text-white text-2xl md:text-4xl font-normal font-serif mb-4">
                    Ready to Type with Your Voice?
                  </h2>
                  <p className="text-white/90 text-base md:text-lg leading-relaxed font-sans mb-8">
                    Transform your productivity with Oravo. Speak naturally and
                    communicate 4x faster in any app—with 98%+ accuracy and
                    automatic formatting.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                    <Link
                      href="/download"
                      className="inline-flex h-14 px-8 bg-white hover:bg-gray-50 text-[#1877F2] text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg items-center justify-center"
                    >
                      Download Free
                    </Link>
                  </div>

                  <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-white/80 text-sm">
                    <span>Free to start</span>
                    <span>•</span>
                    <span>2-minute setup</span>
                    <span>•</span>
                    <span>Works everywhere</span>
                  </div>
                </div>
              </div>
            </section>
          </main>

          {/* Footer */}
          <FooterSection />
        </div>
      </div>
    </div>
  );
}

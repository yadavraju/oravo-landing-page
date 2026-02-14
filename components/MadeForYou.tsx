"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

// Featured personas for SEO - most searched terms
const featuredPersonas = [
  {
    id: "creators",
    label: "Creators",
    title: "International Founders & Professionals",
    description:
      "Faster emails, proposals, and updates. Write polished English without slowing down to think about grammar.",
    href: "/for-creators",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "healthcare",
    label: "Healthcare",
    title: "Healthcare Teams",
    description:
      "Faster documentation with privacy in mind. HIPAA-ready with medical terminology recognition built-in.",
    href: "/for-healthcare",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "writers",
    label: "Writers",
    title: "Voice Typing for Writers",
    description:
      "Beat writer's block by speaking your first draft. Get words flowing at the natural pace of human thought.",
    href: "/for-writers",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "students",
    label: "Students",
    title: "Students",
    description:
      "Essays and notes without the grammar struggle. Write research papers and assignments 4x faster.",
    href: "/for-students",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          d="M12 14l9-5-9-5-9 5 9 5z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M12 14v7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "lawyers",
    label: "Lawyers",
    title: "Voice to Text for Lawyers",
    description:
      "Dictate legal documents, case notes, and client communications with precision. Understands legal terminology.",
    href: "/for-lawyers",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "engineers",
    label: "Engineers",
    title: "Engineers & Technical Writers",
    description:
      "Docs, tickets, and specs without breaking flow. Technical terminology recognized automatically.",
    href: "/for-developers",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "sales",
    label: "Sales",
    title: "Voice Typing for Sales Teams",
    description:
      "Follow up faster, close deals quicker. Dictate emails and CRM updates between meetings.",
    href: "/for-sales",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "accessibility",
    label: "Accessibility",
    title: "Voice Typing for Accessibility",
    description:
      "Type hands-free with accuracy and independence. Perfect for RSI, mobility challenges, or visual impairments.",
    href: "/for-accessibility",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="12" cy="4" r="2" />
        <path
          d="M12 6v4m0 0l-4 8m4-8l4 8m-8-4h8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

// Additional roles shown as expandable pills
const additionalRoles = [
  "Consultants",
  "Customer Support",
  "Designers",
  "ESL Learners",
  "Educators",
  "Executives",
  "Government",
  "Individuals",
  "Journalists",
  "Multilinguals",
  "Product Teams",
  "Slower Typists",
  "Teams",
];

export default function MadeForYou() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section
      id="made-for-you"
      className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center bg-[#F7F5F3]"
      aria-labelledby="made-for-you-heading"
    >
      {/* Header Section */}
      <div className="self-stretch px-6 md:px-12 pt-12 md:pt-16 pb-8 md:pb-12 flex justify-center items-center">
        <div className="w-full max-w-[800px] flex flex-col justify-start items-center gap-4">
          <h2
            id="made-for-you-heading"
            className="text-[#49423D] text-[28px] sm:text-3xl md:text-4xl lg:text-5xl font-stretch-semi-condensed font-medium leading-tight md:leading-[60px] font-serif text-center px-4"
          >
            You Think Faster Than You Type.
          </h2>
          <p className="text-[#605A57] text-base md:text-lg font-normal leading-relaxed font-sans text-center max-w-[600px]">
            Writing in a second language is exhausting. Oravo lets you speak in
            your native tongue and get perfectly written English — with the
            right tone, grammar, and formatting. Automatically.
          </p>
        </div>
      </div>

      {/* Featured Cards Grid */}
      <div className="w-full max-w-[1060px] px-4 sm:px-6 md:px-8 pb-8 md:pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredPersonas.map((persona) => (
            <Link
              key={persona.id}
              href={persona.href}
              className="group p-5 bg-white border border-[#E0DEDB] rounded-xl flex flex-col gap-4 transition-all duration-200 hover:border-[#847971]"
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-lg bg-[#F7F5F3] flex items-center justify-center text-[#605A57] group-hover:text-[#37322F] transition-colors">
                {persona.icon}
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2">
                <h3 className="text-[#37322F] text-base font-semibold leading-tight font-sans">
                  {persona.title}
                </h3>
                <p className="text-[#605A57] text-sm font-normal leading-relaxed font-sans">
                  {persona.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Additional Roles */}
      <div className="w-full max-w-[1060px] px-4 sm:px-6 md:px-8 pb-12 md:pb-16">
        <div className="flex flex-col items-center gap-4">
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-2 text-[#605A57] hover:text-[#37322F] transition-colors"
          >
            <span className="text-sm font-medium font-sans">
              {showAll
                ? "Show less"
                : `+${additionalRoles.length} more professions`}
            </span>
            <motion.svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              animate={{ rotate: showAll ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <path
                d="M19 9l-7 7-7-7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          </button>

          <AnimatePresence>
            {showAll && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="flex flex-wrap gap-2 justify-center pt-2">
                  {additionalRoles.map((role) => (
                    <span
                      key={role}
                      className="px-4 py-2 bg-white border border-[#E0DEDB] rounded-full text-[#605A57] text-sm font-medium font-sans"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

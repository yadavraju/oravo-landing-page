"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DownloadButtons from "./DownloadButtons";

const roles = [
  "Accessibility",
  "Consultants",
  "Creators",
  "Customer Support",
  "Designers",
  "ESL",
  "Educators",
  "Engineers",
  "Ergonomics",
  "Execs",
  "Government",
  "Healthcare",
  "Individuals",
  "Journalists",
  "Lawyers",
  "Multilinguals",
  "Product",
  "Sales",
  "Slower Typists",
  "Students",
  "Teams",
  "Writers",
];

const useCases = {
  Accessibility: {
    title: "Oravo for Accessibility",
    description:
      "Voice dictation removes barriers for those with mobility challenges, RSI, or visual impairments. Type hands-free with accuracy and independence across all your apps.",
  },
  Consultants: {
    title: "Oravo for Consultants",
    description:
      "Capture client meetings, project updates, and proposals on the go. Turn your thoughts into polished documents while you're thinking, not after the fact.",
  },
  Creators: {
    title: "Oravo for Creators",
    description:
      "Keep your creative flow uninterrupted. Dictate video scripts, podcast notes, and social media content faster than you can type, with natural formatting.",
  },
  "Customer Support": {
    title: "Oravo for Customer Support",
    description:
      "Respond to customers faster with voice-to-text replies. Document support tickets, write knowledge base articles, and update CRMs without breaking your rhythm.",
  },
  Designers: {
    title: "Oravo for Designers",
    description:
      "Keep your hands on the mouse and your ideas flowing. Dictate design feedback, project notes, and client updates without breaking your creative momentum.",
  },
  ESL: {
    title: "Oravo for ESL Learners",
    description:
      "Practice speaking English while creating written content. Oravo helps you communicate professionally in writing, even if typing in English feels slower.",
  },
  Educators: {
    title: "Oravo for Educators",
    description:
      "Create lesson plans, feedback, and course materials faster. Spend less time typing and more time teaching, with accurate transcription that understands educational context.",
  },
  Engineers: {
    title: "Oravo for Engineers",
    description:
      "Document code reviews, write technical specs, and update tickets without leaving your IDE. Oravo understands technical terminology and keeps you in the zone.",
  },
  Ergonomics: {
    title: "Oravo for Ergonomics",
    description:
      "Reduce repetitive strain and prevent wrist injuries. Voice dictation is the ergonomic solution for professionals who type all day long.",
  },
  Execs: {
    title: "Oravo for Executives",
    description:
      "Delegate to your voice, not an assistant. Dictate emails, memos, and strategic documents with executive polish—instantly formatted and ready to send.",
  },
  Government: {
    title: "Oravo for Government",
    description:
      "Create reports, memos, and official documentation efficiently. Oravo maintains professional formatting while helping you meet tight deadlines.",
  },
  Healthcare: {
    title: "Oravo for Healthcare",
    description:
      "Document patient notes, dictate medical reports, and update records hands-free. Oravo understands medical terminology and maintains HIPAA-compliant workflows.",
  },
  Individuals: {
    title: "Oravo for Individuals",
    description:
      "Whether you're writing emails, journaling, or messaging friends—speak naturally and let Oravo handle the typing. It's like having a personal transcriptionist.",
  },
  Journalists: {
    title: "Oravo for Journalists",
    description:
      "Breaking news doesn't wait for typing to catch up. Capture source interviews, clear notes, and live coverage as polished text—instantly. No more backlogs or transcription marathons.",
  },
  Lawyers: {
    title: "Oravo for Lawyers",
    description:
      "Dictate complex legal documents, case notes, and client communications with precision. Oravo understands legal terminology and formatting requirements, saving hours of manual transcription.",
  },
  Multilinguals: {
    title: "Oravo for Multilinguals",
    description:
      "Switch between 100+ languages seamlessly. Dictate in your native language or practice new ones—Oravo adapts to your multilingual workflow.",
  },
  Product: {
    title: "Oravo for Product Teams",
    description:
      "Write product specs, user stories, and roadmap updates faster. Capture ideas from brainstorms and standups before they're forgotten.",
  },
  Sales: {
    title: "Oravo for Sales",
    description:
      "Follow up faster, close deals quicker. Dictate emails, proposals, and CRM updates while driving between meetings or right after a call.",
  },
  "Slower Typists": {
    title: "Oravo for Slower Typists",
    description:
      "If typing feels slow or frustrating, voice dictation is your superpower. Express yourself at the speed of speech—up to 5x faster than typing.",
  },
  Students: {
    title: "Oravo for Students",
    description:
      "Write essays, research papers, and study notes faster. Oravo helps you get your ideas down quickly so you can focus on learning, not typing.",
  },
  Teams: {
    title: "Oravo for Teams",
    description:
      "Collaborate faster with voice-powered communication. Update Slack, document meetings, and share async updates without slowing down your team's momentum.",
  },
  Writers: {
    title: "Oravo for Writers",
    description:
      "Beat writer's block by speaking your first draft. Edit later—right now, just get your words flowing at the natural pace of human thought.",
  },
};

type RoleKey = keyof typeof useCases;

export default function MadeForYou() {
  const [selectedRole, setSelectedRole] = useState<RoleKey>("Journalists");

  const currentUseCase = useCases[selectedRole];

  return (
    <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center bg-[#F7F5F3]">
      {/* Header Section */}
      <div className="self-stretch px-6 md:px-24 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center">
        <div className="w-full max-w-[800px] flex flex-col justify-start items-center gap-8">
          <h2 className="text-[#49423D] text-xl sm:text-2xl md:text-3xl lg:text-5xl font-normal leading-tight md:leading-[60px] font-serif text-center">
            Oravo is made for you
          </h2>

          {/* Role Pills */}
          <div className="flex flex-wrap gap-2 justify-center">
            {roles.map((role) => {
              const isActive = role === selectedRole;
              const isClickable = role in useCases;

              return (
                <button
                  key={role}
                  onClick={() => {
                    if (isClickable) {
                      setSelectedRole(role as RoleKey);
                    }
                  }}
                  className={`px-4 py-2 rounded-full border transition-all duration-300 ${
                    isActive
                      ? "bg-white shadow-[0px_0px_0px_0.75px_#E0DEDB_inset] border-[rgba(2,6,23,0.08)] text-[#37322F]"
                      : "border-[rgba(55,50,47,0.20)] text-[#605A57] hover:border-[rgba(55,50,47,0.40)] hover:bg-white/50 cursor-pointer"
                  }`}
                >
                  <span className="text-sm font-medium font-sans">{role}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="self-stretch px-6 md:px-24 py-12 md:py-16 flex justify-center items-center">
        <div className="w-full max-w-[700px] flex flex-col items-center gap-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedRole}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-6 text-center"
            >
              <h3 className="text-[#49423D] text-3xl md:text-4xl lg:text-5xl font-normal font-serif leading-tight">
                {currentUseCase.title}
              </h3>
              <p className="text-[#605A57] text-lg md:text-xl font-normal leading-relaxed font-sans max-w-[600px]">
                {currentUseCase.description}
              </p>
            </motion.div>
          </AnimatePresence>

          <DownloadButtons />
        </div>
      </div>
    </div>
  );
}

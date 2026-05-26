"use client";

import React from "react";

import { useEffect } from "react";
import CTASection from "../components/cta-section";
import DocumentationSection from "../components/documentation-section";
import DownloadButtons from "../components/DownloadButtons";
import EffortlessIntegration from "../components/effortless-integration-updated";
import EmailComparisonSection from "../components/EmailComparisonSection";
import FAQSection from "../components/faq-section";
import AskAISection from "../components/ask-ai-section";
import FooterSection from "../components/footer-section";
import { Header } from "../components/header";
import MadeForYou from "../components/MadeForYou";
import PricingSection from "../components/pricing-section";
import SmartSimpleBrilliant from "../components/smart-simple-brilliant";
import TechCompanyMarquee from "../components/TechCompanyMarquee";
import TestimonialsSection from "../components/testimonials-section";
import WisprSwitchSection from "../components/wispr-switch-section";
import YourWorkInSync from "../components/your-work-in-sync";
import TranslationDemo from "../components/TranslationDemo";
import TwoWayExamples from "../components/two-way-examples";

// Reusable Badge Component
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

export default function HomeLanding() {
  // Handle hash navigation from other pages
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const sectionId = hash.replace("#", "");
        const element = document.getElementById(sectionId);
        if (element) {
          const offset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 100);
    }
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Does it really understand my accent?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Oravo is trained on 100+ accents from every continent. If you can speak English (even with a strong accent), Oravo understands you. And if English is hard, just speak your native language\u2014Oravo translates in real time.",
        },
      },
      {
        "@type": "Question",
        name: "Can I speak my native language and get English text?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. Speak Spanish, Hindi, Mandarin, Arabic, French, Portuguese, Russian, German, Japanese, Korean, or 20+ other languages\u2014Oravo translates to fluent, context-aware English instantly.",
        },
      },
      {
        "@type": "Question",
        name: "How is Oravo different from Wispr Flow, Willow Voice, Dragon, and other dictation tools?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "vs Wispr Flow: Similar accuracy and speed at roughly one-third the price, with Mac, Windows, and Android support. vs Willow Voice: Oravo adds context-aware tone adjustment, 60+ language translation, and better accent support for non-native speakers. vs Dragon NaturallySpeaking: About 10x cheaper, cross-platform, no training required, with smart formatting. vs Voice In or Dictation.io: Oravo works system-wide (not just Chrome), in every desktop app including Gmail, Slack, Notion, and Teams.",
        },
      },
      {
        "@type": "Question",
        name: "What apps does it work with?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Everywhere you can type: Gmail, Slack, Notion, Google Docs, Microsoft Word, Figma, VSCode, Jira, LinkedIn, WhatsApp, Teams, Salesforce\u2014literally any text field.",
        },
      },
      {
        "@type": "Question",
        name: "How does context awareness work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oravo reads which app you're using and adjusts tone, format, and structure automatically. The same sentence becomes casual in Slack, professional in Gmail, and technical in Notion\u2014without you doing anything.",
        },
      },
      {
        "@type": "Question",
        name: "Is my voice data private and secure?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We're SOC 2 Type II and HIPAA-ready. Your voice data is encrypted, never stored permanently, and not used for AI training without explicit consent. Free plan has zero data retention.",
        },
      },
      {
        "@type": "Question",
        name: "Can I try before I pay?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. You get 5,000 words free\u2014no credit card required. After that, Pro plan is $9.99/month for unlimited voice typing.",
        },
      },
      {
        "@type": "Question",
        name: "What if I speak multiple languages in one sentence?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oravo handles code-switching naturally. Speak \"I need to email the cliente about the meeting\"\u2014Oravo understands and formats correctly.",
        },
      },
    ],
  };

  return (
    <div className="w-full min-h-screen relative bg-[#F7F5F3] overflow-x-hidden flex flex-col justify-start items-center">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="relative flex flex-col justify-start items-center w-full">
        {/* Main container with proper margins */}
        <div className="w-full max-w-none px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1060px] lg:w-[1060px] relative flex flex-col justify-start items-start min-h-screen">
          {/* Left vertical line */}
          <div className="w-px h-full absolute left-4 sm:left-6 md:left-8 lg:left-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0"></div>

          {/* Right vertical line */}
          <div className="w-px h-full absolute right-4 sm:right-6 md:right-8 lg:right-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0"></div>

          <div className="self-stretch pt-[9px] overflow-hidden border-b border-[rgba(55,50,47,0.06)] flex flex-col justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-[66px] relative z-10">
            {/* Navigation */}
            <Header />

            {/* Hero Section */}
            <div className="pt-12 sm:pt-16 md:pt-20 lg:pt-[180px] pb-8 sm:pb-12 md:pb-16 flex flex-col justify-start items-center px-2 sm:px-4 md:px-8 lg:px-0 w-full sm:pl-0 sm:pr-0 pl-0 pr-0">
              <div className="w-full max-w-[937px] lg:w-[937px] flex flex-col justify-center items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                <div className="self-stretch rounded-[3px] flex flex-col justify-center items-center gap-4 sm:gap-5 md:gap-6 lg:gap-8">
                  {/* Fazier Badge */}
                  <a
                    href="https://fazier.com/launches/oravo-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                  >
                    <img
                      src="https://fazier.com/api/v1/public/badges/embed_image.svg?launch_id=6546&badge_type=daily&variant=2&theme=light"
                      width={120}
                      height={28}
                      alt="Fazier badge"
                      className="h-7"
                    />
                  </a>
                  {/* Write English 4x Faster  */}
                  <h1 className="w-full text-center text-[#37322F] text-[28px] xs:text-[32px] sm:text-[40px] md:text-[56px] lg:text-[80px] font-stretch-semi-condensed font-medium leading-[1.1] sm:leading-[1.15] md:leading-[1.2] lg:leading-24 font-serif px-4 sm:px-6 md:px-0">
                    Type 4× faster.
                    <br />
                    In every app you already use.
                  </h1>
                  <div className="w-full max-w-[720px] lg:w-[720px] text-center flex justify-center flex-col text-[rgba(55,50,47,0.80)] sm:text-lg md:text-xl leading-[1.4] sm:leading-[1.45] md:leading-[1.5] lg:leading-7 font-sans px-2 sm:px-4 md:px-0 lg:text-lg font-medium text-sm">
                    Press a hotkey, speak naturally, and Oravo writes polished
                    text — 99% accuracy, sub-300ms latency, in every app you
                    already use.
                  </div>
                </div>
              </div>
              <div
                id="download-section"
                className="mt-2 sm:mt-4 md:mt-6 lg:mt-8"
              >
                <DownloadButtons variant="hero" />
              </div>

              {/* Trust bar */}
              <div className="mt-6 sm:mt-8 flex flex-wrap justify-center items-center gap-2 px-4 sm:px-0 relative z-10">
                <span className="text-[#847971] text-xs sm:text-sm font-medium tracking-wide text-center">
                  99% accuracy · Sub-300ms latency · Works in 50+ apps ·
                  HIPAA-ready · SOC 2 Type II
                </span>
              </div>

              <div className="absolute top-[232px] sm:top-[248px] md:top-[264px] lg:top-[320px] left-1/2 transform -translate-x-1/2 z-0 pointer-events-none">
                <img
                  src="/mask-group-pattern.svg"
                  alt=""
                  className="w-[936px] sm:w-[1404px] md:w-[2106px] lg:w-[2808px] h-auto opacity-30 sm:opacity-40 md:opacity-50 mix-blend-multiply"
                  style={{
                    filter: "hue-rotate(15deg) saturate(0.7) brightness(1.2)",
                  }}
                />
              </div>

              <div className="w-full max-w-[960px] lg:w-[960px] flex flex-col justify-center items-center relative z-5 mb-8 sm:mb-12 md:mb-16 lg:mb-16">
                <EmailComparisonSection />
              </div>

              {/* Real-time Translation Section */}
              <div className="w-full border-b border-[rgba(55,50,47,0.12)] bg-gradient-to-b from-[#FFFBF7] to-[#F7F5F3]">
                <div className="self-stretch px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 flex flex-col justify-center items-center gap-8 sm:gap-10 md:gap-12">
                  <div className="w-full max-w-[800px] flex flex-col items-center gap-4 sm:gap-6 text-center">
                    <Badge
                      icon={
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#F97316"
                          strokeWidth="2"
                        >
                          <path d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                        </svg>
                      }
                      text="Real-time translation"
                    />
                    <h2 className="text-[#37322F] text-[28px] sm:text-4xl md:text-5xl font-medium leading-tight font-serif">
                      Speak Your Language.
                      <br />
                      Get Perfect English.
                    </h2>
                    <p className="text-[#605A57] text-base sm:text-lg md:text-xl font-normal leading-relaxed font-sans max-w-[640px]">
                      Speak in Spanish, get text in English &amp; vice versa.
                      Write emails in any language without learning it. Think
                      naturally, Oravo handles the rest.
                    </p>
                  </div>

                  {/* Translation Demo Animation */}
                  <div className="w-full max-w-[800px]">
                    <div className="bg-white rounded-2xl border border-[#E0DEDB] shadow-[0_4px_24px_rgba(55,50,47,0.08)] overflow-hidden">
                      <div className="w-full h-[320px] sm:h-[380px] flex items-center justify-center">
                        <TranslationDemo />
                      </div>
                    </div>
                  </div>

                  {/* Two-way Examples */}
                  <TwoWayExamples />
                </div>
              </div>

              {/* Speak once. Get finished text. */}
              <div className="w-full border-b border-[rgba(55,50,47,0.12)] bg-gradient-to-b from-[#FFFBF7] to-[#F7F5F3]">
                <div className="self-stretch px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 flex flex-col justify-center items-center gap-8 sm:gap-10 md:gap-12">
                  <div className="w-full max-w-[800px] flex flex-col items-center gap-4 sm:gap-6 text-center">
                    <h2 className="text-[#37322F] text-[28px] sm:text-4xl md:text-5xl font-medium leading-tight font-serif">
                      Speak once. Get finished text.
                    </h2>
                    <p className="text-[#605A57] text-base sm:text-lg md:text-xl font-normal leading-relaxed font-sans max-w-[640px]">
                      Oravo doesn&apos;t just transcribe. It removes filler
                      words, fixes grammar, adds punctuation, and matches the
                      tone of whatever app you&apos;re writing in —
                      automatically.
                    </p>
                  </div>

                  <div className="w-full max-w-[960px] grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                    <div className="bg-white rounded-xl border border-[#E0DEDB] p-6 sm:p-7 shadow-[0_4px_24px_rgba(55,50,47,0.06)] flex flex-col gap-3">
                      <h3 className="text-[#37322F] text-lg font-semibold leading-tight font-sans">
                        Same thought, different apps.
                      </h3>
                      <p className="text-[#605A57] text-sm leading-relaxed font-sans">
                        Oravo knows when you&apos;re in Slack vs. Gmail vs.
                        Notion, and adjusts tone and formatting to match. Casual
                        in chat. Professional in email. Structured in docs.
                      </p>
                    </div>
                    <div className="bg-white rounded-xl border border-[#E0DEDB] p-6 sm:p-7 shadow-[0_4px_24px_rgba(55,50,47,0.06)] flex flex-col gap-3">
                      <h3 className="text-[#37322F] text-lg font-semibold leading-tight font-sans">
                        No more &quot;um, like, you know.&quot;
                      </h3>
                      <p className="text-[#605A57] text-sm leading-relaxed font-sans">
                        Oravo removes filler words, fixes false starts, and
                        turns rambling thoughts into clean sentences — so what
                        comes out sounds intentional, not dictated.
                      </p>
                    </div>
                    <div className="bg-white rounded-xl border border-[#E0DEDB] p-6 sm:p-7 shadow-[0_4px_24px_rgba(55,50,47,0.06)] flex flex-col gap-3">
                      <h3 className="text-[#37322F] text-lg font-semibold leading-tight font-sans">
                        Punctuation, paragraphs, capitalization.
                      </h3>
                      <p className="text-[#605A57] text-sm leading-relaxed font-sans">
                        Bullet lists when you say &quot;three things.&quot; Line
                        breaks when you pause. Code blocks in technical contexts.
                        You never touch the keyboard to fix formatting.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Documentation Section */}
              <DocumentationSection />

              {/* Bento Grid Section - Feature Highlights */}
              <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
                {/* Header Section */}
                <div className="self-stretch px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1060px] lg:w-[1060px] pt-6 sm:pt-10 md:pt-12 pb-8 sm:pb-12 md:pb-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
                  <div className="w-full max-w-[616px] lg:w-[616px] px-4 sm:px-6 py-4 sm:py-5 shadow-[0px_2px_4px_rgba(50,45,43,0.06)] overflow-hidden rounded-lg flex flex-col justify-start items-center gap-3 sm:gap-4 shadow-none">
                    <Badge
                      icon={
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="1"
                            y="1"
                            width="4"
                            height="4"
                            stroke="#37322F"
                            strokeWidth="1"
                            fill="none"
                          />
                          <rect
                            x="7"
                            y="1"
                            width="4"
                            height="4"
                            stroke="#37322F"
                            strokeWidth="1"
                            fill="none"
                          />
                          <rect
                            x="1"
                            y="7"
                            width="4"
                            height="4"
                            stroke="#37322F"
                            strokeWidth="1"
                            fill="none"
                          />
                          <rect
                            x="7"
                            y="7"
                            width="4"
                            height="4"
                            stroke="#37322F"
                            strokeWidth="1"
                            fill="none"
                          />
                        </svg>
                      }
                      text="Feature Highlights"
                    />

                    <h2 className="w-full text-center text-[#49423D] text-[28px] sm:text-3xl md:text-4xl lg:text-5xl font-stretch-semi-condensed font-medium leading-tight md:leading-[60px] font-serif px-4">
                      Built for the way you actually work.
                    </h2>
                  </div>
                </div>

                {/* Bento Grid Content - Clean 2x2 Layout */}
                <div className="self-stretch flex justify-center items-start">
                  <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
                    {/* Left decorative pattern */}
                    <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
                      {Array.from({ length: 200 }).map((_, i) => (
                        <div
                          key={i}
                          className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-0 border-l border-r border-[rgba(55,50,47,0.12)]">
                    {/* Card 1 - AI Mode */}
                    <div className="border-b border-r-0 md:border-r border-[rgba(55,50,47,0.12)] p-6 sm:p-8 md:p-10 flex flex-col gap-5">
                      <div className="flex flex-col gap-3">
                        <h3 className="text-[#37322F] text-lg sm:text-xl font-semibold leading-tight font-sans">
                          Context-aware AI
                        </h3>
                        <p className="text-[#605A57] text-sm font-normal leading-relaxed font-sans">
                          Understands technical jargon, proper nouns from your
                          contacts, and what you&apos;re working on. Works in
                          noisy environments. 99% accuracy on everyday speech.
                        </p>
                      </div>
                      <div className="w-full h-[280px] sm:h-[320px] rounded-xl flex items-center justify-center overflow-hidden">
                        <SmartSimpleBrilliant
                          width="100%"
                          height="100%"
                          theme="light"
                          className="scale-65 sm:scale-75 md:scale-85"
                        />
                      </div>
                    </div>

                    {/* Card 2 - Auto-Format */}
                    <div className="border-b border-[rgba(55,50,47,0.12)] p-6 sm:p-8 md:p-10 flex flex-col gap-5">
                      <div className="flex flex-col gap-3">
                        <h3 className="text-[#37322F] text-lg sm:text-xl font-semibold leading-tight font-sans">
                          Auto-format as you speak
                        </h3>
                        <p className="text-[#605A57] text-sm font-normal leading-relaxed font-sans">
                          Punctuation, paragraphs, capitalization, and lists —
                          added automatically. Just speak, no voice commands
                          needed.
                        </p>
                      </div>
                      <div className="w-full h-[280px] sm:h-[320px] rounded-xl flex overflow-hidden items-center justify-center relative">
                        <YourWorkInSync
                          width="400"
                          height="280"
                          theme="light"
                          className="scale-80 sm:scale-90"
                        />
                      </div>
                    </div>

                    {/* Card 3 - Style-matching */}
                    <div className="border-b md:border-b-0 border-r-0 md:border-r border-[rgba(55,50,47,0.12)] p-6 sm:p-8 md:p-10 flex flex-col gap-5">
                      <div className="flex flex-col gap-3">
                        <h3 className="text-[#37322F] text-lg sm:text-xl font-semibold leading-tight font-sans">
                          Matches your style
                        </h3>
                        <p className="text-[#605A57] text-sm font-normal leading-relaxed font-sans">
                          Oravo learns your tone over time. Short and direct in
                          Slack. Warm and full in email. Your voice, your
                          style, every time.
                        </p>
                      </div>
                      <div className="w-full h-[280px] sm:h-[320px] rounded-xl flex overflow-hidden items-center justify-center relative bg-[#F7F5F3]">
                        {/* Style-matching visual - clean design */}
                        <div className="flex flex-col items-center gap-6 px-8 w-full max-w-[320px]">
                          {/* Input */}
                          <div className="w-full text-center">
                            <p className="text-[#847971] text-xs font-medium uppercase tracking-wider mb-2 font-sans">
                              You say
                            </p>
                            <p className="text-[#37322F] text-sm font-sans italic">
                              "tell them I'll be late"
                            </p>
                          </div>

                          {/* Arrow */}
                          <svg
                            className="w-5 h-5 text-[#847971]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={1.5}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19 14l-7 7m0 0l-7-7m7 7V3"
                            />
                          </svg>

                          {/* Outputs */}
                          <div className="w-full flex flex-col gap-3">
                            <div className="bg-white rounded-lg border border-[#E0DEDB] p-3">
                              <p className="text-[#847971] text-[10px] font-medium uppercase tracking-wider mb-1 font-sans">
                                Email
                              </p>
                              <p className="text-[#37322F] text-sm font-sans">
                                I'll be arriving shortly after the scheduled
                                time.
                              </p>
                            </div>
                            <div className="bg-white rounded-lg border border-[#E0DEDB] p-3">
                              <p className="text-[#847971] text-[10px] font-medium uppercase tracking-wider mb-1 font-sans">
                                Slack
                              </p>
                              <p className="text-[#37322F] text-sm font-sans">
                                Running a few mins late!
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Card 4 - Works Everywhere */}
                    <div className="p-6 sm:p-8 md:p-10 flex flex-col gap-5">
                      <div className="flex flex-col gap-3">
                        <h3 className="text-[#37322F] text-lg sm:text-xl font-semibold leading-tight font-sans">
                          Works in 50+ apps
                        </h3>
                        <p className="text-[#605A57] text-sm font-normal leading-relaxed font-sans">
                          Gmail, Slack, Notion, Google Docs, Word, Linear, Jira,
                          Figma, VSCode, LinkedIn — anywhere your cursor blinks,
                          Oravo types.
                        </p>
                      </div>
                      <div className="w-full h-[280px] sm:h-[320px] rounded-xl flex overflow-hidden justify-center items-center relative bg-transparent">
                        <EffortlessIntegration
                          width={400}
                          height={280}
                          className="max-w-full max-h-full"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
                    {/* Right decorative pattern */}
                    <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
                      {Array.from({ length: 200 }).map((_, i) => (
                        <div
                          key={i}
                          className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Made For You Section */}
              <MadeForYou />

              {/* Social Proof Section */}
              <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
                <div className="self-stretch px-4 sm:px-6 md:px-24 pt-6 sm:pt-10 md:pt-12 pb-8 sm:pb-12 md:pb-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
                  <div className="w-full max-w-[586px] px-4 sm:px-6 py-4 sm:py-5 shadow-[0px_2px_4px_rgba(50,45,43,0.06)] overflow-hidden rounded-lg flex flex-col justify-start items-center gap-3 sm:gap-4 shadow-none">
                    <Badge
                      icon={
                        <svg
                          width="12"
                          height="10"
                          viewBox="0 0 12 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="1"
                            y="3"
                            width="4"
                            height="6"
                            stroke="#37322F"
                            strokeWidth="1"
                            fill="none"
                          />
                          <rect
                            x="7"
                            y="1"
                            width="4"
                            height="8"
                            stroke="#37322F"
                            strokeWidth="1"
                            fill="none"
                          />
                          <rect
                            x="2"
                            y="4"
                            width="1"
                            height="1"
                            fill="#37322F"
                          />
                          <rect
                            x="3.5"
                            y="4"
                            width="1"
                            height="1"
                            fill="#37322F"
                          />
                          <rect
                            x="2"
                            y="5.5"
                            width="1"
                            height="1"
                            fill="#37322F"
                          />
                          <rect
                            x="3.5"
                            y="5.5"
                            width="1"
                            height="1"
                            fill="#37322F"
                          />
                          <rect
                            x="8"
                            y="2"
                            width="1"
                            height="1"
                            fill="#37322F"
                          />
                          <rect
                            x="9.5"
                            y="2"
                            width="1"
                            height="1"
                            fill="#37322F"
                          />
                          <rect
                            x="8"
                            y="3.5"
                            width="1"
                            height="1"
                            fill="#37322F"
                          />
                          <rect
                            x="9.5"
                            y="3.5"
                            width="1"
                            height="1"
                            fill="#37322F"
                          />
                          <rect
                            x="8"
                            y="5"
                            width="1"
                            height="1"
                            fill="#37322F"
                          />
                          <rect
                            x="9.5"
                            y="5"
                            width="1"
                            height="1"
                            fill="#37322F"
                          />
                        </svg>
                      }
                      text="Used by professionals at"
                    />
                    <h2 className="w-full text-center text-[#49423D] text-[28px] sm:text-3xl md:text-4xl lg:text-5xl font-stretch-semi-condensed font-medium leading-tight md:leading-[60px] font-serif px-4">
                      Used by professionals at
                    </h2>
                    <div className="self-stretch text-center text-[#605A57] text-sm sm:text-base font-normal leading-6 sm:leading-7 font-sans">
                      Trusted by founders, writers, developers, and teams
                      <br className="hidden sm:block" />
                      who work in English every day.
                    </div>
                  </div>
                </div>

                {/* Tech Company Marquee */}
                <TechCompanyMarquee />
              </div>

              {/* Testimonials Section */}
              <TestimonialsSection />

              {/* Pricing Section */}
              <PricingSection />

              <WisprSwitchSection />

              {/* FAQ Section */}
              <FAQSection />

              {/* Ask AI Section */}
              <AskAISection />

              {/* CTA Section */}
              <CTASection />

              {/* Footer Section */}
              <FooterSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


"use client";

import React from "react";
import dynamic from "next/dynamic";

import { useEffect } from "react";
import CTASection from "../components/cta-section";
import DownloadButtons from "../components/DownloadButtons";
import LandingAnalytics from "../components/LandingAnalytics";
import EmailComparisonSection from "../components/EmailComparisonSection";
import { Header } from "../components/header";


const DocumentationSection = dynamic(() => import("../components/documentation-section"));
const EffortlessIntegration = dynamic(() => import("../components/effortless-integration-updated"));
const FAQSection = dynamic(() => import("../components/faq-section"));
const AskAISection = dynamic(() => import("../components/ask-ai-section"));
const FooterSection = dynamic(() => import("../components/footer-section"));
const MadeForYou = dynamic(() => import("../components/MadeForYou"));
const PricingSection = dynamic(() => import("../components/pricing-section"));
const SmartSimpleBrilliant = dynamic(() => import("../components/smart-simple-brilliant"));
const TechCompanyMarquee = dynamic(() => import("../components/TechCompanyMarquee"));
const TestimonialsSection = dynamic(() => import("../components/testimonials-section"));
const WisprSwitchSection = dynamic(() => import("../components/wispr-switch-section"));
const YourWorkInSync = dynamic(() => import("../components/your-work-in-sync"));
const TranslationDemo = dynamic(() => import("../components/TranslationDemo"));
const TwoWayExamples = dynamic(() => import("../components/two-way-examples"));

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

export default function HomeLanding({ blogSection }: { blogSection?: React.ReactNode }) {
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
          text: "Oravo is built for multilingual speakers and strong accents. We are running the same-script benchmark across five accent and language cohorts so you can inspect the method and results.",
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
          text: "Oravo focuses on multilingual voice typing, polished output, and accent-friendly workflows on Mac, Windows, and Android. Compare current platform support, features, and pricing for your needs.",
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
          text: "Check Oravo's current privacy policy for exact details about voice processing, retention, and third-party services.",
        },
      },
      {
        "@type": "Question",
        name: "Can I try before I pay?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Current trial and pricing details are shown in the app at signup.",
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
      <LandingAnalytics variant="accent-proof-v1" />
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
            <div className="pt-36 sm:pt-36 md:pt-20 lg:pt-[180px] pb-8 sm:pb-12 md:pb-16 flex flex-col justify-start items-center px-2 sm:px-4 md:px-8 lg:px-0 w-full sm:pl-0 sm:pr-0 pl-0 pr-0">
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
                    Speak naturally.
                    <br />
                    Send polished English.
                  </h1>
                  <div className="w-full max-w-[720px] lg:w-[720px] text-center flex justify-center flex-col text-[rgba(55,50,47,0.80)] sm:text-lg md:text-xl leading-[1.4] sm:leading-[1.45] md:leading-[1.5] lg:leading-7 font-sans px-2 sm:px-4 md:px-0 lg:text-lg font-medium text-sm">
                    Speak Hindi, Spanish, or your first language. Oravo turns
                    your words into polished English in the apps where you work.
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
                  60+ languages · Mac, Windows, and Android · Accent benchmark in progress
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

              {/* Accent proof wedge */}
              <section className="w-full border-y border-[rgba(55,50,47,0.12)] bg-white" aria-labelledby="accent-proof-heading">
                <div className="px-5 sm:px-8 md:px-12 py-12 sm:py-16 grid gap-8 md:grid-cols-[1.1fr_0.9fr] items-center">
                  <div className="flex flex-col items-start gap-4">
                    <Badge
                      icon={<span className="text-[#F97316] text-xs" aria-hidden="true">●</span>}
                      text="Accent proof, not vague claims"
                    />
                    <h2 id="accent-proof-heading" className="text-[#37322F] text-[30px] sm:text-4xl md:text-5xl font-medium leading-tight font-serif">
                      Built for real accents. Measured with the same script.
                    </h2>
                    <p className="text-[#605A57] text-base sm:text-lg leading-relaxed font-sans max-w-[620px]">
                      We are testing Oravo end to end across Hindi-accented English, Spanish-accented English, Hindi and Spanish speech to polished English, plus a native-English control.
                    </p>
                    <p className="text-[#847971] text-sm leading-relaxed font-sans max-w-[620px]">
                      The report will separate raw transcription from polished output and publish sample sizes, corrections, meaning errors, and time to final text. Until then, we will not turn an upstream model benchmark into an Oravo accuracy claim.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-[#E0DEDB] bg-[#FFF9F4] p-5 sm:p-6 shadow-[0_8px_28px_rgba(55,50,47,0.06)]">
                    <p className="text-[#847971] text-xs font-semibold uppercase tracking-[0.14em] mb-4">Pilot scorecard</p>
                    <ul className="grid gap-3 text-[#37322F] text-sm sm:text-base font-sans">
                      <li className="flex gap-3"><span className="text-[#F97316]">01</span><span>Same audio and scripts across cohorts</span></li>
                      <li className="flex gap-3"><span className="text-[#F97316]">02</span><span>Raw transcript and final output scored separately</span></li>
                      <li className="flex gap-3"><span className="text-[#F97316]">03</span><span>Corrections, meaning errors, and time reported</span></li>
                      <li className="flex gap-3"><span className="text-[#F97316]">04</span><span>Failure cases included, not only the best demos</span></li>
                    </ul>
                    <p className="mt-5 pt-4 border-t border-[#E9DED5] text-[#605A57] text-xs leading-relaxed">Pilot target: at least 10 speakers per cohort and 10 utterances per speaker before any strong accuracy claim.</p>
                  </div>
                </div>
              </section>

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
                          multilingual speech and professional vocabulary. Benchmark results will be published with the method and sample sizes.
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
                          Works where you write
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

              {/* Latest Articles Section (Server Component Slot) */}
              {blogSection}

              {/* Footer Section */}
              <FooterSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

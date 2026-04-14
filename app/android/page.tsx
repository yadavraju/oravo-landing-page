"use client";

import React from "react";
import { Header } from "@/components/header";
import FooterSection from "@/components/footer-section";

function FeatureItem({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-[#37322F] text-lg font-semibold font-sans">{title}</h3>
      <p className="text-[#605A57] text-sm font-normal leading-relaxed font-sans">{description}</p>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = React.useState(false);
  
  return (
    <div className="border-b border-[#E0DEDB] last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 flex items-center justify-between text-left"
      >
        <span className="text-[#37322F] text-base font-semibold font-sans pr-4">{question}</span>
        <svg
          className={`w-5 h-5 text-[#605A57] transition-transform flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="pb-5">
          <p className="text-[#605A57] text-sm leading-relaxed font-sans">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function AndroidPage() {
  const accentColor = "#F97316";

  return (
    <div className="w-full min-h-screen relative bg-[#F7F5F3] overflow-x-hidden flex flex-col justify-start items-center">
      <div className="relative flex flex-col justify-start items-center w-full">
        <div className="w-full max-w-none px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1060px] lg:w-[1060px] relative flex flex-col justify-start items-start min-h-screen">
          {/* Left vertical line */}
          <div className="w-px h-full absolute left-4 sm:left-6 md:left-8 lg:left-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0"></div>
          {/* Right vertical line */}
          <div className="w-px h-full absolute right-4 sm:right-6 md:right-8 lg:right-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0"></div>

          <div className="self-stretch pt-[9px] overflow-hidden border-b border-[rgba(55,50,47,0.06)] flex flex-col justify-center items-center relative z-10">
            <Header />

            {/* Hero Section */}
            <div className="w-full pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 md:px-8">
              <div className="max-w-[1000px] mx-auto">
                <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                  {/* Left Content */}
                  <div className="flex flex-col gap-6 md:gap-8 order-2 md:order-1">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded bg-[#3DDC84] flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z"/>
                        </svg>
                      </div>
                      <span className="text-[#37322F] text-sm font-semibold font-sans">Now on Android</span>
                    </div>

                    <h1 className="text-[#37322F] text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-medium leading-[1.1] font-serif">
                      Stop translating in your head.
                      <span className="text-[#F97316] font-semibold"> Just speak.</span>
                    </h1>

                    <p className="text-[#605A57] text-lg md:text-xl leading-relaxed font-sans max-w-[480px]">
                      Voice-to-text that turns messy speech into ready-to-send text in any app. Works system-wide on Android.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a
                        href="https://play.google.com/store/apps/details?id=ai.oravo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block hover:opacity-90 transition-opacity"
                      >
                        <img
                          src="/playstore.png"
                          alt="Get it on Google Play"
                          className="h-14"
                        />
                      </a>
                    </div>

                    <p className="text-[#847971] text-sm font-sans">
                      Free + unlimited during launch
                    </p>
                  </div>

                  {/* Right Content - Phone Mockup with Wave Animation */}
                  <div className="order-1 md:order-2 flex justify-center">
                    <div className="relative">
                      {/* Phone Frame */}
                      <div className="relative bg-[#1a1a1a] rounded-[45px] p-[6px] shadow-2xl">
                        <div className="bg-black rounded-[40px] overflow-hidden w-[280px] sm:w-[300px]">
                          {/* Phone Screen - LinkedIn Post Image */}
                          <img
                            src="/phone_linkedin_hero.png"
                            alt="Oravo voice typing on LinkedIn"
                            className="w-full h-auto"
                          />
                        </div>
                        
                        {/* Notch/Dynamic Island */}
                        <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full"></div>
                      </div>
                      
                      {/* Floating Wave Animation - Listening Indicator */}
                      <div className="absolute -right-16 top-1/3 animate-float-slow">
                        <div className="bg-[#1a1a1a] rounded-2xl px-4 py-3 shadow-xl border border-gray-800/50">
                          <div className="flex items-center gap-2 mb-1">
                            <div className="w-2 h-2 bg-[#F97316] rounded-full animate-pulse"></div>
                            <span className="text-xs text-gray-400">Listening...</span>
                          </div>
                          <div className="flex items-center justify-center gap-[2px]">
                            {[...Array(7)].map((_, i) => (
                              <div
                                key={i}
                                className="w-[3px] bg-[#F97316] rounded-full animate-wave"
                                style={{
                                  height: '16px',
                                  animationDelay: `${i * 0.08}s`,
                                }}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      {/* Floating Voice Bubble - Left side */}
                      <div className="absolute -left-14 top-1/2 animate-float-delayed hidden md:block">
                        <div className="bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2 shadow-lg border border-gray-200/50">
                          <div className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-[#F97316]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                            </svg>
                            <span className="text-xs font-medium text-gray-700">Speak now</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Floating "Perfect grammar" pill - bottom left */}
                      <div className="absolute -left-8 bottom-20 animate-bounce-slow hidden md:block">
                        <div className="bg-green-50 rounded-full px-3 py-1.5 shadow-md border border-green-200/50">
                          <span className="text-xs font-medium text-green-700">✓ Perfect grammar</span>
                        </div>
                      </div>
                      
                      {/* Glow Effect */}
                      <div className="absolute -inset-8 bg-gradient-to-r from-[#F97316]/15 via-[#F97316]/10 to-[#F97316]/15 rounded-[60px] blur-3xl -z-10"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Section - Animated Layout */}
          <section className="w-full py-16 md:py-24 border-b border-[rgba(55,50,47,0.12)] overflow-hidden">
            <div className="max-w-[1100px] mx-auto px-4 sm:px-6 md:px-8">
              <div className="text-center mb-16">
                <h2 className="text-[#37322F] text-[28px] sm:text-3xl md:text-4xl font-medium leading-tight font-serif">
                  Turn your voice into <span className="italic text-[#F97316]">polished</span> text
                </h2>
                <p className="text-[#605A57] text-base md:text-lg font-sans mt-4 max-w-[500px] mx-auto">
                  Just speak the way you think. Oravo turns it into writing you can send.
                </p>
              </div>

              {/* Animated Features Layout */}
              <div className="relative flex items-center justify-center min-h-[600px] md:min-h-[700px]">
                {/* Center Phone Mockup */}
                <div className="relative z-10">
                  <img
                    src="/linked_typing.png"
                    alt="Oravo in action"
                    className="w-[280px] sm:w-[320px] md:w-[360px] h-auto drop-shadow-2xl"
                  />
                </div>

                {/* Top Left Feature */}
                <div className="absolute top-0 left-0 md:left-8 lg:left-16 max-w-[200px] animate-float-slow">
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="w-16 h-16 rounded-2xl bg-[#FFF7ED] border border-[#FDBA74] flex items-center justify-center">
                      <svg className="w-8 h-8 text-[#F97316]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
                      </svg>
                    </div>
                    <h3 className="text-[#37322F] text-sm font-semibold font-sans">Use it anywhere<br />you write</h3>
                    <p className="text-[#847971] text-xs font-sans">Oravo works wherever you're already typing.</p>
                  </div>
                </div>

                {/* Top Right Feature */}
                <div className="absolute top-0 right-0 md:right-8 lg:right-16 max-w-[200px] animate-float-delayed">
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="w-16 h-16 rounded-2xl bg-[#ECFDF5] border border-[#6EE7B7] flex items-center justify-center">
                      <svg className="w-8 h-8 text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
                      </svg>
                    </div>
                    <h3 className="text-[#37322F] text-sm font-semibold font-sans">100+<br />languages</h3>
                    <p className="text-[#847971] text-xs font-sans">Speak naturally in the language you prefer.</p>
                  </div>
                </div>

                {/* Bottom Left Feature */}
                <div className="absolute bottom-0 left-0 md:left-8 lg:left-16 max-w-[200px] animate-float-delayed">
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="w-16 h-16 rounded-2xl bg-[#FDF4FF] border border-[#E879F9] flex items-center justify-center">
                      <div className="flex gap-1">
                        <div className="w-6 h-6 rounded bg-[#7C3AED] flex items-center justify-center">
                          <span className="text-white text-[8px] font-bold">S</span>
                        </div>
                        <div className="w-6 h-6 rounded bg-[#EC4899] flex items-center justify-center">
                          <span className="text-white text-[8px] font-bold">Z</span>
                        </div>
                        <div className="w-6 h-6 rounded bg-[#F59E0B] flex items-center justify-center">
                          <span className="text-white text-[8px] font-bold">N</span>
                        </div>
                      </div>
                    </div>
                    <h3 className="text-[#37322F] text-sm font-semibold font-sans">Keep talking as you<br />move between apps</h3>
                    <p className="text-[#847971] text-xs font-sans">Oravo keeps up, even as you switch apps.</p>
                  </div>
                </div>

                {/* Bottom Right Feature */}
                <div className="absolute bottom-0 right-0 md:right-8 lg:right-16 max-w-[200px] animate-float-slow">
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="w-16 h-16 rounded-2xl bg-[#FEF3C7] border border-[#FCD34D] flex items-center justify-center">
                      <svg className="w-8 h-8 text-[#F59E0B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                      </svg>
                    </div>
                    <h3 className="text-[#37322F] text-sm font-semibold font-sans">Oravo edits as<br />you speak</h3>
                    <p className="text-[#847971] text-xs font-sans">Clean, formatted text without extra effort.</p>
                  </div>
                </div>

                {/* Decorative curved arrows - hidden on mobile */}
                <svg className="absolute top-16 left-[22%] w-12 h-12 text-[#E0DEDB] hidden lg:block animate-bounce-slow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1}>
                  <path d="M4 12c0-4.4 3.6-8 8-8" strokeLinecap="round" />
                  <path d="M12 4l-2-2m2 2l2-2" strokeLinecap="round" />
                </svg>
                <svg className="absolute top-16 right-[22%] w-12 h-12 text-[#E0DEDB] hidden lg:block animate-bounce-slow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1}>
                  <path d="M20 12c0-4.4-3.6-8-8-8" strokeLinecap="round" />
                  <path d="M12 4l2-2m-2 2l-2-2" strokeLinecap="round" />
                </svg>
                <svg className="absolute bottom-16 left-[22%] w-12 h-12 text-[#E0DEDB] hidden lg:block animate-bounce-slow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1}>
                  <path d="M4 12c0 4.4 3.6 8 8 8" strokeLinecap="round" />
                  <path d="M12 20l-2 2m2-2l2 2" strokeLinecap="round" />
                </svg>
                <svg className="absolute bottom-16 right-[22%] w-12 h-12 text-[#E0DEDB] hidden lg:block animate-bounce-slow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1}>
                  <path d="M20 12c0 4.4-3.6 8-8 8" strokeLinecap="round" />
                  <path d="M12 20l2 2m-2-2l-2 2" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </section>

          {/* Works Everywhere Section */}
          <section className="w-full py-16 md:py-20 border-b border-[rgba(55,50,47,0.12)]">
            <div className="max-w-[900px] mx-auto px-4 sm:px-6 md:px-8">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div>
                  <h2 className="text-[#37322F] text-[28px] sm:text-3xl md:text-4xl font-medium leading-tight font-serif mb-4">
                    Type in <span className="italic text-[#F97316]">Any App.</span><br />Just Speak.
                  </h2>
                  <p className="text-[#605A57] text-base md:text-lg font-sans mb-6">
                    Slack, Email, LinkedIn, WhatsApp — Oravo types wherever you do.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Email", "Slack", "LinkedIn", "WhatsApp", "Notion", "Gmail"].map((app) => (
                      <span key={app} className="px-3 py-1.5 bg-white border border-[#E0DEDB] rounded-full text-sm text-[#605A57] font-sans">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex justify-center">
                  <img
                    src="/phone_02_apps.png"
                    alt="Oravo works in any app"
                    className="w-full max-w-[450px] h-auto"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Comparison Section */}
          <section className="w-full py-16 md:py-20 border-b border-[rgba(55,50,47,0.12)]">
            <div className="max-w-[900px] mx-auto px-4 sm:px-6 md:px-8">
              <div className="text-center mb-12">
                <h2 className="text-[#37322F] text-[28px] sm:text-3xl md:text-4xl font-medium leading-tight font-serif">
                  Oravo vs. built-in voice mode
                </h2>
                <p className="text-[#605A57] text-base md:text-lg font-sans mt-4 max-w-[500px] mx-auto">
                  Oravo cleans up your text while you talk, so you can just speak it and send it.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Oravo Card */}
                <div className="bg-white rounded-2xl border border-[#E0DEDB] p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-[#F97316] flex items-center justify-center">
                      <span className="text-white font-bold text-sm">O</span>
                    </div>
                    <h3 className="text-[#37322F] text-lg font-semibold font-sans">Oravo</h3>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    {[
                      "Polishes speech in real time",
                      "Adapts as you rethink or rephrase",
                      "Formats text automatically",
                      "Removes filler words (um, like)",
                      "Translates to English instantly",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-[#16A34A] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-[#37322F] text-sm font-sans">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-[#F7F5F3] rounded-lg p-4">
                    <p className="text-[#37322F] text-sm font-sans leading-relaxed">
                      "Hey Sarah, there are three things Oravo does really well: it's fast, accurate, and fixes your mistakes automatically."
                    </p>
                  </div>
                </div>

                {/* Other Dictation Card */}
                <div className="bg-white rounded-2xl border border-[#E0DEDB] p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-[#E0DEDB] flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#605A57]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
                      </svg>
                    </div>
                    <h3 className="text-[#605A57] text-lg font-semibold font-sans">Other Dictation</h3>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    {[
                      "Captures exactly what you say, mistakes included",
                      "Gets messy when you change your mind",
                      "Outputs plain text with minimal formatting",
                      "Keeps all filler words",
                      "No translation support",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-[#DC2626] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <span className="text-[#605A57] text-sm font-sans">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-[#F7F5F3] rounded-lg p-4">
                    <p className="text-[#605A57] text-sm font-sans leading-relaxed">
                      "hey sarah umm there are two no wait actually three things oravo does really well its fast its accurate and uh it fixes your mistakes"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Use Cases Section */}
          <section className="w-full py-16 md:py-20 border-b border-[rgba(55,50,47,0.12)]">
            <div className="max-w-[800px] mx-auto px-4 sm:px-6 md:px-8">
              <div className="text-center mb-12">
                <h2 className="text-[#37322F] text-[28px] sm:text-3xl md:text-4xl font-medium leading-tight font-serif">
                  How people use Oravo
                </h2>
              </div>

              <div className="grid sm:grid-cols-3 gap-6">
                {[
                  {
                    title: "Keep up with messages",
                    description: "Respond quickly without typing or reworking your words.",
                  },
                  {
                    title: "Draft polished emails",
                    description: "Dictate emails that sound professional and ready to send.",
                  },
                  {
                    title: "Capture notes & to-dos",
                    description: "Jot down ideas the moment they come to you. No keyboard required.",
                  },
                ].map((item, i) => (
                  <div key={i} className="bg-white rounded-xl border border-[#E0DEDB] p-6">
                    <h3 className="text-[#37322F] text-base font-semibold font-sans mb-2">{item.title}</h3>
                    <p className="text-[#605A57] text-sm font-sans">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="w-full py-16 md:py-20 border-b border-[rgba(55,50,47,0.12)]">
            <div className="max-w-[700px] mx-auto px-4 sm:px-6 md:px-8">
              <div className="text-center mb-12">
                <h2 className="text-[#37322F] text-[28px] sm:text-3xl md:text-4xl font-medium leading-tight font-serif">
                  Frequently asked
                </h2>
              </div>

              <div className="bg-white rounded-2xl border border-[#E0DEDB] px-6">
                <FAQItem
                  question="What devices and Android versions are supported?"
                  answer="Oravo supports Android OS 13 or newer on phones and tablets from all major manufacturers. While Oravo supports tablets and foldables, the experience is optimized for phones."
                />
                <FAQItem
                  question="How much does Oravo for Android cost?"
                  answer="Unlimited dictation on Android is free for all users at launch. Pro features will be available on our paid plans in the future."
                />
                <FAQItem
                  question="Which features are available on Android at launch?"
                  answer="Android supports the core Oravo experience including: unlimited dictation, auto punctuation, filler word removal, self-corrections, numbered lists, and 100+ languages with real-time translation."
                />
                <FAQItem
                  question="What languages does Oravo support?"
                  answer="Oravo supports 100+ languages including Spanish, Portuguese, French, Italian, Hindi, Chinese, Japanese, Korean, Russian, Arabic, and more. For best results, we recommend selecting your preferred language(s) in Settings."
                />
                <FAQItem
                  question="Does Oravo work offline?"
                  answer="No. Oravo requires an internet connection to transcribe and translate your speech using our fastest AI models."
                />
                <FAQItem
                  question="Does Oravo replace my Android keyboard?"
                  answer="No. Oravo works alongside your existing keyboard as a floating bubble. You can type normally at any time."
                />
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="w-full py-16 md:py-20">
            <div className="max-w-[700px] mx-auto px-4 sm:px-6 md:px-8">
              <div
                className="rounded-3xl p-8 md:p-12 text-center"
                style={{
                  background: accentColor,
                  boxShadow: "0 8px 48px rgba(249, 115, 22, 0.25)",
                }}
              >
                <h2 className="text-white text-2xl md:text-4xl font-medium font-serif mb-4">
                  Write with your voice on Android
                </h2>
                <p className="text-white/90 text-base md:text-lg leading-relaxed font-sans mb-8">
                  Download Oravo and turn speech into clear writing wherever you are.
                </p>
                <a
                  href="https://play.google.com/store/apps/details?id=ai.oravo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block hover:opacity-90 transition-opacity"
                >
                  <img
                    src="/playstore.png"
                    alt="Get it on Google Play"
                    className="h-14 mx-auto"
                  />
                </a>
                <p className="text-white/70 text-sm font-sans mt-6">
                  No setup required. Works wherever you can type.
                </p>
              </div>
            </div>
          </section>

          <FooterSection />
        </div>
      </div>
    </div>
  );
}

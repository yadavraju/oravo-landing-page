"use client";

import Link from "next/link";

export default function WisprSwitchSection() {
  return (
    <section
      className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center bg-[#F7F5F3]"
      aria-labelledby="wispr-switch-heading"
    >
      <div className="self-stretch px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1060px] lg:w-[1060px] pt-12 md:pt-16 pb-12 md:pb-16 flex flex-col justify-center items-center gap-8">
        <div className="w-full max-w-[616px] flex flex-col justify-start items-center gap-3 sm:gap-4 text-center px-4">
          <h2
            id="wispr-switch-heading"
            className="text-[#49423D] text-[28px] sm:text-3xl md:text-4xl lg:text-5xl font-stretch-semi-condensed font-medium leading-tight md:leading-[60px] font-serif"
          >
            Why switch from Wispr Flow?
          </h2>
          <p className="text-[#605A57] text-base sm:text-lg font-normal leading-relaxed font-sans max-w-[560px]">
            Same accuracy. Better coverage. A third of the price.
          </p>
        </div>

        <div className="w-full max-w-[960px] grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 px-4 sm:px-6">
          <div className="bg-white rounded-xl border border-[#E0DEDB] p-6 sm:p-7 shadow-[0_4px_24px_rgba(55,50,47,0.06)] flex flex-col gap-3">
            <h3 className="text-[#37322F] text-lg font-semibold leading-tight font-sans">
              Same accuracy, 1/3 the price
            </h3>
            <p className="text-[#605A57] text-sm leading-relaxed font-sans">
              99% accuracy, sub-300ms latency. Wispr charges $15/month for the
              same speed. Oravo is $9.99 — or $99/year.
            </p>
          </div>
          <div className="bg-white rounded-xl border border-[#E0DEDB] p-6 sm:p-7 shadow-[0_4px_24px_rgba(55,50,47,0.06)] flex flex-col gap-3">
            <h3 className="text-[#37322F] text-lg font-semibold leading-tight font-sans">
              Real translation, not just dictation
            </h3>
            <p className="text-[#605A57] text-sm leading-relaxed font-sans">
              Speak in 60+ languages — Spanish, Hindi, Mandarin, Arabic — and
              get polished English where your cursor is. Two-way, in real time.
            </p>
          </div>
          <div className="bg-white rounded-xl border border-[#E0DEDB] p-6 sm:p-7 shadow-[0_4px_24px_rgba(55,50,47,0.06)] flex flex-col gap-3">
            <h3 className="text-[#37322F] text-lg font-semibold leading-tight font-sans">
              Custom vocabulary on free tier
            </h3>
            <p className="text-[#605A57] text-sm leading-relaxed font-sans">
              Add proper nouns, technical terms, and client names — even on the
              free plan. Wispr locks this behind Pro.
            </p>
          </div>
        </div>

        <div className="px-4">
          <Link
            href="/compare/wispr-flow"
            className="text-[#37322F] text-sm font-semibold font-sans underline underline-offset-4 hover:text-[#1877F2] transition-colors"
          >
            See full comparison →
          </Link>
        </div>
      </div>
    </section>
  );
}

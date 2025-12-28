"use client";

import DownloadButtons from "./DownloadButtons";

export default function CTASection() {
  return (
    <div className="w-full relative overflow-hidden flex flex-col justify-center items-center gap-2">
      {/* Content */}
      <div className="self-stretch px-6 md:px-24 py-12 md:py-12 border-t border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6 relative z-10">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div className="w-full h-full relative">
            {Array.from({ length: 300 }).map((_, i) => (
              <div
                key={i}
                className="absolute h-4 w-full rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                style={{
                  top: `${i * 16 - 120}px`,
                  left: "-100%",
                  width: "300%",
                }}
              ></div>
            ))}
          </div>
        </div>

        <div className="w-full max-w-[586px] px-6 py-5 md:py-8 overflow-hidden rounded-lg flex flex-col justify-start items-center gap-6 relative z-20">
          <div className="self-stretch flex flex-col justify-start items-start gap-3">
            <div className="self-stretch rounded-[3px] flex flex-col justify-center items-center gap-4 sm:gap-5 md:gap-6 lg:gap-8">
              <h2 className="w-full text-center text-[#37322F] text-[28px] sm:text-[36px] md:text-[52px] lg:text-[80px] font-stretch-semi-condensed font-medium leading-[1.1] sm:leading-[1.15] md:leading-[1.2] lg:leading-24 font-serif px-4 sm:px-6 md:px-0">
                4x faster than typing
              </h2>
            </div>
            <div className="self-stretch text-center text-[#605A57] text-base leading-7 font-sans font-medium">
              Try in your next email, Slack, AI prompt
              <br />
              it's free and kinda magic ✨.
            </div>
          </div>
          <DownloadButtons />
        </div>
      </div>
    </div>
  );
}

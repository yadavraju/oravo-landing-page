import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import FooterSection from "@/components/footer-section";

export const metadata: Metadata = {
  title: "Page Not Found | Oravo",
  description: "The page you're looking for doesn't exist. Explore Oravo's AI voice typing and dictation features instead.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="w-full min-h-screen relative bg-[#F7F5F3] overflow-x-hidden flex flex-col justify-start items-center">
      <div className="relative flex flex-col justify-start items-center w-full">
        <div className="w-full max-w-none px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1060px] lg:w-[1060px] relative flex flex-col justify-start items-start min-h-screen">
          <div className="w-[1px] h-full absolute left-4 sm:left-6 md:left-8 lg:left-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0" />
          <div className="w-[1px] h-full absolute right-4 sm:right-6 md:right-8 lg:right-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0" />

          <Header />

          <main className="flex-1 w-full mt-20 md:mt-24 lg:mt-28 relative z-10 flex items-center justify-center">
            <div className="px-6 md:px-12 py-20 md:py-32 text-center max-w-[600px] mx-auto">
              <div className="text-[#847971] text-8xl md:text-[160px] font-medium font-serif leading-none mb-6">
                404
              </div>
              <h1 className="text-[#37322F] text-2xl md:text-4xl font-normal font-serif mb-4">
                Page not found
              </h1>
              <p className="text-[#605A57] text-base md:text-lg leading-relaxed font-sans mb-8">
                The page you're looking for doesn't exist or has been moved. Let's get you back on track.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/"
                  className="group relative h-12 px-8 bg-gradient-to-b from-[#1877F2] to-[#166FE5] hover:from-[#1570E8] hover:to-[#1466D8] shadow-[0px_0px_0px_2.5px_rgba(255,255,255,0.08)_inset,0px_4px_12px_rgba(24,119,242,0.4)] overflow-hidden rounded-full flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/10 pointer-events-none"></div>
                  <span className="text-white text-base font-medium leading-5 font-sans relative z-10">
                    Go Home
                  </span>
                </Link>
                <Link
                  href="/download"
                  className="group relative h-12 px-8 bg-gradient-to-b from-white to-gray-100 hover:from-gray-50 hover:to-gray-200 shadow-[0px_0px_0px_2.5px_rgba(0,0,0,0.05)_inset,0px_4px_12px_rgba(0,0,0,0.1)] overflow-hidden rounded-full flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95 border border-gray-200"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-black/5 pointer-events-none"></div>
                  <span className="text-gray-800 text-base font-medium leading-5 font-sans relative z-10">
                    Download Oravo
                  </span>
                </Link>
              </div>
            </div>
          </main>

          <FooterSection />
        </div>
      </div>
    </div>
  );
}

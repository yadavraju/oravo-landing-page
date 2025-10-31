"use client";

import { useState } from "react";
import Logo from "./Logo";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full h-12 sm:h-14 md:h-16 lg:h-[84px] absolute left-0 top-0 flex justify-center items-center z-20 px-6 sm:px-8 md:px-12 lg:px-0">
      <div className="w-full h-0 absolute left-0 top-6 sm:top-7 md:top-8 lg:top-[42px] border-t border-[rgba(55,50,47,0.12)] shadow-[0px_1px_0px_white]"></div>

      <div className="w-full max-w-[calc(100%-32px)] sm:max-w-[calc(100%-48px)] md:max-w-[calc(100%-64px)] lg:max-w-[700px] lg:w-[700px] h-10 sm:h-11 md:h-12 py-1.5 sm:py-2 px-3 sm:px-4 md:px-4 pr-2 sm:pr-3 bg-[#F7F5F3] backdrop-blur-sm shadow-[0px_0px_0px_2px_white] overflow-visible rounded-[50px] flex justify-between items-center relative z-30">
        <div className="flex justify-center items-center">
          <a href="/" className="flex justify-start items-center gap-1">
            <Logo />
            <div className="flex flex-col justify-center text-[#2F3037] text-sm sm:text-base md:text-lg lg:text-xl font-semibold leading-5 font-sans">
              oravo
            </div>
          </a>
          {/* Desktop Navigation Links */}
          <div className="pl-3 sm:pl-4 md:pl-5 lg:pl-5 justify-start items-start hidden sm:flex flex-row gap-2 sm:gap-3 md:gap-4 lg:gap-4">
            <a href="/#made-for-you" className="flex justify-start items-center">
              <div className="flex flex-col justify-center text-[rgba(49,45,43,0.80)] text-xs md:text-[13px] font-semibold leading-[14px] font-sans hover:text-[#37322F] transition-colors">
                Products
              </div>
            </a>
            <a href="/#pricing-section" className="flex justify-start items-center">
              <div className="flex flex-col justify-center text-[rgba(49,45,43,0.80)] text-xs md:text-[13px] font-semibold leading-[14px] font-sans hover:text-[#37322F] transition-colors">
                Pricing
              </div>
            </a>
            <a href="/#made-for-you" className="flex justify-start items-center">
              <div className="flex flex-col justify-center text-[rgba(49,45,43,0.80)] text-xs md:text-[13px] font-semibold leading-[14px] font-sans hover:text-[#37322F] transition-colors">
                Business
              </div>
            </a>
          </div>
        </div>
        <div className="h-6 sm:h-7 md:h-8 flex justify-start items-start gap-2 sm:gap-3">
          {/* Hamburger Menu Button - Mobile Only */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="sm:hidden w-8 h-8 flex flex-col justify-center items-center gap-1 cursor-pointer"
            aria-label="Toggle menu"
          >
            <span className={`w-4 h-0.5 bg-[#37322F] transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`w-4 h-0.5 bg-[#37322F] transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-4 h-0.5 bg-[#37322F] transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>

          {/* Download Button */}
          <a
            href="/#download-section"
            className="px-2 sm:px-3 md:px-[14px] py-1 sm:py-[6px] bg-gradient-to-b from-[#6366F1] to-[#4F46E5] hover:from-[#5558E3] hover:to-[#4338CA] shadow-[0px_0px_0px_2.5px_rgba(255,255,255,0.08)_inset,0px_4px_12px_rgba(99,102,241,0.4)] overflow-hidden rounded-full flex justify-center items-center transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <div className="flex flex-col justify-center text-[#FFF] text-xs md:text-[13px] font-medium leading-5 font-sans">
              Download
            </div>
          </a>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-[#F7F5F3] backdrop-blur-sm shadow-[0px_0px_0px_2px_white] rounded-2xl p-4 flex flex-col gap-3 sm:hidden">
            <a
              href="/#made-for-you"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[rgba(49,45,43,0.80)] text-sm font-semibold leading-5 font-sans hover:text-[#37322F] transition-colors py-2"
            >
              Products
            </a>
            <a
              href="/#pricing-section"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[rgba(49,45,43,0.80)] text-sm font-semibold leading-5 font-sans hover:text-[#37322F] transition-colors py-2"
            >
              Pricing
            </a>
            <a
              href="/#made-for-you"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[rgba(49,45,43,0.80)] text-sm font-semibold leading-5 font-sans hover:text-[#37322F] transition-colors py-2"
            >
              Business
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Logo from "./Logo";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const scrollToSection = (sectionId: string) => {
    // If not on homepage, navigate to homepage first
    if (pathname !== "/") {
      router.push(`/#${sectionId}`);
      setIsMobileMenuOpen(false);
      return;
    }

    // If on homepage, scroll to section
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100; // Offset for header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <div className="w-full h-12 sm:h-14 md:h-16 lg:h-[84px] fixed left-0 top-0 flex justify-center items-center z-50 px-6 sm:px-8 md:px-12 lg:px-0 bg-[#F7F5F3]/80 backdrop-blur-md">
      <div className="w-full h-0 absolute left-0 top-6 sm:top-7 md:top-8 lg:top-[42px] border-t border-[rgba(55,50,47,0.12)] shadow-[0px_1px_0px_white]"></div>

      <div className="w-full max-w-[calc(100%-32px)] sm:max-w-[calc(100%-48px)] md:max-w-[calc(100%-64px)] lg:max-w-[700px] lg:w-[700px] h-10 sm:h-11 md:h-12 py-1.5 sm:py-2 px-3 sm:px-4 md:px-4 pr-2 sm:pr-3 bg-[#F7F5F3] backdrop-blur-sm shadow-[0px_0px_0px_2px_white] overflow-visible rounded-[50px] flex justify-between items-center relative z-50">
        <div className="flex justify-center items-center">
          <a href="/" className="flex justify-start items-center gap-1">
            <Logo />
            <div className="flex flex-col justify-center text-[#2F3037] text-sm sm:text-base md:text-lg lg:text-xl font-semibold leading-5 font-sans">
              oravo
            </div>
          </a>
          {/* Desktop Navigation Links */}
          <div className="pl-3 sm:pl-4 md:pl-5 lg:pl-5 justify-start items-start hidden sm:flex flex-row gap-2 sm:gap-3 md:gap-4 lg:gap-4">
            <button
              onClick={() => scrollToSection("made-for-you")}
              className="flex justify-start items-center cursor-pointer"
            >
              <div className="flex flex-col justify-center text-[rgba(49,45,43,0.80)] text-xs md:text-[13px] font-semibold leading-[14px] font-sans hover:text-[#37322F] transition-colors">
                Products
              </div>
            </button>
            <button
              onClick={() => scrollToSection("pricing-section")}
              className="flex justify-start items-center cursor-pointer"
            >
              <div className="flex flex-col justify-center text-[rgba(49,45,43,0.80)] text-xs md:text-[13px] font-semibold leading-[14px] font-sans hover:text-[#37322F] transition-colors">
                Pricing
              </div>
            </button>
            <button
              onClick={() => scrollToSection("made-for-you")}
              className="flex justify-start items-center cursor-pointer"
            >
              <div className="flex flex-col justify-center text-[rgba(49,45,43,0.80)] text-xs md:text-[13px] font-semibold leading-[14px] font-sans hover:text-[#37322F] transition-colors">
                Use Cases
              </div>
            </button>
          </div>
        </div>
        <div className="h-6 sm:h-7 md:h-8 flex justify-start items-start gap-2 sm:gap-3">
          {/* Hamburger Menu Button - Mobile Only */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="sm:hidden w-8 h-8 flex flex-col justify-center items-center gap-1 cursor-pointer"
            aria-label="Toggle menu"
          >
            <span
              className={`w-4 h-0.5 bg-[#37322F] transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`w-4 h-0.5 bg-[#37322F] transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-4 h-0.5 bg-[#37322F] transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </button>

          {/* Download Button - Hidden on Mobile */}
          <a
            href="https://ij4tehkvbg.zite.so/"
            className="hidden sm:flex px-2 sm:px-3 md:px-[14px] py-1 sm:py-[6px] bg-gradient-to-b from-[#6366F1] to-[#4F46E5] hover:from-[#5558E3] hover:to-[#4338CA] shadow-[0px_0px_0px_2.5px_rgba(255,255,255,0.08)_inset,0px_4px_12px_rgba(99,102,241,0.4)] overflow-hidden rounded-full justify-center items-center transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <div className="flex flex-col justify-center text-[#FFF] text-xs md:text-[13px] font-medium leading-5 font-sans">
              Join Waitlist
            </div>
          </a>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-[#F7F5F3] backdrop-blur-sm shadow-[0px_0px_0px_2px_white] rounded-2xl p-4 flex flex-col gap-3 sm:hidden">
            <button
              onClick={() => scrollToSection("made-for-you")}
              className="text-[rgba(49,45,43,0.80)] text-sm font-semibold leading-5 font-sans hover:text-[#37322F] transition-colors py-2 text-left cursor-pointer"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection("pricing-section")}
              className="text-[rgba(49,45,43,0.80)] text-sm font-semibold leading-5 font-sans hover:text-[#37322F] transition-colors py-2 text-left cursor-pointer"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("made-for-you")}
              className="text-[rgba(49,45,43,0.80)] text-sm font-semibold leading-5 font-sans hover:text-[#37322F] transition-colors py-2 text-left cursor-pointer"
            >
              Business
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

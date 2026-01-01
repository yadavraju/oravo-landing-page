import Logo from "./Logo";

export default function FooterSection() {
  return (
    <div className="w-full pt-10 flex flex-col justify-start items-start">
      {/* Main Footer Content */}
      <div className="self-stretch h-auto flex flex-col md:flex-row justify-between items-stretch pr-0 pb-8 pt-0">
        <div className="h-auto p-4 md:p-8 flex flex-col justify-start items-start gap-6">
          {/* Brand Section */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1">
              <Logo />
              <div className="text-[#49423D] text-xl font-semibold leading-4 font-sans">
                oravo
              </div>
            </div>
            <div className="text-[rgba(73,66,61,0.90)] text-sm font-medium leading-[18px] font-sans">
              Voice is your new keyboard.
            </div>
          </div>

          {/* Contact Support with Icons */}
          <div className="flex flex-col gap-2">
            <div className="text-[rgba(73,66,61,0.50)] text-xs font-medium uppercase tracking-wider font-sans">
              Contact Support
            </div>
            <div className="flex items-center gap-3">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/oravo-ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#49423D] hover:text-[#1877F2] transition-colors"
                aria-label="Follow us on LinkedIn"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                </svg>
                <span className="text-sm font-medium">LinkedIn</span>
              </a>

              <span className="text-[rgba(73,66,61,0.30)]">|</span>

              {/* Discord */}
              <a
                href="https://discord.gg/eAEsqsXmr2"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#49423D] hover:text-[#5865F2] transition-colors"
                aria-label="Join our Discord"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
                <span className="text-sm font-medium">Discord</span>
              </a>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="self-stretch p-4 md:p-8 flex flex-col sm:flex-row flex-wrap justify-start sm:justify-between items-start gap-6 md:gap-8">
          {/* Company Column */}
          <div className="flex flex-col justify-start items-start gap-3 flex-1 min-w-[120px]">
            <div className="text-[rgba(73,66,61,0.50)] text-sm font-medium leading-5 font-sans">
              Company
            </div>
            <div className="flex flex-col justify-start items-start gap-2">
              <a
                href="/manifesto"
                className="text-[#49423D] text-sm font-normal leading-5 font-sans cursor-pointer hover:text-[#37322F] transition-colors"
              >
                Manifesto
              </a>
              <a
                href="/affiliate"
                className="text-[#49423D] text-sm font-normal leading-5 font-sans cursor-pointer hover:text-[#37322F] transition-colors"
              >
                Become an Affiliate
              </a>
            </div>
          </div>

          {/* Product Column */}
          <div className="flex flex-col justify-start items-start gap-3 flex-1 min-w-[120px]">
            <div className="self-stretch text-[rgba(73,66,61,0.50)] text-sm font-medium leading-5 font-sans">
              Product
            </div>
            <div className="flex flex-col justify-start items-start gap-2">
              <a
                href="/blog"
                className="text-[#49423D] text-sm font-normal leading-5 font-sans cursor-pointer hover:text-[#37322F] transition-colors"
              >
                Blog
              </a>
              <a
                href="/students"
                className="text-[#49423D] text-sm font-normal leading-5 font-sans cursor-pointer hover:text-[#37322F] transition-colors"
              >
                For Students
              </a>
            </div>
          </div>

          {/* Resources Column */}
          <div className="flex flex-col justify-start items-start gap-3 flex-1 min-w-[120px]">
            <div className="text-[rgba(73,66,61,0.50)] text-sm font-medium leading-5 font-sans">
              Resources
            </div>
            <div className="flex flex-col justify-start items-start gap-2">
              <a
                href="/terms"
                className="text-[#49423D] text-sm font-normal leading-5 font-sans cursor-pointer hover:text-[#37322F] transition-colors"
              >
                Terms of use
              </a>
              <a
                href="/privacy"
                className="text-[#49423D] text-sm font-normal leading-5 font-sans cursor-pointer hover:text-[#37322F] transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/subprocessors"
                className="text-[#49423D] text-sm font-normal leading-5 font-sans cursor-pointer hover:text-[#37322F] transition-colors"
              >
                Subprocessors
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section with Pattern and Overlapping Oravo Text */}
      <div className="self-stretch relative mt-8 md:mt-12">
        {/* Large Shadow Text "Oravo" - Positioned to Overlap Pattern Lines */}
        <div
          className="absolute bottom-0 left-0 right-0 flex justify-center items-center pointer-events-none z-10"
          style={{ top: "-100px" }}
        >
          <div
            className="text-[140px] sm:text-[200px] md:text-[280px] lg:text-[380px] xl:text-[480px] font-bold leading-none font-inter select-none whitespace-nowrap"
            style={{
              color: "rgba(0, 0, 0, 0.04)",
              letterSpacing: "-0.02em",
              WebkitTextStroke: "1px rgba(0, 0, 0, 0.025)",
            }}
          >
            oravo
          </div>
        </div>

        {/* Pattern Section */}
        <div className="self-stretch h-12 relative overflow-hidden border-t border-b border-[rgba(55,50,47,0.12)] z-0">
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <div className="w-full h-full relative">
              {Array.from({ length: 400 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-[300px] h-16 border border-[rgba(3,7,18,0.08)]"
                  style={{
                    left: `${i * 300 - 600}px`,
                    top: "-120px",
                    transform: "rotate(-45deg)",
                    transformOrigin: "top left",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

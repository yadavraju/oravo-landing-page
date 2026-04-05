import Logo from "./Logo";

const linkClass =
  "text-[#49423D] text-sm font-normal leading-5 font-sans cursor-pointer hover:text-[#37322F] transition-colors";

const headingClass =
  "text-[rgba(73,66,61,0.50)] text-xs font-medium uppercase tracking-wider font-sans mb-3";

export default function FooterSection() {
  return (
    <footer className="w-full pt-12 flex flex-col">
      {/* Top border */}
      <div className="w-full h-px bg-[rgba(55,50,47,0.12)]" />

      {/* Main Footer Grid */}
      <div className="w-full py-10 px-4 md:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 md:gap-6">
          {/* Brand Column */}
          <div className="col-span-2 sm:col-span-3 md:col-span-1 mb-4 md:mb-0">
            <div className="flex items-center gap-1 mb-2">
              <Logo />
              <span className="text-[#49423D] text-xl font-semibold leading-4 font-sans">
                oravo
              </span>
            </div>
            <p className="text-[rgba(73,66,61,0.70)] text-sm font-medium leading-5 font-sans mb-5">
              Voice is your new keyboard.
            </p>

          </div>

          {/* Product Column */}
          <div>
            <div className={headingClass}>Product</div>
            <nav className="flex flex-col gap-2.5">
              <a href="/features" className={linkClass}>Features</a>
              <a href="/blog" className={linkClass}>Blog</a>
              <a href="/download" className={linkClass}>Download</a>
              <a href="/use-cases" className={linkClass}>Use Cases</a>
            </nav>
          </div>

          {/* Solutions Column */}
          <div>
            <div className={headingClass}>Solutions</div>
            <nav className="flex flex-col gap-2.5">
              <a href="/for-multilingual-teams" className={linkClass}>Multilingual Teams</a>
              <a href="/for-non-native-speakers" className={linkClass}>Non-Native Speakers</a>
              <a href="/for-healthcare" className={linkClass}>Healthcare</a>
              <a href="/for-developers" className={linkClass}>Developers</a>
              <a href="/students" className={linkClass}>Students</a>
            </nav>
          </div>

          {/* Compare Column */}
          <div>
            <div className={headingClass}>Compare</div>
            <nav className="flex flex-col gap-2.5">
              <a href="/compare/wispr-flow" className={linkClass}>vs Wispr Flow</a>
              <a href="/compare/willow-voice" className={linkClass}>vs Willow Voice</a>
              <a href="/compare/dragon" className={linkClass}>vs Dragon</a>
              <a href="/compare/otter-ai" className={linkClass}>vs Otter.ai</a>
              <a href="/compare/google-voice-typing" className={linkClass}>vs Google Voice Typing</a>
              <a href="/compare/apple-dictation" className={linkClass}>vs Apple Dictation</a>
              <a href="/compare/notta" className={linkClass}>vs Notta</a>
              <a href="/compare/speechnotes" className={linkClass}>vs Speechnotes</a>
            </nav>
          </div>

          {/* Company Column */}
          <div>
            <div className={headingClass}>Company</div>
            <nav className="flex flex-col gap-2.5">
              <a href="/manifesto" className={linkClass}>Manifesto</a>
              <a href="/affiliate" className={linkClass}>Affiliate</a>
              <a href="/terms" className={linkClass}>Terms</a>
              <a href="/privacy" className={linkClass}>Privacy</a>
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom Bar — copyright + social icons */}
      <div className="w-full px-4 md:px-8 py-6 border-t border-[rgba(55,50,47,0.08)] flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[rgba(73,66,61,0.50)] text-xs font-sans">
          &copy; {new Date().getFullYear()} Oravo AI. All rights reserved.
        </p>
        <div className="flex items-center gap-3.5">
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/company/oravo-ai/" target="_blank" rel="noopener noreferrer" className="text-[rgba(73,66,61,0.45)] hover:text-[#0A66C2] transition-colors" aria-label="LinkedIn">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/></svg>
          </a>
          {/* X / Twitter */}
          <a href="https://x.com/Rajuyadav2" target="_blank" rel="noopener noreferrer" className="text-[rgba(73,66,61,0.45)] hover:text-[#000000] transition-colors" aria-label="X">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          {/* Discord */}
          <a href="https://discord.gg/eAEsqsXmr2" target="_blank" rel="noopener noreferrer" className="text-[rgba(73,66,61,0.45)] hover:text-[#5865F2] transition-colors" aria-label="Discord">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.36-.698.772-1.362 1.225-1.993a.076.076 0 0 0-.041-.107 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.12-.094.246-.194.373-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>
          </a>
          {/* Reddit */}
          <a href="https://www.reddit.com/r/oravo/" target="_blank" rel="noopener noreferrer" className="text-[rgba(73,66,61,0.45)] hover:text-[#FF4500] transition-colors" aria-label="Reddit">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.066 13.71c.147.322.22.674.22 1.04 0 2.654-3.1 4.81-6.93 4.81s-6.93-2.156-6.93-4.81c0-.38.08-.744.236-1.08a1.56 1.56 0 0 1-.653-1.27 1.573 1.573 0 0 1 2.69-1.1 8.684 8.684 0 0 1 4.192-1.36l.786-3.69a.338.338 0 0 1 .404-.268l2.617.556a1.09 1.09 0 1 1-.122.574l-2.346-.499-.696 3.27a8.63 8.63 0 0 1 4.073 1.353 1.572 1.572 0 0 1 2.69 1.1c0 .478-.213.907-.55 1.195l.02.04zM9.6 14.4a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4zm5.28 2.173c-.372.37-1.092.5-2.88.5s-2.508-.13-2.88-.5a.335.335 0 0 1 .474-.474c.228.228.86.39 2.406.39s2.178-.162 2.406-.39a.335.335 0 0 1 .474.474zM14.4 14.4a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4z"/></svg>
          </a>
          {/* YouTube */}
          <a href="https://www.youtube.com/@oravoai" target="_blank" rel="noopener noreferrer" className="text-[rgba(73,66,61,0.45)] hover:text-[#FF0000] transition-colors" aria-label="YouTube">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          </a>
          {/* TikTok */}
          <a href="https://www.tiktok.com/@oravo.ai" target="_blank" rel="noopener noreferrer" className="text-[rgba(73,66,61,0.45)] hover:text-[#000000] transition-colors" aria-label="TikTok">
            <svg width="15" height="17" viewBox="0 0 448 512" fill="currentColor"><path d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25v178.72A162.55 162.55 0 1 1 185 188.31v89.89a74.62 74.62 0 1 0 52.23 71.18V0h88a121.18 121.18 0 0 0 1.86 22.17A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14z"/></svg>
          </a>
          {/* Instagram */}
          <a href="https://www.instagram.com/oravo.ai/" target="_blank" rel="noopener noreferrer" className="text-[rgba(73,66,61,0.45)] hover:text-[#E4405F] transition-colors" aria-label="Instagram">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full relative">
        {/* Large watermark text */}
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

        {/* Pattern stripe */}
        <div className="w-full h-12 relative overflow-hidden border-t border-b border-[rgba(55,50,47,0.12)] z-0">
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
    </footer>
  );
}

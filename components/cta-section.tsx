"use client";

import DownloadButtons from "./DownloadButtons";
import { Parallax } from "./landing/Parallax";
import { Reveal, RevealWords } from "./landing/Reveal";

// The close is the hero again: same warm sand, same centred column, same
// buttons, so a visitor who scrolls the whole page arrives back where they
// started. Solid colour only; the shapes behind it move at their own speed.
export default function CTASection() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="relative isolate w-full overflow-hidden rounded-3xl bg-sand px-6 py-16 text-center ring-1 ring-line sm:px-16 sm:py-20"
    >
      <Parallax speed={80} className="pointer-events-none absolute -left-20 -top-16" aria-hidden="true">
        <div className="h-64 w-64 rounded-full bg-sand-deep" />
      </Parallax>
      <Parallax speed={-60} className="pointer-events-none absolute -bottom-24 -right-16" aria-hidden="true">
        <div className="h-72 w-72 rotate-12 rounded-[48px] bg-clay" />
      </Parallax>

      <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center">
        <Reveal>
          <p className="eyebrow">Start in under a minute</p>
        </Reveal>
        <h2 id="cta-heading" className="display-2 mt-3 text-ink">
          <RevealWords text="Stop typing. Start talking." />
        </h2>
        <Reveal delay={0.12}>
          <p className="subtitle mx-auto mt-4 max-w-lg text-balance">
            5,000 words free.&nbsp;· No credit card.&nbsp;· Install in 30 seconds.
          </p>
        </Reveal>
        <Reveal delay={0.2} className="mt-9 w-full">
          <DownloadButtons variant="glass" />
        </Reveal>
      </div>
    </section>
  );
}

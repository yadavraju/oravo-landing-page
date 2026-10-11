"use client";

import DownloadButtons from "./DownloadButtons";
import LiquidBackground from "./landing/LiquidBackground";
import { Reveal, RevealWords } from "./landing/Reveal";

export default function CTASection() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="glass glass-rim relative isolate w-full overflow-hidden rounded-[40px] px-6 py-16 sm:px-12 sm:py-24"
    >
      <LiquidBackground />
      <div className="relative z-10 mx-auto flex max-w-[720px] flex-col items-center gap-6 text-center">
        <Reveal>
          <p className="eyebrow">Start in under a minute</p>
        </Reveal>
        <h2 id="cta-heading" className="display-1 text-ink">
          <RevealWords text="Stop typing. Start talking." />
        </h2>
        <Reveal delay={0.15}>
          <p className="subtitle">5,000 words free. No credit card. Install in 30 seconds.</p>
        </Reveal>
        <Reveal delay={0.25} className="mt-4 w-full">
          <DownloadButtons variant="glass" />
        </Reveal>
      </div>
    </section>
  );
}

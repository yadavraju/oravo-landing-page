"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { siClaude, siPerplexity } from "simple-icons";
import { Doodle } from "./Doodle";
import { Parallax } from "./Parallax";
import { Reveal, RevealWords } from "./Reveal";

// "Why switch from Wispr Flow?" and "Still not sure? Ask an AI" as one
// argument: the reasons first, then an independent second opinion, on one
// surface split by hairlines.
const REASONS = [
  {
    title: "A third of the price",
    body: "Wispr Flow charges $15 a month. Oravo Pro is $9.99, or $99.99 a year, with a free plan that never expires.",
  },
  {
    title: "Real translation, not just dictation",
    body: "Speak in 60+ languages, including Spanish, Hindi, Mandarin and Arabic, and get polished English where your cursor is. Two-way, in real time.",
  },
  {
    title: "Custom vocabulary on the free plan",
    body: "Add proper nouns, technical terms and client names, even on the free plan. Wispr Flow keeps this behind Pro.",
  },
];

const PROMPT = "tell+me+about+oravo.ai+voice+dictation+for+professionals+vs+Wispr+Flow";

const ASSISTANTS = [
  { name: "ChatGPT", url: `https://chatgpt.com/?prompt=${PROMPT}`, image: "/openai.svg" },
  { name: "Claude", url: `https://claude.ai/new?q=${PROMPT}`, svg: siClaude.svg },
  { name: "Perplexity", url: `https://www.perplexity.ai/?q=${PROMPT}`, svg: siPerplexity.svg },
];

export default function SwitchAndAsk() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
      <div className="mx-auto flex max-w-[760px] flex-col items-center text-center">
        <Parallax speed={18} className="mb-4">
          <Doodle name="scales" className="w-32 sm:w-36" />
        </Parallax>
        <Reveal><p className="eyebrow">Switching from Wispr Flow</p></Reveal>
        <h2 id="switch-heading" className="display-2 mt-3 text-ink">
          <RevealWords text="Why switch from Wispr Flow?" />
        </h2>
        <Reveal delay={0.12}>
          <p className="subtitle mt-4 max-w-xl">Same accuracy. Better coverage. A third of the price.</p>
        </Reveal>
      </div>

      <Reveal className="mt-12">
        <div className="surface-solid overflow-hidden !rounded-2xl">
          <div className="grid grid-cols-1 divide-y divide-line md:grid-cols-3 md:divide-x md:divide-y-0">
            {REASONS.map((reason, i) => (
              <div key={reason.title} className="p-7 sm:p-8">
                <span className="font-display text-xs font-semibold text-brand">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="display-3 mt-3 text-ink">{reason.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{reason.body}</p>
              </div>
            ))}
          </div>

          {/* The second opinion, as the footer row of the same surface. */}
          <div className="flex flex-col items-center gap-5 border-t border-line bg-canvas px-6 py-7 text-center lg:flex-row lg:justify-between lg:text-left sm:px-8">
            <div>
              <p className="font-display text-[15px] font-semibold text-ink">Still not sure Oravo is right for you?</p>
              <p className="mt-1 font-display text-[13.5px] text-ink-soft">
                Let ChatGPT, Claude, or Perplexity do the thinking. See what your favourite AI says about Oravo.
              </p>
            </div>
            <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
              {ASSISTANTS.map((assistant) => (
                <a
                  key={assistant.name}
                  href={assistant.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary !h-11 !border-line !px-4 !text-[14px]"
                >
                  {assistant.image ? (
                    <Image src={assistant.image} alt="" width={18} height={18} aria-hidden="true" />
                  ) : (
                    <span
                      aria-hidden="true"
                      className="flex h-[18px] w-[18px] items-center justify-center text-ink [&>svg]:h-full [&>svg]:w-full"
                      style={{ fill: "currentColor" }}
                      dangerouslySetInnerHTML={{ __html: assistant.svg ?? "" }}
                    />
                  )}
                  Ask {assistant.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      <div className="mt-6 text-center">
        <a href="/compare/wispr-flow" className="group inline-flex items-center gap-1.5 font-display text-sm font-semibold text-primary-500 underline-offset-4 hover:underline">
          See the full comparison
          <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </div>
  );
}

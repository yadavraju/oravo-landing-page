import type { Metadata } from "next";
import { Check, Minus } from "lucide-react";
import { Band } from "@/components/landing/Band";
import { Doodle } from "@/components/landing/Doodle";
import { MarketingShell } from "@/components/landing/MarketingShell";
import { Parallax } from "@/components/landing/Parallax";
import { Reveal, RevealWords } from "@/components/landing/Reveal";
import { SHELL } from "@/components/landing/shell";
import { ToolCard } from "@/components/tools/ToolPageLayout";
import { buildBreadcrumbJsonLd } from "@/lib/breadcrumbs";
import { FEATURED_TOOLS, TOOLS, TOOL_CATEGORIES, getTool, toolUrl } from "@/lib/tools/catalog";

const DESCRIPTION =
  "Free voice and writing tools from Oravo: speech to text, audio to text, subtitle generator, AI meeting summarizer, transcript cleaner, voice to email, mic test and more. No sign-up.";

export const metadata: Metadata = {
  title: "Free AI Voice Tools — Speech to Text, Meeting Summaries & More",
  description: DESCRIPTION,
  alternates: { canonical: "https://oravo.ai/tools" },
  openGraph: { title: "Free AI voice tools by Oravo", description: DESCRIPTION, url: "https://oravo.ai/tools", type: "website" },
};

const IN_TAB = [
  "Runs on a lighter, lower-cost AI model so we can keep it free",
  "Short recordings and small files, with a daily limit per tool",
  "The meeting summarizer is a single free try",
  "Copy the result, then paste it where you need it",
];

const IN_APP = [
  "Dictate straight into whatever you are typing in, on Mac, Windows, Android and iPhone",
  "Our best models: accent-aware, context-aware, 100+ languages",
  "Fillers removed and punctuation added as you speak",
  "Notetaker summarises every meeting, with no limit",
  "Studio transcribes long audio and video offline, to text or SRT",
  "Read any text aloud with natural AI voices",
];

export default function ToolsPage() {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Free Oravo tools",
    itemListElement: TOOLS.map((t, i) => ({ "@type": "ListItem", position: i + 1, name: t.name, url: toolUrl(t.slug) })),
  };
  const crumbs = buildBreadcrumbJsonLd([
    { name: "Oravo", url: "https://oravo.ai" },
    { name: "Free tools", url: "https://oravo.ai/tools" },
  ]);

  return (
    <MarketingShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />

      <Band color="var(--o-band-sand)" className="pt-32 pb-14 sm:pt-40 sm:pb-16">
        <Parallax speed={120} className="pointer-events-none absolute -left-32 top-10" aria-hidden="true">
          <div className="h-80 w-80 rounded-full bg-sand-deep" />
        </Parallax>
        <Parallax speed={-60} className="pointer-events-none absolute -right-24 bottom-0 hidden sm:block" aria-hidden="true">
          <div className="h-64 w-64 rotate-12 rounded-[48px] bg-clay" />
        </Parallax>
        <div className={`relative ${SHELL} flex flex-col items-center text-center`}>
          <Doodle name="mic" className="mb-4 w-28 sm:w-32" />
          <Reveal>
            <p className="eyebrow">Free tools · no sign-up</p>
          </Reveal>
          <h1 className="display-1 mt-3 text-ink">
            <span className="block">
              <RevealWords text="Free voice tools," />
            </span>
            <span className="block text-accent">
              <RevealWords text="right in your browser." delay={0.15} />
            </span>
          </h1>
          <Reveal delay={0.12}>
            <p className="subtitle mx-auto mt-4 max-w-lg text-balance">
              Transcribe, summarise, clean up and check your voice. Everything here is free and needs no account. When you want it in every app, get Oravo.
            </p>
          </Reveal>
        </div>
      </Band>

      <Band color="var(--o-paper)" from="var(--o-band-sand)" className="pb-16 pt-6 sm:pb-20">
        <div className={SHELL}>
          <Reveal>
            <p className="eyebrow">
              <span className="text-brand">01</span> Start here
            </p>
            <h2 className="display-2 mt-3 text-ink">The three people open most</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="surface-solid mt-8 grid overflow-hidden !rounded-2xl md:grid-cols-3 md:divide-x md:divide-line [&>*+*]:border-t [&>*+*]:border-line md:[&>*+*]:border-t-0">
              {FEATURED_TOOLS.map((slug) => (
                <ToolCard key={slug} tool={getTool(slug)} />
              ))}
            </div>
          </Reveal>

          <div className="mt-16 flex flex-col gap-14">
            {TOOL_CATEGORIES.map((cat) => {
              const tools = TOOLS.filter((t) => t.category === cat.id);
              return (
                <section key={cat.id} aria-labelledby={`cat-${cat.id}`}>
                  <Reveal>
                    <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-line pb-3">
                      <h2 id={`cat-${cat.id}`} className="display-3 text-ink">
                        {cat.title} <span className="font-display text-[14px] text-ink-faint">{tools.length}</span>
                      </h2>
                      <p className="font-display text-[14px] text-ink-soft">{cat.lede}</p>
                    </div>
                  </Reveal>
                  <Reveal delay={0.06}>
                    <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {tools.map((t) => (
                        <div key={t.slug} className="surface-solid surface-interactive overflow-hidden">
                          <ToolCard tool={t} />
                        </div>
                      ))}
                    </div>
                  </Reveal>
                </section>
              );
            })}
          </div>
        </div>
      </Band>

      <Band color="var(--o-band-clay)" from="var(--o-paper)" className="pb-28 pt-16 sm:pb-36 sm:pt-20">
        <div className={SHELL}>
          <Reveal>
            <p className="eyebrow">
              <span className="text-brand">02</span> Then get the app
            </p>
            <h2 className="display-2 mt-3 max-w-2xl text-ink">These run in a tab. Oravo runs everywhere you type.</h2>
            <p className="subtitle mt-4 max-w-2xl">
              Everything above is free and needs no account. To keep it that way, the AI tools use a lighter, lower-cost model with limits. For the best accuracy and no limits, download the app.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="surface mt-8 grid overflow-hidden !rounded-2xl md:grid-cols-2 md:divide-x md:divide-line">
              <div className="p-6 sm:p-8">
                <p className="eyebrow">In this tab</p>
                <p className="display-3 mt-2 text-ink">What the free tools give up</p>
                <ul className="mt-5 space-y-3">
                  {IN_TAB.map((l) => (
                    <li key={l} className="flex gap-2.5 font-display text-[14.5px] leading-snug text-ink-soft">
                      <Minus aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-ink-faint" />
                      {l}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-t border-line bg-raised/70 p-6 sm:p-8 md:border-t-0">
                <p className="eyebrow">In Oravo</p>
                <p className="display-3 mt-2 text-ink">What the app does instead</p>
                <ul className="mt-5 space-y-3">
                  {IN_APP.map((l) => (
                    <li key={l} className="flex gap-2.5 font-display text-[14.5px] leading-snug text-ink">
                      <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-primary-500" />
                      {l}
                    </li>
                  ))}
                </ul>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a href="/download" className="btn-primary">
                    Download Oravo free
                  </a>
                  <a href="/pricing" className="btn-secondary">
                    See pricing
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Band>
    </MarketingShell>
  );
}

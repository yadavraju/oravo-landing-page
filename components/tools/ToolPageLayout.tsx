import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ArrowRight, Check, Minus } from "lucide-react";
import { Band } from "@/components/landing/Band";
import { FaqAccordion } from "@/components/landing/FaqAccordion";
import { MarketingShell } from "@/components/landing/MarketingShell";
import { Parallax } from "@/components/landing/Parallax";
import { Reveal } from "@/components/landing/Reveal";
import { SHELL } from "@/components/landing/shell";
import { buildBreadcrumbJsonLd } from "@/lib/breadcrumbs";
import { faqJsonLd } from "@/lib/faq";
import { TOOLS, getTool, relatedTools, toolUrl, type Tool, type ToolSlug } from "@/lib/tools/catalog";
import { LiteModelNotice } from "./shared";

export function toolMetadata(slug: ToolSlug): Metadata {
  const tool = getTool(slug);
  return {
    title: tool.seoTitle,
    description: tool.seoDescription,
    keywords: tool.keywords,
    alternates: { canonical: toolUrl(slug) },
    openGraph: { title: `${tool.name} — Free Oravo Tool`, description: tool.seoDescription, url: toolUrl(slug), type: "website", siteName: "Oravo" },
    twitter: { card: "summary_large_image", title: `${tool.name} — Free Oravo Tool`, description: tool.seoDescription },
  };
}

export function EngineTag({ tool }: { tool: Tool }) {
  return (
    <span className="chip h-7 px-2.5 font-display text-[11.5px] font-semibold text-ink-soft">
      <span aria-hidden="true" className={`h-1.5 w-1.5 rounded-full ${tool.engine === "lite-ai" ? "bg-primary-500" : "bg-[#5a9a6e]"}`} />
      {tool.engine === "lite-ai" ? "Free · lite AI model" : "Free · runs in your browser"}
    </span>
  );
}

export function ToolCard({ tool }: { tool: Tool }) {
  const Icon = tool.icon;
  return (
    <a href={`/tools/${tool.slug}`} className="group flex h-full flex-col gap-3 bg-raised p-5 transition-colors hover:bg-canvas sm:p-6">
      <div className="flex items-center justify-between gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-canvas text-ink-soft shadow-[inset_0_0_0_1px_var(--o-line)] group-hover:bg-raised">
          <Icon aria-hidden="true" className="h-[18px] w-[18px]" />
        </span>
        {tool.badge && (
          <span className={`rounded-md px-2 py-0.5 font-display text-[11px] font-semibold ${tool.badge === "New" ? "key-on" : "bg-clay text-brand"}`}>{tool.badge}</span>
        )}
      </div>
      <p className="font-display text-[15.5px] font-semibold text-ink">{tool.name}</p>
      <p className="flex-1 font-display text-[13.5px] leading-snug text-ink-soft">{tool.blurb}</p>
      <span className="inline-flex items-center gap-1 font-display text-[13px] font-semibold text-primary-500">
        Open tool <ArrowRight aria-hidden="true" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
      </span>
    </a>
  );
}

// Every tool page: hero, the stage, free-vs-app, FAQ, related tools.
export function ToolPageLayout({ slug, children }: { slug: ToolSlug; children: ReactNode }) {
  const tool = getTool(slug);
  const related = relatedTools(slug);
  const app = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: `${tool.name} by Oravo`,
    url: toolUrl(slug),
    description: tool.seoDescription,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any (web browser)",
    browserRequirements: "Requires a modern browser with JavaScript",
    isAccessibleForFree: true,
    keywords: tool.keywords.join(", "),
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    publisher: { "@type": "Organization", name: "Oravo", url: "https://oravo.ai" },
  };
  const howTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `How to use the ${tool.name.toLowerCase()}`,
    description: tool.lede,
    totalTime: "PT1M",
    tool: { "@type": "HowToTool", name: `${tool.name} by Oravo` },
    step: tool.steps.map((text, i) => ({ "@type": "HowToStep", position: i + 1, name: `Step ${i + 1}`, text, url: `${toolUrl(slug)}#how-to` })),
  };
  const crumbs = buildBreadcrumbJsonLd([
    { name: "Oravo", url: "https://oravo.ai" },
    { name: "Free tools", url: "https://oravo.ai/tools" },
    { name: tool.name, url: toolUrl(slug) },
  ]);

  return (
    <MarketingShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(app) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(tool.faq)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howTo) }} />

      <Band color="var(--o-band-sand)" className="pt-32 pb-10 sm:pt-36 sm:pb-12">
        <Parallax speed={110} className="pointer-events-none absolute -right-28 -top-10" aria-hidden="true">
          <div className="h-72 w-72 rounded-full bg-sand-deep" />
        </Parallax>
        <div className={`relative ${SHELL}`}>
          <nav aria-label="Breadcrumb" className="font-display text-[13px] text-ink-soft">
            <a href="/tools" className="underline-offset-4 hover:text-ink hover:underline">
              Free tools
            </a>
            <span aria-hidden="true" className="mx-2 text-ink-faint">
              /
            </span>
            <span className="text-ink">{tool.name}</span>
          </nav>
          <div className="mt-5 max-w-3xl">
            <EngineTag tool={tool} />
            <h1 className="display-1 mt-4 text-ink">
              <span className="block">{tool.headline[0]}</span>
              <span className="block text-accent">{tool.headline[1]}</span>
            </h1>
            <p className="subtitle mt-4 max-w-xl">{tool.lede}</p>
          </div>
        </div>
      </Band>

      <Band color="var(--o-paper)" from="var(--o-band-sand)" blend={120} className="pb-16 pt-4 sm:pb-20">
        <div className={`${SHELL} flex flex-col gap-5`}>
          {tool.engine === "lite-ai" && <LiteModelNotice tool={slug} />}
          <div className="frame-dotted bg-raised/70 p-4 sm:p-6">{children}</div>
        </div>
      </Band>

      <Band id="how-to" color="var(--o-paper)" className="pb-16 sm:pb-20">
        <div className={SHELL}>
          <Reveal>
            <p className="eyebrow">How it works</p>
            <h2 className="display-2 mt-3 text-ink">How to use the free {tool.name.toLowerCase()}</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <ol className="surface-solid mt-8 grid overflow-hidden !rounded-2xl md:grid-cols-3 md:divide-x md:divide-line [&>*+*]:border-t [&>*+*]:border-line md:[&>*+*]:border-t-0">
              {tool.steps.map((step, i) => (
                <li key={i} className="flex gap-4 p-6 sm:p-7">
                  <span className="font-serif text-[28px] leading-none text-brand">{String(i + 1).padStart(2, "0")}</span>
                  <p className="font-display text-[14.5px] leading-relaxed text-ink">{step}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </Band>

      <Band color="var(--o-canvas)" from="var(--o-paper)" className="py-16 sm:py-20">
        <div className={SHELL}>
          <Reveal>
            <p className="eyebrow">Free tool or the app</p>
            <h2 className="display-2 mt-3 max-w-2xl text-ink">This tab is a taste. The app is the whole meal.</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="surface-solid mt-8 grid overflow-hidden !rounded-2xl md:grid-cols-2 md:divide-x md:divide-line">
              <div className="p-6 sm:p-8">
                <p className="font-display text-[14px] font-semibold text-ink-soft">This free tool</p>
                <ul className="mt-4 space-y-3">
                  {tool.limits.map((l) => (
                    <li key={l} className="flex gap-2.5 font-display text-[14.5px] text-ink-soft">
                      <Minus aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-ink-faint" />
                      {l}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-t border-line bg-cloud/40 p-6 sm:p-8 md:border-t-0">
                <p className="font-display text-[14px] font-semibold text-cloud-ink">Oravo app, free to start</p>
                <ul className="mt-4 space-y-3">
                  {tool.inApp.map((l) => (
                    <li key={l} className="flex gap-2.5 font-display text-[14.5px] text-ink">
                      <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-primary-500" />
                      {l}
                    </li>
                  ))}
                </ul>
                <a href="/download" className="btn-primary mt-6">
                  Download Oravo
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </Band>

      <Band color="var(--o-paper)" from="var(--o-canvas)" className="py-16 sm:py-20">
        <div className={`${SHELL} grid gap-10 lg:grid-cols-[18rem_1fr]`}>
          <Reveal>
            <p className="eyebrow">Questions</p>
            <h2 className="display-2 mt-3 text-ink">About the {tool.name.toLowerCase()}</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <FaqAccordion items={tool.faq} />
          </Reveal>
        </div>
      </Band>

      <Band color="var(--o-canvas)" from="var(--o-paper)" className="pb-24 pt-16 sm:pb-32 sm:pt-20">
        <div className={SHELL}>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="display-2 text-ink">More free tools</h2>
            <a href="/tools" className="font-display text-[14px] font-semibold text-primary-500 underline-offset-4 hover:underline">
              See all tools →
            </a>
          </div>
          <div className="surface-solid mt-8 grid overflow-hidden !rounded-2xl sm:grid-cols-3 sm:divide-x sm:divide-line [&>*+*]:border-t [&>*+*]:border-line sm:[&>*+*]:border-t-0">
            {related.map((t) => (
              <ToolCard key={t.slug} tool={t} />
            ))}
          </div>
          <nav aria-label="All free tools" className="mt-8">
            <p className="eyebrow">All free tools</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {TOOLS.map((t) => (
                <li key={t.slug}>
                  <a
                    href={`/tools/${t.slug}`}
                    aria-current={t.slug === slug ? "page" : undefined}
                    className={`chip h-8 px-3 font-display text-[13px] font-medium ${t.slug === slug ? "key-on !border-cloud" : "text-ink-soft hover:text-ink"}`}
                  >
                    {t.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Band>
    </MarketingShell>
  );
}

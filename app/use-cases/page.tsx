import { ArrowRight, Sparkles } from "lucide-react";
import { Band } from "@/components/landing/Band";
import { Doodle } from "@/components/landing/Doodle";
import { MarketingShell } from "@/components/landing/MarketingShell";
import { PageHero, SectionIntro } from "@/components/landing/PageBlocks";
import { Parallax } from "@/components/landing/Parallax";
import { Reveal } from "@/components/landing/Reveal";
import { ClosingBand, TopicShelf } from "@/components/product-pages/blocks";
import { AppGlyph } from "@/components/product-pages/kit";
import { SHELL } from "@/components/product-pages/shell";
import { AppWallHero, UseCaseDirectory, type DirectoryApp, type DirectoryCategory } from "@/components/product-pages/UseCaseDirectory";
import { USE_CASE_BLURBS } from "@/components/product-pages/useCaseBlurbs";
import { useCasePages } from "@/lib/useCasePages";

// Metadata and breadcrumb JSON-LD live in ./layout.tsx.

const CATEGORIES: DirectoryCategory[] = [
  { id: "communication", label: "Communication" },
  { id: "productivity", label: "Productivity" },
  { id: "writing", label: "Writing" },
  { id: "ai", label: "AI tools" },
  { id: "developer", label: "Developer" },
  { id: "design", label: "Design" },
  { id: "browser", label: "Browsers" },
  { id: "crm", label: "CRM" },
  { id: "support", label: "Support" },
];

const APPS: DirectoryApp[] = Object.values(useCasePages)
  .map((page) => ({
    name: page.appName,
    route: page.route,
    category: page.category ?? "communication",
    color: page.accentColor,
    icon: page.brandIcon ? { title: page.brandIcon.title, hex: page.brandIcon.hex, path: page.brandIcon.path } : null,
    blurb: USE_CASE_BLURBS[page.route] ?? page.heroDescription,
  }))
  .sort((a, b) => a.name.localeCompare(b.name));

const byRoute = (route: string) => APPS.find((a) => a.route === route);

const WALL = [
  "slack", "gmail", "notion", "google-docs", "telegram", "obsidian", "whatsapp", "figma",
  "github", "linkedin", "claude", "discord", "jira", "linear", "salesforce", "zendesk",
]
  .map((slug) => byRoute(`/voice-keyboard-for-${slug}`))
  .filter((a): a is DirectoryApp => Boolean(a));

const PROFESSIONS = [
  { name: "Healthcare", href: "/for-healthcare", desc: "Medical documentation & patient notes", apps: ["google-docs", "notion", "outlook"] },
  { name: "Lawyers", href: "/for-lawyers", desc: "Legal documents & case notes", apps: ["google-docs", "gmail", "salesforce"] },
  { name: "Students", href: "/for-students", desc: "Essays, research papers & study notes", apps: ["google-docs", "notion", "chatgpt"] },
  { name: "Developers", href: "/for-developers", desc: "Code documentation & technical specs", apps: ["vscode", "github", "cursor"] },
  { name: "Sales Teams", href: "/for-sales", desc: "CRM updates & follow-up emails", apps: ["salesforce", "hubspot", "gmail"] },
  { name: "Creators", href: "/for-creators", desc: "Video scripts & social content", apps: ["notion", "instagram", "canva"] },
  { name: "Writers", href: "/for-writers", desc: "Beat writer's block with voice", apps: ["google-docs", "medium", "substack"] },
  { name: "Accessibility", href: "/for-accessibility", desc: "Hands-free typing for everyone", apps: ["chrome", "slack", "gmail"] },
];

const TOPICS = [
  { title: "Speech to Text Mac", href: "/speech-to-text-mac" },
  { title: "Speech to Text Windows", href: "/speech-to-text-windows" },
  { title: "Voice to Text App", href: "/voice-to-text-app" },
  { title: "Dictation App", href: "/dictation-app" },
  { title: "Voice Dictation Software", href: "/voice-dictation-software" },
  { title: "Voice Typing Translation", href: "/voice-typing-with-translation" },
  { title: "Voice Typing for Accents", href: "/voice-typing-for-accents" },
  { title: "Spanish Speech to Text", href: "/speech-to-text-spanish" },
];

export default function UseCasesPage() {
  return (
    <MarketingShell>
      <PageHero
        eyebrow="Discover real use cases"
        eyebrowIcon={<Sparkles aria-hidden="true" className="h-3.5 w-3.5 text-brand" />}
        title="Explore Using Oravo Voice in Every App and Language"
        description="Browse Oravo use cases by category. Instant voice-to-text that you can use anywhere from communication apps to AI tools to different languages."
        primary={{ label: "Browse all apps", href: "#directory" }}
        secondary={{ label: "Download free", href: "/download" }}
        note={`${APPS.length} app guides · Works in any text field`}
        doodles={["windows", "speech"]}
        visual={<AppWallHero apps={WALL} />}
      />

      {/* Directory */}
      <Band id="directory" color="var(--o-paper)" from="var(--o-band-sand)" blend={200} className="scroll-mt-20 pt-24 pb-20 sm:pt-28 sm:pb-28">
        <div className={SHELL}>
          <div className="grid items-end gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <SectionIntro
              align="left"
              doodle="windows"
              eyebrow="App directory"
              title="One voice keyboard for every app"
              lede="Pick a category or search for the app you live in. Each guide shows how Oravo fits that app's workflow."
            />
            <Reveal delay={0.15} className="hidden lg:block">
              <p className="ml-auto max-w-xs border-l-2 border-brand pl-5 font-serif text-[1.15rem] leading-snug text-ink-soft">
                Not on the list? Oravo types into any text field, listed or not.
              </p>
            </Reveal>
          </div>
          <div className="mt-8">
            <UseCaseDirectory apps={APPS} categories={CATEGORIES} />
          </div>
        </div>
      </Band>

      {/* By profession */}
      <Band color="var(--o-band-clay)" from="var(--o-paper)" blend={200} className="pt-24 pb-20 sm:pt-28 sm:pb-24">
        <Parallax speed={80} className="pointer-events-none absolute -left-24 top-1/3 hidden lg:block" aria-hidden="true">
          <div className="h-72 w-72 rounded-full bg-sand" />
        </Parallax>
        <Parallax speed={-50} className="pointer-events-none absolute right-[5%] top-32 hidden xl:block" aria-hidden="true">
          <Doodle name="notebook" className="w-36" />
        </Parallax>
        <div className={`${SHELL} relative`}>
          <SectionIntro doodle="people" eyebrow="By profession" title="Voice Typing by Profession" lede="See how Oravo is built for your specific workflow and industry needs." />
          <Reveal className="mt-12">
            <ul className="grid gap-px overflow-hidden rounded-2xl bg-line shadow-[0_0_0_1px_var(--o-line),0_24px_50px_-36px_rgba(51,48,42,0.45)] md:grid-cols-2">
              {PROFESSIONS.map((p, i) => (
                <li key={p.href} className="flex flex-col gap-4 bg-raised p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
                  <a href={p.href} className="group flex items-start gap-4">
                    <span className="pt-1 font-display text-[12px] font-semibold text-brand">{String(i + 1).padStart(2, "0")}</span>
                    <span>
                      <span className="flex items-center gap-1.5 font-serif text-[1.3rem] leading-tight text-ink">
                        For {p.name}
                        <ArrowRight aria-hidden="true" className="h-4 w-4 -translate-x-1 text-brand opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                      </span>
                      <span className="mt-1 block text-[13.5px] text-ink-soft">{p.desc}</span>
                    </span>
                  </a>
                  <span className="flex gap-1.5 pl-8 sm:pl-0">
                    {p.apps.map((slug) => {
                      const app = byRoute(`/voice-keyboard-for-${slug}`);
                      if (!app) return null;
                      return (
                        <a key={slug} href={app.route} title={`Oravo for ${app.name}`} className="group rounded-lg transition-transform hover:-translate-y-0.5">
                          <AppGlyph icon={app.icon} color={app.color} size={34} title={app.name} />
                        </a>
                      );
                    })}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Band>

      {/* Topics + features pillar */}
      <Band color="var(--o-paper)" from="var(--o-band-clay)" blend={200} className="pt-24 pb-20 sm:pt-28 sm:pb-24">
        <div className={SHELL}>
          <SectionIntro doodle="speech" eyebrow="Guides" title="Popular Voice Typing Topics" lede="Explore our guides for specific platforms, languages, and use cases." />
          <div className="mt-12 grid gap-5 lg:grid-cols-[0.9fr_2fr]">
            <Reveal>
              <a
                href="/features"
                className="group relative flex h-full min-h-[240px] flex-col justify-between overflow-hidden rounded-2xl bg-mist p-7 text-ink shadow-[0_0_0_1px_rgba(51,48,42,0.08),0_24px_50px_-34px_rgba(51,48,42,0.45)]"
              >
                <Parallax speed={30} className="pointer-events-none absolute right-4 top-4" aria-hidden="true">
                  <Doodle name="sparkle" className="w-28" />
                </Parallax>
                <span className="font-display text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-faint">All features</span>
                <span className="relative">
                  <span className="block font-serif text-[1.7rem] leading-tight">Voice to Text, Perfected</span>
                  <span className="mt-2 block max-w-xs text-[14px] leading-relaxed text-ink-soft">
                    Explore all Oravo features: transcription, formatting, translation, and more.
                  </span>
                  <span className="mt-5 inline-flex items-center gap-2 font-display text-[13.5px] font-semibold text-primary-500">
                    See all features
                    <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </span>
              </a>
            </Reveal>
            <TopicShelf links={TOPICS} columns={2} />
          </div>
        </div>
      </Band>

      <ClosingBand
        from="var(--o-paper)"
        eyebrow="Free to start"
        title="Ready to Type with Your Voice?"
        description="Transform your productivity with Oravo. Speak naturally and communicate 4x faster in any app, with automatic formatting."
        primary={{ label: "Download free", href: "/download" }}
        footnote={["Free to start", "2-minute setup", "Works everywhere"]}
      />
    </MarketingShell>
  );
}

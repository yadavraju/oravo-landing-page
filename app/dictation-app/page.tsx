import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ArrowRight, Check, Mic } from "lucide-react";
import { siGmail, siGoogledocs, siNotion, siSlack, siWhatsapp } from "simple-icons";
import { Band } from "@/components/landing/Band";
import { Doodle } from "@/components/landing/Doodle";
import { MarketingShell } from "@/components/landing/MarketingShell";
import { PageHero, SectionIntro } from "@/components/landing/PageBlocks";
import { Parallax } from "@/components/landing/Parallax";
import { Reveal } from "@/components/landing/Reveal";
import { ClosingBand, FaqBand, JsonLd, RelatedBand } from "@/components/product-pages/blocks";
import { AppGlyph } from "@/components/product-pages/kit";
import { AccentMicDemo, LiveTranslateDemo } from "@/components/product-pages/ProductPageDemos";
import { SHELL } from "@/components/product-pages/shell";
import { faqJsonLd, type FaqItem } from "@/lib/faq";

export const metadata: Metadata = {
  title: "Best Dictation App 2024 | AI Voice to Text for Mac & Windows",
  description:
    "Best dictation app with AI accuracy. Understands every accent. Real-time translation. Works in all apps. 4x faster. Try free.",
  keywords: [
    "best dictation app",
    "dictation app",
    "dictation app free",
    "best free dictation app",
    "dictation app for mac",
    "dictation app for windows",
    "voice dictation app",
    "AI dictation app",
    "dictation app 2024",
    "top dictation apps",
    "dictation app for professionals",
    "free dictation app",
    "dictation app for pc",
    "best dictation software",
    "speech dictation app",
  ],
  openGraph: {
    title: "Best Dictation App 2024 | AI Voice to Text",
    description: "Best dictation app with AI accuracy. Understands every accent. 4x faster than typing.",
    url: "https://oravo.ai/dictation-app",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Dictation App 2024 | Oravo",
    description: "Best dictation app with AI accuracy. Understands every accent.",
  },
  alternates: {
    canonical: "https://oravo.ai/dictation-app",
  },
};

const FAQS: FaqItem[] = [
  {
    question: "What is the best dictation app in 2024?",
    answer:
      "Oravo is built to be the best dictation app for non-native English speakers. It focuses on accent recognition and real-time translation, and it works across all applications.",
  },
  {
    question: "Is there a free dictation app?",
    answer: "Yes! Oravo offers a free tier with generous usage limits. You can try all features before deciding if you need more capacity.",
  },
  {
    question: "What dictation app works with accents?",
    answer:
      "Oravo is specifically designed for accented speech. Unlike apps optimized for native speakers, Oravo is built for multilingual speakers and strong accents, and we're publishing an accent benchmark so you can inspect the results.",
  },
  {
    question: "Can I use dictation app on Mac and Windows?",
    answer: "Yes! Oravo has native apps for both macOS and Windows, optimized for each platform's capabilities. There's an Android app too, and iOS is coming soon.",
  },
];

const RELATED = [
  { title: "All Features", href: "/features", note: "Everything Oravo does" },
  { title: "Voice to Text App", href: "/voice-to-text-app", note: "Speech to text on every device" },
  { title: "Voice Dictation Software", href: "/voice-dictation-software", note: "For professional documents" },
  { title: "Voice Typing for Accents", href: "/voice-typing-for-accents", note: "Built for how you speak" },
  { title: "For Writers", href: "/for-writers", note: "Draft at the speed of thought" },
  { title: "All Use Cases", href: "/use-cases", note: "50+ app guides" },
];

const glyph = (i: { title: string; hex: string; path: string }) => ({ title: i.title, hex: i.hex, path: i.path });

function FeatureTile({ index, title, description, children }: { index: number; title: string; description: string; children: ReactNode }) {
  return (
    <Reveal delay={(index % 2) * 0.08}>
      <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-raised shadow-[0_0_0_1px_var(--o-line),0_18px_40px_-30px_rgba(51,48,42,0.4)] transition-transform duration-300 hover:-translate-y-1">
        <div className="flex min-h-[132px] items-center justify-center border-b border-line bg-canvas px-6 py-7">{children}</div>
        <div className="p-6 sm:p-7">
          <span className="font-display text-xs font-semibold text-brand">{String(index + 1).padStart(2, "0")}</span>
          <h3 className="display-3 mt-2 text-ink">{title}</h3>
          <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">{description}</p>
        </div>
      </article>
    </Reveal>
  );
}

export default function DictationAppPage() {
  return (
    <MarketingShell>
      <JsonLd data={faqJsonLd(FAQS)} />

      <PageHero
        eyebrow="Best dictation app"
        eyebrowIcon={<Mic aria-hidden="true" className="h-3.5 w-3.5 text-brand" />}
        title="Best Dictation App"
        description="AI-powered accuracy that understands every accent. Type 4x faster with your voice, in every app on your Mac or PC."
        primary={{ label: "Download free", href: "/download" }}
        secondary={{ label: "Watch demo", href: "/how-to-use" }}
        note="Free to try · Mac, Windows and Android · 60+ languages"
        doodles={["mic", "speech"]}
        visual={<AccentMicDemo />}
      />

      {/* The magic: translation */}
      <Band color="var(--o-paper)" from="var(--o-band-sand)" blend={200} className="pt-24 pb-20 sm:pt-28 sm:pb-28">
        <Parallax speed={60} className="pointer-events-none absolute left-[4%] top-40 hidden xl:block" aria-hidden="true">
          <Doodle name="globe" className="w-40" />
        </Parallax>
        <Parallax speed={-40} className="pointer-events-none absolute right-[5%] top-56 hidden xl:block" aria-hidden="true">
          <Doodle name="plane" className="w-32" />
        </Parallax>
        <div className={`${SHELL} relative`}>
          <SectionIntro
            doodle="bubbles"
            eyebrow="The magic"
            title="Speak Your Language. Get Perfect English."
            lede="Think in your native language. Speak naturally. Oravo translates and polishes your words into professional English—instantly."
          />
          <Reveal delay={0.1} className="mt-12">
            <LiveTranslateDemo />
          </Reveal>
          <Reveal delay={0.15}>
            <dl className="mx-auto mt-10 grid max-w-3xl grid-cols-3 divide-x divide-line text-center">
              {[
                { k: "60+", v: "Languages supported" },
                { k: "Real-time", v: "Translation speed" },
                { k: "Any app", v: "Where it types" },
              ].map((stat) => (
                <div key={stat.v} className="px-3">
                  <dt className="font-serif text-[1.3rem] leading-none text-ink sm:text-[2rem]">{stat.k}</dt>
                  <dd className="mt-2 font-display text-[12px] text-ink-faint sm:text-[13px]">{stat.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal delay={0.2} className="mt-10 flex justify-center">
            <a href="/download" className="btn-neutral">
              Try it free
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </a>
          </Reveal>
        </div>
      </Band>

      {/* Features */}
      <Band color="var(--o-band-clay)" from="var(--o-paper)" blend={200} className="pt-24 pb-20 sm:pt-28 sm:pb-24">
        <Parallax speed={100} className="pointer-events-none absolute -right-28 top-24" aria-hidden="true">
          <div className="h-80 w-80 rotate-12 rounded-[56px] bg-sand" />
        </Parallax>
        <div className={`${SHELL} relative`}>
          <SectionIntro
            align="left"
            doodle="sparkle"
            eyebrow="Beyond translation"
            title="Voice to Text, Perfected"
            lede="Beyond translation—Oravo understands context, adapts to your style, and works everywhere you do."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            <FeatureTile
              index={0}
              title="AI Mode: Any Accent, Perfect Text"
              description="Built for multilingual speakers and strong accents. Indian, Chinese, Spanish accents—all understood."
            >
              <div className="flex flex-wrap justify-center gap-2">
                {["Indian", "Nigerian", "Mexican", "Chinese", "Brazilian", "Filipino"].map((a, i) => (
                  <span
                    key={a}
                    className={`rounded-lg px-2.5 py-1 font-display text-[12px] font-semibold ring-1 ${i === 0 ? "bg-brand-soft text-brand ring-brand/30" : "bg-raised text-ink-soft ring-line"}`}
                  >
                    {a} English
                  </span>
                ))}
              </div>
            </FeatureTile>
            <FeatureTile index={1} title="Auto-Format" description="Smart punctuation, paragraphs, and capitalization. Speak naturally, get polished, professional text.">
              <div className="w-full max-w-sm space-y-2">
                <p className="text-[13.5px] italic text-ink-faint">
                  <span className="line-through decoration-brand">um</span> so the deck is ready <span className="line-through decoration-brand">uh</span> can you review it by friday
                </p>
                <p className="rounded-lg bg-raised px-3 py-2 text-[14.5px] font-medium text-ink ring-1 ring-line">So, the deck is ready. Can you review it by Friday?</p>
              </div>
            </FeatureTile>
            <FeatureTile
              index={2}
              title="Works Everywhere"
              description="Google Docs, Word, Slack, email, browser—if you can type there, Oravo works there. No copy-paste needed."
            >
              <div className="flex items-center gap-3">
                {[
                  { i: glyph(siGoogledocs), c: "#4285F4", t: "Google Docs" },
                  { i: glyph(siSlack), c: "#4A154B", t: "Slack" },
                  { i: glyph(siGmail), c: "#EA4335", t: "Gmail" },
                  { i: glyph(siNotion), c: "#33302A", t: "Notion" },
                  { i: glyph(siWhatsapp), c: "#25D366", t: "WhatsApp" },
                ].map((app, i) => (
                  <span key={app.t} className="group" style={{ transform: `translateY(${i % 2 ? 6 : -6}px)` }}>
                    <AppGlyph icon={app.i} color={app.c} size={42} title={app.t} />
                  </span>
                ))}
              </div>
            </FeatureTile>
            <FeatureTile
              index={3}
              title="Style-Matching"
              description="Oravo adapts to your tone and writing style across different apps. Formal for emails, casual for Slack—always sounds like you."
            >
              <div className="grid w-full max-w-sm gap-2">
                <p className="max-w-[85%] rounded-xl rounded-bl-sm bg-raised px-3 py-2 text-[13.5px] text-ink ring-1 ring-line">
                  <span className="mb-0.5 block font-display text-[10.5px] font-semibold text-ink-faint">Email</span>
                  Thank you for your patience. The revised proposal is attached.
                </p>
                <p className="ml-auto max-w-[75%] rounded-xl rounded-br-sm bg-espresso px-3 py-2 text-[13.5px] text-white">
                  <span className="mb-0.5 block font-display text-[10.5px] font-semibold text-white/50">Slack</span>
                  New proposal&apos;s up, take a look!
                </p>
              </div>
            </FeatureTile>
          </div>
          <Reveal delay={0.2}>
            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 font-display text-[13px] text-ink-soft">
              {["Free to try", "Mac & Windows", "60+ languages", "No copy-paste"].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <Check aria-hidden="true" className="h-3.5 w-3.5 text-brand" strokeWidth={2.5} />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Band>

      <FaqBand title="Frequently Asked Questions" items={FAQS} color="var(--o-paper)" from="var(--o-band-clay)" />

      <RelatedBand title="Related Topics" lede="More ways to put your voice to work." links={RELATED} color="var(--o-canvas)" from="var(--o-paper)" />

      <ClosingBand
        from="var(--o-canvas)"
        eyebrow="Free to try"
        title="Try the Best Dictation App"
        description="Type 4x faster with Oravo. Free to try, no credit card required."
        primary={{ label: "Download free", href: "/download" }}
        footnote={["Free tier available", "Mac & Windows", "No card required"]}
      />
    </MarketingShell>
  );
}

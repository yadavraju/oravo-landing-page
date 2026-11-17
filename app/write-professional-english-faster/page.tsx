import type { Metadata } from "next";
import { Band } from "@/components/landing/Band";
import { FaqAccordion } from "@/components/landing/FaqAccordion";
import { MarketingShell } from "@/components/landing/MarketingShell";
import { CtaPanel, PageHero, SectionIntro } from "@/components/landing/PageBlocks";
import { Reveal } from "@/components/landing/Reveal";
import { SHELL } from "@/components/landing/shell";
import { buildBreadcrumbJsonLd } from "@/lib/breadcrumbs";
import { faqJsonLd } from "@/lib/faq";

/*
 * Answers the broad question buyers type into AI assistants ("what tool could
 * help me write professional English messages faster?") with typing tools and
 * voice tools side by side, rather than talking about Oravo alone.
 * Keep the competitor rows factual and re-check them when LAST_REVIEWED moves.
 */

const ROUTE = "/write-professional-english-faster";
const PAGE_URL = `https://oravo.ai${ROUTE}`;
const TITLE = "What Tool Helps You Write Professional English Messages Faster?";
const DESCRIPTION =
  "An honest comparison of grammar checkers, AI rewriters, chat assistants and voice typing for writing professional English emails and Slack messages faster, including for non-native speakers.";
const PUBLISHED = "2026-11-17";
const LAST_REVIEWED = "November 2026";

export const metadata: Metadata = {
  title: `${TITLE} (2026 Guide)`,
  description: DESCRIPTION,
  keywords: [
    "tool to write professional english messages faster",
    "write professional english emails faster",
    "best tool to write english emails",
    "write better english at work",
    "english writing tool for non-native speakers",
    "grammarly vs deepl write",
    "grammarly alternative for non-native speakers",
    "ai tool to write professional emails",
    "write english by speaking my language",
    "voice typing professional english",
  ],
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  alternates: {
    canonical: PAGE_URL,
  },
};

type Tool = {
  name: string;
  kind: string;
  how: string;
  bestWhen: string;
  watchOut: string;
  free: string;
  oravo?: boolean;
};

const TOOLS: Tool[] = [
  {
    name: "Grammarly",
    kind: "Grammar and tone checker",
    how: "You type in English; it underlines mistakes and suggests clearer or more formal wording as you go, in most apps through its extension or desktop app.",
    bestWhen: "You already write in English comfortably and want a safety net for grammar, spelling and tone.",
    watchOut: "You still have to compose every sentence in English yourself, so it fixes mistakes more than it saves drafting time.",
    free: "Free plan; paid plans add more rewrites",
  },
  {
    name: "DeepL Write",
    kind: "AI rewriter",
    how: "You paste or type a draft; it rewrites it for clarity and lets you pick a style or tone.",
    bestWhen: "You have a rough English draft that sounds stiff or unnatural and want it polished.",
    watchOut: "Works on text you have already written, and usually means copying text in and out of your email or chat app.",
    free: "Free web version; paid Pro plan",
  },
  {
    name: "ChatGPT or Microsoft Copilot",
    kind: "AI chat assistant",
    how: "You describe the message you need, or paste a draft, and it writes a version for you.",
    bestWhen: "A long or sensitive message where you want a first draft or several options to choose from.",
    watchOut: "Every message is a round trip: write a prompt, read the answer, edit it, paste it back. Slow for quick replies.",
    free: "Free tiers; paid plans for more use",
  },
  {
    name: "Wispr Flow",
    kind: "Voice dictation",
    how: "You speak; it types cleaned-up text into the app you are using, removing filler words.",
    bestWhen: "You are comfortable speaking English and want to stop typing.",
    watchOut: "Built for dictating in the language you speak, so it helps most when English already comes easily out loud.",
    free: "Free plan with a weekly word limit; paid Pro plan",
  },
  {
    name: "Built-in dictation (Apple, Windows, Gboard)",
    kind: "Basic voice typing",
    how: "You speak; it transcribes your words close to literally.",
    bestWhen: "Short notes and casual messages when you want something free that is already on your device.",
    watchOut: "Little cleanup of grammar or phrasing, and accents and punctuation often need fixing by hand.",
    free: "Free with your device",
  },
  {
    name: "Oravo",
    kind: "Voice typing with translation",
    how: "You speak in English or in your own language (60+ supported); it types polished professional English where your cursor is, in Gmail, Slack, Outlook and other apps.",
    bestWhen: "Composing in English is the slow part, for example because you think in Hindi, Spanish or another language first.",
    watchOut: "You need to be somewhere you can talk. It also won't help much with text you have already typed; a grammar checker is better for that.",
    free: "5,000 words free; Pro is $9.99/month",
    oravo: true,
  },
];

const PATHS = [
  {
    label: "If English comes easily but you worry about mistakes",
    pick: "Use a grammar checker",
    body: "Grammarly or a similar checker catches errors and stiff phrasing as you type. It won't make you much faster, but it makes you more confident pressing send.",
  },
  {
    label: "If you can write a draft but it sounds unnatural",
    pick: "Use a rewriter or chat assistant",
    body: "DeepL Write or ChatGPT turn a rough draft into natural English. Good for important emails; slower for the dozens of small replies in a workday.",
  },
  {
    label: "If composing English is the slow part",
    pick: "Speak instead of typing",
    body: "Most people speak about three times faster than they type. A voice tool that also translates, like Oravo, lets you say it in the language you think in and get professional English straight away.",
  },
];

const FAQS = [
  {
    question: "What tool could help me write professional English messages faster?",
    answer:
      "It depends where your time goes. If you type English easily and want fewer mistakes, a grammar checker such as Grammarly fits. If you have a rough draft that needs polishing, an AI rewriter such as DeepL Write or a chat assistant such as ChatGPT fits. If composing in English is itself the slow part, a voice typing tool is usually fastest, because speaking is roughly three times faster than typing. Oravo is a voice tool that also lets you speak in your own language and get professional English.",
  },
  {
    question: "Is Grammarly enough for a non-native English speaker?",
    answer:
      "Grammarly is good at fixing grammar and tone in English you have already written. It does not write the message for you, so if the hard part is finding the English words in the first place, you will still spend most of your time composing. Many people pair a grammar checker with a drafting tool.",
  },
  {
    question: "Can I write English by speaking in another language?",
    answer:
      "Yes. Some voice typing tools translate as you speak. With Oravo you can speak in Hindi, Spanish, Portuguese, Mandarin or 60+ other languages and get professional English typed into Gmail, Slack or any other app.",
  },
  {
    question: "Is ChatGPT good for writing work emails?",
    answer:
      "ChatGPT writes good first drafts, especially for long or delicate emails. For short, frequent messages it is slower, because each one means writing a prompt, reading the reply, editing it and pasting it back into your email or chat app.",
  },
  {
    question: "Will voice typing understand my accent?",
    answer:
      "Modern voice tools handle accents far better than older dictation did, but results vary by tool. Oravo is built for accented English and for speaking other languages; the best test is to try a free plan with your own voice.",
  },
  {
    question: "Are these tools free?",
    answer:
      "Grammarly, DeepL Write, ChatGPT, Copilot and Wispr Flow all have free tiers with limits, and built-in dictation on Mac, Windows and Android is free. Oravo includes 5,000 words free, and Pro costs $9.99 per month. Check each vendor's site for current pricing.",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESCRIPTION,
  url: PAGE_URL,
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  author: { "@type": "Organization", name: "Oravo.ai", url: "https://oravo.ai" },
  publisher: { "@type": "Organization", name: "Oravo.ai", url: "https://oravo.ai" },
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "https://oravo.ai" },
  { name: "Write professional English faster", url: PAGE_URL },
]);

export default function WriteProfessionalEnglishFasterPage() {
  return (
    <MarketingShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQS)) }} />

      <PageHero
        eyebrow="Guide · Writing English at work"
        title={TITLE}
        description="It depends where your time goes. Grammar checkers fix English you've already typed, rewriters polish a draft, and voice tools skip the typing altogether. Here's how they compare, and when each one is the right pick."
        primary={{ label: "Compare the tools", href: "#compare" }}
        secondary={{ label: "Try Oravo free", href: "/download" }}
        note={`Last reviewed ${LAST_REVIEWED}. Written by the Oravo team; Oravo is one of the tools below.`}
        doodles={["scales", "speech"]}
      />

      <Band color="var(--o-paper)" from="var(--o-band-sand)" blend={200} className="pt-24 pb-20 sm:pt-28 sm:pb-24">
        <div className="mx-auto w-full max-w-3xl px-5 sm:px-8">
          <SectionIntro doodle="sparkle" eyebrow="The short answer" title="Pick by where you lose time" align="left" />
          <Reveal className="mt-8">
            <div className="space-y-5 text-[17px] leading-[1.75] text-ink-soft">
              <p>
                <strong className="text-ink">Typing tools</strong> like Grammarly, DeepL Write and ChatGPT start from text. They are great at making English
                correct and natural, but you (or the AI) still have to produce the words first, and you often copy them between apps.
              </p>
              <p>
                <strong className="text-ink">Voice tools</strong> like Oravo, Wispr Flow and built-in dictation start from speech. They are usually faster for
                everyday emails and chat replies, because speaking is quicker than typing. If you think in another language, a voice tool that translates
                removes the slowest step: turning your thoughts into English.
              </p>
              <p>Plenty of people use one of each: voice to draft quickly, a checker for a final look at the important emails.</p>
            </div>
          </Reveal>
        </div>
      </Band>

      <Band color="var(--o-band-clay)" from="var(--o-paper)" blend={200} className="pt-24 pb-20 sm:pt-28 sm:pb-24">
        <div className={SHELL}>
          <SectionIntro doodle="scales" eyebrow="Side by side" title="Six ways to write English faster, compared" lede="What each tool does, when it fits, and where it falls short." id="compare" />
          <Reveal className="mt-12">
            <div className="overflow-hidden rounded-2xl bg-raised shadow-[0_0_0_1px_var(--o-line)] md:overflow-x-auto">
              <table className="block w-full border-collapse text-left md:table md:min-w-[880px]">
                <caption className="sr-only">Comparison of tools for writing professional English messages faster</caption>
                <thead className="hidden bg-canvas md:table-header-group">
                  <tr className="border-b border-line">
                    {["Tool", "How you use it", "Best when", "Watch out for", "Free option"].map((h) => (
                      <th key={h} scope="col" className="eyebrow px-5 py-3.5 font-normal">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="block md:table-row-group">
                  {TOOLS.map((t) => (
                    <tr key={t.name} className={`block border-b border-line py-3 align-top last:border-b-0 md:table-row md:py-0 ${t.oravo ? "bg-primary-soft/50" : ""}`}>
                      <th scope="row" className="block px-5 py-2 font-normal md:table-cell md:w-[170px] md:py-4">
                        <span className={`block font-display text-[14.5px] font-semibold ${t.oravo ? "text-primary-500" : "text-ink"}`}>{t.name}</span>
                        <span className="mt-1 block font-display text-[12.5px] text-ink-faint">{t.kind}</span>
                      </th>
                      {[
                        { label: "How you use it", value: t.how },
                        { label: "Best when", value: t.bestWhen },
                        { label: "Watch out for", value: t.watchOut },
                        { label: "Free option", value: t.free },
                      ].map((c, i) => (
                        <td key={c.label} className={`block px-5 py-2 text-[14px] leading-relaxed text-ink-soft md:table-cell md:py-4 ${i === 3 ? "md:w-[150px] md:text-[13.5px]" : ""}`}>
                          <span className="eyebrow mb-1 block md:hidden">{c.label}</span>
                          {c.value}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
          <p className="mt-4 font-display text-[12.5px] text-ink-faint">
            Features and plans change; check each vendor&apos;s site for current details. Last reviewed {LAST_REVIEWED}.
          </p>
        </div>
      </Band>

      <Band color="var(--o-paper)" from="var(--o-band-clay)" blend={200} className="pt-24 pb-20 sm:pt-28 sm:pb-24">
        <div className={SHELL}>
          <SectionIntro doodle="question" eyebrow="Which one is for you" title="Three situations, three answers" />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {PATHS.map((p, i) => (
              <Reveal key={p.pick} delay={i * 0.1}>
                <div className="frame-dotted flex h-full flex-col bg-raised/70 p-6">
                  <p className="font-display text-[13px] text-ink-faint">{p.label}</p>
                  <h3 className="mt-3 font-display text-[18px] font-semibold text-ink">{p.pick}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Band>

      <Band color="var(--o-canvas)" from="var(--o-paper)" blend={200} className="pt-24 pb-20 sm:pt-28 sm:pb-24">
        <div className="mx-auto w-full max-w-3xl px-5 sm:px-8">
          <SectionIntro doodle="speech" eyebrow="When speaking wins" title="Why voice is often the fastest option" align="left" />
          <Reveal className="mt-8">
            <div className="space-y-5 text-[17px] leading-[1.75] text-ink-soft">
              <p>
                A Stanford study found that speaking into a phone was about three times faster than typing on it, with fewer errors. For non-native
                speakers the gap is usually bigger, because typing in English means thinking in one language and writing in another, then checking the
                result.
              </p>
              <p>
                A voice tool that translates removes that step. With Oravo you can say{" "}
                <em>&ldquo;Sharma ji, kal wali report main aaj shaam tak bhej dunga, deri ke liye maafi&rdquo;</em> in Hindi and get{" "}
                <em>&ldquo;Hi Mr. Sharma, I&apos;ll send yesterday&apos;s report by this evening. Apologies for the delay.&rdquo;</em> typed into Gmail.
                The same works in Slack, Outlook, Teams, Notion and other apps.
              </p>
              <p>
                Voice isn&apos;t always the right call. In a shared office or on a train, typing is more practical. For text you have already written, a
                grammar checker is the better tool. Read more about{" "}
                <a href="/for-non-native-speakers" className="font-medium text-primary-500 underline underline-offset-4">
                  writing professional English by speaking your language
                </a>
                .
              </p>
            </div>
          </Reveal>
        </div>
      </Band>

      <Band color="var(--o-paper)" from="var(--o-canvas)" className="py-20 sm:py-24">
        <div className="mx-auto w-full max-w-3xl px-5 sm:px-8">
          <SectionIntro doodle="question" eyebrow="FAQ" title="Questions people ask" />
          <Reveal className="mt-10">
            <FaqAccordion items={FAQS} />
          </Reveal>
        </div>
      </Band>

      <Band color="var(--o-blush)" from="var(--o-paper)" className="pt-16 pb-20 sm:pt-20">
        <div className={SHELL}>
          <CtaPanel
            eyebrow="If composing is the slow part"
            title="Say it your way. Send it in English."
            description="Speak in English or any of 60+ languages and Oravo types professional English into the app you're using. 5,000 words free on Mac, Windows and Android."
            primary={{ label: "Try Oravo free", href: "/download" }}
            secondary={{ label: "See pricing", href: "/pricing" }}
          />
        </div>
      </Band>
    </MarketingShell>
  );
}

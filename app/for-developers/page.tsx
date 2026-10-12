import type { Metadata } from "next";
import { ClipboardList, Code2, FileCode2, FileText, GitPullRequest, MessagesSquare, Terminal } from "lucide-react";
import { AudienceDemo } from "@/components/audience/AudienceDemo";
import { AudienceHero } from "@/components/audience/AudienceHero";
import { AudienceCta, AudienceFaq, Statement } from "@/components/audience/AudienceSections";
import { FeatureIndex } from "@/components/audience/FeatureLayouts";
import { ScenarioSwitcher } from "@/components/audience/ScenarioLayouts";
import { BAND_PAD, GROUND, SHELL } from "@/components/audience/shell";
import { Band } from "@/components/landing/Band";
import { MarketingShell } from "@/components/landing/MarketingShell";
import { faqJsonLd } from "@/lib/faq";

export const metadata: Metadata = {
  title: "Dictation for Developers | Code Documentation Voice Typing | Oravo AI",
  description:
    "Document code, write specs, and update tickets without leaving your IDE. Technical terminology recognized. Voice typing built for software engineers.",
  keywords: [
    "dictation for developers",
    "developer voice to text",
    "code documentation voice",
    "programming voice typing",
    "software engineer dictation",
    "IDE voice typing",
    "technical documentation voice",
    "developer productivity",
    "code comments dictation",
    "jira ticket voice",
    "github issues voice",
    "pull request description voice",
    "developer tools",
    "coding voice assistant",
    "technical writing voice",
    "spec writing dictation",
  ],
  openGraph: {
    title: "Dictation for Developers | Code Documentation Voice Typing | Oravo AI",
    description: "Document code, write specs, and update tickets without leaving your IDE. Technical terminology recognized.",
    url: "https://oravo.ai/for-developers",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dictation for Developers | Oravo AI",
    description: "Document code and write specs without leaving your IDE.",
  },
  alternates: {
    canonical: "https://oravo.ai/for-developers",
  },
};

const FEATURES = [
  {
    icon: <FileText />,
    title: "Code Documentation",
    description: "Dictate README files, API docs, and inline comments while reviewing code. Documentation without context switching.",
  },
  {
    icon: <ClipboardList />,
    title: "Ticket Updates",
    description: "Update Jira, Linear, GitHub issues without leaving your IDE. Detailed ticket descriptions, fast.",
  },
  {
    icon: <Terminal />,
    title: "Technical Terms",
    description: "Oravo recognizes programming languages, frameworks, libraries, and technical vocabulary, and you can add your own identifiers to custom vocabulary.",
  },
  {
    icon: <GitPullRequest />,
    title: "PR Descriptions",
    description: "Write detailed pull request descriptions by voice. Explain your changes clearly without typing fatigue.",
  },
  {
    icon: <MessagesSquare />,
    title: "Slack & Teams",
    description: "Respond to messages, explain technical decisions, and collaborate with teammates without switching contexts.",
  },
  {
    icon: <FileCode2 />,
    title: "Spec Writing",
    description: "Draft technical specifications, architecture docs, and design documents by speaking your thoughts.",
  },
];

const SCENARIOS = [
  {
    title: "Code Reviews",
    description: "Leave detailed review comments by voice. Explain your suggestions clearly without typing everything out.",
    say: "nice cleanup, one thing, this effect re-runs on every render because options is a new object each time, maybe memo it or pull it out of the component",
    where: "GitHub review",
    get: "Nice cleanup! One thing: this effect re-runs on every render because `options` is a new object each time. Maybe memoize it, or move it out of the component?",
  },
  {
    title: "Sprint Planning",
    description: "Document requirements, acceptance criteria, and technical notes during planning sessions.",
    say: "acceptance criteria, user can reset password from the login screen, link expires after thirty minutes, show an error if the link was already used",
    where: "Linear",
    get: "Acceptance criteria\n• User can reset their password from the login screen\n• The reset link expires after 30 minutes\n• Show an error if the link has already been used",
  },
  {
    title: "Bug Reports",
    description: "Describe reproduction steps, expected vs actual behavior, and technical details as you debug.",
    say: "steps, open settings on safari, toggle dark mode twice, expected the theme to stick, actual it falls back to light after reload",
    where: "Jira",
    get: "Steps: open Settings in Safari and toggle dark mode twice.\nExpected: the theme persists.\nActual: it falls back to light after a reload.",
  },
  {
    title: "Technical Docs",
    description: "Write architecture decisions, runbooks, and onboarding docs at speaking speed.",
    say: "we chose postgres over dynamo because most of our queries are relational and the team already knows sql, revisit if write volume grows ten x",
    where: "Notion",
    get: "We chose Postgres over DynamoDB because most of our queries are relational and the team already knows SQL. Revisit if write volume grows 10x.",
  },
];

const FAQS = [
  {
    question: "Does it work in VS Code / JetBrains?",
    answer: "Yes. Oravo works in VS Code, JetBrains IDEs, Vim, Emacs—any editor with a text input. It types wherever your cursor is.",
  },
  {
    question: "Can it handle technical terminology?",
    answer:
      "Yes. Oravo recognizes programming terms, framework names, library references, and common tech vocabulary. Add project-specific names to your custom vocabulary so they come out right every time.",
  },
  {
    question: "What about code syntax?",
    answer: "Oravo is optimized for natural language documentation. For actual code, pair it with Copilot or use for comments, docs, and tickets.",
  },
  {
    question: "Does it slow down my workflow?",
    answer:
      "No. You press a hotkey, speak, and the text lands where your cursor already is, so there is no app to switch to. Most of the time saved is the context switching around documentation tasks.",
  },
];

export default function ForDevelopersPage() {
  return (
    <MarketingShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQS)) }} />

      <AudienceHero
        eyebrow="For Developers"
        icon={<Code2 />}
        lead="Dictation"
        accent="for Developers"
        description="Document code, write specs, and update tickets without leaving your IDE. Technical terminology recognized."
        proof={["Works in VS Code", "Technical terms", "Stay in flow"]}
        doodles={["windows", "hotkey"]}
        visual={
          <AudienceDemo
            skin="editor"
            app="GitHub"
            field="Pull request description"
            icon={<GitPullRequest />}
            say="okay so this PR fixes the race condition in the token refresh, um, we add a mutex around refresh token and two tests for the retry path, closes four twelve"
            output={"## Summary\nFixes the race condition in the token refresh.\n\n## Changes\n- Adds a mutex around refreshToken()\n- Adds two tests for the retry path\n\nCloses #412"}
            terms={["refreshToken()", "#412"]}
            doneNote="Formatted as Markdown"
          />
        }
      />

      <Band color={GROUND.paper} from={GROUND.sand} blend={200} className={BAND_PAD}>
        <div className={SHELL}>
          <FeatureIndex
            intro={{
              doodle: "windows",
              eyebrow: "Features",
              title: "Built for Dev Workflows",
              lede: "Write docs, not code comments at 2am. Keep your hands on the keyboard for what matters.",
            }}
            items={FEATURES}
            aside={
              <div className="frame-dotted p-5">
                <p className="eyebrow">Where it types</p>
                <p className="mt-2 font-mono text-[13px] leading-relaxed text-ink-soft">
                  VS Code · JetBrains · Vim · Emacs · GitHub · Jira · Linear · Slack · Teams · Notion
                </p>
              </div>
            }
          />
        </div>
      </Band>

      <Band color={GROUND.clay} from={GROUND.paper} blend={200} className={BAND_PAD}>
        <div className={SHELL}>
          <ScenarioSwitcher
            intro={{ doodle: "bubbles", eyebrow: "Use cases", title: "Developer Use Cases", lede: "See how engineers use Oravo to ship faster." }}
            items={SCENARIOS}
          />
        </div>
      </Band>

      <Band color={GROUND.mist} from={GROUND.clay} blend={200} className={BAND_PAD}>
        <div className={SHELL}>
          <Statement
            doodle="hotkey"
            eyebrow="Stay in flow"
            title="Explain the change while it's still in your head."
            body="The best PR description is the one you write right after the fix, before the next ticket pulls you away. Press the hotkey, talk it through, and keep going."
            pointsLabel="In your editor"
            points={[
              "Types wherever your cursor is: IDE, browser, terminal prompt",
              "Keeps identifiers like refreshToken() and issue numbers intact",
              "Custom vocabulary for your project's names",
              "Natural language in, Markdown-ready text out",
            ]}
          />
        </div>
      </Band>

      <Band color={GROUND.canvas} from={GROUND.mist} blend={200} className={BAND_PAD}>
        <div className={SHELL}>
          <AudienceFaq intro={{ doodle: "question", eyebrow: "FAQ", title: "Frequently Asked Questions" }} items={FAQS} />
        </div>
      </Band>

      <Band color={GROUND.blush} from={GROUND.canvas} className="pt-16 pb-20 sm:pt-20">
        <div className={SHELL}>
          <AudienceCta
            doodle="speed"
            eyebrow="Ship faster"
            title="Ship Faster. Document Better."
            description="Write docs, tickets and PR descriptions at speaking speed, and stay in flow."
            bullets={["Works in your IDE", "Technical terms recognized", "2-minute setup"]}
          />
        </div>
      </Band>
    </MarketingShell>
  );
}

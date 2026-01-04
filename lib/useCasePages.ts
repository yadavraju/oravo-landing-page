import type { Metadata } from "next";
import {
  siAirtable,
  siApple,
  siArc,
  siAsana,
  siCanva,
  siChatgpt,
  siClaude,
  siClickup,
  siDiscord,
  siEvernote,
  siFigma,
  siGhost,
  siGithub,
  siGmail,
  siGooglechrome,
  siGoogledocs,
  siHubspot,
  siInstagram,
  siIntercom,
  siJira,
  siLinear,
  siLinkedin,
  siMedium,
  siMicrosoftoutlook,
  siMicrosoftteams,
  siMondaydotcom,
  siMessenger,
  siNotion,
  siObsidian,
  siPerplexity,
  siReplit,
  siSignal,
  siSlack,
  siSalesforce,
  siStackoverflow,
  siSubstack,
  siTelegram,
  siTrello,
  siV,
  siVercel,
  siVisualstudiocode,
  siWarp,
  siWhatsapp,
  siWordpress,
  siZendesk,
} from "simple-icons";

import type {
  SimpleIconData,
  UseCasePageConfig,
} from "@/components/use-case/UseCasePageTemplate";

// Helper to extract only serializable icon data from simple-icons objects
function toIconData(icon: { title: string; hex: string; path: string } | null): SimpleIconData {
  if (!icon) return null;
  return { title: icon.title, hex: icon.hex, path: icon.path };
}

type CopyCategory =
  | "communication"
  | "productivity"
  | "developer"
  | "ai"
  | "writing"
  | "design"
  | "browser"
  | "crm"
  | "support";

type AppSeed = {
  dir: string;
  route: string;
  appName: string;
  accentColor: string;
  brandIcon: SimpleIconData;
  category: CopyCategory;
  /** extra keywords to include beyond defaults */
  extraKeywords?: string[];
};

function titleCaseApp(appName: string) {
  return appName;
}

function baseKeywords(appName: string, category: CopyCategory): string[] {
  const app = appName.toLowerCase();
  const common = [
    "voice keyboard",
    "voice typing",
    "voice to text",
    "speech to text",
    "AI dictation",
    "voice dictation",
    "hands-free typing",
    "dictation software",
    "automatic punctuation",
    "voice typing app",
    `voice keyboard for ${app}`,
    `${app} voice to text`,
    `${app} speech to text`,
    `dictate ${app}`,
    `voice typing ${app}`,
  ];

  const byCategory: Record<CopyCategory, string[]> = {
    communication: [
      "dictate messages",
      "dictate DMs",
      "faster messaging",
      "team chat dictation",
    ],
    productivity: [
      "task updates by voice",
      "project management dictation",
      "dictate tasks",
      "hands-free productivity",
    ],
    developer: [
      "developer voice typing",
      "dictate code comments",
      "dictate PR descriptions",
      "technical vocabulary dictation",
    ],
    ai: ["AI prompts by voice", "better prompts", "prompt dictation", "speak prompts"],
    writing: ["write faster", "dictate notes", "content dictation", "note taking by voice"],
    design: ["design comments by voice", "creative workflow dictation", "design feedback dictation"],
    browser: ["type anywhere", "voice typing in browser", "voice input for forms", "web dictation"],
    crm: ["CRM notes dictation", "sales notes by voice", "update CRM faster", "deal notes dictation"],
    support: [
      "customer support dictation",
      "ticket replies by voice",
      "support productivity",
      "helpdesk dictation",
    ],
  };

  return [...common, ...byCategory[category]];
}

export function buildUseCaseMetadata(page: UseCasePageConfig): Metadata {
  const canonical = `https://oravo.ai${page.route}`;
  // Keep title format consistent with existing Slack/Gmail pages.
  const title = `${page.heroTitle}: ${page.appName} Voice Typing 4x Faster | Oravo AI`;
  const description = page.heroDescription;
  const keywords = Array.from(new Set(pageKeywords(page)));

  return {
    title,
    description,
    keywords,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.png"],
    },
  };
}

function pageKeywords(page: UseCasePageConfig): string[] {
  // Derive category from route prefix in our seeds; stored in config via hidden field.
  // @ts-expect-error internal field
  const category: CopyCategory = page.__category;
  // @ts-expect-error internal field
  const extra: string[] = page.__extraKeywords || [];
  return [...baseKeywords(page.appName, category), ...extra];
}

function makeConfig(seed: AppSeed): UseCasePageConfig {
  const appName = titleCaseApp(seed.appName);

  const commonSteps = [
    {
      title: "Install Oravo",
      description:
        "Download Oravo for Mac, Windows, iOS, or Android. Setup takes about 2 minutes.",
    },
    {
      title: `Open ${appName}`,
      description:
        "Use the desktop app or web app—Oravo works anywhere you can type.",
    },
    {
      title: "Click any text field",
      description:
        "Place your cursor where you want to type (message box, editor, comment, or form).",
    },
    {
      title: "Press your hotkey and speak",
      description:
        "Activate Oravo with your hotkey and speak naturally—Oravo adds punctuation and formatting automatically.",
    },
    {
      title: "Review and send/save",
      description:
        "Your speech appears as clean text. Make quick edits if needed and hit send or save.",
    },
  ];

  const categoryCopy: Record<
    CopyCategory,
    Pick<
      UseCasePageConfig,
      | "featuresTitle"
      | "featuresDescription"
      | "features"
      | "howItWorksTitle"
      | "howItWorksDescription"
      | "useCasesTitle"
      | "useCasesDescription"
      | "useCases"
      | "faqTitle"
      | "faqs"
      | "ctaTitle"
      | "ctaDescription"
    >
  > = {
    communication: {
      featuresTitle: `What Oravo Lets You Do in ${appName}`,
      featuresDescription:
        "Send clearer messages faster—without breaking your flow.",
      features: [
        {
          title: "Dictate messages 4x faster",
          description:
            "Speak complete messages and replies. Oravo turns speech into clean text instantly.",
        },
        {
          title: "Handle DMs and threads effortlessly",
          description:
            "Keep up with fast-moving conversations by speaking your replies instead of typing.",
        },
        {
          title: "Write longer, clearer updates",
          description:
            "Share context and details without typing fatigue—perfect for async communication.",
        },
        {
          title: "Automatic punctuation + paragraphs",
          description:
            'No more saying "comma" or "period". Oravo formats text for you.',
        },
        {
          title: "Works in web + desktop",
          description:
            `Use Oravo in ${appName} web and desktop apps. Same hotkey, same experience.`,
        },
        {
          title: "Private and secure",
          description:
            "Built for professionals: encrypted processing and privacy-first design.",
        },
      ],
      howItWorksTitle: `Start Voice Typing in ${appName}`,
      howItWorksDescription: "Get started in under 2 minutes.",
      useCasesTitle: `Transform Your ${appName} Workflow`,
      useCasesDescription: "Real scenarios where voice saves time every day.",
      useCases: [
        {
          title: "Quick status updates",
          withOravo:
            "Dictate a concise update with clear action items and send immediately.",
          timeSaved: "60–80%",
        },
        {
          title: "Detailed explanations",
          scenario: "Explaining decisions, troubleshooting, or giving feedback",
          withOravo:
            "Speak naturally while referencing docs or code on your screen—no context switching.",
          result: "More clarity, less back-and-forth",
        },
        {
          title: "Async collaboration",
          scenario: "Teams working across time zones",
          withOravo:
            "Record complete, thoughtful messages at speaking speed so teammates get everything they need the first time.",
          result: "Fewer follow-up questions",
        },
        {
          title: "Faster inbox + DMs",
          withOravo:
            "Reply to multiple DMs quickly while staying focused on your primary task.",
          timeSaved: "50–70%",
        },
      ],
      faqTitle: "Frequently Asked Questions",
      faqs: [
        {
          question: `Does Oravo work in ${appName} web and desktop apps?`,
          answer:
            "Yes. Oravo works anywhere you can type—web apps and desktop apps—with the same hotkey workflow.",
        },
        {
          question: "Is Oravo better than built-in dictation?",
          answer:
            "Oravo is built for speed and quality: automatic punctuation/formatting, high accuracy, and it works across all apps—not just one.",
        },
        {
          question: "Can I edit text before sending?",
          answer:
            "Yes. Oravo produces normal text in the input field so you can review and tweak it before sending.",
        },
        {
          question: "Will people know I'm using dictation?",
          answer:
            "No. Recipients only see your message as text—just like typing.",
        },
        {
          question: "Does it handle names and terminology?",
          answer:
            "Oravo learns your vocabulary over time and supports custom terms for better accuracy.",
        },
        {
          question: "Is it secure?",
          answer:
            "Yes—Oravo is built with privacy-first architecture and encrypted processing designed for professional use.",
        },
      ],
      ctaTitle: `Try Oravo Voice Keyboard in ${appName}`,
      ctaDescription:
        "Stop typing messages. Start speaking them—faster, clearer, and with perfect formatting.",
    },
    productivity: {
      featuresTitle: `Voice Typing for ${appName}`,
      featuresDescription:
        "Capture tasks, updates, and comments at speaking speed.",
      features: [
        {
          title: "Faster task updates",
          description:
            "Dictate task descriptions, comments, and next steps without losing momentum.",
        },
        {
          title: "Better project context",
          description:
            "Add richer detail so teammates understand decisions and blockers immediately.",
        },
        {
          title: "Hands-free meetings to tasks",
          description:
            "Turn spoken meeting outcomes into actionable tasks in seconds.",
        },
        {
          title: "Automatic formatting",
          description:
            "Oravo adds punctuation and structure so your tasks look clean and professional.",
        },
        {
          title: "Works across your tools",
          description:
            `Use Oravo in ${appName} plus email, chat, docs, and browsers—same workflow everywhere.`,
        },
        {
          title: "Privacy-first",
          description:
            "Built for professionals with encrypted processing and no messy copy/paste workflows.",
        },
      ],
      howItWorksTitle: `Start Dictating in ${appName}`,
      howItWorksDescription: "From idea → task in minutes.",
      useCasesTitle: `Get More Done in ${appName}`,
      useCasesDescription: "Common workflows where voice saves serious time.",
      useCases: [
        {
          title: "Create tasks instantly",
          withOravo:
            "Speak a full task with acceptance criteria and due dates in one pass.",
          timeSaved: "60–80%",
        },
        {
          title: "Comment updates faster",
          scenario: "Posting progress in a busy sprint",
          withOravo:
            "Dictate clear status updates and blockers while you continue working.",
          result: "Clearer updates, less confusion",
        },
        {
          title: "Log meeting outcomes",
          scenario: "Turning discussions into action",
          withOravo:
            "Speak next steps directly into tasks and subtasks while reviewing notes.",
          timeSaved: "50–70%",
        },
        {
          title: "Async collaboration",
          withOravo:
            "Add comprehensive context so teammates don’t need to ask follow-up questions.",
          result: "Less back-and-forth",
        },
      ],
      faqTitle: "Frequently Asked Questions",
      faqs: [
        {
          question: `Does Oravo work in ${appName} web and desktop?`,
          answer:
            "Yes—Oravo works anywhere you can type, including web and desktop versions.",
        },
        {
          question: "Can I dictate into task titles and descriptions?",
          answer:
            "Yes. Click any field (title, description, comment) and dictate—Oravo types where your cursor is.",
        },
        {
          question: "Will it keep my formatting clean?",
          answer:
            "Yes—Oravo adds punctuation and paragraph structure automatically so tasks remain readable.",
        },
        {
          question: "Does it support technical terms?",
          answer:
            "Yes—Oravo supports custom vocabulary and learns over time.",
        },
        {
          question: "Is it secure for teams?",
          answer:
            "Yes—privacy-first and encrypted processing designed for professional workflows.",
        },
        {
          question: "Does it work in other tools too?",
          answer:
            "Yes—Oravo works across your entire workflow: docs, email, chat, browser apps, and more.",
        },
      ],
      ctaTitle: `Move Faster in ${appName}`,
      ctaDescription:
        "Capture tasks and updates at speaking speed—without typing fatigue.",
    },
    developer: {
      featuresTitle: `Developer Voice Typing for ${appName}`,
      featuresDescription:
        "Write technical content and collaboration messages at speaking speed.",
      features: [
        {
          title: "PR/issue descriptions by voice",
          description:
            "Dictate thorough PR descriptions, bug reports, and reproduction steps.",
        },
        {
          title: "Technical vocabulary support",
          description:
            "Oravo recognizes developer terminology and learns your project language.",
        },
        {
          title: "Faster documentation",
          description:
            "Dictate READMEs, docs, and changelogs with clean structure and punctuation.",
        },
        {
          title: "Better AI prompts",
          description:
            "Provide richer context to AI tools—more detail = better output.",
        },
        {
          title: "Works everywhere you write",
          description:
            "Use Oravo in editors, browsers, terminals, and tools—same workflow everywhere.",
        },
        {
          title: "Privacy-first",
          description:
            "Encrypted processing and privacy-first architecture suitable for professional environments.",
        },
      ],
      howItWorksTitle: `Start Voice Typing in ${appName}`,
      howItWorksDescription: "Better docs and collaboration in minutes.",
      useCasesTitle: `Ship Faster with ${appName}`,
      useCasesDescription: "High-leverage developer workflows with voice.",
      useCases: [
        {
          title: "Write better PR descriptions",
          withOravo:
            "Speak the motivation, approach, and testing notes—cleanly formatted and complete.",
          result: "Better reviews, fewer questions",
        },
        {
          title: "Bug reports with full context",
          scenario: "Capturing repro steps quickly",
          withOravo:
            "Dictate exact steps, expected behavior, and logs while it’s fresh in your mind.",
          timeSaved: "50–70%",
        },
        {
          title: "Documentation bursts",
          withOravo:
            "Dictate docs while reading code—no need to switch context to type.",
          timeSaved: "60–80%",
        },
        {
          title: "Async technical discussions",
          withOravo:
            "Explain tradeoffs and decisions at speaking speed so teammates can move forward.",
          result: "Faster alignment",
        },
      ],
      faqTitle: "Frequently Asked Questions",
      faqs: [
        {
          question: "Does it understand technical terms?",
          answer:
            "Yes—Oravo supports technical vocabulary and custom terms for your stack and product.",
        },
        {
          question: "Can I use it for PRs and issues?",
          answer:
            "Yes—dictate into any text field, including PR/issue bodies, comments, and commit messages.",
        },
        {
          question: "Will it slow down my workflow?",
          answer:
            "No—Oravo activates only when you press your hotkey, so it stays out of the way.",
        },
        {
          question: "Does it work across apps?",
          answer:
            "Yes—Oravo works in browsers, editors, chat tools, and docs with one consistent workflow.",
        },
        {
          question: "Is it secure for work?",
          answer:
            "Yes—privacy-first architecture and encrypted processing designed for professional environments.",
        },
        {
          question: "Can I edit before posting?",
          answer:
            "Yes—Oravo produces normal text you can edit before submitting.",
        },
      ],
      ctaTitle: `Write Better Dev Notes in ${appName}`,
      ctaDescription:
        "Turn thoughts into clear technical writing—4x faster than typing.",
    },
    ai: {
      featuresTitle: `Voice Input for ${appName}`,
      featuresDescription:
        "Speak richer prompts and get better AI outputs faster.",
      features: [
        {
          title: "Long prompts without typing fatigue",
          description:
            "Give the full context: constraints, goals, edge cases—without slowing down.",
        },
        {
          title: "Better responses from better prompts",
          description:
            "AI output quality tracks input quality. Voice makes high-quality prompts effortless.",
        },
        {
          title: "Faster iteration",
          description:
            "Refine your prompt conversationally and iterate quickly.",
        },
        {
          title: "Automatic formatting",
          description:
            "Clean punctuation and structure make prompts easier to read and edit before sending.",
        },
        {
          title: "Works everywhere",
          description:
            `Use Oravo with ${appName} in web and apps—plus docs, chat, and email.`,
        },
        {
          title: "Privacy-first",
          description:
            "Built with encrypted processing and privacy-first design for professionals.",
        },
      ],
      howItWorksTitle: `Start Voice Prompting in ${appName}`,
      howItWorksDescription: "Better prompts in minutes.",
      useCasesTitle: `Get More Value from ${appName}`,
      useCasesDescription: "Voice-powered workflows for better AI results.",
      useCases: [
        {
          title: "Explain complex tasks",
          withOravo:
            "Speak the full requirements and constraints so the model can respond accurately.",
          result: "Fewer follow-ups needed",
        },
        {
          title: "Brainstorm faster",
          withOravo:
            "Talk through ideas and quickly explore variants and alternatives.",
          timeSaved: "40–60%",
        },
        {
          title: "Research + synthesis",
          withOravo:
            "Provide background context and desired output format in one pass.",
          result: "Better-structured answers",
        },
        {
          title: "Editing and rewriting",
          withOravo:
            "Dictate rewrite instructions with tone, audience, and length constraints.",
          timeSaved: "50–70%",
        },
      ],
      faqTitle: "Frequently Asked Questions",
      faqs: [
        {
          question: `Does Oravo work in ${appName} web and apps?`,
          answer:
            "Yes—Oravo works anywhere you can type. Use it in web apps, desktop apps, and mobile apps.",
        },
        {
          question: "Can I edit prompts before sending?",
          answer:
            "Yes—Oravo produces text in the prompt box so you can tweak it before submitting.",
        },
        {
          question: "Will it improve AI response quality?",
          answer:
            "Usually, yes—because you can provide more context and clearer instructions quickly.",
        },
        {
          question: "Does it support technical vocabulary?",
          answer:
            "Yes—Oravo recognizes technical terms and supports custom vocabulary.",
        },
        {
          question: "Is it private?",
          answer:
            "Yes—privacy-first architecture and encrypted processing.",
        },
        {
          question: "Does it only work in AI tools?",
          answer:
            "No—Oravo works across your entire workflow: email, docs, chat, and browser apps.",
        },
      ],
      ctaTitle: `Get Better ${appName} Outputs`,
      ctaDescription:
        "Speak richer prompts. Get better answers. Move faster with voice.",
    },
    writing: {
      featuresTitle: `Voice Typing for ${appName}`,
      featuresDescription:
        "Capture notes and write content at thinking speed.",
      features: [
        {
          title: "Write drafts 4x faster",
          description:
            "Get the first draft down quickly—then refine with edits.",
        },
        {
          title: "Automatic punctuation + paragraphs",
          description:
            "Oravo formats your text so it’s ready to publish or share.",
        },
        {
          title: "Dictate notes instantly",
          description:
            "Capture ideas before they fade—hands-free and fast.",
        },
        {
          title: "Long-form writing without fatigue",
          description:
            "Speak naturally to create long content without typing strain.",
        },
        {
          title: "Works across tools",
          description:
            `Use Oravo with ${appName}, docs, email, and your browser—same workflow everywhere.`,
        },
        {
          title: "Privacy-first",
          description:
            "Encrypted processing and privacy-first design for professionals.",
        },
      ],
      howItWorksTitle: `Start Dictating in ${appName}`,
      howItWorksDescription: "From idea → paragraph in minutes.",
      useCasesTitle: `Write More with ${appName}`,
      useCasesDescription: "Common writing workflows with voice.",
      useCases: [
        {
          title: "Daily notes and journaling",
          withOravo:
            "Dictate your daily log and reflections without opening your keyboard.",
          timeSaved: "50–70%",
        },
        {
          title: "Article drafts",
          scenario: "Blog posts and long-form writing",
          withOravo:
            "Speak the outline and first draft quickly, then polish and structure.",
          result: "More output, same time",
        },
        {
          title: "Meeting notes",
          withOravo:
            "Capture decisions and action items as they happen.",
          timeSaved: "40–60%",
        },
        {
          title: "Editing instructions",
          withOravo:
            "Dictate rewrite instructions and revisions without losing flow.",
          result: "Faster iteration",
        },
      ],
      faqTitle: "Frequently Asked Questions",
      faqs: [
        {
          question: `Does Oravo work inside ${appName}?`,
          answer:
            "Yes—Oravo works anywhere you can type inside the app or web editor.",
        },
        {
          question: "Is it good for long-form writing?",
          answer:
            "Yes—voice is often the fastest way to produce a first draft, especially for long pieces.",
        },
        {
          question: "Does it add punctuation automatically?",
          answer:
            "Yes—punctuation and paragraph structure are handled automatically.",
        },
        {
          question: "Can I use it on mobile?",
          answer:
            "Yes—Oravo supports iOS and Android for dictation on the go.",
        },
        {
          question: "Does it learn my vocabulary?",
          answer:
            "Yes—Oravo can learn your vocabulary and supports custom terms.",
        },
        {
          question: "Is it private?",
          answer:
            "Yes—privacy-first architecture and encrypted processing.",
        },
      ],
      ctaTitle: `Write Faster with ${appName}`,
      ctaDescription:
        "Turn your voice into clean writing—4x faster than typing.",
    },
    design: {
      featuresTitle: `Voice Typing for ${appName}`,
      featuresDescription:
        "Give feedback, add comments, and write specs at speaking speed.",
      features: [
        {
          title: "Design feedback without typing",
          description:
            "Dictate feedback and comments quickly while reviewing designs.",
        },
        {
          title: "Write specs faster",
          description:
            "Create clear requirements and design notes at speaking speed.",
        },
        {
          title: "Better async collaboration",
          description:
            "Leave rich context so designers and stakeholders align faster.",
        },
        {
          title: "Automatic formatting",
          description:
            "Oravo structures text with punctuation and paragraphs automatically.",
        },
        {
          title: "Works across tools",
          description:
            `Use Oravo with ${appName}, docs, chat, and email—same workflow everywhere.`,
        },
        {
          title: "Privacy-first",
          description:
            "Encrypted processing and privacy-first design for professional teams.",
        },
      ],
      howItWorksTitle: `Start Voice Typing in ${appName}`,
      howItWorksDescription: "Add better feedback in minutes.",
      useCasesTitle: `Move Design Work Forward`,
      useCasesDescription: "Voice-powered collaboration scenarios.",
      useCases: [
        {
          title: "Faster review cycles",
          withOravo:
            "Dictate precise feedback while scanning screens—no context switching.",
          timeSaved: "40–60%",
        },
        {
          title: "Spec writing",
          withOravo:
            "Speak requirements and edge cases clearly while referencing designs.",
          result: "Clearer handoffs",
        },
        {
          title: "Stakeholder notes",
          withOravo:
            "Capture meeting outcomes and decisions instantly.",
          timeSaved: "30–50%",
        },
        {
          title: "Async collaboration",
          withOravo:
            "Leave thorough comments so teams align without extra meetings.",
          result: "Fewer follow-ups",
        },
      ],
      faqTitle: "Frequently Asked Questions",
      faqs: [
        {
          question: `Does Oravo work in ${appName} comments and fields?`,
          answer:
            "Yes—click any field you can type in and dictate using your hotkey.",
        },
        {
          question: "Is it good for design feedback?",
          answer:
            "Yes—voice makes it easy to provide richer context quickly.",
        },
        {
          question: "Does it work alongside other tools?",
          answer:
            "Yes—Oravo works across chat, docs, and email too.",
        },
        {
          question: "Can I edit before posting?",
          answer:
            "Yes—review and tweak the text before sending.",
        },
        {
          question: "Does it support multiple languages?",
          answer:
            "Yes—Oravo supports 100+ languages.",
        },
        {
          question: "Is it private?",
          answer:
            "Yes—privacy-first architecture and encrypted processing.",
        },
      ],
      ctaTitle: `Create Faster Feedback in ${appName}`,
      ctaDescription:
        "Speak your feedback and specs—keep your momentum during reviews.",
    },
    browser: {
      featuresTitle: `Voice Typing in ${appName}`,
      featuresDescription:
        "Type anywhere in your browser at speaking speed.",
      features: [
        {
          title: "Type in any website",
          description:
            "Forms, editors, chat boxes, CRMs—if you can type there, you can dictate there.",
        },
        {
          title: "Automatic punctuation",
          description:
            "Speak naturally. Oravo handles punctuation and structure.",
        },
        {
          title: "Faster research notes",
          description:
            "Capture notes while reading—no switching windows to type.",
        },
        {
          title: "Works across web apps",
          description:
            "One hotkey works across all your web tools.",
        },
        {
          title: "Multi-language support",
          description:
            "Dictate in 100+ languages for global workflows.",
        },
        {
          title: "Privacy-first",
          description:
            "Encrypted processing designed for professional use.",
        },
      ],
      howItWorksTitle: `Start Voice Typing in ${appName}`,
      howItWorksDescription: "A universal voice keyboard for the web.",
      useCasesTitle: `Use Voice Everywhere Online`,
      useCasesDescription: "Common browser workflows with voice.",
      useCases: [
        {
          title: "Forms and data entry",
          withOravo: "Dictate entries quickly instead of typing field by field.",
          timeSaved: "40–60%",
        },
        {
          title: "Writing in web apps",
          withOravo:
            "Draft emails, docs, and posts directly in the browser.",
          timeSaved: "50–70%",
        },
        {
          title: "Search + research",
          withOravo:
            "Dictate queries and notes while reading results.",
          result: "Faster synthesis",
        },
        {
          title: "Customer support",
          withOravo:
            "Dictate responses in ticketing tools and chat widgets.",
          timeSaved: "30–50%",
        },
      ],
      faqTitle: "Frequently Asked Questions",
      faqs: [
        {
          question: "Does it work on every website?",
          answer:
            "Oravo works anywhere you can type in the browser. Some highly custom editors may vary, but most web inputs work great.",
        },
        {
          question: `Does it work in ${appName} on Mac/Windows?`,
          answer:
            "Yes—Oravo works across major platforms and browsers with one consistent workflow.",
        },
        {
          question: "Is it better than built-in dictation?",
          answer:
            "Oravo is designed for speed and formatting, and works across all apps—not just one browser feature.",
        },
        {
          question: "Does it support multiple languages?",
          answer:
            "Yes—100+ languages supported.",
        },
        {
          question: "Can I edit before submitting a form?",
          answer:
            "Yes—Oravo types text you can review and edit before submission.",
        },
        {
          question: "Is it secure?",
          answer:
            "Yes—privacy-first architecture and encrypted processing.",
        },
      ],
      ctaTitle: `Type Anywhere in ${appName} with Your Voice`,
      ctaDescription:
        "A universal voice keyboard for the web—faster, cleaner, and more natural than typing.",
    },
    crm: {
      featuresTitle: `Voice Typing for ${appName}`,
      featuresDescription:
        "Log notes, update records, and send outreach at speaking speed.",
      features: [
        {
          title: "Dictate call notes instantly",
          description:
            "Capture call outcomes and next steps right after the conversation.",
        },
        {
          title: "Update records faster",
          description:
            "Add details and context to fields and timelines without typing.",
        },
        {
          title: "Better follow-ups",
          description:
            "Write clearer follow-up emails and messages with more personalization.",
        },
        {
          title: "Automatic formatting",
          description:
            "Oravo adds punctuation and paragraph structure automatically.",
        },
        {
          title: "Works across your stack",
          description:
            "Use Oravo in CRM, email, docs, and chat—one workflow.",
        },
        {
          title: "Privacy-first",
          description:
            "Encrypted processing built for professional workflows.",
        },
      ],
      howItWorksTitle: `Start Dictating in ${appName}`,
      howItWorksDescription: "From call → clean notes in minutes.",
      useCasesTitle: `Close More Deals Faster`,
      useCasesDescription: "Voice-powered CRM workflows.",
      useCases: [
        {
          title: "Post-call notes",
          withOravo:
            "Dictate a complete summary with objections, timeline, and next steps immediately after calls.",
          timeSaved: "50–70%",
        },
        {
          title: "Meeting prep",
          withOravo:
            "Dictate quick reminders and agenda notes into your CRM before meetings.",
          timeSaved: "30–50%",
        },
        {
          title: "Personalized outreach",
          withOravo:
            "Speak personalized outreach notes and messages while referencing the account.",
          result: "Higher reply rates",
        },
        {
          title: "Pipeline hygiene",
          withOravo:
            "Update fields and activity logs faster so the CRM stays accurate.",
          result: "Cleaner pipeline",
        },
      ],
      faqTitle: "Frequently Asked Questions",
      faqs: [
        {
          question: `Does Oravo work in ${appName} fields and notes?`,
          answer:
            "Yes—place your cursor in any CRM field and dictate. Oravo types exactly where you click.",
        },
        {
          question: "Is it secure for sales data?",
          answer:
            "Yes—privacy-first architecture and encrypted processing designed for professional use.",
        },
        {
          question: "Can I use it with email too?",
          answer:
            "Yes—Oravo works across email, docs, chat, and browsers with the same hotkey.",
        },
        {
          question: "Does it support custom terminology?",
          answer:
            "Yes—Oravo supports custom vocabulary and learns over time.",
        },
        {
          question: "Does it work on mobile?",
          answer:
            "Yes—dictate notes on iOS and Android as well.",
        },
        {
          question: "Can I edit before saving?",
          answer:
            "Yes—review and edit the text before saving changes.",
        },
      ],
      ctaTitle: `Update ${appName} Faster`,
      ctaDescription:
        "Spend less time typing notes and more time selling.",
    },
    support: {
      featuresTitle: `Voice Typing for ${appName}`,
      featuresDescription:
        "Resolve tickets and reply faster with voice-to-text.",
      features: [
        {
          title: "Faster ticket replies",
          description:
            "Dictate clear responses quickly—perfect for high-volume queues.",
        },
        {
          title: "Higher quality answers",
          description:
            "Provide thorough context without typing fatigue.",
        },
        {
          title: "Consistent formatting",
          description:
            "Oravo adds punctuation and structure so replies stay professional.",
        },
        {
          title: "Multi-task while responding",
          description:
            "Reference docs and dashboards while dictating replies.",
        },
        {
          title: "Works across tools",
          description:
            "Use Oravo in support tools, chat, email, and docs.",
        },
        {
          title: "Privacy-first",
          description:
            "Encrypted processing built for professional support teams.",
        },
      ],
      howItWorksTitle: `Start Voice Typing in ${appName}`,
      howItWorksDescription: "Resolve tickets faster in minutes.",
      useCasesTitle: `Improve Support Productivity`,
      useCasesDescription: "Common support workflows with voice.",
      useCases: [
        {
          title: "High-volume queues",
          withOravo:
            "Dictate responses rapidly while maintaining clarity and tone.",
          timeSaved: "40–60%",
        },
        {
          title: "Complex troubleshooting",
          scenario: "Technical support with many steps",
          withOravo:
            "Speak step-by-step instructions while referencing internal docs and logs.",
          result: "Fewer escalations",
        },
        {
          title: "Macros + personalization",
          withOravo:
            "Use your macros, then dictate personalized context that makes replies more helpful.",
          result: "Higher CSAT",
        },
        {
          title: "Internal handoffs",
          withOravo:
            "Dictate clear summaries for engineering or tier-2 support.",
          result: "Faster resolution",
        },
      ],
      faqTitle: "Frequently Asked Questions",
      faqs: [
        {
          question: `Does Oravo work in ${appName} reply editors?`,
          answer:
            "Yes—Oravo works anywhere you can type in the product, including reply boxes and internal notes.",
        },
        {
          question: "Will it change my macros or templates?",
          answer:
            "No—Oravo only types text where your cursor is. Your macros and templates continue to work normally.",
        },
        {
          question: "Is it secure for customer data?",
          answer:
            "Yes—privacy-first architecture and encrypted processing designed for professional use.",
        },
        {
          question: "Can I edit before sending?",
          answer:
            "Yes—review and tweak the response before sending it.",
        },
        {
          question: "Does it support multiple languages?",
          answer:
            "Yes—100+ languages supported for global support teams.",
        },
        {
          question: "Does it work across other tools too?",
          answer:
            "Yes—Oravo works in chat, email, docs, and browsers as well.",
        },
      ],
      ctaTitle: `Reply Faster in ${appName}`,
      ctaDescription:
        "Turn voice into clear support replies—faster and with less fatigue.",
    },
  };

  const copy = categoryCopy[seed.category];

  const cfg: UseCasePageConfig = {
    dir: seed.dir,
    route: seed.route,
    appName,
    accentColor: seed.accentColor,
    brandIcon: toIconData(seed.brandIcon),

    heroBadgeText: `${appName} Integration`,
    heroTitle: `Voice Keyboard for ${appName}`,
    heroDescription:
      seed.category === "ai"
        ? `Speak richer prompts to ${appName} at speaking speed. More context means better AI output—without typing fatigue.`
        : seed.category === "developer"
          ? `Dictate technical writing in ${appName} 4x faster than typing. Great for PRs, issues, docs, and developer collaboration.`
          : seed.category === "crm"
            ? `Update ${appName} records faster with Oravo voice typing. Dictate notes, activities, and outreach with clean formatting.`
            : seed.category === "support"
              ? `Resolve tickets faster in ${appName} with Oravo voice typing. Dictate replies with clean punctuation and structure.`
              : `Use Oravo voice typing in ${appName} to write 4x faster than typing—with automatic punctuation and formatting.`,

    featuresTitle: copy.featuresTitle,
    featuresDescription: copy.featuresDescription,
    features: copy.features,

    howItWorksTitle: copy.howItWorksTitle,
    howItWorksDescription: copy.howItWorksDescription,
    steps: commonSteps,

    useCasesTitle: copy.useCasesTitle,
    useCasesDescription: copy.useCasesDescription,
    useCases: copy.useCases,

    faqTitle: copy.faqTitle,
    faqs: copy.faqs,

    ctaTitle: copy.ctaTitle,
    ctaDescription: copy.ctaDescription,
    ctaPrimaryText: "Download Free",
    ctaPrimaryHref: "/download",
    ctaSecondaryText: "See How It Works",
    ctaSecondaryHref: "/how-to-use",
  };

  // Attach internal fields used only for metadata keyword derivation.
  // @ts-expect-error internal field
  cfg.__category = seed.category;
  // @ts-expect-error internal field
  cfg.__extraKeywords = seed.extraKeywords || [];

  return cfg;
}

const seeds: AppSeed[] = [
  // Productivity
  {
    dir: "voice-keyboard-for-asana",
    route: "/voice-keyboard-for-asana",
    appName: "Asana",
    accentColor: "#F06A6A",
    brandIcon: siAsana,
    category: "productivity",
  },
  {
    dir: "voice-keyboard-for-trello",
    route: "/voice-keyboard-for-trello",
    appName: "Trello",
    accentColor: "#0052CC",
    brandIcon: siTrello,
    category: "productivity",
  },
  {
    dir: "voice-keyboard-for-monday",
    route: "/voice-keyboard-for-monday",
    appName: "Monday.com",
    accentColor: "#FF3D57",
    brandIcon: siMondaydotcom,
    category: "productivity",
    extraKeywords: ["monday.com voice to text", "monday voice typing"],
  },
  {
    dir: "voice-keyboard-for-clickup",
    route: "/voice-keyboard-for-clickup",
    appName: "ClickUp",
    accentColor: "#7B68EE",
    brandIcon: siClickup,
    category: "productivity",
  },
  {
    dir: "voice-keyboard-for-jira",
    route: "/voice-keyboard-for-jira",
    appName: "Jira",
    accentColor: "#0052CC",
    brandIcon: siJira,
    category: "productivity",
    extraKeywords: ["jira ticket dictation", "jira comments voice"],
  },
  {
    dir: "voice-keyboard-for-linear",
    route: "/voice-keyboard-for-linear",
    appName: "Linear",
    accentColor: "#5E6AD2",
    brandIcon: siLinear,
    category: "productivity",
  },
  {
    dir: "voice-keyboard-for-airtable",
    route: "/voice-keyboard-for-airtable",
    appName: "Airtable",
    accentColor: "#18BFFF",
    brandIcon: siAirtable,
    category: "productivity",
  },

  // Communication
  {
    dir: "voice-keyboard-for-outlook",
    route: "/voice-keyboard-for-outlook",
    appName: "Outlook",
    accentColor: "#0078D4",
    brandIcon: siMicrosoftoutlook,
    category: "communication",
    extraKeywords: ["outlook dictation", "outlook voice typing", "microsoft outlook voice to text"],
  },
  {
    dir: "voice-keyboard-for-whatsapp",
    route: "/voice-keyboard-for-whatsapp",
    appName: "WhatsApp",
    accentColor: "#25D366",
    brandIcon: siWhatsapp,
    category: "communication",
  },
  {
    dir: "voice-keyboard-for-telegram",
    route: "/voice-keyboard-for-telegram",
    appName: "Telegram",
    accentColor: "#26A5E4",
    brandIcon: siTelegram,
    category: "communication",
  },
  {
    dir: "voice-keyboard-for-signal",
    route: "/voice-keyboard-for-signal",
    appName: "Signal",
    accentColor: "#3A76F0",
    brandIcon: siSignal,
    category: "communication",
  },
  {
    dir: "voice-keyboard-for-instagram",
    route: "/voice-keyboard-for-instagram",
    appName: "Instagram",
    accentColor: "#E4405F",
    brandIcon: siInstagram,
    category: "communication",
  },
  {
    dir: "voice-keyboard-for-messenger",
    route: "/voice-keyboard-for-messenger",
    appName: "Messenger",
    accentColor: "#00B2FF",
    brandIcon: siMessenger,
    category: "communication",
    extraKeywords: ["facebook messenger voice to text"],
  },
  {
    dir: "voice-keyboard-for-linkedin",
    route: "/voice-keyboard-for-linkedin",
    appName: "LinkedIn",
    accentColor: "#0A66C2",
    brandIcon: siLinkedin,
    category: "communication",
    extraKeywords: ["linkedin messaging voice", "linkedin comments dictation"],
  },
  {
    dir: "voice-keyboard-for-imessage",
    route: "/voice-keyboard-for-imessage",
    appName: "iMessage",
    accentColor: "#111827",
    brandIcon: siApple,
    category: "communication",
    extraKeywords: ["imessage voice to text", "apple messages dictation"],
  },

  // Writing
  {
    dir: "voice-keyboard-for-obsidian",
    route: "/voice-keyboard-for-obsidian",
    appName: "Obsidian",
    accentColor: "#7C3AED",
    brandIcon: siObsidian,
    category: "writing",
  },
  {
    dir: "voice-keyboard-for-evernote",
    route: "/voice-keyboard-for-evernote",
    appName: "Evernote",
    accentColor: "#00A82D",
    brandIcon: siEvernote,
    category: "writing",
  },
  {
    dir: "voice-keyboard-for-apple-notes",
    route: "/voice-keyboard-for-apple-notes",
    appName: "Apple Notes",
    accentColor: "#111827",
    brandIcon: siApple,
    category: "writing",
    extraKeywords: ["apple notes voice to text", "notes app dictation"],
  },
  {
    dir: "voice-keyboard-for-medium",
    route: "/voice-keyboard-for-medium",
    appName: "Medium",
    accentColor: "#111827",
    brandIcon: siMedium,
    category: "writing",
  },
  {
    dir: "voice-keyboard-for-wordpress",
    route: "/voice-keyboard-for-wordpress",
    appName: "WordPress",
    accentColor: "#21759B",
    brandIcon: siWordpress,
    category: "writing",
  },
  {
    dir: "voice-keyboard-for-substack",
    route: "/voice-keyboard-for-substack",
    appName: "Substack",
    accentColor: "#FF6719",
    brandIcon: siSubstack,
    category: "writing",
  },
  {
    dir: "voice-keyboard-for-ghost",
    route: "/voice-keyboard-for-ghost",
    appName: "Ghost",
    accentColor: "#15171A",
    brandIcon: siGhost,
    category: "writing",
  },

  // AI tools
  {
    dir: "voice-keyboard-for-claude",
    route: "/voice-keyboard-for-claude",
    appName: "Claude",
    accentColor: "#CC9B7A",
    brandIcon: siClaude,
    category: "ai",
    extraKeywords: ["anthropic claude voice to text", "claude prompt dictation"],
  },
  {
    dir: "voice-keyboard-for-perplexity",
    route: "/voice-keyboard-for-perplexity",
    appName: "Perplexity",
    accentColor: "#20808D",
    brandIcon: siPerplexity,
    category: "ai",
    extraKeywords: ["perplexity voice to text", "perplexity prompts by voice"],
  },
  {
    dir: "voice-keyboard-for-v0",
    route: "/voice-keyboard-for-v0",
    appName: "v0",
    accentColor: "#111827",
    brandIcon: siV,
    category: "ai",
    extraKeywords: ["v0 by vercel voice", "ui prompts dictation"],
  },
  {
    dir: "voice-keyboard-for-bolt",
    route: "/voice-keyboard-for-bolt",
    appName: "Bolt",
    accentColor: "#111827",
    brandIcon: siVercel,
    category: "ai",
    extraKeywords: ["bolt.new voice", "bolt ai prompt dictation"],
  },
  {
    dir: "voice-keyboard-for-lovable",
    route: "/voice-keyboard-for-lovable",
    appName: "Lovable",
    accentColor: "#FF6B6B",
    brandIcon: null,
    category: "ai",
  },

  // Developer tools
  {
    dir: "voice-keyboard-for-vscode",
    route: "/voice-keyboard-for-vscode",
    appName: "VS Code",
    accentColor: "#007ACC",
    brandIcon: siVisualstudiocode,
    category: "developer",
    extraKeywords: ["visual studio code dictation", "vscode voice typing"],
  },
  {
    dir: "voice-keyboard-for-github",
    route: "/voice-keyboard-for-github",
    appName: "GitHub",
    accentColor: "#111827",
    brandIcon: siGithub,
    category: "developer",
    extraKeywords: ["github issue dictation", "github pr voice to text"],
  },
  {
    dir: "voice-keyboard-for-stackoverflow",
    route: "/voice-keyboard-for-stackoverflow",
    appName: "Stack Overflow",
    accentColor: "#F58025",
    brandIcon: siStackoverflow,
    category: "developer",
  },
  {
    dir: "voice-keyboard-for-warp",
    route: "/voice-keyboard-for-warp",
    appName: "Warp",
    accentColor: "#01A4FF",
    brandIcon: siWarp,
    category: "developer",
  },
  {
    dir: "voice-keyboard-for-replit",
    route: "/voice-keyboard-for-replit",
    appName: "Replit",
    accentColor: "#F26207",
    brandIcon: siReplit,
    category: "developer",
  },

  // Design
  {
    dir: "voice-keyboard-for-figma",
    route: "/voice-keyboard-for-figma",
    appName: "Figma",
    accentColor: "#F24E1E",
    brandIcon: siFigma,
    category: "design",
  },
  {
    dir: "voice-keyboard-for-canva",
    route: "/voice-keyboard-for-canva",
    appName: "Canva",
    accentColor: "#00C4CC",
    brandIcon: siCanva,
    category: "design",
  },

  // Browsers
  {
    dir: "voice-keyboard-for-chrome",
    route: "/voice-keyboard-for-chrome",
    appName: "Chrome",
    accentColor: "#4285F4",
    brandIcon: siGooglechrome,
    category: "browser",
    extraKeywords: ["google chrome voice typing", "chrome dictation"],
  },
  {
    dir: "voice-keyboard-for-arc",
    route: "/voice-keyboard-for-arc",
    appName: "Arc",
    accentColor: "#FCBFBD",
    brandIcon: siArc,
    category: "browser",
  },

  // CRM
  {
    dir: "voice-keyboard-for-salesforce",
    route: "/voice-keyboard-for-salesforce",
    appName: "Salesforce",
    accentColor: "#00A1E0",
    brandIcon: siSalesforce,
    category: "crm",
  },
  {
    dir: "voice-keyboard-for-hubspot",
    route: "/voice-keyboard-for-hubspot",
    appName: "HubSpot",
    accentColor: "#FF7A59",
    brandIcon: siHubspot,
    category: "crm",
  },

  // Support
  {
    dir: "voice-keyboard-for-zendesk",
    route: "/voice-keyboard-for-zendesk",
    appName: "Zendesk",
    accentColor: "#03363D",
    brandIcon: siZendesk,
    category: "support",
  },
  {
    dir: "voice-keyboard-for-intercom",
    route: "/voice-keyboard-for-intercom",
    appName: "Intercom",
    accentColor: "#6AFDEF",
    brandIcon: siIntercom,
    category: "support",
  },

  // Original pages (previously hand-written, now using template)
  {
    dir: "voice-keyboard-for-slack",
    route: "/voice-keyboard-for-slack",
    appName: "Slack",
    accentColor: "#E01E5A",
    brandIcon: siSlack,
    category: "communication",
    extraKeywords: ["slack voice to text", "slack dictation", "dictate slack messages", "slack voice typing"],
  },
  {
    dir: "voice-keyboard-for-gmail",
    route: "/voice-keyboard-for-gmail",
    appName: "Gmail",
    accentColor: "#EA4335",
    brandIcon: siGmail,
    category: "communication",
    extraKeywords: ["gmail voice to text", "dictate emails gmail", "gmail dictation", "voice typing gmail"],
  },
  {
    dir: "voice-keyboard-for-discord",
    route: "/voice-keyboard-for-discord",
    appName: "Discord",
    accentColor: "#5865F2",
    brandIcon: siDiscord,
    category: "communication",
    extraKeywords: ["discord voice to text", "discord dictation", "dictate discord messages"],
  },
  {
    dir: "voice-keyboard-for-notion",
    route: "/voice-keyboard-for-notion",
    appName: "Notion",
    accentColor: "#000000",
    brandIcon: siNotion,
    category: "writing",
    extraKeywords: ["notion voice to text", "notion dictation", "dictate notion notes", "notion second brain voice"],
  },
  {
    dir: "voice-keyboard-for-teams",
    route: "/voice-keyboard-for-teams",
    appName: "Microsoft Teams",
    accentColor: "#6264A7",
    brandIcon: siMicrosoftteams,
    category: "communication",
    extraKeywords: ["teams voice to text", "microsoft teams dictation", "teams voice typing"],
  },
  {
    dir: "voice-keyboard-for-google-docs",
    route: "/voice-keyboard-for-google-docs",
    appName: "Google Docs",
    accentColor: "#4285F4",
    brandIcon: siGoogledocs,
    category: "writing",
    extraKeywords: ["google docs voice typing", "google docs dictation", "dictate google docs"],
  },
  {
    dir: "voice-keyboard-for-chatgpt",
    route: "/voice-keyboard-for-chatgpt",
    appName: "ChatGPT",
    accentColor: "#10A37F",
    brandIcon: siChatgpt,
    category: "ai",
    extraKeywords: ["chatgpt voice to text", "speak to chatgpt", "chatgpt prompt dictation", "voice prompts chatgpt"],
  },
  {
    dir: "voice-keyboard-for-cursor",
    route: "/voice-keyboard-for-cursor",
    appName: "Cursor",
    accentColor: "#1877F2",
    brandIcon: null,
    category: "developer",
    extraKeywords: ["cursor ai voice", "cursor ide dictation", "voice coding cursor"],
  },
  {
    dir: "voice-keyboard-for-technical-documentation",
    route: "/voice-keyboard-for-technical-documentation",
    appName: "Technical Documentation",
    accentColor: "#10B981",
    brandIcon: null,
    category: "developer",
    extraKeywords: ["technical docs dictation", "api documentation voice", "readme voice typing"],
  },
];

export const useCasePages: Record<string, UseCasePageConfig> = Object.fromEntries(
  seeds.map((s) => [s.dir, makeConfig(s)])
);



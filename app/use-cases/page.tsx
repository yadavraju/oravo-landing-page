"use client";

import { Header } from "@/components/header";
import FooterSection from "@/components/footer-section";
import Link from "next/link";
import { useState } from "react";
import {
  siSlack,
  siDiscord,
  siGmail,
  siMicrosoftoutlook,
  siMicrosoftteams,
  siWhatsapp,
  siTelegram,
  siSignal,
  siInstagram,
  siMessenger,
  siLinkedin,
  siNotion,
  siGoogledocs,
  siEvernote,
  siObsidian,
  siGithub,
  siJira,
  siLinear,
  siStackoverflow,
  siVisualstudiocode,
  siCanva,
  siReplit,
  siTrello,
  siAsana,
  siConfluence,
  siAirtable,
  siClickup,
  siArc,
  siGooglechrome,
  siPerplexity,
  siX,
  siApple,
  siChatgpt,
  siClaude,
  siOpenai,
  siWarp,
  siV,
  siVercel,
  siMondaydotcom,
  siFigma,
  siZoom,
  siDropbox,
  siGooglecalendar,
  siGooglesheets,
  siMicrosoftword,
  siMicrosoftexcel,
  siMicrosoftpowerpoint,
  siSalesforce,
  siHubspot,
  siZendesk,
  siIntercom,
  siTwitch,
  siYoutube,
  siReddit,
  siMedium,
  siWordpress,
  siGhost,
  siSubstack,
  siMailchimp,
  siStripe,
  siShopify,
  siAmazon,
  siGoogle,
  siMicrosoft,
  siMeta,
} from "simple-icons";
import Logo from "@/components/Logo";

// Badge component
function Badge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="px-[14px] py-[6px] bg-white shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] overflow-hidden rounded-[90px] flex justify-start items-center gap-[8px] border border-[rgba(2,6,23,0.08)] shadow-xs">
      <div className="w-[14px] h-[14px] relative overflow-hidden flex items-center justify-center">
        {icon}
      </div>
      <div className="text-center flex justify-center flex-col text-[#37322F] text-xs font-medium leading-3 font-sans">
        {text}
      </div>
    </div>
  );
}

// Simple Icon component using simple-icons
function SimpleIcon({
  icon,
  size = 24,
  color,
}: {
  icon: { path: string; hex: string; title: string } | null;
  size?: number;
  color?: string;
}) {
  if (!icon) {
    return <Logo />;
  }
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color || `#${icon.hex}`}
      role="img"
      aria-label={icon.title}
    >
      <path d={icon.path} />
    </svg>
  );
}

// Icon mapping
const iconMap: Record<string, { path: string; hex: string; title: string } | null> = {
  // Communication
  Slack: siSlack,
  Discord: siDiscord,
  Gmail: siGmail,
  Outlook: siMicrosoftoutlook,
  "Microsoft Teams": siMicrosoftteams,
  WhatsApp: siWhatsapp,
  Telegram: siTelegram,
  Signal: siSignal,
  Instagram: siInstagram,
  Messenger: siMessenger,
  "Facebook Messenger": siMessenger,
  LinkedIn: siLinkedin,
  iMessage: siApple,
  "Apple Mail": siApple,
  // Documentation & Notes
  Notion: siNotion,
  "Google Docs": siGoogledocs,
  Evernote: siEvernote,
  Obsidian: siObsidian,
  "Apple Notes": siApple,
  // Developer & Engineering
  GitHub: siGithub,
  Jira: siJira,
  Linear: siLinear,
  "Stack Overflow": siStackoverflow,
  "VS Code": siVisualstudiocode,
  Cursor: null, // No simple-icon, will use Oravo logo
  Canva: siCanva,
  Replit: siReplit,
  Warp: siWarp,
  v0: siV,
  Bolt: siVercel, // Using Vercel as Bolt fallback
  Lovable: null, // No simple-icon, will use Oravo logo
  // Project Management
  Trello: siTrello,
  Asana: siAsana,
  Confluence: siConfluence,
  Airtable: siAirtable,
  ClickUp: siClickup,
  "Monday.com": siMondaydotcom,
  Basecamp: null, // No simple-icon, will use Oravo logo
  Smartsheet: null, // No simple-icon, will use Oravo logo
  Coda: null, // No simple-icon, will use Oravo logo
  Wrike: null, // No simple-icon, will use Oravo logo
  // Browsers
  Arc: siArc,
  Chrome: siGooglechrome,
  // AI Tools
  ChatGPT: siChatgpt,
  Claude: siClaude,
  Perplexity: siPerplexity,
  OpenAI: siOpenai,
  // Social
  X: siX,
  Twitter: siX,
  Twitch: siTwitch,
  YouTube: siYoutube,
  Reddit: siReddit,
  // Writing & Publishing
  Medium: siMedium,
  WordPress: siWordpress,
  Ghost: siGhost,
  Substack: siSubstack,
  // Design & Productivity
  Figma: siFigma,
  Zoom: siZoom,
  Dropbox: siDropbox,
  "Google Calendar": siGooglecalendar,
  "Google Sheets": siGooglesheets,
  "Microsoft Word": siMicrosoftword,
  "Microsoft Excel": siMicrosoftexcel,
  "Microsoft PowerPoint": siMicrosoftpowerpoint,
  // CRM & Support
  Salesforce: siSalesforce,
  HubSpot: siHubspot,
  Zendesk: siZendesk,
  Intercom: siIntercom,
  Superhuman: null, // No simple-icon, will use Oravo logo
  // E-commerce & Business
  Mailchimp: siMailchimp,
  Stripe: siStripe,
  Shopify: siShopify,
  Amazon: siAmazon,
  // Tech Giants
  Google: siGoogle,
  Microsoft: siMicrosoft,
  Meta: siMeta,
  // Technical Documentation
  "Technical Documentation": null,
  "Technical Docs": null,
};

// App Card Component
function AppCard({
  name,
  description,
  href,
  color,
}: {
  name: string;
  description: string;
  href: string;
  color: string;
}) {
  const icon = iconMap[name];
  
  return (
    <Link
      href={href}
      className="bg-white rounded-2xl p-6 border border-[rgba(55,50,47,0.12)] hover:shadow-[0px_8px_24px_rgba(55,50,47,0.12)] transition-all duration-300 hover:border-[rgba(55,50,47,0.2)] group"
    >
      <div className="flex items-start justify-between mb-4">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: `${color}15` }}
        >
          <SimpleIcon icon={icon} color={color} />
        </div>
        <div className="w-8 h-8 rounded-full border border-[rgba(55,50,47,0.12)] flex items-center justify-center group-hover:bg-[#F7F5F3] transition-colors">
          <svg
            className="w-4 h-4 text-[#847971] group-hover:text-[#37322F] transition-colors"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      </div>
      <h3 className="text-[#37322F] text-lg font-semibold font-sans mb-2">
        {name}
      </h3>
      <p className="text-[#605A57] text-sm leading-relaxed font-sans">
        {description}
      </p>
    </Link>
  );
}

// Category Tab Component
function CategoryTab({
  name,
  isActive,
  onClick,
}: {
  name: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-full text-sm font-medium font-sans transition-all duration-200 cursor-pointer ${
        isActive
          ? "bg-[#1877F2] text-white shadow-[0px_4px_12px_rgba(24,119,242,0.3)]"
          : "bg-white border border-[rgba(55,50,47,0.12)] text-[#605A57] hover:border-[rgba(55,50,47,0.2)] hover:text-[#37322F]"
      }`}
    >
      {name}
    </button>
  );
}

// App data organized by category
const categories = {
  Productivity: [
    {
      name: "Slack",
      description:
        "Use voice dictation in Slack to capture task updates and ideas as they come to you.",
      href: "/voice-keyboard-for-slack",
      color: "#E01E5A",
    },
    {
      name: "Microsoft Teams",
      description:
        "Use Oravo voice dictation in Teams to record detailed notes without breaking your flow.",
      href: "/voice-keyboard-for-teams",
      color: "#6264A7",
    },
    {
      name: "Notion",
      description:
        "Notion works smoothly with hands-free dictation to record detailed notes without breaking your flow.",
      href: "/voice-keyboard-for-notion",
      color: "#000000",
    },
    {
      name: "Gmail",
      description:
        "Dictate professional emails in Gmail 4x faster than typing with automatic formatting.",
      href: "/voice-keyboard-for-gmail",
      color: "#EA4335",
    },
    {
      name: "Google Docs",
      description:
        "Better than built-in voice typing. 98%+ accuracy with automatic punctuation.",
      href: "/voice-keyboard-for-google-docs",
      color: "#4285F4",
    },
    {
      name: "Asana",
      description:
        "Use voice dictation in Asana to capture task updates and ideas as they come to you.",
      href: "/voice-keyboard-for-asana",
      color: "#F06A6A",
    },
    {
      name: "Trello",
      description:
        "With speech-to-text, you can easily keep Trello work moving during busy collaboration sessions.",
      href: "/voice-keyboard-for-trello",
      color: "#0052CC",
    },
    {
      name: "Monday.com",
      description:
        "Use Oravo voice dictation in Monday.com to record detailed notes without breaking your flow.",
      href: "/voice-keyboard-for-monday",
      color: "#FF3D57",
    },
    {
      name: "ClickUp",
      description:
        "With speech-to-text, you can easily add ClickUp context, comments, and tasks much faster.",
      href: "/voice-keyboard-for-clickup",
      color: "#7B68EE",
    },
    {
      name: "Jira",
      description:
        "Use Oravo voice dictation in Jira to capture ticket updates and ideas as they come.",
      href: "/voice-keyboard-for-jira",
      color: "#0052CC",
    },
    {
      name: "Linear",
      description:
        "Linear works smoothly with hands-free dictation to record detailed notes without breaking your flow.",
      href: "/voice-keyboard-for-linear",
      color: "#5E6AD2",
    },
    {
      name: "Airtable",
      description:
        "Airtable works smoothly with hands-free dictation to add context, comments, and tasks much faster.",
      href: "/voice-keyboard-for-airtable",
      color: "#18BFFF",
    },
  ],
  Developer: [
    {
      name: "Technical Documentation",
      description:
        "Write API docs, READMEs, and developer guides 4x faster with technical vocabulary support.",
      href: "/voice-keyboard-for-technical-documentation",
      color: "#10B981",
    },
    {
      name: "VS Code",
      description:
        "Voice-to-text in VS Code lets you write comments, documentation, and code explanations faster.",
      href: "/voice-keyboard-for-vscode",
      color: "#007ACC",
    },
    {
      name: "Cursor",
      description:
        "Speak more context to your AI coding assistant and get better results with voice dictation.",
      href: "/voice-keyboard-for-cursor",
      color: "#1877F2",
    },
    {
      name: "GitHub",
      description:
        "Write detailed PR descriptions, issue comments, and documentation at speaking speed.",
      href: "/voice-keyboard-for-github",
      color: "#181717",
    },
    {
      name: "Jira",
      description:
        "Capture detailed ticket descriptions and comments without breaking your engineering flow.",
      href: "/voice-keyboard-for-jira",
      color: "#0052CC",
    },
    {
      name: "Linear",
      description:
        "Issue tracking at speaking speed. Add context and comments to Linear issues effortlessly.",
      href: "/voice-keyboard-for-linear",
      color: "#5E6AD2",
    },
    {
      name: "Stack Overflow",
      description:
        "Write detailed questions and answers with technical accuracy using voice-to-text.",
      href: "/voice-keyboard-for-stackoverflow",
      color: "#F58025",
    },
    {
      name: "Warp",
      description:
        "AI terminal companion works great with voice input for commands and documentation.",
      href: "/voice-keyboard-for-warp",
      color: "#01A4FF",
    },
    {
      name: "Replit",
      description:
        "Code and collaborate faster with voice-to-text for comments, docs, and chat.",
      href: "/voice-keyboard-for-replit",
      color: "#F26207",
    },
    {
      name: "v0",
      description:
        "Describe your UI components faster with voice to get better AI-generated code.",
      href: "/voice-keyboard-for-v0",
      color: "#000000",
    },
    {
      name: "Bolt",
      description:
        "Voice-first development with AI. Speak your requirements and ship faster.",
      href: "/voice-keyboard-for-bolt",
      color: "#000000",
    },
    {
      name: "Lovable",
      description:
        "Build full-stack apps by speaking your ideas. Voice dictation for rapid prototyping.",
      href: "/voice-keyboard-for-lovable",
      color: "#FF6B6B",
    },
  ],
  Communication: [
    {
      name: "Slack",
      description:
        "Send messages in channels, threads, and DMs at speaking speed.",
      href: "/voice-keyboard-for-slack",
      color: "#E01E5A",
    },
    {
      name: "Discord",
      description:
        "Chat in servers and DMs while gaming or multitasking. No typing required.",
      href: "/voice-keyboard-for-discord",
      color: "#5865F2",
    },
    {
      name: "Microsoft Teams",
      description:
        "Chat in meetings and channels without unmuting. Stay productive in enterprise.",
      href: "/voice-keyboard-for-teams",
      color: "#6264A7",
    },
    {
      name: "Gmail",
      description:
        "Compose and reply to emails 4x faster with professional formatting.",
      href: "/voice-keyboard-for-gmail",
      color: "#EA4335",
    },
    {
      name: "Outlook",
      description:
        "Use voice dictation in Outlook to write professional emails efficiently without heavy typing strain.",
      href: "/voice-keyboard-for-outlook",
      color: "#0078D4",
    },
    {
      name: "WhatsApp",
      description:
        "Use voice typing in WhatsApp Web to stay connected and reply to messages much faster.",
      href: "/voice-keyboard-for-whatsapp",
      color: "#25D366",
    },
    {
      name: "Telegram",
      description:
        "Dictate Telegram messages in personal chats and groups to express ideas clearly without typing delays.",
      href: "/voice-keyboard-for-telegram",
      color: "#26A5E4",
    },
    {
      name: "Signal",
      description:
        "Use speech-to-text in Signal to communicate privately and efficiently with secure encrypted messaging.",
      href: "/voice-keyboard-for-signal",
      color: "#3A76F0",
    },
    {
      name: "Instagram",
      description:
        "Use speech-to-text for Instagram messages, comments, and replies to engage faster without typing.",
      href: "/voice-keyboard-for-instagram",
      color: "#E4405F",
    },
    {
      name: "Messenger",
      description:
        "Speak your Messenger messages instead of typing them for faster and more natural conversations.",
      href: "/voice-keyboard-for-messenger",
      color: "#00B2FF",
    },
    {
      name: "LinkedIn",
      description:
        "Use speech-to-text to network and communicate faster with professional clarity on LinkedIn.",
      href: "/voice-keyboard-for-linkedin",
      color: "#0A66C2",
    },
    {
      name: "iMessage",
      description:
        "Use accurate voice-to-text in iMessage to stay responsive without typing strain on Mac.",
      href: "/voice-keyboard-for-imessage",
      color: "#1DA1F2",
    },
  ],
  Writing: [
    {
      name: "Google Docs",
      description:
        "Write documents, reports, and content at thinking speed with auto-formatting.",
      href: "/voice-keyboard-for-google-docs",
      color: "#4285F4",
    },
    {
      name: "Notion",
      description:
        "Build your second brain at speaking speed. Notes, wikis, and journals.",
      href: "/voice-keyboard-for-notion",
      color: "#000000",
    },
    {
      name: "Obsidian",
      description:
        "Take notes in your knowledge vault at speaking speed with voice-to-text.",
      href: "/voice-keyboard-for-obsidian",
      color: "#7C3AED",
    },
    {
      name: "Evernote",
      description:
        "Capture notes and ideas as they come with hands-free voice dictation.",
      href: "/voice-keyboard-for-evernote",
      color: "#00A82D",
    },
    {
      name: "Apple Notes",
      description:
        "Quick voice notes on Mac with seamless iCloud sync across devices.",
      href: "/voice-keyboard-for-apple-notes",
      color: "#000000",
    },
    {
      name: "Medium",
      description:
        "Write and publish articles at speaking speed with automatic formatting.",
      href: "/voice-keyboard-for-medium",
      color: "#000000",
    },
    {
      name: "WordPress",
      description:
        "Blog faster with voice-to-text. Write posts and content hands-free.",
      href: "/voice-keyboard-for-wordpress",
      color: "#21759B",
    },
    {
      name: "Substack",
      description:
        "Write newsletters at speaking speed. Connect with your audience faster.",
      href: "/voice-keyboard-for-substack",
      color: "#FF6719",
    },
    {
      name: "Ghost",
      description:
        "Publish content hands-free. Voice dictation for professional blogging.",
      href: "/voice-keyboard-for-ghost",
      color: "#15171A",
    },
    {
      name: "Technical Docs",
      description:
        "API documentation, READMEs, and developer guides with technical accuracy.",
      href: "/voice-keyboard-for-technical-documentation",
      color: "#10B981",
    },
  ],
  "AI Tools": [
    {
      name: "ChatGPT",
      description:
        "Speak longer prompts with more context to get better AI responses.",
      href: "/voice-keyboard-for-chatgpt",
      color: "#10A37F",
    },
    {
      name: "Claude",
      description:
        "Voice-first AI conversations. Dictate complex prompts naturally.",
      href: "/voice-keyboard-for-claude",
      color: "#CC9B7A",
    },
    {
      name: "Perplexity",
      description:
        "Search and research faster by speaking your questions instead of typing.",
      href: "/voice-keyboard-for-perplexity",
      color: "#20808D",
    },
    {
      name: "Cursor",
      description:
        "AI coding assistant works better with more context. Speak your requirements.",
      href: "/voice-keyboard-for-cursor",
      color: "#1877F2",
    },
    {
      name: "v0",
      description:
        "Describe your UI at speaking speed. Better prompts, better components.",
      href: "/voice-keyboard-for-v0",
      color: "#000000",
    },
    {
      name: "Bolt",
      description:
        "Build full-stack apps by voice. Speak your ideas into reality.",
      href: "/voice-keyboard-for-bolt",
      color: "#000000",
    },
    {
      name: "Lovable",
      description:
        "Voice-first app development. Describe features and watch them build.",
      href: "/voice-keyboard-for-lovable",
      color: "#FF6B6B",
    },
    {
      name: "Replit",
      description:
        "Collaborative coding with voice. Speak to build with AI assistance.",
      href: "/voice-keyboard-for-replit",
      color: "#F26207",
    },
  ],
  Design: [
    {
      name: "Figma",
      description:
        "Add comments, feedback, and documentation in Figma designs faster with voice.",
      href: "/voice-keyboard-for-figma",
      color: "#F24E1E",
    },
    {
      name: "Canva",
      description:
        "Add text to your designs faster by speaking instead of typing.",
      href: "/voice-keyboard-for-canva",
      color: "#00C4CC",
    },
    {
      name: "Notion",
      description:
        "Design system documentation and specs at speaking speed.",
      href: "/voice-keyboard-for-notion",
      color: "#000000",
    },
  ],
  Browsers: [
    {
      name: "Chrome",
      description:
        "Voice typing works everywhere in Chrome. Forms, searches, and more.",
      href: "/voice-keyboard-for-chrome",
      color: "#4285F4",
    },
    {
      name: "Arc",
      description:
        "Modern browsing with voice input. Type anywhere at speaking speed.",
      href: "/voice-keyboard-for-arc",
      color: "#FCBFBD",
    },
  ],
  "CRM & Sales": [
    {
      name: "Salesforce",
      description:
        "Update CRM records and log activities faster with voice dictation.",
      href: "/voice-keyboard-for-salesforce",
      color: "#00A1E0",
    },
    {
      name: "HubSpot",
      description:
        "Log calls, update deals, and write notes at speaking speed.",
      href: "/voice-keyboard-for-hubspot",
      color: "#FF7A59",
    },
    {
      name: "LinkedIn",
      description:
        "Network and outreach faster with voice-to-text messaging.",
      href: "/voice-keyboard-for-linkedin",
      color: "#0A66C2",
    },
    {
      name: "Gmail",
      description:
        "Send professional sales emails 4x faster with voice dictation.",
      href: "/voice-keyboard-for-gmail",
      color: "#EA4335",
    },
    {
      name: "Outlook",
      description:
        "Enterprise email at speaking speed. Professional communication made easy.",
      href: "/voice-keyboard-for-outlook",
      color: "#0078D4",
    },
  ],
  Support: [
    {
      name: "Zendesk",
      description:
        "Resolve tickets 4x faster with voice-to-text responses.",
      href: "/voice-keyboard-for-zendesk",
      color: "#03363D",
    },
    {
      name: "Intercom",
      description:
        "Customer support at speaking speed. Reply faster, help more.",
      href: "/voice-keyboard-for-intercom",
      color: "#6AFDEF",
    },
    {
      name: "Slack",
      description:
        "Internal support channels at speaking speed. Help your team faster.",
      href: "/voice-keyboard-for-slack",
      color: "#E01E5A",
    },
    {
      name: "Microsoft Teams",
      description:
        "Enterprise support communication with voice-to-text efficiency.",
      href: "/voice-keyboard-for-teams",
      color: "#6264A7",
    },
  ],
};

type CategoryKey = keyof typeof categories;

export default function UseCasesPage() {
  const [activeCategory, setActiveCategory] =
    useState<CategoryKey>("Productivity");

  const categoryNames = Object.keys(categories) as CategoryKey[];

  return (
    <div className="w-full min-h-screen relative bg-[#F7F5F3] overflow-x-hidden flex flex-col justify-start items-center">
      <div className="relative flex flex-col justify-start items-center w-full">
        <div className="w-full max-w-none px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1060px] lg:w-[1060px] relative flex flex-col justify-start items-start min-h-screen">
          {/* Left vertical line */}
          <div className="w-[1px] h-full absolute left-4 sm:left-6 md:left-8 lg:left-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0"></div>

          {/* Right vertical line */}
          <div className="w-[1px] h-full absolute right-4 sm:right-6 md:right-8 lg:right-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0"></div>

          {/* Header */}
          <Header />

          {/* Main Content */}
          <main className="flex-1 w-full mt-20 md:mt-24 lg:mt-28 relative z-10">
            {/* Hero Section */}
            <section className="px-6 md:px-12 py-12 md:py-20 border-b border-[rgba(55,50,47,0.12)]">
              <div className="max-w-[800px] mx-auto text-center">
                <div className="flex justify-center mb-6">
                  <Badge
                    icon={
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#37322F"
                        strokeWidth="2"
                      >
                        <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    }
                    text="Discover Real Use Cases"
                  />
                </div>

                <h1 className="text-[#37322F] text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-normal leading-tight font-serif mb-6">
                  Explore Using Oravo Voice
                  <br />
                  in Every App and Language
                </h1>

                <p className="text-[#605A57] text-lg md:text-xl leading-relaxed font-sans max-w-[640px] mx-auto">
                  Browse Oravo use cases by category. Instant voice-to-text that
                  you can use anywhere from communication apps to AI tools to
                  different languages.
                </p>
              </div>
            </section>

            {/* Category Tabs */}
            <section className="px-6 md:px-12 py-8 border-b border-[rgba(55,50,47,0.12)]">
              <div className="flex flex-wrap justify-center gap-3">
                {categoryNames.map((category) => (
                  <CategoryTab
                    key={category}
                    name={category}
                    isActive={activeCategory === category}
                    onClick={() => setActiveCategory(category)}
                  />
                ))}
              </div>
            </section>

            {/* App Cards Grid */}
            <section className="px-6 md:px-12 py-12 md:py-16">
              <div className="max-w-[900px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categories[activeCategory].map((app) => (
                    <AppCard
                      key={app.name}
                      name={app.name}
                      description={app.description}
                      href={app.href}
                      color={app.color}
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* Features Pillar Link */}
            <section className="px-6 md:px-12 py-12 md:py-16 border-t border-[rgba(55,50,47,0.12)]">
              <div className="max-w-[900px] mx-auto">
                <Link 
                  href="/features"
                  className="group block bg-gradient-to-br from-[#1877F2]/5 to-[#1877F2]/10 rounded-2xl p-8 border border-[#1877F2]/20 hover:border-[#1877F2]/40 transition-all duration-300 hover:shadow-[0px_8px_24px_rgba(24,119,242,0.15)]"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <svg className="w-5 h-5 text-[#1877F2]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <span className="text-[#1877F2] text-sm font-semibold uppercase tracking-wide">Pillar Page</span>
                      </div>
                      <h2 className="text-[#37322F] text-2xl md:text-3xl font-normal font-serif mb-2">
                        Voice to Text, Perfected
                      </h2>
                      <p className="text-[#605A57] text-base md:text-lg font-sans max-w-[500px]">
                        Explore all Oravo features: transcription, formatting, translation, and more.
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-[#1877F2] font-semibold group-hover:gap-3 transition-all">
                      <span>See All Features</span>
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </div>
            </section>

            {/* Popular Searches / SEO Pages */}
            <section className="px-6 md:px-12 py-12 md:py-16 border-t border-[rgba(55,50,47,0.12)]">
              <div className="max-w-[900px] mx-auto">
                <div className="text-center mb-10">
                  <h2 className="text-[#37322F] text-2xl md:text-3xl font-normal font-serif mb-3">
                    Popular Voice Typing Topics
                  </h2>
                  <p className="text-[#605A57] text-base md:text-lg font-sans max-w-[600px] mx-auto">
                    Explore our guides for specific platforms, languages, and use cases.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  {[
                    { title: "Speech to Text Mac", href: "/speech-to-text-mac", icon: "🍎", searches: "8,100/mo" },
                    { title: "Speech to Text Windows", href: "/speech-to-text-windows", icon: "🪟", searches: "6,600/mo" },
                    { title: "Voice to Text App", href: "/voice-to-text-app", icon: "🎤", searches: "12,100/mo" },
                    { title: "Dictation App", href: "/dictation-app", icon: "📝", searches: "4,400/mo" },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group bg-white rounded-xl p-4 border border-[#E0DEDB] hover:border-[#847971] transition-all duration-200"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">{item.icon}</span>
                        <span className="text-[#37322F] font-semibold font-sans text-sm group-hover:text-[#1877F2] transition-colors">{item.title}</span>
                      </div>
                      <span className="text-[#847971] text-xs font-sans">{item.searches}</span>
                    </Link>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { title: "Voice Dictation Software", href: "/voice-dictation-software", icon: "💼" },
                    { title: "Voice Typing Translation", href: "/voice-typing-with-translation", icon: "🌍" },
                    { title: "Voice Typing for Accents", href: "/voice-typing-for-accents", icon: "🗣️" },
                    { title: "Spanish Speech to Text", href: "/speech-to-text-spanish", icon: "🇪🇸" },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group bg-white rounded-xl p-4 border border-[#E0DEDB] hover:border-[#847971] transition-all duration-200"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{item.icon}</span>
                        <span className="text-[#37322F] font-medium font-sans text-sm group-hover:text-[#1877F2] transition-colors">{item.title}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </section>

            {/* By Profession Section with Related Apps */}
            <section className="px-6 md:px-12 py-12 md:py-16 border-t border-[rgba(55,50,47,0.12)]">
              <div className="max-w-[900px] mx-auto">
                <div className="text-center mb-10">
                  <h2 className="text-[#37322F] text-2xl md:text-3xl font-normal font-serif mb-3">
                    Voice Typing by Profession
                  </h2>
                  <p className="text-[#605A57] text-base md:text-lg font-sans max-w-[600px] mx-auto">
                    See how Oravo is built for your specific workflow and industry needs.
                  </p>
                </div>

                <div className="space-y-6">
                  {[
                    { 
                      name: "Healthcare", 
                      href: "/for-healthcare", 
                      desc: "Medical documentation & patient notes", 
                      color: "#06B6D4",
                      relatedApps: [
                        { name: "Google Docs", href: "/voice-keyboard-for-google-docs" },
                        { name: "Notion", href: "/voice-keyboard-for-notion" },
                        { name: "Outlook", href: "/voice-keyboard-for-outlook" },
                      ]
                    },
                    { 
                      name: "Lawyers", 
                      href: "/for-lawyers", 
                      desc: "Legal documents & case notes", 
                      color: "#1E3A5F",
                      relatedApps: [
                        { name: "Microsoft Word", href: "/voice-keyboard-for-google-docs" },
                        { name: "Gmail", href: "/voice-keyboard-for-gmail" },
                        { name: "Salesforce", href: "/voice-keyboard-for-salesforce" },
                      ]
                    },
                    { 
                      name: "Students", 
                      href: "/for-students", 
                      desc: "Essays, research papers & study notes", 
                      color: "#F59E0B",
                      relatedApps: [
                        { name: "Google Docs", href: "/voice-keyboard-for-google-docs" },
                        { name: "Notion", href: "/voice-keyboard-for-notion" },
                        { name: "ChatGPT", href: "/voice-keyboard-for-chatgpt" },
                      ]
                    },
                    { 
                      name: "Developers", 
                      href: "/for-developers", 
                      desc: "Code documentation & technical specs", 
                      color: "#10B981",
                      relatedApps: [
                        { name: "VS Code", href: "/voice-keyboard-for-vscode" },
                        { name: "GitHub", href: "/voice-keyboard-for-github" },
                        { name: "Cursor", href: "/voice-keyboard-for-cursor" },
                      ]
                    },
                    { 
                      name: "Sales Teams", 
                      href: "/for-sales", 
                      desc: "CRM updates & follow-up emails", 
                      color: "#3B82F6",
                      relatedApps: [
                        { name: "Salesforce", href: "/voice-keyboard-for-salesforce" },
                        { name: "HubSpot", href: "/voice-keyboard-for-hubspot" },
                        { name: "Gmail", href: "/voice-keyboard-for-gmail" },
                      ]
                    },
                    { 
                      name: "Creators", 
                      href: "/for-creators", 
                      desc: "Video scripts & social content", 
                      color: "#EC4899",
                      relatedApps: [
                        { name: "Notion", href: "/voice-keyboard-for-notion" },
                        { name: "Instagram", href: "/voice-keyboard-for-instagram" },
                        { name: "YouTube", href: "/voice-keyboard-for-canva" },
                      ]
                    },
                    { 
                      name: "Writers", 
                      href: "/for-writers", 
                      desc: "Beat writer's block with voice", 
                      color: "#8B5CF6",
                      relatedApps: [
                        { name: "Google Docs", href: "/voice-keyboard-for-google-docs" },
                        { name: "Medium", href: "/voice-keyboard-for-medium" },
                        { name: "Substack", href: "/voice-keyboard-for-substack" },
                      ]
                    },
                    { 
                      name: "Accessibility", 
                      href: "/for-accessibility", 
                      desc: "Hands-free typing for everyone", 
                      color: "#14B8A6",
                      relatedApps: [
                        { name: "Chrome", href: "/voice-keyboard-for-chrome" },
                        { name: "Slack", href: "/voice-keyboard-for-slack" },
                        { name: "Gmail", href: "/voice-keyboard-for-gmail" },
                      ]
                    },
                  ].map((item) => (
                    <div key={item.name} className="bg-white rounded-2xl p-6 border border-[#E0DEDB]">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <Link
                          href={item.href}
                          className="group flex items-center gap-4"
                        >
                          <div
                            className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                            style={{ background: `${item.color}15` }}
                          >
                            <svg
                              className="w-6 h-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke={item.color}
                              strokeWidth={2}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="text-[#37322F] text-lg font-semibold font-sans mb-1 group-hover:text-[#1877F2] transition-colors flex items-center gap-2">
                              For {item.name}
                              <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                              </svg>
                            </h3>
                            <p className="text-[#847971] text-sm font-sans">{item.desc}</p>
                          </div>
                        </Link>
                        
                        <div className="flex flex-wrap gap-2 md:justify-end">
                          <span className="text-[#847971] text-xs font-sans mr-2 self-center">Popular apps:</span>
                          {item.relatedApps.map((app) => (
                            <Link
                              key={app.name}
                              href={app.href}
                              className="px-3 py-1.5 bg-[#F7F5F3] rounded-full text-xs font-medium text-[#605A57] hover:text-[#1877F2] hover:bg-[#1877F2]/10 transition-colors"
                            >
                              {app.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="px-6 md:px-12 py-16 md:py-20 border-t border-[rgba(55,50,47,0.12)]">
              <div className="max-w-[700px] mx-auto text-center">
                <div className="bg-gradient-to-br from-[#1877F2] to-[#166FE5] rounded-3xl p-8 md:p-12 shadow-[0_8px_48px_rgba(24,119,242,0.3)]">
                  <h2 className="text-white text-2xl md:text-4xl font-normal font-serif mb-4">
                    Ready to Type with Your Voice?
                  </h2>
                  <p className="text-white/90 text-base md:text-lg leading-relaxed font-sans mb-8">
                    Transform your productivity with Oravo. Speak naturally and
                    communicate 4x faster in any app—with 98%+ accuracy and
                    automatic formatting.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                    <Link
                      href="/download"
                      className="inline-flex h-14 px-8 bg-white hover:bg-gray-50 text-[#1877F2] text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg items-center justify-center"
                    >
                      Download Free
                    </Link>
                  </div>

                  <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-white/80 text-sm">
                    <span>Free to start</span>
                    <span>•</span>
                    <span>2-minute setup</span>
                    <span>•</span>
                    <span>Works everywhere</span>
                  </div>
                </div>
              </div>
            </section>
          </main>

          {/* Footer */}
          <FooterSection />
        </div>
      </div>
    </div>
  );
}

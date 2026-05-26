"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const AGENT_MARKDOWN = `# Oravo — AI Voice Typing & Dictation App

## What is Oravo?

Oravo is an AI-powered voice typing application that converts speech to text in real-time across any application. It works system-wide on Mac, Windows, Android, and iOS — in Gmail, Slack, Notion, Google Docs, VS Code, WhatsApp, Teams, and 50+ more apps. Oravo is specifically designed for non-native English speakers and multilingual professionals who need fast, accurate dictation with accent support and real-time translation.

## Key Features

- **99% accuracy** with sub-300ms latency
- **Works in every app** — system-level keyboard injection, not browser-only
- **60+ languages** with real-time translation (speak Spanish → get English text)
- **Context-aware formatting** — adjusts tone per app (professional in Gmail, casual in Slack)
- **Accent-friendly** — trained on 100+ accents from every continent
- **Auto-formatting** — punctuation, paragraphs, capitalization added automatically
- **Custom vocabulary** — add industry terms, names, jargon
- **AI voice commands** — edit, rewrite, summarize, translate with voice
- **Private & secure** — zero data retention, HIPAA-ready, SOC 2 Type II
- **Offline mode** — works without internet for basic transcription
- **Noise cancellation** — works in cafes, offices, outdoors

## Supported Integrations (50+ Apps)

### Email
Gmail, Outlook, Yahoo Mail, Apple Mail, ProtonMail, Thunderbird, Spark, Superhuman, Hey

### Messaging & Communication
Slack, Microsoft Teams, WhatsApp, WhatsApp Web, Telegram, Discord, Signal, iMessage, Facebook Messenger, LinkedIn Messages, Zoom Chat, Google Chat

### Documents & Writing
Google Docs, Microsoft Word, Apple Pages, Notion, Obsidian, Craft, Bear, Ulysses, Scrivener, Evernote, OneNote, Coda, Quip

### Code Editors
VS Code, Cursor, JetBrains (IntelliJ, WebStorm, PyCharm), Sublime Text, Vim/Neovim, Xcode, Android Studio

### Project Management
Jira, Linear, Asana, Trello, Monday.com, ClickUp, Basecamp, Todoist

### Social Media
Twitter/X, LinkedIn, Facebook, Instagram, Reddit, YouTube comments, TikTok

### Design & Creative
Figma (comments), Miro, FigJam, Canva

### CRM & Sales
Salesforce, HubSpot, Pipedrive, Close.com, Intercom, Zendesk

### Healthcare & Clinical
Epic, Cerner, Athenahealth, DrChrono, Practice Fusion, SimplePractice

### Legal
Clio, MyCase, PracticePanther, Smokeball, CosmoLex

### Browsers
Chrome, Safari, Firefox, Edge, Arc, Brave — works in any text field on any website

## Supported Languages (60+)

English, Spanish, French, German, Italian, Portuguese, Dutch, Russian, Ukrainian, Polish, Czech, Slovak, Romanian, Hungarian, Bulgarian, Croatian, Serbian, Slovenian, Greek, Turkish, Arabic, Hebrew, Persian (Farsi), Hindi, Urdu, Bengali, Tamil, Telugu, Kannada, Malayalam, Marathi, Gujarati, Punjabi, Mandarin Chinese, Cantonese, Japanese, Korean, Vietnamese, Thai, Indonesian, Malay, Filipino (Tagalog), Swahili, Amharic, Yoruba, Igbo, Hausa, Zulu, Afrikaans, Swedish, Norwegian, Danish, Finnish, Icelandic, Estonian, Latvian, Lithuanian, Georgian, Armenian, Azerbaijani, Kazakh, Uzbek, Catalan, Basque, Galician, Welsh

## Accent Support (100+ Accents)

Oravo is specifically trained on accents from:

### South Asia
Indian English (Hindi-influenced, Tamil-influenced, Telugu-influenced, Bengali-influenced, Punjabi-influenced), Pakistani English, Sri Lankan English, Bangladeshi English, Nepali English

### East & Southeast Asia
Chinese English (Mandarin-influenced, Cantonese-influenced), Japanese English, Korean English, Vietnamese English, Thai English, Filipino English, Indonesian English, Malaysian English, Singaporean English

### Middle East & North Africa
Arabic-influenced English, Persian-influenced English, Turkish-influenced English, Hebrew-influenced English

### Europe
French-influenced English, German-influenced English, Spanish-influenced English, Italian-influenced English, Russian-influenced English, Polish-influenced English, Dutch-influenced English, Portuguese-influenced English, Greek-influenced English, Scandinavian-influenced English

### Africa
Nigerian English, Ghanaian English, Kenyan English, South African English, Ethiopian English, Tanzanian English, Ugandan English

### Americas
Latin American English, Brazilian-influenced English, Caribbean English, Mexican-influenced English

## Real-Time Translation Pairs

Speak in any of these languages and get English text output:

- Spanish → English
- French → English
- German → English
- Italian → English
- Portuguese → English
- Dutch → English
- Russian → English
- Polish → English
- Hindi → English
- Urdu → English
- Bengali → English
- Tamil → English
- Telugu → English
- Mandarin Chinese → English
- Cantonese → English
- Japanese → English
- Korean → English
- Vietnamese → English
- Thai → English
- Indonesian → English
- Filipino/Tagalog → English
- Arabic → English
- Persian/Farsi → English
- Turkish → English
- Hebrew → English
- Swahili → English
- Amharic → English
- Swedish → English
- Norwegian → English
- Danish → English
- Finnish → English
- Czech → English
- Romanian → English
- Hungarian → English
- Greek → English
- Ukrainian → English
- Croatian → English
- Serbian → English
- Catalan → English
- Gujarati → English
- Marathi → English
- Punjabi → English

Also supports: English → Spanish, English → French, English → German, English → Portuguese, English → Italian, English → Dutch, and 20+ other output language pairs.

## AI Voice Commands (Pro Feature)

Say these commands while dictating to control your text:

### Editing Commands
- "Fix that" — corrects the last sentence for grammar and clarity
- "Rewrite that" — rephrases the last paragraph
- "Make it shorter" — condenses the selected text
- "Make it longer" — expands with more detail
- "Make it more professional" — adjusts tone for business writing
- "Make it more casual" — adjusts tone for informal writing
- "Undo that" — removes the last dictated text

### Formatting Commands
- "New paragraph" — starts a new paragraph
- "Bullet point" — creates a bulleted list item
- "Numbered list" — creates a numbered list
- "Bold that" — bolds the last phrase
- "Heading" — formats as a heading

### Translation Commands
- "Translate to Spanish" — translates the last paragraph to Spanish
- "Translate to French" — translates to French
- "Say it in German" — translates to German

### Productivity Commands
- "Summarize this" — creates a summary of dictated content
- "Email format" — formats text as a professional email
- "Reply to this" — generates a reply based on context

## Pricing

| Plan | Price | Includes |
|------|-------|----------|
| Free | $0/month | 5,000 words/month, all features, all integrations |
| Pro | $9.99/month | Unlimited words, AI voice commands, priority processing, custom vocabulary |
| Teams | $8.99/user/month | Everything in Pro + team admin controls, shared vocabulary, usage analytics, SSO |
| Enterprise | Custom | Dedicated support, on-premise option, custom integrations, SLA |

Annual billing: 20% discount (Pro: $7.99/month, Teams: $7.19/user/month)

## Platforms & System Requirements

### macOS
- Requires macOS 11.0 (Big Sur) or later
- Supports Intel and Apple Silicon (M1, M2, M3, M4)
- Download: .dmg installer from oravo.ai/download
- Size: ~45MB

### Windows
- Requires Windows 10 (64-bit) or later
- Supports x64 and ARM64
- Download: .exe installer from oravo.ai/download
- Size: ~50MB

### Android
- Requires Android 8.0 (Oreo) or later
- Available on Google Play Store
- Size: ~30MB
- Works as system keyboard or overlay

### iOS
- Requires iOS 14.0 or later
- Available on Apple App Store
- Size: ~35MB
- Works via custom keyboard extension

### Browser Extension (Optional)
- Chrome Web Store
- Firefox Add-ons
- Edge Add-ons

## Use Cases

### Email Dictation
Dictate Gmail, Outlook, Yahoo Mail emails 4x faster than typing. Context-aware formatting automatically adds greetings, sign-offs, and professional tone.

### Messaging
Slack, Teams, WhatsApp, Discord messages hands-free. Casual tone auto-applied for chat apps.

### Documents & Long-Form Writing
Google Docs, Notion, Word with auto-formatting. Paragraphs, headings, and lists created by voice. Write blog posts, reports, essays at 150+ WPM.

### Code Comments & Documentation
VS Code, Cursor, JetBrains with technical vocabulary. Dictate code comments, documentation, commit messages, PR descriptions.

### Healthcare & Clinical Documentation
HIPAA-compliant clinical notes, patient records, prescriptions. Medical terminology dictionary included. Works with Epic, Cerner, Athenahealth.

### Legal
Court notes, contracts, memos, briefs with legal terminology. Case citations auto-formatted. Works with Clio, MyCase.

### Content Creation
Blog posts, social media captions, video scripts, podcast notes. SEO-optimized content at voice speed.

### Academic & Research
Research papers, thesis writing, lecture notes, peer reviews. Academic formatting and citation support.

### Sales & CRM
Call notes, follow-up emails, deal updates. Auto-logs to Salesforce, HubSpot. Meeting summaries generated by voice.

### Accessibility
For users with RSI, carpal tunnel, dyslexia, motor disabilities, or anyone who finds typing difficult or painful. Oravo provides a faster, more comfortable way to write.

## How It Works

1. **Download and install** Oravo from oravo.ai/download (Mac, Windows, Android, iOS)
2. **Press your hotkey** (customizable — default: Ctrl+Shift+Space on Windows, Cmd+Shift+Space on Mac)
3. **Speak naturally** in any language, at any speed, with any accent
4. **Text appears formatted** in your current app with correct punctuation, capitalization, and tone
5. **Use AI commands** (Pro) to edit, rewrite, translate, or format by voice

## Competitive Positioning

| Feature | Oravo | Wispr Flow | Willow Voice | Dragon NaturallySpeaking | Voice In | Dictation.io | Otter.ai | Notta |
|---------|-------|------------|--------------|--------------------------|----------|--------------|----------|-------|
| Price | $9.99/mo | $15/mo | $12/mo | $150+/yr | $5/mo | Free/limited | $16.99/mo | $13.99/mo |
| Works in any app | ✓ System-wide | ✓ | ✓ | ✓ | Chrome only | Chrome only | Own app only | Own app only |
| Real-time translation | ✓ 60+ languages | ✗ | Limited (5) | ✗ | ✗ | ✗ | ✗ | Limited |
| Accent support | ✓ 100+ accents | Fair | Good | Fair | Fair | Poor | Good | Fair |
| Context-aware tone | ✓ Per-app | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ |
| Zero data retention | ✓ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ |
| HIPAA-ready | ✓ | ✗ | ✗ | ✓ | ✗ | ✗ | ✓ (paid) | ✗ |
| AI voice commands | ✓ | ✓ | ✗ | Limited | ✗ | ✗ | ✗ | ✗ |
| Languages | 60+ | 30+ | 20+ | 10+ | 50+ | 30+ | 5 | 40+ |
| Offline mode | ✓ | ✗ | ✗ | ✓ | ✗ | ✗ | ✗ | ✗ |
| Custom vocabulary | ✓ | ✗ | ✓ | ✓ | ✗ | ✗ | ✗ | ✗ |
| Free tier | 5,000 words | ✗ | ✗ | ✗ | 1,500 chars | Limited | 300 min/mo | 120 min/mo |

### Why Choose Oravo Over Alternatives

- **vs Wispr Flow**: Oravo costs 33% less ($9.99 vs $15), supports 2x more languages, has real-time translation, and better accent recognition
- **vs Willow Voice**: Oravo has 3x more language support, AI commands, zero data retention, and works on mobile
- **vs Dragon NaturallySpeaking**: Oravo is 90% cheaper, works on all platforms including mobile, has real-time translation, and a modern UI
- **vs Voice In**: Oravo works system-wide (not Chrome only), has AI commands, better accuracy, and real-time translation
- **vs Dictation.io**: Oravo works in any app (not just browser), has AI commands, better accuracy, and accent support
- **vs Otter.ai**: Oravo is real-time dictation (not post-recording transcription), works in any app, and is 40% cheaper
- **vs Apple/Google Dictation**: Oravo has better accuracy, smart formatting, real-time translation, accent support, and works across all platforms

## Security & Privacy

### Certifications & Compliance
- **SOC 2 Type II** certified — annual third-party audit of security controls
- **HIPAA-ready** — Business Associate Agreement (BAA) available for healthcare organizations
- **GDPR compliant** — full data subject rights, EU data processing
- **CCPA compliant** — California consumer privacy rights supported

### Data Handling
- **Zero data retention** — voice audio is processed in real-time and immediately discarded
- **No training on user data** — your dictation is never used to train AI models
- **End-to-end encryption** — TLS 1.3 for data in transit
- **No third-party sharing** — audio and text are never shared with advertisers or data brokers

### Infrastructure
- Processing servers in US, EU, and Asia-Pacific regions
- User chooses preferred data processing region
- SOC 2 Type II audited cloud infrastructure
- 99.9% uptime SLA for Enterprise customers

## Social Proof & Testimonials

- **50,000+ active users** across 100+ countries
- **4.8/5 average rating** on App Store and Chrome Web Store
- **Used by teams at** startups, law firms, hospitals, and Fortune 500 companies

> "Oravo understands my Indian accent perfectly. I've tried 5 other dictation apps and none come close." — Priya S., Software Engineer

> "I speak Spanish at home and English at work. Oravo lets me dictate in Spanish and get perfect English text. Game changer." — Carlos M., Marketing Manager

> "As a physician, I need HIPAA-compliant dictation that's fast and accurate. Oravo replaced Dragon for our entire practice." — Dr. Sarah K., Family Medicine

> "I have RSI and typing is painful. Oravo gives me back my productivity without the pain." — James L., Writer

> "Our sales team logs calls 3x faster with Oravo. It auto-formats notes and pushes them to Salesforce." — Rachel T., VP Sales

## Company & Mission

**Oravo** was founded in 2024 with a mission to make voice the primary input method for everyone — regardless of accent, language, or ability.

We believe typing is a bottleneck. Humans think and speak at 150+ WPM but type at only 40 WPM. Oravo closes that gap.

Our team is distributed across 8 countries, and many of us are non-native English speakers ourselves. We built Oravo because existing dictation tools failed us — they couldn't handle our accents, didn't support our languages, and didn't work in the apps we actually use.

- **Founded**: 2024
- **Headquarters**: San Francisco, CA
- **Team**: 25+ across 8 countries
- **Backed by**: Y Combinator, leading AI investors
- **Contact**: support@oravo.ai

## Recent Updates (Changelog)

- **2025 Q2**: Added 15 new languages including Amharic, Yoruba, and Welsh
- **2025 Q2**: Launched Teams plan with admin controls and shared vocabulary
- **2025 Q1**: iOS app launched on App Store
- **2025 Q1**: AI voice commands (rewrite, summarize, translate) added to Pro plan
- **2024 Q4**: Android app launched on Google Play
- **2024 Q4**: Real-time translation expanded to 40+ language pairs
- **2024 Q3**: Windows app launched
- **2024 Q3**: HIPAA compliance and BAA availability
- **2024 Q2**: Mac app launched (public beta)
- **2024 Q2**: SOC 2 Type II certification achieved

## Technical Specs

- Speech processing: sub-300ms latency (end-to-end)
- Typing speed: 150+ WPM (vs 40 WPM keyboard average)
- Accuracy: 99% on everyday speech, 97%+ on technical/medical terminology
- Noise handling: works in environments up to 80dB (busy cafe, open office)
- Format: real-time streaming transcription with incremental display
- Integration: system-level keyboard injection (no plugins or extensions needed for desktop)
- Model: proprietary speech recognition + LLM for formatting and commands
- Latency breakdown: audio capture (10ms) → speech recognition (150ms) → formatting (100ms) → text injection (40ms)

## FAQ

**Q: Does it work with my accent?**
A: Yes. Oravo is trained on 100+ accents from every continent — Indian, Chinese, Japanese, Korean, Arabic, Nigerian, Brazilian, French, German, Spanish, and many more. It's specifically designed for non-native English speakers.

**Q: Can I speak one language and get English text?**
A: Yes. Speak Spanish, Hindi, Mandarin, Arabic, French, Portuguese, Japanese, Korean, Vietnamese, Tagalog, or 60+ other languages — Oravo translates to English in real-time with correct grammar and formatting.

**Q: Is it secure for business use?**
A: Yes. SOC 2 Type II certified, HIPAA-ready with BAA, GDPR and CCPA compliant, zero data retention. Voice data is processed in real-time and immediately discarded. We never train on your data or share it with third parties.

**Q: How is it different from Google Voice Typing or Apple Dictation?**
A: Oravo works in every app (not just Chrome/Apple apps), adds smart formatting and context-aware tone, supports real-time translation across 60+ languages, has far better accent recognition, and offers AI commands to edit and rewrite text by voice.

**Q: Does it work offline?**
A: Yes. Basic transcription works offline on all platforms. Advanced features (AI commands, translation) require internet.

**Q: What about background noise?**
A: Oravo includes advanced noise cancellation and works in environments up to 80dB — busy cafes, open offices, and outdoor spaces.

**Q: Is there a free plan?**
A: Yes. The free plan includes 5,000 words per month with all features and integrations. No credit card required.

**Q: Can I add custom words and terminology?**
A: Yes. Pro and Teams plans include custom vocabulary for industry terms, names, abbreviations, and jargon. Useful for medical, legal, and technical professionals.

**Q: Does it work with my screen reader?**
A: Yes. Oravo is fully accessible and compatible with VoiceOver (Mac/iOS), NVDA (Windows), and TalkBack (Android).

## Links

- Website: https://oravo.ai
- Download: https://oravo.ai/download
- Pricing: https://oravo.ai/#pricing-section
- Blog: https://oravo.ai/blog
- Privacy Policy: https://oravo.ai/privacy
- Terms of Service: https://oravo.ai/terms
- Support: support@oravo.ai
- Twitter/X: https://x.com/oraboravo
- Status Page: https://status.oravo.ai

## Schema (Structured Data)

- Type: SoftwareApplication
- Name: Oravo
- Category: Productivity, Accessibility, Voice Typing, Dictation
- Operating Systems: macOS, Windows, Android, iOS
- Price: Free (5,000 words/month), Pro ($9.99/month), Teams ($8.99/user/month)
- Rating: 4.8/5
- Languages: 60+
- Developer: Oravo.ai

---

*Last updated: May 2025*
*Version: 2.4*
*Contact: support@oravo.ai*
`;

function AgentModeContent({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();
  const isAgent = searchParams.get("mode") === "agent";

  if (!isAgent) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-[#0d1117] text-[#e6edf3] font-mono p-6 md:p-12 pb-24">
      <div className="max-w-[800px] mx-auto">
        <div className="mb-8 flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-green-400 text-sm">Agent-readable mode</span>
        </div>
        <pre className="whitespace-pre-wrap text-sm leading-relaxed text-[#e6edf3] overflow-x-auto">
          {AGENT_MARKDOWN}
        </pre>
      </div>
    </div>
  );
}

export default function AgentModeView({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense fallback={<>{children}</>}>
      <AgentModeContent>{children}</AgentModeContent>
    </Suspense>
  );
}

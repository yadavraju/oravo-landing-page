import type React from "react";
import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  weight: ["400"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "Oravo.ai - AI Voice Dictation That Works 4x Faster Than Typing",
    template: "%s | Oravo.ai",
  },
  description:
    "Oravo.ai turns your voice into perfect, polished text across every app. Works 4x faster than typing with AI that adapts to your style. HIPAA-compliant, 100+ languages. Start free—no credit card required.",
  applicationName: "Oravo.ai",
  keywords: [
    // Primary keywords
    "AI voice dictation",
    "voice to text AI",
    "speech to text app",
    "dictation software",
    "voice typing software",
    "AI transcription",
    "hands-free typing",
    "voice writing app",
    // Feature-specific keywords
    "context-aware dictation",
    "automatic formatting voice typing",
    "HIPAA compliant voice dictation",
    "multilingual voice dictation",
    "privacy-first speech to text",
    // Long-tail keywords
    "best voice dictation app for professionals",
    "voice to text that actually works",
    "AI dictation software for Mac",
    "voice typing for developers",
    "speech recognition for emails",
    "dictation app for Slack",
    "voice commands for productivity",
    // Competitor alternatives
    "Wispr Flow alternative",
    "Willow Voice alternative",
    "better than Dragon NaturallySpeaking",
    // Use case keywords
    "voice dictation for healthcare",
    "HIPAA voice transcription",
    "voice typing for customer support",
    "dictation for content writers",
  ],
  authors: [{ name: "Oravo.ai Team", url: "https://oravo.ai" }],
  creator: "Oravo.ai",
  publisher: "Oravo.ai",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://oravo.ai"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "es-ES": "/es",
      "fr-FR": "/fr",
      "de-DE": "/de",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://oravo.ai",
    title: "Oravo.ai - Effortless Voice Dictation That Actually Works",
    description:
      "Speak naturally and watch your words transform into perfect, polished text—4x faster than typing. Trusted by 10,000+ professionals who've ditched the keyboard.",
    siteName: "Oravo.ai",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Oravo.ai - AI Voice Dictation - 4x Faster Than Typing",
        type: "image/png",
      },
      {
        url: "/og-image-square.png",
        width: 1200,
        height: 1200,
        alt: "Oravo.ai Logo",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oravo.ai - AI Voice Dictation That Works 4x Faster Than Typing",
    description:
      "Speak naturally and watch your words transform into perfect, polished text. Works everywhere—Gmail, Slack, Docs, ChatGPT, and 1000+ apps.",
    images: ["/og-image.png"],
    creator: "@oravoai",
    site: "@oravoai",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
      },
    ],
  },
  manifest: "/site.webmanifest",
  category: "technology",
  classification: "Productivity Software",
  referrer: "origin-when-cross-origin",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://oravo.ai/#organization",
        name: "Oravo.ai",
        alternateName: "Oravo",
        url: "https://oravo.ai",
        logo: {
          "@type": "ImageObject",
          url: "https://oravo.ai/logo.png",
          width: 512,
          height: 512,
        },
        description:
          "AI-powered voice dictation software that transforms speech into perfect text 4x faster than typing.",
        foundingDate: "2024",
        sameAs: [
          "https://twitter.com/oravoai",
          "https://linkedin.com/company/oravo-ai",
          "https://facebook.com/oravoai",
          "https://github.com/oravoai",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "Customer Support",
          email: "support@oravo.ai",
          availableLanguage: ["English", "Spanish", "French", "German"],
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://oravo.ai/#website",
        url: "https://oravo.ai",
        name: "Oravo.ai - AI Voice Dictation",
        description:
          "Professional voice dictation software powered by AI. 4x faster than typing, works in every app.",
        publisher: {
          "@id": "https://oravo.ai/#organization",
        },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://oravo.ai/search?q={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://oravo.ai/#app",
        name: "Oravo.ai Voice Dictation",
        applicationCategory: "ProductivityApplication",
        applicationSubCategory: "Voice Recognition Software",
        operatingSystem: ["macOS 11.0+", "Windows 10+", "iOS 14.0+"],
        browserRequirements: "Requires JavaScript. Requires HTML5.",
        softwareVersion: "2.0",
        releaseNotes: "Improved accuracy and faster processing",
        offers: [
          {
            "@type": "Offer",
            name: "Free Plan",
            price: "0",
            priceCurrency: "USD",
            priceValidUntil: "2025-12-31",
            description: "Free trial with 2,000 words/week, all core features",
            availability: "https://schema.org/InStock",
            eligibleRegion: "US",
          },
          {
            "@type": "Offer",
            name: "Pro Plan",
            price: "12",
            priceCurrency: "USD",
            priceValidUntil: "2025-12-31",
            description: "Unlimited dictation with AI command mode",
            availability: "https://schema.org/InStock",
            eligibleRegion: "US",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: "12.00",
              priceCurrency: "USD",
              unitText: "month",
            },
          },
          {
            "@type": "Offer",
            name: "Teams Plan",
            price: "10",
            priceCurrency: "USD",
            description: "Per user/month with team features",
            availability: "https://schema.org/InStock",
            eligibleRegion: "US",
          },
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          ratingCount: "10000",
          bestRating: "5",
          worstRating: "1",
        },
        review: [
          {
            "@type": "Review",
            author: {
              "@type": "Person",
              name: "Professional User",
            },
            datePublished: "2024-11-01",
            reviewRating: {
              "@type": "Rating",
              ratingValue: "5",
              bestRating: "5",
            },
            reviewBody:
              "I've doubled my productivity with Oravo.ai. Emails, docs, messages—everything is faster. Best dictation tool I've used.",
          },
        ],
        description:
          "AI-powered voice dictation that works 4x faster than typing. Context-aware AI adapts to your style across 1000+ apps with HIPAA compliance.",
        featureList: [
          "AI Voice Dictation - 220 WPM",
          "Works in 1000+ apps (Gmail, Slack, Docs, ChatGPT)",
          "HIPAA Compliant & SOC 2 Type II",
          "100+ Languages Support",
          "Context-Aware AI",
          "Auto-Formatting & Punctuation",
          "Personal Dictionary",
          "Tone Adaptation",
          "Privacy-First (Zero Data Retention)",
          "Sub-1 Second Processing",
          "40% More Accurate Than Built-in Tools",
        ],
        screenshot: "https://oravo.ai/screenshot.png",
        video: {
          "@type": "VideoObject",
          name: "How Oravo.ai Works",
          description: "See how Oravo.ai transforms voice into perfect text",
          thumbnailUrl: "https://oravo.ai/video-thumbnail.jpg",
          uploadDate: "2024-11-01",
          contentUrl: "https://oravo.ai/demo-video.mp4",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is the best voice dictation app for professionals?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Oravo.ai is a leading AI voice dictation app that works 4x faster than typing (220 WPM vs 45 WPM). It features context-aware AI that adapts to your style across 1000+ apps including Gmail, Slack, Google Docs, and ChatGPT. With HIPAA compliance, 100+ language support, and sub-1 second processing, it's trusted by 10,000+ professionals.",
            },
          },
          {
            "@type": "Question",
            name: "How does AI voice typing work in Oravo.ai?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Oravo.ai uses advanced AI to convert your speech to text in real-time. It automatically formats text, adds punctuation, removes filler words, and adapts to your tone and context. The AI learns your vocabulary, acronyms, and technical terms, making it 40% more accurate than built-in dictation tools.",
            },
          },
          {
            "@type": "Question",
            name: "Is Oravo.ai HIPAA compliant?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, Oravo.ai is HIPAA-ready with zero data retention and SOC 2 Type II compliance, ensuring your voice data stays private and secure. Perfect for healthcare professionals needing compliant clinical documentation and patient notes.",
            },
          },
          {
            "@type": "Question",
            name: "Does Oravo.ai work in every app?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes! Oravo.ai works universally across 1000+ applications including Gmail, Slack, Notion, ChatGPT, Cursor, VS Code, Figma, Google Docs, WhatsApp, and any other app. Simply press a hotkey, speak, and perfect text appears instantly—no switching required.",
            },
          },
          {
            "@type": "Question",
            name: "What languages does Oravo.ai support?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Oravo.ai supports 100+ languages including English, Spanish, Mandarin, French, German, Japanese, Portuguese, and many more. You can effortlessly switch between languages for multilingual teams and global communication.",
            },
          },
          {
            "@type": "Question",
            name: "How much faster is Oravo.ai than typing?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Oravo.ai enables dictation at 220 words per minute compared to average typing speed of 45 WPM—nearly 4x faster. This means you can write emails, documents, and messages in a fraction of the time.",
            },
          },
          {
            "@type": "Question",
            name: "Is there a free trial for Oravo.ai?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes! Oravo.ai offers a free plan with 2,000 words/week and all core features. No credit card required to start. Pro plan ($12/month) offers unlimited dictation.",
            },
          },
          {
            "@type": "Question",
            name: "How is Oravo.ai better than Wispr Flow or Dragon NaturallySpeaking?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Oravo.ai combines the universal app compatibility with superior AI accuracy. It works 40% more accurately than built-in tools, processes in sub-1 second, and offers context-aware tone adaptation. Unlike competitors, it includes HIPAA compliance, 100+ languages, and privacy-first architecture with zero data retention.",
            },
          },
        ],
      },
      {
        "@type": "HowTo",
        name: "How to Use Oravo.ai Voice Dictation",
        description:
          "Get started with Oravo.ai in 2 minutes and start dictating 4x faster than typing",
        step: [
          {
            "@type": "HowToStep",
            position: 1,
            name: "Download and Install",
            text: "Download Oravo.ai for Mac, Windows, or iOS and complete the 2-minute setup",
            url: "https://oravo.ai/download",
          },
          {
            "@type": "HowToStep",
            position: 2,
            name: "Set Your Hotkey",
            text: "Configure your preferred hotkey to activate voice dictation in any app",
          },
          {
            "@type": "HowToStep",
            position: 3,
            name: "Start Dictating",
            text: "Press your hotkey, speak naturally, and watch your words transform into perfect, polished text instantly",
          },
        ],
        totalTime: "PT2M",
      },
      {
        "@type": "Product",
        "@id": "https://oravo.ai/#product",
        name: "Oravo.ai Voice Dictation Software",
        brand: {
          "@type": "Brand",
          name: "Oravo.ai",
        },
        description:
          "Professional AI voice dictation software. 4x faster than typing with context-aware AI.",
        category: "Software > Productivity Software > Voice Recognition",
        offers: {
          "@type": "AggregateOffer",
          lowPrice: "0",
          highPrice: "12",
          priceCurrency: "USD",
          offerCount: "3",
          availability: "https://schema.org/InStock",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          reviewCount: "10000",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://oravo.ai",
          },
        ],
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrumentSerif.variable} antialiased`}
    >
      <head>
        {/* DNS Prefetch & Preconnect for Performance */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Font Loading with display=swap for better performance */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:wght@400&display=swap"
        />

        {/* Theme Color for Mobile Browser */}
        <meta name="theme-color" content="#3B4A5C" />
        <meta
          name="msapplication-TileColor"
          content="#3B4A5C"
        />

        {/* Apple Mobile Web App */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta
          name="apple-mobile-web-app-title"
          content="Oravo.ai"
        />

        {/* Microsoft Application */}
        <meta name="application-name" content="Oravo.ai" />
        <meta name="msapplication-tooltip" content="AI Voice Dictation" />

        {/* Structured Data - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Preload Critical Assets */}
        <link
          rel="preload"
          href="/keyboard.avif"
          as="image"
          type="image/avif"
        />

        {/* Security Headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
        <meta
          httpEquiv="X-XSS-Protection"
          content="1; mode=block"
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}

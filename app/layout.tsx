import type React from "react";
import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import Script from "next/script";
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
    default: "AI Speech to Text for Mac, Windows, Linux | Oravo",
    template: "%s | Oravo",
  },
  description:
    "Privacy-focused AI speech-to-text for emails, docs, Cursor & messaging. Voice dictation with context-aware AI and custom dictionaries. Fast, accurate, secure.",
  applicationName: "Oravo.ai",
  keywords: [
    // High-value primary keywords (from keyword research)
    "voice dictation software",
    "real-time AI dictation",
    "speech to text SaaS",
    "accurate voice transcription",
    "dictation for teams",
    "AI voice notes",
    "multi-language dictation",
    "secure dictation",
    "app integration voice",
    "productivity dictation tool",

    // Core USP keywords
    "AI voice dictation",
    "voice to text AI",
    "real-time transcription",
    "formatted text dictation",
    "cross-platform dictation",

    // Audience-specific (from target segments)
    "dictation for content creators",
    "voice typing for journalists",
    "dictation for healthcare",
    "legal transcription software",
    "dictation for global teams",
    "voice notes for marketers",

    // Feature-specific
    "noisy environment dictation",
    "HIPAA compliant voice dictation",
    "privacy-first speech to text",
    "automatic formatting voice typing",
    "technical jargon transcription",
    "multi-language support dictation",

    // Long-tail intent keywords
    "best voice dictation software for teams",
    "accurate speech to text for Mac Windows",
    "dictation works in Google Docs Slack email",
    "transcribe in noisy environments",
    "secure HIPAA voice transcription",

    // Competitor alternatives (from research)
    "WisprFlow alternative",
    "WillowVoice alternative",
    "Otter.ai alternative",
    "Dragon NaturallySpeaking alternative",
    "Speechly alternative",
    "better than Dictation.io",
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
    title: "AI Speech to Text for Mac, Windows, Linux | Oravo",
    description:
      "Privacy-focused AI speech-to-text for emails, docs, Cursor & messaging. Voice dictation with context-aware AI and custom dictionaries. Fast, accurate, secure.",
    siteName: "Oravo",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Oravo.ai - AI Voice Dictation - 4x Faster Than Typing",
        type: "image/png",
      },
      {
        url: "/og-image.png",
        width: 1200,
        height: 1200,
        alt: "Oravo.ai Logo",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Speech to Text for Mac, Windows, Linux | Oravo",
    description:
      "Privacy-focused AI speech-to-text with voice dictation for emails, docs, Cursor & more. Context-aware AI. Fast, accurate, secure. Try free.",
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
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "icon",
        url: "/favicon.ico",
        sizes: "16x16 32x32",
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
        releaseNotes:
          "97% accuracy in real-time transcription, improved noise handling",
        featureList: [
          "Real-time AI voice dictation",
          "97% transcription accuracy (Q4 2025 internal benchmark)",
          "Works in noisy environments",
          "Cross-platform support (Mac, Windows, iOS)",
          "100+ language support",
          "HIPAA-compliant encryption",
          "Integration with 1000+ apps",
          "Automatic text formatting",
          "Custom vocabulary support",
          "Technical jargon recognition",
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          ratingCount: "2847",
          bestRating: "5",
          worstRating: "1",
        },
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
        <meta name="msapplication-TileColor" content="#3B4A5C" />

        {/* Apple Mobile Web App */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content="Oravo.ai" />

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
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      </head>
      <body className="font-sans antialiased">
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BXXZJF9LRR"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BXXZJF9LRR');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}

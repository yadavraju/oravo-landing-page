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
    default: "Oravo - Fastest Voice Typing App | Secure AI Speech-to-Text for Mac, Windows & iOS",
    template: "%s | Oravo",
  },
  description:
    "The fastest voice typing app - 4x faster than keyboard typing. Secure AI speech-to-text with zero data retention. Works in Google Docs, Gmail, Slack & 1000+ apps. HIPAA-ready, end-to-end encrypted. 100+ languages. Try free, no card required.",
  applicationName: "Oravo.ai",
  keywords: [
    // PRIMARY: Consumer-focused "voice typing" keywords (highest search volume)
    "voice typing",
    "voice typing app",
    "best voice typing app",
    "fastest voice typing app",
    "voice typing for Mac",
    "voice typing for Windows",
    "voice typing Chrome",
    "voice typing Google Docs",
    "voice typing software",
    "voice typing for iPhone",
    "free voice typing app",
    "AI voice typing",
    "voice typing extension",
    "voice typing online",
    "secure voice typing app",

    // Speed & performance keywords
    "fast voice typing",
    "fastest voice typing",
    "4x faster than typing",
    "real-time voice typing",
    "instant voice typing",
    "quick voice typing",

    // Security-focused voice typing keywords
    "secure voice typing",
    "private voice typing",
    "HIPAA compliant voice typing",
    "encrypted voice typing",
    "privacy-first voice typing",
    "zero data retention voice typing",

    // Speech-to-text variations (also high volume)
    "speech to text app",
    "speech to text software",
    "AI speech to text",
    "secure speech to text",
    "real-time speech to text",
    "speech to text for Mac",

    // Voice-to-text variations
    "voice to text",
    "voice to text app",
    "voice to text free",
    "best voice to text app",
    "AI voice to text",

    // SECONDARY: Professional "voice dictation" keywords (B2B/enterprise)
    "voice dictation",
    "voice dictation software",
    "best dictation app",
    "dictation app",
    "medical dictation software",
    "legal dictation software",
    "dictation app for professionals",
    "HIPAA compliant dictation",
    "encrypted voice dictation",
    "privacy-first dictation",

    // Use case specific (consumer + professional)
    "voice typing for writers",
    "voice typing for students",
    "voice typing for emails",
    "dictation for healthcare",
    "dictation for legal",
    "voice typing for content creators",
    "voice typing for journalists",

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
    "Wispr Flow alternative",
    "WisprFlow alternative",
    "Granola AI alternative",
    "Otter.ai alternative",
    "Fireflies alternative",
    "Grain alternative",
    "Dragon NaturallySpeaking alternative",
    "Dragon alternative",
    "Speechly alternative",
    "Descript alternative",
    "Trint alternative",
    "Rev alternative",
    "better than Dictation.io",
    "better than Google Voice Typing",
    "better than Mac dictation",
    "better than Windows speech recognition",
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
    canonical: "https://oravo.ai",
    languages: {
      "en-US": "https://oravo.ai",
      "es-ES": "https://oravo.ai/es",
      "fr-FR": "https://oravo.ai/fr",
      "de-DE": "https://oravo.ai/de",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://oravo.ai",
    title: "Oravo - Fastest Voice Typing App | Secure AI Speech-to-Text",
    description:
      "The fastest voice typing app - 4x faster than keyboard typing. Secure AI speech-to-text with zero data retention. Works in Google Docs, Gmail, Slack & 1000+ apps. HIPAA-ready, encrypted. 100+ languages.",
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
    title: "Oravo - Fastest Voice Typing App",
    description:
      "AI voice typing 4x faster than keyboard typing. Secure speech-to-text with zero data retention. Works in Google Docs, Gmail, Slack & all apps. HIPAA-ready, encrypted. Try free.",
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
          "The fastest AI voice typing app with zero data retention and end-to-end encryption. Secure speech-to-text that works 4x faster than keyboard typing across all your apps.",
        foundingDate: "2024",
        slogan: "Fastest Voice Typing - Secure, Private, 4x Faster",
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
        name: "Oravo.ai Voice Typing",
        applicationCategory: "ProductivityApplication",
        applicationSubCategory: "Voice Typing Software",
        operatingSystem: ["macOS 11.0+", "Windows 10+", "iOS 14.0+"],
        browserRequirements: "Requires JavaScript. Requires HTML5.",
        softwareVersion: "2.0",
        releaseNotes:
          "97% accuracy in real-time transcription, improved noise handling",
        featureList: [
          "4x faster than keyboard typing (220 WPM vs 45 WPM)",
          "Real-time AI voice typing with <1 second latency",
          "Works in Google Docs, Gmail, Slack & 1000+ apps",
          "Zero data retention - your voice stays private",
          "End-to-end encryption for maximum security",
          "HIPAA-ready and SOC 2 Type II compliant",
          "97% transcription accuracy (Q4 2025 internal benchmark)",
          "Works in noisy environments",
          "Cross-platform support (Mac, Windows, iOS)",
          "100+ language support",
          "Automatic text formatting",
          "Custom vocabulary support",
          "Technical jargon recognition",
          "Privacy-first architecture - no cloud storage",
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
              "I've doubled my productivity with Oravo.ai. Voice typing and meeting notes - everything is faster. Best AI voice tool I've used.",
          },
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
            name: "Is Oravo.ai secure and privacy-focused?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Oravo.ai is built with privacy-first architecture and zero data retention. All voice data is processed with end-to-end encryption and immediately deleted after transcription. We never store your voice recordings or personal data. We are HIPAA-ready and SOC 2 Type II certified, ensuring the highest security standards for professionals in healthcare, legal, and enterprise environments.",
            },
          },
          {
            "@type": "Question",
            name: "What is the fastest voice typing app?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Oravo.ai is the fastest voice typing app, enabling you to type at 220 words per minute using your voice - that's 4x faster than average keyboard typing speed of 45 WPM. With sub-1 second latency and real-time AI transcription, your words appear instantly as you speak. Works in Google Docs, Gmail, Slack, and all your favorite apps with 97% accuracy, even in noisy environments.",
            },
          },
          {
            "@type": "Question",
            name: "What is the best voice typing app?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Oravo.ai is the best voice typing app that works 4x faster than keyboard typing (220 WPM vs 45 WPM). It features secure, privacy-first AI that adapts to your style across 1000+ apps including Google Docs, Gmail, Slack, and ChatGPT. With zero data retention, HIPAA compliance, 100+ language support, and sub-1 second processing, it's trusted by 10,000+ users worldwide.",
            },
          },
          {
            "@type": "Question",
            name: "How does voice typing work in Oravo.ai?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Oravo.ai uses advanced AI to convert your speech to text in real-time as you speak. It automatically formats text, adds punctuation, removes filler words, and adapts to your tone and context. The AI learns your vocabulary, acronyms, and technical terms. Works in Google Docs, Gmail, Slack, and all apps - just press a hotkey and start speaking.",
            },
          },
          {
            "@type": "Question",
            name: "Is Oravo.ai HIPAA compliant and does it store my data?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, Oravo.ai is HIPAA-ready with zero data retention and SOC 2 Type II compliance. We never store your voice recordings or transcription data. All processing happens with end-to-end encryption and data is immediately deleted after transcription. Your voice data stays completely private and secure. Perfect for healthcare professionals needing compliant clinical documentation and patient notes.",
            },
          },
          {
            "@type": "Question",
            name: "How does Oravo.ai protect my privacy?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Oravo.ai uses a privacy-first architecture with three layers of protection: (1) Zero data retention - we never store your voice recordings or personal data, (2) End-to-end encryption for all voice processing, and (3) No cloud storage - your data is never uploaded to third-party servers. We are SOC 2 Type II certified and HIPAA-ready, making us the most secure voice typing solution for professionals who value privacy.",
            },
          },
          {
            "@type": "Question",
            name: "Does voice typing work in Google Docs and other apps?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes! Oravo.ai voice typing works universally across 1000+ applications including Google Docs, Gmail, Slack, Notion, ChatGPT, Cursor, VS Code, Figma, WhatsApp, and any other app. Simply press a hotkey, speak, and perfect text appears instantly in any app—no switching required. Works on Mac, Windows, and iOS.",
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
        name: "How to Use Oravo.ai Voice Typing",
        description:
          "Get started with Oravo.ai voice typing in 2 minutes and start typing 4x faster using your voice",
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
            name: "Start Voice Typing",
            text: "Press your hotkey, speak naturally, and watch your words transform into perfect text instantly in any app - Google Docs, Gmail, Slack, and more",
          },
        ],
        totalTime: "PT2M",
      },
      {
        "@type": "Product",
        "@id": "https://oravo.ai/#product",
        name: "Oravo.ai Voice Typing Software",
        brand: {
          "@type": "Brand",
          name: "Oravo.ai",
        },
        description:
          "The fastest voice typing app. 4x faster than keyboard typing with secure, privacy-first AI. Works in Google Docs, Gmail, Slack & all apps.",
        category: "Software > Productivity Software > Voice Typing",
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
        {/* Favicon - Explicit Links for Better Browser Support */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon-192.png" type="image/png" sizes="192x192" />
        <link rel="icon" href="/icon-512.png" type="image/png" sizes="512x512" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" />

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

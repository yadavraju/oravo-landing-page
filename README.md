# Oravo.ai - Fastest & Most Secure AI Voice Typing

![Oravo.ai](https://oravo.ai/og-image.png)

**Website:** [https://oravo.ai](https://oravo.ai)

## What is Oravo.ai?

Oravo is a **privacy-first AI voice typing and speech-to-text application** that's 4x faster than keyboard typing (220 WPM vs 45 WPM). Built with security and speed at its core, Oravo provides real-time AI-powered dictation across 100+ languages with zero data retention.

### Key Features

- **⚡ Lightning Fast**: 4x faster than traditional typing with <1 second latency
- **🔒 Privacy-First**: Zero data retention, HIPAA-ready, end-to-end encrypted
- **🌍 100+ Languages**: Multilingual support including rare dialects with mid-sentence language switching
- **🎯 40% More Accurate**: AI learns your writing style and recognizes technical terms automatically
- **🚀 Universal Integration**: Works in Google Docs, Gmail, Slack, Notion, and 1000+ apps
- **🧠 Industry Jargon**: Learns medical, legal, tech terminology after hearing it once
- **🔓 Open Source Models**: Built on open-source AI models for transparency
- **✅ SOC 2 Type II**: Enterprise-grade security compliance

### Target Use Cases

- **Medical Professionals**: HIPAA-compliant medical dictation and EMR documentation
- **Legal Professionals**: Legal transcription, case notes, and deposition documentation
- **Content Creators**: Blog posts, articles, and long-form content creation
- **Software Engineers**: Code documentation and technical writing
- **Multilingual Teams**: Real-time transcription across multiple languages

---

## 🏗️ Architecture & Technology Stack

This repository contains the **official marketing website and landing page** for Oravo.ai, built with modern web technologies for optimal performance and SEO.

### Core Framework

- **[Next.js 14.2.16](https://nextjs.org/)** - React framework with App Router
  - Server Components for optimal performance
  - Static & Dynamic rendering
  - Built-in SEO optimization
  - Image optimization with next/image

### Frontend Technologies

#### UI Framework
- **[React 18](https://react.dev/)** - Modern React with hooks and concurrent features
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type-safe development
- **[TailwindCSS 4.1.9](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Framer Motion 12](https://www.framer.com/motion/)** - Animation library for smooth interactions

#### UI Components
- **[Radix UI](https://www.radix-ui.com/)** - Accessible, unstyled component primitives
  - Accordion, Dialog, Dropdown, Tooltip, and 20+ components
  - ARIA-compliant accessibility
  - Keyboard navigation support
- **[Lucide React](https://lucide.dev/)** - Beautiful, consistent icons
- **[Simple Icons](https://simpleicons.org/)** - Brand icons (ChatGPT, Claude, Perplexity, etc.)

#### Form Handling
- **[React Hook Form 7](https://react-hook-form.com/)** - Performant form validation
- **[Zod 3.25](https://zod.dev/)** - TypeScript-first schema validation
- **[@hookform/resolvers](https://www.npmjs.com/package/@hookform/resolvers)** - Form validation integration

### Content Management

- **[Sanity CMS 4.13](https://www.sanity.io/)** - Headless CMS for blog content
  - Real-time collaborative editing
  - Structured content modeling
  - Image pipeline with @sanity/image-url
  - Next.js integration with next-sanity
  - Portable Text for rich text content

### Styling & Design System

- **[TailwindCSS Animate](https://www.npmjs.com/package/tailwindcss-animate)** - Animation utilities
- **[Class Variance Authority](https://cva.style/)** - Component variant management
- **[clsx](https://www.npmjs.com/package/clsx)** & **[tailwind-merge](https://www.npmjs.com/package/tailwind-merge)** - Class name utilities
- **[Geist Font](https://vercel.com/font)** - Modern, readable typography

### Analytics & Monitoring

- **[@vercel/analytics](https://vercel.com/analytics)** - Web analytics and performance monitoring
  - Page views and user engagement
  - Core Web Vitals tracking
  - Real User Monitoring (RUM)

### Deployment & Hosting

- **[Vercel](https://vercel.com/)** - Hosting and deployment platform
  - Edge Network for global performance
  - Automatic HTTPS and SSL
  - Preview deployments for every PR
  - Built-in CDN

---

## 📂 Project Structure

```
oravo-landing-page/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with SEO metadata
│   ├── page.tsx                 # Homepage
│   ├── download/                # Download page
│   ├── how-to-use/              # How-to-use guide
│   ├── payment-success/         # Payment confirmation
│   ├── subprocessors/           # Data subprocessors list
│   ├── blog/                    # Blog listing
│   │   └── [slug]/             # Dynamic blog post pages
│   ├── robots.ts               # Robots.txt configuration
│   └── sitemap.ts              # XML sitemap generation
│
├── components/                   # React components
│   ├── header.tsx              # Navigation header
│   ├── footer-section.tsx      # Footer
│   ├── pricing-section.tsx     # Pricing plans
│   ├── faq-section.tsx         # FAQ accordion
│   ├── ask-ai-section.tsx      # AI chatbot links
│   ├── testimonials-section.tsx
│   ├── DownloadButtons.tsx
│   └── ui/                     # Radix UI components
│
├── sanity/                      # Sanity CMS configuration
│   ├── lib/
│   │   ├── client.ts           # Sanity client setup
│   │   └── queries.ts          # GROQ queries
│   └── schemas/                # Content schemas
│
├── public/                      # Static assets
│   ├── openai.svg
│   ├── mask-group-pattern.svg
│   └── [images, icons, etc.]
│
├── styles/
│   └── globals.css             # Global styles
│
└── Configuration Files
    ├── tailwind.config.ts      # TailwindCSS configuration
    ├── tsconfig.json           # TypeScript configuration
    ├── next.config.js          # Next.js configuration
    └── package.json            # Dependencies
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js 18+** (recommended: v18.17.0 or higher)
- **npm** or **pnpm** (recommended)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-org/oravo-landing-page.git
   cd oravo-landing-page
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file:
   ```bash
   NEXT_PUBLIC_BASE_URL=https://oravo.ai
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm run start
```

---

## 📊 SEO Optimization

This website is heavily optimized for search engines with a focus on voice typing, speech-to-text, and dictation keywords.

### SEO Features

#### Metadata & Structured Data
- **135+ targeted keywords**: Voice typing, speech-to-text, dictation, HIPAA-compliant, etc.
- **JSON-LD schemas**: Organization, SoftwareApplication, FAQPage, HowTo, Product
- **OpenGraph & Twitter Cards**: Social media optimization
- **Canonical URLs**: Proper URL canonicalization with middleware

#### Performance
- **Core Web Vitals optimized**: LCP, FID, CLS
- **Next.js Image optimization**: Automatic WebP conversion
- **Static generation**: Pre-rendered pages for speed
- **Edge caching**: Vercel Edge Network

#### Content Strategy
- **Consumer keywords**: "voice typing app", "Google Docs voice typing"
- **Professional keywords**: "medical dictation", "legal transcription", "HIPAA voice typing"
- **Long-tail keywords**: "fastest voice typing app", "secure speech-to-text"
- **Industry-specific**: Medical, legal, engineering, finance terminology

#### Technical SEO
- **Dynamic XML sitemap**: Auto-generated from app routes and blog posts
- **Robots.txt**: Proper crawler instructions
- **NoIndex for transactional pages**: Payment success pages excluded
- **Mobile-responsive**: Fully responsive design
- **Semantic HTML**: Proper heading hierarchy and ARIA labels

---

## 🎨 Design System

### Color Palette

```css
/* Primary Colors */
--primary-dark: #37322F;      /* Charcoal */
--primary-light: #F7F5F3;     /* Beige/Cream */

/* Text Colors */
--text-primary: #37322F;      /* Dark text */
--text-secondary: #605A57;    /* Medium text */
--text-tertiary: #847971;     /* Light text */

/* Accent Colors */
--accent-orange: #FF8C42;     /* CTA buttons */
--accent-orange-dark: #FF6B1A;

/* Borders */
--border-light: rgba(55,50,47,0.12);
--border-medium: #E0DEDB;
```

### Typography

- **Headings**: Font-stretch semi-condensed serif
- **Body**: Sans-serif (system fonts)
- **Font Sizes**: Responsive scaling (mobile: 28px → desktop: 80px for H1)

### Components

- **Buttons**: Gradient backgrounds with hover animations
- **Cards**: Subtle shadows and border styles
- **Badges**: Trust indicators with icons
- **Animations**: Framer Motion for smooth transitions

---

## 🔧 Key Features Implementation

### 1. Blog System (Sanity CMS)
- Dynamic routing with `[slug]` pages
- Rich text content with Portable Text
- Image optimization through Sanity CDN
- GROQ queries for efficient content fetching

### 2. Pricing Section
- Monthly/Annual billing toggle
- Animated price transitions
- Three-tier pricing (Starter, Professional, Enterprise)
- All CTAs link to `/download`

### 3. FAQ Section
- Radix UI Accordion for accessibility
- Multiple items can be open simultaneously
- Smooth expand/collapse animations
- SEO-optimized with FAQ schema

### 4. Ask AI Section
- Integration with ChatGPT, Claude, and Perplexity
- Pre-populated prompts about Oravo.ai
- Icons from Simple Icons library
- Hover effects with smooth transitions

### 5. Feature Cards
- Auto-rotating carousel with progress bars
- Click-to-focus interaction
- SEO-optimized benefit-driven copy
- Industry-specific examples (medical, legal, tech)

---

## 📈 Performance Metrics

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint (FCP)**: < 1.2s
- **Largest Contentful Paint (LCP)**: < 2.5s
- **Time to Interactive (TTI)**: < 3.5s
- **Cumulative Layout Shift (CLS)**: < 0.1

---

## 🔐 Security & Privacy

### Data Processing Subprocessors

Oravo uses the following trusted subprocessors (see `/subprocessors` page):

- **AWS** - Cloud infrastructure
- **Deepgram** - Speech-to-text processing
- **OpenAI** - AI language model services
- **Groq** - AI inference and processing
- **Anthropic** - AI language model services
- **Stripe** - Payment processing
- **Cloudflare** - CDN and security
- **Supabase** - Database

### Security Features

- **Zero Data Retention**: Voice data is not stored
- **HIPAA-Ready**: Compliant with healthcare regulations
- **SOC 2 Type II**: Enterprise security certification
- **End-to-End Encryption**: Data encrypted in transit
- **Open Source Models**: Transparent AI processing

---

## 🌍 SEO Keywords Focus

### Primary Keywords
- Voice typing
- Voice typing app
- Speech-to-text
- AI voice typing
- Fastest voice typing app
- Secure voice typing

### Industry-Specific Keywords
- Medical dictation software
- Legal transcription app
- HIPAA-compliant voice typing
- Medical terminology dictation
- Legal document transcription

### Competitive Keywords
- Google Docs voice typing alternative
- Dragon NaturallySpeaking alternative
- Otter.ai alternative
- Better than built-in voice typing

---

## 🤝 Contributing

We welcome contributions! This repository is public to help Oravo.ai gain SEO visibility through GitHub.

### How to Contribute

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Standards

- TypeScript for all new code
- Follow existing component patterns
- Use TailwindCSS utility classes
- Ensure accessibility (ARIA labels, keyboard navigation)
- Test on mobile and desktop

---

## 📝 License

This project is proprietary software owned by Oravo.ai. While the source code is public for transparency and SEO purposes, all rights are reserved.

---

## 📞 Contact & Links

- **Website**: [https://oravo.ai](https://oravo.ai)
- **Download**: [https://oravo.ai/download](https://oravo.ai/download)
- **Blog**: [https://oravo.ai/blog](https://oravo.ai/blog)
- **Support**: Available through Intercom on website
- **Privacy Policy**: [https://oravo.ai/privacy](https://oravo.ai/privacy)
- **Terms of Service**: [https://oravo.ai/terms](https://oravo.ai/terms)

---

## 🎯 SEO Strategy

This repository serves dual purposes:

1. **Primary**: Official marketing website for Oravo.ai
2. **Secondary**: GitHub SEO - Ranking for voice typing and speech-to-text keywords

By open-sourcing our landing page, we:
- Build trust through transparency
- Gain backlinks from GitHub
- Rank for technical keywords
- Showcase our technology stack
- Enable community contributions

---

**Built with ❤️ by the Oravo.ai team**

*Making voice typing faster, more secure, and universally accessible.*

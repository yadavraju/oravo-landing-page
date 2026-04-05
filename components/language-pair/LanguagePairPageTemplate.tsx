import Link from "next/link";
import { Header } from "@/components/header";
import FooterSection from "@/components/footer-section";
import type { LanguagePairConfig } from "@/lib/languagePairPages";

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

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <article className="group p-5 bg-white border border-[#E0DEDB] rounded-xl flex flex-col gap-4 transition-all duration-200 hover:border-[#847971]">
      <div className="w-10 h-10 rounded-lg bg-[#F7F5F3] flex items-center justify-center text-[#605A57] group-hover:text-[#37322F] transition-colors">
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
        </svg>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-[#37322F] text-base font-semibold leading-tight font-sans">
          {title}
        </h3>
        <p className="text-[#605A57] text-sm font-normal leading-relaxed font-sans">
          {description}
        </p>
      </div>
    </article>
  );
}

function StepCard({
  number,
  title,
  description,
  accentColor,
}: {
  number: number;
  title: string;
  description: string;
  accentColor: string;
}) {
  return (
    <div className="flex gap-4">
      <div
        className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
        style={{ background: accentColor }}
      >
        <span className="text-white text-lg font-semibold">{number}</span>
      </div>
      <div className="flex-1">
        <h4 className="text-[#37322F] text-base font-semibold font-sans mb-2">
          {title}
        </h4>
        <p className="text-[#605A57] text-sm leading-relaxed font-sans">
          {description}
        </p>
      </div>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <article className="p-5 bg-white border border-[#E0DEDB] rounded-xl">
      <h4 className="text-[#37322F] text-base font-semibold font-sans mb-2">
        {question}
      </h4>
      <p className="text-[#605A57] text-sm leading-relaxed font-sans">
        {answer}
      </p>
    </article>
  );
}

export function LanguagePairPageTemplate({ config }: { config: LanguagePairConfig }) {
  const accent = config.accentColor;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: config.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="w-full min-h-screen relative bg-[#F7F5F3] overflow-x-hidden flex flex-col justify-start items-center">
      {/* FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="relative flex flex-col justify-start items-center w-full">
        <div className="w-full max-w-none px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1060px] lg:w-[1060px] relative flex flex-col justify-start items-start min-h-screen">
          {/* Left vertical line */}
          <div className="w-[1px] h-full absolute left-4 sm:left-6 md:left-8 lg:left-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0" />
          {/* Right vertical line */}
          <div className="w-[1px] h-full absolute right-4 sm:right-6 md:right-8 lg:right-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0" />

          <Header />

          <main className="flex-1 w-full mt-20 md:mt-24 lg:mt-28 relative z-10">
            {/* Hero */}
            <section className="px-6 md:px-12 py-12 md:py-20 border-b border-[rgba(55,50,47,0.12)]">
              <div className="max-w-[800px] mx-auto text-center">
                <div className="flex justify-center mb-6">
                  <Badge
                    icon={<span className="text-sm">{config.flag}</span>}
                    text={config.heroBadge}
                  />
                </div>

                <h1 className="text-[#37322F] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight font-serif mb-6">
                  {config.heroTitle}{" "}
                  <span style={{ color: accent }}>{config.heroHighlight}</span>
                </h1>

                <p className="text-[#605A57] text-lg md:text-xl leading-relaxed font-sans mb-4 max-w-[640px] mx-auto">
                  {config.heroDescription}
                </p>
                <p className="text-[#847971] text-base leading-relaxed font-sans mb-8 max-w-[640px] mx-auto italic">
                  {config.heroSubDescription}
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Link
                    href="/download"
                    className="group relative h-12 px-8 overflow-hidden rounded-full flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95"
                    style={{
                      background: `linear-gradient(to bottom, ${accent}, ${accent})`,
                      boxShadow: `0px 0px 0px 2.5px rgba(255,255,255,0.08) inset, 0px 4px 12px ${accent}66`,
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/10 pointer-events-none"></div>
                    <span className="text-white text-base font-medium leading-5 font-sans relative z-10">
                      Download Free
                    </span>
                    <svg className="w-5 h-5 relative z-10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <path d="M12 5v14M5 12l7 7 7-7" />
                    </svg>
                  </Link>
                  <Link
                    href="/how-to-use"
                    className="group relative h-12 px-8 bg-gradient-to-b from-white to-gray-100 hover:from-gray-50 hover:to-gray-200 shadow-[0px_0px_0px_2.5px_rgba(0,0,0,0.05)_inset,0px_4px_12px_rgba(0,0,0,0.1)] overflow-hidden rounded-full flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95 border border-gray-200"
                  >
                    <span className="text-gray-800 text-base font-medium leading-5 font-sans relative z-10">
                      See How It Works
                    </span>
                  </Link>
                </div>

                <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-[#847971]">
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    4x faster than typing
                  </span>
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Real-time translation
                  </span>
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    99% accuracy
                  </span>
                </div>
              </div>
            </section>

            {/* Features */}
            <section className="px-6 md:px-12 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)]">
              <div className="max-w-[900px] mx-auto">
                <div className="text-center mb-12">
                  <div className="flex justify-center mb-4">
                    <Badge
                      icon={
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#37322F" strokeWidth="2">
                          <path d="M12 2L2 7l10 5 10-5-10-5z" />
                          <path d="M2 17l10 5 10-5" />
                          <path d="M2 12l10 5 10-5" />
                        </svg>
                      }
                      text="Features"
                    />
                  </div>
                  <h2 className="text-[#49423D] text-[28px] sm:text-3xl md:text-4xl font-medium leading-tight font-serif mb-4">
                    Built for {config.sourceLanguage} Speakers
                  </h2>
                  <p className="text-[#605A57] text-base md:text-lg font-sans max-w-[600px] mx-auto">
                    Speak {config.sourceLanguage}, type perfect English. Every feature designed for your language.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {config.features.map((f) => (
                    <FeatureCard key={f.title} title={f.title} description={f.description} />
                  ))}
                </div>
              </div>
            </section>

            {/* How It Works */}
            <section className="px-6 md:px-12 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)]">
              <div className="max-w-[700px] mx-auto">
                <div className="text-center mb-12">
                  <div className="flex justify-center mb-4">
                    <Badge
                      icon={
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#37322F" strokeWidth="2">
                          <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      }
                      text="How It Works"
                    />
                  </div>
                  <h2 className="text-[#49423D] text-[28px] sm:text-3xl md:text-4xl font-medium leading-tight font-serif mb-4">
                    Start Speaking {config.sourceLanguage}, Get English
                  </h2>
                  <p className="text-[#605A57] text-base md:text-lg font-sans">
                    Get started in under 2 minutes.
                  </p>
                </div>

                <div className="p-6 md:p-8 bg-white border border-[#E0DEDB] rounded-xl">
                  <div className="space-y-6">
                    {config.steps.map((s, idx) => (
                      <StepCard
                        key={s.title}
                        number={idx + 1}
                        title={s.title}
                        description={s.description}
                        accentColor={accent}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section className="px-6 md:px-12 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)]">
              <div className="max-w-[800px] mx-auto">
                <div className="text-center mb-12">
                  <div className="flex justify-center mb-4">
                    <Badge
                      icon={
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#37322F" strokeWidth="2">
                          <path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      }
                      text="FAQ"
                    />
                  </div>
                  <h2 className="text-[#49423D] text-[28px] sm:text-3xl md:text-4xl font-medium leading-tight font-serif mb-4">
                    Frequently Asked Questions
                  </h2>
                </div>

                <div className="space-y-4">
                  {config.faqs.map((f) => (
                    <FAQItem key={f.question} question={f.question} answer={f.answer} />
                  ))}
                </div>
              </div>
            </section>

            {/* Related Pages */}
            <section className="px-6 md:px-12 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)]">
              <div className="max-w-[800px] mx-auto">
                <h3 className="text-[#37322F] text-lg font-semibold font-sans mb-4">Related Topics</h3>
                <div className="flex flex-wrap gap-3">
                  <Link href="/features" className="px-4 py-2 bg-white border border-[#E0DEDB] rounded-full text-sm font-medium text-[#605A57] hover:border-[#1877F2] hover:text-[#1877F2] transition-colors">
                    All Features
                  </Link>
                  <Link href="/voice-typing-with-translation" className="px-4 py-2 bg-white border border-[#E0DEDB] rounded-full text-sm font-medium text-[#605A57] hover:border-[#1877F2] hover:text-[#1877F2] transition-colors">
                    Voice Typing Translation
                  </Link>
                  <Link href="/voice-typing-for-accents" className="px-4 py-2 bg-white border border-[#E0DEDB] rounded-full text-sm font-medium text-[#605A57] hover:border-[#1877F2] hover:text-[#1877F2] transition-colors">
                    Voice Typing for Accents
                  </Link>
                  <Link href="/for-non-native-speakers" className="px-4 py-2 bg-white border border-[#E0DEDB] rounded-full text-sm font-medium text-[#605A57] hover:border-[#1877F2] hover:text-[#1877F2] transition-colors">
                    For Non-Native Speakers
                  </Link>
                  <Link href="/speech-to-text-spanish" className="px-4 py-2 bg-white border border-[#E0DEDB] rounded-full text-sm font-medium text-[#605A57] hover:border-[#1877F2] hover:text-[#1877F2] transition-colors">
                    Spanish Speech to Text
                  </Link>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="px-6 md:px-12 py-16 md:py-20">
              <div className="max-w-[700px] mx-auto text-center">
                <div
                  className="rounded-3xl p-8 md:p-12 shadow-[0_8px_48px_rgba(55,50,47,0.15)]"
                  style={{ background: accent }}
                >
                  <h2 className="text-white text-2xl md:text-4xl font-normal font-serif mb-4">
                    {config.ctaTitle}
                  </h2>
                  <p className="text-white/90 text-base md:text-lg leading-relaxed font-sans mb-8">
                    {config.ctaDescription}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                    <Link
                      href="/download"
                      className="group relative h-12 px-8 bg-gradient-to-b from-white to-gray-100 hover:from-gray-50 hover:to-gray-200 shadow-lg overflow-hidden rounded-full flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95"
                    >
                      <span className="text-gray-800 text-base font-medium leading-5 font-sans relative z-10">
                        Download Free
                      </span>
                    </Link>
                  </div>
                  <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-white/80 text-sm font-sans">
                    <span>Mac & Windows</span>
                    <span>&#183;</span>
                    <span>99% accuracy</span>
                    <span>&#183;</span>
                    <span>Free to start</span>
                  </div>
                </div>
              </div>
            </section>
          </main>

          <FooterSection />
        </div>
      </div>
    </div>
  );
}

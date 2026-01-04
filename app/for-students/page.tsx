import type { Metadata } from "next";
import { Header } from "@/components/header";
import FooterSection from "@/components/footer-section";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dictation App for Students | Write Essays 4x Faster | Oravo AI",
  description:
    "Write essays, research papers, and study notes 4x faster. Focus on learning, not typing. The best voice to text app for students and academic writing.",
  keywords: [
    "dictation app for students",
    "student voice to text",
    "essay writing dictation",
    "research paper voice typing",
    "study notes dictation",
    "college student tools",
    "academic writing voice",
    "homework dictation",
    "student productivity",
    "dissertation dictation",
    "thesis writing voice",
    "note taking voice",
    "lecture notes dictation",
    "student essay help",
    "academic voice typing",
    "university student tools",
  ],
  openGraph: {
    title: "Dictation App for Students | Write Essays 4x Faster | Oravo AI",
    description: "Write essays, research papers, and study notes 4x faster. Focus on learning, not typing.",
    url: "https://oravo.ai/for-students",
    type: "website",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dictation App for Students | Oravo AI",
    description: "Write essays and research papers 4x faster with voice dictation.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://oravo.ai/for-students",
  },
};

function Badge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="px-[14px] py-[6px] bg-white shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] overflow-hidden rounded-[90px] flex justify-start items-center gap-[8px] border border-[rgba(2,6,23,0.08)] shadow-xs">
      <div className="w-[14px] h-[14px] relative overflow-hidden flex items-center justify-center">{icon}</div>
      <div className="text-center flex justify-center flex-col text-[#37322F] text-xs font-medium leading-3 font-sans">{text}</div>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-[rgba(55,50,47,0.12)] hover:shadow-[0px_4px_12px_rgba(55,50,47,0.08)] transition-all duration-300">
      <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-[#F59E0B]/10">{icon}</div>
      <h3 className="text-[#37322F] text-lg md:text-xl font-semibold font-sans mb-3">{title}</h3>
      <p className="text-[#605A57] text-sm md:text-base leading-relaxed font-sans">{description}</p>
    </div>
  );
}

function UseCaseCard({ title, description, timeSaved }: { title: string; description: string; timeSaved?: string }) {
  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-[rgba(55,50,47,0.12)]">
      <h4 className="text-[#37322F] text-lg font-semibold font-sans mb-3">{title}</h4>
      <p className="text-[#605A57] text-sm leading-relaxed font-sans mb-3">{description}</p>
      {timeSaved && (
        <div className="inline-block px-3 py-1 bg-[#22C55E]/10 rounded-full">
          <span className="text-[#22C55E] text-xs font-semibold">Time saved: {timeSaved}</span>
        </div>
      )}
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-xl p-5 border border-[rgba(55,50,47,0.12)]">
      <h4 className="text-[#37322F] text-base font-semibold font-sans mb-2">{question}</h4>
      <p className="text-[#605A57] text-sm leading-relaxed font-sans">{answer}</p>
    </div>
  );
}

export default function ForStudentsPage() {
  const accentColor = "#F59E0B";

  return (
    <div className="w-full min-h-screen relative bg-[#F7F5F3] overflow-x-hidden flex flex-col justify-start items-center">
      <div className="relative flex flex-col justify-start items-center w-full">
        <div className="w-full max-w-none px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1060px] lg:w-[1060px] relative flex flex-col justify-start items-start min-h-screen">
          <div className="w-[1px] h-full absolute left-4 sm:left-6 md:left-8 lg:left-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0" />
          <div className="w-[1px] h-full absolute right-4 sm:right-6 md:right-8 lg:right-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0" />

          <Header />

          <main className="flex-1 w-full mt-20 md:mt-24 lg:mt-28 relative z-10">
            <section className="px-6 md:px-12 py-12 md:py-20 border-b border-[rgba(55,50,47,0.12)]">
              <div className="max-w-[800px] mx-auto text-center">
                <div className="flex justify-center mb-6">
                  <Badge icon={<svg className="w-3.5 h-3.5" fill={accentColor} viewBox="0 0 24 24"><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" /></svg>} text="For Students" />
                </div>

                <h1 className="text-[#37322F] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight font-serif mb-6">
                  Dictation App for Students
                </h1>

                <p className="text-[#605A57] text-lg md:text-xl leading-relaxed font-sans mb-8 max-w-[640px] mx-auto">
                  Write essays, research papers, and study notes 4x faster. Focus on learning, not typing.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/download" className="inline-flex h-14 px-8 text-white text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0px_4px_12px_rgba(245,158,11,0.4)] items-center justify-center" style={{ background: accentColor }}>
                    Download Free
                  </Link>
                  <Link href="/how-to-use" className="inline-flex h-14 px-8 bg-white border border-[#E0DEDB] text-[#37322F] text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 active:scale-95 hover:bg-[#F7F5F3] items-center justify-center">
                    See How It Works
                  </Link>
                </div>

                <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-[#847971]">
                  <span className="flex items-center gap-2"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Write 4x faster</span>
                  <span className="flex items-center gap-2"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Free for students</span>
                  <span className="flex items-center gap-2"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Works in Google Docs</span>
                </div>
              </div>
            </section>

            <section className="px-6 md:px-12 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)]">
              <div className="max-w-[900px] mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-[#37322F] text-3xl md:text-4xl font-normal font-serif mb-4">Study Smarter, Not Harder</h2>
                  <p className="text-[#605A57] text-base md:text-lg font-sans max-w-[600px] mx-auto">Spend less time typing and more time learning.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <FeatureCard icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke={accentColor} strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>} title="Essays & Papers" description="Dictate essays, research papers, and assignments at speaking speed. Get your ideas down fast, then edit and polish." />
                  <FeatureCard icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke={accentColor} strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>} title="Study Notes" description="Capture lecture notes, reading notes, and study guides by voice. Review material while dictating summaries." />
                  <FeatureCard icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke={accentColor} strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>} title="Assignment Deadlines" description="Write faster when deadlines loom. Dictate first drafts in a fraction of the time it takes to type." />
                  <FeatureCard icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke={accentColor} strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>} title="Brainstorming" description="Talk through your ideas before writing. Speaking helps clarify thoughts and overcome blank page anxiety." />
                  <FeatureCard icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke={accentColor} strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>} title="Works Everywhere" description="Google Docs, Word, Canvas, Notion—Oravo works in any app you use for school. Your tools, enhanced." />
                  <FeatureCard icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke={accentColor} strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" /></svg>} title="100+ Languages" description="Perfect for ESL students or foreign language courses. Dictate in any language." />
                </div>
              </div>
            </section>

            <section className="px-6 md:px-12 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)]">
              <div className="max-w-[900px] mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-[#37322F] text-3xl md:text-4xl font-normal font-serif mb-4">Student Use Cases</h2>
                  <p className="text-[#605A57] text-base md:text-lg font-sans">See how students use Oravo to ace their coursework.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <UseCaseCard title="Essay Writing" description="Outline your essay, then dictate each section. Get a full first draft in one session, then edit for clarity and citations." timeSaved="60-70%" />
                  <UseCaseCard title="Research Notes" description="Dictate summaries while reading sources. Capture key quotes, page numbers, and your analysis without switching contexts." timeSaved="50-60%" />
                  <UseCaseCard title="Lab Reports" description="Document procedures, observations, and conclusions hands-free. Perfect for when you're working in the lab." timeSaved="40-50%" />
                  <UseCaseCard title="Discussion Posts" description="Knock out weekly discussion posts at speaking speed. Engage thoughtfully without the typing burden." timeSaved="50-60%" />
                </div>
              </div>
            </section>

            <section className="px-6 md:px-12 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)]">
              <div className="max-w-[800px] mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-[#37322F] text-3xl md:text-4xl font-normal font-serif mb-4">Frequently Asked Questions</h2>
                </div>

                <div className="space-y-4">
                  <FAQItem question="Is there a student discount?" answer="Yes! Oravo offers special pricing for students. Check our pricing page or contact us with your .edu email for student rates." />
                  <FAQItem question="Does it work with Google Docs?" answer="Absolutely. Oravo works in Google Docs, Microsoft Word, Canvas, Blackboard, and any other app where you can type." />
                  <FAQItem question="Can it help with citations?" answer="You can dictate your citations and references just like any other text. Oravo transcribes exactly what you say, formatted correctly." />
                  <FAQItem question="What about academic integrity?" answer="Oravo transcribes your own words—it's just a faster way to type. The ideas and writing are still entirely yours." />
                </div>
              </div>
            </section>

            <section className="px-6 md:px-12 py-16 md:py-20">
              <div className="max-w-[700px] mx-auto text-center">
                <div className="rounded-3xl p-8 md:p-12 shadow-[0_8px_48px_rgba(55,50,47,0.15)]" style={{ background: accentColor }}>
                  <h2 className="text-white text-2xl md:text-4xl font-normal font-serif mb-4">Write Faster, Study Smarter</h2>
                  <p className="text-white/90 text-base md:text-lg leading-relaxed font-sans mb-8">Join thousands of students who write 4x faster with Oravo. More time for what matters.</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                    <Link href="/download" className="inline-flex h-14 px-8 bg-white hover:bg-gray-50 text-[#37322F] text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg items-center justify-center">Download Free</Link>
                  </div>
                  <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-white/80 text-sm font-sans">
                    <span>Free for students</span><span>•</span><span>2-minute setup</span><span>•</span><span>Works everywhere</span>
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


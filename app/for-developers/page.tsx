import type { Metadata } from "next";
import { Header } from "@/components/header";
import FooterSection from "@/components/footer-section";
import Link from "next/link";

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
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dictation for Developers | Oravo AI",
    description: "Document code and write specs without leaving your IDE.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://oravo.ai/for-developers",
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
    <article className="group p-5 bg-white border border-[#E0DEDB] rounded-xl flex flex-col gap-4 transition-all duration-200 hover:border-[#847971]">
      <div className="w-10 h-10 rounded-lg bg-[#F7F5F3] flex items-center justify-center text-[#605A57] group-hover:text-[#37322F] transition-colors">
        {icon}
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-[#37322F] text-base font-semibold leading-tight font-sans">{title}</h3>
        <p className="text-[#605A57] text-sm font-normal leading-relaxed font-sans">{description}</p>
      </div>
    </article>
  );
}

function UseCaseCard({ title, description, timeSaved }: { title: string; description: string; timeSaved?: string }) {
  return (
    <article className="group p-5 bg-white border border-[#E0DEDB] rounded-xl flex flex-col gap-3 transition-all duration-200 hover:border-[#847971]">
      <h4 className="text-[#37322F] text-base font-semibold font-sans">{title}</h4>
      <p className="text-[#605A57] text-sm leading-relaxed font-sans">{description}</p>
      {timeSaved && (
        <div className="inline-block px-3 py-1 bg-[#22C55E]/10 rounded-full w-fit">
          <span className="text-[#22C55E] text-xs font-semibold">Time saved: {timeSaved}</span>
        </div>
      )}
    </article>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <article className="p-5 bg-white border border-[#E0DEDB] rounded-xl">
      <h4 className="text-[#37322F] text-base font-semibold font-sans mb-2">{question}</h4>
      <p className="text-[#605A57] text-sm leading-relaxed font-sans">{answer}</p>
    </article>
  );
}

export default function ForDevelopersPage() {
  const accentColor = "#10B981";

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
                  <Badge icon={<svg className="w-3.5 h-3.5" fill={accentColor} viewBox="0 0 24 24"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" /></svg>} text="For Developers" />
                </div>

                <h1 className="text-[#37322F] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight font-serif mb-6">
                  Dictation for Developers
                </h1>

                <p className="text-[#605A57] text-lg md:text-xl leading-relaxed font-sans mb-8 max-w-[640px] mx-auto">
                  Document code, write specs, and update tickets without leaving your IDE. Technical terminology recognized.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Link
                    href="/download"
                    className="group relative h-12 px-8 overflow-hidden rounded-full flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95"
                    style={{
                      background: `linear-gradient(to bottom, ${accentColor}, ${accentColor})`,
                      boxShadow: `0px 0px 0px 2.5px rgba(255,255,255,0.08) inset, 0px 4px 12px ${accentColor}66`,
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/10 pointer-events-none"></div>
                    <span className="text-white text-base font-medium leading-5 font-sans relative z-10">Download Free</span>
                    <svg className="w-5 h-5 relative z-10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <path d="M12 5v14M5 12l7 7 7-7" />
                    </svg>
                  </Link>
                  <Link
                    href="/how-to-use"
                    className="group relative h-12 px-8 bg-gradient-to-b from-white to-gray-100 hover:from-gray-50 hover:to-gray-200 shadow-[0px_0px_0px_2.5px_rgba(0,0,0,0.05)_inset,0px_4px_12px_rgba(0,0,0,0.1)] overflow-hidden rounded-full flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95 border border-gray-200"
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-black/5 pointer-events-none"></div>
                    <span className="text-gray-800 text-base font-medium leading-5 font-sans relative z-10">See How It Works</span>
                    <svg className="w-5 h-5 relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </Link>
                </div>

                <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-[#847971]">
                  <span className="flex items-center gap-2"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Works in VS Code</span>
                  <span className="flex items-center gap-2"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Technical terms</span>
                  <span className="flex items-center gap-2"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Stay in flow</span>
                </div>
              </div>
            </section>

            <section className="px-6 md:px-12 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)]">
              <div className="max-w-[900px] mx-auto">
                <div className="text-center mb-12">
                  <div className="flex justify-center mb-4">
                    <Badge icon={<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#37322F" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>} text="Features" />
                  </div>
                  <h2 className="text-[#49423D] text-[28px] sm:text-3xl md:text-4xl font-stretch-semi-condensed font-medium leading-tight font-serif mb-4">Built for Dev Workflows</h2>
                  <p className="text-[#605A57] text-base md:text-lg font-sans max-w-[600px] mx-auto">Write docs, not code comments at 2am. Keep your hands on the keyboard for what matters.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <FeatureCard icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>} title="Code Documentation" description="Dictate README files, API docs, and inline comments while reviewing code. Documentation without context switching." />
                  <FeatureCard icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>} title="Ticket Updates" description="Update Jira, Linear, GitHub issues without leaving your IDE. Detailed ticket descriptions, fast." />
                  <FeatureCard icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>} title="Technical Terms" description="Oravo recognizes programming languages, frameworks, libraries, and technical vocabulary. camelCase, snake_case, all recognized." />
                  <FeatureCard icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>} title="PR Descriptions" description="Write detailed pull request descriptions by voice. Explain your changes clearly without typing fatigue." />
                  <FeatureCard icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>} title="Slack & Teams" description="Respond to messages, explain technical decisions, and collaborate with teammates without switching contexts." />
                  <FeatureCard icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>} title="Spec Writing" description="Draft technical specifications, architecture docs, and design documents by speaking your thoughts." />
                </div>
              </div>
            </section>

            <section className="px-6 md:px-12 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)]">
              <div className="max-w-[900px] mx-auto">
                <div className="text-center mb-12">
                  <div className="flex justify-center mb-4">
                    <Badge icon={<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#37322F" strokeWidth="2"><path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>} text="Use Cases" />
                  </div>
                  <h2 className="text-[#49423D] text-[28px] sm:text-3xl md:text-4xl font-stretch-semi-condensed font-medium leading-tight font-serif mb-4">Developer Use Cases</h2>
                  <p className="text-[#605A57] text-base md:text-lg font-sans">See how engineers use Oravo to ship faster.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <UseCaseCard title="Code Reviews" description="Leave detailed review comments by voice. Explain your suggestions clearly without typing everything out." timeSaved="40-50%" />
                  <UseCaseCard title="Sprint Planning" description="Document requirements, acceptance criteria, and technical notes during planning sessions." timeSaved="50-60%" />
                  <UseCaseCard title="Bug Reports" description="Describe reproduction steps, expected vs actual behavior, and technical details as you debug." timeSaved="40-50%" />
                  <UseCaseCard title="Technical Docs" description="Write architecture decisions, runbooks, and onboarding docs at speaking speed." timeSaved="60-70%" />
                </div>
              </div>
            </section>

            <section className="px-6 md:px-12 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)]">
              <div className="max-w-[800px] mx-auto">
                <div className="text-center mb-12">
                  <div className="flex justify-center mb-4">
                    <Badge icon={<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#37322F" strokeWidth="2"><path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>} text="FAQ" />
                  </div>
                  <h2 className="text-[#49423D] text-[28px] sm:text-3xl md:text-4xl font-stretch-semi-condensed font-medium leading-tight font-serif mb-4">Frequently Asked Questions</h2>
                </div>

                <div className="space-y-4">
                  <FAQItem question="Does it work in VS Code / JetBrains?" answer="Yes. Oravo works in VS Code, JetBrains IDEs, Vim, Emacs—any editor with a text input. It types wherever your cursor is." />
                  <FAQItem question="Can it handle technical terminology?" answer="Yes. Oravo recognizes programming terms, framework names, library references, and common tech vocabulary. It learns your project-specific terms too." />
                  <FAQItem question="What about code syntax?" answer="Oravo is optimized for natural language documentation. For actual code, pair it with Copilot or use for comments, docs, and tickets." />
                  <FAQItem question="Does it slow down my workflow?" answer="No. Oravo runs locally and transcribes in real-time. Most developers find it saves context-switching time on documentation tasks." />
                </div>
              </div>
            </section>

            <section className="px-6 md:px-12 py-16 md:py-20">
              <div className="max-w-[700px] mx-auto text-center">
                <div className="rounded-3xl p-8 md:p-12 shadow-[0_8px_48px_rgba(55,50,47,0.15)]" style={{ background: accentColor }}>
                  <h2 className="text-white text-2xl md:text-4xl font-normal font-serif mb-4">Ship Faster. Document Better.</h2>
                  <p className="text-white/90 text-base md:text-lg leading-relaxed font-sans mb-8">Join thousands of developers who write docs 4x faster with Oravo. Stay in flow.</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                    <Link
                      href="/download"
                      className="group relative h-12 px-8 bg-gradient-to-b from-white to-gray-100 hover:from-gray-50 hover:to-gray-200 shadow-[0px_0px_0px_2.5px_rgba(0,0,0,0.05)_inset,0px_4px_12px_rgba(0,0,0,0.1)] overflow-hidden rounded-full flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95"
                    >
                      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-black/5 pointer-events-none"></div>
                      <span className="text-gray-800 text-base font-medium leading-5 font-sans relative z-10">Download Free</span>
                      <svg className="w-5 h-5 relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 5v14M5 12l7 7 7-7" />
                      </svg>
                    </Link>
                  </div>
                  <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-white/80 text-sm font-sans">
                    <span>Works in your IDE</span><span>•</span><span>Technical terms recognized</span><span>•</span><span>2-minute setup</span>
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

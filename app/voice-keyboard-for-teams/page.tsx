import { Header } from "@/components/header";
import FooterSection from "@/components/footer-section";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Voice Keyboard for Microsoft Teams: Chat 4x Faster | Oravo AI",
  description:
    "Transform Microsoft Teams communication with Oravo's voice keyboard. Dictate messages, meeting chats & channels 4x faster than typing. Enterprise-ready voice-to-text.",
  keywords: [
    "microsoft teams voice to text",
    "voice keyboard for teams",
    "dictate teams messages",
    "teams speech to text",
    "voice typing microsoft teams",
    "teams voice dictation",
    "speak to text teams",
    "teams voice input",
    "hands-free teams messaging",
    "enterprise voice dictation",
    "teams meeting chat voice",
    "microsoft 365 voice typing",
    "teams productivity",
    "teams chat dictation",
    "office 365 voice to text",
  ],
  openGraph: {
    title: "Voice Keyboard for Microsoft Teams: Chat 4x Faster | Oravo AI",
    description:
      "Transform Microsoft Teams communication with Oravo's voice keyboard. Dictate messages 4x faster than typing.",
    url: "https://oravo.ai/voice-keyboard-for-teams",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Voice Keyboard for Microsoft Teams | Oravo AI",
    description:
      "Dictate Teams messages 4x faster with Oravo's AI voice keyboard. Enterprise-ready voice-to-text.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://oravo.ai/voice-keyboard-for-teams",
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
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6264A7]/10 to-[#6264A7]/20 flex items-center justify-center mb-4">{icon}</div>
      <h3 className="text-[#37322F] text-lg md:text-xl font-semibold font-sans mb-3">{title}</h3>
      <p className="text-[#605A57] text-sm md:text-base leading-relaxed font-sans">{description}</p>
    </div>
  );
}

function StepCard({ number, title, description }: { number: number; title: string; description: string }) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-b from-[#6264A7] to-[#5558A3] flex items-center justify-center">
        <span className="text-white text-lg font-semibold">{number}</span>
      </div>
      <div className="flex-1">
        <h4 className="text-[#37322F] text-lg font-semibold font-sans mb-2">{title}</h4>
        <p className="text-[#605A57] text-sm md:text-base leading-relaxed font-sans">{description}</p>
      </div>
    </div>
  );
}

function UseCaseCard({ title, scenario, withOravo, result, timeSaved }: { title: string; scenario?: string; withOravo: string; result?: string; timeSaved?: string }) {
  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-[rgba(55,50,47,0.12)]">
      <h4 className="text-[#37322F] text-lg font-semibold font-sans mb-4">{title}</h4>
      {scenario && <p className="text-[#847971] text-sm font-sans mb-3"><span className="font-medium">Scenario:</span> {scenario}</p>}
      <p className="text-[#605A57] text-sm leading-relaxed font-sans mb-3"><span className="font-medium text-[#6264A7]">With Oravo:</span> {withOravo}</p>
      {result && <p className="text-[#22C55E] text-sm font-medium font-sans">Result: {result}</p>}
      {timeSaved && <div className="mt-3 inline-block px-3 py-1 bg-[#22C55E]/10 rounded-full"><span className="text-[#22C55E] text-xs font-semibold">Time saved: {timeSaved}</span></div>}
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

export default function VoiceKeyboardForTeamsPage() {
  return (
    <div className="w-full min-h-screen relative bg-[#F7F5F3] overflow-x-hidden flex flex-col justify-start items-center">
      <div className="relative flex flex-col justify-start items-center w-full">
        <div className="w-full max-w-none px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1060px] lg:w-[1060px] relative flex flex-col justify-start items-start min-h-screen">
          <div className="w-[1px] h-full absolute left-4 sm:left-6 md:left-8 lg:left-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0"></div>
          <div className="w-[1px] h-full absolute right-4 sm:right-6 md:right-8 lg:right-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0"></div>

          <Header />

          <main className="flex-1 w-full mt-20 md:mt-24 lg:mt-28 relative z-10">
            <section className="px-6 md:px-12 py-12 md:py-20 border-b border-[rgba(55,50,47,0.12)]">
              <div className="max-w-[800px] mx-auto text-center">
                <div className="flex justify-center mb-6">
                  <Badge
                    icon={<svg width="14" height="14" viewBox="0 0 24 24" fill="#6264A7"><path d="M20.625 6.188a2.062 2.062 0 1 0 0-4.125 2.062 2.062 0 0 0 0 4.125zm-5.063.437a2.75 2.75 0 1 0 0-5.5 2.75 2.75 0 0 0 0 5.5zm5.063 1.75h-2.75a2.75 2.75 0 0 0-2.563 1.75h-2.062v-1.5a3.437 3.437 0 0 0-3.438-3.438H5.5A3.437 3.437 0 0 0 2.062 8.625v6.188a.688.688 0 0 0 .688.687h3.438v4.125a.688.688 0 0 0 .687.688h6.188a.688.688 0 0 0 .687-.688V15.5h1.375a2.75 2.75 0 0 0 2.75-2.75v-1.625h2.75a.687.687 0 0 0 .688-.688v-1.374a.687.687 0 0 0-.688-.688z" /></svg>}
                    text="Microsoft Teams Integration"
                  />
                </div>

                <h1 className="text-[#37322F] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight font-serif mb-6">
                  Voice Keyboard for Microsoft Teams
                </h1>

                <p className="text-[#605A57] text-lg md:text-xl leading-relaxed font-sans mb-8 max-w-[640px] mx-auto">
                  Enterprise-ready voice-to-text for Microsoft Teams. Dictate messages, meeting chats, and channel posts 4x faster than typing with SOC 2 certified security.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/download" className="inline-flex h-14 px-8 bg-gradient-to-b from-[#6264A7] to-[#5558A3] text-white text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0px_4px_12px_rgba(98,100,167,0.4)] items-center justify-center">
                    Start Free Trial
                  </Link>
                  <Link href="/how-to-use" className="inline-flex h-14 px-8 bg-white border border-[#E0DEDB] text-[#37322F] text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 active:scale-95 hover:bg-[#F7F5F3] items-center justify-center">
                    See How It Works
                  </Link>
                </div>

                <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-[#847971]">
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    SOC 2 Type II certified
                  </span>
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    Enterprise ready
                  </span>
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    98%+ accuracy
                  </span>
                </div>
              </div>
            </section>

            <section className="px-6 md:px-12 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)]">
              <div className="max-w-[900px] mx-auto">
                <div className="text-center mb-12">
                  <Badge icon={<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#37322F" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>} text="Features" />
                  <h2 className="text-[#37322F] text-3xl md:text-4xl font-normal font-serif mt-4 mb-4">What Oravo Lets You Do in Teams</h2>
                  <p className="text-[#605A57] text-base md:text-lg font-sans max-w-[600px] mx-auto">Enterprise communication at the speed of speech</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <FeatureCard icon={<svg className="w-6 h-6 text-[#6264A7]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>} title="Chat Without Unmuting" description="Type in meeting chats while staying muted. Participate fully without audio interruption." />
                  <FeatureCard icon={<svg className="w-6 h-6 text-[#6264A7]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>} title="Channel Messages" description="Contribute to team channels at speaking speed. Perfect for updates, announcements, and discussions." />
                  <FeatureCard icon={<svg className="w-6 h-6 text-[#6264A7]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" /></svg>} title="1:1 Conversations" description="Handle direct messages with colleagues quickly. Provide detailed responses without typing fatigue." />
                  <FeatureCard icon={<svg className="w-6 h-6 text-[#6264A7]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>} title="Meeting Chat" description="Contribute to meeting conversations in real-time while staying focused on the presentation." />
                  <FeatureCard icon={<svg className="w-6 h-6 text-[#6264A7]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>} title="Enterprise Security" description="SOC 2 Type II certified, HIPAA-ready, GDPR compliant. Your enterprise data stays protected." />
                  <FeatureCard icon={<svg className="w-6 h-6 text-[#6264A7]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>} title="Desktop & Web" description="Works in Teams desktop app and web browser. Consistent experience across all platforms." />
                </div>
              </div>
            </section>

            <section className="px-6 md:px-12 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)]">
              <div className="max-w-[700px] mx-auto">
                <div className="text-center mb-12">
                  <Badge icon={<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#37322F" strokeWidth="2"><path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>} text="How It Works" />
                  <h2 className="text-[#37322F] text-3xl md:text-4xl font-normal font-serif mt-4 mb-4">Start Voice Typing in Teams</h2>
                  <p className="text-[#605A57] text-base md:text-lg font-sans">Get up and running in under 2 minutes</p>
                </div>

                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-10 border border-[rgba(55,50,47,0.12)]">
                  <div className="space-y-8">
                    <StepCard number={1} title="Install Oravo" description="Download for Mac or Windows. Quick 2-minute setup with IT-friendly deployment options." />
                    <StepCard number={2} title="Open Microsoft Teams" description="Launch Teams desktop app or open Teams in your browser. Oravo works in both environments." />
                    <StepCard number={3} title="Click Any Chat" description="Position your cursor in any Teams chat, channel, or meeting message box." />
                    <StepCard number={4} title="Press Hotkey & Speak" description="Activate Oravo with your customizable hotkey and speak naturally." />
                    <StepCard number={5} title="Send Your Message" description="Your speech appears as professionally formatted text. Hit Enter to send." />
                  </div>
                </div>
              </div>
            </section>

            <section className="px-6 md:px-12 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)]">
              <div className="max-w-[900px] mx-auto">
                <div className="text-center mb-12">
                  <Badge icon={<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#37322F" strokeWidth="2"><path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>} text="Use Cases" />
                  <h2 className="text-[#37322F] text-3xl md:text-4xl font-normal font-serif mt-4 mb-4">Transform Your Teams Workflow</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <UseCaseCard title="Meeting Participation" scenario="Active participation while staying muted" withOravo="Type detailed questions, comments, and feedback in meeting chat without unmuting or interrupting speakers." result="Full participation without audio interruption" />
                  <UseCaseCard title="Cross-Team Communication" scenario="Managing multiple channel conversations" withOravo="Respond to channel discussions across departments at speaking speed. Keep all teams informed efficiently." timeSaved="70%" />
                  <UseCaseCard title="Remote Team Coordination" scenario="Distributed teams across time zones" withOravo="Provide comprehensive context and updates asynchronously. Clear communication reduces back-and-forth." result="Better async communication" />
                  <UseCaseCard title="IT Support" scenario="Internal help desk in Teams" withOravo="Respond to support requests with detailed instructions and solutions at speaking speed." timeSaved="60%" />
                </div>
              </div>
            </section>

            <section className="px-6 md:px-12 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)]">
              <div className="max-w-[800px] mx-auto">
                <div className="text-center mb-12">
                  <Badge icon={<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#37322F" strokeWidth="2"><path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>} text="FAQ" />
                  <h2 className="text-[#37322F] text-3xl md:text-4xl font-normal font-serif mt-4 mb-4">Frequently Asked Questions</h2>
                </div>

                <div className="space-y-4">
                  <FAQItem question="Is Oravo approved for enterprise use?" answer="Yes! Oravo is SOC 2 Type II certified, HIPAA-ready, and GDPR compliant. We offer enterprise deployment options including SSO and admin controls." />
                  <FAQItem question="Does it work during Teams meetings?" answer="Absolutely. Oravo works in meeting chat while you're in a call. Type your contributions without unmuting or interrupting the speaker." />
                  <FAQItem question="Can IT deploy Oravo across our organization?" answer="Yes. We offer enterprise deployment options including MDM support, SSO integration, and centralized license management." />
                  <FAQItem question="Does it work with Teams on mobile?" answer="Oravo works on iOS and Android. Dictate Teams messages on mobile at the same speed and accuracy as desktop." />
                  <FAQItem question="How does Oravo handle confidential conversations?" answer="Zero data retention—voice is processed and immediately deleted. No permanent storage, encrypted transmission, no training on your data." />
                  <FAQItem question="Will Oravo work with our company's Teams setup?" answer="Oravo works with all Microsoft 365 plans including E3, E5, Business, and Government. Compatible with conditional access policies." />
                </div>
              </div>
            </section>

            <section className="px-6 md:px-12 py-16 md:py-20">
              <div className="max-w-[700px] mx-auto text-center">
                <div className="bg-gradient-to-br from-[#6264A7] to-[#5558A3] rounded-3xl p-8 md:p-12 shadow-[0_8px_48px_rgba(98,100,167,0.3)]">
                  <h2 className="text-white text-2xl md:text-4xl font-normal font-serif mb-4">Enterprise Voice-to-Text for Teams</h2>
                  <p className="text-white/90 text-base md:text-lg leading-relaxed font-sans mb-8">Transform Microsoft Teams productivity. Speak naturally and communicate 4x faster with enterprise-grade security and compliance.</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                    <Link href="/download" className="inline-flex h-14 px-8 bg-white hover:bg-gray-50 text-[#6264A7] text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg items-center justify-center">Download Free</Link>
                  </div>
                  <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-white/80 text-sm">
                    <span>SOC 2 certified</span>
                    <span>•</span>
                    <span>Enterprise ready</span>
                    <span>•</span>
                    <span>SSO available</span>
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

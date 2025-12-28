import { Header } from "@/components/header";
import FooterSection from "@/components/footer-section";

export default function SubprocessorsPage() {
  return (
    <div className="w-full min-h-screen relative bg-[#F7F5F3] overflow-x-hidden flex flex-col justify-start items-center">
      <div className="relative flex flex-col justify-start items-center w-full">
        {/* Main container with proper margins */}
        <div className="w-full max-w-none px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1060px] lg:w-[1060px] relative flex flex-col justify-start items-start min-h-screen">
          {/* Left vertical line */}
          <div className="w-[1px] h-full absolute left-4 sm:left-6 md:left-8 lg:left-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0"></div>

          {/* Right vertical line */}
          <div className="w-[1px] h-full absolute right-4 sm:right-6 md:right-8 lg:right-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0"></div>

          {/* Header */}
          <Header />

          {/* Main Content */}
          {/* <div className="pt-16 sm:pt-20 md:pt-24 lg:pt-[216px] pb-8 sm:pb-12 md:pb-16 flex flex-col justify-start items-center px-2 sm:px-4 md:px-8 lg:px-0 w-full sm:pl-0 sm:pr-0 pl-0 pr-0"></div> */}
          <main className="flex-1 w-full mt-20 md:mt-24 lg:mt-28 relative z-10">
            <div className="max-w-[800px] mx-auto px-6 md:px-12 py-12 md:py-16">
              {/* Title Section */}
              <div className="mb-12">
                <h1 className="text-[#37322F] text-4xl md:text-5xl lg:text-6xl font-normal leading-tight font-serif mb-4">
                  Oravo Subprocessors
                </h1>
                <p className="text-[#847971] text-base font-medium font-sans mb-6">
                  Current as of Aug 25, 2025
                </p>
                <p className="text-[#605A57] text-base leading-7 font-sans">
                  Know exactly where your data is and how it is being used.
                  Oravo's subprocessors.
                </p>
              </div>

              {/* Subprocessors Table */}
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-[#37322F]">
                      <th className="text-left py-3 px-4 text-[#37322F] text-base font-semibold font-sans">
                        Name
                      </th>
                      <th className="text-left py-3 px-4 text-[#37322F] text-base font-semibold font-sans">
                        Purpose
                      </th>
                      <th className="text-left py-3 px-4 text-[#37322F] text-base font-semibold font-sans">
                        Location
                      </th>
                      <th className="text-left py-3 px-4 text-[#37322F] text-base font-semibold font-sans">
                        Website
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[rgba(55,50,47,0.12)]">
                      <td className="py-4 px-4 text-[#605A57] text-base font-sans">
                        AWS
                      </td>
                      <td className="py-4 px-4 text-[#605A57] text-base font-sans">
                        Cloud infrastructure and hosting services
                      </td>
                      <td className="py-4 px-4 text-[#605A57] text-base font-sans">
                        United States
                      </td>
                      <td className="py-4 px-4 text-[#605A57] text-base font-sans">
                        <a
                          href="https://aws.amazon.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#49423D] hover:underline"
                        >
                          https://aws.amazon.com
                        </a>
                      </td>
                    </tr>
                    <tr className="border-b border-[rgba(55,50,47,0.12)]">
                      <td className="py-4 px-4 text-[#605A57] text-base font-sans">
                        Deepgram
                      </td>
                      <td className="py-4 px-4 text-[#605A57] text-base font-sans">
                        Speech-to-text and audio processing
                      </td>
                      <td className="py-4 px-4 text-[#605A57] text-base font-sans">
                        United States
                      </td>
                      <td className="py-4 px-4 text-[#605A57] text-base font-sans">
                        <a
                          href="https://deepgram.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#49423D] hover:underline"
                        >
                          https://deepgram.com
                        </a>
                      </td>
                    </tr>
                    <tr className="border-b border-[rgba(55,50,47,0.12)]">
                      <td className="py-4 px-4 text-[#605A57] text-base font-sans">
                        OpenAI
                      </td>
                      <td className="py-4 px-4 text-[#605A57] text-base font-sans">
                        AI language model services
                      </td>
                      <td className="py-4 px-4 text-[#605A57] text-base font-sans">
                        United States
                      </td>
                      <td className="py-4 px-4 text-[#605A57] text-base font-sans">
                        <a
                          href="https://openai.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#49423D] hover:underline"
                        >
                          https://openai.com
                        </a>
                      </td>
                    </tr>
                    <tr className="border-b border-[rgba(55,50,47,0.12)]">
                      <td className="py-4 px-4 text-[#605A57] text-base font-sans">
                        Groq
                      </td>
                      <td className="py-4 px-4 text-[#605A57] text-base font-sans">
                        AI inference and processing services
                      </td>
                      <td className="py-4 px-4 text-[#605A57] text-base font-sans">
                        United States
                      </td>
                      <td className="py-4 px-4 text-[#605A57] text-base font-sans">
                        <a
                          href="https://groq.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#49423D] hover:underline"
                        >
                          https://groq.com
                        </a>
                      </td>
                    </tr>
                    <tr className="border-b border-[rgba(55,50,47,0.12)]">
                      <td className="py-4 px-4 text-[#605A57] text-base font-sans">
                        Grok
                      </td>
                      <td className="py-4 px-4 text-[#605A57] text-base font-sans">
                        AI language model services
                      </td>
                      <td className="py-4 px-4 text-[#605A57] text-base font-sans">
                        United States
                      </td>
                      <td className="py-4 px-4 text-[#605A57] text-base font-sans">
                        <a
                          href="https://grok.x.ai"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#49423D] hover:underline"
                        >
                          https://grok.x.ai
                        </a>
                      </td>
                    </tr>
                    <tr className="border-b border-[rgba(55,50,47,0.12)]">
                      <td className="py-4 px-4 text-[#605A57] text-base font-sans">
                        Stripe
                      </td>
                      <td className="py-4 px-4 text-[#605A57] text-base font-sans">
                        Payment processing and billing
                      </td>
                      <td className="py-4 px-4 text-[#605A57] text-base font-sans">
                        United States
                      </td>
                      <td className="py-4 px-4 text-[#605A57] text-base font-sans">
                        <a
                          href="https://stripe.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#49423D] hover:underline"
                        >
                          https://stripe.com
                        </a>
                      </td>
                    </tr>
                    <tr className="border-b border-[rgba(55,50,47,0.12)]">
                      <td className="py-4 px-4 text-[#605A57] text-base font-sans">
                        Intercom
                      </td>
                      <td className="py-4 px-4 text-[#605A57] text-base font-sans">
                        Customer support and messaging
                      </td>
                      <td className="py-4 px-4 text-[#605A57] text-base font-sans">
                        Ireland
                      </td>
                      <td className="py-4 px-4 text-[#605A57] text-base font-sans">
                        <a
                          href="https://intercom.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#49423D] hover:underline"
                        >
                          https://intercom.com
                        </a>
                      </td>
                    </tr>
                    <tr className="border-b border-[rgba(55,50,47,0.12)]">
                      <td className="py-4 px-4 text-[#605A57] text-base font-sans">
                        Cloudflare
                      </td>
                      <td className="py-4 px-4 text-[#605A57] text-base font-sans">
                        CDN and security services
                      </td>
                      <td className="py-4 px-4 text-[#605A57] text-base font-sans">
                        United States
                      </td>
                      <td className="py-4 px-4 text-[#605A57] text-base font-sans">
                        <a
                          href="https://cloudflare.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#49423D] hover:underline"
                        >
                          https://cloudflare.com
                        </a>
                      </td>
                    </tr>
                    <tr className="border-b border-[rgba(55,50,47,0.12)]">
                      <td className="py-4 px-4 text-[#605A57] text-base font-sans">
                        WorkOS
                      </td>
                      <td className="py-4 px-4 text-[#605A57] text-base font-sans">
                        Enterprise authentication and SSO
                      </td>
                      <td className="py-4 px-4 text-[#605A57] text-base font-sans">
                        United States
                      </td>
                      <td className="py-4 px-4 text-[#605A57] text-base font-sans">
                        <a
                          href="https://workos.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#49423D] hover:underline"
                        >
                          https://workos.com
                        </a>
                      </td>
                    </tr>
                    <tr className="border-b border-[rgba(55,50,47,0.12)]">
                      <td className="py-4 px-4 text-[#605A57] text-base font-sans">
                        Anthropic
                      </td>
                      <td className="py-4 px-4 text-[#605A57] text-base font-sans">
                        AI language model services
                      </td>
                      <td className="py-4 px-4 text-[#605A57] text-base font-sans">
                        United States
                      </td>
                      <td className="py-4 px-4 text-[#605A57] text-base font-sans">
                        <a
                          href="https://anthropic.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#49423D] hover:underline"
                        >
                          https://anthropic.com
                        </a>
                      </td>
                    </tr>
                    <tr className="border-b border-[rgba(55,50,47,0.12)]">
                      <td className="py-4 px-4 text-[#605A57] text-base font-sans">
                        Vercel
                      </td>
                      <td className="py-4 px-4 text-[#605A57] text-base font-sans">
                        Frontend hosting and deployment
                      </td>
                      <td className="py-4 px-4 text-[#605A57] text-base font-sans">
                        United States
                      </td>
                      <td className="py-4 px-4 text-[#605A57] text-base font-sans">
                        <a
                          href="https://vercel.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#49423D] hover:underline"
                        >
                          https://vercel.com
                        </a>
                      </td>
                    </tr>
                    <tr className="border-b border-[rgba(55,50,47,0.12)]">
                      <td className="py-4 px-4 text-[#605A57] text-base font-sans">
                        Pusher
                      </td>
                      <td className="py-4 px-4 text-[#605A57] text-base font-sans">
                        Real-time messaging and notifications
                      </td>
                      <td className="py-4 px-4 text-[#605A57] text-base font-sans">
                        United Kingdom
                      </td>
                      <td className="py-4 px-4 text-[#605A57] text-base font-sans">
                        <a
                          href="https://pusher.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#49423D] hover:underline"
                        >
                          https://pusher.com
                        </a>
                      </td>
                    </tr>
                    <tr className="border-b border-[rgba(55,50,47,0.12)]">
                      <td className="py-4 px-4 text-[#605A57] text-base font-sans">
                        Pinecone
                      </td>
                      <td className="py-4 px-4 text-[#605A57] text-base font-sans">
                        Vector database and search
                      </td>
                      <td className="py-4 px-4 text-[#605A57] text-base font-sans">
                        United States
                      </td>
                      <td className="py-4 px-4 text-[#605A57] text-base font-sans">
                        <a
                          href="https://pinecone.io"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#49423D] hover:underline"
                        >
                          https://pinecone.io
                        </a>
                      </td>
                    </tr>
                    <tr className="border-b border-[rgba(55,50,47,0.12)]">
                      <td className="py-4 px-4 text-[#605A57] text-base font-sans">
                        Supabase
                      </td>
                      <td className="py-4 px-4 text-[#605A57] text-base font-sans">
                        Serverless PostgreSQL database
                      </td>
                      <td className="py-4 px-4 text-[#605A57] text-base font-sans">
                        United States
                      </td>
                      <td className="py-4 px-4 text-[#605A57] text-base font-sans">
                        <a
                          href="https://supabase.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#49423D] hover:underline"
                        >
                          https://supabase.com
                        </a>
                      </td>
                    </tr>
                    <tr className="border-b border-[rgba(55,50,47,0.12)]">
                      <td className="py-4 px-4 text-[#605A57] text-base font-sans">
                        Slack
                      </td>
                      <td className="py-4 px-4 text-[#605A57] text-base font-sans">
                        Team communication and notifications
                      </td>
                      <td className="py-4 px-4 text-[#605A57] text-base font-sans">
                        United States
                      </td>
                      <td className="py-4 px-4 text-[#605A57] text-base font-sans">
                        <a
                          href="https://slack.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#49423D] hover:underline"
                        >
                          https://slack.com
                        </a>
                      </td>
                    </tr>
                    <tr className="border-b border-[rgba(55,50,47,0.12)]">
                      <td className="py-4 px-4 text-[#605A57] text-base font-sans">
                        PostHog
                      </td>
                      <td className="py-4 px-4 text-[#605A57] text-base font-sans">
                        Product analytics and event tracking
                      </td>
                      <td className="py-4 px-4 text-[#605A57] text-base font-sans">
                        United Kingdom
                      </td>
                      <td className="py-4 px-4 text-[#605A57] text-base font-sans">
                        <a
                          href="https://posthog.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#49423D] hover:underline"
                        >
                          https://posthog.com
                        </a>
                      </td>
                    </tr>
                    <tr className="border-b border-[rgba(55,50,47,0.12)]">
                      <td className="py-4 px-4 text-[#605A57] text-base font-sans">
                        AssemblyAI
                      </td>
                      <td className="py-4 px-4 text-[#605A57] text-base font-sans">
                        Speech recognition and audio intelligence
                      </td>
                      <td className="py-4 px-4 text-[#605A57] text-base font-sans">
                        United States
                      </td>
                      <td className="py-4 px-4 text-[#605A57] text-base font-sans">
                        <a
                          href="https://assemblyai.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#49423D] hover:underline"
                        >
                          https://assemblyai.com
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </main>

          {/* Footer */}
          <FooterSection />
        </div>
      </div>
    </div>
  );
}

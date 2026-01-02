import { fetchDownloadUrls, groupDownloadsByVersion } from '@/lib/downloadApi';
import { Header } from '@/components/header';
import FooterSection from '@/components/footer-section';
import Logo from '@/components/Logo';
import { VersionSection } from '@/components/download/VersionSection';
import type { Metadata } from 'next';

// Force dynamic rendering for API calls
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Download Oravo - AI Voice Typing + Meeting Notes for Mac, Windows & Linux',
  description: 'Download Oravo AI voice assistant for macOS, Windows, and Linux. Complete voice typing + AI meeting notes in 100+ languages. Free trial available.',
  keywords: [
    'download voice dictation software',
    'Oravo download',
    'AI dictation Mac',
    'AI dictation Windows',
    'AI dictation Linux',
    'voice typing download',
    'speech to text app download',
    'AI meeting notes download',
    'meeting recorder download',
    'download Oravo',
  ],
  openGraph: {
    title: 'Download Oravo - AI Voice Assistant for Mac, Windows & Linux',
    description: 'Download Oravo: Voice typing + AI meeting notes. Context-aware dictation in 100+ languages.',
    url: 'https://oravo.ai/download',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Download Oravo - Voice Typing + AI Meeting Notes',
    description: 'Download Oravo for Mac, Windows & Linux. Your complete AI voice assistant.',
  },
  alternates: {
    canonical: 'https://oravo.ai/download',
  },
};

export default async function DownloadPage() {
  let versionGroups: { version: string; downloads: any[]; isLatest: boolean }[] = [];

  try {
    const response = await fetchDownloadUrls();
    versionGroups = groupDownloadsByVersion(response.data);
  } catch (error) {
    console.error('Failed to load download data:', error);
  }

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
          <main className="flex-1 w-full mt-20 md:mt-24 lg:mt-28 relative z-10">
            <div className="max-w-[800px] mx-auto px-6 md:px-12 py-12 md:py-16">
              {/* Hero Section */}
              <div className="text-center mb-12 lg:mb-16">
                <div className="flex justify-center mb-6">
                  <div className="w-24 h-24 lg:w-32 lg:h-32 bg-white rounded-3xl shadow-[0px_0px_0px_2px_white,0px_4px_12px_rgba(55,50,47,0.08)] flex items-center justify-center">
                    <Logo className="w-16 h-16 lg:w-20 lg:h-20" />
                  </div>
                </div>
                <h1 className="text-[#37322F] text-4xl md:text-5xl lg:text-6xl font-normal leading-tight font-serif mb-6">
                  Download Oravo
                </h1>
                <p className="text-[#605A57] text-xl md:text-2xl leading-relaxed font-sans">
                  Available for macOS, Windows, and Linux.
                </p>
              </div>

              {/* Version Sections */}
              <div className="space-y-6">
                {versionGroups.map((group) => (
                  <VersionSection
                    key={group.version}
                    version={group.version}
                    downloads={group.downloads}
                    isLatest={group.isLatest}
                    defaultExpanded={group.isLatest}
                  />
                ))}
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

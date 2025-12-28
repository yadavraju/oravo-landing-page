import { fetchDownloadUrls, groupDownloadsByPlatform, getLatestVersion } from '@/lib/downloadApi';
import { Header } from '@/components/header';
import FooterSection from '@/components/footer-section';
import Logo from '@/components/Logo';
import { PlatformSection } from '@/components/download/PlatformSection';
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

// Icons for platforms
const AppleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
  </svg>
);

const WindowsIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 5.45v6.38l8.04.87V5.45zm8.04 7.38L3 13.7v6.38l8.04 1.17zm.96-7.69v7.31L21.96 13V3zm0 15.73V13.7L21.96 13v10z"/>
  </svg>
);

const LinuxIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.84-.41 1.738-.406 2.65.004.913.131 1.828.405 2.65.55 1.646 1.729 2.86 2.716 3.903.987 1.043 1.827 1.558 2.76 1.558.934 0 1.774-.515 2.761-1.558.987-1.043 2.166-2.257 2.716-3.903.274-.822.401-1.737.405-2.65.004-.912-.128-1.81-.406-2.65-.588-1.771-1.831-3.47-2.716-4.521-.75-1.067-.974-1.928-1.05-3.02-.065-1.491 1.056-5.965-3.17-6.298-.165-.013-.325-.021-.48-.021zm-.529 3.521c.024.028.044.056.044.056-.137-.003-.329-.003-.548.003-.219.006-.446.024-.672.054.146-.056.305-.103.48-.138.175-.035.366-.052.556-.052.094 0 .188.006.28.02-.04.02-.08.037-.12.057zm-2.704 1.507c.018.16.044.322.076.483.091.45.207.898.346 1.341-.166-.301-.306-.61-.421-.927-.115-.316-.204-.64-.269-.968.075.021.152.048.228.071zm6.405.002c.076-.023.153-.05.228-.071-.065.328-.154.652-.269.968-.115.317-.255.626-.421.927.139-.443.255-.891.346-1.341.032-.161.058-.323.076-.483zm-4.993 2.867c.067-.062.134-.117.204-.176-.104.086-.207.175-.307.274-.1.099-.195.203-.285.313-.088-.11-.183-.214-.283-.313-.1-.099-.203-.188-.307-.274.07.059.137.114.204.176.067.062.131.127.191.197.06-.07.124-.135.191-.197zm2.395 0c.067.062.131.127.191.197.06-.07.124-.135.191-.197.067-.062.134-.117.204-.176-.104.086-.207.175-.307.274-.1.099-.195.203-.283.313-.088-.11-.183-.214-.283-.313-.1-.099-.203-.188-.307-.274.07.059.137.114.204.176zm-1.198 3.09c.104-.016.207-.023.31-.023.103 0 .206.007.31.023-.104.016-.207.023-.31.023-.103 0-.206-.007-.31-.023zm0 0"/>
  </svg>
);

export default async function DownloadPage() {
  let downloadData;
  let latestVersion = '1.0.0';
  let groupedDownloads: Record<string, any[]> = {
    macos: [],
    windows: [],
    linux: [],
  };

  try {
    const response = await fetchDownloadUrls();
    downloadData = response.data;
    latestVersion = getLatestVersion(downloadData);
    groupedDownloads = groupDownloadsByPlatform(downloadData);
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

              {/* Version Section */}
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-[rgba(55,50,47,0.12)] p-6 md:p-8 mb-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
                  <div className="flex items-center gap-3">
                    <h2 className="text-2xl lg:text-3xl font-normal text-[#37322F] font-serif">
                      {latestVersion}
                    </h2>
                    <span className="px-3 py-1 bg-gradient-to-b from-[#6366F1] to-[#4F46E5] text-white text-xs font-semibold rounded-full">
                      Latest
                    </span>
                  </div>
                  <button className="text-[#6366F1] text-sm font-semibold hover:text-[#4F46E5] transition-colors flex items-center gap-1 self-start sm:self-auto">
                    View release notes
                    <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
                      <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                      <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                    </svg>
                  </button>
                </div>

                {/* Download Sections */}
                <div className="space-y-4">
                  {/* macOS Section */}
                  {groupedDownloads.macos.length > 0 && (
                    <PlatformSection
                      platform="macos"
                      label="macOS"
                      icon={<AppleIcon />}
                      downloads={groupedDownloads.macos}
                    />
                  )}

                  {/* Windows Section */}
                  {groupedDownloads.windows.length > 0 && (
                    <PlatformSection
                      platform="windows"
                      label="Windows"
                      icon={<WindowsIcon />}
                      downloads={groupedDownloads.windows}
                    />
                  )}

                  {/* Linux Section */}
                  {groupedDownloads.linux.length > 0 && (
                    <PlatformSection
                      platform="linux"
                      label="Linux"
                      icon={<LinuxIcon />}
                      downloads={groupedDownloads.linux}
                    />
                  )}
                </div>
              </div>

              {/* Previous Versions Link */}
              <div className="text-center">
                <button className="text-[#605A57] text-sm hover:text-[#37322F] transition-colors flex items-center gap-2 mx-auto">
                  <svg
                    className="w-5 h-5 transition-transform duration-200"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  <span>View previous versions</span>
                </button>
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

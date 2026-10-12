import { fetchDownloadUrls, groupDownloadsByVersion } from '@/lib/downloadApi';
import { DownloadPageView } from '@/components/download/DownloadPageView';
import type { Metadata } from 'next';

// Force dynamic rendering for API calls
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Download Oravo - AI Voice Typing + Meeting Notes for Mac, Windows & Android',
  description: 'Download Oravo AI voice assistant for macOS, Windows, and Android. Complete voice typing + AI meeting notes in 60+ languages. Free trial available.',
  keywords: [
    'download voice dictation software',
    'Oravo download',
    'AI dictation Mac',
    'AI dictation Windows',
    'AI dictation Android',
    'voice typing download',
    'speech to text app download',
    'AI meeting notes download',
    'meeting recorder download',
    'download Oravo',
  ],
  openGraph: {
    title: 'Download Oravo - AI Voice Assistant for Mac, Windows & Android',
    description: 'Download Oravo: Voice typing + AI meeting notes. Context-aware dictation in 60+ languages.',
    url: 'https://oravo.ai/download',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Download Oravo - Voice Typing + AI Meeting Notes',
    description: 'Download Oravo for Mac, Windows & Android. Your complete AI voice assistant.',
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

  return <DownloadPageView versionGroups={versionGroups} />;
}

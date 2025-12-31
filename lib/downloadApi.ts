export interface DownloadData {
  id: string;
  version: string;
  release_date: string;
  formatted_date: string;
  platform: 'macos' | 'windows' | 'linux';
  architecture: string;
  file_extension: string;
  file_path: string;
  file_size: number | null;
  file_size_formatted: string | null;
  release_notes: string | null;
  min_required_version: string | null;
  is_mandatory: boolean;
}

export interface DownloadApiResponse {
  success: boolean;
  count: number;
  filters: {
    platform: string;
    architecture: string;
    latestOnly: boolean;
  };
  data: DownloadData[];
}

const API_URL = 'https://neqvtdlufrkoezsadgio.supabase.co/functions/v1/get-download-urls';

export async function fetchDownloadUrls(): Promise<DownloadApiResponse> {
  try {
    const response = await fetch(API_URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store', // Always fetch fresh data
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch download URLs: ${response.statusText}`);
    }

    const data: DownloadApiResponse = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching download URLs:', error);
    throw error;
  }
}

export function groupDownloadsByPlatform(data: DownloadData[]) {
  const grouped: Record<string, DownloadData[]> = {
    macos: [],
    windows: [],
    linux: [],
  };

  data.forEach((item) => {
    if (grouped[item.platform]) {
      grouped[item.platform].push(item);
    }
  });

  return grouped;
}

export function getLatestVersion(data: DownloadData[]): string {
  if (data.length === 0) return '1.0.0';

  // Sort by release_date and get the latest
  const sorted = [...data].sort((a, b) =>
    new Date(b.release_date).getTime() - new Date(a.release_date).getTime()
  );

  return sorted[0]?.version || '1.0.0';
}

// Get only the latest version downloads for each platform/architecture
export function getLatestDownloads(data: DownloadData[]): DownloadData[] {
  if (data.length === 0) return [];

  const latestVersion = getLatestVersion(data);

  // Filter to only include downloads with the latest version
  return data.filter((d) => d.version === latestVersion);
}

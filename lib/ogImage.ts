const BASE_URL = "https://oravo.ai";

type OgType = "default" | "compare" | "audience" | "app" | "blog";

export function ogImageUrl(title: string, subtitle: string, type: OgType = "default"): string {
  const params = new URLSearchParams({ title, subtitle, type });
  return `${BASE_URL}/api/og?${params.toString()}`;
}

import type { Metadata } from "next";
import { LanguagePairPageTemplate } from "@/components/language-pair/LanguagePairPageTemplate";
import { buildLanguagePairMetadata, languagePairPages } from "@/lib/languagePairPages";

const config = languagePairPages["voice-typing-german-to-english"];
export const metadata: Metadata = buildLanguagePairMetadata(config);

export default function Page() {
  return <LanguagePairPageTemplate config={config} />;
}

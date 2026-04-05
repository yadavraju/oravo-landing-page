import type { Metadata } from "next";
import { ComparisonPageTemplate } from "@/components/comparison/ComparisonPageTemplate";
import { googleVoiceTypingConfig, buildComparisonMetadata } from "@/lib/comparisonPages";

export const metadata: Metadata = buildComparisonMetadata(googleVoiceTypingConfig);

export default function GoogleVoiceTypingComparisonPage() {
  return <ComparisonPageTemplate config={googleVoiceTypingConfig} />;
}

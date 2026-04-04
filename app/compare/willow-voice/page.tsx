import type { Metadata } from "next";
import { ComparisonPageTemplate } from "@/components/comparison/ComparisonPageTemplate";
import { willowVoiceConfig, buildComparisonMetadata } from "@/lib/comparisonPages";

export const metadata: Metadata = buildComparisonMetadata(willowVoiceConfig);

export default function WillowVoiceComparisonPage() {
  return <ComparisonPageTemplate config={willowVoiceConfig} />;
}

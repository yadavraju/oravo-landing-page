import type { Metadata } from "next";
import { ComparisonPageTemplate } from "@/components/comparison/ComparisonPageTemplate";
import { speechnotesConfig, buildComparisonMetadata } from "@/lib/comparisonPages";

export const metadata: Metadata = buildComparisonMetadata(speechnotesConfig);

export default function SpeechnotesComparisonPage() {
  return <ComparisonPageTemplate config={speechnotesConfig} />;
}

import type { Metadata } from "next";
import { ComparisonPageTemplate } from "@/components/comparison/ComparisonPageTemplate";
import { appleDictationConfig, buildComparisonMetadata } from "@/lib/comparisonPages";

export const metadata: Metadata = buildComparisonMetadata(appleDictationConfig);

export default function AppleDictationComparisonPage() {
  return <ComparisonPageTemplate config={appleDictationConfig} />;
}

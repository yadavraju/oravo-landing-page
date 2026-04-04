import type { Metadata } from "next";
import { ComparisonPageTemplate } from "@/components/comparison/ComparisonPageTemplate";
import { otterAiConfig, buildComparisonMetadata } from "@/lib/comparisonPages";

export const metadata: Metadata = buildComparisonMetadata(otterAiConfig);

export default function OtterAiComparisonPage() {
  return <ComparisonPageTemplate config={otterAiConfig} />;
}

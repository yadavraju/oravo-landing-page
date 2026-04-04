import type { Metadata } from "next";
import { ComparisonPageTemplate } from "@/components/comparison/ComparisonPageTemplate";
import { wispFlowConfig, buildComparisonMetadata } from "@/lib/comparisonPages";

export const metadata: Metadata = buildComparisonMetadata(wispFlowConfig);

export default function WisprFlowComparisonPage() {
  return <ComparisonPageTemplate config={wispFlowConfig} />;
}

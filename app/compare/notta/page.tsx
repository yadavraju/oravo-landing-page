import type { Metadata } from "next";
import { ComparisonPageTemplate } from "@/components/comparison/ComparisonPageTemplate";
import { nottaConfig, buildComparisonMetadata } from "@/lib/comparisonPages";

export const metadata: Metadata = buildComparisonMetadata(nottaConfig);

export default function NottaComparisonPage() {
  return <ComparisonPageTemplate config={nottaConfig} />;
}

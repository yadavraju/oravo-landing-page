import type { Metadata } from "next";
import { ComparisonPageTemplate } from "@/components/comparison/ComparisonPageTemplate";
import { dragonConfig, buildComparisonMetadata } from "@/lib/comparisonPages";

export const metadata: Metadata = buildComparisonMetadata(dragonConfig);

export default function DragonComparisonPage() {
  return <ComparisonPageTemplate config={dragonConfig} />;
}

import type { Metadata } from "next";
import { UseCasePageTemplate } from "@/components/use-case/UseCasePageTemplate";
import { buildUseCaseMetadata, useCasePages } from "@/lib/useCasePages";

const config = useCasePages["voice-keyboard-for-linear"];

export const metadata: Metadata = buildUseCaseMetadata(config);

export default function Page() {
  if (!config) {
    // If this happens, add the page config in lib/useCasePages.ts
    return null;
  }
  return <UseCasePageTemplate config={config} />;
}

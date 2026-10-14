import { TextTransformTool } from "@/components/tools/TextTransformTool";
import { TEXT_TASKS } from "@/lib/tools/prompts";
import { ToolPageLayout, toolMetadata } from "@/components/tools/ToolPageLayout";

const MODES = [
  { id: "grammar" as const, label: "Check grammar", maxChars: TEXT_TASKS["grammar"].maxChars },
];

const SAMPLE =
  "i has been working on this report since monday but their is still alot of things to fix. Can you sent me you're comments before friday, so we can finalise it togather?";

export const metadata = toolMetadata("grammar-checker");

export default function GrammarCheckerPage() {
  return (
    <ToolPageLayout slug="grammar-checker">
      <TextTransformTool
        tool="grammar-checker"
        modes={MODES}
        action="Check grammar"
        outputLabel="Corrected text"
        showDiff
        sample={SAMPLE}
        upsell="Oravo writes correct English as you speak, in Gmail, Slack, Docs and every other app, so there is nothing to fix afterwards."
      />
    </ToolPageLayout>
  );
}

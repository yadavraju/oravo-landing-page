import { TextTransformTool } from "@/components/tools/TextTransformTool";
import { TEXT_TASKS } from "@/lib/tools/prompts";
import { ToolPageLayout, toolMetadata } from "@/components/tools/ToolPageLayout";

const MODES = [
  { id: "paraphrase-standard" as const, label: "Standard", maxChars: TEXT_TASKS["paraphrase-standard"].maxChars },
  { id: "paraphrase-formal" as const, label: "Formal", maxChars: TEXT_TASKS["paraphrase-formal"].maxChars },
  { id: "paraphrase-casual" as const, label: "Casual", maxChars: TEXT_TASKS["paraphrase-casual"].maxChars },
  { id: "paraphrase-shorter" as const, label: "Shorter", maxChars: TEXT_TASKS["paraphrase-shorter"].maxChars },
  { id: "paraphrase-simpler" as const, label: "Simpler", maxChars: TEXT_TASKS["paraphrase-simpler"].maxChars },
];

const SAMPLE =
  "We are writing to let you know that the delivery of your order has been delayed because of a problem at our warehouse. We expect it to arrive within five working days and we are sorry for any inconvenience this may cause.";

export const metadata = toolMetadata("paraphrasing-tool");

export default function ParaphrasingToolPage() {
  return (
    <ToolPageLayout slug="paraphrasing-tool">
      <TextTransformTool
        tool="paraphrasing-tool"
        modes={MODES}
        action="Paraphrase"
        outputLabel="Paraphrased text"
        sample={SAMPLE}
        upsell="In Oravo you just say it your way: it writes in the right tone for each app, formal in email and relaxed in chat."
      />
    </ToolPageLayout>
  );
}

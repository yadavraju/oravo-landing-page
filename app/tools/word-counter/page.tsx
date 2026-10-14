import { WordCounterTool } from "@/components/tools/WordCounterTool";
import { ToolPageLayout, toolMetadata } from "@/components/tools/ToolPageLayout";

export const metadata = toolMetadata("word-counter");

export default function WordCounterPage() {
  return (
    <ToolPageLayout slug="word-counter">
      <WordCounterTool />
    </ToolPageLayout>
  );
}

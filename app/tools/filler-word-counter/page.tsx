import { FillerWordCounterTool } from "@/components/tools/FillerWordCounterTool";
import { ToolPageLayout, toolMetadata } from "@/components/tools/ToolPageLayout";

export const metadata = toolMetadata("filler-word-counter");

export default function FillerWordCounterPage() {
  return (
    <ToolPageLayout slug="filler-word-counter">
      <FillerWordCounterTool />
    </ToolPageLayout>
  );
}

import { RewriteTool } from "@/components/tools/RewriteTool";
import { ToolPageLayout, toolMetadata } from "@/components/tools/ToolPageLayout";

export const metadata = toolMetadata("transcript-cleaner");

export default function TranscriptCleanerPage() {
  return (
    <ToolPageLayout slug="transcript-cleaner">
      <RewriteTool tool="transcript-cleaner" defaultFormat="clean" />
    </ToolPageLayout>
  );
}

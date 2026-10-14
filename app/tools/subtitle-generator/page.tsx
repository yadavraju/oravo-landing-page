import { FileTranscriberTool } from "@/components/tools/FileTranscriberTool";
import { ToolPageLayout, toolMetadata } from "@/components/tools/ToolPageLayout";

export const metadata = toolMetadata("subtitle-generator");

export default function SubtitleGeneratorPage() {
  return (
    <ToolPageLayout slug="subtitle-generator">
      <FileTranscriberTool mode="subtitles" />
    </ToolPageLayout>
  );
}

import { FileTranscriberTool } from "@/components/tools/FileTranscriberTool";
import { ToolPageLayout, toolMetadata } from "@/components/tools/ToolPageLayout";

export const metadata = toolMetadata("audio-to-text");

export default function AudioToTextPage() {
  return (
    <ToolPageLayout slug="audio-to-text">
      <FileTranscriberTool mode="text" />
    </ToolPageLayout>
  );
}

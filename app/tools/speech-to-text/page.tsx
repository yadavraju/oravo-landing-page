import { SpeechToTextTool } from "@/components/tools/SpeechToTextTool";
import { ToolPageLayout, toolMetadata } from "@/components/tools/ToolPageLayout";

export const metadata = toolMetadata("speech-to-text");

export default function SpeechToTextPage() {
  return (
    <ToolPageLayout slug="speech-to-text">
      <SpeechToTextTool />
    </ToolPageLayout>
  );
}

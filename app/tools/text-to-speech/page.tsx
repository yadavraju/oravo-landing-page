import { TextToSpeechTool } from "@/components/tools/TextToSpeechTool";
import { ToolPageLayout, toolMetadata } from "@/components/tools/ToolPageLayout";

export const metadata = toolMetadata("text-to-speech");

export default function TextToSpeechPage() {
  return (
    <ToolPageLayout slug="text-to-speech">
      <TextToSpeechTool />
    </ToolPageLayout>
  );
}

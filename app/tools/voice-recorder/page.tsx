import { VoiceRecorderTool } from "@/components/tools/VoiceRecorderTool";
import { ToolPageLayout, toolMetadata } from "@/components/tools/ToolPageLayout";

export const metadata = toolMetadata("voice-recorder");

export default function VoiceRecorderPage() {
  return (
    <ToolPageLayout slug="voice-recorder">
      <VoiceRecorderTool />
    </ToolPageLayout>
  );
}

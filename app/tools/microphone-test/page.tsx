import { MicrophoneTestTool } from "@/components/tools/MicrophoneTestTool";
import { ToolPageLayout, toolMetadata } from "@/components/tools/ToolPageLayout";

export const metadata = toolMetadata("microphone-test");

export default function MicrophoneTestPage() {
  return (
    <ToolPageLayout slug="microphone-test">
      <MicrophoneTestTool />
    </ToolPageLayout>
  );
}

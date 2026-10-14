import { SpeakingSpeedTool } from "@/components/tools/SpeakingSpeedTool";
import { ToolPageLayout, toolMetadata } from "@/components/tools/ToolPageLayout";

export const metadata = toolMetadata("speaking-speed-test");

export default function SpeakingSpeedTestPage() {
  return (
    <ToolPageLayout slug="speaking-speed-test">
      <SpeakingSpeedTool />
    </ToolPageLayout>
  );
}

import { TypingSpeedTool } from "@/components/tools/TypingSpeedTool";
import { ToolPageLayout, toolMetadata } from "@/components/tools/ToolPageLayout";

export const metadata = toolMetadata("typing-speed-test");

export default function TypingSpeedTestPage() {
  return (
    <ToolPageLayout slug="typing-speed-test">
      <TypingSpeedTool />
    </ToolPageLayout>
  );
}

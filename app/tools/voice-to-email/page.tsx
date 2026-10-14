import { RewriteTool } from "@/components/tools/RewriteTool";
import { ToolPageLayout, toolMetadata } from "@/components/tools/ToolPageLayout";

export const metadata = toolMetadata("voice-to-email");

export default function VoiceToEmailPage() {
  return (
    <ToolPageLayout slug="voice-to-email">
      <RewriteTool tool="voice-to-email" defaultFormat="email" />
    </ToolPageLayout>
  );
}

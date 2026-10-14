import { AudioCleanupTool } from "@/components/tools/AudioCleanupTool";
import { ToolPageLayout, toolMetadata } from "@/components/tools/ToolPageLayout";

export const metadata = toolMetadata("silence-remover");

export default function SilenceRemoverPage() {
  return (
    <ToolPageLayout slug="silence-remover">
      <AudioCleanupTool mode="silence" />
    </ToolPageLayout>
  );
}

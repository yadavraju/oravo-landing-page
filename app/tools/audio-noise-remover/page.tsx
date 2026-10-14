import { AudioCleanupTool } from "@/components/tools/AudioCleanupTool";
import { ToolPageLayout, toolMetadata } from "@/components/tools/ToolPageLayout";

export const metadata = toolMetadata("audio-noise-remover");

export default function AudioNoiseRemoverPage() {
  return (
    <ToolPageLayout slug="audio-noise-remover">
      <AudioCleanupTool mode="noise" />
    </ToolPageLayout>
  );
}

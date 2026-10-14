import { OnlineDictationTool } from "@/components/tools/OnlineDictationTool";
import { ToolPageLayout, toolMetadata } from "@/components/tools/ToolPageLayout";

export const metadata = toolMetadata("online-dictation");

export default function OnlineDictationPage() {
  return (
    <ToolPageLayout slug="online-dictation">
      <OnlineDictationTool />
    </ToolPageLayout>
  );
}

import { SpeechTimeTool } from "@/components/tools/SpeechTimeTool";
import { ToolPageLayout, toolMetadata } from "@/components/tools/ToolPageLayout";

export const metadata = toolMetadata("speech-time-calculator");

export default function SpeechTimeCalculatorPage() {
  return (
    <ToolPageLayout slug="speech-time-calculator">
      <SpeechTimeTool />
    </ToolPageLayout>
  );
}

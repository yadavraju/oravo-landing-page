import { MeetingSummarizerTool } from "@/components/tools/MeetingSummarizerTool";
import { ToolPageLayout, toolMetadata } from "@/components/tools/ToolPageLayout";

export const metadata = toolMetadata("meeting-summarizer");

export default function MeetingSummarizerPage() {
  return (
    <ToolPageLayout slug="meeting-summarizer">
      <MeetingSummarizerTool />
    </ToolPageLayout>
  );
}

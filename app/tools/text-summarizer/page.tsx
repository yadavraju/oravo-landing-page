import { TextTransformTool } from "@/components/tools/TextTransformTool";
import { TEXT_TASKS } from "@/lib/tools/prompts";
import { ToolPageLayout, toolMetadata } from "@/components/tools/ToolPageLayout";

const MODES = [
  { id: "summary-short" as const, label: "Short", maxChars: TEXT_TASKS["summary-short"].maxChars },
  { id: "summary-bullets" as const, label: "Bullet points", maxChars: TEXT_TASKS["summary-bullets"].maxChars },
  { id: "summary-detailed" as const, label: "Detailed", maxChars: TEXT_TASKS["summary-detailed"].maxChars },
];

const SAMPLE =
  "Remote work has changed how teams communicate. Before 2020, most decisions happened in meeting rooms and hallways, and written updates were an afterthought. Now many teams default to writing: project updates in shared documents, decisions in chat threads, and recorded videos instead of status meetings. This shift has clear benefits. Written decisions are searchable, people in other time zones can catch up, and quieter team members contribute more. But it has costs too. Writing takes longer than talking, threads get long and hard to follow, and important context gets lost when people skim. The teams that adapt best mix the two: they talk through problems that need debate, then write a short summary of what was decided and who will do what. Tools that turn speech into clean text, and meetings into summaries, are making that mix easier than ever.";

export const metadata = toolMetadata("text-summarizer");

export default function TextSummarizerPage() {
  return (
    <ToolPageLayout slug="text-summarizer">
      <TextTransformTool
        tool="text-summarizer"
        modes={MODES}
        action="Summarize"
        outputLabel="Summary"
        sample={SAMPLE}
        upsell="Oravo Notetaker summarises every meeting for you, and you can ask questions of your notes afterwards."
      />
    </ToolPageLayout>
  );
}

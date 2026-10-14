import { PdfConvertTool } from "@/components/tools/PdfConvertTool";
import { ToolPageLayout, toolMetadata } from "@/components/tools/ToolPageLayout";

export const metadata = toolMetadata("pdf-to-word");

export default function PdfToWordPage() {
  return (
    <ToolPageLayout slug="pdf-to-word">
      <PdfConvertTool mode="word" />
    </ToolPageLayout>
  );
}

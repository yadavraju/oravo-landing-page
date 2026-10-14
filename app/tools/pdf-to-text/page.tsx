import { PdfConvertTool } from "@/components/tools/PdfConvertTool";
import { ToolPageLayout, toolMetadata } from "@/components/tools/ToolPageLayout";

export const metadata = toolMetadata("pdf-to-text");

export default function PdfToTextPage() {
  return (
    <ToolPageLayout slug="pdf-to-text">
      <PdfConvertTool mode="text" />
    </ToolPageLayout>
  );
}

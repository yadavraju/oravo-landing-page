import { MarketingShell } from "@/components/landing/MarketingShell";
import { MOBILE_FAQS } from "@/components/mobile/content";
import MobileLanding from "@/components/mobile/MobileLanding";
import { faqJsonLd } from "@/lib/faq";

// Metadata (title, description, canonical) lives in ./layout.tsx.
export default function MobilePage() {
  return (
    <MarketingShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(MOBILE_FAQS)) }} />
      <MobileLanding variant="mobile-page" />
    </MarketingShell>
  );
}

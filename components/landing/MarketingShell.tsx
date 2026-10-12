import type { ReactNode } from "react";
import { Header } from "../header";
import FooterSection from "../footer-section";

// Header, page, footer for marketing routes that are not the homepage
// (/pricing, /faq), so every route shares the same ground and chrome.
export function MarketingShell({ children }: { children: ReactNode }) {
  return (
    <div className="grain relative min-h-screen bg-paper text-ink overflow-x-clip">
      <Header />
      <main>{children}</main>
      <div className="bg-blush">
        <div className="mx-auto w-full max-w-[1060px] px-5 sm:px-8 lg:px-0">
          <FooterSection />
        </div>
      </div>
    </div>
  );
}

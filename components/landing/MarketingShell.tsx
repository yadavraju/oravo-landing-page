import type { ReactNode } from "react";
import { Header } from "../header";
import { SiteFooter } from "./SiteFooter";

// Header, page, footer for marketing routes that are not the homepage
// (/pricing, /faq), so every route shares the same ground and chrome.
export function MarketingShell({ children }: { children: ReactNode }) {
  return (
    <div className="grain relative min-h-screen bg-paper text-ink overflow-x-clip">
      <Header />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}

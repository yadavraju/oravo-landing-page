import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { TOOLS } from "@/lib/tools/catalog";
import { TOOL_LINKS } from "@/lib/tools/links";
import { TEXT_TASKS } from "@/lib/tools/prompts";

const root = path.resolve(__dirname, "..");
const read = (p: string) => fs.readFileSync(path.join(root, p), "utf8");

describe("free tools catalogue", () => {
  it.each(TOOLS.map((t) => t.slug))("%s has a page and an OG image", (slug) => {
    expect(fs.existsSync(path.join(root, "app/tools", slug, "page.tsx"))).toBe(true);
    expect(fs.existsSync(path.join(root, "app/tools", slug, "opengraph-image.tsx"))).toBe(true);
  });

  it("every tool is linked from the header and footer list, and nothing else is", () => {
    expect(TOOL_LINKS.map((l) => l.href).sort()).toEqual(TOOLS.map((t) => `/tools/${t.slug}`).sort());
  });

  it("every tool has SEO copy, keywords and three how-to steps", () => {
    for (const t of TOOLS) {
      expect(t.seoTitle.length, t.slug).toBeGreaterThan(10);
      expect(t.seoDescription.length, t.slug).toBeGreaterThan(50);
      expect(t.keywords.length, t.slug).toBeGreaterThanOrEqual(5);
      expect(t.steps, t.slug).toHaveLength(3);
      expect(t.faq.length, t.slug).toBeGreaterThan(0);
    }
  });

  it("every text mode a tool page offers exists on the server", () => {
    const pages = ["grammar-checker", "paraphrasing-tool", "text-summarizer"];
    for (const slug of pages) {
      const ids = [...read(`app/tools/${slug}/page.tsx`).matchAll(/id: "([^"]+)" as const/g)].map((m) => m[1]);
      expect(ids.length, slug).toBeGreaterThan(0);
      for (const id of ids) expect(TEXT_TASKS, `${slug} → ${id}`).toHaveProperty(id);
    }
  });
});

import fs from "node:fs";
import path from "node:path";

const repoRoot = process.cwd();
const useCasesFile = path.join(repoRoot, "app", "use-cases", "page.tsx");
const appDir = path.join(repoRoot, "app");

if (!fs.existsSync(useCasesFile)) {
  console.error(`Cannot find ${useCasesFile}`);
  process.exit(1);
}

const text = fs.readFileSync(useCasesFile, "utf8");
const hrefs = [...text.matchAll(/href:\s*"(\/voice-keyboard-for-[^"]+)"/g)].map(
  (m) => m[1]
);
const uniq = [...new Set(hrefs)].sort();

const created = [];
const skipped = [];
const missingConfig = [];

for (const route of uniq) {
  const dir = route.replace(/^\//, "");
  const pagePath = path.join(appDir, dir, "page.tsx");

  if (fs.existsSync(pagePath)) {
    skipped.push(route);
    continue;
  }

  const outDir = path.dirname(pagePath);
  fs.mkdirSync(outDir, { recursive: true });

  const key = dir;

  const contents = `import type { Metadata } from \"next\";\nimport { UseCasePageTemplate } from \"@/components/use-case/UseCasePageTemplate\";\nimport { buildUseCaseMetadata, useCasePages } from \"@/lib/useCasePages\";\n\nconst config = useCasePages[\"${key}\"];\n\nexport const metadata: Metadata = buildUseCaseMetadata(config);\n\nexport default function Page() {\n  if (!config) {\n    // If this happens, add the page config in lib/useCasePages.ts\n    return null;\n  }\n  return <UseCasePageTemplate config={config} />;\n}\n`;

  fs.writeFileSync(pagePath, contents, "utf8");
  created.push(route);
}

// Basic sanity: ensure all created pages exist in config at runtime by checking keys in TS file text.
// This doesn't parse TS; it just checks the string key exists somewhere in lib/useCasePages.ts.
const configFile = path.join(repoRoot, "lib", "useCasePages.ts");
const cfgText = fs.readFileSync(configFile, "utf8");
for (const route of created) {
  const dir = route.replace(/^\//, "");
  if (!cfgText.includes(`"${dir}"`) && !cfgText.includes(`'${dir}'`)) {
    missingConfig.push(dir);
  }
}

console.log(`Found ${uniq.length} unique use-case routes in /use-cases`);
console.log(`Skipped (already exists): ${skipped.length}`);
console.log(`Created: ${created.length}`);
if (created.length) {
  console.log(created.join("\n"));
}
if (missingConfig.length) {
  console.warn(
    "\nWARNING: Some generated pages may be missing config in lib/useCasePages.ts:"
  );
  console.warn(missingConfig.join("\n"));
}



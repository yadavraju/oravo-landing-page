import path from "node:path";
import { defineConfig } from "vitest/config";

// Unit tests run against a fake Groq (no network, no key). The live suite in
// tests/live calls the real Groq API and only runs with `pnpm test:live`.
export default defineConfig({
  resolve: { alias: { "@": path.resolve(__dirname) } },
  test: {
    environment: "node",
    include: process.env.RUN_LIVE ? ["tests/live/**/*.test.ts"] : ["tests/**/*.test.ts"],
    exclude: process.env.RUN_LIVE ? [] : ["tests/live/**", "node_modules/**"],
    testTimeout: process.env.RUN_LIVE ? 60_000 : 5_000,
  },
});

import { NextRequest, NextResponse } from "next/server";
import { GroqError, complete } from "@/lib/tools/groq";
import { LIMITS, consume, isSameOrigin } from "@/lib/tools/limits";
import { REWRITE_FORMATS, REWRITE_PROMPTS, type RewriteFormat } from "@/lib/tools/prompts";

export const runtime = "nodejs";

// Transcript cleaner and voice to email: rewrite a short passage of speech.
export async function POST(req: NextRequest) {
  if (!isSameOrigin(req)) return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  let body: { text?: unknown; format?: unknown };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
  const text = typeof body.text === "string" ? body.text.trim() : "";
  const format = (REWRITE_FORMATS as readonly string[]).includes(String(body.format)) ? (body.format as RewriteFormat) : "clean";
  if (text.length < 10) return NextResponse.json({ error: "Add a sentence or two first." }, { status: 400 });
  if (text.length > LIMITS.maxRewriteChars) {
    return NextResponse.json({ error: `The free tool takes up to ${LIMITS.maxRewriteChars.toLocaleString()} characters.` }, { status: 413 });
  }

  const limit = await consume(req, "rewrite", LIMITS.rewritePerDay);
  if (!limit.ok) return NextResponse.json({ error: limit.error }, { status: limit.status });

  try {
    const output = await complete({ system: REWRITE_PROMPTS[format], user: text, maxTokens: 900 });
    return NextResponse.json({ text: output });
  } catch (error) {
    const status = error instanceof GroqError ? error.status : 500;
    const message = error instanceof GroqError ? error.message : "Something went wrong. Try again.";
    return NextResponse.json({ error: message }, { status });
  }
}

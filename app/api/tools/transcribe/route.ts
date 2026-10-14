import { NextRequest, NextResponse } from "next/server";
import { GroqError, transcribe } from "@/lib/tools/groq";
import { LIMITS, consume, isSameOrigin } from "@/lib/tools/limits";

export const runtime = "nodejs";
export const maxDuration = 60;

// Speech to text, audio to text and the subtitle generator all post here.
export async function POST(req: NextRequest) {
  if (!isSameOrigin(req)) return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  const declared = Number(req.headers.get("content-length") || 0);
  if (declared > LIMITS.maxAudioBytes + 64 * 1024) {
    return NextResponse.json({ error: "The free tool takes files up to 4 MB." }, { status: 413 });
  }

  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return NextResponse.json({ error: "Send the audio as a file upload." }, { status: 400 });
  }
  const file = form.get("file");
  const language = String(form.get("language") || "auto").slice(0, 8);
  if (!(file instanceof File) || file.size === 0) {
    return NextResponse.json({ error: "Add a recording or an audio file first." }, { status: 400 });
  }
  if (file.size > LIMITS.maxAudioBytes) {
    return NextResponse.json({ error: "The free tool takes files up to 4 MB." }, { status: 413 });
  }
  if (file.type && !/^(audio|video)\//.test(file.type)) {
    return NextResponse.json({ error: "That does not look like an audio or video file." }, { status: 415 });
  }

  const limit = await consume(req, "transcribe", LIMITS.transcribePerDay);
  if (!limit.ok) return NextResponse.json({ error: limit.error }, { status: limit.status });

  try {
    const result = await transcribe(file, language);
    if (!result.text) return NextResponse.json({ error: "We could not hear any speech in that audio." }, { status: 422 });
    return NextResponse.json(result);
  } catch (error) {
    const status = error instanceof GroqError ? error.status : 500;
    const message = error instanceof GroqError ? error.message : "Something went wrong. Try again.";
    return NextResponse.json({ error: message }, { status });
  }
}

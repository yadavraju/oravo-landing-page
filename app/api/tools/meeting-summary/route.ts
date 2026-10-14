import { NextRequest, NextResponse } from "next/server";
import { GroqError, complete, transcribe } from "@/lib/tools/groq";
import {
  LIMITS,
  MEETING_COOKIE,
  MEETING_COOKIE_OPTIONS,
  claimMeetingTrial,
  consume,
  isSameOrigin,
  meetingTrialUsed,
  releaseMeetingTrial,
} from "@/lib/tools/limits";
import { MEETING_PROMPT, type MeetingSummary } from "@/lib/tools/prompts";

export const runtime = "nodejs";
export const maxDuration = 60;

const USED = "You have used your free meeting summary. Oravo Notetaker summarises every meeting, with no limit.";

function strings(value: unknown, max: number) {
  return Array.isArray(value) ? value.filter((v) => typeof v === "string" && v.trim()).slice(0, max).map((v) => v.trim()) : [];
}

function parseSummary(raw: string): MeetingSummary {
  const json = JSON.parse(raw.slice(raw.indexOf("{"), raw.lastIndexOf("}") + 1));
  return {
    title: typeof json.title === "string" ? json.title : "Meeting summary",
    summary: typeof json.summary === "string" ? json.summary : "",
    keyPoints: strings(json.keyPoints, 8),
    decisions: strings(json.decisions, 8),
    actionItems: Array.isArray(json.actionItems)
      ? json.actionItems
          .filter((a: { task?: unknown }) => a && typeof a.task === "string" && a.task.trim())
          .slice(0, 12)
          .map((a: { task: string; owner?: unknown; due?: unknown }) => ({
            task: a.task.trim(),
            owner: typeof a.owner === "string" ? a.owner.trim() : "",
            due: typeof a.due === "string" ? a.due.trim() : "",
          }))
      : [],
  };
}

/** Whether this visitor still has their free try. */
export async function GET(req: NextRequest) {
  return NextResponse.json({ used: await meetingTrialUsed(req) }, { headers: { "Cache-Control": "no-store" } });
}

// One free summary per visitor: from a short recording or a pasted transcript.
export async function POST(req: NextRequest) {
  if (!isSameOrigin(req)) return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  const declared = Number(req.headers.get("content-length") || 0);
  if (declared > LIMITS.maxAudioBytes + 64 * 1024) {
    return NextResponse.json({ error: "The free tool takes recordings up to 4 MB." }, { status: 413 });
  }

  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
  const file = form.get("file");
  let transcript = String(form.get("transcript") || "").trim();
  const hasFile = file instanceof File && file.size > 0;

  if (!hasFile && transcript.length < 200) {
    return NextResponse.json({ error: "Paste at least a few lines of the meeting, or add a recording." }, { status: 400 });
  }
  if (hasFile && file.size > LIMITS.maxAudioBytes) {
    return NextResponse.json({ error: "The free tool takes recordings up to 4 MB." }, { status: 413 });
  }
  if (hasFile && file.type && !/^(audio|video)\//.test(file.type)) {
    return NextResponse.json({ error: "That does not look like an audio or video file." }, { status: 415 });
  }

  if (!(await claimMeetingTrial(req))) {
    const res = NextResponse.json({ error: USED, trialUsed: true }, { status: 403 });
    res.cookies.set(MEETING_COOKIE, "1", MEETING_COOKIE_OPTIONS);
    return res;
  }

  const limit = await consume(req, "meeting", 2);
  if (!limit.ok) {
    await releaseMeetingTrial(req);
    return NextResponse.json({ error: limit.error }, { status: limit.status });
  }

  try {
    if (hasFile) transcript = (await transcribe(file as File)).text;
    if (transcript.length < 40) {
      await releaseMeetingTrial(req);
      return NextResponse.json({ error: "We could not hear enough speech to summarise. Your free try is still available." }, { status: 422 });
    }
    const truncated = transcript.length > LIMITS.maxMeetingChars;
    const raw = await complete({
      system: MEETING_PROMPT,
      user: transcript.slice(0, LIMITS.maxMeetingChars),
      maxTokens: 1200,
      json: true,
    });
    const summary = parseSummary(raw);
    const res = NextResponse.json({ summary, transcript: hasFile ? transcript : undefined, truncated });
    res.cookies.set(MEETING_COOKIE, "1", MEETING_COOKIE_OPTIONS);
    return res;
  } catch (error) {
    await releaseMeetingTrial(req);
    const status = error instanceof GroqError ? error.status : 500;
    const message = error instanceof GroqError ? error.message : "We could not summarise that meeting.";
    return NextResponse.json({ error: `${message} Your free try is still available.` }, { status });
  }
}

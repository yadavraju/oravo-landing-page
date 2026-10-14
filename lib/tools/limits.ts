import type { NextRequest } from "next/server";

// Usage limits for the free tools, so a busy day (or a script) cannot run up
// the Groq bill.
//
// With UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN set, counters live
// in Redis and hold across every serverless instance. Without them they fall
// back to this function instance's memory, which still stops a single client hammering
// one warm instance but resets on cold starts.

export const LIMITS = {
  /**
   * Max upload the API accepts. Netlify caps function requests at 6 MB and
   * base64-encodes binary bodies (+33%), so 4 MB is the safe ceiling.
   */
  maxAudioBytes: 4 * 1024 * 1024,
  /** Transcriptions per visitor per day (speech, file and subtitle tools). */
  transcribePerDay: Number(process.env.TOOLS_TRANSCRIBE_PER_DAY || 8),
  /** Text rewrites per visitor per day (cleanup, voice to email). */
  rewritePerDay: Number(process.env.TOOLS_REWRITE_PER_DAY || 15),
  /** Every paid call across all visitors, per day: a hard ceiling on spend. */
  globalPerDay: Number(process.env.TOOLS_GLOBAL_PER_DAY || 1500),
  /** Characters accepted by the rewrite tools. */
  maxRewriteChars: 4000,
  /** Characters of transcript accepted by the meeting summarizer. */
  maxMeetingChars: 24000,
};

const DAY = 24 * 60 * 60;

export function clientIp(req: NextRequest) {
  const netlify = req.headers.get("x-nf-client-connection-ip");
  if (netlify) return netlify;
  const forwarded = req.headers.get("x-forwarded-for");
  return forwarded?.split(",")[0]?.trim() || req.headers.get("x-real-ip") || req.ip || "unknown";
}

/** Only our own pages may call the tool APIs; stops other sites reusing them. */
export function isSameOrigin(req: NextRequest) {
  const origin = req.headers.get("origin");
  if (!origin) return false;
  try {
    const host = req.headers.get("x-forwarded-host") || req.headers.get("host");
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

// --- Counters --------------------------------------------------------------

const memory = new Map<string, { count: number; resetAt: number }>();

function memoryIncr(key: string, ttlSeconds: number) {
  const now = Date.now();
  const entry = memory.get(key);
  if (!entry || entry.resetAt <= now) {
    memory.set(key, { count: 1, resetAt: now + ttlSeconds * 1000 });
    if (memory.size > 20000) {
      for (const [k, v] of memory) if (v.resetAt <= now) memory.delete(k);
    }
    return 1;
  }
  entry.count += 1;
  return entry.count;
}

function memoryGet(key: string) {
  const entry = memory.get(key);
  return entry && entry.resetAt > Date.now() ? entry.count : 0;
}

const REDIS_URL = process.env.UPSTASH_REDIS_REST_URL;
const REDIS_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;

async function redis(commands: (string | number)[][]): Promise<unknown[] | null> {
  if (!REDIS_URL || !REDIS_TOKEN) return null;
  try {
    const res = await fetch(`${REDIS_URL}/pipeline`, {
      method: "POST",
      headers: { Authorization: `Bearer ${REDIS_TOKEN}`, "Content-Type": "application/json" },
      body: JSON.stringify(commands),
      cache: "no-store",
    });
    if (!res.ok) return null;
    const rows = (await res.json()) as { result: unknown }[];
    return rows.map((r) => r.result);
  } catch {
    return null;
  }
}

async function incr(key: string, ttlSeconds: number): Promise<number> {
  const result = await redis([
    ["INCR", key],
    ["EXPIRE", key, ttlSeconds, "NX"],
  ]);
  return result ? Number(result[0]) : memoryIncr(key, ttlSeconds);
}

async function peek(key: string): Promise<number> {
  const result = await redis([["GET", key]]);
  return result ? Number(result[0] ?? 0) : memoryGet(key);
}

function today() {
  return new Date().toISOString().slice(0, 10);
}

export type LimitResult = { ok: true } | { ok: false; status: number; error: string };

/** Counts one paid call against the visitor's and the site's daily budget. */
export async function consume(req: NextRequest, bucket: "transcribe" | "rewrite" | "meeting", perDay: number): Promise<LimitResult> {
  const day = today();
  const global = await incr(`tools:global:${day}`, DAY);
  if (global > LIMITS.globalPerDay) {
    return { ok: false, status: 429, error: "Today's free allowance is used up. Come back tomorrow, or get the Oravo app for unlimited use." };
  }
  const used = await incr(`tools:${bucket}:${clientIp(req)}:${day}`, DAY);
  if (used > perDay) {
    return { ok: false, status: 429, error: "You have reached today's free limit for this tool. The Oravo app has no daily limit." };
  }
  return { ok: true };
}

// --- Meeting summarizer: one free try --------------------------------------
//
// The try is claimed before the model runs (so two tabs cannot both spend it)
// and handed back if the run fails. A cookie marks the browser; the IP record
// covers a cleared cookie for 30 days.

export const MEETING_COOKIE = "oravo_meeting_trial";
const MEETING_KEY = (ip: string) => `tools:meeting-trial:${ip}`;
const IP_TRIAL_TTL = 30 * DAY;

export function meetingTrialCookieUsed(req: NextRequest) {
  return Boolean(req.cookies.get(MEETING_COOKIE)?.value);
}

export async function meetingTrialUsed(req: NextRequest) {
  return meetingTrialCookieUsed(req) || (await peek(MEETING_KEY(clientIp(req)))) > 0;
}

/** True when this request now holds the visitor's one try. */
export async function claimMeetingTrial(req: NextRequest) {
  if (meetingTrialCookieUsed(req)) return false;
  return (await incr(MEETING_KEY(clientIp(req)), IP_TRIAL_TTL)) === 1;
}

export async function releaseMeetingTrial(req: NextRequest) {
  const key = MEETING_KEY(clientIp(req));
  const result = await redis([["DEL", key]]);
  if (!result) memory.delete(key);
}

export const MEETING_COOKIE_OPTIONS = {
  httpOnly: true,
  sameSite: "lax" as const,
  secure: process.env.NODE_ENV === "production",
  path: "/",
  maxAge: 365 * DAY,
};

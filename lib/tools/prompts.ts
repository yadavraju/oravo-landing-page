// Prompts for the free text tools. Kept short: the small model follows short,
// concrete instructions better than long ones, and short prompts cost less.

export const REWRITE_FORMATS = ["clean", "email", "bullets", "message"] as const;
export type RewriteFormat = (typeof REWRITE_FORMATS)[number];

const RULES =
  "Keep the speaker's meaning, facts, names and numbers. Do not add information. Reply with the rewritten text only: no preamble, no quotes, no notes.";

export const REWRITE_PROMPTS: Record<RewriteFormat, string> = {
  clean:
    "You clean up dictated or transcribed speech. Remove filler words (um, uh, like, you know, I mean, sort of), false starts and repetitions. Fix grammar, punctuation and capitalisation. Split into paragraphs where the topic changes. Keep the speaker's voice and wording where it is already fine. " +
    RULES,
  email:
    "You turn a spoken note into a clear, friendly email. Add a short subject line on the first line as 'Subject: ...', then a greeting, a concise body in short paragraphs, and a sign-off without a name. Remove filler words and repetition. " +
    RULES,
  bullets:
    "You turn spoken notes into a tidy bulleted list. One idea per bullet, starting each with '- '. Group related points, drop filler words and repetition, keep it concise. " +
    RULES,
  message:
    "You turn a spoken note into a short, natural chat message for Slack or WhatsApp. Casual but clear, two to four sentences, no greeting line unless the speaker used one. Remove filler words. " +
    RULES,
};

export const MEETING_PROMPT = `You summarise meeting transcripts. Reply with a JSON object only, in this shape:
{"title": string, "summary": string, "keyPoints": string[], "decisions": string[], "actionItems": [{"task": string, "owner": string, "due": string}]}
- title: under 8 words.
- summary: 2 to 4 sentences.
- keyPoints: up to 6 short points.
- decisions: what was agreed; empty array if nothing was decided.
- actionItems: concrete follow-ups. Use "" for an owner or due date the transcript does not state.
Write in the transcript's language. Use only what the transcript says.`;

export type MeetingSummary = {
  title: string;
  summary: string;
  keyPoints: string[];
  decisions: string[];
  actionItems: { task: string; owner: string; due: string }[];
};

// Prompts for the free text tools. Kept short: the small model follows short,
// concrete instructions better than long ones, and short prompts cost less.

const RULES =
  "Keep the speaker's meaning, facts, names and numbers. Do not add information. Reply with the rewritten text only: no preamble, no quotes, no notes.";

const TEXT_ONLY = "Reply with the result only: no preamble, no quotes, no notes, no explanations.";

/**
 * Every text task the /api/tools/rewrite route runs: the prompt, how much
 * input it accepts and how long the answer may be. Keeping the caps per task
 * keeps each call cheap.
 */
export const TEXT_TASKS = {
  // Transcript cleaner and voice to email.
  clean: {
    prompt:
      "You clean up dictated or transcribed speech. Remove filler words (um, uh, like, you know, I mean, sort of), false starts and repetitions. Fix grammar, punctuation and capitalisation. Split into paragraphs where the topic changes. Keep the speaker's voice and wording where it is already fine. " +
      RULES,
    maxChars: 4000,
    maxTokens: 900,
  },
  email: {
    prompt:
      "You turn a spoken note into a clear, friendly email. Add a short subject line on the first line as 'Subject: ...', then a greeting, a concise body in short paragraphs, and a sign-off without a name. Remove filler words and repetition. " +
      RULES,
    maxChars: 4000,
    maxTokens: 900,
  },
  bullets: {
    prompt:
      "You turn spoken notes into a tidy bulleted list. One idea per bullet, starting each with '- '. Group related points, drop filler words and repetition, keep it concise. " +
      RULES,
    maxChars: 4000,
    maxTokens: 900,
  },
  message: {
    prompt:
      "You turn a spoken note into a short, natural chat message for Slack or WhatsApp. Casual but clear, two to four sentences, no greeting line unless the speaker used one. Remove filler words. " +
      RULES,
    maxChars: 4000,
    maxTokens: 900,
  },

  // Grammar checker: corrections only, so the diff stays readable.
  grammar: {
    prompt:
      "You are a careful proofreader. Correct spelling, grammar, punctuation and capitalisation mistakes in the text. Change as little as possible: keep the author's wording, tone, line breaks and formatting. Do not rephrase sentences that are already correct. If nothing needs fixing, return the text unchanged. " +
      TEXT_ONLY,
    maxChars: 5000,
    maxTokens: 1500,
    temperature: 0,
  },

  // Paraphrasing tool.
  "paraphrase-standard": {
    prompt: "Paraphrase the text in fresh wording with the same meaning and roughly the same length. Keep names, numbers and facts. " + TEXT_ONLY,
    maxChars: 3000,
    maxTokens: 1000,
  },
  "paraphrase-formal": {
    prompt: "Rewrite the text in a formal, professional tone with the same meaning. Keep names, numbers and facts. " + TEXT_ONLY,
    maxChars: 3000,
    maxTokens: 1000,
  },
  "paraphrase-casual": {
    prompt: "Rewrite the text in a relaxed, friendly, conversational tone with the same meaning. Keep names, numbers and facts. " + TEXT_ONLY,
    maxChars: 3000,
    maxTokens: 1000,
  },
  "paraphrase-shorter": {
    prompt: "Rewrite the text to be about half as long while keeping every key point, name and number. " + TEXT_ONLY,
    maxChars: 3000,
    maxTokens: 700,
  },
  "paraphrase-simpler": {
    prompt: "Rewrite the text in plain, simple English that a 12-year-old could follow. Use short sentences and common words, and keep the meaning, names and numbers. " + TEXT_ONLY,
    maxChars: 3000,
    maxTokens: 1000,
  },

  // Text summarizer.
  "summary-short": {
    prompt: "Summarise the text in two or three sentences that capture the main point. Write in the text's language. Use only what the text says. " + TEXT_ONLY,
    maxChars: 15000,
    maxTokens: 300,
  },
  "summary-bullets": {
    prompt: "Summarise the text as three to seven bullet points, each starting with '- ', covering the key points in order. Write in the text's language. Use only what the text says. " + TEXT_ONLY,
    maxChars: 15000,
    maxTokens: 500,
  },
  "summary-detailed": {
    prompt: "Write a detailed summary of the text in one to three short paragraphs, covering every main point and conclusion. Write in the text's language. Use only what the text says. " + TEXT_ONLY,
    maxChars: 15000,
    maxTokens: 800,
  },
} satisfies Record<string, { prompt: string; maxChars: number; maxTokens: number; temperature?: number }>;

export type TextTask = keyof typeof TEXT_TASKS;
export type RewriteFormat = Extract<TextTask, "clean" | "email" | "bullets" | "message">;

export function isTextTask(value: unknown): value is TextTask {
  return typeof value === "string" && Object.prototype.hasOwnProperty.call(TEXT_TASKS, value);
}

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

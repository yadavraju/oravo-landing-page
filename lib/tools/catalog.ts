import {
  AudioLines,
  AudioWaveform,
  Captions,
  FileAudio,
  Gauge,
  Mail,
  Mic,
  MicVocal,
  NotebookPen,
  Scissors,
  Volume2,
  WandSparkles,
  type LucideIcon,
} from "lucide-react";
import type { FaqItem } from "@/lib/faq";

// The free tools catalogue: one entry per page under /tools. The hub, every
// tool page, the related-tools rows and the JSON-LD all read from here.

export type ToolSlug =
  | "speech-to-text"
  | "audio-to-text"
  | "subtitle-generator"
  | "meeting-summarizer"
  | "transcript-cleaner"
  | "voice-to-email"
  | "filler-word-counter"
  | "speaking-speed-test"
  | "microphone-test"
  | "text-to-speech"
  | "silence-remover"
  | "audio-noise-remover";

export type ToolCategory = "transcribe" | "write" | "audio" | "voice" | "listen";

/** "lite-ai" tools call our API (a small Groq model). "browser" tools never leave the tab. */
export type ToolEngine = "lite-ai" | "browser";

export type Tool = {
  slug: ToolSlug;
  name: string;
  blurb: string;
  category: ToolCategory;
  engine: ToolEngine;
  icon: LucideIcon;
  badge?: "New" | "1 free try";
  seoTitle: string;
  seoDescription: string;
  /** Hero headline, two blocks on their own lines. */
  headline: [string, string];
  lede: string;
  /** What the free version is capped at, shown under the stage. */
  limits: string[];
  /** What the Oravo app does instead. */
  inApp: string[];
  faq: FaqItem[];
};

export const TOOL_CATEGORIES: { id: ToolCategory; title: string; lede: string }[] = [
  { id: "transcribe", title: "Speech to text", lede: "Record or open a file, and get words you can edit" },
  { id: "write", title: "Write with your voice", lede: "Turn rambling speech into text you would actually send" },
  { id: "audio", title: "Audio cleanup", lede: "Tidy a recording before you share or transcribe it" },
  { id: "voice", title: "Voice and microphone", lede: "Check your setup and how you sound before you record" },
  { id: "listen", title: "Text to speech", lede: "Have a script or a draft read back to you" },
];

const LITE_FAQ: FaqItem = {
  question: "Why is the free version less accurate than the app?",
  answer:
    "To keep these tools free for everyone, they run on a smaller, faster AI model with tight limits on length and daily use. The Oravo app uses our best models, understands accents and context, and works inside every app you type in, with no daily cap.",
};

const PRIVACY_FAQ: FaqItem = {
  question: "Do you keep my audio or text?",
  answer:
    "No. Your audio or text is sent once to our AI provider to produce the result and is not stored by Oravo or used for training. Nothing is saved to an account, because there is no account.",
};

export const TOOLS: Tool[] = [
  {
    slug: "speech-to-text",
    name: "Speech to Text",
    blurb: "Record in this tab, pick the spoken language, and read the transcript back when you stop.",
    category: "transcribe",
    engine: "lite-ai",
    icon: Mic,
    seoTitle: "Free Speech to Text Online — No Sign-up",
    seoDescription:
      "Record your voice in the browser and get an instant transcript in 50+ languages. Free, no account, no download. Copy or save the text as TXT.",
    headline: ["Speak for a minute.", "Read it back as text."],
    lede: "Press record, talk, and stop. The transcript appears in seconds, ready to copy or download.",
    limits: ["Up to 60 seconds a recording", "8 transcriptions a day", "Runs on a lighter, lower-cost model"],
    inApp: ["Dictate straight into any app, with no time limit", "Fillers removed and punctuation added as you speak", "Tuned for accents and 100+ languages"],
    faq: [
      { question: "Which languages does the speech to text tool support?", answer: "More than 50, including English, Hindi, Spanish, French, German, Portuguese, Japanese, Korean, Chinese and Arabic. Leave it on Auto-detect or pick the language you will speak for better accuracy." },
      { question: "Is there a time limit?", answer: "Each free recording stops at 60 seconds, and you can run eight a day. The Oravo app has no limit and types straight into whatever app you are using." },
      LITE_FAQ,
      PRIVACY_FAQ,
    ],
  },
  {
    slug: "meeting-summarizer",
    name: "AI Meeting Summarizer",
    blurb: "Paste a transcript or add a short recording. Get a summary, decisions and action items. One free try.",
    category: "transcribe",
    engine: "lite-ai",
    icon: NotebookPen,
    badge: "1 free try",
    seoTitle: "Free AI Meeting Summarizer — Summary, Decisions & Action Items",
    seoDescription:
      "Paste a meeting transcript or upload a short recording and get a clear summary, key decisions and action items with owners. Try it once free, no sign-up.",
    headline: ["One meeting in.", "Notes, decisions and next steps out."],
    lede: "Paste a transcript or add a recording. You get a summary, what was decided, and who does what next.",
    limits: ["One free summary per person", "Recordings up to 4 MB, transcripts up to 24,000 characters", "Runs on a lighter, lower-cost model"],
    inApp: ["Oravo Notetaker summarises every meeting, with no limit", "Joins Zoom, Meet and Teams, or records in person", "Searchable notes you can ask questions of"],
    faq: [
      { question: "Why only one free try?", answer: "Summarising a whole meeting costs far more than a sentence of dictation, so the free version gives everyone one go. Oravo Notetaker in the app summarises every meeting you have." },
      { question: "What can I give it?", answer: "Paste a transcript from Zoom, Google Meet, Teams or any notetaker, or upload or record a short audio clip (up to 4 MB, about four minutes of MP3)." },
      LITE_FAQ,
      PRIVACY_FAQ,
    ],
  },
  {
    slug: "transcript-cleaner",
    name: "AI Transcript Cleaner",
    blurb: "Paste messy speech or dictate it. Fillers, false starts and run-ons come out as clean, punctuated text.",
    category: "write",
    engine: "lite-ai",
    icon: WandSparkles,
    badge: "New",
    seoTitle: "Free AI Transcript Cleaner — Remove Filler Words & Fix Grammar",
    seoDescription:
      "Clean up a transcript or a voice note in one click: remove um, uh and like, fix punctuation and grammar, and keep your meaning. Free, no sign-up.",
    headline: ["Say it the way you think.", "Read it the way you'd write it."],
    lede: "Paste a transcript or record a thought. The cleaner removes fillers and false starts and fixes the punctuation, without changing what you meant.",
    limits: ["Up to 4,000 characters a run", "15 rewrites a day", "Runs on a lighter, lower-cost model"],
    inApp: ["This cleanup happens live, as you dictate, in every app", "Learns your names, terms and tone", "Speak in your language, get polished English"],
    faq: [
      { question: "Will it change what I said?", answer: "It is told to keep your meaning, names and numbers and only remove fillers, repetition and grammar slips. Always read the result before you send it." },
      { question: "What formats can it produce?", answer: "Clean paragraphs, an email, bullet points or a short chat message. Pick one before you run it." },
      LITE_FAQ,
      PRIVACY_FAQ,
    ],
  },
  {
    slug: "voice-to-email",
    name: "Voice to Email",
    blurb: "Talk through what you need to say. Get a ready-to-send email with a subject line.",
    category: "write",
    engine: "lite-ai",
    icon: Mail,
    badge: "New",
    seoTitle: "Free Voice to Email Writer — Dictate an Email with AI",
    seoDescription:
      "Speak or paste what you want to say and get a clear, friendly email with a subject line. Free AI email writer, no sign-up.",
    headline: ["Talk it through.", "Send a proper email."],
    lede: "Record what you want to say, however it comes out. You get a tidy email with a subject line, ready to paste into Gmail or Outlook.",
    limits: ["Up to 60 seconds of speech or 4,000 characters", "15 emails a day", "Runs on a lighter, lower-cost model"],
    inApp: ["Dictate straight into Gmail, Outlook or any reply box", "Matches the tone of the thread you are in", "No copying and pasting"],
    faq: [
      { question: "Does it send the email for me?", answer: "No. It writes the email; you copy it into your mail app and send it yourself. The Oravo app types directly into Gmail and Outlook." },
      LITE_FAQ,
      PRIVACY_FAQ,
    ],
  },
  {
    slug: "audio-to-text",
    name: "Audio to Text",
    blurb: "Transcribe an audio or video file you already have, then export the text or its timed cues.",
    category: "transcribe",
    engine: "lite-ai",
    icon: FileAudio,
    seoTitle: "Free Audio to Text Converter — Transcribe MP3, M4A, WAV",
    seoDescription:
      "Upload an MP3, M4A, WAV, WebM or MP4 and get a transcript in seconds. Export TXT, SRT or VTT. Free, no account needed.",
    headline: ["Drop in a recording.", "Take away the transcript."],
    lede: "Open a voice memo, a podcast clip or a video. You get the full text plus timed cues, ready to copy or download.",
    limits: ["Files up to 4 MB (about four minutes of MP3)", "8 transcriptions a day", "Runs on a lighter, lower-cost model"],
    inApp: ["Studio transcribes long files offline, of any size", "Export plain text or SRT", "Speaker-aware meeting notes in Notetaker"],
    faq: [
      { question: "Which file types work?", answer: "MP3, M4A, MP4, WAV, WebM, OGG and FLAC. Video files work too, as long as they are under 4 MB." },
      { question: "My file is bigger than 4 MB. What can I do?", answer: "Trim it or export it as a lower-bitrate MP3, or use Studio in the Oravo app, which transcribes long recordings on your own machine." },
      LITE_FAQ,
      PRIVACY_FAQ,
    ],
  },
  {
    slug: "subtitle-generator",
    name: "Subtitle Generator",
    blurb: "Build editable cues from audio or video, fix the wording, then save SRT or VTT.",
    category: "transcribe",
    engine: "lite-ai",
    icon: Captions,
    seoTitle: "Free Subtitle Generator — Make SRT & VTT Captions Online",
    seoDescription:
      "Upload a short video or audio file and get timed subtitles. Edit each cue, then download SRT or VTT. Free, no watermark, no sign-up.",
    headline: ["Captions for your clip,", "timed and editable."],
    lede: "Add a short video or audio file. Each line comes back with its timing; fix any word, then download SRT or VTT.",
    limits: ["Files up to 4 MB", "8 files a day", "Runs on a lighter, lower-cost model"],
    inApp: ["Studio makes SRT from long videos, offline", "No size limit", "Works in 100+ languages"],
    faq: [
      { question: "Can I edit the subtitles?", answer: "Yes. Every cue is a text box. Change the wording, then download the file; the timings stay as generated." },
      { question: "Will there be a watermark?", answer: "No. The SRT and VTT files are plain text you can add to YouTube, Premiere, CapCut or any player." },
      LITE_FAQ,
      PRIVACY_FAQ,
    ],
  },
  {
    slug: "silence-remover",
    name: "Audio Silence Remover",
    blurb: "Shorten the long pauses in a recording. Preview the cut, then download a WAV.",
    category: "audio",
    engine: "browser",
    icon: Scissors,
    badge: "New",
    seoTitle: "Free Audio Silence Remover — Cut Pauses from Recordings Online",
    seoDescription:
      "Remove long silences and dead air from voice recordings, podcasts and voice notes. Set the threshold, preview the result and download a WAV. Free, nothing uploaded.",
    headline: ["Cut the dead air.", "Keep every word."],
    lede: "Open a voice note, a podcast take or a lecture. Long pauses are shortened to a natural beat, so it plays tighter without sounding chopped.",
    limits: ["Recordings up to 10 minutes", "Exports WAV only", "Runs entirely in your browser, nothing is uploaded"],
    inApp: ["Dictate without worrying about pauses: only finished text lands", "Thinking time never reaches the page", "Works in every app you type in"],
    faq: [
      { question: "Will it cut words?", answer: "It only shortens stretches quieter than the threshold that last longer than the minimum pause, and leaves a short beat in each one. If quiet words get clipped, lower the threshold." },
      { question: "Why export WAV and not MP3?", answer: "WAV is lossless and every browser can write it without uploading anything. Convert it to MP3 afterwards if you need a smaller file." },
      { question: "Is my audio uploaded?", answer: "No. The file is decoded and edited in this tab, and the result never leaves your device." },
    ],
  },
  {
    slug: "audio-noise-remover",
    name: "Audio Noise Remover",
    blurb: "Reduce steady background noise like hum, hiss and fans. Compare before and after, then save a WAV.",
    category: "audio",
    engine: "browser",
    icon: AudioWaveform,
    badge: "New",
    seoTitle: "Free Audio Noise Remover — Reduce Background Noise Online",
    seoDescription:
      "Remove background hum, hiss, fan and traffic noise from voice recordings in your browser. Compare the original and cleaned audio, then download a WAV. Free, nothing uploaded.",
    headline: ["Turn down the room.", "Keep the voice."],
    lede: "Open a recording with a fan, hum or hiss behind it. The tool learns the noise from the quiet moments and turns it down everywhere else.",
    limits: ["Recordings up to 10 minutes", "Best on steady noise; voices and music in the background stay", "Runs entirely in your browser, nothing is uploaded"],
    inApp: ["Oravo's dictation is tuned for real, noisy rooms", "Accurate in cafés, cars and open offices", "No cleanup step before you get your text"],
    faq: [
      { question: "What kind of noise does it remove?", answer: "Steady noise: air conditioning, fans, computer hum, electrical buzz, tape hiss and distant traffic. Sudden sounds such as a door, a dog or other people talking are not steady, so they stay." },
      { question: "My voice sounds thin or watery. What should I do?", answer: "Lower the strength. Around 50 to 60% removes most steady noise while keeping the voice natural." },
      { question: "Is my audio uploaded?", answer: "No. The noise reduction runs in this tab, and nothing leaves your device." },
    ],
  },
  {
    slug: "filler-word-counter",
    name: "Filler Word Counter",
    blurb: "Count the fillers in a transcript, see the rate per 100 words, and read every match in context.",
    category: "voice",
    engine: "browser",
    icon: AudioLines,
    seoTitle: "Filler Word Counter — Count Um, Uh, Like & You Know",
    seoDescription:
      "Paste a transcript or speech and count every filler word: um, uh, like, you know, basically. See your rate per 100 words and each match highlighted. Free.",
    headline: ["How many ums", "made it into that talk?"],
    lede: "Paste a transcript. Every filler is counted, highlighted in place, and given as a rate per 100 words.",
    limits: ["Runs entirely in your browser", "No limit on use"],
    inApp: ["Oravo removes fillers as you dictate, so they never reach the page", "Works in every app you type in", "Fix the habit in what you write, without thinking about it"],
    faq: [
      { question: "What counts as a filler word?", answer: "Um, uh, er, ah, like, you know, I mean, basically, actually, literally, sort of, kind of, so, right and okay when used as filler. Some, like 'like' and 'so', are also real words, so read the highlights." },
      { question: "What is a good filler rate?", answer: "Under 2 per 100 words sounds fluent. Between 2 and 5 is typical for unscripted speech. Above 5, listeners start to notice." },
      { question: "Is my text uploaded?", answer: "No. The counter runs in your browser, and nothing leaves this tab." },
    ],
  },
  {
    slug: "speaking-speed-test",
    name: "Speaking Speed Test",
    blurb: "Read a passage aloud against the clock and get your words per minute, or work it out from a count.",
    category: "voice",
    engine: "browser",
    icon: Gauge,
    seoTitle: "Speaking Speed Test — Measure Your Words Per Minute",
    seoDescription:
      "Read a short passage aloud and measure your speaking rate in words per minute. Or calculate WPM from a word count and a duration. Free, in your browser.",
    headline: ["How fast", "do you really talk?"],
    lede: "Start the timer, read the passage aloud at your natural pace, and stop. You get your words per minute and what it means.",
    limits: ["Runs entirely in your browser", "No limit on use"],
    inApp: ["Speaking is about 3x faster than typing", "Oravo turns that speed into finished text in any app", "Average users save an hour a day"],
    faq: [
      { question: "What is a normal speaking speed?", answer: "Conversation runs at about 130 to 160 words per minute. Presentations land around 120 to 150; audiobooks around 150 to 160. Typing averages around 40." },
      { question: "Does it record me?", answer: "No. The test only times you. Nothing is recorded or uploaded." },
    ],
  },
  {
    slug: "microphone-test",
    name: "Microphone Test",
    blurb: "Watch a live level meter, confirm which device the browser picked, and play back a quick sample.",
    category: "voice",
    engine: "browser",
    icon: MicVocal,
    seoTitle: "Online Microphone Test — Check Your Mic in the Browser",
    seoDescription:
      "Test your microphone online: see a live waveform, check the input level, pick a device and play back a 5-second sample. Free, nothing uploaded.",
    headline: ["Is your mic on?", "Find out in five seconds."],
    lede: "Allow the microphone, speak, and watch the meter. Switch devices, record a five-second sample, and hear how you sound.",
    limits: ["Runs entirely in your browser", "Audio never leaves this tab"],
    inApp: ["Oravo picks the right mic for dictation automatically", "Works with AirPods and headsets", "Hold one key to talk in any app"],
    faq: [
      { question: "The meter does not move. What should I check?", answer: "Make sure the browser has microphone permission (the icon in the address bar), the right device is selected above, and the mic is not muted in your system settings." },
      { question: "Is my audio recorded or uploaded?", answer: "The sample stays in this tab and is gone when you close it. Nothing is uploaded." },
    ],
  },
  {
    slug: "text-to-speech",
    name: "Text to Speech",
    blurb: "Paste a short script, choose a voice and a speed, then play it back in this tab.",
    category: "listen",
    engine: "browser",
    icon: Volume2,
    seoTitle: "Free Text to Speech Online — Read Text Aloud",
    seoDescription:
      "Paste text and hear it read aloud with your device's built-in voices. Pick a voice, a language and a speed. Free, no sign-up, nothing uploaded.",
    headline: ["Hear your draft", "before anyone else does."],
    lede: "Paste a script, an email or a paragraph. Pick a voice and a speed and listen for what reads awkwardly.",
    limits: ["Uses the voices built into your device", "Runs entirely in your browser"],
    inApp: ["Natural AI voices in 30+ languages", "Read back any selected text, in any app", "Listen to articles and notes on mobile"],
    faq: [
      { question: "Why do the voices differ between devices?", answer: "This free tool uses the voices built into your operating system and browser, so Chrome on Windows, Safari on Mac and Android each offer different ones. The Oravo app uses the same natural voices everywhere." },
      { question: "Can I download the audio?", answer: "Not in the free tool: browsers do not let a page record their built-in voices. The Oravo app can read any text aloud." },
    ],
  },
];

export const FEATURED_TOOLS: ToolSlug[] = ["speech-to-text", "meeting-summarizer", "transcript-cleaner"];

export function getTool(slug: ToolSlug): Tool {
  const tool = TOOLS.find((t) => t.slug === slug);
  if (!tool) throw new Error(`Unknown tool: ${slug}`);
  return tool;
}

export function relatedTools(slug: ToolSlug, count = 3): Tool[] {
  const tool = getTool(slug);
  const same = TOOLS.filter((t) => t.slug !== slug && t.category === tool.category);
  const others = TOOLS.filter((t) => t.slug !== slug && t.category !== tool.category);
  return [...same, ...others].slice(0, count);
}

export const toolUrl = (slug: ToolSlug) => `https://oravo.ai/tools/${slug}`;

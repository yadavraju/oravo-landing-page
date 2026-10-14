import {
  AudioLines,
  AudioWaveform,
  Captions,
  FileAudio,
  FileText,
  FileType,
  Gauge,
  Hash,
  Keyboard,
  ListCollapse,
  Mail,
  Mic,
  MicVocal,
  NotebookPen,
  Repeat2,
  Scissors,
  Speech,
  SpellCheck,
  Timer,
  Voicemail,
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
  | "audio-noise-remover"
  | "typing-speed-test"
  | "word-counter"
  | "speech-time-calculator"
  | "voice-recorder"
  | "online-dictation"
  | "grammar-checker"
  | "paraphrasing-tool"
  | "text-summarizer"
  | "pdf-to-text"
  | "pdf-to-word";

export type ToolCategory = "transcribe" | "write" | "text" | "audio" | "voice" | "documents" | "listen";

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
  /** Search phrases the page targets, most important first. */
  keywords: string[];
  /** Three "how to" steps, shown on the page and sent as HowTo JSON-LD. */
  steps: [string, string, string];
  /** What the free version is capped at, shown under the stage. */
  limits: string[];
  /** What the Oravo app does instead. */
  inApp: string[];
  faq: FaqItem[];
};

export const TOOL_CATEGORIES: { id: ToolCategory; title: string; lede: string }[] = [
  { id: "transcribe", title: "Speech to text", lede: "Record or open a file, and get words you can edit" },
  { id: "write", title: "Write with your voice", lede: "Turn rambling speech into text you would actually send" },
  { id: "text", title: "Writing tools", lede: "Count, check, rewrite and summarise any text" },
  { id: "audio", title: "Record and clean up audio", lede: "Record, then tidy a recording before you share or transcribe it" },
  { id: "voice", title: "Speaking and typing tests", lede: "Check your mic, your pace and your habits" },
  { id: "documents", title: "PDF and documents", lede: "Get the text out of a PDF, privately" },
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
    keywords: ["speech to text", "free speech to text online", "voice to text online", "dictation online", "transcribe voice", "speech recognition online", "talk to text", "speech to text in hindi", "free speech to text without sign up", "convert speech to text online free", "speech to text for students", "voice to text for long recordings"],
    steps: [
      "Pick the language you will speak, or leave it on Auto-detect.",
      "Press Start recording, speak for up to 60 seconds, then press Stop.",
      "Read the transcript, fix any word, then copy it or save it as a TXT file.",
    ],
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
    keywords: ["ai meeting summarizer", "meeting summary generator", "meeting notes ai", "summarize meeting transcript", "zoom meeting summary", "action items from meeting", "free meeting minutes generator", "summarize zoom transcript", "google meet summary generator", "teams meeting notes ai free", "ai meeting minutes from transcript", "meeting summary with action items"],
    steps: [
      "Paste the meeting transcript, or record or upload a short recording.",
      "Press Summarise my meeting and wait a few seconds.",
      "Copy the summary, decisions and action items as Markdown, or save them as a file.",
    ],
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
    keywords: ["transcript cleaner", "remove filler words", "clean up transcript", "fix transcript grammar", "ai text cleanup", "voice note to text cleanup", "um remover", "remove um and uh from transcript", "clean up zoom transcript", "edit transcript automatically", "turn voice note into text message", "transcript to clean text"],
    steps: [
      "Paste a transcript or a voice note, or record one with Or speak it.",
      "Choose a format: clean text, email, bullet points or a chat message.",
      "Press Clean it up, check the result and copy it.",
    ],
    limits: ["Up to 4,000 characters a run", "30 AI runs a day", "Runs on a lighter, lower-cost model"],
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
    keywords: ["voice to email", "dictate email", "ai email writer", "speak an email", "email from voice note", "voice email generator", "dictate an email with ai", "turn voice note into email", "write email by speaking", "voice email writer free", "ai email from voice memo"],
    steps: [
      "Record what you want to say, or paste a rough note.",
      "Leave the format on Email and press Clean it up.",
      "Copy the subject line and email into Gmail or Outlook and send it.",
    ],
    limits: ["Up to 60 seconds of speech or 4,000 characters", "30 AI runs a day", "Runs on a lighter, lower-cost model"],
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
    keywords: ["audio to text", "mp3 to text", "convert audio to text free", "transcribe audio file", "m4a to text", "video to text", "audio transcription online", "transcribe mp3 to text free", "convert voice memo to text", "whatsapp audio to text", "transcribe podcast to text", "video to text converter free"],
    steps: [
      "Drop an audio or video file under 4 MB into the box, or browse for one.",
      "Pick the spoken language and press Transcribe file.",
      "Copy the transcript or download it as TXT, SRT or VTT.",
    ],
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
    keywords: ["subtitle generator", "srt generator", "auto caption generator", "vtt subtitle maker", "free subtitle generator online", "generate captions from video", "srt file creator", "generate srt from video free", "auto subtitles for youtube", "create captions for tiktok", "free srt subtitle maker online", "vtt caption generator"],
    steps: [
      "Add a short video or audio file under 4 MB.",
      "Press Generate subtitles and wait for the timed cues.",
      "Fix any cue, then download an SRT or VTT file for your editor or player.",
    ],
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
    keywords: ["remove silence from audio", "audio silence remover", "cut pauses from audio", "remove dead air", "trim silence online", "podcast silence remover", "shorten pauses in recording", "remove long pauses from podcast", "cut silence from voice recording", "remove dead air from audio free", "shorten pauses in voice memo", "automatic silence remover online"],
    steps: [
      "Drop in an audio file of up to 10 minutes, or record one.",
      "Set the silence threshold and how long each pause should become.",
      "Press Remove silences, compare the two versions and save the WAV.",
    ],
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
    keywords: ["audio noise remover", "remove background noise from audio", "noise reduction online", "remove hiss from audio", "remove hum from audio", "clean up audio online free", "denoise voice recording", "remove fan noise from audio", "remove background noise from voice recording free", "reduce hiss in recording", "clean up podcast audio online", "remove hum from microphone recording"],
    steps: [
      "Drop in an audio file of up to 10 minutes, or record one.",
      "Set the strength; around 60% suits most recordings.",
      "Press Reduce noise, compare before and after, then save the WAV.",
    ],
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
    keywords: ["filler word counter", "um counter", "count filler words", "filler words in speech", "speech analyzer", "how many times did I say um", "public speaking filler words", "count um in speech", "filler words in presentation", "reduce filler words public speaking", "um and uh counter", "filler word analysis"],
    steps: [
      "Paste a transcript of a talk, call or voice note.",
      "Read the counts: words, fillers and fillers per 100 words.",
      "See every filler highlighted in place and which ones you use most.",
    ],
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
    keywords: ["speaking speed test", "words per minute speaking", "speech rate calculator", "how fast do I talk", "wpm calculator", "speaking pace test", "speech speed", "average speaking speed words per minute", "how many words per minute do I speak", "presentation speaking pace", "speech rate test online", "talking speed test"],
    steps: [
      "Press Start the timer.",
      "Read the passage aloud at your normal pace.",
      "Press I’m done to see your words per minute and what it means.",
    ],
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
    keywords: ["microphone test", "mic test online", "test my mic", "check microphone", "online mic test", "is my microphone working", "mic checker", "test microphone on windows", "test microphone on mac", "test airpods microphone", "headset mic test online", "microphone not working check"],
    steps: [
      "Press Test my microphone and allow access when the browser asks.",
      "Speak and watch the waveform and level meter move.",
      "Switch devices if needed, record a 5-second sample and play it back.",
    ],
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
    keywords: ["text to speech", "free text to speech online", "read text aloud", "tts online", "text reader", "text to voice", "read aloud online", "text to speech free no sign up", "read text aloud online free", "text to speech with natural voices", "listen to text online", "proofread by listening"],
    steps: [
      "Paste the text you want to hear, up to 5,000 characters.",
      "Choose a voice and a speed.",
      "Press Play, and pause or stop whenever you like.",
    ],
    limits: ["Uses the voices built into your device", "Runs entirely in your browser"],
    inApp: ["Natural AI voices in 30+ languages", "Read back any selected text, in any app", "Listen to articles and notes on mobile"],
    faq: [
      { question: "Why do the voices differ between devices?", answer: "This free tool uses the voices built into your operating system and browser, so Chrome on Windows, Safari on Mac and Android each offer different ones. The Oravo app uses the same natural voices everywhere." },
      { question: "Can I download the audio?", answer: "Not in the free tool: browsers do not let a page record their built-in voices. The Oravo app can read any text aloud." },
    ],
  },
  {
    slug: "typing-speed-test",
    name: "Typing Speed Test",
    blurb: "Type a short passage against the clock and get your words per minute and accuracy. Then see how much faster you speak.",
    category: "voice",
    engine: "browser",
    icon: Keyboard,
    badge: "New",
    seoTitle: "Typing Speed Test — Check Your WPM Free (1-Minute Test)",
    seoDescription:
      "Take a free typing speed test in 30 seconds, 1 minute or 2 minutes. Get your words per minute (WPM) and accuracy instantly, and compare it with your speaking speed.",
    headline: ["How fast do you type?", "Now compare it with how fast you talk."],
    lede: "Pick a length, start typing, and get your words per minute and accuracy the moment you stop. Most people type about 40 WPM and speak about 150.",
    keywords: [
      "typing speed test",
      "typing test",
      "wpm test",
      "words per minute test",
      "1 minute typing test",
      "typing speed test online free",
      "check my typing speed",
      "how fast do I type",
      "average typing speed",
      "typing test with accuracy",
      "typing speed test for beginners",
      "typing vs speaking speed",
    ],
    steps: [
      "Choose a 30-second, 1-minute or 2-minute test.",
      "Start typing the passage; the clock starts on your first key.",
      "Read your words per minute and accuracy, then compare them with your speaking speed.",
    ],
    limits: ["Runs entirely in your browser", "No sign-up, no limit on tries"],
    inApp: ["Most people speak about 150 WPM: nearly four times faster than they type", "Oravo turns that speed into finished, punctuated text", "Works in every app, with no typing at all"],
    faq: [
      { question: "What is a good typing speed?", answer: "The average is about 40 words per minute. 50 to 60 WPM is good for office work, and 70 WPM or more is fast. Accuracy matters too: aim for 95% or better." },
      { question: "How is WPM calculated?", answer: "Every five correctly typed characters count as one word, divided by the minutes you typed. Mistakes do not count towards your speed, so accuracy and speed go together." },
      { question: "How much faster is speaking than typing?", answer: "Most people speak at 130 to 160 words per minute, three to four times faster than they type. That gap is why dictation apps like Oravo save so much time." },
      { question: "How can I improve my typing speed?", answer: "Practise a few minutes every day, keep your fingers on the home row, look at the screen rather than the keys, and slow down until your accuracy is high. Speed follows accuracy." },
    ],
  },
  {
    slug: "word-counter",
    name: "Word Counter",
    blurb: "Count words, characters, sentences and paragraphs as you type, with reading time, speaking time and keyword density.",
    category: "text",
    engine: "browser",
    icon: Hash,
    badge: "New",
    seoTitle: "Word Counter — Free Word & Character Count Tool Online",
    seoDescription:
      "Count words, characters (with and without spaces), sentences and paragraphs instantly. See reading time, speaking time, keyword density and limits for X, LinkedIn and meta descriptions.",
    headline: ["Every word counted,", "as you write."],
    lede: "Type or paste anything. Words, characters, sentences, reading time and keyword density update live, with limits for social posts and meta descriptions.",
    keywords: [
      "word counter",
      "character counter",
      "word count tool",
      "count words online",
      "character count with spaces",
      "character counter without spaces",
      "word counter for essays",
      "how many words is my text",
      "reading time calculator",
      "keyword density checker",
      "twitter character counter",
      "meta description length checker",
    ],
    steps: [
      "Type or paste your text into the box.",
      "Read the live counts: words, characters, sentences, paragraphs and reading time.",
      "Check the character limits and top keywords before you publish.",
    ],
    limits: ["Runs entirely in your browser", "Your text is never uploaded"],
    inApp: ["Write long pieces by speaking: about three times faster than typing", "Oravo adds punctuation and paragraphs for you", "Works in Google Docs, Word, Notion and every other app"],
    faq: [
      { question: "Does the word counter count characters with and without spaces?", answer: "Yes. You get both, plus sentences, paragraphs, average word length, reading time at 238 words per minute and speaking time at 150 words per minute." },
      { question: "How many words is a 5-minute read?", answer: "About 1,200 words. Adults read around 238 words per minute on average, so 1,000 words takes a little over four minutes." },
      { question: "What are the character limits for social posts?", answer: "X allows 280 characters per post, LinkedIn 3,000, Instagram captions 2,200, and search engines show roughly the first 160 characters of a meta description." },
      { question: "Is my text saved or uploaded?", answer: "No. The counter runs in your browser and nothing you type leaves this tab." },
    ],
  },
  {
    slug: "speech-time-calculator",
    name: "Speech Time Calculator",
    blurb: "Find out how long your speech will take, or how many words you need for a 5, 10 or 20-minute talk.",
    category: "voice",
    engine: "browser",
    icon: Timer,
    badge: "New",
    seoTitle: "Speech Time Calculator — Words to Minutes Converter",
    seoDescription:
      "Paste your speech or enter a word count to see how long it takes to say at a slow, average or fast pace. Plus how many words you need for a 1 to 60-minute speech.",
    headline: ["How long is your speech?", "Know before you take the stage."],
    lede: "Paste a script or enter a word count. See the speaking time at your pace, and how many words fit a 3, 5 or 10-minute slot.",
    keywords: [
      "speech time calculator",
      "words to minutes",
      "words per minute speech",
      "how long is my speech",
      "how many words is a 5 minute speech",
      "how many words is a 10 minute speech",
      "how many words is a 3 minute speech",
      "how long does it take to say 1000 words",
      "speech length calculator",
      "presentation time calculator",
      "script timer",
    ],
    steps: [
      "Paste your speech, or switch to Enter a word count.",
      "Pick a slow, average or fast speaking pace, or type your own.",
      "Read the speaking time, or enter a target length to see how many words you need.",
    ],
    limits: ["Runs entirely in your browser", "No limit on use"],
    inApp: ["Draft your speech by talking it through", "Oravo turns rambling into clean, punctuated paragraphs", "Edit in any app: Docs, Word, Notion"],
    faq: [
      { question: "How many words is a 5-minute speech?", answer: "About 750 words at an average pace of 150 words per minute: 600 if you speak slowly, around 850 if you speak fast." },
      { question: "How many words is a 10-minute speech?", answer: "About 1,500 words at an average pace. Allow for pauses, laughter and slides by cutting 10% if timing is strict." },
      { question: "How long does it take to say 1,000 words?", answer: "About 6 minutes 40 seconds at 150 words per minute, a little over 8 minutes at a slow 120 WPM, and just under 6 minutes at a fast 170 WPM." },
      { question: "What speaking pace should I use?", answer: "Most presenters speak at 130 to 160 words per minute. Measure your own with our Speaking Speed Test, then enter it as a custom pace." },
    ],
  },
  {
    slug: "voice-recorder",
    name: "Online Voice Recorder",
    blurb: "Record your voice in the browser with pause and resume, keep several takes and download each as audio or WAV.",
    category: "audio",
    engine: "browser",
    icon: Voicemail,
    badge: "New",
    seoTitle: "Online Voice Recorder — Free, No Download, Save as WAV",
    seoDescription:
      "Record audio from your microphone in the browser. Pause and resume, keep multiple takes, and download each as WebM, M4A or WAV. Free, no sign-up, nothing uploaded.",
    headline: ["Press record.", "Keep every take."],
    lede: "Record a voice memo, an audition, a podcast intro or a quick idea. Pause when you need to, then download each take as audio or WAV.",
    keywords: [
      "online voice recorder",
      "voice recorder",
      "record audio online",
      "free voice recorder no download",
      "record my voice online",
      "audio recorder online free",
      "mic recorder",
      "voice memo online",
      "record voice and save as wav",
      "online voice recorder with pause",
    ],
    steps: [
      "Press Start recording and allow microphone access.",
      "Speak; pause and resume as often as you like, up to 30 minutes a take.",
      "Press Stop and save, then play back or download the take as audio or WAV.",
    ],
    limits: ["Up to 30 minutes per take", "Takes are lost when you close the tab, so download them", "Runs entirely in your browser"],
    inApp: ["Get the words, not just the audio: Oravo types what you say", "Transcribe recordings of any length in Studio", "Works offline on your own machine"],
    faq: [
      { question: "Is the voice recorder really free?", answer: "Yes. There is no sign-up, no watermark and no limit on how many takes you record. Each take can be up to 30 minutes." },
      { question: "What format are recordings saved in?", answer: "Chrome, Edge and Firefox record WebM; Safari records M4A. You can also download any take as an uncompressed WAV file." },
      { question: "Are my recordings uploaded?", answer: "No. Recording happens in your browser and the audio stays on your device until you download it." },
      { question: "Can I turn my recording into text?", answer: "Yes: download it and open it in our free Audio to Text tool, or use the Oravo app to dictate straight into any app." },
    ],
  },
  {
    slug: "online-dictation",
    name: "Online Dictation",
    blurb: "Talk and watch your words appear live, using your browser's built-in speech recognition. Say \"period\" or \"new line\" for punctuation.",
    category: "transcribe",
    engine: "browser",
    icon: Speech,
    badge: "New",
    seoTitle: "Free Online Dictation — Voice Typing in Your Browser",
    seoDescription:
      "Dictate text online for free: speak and your words appear live as you talk. Voice commands for punctuation, 20 languages, copy or save as TXT. No sign-up.",
    headline: ["Talk, and watch it type.", "Live, in your browser."],
    lede: "Press start and speak. Your words appear as you say them. Say \"comma\", \"period\" or \"new line\" for punctuation, then copy or download the text.",
    keywords: [
      "online dictation",
      "voice typing",
      "voice typing online",
      "speech to text live",
      "free dictation software online",
      "dictate text online",
      "talk to type",
      "voice to text typing",
      "online voice typing in hindi",
      "voice typing without download",
      "dictation with punctuation commands",
    ],
    steps: [
      "Pick your language and press Start dictating.",
      "Speak naturally; say \"comma\", \"period\" or \"new line\" for punctuation.",
      "Press Stop, edit anything you like, then copy the text or save it as TXT.",
    ],
    limits: ["Uses your browser's built-in recognition (Chrome, Edge, Safari)", "You add punctuation by voice", "Text stays in this tab"],
    inApp: ["Dictate into any app, not just this page", "Punctuation, formatting and filler removal done for you", "Accent-aware, with translation into English"],
    faq: [
      { question: "Which browsers support online dictation?", answer: "Chrome, Edge and Safari have speech recognition built in. Firefox does not yet; use our Speech to Text tool there instead." },
      { question: "How do I add punctuation?", answer: "Say \"comma\", \"period\" or \"full stop\", \"question mark\", \"exclamation mark\", \"colon\", \"new line\" or \"new paragraph\"." },
      { question: "Where does the speech recognition happen?", answer: "In your browser's own speech service. In Chrome that means Google processes the audio; Oravo never receives it." },
      { question: "Is this the same as the Oravo app?", answer: "No. This page uses your browser's basic recognition. The Oravo app works in every app you type in, adds punctuation automatically, removes fillers and understands accents far better." },
    ],
  },
  {
    slug: "grammar-checker",
    name: "AI Grammar Checker",
    blurb: "Paste your text and get spelling, grammar and punctuation fixed, with every change highlighted.",
    category: "text",
    engine: "lite-ai",
    icon: SpellCheck,
    badge: "New",
    seoTitle: "Free AI Grammar Checker — Fix Grammar, Spelling & Punctuation",
    seoDescription:
      "Check grammar, spelling and punctuation free with AI. Every correction is highlighted so you can see what changed. No sign-up, up to 5,000 characters.",
    headline: ["Fix the mistakes.", "Keep your voice."],
    lede: "Paste an email, essay or post. The checker fixes grammar, spelling and punctuation, changes as little as possible, and highlights every correction.",
    keywords: [
      "grammar checker",
      "free grammar checker",
      "ai grammar checker",
      "grammar check online",
      "spell checker",
      "punctuation checker",
      "sentence corrector",
      "check my grammar free",
      "grammar checker for essays",
      "grammar checker for emails",
      "english grammar checker for non native speakers",
    ],
    steps: [
      "Paste or type your text, up to 5,000 characters.",
      "Press Check grammar.",
      "Review each correction, highlighted in blue, then copy the fixed text.",
    ],
    limits: ["Up to 5,000 characters a check", "30 AI runs a day", "Runs on a lighter, lower-cost model"],
    inApp: ["Speak in your accent and get grammatically correct English as you go", "Works in Gmail, Slack, Docs and every other app", "Tone matched to the app: casual in chat, polished in email"],
    faq: [
      { question: "Is this grammar checker free?", answer: "Yes. You can check up to 5,000 characters at a time, with a daily limit to keep it free for everyone. There is no sign-up." },
      { question: "Will it rewrite my text?", answer: "No. It is told to change as little as possible: it fixes mistakes and leaves correct sentences alone. Every change is highlighted so you can check it." },
      { question: "Is it good for non-native English speakers?", answer: "Yes. It catches the article, tense and preposition slips common in a second language. The Oravo app goes further: you speak, and it writes fluent English for you." },
      LITE_FAQ,
      PRIVACY_FAQ,
    ],
  },
  {
    slug: "paraphrasing-tool",
    name: "AI Paraphrasing Tool",
    blurb: "Rewrite text in fresh words: standard, formal, casual, shorter or simpler. Same meaning, new wording.",
    category: "text",
    engine: "lite-ai",
    icon: Repeat2,
    badge: "New",
    seoTitle: "Free Paraphrasing Tool — AI Rewriter for Sentences & Paragraphs",
    seoDescription:
      "Paraphrase sentences and paragraphs free with AI. Choose standard, formal, casual, shorter or simpler wording. Keeps your meaning, names and numbers. No sign-up.",
    headline: ["Same meaning.", "Better words."],
    lede: "Paste a sentence or a paragraph and pick a style. You get a rewrite that keeps your meaning, names and numbers, in the tone you need.",
    keywords: [
      "paraphrasing tool",
      "paraphrase",
      "rewording tool",
      "sentence rewriter",
      "ai rewriter",
      "free paraphrasing tool",
      "paraphrase a paragraph",
      "make text more formal",
      "make text simpler",
      "rewrite text to be shorter",
      "reword my sentence",
    ],
    steps: [
      "Paste the text you want to rewrite, up to 3,000 characters.",
      "Pick a style: standard, formal, casual, shorter or simpler.",
      "Press Paraphrase, then copy the version you like.",
    ],
    limits: ["Up to 3,000 characters a run", "30 AI runs a day", "Runs on a lighter, lower-cost model"],
    inApp: ["Say it your way and Oravo writes it in the right tone", "Formal in email, relaxed in chat, automatically", "Works in every app you type in"],
    faq: [
      { question: "What styles can it paraphrase in?", answer: "Standard (same length, new wording), formal, casual, shorter (about half the length) and simpler (plain English)." },
      { question: "Does it keep facts and names?", answer: "It is told to keep names, numbers and facts unchanged. Always read the result before you use it." },
      { question: "Can I use it for school or work?", answer: "Use it to improve your own writing. Follow your school's or employer's rules on AI tools, and do not present someone else's work as your own." },
      LITE_FAQ,
      PRIVACY_FAQ,
    ],
  },
  {
    slug: "text-summarizer",
    name: "AI Text Summarizer",
    blurb: "Paste an article, report or long email and get a short summary, bullet points or a detailed overview.",
    category: "text",
    engine: "lite-ai",
    icon: ListCollapse,
    badge: "New",
    seoTitle: "Free AI Text Summarizer — Summarize Articles & Paragraphs",
    seoDescription:
      "Summarize long text free with AI: articles, reports, essays and emails. Choose a 2-sentence summary, bullet points or a detailed overview. Up to 15,000 characters, no sign-up.",
    headline: ["The long version in,", "the point out."],
    lede: "Paste an article, a report or a long email thread. Pick a short summary, bullet points or a detailed overview.",
    keywords: [
      "text summarizer",
      "summarizer",
      "ai summarizer",
      "summarize text",
      "article summarizer",
      "paragraph summarizer",
      "summary generator",
      "free ai text summarizer online",
      "summarize an article in bullet points",
      "tldr generator",
      "summarize long email",
    ],
    steps: [
      "Paste the text you want summarised, up to 15,000 characters.",
      "Pick short, bullet points or detailed.",
      "Press Summarize, then copy the summary.",
    ],
    limits: ["Up to 15,000 characters a run", "30 AI runs a day", "Runs on a lighter, lower-cost model"],
    inApp: ["Notetaker summarises every meeting automatically", "Ask questions of your notes later", "Dictate your own summaries into any app"],
    faq: [
      { question: "How long can the text be?", answer: "Up to 15,000 characters, about 2,500 words, per summary. For longer documents, summarise them in parts." },
      { question: "What summary formats are there?", answer: "Short (two or three sentences), bullet points (three to seven key points) and detailed (one to three paragraphs)." },
      { question: "Can it summarise meetings?", answer: "Yes, if you paste the transcript. For decisions and action items, use our AI Meeting Summarizer, or Oravo Notetaker for every meeting." },
      LITE_FAQ,
      PRIVACY_FAQ,
    ],
  },
  {
    slug: "pdf-to-text",
    name: "PDF to Text",
    blurb: "Pull the text out of any PDF, page by page, and copy it or download it as TXT. Nothing is uploaded.",
    category: "documents",
    engine: "browser",
    icon: FileType,
    badge: "New",
    seoTitle: "PDF to Text Converter — Extract Text from PDF Free",
    seoDescription:
      "Extract text from PDF files free in your browser. Copy the text or download it as TXT or DOCX. Up to 300 pages, no upload, no sign-up, no watermark.",
    headline: ["Get the words", "out of the PDF."],
    lede: "Drop in a PDF. The text from every page comes out in readable paragraphs, ready to copy or download, without the file ever leaving your device.",
    keywords: [
      "pdf to text",
      "extract text from pdf",
      "pdf to txt",
      "pdf text extractor",
      "copy text from pdf",
      "convert pdf to text free",
      "pdf to text converter online no upload",
      "extract text from pdf without uploading",
      "pdf to plain text",
    ],
    steps: [
      "Drop a PDF into the box, or browse for one (up to 50 MB).",
      "Wait a moment while each page is read in your browser.",
      "Copy the text, or download it as TXT or DOCX.",
    ],
    limits: ["Up to 50 MB and 300 pages", "Scanned PDFs need OCR first", "Runs entirely in your browser"],
    inApp: ["Write your notes and replies by speaking", "Oravo types three times faster than you can", "Works in every app"],
    faq: [
      { question: "Is my PDF uploaded?", answer: "No. The PDF is read in your browser with Mozilla's PDF.js, and the file never leaves your device." },
      { question: "Why is the result empty?", answer: "The PDF is probably a scan or photo with no text layer. It needs OCR (optical character recognition) before its text can be extracted." },
      { question: "Does it keep tables and layout?", answer: "It keeps the reading order and paragraphs. Tables, columns and images are not rebuilt; table cells come out as lines of text." },
    ],
  },
  {
    slug: "pdf-to-word",
    name: "PDF to Word",
    blurb: "Turn a PDF's text into an editable Word document (DOCX), one page per page. Converted in your browser.",
    category: "documents",
    engine: "browser",
    icon: FileText,
    badge: "New",
    seoTitle: "PDF to Word Converter — Free, No Upload, Editable DOCX",
    seoDescription:
      "Convert PDF to Word free and privately: the text and paragraphs become an editable DOCX that opens in Word, Google Docs and LibreOffice. No upload, no sign-up, no watermark.",
    headline: ["PDF in.", "Editable Word document out."],
    lede: "Drop in a PDF and download a DOCX with its text and paragraphs, ready to edit in Word, Google Docs or LibreOffice. The file never leaves your device.",
    keywords: [
      "pdf to word",
      "pdf to docx",
      "convert pdf to word free",
      "pdf to word converter",
      "pdf to editable word",
      "pdf to word without uploading",
      "pdf to word converter no email",
      "pdf to word for mac",
      "pdf to doc",
    ],
    steps: [
      "Drop a PDF into the box, or browse for one (up to 50 MB).",
      "Wait while each page's text is read in your browser.",
      "Download the DOCX and open it in Word, Google Docs or LibreOffice.",
    ],
    limits: ["Text and paragraphs only: images, tables and exact layout are not rebuilt", "Scanned PDFs need OCR first", "Runs entirely in your browser"],
    inApp: ["Edit the document by voice in Word or Google Docs", "Dictate new sections three times faster than typing", "Oravo adds punctuation and paragraphs for you"],
    faq: [
      { question: "Does the Word file keep the PDF's formatting?", answer: "It keeps the text and paragraphs, with one PDF page per Word page. Images, tables, fonts and exact positions are not rebuilt, so it suits text-heavy documents best." },
      { question: "Is my PDF uploaded to a server?", answer: "No. Conversion happens in your browser, so confidential files never leave your device." },
      { question: "Will it work on a scanned PDF?", answer: "Not directly. Scans are images with no text layer; they need OCR first." },
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

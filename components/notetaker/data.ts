import { trackEvent } from "@/lib/analytics";

/*
 * One sample meeting shared by every demo on /notetaker, so the hero, the
 * evidence explorer and the anatomy all tell the same story.
 */

export const NT_VARIANT = "premium-speed-v2";

export function trackCta(cta: string, destination: string) {
  trackEvent("notetaker_interest_click", {
    product: "oravo_notetaker",
    variant: NT_VARIANT,
    cta,
    destination,
  });
}

/* Warm sage: the notetaker's "from the transcript" colour. Never blue. */
export const SAGE = "#4E6B47";
export const SAGE_SOFT = "#E9ECDD";

export const MEETING = {
  title: "Product launch review",
  when: "Tue · 60 min",
  people: [
    { id: "RY", name: "Raju" },
    { id: "MK", name: "Maya" },
    { id: "AS", name: "Aisha" },
  ],
};

export type Line = { at: string; who: string; text: string };

export const TRANSCRIPT: Line[] = [
  { at: "02:14", who: "Raju", text: "Okay, pricing first. I don't think we're ready to change it this quarter." },
  { at: "02:31", who: "Aisha", text: "Agreed. If we move it, Q3 gives sales time to update the decks." },
  { at: "08:12", who: "Maya", text: "For the Android pilot, all five accent cohorts are approved. I say we run all five." },
  { at: "08:40", who: "Raju", text: "Let's do it. Five cohorts, starting from the test build." },
  { at: "14:03", who: "Aisha", text: "Support wants a short FAQ before the pilot opens." },
  { at: "21:40", who: "Aisha", text: "So pricing moves to Q3. I'm marking that as decided." },
  { at: "27:05", who: "Maya", text: "One risk: if the test build slips, the pilot window gets tight." },
  { at: "34:05", who: "Maya", text: "I can share the final test build by Thursday." },
  { at: "44:52", who: "Aisha", text: "Open question: do tablet users need their own onboarding?" },
  { at: "51:18", who: "Raju", text: "Before any public claim ships, I want to review the benchmark report. Monday works." },
];

/* What you jot during the call: short, messy, yours. */
export const ROUGH_NOTES = ["pricing → Q3?", "android pilot, 5 cohorts ok", "maya: test build thu", "benchmark before ANY claims"];

export type Claim = {
  id: string;
  kind: "decision" | "risk" | "question" | "action";
  text: string;
  at: string;
  /** Came from your own rough note (kept in your words), or added from the transcript. */
  mine?: boolean;
  owner?: string;
  due?: string;
};

export const SUMMARY =
  "The team will run the Android pilot with all five accent cohorts, moved the pricing change to Q3, and is holding public performance claims until the benchmark report is reviewed.";

export const CLAIMS: Claim[] = [
  { id: "d1", kind: "decision", text: "Run the Android pilot with all five approved accent cohorts", at: "08:12", mine: true },
  { id: "d2", kind: "decision", text: "Move the pricing change to Q3", at: "21:40", mine: true },
  { id: "r1", kind: "risk", text: "Pilot window gets tight if the test build slips", at: "27:05" },
  { id: "q1", kind: "question", text: "Do tablet users need their own onboarding?", at: "44:52" },
  { id: "a1", kind: "action", text: "Share the final test build", owner: "Maya", due: "Thu", at: "34:05", mine: true },
  { id: "a2", kind: "action", text: "Review the benchmark report before launch copy", owner: "Raju", due: "Mon", at: "51:18", mine: true },
  { id: "a3", kind: "action", text: "Draft a short support FAQ for the pilot", owner: "Aisha", due: "Fri", at: "14:03" },
];

export const KIND_LABEL: Record<Claim["kind"], string> = {
  decision: "Decision",
  risk: "Risk",
  question: "Open question",
  action: "Action item",
};

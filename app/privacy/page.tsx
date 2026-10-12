import type { Metadata } from "next";
import { LegalDocument, type LegalSection } from "@/components/legal/LegalDocument";

export const metadata: Metadata = {
  title: "Privacy Policy | Oravo",
  description: "How Oravo protects your data. Learn about our privacy-first approach to voice dictation.",
  openGraph: {
    title: "Privacy Policy | Oravo",
    description: "How Oravo protects your data",
    url: "https://oravo.ai/privacy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Oravo",
    description: "How Oravo protects your data",
  },
};

// The policy text below is legal copy: change presentation only, never words.
const SECTIONS: LegalSection[] = [
  {
    id: "introduction",
    number: "1",
    title: "Introduction",
    body: (
      <p>
        Your privacy is our top priority. That's why we've made our privacy policy simple and easy to understand. With Oravo, you're in full control of your data. We give you two clear options: share minimal, anonymized data to help improve the app OR keep everything private. Here's how it works:
      </p>
    ),
  },
  {
    id: "why-we-use-cloud-processing",
    number: "2",
    title: "Why We Use Cloud Processing",
    body: (
      <>
        <p>
          Oravo uses cloud servers instead of on-device processing to give you the fastest and most accurate voice dictation experience possible. This lets us run advanced AI models that make dictation quick and reliable.
        </p>
        <p>
          We know privacy matters, and some people prefer to keep their data completely to themselves. That's why we have a Private Mode, which gives you full control and keeps your data entirely on your device.
        </p>
        <p>Our goal is to deliver the best of both worlds: top performance and strong privacy.</p>
      </>
    ),
  },
  {
    id: "choose-your-privacy-mode",
    number: "3",
    title: "Choose Your Privacy Mode",
    body: (
      <>
        <p>When you create an Oravo account, you can choose between:</p>
        <div className="my-5 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl bg-canvas p-5 ring-1 ring-line">
            <h3>Private Mode (DEFAULT Opt-Out):</h3>
            <p>
              Prefer not to share anything? That's perfectly fine. In private mode, Oravo only collects basic technical and account-related data needed to run the app and nothing else. No voice, no dictated text, no sensitive content.
            </p>
          </div>
          <div className="rounded-xl bg-canvas p-5 ring-1 ring-line">
            <h3>Help Improve Oravo (Optional Opt-In Mode):</h3>
            <p>
              You can allow Oravo to collect minimal usage data to help improve our text correction models. This data is anonymized, secure, and never accessible to anyone outside of our training system. It's never sold or shared to any third-party.
            </p>
          </div>
        </div>
        <p>You can switch between modes at any time in your settings. Learn more about what we collect below.</p>
      </>
    ),
  },
  {
    id: "what-we-collect-and-why",
    number: "4",
    title: "What We Collect and Why",
    body: (
      <>
        <h3>If You Opt In (Help Improve Oravo):</h3>
        <p>We collect only what's necessary to improve the app:</p>
        <ul>
          <li>
            <strong>Recognized dictated text (not audio):</strong> Used to improve speech-to-text accuracy. This is fully anonymized, processed securely, and never shared or sold beyond our model training system.
          </li>
          <li>
            <strong>Basic usage data:</strong> Device type, app performance, and similar technical metrics help us make Oravo smoother and more reliable.
          </li>
        </ul>
        <p>This data is never linked to you (anonymized), and no one can access your personal content.</p>

        <h3>If You Opt Out (Private Mode):</h3>
        <p>We collect the bare minimum to keep your account working:</p>
        <ul>
          <li>
            <strong>Account details:</strong> Like your email address and name
          </li>
          <li>
            <strong>Basic usage stats:</strong> Your words-per-minute rate and number of words dictated
          </li>
          <li>
            <strong>Device info and performance metrics:</strong> For maintaining a stable app experience
          </li>
        </ul>
        <p>We do not collect any dictated text, audio, or screen content in this mode.</p>
      </>
    ),
  },
  {
    id: "how-long-we-keep-data",
    number: "5",
    title: "How Long We Keep Data",
    body: (
      <>
        <p>In Opt-In Mode, we keep anonymized text and usage data only as long as needed to train and improve the app.</p>
        <p>
          In Private Mode, we don't collect any dictated content. Only basic, non-private operational data is stored to maintain core functionality.
        </p>
      </>
    ),
  },
  {
    id: "transcript-history",
    number: "6",
    title: 'How "Transcript History" Works',
    body: (
      <p>
        You may notice you can view your transcript history and recordings for dictation in the app. This is only stored locally on your device for you to view.
      </p>
    ),
  },
  {
    id: "context-awareness",
    number: "7",
    title: 'How "Context Awareness" Works (Optional Opt-In)',
    body: (
      <>
        <p>
          If you turn on Context Awareness, Oravo can read, not collect, relevant text data from the active window to improve dictation accuracy.
        </p>
        <p>
          This helps the app better understand what you're trying to say and recognize niche terms and names to spell them right.
        </p>
        <p>You can turn this feature on or off anytime in your settings.</p>
        <p>When it's off, no app content is used for transcription. This data is never stored.</p>
      </>
    ),
  },
  {
    id: "data-security",
    number: "8",
    title: "Data Security",
    body: (
      <>
        <p>We use a combination of technical and organizational measures to protect your data. This includes the following:</p>
        <ul>
          <li>
            <strong>Secure at rest:</strong> Anything stored in our database is encrypted, so it stays safe even when it's not being used.
          </li>
          <li>
            <strong>Secure in transit:</strong> Your data is protected with encryption (TLS) when it moves between your device and our servers.
          </li>
          <li>
            <strong>Access controls:</strong> We use strict rules to make sure only the right people or systems can access the right data (this includes row-level security and role-based permissions).
          </li>
          <li>
            <strong>Compliance matters:</strong> We follow best practices and standards like GDPR and SOC 2 to stay responsible and reliable.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "when-we-share-data",
    number: "9",
    title: "When We Share Data",
    body: (
      <p>
        We may share limited information with trusted partners to operate and improve Oravo. These partners help us with essential services like troubleshooting coverage issues and managing customer service. In rare cases, we may share information if required by law or for security reasons.
      </p>
    ),
  },
  {
    id: "children-data",
    number: "10",
    title: "Children Data",
    body: (
      <p>
        Oravo is not intended for children under 13 (or under 16 in some regions) without parental consent. If you believe a child's data has been shared with us in error, contact us right away.
      </p>
    ),
  },
  {
    id: "policy-updates",
    number: "11",
    title: "Policy Updates",
    body: (
      <p>
        We may update this Privacy Policy as the app evolves. If we make any major changes, we'll notify you in the app or via email. You can always find the latest version here.
      </p>
    ),
  },
  {
    id: "contact-us",
    number: "12",
    title: "Contact Us",
    body: <p>If you have questions or concerns about this Privacy Policy, email us at support@oravo.com.</p>,
  },
];

export default function PrivacyPage() {
  return (
    <LegalDocument
      doc="privacy"
      title="Oravo Privacy Policy"
      updated="Last Updated: 04/30/2025"
      doodle="notebook"
      sections={SECTIONS}
    />
  );
}

import type { Metadata } from "next";
import { LegalDocument, type LegalSection } from "@/components/legal/LegalDocument";
import styles from "@/components/legal/legal.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy | Oravo",
  description:
    "What personal data Oravo processes, why, which service providers help us, how long we keep it, and how to delete it.",
  alternates: { canonical: "https://oravo.ai/privacy" },
  openGraph: {
    title: "Privacy Policy | Oravo",
    description: "What Oravo processes, why, and how you stay in control",
    url: "https://oravo.ai/privacy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Oravo",
    description: "What Oravo processes, why, and how you stay in control",
  },
};

const CONTACT_EMAIL = "hi@oravo.ai";

const Contact = () => <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>;

// The policy text below is legal copy. Keep it in sync with the in-app
// behaviour, the App Store privacy label and /subprocessors.
const DATA_CATEGORIES: { category: string; examples: string; why: string }[] = [
  {
    category: "Account and authentication data",
    examples: "Name, email address, account ID, sign-in provider identifier, and session tokens",
    why: "Create and secure your account, sign you in, provide support, and prevent abuse.",
  },
  {
    category: "Voice and audio data",
    examples: "Live microphone audio while you dictate",
    why: "Transcribe your speech and deliver dictation features.",
  },
  {
    category: "User content",
    examples:
      "Dictated text, enhanced or translated text, transcripts, notes, summaries, custom vocabulary, and context you choose to share",
    why: "Deliver the features you request and keep the content you choose to save.",
  },
  {
    category: "Subscription data",
    examples: "Plan, trial status, purchase, renewal and cancellation status, and entitlement identifiers",
    why: "Provide paid features, manage subscriptions, prevent fraud, and provide support. We never receive your payment-card number from Apple.",
  },
  {
    category: "Usage data",
    examples: "Words dictated, words-per-minute, features used, onboarding progress, and subscription-flow events",
    why: "Enforce plan limits, show your stats, and understand and improve the Services. Usage events do not contain your audio or dictated text.",
  },
  {
    category: "Diagnostics and technical data",
    examples: "Crash reports, performance data, app and OS version, device model, timestamps, and error context",
    why: "Keep the app reliable, investigate problems, and secure the Services.",
  },
  {
    category: "Communications",
    examples: "Support requests, email preferences, and messages between you and us",
    why: "Respond to you, send essential service notices, and, where permitted, send product updates.",
  },
];

const PROVIDERS: { name: string; data: string; purpose: string }[] = [
  {
    name: "Apple",
    data: "Sign in with Apple data; App Store purchase and entitlement information",
    purpose: "Sign-in and App Store purchases. Apple processes your payment details.",
  },
  {
    name: "Google",
    data: "Account identifiers and authentication data when you use Sign in with Google",
    purpose: "Sign-in and account security.",
  },
  {
    name: "Supabase",
    data: "Account, session and subscription data; usage counts; transcripts you save to the cloud",
    purpose: "Accounts, backend services, database, and cloud storage.",
  },
  {
    name: "Soniox",
    data: "Live audio and the resulting text for an active dictation request",
    purpose: "Real-time speech-to-text.",
  },
  {
    name: "Deepgram",
    data: "Live audio and the resulting text for an active dictation request",
    purpose: "Speech-to-text for some languages and as a fallback.",
  },
  {
    name: "Groq",
    data: "Transcribed text, your formatting settings, and any context you enable",
    purpose: "AI formatting, grammar correction, rewriting, and translation.",
  },
  {
    name: "OpenAI",
    data: "Transcribed text you ask Oravo to summarise or transform",
    purpose: "AI summaries and text features.",
  },
  {
    name: "Sentry",
    data: "Crash reports, performance data, technical context, and your account ID",
    purpose: "Crash reporting and reliability monitoring.",
  },
  {
    name: "Amplitude",
    data: "Usage events and technical context (Android and desktop apps)",
    purpose: "Product analytics.",
  },
  {
    name: "Stripe",
    data: "Billing details and transaction references for purchases made on our website",
    purpose: "Web payments. Not used for App Store purchases.",
  },
];

const RETENTION: { data: string; rule: string }[] = [
  { data: "Account data", rule: "While your account is active. Deleted when you delete your account." },
  {
    data: "Live audio sent for transcription",
    rule: "Processed to return your transcript and not stored by Oravo. Providers are not permitted to use it to train their models.",
  },
  {
    data: "On-device history and recordings",
    rule: "On your device until you delete them, clear your history, or remove the app.",
  },
  {
    data: "Cloud-saved transcripts (Privacy Mode off)",
    rule: "Until you delete them, clear your history, or delete your account.",
  },
  {
    data: "Subscription records",
    rule: "As long as needed for accounting, tax, fraud-prevention, and legal obligations.",
  },
  {
    data: "Diagnostics and usage events",
    rule: "A limited period needed for troubleshooting and analysis, then deleted or aggregated.",
  },
  { data: "Support messages", rule: "As long as needed to resolve your request and keep a record of it." },
];

const SECTIONS: LegalSection[] = [
  {
    id: "summary",
    number: "1",
    title: "Summary",
    body: (
      <>
        <p>
          Oravo, Inc. (&ldquo;<strong>Oravo</strong>,&rdquo; &ldquo;<strong>we</strong>,&rdquo; &ldquo;<strong>us</strong>,&rdquo; or
          &ldquo;<strong>our</strong>&rdquo;) provides voice dictation, transcription, AI text formatting, note-taking, and related
          services (the &ldquo;<strong>Services</strong>&rdquo;). This policy covers the Oravo apps for iOS, Android, Mac and
          Windows, the Oravo Keyboard, our website, and our support services. It does not cover third-party apps you
          dictate into, which have their own privacy policies.
        </p>
        <ul>
          <li>
            <strong>Dictation uses the cloud.</strong> When you dictate, your audio is sent securely to a speech-to-text
            provider to turn it into text, and the text may be sent to an AI provider to format it. This processing is
            transient: it happens to fulfil your request.
          </li>
          <li>
            <strong>Privacy Mode is on by default.</strong> With Privacy Mode on, your dictation history stays only on your
            device and is not stored on our servers or used to train models.
          </li>
          <li>
            <strong>No selling, no ads, no tracking.</strong> We do not sell personal data, share it with data brokers, or
            use it for advertising or to track you across other companies&rsquo; apps and websites.
          </li>
          <li>
            <strong>You stay in control.</strong> You can clear your history or delete your account and its data from inside
            the app at any time.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "data-we-process",
    number: "2",
    title: "Personal Data We Process",
    body: (
      <>
        <table className={styles.table}>
          <thead>
            <tr>
              <th scope="col">Category</th>
              <th scope="col">Examples</th>
              <th scope="col">Why we process it</th>
            </tr>
          </thead>
          <tbody>
            {DATA_CATEGORIES.map((row) => (
              <tr key={row.category}>
                <td data-label="Category">
                  <strong>{row.category}</strong>
                </td>
                <td data-label="Examples">{row.examples}</td>
                <td data-label="Why">{row.why}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>
          What you dictate may include information you consider sensitive. Please avoid dictating information you do not
          want processed to deliver the feature you are using.
        </p>
        <p>
          We receive this data directly from you when you sign up, speak, type, save content, contact support, or manage a
          subscription; from Apple or Google when you choose to sign in with them; from Apple or Google when they confirm a
          purchase; and automatically from your device when you use the Services.
        </p>
      </>
    ),
  },
  {
    id: "how-dictation-works",
    number: "3",
    title: "How Dictation and Storage Work",
    body: (
      <>
        <h3>Real-time processing</h3>
        <p>
          When you start dictation, Oravo streams your audio over an encrypted connection to our speech-to-text providers
          (Soniox, and Deepgram for some languages), which return the transcript. Oravo then sends the transcript to an AI
          provider (Groq) to apply formatting, grammar and tone, along with your formatting settings and any context you
          have enabled. These providers process the data only to return your result and are not permitted to use it to
          train their models.
        </p>

        <h3>Privacy Mode (on by default)</h3>
        <p>
          With Privacy Mode on, your transcripts and recordings are saved only on your device, so you can review them in the
          app&rsquo;s history. They are not stored on Oravo&rsquo;s servers and are not used for model training by us or any
          third party. We still store your account details and basic usage counts (such as words dictated) so that your
          account, plan limits and stats work.
        </p>

        <h3>When Privacy Mode is off</h3>
        <p>
          If you turn Privacy Mode off, your transcripts (the original and formatted text, the language, word count, audio
          length, and any context sent with the request) are also saved to your Oravo account so they are available across
          your devices and to help us improve Oravo&rsquo;s text correction. Your audio recordings remain on your device. You
          can turn Privacy Mode back on, delete individual transcripts, or clear your history at any time.
        </p>

        <h3>Oravo Keyboard</h3>
        <p>
          Oravo Keyboard needs &ldquo;Allow Full Access&rdquo; on iOS so it can reach the network and the Oravo app for
          dictation. The keyboard does not collect or transmit the keys you type. It sends content only when you start
          dictation or choose an action that needs it, such as rewriting text you selected.
        </p>
        <p>
          If you turn on the keyboard-ready session, the Oravo app keeps the microphone available so you can start dictating
          from the keyboard after switching apps. While the session is ready but you have not started dictating, Oravo does
          not send audio to a speech provider or save a recording. iOS shows its microphone indicator while the session is
          active, and the session ends when you turn it off, it times out, or it is interrupted.
        </p>

        <h3>Context Awareness (optional)</h3>
        <p>
          If you turn on Context Awareness, Oravo sends limited context with your request, such as the name of the app you
          are dictating into, so it can format text appropriately and spell names and niche terms correctly. It is off unless
          you enable it, and you can turn it off at any time in settings.
        </p>
      </>
    ),
  },
  {
    id: "sharing",
    number: "4",
    title: "Service Providers and Sharing",
    body: (
      <>
        <p>
          We share personal data only as needed to operate the Services, comply with law, protect rights and safety, or
          as part of a merger or acquisition. Our service providers process data only on our instructions and under
          contracts that require them to protect it. The providers that currently process personal data for Oravo are:
        </p>
        <table className={styles.table}>
          <thead>
            <tr>
              <th scope="col">Provider</th>
              <th scope="col">Data</th>
              <th scope="col">Purpose</th>
            </tr>
          </thead>
          <tbody>
            {PROVIDERS.map((row) => (
              <tr key={row.name}>
                <td data-label="Provider">
                  <strong>{row.name}</strong>
                </td>
                <td data-label="Data">{row.data}</td>
                <td data-label="Purpose">{row.purpose}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>
          Our full list of subprocessors, including infrastructure providers, is on our{" "}
          <a href="/subprocessors">Subprocessors</a> page.
        </p>
        <p>
          We do not sell personal data. We do not share personal data with data brokers or for advertising, and we do not
          track you as Apple defines tracking. If that ever changes, we will update this policy and ask for your permission
          first.
        </p>
      </>
    ),
  },
  {
    id: "retention",
    number: "5",
    title: "How Long We Keep Data",
    body: (
      <>
        <p>
          We keep personal data only as long as needed for the purposes described here, unless a longer period is required
          by law, to resolve disputes, or to enforce our agreements.
        </p>
        <table className={styles.table}>
          <thead>
            <tr>
              <th scope="col">Data</th>
              <th scope="col">How long we keep it</th>
            </tr>
          </thead>
          <tbody>
            {RETENTION.map((row) => (
              <tr key={row.data}>
                <td data-label="Data">
                  <strong>{row.data}</strong>
                </td>
                <td data-label="Retention">{row.rule}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>
          When you delete content or your account, we remove it from our active systems. Copies in encrypted backups are
          removed as those backups expire on their normal cycle.
        </p>
      </>
    ),
  },
  {
    id: "your-choices",
    number: "6",
    title: "Your Choices and Rights",
    body: (
      <>
        <ul>
          <li>
            <strong>Privacy Mode:</strong> turn it on or off in the app&rsquo;s settings.
          </li>
          <li>
            <strong>History:</strong> delete individual transcripts or clear your entire history in the app. Clearing your
            history also removes any copies saved to your Oravo account.
          </li>
          <li>
            <strong>Delete your account:</strong> go to <strong>Settings &rsaquo; Account &rsaquo; Delete account</strong>.
            This permanently deletes your account and its associated data, including cloud-saved transcripts.
          </li>
          <li>
            <strong>Microphone:</strong> you can revoke microphone access at any time in your device settings.
          </li>
          <li>
            <strong>Emails:</strong> marketing emails include an unsubscribe link.
          </li>
        </ul>
        <p>
          Deleting your account does not cancel an App Store subscription. If you have an active subscription, cancel it
          first in your Apple account&rsquo;s subscription settings, then delete your account.
        </p>
        <p>
          You can also ask us to access, correct, export, or delete your personal data by emailing <Contact />. We may need
          to verify your identity before acting on a request. Depending on where you live, you may have further rights,
          such as the right to object to or restrict processing, to withdraw consent, or to complain to your local data
          protection authority.
        </p>
      </>
    ),
  },
  {
    id: "emails",
    number: "7",
    title: "Service and Marketing Emails",
    body: (
      <p>
        We send essential messages about your account, security, purchases, and support requests. Where the law allows, we
        may also send welcome, feature-update, and promotional emails. Every marketing email includes an unsubscribe link.
        Unsubscribing does not stop essential service, security, or transaction emails.
      </p>
    ),
  },
  {
    id: "security",
    number: "8",
    title: "Data Security",
    body: (
      <>
        <p>We use technical and organizational measures to protect your data, including:</p>
        <ul>
          <li>
            <strong>Encryption in transit:</strong> data moving between your device, our servers, and our providers is
            protected with TLS.
          </li>
          <li>
            <strong>Encryption at rest:</strong> data stored in our database is encrypted.
          </li>
          <li>
            <strong>Access controls:</strong> row-level security and role-based permissions limit access to authorized
            people and systems.
          </li>
        </ul>
        <p>
          No system is completely secure. Please protect your device and account credentials, and contact us if you think
          your account has been compromised.
        </p>
      </>
    ),
  },
  {
    id: "international-transfers",
    number: "9",
    title: "International Transfers",
    body: (
      <p>
        Oravo and our service providers may process data in countries other than the one you live in, including the United
        States. Where required, we use appropriate safeguards for these transfers, such as standard contractual clauses.
      </p>
    ),
  },
  {
    id: "children",
    number: "10",
    title: "Children",
    body: (
      <p>
        Oravo is not intended for children under 13 (or under 16 in some regions) without parental consent, and we do not
        knowingly collect their personal data. If you believe a child has provided us personal data, contact us at{" "}
        <Contact /> and we will delete it.
      </p>
    ),
  },
  {
    id: "policy-updates",
    number: "11",
    title: "Changes to This Policy",
    body: (
      <p>
        We may update this policy when our practices or the law change. We will post the updated policy here with a new
        effective date and, for significant changes, notify you in the app or by email.
      </p>
    ),
  },
  {
    id: "contact-us",
    number: "12",
    title: "Contact Us",
    body: (
      <p>
        For privacy questions or requests, email us at <Contact />.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalDocument
      doc="privacy"
      title="Oravo Privacy Policy"
      updated="Effective: November 3, 2026"
      doodle="notebook"
      sections={SECTIONS}
    />
  );
}

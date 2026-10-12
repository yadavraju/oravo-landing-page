import type { Metadata } from "next";
import { LegalDocument, type LegalSection } from "@/components/legal/LegalDocument";

export const metadata: Metadata = {
  title: "Terms of Service | Oravo",
  description: "Terms and conditions for using Oravo. Read our terms of service agreement.",
  openGraph: {
    title: "Terms of Service | Oravo",
    description: "Terms and conditions for using Oravo",
    url: "https://oravo.ai/terms",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | Oravo",
    description: "Terms and conditions for using Oravo",
  },
};

// The terms below are legal copy: change presentation only, never words.
const SECTIONS: LegalSection[] = [
  {
    id: "introduction",
    number: "1",
    title: "Introduction",
    body: (
      <p>
        These Terms of Use ("Terms") apply to all agreements between Oravo, Inc. ("Oravo," "we," "our," or "us") and you, our customer ("you" or "Customer"). You are only allowed to use Oravo's services if you accept these Terms.
      </p>
    ),
  },
  {
    id: "services",
    number: "2",
    title: "Services",
    body: (
      <>
        <p>
          Oravo provides software, applications, and integrations designed to help you convert speech to text, generate transcripts, and improve overall communication workflows. The Services may include:
        </p>
        <ul>
          <li>
            <strong>AI Features:</strong> Automated transcription, text generation, or similar capabilities using large language models ("LLMs").
          </li>
          <li>
            <strong>Platform Access:</strong> Via our website, desktop application, mobile app, or API.
          </li>
          <li>
            <strong>Optional Integrations:</strong> Connections to third-party services or platforms for enhanced functionality.
          </li>
        </ul>
        <p>
          <strong>Service Quality:</strong> While we strive to deliver accurate AI-generated outputs, various factors—such as audio clarity, background noise, and system availability—can impact results. You acknowledge that:
        </p>
        <ul>
          <li>
            <strong>No Guaranteed Accuracy:</strong> AI-generated content may contain errors, omissions, or other inaccuracies.
          </li>
          <li>
            <strong>Independent Verification:</strong> You are responsible for verifying the correctness of any AI outputs before relying on them.
          </li>
          <li>
            <strong>Personal Use Only:</strong> You agree that you will use the Services solely for your personal or internal business purposes, and you will not resell or transfer access to any other party without our express permission.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "user-responsibilities",
    number: "3",
    title: "User Responsibilities",
    body: (
      <ul>
        <li>
          <strong>Account Security:</strong> You must maintain the confidentiality of your login credentials and promptly notify us of any unauthorized access.
        </li>
        <li>
          <strong>Lawful Conduct:</strong> You agree to use the Services in compliance with all applicable laws and regulations.
        </li>
        <li>
          <strong>Respect for Others:</strong> You will not attempt to breach the security of our Services, disrupt network performance, or access other users' accounts without permission.
        </li>
        <li>
          <strong>Prohibited Misuse:</strong> You may not circumvent usage controls, engage in automated decision-making that affects individuals' rights without appropriate safeguards, or use the Services in a manner inconsistent with these Terms.
        </li>
        <li>
          <strong>Consequences:</strong> Any misuse or abuse of the Services (e.g., reverse engineering, spamming, hacking, or infringing intellectual property rights) can result in immediate suspension or termination of your account.
        </li>
      </ul>
    ),
  },
  {
    id: "account-and-service-area",
    number: "4",
    title: "Account and Service Area",
    body: (
      <ul>
        <li>
          <strong>Eligibility:</strong> You must be at least 18 years old or the age of majority in your jurisdiction—to create an account.
        </li>
        <li>
          <strong>Account Information:</strong> All registration details you provide must be truthful, current, and accurate.
        </li>
        <li>
          <strong>Geographic Considerations:</strong> Oravo seeks to support users globally, but availability and functionality may vary depending on your location and applicable local regulations.
        </li>
        <li>
          <strong>No Liability for Unauthorized Use:</strong> Oravo is not responsible for losses arising from unauthorized access if you fail to secure your account or promptly report suspicious activity.
        </li>
      </ul>
    ),
  },
  {
    id: "pricing",
    number: "5",
    title: "Pricing",
    body: (
      <ul>
        <li>
          <strong>Subscription and Fees:</strong> Some features may require a paid subscription or usage-based fees. You agree to provide accurate billing information and promptly pay all charges.
        </li>
        <li>
          <strong>Renewals:</strong> Subscriptions renew automatically unless canceled prior to the renewal date.
        </li>
        <li>
          <strong>Referral discounts:</strong> We may offer free months based on referrals rewards. If you continue after the free month of Oravo's Individual Plan, regular fees apply.
        </li>
        <li>
          <strong>Taxes and Adjustments:</strong> You may be responsible for any taxes or additional charges associated with your location. We will notify you of any material changes in pricing.
        </li>
      </ul>
    ),
  },
  {
    id: "privacy",
    number: "6",
    title: "Privacy",
    body: (
      <>
        <p>
          We handle your personal information in accordance with our Privacy Policy, which explains how we collect, use, and protect your data.
        </p>
        <ul>
          <li>
            <strong>Consent and Control:</strong> You can manage certain data usage settings in your account to enable or disable your content for AI model training, subject to the Privacy Policy.
          </li>
          <li>
            <strong>Security Measures:</strong> While we take reasonable steps to safeguard your data, no method of internet transmission is 100% secure.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "limitations-of-liability",
    number: "7",
    title: "Limitations of Liability",
    body: (
      <>
        <p>To the fullest extent permitted by law:</p>
        <ul>
          <li>
            <strong>No Special Damages:</strong> Oravo is not liable for any indirect, incidental, special, consequential, punitive, or exemplary damages, including lost profits or data.
          </li>
          <li>
            <strong>Service Interruptions:</strong> We assume no responsibility for damages arising from service downtime, errors in AI outputs, or reliance on such outputs.
          </li>
          <li>
            <strong>Maximum Liability:</strong> Our total liability is limited to the amount you have paid to Oravo for the Services in the preceding twelve (12) months, or one hundred US dollars (USD $100), whichever is greater.
          </li>
        </ul>
        <p>Some jurisdictions do not allow such limitations, so some or all of these limitations may not apply to you.</p>
      </>
    ),
  },
  {
    id: "modifications",
    number: "8",
    title: "Modifications",
    body: (
      <>
        <p>
          Oravo may revise these Terms at any time to reflect changes in our Services, legal requirements, or business practices. If we make significant modifications:
        </p>
        <ul>
          <li>
            <strong>Notice:</strong> We will notify you in advance by email or by posting a prominent notice on our website or app.
          </li>
          <li>
            <strong>Acceptance:</strong> Continued use of the Services after the revised Terms become effective constitutes your acceptance of those changes.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "termination",
    number: "9",
    title: "Termination",
    body: (
      <ul>
        <li>
          <strong>User Cancellation:</strong> You may cancel your account at any time by contacting support or through your account settings.
        </li>
        <li>
          <strong>Suspension or Termination by Oravo:</strong> We reserve the right to suspend or terminate your account if you breach these Terms, if your use poses a risk to the platform or other users, or if required by law.
        </li>
        <li>
          <strong>Effect of Termination:</strong> Upon termination, you remain responsible for all fees incurred through the termination date. Sections of these Terms that by nature should survive termination (e.g., liability, warranties, dispute resolution) will remain in effect.
        </li>
      </ul>
    ),
  },
  {
    id: "dispute-resolution",
    number: "10",
    title: "Dispute Resolution",
    body: (
      <ul>
        <li>
          <strong>Informal Resolution:</strong> We encourage you to contact us first at support@oravo.com to resolve any disputes in good faith.
        </li>
        <li>
          <strong>Arbitration:</strong> If informal efforts fail, disputes will be resolved through binding arbitration, unless otherwise prohibited by local law. Each party will be responsible for its own arbitration-related costs unless agreed otherwise.
        </li>
        <li>
          <strong>No Class Actions:</strong> To the extent permitted by law, you agree to resolve disputes on an individual basis and not as part of any class or representative action.
        </li>
      </ul>
    ),
  },
  {
    id: "our-rights",
    number: "11",
    title: "Our Rights",
    body: (
      <>
        <p>
          We reserve the right, at any time and in our sole discretion, and without liability or notice to you (except where required by applicable law), to do the following:
        </p>
        <ul>
          <li>
            <strong>Alter Features:</strong> We may change, update, or remove some or all functionalities of the Services;
          </li>
          <li>
            <strong>Suspend or Discontinue:</strong> We may temporarily or permanently suspend or discontinue certain parts of the Services or the Services in their entirety;
          </li>
          <li>
            <strong>Restrict Access:</strong> We may terminate, suspend, restrict, or otherwise disable your ability to use any or all parts of the Services;
          </li>
          <li>
            <strong>Modify or Close Accounts:</strong> We may suspend, terminate, or limit access to your account or any content associated with it; and
          </li>
          <li>
            <strong>Change Eligibility:</strong> We may update our eligibility criteria for using the Services. If such criteria changes are not permitted by law in your jurisdiction, we may revoke your right to use the Services in that location.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "final-provisions",
    number: "12",
    title: "Final Provisions",
    body: (
      <ul>
        <li>
          <strong>Governing Law:</strong> These Terms are governed by the laws of California, excluding its conflict-of-law provisions. However, some countries, including those in the EU, have laws that require agreements to be governed by the local laws of the user's country. This paragraph does not override those laws.
        </li>
        <li>
          <strong>Severability:</strong> If any provision is deemed invalid or unenforceable, the remaining provisions remain in full force and effect.
        </li>
        <li>
          <strong>No Waiver:</strong> Oravo's failure to enforce any right or provision of these Terms does not constitute a waiver of such right or provision.
        </li>
        <li>
          <strong>Entire Agreement:</strong> These Terms, along with our Privacy Policy and any additional terms referenced herein, constitute the entire agreement between you and Oravo regarding the Services.
        </li>
      </ul>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalDocument
      doc="terms"
      title="Terms of Service"
      updated="Last Updated: 04/30/2025"
      doodle="scales"
      sections={SECTIONS}
    />
  );
}

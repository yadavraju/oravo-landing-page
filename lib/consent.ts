/** Where Google requires consent before ad/analytics storage: EEA countries, the UK and Switzerland. */
export const CONSENT_REGIONS = [
  "AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IS", "IE", "IT",
  "LV", "LI", "LT", "LU", "MT", "NL", "NO", "PL", "PT", "RO", "SK", "SI", "ES", "SE", "GB", "CH",
];

export const CONSENT_STORAGE_KEY = "oravo_consent";
export type ConsentChoice = "granted" | "denied";

/**
 * Show the banner to visitors whose clock is set to a European zone. Google decides the
 * default per region itself; this only decides who is asked, so a rough check is fine.
 */
export function needsConsentPrompt(timeZone: string | undefined): boolean {
  return !!timeZone && (timeZone.startsWith("Europe/") || timeZone === "Atlantic/Reykjavik" || timeZone === "Atlantic/Canary");
}

export function consentUpdate(choice: ConsentChoice) {
  return { ad_storage: choice, ad_user_data: choice, ad_personalization: choice, analytics_storage: choice };
}

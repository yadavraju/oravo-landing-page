import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  ADS_CONVERSIONS,
  CONVERSION_CALLBACK_TIMEOUT_MS,
  reportAdsConversion,
  startDesktopDownload,
  trackPlayStoreOutbound,
} from "@/lib/analytics";
import { CONSENT_REGIONS, consentUpdate, needsConsentPrompt } from "@/lib/consent";
import { detectVisitorDevice } from "@/lib/device";

// Ads conversion tracking, visitor device detection and the consent prompt rule.

const UA = {
  iphone: "Mozilla/5.0 (iPhone; CPU iPhone OS 18_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.1 Mobile/15E148 Safari/604.1",
  ipadDesktopMode: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.1 Safari/605.1.15",
  android: "Mozilla/5.0 (Linux; Android 15; Pixel 9) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36",
  mac: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
  windows: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
  chromeos: "Mozilla/5.0 (X11; CrOS x86_64 14541.0.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
};

describe("detectVisitorDevice", () => {
  it("does not mistake an iPhone for a Mac", () => expect(detectVisitorDevice(UA.iphone)).toBe("ios"));
  it("treats a touch Mac user agent as an iPad", () => expect(detectVisitorDevice(UA.ipadDesktopMode, 5)).toBe("ios"));
  it("detects Android before anything else", () => expect(detectVisitorDevice(UA.android)).toBe("android"));
  it("detects a real Mac", () => expect(detectVisitorDevice(UA.mac, 0)).toBe("mac"));
  it("detects Windows", () => expect(detectVisitorDevice(UA.windows)).toBe("windows"));
  it("falls back to other", () => expect(detectVisitorDevice(UA.chromeos)).toBe("other"));
});

describe("Google Ads conversions", () => {
  let gtag: ReturnType<typeof vi.fn>;
  let assign: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    vi.useFakeTimers();
    gtag = vi.fn();
    assign = vi.fn();
    vi.stubGlobal("window", { gtag, setTimeout, location: { assign } });
  });
  afterEach(() => {
    vi.useRealTimers();
    vi.unstubAllGlobals();
  });

  const conversionCalls = () => gtag.mock.calls.filter(([cmd, name]) => cmd === "event" && name === "conversion");

  it("sends the desktop download conversion to the real label", () => {
    reportAdsConversion("desktopDownload");
    expect(conversionCalls()).toHaveLength(1);
    expect(conversionCalls()[0][2]).toMatchObject({ send_to: ADS_CONVERSIONS.desktopDownload.sendTo, value: 5, currency: "USD" });
    expect(ADS_CONVERSIONS.desktopDownload.sendTo).toMatch(/^AW-\d+\/[\w-]+$/);
  });

  it("starts the download once when Google confirms, even if the timeout also fires", () => {
    startDesktopDownload("https://cdn.example/oravo.dmg");
    conversionCalls()[0][2].event_callback();
    vi.advanceTimersByTime(CONVERSION_CALLBACK_TIMEOUT_MS * 2);
    expect(assign).toHaveBeenCalledTimes(1);
    expect(assign).toHaveBeenCalledWith("https://cdn.example/oravo.dmg");
  });

  it("still starts the download when gtag.js is blocked and never calls back", () => {
    startDesktopDownload("https://cdn.example/oravo.exe");
    expect(assign).not.toHaveBeenCalled();
    vi.advanceTimersByTime(CONVERSION_CALLBACK_TIMEOUT_MS);
    expect(assign).toHaveBeenCalledWith("https://cdn.example/oravo.exe");
  });

  it("starts the download immediately when gtag is missing entirely", () => {
    vi.stubGlobal("window", { setTimeout, location: { assign } });
    startDesktopDownload("https://cdn.example/oravo.exe");
    expect(assign).toHaveBeenCalledTimes(1);
  });

  it("counts a Play Store click as an Ads conversion as well as GA events", () => {
    trackPlayStoreOutbound("glass");
    expect(conversionCalls()).toHaveLength(1);
    expect(conversionCalls()[0][2]).toMatchObject({ send_to: ADS_CONVERSIONS.playStoreClick.sendTo });
    expect(gtag.mock.calls.map((c) => c[1])).toEqual(expect.arrayContaining(["play_store_outbound", "primary_cta_click"]));
  });
});

describe("consent", () => {
  it("asks European visitors, not others", () => {
    expect(needsConsentPrompt("Europe/London")).toBe(true);
    expect(needsConsentPrompt("Europe/Berlin")).toBe(true);
    expect(needsConsentPrompt("America/New_York")).toBe(false);
    expect(needsConsentPrompt("Asia/Kolkata")).toBe(false);
    expect(needsConsentPrompt(undefined)).toBe(false);
  });
  it("covers the UK and Switzerland as well as the EEA", () => {
    expect(CONSENT_REGIONS).toEqual(expect.arrayContaining(["GB", "CH", "DE", "FR", "IE", "NO"]));
  });
  it("updates all four Consent Mode v2 signals together", () => {
    expect(consentUpdate("denied")).toEqual({ ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied", analytics_storage: "denied" });
  });
});

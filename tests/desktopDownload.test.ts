import { describe, expect, it } from "vitest";
import { findBestDownload, platformForLink } from "@/lib/desktopDownload";
import type { DownloadData } from "@/lib/downloadApi";

const UA = {
  mac: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
  windows: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
  android: "Mozilla/5.0 (Linux; Android 15; Pixel 9) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36",
  iphone: "Mozilla/5.0 (iPhone; CPU iPhone OS 18_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.1 Mobile/15E148 Safari/604.1",
};

describe("platformForLink", () => {
  it("uses the platform named in the link", () => {
    expect(platformForLink("Download for Mac", UA.windows)).toBe("macos");
    expect(platformForLink("Download for Windows", UA.mac)).toBe("windows");
  });
  it("falls back to the visitor's own desktop OS for a generic link", () => {
    expect(platformForLink("Download", UA.mac)).toBe("macos");
    expect(platformForLink("Get Oravo free", UA.windows)).toBe("windows");
  });
  it("leaves phones on the normal /download link", () => {
    expect(platformForLink("Download for Mac", UA.android)).toBeNull();
    expect(platformForLink("Download for Mac", UA.iphone)).toBeNull();
  });
  it("does not read 'machine' or 'macro' as Mac", () => {
    expect(platformForLink("Download the machine", UA.windows)).toBe("windows");
  });
});

describe("findBestDownload", () => {
  const build = (platform: DownloadData["platform"], architecture: string): DownloadData => ({
    id: `${platform}-${architecture}`, version: "1.0.0", release_date: "2026-11-01", formatted_date: "", platform, architecture,
    file_extension: "", file_path: `https://cdn.example/${platform}-${architecture}`, file_size: null, file_size_formatted: null,
    release_notes: null, min_required_version: null, is_mandatory: false,
  });
  const all = [build("macos", "arm64"), build("macos", "x64"), build("windows", "x64")];

  it("picks the matching Mac architecture", () => {
    expect(findBestDownload(all, "macos", "x64")?.id).toBe("macos-x64");
    expect(findBestDownload(all, "macos", "arm64")?.id).toBe("macos-arm64");
  });
  it("uses the first Mac build when the architecture is unknown", () => {
    expect(findBestDownload(all, "macos", null)?.id).toBe("macos-arm64");
  });
  it("returns the Windows build, or null when a platform has none", () => {
    expect(findBestDownload(all, "windows", null)?.id).toBe("windows-x64");
    expect(findBestDownload([build("macos", "arm64")], "windows", null)).toBeNull();
  });
});

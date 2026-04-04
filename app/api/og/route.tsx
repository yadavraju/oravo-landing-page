import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const title = searchParams.get("title") || "Oravo";
  const subtitle = searchParams.get("subtitle") || "AI Voice Typing & Dictation";
  const type = searchParams.get("type") || "default";

  // Accent colors per page type
  const accentColors: Record<string, string> = {
    compare: "#6366F1",
    audience: "#1877F2",
    app: "#10B981",
    blog: "#F59E0B",
    default: "#1877F2",
  };

  const accent = accentColors[type] || accentColors.default;

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          backgroundColor: "#F7F5F3",
          padding: "80px",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Top accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            backgroundColor: accent,
            display: "flex",
          }}
        />

        {/* Vertical border lines */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "60px",
            bottom: 0,
            width: "1px",
            backgroundColor: "rgba(55,50,47,0.12)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            right: "60px",
            bottom: 0,
            width: "1px",
            backgroundColor: "rgba(55,50,47,0.12)",
            display: "flex",
          }}
        />

        {/* Logo / brand */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "10px",
              backgroundColor: accent,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "24px",
              fontWeight: 700,
            }}
          >
            O
          </div>
          <div
            style={{
              fontSize: "28px",
              fontWeight: 600,
              color: "#37322F",
              display: "flex",
            }}
          >
            Oravo
          </div>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: title.length > 50 ? "48px" : "56px",
            fontWeight: 700,
            color: "#37322F",
            lineHeight: 1.15,
            maxWidth: "960px",
            display: "flex",
            marginBottom: "20px",
          }}
        >
          {title}
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "24px",
            fontWeight: 400,
            color: "#605A57",
            lineHeight: 1.5,
            maxWidth: "800px",
            display: "flex",
          }}
        >
          {subtitle}
        </div>

        {/* Bottom domain */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            left: "80px",
            fontSize: "20px",
            color: "#847971",
            display: "flex",
          }}
        >
          oravo.ai
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}

import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Oravo — AI Voice Typing & Dictation App";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#F7F5F3",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -80,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(24,119,242,0.2) 0%, transparent 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -60,
            left: -60,
            width: 350,
            height: 350,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(24,119,242,0.12) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Vertical border lines */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 60,
            bottom: 0,
            width: 1,
            backgroundColor: "rgba(55,50,47,0.1)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 60,
            bottom: 0,
            width: 1,
            backgroundColor: "rgba(55,50,47,0.1)",
            display: "flex",
          }}
        />

        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "#1877F2",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            O
          </div>
          <span style={{ fontSize: 40, fontWeight: 600, color: "#37322F" }}>
            Oravo
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: 56,
            fontWeight: 500,
            color: "#37322F",
            textAlign: "center",
            lineHeight: 1.2,
            maxWidth: 800,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span>Just speak.</span>
          <span style={{ color: "#1877F2" }}>Oravo types it perfectly.</span>
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 22,
            color: "#37322F",
            opacity: 0.5,
            marginTop: 20,
            display: "flex",
          }}
        >
          AI voice typing & dictation for 60+ languages
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: 32,
            display: "flex",
            alignItems: "center",
            gap: 32,
            color: "#37322F",
            opacity: 0.35,
            fontSize: 16,
          }}
        >
          <span>oravo.ai</span>
          <span>·</span>
          <span>Free to start</span>
          <span>·</span>
          <span>Mac, Windows, Android & iOS</span>
        </div>
      </div>
    ),
    { ...size }
  );
}

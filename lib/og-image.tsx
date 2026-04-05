import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

export function createOgImage(title: string, subtitle: string) {
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
            gap: 12,
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              background: "#1877F2",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            O
          </div>
          <span style={{ fontSize: 32, fontWeight: 600, color: "#37322F" }}>
            Oravo
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: title.length > 45 ? 44 : 52,
            fontWeight: 500,
            color: "#37322F",
            textAlign: "center",
            lineHeight: 1.2,
            maxWidth: 850,
            display: "flex",
          }}
        >
          {title}
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 22,
            color: "#37322F",
            opacity: 0.5,
            marginTop: 20,
            maxWidth: 650,
            textAlign: "center",
            display: "flex",
          }}
        >
          {subtitle}
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
          <span>60+ languages</span>
        </div>
      </div>
    ),
    { ...ogSize }
  );
}

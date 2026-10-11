// Slow-drifting blurred colour fields behind the glass surfaces. Purely
// decorative: no pointer events, hidden from assistive tech, frozen under
// prefers-reduced-motion (see .liquid-blob in globals.css).
const BLOBS = [
  { color: "var(--o-liquid-peach)", size: "46vw", top: "-12%", left: "-8%", dur: "28s", delay: "0s" },
  { color: "var(--o-liquid-lilac)", size: "38vw", top: "4%", left: "58%", dur: "32s", delay: "-6s" },
  { color: "var(--o-liquid-sky)", size: "42vw", top: "38%", left: "20%", dur: "36s", delay: "-12s" },
  { color: "var(--o-liquid-mint)", size: "30vw", top: "62%", left: "70%", dur: "30s", delay: "-3s" },
];

export default function LiquidBackground({ className = "" }: { className?: string }) {
  return (
    <div className={`liquid-field ${className}`} aria-hidden="true">
      {BLOBS.map((b, i) => (
        <span
          key={i}
          className="liquid-blob"
          style={
            {
              background: b.color,
              width: b.size,
              height: b.size,
              minWidth: 280,
              minHeight: 280,
              top: b.top,
              left: b.left,
              "--dur": b.dur,
              "--delay": b.delay,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}

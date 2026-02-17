interface GlowProps {
  className?: string;
  color?: "amber" | "neutral";
}

export function Glow({ className, color = "amber" }: GlowProps) {
  const gradient =
    color === "amber"
      ? "radial-gradient(ellipse at center, rgba(245,158,11,0.06) 0%, transparent 70%)"
      : "radial-gradient(ellipse at center, rgba(255,255,255,0.03) 0%, transparent 70%)";

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute ${className ?? ""}`}
      style={{ background: gradient }}
    />
  );
}

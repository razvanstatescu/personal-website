export function Divider({ className }: { className?: string }) {
  return (
    <div className={`mx-auto max-w-5xl px-6 ${className ?? ""}`}>
      <div
        className="h-px w-full"
        style={{
          background:
            "linear-gradient(to right, transparent, var(--color-border-hover) 30%, var(--color-accent) 50%, var(--color-border-hover) 70%, transparent)",
        }}
      />
    </div>
  );
}

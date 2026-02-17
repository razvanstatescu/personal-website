import type { ProjectStatus } from "@/lib/data";

const config: Record<
  ProjectStatus,
  { label: string; dot: string; bg: string; text: string }
> = {
  live: {
    label: "Live",
    dot: "bg-emerald-400",
    bg: "bg-emerald-400/10",
    text: "text-emerald-400",
  },
  "coming-soon": {
    label: "Coming Soon",
    dot: "bg-amber-400",
    bg: "bg-amber-400/10",
    text: "text-amber-400",
  },
  testnet: {
    label: "Testnet",
    dot: "bg-sky-400",
    bg: "bg-sky-400/10",
    text: "text-sky-400",
  },
};

export function StatusBadge({ status }: { status: ProjectStatus }) {
  const { label, dot, bg, text } = config[status];

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-xs ${bg} ${text}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full animate-pulse-dot ${dot}`} />
      {label}
    </span>
  );
}

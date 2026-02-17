interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  surface?: boolean;
}

export function Section({ id, children, className, surface }: SectionProps) {
  if (surface) {
    return (
      <div className="relative border-y border-border/50 bg-surface/40">
        <div
          id={id}
          className={`relative px-6 py-20 md:py-32 mx-auto max-w-5xl ${className ?? ""}`}
        >
          {children}
        </div>
      </div>
    );
  }

  return (
    <section
      id={id}
      className={`px-6 py-20 md:py-32 mx-auto max-w-5xl ${className ?? ""}`}
    >
      {children}
    </section>
  );
}

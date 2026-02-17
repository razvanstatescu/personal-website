interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ id, children, className }: SectionProps) {
  return (
    <section
      id={id}
      className={`px-6 py-20 md:py-32 mx-auto max-w-5xl ${className ?? ""}`}
    >
      {children}
    </section>
  );
}

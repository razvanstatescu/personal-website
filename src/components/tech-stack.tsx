"use client";

import { Section } from "@/components/section";
import { techStack } from "@/lib/data";
import { useInView } from "@/hooks/use-in-view";

export function TechStack() {
  const { ref, isInView } = useInView();

  return (
    <Section id="stack">
      <div ref={ref}>
        <p className="font-mono text-sm uppercase tracking-widest text-accent">
          Stack
        </p>
        <h2 className="mt-4 text-3xl font-bold text-text">Tools &amp; technologies</h2>

        <div className="mt-8 flex flex-wrap gap-3">
          {techStack.map((tech, i) => (
            <span
              key={tech}
              className={`rounded-lg border border-border bg-surface px-4 py-2 font-mono text-sm text-text-secondary transition-all duration-500 ease-out hover:border-border-hover hover:text-text ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}

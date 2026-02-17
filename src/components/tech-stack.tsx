"use client";

import { Section } from "@/components/section";
import { techStack } from "@/lib/data";
import { useInView } from "@/hooks/use-in-view";

export function TechStack() {
  const { ref, isInView } = useInView();

  return (
    <Section id="stack" surface>
      <div ref={ref}>
        <p className="font-mono text-sm text-accent">// stack</p>
        <h2 className="mt-4 text-3xl font-bold text-text">
          Tools &amp; technologies
        </h2>

        {/* Hashtag tech keywords */}
        <div className="mt-8 flex flex-wrap gap-x-3 gap-y-2">
          {techStack.map((tech, i) => (
            <span
              key={tech}
              className={`font-mono text-xs text-text-muted transition-all duration-500 ease-out hover:text-accent ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              #{tech.toLowerCase().replace(/[\s/]+/g, "")}
            </span>
          ))}
        </div>

        {/* TODO: Add "Tools I enjoy using" section with icon + title + link pills (data in lib/data.ts tools array) */}
      </div>
    </Section>
  );
}

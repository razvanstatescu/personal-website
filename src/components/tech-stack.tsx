"use client";

import { Section } from "@/components/section";
import { techStack, tools } from "@/lib/data";
import { useInView } from "@/hooks/use-in-view";
import { ArrowUpRight } from "@/components/social-icons";

export function TechStack() {
  const { ref, isInView } = useInView();

  return (
    <Section id="stack">
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

        {/* Tools I like */}
        <h3
          className={`mt-12 text-sm font-medium text-text-secondary transition-all duration-700 ease-out ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          Tools I enjoy using
        </h3>
        <div
          className={`mt-4 flex flex-wrap gap-3 transition-all duration-700 ease-out ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "500ms" }}
        >
          {tools.map((tool) => (
            <a
              key={tool.name}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 transition-all duration-200 hover:border-border-hover hover:bg-surface-hover"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={tool.icon}
                alt={tool.name}
                width={16}
                height={16}
                className="h-4 w-4 rounded-sm"
              />
              <span className="text-sm text-text-secondary transition-colors duration-200 group-hover:text-text">
                {tool.name}
              </span>
              <ArrowUpRight className="h-3 w-3 text-text-muted opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:text-accent" />
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}

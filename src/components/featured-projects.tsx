"use client";

import { Section } from "@/components/section";
import { ProjectCard } from "@/components/project-card";
import { featuredProjects } from "@/lib/data";
import { useInView } from "@/hooks/use-in-view";

export function FeaturedProjects() {
  const { ref, isInView } = useInView();

  return (
    <Section id="projects">
      <div ref={ref}>
        <p className="font-mono text-sm uppercase tracking-widest text-accent">
          Projects
        </p>
        <h2 className="mt-4 text-3xl font-bold text-text">What I&apos;m building</h2>

        <div className="mt-10 space-y-6">
          {featuredProjects.map((project, i) => (
            <div
              key={project.name}
              className={`transition-all duration-700 ease-out ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <ProjectCard project={project} variant="featured" />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

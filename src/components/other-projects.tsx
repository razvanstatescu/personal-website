"use client";

import { Section } from "@/components/section";
import { ProjectCard } from "@/components/project-card";
import { otherProjects } from "@/lib/data";
import { useInView } from "@/hooks/use-in-view";

export function OtherProjects() {
  const { ref, isInView } = useInView();

  return (
    <Section id="other-projects" className="pt-0 md:pt-0">
      <div ref={ref}>
        <h3 className="text-xl font-semibold text-text-secondary">
          Other projects
        </h3>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {otherProjects.map((project, i) => (
            <div
              key={project.name}
              className={`transition-all duration-700 ease-out ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <ProjectCard project={project} variant="compact" />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

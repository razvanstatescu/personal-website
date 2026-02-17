import Image from "next/image";
import type { Project } from "@/lib/data";
import { StatusBadge } from "@/components/status-badge";
import { ArrowUpRight } from "@/components/social-icons";

interface ProjectCardProps {
  project: Project;
  variant?: "featured" | "compact";
}

export function ProjectCard({ project, variant = "featured" }: ProjectCardProps) {
  if (variant === "compact") {
    return (
      <article>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group block rounded-xl border border-border bg-surface p-6 transition-all duration-300 hover:border-border-hover hover:bg-surface-hover"
        >
          <div className="flex items-start justify-between">
            <StatusBadge status={project.status} />
            <ArrowUpRight className="h-4 w-4 text-text-muted transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
          </div>
          <h3 className="mt-4 text-xl font-semibold text-text">{project.name}</h3>
          <p className="mt-1 text-sm text-text-secondary">{project.tagline}</p>
          <p className="mt-3 font-mono text-xs text-text-muted">
            {project.category}
          </p>
        </a>
      </article>
    );
  }

  return (
    <article className="group rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:border-border-hover sm:p-8 md:p-10">
      <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        {/* Content */}
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-3">
            <StatusBadge status={project.status} />
            {project.highlight && (
              <span className="inline-flex items-center rounded-full bg-accent-muted px-3 py-1 font-mono text-xs text-accent">
                {project.highlight}
              </span>
            )}
          </div>

          <p className="mt-3 font-mono text-xs text-text-muted">
            {project.category}
          </p>

          <h3 className="mt-3 text-2xl font-bold text-text sm:text-3xl">
            {project.name}
          </h3>
          <p className="mt-2 text-lg text-text-secondary">{project.tagline}</p>

          {project.features && (
            <ul className="mt-5 space-y-2">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-sm text-text-muted"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-border-hover" />
                  {feature}
                </li>
              ))}
            </ul>
          )}

          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors duration-200 hover:text-accent-hover"
          >
            Visit {project.name}
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Project icon */}
        <div className="hidden shrink-0 items-center justify-center rounded-xl border border-border bg-white p-6 md:flex md:h-48 md:w-48 lg:h-56 lg:w-56">
          {project.icon ? (
            <Image
              src={project.icon}
              alt={`${project.name} logo`}
              width={180}
              height={180}
              className={project.iconClassName ?? "h-auto w-32 object-contain lg:w-40"}
            />
          ) : (
            <span className="font-mono text-2xl font-bold text-text-muted/30 lg:text-3xl">
              {project.name.toLowerCase()}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

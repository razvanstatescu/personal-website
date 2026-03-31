"use client";

import { Section } from "@/components/section";
import { useInView } from "@/hooks/use-in-view";

export function Community() {
  const { ref, isInView } = useInView();

  return (
    <Section id="community" className="pb-10 md:pb-16">
      <div
        ref={ref}
        className={`mx-auto max-w-2xl transition-all duration-700 ease-out ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <p className="font-mono text-sm text-accent">
          // community
        </p>
        <h2 className="mt-4 text-3xl font-bold text-text">
          Teaching &amp; mentoring
        </h2>

        <div className="mt-6 space-y-4 text-lg leading-relaxed text-text-secondary">
          <p>
            Beyond building products, I enjoy teaching and growing developer
            communities. I&apos;ve organized and led 10+ developer education
            programs, helping hundreds of builders go from zero to their first
            shipped project.
          </p>
          <p>
            I also participate in hackathons as both a builder and mentor,
            contribute to open-source, and create technical content. Helping
            developers level up is one of the most rewarding parts of this work.
          </p>
        </div>

        <ul className="mt-6 space-y-3">
          {[
            "10+ developer bootcamps and education programs",
            "Hackathon builder and mentor",
            "Open-source contributor and technical content creator",
          ].map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-sm text-text-muted"
            >
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

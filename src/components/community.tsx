"use client";

import { Section } from "@/components/section";
import { useInView } from "@/hooks/use-in-view";

export function Community() {
  const { ref, isInView } = useInView();

  return (
    <Section id="community">
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
            Beyond building products, I&apos;m actively involved in growing the
            Sui developer ecosystem. I run developer bootcamps to help new
            builders get started with Move and the Sui blockchain.
          </p>
          <p>
            I also participate in hackathons — both as a builder and mentor —
            and contribute to open-source projects in the ecosystem. Helping
            others ship their first on-chain project is one of the most
            rewarding parts of this work.
          </p>
        </div>

        <ul className="mt-6 space-y-3">
          {[
            "Sui Developer Bootcamps — onboarding new builders to Move",
            "Hackathon builder & mentor in the Sui ecosystem",
            "Open-source contributor and community advocate",
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

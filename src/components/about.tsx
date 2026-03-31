"use client";

import { Section } from "@/components/section";
import { useInView } from "@/hooks/use-in-view";

const journey = [
  { year: "2017", label: "CS Degree" },
  { year: "2016", label: "Freelancing" },
  { year: "2020", label: "Startup founder" },
  { year: "2021", label: "Web3 studio" },
  { year: "2026", label: "Preplo", active: true },
];

export function About() {
  const { ref, isInView } = useInView();
  const { ref: timelineRef, isInView: timelineInView } = useInView(0.05);

  return (
    <Section id="about">
      <div
        ref={ref}
        className={`mx-auto max-w-2xl transition-all duration-700 ease-out ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <p className="font-mono text-sm text-accent">
          // about
        </p>
        <h2 className="mt-4 text-3xl font-bold text-text">A bit about me</h2>

        <div className="mt-6 space-y-4 text-lg leading-relaxed text-text-secondary">
          <p>
            I&apos;m a product engineer with close to a decade of experience
            shipping software end to end — from architecture to App Store. I
            thrive in small teams and early-stage environments where wearing
            multiple hats is the norm.
          </p>
          <p>
            Most recently I built Preplo, an AI-powered cooking companion —
            solo, end to end: React Native frontend, NestJS backend, AI
            pipeline, App Store launch. It won the RevenueCat Shipyard 2026
            award. Before that, I co-founded a Web3 studio where I shipped
            DeFi protocols, publishing tools, and ran 10+ developer education
            programs.
          </p>
          <p>
            I&apos;m looking for my next role as a founding engineer or in
            developer relations — somewhere I can ship product and help grow a
            developer community. I believe in building in the open, learning
            from real users, and iterating fast.
          </p>
        </div>
      </div>

      {/* Journey */}
      <div
        ref={timelineRef}
        className={`mx-auto mt-12 max-w-2xl transition-all duration-700 ease-out ${
          timelineInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="relative">
          {/* Horizontal line */}
          <div className="absolute top-2.5 left-0 right-0 h-px bg-border" />

          <div className="flex justify-between">
            {journey.map((item, i) => (
              <div
                key={item.year}
                className={`relative flex flex-col items-center transition-all duration-500 ease-out ${
                  timelineInView ? "opacity-100" : "opacity-0"
                }`}
                style={{ transitionDelay: `${i * 100 + 200}ms` }}
              >
                {/* Dot */}
                <div
                  className={`relative z-10 h-5 w-5 rounded-full border-2 ${
                    item.active
                      ? "border-accent bg-accent/20"
                      : "border-border-hover bg-bg"
                  }`}
                />
                <span className="mt-2 font-mono text-xs text-accent">
                  {item.year}
                </span>
                <span
                  className={`mt-0.5 text-xs ${
                    item.active ? "text-text font-medium" : "text-text-muted"
                  }`}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

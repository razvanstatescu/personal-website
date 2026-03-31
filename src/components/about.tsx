"use client";

import { Section } from "@/components/section";
import { useInView } from "@/hooks/use-in-view";

const journey = [
  { year: "2017", title: "CS Degree", desc: "University of Bucharest" },
  { year: "2016", title: "Freelance Dev", desc: "Clients across EU & US" },
  { year: "2020", title: "Co-Founded Brunch", desc: "Website feedback tool" },
  {
    year: "2021",
    title: "Giants Labs",
    desc: "Web3 studio & dev education",
  },
  {
    year: "2026",
    title: "Preplo",
    desc: "AI app, shipped solo",
    active: true,
  },
];

/*
 * Node positions in SVG viewBox coords (0 0 1000 200).
 * These match the exact points on the cubic bezier path.
 * For HTML label overlays: x% = svgX/1000*100, y% = svgY/200*100
 */
const nodes = [
  { svgX: 60, svgY: 100 },
  { svgX: 275, svgY: 40 },
  { svgX: 500, svgY: 100 },
  { svgX: 725, svgY: 40 },
  { svgX: 940, svgY: 100 },
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
        <p className="font-mono text-sm text-accent">// about</p>
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

      {/* Journey — Desktop: curved SVG path, Mobile: vertical list */}
      <div
        ref={timelineRef}
        className={`mx-auto mt-28 max-w-3xl px-4 transition-all duration-700 ease-out ${
          timelineInView
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-6"
        }`}
      >
        {/* Desktop timeline */}
        <div className="hidden md:block">
          <div className="relative" style={{ height: 200 }}>
            {/* Curved SVG path only (stretched to fill width) */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 1000 200"
              preserveAspectRatio="none"
              fill="none"
            >
              <path
                d="M 60 100 C 160 100, 175 40, 275 40 S 400 100, 500 100 S 625 40, 725 40 S 840 100, 940 100"
                stroke="var(--color-border)"
                strokeWidth="1.5"
                vectorEffect="non-scaling-stroke"
                className={`${timelineInView ? "opacity-100" : "opacity-0"}`}
                style={{
                  strokeDasharray: 1200,
                  strokeDashoffset: timelineInView ? 0 : 1200,
                  transition:
                    "stroke-dashoffset 1.8s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease",
                }}
              />
            </svg>

            {/* Nodes + labels (HTML, positioned with matching percentages) */}
            {journey.map((item, i) => {
              const n = nodes[i];
              const isActive = !!item.active;
              const xPct = (n.svgX / 1000) * 100;
              const yPct = (n.svgY / 200) * 100;
              const labelsAbove = n.svgY < 80;

              return (
                <div
                  key={item.year}
                  className={`absolute transition-all ease-out ${
                    timelineInView ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    left: `${xPct}%`,
                    top: `${yPct}%`,
                    transform: "translate(-50%, -50%)",
                    transitionDuration: "600ms",
                    transitionDelay: `${i * 150 + 500}ms`,
                  }}
                >
                  {/* Dot */}
                  <div className="relative flex items-center justify-center">
                    {isActive && (
                      <span className="absolute h-7 w-7 rounded-full bg-accent/15 animate-pulse-dot" />
                    )}
                    <span
                      className={`relative z-10 block rounded-full border-2 ${
                        isActive
                          ? "h-4 w-4 border-accent bg-accent/30"
                          : "h-3 w-3 border-border-hover bg-surface"
                      }`}
                    />
                  </div>

                  {/* Label */}
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 flex flex-col items-center ${
                      labelsAbove ? "bottom-full mb-5" : "top-full mt-5"
                    }`}
                  >
                    <span className="font-mono text-xs text-accent">
                      {item.year}
                    </span>
                    <span
                      className={`mt-0.5 text-sm font-medium whitespace-nowrap ${
                        isActive ? "text-text" : "text-text-secondary"
                      }`}
                    >
                      {item.title}
                    </span>
                    <span className="text-xs text-text-muted whitespace-nowrap">
                      {item.desc}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile timeline — vertical */}
        <div className="block md:hidden">
          <div className="relative pl-8">
            {/* Vertical line */}
            <div
              className="absolute top-2 bottom-2 left-2 w-px bg-border transition-all duration-1000 ease-out origin-top"
              style={{
                transform: timelineInView ? "scaleY(1)" : "scaleY(0)",
              }}
            />

            <div className="space-y-8">
              {journey.map((item, i) => {
                const isActive = !!item.active;
                return (
                  <div
                    key={item.year}
                    className={`relative transition-all duration-500 ease-out ${
                      timelineInView
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-3"
                    }`}
                    style={{ transitionDelay: `${i * 120 + 200}ms` }}
                  >
                    {/* Dot */}
                    <div className="absolute -left-8 top-1 flex items-center justify-center">
                      {isActive && (
                        <span className="absolute h-6 w-6 rounded-full bg-accent/15 animate-pulse-dot" />
                      )}
                      <span
                        className={`relative z-10 block rounded-full border-2 ${
                          isActive
                            ? "h-3.5 w-3.5 border-accent bg-accent/30"
                            : "h-2.5 w-2.5 border-border-hover bg-surface"
                        }`}
                      />
                    </div>

                    <span className="font-mono text-xs text-accent">
                      {item.year}
                    </span>
                    <p
                      className={`text-sm font-medium ${
                        isActive ? "text-text" : "text-text-secondary"
                      }`}
                    >
                      {item.title}
                    </p>
                    <p className="text-xs text-text-muted">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

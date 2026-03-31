"use client";

import { useState } from "react";
import { Section } from "@/components/section";
import { useInView } from "@/hooks/use-in-view";

const journey = [
  {
    year: "2017",
    title: "CS Degree",
    desc: "University of Bucharest",
    detail:
      "Bachelor\u2019s in Mathematics & Computer Science from University of Bucharest. 4x hackathon winner during university.",
  },
  {
    year: "2016",
    title: "Freelance Dev",
    desc: "Clients across EU & US",
    detail:
      "6+ years delivering web & software projects for clients like STOICA.CO, Modex, and JustRocket. Full ownership of scope, timelines, and delivery.",
  },
  {
    year: "2020",
    title: "Co-Founded Brunch",
    desc: "CTO \u2014 website feedback tool",
    detail:
      "Co-founded as CTO \u2014 built the initial platform, then led the technical team. A visual feedback tool where you point at what needs to change, no more long calls or screenshots.",
  },
  {
    year: "2021",
    title: "Giants Labs",
    desc: "Web3 studio \u2014 technical lead",
    detail:
      "Co-founded a Web3 studio as the technical lead \u2014 owned all architecture and engineering decisions across our own products (Inkray, CoinDrip) and client projects. Also ran 10 developer bootcamps, co-organised hackathons, and created open-source tools and technical content.",
  },
  {
    year: "2026",
    title: "Preplo",
    desc: "AI app, shipped solo",
    active: true,
    detail:
      "AI-powered iOS app that extracts recipes from cooking videos. Solo build: React Native, NestJS, AI pipeline. RevenueCat Shipyard 2026 Winner.",
  },
];

/* SVG path and node x-positions in viewBox coords (0 0 1000 200) */
const PATH_D =
  "M 60 100 C 160 100, 175 40, 275 40 S 400 100, 500 100 S 625 40, 725 40 S 840 100, 940 100";
const NODE_X = [60, 275, 500, 725, 940];
const NODE_Y = [100, 40, 100, 40, 100];

export function About() {
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);
  const { ref, isInView } = useInView();
  const { ref: timelineRef, isInView: timelineInView } = useInView(0.05);

  /* The clip rect x extends to the hovered node's x in viewBox coords */
  const clipX = hoveredNode !== null ? NODE_X[hoveredNode] : 0;

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
          <div className="relative overflow-visible" style={{ height: 200 }}>
            {/* Curved SVG — base path + accent clipped path */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 1000 200"
              preserveAspectRatio="none"
              fill="none"
            >
              <defs>
                {/* Clip rect that reveals the accent path up to the hovered node's x */}
                <clipPath id="timeline-clip">
                  <rect
                    x="0"
                    y="0"
                    width={clipX}
                    height="200"
                    style={{
                      transition: "width 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  />
                </clipPath>
              </defs>

              {/* Base path */}
              <path
                d={PATH_D}
                stroke="var(--color-border)"
                strokeWidth="1.5"
                vectorEffect="non-scaling-stroke"
                style={{
                  opacity: timelineInView ? 1 : 0,
                  transition: "opacity 1s ease",
                }}
              />

              {/* Accent path — clipped to reveal only up to hovered node */}
              <path
                d={PATH_D}
                stroke="var(--color-accent)"
                strokeWidth="1.5"
                vectorEffect="non-scaling-stroke"
                clipPath="url(#timeline-clip)"
                style={{
                  opacity: hoveredNode !== null ? 0.5 : 0,
                  transition: "opacity 0.3s ease",
                }}
              />
            </svg>

            {/* Nodes + labels (HTML, positioned with matching percentages) */}
            {journey.map((item, i) => {
              const isActive = !!item.active;
              const isPast =
                hoveredNode !== null && i < hoveredNode;
              const isHovered = hoveredNode === i;
              const xPct = (NODE_X[i] / 1000) * 100;
              const yPct = (NODE_Y[i] / 200) * 100;
              const labelsAbove = NODE_Y[i] < 80;

              return (
                <div
                  key={item.year}
                  className={`group/tip absolute z-10 cursor-pointer transition-all ease-out hover:z-50 ${
                    timelineInView ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    left: `${xPct}%`,
                    top: `${yPct}%`,
                    transform: "translate(-50%, -50%)",
                    transitionDuration: "600ms",
                    transitionDelay: `${i * 150 + 500}ms`,
                  }}
                  onMouseEnter={() => setHoveredNode(i)}
                  onMouseLeave={() => setHoveredNode(null)}
                >
                  {/* Tooltip — always above, high z-index */}
                  <div
                    className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-4 w-64 -translate-x-1/2 opacity-0 scale-95 transition-all duration-200 ease-out group-hover/tip:opacity-100 group-hover/tip:scale-100 group-hover/tip:pointer-events-auto"
                  >
                    {/* Card */}
                    <div className="relative overflow-hidden rounded-lg border border-border/60 bg-surface/95 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
                      {/* Accent glow at top */}
                      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-accent/30 to-transparent" />
                      <div className="px-4 py-3">
                        <span className="font-mono text-[11px] text-accent">
                          {item.year}
                        </span>
                        <p className="mt-0.5 text-sm font-semibold text-text">
                          {item.title}
                        </p>
                        <p className="mt-1.5 text-xs leading-relaxed text-text-muted">
                          {item.detail}
                        </p>
                      </div>
                    </div>
                    {/* Arrow */}
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-2 w-2 rotate-45 border-r border-b border-border/60 bg-surface" />
                  </div>

                  {/* Dot */}
                  <div className="relative flex items-center justify-center">
                    {(isActive || isHovered) && (
                      <span className="absolute h-7 w-7 rounded-full bg-accent/15 animate-pulse-dot" />
                    )}
                    <span
                      className={`relative z-10 block rounded-full border-2 transition-colors duration-300 ${
                        isActive || isHovered
                          ? "h-4 w-4 border-accent bg-accent/30"
                          : isPast
                            ? "h-3 w-3 border-accent/60 bg-accent/15"
                            : "h-3 w-3 border-border-hover bg-surface group-hover/tip:border-accent group-hover/tip:bg-accent/20"
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

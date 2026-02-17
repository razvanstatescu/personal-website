"use client";

import { Section } from "@/components/section";
import { useInView } from "@/hooks/use-in-view";

export function About() {
  const { ref, isInView } = useInView();

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
            I&apos;m a founder and indie hacker who loves building products from
            the ground up. Whether it&apos;s a mobile app, a SaaS tool, or a
            blockchain protocol — I enjoy the entire journey from idea to
            shipped product.
          </p>
          <p>
            My work spans two worlds: Web2 and Web3. On the Web2 side, I build
            mobile apps and SaaS products powered by AI. On the Web3 side,
            I&apos;m deep in the Sui ecosystem, building DeFi protocols, gaming
            platforms, and publishing tools with a team.
          </p>
          <p>
            I believe in shipping fast, learning from real users, and building
            in the open. I&apos;m always looking for interesting problems to
            solve and people to collaborate with.
          </p>
        </div>
      </div>
    </Section>
  );
}

"use client";

import Image from "next/image";
import { socials } from "@/lib/data";
import { XIcon, LinkedInIcon, ChevronDown } from "@/components/social-icons";
import { Typewriter } from "@/components/typewriter";

export function Hero() {
  return (
    <section className="px-6 pt-32 pb-20 md:pt-40 md:pb-32 mx-auto max-w-5xl">
      <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-12 md:gap-16">
        {/* Text */}
        <div className="flex-1">
          <div
            className="animate-fade-up font-mono text-sm"
            style={{ animationDelay: "0ms" }}
          >
            <Typewriter className="text-accent" />
          </div>

          <h1
            className="animate-fade-up mt-4 text-4xl font-bold tracking-tight text-text sm:text-5xl md:text-6xl lg:text-7xl"
            style={{ animationDelay: "100ms" }}
          >
            Razvan Statescu
          </h1>

          <p
            className="animate-fade-up mt-4 text-lg text-text-secondary font-light sm:text-xl md:text-2xl"
            style={{ animationDelay: "200ms" }}
          >
            Building at the intersection of Web2&nbsp;and&nbsp;Web3
          </p>

          <p
            className="animate-fade-up mt-6 max-w-lg text-base text-text-muted leading-relaxed"
            style={{ animationDelay: "300ms" }}
          >
            Founder building in public — shipping AI-powered apps, SaaS
            products, and Web3 protocols.
          </p>

          {/* Socials + CTA */}
          <div
            className="animate-fade-up mt-8 flex flex-wrap items-center gap-3"
            style={{ animationDelay: "400ms" }}
          >
            <a
              href={socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-text-secondary transition-colors duration-200 hover:border-border-hover hover:text-text"
            >
              <XIcon className="h-4 w-4" />
              <span>Twitter</span>
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-text-secondary transition-colors duration-200 hover:border-border-hover hover:text-text"
            >
              <LinkedInIcon className="h-4 w-4" />
              <span>LinkedIn</span>
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-1 px-4 py-2 text-sm text-accent transition-colors duration-200 hover:text-accent-hover"
            >
              See my work
              <ChevronDown className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Photo */}
        <div
          className="animate-fade-up flex-shrink-0"
          style={{ animationDelay: "200ms" }}
        >
          <Image
            src="/headshot.jpg"
            alt="Razvan Statescu"
            width={320}
            height={320}
            priority
            className="h-48 w-48 rounded-2xl border border-border object-cover grayscale transition-all duration-700 hover:grayscale-0 sm:h-60 sm:w-60 md:h-72 md:w-72 lg:h-80 lg:w-80"
          />
        </div>
      </div>
    </section>
  );
}

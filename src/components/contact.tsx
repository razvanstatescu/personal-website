"use client";

import { socials } from "@/lib/data";
import { XIcon, LinkedInIcon } from "@/components/social-icons";
import { useInView } from "@/hooks/use-in-view";

export function Contact() {
  const { ref, isInView } = useInView(0.05);

  return (
    <section id="contact" className="px-6 pt-20 pb-12 md:pt-32 md:pb-16">
      <div
        ref={ref}
        className={`mx-auto max-w-3xl transition-all duration-1000 ease-out ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Card with animated gradient border */}
        <div className="animated-border relative overflow-hidden rounded-2xl">
          {/* Dot grid background */}
          <div
            aria-hidden
            className="dot-grid pointer-events-none absolute inset-0 opacity-30"
          />

          {/* Ambient glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-96"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(245,158,11,0.12) 0%, transparent 70%)",
            }}
          />

          {/* Content */}
          <div className="relative px-8 py-16 text-center sm:px-12 sm:py-20 md:px-16 md:py-24">
            <p className="font-mono text-sm text-accent">// contact</p>

            <h2 className="mt-6 text-4xl font-bold tracking-tight text-text sm:text-5xl md:text-6xl">
              Let&apos;s build something
              <br />
              <span className="text-accent">together</span>
            </h2>

            <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-text-secondary">
              Open to collaboration, advisory roles, and interesting
              conversations about Web2 and Web3.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href={socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-bg transition-all duration-300 hover:bg-accent-hover hover:shadow-[0_0_24px_rgba(245,158,11,0.3)]"
              >
                <XIcon className="h-4 w-4" />
                Reach out on X
              </a>
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full border border-border px-7 py-3.5 text-sm text-text-secondary transition-all duration-300 hover:border-border-hover hover:text-text hover:bg-surface-hover"
              >
                <LinkedInIcon className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mx-auto mt-16 max-w-5xl border-t border-border pt-6">
        <p className="text-center font-mono text-xs text-text-muted">
          &copy; {new Date().getFullYear()} Razvan Statescu
        </p>
      </div>
    </section>
  );
}

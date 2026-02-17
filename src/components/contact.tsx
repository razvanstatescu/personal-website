"use client";

import { socials } from "@/lib/data";
import { XIcon, LinkedInIcon } from "@/components/social-icons";
import { useInView } from "@/hooks/use-in-view";

export function Contact() {
  const { ref, isInView } = useInView();

  return (
    <section id="contact" className="px-6 pt-20 pb-12 md:pt-32 md:pb-16">
      <div
        ref={ref}
        className={`mx-auto max-w-5xl text-center transition-all duration-700 ease-out ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="text-3xl font-bold text-text sm:text-4xl">
          Let&apos;s build something together
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-lg text-text-secondary">
          Open to collaboration, advisory roles, and interesting conversations
          about Web2 and Web3.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-bg transition-colors duration-200 hover:bg-accent-hover"
          >
            <XIcon className="h-4 w-4" />
            Reach out on X
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm text-text-secondary transition-colors duration-200 hover:border-border-hover hover:text-text"
          >
            <LinkedInIcon className="h-4 w-4" />
            LinkedIn
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="mx-auto mt-20 max-w-5xl border-t border-border pt-6">
        <p className="text-center font-mono text-xs text-text-muted">
          &copy; {new Date().getFullYear()} Razvan Statescu
        </p>
      </div>
    </section>
  );
}

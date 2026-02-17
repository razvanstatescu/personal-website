"use client";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  return (
    <nav aria-label="Main navigation" className="fixed top-0 left-0 right-0 z-40 hidden md:block border-b border-border bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <a
          href="#"
          className="font-mono text-sm font-semibold text-text tracking-wider"
        >
          RS
        </a>
        <div className="flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-text-muted transition-colors duration-200 hover:text-text"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

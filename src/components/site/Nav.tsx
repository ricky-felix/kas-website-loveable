import { useEffect, useState } from "react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#process", label: "Process" },
  { href: "#testimonials", label: "Voices" },
  { href: "#contact", label: "Contact" },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 md:px-10 py-5">
        <a href="#top" className="flex items-center gap-3 group">
          <span className="relative grid place-items-center w-9 h-9 outline-cobalt rounded-sm">
            <span className="absolute inset-1 outline-rust rounded-[2px]" />
            <span className="block w-1.5 h-1.5 bg-foreground rounded-full" />
          </span>
          <span className="display-serif text-xl tracking-tight">
            STRATA<span className="text-cobalt">.</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 outline-ink rounded-sm text-sm font-medium hover:bg-foreground hover:text-background transition-all duration-300"
        >
          Request Survey
          <span aria-hidden>→</span>
        </a>

        <a
          href="#contact"
          className="md:hidden inline-flex items-center px-3 py-2 outline-ink rounded-sm text-xs font-medium"
        >
          Survey →
        </a>
      </nav>
    </header>
  );
};

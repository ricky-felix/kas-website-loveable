const items = [
  "PU Liquid Membrane",
  "SBS Bituminous Sheet",
  "Crystalline Concrete",
  "Polyurea Spray",
  "EPDM Roofing",
  "Injection Grouting",
  "Cementitious Coating",
  "Drain Reform",
];

export const Marquee = () => {
  return (
    <section className="border-y border-border bg-background py-5 overflow-hidden">
      <div className="flex gap-12 whitespace-nowrap animate-marquee">
        {[...items, ...items].map((it, i) => (
          <span key={i} className="flex items-center gap-12 text-sm text-muted-foreground">
            <span className="display-serif italic text-foreground/80">{it}</span>
            <span aria-hidden className="text-cobalt">◆</span>
          </span>
        ))}
      </div>
    </section>
  );
};

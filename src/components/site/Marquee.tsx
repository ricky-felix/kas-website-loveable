const items = [
  "Membran PU Cair",
  "Lembar Bitumen SBS",
  "Beton Kristalin",
  "Semprot Polyurea",
  "Atap EPDM",
  "Injeksi Grouting",
  "Pelapis Sementius",
  "Pembenahan Drainase",
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

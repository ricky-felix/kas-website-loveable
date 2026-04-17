const quotes = [
  {
    q: "Tiga musim hujan berlalu, basement tetap kering total. Spesifikasi KAS adalah yang paling teliti yang kami terima di Medan.",
    a: "Ir. Andika Wijaya",
    r: "Arsitek Proyek, Polonia Heights",
    c: "outline-cobalt",
    m: "text-cobalt",
  },
  {
    q: "Mereka menangani reservoir kami selayaknya proyek arsitektur, bukan sekadar tambalan. Detail sambungan konstruksinya patut dicontoh.",
    a: "Hendra Tanuwijaya",
    r: "Direktur Fasilitas, PT Sumatra Pangan",
    c: "outline-rust",
    m: "text-rust",
  },
  {
    q: "Flood test lulus pada percobaan pertama. Kami kini mempercayakan KAS untuk empat hunian di Cemara Asri dan Setiabudi.",
    a: "Mira Halim",
    r: "Principal, Halim Studio Arsitektur",
    c: "outline-ochre",
    m: "text-ochre",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-card border-y border-border">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="rule-label mb-4">§ 05 / Suara klien</p>
            <h2 className="display-serif text-5xl md:text-6xl leading-[0.95]">
              Arsitek, pemilik,
              <br />
              <span className="italic">tim fasilitas.</span>
            </h2>
          </div>
          <p className="rule-label max-w-xs">Korespondensi terpilih — verbatim, terarsip.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {quotes.map((q, i) => (
            <figure
              key={i}
              className={`p-8 md:p-10 rounded-sm bg-background ${q.c} flex flex-col`}
            >
              <span className={`display-serif text-6xl leading-none mb-6 ${q.m}`}>“</span>
              <blockquote className="display-serif text-xl md:text-2xl leading-snug flex-grow">
                {q.q}
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-border">
                <div className="font-medium">{q.a}</div>
                <div className="text-sm text-muted-foreground">{q.r}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

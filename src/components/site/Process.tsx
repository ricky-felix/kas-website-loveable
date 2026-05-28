const steps = [
  { n: "I", t: "Survei", d: "Inspeksi langsung di Medan dan sekitar Sumut. Pengujian substrat, pemetaan kelembapan, dokumentasi foto.", c: "border-cobalt", tx: "text-cobalt" },
  { n: "II", t: "Spesifikasi", d: "Spesifikasi tertulis sesuai paparan cuaca, lalu lintas, dan arsitektur. Lembar data material, gambar kerja, jadwal.", c: "border-rust", tx: "text-rust" },
  { n: "III", t: "Pemasangan", d: "Aplikator bersertifikat. Catatan QC harian, uji adhesi primer, pemeriksaan ketebalan film kering, flood test sebelum serah terima.", c: "border-ochre", tx: "text-ochre" },
  { n: "IV", t: "Dokumentasi", d: "Rekam jejak proyek diserahkan kepada klien: foto berjangka, lembar data sistem, dan catatan QC sebagai referensi permanen.", c: "border-moss", tx: "text-moss" },
];

export const Process = () => {
  return (
    <section id="process" className="py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="mb-16 max-w-3xl">
          <p className="rule-label mb-4">§ 04 / Metode</p>
          <h2 className="display-serif text-5xl md:text-6xl leading-[0.95]">
            Empat tahap,
            <br />
            <span className="italic text-muted-foreground">satu segel berkelanjutan.</span>
          </h2>
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <li key={s.n} className={`relative pl-6 border-l-2 ${s.c} py-2`}>
              <div className={`display-serif text-5xl md:text-6xl mb-6 ${s.tx}`}>{s.n}</div>
              <h3 className="display-serif text-2xl mb-3">{s.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

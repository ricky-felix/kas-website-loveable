const services = [
  {
    no: "01",
    title: "Sistem Atap & Teras",
    desc: "Membran PU cair dan SBS torch-on untuk atap datar, teras, dan podium. Dirancang untuk curah hujan Medan 2.300 mm per tahun.",
    outline: "outline-cobalt",
    text: "text-cobalt",
  },
  {
    no: "02",
    title: "Basement & Substruktur",
    desc: "Aditif kristalin, lembar bentonit, dan injeksi sisi tekanan untuk dinding bawah tanah, lift pit, dan tangki air.",
    outline: "outline-rust",
    text: "text-rust",
  },
  {
    no: "03",
    title: "Kolam & Area Basah",
    desc: "Sistem sementius dan poliuretan untuk kolam renang, water feature, kamar mandi, dan zona basah dapur.",
    outline: "outline-ochre",
    text: "text-ochre",
  },
  {
    no: "04",
    title: "Fasad & Sambungan Ekspansi",
    desc: "Pelapis elastomerik, sealant, dan detail expansion joint agar curtain wall dan fasad beton tetap kedap cuaca.",
    outline: "outline-moss",
    text: "text-moss",
  },
  {
    no: "05",
    title: "Diagnosa & Perbaikan Bocor",
    desc: "Survei termografi dan tracer untuk menemukan jalur rembesan, dilanjutkan injeksi terarah atau pemasangan ulang membran.",
    outline: "outline-cobalt",
    text: "text-cobalt",
  },
  {
    no: "06",
    title: "Industri & Bangunan Cagar",
    desc: "Reservoir, lantai pabrik, dan pasangan bata bersejarah — spesifikasi khusus dengan garansi tertulis 10 tahun.",
    outline: "outline-rust",
    text: "text-rust",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-8 mb-16">
          <div className="col-span-12 md:col-span-4">
            <p className="rule-label mb-4">§ 02 / Praktik</p>
            <h2 className="display-serif text-5xl md:text-6xl leading-[0.95]">
              Enam disiplin.
              <br />
              <span className="italic text-muted-foreground">Satu segel.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-7 md:col-start-6 self-end">
            <p className="text-lg text-muted-foreground max-w-[55ch]">
              Setiap proyek diawali dengan survei, spesifikasi tertulis, dan pemilihan material
              yang sesuai dengan substrat, paparan cuaca, serta tujuan klien.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border outline-ink rounded-sm overflow-hidden">
          {services.map((s) => (
            <article
              key={s.no}
              className="group relative bg-background p-8 md:p-10 transition-colors duration-500 hover:bg-card"
            >
              <div className="flex items-baseline justify-between mb-8">
                <span className={`display-serif text-2xl ${s.text}`}>{s.no}</span>
                <span
                  aria-hidden
                  className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-500 text-foreground"
                >
                  →
                </span>
              </div>
              <h3 className="display-serif text-2xl md:text-3xl mb-4 leading-tight">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-[15px]">{s.desc}</p>

              <div
                className={`absolute left-0 right-0 bottom-0 h-px scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 bg-current ${s.text}`}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

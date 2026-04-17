const services = [
	{
		no: "01",
		title: "Water Proofing",
		desc: "Sistem membran PU cair dan SBS torch-on untuk atap datar, teras, dan podium. Dirancang tahan terhadap curah hujan tinggi dan perubahan suhu ekstrem.",
		outline: "outline-cobalt",
		text: "text-cobalt",
	},
	{
		no: "02",
		title: "Floor Hardener",
		desc: "Aplikasi agregat metalik atau kuarsa pada beton segar untuk lantai industri, gudang, dan area parkir. Meningkatkan kekerasan permukaan dan ketahanan terhadap abrasi beban berat.",
		outline: "outline-rust",
		text: "text-rust",
	},
	{
		no: "03",
		title: "Epoxy Flooring",
		desc: "Sistem pelapisan epoxy dan poliuretan untuk lantai pabrik, laboratorium, rumah sakit, dan fasilitas produksi. Tahan kimia, mudah dibersihkan, dan tahan lama.",
		outline: "outline-ochre",
		text: "text-ochre",
	},
	{
		no: "04",
		title: "Strengthening",
		desc: "Perkuatan struktural menggunakan carbon fiber wrap, FRP, dan steel plate bonding untuk balok, kolom, dan pelat yang membutuhkan peningkatan kapasitas beban.",
		outline: "outline-moss",
		text: "text-moss",
	},
	{
		no: "05",
		title: "Concrete Repair",
		desc: "Perbaikan beton rusak akibat korosi, retak, atau spalling menggunakan mortar polimer dan patch repair. Mengembalikan integritas struktural dan mencegah kerusakan lanjutan.",
		outline: "outline-cobalt",
		text: "text-cobalt",
	},
	{
		no: "06",
		title: "Injection",
		desc: "Injeksi retakan beton dan pasangan bata dengan material epoxy atau poliuretan untuk menyegel kebocoran aktif dan memulihkan kekuatan struktural secara tepat sasaran.",
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

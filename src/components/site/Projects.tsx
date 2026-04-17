import rooftop from "@/assets/project-rooftop.jpg";
import basement from "@/assets/project-basement.jpg";
import pool from "@/assets/project-pool.jpg";

const projects = [
  {
    img: rooftop,
    title: "Hunian Cemara Asri",
    type: "Membran Atap",
    year: "2024",
    area: "640 m²",
    outline: "outline-cobalt",
    label: "text-cobalt",
  },
  {
    img: basement,
    title: "Substruktur Sun Plaza",
    type: "Injeksi Basement",
    year: "2023",
    area: "2.100 m²",
    outline: "outline-rust",
    label: "text-rust",
  },
  {
    img: pool,
    title: "Kolam Villa Polonia",
    type: "Kolam & Area Basah",
    year: "2024",
    area: "180 m²",
    outline: "outline-ochre",
    label: "text-ochre",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 md:py-32 bg-card">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div>
            <p className="rule-label mb-4">§ 03 / Karya pilihan</p>
            <h2 className="display-serif text-5xl md:text-6xl leading-[0.95]">
              Folio bangunan kering.
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-medium border-b border-foreground pb-1 hover:gap-3 transition-all"
          >
            Arsip lengkap atas permintaan <span aria-hidden>→</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {projects.map((p, i) => (
            <article key={p.title} className="group">
              <div className={`relative aspect-[4/5] overflow-hidden rounded-sm ${p.outline}`}>
                <img
                  src={p.img}
                  alt={`${p.title} — proyek ${p.type} di Medan`}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                />
                <div className="absolute left-3 top-3 px-2.5 py-1 bg-background/90 backdrop-blur rounded-sm">
                  <span className={`rule-label ${p.label}`}>№ 0{i + 1}</span>
                </div>
              </div>
              <div className="mt-5 flex items-baseline justify-between gap-4">
                <h3 className="display-serif text-2xl">{p.title}</h3>
                <span className="rule-label whitespace-nowrap">{p.year}</span>
              </div>
              <div className="mt-2 flex items-center justify-between text-sm text-muted-foreground">
                <span>{p.type}</span>
                <span>{p.area}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

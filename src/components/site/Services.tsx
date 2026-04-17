const services = [
  {
    no: "01",
    title: "Roof & Terrace Systems",
    desc: "Liquid PU and SBS torch-on membranes for flat roofs, terraces, and podium decks. Designed for Medan's 2,300 mm of annual rainfall.",
    outline: "outline-cobalt",
    text: "text-cobalt",
  },
  {
    no: "02",
    title: "Basement & Substructure",
    desc: "Crystalline admixtures, bentonite sheets, and pressure-side injection for underground walls, lift pits, and water tanks.",
    outline: "outline-rust",
    text: "text-rust",
  },
  {
    no: "03",
    title: "Pools & Wet Areas",
    desc: "Cementitious and polyurethane systems for swimming pools, water features, bathrooms, and kitchen wet zones.",
    outline: "outline-ochre",
    text: "text-ochre",
  },
  {
    no: "04",
    title: "Facade & Expansion Joints",
    desc: "Elastomeric coatings, sealants, and expansion joint detailing to keep curtain walls and concrete facades weather-tight.",
    outline: "outline-moss",
    text: "text-moss",
  },
  {
    no: "05",
    title: "Leak Diagnosis & Repair",
    desc: "Thermographic and tracer surveys to locate ingress paths, followed by targeted injection or membrane reinstatement.",
    outline: "outline-cobalt",
    text: "text-cobalt",
  },
  {
    no: "06",
    title: "Industrial & Heritage",
    desc: "Reservoirs, factory floors, and historic masonry — bespoke specifications backed by 10-year written guarantees.",
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
            <p className="rule-label mb-4">§ 02 / Practice</p>
            <h2 className="display-serif text-5xl md:text-6xl leading-[0.95]">
              Six disciplines.
              <br />
              <span className="italic text-muted-foreground">One seal.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-7 md:col-start-6 self-end">
            <p className="text-lg text-muted-foreground max-w-[55ch]">
              Every project begins with a survey, a written specification, and a material
              choice matched to the substrate, the exposure, and the client's intent.
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

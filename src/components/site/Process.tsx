const steps = [
  { n: "I", t: "Survey", d: "On-site inspection across Medan and greater Sumut. Substrate testing, moisture mapping, photographic record.", c: "border-cobalt", tx: "text-cobalt" },
  { n: "II", t: "Specify", d: "Written specification matched to exposure, traffic, and architecture. Material data sheets, shop drawings, schedule.", c: "border-rust", tx: "text-rust" },
  { n: "III", t: "Install", d: "Certified applicators. Daily QC log, primer adhesion pulls, dry-film thickness checks, flood test prior to handover.", c: "border-ochre", tx: "text-ochre" },
  { n: "IV", t: "Guarantee", d: "10-year written warranty on systems. Annual inspections, photographic dossier, response within 24 hours for any callback.", c: "border-moss", tx: "text-moss" },
];

export const Process = () => {
  return (
    <section id="process" className="py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="mb-16 max-w-3xl">
          <p className="rule-label mb-4">§ 04 / Method</p>
          <h2 className="display-serif text-5xl md:text-6xl leading-[0.95]">
            Four movements,
            <br />
            <span className="italic text-muted-foreground">one continuous seal.</span>
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

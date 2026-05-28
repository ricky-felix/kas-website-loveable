import rooftop from "@/assets/project-rooftop.jpg";
import basement from "@/assets/project-basement.jpg";
import pool from "@/assets/project-pool.jpg";

import Picture1 from "@/assets/Picture-1.jpeg";
import Picture2 from "@/assets/Picture-2.jpeg";
import Picture3 from "@/assets/Picture-3.jpeg";

const projects = [
	{
		img: Picture1,
		title: "Concrete Repair",
		type: "Medan, Sumatera Utara",
		outline: "outline-cobalt",
		label: "text-cobalt",
	},
	{
		img: Picture2,
		title: "Epoxy Floor",
		type: "Medan, Sumatera Utara",
		outline: "outline-rust",
		label: "text-rust",
	},
	// {
	// 	img: Picture3,
	// 	title: "Epoxy Floor",
	// 	type: "Brebes, Jawa Tengah",
	// 	outline: "outline-ochre",
	// 	label: "text-ochre",
	// },
	// {
	// 	img: rooftop,
	// 	title: "Hunian Cemara Asri",
	// 	type: "Membran Atap",
	// 	outline: "outline-cobalt",
	// 	label: "text-cobalt",
	// },
	// {
	// 	img: basement,
	// 	title: "Substruktur Sun Plaza",
	// 	type: "Injeksi Basement",
	// 	outline: "outline-rust",
	// 	label: "text-rust",
	// },
	// {
	// 	img: pool,
	// 	title: "Kolam Villa Polonia",
	// 	type: "Kolam & Area Basah",
	// 	outline: "outline-ochre",
	// 	label: "text-ochre",
	// },
	// {
	// 	img: rooftop,
	// 	title: "Hunian Cemara Asri",
	// 	type: "Membran Atap",
	// 	outline: "outline-cobalt",
	// 	label: "text-cobalt",
	// },
	// {
	// 	img: basement,
	// 	title: "Substruktur Sun Plaza",
	// 	type: "Injeksi Basement",
	// 	outline: "outline-rust",
	// 	label: "text-rust",
	// },
	// {
	// 	img: pool,
	// 	title: "Kolam Villa Polonia",
	// 	type: "Kolam & Area Basah",
	// 	outline: "outline-ochre",
	// 	label: "text-ochre",
	// },
];

export const Projects = () => {
	return (
		<section id="projects" className="py-24 md:py-32 bg-card">
			<div className="mx-auto max-w-[1400px] px-6 md:px-10">
				<div className="flex flex-wrap items-end justify-between gap-6 mb-14">
					<div>
						<p className="rule-label mb-4">§ 03 / Karya pilihan</p>
						<h2 className="display-serif text-5xl md:text-6xl leading-[0.95]">
							Proyek yang dipilih.
						</h2>
					</div>
					<a
						href="/company-profile.pdf"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 text-sm font-medium border-b border-foreground pb-1 hover:gap-3 transition-all"
					>
						Download company profile <span aria-hidden>→</span>
					</a>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
					{projects.map((p, i) => (
						<article key={i} className="group">
							<div
								className={`relative aspect-[4/5] overflow-hidden rounded-sm ${p.outline}`}
							>
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
							</div>
							<div className="mt-2 flex items-center justify-between text-sm text-muted-foreground">
								<span>{p.type}</span>
							</div>
						</article>
					))}

					{/* Placeholder — more photos coming */}
					<article>
						<div className="relative aspect-[4/5] rounded-sm border border-dashed border-border flex flex-col items-center justify-center gap-4">
							<svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-muted-foreground/30">
								<rect x="3" y="3" width="26" height="26" rx="2" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3"/>
								<circle cx="12" cy="13" r="2.5" fill="currentColor"/>
								<path d="M3 21l6-6 5 5 4-4 9 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
							</svg>
							<p className="rule-label text-muted-foreground/50 text-center px-6">Foto & proyek terbaru<br/>segera hadir</p>
						</div>
					</article>
				</div>
			</div>
		</section>
	);
};

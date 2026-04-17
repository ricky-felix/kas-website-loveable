import heroImg from "@/assets/hero-concrete-water.jpg";

export const Hero = () => {
	return (
		<section
			id="top"
			className="relative pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden"
		>
			<div
				className="absolute inset-0 grid-paper opacity-40 pointer-events-none"
				aria-hidden
			/>

			<div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
				{/* Top meta row */}
				<div className="flex flex-wrap items-center justify-between gap-4 mb-12 md:mb-20">
					<div className="flex items-center gap-3">
						<span className="block w-2 h-2 rounded-full bg-[hsl(var(--accent-cobalt))] animate-pulse" />
						<span className="rule-label">
							Medan · Sumatera Utara · Indonesia
						</span>
					</div>
					<span className="rule-label">Berdiri Sejak Tahun 2000</span>
				</div>

				<div className="grid grid-cols-12 gap-6 md:gap-10 items-end">
					{/* Headline */}
					<div className="col-span-12 lg:col-span-7">
						<p className="rule-label mb-6">
							Indeks 01 / Perusahaan Waterproofing
						</p>
						<h1 className="display-serif text-[14vw] md:text-[8.5vw] lg:text-[7rem] xl:text-[8.5rem] leading-[0.9] tracking-tighter">
							Dibangun
							<br />
							menahan
							<br />
							<span className="italic text-cobalt">musim hujan.</span>
						</h1>
						<div className="mt-8 h-px w-32 bg-foreground origin-left animate-draw-line" />
					</div>

					{/* Side column */}
					<div className="col-span-12 lg:col-span-5 lg:pl-8">
						<p className="text-base md:text-lg text-muted-foreground max-w-[40ch] leading-relaxed">
							<span className="text-foreground font-medium">
								CV Karya Agung Sejati
							</span>{" "}
							adalah perusahaan waterproofing yang berbasis di Medan, bekerja di
							antara perusahaan Indonesia lainnya. Membran, pelapis, injeksi —
							dispesifikasi, dipasang, dijamin.
						</p>

						<div className="mt-8 flex flex-wrap gap-3">
							<a
								href="/company-profile.pdf"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 px-6 py-3.5 bg-foreground text-background rounded-sm text-sm font-medium hover:bg-[hsl(var(--accent-cobalt))] transition-colors duration-500"
							>
								Download company profile
								<span aria-hidden>→</span>
							</a>
							<a
								href="https://wa.me/62811617551"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 px-6 py-3.5 outline-ink rounded-sm text-sm font-medium hover:bg-foreground hover:text-background transition-all duration-300"
							>
								Kontak WhatsApp kami
							</a>
						</div>

						<dl className="mt-12 grid grid-cols-3 gap-4">
							{[
								{ k: "16", l: "tahun", c: "outline-cobalt" },
								{ k: "500+", l: "proyek", c: "outline-rust" },
								{ k: "20+", l: "anggota", c: "outline-ochre" },
							].map((s) => (
								<div key={s.l} className={`p-4 rounded-sm ${s.c}`}>
									<dt className="display-serif text-3xl md:text-4xl">{s.k}</dt>
									<dd className="rule-label mt-1">{s.l}</dd>
								</div>
							))}
						</dl>
					</div>
				</div>

				{/* Hero image — architectural plate */}
				<figure className="relative mt-16 md:mt-24">
					<div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-sm outline-ink">
						<img
							src={heroImg}
							alt="Air mengalir di dinding beton arsitektural, ilustrasi performa waterproofing"
							width={1280}
							height={720}
							className="w-full h-full object-cover grayscale-[0.15]"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
						<div className="absolute left-4 top-4 md:left-6 md:top-6 px-3 py-1.5 bg-background/90 backdrop-blur outline-cobalt rounded-sm">
							<span className="rule-label">Plat 001 — Uji aliran air</span>
						</div>
						<div className="absolute right-4 bottom-4 md:right-6 md:bottom-6 px-3 py-1.5 bg-background/90 backdrop-blur outline-rust rounded-sm">
							<span className="rule-label">Medan, Indonesia</span>
						</div>
					</div>
				</figure>
			</div>
		</section>
	);
};

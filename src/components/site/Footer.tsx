export const Footer = () => {
	return (
		<footer className="border-t border-border bg-background">
			<div className="mx-auto max-w-[1400px] px-6 md:px-10 py-16">
				<div className="grid grid-cols-12 gap-8">
					<div className="col-span-12 md:col-span-5">
						<div className="flex items-center gap-3 mb-6">
							<span className="relative grid place-items-center w-9 h-9 outline-cobalt rounded-sm">
								<span className="absolute inset-1 outline-rust rounded-[2px]" />
								<span className="block w-1.5 h-1.5 bg-foreground rounded-full" />
							</span>
							<span className="flex flex-col leading-none">
								<span className="display-serif text-xl">
									KAS<span className="text-cobalt">.</span>
								</span>
								<span className="text-[10px] tracking-[0.18em] uppercase text-muted-foreground mt-1">
									CV Karya Agung Sejati
								</span>
							</span>
						</div>
						<p className="display-serif text-3xl md:text-4xl leading-tight max-w-md">
							Building with Waterproofing Excellence to every homes
						</p>
					</div>

					<div className="col-span-12 md:col-span-2 md:col-start-8">
						<p className="rule-label mb-4">Navigasi</p>
						<ul className="space-y-2 text-sm">
							<li>
								<a href="#top" className="hover:text-cobalt transition-colors">
									Home
								</a>
							</li>
							<li>
								<a
									href="#services"
									className="hover:text-cobalt transition-colors"
								>
									Layanan
								</a>
							</li>
							<li>
								<a
									href="#projects"
									className="hover:text-cobalt transition-colors"
								>
									Proyek
								</a>
							</li>
							<li>
								<a
									href="#process"
									className="hover:text-cobalt transition-colors"
								>
									Proses
								</a>
							</li>
							<li>
								<a
									href="#why-us"
									className="hover:text-cobalt transition-colors"
								>
									Keunggulan
								</a>
							</li>
							<li>
								<a
									href="#contact"
									className="hover:text-cobalt transition-colors"
								>
									Kontak
								</a>
							</li>
						</ul>
					</div>

					<div className="col-span-12 md:col-span-3">
						<p className="rule-label mb-4">Temui kami</p>
						<address className="not-italic text-sm leading-relaxed text-muted-foreground">
							Jl. William Iskandar Muda (Pancing)
							<br />
							Blok E 12A
							<br />
							Medan 20223, Sumatera Utara
							<br />
							<br />
							<p className="rule-label mb-4">Hubungi kami</p>
							Telp: +62 81 161 7551
							<br />
							Email: karyaagungsejati2000@gmail.com
						</address>
					</div>
				</div>

				<div className="mt-16 pt-6 border-t border-border flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
					<span>© {new Date().getFullYear()} CV Karya Agung Sejati</span>
					<div className="flex items-center gap-2">
						<span className="block w-1.5 h-1.5 rounded-full bg-[hsl(var(--accent-cobalt))]" />
						<span className="block w-1.5 h-1.5 rounded-full bg-[hsl(var(--accent-rust))]" />
						<span className="block w-1.5 h-1.5 rounded-full bg-[hsl(var(--accent-ochre))]" />
						<span className="block w-1.5 h-1.5 rounded-full bg-[hsl(var(--accent-moss))]" />
						<span className="ml-3">Berdiri Sejak Tahun 2000</span>
					</div>
				</div>
			</div>
		</footer>
	);
};

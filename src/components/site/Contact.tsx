const WA_NUMBER = "62811617551";

const WA_MESSAGE = encodeURIComponent(
	[
		"Halo KAS, saya ingin berkonsultasi soal bangunan saya.",
		"",
		"_Dikirim melalui website KAS - www.karyaagungsejati.com_",
	].join("\n"),
);

export const Contact = () => {
	return (
		<section id="contact" className="py-24 md:py-32">
			<div className="mx-auto max-w-[1400px] px-6 md:px-10">
				<div className="grid-paper rounded-sm outline-ink p-8 md:p-14 lg:p-20">
					<p className="rule-label text-cobalt mb-7 md:mb-10">
						§ 06 / Korespondensi
					</p>

					<div className="flex flex-wrap items-end justify-between gap-8 md:gap-12">
						<h2 className="display-serif text-5xl md:text-6xl lg:text-7xl leading-[0.95]">
							Mari bicara soal
							<br />
							bangunan <span className="italic text-cobalt">Anda</span>.
						</h2>

						<a
							href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 px-7 py-3.5 bg-foreground text-background rounded-sm text-sm font-medium hover:bg-[hsl(var(--accent-cobalt))] transition-colors duration-500"
						>
							Chat via WhatsApp <span aria-hidden>→</span>
						</a>
					</div>

					<dl className="mt-14 md:mt-16 pt-6 border-t border-border grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-8 text-sm">
						<div>
							<dt className="rule-label mb-1.5">Telepon</dt>
							<dd>+62 81 161 7551</dd>
						</div>
						<div>
							<dt className="rule-label mb-1.5">Email</dt>
							<dd className="break-words">karyaagungsejati2000@gmail.com</dd>
						</div>
						<div>
							<dt className="rule-label mb-1.5">Studio</dt>
							<dd>
								Medan 20223
								<br />
								Sumatera Utara
							</dd>
						</div>
						<div>
							<dt className="rule-label mb-1.5">Jam kerja</dt>
							<dd>
								Sen — Sab
								<br />
								08.00 — 17.00 WIB
							</dd>
						</div>
					</dl>
				</div>
			</div>
		</section>
	);
};

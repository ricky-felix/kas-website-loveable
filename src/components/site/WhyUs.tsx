import whyUsImg from "@/assets/hero-concrete-water.jpg";
import whyUsImg2 from "@/assets/project-rooftop.jpg";
// import homebase from "@/components/site/Homebase";'

const reasons = [
	{
		no: "01",
		title: "Berpengalaman Sejak 2000",
		desc: "Lebih dari 26 tahun mengerjakan proyek waterproofing di Indonesia. Rekam jejak yang solid — bukan sekadar angka, melainkan kepercayaan yang dibangun satu proyek per waktu.",
		outline: "outline-cobalt",
		text: "text-cobalt",
		border: "border-cobalt",
	},
	{
		no: "02",
		title: "Material Berstandar Internasional",
		desc: "Kami hanya menggunakan produk dari merek teruji secara global yang telah lulus uji substrat lokal, paparan UV, dan siklus cuaca tropis.",
		outline: "outline-rust",
		text: "text-rust",
		border: "border-rust",
	},
	{
		no: "03",
		title: "Tim Aplikator Bersertifikat",
		desc: "Setiap teknisi terlatih langsung oleh prinsipal material. Pengerjaan di lapangan dikontrol ketat dengan QC harian dan dokumentasi foto.",
		outline: "outline-ochre",
		text: "text-ochre",
		border: "border-ochre",
	},
	{
		no: "04",
		title: "Kontak yang Responsif",
		desc: "Tim layanan kami siap merespons saat jam kerja untuk setiap permintaan inspeksi atau keluhan pasca-pengerjaan. Hubungan jangka panjang dengan klien adalah prioritas kami.",
		outline: "outline-moss",
		text: "text-moss",
		border: "border-moss",
	},
	{
		no: "05",
		title: "Survei & Spesifikasi Gratis",
		desc: "Setiap klien mendapatkan inspeksi lapangan langsung tanpa biaya tambahan, lengkap dengan spesifikasi tertulis dan lembar data material sebelum kontrak berjalan.",
		outline: "outline-cobalt",
		text: "text-cobalt",
		border: "border-cobalt",
	},
	{
		no: "06",
		title: "Bermarkas di Sumatera Utara, Berpengalaman Melampaui Batas",
		desc: "Berakar di Medan, kami telah mengerjakan proyek di berbagai wilayah Sumatera — dari kawasan industri Belawan hingga residensial Berastagi — dan terus berkembang ke luar pulau.",
		outline: "outline-rust",
		text: "text-rust",
		border: "border-rust",
	},
];

export const WhyUs = () => {
	const [featured, ...rest] = reasons;

	return (
		<section id="why-us" className="py-24 md:py-32 bg-card">
			<div className="mx-auto max-w-[1400px] px-6 md:px-10">
				{/* Header */}
				<div className="grid grid-cols-12 gap-8 mb-16">
					<div className="col-span-12 md:col-span-4">
						<p className="rule-label mb-4">§ 05 / Keunggulan</p>
						<h2 className="display-serif text-5xl md:text-6xl leading-[0.95]">
							Enam alasan.
							<br />
							<span className="italic text-muted-foreground">
								Satu pilihan.
							</span>
						</h2>
					</div>
					<div className="col-span-12 md:col-span-7 md:col-start-6 self-end">
						<p className="text-lg text-muted-foreground max-w-[55ch]">
							Memilih mitra waterproofing berarti memilih siapa yang bertanggung
							jawab atas bangunan Anda selama puluhan tahun. Inilah mengapa
							klien kami kembali.
						</p>
					</div>
				</div>

				{/* Asymmetric grid: large featured card + 2×2 right + full-width bottom */}
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-border outline-ink rounded-sm overflow-hidden">
					{/* Featured — spans 2 rows on lg */}
					<article className="group relative bg-background p-8 md:p-10 lg:col-span-5 lg:row-span-2 flex flex-col justify-between transition-colors duration-500 hover:bg-background/60 min-h-[320px]">
						<div>
							<div className="flex items-baseline justify-between mb-8">
								<span className={`display-serif text-2xl ${featured.text}`}>
									{featured.no}
								</span>
							</div>
							<h3 className="display-serif text-3xl md:text-4xl mb-5 leading-tight">
								{featured.title}
							</h3>
							<p className="text-muted-foreground leading-relaxed">
								{featured.desc}
							</p>
						</div>

						<div className="my-8 rounded-sm overflow-hidden flex-shrink-0">
							<img
								src={whyUsImg}
								alt="Pengerjaan waterproofing oleh tim KAS"
								className="w-full aspect-[4/3] object-cover grayscale-[0.1]"
							/>
						</div>

						<div
							className={`absolute left-0 right-0 bottom-0 h-px scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 bg-current ${featured.text}`}
						/>
					</article>

					{/* 2×2 right cards */}
					{rest.slice(0, 4).map((r) => (
						<article
							key={r.no}
							className="group relative bg-background p-8 md:p-10 lg:col-span-7 transition-colors duration-500 hover:bg-card"
						>
							<div className="flex items-baseline justify-between mb-6">
								<span className={`display-serif text-2xl ${r.text}`}>
									{r.no}
								</span>
							</div>
							<h3 className="display-serif text-2xl md:text-3xl mb-3 leading-tight">
								{r.title}
							</h3>
							<p className="text-muted-foreground leading-relaxed text-[15px]">
								{r.desc}
							</p>

							<div
								className={`absolute left-0 right-0 bottom-0 h-px scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 bg-current ${r.text}`}
							/>
						</article>
					))}

					{/* Image fills blank col 8–12 on rows 3–4 */}
					<div className="flex overflow-hidden lg:col-start-8 lg:col-span-5 lg:row-start-3 lg:row-span-2">
						<img
							src={whyUsImg2}
							alt="Pengerjaan waterproofing atap oleh tim KAS"
							className="w-full object-cover grayscale-[0.1] aspect-[4/3] lg:aspect-auto"
						/>
					</div>

					{/* Last card — full width */}
					{rest[4] && (
						<article
							key={rest[4].no}
							className="group relative bg-background p-8 md:p-10 lg:col-span-12 transition-colors duration-500 hover:bg-card"
						>
							<div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
								<div>
									<span
										className={`display-serif text-2xl ${rest[4].text} block mb-4`}
									>
										{rest[4].no}
									</span>
									<h3 className="display-serif text-2xl md:text-3xl leading-tight">
										{rest[4].title}
									</h3>
								</div>
								<p className="md:col-span-2 text-muted-foreground leading-relaxed text-[15px] self-center">
									{rest[4].desc}
								</p>
							</div>

							<div
								className={`absolute left-0 right-0 bottom-0 h-px scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 bg-current ${rest[4].text}`}
							/>
						</article>
					)}
				</div>
			</div>
		</section>
	);
};

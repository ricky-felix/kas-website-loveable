import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

const NotFound = () => {
	const location = useLocation();

	useEffect(() => {
		console.error(
			"404 Error: User attempted to access non-existent route:",
			location.pathname,
		);
	}, [location.pathname]);

	return (
		<main className="min-h-screen bg-background text-foreground">
			<Nav />

			<section className="relative pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden">
				<div
					className="absolute inset-0 grid-paper opacity-40 pointer-events-none"
					aria-hidden
				/>

				<div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
					{/* Top meta row */}
					<div className="flex flex-wrap items-center justify-between gap-4 mb-12 md:mb-20">
						<div className="flex items-center gap-3">
							<span className="block w-2 h-2 rounded-full bg-[hsl(var(--accent-rust))] animate-pulse" />
							<span className="rule-label">Halaman Tidak Ditemukan</span>
						</div>
						<span className="rule-label">404 - Page Not Found</span>
					</div>

					<div className="grid grid-cols-12 gap-6 md:gap-10 items-end">
						{/* Headline */}
						<div className="col-span-12 lg:col-span-7">
							<p className="rule-label mb-6">Indeks — / Halaman Hilang</p>
							<h1 className="display-serif text-[22vw] md:text-[14vw] lg:text-[11rem] xl:text-[13rem] leading-[0.9] tracking-tighter">
								404
							</h1>
							<div className="mt-8 h-px w-32 bg-foreground origin-left animate-draw-line" />
						</div>

						{/* Side column */}
						<div className="col-span-12 lg:col-span-5 lg:pl-8">
							<p className="text-base md:text-lg text-muted-foreground max-w-[40ch] leading-relaxed">
								<span className="text-foreground font-medium">
									Halaman tidak ditemukan.
								</span>{" "}
								URL yang Anda kunjungi tidak ada atau telah dipindahkan. Silakan
								kembali ke halaman utama kami.
							</p>

							<div className="mt-8 flex flex-wrap gap-3">
								<a
									href="/"
									className="inline-flex items-center gap-2 px-6 py-3.5 bg-foreground text-background rounded-sm text-sm font-medium hover:bg-[hsl(var(--accent-cobalt))] transition-colors duration-500"
								>
									Kembali ke Beranda
									<span aria-hidden>→</span>
								</a>
								<a
									href="/#contact"
									className="inline-flex items-center gap-2 px-6 py-3.5 outline-ink rounded-sm text-sm font-medium hover:bg-foreground hover:text-background transition-all duration-300"
								>
									Hubungi Kami
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</main>
	);
};

export default NotFound;

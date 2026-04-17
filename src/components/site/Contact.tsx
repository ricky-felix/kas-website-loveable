import { useState } from "react";
import { toast } from "sonner";

export const Contact = () => {
	const [submitting, setSubmitting] = useState(false);

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setSubmitting(true);

		const form = e.target as HTMLFormElement;
		const d = new FormData(form);

		const subject = encodeURIComponent(`Permintaan Survei — ${d.get("name")}`);
		const body = encodeURIComponent(
			[
				`Nama       : ${d.get("name")}`,
				`Perusahaan : ${d.get("company") || "-"}`,
				`Email      : ${d.get("email")}`,
				`Telepon    : ${d.get("phone") || "-"}`,
				`Jenis Proyek: ${d.get("type") || "-"}`,
				"",
				"Brief:",
				d.get("brief"),
			].join("\n"),
		);

		window.location.href = `mailto:karyaagungsejati2000@gmail.com?subject=${subject}&body=${body}`;

		setSubmitting(false);
		form.reset();
		toast.success("Aplikasi email Anda akan terbuka.", {
			description:
				"Pastikan email terkirim dari aplikasi email Anda. Kami akan membalas dalam satu hari kerja.",
		});
	};

	return (
		<section id="contact" className="py-24 md:py-32">
			<div className="mx-auto max-w-[1400px] px-6 md:px-10">
				<div className="grid grid-cols-12 gap-8 md:gap-12">
					{/* Left — info */}
					<div className="col-span-12 lg:col-span-5">
						<p className="rule-label mb-4">§ 06 / Korespondensi</p>
						<h2 className="display-serif text-5xl md:text-6xl lg:text-7xl leading-[0.92]">
							Kirimkan
							<br />
							<span className="italic text-cobalt">gambarnya</span>.
						</h2>
						<p className="mt-6 text-lg text-muted-foreground max-w-md">
							Ceritakan tentang bangunan Anda. Kami akan mengirimkan lingkup
							survei tertulis dan sistem indikatif dalam satu hari kerja.
						</p>

						<dl className="mt-12 space-y-6 text-sm">
							<div>
								<dt className="rule-label mb-1">Studio</dt>
								<dd>
									Jl. William Iskandar Muda (Pancing)
									<br />
									Blok E 12A
									<br />
									Medan 20223, Sumatera Utara
								</dd>
							</div>
							<div className="grid grid-cols-2 gap-6">
								<div>
									<dt className="rule-label mb-1">Telepon</dt>
									<dd>+62 81 161 7551</dd>
								</div>
								<div>
									<dt className="rule-label mb-1">Email</dt>
									<dd>karyaagungsejati2000@gmail.com</dd>
								</div>
							</div>
							<div>
								<dt className="rule-label mb-1">Jam kerja</dt>
								<dd>
									Sen — Sab <br />
									08.00 — 17.00 WIB
								</dd>
							</div>
						</dl>
					</div>

					{/* Right — form */}
					<form
						onSubmit={onSubmit}
						className="col-span-12 lg:col-span-7 lg:pl-8"
					>
						<p className="text-xs text-muted-foreground mb-4">
							<span className="text-cobalt">*</span> Wajib diisi
						</p>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border outline-ink rounded-sm overflow-hidden">
							{[
								{ n: "name", l: "Nama", t: "text", req: true },
								{ n: "company", l: "Nama Perusahaan", t: "text", req: false },
								{ n: "email", l: "Email", t: "email", req: true },
								{ n: "phone", l: "Telepon", t: "tel", req: true },
							].map((f) => (
								<label key={f.n} className="bg-background p-5 block">
									<span className="rule-label block mb-2">
										{f.l}
										{f.req && <span className="text-cobalt"> *</span>}
									</span>
									<input
										name={f.n}
										type={f.t}
										required={f.req}
										className="w-full bg-transparent outline-none text-foreground placeholder:text-muted-foreground/50 border-b border-transparent focus:border-foreground transition-colors py-1"
										placeholder="—"
									/>
								</label>
							))}
							<label className="bg-background p-5 block md:col-span-2">
								<span className="rule-label block mb-2">Jenis proyek</span>
								<select
									name="type"
									className="w-full bg-transparent outline-none text-foreground border-b border-transparent focus:border-foreground transition-colors py-1"
									defaultValue=""
								>
									<option value="" disabled>
										—
									</option>
									<option>Atap / Teras</option>
									<option>Basement / Substruktur</option>
									<option>Kolam / Area Basah</option>
									<option>Fasad / Sambungan</option>
									<option>Diagnosa Bocor</option>
									<option>Lainnya</option>
								</select>
							</label>
							<label className="bg-background p-5 block md:col-span-2">
								<span className="rule-label block mb-2">
									Brief <span className="text-cobalt">*</span>
								</span>
								<textarea
									name="brief"
									required
									rows={5}
									className="w-full bg-transparent outline-none text-foreground placeholder:text-muted-foreground/50 border-b border-transparent focus:border-foreground transition-colors py-1 resize-none"
									placeholder="Bangunan, lokasi, kondisi yang teramati…"
								/>
							</label>
						</div>

						<div className="mt-6 flex flex-wrap items-center justify-between gap-4">
							<p className="text-xs text-muted-foreground max-w-sm">
								Dengan mengirim formulir ini, Anda mengizinkan KAS menghubungi
								Anda terkait permintaan ini. Formulir ini akan membuka aplikasi
								email Anda — pastikan email terkirim sebelum menutupnya.
							</p>
							<button
								type="submit"
								disabled={submitting}
								className="inline-flex items-center gap-2 px-7 py-3.5 bg-foreground text-background rounded-sm text-sm font-medium hover:bg-[hsl(var(--accent-cobalt))] transition-colors duration-500 disabled:opacity-60"
							>
								{submitting ? "Mengirim…" : "Kirim brief"}{" "}
								<span aria-hidden>→</span>
							</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

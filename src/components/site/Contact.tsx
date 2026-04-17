import { useState } from "react";
import { toast } from "sonner";

export const Contact = () => {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Survey request received", {
        description: "We will respond within one working day.",
      });
    }, 700);
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-8 md:gap-12">
          {/* Left — info */}
          <div className="col-span-12 lg:col-span-5">
            <p className="rule-label mb-4">§ 06 / Correspondence</p>
            <h2 className="display-serif text-5xl md:text-6xl lg:text-7xl leading-[0.92]">
              Send us the
              <br />
              <span className="italic text-cobalt">drawings</span>.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-md">
              Tell us about the building. We will return a written survey scope and
              indicative system within one working day.
            </p>

            <dl className="mt-12 space-y-6 text-sm">
              <div>
                <dt className="rule-label mb-1">Studio</dt>
                <dd>Jl. Gatot Subroto No. 184<br/>Medan 20119, Sumatera Utara</dd>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <dt className="rule-label mb-1">Telephone</dt>
                  <dd>+62 61 4520 8800</dd>
                </div>
                <div>
                  <dt className="rule-label mb-1">Mail</dt>
                  <dd>studio@strata.id</dd>
                </div>
              </div>
              <div>
                <dt className="rule-label mb-1">Hours</dt>
                <dd>Mon — Sat · 08:00 — 17:30 WIB</dd>
              </div>
            </dl>
          </div>

          {/* Right — form */}
          <form onSubmit={onSubmit} className="col-span-12 lg:col-span-7 lg:pl-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border outline-ink rounded-sm overflow-hidden">
              {[
                { n: "name", l: "Name", t: "text", req: true },
                { n: "company", l: "Company", t: "text", req: false },
                { n: "email", l: "Email", t: "email", req: true },
                { n: "phone", l: "Telephone", t: "tel", req: false },
              ].map((f) => (
                <label key={f.n} className="bg-background p-5 block">
                  <span className="rule-label block mb-2">{f.l}{f.req && <span className="text-cobalt"> *</span>}</span>
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
                <span className="rule-label block mb-2">Project type</span>
                <select
                  name="type"
                  className="w-full bg-transparent outline-none text-foreground border-b border-transparent focus:border-foreground transition-colors py-1"
                  defaultValue=""
                >
                  <option value="" disabled>—</option>
                  <option>Roof / Terrace</option>
                  <option>Basement / Substructure</option>
                  <option>Pool / Wet Area</option>
                  <option>Facade / Joints</option>
                  <option>Leak Diagnosis</option>
                  <option>Other</option>
                </select>
              </label>
              <label className="bg-background p-5 block md:col-span-2">
                <span className="rule-label block mb-2">Brief <span className="text-cobalt">*</span></span>
                <textarea
                  name="brief"
                  required
                  rows={5}
                  className="w-full bg-transparent outline-none text-foreground placeholder:text-muted-foreground/50 border-b border-transparent focus:border-foreground transition-colors py-1 resize-none"
                  placeholder="Building, location, observed condition…"
                />
              </label>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
              <p className="text-xs text-muted-foreground max-w-sm">
                By submitting you consent to STRATA contacting you regarding this enquiry.
              </p>
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-foreground text-background rounded-sm text-sm font-medium hover:bg-[hsl(var(--accent-cobalt))] transition-colors duration-500 disabled:opacity-60"
              >
                {submitting ? "Sending…" : "Send brief"} <span aria-hidden>→</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

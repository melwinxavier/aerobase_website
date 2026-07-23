"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, ChevronsRight } from "lucide-react";
import { Container, MonoLabel, Reveal } from "@/components/ui/primitives";
import { PageIntro } from "@/components/site/PageIntro";

const EMAIL = "contact@aerobase.se";
const PHONE_DISPLAY = "+46 70 4199 023";
const PHONE_HREF = "tel:+46704199023";

const OFFICES = [
  { city: "Luleå", address: "Kaserngatan 4, 974 42 Luleå" },
  { city: "Trollhättan", address: "Nohabgatan 14, 461 53 Trollhättan" },
];

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <MonoLabel className="!text-fg-dim">{label}</MonoLabel>
      <div className="mt-2">{children}</div>
    </label>
  );
}

const inputCls =
  "w-full rounded-md border border-white/[0.1] bg-black/30 px-4 py-3 text-[15px] text-fg placeholder:text-fg-dim outline-none transition-colors focus:border-brand-green/60";

export function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      form.company ? `Enquiry from ${form.name} (${form.company})` : `Enquiry from ${form.name}`
    );
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}${form.company ? `, ${form.company}` : ""}\n${form.email}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <PageIntro
        eyebrow="CONTACT"
        dotColor="#00bf2a"
        title={<>Send us a grade and a cooling path.</>}
        lead="We'll send back a benchmarked prediction. Start a project, request a trial, or just ask a question — we read every message."
      />

      <section className="relative py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,380px)_1fr]">
            {/* ── Channels ── */}
            <div className="space-y-4">
              <Reveal>
                <a
                  href={`mailto:${EMAIL}`}
                  className="group flex items-start gap-4 rounded-2xl border border-white/[0.06] bg-ink-card p-6 transition-colors hover:border-white/[0.14]"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-brand-green/40">
                    <Mail className="h-4 w-4 text-brand-green" />
                  </span>
                  <div>
                    <MonoLabel className="!text-fg-dim">EMAIL</MonoLabel>
                    <p className="mt-1 text-[16px] text-fg group-hover:text-brand-green">{EMAIL}</p>
                  </div>
                </a>
              </Reveal>
              <Reveal delay={0.05}>
                <a
                  href={PHONE_HREF}
                  className="group flex items-start gap-4 rounded-2xl border border-white/[0.06] bg-ink-card p-6 transition-colors hover:border-white/[0.14]"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-brand-green/40">
                    <Phone className="h-4 w-4 text-brand-green" />
                  </span>
                  <div>
                    <MonoLabel className="!text-fg-dim">PHONE</MonoLabel>
                    <p className="mt-1 text-[16px] text-fg group-hover:text-brand-green">
                      {PHONE_DISPLAY}
                    </p>
                  </div>
                </a>
              </Reveal>
              <Reveal delay={0.1}>
                <a
                  href="https://phases.aerobase.se"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-brand-green/50 bg-brand-green/10 p-6 transition-colors hover:bg-brand-green/20"
                >
                  <div>
                    <MonoLabel className="!text-brand-green">TRY IT NOW</MonoLabel>
                    <p className="mt-1 text-[16px] text-brand-green">Open the PHASES Agent</p>
                  </div>
                  <ChevronsRight className="h-4 w-4 text-brand-green transition-transform group-hover:translate-x-0.5" />
                </a>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="rounded-2xl border border-white/[0.06] bg-ink-card p-6">
                  <MonoLabel className="!text-fg-dim">OFFICES</MonoLabel>
                  <div className="mt-5 space-y-5">
                    {OFFICES.map((o) => (
                      <div key={o.city} className="flex items-start gap-3">
                        <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" />
                        <div>
                          <p className="text-[15px] text-fg">{o.city}</p>
                          <p className="text-[13px] leading-relaxed text-fg-muted">{o.address}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            {/* ── Form ── */}
            <Reveal delay={0.08}>
              <form
                onSubmit={onSubmit}
                className="rounded-2xl border border-white/[0.06] bg-ink-card p-8 md:p-10"
              >
                <h2 className="text-2xl font-light text-fg">Start a project</h2>
                <p className="mt-2 text-[14px] text-fg-muted">
                  Tell us the material and the question. We&apos;ll get back to you.
                </p>

                <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <Field label="NAME">
                    <input
                      required
                      value={form.name}
                      onChange={set("name")}
                      placeholder="Your name"
                      className={inputCls}
                    />
                  </Field>
                  <Field label="EMAIL">
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={set("email")}
                      placeholder="you@company.com"
                      className={inputCls}
                    />
                  </Field>
                </div>
                <div className="mt-5">
                  <Field label="COMPANY">
                    <input
                      value={form.company}
                      onChange={set("company")}
                      placeholder="Organisation (optional)"
                      className={inputCls}
                    />
                  </Field>
                </div>
                <div className="mt-5">
                  <Field label="MESSAGE">
                    <textarea
                      required
                      value={form.message}
                      onChange={set("message")}
                      rows={5}
                      placeholder="The grade, the cooling path, the load cases, the solver…"
                      className={`${inputCls} resize-y`}
                    />
                  </Field>
                </div>

                <button
                  type="submit"
                  className="mono-label group mt-8 inline-flex items-center gap-3 rounded-md border border-brand-green/70 bg-brand-green/10 px-5 py-3 text-brand-green transition-colors hover:bg-brand-green/20"
                >
                  SEND MESSAGE
                  <ChevronsRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </button>
                <p className="mt-4 text-[12px] text-fg-dim">
                  Opens your email client, addressed to {EMAIL}.
                </p>
              </form>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}

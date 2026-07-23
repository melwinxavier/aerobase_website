"use client";

import { MapPin } from "lucide-react";
import { Container, MonoLabel, Reveal, PillButton } from "@/components/ui/primitives";
import { PageIntro } from "@/components/site/PageIntro";
import { ContactCTA } from "@/components/site/ContactCTA";

const TEAM = [
  {
    name: "Bijish Babu",
    suffix: "Ph.D.",
    role: "Founder & CEO",
    focus: "Computational material science & simulation of manufacturing processes.",
  },
  {
    name: "Daniel Berglund",
    suffix: "Ph.D.",
    role: "CTO",
    focus: "Materials modeling of metals and polymers, advanced manufacturing processes.",
  },
  {
    name: "Henrik Tersing",
    suffix: "Ph.D.",
    role: "Simulation Technology Specialist",
    focus: "Aerospace & automotive component design, in-service loading, and manufacturing.",
  },
  {
    name: "Lakshmi Narasimhan Nandakumar",
    suffix: "M.Sc.",
    role: "Research Engineer",
    focus: "Aerospace component design and loading, polymer composites.",
  },
  {
    name: "Midhun Xavier",
    suffix: "Ph.D.",
    role: "Research Engineer",
    focus: "Agentic AI, simulations, multi-agent systems, ontologies & knowledge-based AI.",
  },
  {
    name: "Erik Berglund",
    suffix: "M.Sc.",
    role: "Student Research Engineer",
    focus: "Material modeling & simulations.",
  },
];

const OFFICES = [
  { city: "Luleå", address: "Kaserngatan 4, 974 42 Luleå, Sweden" },
  { city: "Trollhättan", address: "Nohabgatan 14, 461 53 Trollhättan, Sweden" },
];

const MEMBERSHIPS = ["Ansys Startup Program", "Big Science Sweden", "Innovatum Science Park"];

function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");
}

export function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="ABOUT · AEROBASE INNOVATIONS AB"
        dotColor="#ff2d2d"
        title={<>We make material models accessible to simulation engineers.</>}
        lead="Aerobase Innovations AB is a Swedish simulation-technology company building physics-based products for the automotive, aerospace and manufacturing industries — computed and measured, not assumed."
      >
        <PillButton variant="green" href="/contact">
          CONTACT US
        </PillButton>
        <PillButton variant="ghost" href="/how-we-work">
          HOW WE WORK
        </PillButton>
      </PageIntro>

      {/* ── The approach ── */}
      <section className="relative border-b border-white/[0.05] py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-[minmax(0,320px)_1fr]">
            <Reveal>
              <MonoLabel dotColor="#ff2d2d" className="!text-brand-red">
                THE APPROACH
              </MonoLabel>
            </Reveal>
            <Reveal delay={0.06}>
              <div className="max-w-2xl">
                <p className="text-[clamp(1.3rem,2.4vw,1.9rem)] font-light leading-snug text-fg">
                  We are genuinely passionate about understanding the material — how it behaves
                  under complex thermo-mechanical loading, and how to model it.
                </p>
                <p className="mt-8 text-[15px] leading-relaxed text-fg-muted">
                  Most alloys undergo phase transformation during heating and cooling, and each
                  phase contributes differently to strength and failure. A carefully planned
                  testing regime reveals that behavior; the models are then calibrated, verified
                  and validated against analogous tests and controlled real-life loading. Our
                  advantage is the ability to deliver a model that carries that whole scenario
                  into the solver an engineer already runs.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── Team ── */}
      <section className="relative border-b border-white/[0.05] py-20 md:py-28">
        <Container>
          <Reveal>
            <MonoLabel>OUR TEAM</MonoLabel>
            <h2 className="mt-5 display max-w-2xl text-[clamp(1.6rem,3.2vw,2.4rem)] text-fg">
              Computational materials scientists and simulation engineers.
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((m, i) => (
              <Reveal key={m.name} delay={(i % 3) * 0.06}>
                <article className="flex h-full flex-col rounded-2xl border border-white/[0.06] bg-ink-card p-8">
                  <div className="grid h-14 w-14 place-items-center rounded-full border border-white/10 bg-black/30">
                    <span className="text-lg font-light tracking-tight text-fg">
                      {initials(m.name)}
                    </span>
                  </div>
                  <h3 className="mt-6 text-[17px] font-normal text-fg">
                    {m.name}
                    <span className="ml-2 text-[13px] text-fg-dim">{m.suffix}</span>
                  </h3>
                  <MonoLabel dotColor="#ff2d2d" className="mt-2 block !text-brand-red">
                    {m.role}
                  </MonoLabel>
                  <p className="mt-4 text-[13.5px] leading-relaxed text-fg-muted">{m.focus}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Locations ── */}
      <section className="relative border-b border-white/[0.05] py-20 md:py-28">
        <Container>
          <Reveal>
            <MonoLabel>LOCATIONS</MonoLabel>
            <h2 className="mt-5 display max-w-2xl text-[clamp(1.6rem,3.2vw,2.4rem)] text-fg">
              Two offices in Sweden.
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
            {OFFICES.map((o, i) => (
              <Reveal key={o.city} delay={i * 0.06}>
                <div className="flex items-start gap-5 rounded-2xl border border-white/[0.06] bg-ink-card p-8">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-brand-red/40">
                    <MapPin className="h-4 w-4 text-brand-red" />
                  </span>
                  <div>
                    <h3 className="text-[19px] font-normal text-fg">{o.city}</h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-fg-muted">{o.address}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Memberships ── */}
      <section className="relative py-20 md:py-28">
        <Container>
          <Reveal>
            <MonoLabel>MEMBERSHIPS</MonoLabel>
          </Reveal>
          <div className="mt-8 flex flex-wrap gap-4">
            {MEMBERSHIPS.map((m, i) => (
              <Reveal key={m} delay={i * 0.05}>
                <span className="rounded-xl border border-white/[0.08] bg-ink-card px-6 py-4 text-[15px] font-medium tracking-tight text-fg-muted">
                  {m}
                </span>
              </Reveal>
            ))}
          </div>

          {/* Legal line */}
          <Reveal>
            <div className="mt-16 rounded-2xl border border-white/[0.06] bg-ink-900 p-8">
              <MonoLabel className="!text-fg-dim">LEGAL</MonoLabel>
              <p className="mt-4 max-w-3xl text-[13.5px] leading-relaxed text-fg-muted">
                Aerobase Innovations AB · Org. nr 559260-9340 · VAT SE559260934001 · Registered
                office: Kompanivägen 35, SE-974 44, Luleå, Sweden.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <ContactCTA
        eyebrow="WORK WITH US"
        title="Have a materials problem worth solving? Let's talk."
      />
    </>
  );
}

"use client";

import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/primitives";
import { RevealText, RevealLine } from "@/components/editorial/RevealText";
import { DisplayHeading } from "@/components/editorial/DisplayHeading";
import { GrainTile, MetaRow } from "@/components/editorial/product";
import { EditorialCTA } from "@/components/editorial/EditorialCTA";

const ACCENT = "#e8b23d";

/* Two labelled groups per the 2026-07-18 portfolio decision: material models
   run inside the customer's solver; platforms run the analysis. */
const MATERIAL_MODELS = [
  {
    name: "PHASES Plugin",
    tag: "Selling now",
    desc: "Composition-aware phase-transformation card that couples into your FEM process-simulation solver — CCT/TTT, phase fractions and hardness for any steel chemistry.",
    href: "/ai-agents/phases",
    external: false,
  },
  {
    name: "Crystal",
    tag: "Polymer composites",
    desc: "A material model for polymer composites — both thermosets and thermoplastics, which fail by different mechanisms. The same physics-first method, extended to the class automotive and aerospace are lightweighting toward.",
    href: "/contact",
    external: false,
  },
  {
    name: "Caliber",
    tag: "Calibration",
    desc: "Model calibration and parameter identification. Start with the measurements, define the parameters that can move, and compare the computed response against the evidence.",
    href: "/how-we-work",
    external: false,
  },
  {
    name: "Support",
    tag: "Engineering service",
    desc: "Modeling and implementation support — library integration, simulation pipelines, onboarding and interpretation. Move from “it runs” to a dependable simulation workflow.",
    href: "/contact",
    external: false,
  },
];

function ProductRow({ p }: { p: (typeof MATERIAL_MODELS)[number] }) {
  return (
    <a
      href={p.href}
      className="group block border-t border-white/[0.12] py-[clamp(1.75rem,3.5vw,2.75rem)] transition-colors hover:bg-white/[0.02]"
    >
      <Container>
        <div className="grid grid-cols-1 gap-x-[clamp(2rem,5vw,4rem)] gap-y-4 lg:grid-cols-[1fr_1.5fr] lg:items-center">
          <div className="flex items-center gap-3">
            <span className="u-display text-[clamp(1.6rem,4.5vw,3rem)] text-fg">{p.name}</span>
            <ArrowUpRight
              className="h-6 w-6 shrink-0 text-fg-dim transition-all duration-500 ease-expo group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-fg"
              strokeWidth={1.75}
            />
          </div>
          <div>
            <p className="font-display text-[0.66rem] font-semibold uppercase tracking-nav" style={{ color: ACCENT }}>
              {p.tag}
            </p>
            <p className="mt-3 max-w-xl text-[14px] leading-relaxed text-fg-muted">{p.desc}</p>
          </div>
        </div>
      </Container>
    </a>
  );
}

export function MaterialModelsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden px-[6vw] pt-[clamp(8rem,20vh,13rem)] pb-16 md:pb-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-1/3 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(232,178,61,0.1),transparent_70%)]" />
        </div>
        <Container className="relative">
          <RevealText className="font-display text-xs font-semibold uppercase tracking-nav text-brand-gold">
            <RevealLine>Material models · Solver-ready</RevealLine>
          </RevealText>
          <DisplayHeading
            as="h1"
            size="lg"
            className="mt-6 text-fg"
            lines={["Models that beat", "the legacy baseline."]}
          />
          <RevealText className="mt-8 max-w-2xl text-[clamp(1rem,1.6vw,1.25rem)] font-light leading-relaxed text-fg-muted">
            <RevealLine>Physics-based material models that drop into the solver you</RevealLine>
            <RevealLine>already run — computed from first principles, calibrated on real data.</RevealLine>
          </RevealText>
        </Container>
      </section>

      {/* SafeLight lead */}
      <section className="border-t border-white/[0.12] px-[6vw] py-20 md:py-28">
        <Container>
          <p className="font-display text-xs font-semibold uppercase tracking-nav" style={{ color: ACCENT }}>
            SafeLight · Crash failure
          </p>
          <DisplayHeading
            as="h2"
            size="sm"
            className="mt-4 text-fg"
            lines={["Mega-cast crash,", "predicted to 3–5%."]}
          />

          <div className="mt-12 grid grid-cols-1 gap-x-[clamp(2rem,5vw,5rem)] gap-y-12 lg:grid-cols-2">
            {/* Left: overview + meta */}
            <div className="max-w-[42rem]">
              <p className="text-[15px] leading-relaxed text-fg-muted">
                On high-pressure die-cast (mega-cast) aluminium, legacy failure models like GISSMO
                and CrachFEM predict crash behavior to within 12–18% of full-vehicle tests.
                SafeLight — porosity-aware, with thickness effects and post-buckling physics —
                brings that error down to 3–5% on a customer program, and drops into LS-DYNA,
                Radioss and Abaqus.
              </p>
              <dl className="mt-10">
                <MetaRow label="Domain">HPDC (mega-cast) aluminium</MetaRow>
                <MetaRow label="Solvers">LS-DYNA · Radioss · Abaqus</MetaRow>
                <MetaRow label="Models">Porosity-aware · thickness · post-buckling</MetaRow>
                <MetaRow label="Alloys">Silafont-36 · Castaduct-42 · custom</MetaRow>
                <MetaRow label="Trial">30 days free</MetaRow>
                <MetaRow label="Research">FlexCrash (EU Horizon)</MetaRow>
              </dl>
              <a
                href="/contact"
                className="mt-8 inline-flex items-center gap-1.5 rounded-full border border-white/20 px-5 py-3 font-display text-[0.72rem] font-semibold uppercase tracking-nav text-fg transition-colors hover:bg-fg hover:text-ink"
              >
                Request a trial
                <ArrowUpRight className="h-[1em] w-[1em]" strokeWidth={2.25} />
              </a>
            </div>

            {/* Right: stat + visual */}
            <div className="flex flex-col gap-4">
              <div
                className="relative overflow-hidden rounded-lg border p-8"
                style={{
                  borderColor: "rgba(0,191,42,0.25)",
                  background:
                    "radial-gradient(120% 120% at 50% 0%, rgba(0,191,42,0.12), transparent 60%), #0a0a0a",
                }}
              >
                <p className="font-display text-[0.68rem] font-semibold uppercase tracking-nav text-fg-dim">
                  Crash prediction error
                </p>
                <div className="mt-6 flex items-baseline gap-3">
                  <span className="u-display text-[clamp(3rem,9vw,6rem)] text-fg" style={{ letterSpacing: "-0.04em" }}>
                    3–5%
                  </span>
                  <span className="text-brand-green">↓</span>
                </div>
                <p className="mt-3 text-[13px] text-fg-muted">
                  vs. 12–18% for legacy GISSMO / CrachFEM on cast parts.
                </p>
              </div>
              <GrainTile ratio="1 / 0.5">
                <div className="absolute inset-0">
                  <div className="absolute left-1/2 top-1/2 h-32 w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(232,178,61,0.35),transparent)] blur-lg" />
                  <svg viewBox="0 0 400 200" className="absolute inset-0 h-full w-full">
                    <polyline
                      points="30,150 80,120 130,140 180,90 230,120 280,70 330,100 370,60"
                      fill="none"
                      stroke="#e8b23d"
                      strokeWidth="2"
                    />
                    <line x1="30" y1="170" x2="370" y2="170" stroke="rgba(255,255,255,0.1)" />
                  </svg>
                </div>
              </GrainTile>
            </div>
          </div>
        </Container>
      </section>

      {/* Material models group */}
      <section className="border-t border-white/[0.12] px-[6vw] pt-16 md:pt-20">
        <Container>
          <p className="font-display text-xs font-semibold uppercase tracking-nav text-fg-muted">
            Material models — run inside your solver
          </p>
        </Container>
      </section>
      <div>
        {MATERIAL_MODELS.map((p) => (
          <ProductRow key={p.name} p={p} />
        ))}
        <div className="border-t border-white/[0.12]" />
      </div>

      {/* Platforms group */}
      <section className="px-[6vw] py-20 md:py-28">
        <Container>
          <p className="font-display text-xs font-semibold uppercase tracking-nav text-brand-blue">
            Platforms — run the analysis for you
          </p>
          <article className="mt-8 grid grid-cols-1 gap-8 overflow-hidden rounded-lg border border-white/[0.08] bg-[#0d0d0f] p-8 md:grid-cols-[1fr_minmax(0,320px)] md:p-10">
            <div>
              <div className="flex items-center gap-3">
                <span className="u-display text-[clamp(1.8rem,5vw,3rem)] text-fg">AeroFEM</span>
                <span className="font-display text-[0.66rem] font-semibold uppercase tracking-nav text-fg-dim">
                  SaaS · Browser-delivered
                </span>
              </div>
              <p className="mt-5 max-w-lg text-[14px] leading-relaxed text-fg-muted">
                A hosted simulation platform that puts a defined workflow behind a focused browser
                interface. The demonstrated application is blast- and impact-loading analysis on
                glazing — configure the task, run it, and receive a report.
              </p>
              <p className="mt-4 max-w-lg text-[13px] leading-relaxed text-fg-dim">
                A platform, not a material card — and a distinct audience from the metals work.
                Availability and service terms on request.
              </p>
              <a
                href="/contact"
                className="mt-8 inline-flex items-center gap-1.5 rounded-full border border-white/20 px-5 py-3 font-display text-[0.72rem] font-semibold uppercase tracking-nav text-fg transition-colors hover:bg-fg hover:text-ink"
              >
                Enquire about AeroFEM
                <ArrowUpRight className="h-[1em] w-[1em]" strokeWidth={2.25} />
              </a>
            </div>
            <GrainTile className="grid min-h-[200px] place-items-center">
              <svg viewBox="0 0 200 140" className="h-32 w-40">
                <rect x="24" y="20" width="152" height="100" rx="6" fill="none" stroke="rgba(77,139,255,0.5)" strokeWidth="1.5" />
                <line x1="24" y1="42" x2="176" y2="42" stroke="rgba(77,139,255,0.35)" strokeWidth="1" />
                <circle cx="34" cy="31" r="2.5" fill="#4d8bff" />
                <rect x="40" y="56" width="120" height="8" rx="2" fill="rgba(255,255,255,0.08)" />
                <rect x="40" y="72" width="90" height="8" rx="2" fill="rgba(255,255,255,0.08)" />
                <rect x="40" y="94" width="60" height="14" rx="3" fill="rgba(77,139,255,0.4)" />
              </svg>
            </GrainTile>
          </article>
        </Container>
      </section>

      <EditorialCTA
        eyebrow="Put a model to work"
        accent={ACCENT}
        lines={["Tell us the material", "and the load cases."]}
        primary={{ label: "Start a project", href: "/contact" }}
        secondary={{ label: "How we calibrate", href: "/how-we-work" }}
      />
    </>
  );
}

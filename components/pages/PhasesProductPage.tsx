"use client";

import { Database, MessagesSquare, SlidersHorizontal, ArrowUpRight } from "lucide-react";
import { Container, Reveal } from "@/components/ui/primitives";
import { RevealText, RevealLine } from "@/components/editorial/RevealText";
import { DisplayHeading } from "@/components/editorial/DisplayHeading";
import { ArrowLink } from "@/components/editorial/ArrowLink";
import { ProductHero, MetaRow, GrainTile, NextProduct } from "@/components/editorial/product";

const ACCENT = "#4d8bff";

const SURFACES = [
  {
    icon: Database,
    kicker: "Material records",
    title: "Materials database",
    body: "Records grouped by alloy type, family, group and material. A reference grade can be cloned for editing, compared, and used to open a simulation. No database count is published.",
  },
  {
    icon: MessagesSquare,
    kicker: "Agent front end",
    title: "A chat interface to the tools",
    body: "A request opens the relevant simulator beside the conversation; Configure and Results views stay part of that tool. The Agent is an interface to the simulators — not an additional simulator or a separate source of physics.",
  },
  {
    icon: SlidersHorizontal,
    kicker: "Configure & inspect",
    title: "Simulation & results workspace",
    body: "Each simulator has its own configuration and result views. The input set changes with the physical process being examined.",
  },
];

const SIMULATORS = [
  {
    tag: "HT SIM",
    title: "Heat treatment",
    body: "Takes composition and a heat-treatment path. Its results follow the computed material state along that defined path.",
  },
  {
    tag: "CCT / TTT",
    title: "CCT dilatometry mode",
    body: "Takes a named grade or composition and multiple cooling rates. Returns dilatation curves, phase fractions and hardness for each rate.",
  },
  {
    tag: "RSW",
    title: "Resistance spot welding",
    body: "Takes sheet stack, current, pressure and timing. Results include nugget size, hardness, phase evolution, residual stress and plastic strain.",
    note: "RSW validation has not been established.",
  },
  {
    tag: "V-GLEEBLE",
    title: "Virtual thermo-mechanical simulator",
    body: "The product-named V-Gleeble — a software stand-in for exploring thermo-mechanical material response.",
  },
];

/* Stylised continuous-cooling phase map for the hero tile (illustrative). */
function PhaseMap() {
  return (
    <svg viewBox="0 0 480 300" className="h-full w-full" role="img" aria-label="Illustrative continuous-cooling phase map">
      <defs>
        <linearGradient id="pm-field" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(77,139,255,0.16)" />
          <stop offset="100%" stopColor="rgba(77,139,255,0)" />
        </linearGradient>
      </defs>
      {/* grid */}
      {Array.from({ length: 6 }).map((_, i) => (
        <line key={`h${i}`} x1="40" y1={40 + i * 40} x2="450" y2={40 + i * 40} stroke="rgba(255,255,255,0.05)" />
      ))}
      {Array.from({ length: 8 }).map((_, i) => (
        <line key={`v${i}`} x1={70 + i * 48} y1="30" x2={70 + i * 48} y2="250" stroke="rgba(255,255,255,0.05)" />
      ))}
      <rect x="40" y="30" width="410" height="220" fill="url(#pm-field)" />
      {/* transformation noses */}
      <path d="M60,70 C180,70 210,120 190,150 C170,180 120,190 90,210" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
      <path d="M120,70 C240,72 270,130 250,165 C232,196 180,205 150,225" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" />
      {/* Ms line */}
      <line x1="40" y1="205" x2="450" y2="205" stroke="rgba(255,255,255,0.3)" strokeDasharray="4 4" />
      {/* cooling path */}
      <path d="M55,45 C130,55 250,150 360,235" fill="none" stroke={ACCENT} strokeWidth="2.5" />
      <circle cx="360" cy="235" r="4" fill={ACCENT} />
      <text x="368" y="232" fill={ACCENT} fontSize="11" fontFamily="var(--font-mono)">martensite</text>
      <text x="44" y="24" fill="rgba(255,255,255,0.4)" fontSize="10" fontFamily="var(--font-mono)">°C</text>
      <text x="424" y="272" fill="rgba(255,255,255,0.4)" fontSize="10" fontFamily="var(--font-mono)">log t (s)</text>
    </svg>
  );
}

export function PhasesProductPage() {
  return (
    <>
      <ProductHero
        tag="AEROBASE AI AGENTS · DIGITAL METALLURGY"
        titleLines={["PHASES"]}
        meta="PLATFORM · FOUR SIMULATORS AVAILABLE"
        accent={ACCENT}
      />

      {/* Overview + hero visual */}
      <section className="pb-20 md:pb-28">
        <Container>
          <div className="grid grid-cols-1 gap-x-[clamp(2rem,5vw,5rem)] gap-y-14 lg:grid-cols-2">
            {/* Overview + meta (sticky) */}
            <div className="max-w-[42rem] lg:sticky lg:top-28 lg:self-start">
              <div className="border-t border-white/[0.12] pt-5">
                <h2 className="font-display text-sm font-semibold uppercase tracking-nav" style={{ color: ACCENT }}>
                  Overview
                </h2>
                <RevealText className="mt-4 text-[clamp(1.2rem,2vw,1.6rem)] font-medium leading-snug tracking-tight text-fg">
                  <RevealLine>PHASES connects material and process</RevealLine>
                  <RevealLine>inputs to computed material state —</RevealLine>
                  <RevealLine>one platform, one model, four simulators.</RevealLine>
                </RevealText>
                <p className="mt-6 text-[15px] leading-relaxed text-fg-muted">
                  PHASES is a single platform with a materials database, a chat-agent front end
                  and process-specific simulators. The Agent is an interface to the simulators,
                  not an extra source of physics.
                </p>
              </div>

              <dl className="mt-10">
                <MetaRow label="Product">PHASES platform</MetaRow>
                <MetaRow label="Domain">Steels · phase transformation</MetaRow>
                <MetaRow label="Interface">Chat agent · simulators · materials database</MetaRow>
                <MetaRow label="Simulators">HT Sim · CCT/TTT · RSW · V-Gleeble</MetaRow>
                <MetaRow label="Deployment">PHASES Agent (early access) · PHASES Plugin</MetaRow>
                <MetaRow label="Status">Four simulators available</MetaRow>
              </dl>

              <a
                href="https://phases.aerobase.se"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-1.5 rounded-full border border-white/20 px-5 py-3 font-display text-[0.72rem] font-semibold uppercase tracking-nav text-fg transition-colors hover:bg-fg hover:text-ink"
              >
                Try the PHASES Agent
                <ArrowUpRight className="h-[1em] w-[1em]" strokeWidth={2.25} />
              </a>
            </div>

            {/* Hero visual */}
            <div className="flex flex-col gap-4">
              <GrainTile ratio="1 / 0.72">
                <div className="absolute inset-0 p-6">
                  <PhaseMap />
                </div>
              </GrainTile>
              <p className="text-[0.7rem] uppercase tracking-nav text-fg-dim">
                Illustrative continuous-cooling phase map — drawn, not computed.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Three product surfaces */}
      <section className="border-t border-white/[0.08] py-20 md:py-28">
        <Container>
          <p className="font-display text-xs font-semibold uppercase tracking-nav" style={{ color: ACCENT }}>
            Three connected surfaces
          </p>
          <DisplayHeading
            as="h2"
            size="sm"
            className="mt-4 text-fg"
            lines={["One product, three", "product surfaces."]}
          />
          <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
            {SURFACES.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.06}>
                <article className="flex h-full flex-col rounded-lg border border-white/[0.08] bg-[#0d0d0f] p-7">
                  <s.icon className="h-6 w-6" style={{ color: ACCENT }} strokeWidth={1.5} />
                  <p className="mt-6 font-display text-[0.68rem] font-semibold uppercase tracking-nav text-fg-dim">
                    {s.kicker}
                  </p>
                  <h3 className="mt-1 text-[19px] font-medium tracking-tight text-fg">{s.title}</h3>
                  <p className="mt-4 text-[13.5px] leading-relaxed text-fg-muted">{s.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Four simulators */}
      <section className="border-t border-white/[0.08] py-20 md:py-28">
        <Container>
          <p className="font-display text-xs font-semibold uppercase tracking-nav" style={{ color: ACCENT }}>
            Current simulator set
          </p>
          <DisplayHeading
            as="h2"
            size="sm"
            className="mt-4 text-fg"
            lines={["Four process-", "specific simulators."]}
          />
          <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2">
            {SIMULATORS.map((s) => (
              <article
                key={s.tag}
                className="flex flex-col rounded-lg border border-white/[0.08] bg-[#0d0d0f] p-8"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-[20px] font-medium tracking-tight text-fg">{s.title}</h3>
                  <span
                    className="font-display text-[0.68rem] font-semibold uppercase tracking-nav"
                    style={{ color: ACCENT }}
                  >
                    {s.tag}
                  </span>
                </div>
                <p className="mt-4 text-[14px] leading-relaxed text-fg-muted">{s.body}</p>
                {s.note && (
                  <p className="mt-5 inline-flex items-center gap-2 rounded border border-brand-gold/40 bg-brand-gold/5 px-3 py-2 text-[12px] text-brand-gold">
                    {s.note}
                  </p>
                )}
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Process-simulation exhibit */}
      <section className="border-t border-white/[0.08] py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-x-[clamp(2rem,5vw,5rem)] gap-y-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div className="max-w-[34rem]">
              <p className="font-display text-xs font-semibold uppercase tracking-nav" style={{ color: ACCENT }}>
                Process-simulation exhibit
              </p>
              <DisplayHeading
                as="h2"
                size="sm"
                className="mt-4 text-fg"
                lines={["A rail-axle repair", "from RESTORE."]}
              />
              <p className="mt-6 text-[15px] leading-relaxed text-fg-muted">
                A process-simulation temperature field advancing across a rail-axle repair
                example from the RESTORE project. This is one process-simulation example — it is
                not evidence for validation of the four PHASES simulators.
              </p>
            </div>
            <GrainTile ratio="1 / 0.6">
              <div className="absolute inset-0">
                <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,120,60,0.6),rgba(77,139,255,0.15)_55%,transparent_75%)] blur-md" />
                <svg viewBox="0 0 400 240" className="absolute inset-0 h-full w-full">
                  <rect x="60" y="150" width="280" height="30" rx="4" fill="rgba(255,255,255,0.06)" />
                  <rect x="150" y="120" width="100" height="60" rx="4" fill="rgba(255,255,255,0.08)" />
                  <path d="M60,110 h280" stroke="rgba(255,255,255,0.12)" strokeDasharray="3 5" />
                </svg>
              </div>
            </GrainTile>
          </div>
        </Container>
      </section>

      {/* Planned workflow + evidence */}
      <section className="border-t border-white/[0.08] py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div className="rounded-lg border border-white/[0.08] bg-[#0d0d0f] p-8">
              <p className="font-display text-xs font-semibold uppercase tracking-nav" style={{ color: ACCENT }}>
                On the roadmap
              </p>
              <h3 className="mt-4 text-[22px] font-medium tracking-tight text-fg">
                A combined PHASES + SafeLight workflow.
              </h3>
              <p className="mt-4 text-[14px] leading-relaxed text-fg-muted">
                Planned — the metallurgy from PHASES feeding the crash-failure model in
                SafeLight. Demo not yet available.
              </p>
              <div className="mt-6">
                <ArrowLink href="/material-models" className="text-fg">
                  See SafeLight
                </ArrowLink>
              </div>
            </div>
            <div className="rounded-lg border border-white/[0.08] bg-[#0d0d0f] p-8">
              <p className="font-display text-xs font-semibold uppercase tracking-nav text-fg-dim">
                Evidence &amp; bounds
              </p>
              <p className="mt-4 text-[13px] leading-relaxed text-fg-dim">
                Claims are bounded to the reviewed product interface. No database count is
                published. RSW validation has not been established; V-Gleeble dilatometry and
                SafeLight material-characterisation work do not establish it. The rail-axle
                exhibit is one process example, not simulator validation. PHASES Plugin is the
                solver-deployment form; packaging and availability are not stated here.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <NextProduct label="Next agent" name="AeroCraft" href="/ai-agents/aerocraft" accent="#ff6a3d" />
    </>
  );
}

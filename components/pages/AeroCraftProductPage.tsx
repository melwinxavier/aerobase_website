"use client";

import { Route, Thermometer, FlaskConical, ArrowUpRight } from "lucide-react";
import { Container, Reveal } from "@/components/ui/primitives";
import { RevealText, RevealLine } from "@/components/editorial/RevealText";
import { DisplayHeading } from "@/components/editorial/DisplayHeading";
import { ArrowLink } from "@/components/editorial/ArrowLink";
import { ProductHero, MetaRow, GrainTile, NextProduct } from "@/components/editorial/product";

const ACCENT = "#ff6a3d";

const CONTEXT = [
  {
    icon: Route,
    kicker: "Geometry over time",
    title: "Process path",
    body: "The reviewed animation follows motion along a defined zig-zag path. It shows how the moving point progresses across that path.",
  },
  {
    icon: Thermometer,
    kicker: "Computed response",
    title: "Evolving thermal field",
    body: "The field changes around the moving point as it travels. The footage supports a description of computed thermal response along the path.",
  },
  {
    icon: FlaskConical,
    kicker: "Research connection",
    title: "R&D context",
    body: "ALABAMA is relevant research context for laser additive manufacturing. That context does not turn a research aim into an AeroCraft outcome.",
  },
];

/* Zig-zag build path with a travelling thermal field (illustrative). */
function ThermalPath() {
  return (
    <svg viewBox="0 0 440 260" className="h-full w-full" role="img" aria-label="Illustrative moving thermal field along an additive-manufacturing path">
      <defs>
        <radialGradient id="ac-heat" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(255,200,120,0.9)" />
          <stop offset="35%" stopColor="rgba(255,106,61,0.6)" />
          <stop offset="100%" stopColor="rgba(255,106,61,0)" />
        </radialGradient>
      </defs>
      {/* zig-zag scan path */}
      <path
        d="M60,60 H380 M380,60 L60,110 M60,110 H380 M380,110 L60,160 M60,160 H380 M380,160 L60,210 M60,210 H380"
        fill="none"
        stroke="rgba(255,255,255,0.12)"
        strokeWidth="1.5"
      />
      {/* cooled trail */}
      <path d="M60,160 H240" fill="none" stroke="rgba(255,106,61,0.45)" strokeWidth="2.5" strokeLinecap="round" />
      {/* travelling heat source */}
      <circle cx="240" cy="160" r="44" fill="url(#ac-heat)" />
      <circle cx="240" cy="160" r="5" fill="rgba(255,220,160,1)" />
      <text x="60" y="40" fill="rgba(255,255,255,0.4)" fontSize="10" fontFamily="var(--font-mono)">deposition path</text>
    </svg>
  );
}

export function AeroCraftProductPage() {
  return (
    <>
      <ProductHero
        tag="AEROBASE AI AGENTS · ADDITIVE MANUFACTURING"
        titleLines={["AeroCraft"]}
        meta="IN DEVELOPMENT · CRAFT.AEROBASE.SE"
        accent={ACCENT}
      />

      {/* Overview + hero visual */}
      <section className="pb-20 md:pb-28">
        <Container>
          <div className="grid grid-cols-1 gap-x-[clamp(2rem,5vw,5rem)] gap-y-14 lg:grid-cols-2">
            <div className="max-w-[42rem] lg:sticky lg:top-28 lg:self-start">
              <div className="border-t border-white/[0.12] pt-5">
                <h2 className="font-display text-sm font-semibold uppercase tracking-nav" style={{ color: ACCENT }}>
                  Overview
                </h2>
                <RevealText className="mt-4 text-[clamp(1.2rem,2vw,1.6rem)] font-medium leading-snug tracking-tight text-fg">
                  <RevealLine>Additive-manufacturing</RevealLine>
                  <RevealLine>process simulation — connecting</RevealLine>
                  <RevealLine>inputs to computed response.</RevealLine>
                </RevealText>
                <p className="mt-6 text-[15px] leading-relaxed text-fg-muted">
                  AeroCraft is an Aerobase development direction for connecting process inputs
                  with computed thermal and material response. It is the second agent in the
                  family — same physics-first principle, new domain.
                </p>
                <p className="mt-4 inline-flex rounded border border-white/15 px-3 py-1.5 text-[12px] uppercase tracking-nav text-fg-dim">
                  Technical work in progress — not a finished product demo
                </p>
              </div>

              <dl className="mt-10">
                <MetaRow label="Product">AeroCraft agent</MetaRow>
                <MetaRow label="Domain">Additive manufacturing</MetaRow>
                <MetaRow label="Direction">Process inputs → computed thermal & material response</MetaRow>
                <MetaRow label="Stage">In development</MetaRow>
                <MetaRow label="Home">craft.aerobase.se · 2026</MetaRow>
                <MetaRow label="Research context">ALABAMA (laser AM)</MetaRow>
              </dl>

              <a
                href="/contact"
                className="mt-8 inline-flex items-center gap-1.5 rounded-full border border-white/20 px-5 py-3 font-display text-[0.72rem] font-semibold uppercase tracking-nav text-fg transition-colors hover:bg-fg hover:text-ink"
              >
                Request early access
                <ArrowUpRight className="h-[1em] w-[1em]" strokeWidth={2.25} />
              </a>
            </div>

            <div className="flex flex-col gap-4">
              <GrainTile ratio="1 / 0.72">
                <div className="absolute inset-0 p-6">
                  <ThermalPath />
                </div>
              </GrainTile>
              <p className="text-[0.7rem] uppercase tracking-nav text-fg-dim">
                Development-stage work: a moving thermal field along a build path — illustrative.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Development context — three parts */}
      <section className="border-t border-white/[0.08] py-20 md:py-28">
        <Container>
          <p className="font-display text-xs font-semibold uppercase tracking-nav" style={{ color: ACCENT }}>
            What the artifact supports
          </p>
          <DisplayHeading
            as="h2"
            size="sm"
            className="mt-4 text-fg"
            lines={["Three parts of the", "development context."]}
          />
          <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
            {CONTEXT.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.06}>
                <article className="flex h-full flex-col rounded-lg border border-white/[0.08] bg-[#0d0d0f] p-7">
                  <c.icon className="h-6 w-6" style={{ color: ACCENT }} strokeWidth={1.5} />
                  <p className="mt-6 font-display text-[0.68rem] font-semibold uppercase tracking-nav text-fg-dim">
                    {c.kicker}
                  </p>
                  <h3 className="mt-1 text-[19px] font-medium tracking-tight text-fg">{c.title}</h3>
                  <p className="mt-4 text-[13.5px] leading-relaxed text-fg-muted">{c.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Evidence */}
      <section className="border-t border-white/[0.08] py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div>
              <p className="font-display text-xs font-semibold uppercase tracking-nav" style={{ color: ACCENT }}>
                Where it fits
              </p>
              <DisplayHeading
                as="h2"
                size="sm"
                className="mt-4 text-fg"
                lines={["A family of physics-", "based AI agents."]}
              />
              <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-fg-muted">
                PHASES is the first agent, shipping today for digital metallurgy. AeroCraft is
                next, extending the same method to additive manufacturing.
              </p>
              <div className="mt-6">
                <ArrowLink href="/ai-agents/phases" className="text-fg">
                  Explore PHASES
                </ArrowLink>
              </div>
            </div>
            <div className="rounded-lg border border-white/[0.08] bg-[#0d0d0f] p-8">
              <p className="font-display text-xs font-semibold uppercase tracking-nav text-fg-dim">
                Evidence &amp; bounds
              </p>
              <p className="mt-4 text-[13px] leading-relaxed text-fg-dim">
                The animation shows a moving thermal field along an additive-manufacturing path —
                visual evidence of development work only. ALABAMA is recorded as relevant
                laser-additive-manufacturing research context and is kept separate from the
                footage and from any AeroCraft outcome.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <NextProduct label="Back to the flagship" name="PHASES" href="/ai-agents/phases" accent="#4d8bff" />
    </>
  );
}

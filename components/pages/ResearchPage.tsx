"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/primitives";
import { RevealText, RevealLine } from "@/components/editorial/RevealText";
import { DisplayHeading } from "@/components/editorial/DisplayHeading";
import { EditorialCTA } from "@/components/editorial/EditorialCTA";
import { PROJECTS, STATUS_COLOR, type Project } from "@/lib/projects";

const ACCENT = "#ff2d2d";

function ProjectRow({ p }: { p: Project }) {
  return (
    <Link
      href={`/research/${p.slug}`}
      className="group block border-t border-white/[0.12] py-[clamp(1.75rem,3.5vw,2.75rem)] transition-colors hover:bg-white/[0.02]"
    >
      <Container>
        <div className="grid grid-cols-1 gap-x-[clamp(2rem,5vw,4rem)] gap-y-5 lg:grid-cols-[1fr_1.5fr] lg:items-center">
          {/* Name + grant */}
          <div>
            <div className="flex items-center gap-3">
              <span
                className="u-display text-[clamp(1.8rem,5vw,3.4rem)]"
                style={{ color: p.accent }}
              >
                {p.name}
              </span>
              <ArrowUpRight
                className="h-6 w-6 shrink-0 text-fg-dim transition-all duration-500 ease-expo group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-fg"
                strokeWidth={1.75}
              />
            </div>
            <p className="mt-2 font-display text-[0.68rem] font-semibold uppercase tracking-nav text-fg-dim">
              {p.funder} · {p.grant} · {p.years}
            </p>
          </div>

          {/* Status + role */}
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span
                className="inline-flex items-center gap-2 rounded-full border px-2.5 py-1"
                style={{ borderColor: `${STATUS_COLOR[p.status]}55`, color: STATUS_COLOR[p.status] }}
              >
                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: STATUS_COLOR[p.status] }} />
                <span className="font-display text-[0.66rem] font-semibold uppercase tracking-nav">
                  {p.statusLabel}
                </span>
              </span>
              {p.badge && (
                <span className="font-display text-[0.66rem] font-semibold uppercase tracking-nav text-brand-red">
                  {p.badge}
                </span>
              )}
            </div>
            <p className="mt-4 max-w-xl text-[14px] leading-relaxed text-fg-muted">{p.aerobaseRole}</p>
          </div>
        </div>
      </Container>
    </Link>
  );
}

export function ResearchPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden px-[6vw] pt-[clamp(8rem,20vh,13rem)] pb-16 md:pb-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-1/3 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,45,45,0.1),transparent_70%)]" />
        </div>
        <Container className="relative">
          <RevealText className="font-display text-xs font-semibold uppercase tracking-nav text-brand-red">
            <RevealLine>Research · 8 EU & Swedish-funded projects</RevealLine>
          </RevealText>
          <DisplayHeading
            as="h1"
            size="lg"
            className="mt-6 text-fg"
            lines={["Built in the open,", "with Europe's", "hardest problems."]}
          />
          <RevealText className="mt-8 max-w-2xl text-[clamp(1rem,1.6vw,1.25rem)] font-light leading-relaxed text-fg-muted">
            <RevealLine>A partner in seven funded projects and the coordinator of an</RevealLine>
            <RevealLine>eighth — each with a grant number, funder and public dates.</RevealLine>
          </RevealText>
        </Container>
      </section>

      {/* Summary strip */}
      <section className="border-t border-white/[0.12] px-[6vw] py-14">
        <Container>
          <div className="flex flex-wrap items-start gap-x-[clamp(2.5rem,6vw,5rem)] gap-y-8">
            {[
              ["8", "Funded projects"],
              ["1", "Coordinated (TI-TEX)"],
              ["7", "Horizon Europe"],
              ["1", "Vinnova"],
            ].map(([v, l]) => (
              <div key={l}>
                <div className="u-display text-[clamp(2.6rem,6vw,4.5rem)] text-fg">{v}</div>
                <p className="mt-3 font-display text-[0.68rem] font-semibold uppercase tracking-nav text-fg-muted">
                  {l}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Project index */}
      <div>
        {PROJECTS.map((p) => (
          <ProjectRow key={p.name} p={p} />
        ))}
        <div className="border-t border-white/[0.12]" />
      </div>

      {/* Note */}
      <section className="px-[6vw] py-16">
        <Container>
          <p className="max-w-3xl text-[12.5px] leading-relaxed text-fg-dim">
            Grant records are public on CORDIS (cordis.europa.eu) and Vinnova. Volvo Cars and
            Electrolux Professional appear here only as CiSMA consortium members. RISE, Swerim and
            LTU also partner as test facilities in our{" "}
            <a href="/how-we-work" className="link-underline text-fg-muted hover:text-fg">
              calibration work
            </a>
            .
          </p>
        </Container>
      </section>

      <EditorialCTA
        eyebrow="Collaborate"
        accent={ACCENT}
        lines={["Working on a hard", "materials problem?"]}
        primary={{ label: "Start a project", href: "/contact" }}
        secondary={{ label: "How we work", href: "/how-we-work" }}
      />
    </>
  );
}

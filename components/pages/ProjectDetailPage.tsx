"use client";

import { ArrowUpRight } from "lucide-react";
import { Container, Reveal } from "@/components/ui/primitives";
import { RevealText, RevealLine } from "@/components/editorial/RevealText";
import { ArrowLink } from "@/components/editorial/ArrowLink";
import { ProductHero, MetaRow, NextProduct } from "@/components/editorial/product";
import { STATUS_COLOR, getNextProject, type Project } from "@/lib/projects";

export function ProjectDetailPage({ project: p }: { project: Project }) {
  const next = getNextProject(p.slug);

  return (
    <>
      <ProductHero
        tag={`${p.funder} · ${p.grant}`}
        titleLines={[p.name]}
        meta={`${p.years} · ${p.statusLabel}`}
        accent={p.accent}
      />

      {/* Overview + challenge */}
      <section className="pb-20 md:pb-28">
        <Container>
          <div className="grid grid-cols-1 gap-x-[clamp(2rem,5vw,5rem)] gap-y-14 lg:grid-cols-2">
            {/* Sticky overview + meta */}
            <div className="max-w-[42rem] lg:sticky lg:top-28 lg:self-start">
              <div className="border-t border-white/[0.12] pt-5">
                <h2 className="font-display text-sm font-semibold uppercase tracking-nav" style={{ color: p.accent }}>
                  Overview
                </h2>
                <RevealText className="mt-4 text-[clamp(1.15rem,1.9vw,1.5rem)] font-medium leading-snug tracking-tight text-fg">
                  {p.summary.split(" ").reduce<string[][]>((acc, w, i) => {
                    // pack the summary into ~3 balanced reveal lines
                    const per = Math.ceil(p.summary.split(" ").length / 3);
                    const idx = Math.floor(i / per);
                    (acc[idx] ||= []).push(w);
                    return acc;
                  }, []).map((words, i) => (
                    <RevealLine key={i}>{words.join(" ")}</RevealLine>
                  ))}
                </RevealText>
                <p className="mt-6 text-[13px] uppercase tracking-nav text-fg-dim">{p.fullTitle}</p>
              </div>

              <dl className="mt-10">
                <MetaRow label="Funder">{p.funder}</MetaRow>
                <MetaRow label="Grant">{p.grant}</MetaRow>
                <MetaRow label="Timeline">{p.dateRange}</MetaRow>
                <MetaRow label="Status">
                  <span className="inline-flex items-center gap-2" style={{ color: STATUS_COLOR[p.status] }}>
                    <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: STATUS_COLOR[p.status] }} />
                    {p.statusLabel}
                  </span>
                </MetaRow>
                <MetaRow label="Coordinator">{p.coordinator}</MetaRow>
              </dl>

              <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
                <a
                  href={p.cordis}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/20 px-5 py-3 font-display text-[0.72rem] font-semibold uppercase tracking-nav text-fg transition-colors hover:bg-fg hover:text-ink"
                >
                  {p.funder === "Vinnova" ? "Vinnova record" : "CORDIS record"}
                  <ArrowUpRight className="h-[1em] w-[1em]" strokeWidth={2.25} />
                </a>
                {p.articleUrl && (
                  <ArrowLink href={p.articleUrl} external className="text-fg text-sm">
                    Read the article
                  </ArrowLink>
                )}
              </div>
            </div>

            {/* Challenge + role */}
            <div className="flex flex-col gap-8">
              <div>
                <p className="font-display text-xs font-semibold uppercase tracking-nav" style={{ color: p.accent }}>
                  The challenge
                </p>
                <p className="mt-5 text-[clamp(1rem,1.4vw,1.15rem)] leading-relaxed text-fg-muted">
                  {p.challenge}
                </p>
              </div>
              <div
                className="rounded-lg border p-7"
                style={{ borderColor: `${p.accent}40`, background: `${p.accent}0d` }}
              >
                <p className="font-display text-[0.68rem] font-semibold uppercase tracking-nav" style={{ color: p.accent }}>
                  {p.badge ?? "Aerobase's role"}
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-fg">{p.aerobaseRole}</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Aerobase contributions */}
      <section className="border-t border-white/[0.08] py-20 md:py-28">
        <Container>
          <p className="font-display text-xs font-semibold uppercase tracking-nav" style={{ color: p.accent }}>
            What Aerobase does
          </p>
          <RevealText
            as="h2"
            className="u-display mt-4 text-[clamp(1.9rem,5.5vw,4.75rem)] text-fg"
          >
            <RevealLine>Aerobase&apos;s</RevealLine>
            <RevealLine>contributions.</RevealLine>
          </RevealText>
          <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
            {p.contributions.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.06}>
                <article className="flex h-full flex-col rounded-lg border border-white/[0.08] bg-[#0d0d0f] p-7">
                  <span className="font-display text-2xl font-semibold" style={{ color: p.accent }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-5 text-[18px] font-medium tracking-tight text-fg">{c.title}</h3>
                  <p className="mt-3 text-[13.5px] leading-relaxed text-fg-muted">{c.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Consortium */}
      <section className="border-t border-white/[0.08] py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-x-[clamp(2rem,5vw,5rem)] gap-y-8 lg:grid-cols-[1fr_1.6fr]">
            <div>
              <p className="font-display text-xs font-semibold uppercase tracking-nav" style={{ color: p.accent }}>
                The consortium
              </p>
              <h2 className="mt-4 u-display text-[clamp(1.6rem,4vw,3rem)] text-fg">
                {p.consortium.length} partners
              </h2>
            </div>
            <ul className="flex flex-wrap gap-2.5 self-center">
              {p.consortium.map((partner) => {
                const isAerobase = partner.toLowerCase().includes("aerobase");
                return (
                  <li
                    key={partner}
                    className="rounded-full border px-4 py-2 text-[13px]"
                    style={
                      isAerobase
                        ? { borderColor: `${p.accent}80`, color: p.accent, background: `${p.accent}12` }
                        : { borderColor: "rgba(255,255,255,0.12)", color: "var(--fg-muted)" }
                    }
                  >
                    {partner}
                  </li>
                );
              })}
            </ul>
          </div>
        </Container>
      </section>

      {/* Focus areas */}
      <section className="border-t border-white/[0.08] py-16 md:py-20">
        <Container>
          <p className="font-display text-xs font-semibold uppercase tracking-nav text-fg-muted">
            Focus areas
          </p>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {p.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/[0.12] px-3.5 py-1.5 font-display text-[0.68rem] font-semibold uppercase tracking-nav text-fg-muted"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="mt-10">
            <ArrowLink href="/research" className="text-fg text-sm">
              All research projects
            </ArrowLink>
          </div>
        </Container>
      </section>

      <NextProduct label="Next project" name={next.name} href={`/research/${next.slug}`} accent={next.accent} />
    </>
  );
}

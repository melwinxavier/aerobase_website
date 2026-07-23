"use client";

import { Container, MonoLabel, Reveal } from "@/components/ui/primitives";

/* Inner-page header — the calm equivalent of the homepage hero.
   Sits behind the fixed navbar, so it carries the top padding that clears it. */
export function PageIntro({
  eyebrow,
  title,
  lead,
  dotColor = "#ff2d2d",
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  dotColor?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.05]">
      {/* faint radial glow keyed to the section accent */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-52 left-1/2 h-[560px] w-[900px] -translate-x-1/2 opacity-60"
          style={{
            background: `radial-gradient(50% 50% at 50% 50%, ${dotColor}1f, transparent 70%)`,
          }}
        />
        <div className="section-grain absolute inset-0 opacity-40" />
      </div>

      <Container className="relative">
        <div className="pt-32 pb-16 md:pt-44 md:pb-24">
          <Reveal>
            <MonoLabel dotColor={dotColor} className="!text-fg">
              {eyebrow}
            </MonoLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-7 display max-w-4xl text-[clamp(2.5rem,6.5vw,5rem)] text-fg">
              {title}
            </h1>
          </Reveal>
          {lead && (
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-2xl text-[clamp(1rem,1.6vw,1.2rem)] font-light leading-relaxed text-fg-muted">
                {lead}
              </p>
            </Reveal>
          )}
          {children && (
            <Reveal delay={0.15}>
              <div className="mt-10 flex flex-wrap items-center gap-3">{children}</div>
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  );
}

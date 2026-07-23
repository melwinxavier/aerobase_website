"use client";

import { Container, MonoLabel, Reveal, PillButton } from "@/components/ui/primitives";

/* The shared conversion band used at the foot of the product & content pages.
   Copy matches the homepage CTA so the spine reads the same everywhere. */
export function ContactCTA({
  title = "Send us a grade and a cooling path. We'll send back a benchmarked prediction.",
  eyebrow = "GET STARTED",
}: {
  title?: string;
  eyebrow?: string;
}) {
  return (
    <section className="border-t border-white/[0.05] py-24 md:py-32">
      <Container>
        <Reveal>
          <div
            className="relative overflow-hidden rounded-3xl border border-white/[0.08] p-10 md:p-16"
            style={{
              background:
                "radial-gradient(120% 150% at 50% 0%, rgba(255,45,45,0.1), transparent 60%), var(--ink-card)",
            }}
          >
            <svg
              viewBox="0 0 800 60"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-24 w-full opacity-30"
            >
              <polyline
                points="0,40 40,20 60,45 90,15 120,42 150,25 180,50 210,10 240,44 280,30 320,52 360,18 400,10 440,45 480,25 520,50 560,15 600,42 640,28 680,48 720,20 760,44 800,30"
                fill="none"
                stroke="#ff2d2d"
                strokeWidth="1.5"
              />
            </svg>
            <div className="relative">
              <MonoLabel dotColor="#ff2d2d" className="!text-brand-red">
                {eyebrow}
              </MonoLabel>
              <h2 className="mt-6 display max-w-2xl text-[clamp(1.9rem,4.5vw,3.2rem)] text-fg">
                {title}
              </h2>
              <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-fg-muted">
                Luleå &amp; Trollhättan, Sweden · contact@aerobase.se
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <PillButton variant="green" href="https://phases.aerobase.se">
                  TRY PHASES
                </PillButton>
                <PillButton variant="dark" href="/contact">
                  START A PROJECT
                </PillButton>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

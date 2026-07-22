"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Container, MonoLabel, Reveal, PillButton } from "./ui/primitives";
import { ChapterMarker } from "./ChapterMarker";

const FEATURES = [
  {
    title: "Plan, make & test",
    desc: "We design the test matrix, machine the specimens, and run the campaign — tension, shear and biaxial — at partner facilities.",
  },
  {
    title: "Calibrate, validate & deploy",
    desc: "Neural-network and genetic-algorithm optimization calibrate and validate the model, then it ships as a ready-to-use material card.",
  },
];

const BENEFITS = [
  "Models delivered as ready-to-use material cards",
  "Validated against physical tests, not just fit",
];

function Counter({ target, label }: { target: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-start">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[clamp(3.5rem,9vw,6rem)] font-light leading-none text-fg"
        >
          {target}
        </motion.span>
        <span className="mt-3 text-3xl font-light text-fg-dim">%</span>
      </div>
      <MonoLabel className="mt-3 !text-fg-muted">{label}</MonoLabel>
    </div>
  );
}

export function MaximizeCapacity() {
  return (
    <section className="relative border-t border-white/[0.05] py-20 md:py-28">
      <ChapterMarker index="2.0" title="How We Work" color="#e8b23d" />

      <Container className="md:pl-[280px]">
        <Reveal>
          <MonoLabel dotColor="#e8b23d" className="!text-brand-gold">
            HOW WE WORK
          </MonoLabel>
          <h2 className="mt-6 display max-w-2xl text-[clamp(1.9rem,4vw,3rem)] text-fg">
            Plan. Test. Calibrate. Deploy.
          </h2>
          <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-fg-muted">
            A material model is only as good as the path that made it. Ours is the same
            every time — computed first, then measured.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.06}>
              <article className="min-h-[180px] rounded-2xl border border-white/[0.06] bg-ink-card p-8">
                <h3 className="text-[19px] font-normal text-fg">{f.title}</h3>
                <p className="mt-3 max-w-sm text-[13.5px] leading-relaxed text-fg-muted">
                  {f.desc}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-16">
          <Reveal>
            <MonoLabel>BENEFITS</MonoLabel>
          </Reveal>
          <div className="mt-6 max-w-2xl">
            {BENEFITS.map((b, i) => (
              <Reveal key={b} delay={i * 0.05}>
                <div className="flex items-center gap-4 border-b border-white/[0.06] py-5">
                  <span className="grid h-6 w-6 place-items-center rounded-full border border-brand-green/70">
                    <Check className="h-3.5 w-3.5 text-brand-green" />
                  </span>
                  <span className="text-[17px] text-fg">{b}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Stats */}
        <Reveal>
          <p className="mt-24 max-w-md text-[clamp(1.4rem,2.6vw,2rem)] font-light leading-tight text-fg">
            The result: predictions that beat the legacy baseline.
          </p>
        </Reveal>
        <div className="mt-14 flex flex-wrap gap-x-24 gap-y-10">
          <Counter target={18} label="LEGACY MODEL ERROR" />
          <Counter target={5} label="SAFELIGHT MODEL ERROR" />
        </div>

        {/* CTA band */}
        <Reveal>
          <div className="relative mt-24 flex flex-col items-start justify-between gap-6 overflow-hidden rounded-2xl border border-brand-gold/20 p-8 md:flex-row md:items-center"
            style={{ background: "radial-gradient(120% 160% at 50% 50%, rgba(232,178,61,0.10), transparent 60%), var(--ink)" }}
          >
            <svg viewBox="0 0 800 60" className="pointer-events-none absolute inset-0 h-full w-full opacity-40">
              <polyline
                points="0,40 40,20 60,45 90,15 120,42 150,25 180,50 210,10 240,44 280,30 320,52 360,18 400,10 440,45 480,25 520,50 560,15 600,42 640,28 680,48 720,20 760,44 800,30"
                fill="none" stroke="#e8b23d" strokeWidth="1.5"
              />
            </svg>
            <div className="relative">
              <p className="text-xl font-normal text-fg">Send us a grade and a cooling path.</p>
              <p className="text-xl font-light text-fg-muted">Get a benchmarked prediction.</p>
            </div>
            <div className="relative flex gap-3">
              <PillButton variant="dark">TRY PHASES</PillButton>
              <PillButton variant="gold">CONTACT</PillButton>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

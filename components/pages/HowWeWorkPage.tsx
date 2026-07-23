"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Container, MonoLabel, Reveal, PillButton } from "@/components/ui/primitives";
import { PageIntro } from "@/components/site/PageIntro";
import { ContactCTA } from "@/components/site/ContactCTA";

const STEPS = [
  {
    n: "01",
    title: "Plan",
    desc: "We scope the material, the load cases, and the accuracy you need. No guessing which tests matter — the campaign is designed for the model it has to produce.",
  },
  {
    n: "02",
    title: "Test",
    desc: "We machine the specimens and run the campaign at partner facilities — tension, shear and biaxial, with dilatometry for phase work — to produce real data, not assumptions.",
  },
  {
    n: "03",
    title: "Calibrate",
    desc: "Neural-network and genetic-algorithm optimization fit and validate the model against your parts and named baselines, with uncertainty stated alongside every result.",
  },
  {
    n: "04",
    title: "Deploy",
    desc: "You get a drop-in material card or agent for the solver you already run — LS-DYNA, Abaqus, Radioss and more — and support that stays.",
  },
];

const BENEFITS = [
  "Models delivered as ready-to-use material cards",
  "Validated against physical tests, not just fit",
  "Uncertainty you can act on, reported with every result",
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

export function HowWeWorkPage() {
  return (
    <>
      <PageIntro
        eyebrow="HOW WE WORK"
        dotColor="#e8b23d"
        title={<>Plan. Test. Calibrate. Deploy.</>}
        lead="A material model is only as good as the path that made it. Ours is the same every time — computed first, then measured — so the result beats the legacy baseline instead of matching its guesses."
      >
        <PillButton variant="green" href="/contact">
          START A PROJECT
        </PillButton>
        <PillButton variant="ghost" href="/material-models">
          SEE THE MODELS
        </PillButton>
      </PageIntro>

      {/* ── Four steps ── */}
      <section className="relative border-b border-white/[0.05] py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={(i % 2) * 0.06}>
                <article className="relative flex min-h-[220px] flex-col rounded-2xl border border-white/[0.06] bg-ink-card p-8">
                  <div className="flex items-baseline gap-4">
                    <span className="text-2xl font-light text-brand-gold">{s.n}</span>
                    <h3 className="text-[20px] font-normal text-fg">{s.title}</h3>
                  </div>
                  <p className="mt-4 max-w-md text-[14px] leading-relaxed text-fg-muted">
                    {s.desc}
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
        </Container>
      </section>

      {/* ── Result ── */}
      <section className="relative py-20 md:py-28">
        <Container>
          <Reveal>
            <p className="max-w-md text-[clamp(1.4rem,2.6vw,2rem)] font-light leading-tight text-fg">
              The result: predictions that beat the legacy baseline.
            </p>
            <p className="mt-6 max-w-xl text-[14px] leading-relaxed text-fg-muted">
              On mega-cast aluminium crash, legacy failure models sit around 18% error.
              SafeLight, built this way, lands near 5% on a customer program.
            </p>
          </Reveal>
          <div className="mt-14 flex flex-wrap gap-x-24 gap-y-10">
            <Counter target={18} label="LEGACY MODEL ERROR" />
            <Counter target={5} label="SAFELIGHT MODEL ERROR" />
          </div>
        </Container>
      </section>

      <ContactCTA
        eyebrow="RUN THE PROCESS"
        title="Send us a grade and a cooling path. We'll send back a benchmarked prediction."
      />
    </>
  );
}

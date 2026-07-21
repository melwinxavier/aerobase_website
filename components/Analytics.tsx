"use client";

import { Check, Activity } from "lucide-react";
import { Container, MonoLabel, Reveal } from "./ui/primitives";
import { ChapterMarker } from "./ChapterMarker";

const POWERFUL = [
  "Heat-treatment simulation",
  "CCT/TTT diagram generation",
  "Resistance spot welding",
  "Virtual Gleeble",
  "Solver-ready material cards",
  "Agent-driven, end to end",
];

const BENEFITS = [
  "One model across thousands of grades",
  "Computed from chemistry, not tables",
  "Uncertainty reported with every result",
];

export function Analytics() {
  return (
    <section className="relative border-t border-white/[0.05] py-20 md:py-28">
      <ChapterMarker index="3.0" title="The PHASES Platform" color="#498099" />

      <Container className="md:pl-[280px]">
        <Reveal>
          <MonoLabel dotColor="#498099" className="!text-brand-blue">
            THE PHASES PLATFORM
          </MonoLabel>
          <h2 className="mt-6 display max-w-2xl text-[clamp(1.9rem,4vw,3rem)] text-fg">
            One metallurgical model, put to work in four simulators.
          </h2>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-fg-muted">
            PHASES is a platform, not a single calculator. One composition-aware model
            drives heat-treatment, CCT/TTT, resistance spot welding and a virtual Gleeble —
            or let the Agent drive the whole platform.
          </p>
        </Reveal>

        {/* Dashboard mock */}
        <Reveal>
          <div className="mt-12 overflow-hidden rounded-2xl border border-white/[0.06] bg-ink-card p-8">
            <div className="mb-6 flex items-center gap-2">
              <Activity className="h-4 w-4 text-brand-blue" />
              <MonoLabel className="!text-fg-dim">PHASES · COMPUTED FROM CHEMISTRY</MonoLabel>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {[
                ["FULL CCT", "<5 s"],
                ["CRASH ERROR", "3–5%"],
                ["SOLVERS", "7"],
                ["Ms · LOW-ALLOY", "350 °C"],
              ].map(([l, v]) => (
                <div key={l} className="rounded-xl border border-white/[0.06] bg-black/30 p-4">
                  <MonoLabel className="!text-fg-dim">{l}</MonoLabel>
                  <p className="mt-2 text-xl font-light text-fg">{v}</p>
                </div>
              ))}
            </div>
            <svg viewBox="0 0 800 120" className="mt-6 h-28 w-full">
              <defs>
                <linearGradient id="ag" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgba(73,128,153,0.4)" />
                  <stop offset="100%" stopColor="rgba(73,128,153,0)" />
                </linearGradient>
              </defs>
              <polyline
                points="0,90 60,70 120,80 180,50 240,66 300,40 360,58 420,30 480,50 540,26 600,44 660,20 720,40 800,28"
                fill="none" stroke="#498099" strokeWidth="2"
              />
              <polygon
                points="0,120 0,90 60,70 120,80 180,50 240,66 300,40 360,58 420,30 480,50 540,26 600,44 660,20 720,40 800,28 800,120"
                fill="url(#ag)"
              />
            </svg>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-16 md:grid-cols-2">
          <div>
            <Reveal>
              <MonoLabel>POWERFUL FEATURES</MonoLabel>
            </Reveal>
            <div className="mt-6">
              {POWERFUL.map((b, i) => (
                <Reveal key={b} delay={i * 0.04}>
                  <div className="flex items-center gap-4 border-b border-white/[0.06] py-4">
                    <span className="grid h-5 w-5 place-items-center rounded-full border border-brand-blue/60">
                      <Check className="h-3 w-3 text-brand-blue" />
                    </span>
                    <span className="text-[15px] text-fg">{b}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <div>
            <Reveal>
              <MonoLabel>BENEFITS</MonoLabel>
            </Reveal>
            <div className="mt-6">
              {BENEFITS.map((b, i) => (
                <Reveal key={b} delay={i * 0.04}>
                  <div className="flex items-center gap-4 border-b border-white/[0.06] py-4">
                    <span className="grid h-5 w-5 place-items-center rounded-full border border-brand-green/70">
                      <Check className="h-3 w-3 text-brand-green" />
                    </span>
                    <span className="text-[15px] text-fg">{b}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

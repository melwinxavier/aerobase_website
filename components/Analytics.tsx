"use client";

import { Check, Activity } from "lucide-react";
import { Container, MonoLabel, Reveal } from "./ui/primitives";
import { ChapterMarker } from "./ChapterMarker";

const POWERFUL = [
  "Real-time DPI",
  "Detect most congested APs/OLT Ports",
  "Pinpoint subscriber with lowest QoE",
  "Real-time traffic, latency and loss",
  "Monitor performance per application",
  "Identify possible customer plan upsells",
];

const BENEFITS = [
  "Reduce support calls & truck rolls",
  "Faster support diagnostics",
  "Identify customer plan upsells",
];

export function Analytics() {
  return (
    <section className="relative border-t border-white/[0.05] py-20 md:py-28">
      <ChapterMarker index="3.0" title="Advanced Network Analytics" color="#4d8bff" />

      <Container className="md:pl-[280px]">
        <Reveal>
          <MonoLabel dotColor="#4d8bff" className="!text-brand-blue">
            ADVANCED NETWORK ANALYTICS
          </MonoLabel>
          <h2 className="mt-6 display max-w-2xl text-[clamp(1.9rem,4vw,3rem)] text-fg">
            Advanced subscriber, DPI application &amp; network metrics.
          </h2>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-fg-muted">
            Detect saturated Access Points, OLT ports or subscribers, identify customer
            plan upsells, ensure fast support call diagnosis, and reduce truck rolls.
          </p>
        </Reveal>

        {/* Dashboard mock */}
        <Reveal>
          <div className="mt-12 overflow-hidden rounded-2xl border border-white/[0.06] bg-ink-card p-8">
            <div className="mb-6 flex items-center gap-2">
              <Activity className="h-4 w-4 text-brand-blue" />
              <MonoLabel className="!text-fg-dim">REAL-TIME NETWORK METRICS</MonoLabel>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {[
                ["THROUGHPUT", "38.4 Gbps"],
                ["LATENCY", "12 ms"],
                ["PACKET LOSS", "0.02%"],
                ["ACTIVE SUBS", "48,210"],
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
                  <stop offset="0%" stopColor="rgba(77,139,255,0.4)" />
                  <stop offset="100%" stopColor="rgba(77,139,255,0)" />
                </linearGradient>
              </defs>
              <polyline
                points="0,90 60,70 120,80 180,50 240,66 300,40 360,58 420,30 480,50 540,26 600,44 660,20 720,40 800,28"
                fill="none" stroke="#4d8bff" strokeWidth="2"
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

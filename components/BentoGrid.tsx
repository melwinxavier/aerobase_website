"use client";

import { motion } from "framer-motion";
import { Sun } from "lucide-react";
import { Container, MonoLabel, Reveal } from "./ui/primitives";

/* Small decorative grid of squares that lights up (Enhance QoE card) */
function QoEGrid() {
  const lit = new Set([0, 6]);
  const red = new Set([0, 6]);
  return (
    <div className="grid w-[190px] grid-cols-3 gap-2.5">
      {Array.from({ length: 9 }).map((_, i) => (
        <motion.span
          key={i}
          className="aspect-square rounded-md border"
          style={{
            borderColor: red.has(i) ? "rgba(255,45,45,0.7)" : "rgba(255,255,255,0.14)",
            backgroundColor: lit.has(i) ? "rgba(255,255,255,0.04)" : "transparent",
          }}
          animate={red.has(i) ? { opacity: [0.5, 1, 0.5] } : {}}
          transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.2 }}
        />
      ))}
    </div>
  );
}

/* Analytics sparkline-ish decorative rows */
function AnalyticsDeco() {
  return (
    <div className="flex w-full max-w-[240px] flex-col gap-5 opacity-70">
      {[0, 1].map((r) => (
        <div key={r} className="h-px w-full bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.18)_0_4px,transparent_4px_9px)]" />
      ))}
      <svg viewBox="0 0 240 40" className="h-8 w-full">
        <polyline
          points="0,30 30,28 60,20 90,26 120,10 150,22 180,14 210,24 240,18"
          fill="none"
          stroke="#4d8bff"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}

export function BentoGrid() {
  return (
    <section className="relative py-16 md:py-24">
      <Container>
        <Reveal>
          <h2 className="display max-w-2xl text-[clamp(2rem,4.5vw,3.1rem)] text-fg">
            AI-powered optimization solving complex problems.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {/* Row 1 — Enhance QoE (wide) */}
          <Reveal className="lg:row-span-1">
            <article className="flex h-full min-h-[300px] items-center gap-8 overflow-hidden rounded-2xl border border-white/[0.06] bg-ink-card p-8">
              <div className="hidden shrink-0 sm:block">
                <QoEGrid />
              </div>
              <div>
                <MonoLabel dotColor="#ff2d2d" className="!text-brand-red">
                  ENHANCE SUBSCRIBER QOE
                </MonoLabel>
                <h3 className="mt-4 max-w-xs text-[22px] font-normal leading-snug text-fg">
                  Higher speed, lower latency and less packet loss
                </h3>
                <p className="mt-4 max-w-xs text-[13.5px] leading-relaxed text-fg-muted">
                  Improve your network quality and avoid low streaming quality, dropped
                  video calls, mediocre speed test results and high gaming latency.
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div>
                    <MonoLabel>SUPPORT CALLS</MonoLabel>
                    <div className="mt-1 flex items-center gap-2">
                      <span className="text-3xl font-light text-fg">-35%</span>
                      <span className="text-brand-green">↓</span>
                    </div>
                  </div>
                  <div className="ml-4 border-l border-white/10 pl-4">
                    <MonoLabel>CHADD GILES</MonoLabel>
                    <MonoLabel className="!text-fg-dim">CTO, RESOUND NETWORKS</MonoLabel>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>

          {/* Row 1 col 2 — stacked BQN + ACM */}
          <div className="grid grid-rows-2 gap-4">
            <Reveal delay={0.05}>
              <article className="relative flex min-h-[180px] flex-col justify-end overflow-hidden rounded-2xl border border-white/[0.06] bg-ink-card p-8">
                <div className="absolute inset-0">
                  <div className="absolute -right-10 -top-16 h-64 w-96 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,90,40,0.55),transparent_60%)] blur-xl" />
                  <div className="absolute right-0 top-6 h-40 w-[70%] rotate-[-18deg] bg-[linear-gradient(90deg,transparent,rgba(255,180,120,0.8),transparent)] blur-[10px]" />
                </div>
                <div className="relative">
                  <MonoLabel>BQN PLATFORM</MonoLabel>
                  <h3 className="mt-3 max-w-xs text-[22px] font-normal leading-snug text-fg">
                    Bequant supports network nodes up to 400 Gbps
                  </h3>
                </div>
              </article>
            </Reveal>
            <Reveal delay={0.1}>
              <article className="flex min-h-[180px] items-center gap-6 overflow-hidden rounded-2xl border border-white/[0.06] bg-ink-card p-8">
                <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full border border-white/10">
                  <Sun className="h-7 w-7 animate-spinSlow text-fg-muted" strokeWidth={1} />
                </div>
                <div>
                  <MonoLabel>ACM FEATURE</MonoLabel>
                  <h3 className="mt-3 text-[22px] font-normal leading-snug text-fg">
                    AI-powered congestion management
                  </h3>
                </div>
              </article>
            </Reveal>
          </div>

          {/* Row 2 — Advanced analytics */}
          <Reveal>
            <article className="flex h-full min-h-[300px] flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.06] bg-ink-card p-8">
              <div className="pt-4">
                <AnalyticsDeco />
              </div>
              <div>
                <MonoLabel dotColor="#4d8bff" className="!text-brand-blue">
                  ADVANCED NETWORK ANALYTICS
                </MonoLabel>
                <h3 className="mt-4 max-w-sm text-[22px] font-normal leading-snug text-fg">
                  Advanced subscriber, DPI Application &amp; network metrics
                </h3>
                <p className="mt-4 max-w-sm text-[13.5px] leading-relaxed text-fg-muted">
                  Detect saturated Access Points, OLT ports or subscribers, identify
                  customer plan upsells, and ensure fast support call diagnosis.
                </p>
              </div>
            </article>
          </Reveal>

          {/* Row 2 col 2 — Maximize capacity with media */}
          <Reveal delay={0.05}>
            <article className="flex h-full min-h-[300px] items-center gap-8 overflow-hidden rounded-2xl border border-white/[0.06] bg-ink-card p-8">
              <div className="relative hidden h-full min-h-[220px] w-[45%] shrink-0 overflow-hidden rounded-xl sm:block">
                <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_20%_50%,rgba(232,178,61,0.5),transparent_55%)]" />
                <div className="absolute inset-0 bg-[repeating-linear-gradient(105deg,transparent_0_10px,rgba(255,210,120,0.25)_10px_12px)] blur-[3px]" />
              </div>
              <div>
                <MonoLabel dotColor="#e8b23d" className="!text-brand-gold">
                  MAXIMIZE NETWORK CAPACITY
                </MonoLabel>
                <h3 className="mt-4 max-w-xs text-[22px] font-normal leading-snug text-fg">
                  More subscribers per Access Point or OLT Port
                </h3>
                <p className="mt-4 max-w-xs text-[13.5px] leading-relaxed text-fg-muted">
                  Shaping based on DPI and network topology allows more subscribers per
                  Access Point or OLT Port without quality loss.
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div>
                    <MonoLabel>SUBSCRIBERS PER AP</MonoLabel>
                    <div className="mt-1 flex items-center gap-2">
                      <span className="text-3xl font-light text-fg">+10%</span>
                      <span className="text-brand-green">↑</span>
                    </div>
                  </div>
                  <div className="ml-4 border-l border-white/10 pl-4">
                    <MonoLabel>ANIBAL ENRÍQUEZ</MonoLabel>
                    <MonoLabel className="!text-fg-dim">CEO, COMUNICATE</MonoLabel>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

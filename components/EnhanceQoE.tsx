"use client";

import { motion } from "framer-motion";
import { Maximize2, Check } from "lucide-react";
import { Container, MonoLabel, Reveal } from "./ui/primitives";
import { ChapterMarker } from "./ChapterMarker";
import { LogoMark } from "./Logo";

function FeatureCard({
  bracket,
  title,
  desc,
  children,
  className = "",
}: {
  bracket: string;
  title: string;
  desc: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <article
      className={`group relative flex min-h-[260px] flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-ink-card p-7 transition-colors hover:border-white/[0.12] ${className}`}
    >
      <Maximize2 className="absolute right-6 top-6 h-4 w-4 text-fg-dim opacity-0 transition-opacity group-hover:opacity-100" />
      <h3 className="text-[19px] font-normal leading-snug text-fg">
        <span className="text-brand-red">{bracket}</span> {title}
      </h3>
      <p className="mt-2 max-w-sm text-[13px] leading-relaxed text-fg-muted">{desc}</p>
      <div className="mt-auto pt-8">{children}</div>
    </article>
  );
}

/* Decorative queue rows for AQM */
function Queues() {
  return (
    <div className="space-y-3">
      {[8, 6, 3].map((count, r) => (
        <div key={r} className="flex items-center gap-4">
          <MonoLabel className="w-16 !text-fg-dim">QUEUE {r + 1}</MonoLabel>
          <div className="flex gap-1.5">
            {Array.from({ length: count }).map((_, i) => (
              <motion.span
                key={i}
                className="h-7 w-6 rounded border border-white/12"
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.12 + r * 0.3 }}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

const BENEFITS = [
  "Reduce support calls & truck rolls",
  "Reduce customer churn",
  "Gain new customers",
  "Cut costs with centralized management",
];

export function EnhanceQoE() {
  return (
    <section className="relative border-t border-white/[0.05] py-20 md:py-28">
      <ChapterMarker index="1.0" title="Enhance Subscriber QoE" color="#ff2d2d" />

      <Container className="md:pl-[280px]">
        <Reveal>
          <MonoLabel dotColor="#ff2d2d" className="!text-brand-red">
            ENHANCE SUBSCRIBER QOE
          </MonoLabel>
          <h2 className="mt-6 display max-w-2xl text-[clamp(1.9rem,4vw,3rem)] text-fg">
            Higher speed, lower latency and less packet loss.
          </h2>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-fg-muted">
            Powerful features to significantly enhance your subscribers&apos; Quality of
            Experience.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2">
          <Reveal>
            <FeatureCard
              bracket="[TCPO]"
              title="TCP Optimization"
              desc="Faster downloads and uploads."
            >
              <div className="flex items-center justify-center gap-3 rounded-xl border border-white/[0.06] bg-black/40 py-8">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-brand-red/15">
                  <LogoMark className="h-5 w-5 text-brand-red" />
                </div>
                <div className="flex gap-1">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <motion.span
                      key={i}
                      className="h-1.5 w-1.5 rounded-full bg-brand-red"
                      animate={{ opacity: [0.2, 1, 0.2] }}
                      transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.1 }}
                    />
                  ))}
                </div>
              </div>
              <MonoLabel className="mt-4 block text-center !text-fg-dim">BQN SOFTWARE</MonoLabel>
            </FeatureCard>
          </Reveal>

          <Reveal delay={0.05}>
            <FeatureCard
              bracket="[AQM]"
              title="Active Queue Management"
              desc="Enforce rate plans with the most advanced queueing technology, to lower latency and packet loss at full load."
            >
              <Queues />
            </FeatureCard>
          </Reveal>

          <Reveal>
            <FeatureCard
              bracket="[ACM]"
              title="Automatic Congestion Management"
              desc="Real-time machine learning to achieve lower latency and packet loss, even when running below the rate plan limit."
            >
              <svg viewBox="0 0 320 60" className="h-14 w-full">
                <polyline
                  points="0,45 25,20 45,50 70,15 95,48 120,25 145,55 170,10 195,40 220,30 245,52 270,18 300,44 320,30"
                  fill="none"
                  stroke="#ff2d2d"
                  strokeWidth="1.5"
                />
              </svg>
            </FeatureCard>
          </Reveal>

          <Reveal delay={0.05}>
            <FeatureCard
              bracket=""
              title="DPI/App-based Prioritization"
              desc="DPI to detect applications, like speed tests and teleconferences, to prioritize them and guarantee the best quality of service."
            >
              <div className="flex gap-1.5">
                {Array.from({ length: 6 }).map((_, i) => (
                  <span key={i} className="h-9 flex-1 rounded border border-white/12" />
                ))}
              </div>
            </FeatureCard>
          </Reveal>
        </div>

        {/* Benefits */}
        <div className="mt-24">
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
  );
}

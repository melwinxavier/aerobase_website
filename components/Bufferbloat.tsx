"use client";

import { Container, MonoLabel, Reveal } from "./ui/primitives";

function Gauge({
  grade,
  good,
  latency,
}: {
  grade: string;
  good?: boolean;
  latency: [string, string, string];
}) {
  const c = good ? "#00bf2a" : "#e8b23d";
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border p-8 ${
        good ? "border-brand-green/25" : "border-white/[0.07]"
      }`}
      style={{
        background: good
          ? "radial-gradient(120% 120% at 50% 0%, rgba(0,191,42,0.12), transparent 60%), #141518"
          : "#141518",
      }}
    >
      <MonoLabel>ACM + TCPO</MonoLabel>
      <div className="mt-6 grid grid-cols-2 gap-8">
        <div>
          <MonoLabel className="!text-fg-dim">BUFFERBLOAT GRADE</MonoLabel>
          <div className="mt-6 grid place-items-center">
            <div className="relative grid h-28 w-28 place-items-center">
              <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full -rotate-90">
                <circle cx="50" cy="50" r="44" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="4" />
                <circle
                  cx="50"
                  cy="50"
                  r="44"
                  fill="none"
                  stroke={c}
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray={2 * Math.PI * 44}
                  strokeDashoffset={2 * Math.PI * 44 * (good ? 0.05 : 0.45)}
                />
              </svg>
              <span className="text-4xl font-light" style={{ color: c }}>
                {grade}
              </span>
            </div>
          </div>
        </div>
        <div>
          <MonoLabel className="!text-fg-dim">LATENCY</MonoLabel>
          <ul className="mt-6 space-y-4">
            {[
              ["UNLOADED", latency[0]],
              ["DOWNLOAD ACTIVE", latency[1]],
              ["UPLOAD ACTIVE", latency[2]],
            ].map(([label, val]) => (
              <li key={label} className="flex items-baseline justify-between border-b border-white/[0.06] pb-2">
                <MonoLabel className="!text-fg-dim">{label}</MonoLabel>
                <span className="text-2xl font-light text-fg">
                  {val}
                  <span className="ml-1 text-xs text-fg-dim">MS</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function Bufferbloat() {
  return (
    <section className="py-20 md:py-28">
      <Container className="md:pl-[280px]">
        <Reveal>
          <h2 className="display max-w-2xl text-[clamp(1.9rem,4vw,3rem)] text-fg">
            Transform your bufferbloat network grade.
          </h2>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-fg-muted">
            If your customers use the popular Waveform bufferbloat test, which assigns a
            grade to your quality in terms of bufferbloat and its suitability for gaming,
            the Bequant QoE will provide a significant boost in the grade of your network.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2">
          <Reveal>
            <Gauge grade="B" latency={["25", "180", "210"]} />
          </Reveal>
          <Reveal delay={0.08}>
            <Gauge grade="A+" good latency={["5", "12", "14"]} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

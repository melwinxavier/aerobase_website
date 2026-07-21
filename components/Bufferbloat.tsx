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
      <MonoLabel>{good ? "SAFELIGHT MODEL" : "LEGACY MODEL"}</MonoLabel>
      <div className="mt-6 grid grid-cols-2 gap-8">
        <div>
          <MonoLabel className="!text-fg-dim">CRASH PREDICTION</MonoLabel>
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
          <MonoLabel className="!text-fg-dim">ERROR BY LOAD CASE</MonoLabel>
          <ul className="mt-6 space-y-4">
            {[
              ["TENSION", latency[0]],
              ["SHEAR", latency[1]],
              ["BIAXIAL", latency[2]],
            ].map(([label, val]) => (
              <li key={label} className="flex items-baseline justify-between border-b border-white/[0.06] pb-2">
                <MonoLabel className="!text-fg-dim">{label}</MonoLabel>
                <span className="text-2xl font-light text-fg">
                  {val}
                  <span className="ml-1 text-xs text-fg-dim">%</span>
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
            Beat the legacy crash-failure baseline.
          </h2>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-fg-muted">
            On high-pressure die-cast (mega-cast) aluminium, legacy failure models like
            GISSMO and CrachFEM predict crash behavior to within 12–18% of full-vehicle
            tests. SafeLight, calibrated on real data, brings that error down to 3–5%.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2">
          <Reveal>
            <Gauge grade="C" latency={["14", "16", "18"]} />
          </Reveal>
          <Reveal delay={0.08}>
            <Gauge grade="A+" good latency={["3", "4", "5"]} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

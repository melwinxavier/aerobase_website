"use client";

import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import { Container, MonoLabel, Reveal, PillButton } from "./ui/primitives";

/* A simple dotted-globe cluster to evoke the world-map dot art */
function DottedMap() {
  const dots: { x: number; y: number }[] = [];
  for (let y = 0; y < 22; y++) {
    for (let x = 0; x < 44; x++) {
      // rough continents mask via pseudo noise
      const cx = x / 44;
      const cy = y / 22;
      const land =
        (cx > 0.12 && cx < 0.32 && cy > 0.2 && cy < 0.75) || // americas
        (cx > 0.44 && cx < 0.58 && cy > 0.18 && cy < 0.7) || // eu/africa
        (cx > 0.62 && cx < 0.9 && cy > 0.2 && cy < 0.6); // asia
      if (land && (x + y) % 2 === 0) dots.push({ x, y });
    }
  }
  return (
    <svg viewBox="0 0 440 220" className="w-full max-w-md">
      {dots.map((d, i) => (
        <circle key={i} cx={d.x * 10 + 5} cy={d.y * 10 + 5} r="1.6" fill="rgba(255,255,255,0.28)" />
      ))}
    </svg>
  );
}

export function ResearchCTA() {
  return (
    <section className="border-t border-white/[0.05]">
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,420px)_1fr]">
        {/* Left panel */}
        <div className="border-white/[0.05] p-10 lg:border-r">
          <Reveal>
            <h3 className="text-2xl font-light leading-snug text-fg">
              Built in the open, on{" "}
              <span className="text-brand-red">8 EU &amp; Swedish projects</span>.
            </h3>
            <div className="my-10">
              <DottedMap />
            </div>
            <PillButton variant="dark">RESEARCH</PillButton>
          </Reveal>
        </div>

        {/* Right CTA */}
        <div className="relative flex min-h-[440px] items-center overflow-hidden p-10 lg:p-16">
          {/* concentric radar rings */}
          <div className="pointer-events-none absolute -right-40 top-1/2 -translate-y-1/2">
            {[240, 360, 480, 600].map((r, i) => (
              <motion.span
                key={r}
                className="absolute rounded-full border"
                style={{
                  width: r,
                  height: r,
                  left: -r / 2,
                  top: -r / 2,
                  borderColor: i === 2 ? "rgba(255,45,45,0.35)" : "rgba(255,255,255,0.08)",
                  borderStyle: i === 2 ? "dashed" : "solid",
                }}
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, delay: i * 0.4 }}
              />
            ))}
          </div>

          <div className="relative">
            <Reveal>
              <div className="mb-8 flex items-center gap-2.5">
                <span className="flex h-5 w-5 items-center justify-center rounded-full border border-brand-red/60">
                  <BadgeCheck className="h-3 w-3 text-brand-red" />
                </span>
                <MonoLabel className="!text-fg">8 EU &amp; SWEDISH-FUNDED PROJECTS</MonoLabel>
              </div>
              <h2 className="display max-w-lg text-[clamp(2rem,4.5vw,3.4rem)] text-fg">
                Send us a grade and a cooling path. We&apos;ll send back a benchmarked prediction.
              </h2>
              <div className="mt-10">
                <PillButton variant="green">START A PROJECT</PillButton>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { Container } from "./ui/primitives";

const LOGOS = [
  "LTU", "RISE", "Swerim", "Volvo", "Stellantis",
  "GKN", "Ansys", "Fraunhofer", "SINTEF", "Gestamp", "NVIDIA", "Vinnova",
];

export function TrustStrip() {
  return (
    <section className="py-16">
      <Container>
        <div className="overflow-hidden rounded-2xl border border-white/[0.06] bg-ink-card px-8 py-10">
          <p className="text-[15px] text-fg">
            Trusted by research &amp; industry partners across{" "}
            <span className="text-brand-red">aerospace · automotive · energy</span>
          </p>
          <div className="relative mt-8 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
            <div className="flex w-max animate-marquee items-center gap-16">
              {[...LOGOS, ...LOGOS].map((l, i) => (
                <span
                  key={i}
                  className="shrink-0 text-lg font-medium tracking-tight text-fg-dim opacity-60"
                >
                  {l}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

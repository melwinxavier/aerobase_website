"use client";

import { Container } from "./ui/primitives";

const LOGOS = [
  "InfoWest", "Comunicate", "WiFi Canarias", "ResoundNet", "Winncom",
  "Cambium", "NetPro", "OptiLink", "SkyMesh", "FiberOne", "AirNet", "PulseISP",
];

export function LogoStrip() {
  return (
    <section className="py-16">
      <Container>
        <div className="overflow-hidden rounded-2xl border border-white/[0.06] bg-ink-card px-8 py-10">
          <p className="text-[15px] text-fg">
            BQN Platform Powers <span className="text-brand-red">600+ ISPs</span>
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

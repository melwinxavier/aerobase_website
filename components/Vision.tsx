"use client";

import { ChevronsRight } from "lucide-react";
import { Container, MonoLabel, Reveal, PillButton } from "./ui/primitives";

export function Vision() {
  return (
    <section className="border-t border-white/[0.05] py-24 md:py-32">
      <Container>
        <Reveal>
          <h2 className="display max-w-4xl text-[clamp(1.8rem,4vw,3rem)] text-fg">
            We are dedicated to advancing technology that maximizes network quality by
            optimizing the use of available resources.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2">
          <Reveal>
            <article
              className="flex min-h-[240px] flex-col justify-between rounded-2xl border border-white/[0.06] p-8"
              style={{ background: "radial-gradient(120% 120% at 100% 0%, rgba(255,45,45,0.12), transparent 55%), #141518" }}
            >
              <MonoLabel dotColor="#ff2d2d" className="!text-brand-red">THE BIGGER VISION</MonoLabel>
              <div className="flex items-end justify-between">
                <span className="text-2xl font-light text-fg">About Bequant</span>
                <PillButton variant="dark">READ</PillButton>
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.06}>
            <article className="group relative flex min-h-[240px] items-end overflow-hidden rounded-2xl border border-white/[0.06]">
              <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_30%_20%,rgba(232,178,61,0.25),transparent_55%),linear-gradient(120deg,#2a2418,#141518)]" />
              <div className="relative flex w-full items-end justify-between p-8">
                <div>
                  <MonoLabel className="!text-fg-dim">CAREERS</MonoLabel>
                  <p className="mt-2 text-2xl font-light text-fg">Open positions</p>
                </div>
                <span className="grid h-9 w-9 place-items-center rounded-md bg-white/[0.08] transition-colors group-hover:bg-white/[0.16]">
                  <ChevronsRight className="h-4 w-4 text-fg" />
                </span>
              </div>
            </article>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import { Container } from "./ui/primitives";
import { ParticleHero } from "./ParticleHero";

const rise = (i: number) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.9,
    delay: 0.2 + i * 0.12,
    ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
  },
});

export function Hero() {
  return (
    <section id="top" className="relative h-[100svh] min-h-[720px] w-full overflow-hidden">
      {/* Generative airfoil point cloud that morphs to a shell on scroll */}
      <div className="pointer-events-none absolute inset-0">
        <ParticleHero className="h-full w-full opacity-90" />
      </div>
      {/* readability scrim behind the headline (adapts to theme) */}
      <div className="hero-scrim pointer-events-none absolute inset-0" />
      {/* vignette + bottom fade into page */}
      <div className="hero-vignette absolute inset-0" />
      <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-b from-transparent to-ink" />

      <Container className="relative z-10 flex h-full flex-col justify-center">
        <div className="max-w-3xl">
          <motion.div {...rise(0)} className="mb-8 flex items-center gap-2.5">
            <span className="flex h-5 w-5 items-center justify-center rounded-full border border-brand-red/60">
              <BadgeCheck className="h-3 w-3 text-brand-red" />
            </span>
            <span className="mono-label text-fg">PHYSICS-BASED AI · MATERIALS &amp; MANUFACTURING</span>
          </motion.div>

          <h1 className="display text-[clamp(3.25rem,10.5vw,6.5rem)] text-fg">
            <motion.span {...rise(1)} className="block">
              AI agents that
            </motion.span>
            <motion.span {...rise(2)} className="block">
              know the physics.
            </motion.span>
          </h1>

          <motion.p
            {...rise(3)}
            className="mt-7 max-w-md text-[15px] leading-relaxed text-fg-muted"
          >
            Aerobase builds physics-based AI for materials and manufacturing. Digital
            metallurgy, additive, and crash, grounded in real experiments.
          </motion.p>
        </div>
      </Container>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import { Container } from "./ui/primitives";

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
      {/* Cinematic streaks background */}
      <div className="absolute inset-0 hero-streaks" />
      <div className="absolute inset-0 streak-rays animate-streak" />
      {/* speed light lines */}
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 14 }).map((_, i) => {
          const angle = -30 + i * (60 / 13);
          return (
            <motion.span
              key={i}
              className="absolute left-1/2 top-[60%] h-[2px] origin-left"
              style={{
                width: "70vw",
                rotate: `${angle}deg`,
                background:
                  "linear-gradient(90deg, rgba(255,150,80,0) 0%, rgba(255,120,50,0.5) 60%, rgba(255,200,120,0.9) 100%)",
              }}
              initial={{ scaleX: 0.2, opacity: 0 }}
              animate={{ scaleX: [0.2, 1], opacity: [0, 0.8, 0.5] }}
              transition={{
                duration: 3.5 + (i % 5),
                delay: i * 0.15,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          );
        })}
      </div>
      {/* vignette + bottom fade into page */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_40%,transparent_35%,rgba(10,7,8,0.85)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-b from-transparent to-ink" />

      <Container className="relative z-10 flex h-full flex-col justify-center">
        <div className="max-w-3xl">
          <motion.div {...rise(0)} className="mb-8 flex items-center gap-2.5">
            <span className="flex h-5 w-5 items-center justify-center rounded-full border border-brand-red/60">
              <BadgeCheck className="h-3 w-3 text-brand-red" />
            </span>
            <span className="mono-label text-fg">TRUSTED BY 600+ NETWORKS</span>
          </motion.div>

          <h1 className="display text-[clamp(3.25rem,10.5vw,6.5rem)] text-fg">
            <motion.span {...rise(1)} className="block">
              Maximize
            </motion.span>
            <motion.span {...rise(2)} className="block">
              your network.
            </motion.span>
          </h1>

          <motion.p
            {...rise(3)}
            className="mt-7 max-w-md text-[15px] leading-relaxed text-fg-muted"
          >
            The most advanced technology to maximize your network performance and
            visibility.
          </motion.p>
        </div>
      </Container>
    </section>
  );
}

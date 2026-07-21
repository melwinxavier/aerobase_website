"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { Container, MonoLabel } from "./ui/primitives";

function Word({
  children,
  range,
  progress,
  highlight,
}: {
  children: string;
  range: [number, number];
  progress: MotionValue<number>;
  highlight?: boolean;
}) {
  const opacity = useTransform(progress, range, [0.18, 1]);
  const color = useTransform(
    progress,
    range,
    highlight ? ["rgba(249,67,0,0.25)", "rgb(249,67,0)"] : ["rgba(239,239,239,0.2)", "rgb(239,239,239)"]
  );
  return (
    <motion.span style={{ opacity, color }} className="mr-[0.28em] inline-block">
      {children}
    </motion.span>
  );
}

export function TestimonialReveal({
  quote,
  highlightWords = [],
  name,
  role,
  company,
  country,
}: {
  quote: string;
  highlightWords?: string[];
  name: string;
  role: string;
  company: string;
  country: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "start 0.3"],
  });

  const words = quote.split(" ");
  const hi = new Set(highlightWords.map((w) => w.toLowerCase().replace(/[.,]/g, "")));

  return (
    <section className="py-24 md:py-32">
      <Container>
        <div ref={ref} className="flex max-w-4xl gap-6">
          <span className="select-none font-serif text-6xl leading-none text-fg-dim">“</span>
          <div>
            <p className="text-[clamp(1.4rem,3vw,2.1rem)] font-light leading-[1.25] tracking-tight">
              {words.map((w, i) => {
                const start = i / words.length;
                const end = start + 1 / words.length;
                return (
                  <Word
                    key={i}
                    range={[start, end]}
                    progress={scrollYProgress}
                    highlight={hi.has(w.toLowerCase().replace(/[.,]/g, ""))}
                  >
                    {w}
                  </Word>
                );
              })}
            </p>
            <div className="mt-10 flex gap-14">
              <div>
                <MonoLabel className="!text-fg">{name}</MonoLabel>
                <MonoLabel className="!text-fg-dim">{role}</MonoLabel>
              </div>
              <div>
                <MonoLabel className="!text-fg">{company}</MonoLabel>
                <MonoLabel className="!text-fg-dim">{country}</MonoLabel>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

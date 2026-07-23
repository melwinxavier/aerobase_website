"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { cn } from "@/lib/cn";

/* Masked line-reveal — children wrapped in <RevealLine> slide up from behind an
   overflow-clip when scrolled into view. Ported from the_unseen_hook's editorial
   text-reveal cadence. Renders statically under reduced motion. */

const container: Variants = {
  hidden: {},
  show: (delay: number = 0) => ({
    transition: { staggerChildren: 0.06, delayChildren: delay },
  }),
};

export function RevealText({
  children,
  className,
  delay = 0,
  as = "div",
  once = true,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "span" | "p" | "h1" | "h2" | "h3" | "li";
  once?: boolean;
}) {
  const reduced = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;

  if (reduced) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      variants={container}
      custom={delay}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "0px 0px -12% 0px" }}
    >
      {children}
    </MotionTag>
  );
}

const line: Variants = {
  hidden: { y: "110%" },
  show: { y: "0%", transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};

export function RevealLine({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <span className={cn("block", className)}>{children}</span>;
  }

  return (
    <span className={cn("block overflow-hidden", className)}>
      <motion.span variants={line} className="block will-change-transform">
        {children}
      </motion.span>
    </span>
  );
}

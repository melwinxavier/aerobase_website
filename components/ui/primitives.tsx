"use client";

import Link from "next/link";
import { ChevronsRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

/* ---------- Mono eyebrow label ---------- */
export function MonoLabel({
  children,
  className,
  dotColor,
}: {
  children: React.ReactNode;
  className?: string;
  dotColor?: string;
}) {
  return (
    <span className={cn("mono-label inline-flex items-center gap-2 text-fg-muted", className)}>
      {dotColor && (
        <span
          className="inline-block h-1.5 w-1.5 rounded-full"
          style={{ backgroundColor: dotColor }}
        />
      )}
      {children}
    </span>
  );
}

/* ---------- Buttons ---------- */
type BtnVariant = "dark" | "green" | "ghost" | "gold";

export function PillButton({
  children,
  variant = "dark",
  className,
  href = "#",
}: {
  children: React.ReactNode;
  variant?: BtnVariant;
  className?: string;
  href?: string;
}) {
  const base =
    "mono-label group inline-flex items-center gap-3 rounded-md px-4 py-2.5 transition-colors duration-200";
  const variants: Record<BtnVariant, string> = {
    dark: "bg-white/[0.06] text-fg hover:bg-white/[0.12] border border-white/10",
    green:
      "border border-brand-green/70 bg-brand-green/10 text-brand-green hover:bg-brand-green/20",
    gold: "border border-brand-gold/60 bg-brand-gold/10 text-brand-gold hover:bg-brand-gold/20",
    ghost: "text-fg-muted hover:text-fg",
  };
  const cls = cn(base, variants[variant], className);
  const inner = (
    <>
      <span>{children}</span>
      <ChevronsRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
    </>
  );

  // Internal routes get client-side navigation; external URLs and #anchors use <a>.
  const isInternal = href.startsWith("/");
  if (isInternal) {
    return (
      <Link href={href} className={cls}>
        {inner}
      </Link>
    );
  }
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      className={cls}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {inner}
    </a>
  );
}

/* ---------- Reveal on scroll ---------- */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Section shell ---------- */
export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-container px-6 md:px-10", className)}>
      {children}
    </div>
  );
}

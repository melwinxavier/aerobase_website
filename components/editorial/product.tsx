"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/primitives";
import { DisplayHeading } from "./DisplayHeading";

/* Shared building blocks for the editorial product pages (PHASES, AeroCraft).
   Design ported from the_unseen_hook's website case-study pages. */

/** Centred discipline tag → giant accent display title → status/meta line. */
export function ProductHero({
  tag,
  titleLines,
  meta,
  accent,
}: {
  tag: string;
  titleLines: string[];
  meta: string;
  accent: string;
}) {
  return (
    <header className="relative flex min-h-[74vh] flex-col items-center justify-center px-[6vw] pt-[clamp(7rem,20vh,12rem)] pb-[10vh] text-center">
      <p
        className="mb-[clamp(0.75rem,1.6vw,1.5rem)] font-display text-[0.72rem] font-semibold uppercase leading-tight tracking-nav sm:text-xs"
        style={{ color: accent }}
      >
        {tag}
      </p>
      <DisplayHeading
        as="h1"
        align="center"
        size="lg"
        lines={titleLines}
        className="flex flex-col items-center gap-y-1"
        style={{ color: accent }}
      />
      <p className="mt-8 font-display text-xs font-semibold uppercase tracking-nav text-fg-dim">
        {meta}
      </p>
    </header>
  );
}

/** Definition-list row used in the sticky overview column. */
export function MetaRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[1fr_1.6fr] gap-4 border-t border-white/[0.12] py-4 text-sm">
      <dt className="font-display font-semibold uppercase tracking-nav text-fg-muted">
        {label}
      </dt>
      <dd className="text-fg">{children}</dd>
    </div>
  );
}

/** Dark, grain-textured media/figure tile. */
export function GrainTile({
  children,
  className = "",
  ratio,
}: {
  children: React.ReactNode;
  className?: string;
  ratio?: string;
}) {
  return (
    <div
      className={`grain relative overflow-hidden rounded-lg border border-white/[0.08] bg-[#0a0a0a] ${className}`}
      style={ratio ? { aspectRatio: ratio } : undefined}
    >
      {children}
    </div>
  );
}

/** Full-width "next" link block that closes each product page. */
export function NextProduct({
  label,
  name,
  href,
  accent,
}: {
  label: string;
  name: string;
  href: string;
  accent: string;
}) {
  return (
    <Link
      href={href}
      className="group block border-t border-white/[0.12] py-[clamp(3rem,8vw,6rem)] transition-colors hover:bg-white/[0.02]"
    >
      <Container>
        <p className="font-display text-[0.72rem] font-semibold uppercase tracking-nav text-fg-muted">
          {label}
        </p>
        <div className="mt-5 flex items-end justify-between gap-6">
          <span
            className="u-display text-[clamp(2.2rem,9vw,7rem)]"
            style={{ color: accent }}
          >
            {name}
          </span>
          <ArrowUpRight
            className="h-[clamp(2rem,5vw,4rem)] w-[clamp(2rem,5vw,4rem)] shrink-0 text-fg-muted transition-transform duration-500 ease-expo group-hover:translate-x-2 group-hover:-translate-y-2"
            strokeWidth={1.5}
            style={{ color: accent }}
          />
        </div>
      </Container>
    </Link>
  );
}

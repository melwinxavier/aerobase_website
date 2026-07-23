"use client";

import { Container } from "@/components/ui/primitives";
import { DisplayHeading } from "./DisplayHeading";
import { ArrowLink } from "./ArrowLink";

/* Editorial closing CTA — giant display heading + arrow links, matching the
   the_unseen_hook product/case-study pages. */
export function EditorialCTA({
  eyebrow = "Get started",
  lines,
  accent = "#ff2d2d",
  primary = { label: "Try PHASES", href: "https://phases.aerobase.se", external: true },
  secondary = { label: "Start a project", href: "/contact" },
}: {
  eyebrow?: string;
  lines: string[];
  accent?: string;
  primary?: { label: string; href: string; external?: boolean };
  secondary?: { label: string; href: string; external?: boolean };
}) {
  return (
    <section className="border-t border-white/[0.12] px-[6vw] py-[clamp(4rem,10vw,8rem)]">
      <Container>
        <p
          className="font-display text-xs font-semibold uppercase tracking-nav"
          style={{ color: accent }}
        >
          {eyebrow}
        </p>
        <DisplayHeading as="h2" size="md" className="mt-6 text-fg" lines={lines} />
        <p className="mt-8 max-w-xl text-[14px] leading-relaxed text-fg-muted">
          Luleå &amp; Trollhättan, Sweden · contact@aerobase.se
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-4">
          <ArrowLink href={primary.href} external={primary.external} className="text-fg text-sm">
            {primary.label}
          </ArrowLink>
          <ArrowLink href={secondary.href} external={secondary.external} className="text-fg text-sm">
            {secondary.label}
          </ArrowLink>
        </div>
      </Container>
    </section>
  );
}

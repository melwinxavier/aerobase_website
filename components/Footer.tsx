"use client";

import Link from "next/link";
import { Container, MonoLabel } from "./ui/primitives";
import { LogoMark } from "./Logo";

type FooterLink = { label: string; href: string; external?: boolean };

const COLS: { title: string; links: FooterLink[] }[] = [
  {
    title: "PRODUCTS",
    links: [
      { label: "PHASES", href: "/ai-agents/phases" },
      { label: "SAFELIGHT", href: "/material-models" },
      { label: "AEROCRAFT", href: "/ai-agents/aerocraft" },
      { label: "MATERIAL MODELS", href: "/material-models" },
    ],
  },
  {
    title: "GENERAL",
    links: [
      { label: "ABOUT", href: "/about" },
      { label: "HOW WE WORK", href: "/how-we-work" },
      { label: "RESEARCH", href: "/research" },
      { label: "CONTACT", href: "/contact" },
    ],
  },
  {
    title: "SOCIAL",
    links: [
      { label: "LINKEDIN", href: "https://www.linkedin.com/company/aerobase-innovations", external: true },
      { label: "YOUTUBE", href: "https://www.youtube.com/@aerobase", external: true },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-ink-900 pt-20">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,380px)_1fr]">
          <div>
            <span className="text-2xl font-medium tracking-tight text-fg">Aerobase</span>
            <p className="mt-6 max-w-xs text-[13.5px] leading-relaxed text-fg-muted">
              Physics-based AI for materials and manufacturing — computed and measured,
              not assumed.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 md:grid-cols-3">
            {COLS.map((c) => (
              <div key={c.title}>
                <MonoLabel className="!text-fg-dim">{c.title}</MonoLabel>
                <ul className="mt-6 space-y-3">
                  {c.links.map((l) =>
                    l.external ? (
                      <li key={l.label}>
                        <a
                          href={l.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mono-label text-fg-muted transition-colors hover:text-fg"
                        >
                          {l.label}
                        </a>
                      </li>
                    ) : (
                      <li key={l.label}>
                        <Link
                          href={l.href}
                          className="mono-label text-fg-muted transition-colors hover:text-fg"
                        >
                          {l.label}
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 flex flex-col items-start justify-between gap-6 border-t border-white/[0.06] py-8 md:flex-row md:items-center">
          <LogoMark className="h-8 w-8 text-fg-muted" />
          <div className="flex flex-wrap items-center gap-6">
            <a href="mailto:contact@aerobase.se" className="mono-label text-fg-muted hover:text-fg">CONTACT@AEROBASE.SE</a>
            <a href="tel:+46704199023" className="mono-label text-fg-muted hover:text-fg">+46 70 4199 023</a>
            <a href="#" className="mono-label text-fg-muted hover:text-fg">PRIVACY &amp; COOKIE POLICY</a>
            <MonoLabel className="!text-fg-dim">© 2026 AEROBASE INNOVATIONS AB</MonoLabel>
          </div>
        </div>
      </Container>
    </footer>
  );
}

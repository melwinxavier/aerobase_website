"use client";

import { Container, MonoLabel } from "./ui/primitives";
import { LogoMark } from "./Logo";

const COLS: { title: string; links: string[] }[] = [
  {
    title: "PRODUCT",
    links: [
      "ENHANCE SUBSCRIBER QOE",
      "MAXIMIZE NETWORK CAPACITY",
      "ADVANCED NETWORK ANALYTICS",
      "BQN PLATFORM",
    ],
  },
  {
    title: "GENERAL",
    links: ["BUY", "CUSTOMERS", "NEWS", "PRODUCT UPDATES", "RESOURCES", "CAREERS", "ABOUT", "CONTACT"],
  },
  {
    title: "SOCIAL",
    links: ["LINKEDIN", "FACEBOOK", "INSTAGRAM", "YOUTUBE", "X"],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-ink-900 pt-20">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,380px)_1fr]">
          <div>
            <span className="text-2xl font-medium tracking-tight text-fg">Bequant</span>
            <p className="mt-6 max-w-xs text-[13.5px] leading-relaxed text-fg-muted">
              Pioneering TCP optimization improving network speed, saving bandwidth and
              reducing congestion.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 md:grid-cols-3">
            {COLS.map((c) => (
              <div key={c.title}>
                <MonoLabel className="!text-fg-dim">{c.title}</MonoLabel>
                <ul className="mt-6 space-y-3">
                  {c.links.map((l) => (
                    <li key={l}>
                      <a href="#" className="mono-label text-fg-muted transition-colors hover:text-fg">
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 flex flex-col items-start justify-between gap-6 border-t border-white/[0.06] py-8 md:flex-row md:items-center">
          <LogoMark className="h-8 w-8 text-fg-muted" />
          <div className="flex flex-wrap items-center gap-6">
            <a href="#" className="mono-label text-fg-muted hover:text-fg">DOCUMENTATION</a>
            <a href="#" className="mono-label text-fg-muted hover:text-fg">PRIVACY &amp; COOKIE POLICY</a>
            <MonoLabel className="!text-fg-dim">© 2026 BEQUANT</MonoLabel>
          </div>
        </div>
      </Container>
    </footer>
  );
}

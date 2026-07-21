"use client";

import { useState } from "react";
import { ChevronsRight } from "lucide-react";
import { Container, MonoLabel, Reveal } from "./ui/primitives";

const UPDATES = [
  { tag: "INSIGHT", date: "2026", title: "Accelerating materials innovation with generative foundation models" },
  { tag: "PROJECT", date: "2026", title: "FlexCrash: developing crash-tolerant structures in green aluminium" },
  { tag: "PROJECT", date: "2026", title: "ALABAMA: tailoring laser beams for additive manufacturing" },
  { tag: "GUIDE", date: "2026", title: "How to calibrate material models against physical test data" },
];

export function Subscribe() {
  const [email, setEmail] = useState("");
  return (
    <section className="border-t border-white/[0.05] py-20 md:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[380px_1fr]">
          {/* Subscribe box */}
          <Reveal>
            <div>
              <MonoLabel>GET UPDATES</MonoLabel>
              <h3 className="mt-5 text-2xl font-light leading-snug text-fg">
                Latest research insights and product news.
              </h3>
              <MonoLabel className="mt-6 block !text-fg-dim">1-2 MONTHLY EMAILS</MonoLabel>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="mt-4 flex items-center gap-2 rounded-lg border border-white/10 bg-ink-card p-1.5"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="mono-label flex-1 bg-transparent px-3 py-2 text-fg outline-none placeholder:text-fg-dim"
                />
                <button
                  type="submit"
                  className="grid h-9 w-9 place-items-center rounded-md bg-brand-green/10 text-brand-green transition-colors hover:bg-brand-green/20"
                  aria-label="Subscribe"
                >
                  <ChevronsRight className="h-4 w-4" />
                </button>
              </form>
              <p className="mt-4 text-xs leading-relaxed text-fg-dim">
                Subscribe to receive emails from Aerobase. Unsubscribe anytime.
              </p>
            </div>
          </Reveal>

          {/* Product updates list */}
          <div>
            {UPDATES.map((u, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <a
                  href="#"
                  className="group grid grid-cols-1 items-center gap-4 border-t border-white/[0.06] py-6 md:grid-cols-[160px_1fr_auto]"
                >
                  <div>
                    <MonoLabel dotColor="#ff2d2d" className="!text-brand-red">{u.tag}</MonoLabel>
                    <MonoLabel className="mt-1 block !text-fg-dim">{u.date}</MonoLabel>
                  </div>
                  <p className="text-[15px] text-fg">{u.title}</p>
                  <ChevronsRight className="h-4 w-4 text-fg-dim transition-transform group-hover:translate-x-0.5 group-hover:text-fg md:justify-self-end" />
                </a>
              </Reveal>
            ))}
            <div className="mt-8">
              <a href="#" className="mono-label inline-flex items-center gap-2 text-fg-muted hover:text-fg">
                ALL UPDATES <ChevronsRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

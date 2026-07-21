"use client";

import { ChevronsRight } from "lucide-react";
import { Container, MonoLabel, Reveal, PillButton } from "./ui/primitives";
import { LogoMark } from "./Logo";

const NEWS = [
  {
    date: "JUNE 2026",
    title: "Aerobase joins GENMAT — Europe’s first multi-scale materials foundation model (Horizon Europe 101295332)",
    accent: "from-[#2a2f3a] to-[#141518]",
  },
  {
    date: "2026",
    title: "Phases Copilot enters early access — an AI assistant for setting up and interpreting phase-transformation models",
    accent: "from-[#20231a] to-[#141518]",
  },
  {
    date: "2026",
    title: "SafeLight predicts mega-cast crash failure to 3–5% on a customer program",
    accent: "from-[#3a1f18] to-[#141518]",
  },
];

export function Announcements() {
  return (
    <section className="border-t border-white/[0.05] py-20 md:py-28">
      <Container>
        <Reveal>
          <div className="flex items-start justify-between">
            <h2 className="display max-w-md text-[clamp(1.8rem,3.5vw,2.7rem)] text-fg">
              Announcements and company updates.
            </h2>
            <span className="hidden h-10 w-10 place-items-center rounded-md bg-white/[0.06] md:grid">
              <ChevronsRight className="h-4 w-4 text-fg" />
            </span>
          </div>
        </Reveal>

        <div className="mt-12">
          {NEWS.map((n, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div
                className="group grid grid-cols-1 items-center gap-6 border-t border-white/[0.06] py-8 md:grid-cols-[120px_260px_1fr_auto]"
              >
                <div>
                  <MonoLabel dotColor="#F94300" className="!text-brand-red">NEWS</MonoLabel>
                  <MonoLabel className="mt-1 block !text-fg-dim">{n.date}</MonoLabel>
                </div>
                <div className={`grid h-28 place-items-center rounded-xl bg-gradient-to-br ${n.accent}`}>
                  <LogoMark className="h-6 w-6 text-white/60" />
                </div>
                <p className="max-w-md text-[17px] leading-snug text-fg">{n.title}</p>
                <PillButton variant="dark" className="justify-self-start md:justify-self-end">READ</PillButton>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/primitives";
import { RevealText, RevealLine } from "@/components/editorial/RevealText";
import { DisplayHeading } from "@/components/editorial/DisplayHeading";

/* AI Agents hub — editorial design ported from the_unseen_hook. PHASES and
   AeroCraft are two entries that open their own product pages. */

type Agent = {
  name: string;
  href: string;
  accent: string;
  tag: string;
  blurb: string;
  facts: string[];
  status: string;
};

const AGENTS: Agent[] = [
  {
    name: "PHASES",
    href: "/ai-agents/phases",
    accent: "#4d8bff",
    tag: "01 · Digital metallurgy",
    blurb:
      "One platform connecting material and process inputs to computed material state — a materials database, a chat-agent front end and four process-specific simulators.",
    facts: ["HT Sim · CCT/TTT · RSW · V-Gleeble", "Materials database", "Agent + solver plugin"],
    status: "Selling now · Agent in early access",
  },
  {
    name: "AeroCraft",
    href: "/ai-agents/aerocraft",
    accent: "#ff6a3d",
    tag: "02 · Additive manufacturing",
    blurb:
      "The second agent in the family — connecting process inputs to computed thermal and material response along the build path. Same physics-first principle, new domain.",
    facts: ["Process simulation", "Thermal & material response", "craft.aerobase.se"],
    status: "In development · 2026",
  },
];

function AgentEntry({ agent }: { agent: Agent }) {
  return (
    <Link
      href={agent.href}
      className="group block border-t border-white/[0.12] py-[clamp(2.5rem,6vw,5rem)] transition-colors hover:bg-white/[0.02]"
    >
      <Container>
        <div className="grid grid-cols-1 gap-x-[clamp(2rem,5vw,5rem)] gap-y-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          {/* Giant name */}
          <div>
            <p
              className="font-display text-[0.72rem] font-semibold uppercase tracking-nav"
              style={{ color: agent.accent }}
            >
              {agent.tag}
            </p>
            <div className="mt-4 flex items-center gap-4">
              <span
                className="u-display text-[clamp(2.6rem,10vw,8rem)]"
                style={{ color: agent.accent }}
              >
                {agent.name}
              </span>
              <ArrowUpRight
                className="h-[clamp(1.8rem,4vw,3rem)] w-[clamp(1.8rem,4vw,3rem)] shrink-0 transition-transform duration-500 ease-expo group-hover:translate-x-2 group-hover:-translate-y-2"
                strokeWidth={1.5}
                style={{ color: agent.accent }}
              />
            </div>
          </div>

          {/* Copy + facts */}
          <div>
            <p className="max-w-md text-[15px] leading-relaxed text-fg-muted">{agent.blurb}</p>
            <ul className="mt-6 flex flex-wrap gap-x-3 gap-y-2">
              {agent.facts.map((f) => (
                <li
                  key={f}
                  className="rounded-full border border-white/[0.12] px-3 py-1.5 font-display text-[0.66rem] font-semibold uppercase tracking-nav text-fg-muted"
                >
                  {f}
                </li>
              ))}
            </ul>
            <p className="mt-6 font-display text-[0.7rem] font-semibold uppercase tracking-nav" style={{ color: agent.accent }}>
              {agent.status}
            </p>
          </div>
        </div>
      </Container>
    </Link>
  );
}

export function AiAgentsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden px-[6vw] pt-[clamp(8rem,20vh,13rem)] pb-16 md:pb-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-1/4 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(77,139,255,0.12),transparent_70%)]" />
        </div>
        <Container className="relative">
          <RevealText className="font-display text-xs font-semibold uppercase tracking-nav text-brand-blue">
            <RevealLine>Aerobase · Physics-based AI</RevealLine>
          </RevealText>
          <DisplayHeading
            as="h1"
            size="lg"
            className="mt-6 text-fg"
            lines={["AI agents that", "know the physics."]}
          />
          <RevealText className="mt-8 max-w-2xl text-[clamp(1rem,1.6vw,1.25rem)] font-light leading-relaxed text-fg-muted">
            <RevealLine>A family of physics-based AI agents for materials and</RevealLine>
            <RevealLine>manufacturing. Choose an agent to explore.</RevealLine>
          </RevealText>
        </Container>
      </section>

      {/* The two agents */}
      <div>
        {AGENTS.map((a) => (
          <AgentEntry key={a.name} agent={a} />
        ))}
        <div className="border-t border-white/[0.12]" />
      </div>

      {/* Closing note */}
      <section className="px-[6vw] py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <DisplayHeading
              as="h2"
              size="sm"
              className="text-fg"
              lines={["Physics first.", "ML second. Lab always."]}
            />
            <p className="max-w-sm text-[14px] leading-relaxed text-fg-muted">
              Every agent is grounded in thermodynamics and mechanics, corrected by machine
              learning that reports its own uncertainty, and calibrated against measured data.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}

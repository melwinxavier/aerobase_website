"use client";

import { motion } from "framer-motion";
import { ChevronsRight } from "lucide-react";
import { LogoMark } from "./Logo";

type Item = {
  tag: string;
  date: string;
  title: string;
  accent: string;
};

const ITEMS: Item[] = [
  {
    tag: "NEWS",
    date: "28 MAY",
    title: "Bequant Partners with Winncom Technologies to Accelerate Expansion Across North America",
    accent: "from-[#2a2f3a] to-[#141518]",
  },
  {
    tag: "PRODUCT UPDATE",
    date: "JULY 6, 2026",
    title: "Bequant Releases R5.1.1, with applications flow speed information",
    accent: "from-[#20231a] to-[#141518]",
  },
  {
    tag: "CASE STUDY",
    date: "",
    title: "InfoWest reduces packet ReTx by 80% while improving customers’ video experience",
    accent: "from-[#3a1f18] to-[#141518]",
  },
];

export function NewsOverlay() {
  return (
    <section className="relative z-20 -mt-[130px] pb-24">
      <div className="mx-auto w-full max-w-[880px] px-6">
        <div className="flex flex-col gap-3">
          {ITEMS.map((it, i) => (
            <motion.a
              href="#"
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group flex items-center gap-5 rounded-xl border border-white/[0.06] bg-ink-card/80 p-3 backdrop-blur-md transition-colors hover:border-white/[0.14]"
            >
              <div className="flex w-28 shrink-0 flex-col gap-1">
                <span className="mono-label text-fg-muted">{it.tag}</span>
                {it.date && <span className="mono-label text-fg-dim">{it.date}</span>}
              </div>
              <div
                className={`grid h-16 w-24 shrink-0 place-items-center rounded-lg bg-gradient-to-br ${it.accent}`}
              >
                <LogoMark className="h-5 w-5 text-white/70" />
              </div>
              <p className="flex-1 text-[13.5px] leading-snug text-fg/90">{it.title}</p>
              <ChevronsRight className="mr-2 h-4 w-4 shrink-0 text-fg-dim transition-transform group-hover:translate-x-0.5 group-hover:text-fg" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

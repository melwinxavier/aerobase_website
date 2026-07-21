"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronsRight, ChevronRight } from "lucide-react";
import { Wordmark } from "./Logo";
import { cn } from "@/lib/cn";

const NAV = ["PRODUCTS", "RESEARCH", "ABOUT", "CONTACT"];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled ? "bg-ink/70 backdrop-blur-md" : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-[64px] max-w-container items-center justify-between px-6 md:px-10">
        <a href="#top" aria-label="Aerobase home">
          <Wordmark />
        </a>

        {/* Center pill nav */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 md:block">
          <ul className="flex items-center gap-1 rounded-lg bg-white/[0.04] px-1.5 py-1.5 backdrop-blur-sm">
            {NAV.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="mono-label rounded-md px-3.5 py-2 text-fg-muted transition-colors hover:bg-white/[0.06] hover:text-fg"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <button className="mono-label hidden items-center gap-1 text-fg-muted transition-colors hover:text-fg sm:flex">
            EN <ChevronRight className="h-3.5 w-3.5" />
          </button>
          <a
            href="#"
            className="mono-label group inline-flex items-center gap-2 rounded-md border border-brand-green/70 bg-brand-green/10 px-3.5 py-2.5 text-brand-green transition-colors hover:bg-brand-green/20"
          >
            TRY PHASES
            <ChevronsRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </motion.header>
  );
}

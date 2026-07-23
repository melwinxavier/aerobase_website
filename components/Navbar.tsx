"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronsRight, Menu, X } from "lucide-react";
import { Wordmark } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/cn";

// Primary nav — based on the design/options/03_atlas layout, with How We Work
// kept in the footer only: AI Agents · Material Models · Research · About.
const NAV = [
  { label: "AI Agents", href: "/ai-agents" },
  { label: "Material Models", href: "/material-models" },
  { label: "Research", href: "/research" },
  { label: "About", href: "/about" },
];

const PHASES_URL = "https://phases.aerobase.se";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open ? "bg-ink/70 backdrop-blur-md" : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-[64px] max-w-container items-center justify-between px-6 md:px-10">
        <Link href="/" aria-label="Aerobase home">
          <Wordmark />
        </Link>

        {/* Center pill nav */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 lg:block">
          <ul className="flex items-center gap-0.5 rounded-lg bg-white/[0.04] px-1.5 py-1.5 backdrop-blur-sm">
            {NAV.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={cn(
                    "mono-label rounded-md px-3 py-2 transition-colors hover:bg-white/[0.06] hover:text-fg",
                    isActive(item.href) ? "bg-white/[0.06] text-fg" : "text-fg-muted"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href={PHASES_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mono-label group hidden items-center gap-2 rounded-md border border-brand-green/70 bg-brand-green/10 px-3.5 py-2.5 text-brand-green transition-colors hover:bg-brand-green/20 sm:inline-flex"
          >
            TRY PHASES
            <ChevronsRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>

          {/* Mobile hamburger — shown below the lg pill nav */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="inline-flex items-center justify-center rounded-md p-2 text-fg-muted transition-colors hover:bg-white/[0.06] hover:text-fg lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-line bg-ink/95 backdrop-blur-md lg:hidden"
          >
            <ul className="mx-auto max-w-container space-y-1 px-6 py-4">
              {NAV.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={cn(
                      "mono-label block rounded-md px-3 py-3 transition-colors hover:bg-white/[0.06] hover:text-fg",
                      isActive(item.href) ? "bg-white/[0.06] text-fg" : "text-fg-muted"
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={PHASES_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="mono-label group inline-flex w-full items-center justify-center gap-2 rounded-md border border-brand-green/70 bg-brand-green/10 px-3.5 py-3 text-brand-green transition-colors hover:bg-brand-green/20"
                >
                  TRY PHASES
                  <ChevronsRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

"use client";

import { useEffect, useState } from "react";
import { Palette } from "lucide-react";
import { cn } from "@/lib/cn";

type Theme = "dark" | "apple";

const LABELS: Record<Theme, string> = {
  dark: "ORIGINAL",
  apple: "APPLE LIGHT",
};

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  // Sync with whatever the pre-paint script already set on <html>.
  useEffect(() => {
    const current =
      (document.documentElement.dataset.theme as Theme) || "dark";
    setTheme(current);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "apple" : "dark";
    setTheme(next);
    if (next === "dark") {
      delete document.documentElement.dataset.theme;
    } else {
      document.documentElement.dataset.theme = next;
    }
    try {
      localStorage.setItem("theme", next);
    } catch {}
  };

  return (
    <button
      onClick={toggle}
      aria-label={`Switch theme (current: ${LABELS[theme]})`}
      className={cn(
        "mono-label fixed bottom-5 right-5 z-[60] inline-flex items-center gap-2",
        "rounded-full border border-brand-green/60 bg-ink-800/80 px-4 py-3",
        "text-brand-green shadow-lg backdrop-blur-md transition-colors",
        "hover:bg-brand-green/15"
      )}
    >
      <Palette className="h-4 w-4" />
      <span>
        THEME: <span className="text-fg">{LABELS[theme]}</span>
      </span>
    </button>
  );
}

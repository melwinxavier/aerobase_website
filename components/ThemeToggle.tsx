"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/cn";

type Theme = "dark" | "apple";

export function ThemeToggle({ className }: { className?: string }) {
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

  const isDark = theme === "dark";

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      className={cn(
        "inline-flex items-center justify-center rounded-md p-2",
        "text-fg-muted transition-colors hover:bg-white/[0.06] hover:text-fg",
        className
      )}
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}

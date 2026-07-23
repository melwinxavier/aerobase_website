import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "var(--ink)", // page background
          900: "var(--ink-900)",
          800: "var(--ink-800)",
          700: "var(--ink-700)",
          600: "var(--ink-600)",
          card: "var(--ink-card)",
        },
        line: "var(--line)",
        fg: {
          DEFAULT: "var(--fg)",
          muted: "var(--fg-muted)",
          dim: "var(--fg-dim)",
        },
        brand: {
          red: "var(--brand-red)",
          green: "var(--brand-green)",
          gold: "var(--brand-gold)",
          blue: "var(--brand-blue)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        display: ["var(--font-archivo)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        mono: "0.12em",
        nav: "-0.035em",
      },
      transitionTimingFunction: {
        expo: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      maxWidth: {
        container: "1600px",
      },
      keyframes: {
        streak: {
          "0%": { transform: "translateX(-10%) scaleX(1)", opacity: "0.6" },
          "50%": { opacity: "1" },
          "100%": { transform: "translateX(10%) scaleX(1.1)", opacity: "0.6" },
        },
        pulseSoft: {
          "0%,100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        spinSlow: {
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        streak: "streak 8s ease-in-out infinite alternate",
        pulseSoft: "pulseSoft 2.4s ease-in-out infinite",
        spinSlow: "spinSlow 14s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;

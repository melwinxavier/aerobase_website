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
          DEFAULT: "#121214", // page background
          900: "#0d0d0f",
          800: "#161618",
          700: "#1c1c1f",
          600: "#232327",
          card: "#161719",
        },
        line: "rgba(255,255,255,0.08)",
        fg: {
          DEFAULT: "#efefef",
          muted: "#8a8a8f",
          dim: "#5c5c61",
        },
        brand: {
          red: "#F94300",
          green: "#00bf2a",
          gold: "#e8b23d",
          blue: "#498099",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        mono: "0.12em",
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

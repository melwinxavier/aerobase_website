"use client";

import { RevealText, RevealLine } from "./RevealText";
import { cn } from "@/lib/cn";

/* Oversized, masked-reveal display heading — the_unseen_hook signature headline:
   uppercase, black weight, ultra-tight tracking. Each line reveals on its own. */
export function DisplayHeading({
  lines,
  className,
  as = "h2",
  align = "left",
  size = "lg",
  style,
}: {
  lines: string[];
  className?: string;
  as?: "h1" | "h2";
  align?: "left" | "center";
  size?: "sm" | "md" | "lg";
  style?: React.CSSProperties;
}) {
  const Tag = as;
  const sizeCls =
    size === "lg"
      ? "text-[clamp(2.75rem,11vw,10rem)]"
      : size === "md"
      ? "text-[clamp(2.2rem,7vw,6rem)]"
      : "text-[clamp(1.9rem,5.5vw,4.75rem)]";

  return (
    <RevealText
      as="div"
      className={cn(
        "u-display",
        sizeCls,
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      <Tag style={style}>
        {lines.map((l, i) => (
          <RevealLine key={i}>{l}</RevealLine>
        ))}
      </Tag>
    </RevealText>
  );
}

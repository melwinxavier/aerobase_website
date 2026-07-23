"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";

/* Inline link with a trailing up-right arrow that nudges on hover, over an
   animated underline — the "EXPLORE PHASES ↗" pattern from the_unseen_hook. */
export function ArrowLink({
  href,
  children,
  className,
  external,
  hideArrow,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
  hideArrow?: boolean;
}) {
  const content = (
    <span
      className={cn(
        "group inline-flex items-center gap-1.5 font-display text-xs font-semibold uppercase tracking-nav",
        className
      )}
    >
      <span className="link-underline">{children}</span>
      {!hideArrow && (
        <ArrowUpRight
          className="h-[1.05em] w-[1.05em] transition-transform duration-500 ease-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          strokeWidth={2.25}
        />
      )}
    </span>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex">
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className="inline-flex">
      {content}
    </Link>
  );
}

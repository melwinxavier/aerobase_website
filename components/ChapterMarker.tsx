"use client";

import { ChevronsRight } from "lucide-react";

/* The sticky "1.0 / TRY NOW / Explore" chapter tab on the left */
export function ChapterMarker({
  index,
  title,
  color,
}: {
  index: string;
  title: string;
  color: string;
}) {
  return (
    <div className="pointer-events-none absolute left-6 top-0 z-30 h-full md:left-10">
      <div className="sticky top-24 w-[210px]">
        <div className="pointer-events-auto overflow-hidden rounded-lg border border-white/10 bg-ink-card/90 backdrop-blur-md">
          <div className="flex items-center justify-between px-4 py-3">
            <span className="text-xl font-light" style={{ color }}>
              {index}
            </span>
            <a
              href="#"
              className="mono-label group inline-flex items-center gap-2 rounded-md bg-black px-3 py-2 text-fg"
            >
              TRY NOW
              <ChevronsRight className="h-3 w-3" style={{ color }} />
            </a>
          </div>
          <div className="flex items-center justify-between border-t border-white/[0.06] px-4 py-2.5">
            <span className="mono-label text-fg-dim">{title}</span>
            <a href="#" className="mono-label text-fg-muted underline underline-offset-2 hover:text-fg">
              Explore
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

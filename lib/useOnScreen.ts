"use client";

import { useEffect, useRef, type RefObject } from "react";

/**
 * Tracks whether an element is on screen, exposed as a ref rather than state.
 *
 * A ref, not state, deliberately: the only consumers are requestAnimationFrame
 * loops that read the value each frame, and returning state would re-render the
 * component on every intersection change for no benefit.
 *
 * Canvas animations use this to skip drawing while scrolled away.
 */
export function useOnScreen<T extends Element>(
  ref: RefObject<T | null>,
  rootMargin = "200px",
) {
  const visible = useRef(true);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const io = new IntersectionObserver(
      ([entry]) => {
        visible.current = entry.isIntersecting;
      },
      { rootMargin },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [ref, rootMargin]);

  return visible;
}

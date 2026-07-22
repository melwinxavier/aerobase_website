"use client";

import { useEffect, useRef } from "react";
import { useOnScreen } from "@/lib/useOnScreen";

type P = {
  // Shape A: airfoil section swept along the span
  ax: number; ay: number; az: number;
  // Shape B: dispersed shell
  bx: number; by: number; bz: number;
  seed: number;
};

/**
 * Hero point cloud that morphs between an airfoil section and a dispersed
 * shell as the hero scrolls away. Plain 2D canvas rather than WebGL — a few
 * thousand points do not justify the payload.
 *
 * Points are depth-sorted per frame so nearer points draw over farther ones.
 */
export function ParticleHero({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const onScreen = useOnScreen(canvasRef);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let raf = 0;
    let width = 0;
    let height = 0;

    // ---- Point cloud ----
    const CHORD = 58;
    const SPAN = 30;
    const points: P[] = [];

    // NACA-style symmetric thickness distribution
    const thickness = (t: number) =>
      0.9 *
      (0.2969 * Math.sqrt(t) -
        0.126 * t -
        0.3516 * t * t +
        0.2843 * t * t * t -
        0.1015 * t * t * t * t);

    for (let i = 0; i < CHORD; i++) {
      // cosine spacing packs points toward the leading and trailing edges
      const t = 0.5 * (1 - Math.cos((Math.PI * i) / (CHORD - 1)));
      const yt = thickness(t);
      const camber = 0.055 * Math.sin(Math.PI * Math.pow(t, 0.85));

      for (const sign of [1, -1] as const) {
        for (let j = 0; j < SPAN; j++) {
          const s = j / (SPAN - 1);
          const taper = 1 - 0.45 * s;
          const sweep = 0.42 * s;

          // Shape B: same points redistributed onto a shell, so the morph
          // reads as the same material rearranging rather than a cross-fade.
          const phi = Math.acos(1 - 2 * ((i * SPAN + j) % 997) / 997);
          const theta = Math.PI * 2 * (((i * 7 + j * 13) % 331) / 331);
          const r = 1.05 + 0.28 * Math.sin(i * 0.7 + j * 0.4);

          points.push({
            ax: (t * taper + sweep - 0.5) * 1.55,
            ay: (sign * yt * taper + camber) * 1.55,
            az: (s - 0.5) * 2.3,
            bx: r * Math.sin(phi) * Math.cos(theta),
            by: r * Math.cos(phi) * 0.72,
            bz: r * Math.sin(phi) * Math.sin(theta),
            seed: Math.random() * Math.PI * 2,
          });
        }
      }
    }

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const pointer = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };
    const onPointerMove = (e: PointerEvent) => {
      target.x = (e.clientX / window.innerWidth - 0.5) * 2;
      target.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    // Scroll drives the morph: 0 at the top of the page, 1 once the hero has
    // scrolled roughly one viewport away.
    // Start the cloud fully dispersed so the entrance reads as it spreading in
    // and gathering into the airfoil.
    let morph = 1;
    // Continuous breathing: the cloud endlessly spreads apart and gathers back
    // into the airfoil. One full spread-and-gather every ~7s.
    const PULSE_MS = 7000;
    // One-time fade-in so the cloud doesn't pop in on load.
    const FADE_MS = 1400;
    let startMs = -1;
    const projected: { x: number; y: number; z: number; d: number }[] =
      points.map(() => ({ x: 0, y: 0, z: 0, d: 0 }));

    const render = (time: number) => {
      // Hero scrolled away: skip the projection and the per-frame sort.
      if (!onScreen.current) {
        raf = requestAnimationFrame(render);
        return;
      }

      const t = time * 0.001;
      ctx.clearRect(0, 0, width, height);

      if (startMs < 0) startMs = time;
      const elapsed = time - startMs;

      // Perpetual spread pulse: 0 (airfoil) -> 1 (dispersed) -> 0, forever.
      // Starts at full spread (elapsed 0 -> spread 1) so it opens dispersed.
      const spread = reduce
        ? 0
        : 0.5 - 0.5 * Math.cos((elapsed / PULSE_MS) * Math.PI * 2 + Math.PI);
      // One-time overall fade-in.
      const fade = Math.min(elapsed / FADE_MS, 1);
      const intro = 1 - Math.pow(1 - fade, 3);

      const scrollMorph = Math.min(
        window.scrollY / (window.innerHeight || 1),
        1,
      );
      // Scroll can still push it fully dispersed; otherwise the pulse drives it.
      const rawMorph = Math.max(scrollMorph, spread);
      morph += (rawMorph - morph) * 0.08;

      pointer.x += (target.x - pointer.x) * 0.045;
      pointer.y += (target.y - pointer.y) * 0.045;

      // Push the cloud outward at the very start, easing back as it gathers,
      // so the entrance reads as an outward spread that pulls into shape.
      const scale = Math.min(width, height * 1.5) * 0.44 * (1 + spread * 0.35);
      const cx = width * 0.5;
      const cy = height * 0.5;

      const yaw = (reduce ? 0.62 : t * 0.09) + pointer.x * 0.5 + morph * 0.9;
      const pitch = -0.32 + pointer.y * 0.28;

      const cosY = Math.cos(yaw);
      const sinY = Math.sin(yaw);
      const cosP = Math.cos(pitch);
      const sinP = Math.sin(pitch);

      // easeInOutCubic keeps the middle of the morph from feeling linear
      const m =
        morph < 0.5
          ? 4 * morph * morph * morph
          : 1 - Math.pow(-2 * morph + 2, 3) / 2;

      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        const wobble = reduce ? 0 : Math.sin(t * 0.9 + p.seed) * 0.012;

        const px = p.ax + (p.bx - p.ax) * m;
        const py = p.ay + (p.by - p.ay) * m + wobble;
        const pz = p.az + (p.bz - p.az) * m;

        const x1 = px * cosY + pz * sinY;
        const z1 = -px * sinY + pz * cosY;
        const y2 = py * cosP - z1 * sinP;
        const z2 = py * sinP + z1 * cosP;

        const persp = 3.1 / (3.1 + z2);
        const o = projected[i];
        o.x = cx + x1 * scale * persp;
        o.y = cy + y2 * scale * persp;
        o.z = z2;
        o.d = persp;
      }

      // Painter's algorithm: farthest first.
      const order = projected
        .map((_, i) => i)
        .sort((a, b) => projected[b].z - projected[a].z);

      // On the light (Apple) theme the pale blue-white cloud would vanish on
      // white, so switch to a deeper Apple blue that reads against it.
      const light = document.documentElement.dataset.theme === "apple";

      for (const i of order) {
        const o = projected[i];
        if (o.x < -20 || o.x > width + 20 || o.y < -20 || o.y > height + 20)
          continue;

        const depth = Math.min(Math.max((o.z + 1.3) / 2.6, 0), 1);
        const radius = (0.55 + depth * 1.5) * o.d;
        // Fade the cloud out as it disperses so it never fights the copy.
        // `intro` fades the whole cloud in over the opening spread.
        const alpha = (0.12 + depth * 0.72) * (1 - m * 0.55) * intro;

        // Cool blue-white points tuned to the Aerobase brand blue (#4d8bff),
        // brightening toward the camera. Deep Apple blue on the light theme.
        const r = Math.round(light ? 10 + depth * 30 : 70 + depth * 120);
        const g = Math.round(light ? 100 + depth * 40 : 110 + depth * 110);
        const b = Math.round(light ? 200 + depth * 40 : 180 + depth * 70);

        ctx.beginPath();
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
        ctx.arc(o.x, o.y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(render);
    };

    raf = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, [onScreen]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={className}
      style={{ width: "100%", height: "100%", display: "block" }}
    />
  );
}

export default ParticleHero;

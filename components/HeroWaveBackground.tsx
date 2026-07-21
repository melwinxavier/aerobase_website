"use client";

import { useEffect, useRef } from "react";

/**
 * Flowing luminous silk-ribbon hero background.
 *
 * A self-contained WebGL fragment shader (no three.js / WebGPU) — runs on any
 * WebGL-capable browser. It draws many thin glowing filaments that follow an
 * undulating wave, pinching like silk, with a colour that drifts blue <-> gold
 * and a soft bloom. Tuned to the Aerobase brand blue (#4d8bff) and gold
 * (#e8b23d). Respects prefers-reduced-motion (renders a single static frame).
 */

const VERT = `
attribute vec2 aPos;
void main() { gl_Position = vec4(aPos, 0.0, 1.0); }
`;

const FRAG = `
precision highp float;
uniform vec2 iResolution;
uniform float iTime;

float hash(vec2 p){
  p = fract(p * vec2(123.34, 345.45));
  p += dot(p, p + 34.345);
  return fract(p.x * p.y);
}
float noise(vec2 p){
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  float a = hash(i), b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0)), d = hash(i + vec2(1.0, 1.0));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}
float fbm(vec2 p){
  float v = 0.0, a = 0.5;
  for (int i = 0; i < 4; i++){ v += a * noise(p); p = p * 2.0 + 11.0; a *= 0.5; }
  return v;
}

void main(){
  vec2 frag = gl_FragCoord.xy;
  // aspect-corrected coords: y in [-0.5, 0.5], p.y<0 = lower half
  vec2 p = (frag - 0.5 * iResolution.xy) / iResolution.y;
  float t = iTime * 0.30;

  // Wave the whole ribbon rides on (computed once, shared by all strands).
  float base =
      0.140 * sin(p.x * 1.20 + t * 0.85)
    + 0.090 * sin(p.x * 2.50 - t * 0.60 + 1.7)
    + 0.045 * sin(p.x * 4.90 + t * 1.10);
  base -= 0.30; // seat the ribbon low so the headline stays clean

  // Ribbon thickness pinches/expands along x -> the silk twist.
  float spread = 0.110 + 0.055 * sin(p.x * 1.05 - t * 0.5)
                        + 0.030 * sin(p.x * 3.20 + t * 0.4);
  spread = max(spread, 0.02);

  // One organic wobble sample, reused across strands (keeps it cheap).
  float wob = fbm(vec2(p.x * 1.3 + t * 0.35, t * 0.20)) - 0.5;

  vec3 blue = vec3(0.30, 0.55, 1.00);
  vec3 gold = vec3(1.00, 0.72, 0.20);

  vec3 col = vec3(0.0);

  const int N = 34;
  for (int i = 0; i < N; i++){
    float s = float(i) / float(N - 1);          // 0..1 across ribbon
    float off = (s - 0.5);
    float yi = base + off * spread + wob * 0.06 * off * 6.0;

    float d = abs(p.y - yi);
    float dd = d * d;
    float soft  = 0.000050 / (dd + 0.00006);    // broad halo
    float sharp = 0.000011 / (dd + 0.0000022);  // thin bright filament core

    // travelling highlight so strands shimmer rather than read as a solid sheet
    float hl = 0.5 + 0.5 * sin(p.x * 6.0 - t * 3.0 + s * 8.0);
    float g = (soft * 0.55 + sharp) * (0.30 + 0.85 * hl * hl);

    // colour drifts blue<->gold across the width and slowly over time
    float mixf = 0.5 + 0.5 * sin(t * 0.45 + p.x * 1.15 + s * 0.8);
    col += g * mix(blue, gold, mixf);
  }

  // Filmic tone map: bright ribbon keeps its colour, only the very hottest
  // cores roll off toward white (prevents the blown-out blob).
  col = vec3(1.0) - exp(-col * 0.90);

  // gentle top damping so the upper area / headline stays clean
  float uvy = frag.y / iResolution.y;           // 0 bottom .. 1 top
  col *= 0.35 + 0.65 * smoothstep(0.95, 0.40, uvy);

  gl_FragColor = vec4(col, 1.0);
}
`;

function compile(gl: WebGLRenderingContext, type: number, src: string) {
  const sh = gl.createShader(type)!;
  gl.shaderSource(sh, src);
  gl.compileShader(sh);
  if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
    console.error("[HeroWave] shader error:", gl.getShaderInfoLog(sh));
    gl.deleteShader(sh);
    return null;
  }
  return sh;
}

export function HeroWaveBackground({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = (canvas.getContext("webgl", {
      alpha: false,
      antialias: false,
      premultipliedAlpha: false,
      powerPreference: "high-performance",
    }) ||
      canvas.getContext("experimental-webgl")) as WebGLRenderingContext | null;
    if (!gl) return;

    const vs = compile(gl, gl.VERTEX_SHADER, VERT);
    const fs = compile(gl, gl.FRAGMENT_SHADER, FRAG);
    if (!vs || !fs) return;

    const prog = gl.createProgram()!;
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      console.error("[HeroWave] link error:", gl.getProgramInfoLog(prog));
      return;
    }
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 3, -1, -1, 3]), // one big triangle covering the screen
      gl.STATIC_DRAW
    );
    const aPos = gl.getAttribLocation(prog, "aPos");
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(prog, "iResolution");
    const uTime = gl.getUniformLocation(prog, "iTime");

    // Render at a capped resolution — it's a soft background, and this keeps
    // the per-pixel strand loop smooth on high-DPI / large screens.
    const MAX_W = 1280;
    const resize = () => {
      const cw = canvas.clientWidth || 1;
      const ch = canvas.clientHeight || 1;
      const scale = Math.min(0.65, MAX_W / cw);
      const w = Math.max(1, Math.floor(cw * scale));
      const h = Math.max(1, Math.floor(ch * scale));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(uRes, canvas.width, canvas.height);
    };

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let raf = 0;
    const start = performance.now();

    const draw = (now: number) => {
      resize();
      gl.uniform1f(uTime, (now - start) / 1000);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      raf = requestAnimationFrame(draw);
    };

    const ro = new ResizeObserver(() => resize());
    ro.observe(canvas);

    if (reduce) {
      resize();
      gl.uniform1f(uTime, 8.0); // a pleasant static frame
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    } else {
      raf = requestAnimationFrame(draw);
    }

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      gl.deleteProgram(prog);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      gl.deleteBuffer(buf);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}

export default HeroWaveBackground;

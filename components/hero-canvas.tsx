"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const CELL = 26;
const RADIUS = 160;
const RADIUS_SQ = RADIUS * RADIUS;
const MIN_R = 1.4;
const MAX_R = 4.0;
const PUSH = 14;
const DRIFT = 0.8;

export function HeroCanvas({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMQ = window.matchMedia("(prefers-reduced-motion: reduce)");
    const noHoverMQ = window.matchMedia("(hover: none)");

    let width = 1;
    let height = 1;
    let dots = new Float32Array(0);
    let cursorX = -9999;
    let cursorY = -9999;
    let rafId = 0;
    let dotColor = "#a89f90";
    let accentColor = "oklch(0.58 0.18 248)";

    const readColors = () => {
      const cs = getComputedStyle(document.documentElement);
      const a = cs.getPropertyValue("--accent").trim();
      const d = cs.getPropertyValue("--ink-faint").trim();
      if (a) accentColor = a;
      if (d) dotColor = d;
    };

    const isStatic = () => reduceMQ.matches || noHoverMQ.matches;

    const buildGrid = () => {
      const cols = Math.ceil(width / CELL) + 2;
      const rows = Math.ceil(height / CELL) + 2;
      const offsetX = (width - (cols - 1) * CELL) / 2;
      const offsetY = (height - (rows - 1) * CELL) / 2;
      const arr = new Float32Array(cols * rows * 2);
      let i = 0;
      for (let r = 0; r < rows; r++) {
        const yy = offsetY + r * CELL;
        for (let c = 0; c < cols; c++) {
          arr[i++] = offsetX + c * CELL;
          arr[i++] = yy;
        }
      }
      dots = arr;
    };

    const resize = () => {
      const rect = container.getBoundingClientRect();
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      const dpr = Math.max(1, window.devicePixelRatio || 1);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildGrid();
    };

    const drawStatic = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = dotColor;
      for (let i = 0; i < dots.length; i += 2) {
        ctx.beginPath();
        ctx.arc(dots[i], dots[i + 1], MIN_R, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const tick = (t: number) => {
      ctx.clearRect(0, 0, width, height);
      const time = t / 1000;
      // Pass 1: base dots — skip those inside the cursor radius so the second
      // pass can repaint them in accent without overdraw.
      ctx.fillStyle = dotColor;
      for (let i = 0; i < dots.length; i += 2) {
        const phase = i * 0.013;
        const x = dots[i] + Math.sin(time + phase) * DRIFT;
        const y = dots[i + 1] + Math.cos(time * 1.1 + phase) * DRIFT;
        const dx = cursorX - x;
        const dy = cursorY - y;
        if (dx * dx + dy * dy < RADIUS_SQ) continue;
        ctx.beginPath();
        ctx.arc(x, y, MIN_R, 0, Math.PI * 2);
        ctx.fill();
      }
      // Pass 2: cursor-affected dots — accent fill, grown radius, pushed along ray.
      ctx.fillStyle = accentColor;
      for (let i = 0; i < dots.length; i += 2) {
        const phase = i * 0.013;
        const bx = dots[i] + Math.sin(time + phase) * DRIFT;
        const by = dots[i + 1] + Math.cos(time * 1.1 + phase) * DRIFT;
        const dx = cursorX - bx;
        const dy = cursorY - by;
        const distSq = dx * dx + dy * dy;
        if (distSq >= RADIUS_SQ) continue;
        const dist = Math.sqrt(distSq);
        const k = 1 - dist / RADIUS;
        const r = MIN_R + (MAX_R - MIN_R) * k;
        const px = dist > 0.001 ? bx - (dx / dist) * PUSH * k : bx;
        const py = dist > 0.001 ? by - (dy / dist) * PUSH * k : by;
        ctx.beginPath();
        ctx.arc(px, py, r, 0, Math.PI * 2);
        ctx.fill();
      }
      rafId = requestAnimationFrame(tick);
    };

    const start = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(tick);
    };
    const stop = () => {
      cancelAnimationFrame(rafId);
      rafId = 0;
    };

    const onPointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const margin = RADIUS;
      if (
        x < -margin ||
        x > rect.width + margin ||
        y < -margin ||
        y > rect.height + margin
      ) {
        cursorX = -9999;
        cursorY = -9999;
      } else {
        cursorX = x;
        cursorY = y;
      }
    };

    const apply = () => {
      stop();
      readColors();
      if (isStatic()) {
        cursorX = -9999;
        cursorY = -9999;
        window.removeEventListener("pointermove", onPointerMove);
        drawStatic();
      } else {
        window.addEventListener("pointermove", onPointerMove, { passive: true });
        start();
      }
    };

    resize();
    apply();

    const ro = new ResizeObserver(() => {
      resize();
      if (isStatic()) drawStatic();
    });
    ro.observe(container);

    const onMQChange = () => apply();
    reduceMQ.addEventListener("change", onMQChange);
    noHoverMQ.addEventListener("change", onMQChange);

    const themeObserver = new MutationObserver(() => {
      readColors();
      if (isStatic()) drawStatic();
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    const onVisibility = () => {
      if (isStatic()) return;
      if (document.hidden) stop();
      else start();
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      stop();
      ro.disconnect();
      themeObserver.disconnect();
      reduceMQ.removeEventListener("change", onMQChange);
      noHoverMQ.removeEventListener("change", onMQChange);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn("pointer-events-none absolute inset-0", className)}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  );
}

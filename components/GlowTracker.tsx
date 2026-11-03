"use client";

import { useEffect } from "react";

const MAX_TILT = 5; // degrees

export default function GlowTracker() {
  useEffect(() => {
    if (!window.matchMedia("(hover:hover)").matches) return;
    let tilted: HTMLElement | null = null;

    const move = (e: PointerEvent) => {
      const target = e.target as Element;
      const glowEl = target.closest?.("[data-glow]") as HTMLElement | null;
      if (glowEl) {
        const r = glowEl.getBoundingClientRect();
        glowEl.style.setProperty("--mx", `${e.clientX - r.left}px`);
        glowEl.style.setProperty("--my", `${e.clientY - r.top}px`);
      }

      const tiltEl = target.closest?.("[data-tilt]") as HTMLElement | null;
      if (tilted && tilted !== tiltEl) {
        tilted.style.transform = "";
        tilted = null;
      }
      if (tiltEl) {
        const r = tiltEl.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        const rx = (0.5 - py) * MAX_TILT;
        const ry = (px - 0.5) * MAX_TILT;
        tiltEl.style.transform = `perspective(900px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg)`;
        tilted = tiltEl;
      }
    };

    document.addEventListener("pointermove", move, { passive: true });
    return () => {
      document.removeEventListener("pointermove", move);
      if (tilted) tilted.style.transform = "";
    };
  }, []);
  return null;
}

"use client";

import { useEffect } from "react";

export default function GlowTracker() {
  useEffect(() => {
    if (!window.matchMedia("(hover:hover)").matches) return;
    const move = (e: PointerEvent) => {
      const el = (e.target as Element).closest?.("[data-glow]") as HTMLElement | null;
      if (!el) return;
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    document.addEventListener("pointermove", move, { passive: true });
    return () => document.removeEventListener("pointermove", move);
  }, []);
  return null;
}

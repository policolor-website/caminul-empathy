"use client";

import { useState } from "react";
import type { REVIEWS } from "@/lib/content";

type Review = (typeof REVIEWS)[number];

function Stars() {
  return (
    <div className="flex gap-0.5 text-honey" role="img" aria-label="5 din 5 stele">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
          <path d="M12 2l2.9 6.6 7.1.7-5.4 4.8 1.6 7-6.2-3.7-6.2 3.7 1.6-7L2 9.3l7.1-.7L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function Card({ r, hidden = false }: { r: Review; hidden?: boolean }) {
  return (
    <figure
      aria-hidden={hidden}
      className="mx-3 flex w-[320px] shrink-0 flex-col rounded-2xl border border-sand bg-cream p-5 shadow-sm md:w-[380px]"
    >
      <div className="flex items-center justify-between">
        <Stars />
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 text-[11px] font-bold text-ink-soft ring-1 ring-sand">
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden>
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z" />
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23z" />
            <path fill="#FBBC05" d="M5.84 14.09a6.6 6.6 0 0 1 0-4.18V7.07H2.18a11 11 0 0 0 0 9.86l3.66-2.84z" />
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15A11 11 0 0 0 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
          </svg>
          Google
        </span>
      </div>
      <blockquote className="mt-3 flex-1 text-[14px] leading-relaxed text-ink">{r.text}</blockquote>
      <figcaption className="mt-4 border-t border-sand pt-3">
        <div className="text-sm font-semibold text-pine-deep">{r.author}</div>
        <div className="text-xs text-ink-soft">{r.place}</div>
      </figcaption>
    </figure>
  );
}

export default function ReviewsMarquee({ reviews }: { reviews: Review[] }) {
  const [paused, setPaused] = useState(false);
  const fiveStar = reviews.filter((r) => r.rating === 5);
  if (fiveStar.length === 0) return null;

  return (
    <div
      className={`marquee relative col-span-full overflow-hidden rounded-3xl border border-sand bg-white py-5 ${paused ? "is-paused" : ""}`}
      role="group"
      aria-label="Recenzii Google 5 stele"
    >
      <div className="marquee-track flex w-max">
        {fiveStar.map((r, i) => (
          <Card key={`a-${i}`} r={r} />
        ))}
        {fiveStar.map((r, i) => (
          <Card key={`b-${i}`} r={r} hidden />
        ))}
      </div>
      <button
        type="button"
        onClick={() => setPaused((p) => !p)}
        aria-pressed={paused}
        aria-label={paused ? "Reia derularea" : "Oprește derularea"}
        className="absolute right-4 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-pine-deep/90 text-cream transition-colors hover:bg-pine-deep"
      >
        {paused ? (
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden>
            <path d="M8 5v14l11-7-11-7z" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden>
            <path d="M6 5h4v14H6zM14 5h4v14h-4z" />
          </svg>
        )}
      </button>
    </div>
  );
}

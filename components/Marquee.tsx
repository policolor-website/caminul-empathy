"use client";

import { useState } from "react";

const ITEMS = [
  "Îngrijire medicală 24/7",
  "Alzheimer, Parkinson & demență",
  "Recuperare post-AVC",
  "Kinetoterapie zilnică",
  "Terapie ocupațională",
  "Persoane imobilizate la pat",
  "Nutriție enterală",
  "Camere cu baie proprie",
  "Vizite zilnice, fără programare",
  "Internare chiar în aceeași zi",
  "3 mese + 2 gustări",
  "Grădină și spații verzi",
];

function Row({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="flex shrink-0 items-center" aria-hidden={hidden}>
      {ITEMS.map((item) => (
        <span key={item} className="flex items-center whitespace-nowrap">
          <span className="px-6 font-display text-[17px] font-medium tracking-wide text-pine-deep md:text-lg">
            {item}
          </span>
          <svg viewBox="0 0 24 24" className="h-3 w-3 text-clay" fill="currentColor" aria-hidden>
            <path d="M12 2l2.6 7.4L22 12l-7.4 2.6L12 22l-2.6-7.4L2 12l7.4-2.6L12 2z" />
          </svg>
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  const [paused, setPaused] = useState(false);

  return (
    <div
      className={`marquee relative overflow-hidden border-y border-honey/40 bg-honey/90 py-3.5 ${paused ? "is-paused" : ""}`}
      aria-label="Servicii și facilități"
    >
      <div className="marquee-track flex w-max">
        <Row />
        <Row hidden />
      </div>
      <button
        type="button"
        onClick={() => setPaused((p) => !p)}
        aria-pressed={paused}
        aria-label={paused ? "Reia derularea" : "Oprește derularea"}
        className="absolute right-4 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-pine-deep/90 text-cream transition-colors hover:bg-pine-deep"
      >
        {paused ? (
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden>
            <path d="M8 5v14l11-7-11-7z" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden>
            <path d="M7 5h4v14H7zM13 5h4v14h-4z" />
          </svg>
        )}
      </button>
    </div>
  );
}

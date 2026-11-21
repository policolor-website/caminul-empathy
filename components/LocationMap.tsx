"use client";

import { useEffect, useRef } from "react";
import type { LOCATIONS } from "@/lib/content";

type Loc = (typeof LOCATIONS)[number];
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type LeafletMap = any;

export default function LocationMap({ locations }: { locations: Loc[] }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    let map: LeafletMap | null = null;
    let cancelled = false;

    const load = async () => {
      if (!document.getElementById("leaflet-css")) {
        const link = document.createElement("link");
        link.id = "leaflet-css";
        link.rel = "stylesheet";
        link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
        document.head.appendChild(link);
      }
      const w = window as unknown as { L?: LeafletMap };
      if (!w.L) {
        await new Promise<void>((res, rej) => {
          const s = document.createElement("script");
          s.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
          s.onload = () => res();
          s.onerror = () => rej(new Error("leaflet"));
          document.head.appendChild(s);
        });
      }
      if (cancelled || !ref.current) return;

      const L = w.L;
      const pts = locations.map((l) => [l.coords.lat, l.coords.lng]);

      if (locations.length === 1) {
        map = L.map(ref.current, {
          scrollWheelZoom: false,
          attributionControl: false,
          zoomControl: false,
        }).setView(pts[0], 15);
      } else {
        map = L.map(ref.current, {
          scrollWheelZoom: false,
          attributionControl: true,
        }).fitBounds(L.latLngBounds(pts).pad(0.25));
      }

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);

      locations.forEach((l, i) => {
        const icon = L.divIcon({
          className: "",
          html: `<svg width="130" height="68" viewBox="0 0 130 68" style="filter:drop-shadow(0 3px 5px rgba(0,0,0,.35))"><path d="M65 64 L22 46 L22 16 Q22 6 32 6 L98 6 Q108 6 108 16 L108 46 Z" fill="#0B1F4B" stroke="#f0d9b0" stroke-width="2.5" stroke-linejoin="round"/><text x="65" y="27" text-anchor="middle" dominant-baseline="central" font-family="'Source Sans 3',sans-serif" font-weight="700" font-size="14" fill="#f0d9b0" letter-spacing="0.03em">${l.short}</text></svg>`,
          iconSize: [130, 68],
          iconAnchor: [65, 68],
        });
        L.marker([l.coords.lat, l.coords.lng], { icon })
          .addTo(map)
          .bindPopup(
            `<div style="font-family:'Source Sans 3',sans-serif;min-width:170px"><strong style="color:#0B1F4B">${l.name}</strong><br><span style="color:#5b5f69;font-size:12px">${l.address}</span><br><a href="/locatii/${l.slug}" style="color:#846327;font-size:12px;font-weight:700;text-decoration:none">Vezi locația →</a></div>`
          );
      });
    };

    load().catch(() => {});
    return () => {
      cancelled = true;
      map?.remove();
    };
  }, [locations]);

  return (
    <div
      ref={ref}
      className="h-full min-h-[320px] w-full rounded-3xl border border-sand overflow-hidden bg-pine-mist"
      role="img"
      aria-label="Harta cu cele 4 locații Empathy în Ilfov"
    />
  );
}

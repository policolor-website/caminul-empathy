import Image from "next/image";
import { GALLERY } from "@/lib/content";

function shuffled<T>(arr: T[], seed: number): T[] {
  const a = [...arr];
  let s = seed;
  for (let i = a.length - 1; i > 0; i--) {
    s = (s * 9301 + 49297) % 233280;
    const j = Math.floor((s / 233280) * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function Row({ items, hidden = false }: { items: typeof GALLERY; hidden?: boolean }) {
  return (
    <div className="flex shrink-0 gap-4 pr-4" aria-hidden={hidden}>
      {items.map((g) => (
        <div
          key={g.src}
          className="relative h-44 w-64 shrink-0 overflow-hidden rounded-2xl md:h-56 md:w-84"
        >
          <Image
            src={g.src}
            alt={hidden ? "" : g.alt}
            fill
            sizes="(min-width:768px) 336px, 256px"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}

export default function ImageCarousel({
  seed = 0,
  duration = 75,
  reverse = false,
}: {
  seed?: number;
  duration?: number;
  reverse?: boolean;
}) {
  const items = seed ? shuffled(GALLERY, seed) : GALLERY;
  return (
    <div className="marquee overflow-hidden" aria-label="Galerie foto căminele Empathy">
      <div
        className={`marquee-track flex w-max ${reverse ? "marquee-track--reverse" : ""}`}
        style={{ animationDuration: `${duration}s` }}
      >
        <Row items={items} />
        <Row items={items} hidden />
      </div>
    </div>
  );
}

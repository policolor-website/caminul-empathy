import type { Metadata } from "next";
import Image from "next/image";
import Icon from "@/components/Icons";
import Reveal from "@/components/Reveal";
import { GALLERY, SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Galerie foto",
  description:
    "Fotografii reale din căminele Empathy din Ilfov: camere, spații comune, grădină, activități cu rezidenții.",
};

export default function GaleriePage() {
  return (
    <>
      <section className="bg-pine-deep py-14 md:py-20 text-center">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-cream/10 px-4 py-1.5 text-[13px] font-semibold uppercase tracking-[0.14em] text-honey">
            Galerie foto
          </div>
          <h1 className="mt-5 font-display text-4xl md:text-5xl font-semibold text-cream">
            Viața la Empathy, în imagini
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-cream/75">
            Fotografii reale din căminele noastre — camere, spații comune, grădină și momente din zilele rezidenților.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {GALLERY.map((g, i) => (
              <Reveal key={g.src} delay={(i % 4) * 50}>
                <figure data-glow className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-sand">
                  <Image
                    src={g.src}
                    alt={g.alt}
                    fill
                    sizes="(min-width:1024px) 25vw, (min-width:768px) 33vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent p-4 text-sm text-cream opacity-0 transition-opacity group-hover:opacity-100">
                    {g.alt}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream-deep py-12 text-center">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-pine-deep">
            Fotografiile arată o parte — veniți să vedeți restul
          </h2>
          <a href={SITE.phoneHref} className="mt-6 inline-flex items-center gap-2 rounded-full bg-clay px-8 py-4 font-semibold text-white hover:bg-clay-deep">
            <Icon name="phone" className="h-5 w-5" /> Programează vizită: {SITE.phone}
          </a>
        </div>
      </section>
    </>
  );
}

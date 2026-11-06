import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icons";
import Reveal from "@/components/Reveal";
import { LOCATIONS, SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Locații",
  description:
    "Cele patru cămine Empathy din Ilfov: Cetinei, Orhideelor și Fortunei în Domnești, plus Clinceni în Bragadiru — la 15–20 de minute de București.",
};

export default function LocatiiPage() {
  return (
    <>
      <section className="bg-pine-deep py-14 md:py-20 text-center">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-cream/10 px-4 py-1.5 text-[13px] font-semibold uppercase tracking-[0.14em] text-honey">
            Locații
          </div>
          <h1 className="mt-5 font-display text-4xl md:text-5xl font-semibold text-cream">
            Patru cămine în Ilfov, aproape de București
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-cream/75">
            Toate în zone liniștite și verzi, la 15–20 de minute de Capitală — pentru ca familia să fie mereu aproape.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {LOCATIONS.map((l, i) => (
              <Reveal key={l.slug} delay={i * 100}>
                <article data-glow data-tilt className="group flex h-full flex-col overflow-hidden rounded-3xl border border-sand bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={l.image}
                      alt={l.name}
                      fill
                      sizes="(min-width:768px) 33vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute left-4 top-4 rounded-full bg-pine-deep/90 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-honey backdrop-blur">
                      {l.badge}
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <h2 className="font-display text-2xl font-semibold text-pine-deep">{l.name}</h2>
                    <div className="mt-2 flex items-center gap-1.5 text-[15px] text-ink-soft">
                      <Icon name="pin" className="h-4 w-4 shrink-0 text-clay" />
                      {l.address}
                    </div>
                    <p className="mt-4 flex-1 leading-relaxed text-ink-soft">{l.blurb}</p>
                    <ul className="mt-5 space-y-2 border-t border-sand pt-5">
                      {l.highlights.slice(0, 4).map((hl) => (
                        <li key={hl} className="flex gap-2.5 text-sm text-ink-soft">
                          <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-pine" />
                          {hl}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/locatii/${l.slug}`}
                      className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-pine px-6 py-3 font-semibold text-white transition-colors hover:bg-pine-deep"
                    >
                      Vezi centrul {l.short}
                      <Icon name="arrow" className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream-deep py-12 text-center">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-pine-deep">
            Nu știți ce locație vi se potrivește?
          </h2>
          <p className="mt-3 text-lg text-ink-soft">
            Sunați-ne — vă recomandăm centrul potrivit în funcție de situație și de unde locuiți.
          </p>
          <a href={SITE.phoneHref} className="mt-6 inline-flex items-center gap-2 rounded-full bg-honey px-8 py-4 font-semibold text-pine-deep hover:bg-clay-deep">
            <Icon name="phone" className="h-5 w-5" /> {SITE.phone}
          </a>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/Icons";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { INCLUDED, SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Tarife",
  description:
    "Tarife cămin de bătrâni Empathy: 3.899–7.000 lei/lună în funcție de gradul de dependență. Totul inclus: cazare, masă, îngrijire medicală 24/7, kinetoterapie.",
};

const FACTORS = [
  { t: "Gradul de dependență", d: "Rezident autonom, parțial dependent, dependent total sau imobilizat — fiecare nivel are un tarif propriu." },
  { t: "Starea de sănătate", d: "Afecțiuni neurologice (Alzheimer, Parkinson), recuperare post-AVC sau îngrijiri complexe pot influența tariful." },
  { t: "Tipul de cameră", d: "Cameră single sau cu mai multe locuri, în funcție de disponibilitate în fiecare centru." },
  { t: "Durata șederii", d: "Șederi pe termen lung sau scurt — tariful se stabilește transparent, la evaluare." },
];

export default function TarifePage() {
  return (
    <>
      <section className="bg-pine-deep py-14 md:py-20 text-center">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-cream/10 px-4 py-1.5 text-[13px] font-semibold uppercase tracking-[0.14em] text-honey">
            Tarife 2026
          </div>
          <h1 className="mt-5 font-display text-4xl md:text-5xl font-semibold text-cream">
            Un tarif clar, cu totul inclus
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-cream/75">
            Tarif personalizat în funcție de nevoile fiecărui rezident — evaluare gratuită, fără costuri ascunse.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
            <Reveal>
              <div data-glow data-tilt className="rounded-[2rem] border-2 border-pine/30 bg-white p-8 md:p-10 shadow-lg">
                <div className="text-[13px] font-semibold uppercase tracking-[0.16em] text-clay">
                  Tarif lunar
                </div>
                <div className="mt-3 font-display text-5xl font-semibold text-pine-deep">
                  {SITE.priceMin}–{SITE.priceMax} lei
                </div>
                <p className="mt-4 text-ink-soft leading-relaxed">
                  Prețul final depinde de gradul de dependență și serviciile necesare.
                  După evaluarea medicală gratuită primiți un tarif exact, valabil în contract.
                </p>
                <div className="mt-6 space-y-3">
                  {[
                    "Evaluare medicală gratuită",
                    "Contract transparent",
                    "Fără costuri ascunse",
                    "Internare chiar în aceeași zi",
                  ].map((t) => (
                    <div key={t} className="flex items-center gap-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-pine-mist text-pine">
                        <Icon name="check" className="h-4 w-4" />
                      </span>
                      <span className="font-medium">{t}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href={SITE.phoneHref} className="inline-flex items-center gap-2 rounded-full bg-honey px-6 py-3 font-semibold text-pine-deep hover:bg-clay-deep">
                    <Icon name="phone" className="h-4 w-4" /> {SITE.phone}
                  </a>
                  <Link href="/contact" className="inline-flex items-center gap-2 rounded-full border-2 border-pine px-6 py-3 font-semibold text-pine hover:bg-pine hover:text-white">
                    Cere estimare
                  </Link>
                </div>
              </div>
            </Reveal>

            <div id="factori" className="scroll-mt-28">
              <SectionHeading
                align="left"
                title="De ce depinde tariful"
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {FACTORS.map((f, i) => (
                  <Reveal key={f.t} delay={i * 80}>
                    <div data-glow data-tilt className="h-full rounded-2xl border border-sand bg-white p-6">
                      <h3 className="font-display text-lg font-semibold text-pine-deep">{f.t}</h3>
                      <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{f.d}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="inclus" className="scroll-mt-20 bg-cream-deep py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Inclus în tarif"
            title="Ce primește rezidentul, lunar"
            lead="Toate serviciile de mai jos sunt incluse în tariful lunar — nu plătiți nimic în plus."
          />
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {INCLUDED.map((item, i) => (
              <Reveal key={item} delay={(i % 3) * 50}>
                <div data-glow className="flex items-center gap-3 rounded-xl bg-white px-5 py-4 border border-sand">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-pine-mist text-pine">
                    <Icon name="check" className="h-4 w-4" />
                  </span>
                  <span className="font-medium">{item}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold text-pine-deep">
              Cereți un tarif exact pentru situația dumneavoastră
            </h2>
            <p className="mt-4 text-lg text-ink-soft">
              Evaluarea medicală este gratuită și fără obligații. Răspundem în maximum 24 de ore.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href={SITE.phoneHref} className="inline-flex items-center gap-2 rounded-full bg-honey px-8 py-4 font-semibold text-pine-deep hover:bg-clay-deep">
                <Icon name="phone" className="h-5 w-5" /> {SITE.phone}
              </a>
              <a href={SITE.phone2Href} className="inline-flex items-center gap-2 rounded-full border-2 border-pine px-8 py-4 font-semibold text-pine hover:bg-pine hover:text-white">
                {SITE.phone2}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

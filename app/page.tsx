import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icons";
import ImageCarousel from "@/components/ImageCarousel";
import Marquee from "@/components/Marquee";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import {
  FAQS, FIT, INCLUDED, LOCATIONS, REVIEWS, SERVICES, SITE, STATS, STEPS,
} from "@/lib/content";

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden bg-cream">
        <div className="pointer-events-none absolute -top-32 -right-32 h-[480px] w-[480px] rounded-full bg-pine-mist/70 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-24 h-[400px] w-[400px] rounded-full bg-honey/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 pt-12 pb-16 md:pt-20 md:pb-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full bg-pine-mist px-4 py-1.5 text-[13px] font-semibold uppercase tracking-[0.14em] text-pine">
                  <Icon name="pin" className="h-4 w-4" />
                  3 cămine în Ilfov · din {SITE.since}
                </div>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-[3.4rem] font-semibold leading-[1.08] text-pine-deep">
                  Un cămin care se simte{" "}
                  <em className="not-italic text-clay">ca acasă</em>
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
                  Îngrijire medicală 24/7, medic geriatru și o echipă care tratează
                  fiecare rezident ca pe un membru al familiei. La 15–20 de minute
                  de București, în Domnești și Bragadiru.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-clay px-7 py-3.5 text-[16px] font-semibold text-white shadow-md transition-all hover:bg-clay-deep hover:shadow-lg"
                  >
                    <Icon name="calendar" className="h-5 w-5" />
                    Programează o vizită gratuită
                  </Link>
                  <Link
                    href="/locatii"
                    className="inline-flex items-center gap-2 rounded-full border-2 border-pine px-7 py-3.5 text-[16px] font-semibold text-pine transition-colors hover:bg-pine hover:text-white"
                  >
                    Vezi cele 3 locații
                    <Icon name="arrow" className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
              <Reveal delay={320}>
                <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-[15px] text-ink-soft">
                  <span className="inline-flex items-center gap-2">
                    <Icon name="check" className="h-4 w-4 text-pine" /> Îngrijire medicală non-stop
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Icon name="check" className="h-4 w-4 text-pine" /> Vizite zilnice, fără programare
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Icon name="check" className="h-4 w-4 text-pine" /> Internare chiar în aceeași zi
                  </span>
                </div>
              </Reveal>
            </div>

            <Reveal delay={200} className="relative">
              <div className="relative">
                <div className="relative aspect-[4/3.2] overflow-hidden rounded-[2.5rem] rounded-tr-[6rem] shadow-2xl">
                  <Image
                    src="/img/camin-empathy.jpg"
                    alt="Căminul Empathy — îngrijire cu empatie pentru seniori"
                    fill
                    sizes="(min-width:1024px) 45vw, 100vw"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute -bottom-6 left-6 rounded-2xl bg-white/95 backdrop-blur px-6 py-4 shadow-xl">
                  <div className="text-[13px] font-semibold uppercase tracking-wider text-ink-soft">
                    Tarife transparente
                  </div>
                  <div className="font-display text-2xl font-semibold text-pine-deep">
                    de la {SITE.priceMin} lei<span className="text-base font-normal text-ink-soft">/lună</span>
                  </div>
                </div>
                <div className="absolute -top-5 right-8 rounded-2xl bg-pine px-5 py-3 shadow-xl">
                  <div className="flex items-center gap-2 text-cream">
                    <Icon name="users" className="h-5 w-5 text-honey" />
                    <span className="text-sm font-semibold">100+ familii alături de noi</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── MARQUEE ─── */}
      <Marquee />

      {/* ─── STATS BAR ─── */}
      <section className="bg-pine-deep py-10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 80} className="text-center">
                <div className="font-display text-3xl md:text-4xl font-semibold text-honey">{s.value}</div>
                <div className="mt-1 text-sm uppercase tracking-wider text-cream/70">{s.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRICING ─── */}
      <section className="py-8 md:py-12">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <div data-glow className="relative overflow-hidden rounded-[2rem] bg-pine-deep p-8 md:p-10 text-cream shadow-2xl">
                <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-honey/20 blur-2xl" />
                <div className="text-[13px] font-semibold uppercase tracking-[0.16em] text-honey">
                  Tarife 2026
                </div>
                <div className="mt-4 font-display text-4xl md:text-5xl font-semibold">
                  {SITE.priceMin}–{SITE.priceMax}
                  <span className="text-2xl"> lei</span>
                  <span className="text-lg font-normal text-cream/70">/lună</span>
                </div>
                <p className="mt-4 text-cream/80 leading-relaxed">
                  Tarif personalizat în funcție de gradul de dependență și serviciile
                  necesare. Evaluare gratuită, contract transparent, zero costuri ascunse.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href="/tarife" className="rounded-full bg-honey px-6 py-3 font-semibold text-pine-deep transition-colors hover:bg-cream">
                    Detalii tarife
                  </Link>
                  <a href={SITE.phoneHref} className="rounded-full border-2 border-cream/40 px-6 py-3 font-semibold text-cream transition-colors hover:bg-cream hover:text-pine-deep">
                    Cere o estimare
                  </a>
                </div>
              </div>
            </Reveal>
            <div>
              <SectionHeading
                align="left"
                eyebrow="Inclus în tarif"
                title="Un tarif clar, cu totul inclus"
              />
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {INCLUDED.slice(8).map((item, i) => (
                  <Reveal key={item} delay={i * 40}>
                    <div data-glow className="flex items-center gap-3 rounded-xl bg-pine-mist/60 px-4 py-3">
                      <Icon name="check" className="h-4 w-4 shrink-0 text-pine" />
                      <span className="text-[15px] font-medium">{item}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BENEFITS ─── */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Ce e bine să știți"
            title="Tot ce primește rezidentul, într-un singur tarif"
            lead="Fără costuri ascunse: cazare, masă, îngrijire medicală și activități — toate incluse în tariful lunar."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {INCLUDED.slice(0, 8).map((item, i) => (
              <Reveal key={item} delay={(i % 4) * 60}>
                <div data-glow className="group flex items-start gap-3 rounded-2xl border border-sand bg-white p-5 transition-all hover:border-pine/40 hover:shadow-md">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-pine-mist text-pine transition-colors group-hover:bg-pine group-hover:text-white">
                    <Icon name="check" className="h-4 w-4" />
                  </span>
                  <span className="font-medium text-ink">{item}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200} className="mt-8 text-center">
            <a href={SITE.phoneHref} className="inline-flex items-center gap-2 text-lg font-semibold text-clay hover:text-clay-deep">
              <Icon name="phone" className="h-5 w-5" />
              Întrebări? {SITE.phone}
            </a>
          </Reveal>
        </div>
      </section>

      {/* ─── IMAGE CAROUSEL ─── */}
      <section className="pb-16 md:pb-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 pb-8 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-pine-mist px-4 py-1.5 text-[13px] font-semibold uppercase tracking-[0.14em] text-pine">
              Din căminele noastre
            </span>
          </Reveal>
        </div>
        <ImageCarousel />
      </section>

      {/* ─── ABOUT ─── */}
      <section className="bg-cream-deep py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal variant="zoom">
              <div className="relative">
                <div className="overflow-hidden rounded-[2rem] shadow-xl">
                  <Image
                    src="/img/domnesti.jpg"
                    alt="Căminul Empathy din Domnești, Ilfov"
                    width={800}
                    height={560}
                    className="h-auto w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-5 -right-4 md:-right-6 rounded-2xl bg-honey px-6 py-4 shadow-xl">
                  <div className="font-display text-lg font-semibold text-pine-deep">
                    Firmă de TOP
                  </div>
                  <div className="text-sm text-pine-deep/70">pe ListaFirme.ro</div>
                </div>
              </div>
            </Reveal>
            <div>
              <SectionHeading
                align="left"
                eyebrow="Despre noi"
                title="Trei locații. Aceeași căldură."
                lead={`Din ${SITE.since}, oferim seniorilor un mediu sigur, activ și plin de atenție — ca o familie mare. Fiecare rezident primește un plan de îngrijire adaptat nevoilor lui.`}
              />
              <div className="mt-8 space-y-4">
                {[
                  { t: "Îngrijire personalizată", d: "Plan individual de îngrijire, adaptat nevoilor unice ale fiecărui rezident." },
                  { t: "Transparență totală", d: "Comunicare zilnică cu familia și tarife clare, fără surprize." },
                  { t: "Echipă medicală 24/7", d: "Medic geriatru, asistente, infirmiere și kinetoterapeuți." },
                  { t: "Internare rapidă", d: "Răspuns în maximum 24h — internarea se poate face chiar în aceeași zi." },
                ].map((f, i) => (
                  <Reveal key={f.t} delay={i * 80}>
                    <div className="flex gap-4">
                      <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-clay/15 text-clay">
                        <Icon name="check" className="h-5 w-5" />
                      </span>
                      <div>
                        <div className="font-semibold text-pine-deep">{f.t}</div>
                        <div className="text-ink-soft">{f.d}</div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
              <Reveal delay={350}>
                <Link
                  href="/despre-noi"
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-pine hover:text-pine-deep"
                >
                  Povestea noastră completă
                  <Icon name="arrow" className="h-4 w-4" />
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Servicii"
            title="Îngrijire adaptată fiecărei situații"
            lead="De la seniori activi care caută comunitate, până la persoane dependente de îngrijire sau cu afecțiuni neurologice."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 4) * 70}>
                <Link
                  href="/servicii"
                  data-glow
                  className="group flex h-full flex-col rounded-3xl border border-sand bg-white p-6 transition-all hover:-translate-y-1 hover:border-pine/40 hover:shadow-lg"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pine-mist text-pine transition-colors group-hover:bg-pine group-hover:text-white">
                    <Icon name={s.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-pine-deep">{s.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{s.text}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LOCATIONS ─── */}
      <section className="bg-pine-deep py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-cream/10 px-4 py-1.5 text-[13px] font-semibold uppercase tracking-[0.14em] text-honey">
              Locații
            </div>
            <h2 className="mt-4 font-display text-3xl md:text-[2.6rem] leading-[1.15] font-semibold text-cream">
              Trei cămine, la 15–20 de minute de București
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-cream/70">
              Toate în Ilfov, toate cu același standard de îngrijire. Alegeți locația cea mai apropiată de familie.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {LOCATIONS.map((l, i) => (
              <Reveal key={l.slug} delay={i * 100}>
                <article data-glow className="group flex h-full flex-col overflow-hidden rounded-3xl bg-cream shadow-xl">
                  <div className="relative h-52 overflow-hidden">
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
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-xl font-semibold text-pine-deep">{l.name}</h3>
                    <div className="mt-1.5 flex items-center gap-1.5 text-sm text-ink-soft">
                      <Icon name="pin" className="h-4 w-4 shrink-0 text-clay" />
                      {l.address}
                    </div>
                    <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-soft">{l.blurb}</p>
                    <Link
                      href={`/locatii/${l.slug}`}
                      className="mt-5 inline-flex items-center gap-2 font-semibold text-pine transition-colors hover:text-clay"
                    >
                      Descoperă centrul
                      <Icon name="arrow" className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LOCATION CAROUSEL ─── */}
      <section className="bg-cream py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 pb-8 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-pine-mist px-4 py-1.5 text-[13px] font-semibold uppercase tracking-[0.14em] text-pine">
              Spații și momente din fiecare centru
            </span>
          </Reveal>
        </div>
        <ImageCarousel seed={7} duration={70} reverse />
      </section>

      {/* ─── STEPS ─── */}
      <section className="bg-cream-deep py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Cum funcționează"
            title="Internarea, în trei pași simpli"
          />
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 120} className="relative">
                {i < STEPS.length - 1 && (
                  <div className="absolute left-full top-8 hidden w-10 border-t-2 border-dashed border-pine/30 md:block" />
                )}
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-pine font-display text-2xl font-semibold text-honey shadow-md">
                  {s.n}
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-pine-deep">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-soft">{s.text}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={300} className="mt-12 flex flex-wrap justify-center gap-4">
            <a href={SITE.phoneHref} className="inline-flex items-center gap-2 rounded-full bg-clay px-7 py-3.5 font-semibold text-white transition-colors hover:bg-clay-deep">
              <Icon name="phone" className="h-5 w-5" />
              Sună acum: {SITE.phone}
            </a>
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full border-2 border-pine px-7 py-3.5 font-semibold text-pine hover:bg-pine hover:text-white">
              Scrie-ne un mesaj
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ─── FIT / HONESTY ─── */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Sincer, de la început"
            title="Pentru cine este potrivit — și când nu"
            lead="Vă spunem direct dacă Empathy este soluția potrivită pentru situația dumneavoastră."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div data-glow className="h-full rounded-3xl border-2 border-pine/30 bg-pine-mist/50 p-7 md:p-9">
                <h3 className="flex items-center gap-3 font-display text-xl font-semibold text-pine-deep">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-pine text-cream">
                    <Icon name="check" className="h-5 w-5" />
                  </span>
                  Empathy este potrivit pentru
                </h3>
                <ul className="mt-5 space-y-3">
                  {FIT.good.map((g) => (
                    <li key={g} className="flex gap-3 text-[15px] leading-relaxed">
                      <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-pine" />
                      {g}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div data-glow className="h-full rounded-3xl border-2 border-clay/30 bg-clay/5 p-7 md:p-9">
                <h3 className="flex items-center gap-3 font-display text-xl font-semibold text-clay-deep">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-clay text-white">
                    <Icon name="arrow" className="h-5 w-5 rotate-180" />
                  </span>
                  Nu este soluția potrivită când
                </h3>
                <ul className="mt-5 space-y-3">
                  {FIT.bad.map((b) => (
                    <li key={b} className="flex gap-3 text-[15px] leading-relaxed text-ink-soft">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-clay" />
                      {b}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 rounded-xl bg-white/70 p-4 text-sm text-ink-soft">
                  Dacă situația necesită alt tip de îngrijire, vă spunem sincer și vă
                  orientăm către soluția potrivită.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── REVIEWS ─── */}
      <section id="recenzii" className="scroll-mt-20 bg-cream-deep py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Recenzii"
            title="Ce spun familiile rezidenților"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.place} delay={i * 100}>
                <figure data-glow className="flex h-full flex-col rounded-3xl bg-white p-7 shadow-sm border border-sand">
                  <div className="flex gap-1 text-honey" aria-label="5 din 5 stele">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Icon key={j} name="star" className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <blockquote className="mt-4 flex-1 leading-relaxed text-ink-soft">
                    „{r.text}”
                  </blockquote>
                  <figcaption className="mt-5 border-t border-sand pt-4">
                    <div className="font-semibold text-pine-deep">{r.author}</div>
                    <div className="text-sm text-ink-soft">{r.place}</div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section id="faq" className="scroll-mt-20 py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Întrebări frecvente"
            title="Ce ne întreabă familiile înainte de internare"
          />
          <div className="mt-10 space-y-3">
            {FAQS.map((f, i) => (
              <Reveal key={f.q} delay={i * 40}>
                <details data-glow className="faq-item group rounded-2xl border border-sand bg-white px-6 py-4 open:shadow-sm">
                  <summary className="flex items-center justify-between gap-4 py-1">
                    <span className="font-semibold text-pine-deep">{f.q}</span>
                    <span className="faq-icon flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-pine-mist text-pine">
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden>
                        <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-3 pb-2 leading-relaxed text-ink-soft">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200} className="mt-10 flex flex-wrap items-center justify-center gap-4 rounded-2xl bg-pine-mist p-6">
            <span className="font-medium text-pine-deep">Nu ați găsit răspunsul?</span>
            <a href={SITE.phoneHref} className="inline-flex items-center gap-2 font-semibold text-clay hover:text-clay-deep">
              <Icon name="phone" className="h-5 w-5" /> {SITE.phone}
            </a>
            <a href={SITE.whatsapp} target="_blank" rel="noopener" className="font-semibold text-pine hover:text-pine-deep">
              WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="overflow-hidden rounded-[2.5rem] bg-pine-deep">
            <div className="grid gap-10 p-8 md:p-14 lg:grid-cols-2 lg:items-center">
              <Reveal>
                <h2 className="font-display text-3xl md:text-4xl font-semibold leading-tight text-cream">
                  Vorbiți cu noi astăzi — vizita este gratuită
                </h2>
                <p className="mt-4 text-lg text-cream/75 leading-relaxed">
                  Vino să cunoști căminul, echipa și atmosfera. Răspundem în maximum
                  24 de ore, iar internarea se poate face chiar în aceeași zi.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a href={SITE.phoneHref} className="inline-flex items-center gap-2 rounded-full bg-honey px-7 py-3.5 font-semibold text-pine-deep transition-colors hover:bg-cream">
                    <Icon name="phone" className="h-5 w-5" /> {SITE.phone} — {SITE.phoneName}
                  </a>
                  <a href={SITE.phone2Href} className="inline-flex items-center gap-2 rounded-full border-2 border-cream/40 px-7 py-3.5 font-semibold text-cream transition-colors hover:bg-cream hover:text-pine-deep">
                    {SITE.phone2} — {SITE.phone2Name}
                  </a>
                </div>
              </Reveal>
              <Reveal delay={150}>
                <div className="rounded-3xl bg-cream p-6 md:p-8">
                  <h3 className="font-display text-xl font-semibold text-pine-deep mb-5">
                    Preferați să vă contactăm noi?
                  </h3>
                  <ContactForm />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

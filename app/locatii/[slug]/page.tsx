import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Icon from "@/components/Icons";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { GALLERY, INCLUDED, LOCATIONS, SITE } from "@/lib/content";

export function generateStaticParams() {
  return LOCATIONS.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/locatii/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const loc = LOCATIONS.find((l) => l.slug === slug);
  if (!loc) return {};
  return {
    title: loc.name,
    description: `${loc.name} — cămin de bătrâni la ${loc.address}. ${loc.blurb}`,
  };
}

export default async function LocationPage({
  params,
}: PageProps<"/locatii/[slug]">) {
  const { slug } = await params;
  const loc = LOCATIONS.find((l) => l.slug === slug);
  if (!loc) notFound();
  const others = LOCATIONS.filter((l) => l.slug !== slug);

  return (
    <>
      <section className="relative bg-pine-deep py-14 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image src={loc.image} alt="" fill className="object-cover" priority />
        </div>
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3 text-sm text-cream/70">
              <Link href="/" className="hover:text-honey">Acasă</Link>
              <span>/</span>
              <Link href="/locatii" className="hover:text-honey">Locații</Link>
              <span>/</span>
              <span className="text-honey">{loc.short}</span>
            </div>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-honey/20 px-4 py-1.5 text-[13px] font-semibold uppercase tracking-[0.14em] text-honey">
              {loc.badge}
            </div>
            <h1 className="mt-4 font-display text-4xl md:text-5xl font-semibold text-cream">
              {loc.name}
            </h1>
            <div className="mt-3 flex items-center gap-2 text-lg text-cream/80">
              <Icon name="pin" className="h-5 w-5 text-honey" />
              {loc.address}
            </div>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-cream/75">{loc.blurb}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href={SITE.phoneHref} className="inline-flex items-center gap-2 rounded-full bg-honey px-7 py-3.5 font-semibold text-pine-deep hover:bg-cream">
                <Icon name="phone" className="h-5 w-5" /> {SITE.phone}
              </a>
              <a href="/contact" className="inline-flex items-center gap-2 rounded-full border-2 border-cream/50 px-7 py-3.5 font-semibold text-cream hover:bg-cream hover:text-pine-deep">
                <Icon name="calendar" className="h-5 w-5" /> Programează vizită
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <SectionHeading align="left" eyebrow="De ce" title={`De ce să alegeți ${loc.name}?`} />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {loc.facts.map((f, i) => (
                  <Reveal key={f.title} delay={(i % 2) * 70}>
                    <div data-glow data-tilt className="h-full rounded-2xl border border-sand bg-white p-6">
                      <h3 className="font-display text-lg font-semibold text-pine-deep">{f.title}</h3>
                      <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{f.text}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
            <div>
              <Reveal delay={100} variant="zoom">
                <div className="overflow-hidden rounded-[2rem] shadow-xl">
                  <Image
                    src={loc.image}
                    alt={loc.name}
                    width={800}
                    height={560}
                    className="h-auto w-full object-cover"
                  />
                </div>
              </Reveal>
              <Reveal delay={200}>
                <div data-glow className="mt-6 rounded-2xl bg-pine-mist p-6">
                  <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-pine-deep">
                    <Icon name="clock" className="h-5 w-5" />
                    Program de vizită
                  </h3>
                  <p className="mt-2 text-ink-soft">{loc.visitHours} — fără programare.</p>
                  <p className="mt-1 text-sm text-ink-soft">
                    Încurajăm vizitele familiei: contribuie direct la bunăstarea rezidenților.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream-deep py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Facilități"
            title="Tot ce e necesar pentru o viață confortabilă"
          />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {loc.highlights.map((hl, i) => (
              <Reveal key={hl} delay={(i % 4) * 50}>
                <div data-glow className="flex h-full items-start gap-3 rounded-xl bg-white px-5 py-4 border border-sand">
                  <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-pine" />
                  <span className="font-medium leading-snug">{hl}</span>
                </div>
              </Reveal>
            ))}
            <Reveal delay={100}>
              <div className="flex h-full items-start gap-3 rounded-xl bg-pine px-5 py-4 text-cream">
                <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-honey" />
                <span className="font-medium leading-snug">
                  Tarif de la {SITE.priceMin} lei/lună, cu totul inclus
                </span>
              </div>
            </Reveal>
          </div>
          <Reveal delay={150} className="mt-10">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {INCLUDED.slice(0, 8).map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-[15px] text-ink-soft">
                  <Icon name="check" className="h-4 w-4 shrink-0 text-clay" />
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="Galerie" title={`Din căminul ${loc.short}`} />
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {(loc.gallery ?? GALLERY.map((g) => g.src)).slice(0, 8).map((src, i) => (
              <Reveal key={src} delay={(i % 4) * 60}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src={src}
                    alt={`${loc.name} — fotografie ${i + 1}`}
                    fill
                    sizes="(min-width:768px) 25vw, 50vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200} className="mt-8 text-center">
            <Link href="/galerie" className="inline-flex items-center gap-2 font-semibold text-pine hover:text-clay">
              Toată galeria foto
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream-deep py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="Alte locații" title="Mai avem două centre în Ilfov" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {others.map((l) => (
              <Reveal key={l.slug}>
                <Link
                  href={`/locatii/${l.slug}`}
                  data-glow
                  className="group flex items-center gap-5 rounded-3xl border border-sand bg-white p-5 transition-all hover:border-pine/40 hover:shadow-lg"
                >
                  <div className="relative h-24 w-32 shrink-0 overflow-hidden rounded-2xl">
                    <Image src={l.image} alt={l.name} fill sizes="128px" className="object-cover" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-pine-deep group-hover:text-clay">
                      {l.name}
                    </h3>
                    <div className="mt-1 flex items-center gap-1.5 text-sm text-ink-soft">
                      <Icon name="pin" className="h-4 w-4 text-clay" />
                      {l.address}
                    </div>
                  </div>
                  <Icon name="arrow" className="ml-auto h-5 w-5 text-pine" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="overflow-hidden rounded-[2.5rem] bg-pine-deep">
            <div className="grid gap-10 p-8 md:p-14 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="font-display text-3xl font-semibold text-cream">
                  Vino să vezi {loc.name}
                </h2>
                <p className="mt-4 text-lg text-cream/75">
                  Vizita este gratuită și fără obligații. Vezi camerele, cunoaște echipa
                  și stai de vorbă cu noi despre situația familiei tale.
                </p>
                <div className="mt-7 flex flex-wrap gap-4">
                  <a href={SITE.phoneHref} className="inline-flex items-center gap-2 rounded-full bg-honey px-7 py-3.5 font-semibold text-pine-deep hover:bg-cream">
                    <Icon name="phone" className="h-5 w-5" /> {SITE.phone}
                  </a>
                </div>
              </div>
              <div className="rounded-3xl bg-cream p-6 md:p-8">
                <h3 className="font-display text-xl font-semibold text-pine-deep mb-5">
                  Lasă-ne datele, te sunăm noi
                </h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Icon from "@/components/Icons";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import JsonLd from "@/components/JsonLd";
import RelatedLinks from "@/components/RelatedLinks";
import {
  breadcrumbNode, graph, orgNode, serviceFaqNode, serviceNode, webpageNode,
} from "@/lib/jsonld";
import { SERVICES, SITE } from "@/lib/content";
import { SERVICE_DETAILS } from "@/lib/service-details";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/servicii/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const svc = SERVICES.find((s) => s.slug === slug);
  const d = SERVICE_DETAILS[slug];
  if (!svc || !d) return {};
  return {
    title: `${svc.title} — servicii cămin de bătrâni`,
    description: `${svc.title} la căminul de bătrâni Empathy, Ilfov lângă București. ${svc.text} Inclus în tariful lunar, fără costuri ascunse.`,
    alternates: { canonical: `/servicii/${svc.slug}` },
    openGraph: {
      title: `${svc.title} — Căminul Empathy`,
      description: svc.text,
      images: [{ url: d.image, width: 1200, height: 800, alt: svc.title }],
    },
  };
}

export default async function ServicePage({
  params,
}: PageProps<"/servicii/[slug]">) {
  const { slug } = await params;
  const svc = SERVICES.find((s) => s.slug === slug);
  const d = SERVICE_DETAILS[slug];
  if (!svc || !d) notFound();

  const related = SERVICES.filter((s) => d.related.includes(s.slug));

  return (
    <>
      <JsonLd
        data={graph(
          orgNode(),
          serviceNode(svc.slug, svc.title, svc.text),
          serviceFaqNode(d.faqs),
          webpageNode(
            `/servicii/${svc.slug}`,
            `${svc.title} — Căminul Empathy`,
            svc.text
          ),
          breadcrumbNode([
            { name: "Acasă", path: "/" },
            { name: "Servicii", path: "/servicii" },
            { name: svc.title, path: `/servicii/${svc.slug}` },
          ])
        )}
      />

      {/* ─── HERO ─── */}
      <section className="relative bg-pine-deep py-14 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image src={d.image} alt="" fill className="object-cover" priority />
        </div>
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <nav className="mb-8 flex items-center gap-2 text-sm text-cream/70" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-honey">Acasă</Link>
            <span>/</span>
            <Link href="/servicii" className="hover:text-honey">Servicii</Link>
            <span>/</span>
            <span className="text-honey">{svc.title}</span>
          </nav>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-cream/10 px-4 py-1.5 text-[13px] font-semibold uppercase tracking-[0.14em] text-honey">
              <Icon name={svc.icon} className="h-4 w-4" />
              Serviciu cămin de bătrâni
            </div>
            <h1 className="mt-5 font-display text-4xl md:text-5xl font-semibold text-cream">
              {svc.title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-cream/80">{svc.text}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={SITE.phoneHref} className="inline-flex items-center gap-2 rounded-full bg-honey px-7 py-3.5 font-semibold text-pine-deep hover:bg-clay-deep hover:text-cream transition-colors">
                <Icon name="phone" className="h-5 w-5" /> {SITE.phone}
              </a>
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-7 py-3.5 font-semibold text-cream hover:bg-cream/10 transition-colors">
                Cere evaluare gratuită
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className="bg-white py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {d.stats.map((st, i) => (
              <Reveal key={st.l} delay={i * 70}>
                <div data-glow className="rounded-2xl border border-sand bg-cream/60 p-6 text-center">
                  <div className="font-display text-3xl md:text-4xl font-semibold text-pine">{st.v}</div>
                  <div className="mt-1.5 text-sm text-ink-soft">{st.l}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INTRO ─── */}
      <section className="bg-white pb-14 md:pb-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <Reveal>
            <p className="text-lg leading-relaxed text-ink-soft md:text-xl">{d.intro}</p>
          </Reveal>
        </div>
      </section>

      {/* ─── PENTRU CINE ─── */}
      <section className="bg-cream py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Evaluare"
            title={`Pentru cine este ${svc.title.toLowerCase()}`}
            lead="Dacă recunoașteți vreuna dintre aceste situații, serviciiul nostru este gândit pentru dumneavoastră."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {d.forWhom.map((f, i) => (
              <Reveal key={f} delay={(i % 3) * 70}>
                <div data-glow className="flex h-full items-start gap-3 rounded-2xl border border-sand bg-white p-5">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-pine-mist text-pine">
                    <Icon name="check" className="h-4 w-4" />
                  </span>
                  <span className="text-[15px] font-medium leading-relaxed text-ink">{f}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CE INCLUDES ─── */}
      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Inclus"
            title="Ce include serviciul"
            lead="Totul este inclus în tariful lunar — fără costuri ascunse, fără surprize."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {d.includes.map((item, i) => (
              <Reveal key={item} delay={(i % 4) * 60}>
                <div data-glow className="flex items-start gap-3 rounded-2xl border border-sand bg-cream/60 p-5">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-pine text-cream">
                    <Icon name="check" className="h-4 w-4" />
                  </span>
                  <span className="text-[15px] font-medium">{item}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CUM DECURGE ─── */}
      <section className="bg-cream-deep py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Proces"
            title="Cum decurge serviciiul, pas cu pas"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {d.steps.map((st, i) => (
              <Reveal key={st.t} delay={i * 80}>
                <div className="h-full rounded-2xl border border-sand bg-white p-7">
                  <div className="font-display text-4xl font-semibold text-honey">{i + 1}</div>
                  <h3 className="mt-3 font-display text-xl font-semibold text-pine-deep">{st.t}</h3>
                  <p className="mt-2 leading-relaxed text-ink-soft">{st.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Întrebări frecvente"
            title={`Întrebări despre ${svc.title.toLowerCase()}`}
          />
          <div className="mt-12 space-y-3">
            {d.faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 50}>
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
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-pine-deep py-14 md:py-20 text-center">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-cream">
            {svc.title} — inclus în fiecare plan de îngrijire
          </h2>
          <p className="mt-4 text-lg text-cream/75">
            Evaluare gratuită, tarif exact și internare posibilă chiar în aceeași zi.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href={SITE.phoneHref} className="inline-flex items-center gap-2 rounded-full bg-honey px-8 py-4 font-semibold text-pine-deep hover:bg-clay-deep hover:text-cream">
              <Icon name="phone" className="h-5 w-5" /> {SITE.phone}
            </a>
            <Link href="/tarife" className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-8 py-4 font-semibold text-cream hover:bg-cream/10">
              Vezi tarifele
            </Link>
          </div>
        </div>
      </section>

      {/* ─── ALTE SERVICII ─── */}
      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="Alte servicii" title="Servicii conexe" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((s) => (
              <Link
                key={s.slug}
                href={`/servicii/${s.slug}`}
                className="group rounded-2xl border border-sand bg-cream/60 p-6 transition-all hover:border-pine/40 hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-pine-mist text-pine transition-colors group-hover:bg-pine group-hover:text-white">
                    <Icon name={s.icon} className="h-5 w-5" />
                  </span>
                  <div className="font-display text-lg font-semibold text-pine-deep">{s.title}</div>
                </div>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft line-clamp-2">{s.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <RelatedLinks
        links={[
          { href: "/tarife", label: "Tarife cămin de bătrâni" },
          { href: "/locatii", label: "Locațiile noastre" },
          { href: "/acte-necesare-internare", label: "Acte necesare & internare" },
          { href: "/contact", label: "Contact" },
        ]}
      />
    </>
  );
}

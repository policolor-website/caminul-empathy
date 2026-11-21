import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { SITE, STEPS } from "@/lib/content";
import RelatedLinks from "@/components/RelatedLinks";
import { breadcrumbNode, graph, orgNode, webpageNode } from "@/lib/jsonld";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Acte necesare & internare — Căminul Empathy",
  alternates: { canonical: "/acte-necesare-internare" },
  description:
    "Ce acte sunt necesare pentru internarea la Căminul Empathy: act de identitate, fișă medicală, analize și contractul de servicii. Vă ghidăm pas cu pas.",
};

const DOCUMENTS = [
  {
    t: "Act de identitate al rezidentului",
    d: "Buletinul sau cartea de identitate a persoanei care va fi cazată.",
  },
  {
    t: "Act de identitate al aparținătorului",
    d: "Buletinul persoanei care semnează contractul și va fi contactul principal.",
  },
  {
    t: "Fișă medicală sau scrisoare medicală",
    d: "De la medicul de familie sau medicul curant — cu diagnosticele și tratamentul actual.",
  },
  {
    t: "Analize medicale uzuale",
    d: "Analize de sânge și alte investigații recente, dacă există. Dacă lipsesc, vă ajutăm să le obțineți.",
  },
  {
    t: "Contractul de servicii",
    d: "Îl întocmim împreună la evaluare — tarif transparent, fără costuri ascunse.",
  },
];

export default function ActePage() {
  return (
    <>
      <JsonLd
        data={graph(
          orgNode(),
          webpageNode("/acte-necesare-internare", "Acte necesare & internare — Căminul Empathy", "Ce acte sunt necesare pentru internarea la Căminul Empathy: act de identitate, fișă medicală, analize și contractul de servicii."),
          breadcrumbNode([{ name: "Acasă", path: "/" }, { name: "Acte necesare & internare", path: "/acte-necesare-internare" }])
        )}
      />
      <section className="bg-pine-deep py-14 md:py-20 text-center">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-cream/10 px-4 py-1.5 text-[13px] font-semibold uppercase tracking-[0.14em] text-honey">
            Internare
          </div>
          <h1 className="mt-5 font-display text-4xl md:text-5xl font-semibold text-cream">
            Acte necesare &amp; internare
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-cream/75">
            Documentația este simplă — și vă ghidăm pas cu pas prin fiecare pas.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Documente"
            title="Ce trebuie să pregătiți"
            lead="Lista este scurtă. Dacă vă lipsește ceva, echipa noastră vă ajută să obțineți documentele lipsă."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {DOCUMENTS.map((d, i) => (
              <Reveal key={d.t} delay={i * 60}>
                <div data-glow className="h-full rounded-2xl border border-sand bg-white p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-pine-mist font-display text-lg font-semibold text-pine">
                    {i + 1}
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-pine-deep">{d.t}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{d.d}</p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={DOCUMENTS.length * 60}>
              <div data-glow className="h-full rounded-2xl bg-pine-deep p-6 text-cream">
                <h3 className="font-display text-lg font-semibold">Nu știți de unde să începeți?</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-cream/75">
                  Luați-vă actele și veniți la o discuție cu familia. Restul documentației o rezolvăm împreună.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-cream-deep py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="Proces" title="De la telefon la internare, în trei pași" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 80}>
                <div className="h-full rounded-2xl border border-sand bg-white p-7">
                  <div className="font-display text-4xl font-semibold text-honey">{s.n}</div>
                  <h3 className="mt-3 font-display text-xl font-semibold text-pine-deep">{s.title}</h3>
                  <p className="mt-2 leading-relaxed text-ink-soft">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-10 text-center text-[15px] text-ink-soft">
            Întrebări despre documente?{" "}
            <Link href="/contact" className="font-semibold text-pine hover:text-honey">
              Contactați-ne
            </Link>{" "}
            sau sunați la <a href={SITE.phoneHref} className="font-semibold text-pine hover:text-honey">{SITE.phone}</a>.
          </p>
        </div>
      </section>

      <RelatedLinks
        links={[
      { href: "/intrebari-frecvente", label: "Întrebări frecvente" },
      { href: "/tarife", label: "Tarife cămin de bătrâni" },
      { href: "/locatii", label: "Locațiile noastre" },
      { href: "/contact", label: "Contact" },
    ]}
      />
    </>
  );
}

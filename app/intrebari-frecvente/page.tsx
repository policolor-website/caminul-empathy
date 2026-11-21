import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import JsonLd from "@/components/JsonLd";
import { breadcrumbNode, faqNode, graph, webpageNode } from "@/lib/jsonld";
import { FAQS, SITE } from "@/lib/content";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Întrebări frecvente — Cămin de bătrâni Empathy",
  alternates: { canonical: "/intrebari-frecvente" },
  description:
    "Răspunsuri la întrebările frecvente despre cazarea la Căminul Empathy: tarife, servicii incluse, internare, program de vizită și îngrijirea rezidenților.",
};

export default function IntrebariPage() {
  return (
    <>
      <JsonLd
        data={graph(
          webpageNode(
            "/intrebari-frecvente",
            "Întrebări frecvente — Cămin de bătrâni Empathy",
            "Răspunsuri la întrebările frecvente despre cazarea la Căminul Empathy."
          ),
          faqNode(),
          breadcrumbNode([
            { name: "Acasă", path: "/" },
            { name: "Întrebări frecvente", path: "/intrebari-frecvente" },
          ])
        )}
      />
      <section className="bg-pine-deep py-14 md:py-20 text-center">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-cream/10 px-4 py-1.5 text-[13px] font-semibold uppercase tracking-[0.14em] text-honey">
            Întrebări frecvente
          </div>
          <h1 className="mt-5 font-display text-4xl md:text-5xl font-semibold text-cream">
            Ce ne întreabă familiile
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-cream/75">
            Răspunsuri sincere la întrebările pe care ni le puneți cel mai des înainte de internare.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="space-y-3">
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

          <div className="mt-12 rounded-3xl bg-pine-deep p-8 text-cream md:p-10">
            <h2 className="font-display text-2xl md:text-3xl font-semibold">Nu ați găsit răspunsul?</h2>
            <p className="mt-3 max-w-2xl leading-relaxed text-cream/75">
              Sunați-ne sau scrieți-ne — răspundem la orice întrebare, cu sinceritate, înainte să luați o decizie.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={SITE.phoneHref} className="rounded-full bg-honey px-6 py-3 font-semibold text-pine-deep hover:bg-clay-deep hover:text-cream transition-colors">
                {SITE.phone}
              </a>
              <a href={SITE.whatsapp} target="_blank" rel="noopener" className="rounded-full border border-cream/30 px-6 py-3 font-semibold text-cream hover:bg-cream/10 transition-colors">
                WhatsApp
              </a>
              <Link href="/contact" className="rounded-full border border-cream/30 px-6 py-3 font-semibold text-cream hover:bg-cream/10 transition-colors">
                Pagina de contact
              </Link>
            </div>
          </div>
        </div>
      </section>

      <RelatedLinks
        links={[
      { href: "/acte-necesare-internare", label: "Acte necesare & internare" },
      { href: "/tarife", label: "Tarife cămin de bătrâni" },
      { href: "/locatii", label: "Locațiile noastre" },
      { href: "/contact", label: "Contact" },
    ]}
      />
    </>
  );
}

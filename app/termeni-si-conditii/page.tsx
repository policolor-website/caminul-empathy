import type { Metadata } from "next";
import { SITE } from "@/lib/content";
import { breadcrumbNode, graph, webpageNode } from "@/lib/jsonld";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Termeni și condiții",
  alternates: { canonical: "/termeni-si-conditii" },
  description:
    "Termenii și condițiile de utilizare a site-ului Căminului Empathy și ale serviciilor de cazare și îngrijire a vârstnicilor.",
};

const SECTIONS = [
  {
    t: "1. Despre acest site",
    body: `Acest site este proprietatea ${SITE.name} și oferă informații despre serviciile de cazare și îngrijire a persoanelor vârstnice din căminele noastre din Ilfov. Conținutul are rol informativ; oferta contractuală se stabilește exclusiv prin contractul de servicii semnat cu fiecare rezident sau aparținător.`,
  },
  {
    t: "2. Serviciile noastre",
    body: "Oferim cazare pe termen lung pentru persoane vârstnice, cu îngrijire medicală 24/7, cazare în camere cu baie proprie, masă completă, kinetoterapie și activități. Serviciile exacte, tarifele și condițiile de cazare sunt detaliate în contractul individual de servicii, întocmit după evaluarea medicală gratuită.",
  },
  {
    t: "3. Tarifele",
    body: `Tarifele afișate pe site (de la ${SITE.priceMin} lei/lună) sunt orientative. Tariful final este stabilit în funcție de gradul de dependență, starea de sănătății și nevoile de îngrijire ale fiecărui rezident, după evaluare. Nu există costuri ascunse: tariful contractual include toate serviciile enumerate în contract.`,
  },
  {
    t: "4. Internarea",
    body: "Internarea se face pe baza contractului de servicii și a documentelor necesare (acte de identitate, fișă medicală, analize). Putem refuza internarea unei persoane dacă evaluarea medicală arată că nu putem asigura îngrijirea corespunzătoare sau dacă documentele sunt incomplete.",
  },
  {
    t: "5. Drepturile și obligațiile rezidenților",
    body: "Fiecare rezident are dreptul la îngrijire corespunzătoare, demnitate, confidențialitate și vizite. Obligațiile părților sunt stabilite în contractul de servicii. Pe durata șederii, căminul poate ajusta planul de îngrijire la modificarea stării de sănătate a rezidentului.",
  },
  {
    t: "6. Limita răspunderii",
    body: "Facem eforturi constante pentru a menține informațiile de pe site actualizate și corecte, dar nu garantăm absența erorilor. Tarifele și disponibilitatea locurilor se confirmă doar prin ofertă scrisă.",
  },
  {
    t: "7. Contact",
    body: `Pentru orice întrebare legată de acești termeni: ${SITE.email} sau ${SITE.phone}.`,
  },
];

export default function TermeniPage() {
  return (
    <>
      <JsonLd
        data={graph(
          webpageNode("/termeni-si-conditii", "Termeni și condiții — Căminul Empathy", "Termenii și condițiile de utilizare a site-ului Căminului Empathy și ale serviciilor de cazare și îngrijire a vârstnicilor."),
          breadcrumbNode([{ name: "Acasă", path: "/" }, { name: "Termeni și condiții", path: "/termeni-si-conditii" }])
        )}
      />
      <section className="bg-pine-deep py-14 md:py-20 text-center">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-cream/10 px-4 py-1.5 text-[13px] font-semibold uppercase tracking-[0.14em] text-honey">
            Informații legale
          </div>
          <h1 className="mt-5 font-display text-4xl md:text-5xl font-semibold text-cream">
            Termeni și condiții
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-cream/75">
            Condițiile de utilizare a site-ului și ale serviciilor de cazare și îngrijire.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 space-y-8">
          {SECTIONS.map((s) => (
            <div key={s.t}>
              <h2 className="font-display text-xl font-semibold text-pine-deep">{s.t}</h2>
              <p className="mt-3 leading-relaxed text-ink-soft">{s.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

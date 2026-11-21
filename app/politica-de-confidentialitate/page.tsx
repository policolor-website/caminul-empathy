import type { Metadata } from "next";
import { SITE } from "@/lib/content";
import { breadcrumbNode, graph, webpageNode } from "@/lib/jsonld";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Politica de confidențialitate",
  alternates: { canonical: "/politica-de-confidentialitate" },
  description:
    "Politica de confidențialitate a Căminului Empathy: ce date personale colectăm, cum le folosim și cum își pot exercita drepturile persoanele vizate, conform GDPR.",
};

const SECTIONS = [
  {
    t: "1. Operatorul datelor",
    body: `Operatorul datelor cu caracter personal este ${SITE.name}, cu sediile în Domnești și Bragadiru, Ilfov. Contact pentru orice solicitare legată de datele personale: ${SITE.email} sau ${SITE.phone}.`,
  },
  {
    t: "2. Ce date colectăm",
    body: "Datele sunt colectate doar în scopul gestionării întrebărilor și a demersului de internare: nume, telefon, e-mail, mesajul trimis prin formularul de contact, precum și datele din contractul de servicii și dosarul rezidentului (acte de identitate, date medicale, informații despre stare și tratament).",
  },
  {
    t: "3. Scopul și temeiul prelucrării",
    body: "Datele sunt prelucrate pentru a răspunde solicitărilor de informare, pentru evaluarea și internarea rezidentului, pentru îngrijirea medicală și administrativă a cazării, și pentru îndeplinirea obligațiilor legale. Temeiul legal este contractul de servicii și obligațiile legale aplicabile; pentru solicitările de informare, consimțământul dvs. dat prin trimiterea formularului.",
  },
  {
    t: "4. Cui transmitem datele",
    body: "Datele nu sunt vândute și nu sunt transmise unor terți în scopuri comerciale. Pot fi transmise exclusiv furnizorilor strict necesari (servicii de e-mail, hosting) și autorităților, când legea o impune — de exemplu medicului de familie sau spitalului cu care colaborăm pentru îngrijirea rezidentului.",
  },
  {
    t: "5. Cât timp păstrăm datele",
    body: "Datele din solicitări se păstrează atât timp cât este necesar pentru răspuns și evidență comercială. Datele din dosarul rezidentului se păstrează conform obligațiilor legale aplicabile în domeniul asistenței sociale și medicale, apoi sunt șterse sau anonimizate.",
  },
  {
    t: "6. Drepturile dvs.",
    body: "Aveți dreptul de acces, rectificare, ștergere, restricționare, portabilitate și opoziție, precum și dreptul de a depune plângere la Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP). Își pot fi exercitate drepturile prin e-mail la " + SITE.email + " sau telefonic la " + SITE.phone + ".",
  },
  {
    t: "7. Securitatea datelor",
    body: "Aplicăm măsuri tehnice și organizatorice pentru protejarea datelor: acces restricționat, parole, backup-uri și confidențialitate față de angajați. Datele medicale ale rezidenților sunt accesibile doar personalului autorizat.",
  },
  {
    t: "8. Cookie-uri",
    body: "Site-ul poate folosi cookie-uri strict necesare pentru funcționare. Detalii în Politica de cookies.",
  },
];

export default function ConfidentialitatePage() {
  return (
    <>
      <JsonLd
        data={graph(
          webpageNode("/politica-de-confidentialitate", "Politica de confidențialitate — Căminul Empathy", "Politica de confidențialitate a Căminului Empathy: ce date personale colectăm, cum le folosim și cum își pot exercita drepturile persoanele vizate, conform GDPR."),
          breadcrumbNode([{ name: "Acasă", path: "/" }, { name: "Politica de confidențialitate", path: "/politica-de-confidențialitate" }])
        )}
      />
      <section className="bg-pine-deep py-14 md:py-20 text-center">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-cream/10 px-4 py-1.5 text-[13px] font-semibold uppercase tracking-[0.14em] text-honey">
            Informații legale
          </div>
          <h1 className="mt-5 font-display text-4xl md:text-5xl font-semibold text-cream">
            Politica de confidențialitate
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-cream/75">
            Cum colectăm, folosim și protejăm datele personale — conform Regulamentului GDPR.
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

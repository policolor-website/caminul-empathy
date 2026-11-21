import type { Metadata } from "next";
import { breadcrumbNode, graph, webpageNode } from "@/lib/jsonld";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Politica de cookies",
  alternates: { canonical: "/politica-cookies" },
  description:
    "Politica de cookies a Căminului Empathy: ce cookie-uri folosim, de ce și cum puteți gestiona preferințele.",
};

const SECTIONS = [
  {
    t: "1. Ce sunt cookie-urile",
    body: "Cookie-urile sunt mici fișiere text stocate de browser pe dispozitivul dvs. când vizitați un site. Ele ajută site-ul să funcționeze corect și ne permit să înțelegem cum este utilizat.",
  },
  {
    t: "2. Ce cookie-uri folosim",
    body: "Site-ul nostru folosește exclusiv cookie-uri strict necesare pentru funcționarea corectă a paginilor — de exemplu pentru menținerea sesiunii și securitate. Nu folosim cookie-uri de publicitate, urmărire sau profilare.",
  },
  {
    t: "3. Cookie-uri terțe",
    body: "Hărțile (OpenStreetMap/Leaflet) și eventuale servicii externe integrate pot seta propriile cookie-uri în conformitate cu politicile lor. Acestea nu sunt controlate de noi.",
  },
  {
    t: "4. Cum gestionați cookie-urile",
    body: "Puteți șterge sau bloca cookie-urile din setările browserului dvs. Notă: dezactivarea cookie-urilor strict necesare poate afecta funcționarea unor părți ale site-ului.",
  },
];

export default function CookiesPage() {
  return (
    <>
      <JsonLd
        data={graph(
          webpageNode("/politica-cookies", "Politica de cookies — Căminul Empathy", "Politica de cookies a Căminului Empathy: ce cookie-uri folosim, de ce și cum puteți gestiona preferințele."),
          breadcrumbNode([{ name: "Acasă", path: "/" }, { name: "Politica de cookies", path: "/politica-cookies" }])
        )}
      />
      <section className="bg-pine-deep py-14 md:py-20 text-center">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-cream/10 px-4 py-1.5 text-[13px] font-semibold uppercase tracking-[0.14em] text-honey">
            Informații legale
          </div>
          <h1 className="mt-5 font-display text-4xl md:text-5xl font-semibold text-cream">
            Politica de cookies
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-cream/75">
            Ce cookie-uri folosește site-ul nostru și cum le puteți gestiona.
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

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icons";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { SITE, STATS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Despre noi",
  description:
    "Căminele Empathy: din 2019, trei locații moderne în Ilfov pentru îngrijirea seniorilor. 100+ familii alături de noi, îngrijire medicală 24/7.",
};

const VALUES = [
  { t: "Tratăm fiecare rezident ca pe un membru al familiei", icon: "heart" },
  { t: "Plan individual de îngrijire adaptat nevoilor unice", icon: "check" },
  { t: "Transparență totală și comunicare constantă cu familia", icon: "users" },
  { t: "Supraveghere medicală 24/7 și personal calificat", icon: "shield" },
  { t: "Camere moderne, spații verzi și atmosferă de familie", icon: "leaf" },
  { t: "Certificați ca Firmă de TOP pe ListaFirme.ro", icon: "star" },
];

const REASONS = [
  "5+ ani de experiență în îngrijirea seniorilor",
  "3 locații moderne în Ilfov cu facilități premium",
  "Personal medical calificat disponibil 24/7",
  `Tarife transparente de la ${SITE.priceMin} lei/lună, fără costuri ascunse`,
  "Internare rapidă — răspuns în 24h, fără liste de așteptare",
  "Program flexibil — vizite Luni–Duminică",
  "100+ familii mulțumite și recenzii pozitive",
  "Firmă de TOP certificată pe ListaFirme.ro",
];

export default function DespreNoiPage() {
  return (
    <>
      <section className="bg-pine-deep py-14 md:py-20 text-center">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-cream/10 px-4 py-1.5 text-[13px] font-semibold uppercase tracking-[0.14em] text-honey">
            Din {SITE.since}
          </div>
          <h1 className="mt-5 font-display text-4xl md:text-5xl font-semibold text-cream">
            3 locații, o singură familie
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-cream/75">
            Oferim îngrijire cu empatie și profesionalism pentru seniori, în trei cămine moderne din Ilfov.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Povestea noastră"
                title="Îngrijire cu empatie, nu doar cazare"
              />
              <Reveal delay={100}>
                <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-soft">
                  <p>
                    La Căminele Empathy ne dedicăm să oferim o experiență de viață de
                    calitate pentru părinții și bunicii dumneavoastră. Înțelegem că
                    decizia de a plasa un părinte într-un cămin poate fi dificilă —
                    de aceea suntem aici să vă oferim toată susținerea de care aveți nevoie.
                  </p>
                  <p>
                    Din {SITE.since} am creat un mediu care le permite vârstnicilor
                    să trăiască o viață activă și independentă, în condiții de
                    siguranță și confort. Cu peste 100 de familii mulțumite, suntem
                    recunoscuți ca Firmă de TOP pe ListaFirme.ro.
                  </p>
                  <p>
                    Activitățile recreative și sociale organizate regulat ajută la
                    menținerea minții și a corpului active — pentru ca rezidenții
                    noștri să se simtă împliniți, ascultați și îngrijiți personal.
                  </p>
                </div>
              </Reveal>
            </div>
            <Reveal delay={150} variant="zoom">
              <div className="overflow-hidden rounded-[2rem] shadow-xl">
                <Image
                  src="/img/casa.png"
                  alt="Interiorul căminului Empathy"
                  width={900}
                  height={640}
                  className="h-auto w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-pine-deep py-12">
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

      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Misiune și viziune"
            title="Ce ne ghidează zi de zi"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div data-glow className="h-full rounded-3xl bg-pine-mist/60 p-8">
                <h3 className="font-display text-xl font-semibold text-pine-deep">Misiunea</h3>
                <p className="mt-3 leading-relaxed text-ink-soft">
                  Să optimizăm potențialul persoanelor vârstnice printr-un mediu sigur,
                  activ și prietenos — protejând rezidenții fără a-i inhiba și
                  oferindu-le liniște în tot ceea ce facem. Sprijinim creșterea și
                  bunăstarea fiecărei persoane care lucrează, vizitează sau trăiește
                  în căminul nostru.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div data-glow className="h-full rounded-3xl bg-honey/15 p-8">
                <h3 className="font-display text-xl font-semibold text-pine-deep">Viziunea</h3>
                <p className="mt-3 leading-relaxed text-ink-soft">
                  Să fim recunoscuți ca lider în îngrijirea persoanelor vârstnice,
                  printr-un mediu de îngrijire de calitate înaltă și prin promovarea
                  independenței rezidenților — un model de referință pentru alte
                  cămine, prin practici inovatoare și angajament continuu.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((v, i) => (
              <Reveal key={v.t} delay={(i % 3) * 70}>
                <div data-glow className="flex h-full items-start gap-3 rounded-2xl border border-sand bg-white p-5">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-pine-mist text-pine">
                    <Icon name={v.icon} className="h-5 w-5" />
                  </span>
                  <span className="font-medium leading-snug">{v.t}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream-deep py-14 md:py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="De ce Empathy"
            title="De ce să alegeți Căminele Empathy"
          />
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {REASONS.map((r, i) => (
              <Reveal key={r} delay={(i % 2) * 60}>
                <div data-glow className="flex items-start gap-3 rounded-xl bg-white px-5 py-4 border border-sand">
                  <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-pine" />
                  <span className="font-medium">{r}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={250} className="mt-10 text-center">
            <Link href="/locatii" className="inline-flex items-center gap-2 rounded-full bg-pine px-8 py-4 font-semibold text-white hover:bg-pine-deep">
              Descoperă cele 3 locații
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

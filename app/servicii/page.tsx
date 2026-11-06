import type { Metadata } from "next";
import Icon from "@/components/Icons";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { SERVICES, SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Servicii",
  description:
    "Servicii cămin de bătrâni Empathy: îngrijire pe termen lung, Alzheimer și demență, kinetoterapie, terapie ocupațională, logopedie, nutriție enterală, escare.",
};

const DETAILS: Record<string, string> = {
  "termen-lung":
    "Pentru seniori autonomi sau dependenți care au nevoie de un cămin adevărat: cazare în cameră cu baie proprie, 3 mese + 2 gustări, îngrijire personală, activități zilnice și supraveghere medicală permanentă.",
  neurologice:
    "Personal instruit pentru Alzheimer, Parkinson și demență: supraveghere continuă, rutine stabile care reduc anxietatea, stimulare cognitivă și comunicare constantă cu familia.",
  kinetoterapie:
    "Kinetoterapeut angajat permanent, programe personalizate de recuperare post-AVC și post-operatorie, exerciții pentru mobilitate și echilibru, masaj terapeutic și fizioterapie.",
  "terapie-ocupationala":
    "Program zilnic de activități: jocuri de masă, muzică, lectură, filme, ateliere, sărbători și evenimente — pentru stimulare cognitivă și o viață socială activă.",
  logopedie:
    "Terapie logopedică pentru tulburări de vorbire și deglutiție, frecvente după AVC sau în afecțiuni neurologice — cu exerciții adaptate și monitorizare constantă.",
  "nutritie-enterala":
    "Alimentație enterală pentru rezidenți care nu pot mânca normal, administrată sub supraveghere medicală, plus meniuri personalizate pentru diabet, hipertensiune și alte diete.",
  escare:
    "Pentru persoanele imobilizate la pat: repoziționare regulată, saltele anti-escare, pansamente și îngrijire specializată a pielii — prevenție și tratament.",
  incontinenta:
    "Asistență discretă și demnă: igienă zilnică completă, produse dedicate, toaletare programată și menținerea demnității rezidentului.",
};

export default function ServiciiPage() {
  return (
    <>
      <section className="bg-pine-deep py-14 md:py-20 text-center">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-cream/10 px-4 py-1.5 text-[13px] font-semibold uppercase tracking-[0.14em] text-honey">
            Servicii
          </div>
          <h1 className="mt-5 font-display text-4xl md:text-5xl font-semibold text-cream">
            Îngrijire completă, pentru fiecare situație
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-cream/75">
            De la seniori activi la persoane dependente de îngrijire — fiecare rezident primește un plan adaptat nevoilor lui.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-5 md:grid-cols-2">
            {SERVICES.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 2) * 80}>
                <article data-glow id={s.slug} className="group h-full scroll-mt-28 rounded-3xl border border-sand bg-white p-7 transition-all hover:border-pine/40 hover:shadow-lg">
                  <div className="flex items-start gap-5">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-pine-mist text-pine transition-colors group-hover:bg-pine group-hover:text-white">
                      <Icon name={s.icon} className="h-7 w-7" />
                    </span>
                    <div>
                      <h2 className="font-display text-xl font-semibold text-pine-deep">{s.title}</h2>
                      <p className="mt-2 leading-relaxed text-ink-soft">{s.text}</p>
                      <p className="mt-3 text-[15px] leading-relaxed text-ink-soft/90">
                        {DETAILS[s.slug]}
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream-deep py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
          <SectionHeading
            title="Nu sunteți sigur ce serviciu se potrivește?"
            lead="Spuneți-ne despre situația părintelui sau bunicului — vă spunem sincer ce îngrijire îi trebuie și vă dăm un tarif exact."
          />
          <Reveal delay={150} className="mt-8 flex flex-wrap justify-center gap-4">
            <a href={SITE.phoneHref} className="inline-flex items-center gap-2 rounded-full bg-honey px-8 py-4 font-semibold text-pine-deep hover:bg-clay-deep">
              <Icon name="phone" className="h-5 w-5" /> {SITE.phone}
            </a>
            <a href="/contact" className="inline-flex items-center gap-2 rounded-full border-2 border-pine px-8 py-4 font-semibold text-pine hover:bg-pine hover:text-white">
              Trimite mesaj
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Icon from "@/components/Icons";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { LOCATIONS, SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Căminul Empathy: telefon 0786 300 500 / 0790 884 422. Patru locații în Ilfov — Domnești și Bragadiru. Vizite zilnice, fără programare.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-pine-deep py-14 md:py-20 text-center">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-cream/10 px-4 py-1.5 text-[13px] font-semibold uppercase tracking-[0.14em] text-honey">
            Contact
          </div>
          <h1 className="mt-5 font-display text-4xl md:text-5xl font-semibold text-cream">
            Vorbiți cu noi — răspundem în 24h
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-cream/75">
            Pentru întrebări, vizite sau evaluare gratuită — sunați sau lăsați un mesaj.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: "phone", t: "Telefon", main: SITE.phone, sub: `${SITE.phoneName} · ${SITE.phone2} (${SITE.phone2Name})`, href: SITE.phoneHref },
              { icon: "users", t: "WhatsApp", main: "Scrie-ne pe WhatsApp", sub: "Răspundem rapid", href: SITE.whatsapp },
              { icon: "pin", t: "E-mail", main: SITE.email, sub: SITE.email2, href: `mailto:${SITE.email}` },
              { icon: "clock", t: "Vizite", main: "Luni–Duminică", sub: "Fără programare", href: null },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 80}>
                <div data-glow className="h-full rounded-3xl border border-sand bg-white p-6 text-center">
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-pine-mist text-pine">
                    <Icon name={c.icon} className="h-6 w-6" />
                  </span>
                  <h2 className="mt-4 text-sm font-semibold uppercase tracking-wider text-ink-soft">{c.t}</h2>
                  {c.href ? (
                    <a
                      href={c.href}
                      {...(c.href.startsWith("http") ? { target: "_blank", rel: "noopener" } : {})}
                      className="mt-2 block font-semibold text-pine-deep hover:text-clay"
                    >
                      {c.main}
                    </a>
                  ) : (
                    <div className="mt-2 font-semibold text-pine-deep">{c.main}</div>
                  )}
                  <div className="mt-1 text-sm text-ink-soft">{c.sub}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream-deep py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Locații"
                title="Unde ne găsiți"
              />
              <div className="mt-8 space-y-5">
                {LOCATIONS.map((l, i) => (
                  <Reveal key={l.slug} delay={i * 80}>
                    <div data-glow className="flex gap-4 rounded-2xl bg-white p-5 border border-sand">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-pine-mist text-pine">
                        <Icon name="pin" className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="font-display text-lg font-semibold text-pine-deep">{l.name}</h3>
                        <div className="mt-0.5 text-ink-soft">{l.address}</div>
                        <div className="mt-1.5 text-sm text-ink-soft">
                          <Icon name="clock" className="mr-1 inline h-3.5 w-3.5" />
                          Vizite: {l.visitHours}
                        </div>
                        <div className="mt-2 text-sm font-medium">
                          <a href={SITE.phone2Href} className="text-clay hover:text-clay-deep">
                            {SITE.phone2} — {SITE.phone2Name}
                          </a>
                          <span className="mx-2 text-sand">·</span>
                          <a href={SITE.phoneHref} className="text-clay hover:text-clay-deep">
                            {SITE.phone} — {SITE.phoneName}
                          </a>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <Reveal delay={120}>
              <div data-glow className="rounded-[2rem] bg-white p-7 md:p-10 shadow-lg border border-sand">
                <h2 className="font-display text-2xl font-semibold text-pine-deep">
                  Lasă-ne un mesaj
                </h2>
                <p className="mt-2 mb-7 text-ink-soft">
                  Vă sunăm noi, de regulă în aceeași zi.
                </p>
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import { LOCATIONS, NAV, SITE } from "@/lib/content";
import Year from "@/components/Year";

export default function Footer() {
  return (
    <footer className="bg-pine-deep text-cream/90">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14 md:py-18">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3 mb-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/logo.png"
                alt="Căminul Empathy"
                className="h-11 w-11 rounded-xl bg-cream/10 object-contain"
              />
              <div className="leading-tight">
                <div className="font-display text-xl font-semibold">Empathy</div>
                <div className="text-xs uppercase tracking-[0.18em] text-cream/60">
                  Cămin de bătrâni · Ilfov
                </div>
              </div>
            </div>
            <p className="text-[15px] leading-relaxed text-cream/70">
              {SITE.tagline}. Trei cămine în Ilfov, la 15–20 de minute de București, din {SITE.since}.
            </p>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold mb-4 text-honey">Locații</h3>
            <ul className="space-y-3 text-[15px]">
              {LOCATIONS.map((l) => (
                <li key={l.slug}>
                  <Link href={`/locatii/${l.slug}`} className="font-medium text-cream hover:text-honey transition-colors">
                    {l.name}
                  </Link>
                  <div className="text-cream/60">{l.address}</div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold mb-4 text-honey">Pagini</h3>
            <ul className="space-y-2.5 text-[15px]">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-cream/80 hover:text-honey transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold mb-4 text-honey">Contact</h3>
            <ul className="space-y-3 text-[15px]">
              <li>
                <a href={SITE.phoneHref} className="font-semibold text-cream hover:text-honey">
                  {SITE.phone}
                </a>
                <div className="text-cream/60 text-sm">{SITE.phoneName}</div>
              </li>
              <li>
                <a href={SITE.phone2Href} className="font-semibold text-cream hover:text-honey">
                  {SITE.phone2}
                </a>
                <div className="text-cream/60 text-sm">{SITE.phone2Name}</div>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="text-cream/80 hover:text-honey break-all">
                  {SITE.email}
                </a>
              </li>
              <li>
                <a href={SITE.whatsapp} target="_blank" rel="noopener" className="text-cream/80 hover:text-honey">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-cream/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-sm text-cream/60">
          <div>© <Year /> {SITE.name}. Toate drepturile rezervate.</div>
          <div className="flex gap-6">
            <a href="https://anpc.ro/ce-este-sal/" target="_blank" rel="noopener" className="hover:text-honey">ANPC – SAL</a>
            <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener" className="hover:text-honey">ANPC – SOL</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

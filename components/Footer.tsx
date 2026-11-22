import Link from "next/link";
import { LOCATIONS, NAV, SITE } from "@/lib/content";
import Year from "@/components/Year";

export default function Footer() {
  return (
    <footer className="bg-pine-deep text-cream/90">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14 md:py-18">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div>
            <div className="flex items-center gap-3 mb-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/logo-empathy-sm.webp"
                width="320"
                height="177"
                alt="Căminul Empathy"
                className="h-9 w-auto object-contain"
              />
              <div className="leading-tight">
                <div className="font-display text-xl font-semibold">Empathy</div>
                <div className="text-xs uppercase tracking-[0.18em] text-cream/60">
                  Cămin de bătrâni · Ilfov
                </div>
              </div>
            </div>
            <p className="text-[15px] leading-relaxed text-cream/70">
              {SITE.tagline}. Patru cămine în Ilfov, la 15–20 de minute de București, din {SITE.since}.
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
            <h3 className="font-display text-lg font-semibold mb-4 text-honey">Informații utile</h3>
            <ul className="space-y-2.5 text-[15px]">
              <li>
                <Link href="/tarife" className="text-cream/80 hover:text-honey transition-colors">
                  Prețuri cămin de bătrâni
                </Link>
              </li>
              <li>
                <Link href="/acte-necesare-internare" className="text-cream/80 hover:text-honey transition-colors">
                  Acte necesare &amp; internare
                </Link>
              </li>
              <li>
                <Link href="/intrebari-frecvente" className="text-cream/80 hover:text-honey transition-colors">
                  Întrebări frecvente
                </Link>
              </li>
              <li>
                <Link href="/despre-noi" className="text-cream/80 hover:text-honey transition-colors">
                  Despre noi
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold mb-4 text-honey">Contact</h3>
            <ul className="space-y-3 text-[15px]">
              <li>
                <a href={SITE.phoneHref} className="font-semibold text-cream hover:text-honey">
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email2}`} className="text-cream/80 hover:text-honey break-all">
                  {SITE.email2}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-cream/15">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-sm text-cream/60">
            <div>© <Year /> {SITE.name}. Toate drepturile rezervate.</div>
            <div className="flex items-center gap-3">
              <a href="https://anpc.ro/ce-este-sal/" target="_blank" rel="nofollow noopener">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/anpc-sal.webp"
                  width="125"
                  height="30"
                  alt="ANPC – Soluționarea alternativă a litigiilor"
                  loading="lazy"
                  decoding="async"
                  className="h-[30px] w-auto opacity-90 hover:opacity-100 transition-opacity"
                />
              </a>
              <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="nofollow noopener">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/anpc-sol.webp"
                  width="125"
                  height="30"
                  alt="Soluționarea online a litigiilor"
                  loading="lazy"
                  decoding="async"
                  className="h-[30px] w-auto opacity-90 hover:opacity-100 transition-opacity"
                />
              </a>
            </div>
          </div>
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-cream/60">
            <Link href="/politica-de-confidentialitate" className="hover:text-honey transition-colors">
              Politica de confidențialitate
            </Link>
            <Link href="/termeni-si-conditii" className="hover:text-honey transition-colors">
              Termeni și condiții
            </Link>
            <Link href="/politica-cookies" className="hover:text-honey transition-colors">
              Politica de cookies
            </Link>
            <Link href="/politica-cookies" className="hover:text-honey transition-colors">
              Preferințe cookie
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

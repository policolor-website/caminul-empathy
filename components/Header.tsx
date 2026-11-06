"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { NAV, SITE, type NavItem } from "@/lib/content";

function Chevron({ open, className = "" }: { open: boolean; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""} ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

function Ic({ d, className = "h-4 w-4" }: { d: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d={d} />
    </svg>
  );
}

const ICO = {
  phone: "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.5 2.8.7a2 2 0 0 1 1.7 2z",
  mail: "M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z M22 6l-10 7L2 6",
  clock: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M12 7v5l3 3",
};

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const [dropOpen, setDropOpen] = useState<string | null>(null);
  const [accOpen, setAccOpen] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    let busy = false;
    const onScroll = () => {
      if (busy) return;
      busy = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        // same hysteresis as luxab: compact over 220, expand under 20
        setCompact((c) => (y > 220 ? true : y < 20 ? false : c));
        const el = headerRef.current;
        if (el) {
          const total = document.documentElement.scrollHeight - window.innerHeight;
          el.style.setProperty("--sp", total > 0 ? Math.min(1, y / total).toFixed(4) : "0");
        }
        busy = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setDropOpen(null);
    setAccOpen(null);
  }, [pathname]);

  const openDrop = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setDropOpen(label);
  };
  const closeDrop = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setDropOpen(null), 160);
  };

  const isActive = (item: NavItem) =>
    pathname === item.href || pathname.startsWith(item.href + "/");

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 bg-pine-deep text-cream shadow-[0_2px_24px_rgba(7,23,55,0.35)]"
      style={{ ["--sp" as string]: "0" }}
    >
      {/* ── Utility top bar (collapses on scroll) ── */}
      <div
        className={`hidden lg:block overflow-hidden transition-all duration-300 ${
          compact ? "max-h-0 opacity-0" : "max-h-12 opacity-100"
        }`}
      >
        <div className="mx-auto flex h-12 max-w-7xl items-center justify-end gap-8 px-5 sm:px-8">
          <div className="flex items-center gap-8 text-[15px] text-cream/80">
            <a href={SITE.phoneHref} className="flex items-center gap-2 transition-colors hover:text-honey">
              <Ic d={ICO.phone} className="h-4 w-4 text-honey" />
              {SITE.phone}
            </a>
            <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 transition-colors hover:text-honey">
              <Ic d={ICO.mail} className="h-4 w-4 text-honey" />
              {SITE.email}
            </a>
            <span className="hidden xl:flex items-center gap-2">
              <Ic d={ICO.clock} className="h-4 w-4 text-honey" />
              Vizite zilnice, fără programare
            </span>
          </div>
          <span className="pill-blink inline-flex items-center gap-2.5 rounded-full border border-honey/50 bg-honey/20 px-5 py-1.5 text-[14px] font-semibold text-honey">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Internare chiar în aceeași zi
          </span>
        </div>
      </div>

      {/* ── Main bar ── */}
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div
          className={`flex items-center justify-between gap-6 transition-all duration-300 ${
            compact ? "h-14 md:h-16" : "h-16 md:h-20"
          }`}
        >
          <Link
            href="/"
            className={`flex flex-col items-center gap-1 shrink-0 rounded-b-3xl border-x border-b border-cream/15 bg-pine-deep px-4 pb-2 pt-2 shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition-all duration-300 lg:px-6 lg:pb-3 ${
              compact ? "-mt-1 lg:-mt-1" : "-mt-2 lg:-mt-3 lg:pt-4"
            }`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/logo.webp"
              width="112"
              height="112"
              alt="Căminul Empathy"
              className={`object-contain transition-all duration-300 ${
                compact ? "h-10 w-10 lg:h-12 lg:w-12" : "h-14 w-14 lg:h-28 lg:w-28"
              }`}
            />
            <span
              className={`uppercase tracking-[0.22em] text-cream/70 transition-all duration-300 ${
                compact ? "hidden" : "text-[9px] lg:text-[10px]"
              }`}
            >
              Cămin de bătrâni · Ilfov
            </span>
          </Link>

          {/* ── Desktop nav ── */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Principal">
            {NAV.map((item) => {
              const active = isActive(item);
              const hasSub = !!item.children?.length;
              const open = dropOpen === item.label;
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => hasSub && openDrop(item.label)}
                  onMouseLeave={() => hasSub && closeDrop()}
                >
                  <div
                    className={`flex items-center rounded-full transition-colors ${
                      active || open
                        ? "bg-cream/10 text-honey"
                        : "text-cream/80 hover:text-cream hover:bg-cream/5"
                    }`}
                  >
                    <Link
                      href={item.href}
                      className={`pl-4 py-2 text-[15px] font-medium ${hasSub ? "pr-1.5" : "pr-4"}`}
                    >
                      {item.label}
                    </Link>
                    {hasSub && (
                      <button
                        type="button"
                        aria-expanded={open}
                        aria-label={`Submeniu ${item.label}`}
                        onClick={() => setDropOpen(open ? null : item.label)}
                        className="flex h-11 w-11 items-center justify-center pr-2"
                      >
                        <Chevron open={open} />
                      </button>
                    )}
                  </div>

                  {hasSub && (
                    <div
                      className={`absolute left-1/2 top-full -translate-x-1/2 pt-2 transition-all duration-200 ${
                        open
                          ? "visible opacity-100 translate-y-0"
                          : "invisible opacity-0 -translate-y-1"
                      }`}
                    >
                      <ul className="min-w-64 rounded-2xl border border-sand bg-white p-2 shadow-xl">
                        {item.children!.map((c) => (
                          <li key={c.href}>
                            <Link
                              href={c.href}
                              className="flex items-center gap-2.5 rounded-xl px-4 py-2.5 text-[15px] text-ink-soft transition-colors hover:bg-pine-mist hover:text-pine-deep"
                            >
                              <span className="h-1.5 w-1.5 rounded-full bg-clay/60" />
                              {c.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={SITE.phoneHref}
              className="hidden md:inline-flex items-center gap-2 rounded-full bg-honey px-5 py-2.5 text-[15px] font-semibold text-pine-deep shadow-sm transition-colors hover:bg-clay-deep hover:text-cream"
            >
              <Ic d={ICO.phone} className="h-4 w-4" />
              {SITE.phone}
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-label="Meniu"
              className="lg:hidden flex h-10 items-center gap-2 rounded-full border border-cream/25 px-4 text-cream"
            >
              <span className="text-[13px] font-semibold uppercase tracking-wider">Meniu</span>
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                {menuOpen ? (
                  <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile nav ── */}
      {menuOpen && (
        <nav className="lg:hidden border-t border-cream/15 bg-pine-deep px-5 py-4" aria-label="Mobil">
          <div className="flex flex-col gap-1">
            {NAV.map((item) => {
              const hasSub = !!item.children?.length;
              const expanded = accOpen === item.label;
              return (
                <div key={item.label}>
                  <div className="flex items-center rounded-xl hover:bg-cream/10">
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="flex-1 px-4 py-3 text-[16px] font-medium text-cream"
                    >
                      {item.label}
                    </Link>
                    {hasSub && (
                      <button
                        type="button"
                        aria-expanded={expanded}
                        aria-label={`Submeniu ${item.label}`}
                        onClick={() => setAccOpen(expanded ? null : item.label)}
                        className="px-4 py-3 text-cream/60"
                      >
                        <Chevron open={expanded} />
                      </button>
                    )}
                  </div>
                  {hasSub && expanded && (
                    <ul className="mb-1 ml-4 border-l-2 border-cream/15 pl-3">
                      {item.children!.map((c) => (
                        <li key={c.href}>
                          <Link
                            href={c.href}
                            onClick={() => setMenuOpen(false)}
                            className="block rounded-lg px-3 py-2.5 text-[15px] text-cream/75 hover:bg-cream/10 hover:text-cream"
                          >
                            {c.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
            <a
              href={SITE.phoneHref}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-honey px-5 py-3 font-semibold text-pine-deep"
            >
              Sună: {SITE.phone}
            </a>
          </div>
        </nav>
      )}

      {/* ── Scroll progress bar ── */}
      <div
        className="absolute inset-x-0 bottom-0 h-[3px] bg-honey transition-[width] duration-150"
        style={{ width: "calc(var(--sp, 0) * 100%)" }}
        aria-hidden
      />
    </header>
  );
}

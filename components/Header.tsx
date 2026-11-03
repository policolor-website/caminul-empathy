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

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropOpen, setDropOpen] = useState<string | null>(null);
  const [accOpen, setAccOpen] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
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
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-md border-sand shadow-[0_2px_20px_rgba(36,50,41,0.06)]"
          : "bg-cream border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3 shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/logo.png"
              alt="Căminul Empathy"
              className="h-11 w-11 rounded-xl object-contain"
            />
            <span className="leading-tight">
              <span className="block font-display text-lg md:text-xl font-semibold text-pine-deep">
                Empathy
              </span>
              <span className="block text-[11px] uppercase tracking-[0.18em] text-ink-soft">
                Cămin de bătrâni · Ilfov
              </span>
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
                        ? "bg-pine-mist text-pine-deep"
                        : "text-ink-soft hover:text-pine-deep hover:bg-pine-mist/60"
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
                        className="pr-3 py-2"
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
              className="hidden md:inline-flex items-center gap-2 rounded-full bg-clay px-5 py-2.5 text-[15px] font-semibold text-white shadow-sm transition-colors hover:bg-clay-deep"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.5 2.8.7a2 2 0 0 1 1.7 2z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {SITE.phone}
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-label="Meniu"
              className="lg:hidden flex h-10 w-10 items-center justify-center rounded-full border border-sand bg-white/60 text-ink"
            >
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

      {/* ── Mobile nav (accordion) ── */}
      {menuOpen && (
        <nav className="lg:hidden border-t border-sand bg-cream px-5 py-4" aria-label="Mobil">
          <div className="flex flex-col gap-1">
            {NAV.map((item) => {
              const hasSub = !!item.children?.length;
              const expanded = accOpen === item.label;
              return (
                <div key={item.label}>
                  <div className="flex items-center rounded-xl hover:bg-pine-mist">
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="flex-1 px-4 py-3 text-[16px] font-medium text-ink"
                    >
                      {item.label}
                    </Link>
                    {hasSub && (
                      <button
                        type="button"
                        aria-expanded={expanded}
                        aria-label={`Submeniu ${item.label}`}
                        onClick={() => setAccOpen(expanded ? null : item.label)}
                        className="px-4 py-3 text-ink-soft"
                      >
                        <Chevron open={expanded} />
                      </button>
                    )}
                  </div>
                  {hasSub && expanded && (
                    <ul className="mb-1 ml-4 border-l-2 border-pine-mist pl-3">
                      {item.children!.map((c) => (
                        <li key={c.href}>
                          <Link
                            href={c.href}
                            onClick={() => setMenuOpen(false)}
                            className="block rounded-lg px-3 py-2.5 text-[15px] text-ink-soft hover:bg-pine-mist hover:text-pine-deep"
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
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-clay px-5 py-3 font-semibold text-white"
            >
              Sună: {SITE.phone}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

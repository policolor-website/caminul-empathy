import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GlowTracker from "@/components/GlowTracker";
import { SITE } from "@/lib/content";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin", "latin-ext"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${SITE.domain}`),
  title: {
    default: "Căminul Empathy — Cămin de bătrâni în Ilfov, lângă București",
    template: "%s · Căminul Empathy",
  },
  description:
    "Cămin de bătrâni privat în Domnești și Bragadiru, Ilfov: îngrijire medicală 24/7, medic geriatru, kinetoterapie, camere cu baie proprie. Tarife de la 3.899 lei/lună. Vizite zilnice.",
  openGraph: {
    type: "website",
    locale: "ro_RO",
    siteName: SITE.name,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ro"
      className={`${fraunces.variable} ${sourceSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">
        <Header />
        <GlowTracker />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import Script from "next/script";
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
    default: "Cămin de bătrâni București și Ilfov | Căminul Empathy — îngrijire 24/7",
    template: "%s · Căminul Empathy",
  },
  description:
    "Cămin de bătrâni în Ilfov, lângă București: 4 locații în Domnești și Bragadiru, îngrijire medicală 24/7, medic geriatru, kinetoterapie, camere cu baie proprie. Tarife de la 3.899 lei/lună.",
  openGraph: {
    type: "website",
    locale: "ro_RO",
    siteName: SITE.name,
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: { index: true, follow: true },
  verification: {
    google: "Vo08gXphzcDVNjvWBGJfbt1KjR587gNZ8lDZHXjkZCo",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ro"
      className={`${fraunces.variable} ${sourceSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-52CNHSTV"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-52CNHSTV');`}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DGGLJG15Q2"
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-DGGLJG15Q2');`}
        </Script>
        <Header />
        <GlowTracker />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import type { MetadataRoute } from "next";
import { LOCATIONS, SERVICES, SITE } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${SITE.domain}`;
  const lastModified = new Date("2026-11-21");
  const staticPages = ["", "/despre-noi", "/servicii", "/tarife", "/locatii", "/galerie", "/contact", "/intrebari-frecvente", "/acte-necesare-internare", "/politica-de-confidentialitate", "/termeni-si-conditii", "/politica-cookies"];
  return [
    ...staticPages.map((p) => ({
      url: `${base}${p}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: p === "" ? 1 : 0.8,
    })),
    ...LOCATIONS.map((l) => ({
      url: `${base}/locatii/${l.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...SERVICES.map((sv) => ({
      url: `${base}/servicii/${sv.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}

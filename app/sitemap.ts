import type { MetadataRoute } from "next";
import { LOCATIONS, SITE } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${SITE.domain}`;
  const staticPages = ["", "/despre-noi", "/servicii", "/tarife", "/locatii", "/galerie", "/contact"];
  return [
    ...staticPages.map((p) => ({
      url: `${base}${p}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: p === "" ? 1 : 0.8,
    })),
    ...LOCATIONS.map((l) => ({
      url: `${base}/locatii/${l.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}

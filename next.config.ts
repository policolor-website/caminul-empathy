import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      // --- Pagini WP reale → echivalente noi ---
      { source: "/galerie-foto", destination: "/galerie", permanent: true },
      { source: "/activitati-recreative", destination: "/servicii", permanent: true },
      { source: "/nutritie-si-hidratare", destination: "/servicii/nutritie-enterala", permanent: true },
      { source: "/ingrijire-personala", destination: "/servicii", permanent: true },
      { source: "/ingrijire-medicala", destination: "/servicii", permanent: true },
      { source: "/facilitati-interior", destination: "/locatii", permanent: true },
      { source: "/facilitati-exterior", destination: "/locatii", permanent: true },
      { source: "/sticky-header-effects-with-logo-background-color-change", destination: "/", permanent: true },

      // --- Pagini servicii per locație (Clinceni) ---
      { source: "/ingrijire-medicala-clinceni", destination: "/locatii/clinceni", permanent: true },
      { source: "/facilitati-exterior-clinceni", destination: "/locatii/clinceni", permanent: true },
      { source: "/facilitati-interior-clinceni", destination: "/locatii/clinceni", permanent: true },

      // --- Pagini servicii per locație (Orhideelor) ---
      { source: "/activitati-recreative-orhideelor", destination: "/locatii/orhideelor", permanent: true },
      { source: "/nutritie-si-hidratare-orhideelor", destination: "/locatii/orhideelor", permanent: true },
      { source: "/ingrijire-personala-orhideelor", destination: "/locatii/orhideelor", permanent: true },
      { source: "/ingrijire-medicala-orhideelor", destination: "/locatii/orhideelor", permanent: true },
      { source: "/facilitati-exterior-orhideelor", destination: "/locatii/orhideelor", permanent: true },
      { source: "/facilitati-interior-orhideelor", destination: "/locatii/orhideelor", permanent: true },

      // --- Pagini de locație WP → pagini noi ---
      { source: "/camin-de-batrani-empathy-cetinei", destination: "/locatii/cetinei", permanent: true },
      { source: "/camin-de-batrani-empathy-orhideelor", destination: "/locatii/orhideelor", permanent: true },
      { source: "/camin-de-batrani-clinceni", destination: "/locatii/clinceni", permanent: true },

      // --- Hub vechi ---
      { source: "/blog", destination: "/", permanent: true },

      // --- Doorway pages: redirect după cuvânt-cheie medical → pagina de serviciu ---
      // Nivel 1: /camin-de-batrani/<slug> (10k pagini generate)
      { source: "/camin-de-batrani/:slug(.*escare.*)", destination: "/servicii/escare", permanent: true },
      { source: "/camin-de-batrani/:slug(.*incontinenta.*)", destination: "/servicii/incontinenta", permanent: true },
      { source: "/camin-de-batrani/:slug(.*(?:kinetoterapie|recuperare|mobilizare|fizioterapie).*)", destination: "/servicii/kinetoterapie", permanent: true },
      { source: "/camin-de-batrani/:slug(.*logoped.*)", destination: "/servicii/logopedie", permanent: true },
      { source: "/camin-de-batrani/:slug(.*(?:nutritie|dieta|alimentatie).*)", destination: "/servicii/nutritie-enterala", permanent: true },
      { source: "/camin-de-batrani/:slug(.*ocupationala.*)", destination: "/servicii/terapie-ocupationala", permanent: true },
      { source: "/camin-de-batrani/:slug(.*(?:alzheimer|parkinson|avc|cardiac|neurolog|epilepsie|dementa).*)", destination: "/servicii/neurologice", permanent: true },
      { source: "/camin-de-batrani/:slug(.*(?:dependenti|independenti|weekend|nocturna|temporara|permanenta|respiro|paliativa|post-operatorie).*)", destination: "/servicii/termen-lung", permanent: true },

      // Nivel 2: pagini top-level /camin-de-batrani-<oras>-<keyword> (din page-sitemap)
      { source: "/:slug(camin-de-batrani-.*escare.*)", destination: "/servicii/escare", permanent: true },
      { source: "/:slug(camin-de-batrani-.*incontinenta.*)", destination: "/servicii/incontinenta", permanent: true },
      { source: "/:slug(camin-de-batrani-.*(?:kinetoterapie|recuperare|mobilizare|fizioterapie).*)", destination: "/servicii/kinetoterapie", permanent: true },
      { source: "/:slug(camin-de-batrani-.*logoped.*)", destination: "/servicii/logopedie", permanent: true },
      { source: "/:slug(camin-de-batrani-.*(?:nutritie|dieta|alimentatie).*)", destination: "/servicii/nutritie-enterala", permanent: true },
      { source: "/:slug(camin-de-batrani-.*ocupationala.*)", destination: "/servicii/terapie-ocupationala", permanent: true },
      { source: "/:slug(camin-de-batrani-.*(?:alzheimer|parkinson|avc|cardiac|neurolog|epilepsie|dementa).*)", destination: "/servicii/neurologice", permanent: true },

      // --- Catch-all doorway rămas → pagini relevante ---
      { source: "/camin-de-batrani/:path*", destination: "/locatii", permanent: true },
      { source: "/:slug(camin-de-batrani-.*)", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;

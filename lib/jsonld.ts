import { COMPANY, FAQS, LOCATIONS, SITE } from "@/lib/content";

const BASE = `https://${SITE.domain}`;

function addressParts(address: string) {
  const [streetAddress, addressLocality, addressRegion] = address.split(", ");
  return {
    "@type": "PostalAddress",
    streetAddress,
    addressLocality,
    addressRegion,
    addressCountry: "RO",
  };
}

export function orgNode() {
  return {
    "@type": ["Organization", "NursingHome"],
    "@id": `${BASE}/#org`,
    name: SITE.name,
    legalName: COMPANY.legalName,
    alternateName: "Empathy",
    url: `${BASE}/`,
    logo: `${BASE}/img/logo-empathy.webp`,
    telephone: `+40${SITE.phone.replace(/\s/g, "")}`,
    email: SITE.email,
    vatID: `RO${COMPANY.cui}`,
    taxID: COMPANY.cui,
    foundingDate: String(SITE.since),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.4",
      reviewCount: "40",
      bestRating: "5",
      worstRating: "1",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Domnești",
      addressRegion: "Ilfov",
      addressCountry: "RO",
    },
    areaServed: [
      { "@type": "City", name: "București" },
      { "@type": "AdministrativeArea", name: "Domnești, Ilfov" },
      { "@type": "AdministrativeArea", name: "Bragadiru, Ilfov" },
      { "@type": "AdministrativeArea", name: "Ilfov" },
    ],
  };
}

export function locationNode(loc: (typeof LOCATIONS)[number]) {
  const [opens, closes] = ["10:00", "18:00"];
  return {
    "@type": ["NursingHome", "MedicalOrganization", "LocalBusiness"],
    "@id": `${BASE}/locatii/${loc.slug}#locatie`,
    name: loc.name,
    image: `${BASE}${loc.image}`,
    url: `${BASE}/locatii/${loc.slug}`,
    telephone: `+40${SITE.phone.replace(/\s/g, "")}`,
    address: addressParts(loc.address),
    geo: {
      "@type": "GeoCoordinates",
      latitude: loc.coords.lat,
      longitude: loc.coords.lng,
    },
    hasMap: `https://www.google.com/maps/search/?api=1&query=${loc.coords.lat},${loc.coords.lng}`,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens,
        closes,
        description: "Program de vizită",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
        description: "Îngrijire medicală 24/7",
      },
    ],
    priceRange: `de la ${SITE.priceMin} lei/lună`,
    ...(loc.slug === "cetinei"
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.4",
            reviewCount: "40",
            bestRating: "5",
            worstRating: "1",
          },
        }
      : {}),
    parentOrganization: { "@id": `${BASE}/#org` },
  };
}

export function websiteNode() {
  return {
    "@type": "WebSite",
    "@id": `${BASE}/#website`,
    url: `${BASE}/`,
    name: SITE.name,
    publisher: { "@id": `${BASE}/#org` },
    inLanguage: "ro",
  };
}

export function webpageNode(
  path: string,
  name: string,
  description: string,
  type = "WebPage"
) {
  return {
    "@type": type,
    "@id": `${BASE}${path}#webpage`,
    url: `${BASE}${path}`,
    name,
    description,
    isPartOf: { "@id": `${BASE}/#website` },
    about: { "@id": `${BASE}/#org` },
    inLanguage: "ro",
  };
}

export function itemListNode(
  name: string,
  items: { name: string; url: string }[]
) {
  return {
    "@type": "ItemList",
    name,
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      url: it.url,
    })),
  };
}

export function faqNode() {
  return {
    "@type": "FAQPage",
    "@id": `${BASE}/#faq`,
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function serviceNode(
  slug: string,
  name: string,
  description: string
) {
  return {
    "@type": "Service",
    "@id": `${BASE}/servicii/${slug}#service`,
    name,
    description,
    url: `${BASE}/servicii/${slug}`,
    provider: { "@id": `${BASE}/#org` },
    areaServed: [
      { "@type": "City", name: "București" },
      { "@type": "AdministrativeArea", name: "Ilfov" },
    ],
  };
}

export function serviceFaqNode(faqs: { q: string; a: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbNode(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${BASE}${it.path}`,
    })),
  };
}

export function graph(...nodes: object[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}

export const SITE = {
  name: "Căminul Empathy",
  tagline: "Îngrijire cu empatie pentru părinții și bunicii dumneavoastră",
  phone: "0786 300 500",
  phoneName: "Octavian",
  phoneHref: "tel:+40786300500",
  phone2: "0790 884 422",
  phone2Name: "Raluca",
  phone2Href: "tel:+40790884422",
  email: "contact@caminulempathy.ro",
  email2: "caminulempathy@gmail.com",
  whatsapp: "https://wa.me/40786300500",
  since: 2019,
  domain: "caminulempathy.ro",
  priceMin: "3.899",
  priceMax: "7.000",
};

export type NavItem = {
  href: string;
  label: string;
  children?: { href: string; label: string }[];
};

export const NAV: NavItem[] = [
  { href: "/", label: "Acasă" },
  {
    href: "/tarife",
    label: "Cât costă",
    children: [
      { href: "/tarife#inclus", label: "Ce include tariful" },
      { href: "/tarife#factori", label: "Cum se calculează" },
      { href: "/contact", label: "Cere o estimare" },
    ],
  },
  {
    href: "/despre-noi",
    label: "Despre noi",
    children: [
      { href: "/despre-noi", label: "Cine suntem" },
      { href: "/galerie", label: "Galerie foto" },
      { href: "/#recenzii", label: "Ce spun familiile" },
      { href: "/#faq", label: "Întrebări frecvente" },
    ],
  },
  {
    href: "/servicii",
    label: "Servicii",
    children: [
      { href: "/servicii#termen-lung", label: "Îngrijire pe termen lung" },
      { href: "/servicii#neurologice", label: "Alzheimer, Parkinson & demență" },
      { href: "/servicii#kinetoterapie", label: "Kinetoterapie & recuperare" },
      { href: "/servicii#terapie-ocupationala", label: "Terapie ocupațională" },
      { href: "/servicii#logopedie", label: "Logopedie" },
      { href: "/servicii#nutritie-enterala", label: "Nutriție enterală" },
      { href: "/servicii#escare", label: "Escare & decubit" },
      { href: "/servicii#incontinenta", label: "Îngrijire incontinență" },
      { href: "/servicii", label: "Toate serviciile" },
    ],
  },
  {
    href: "/locatii",
    label: "Locații",
    children: [
      { href: "/locatii/cetinei", label: "Empathy Cetinei · Domnești" },
      { href: "/locatii/orhideelor", label: "Empathy Orhideelor · Domnești" },
      { href: "/locatii/clinceni", label: "Empathy Clinceni · Bragadiru" },
      { href: "/locatii/fortunei", label: "Empathy Fortunei · Domnești" },
      { href: "/locatii", label: "Toate locațiile" },
    ],
  },
  { href: "/galerie", label: "Galerie" },
  { href: "/contact", label: "Contact" },
];

export const LOCATIONS = [
  {
    slug: "cetinei",
    name: "Empathy Cetinei",
    short: "Cetinei",
    badge: "Mediu natural liniștit",
    address: "Str. Cetinei nr. 4, Domnești, Ilfov",
    image: "/img/cetinei.jpg",
    blurb:
      "Îngrijire medicală profesională 24/7 într-un cadru liniștit, cu terasă în aer liber. Facilități moderne, personal dedicat și acces rapid din București.",
    highlights: [
      "Acces rapid din București (15–20 minute)",
      "Terasă exterioară pentru socializare",
      "Camere spațioase cu TV și baie proprie",
      "Asistență medicală specializată 24/7",
      "Program terapeutic și kineto personalizat",
      "Zonă liniștită în Ilfov, aproape de Capitală",
    ],
    visitHours: "Luni–Duminică, 10:00–13:00 și 14:00–18:00",
    facts: [
      { title: "Locație accesibilă", text: "La 15–20 de minute de București, ideal pentru familiile din sectoarele 4, 5 și 6." },
      { title: "Îngrijire medicală specializată", text: "Medici geriatri, asistente, infirmiere și kinetoterapeuți. Experiență cu Alzheimer, Parkinson, diabet și recuperare post-AVC." },
      { title: "Spațiu exterior", text: "Terasă în aer liber pentru socializare, activități recreative și ergoterapie." },
      { title: "Raport calitate-preț excelent", text: `Tarife de la ${SITE.priceMin} lei/lună, cu toate serviciile incluse. Fără costuri ascunse.` },
    ],
  },
  {
    slug: "orhideelor",
    name: "Empathy Orhideelor",
    short: "Orhideelor",
    badge: "Curte și grădină amenajată",
    address: "Str. Orhideelor nr. 4, Domnești, Ilfov",
    image: "/img/g9.jpg",
    blurb:
      "Îngrijire medicală profesională 24/7 într-o curte spațioasă cu grădină amenajată. Facilități moderne, personal dedicat și acces rapid din București.",
    highlights: [
      "Acces rapid din București (15–20 minute)",
      "Curte cu grădină amenajată",
      "Camere spațioase cu TV și baie proprie",
      "Asistență medicală specializată 24/7",
      "Program terapeutic și kineto personalizat",
      "Tarife accesibile cu servicii complete",
    ],
    visitHours: "Luni–Duminică, 10:00–13:00 și 14:00–18:00",
    facts: [
      { title: "Locație accesibilă", text: "La 15–20 de minute de București, în Domnești, Ilfov — liniște și aer curat, aproape de familie." },
      { title: "Îngrijire medicală specializată", text: "Echipă completă: medici geriatri, asistente, infirmiere și kinetoterapeuți, cu colaborări la spitale din București." },
      { title: "Curte cu grădină", text: "Curte spațioasă și grădină amenajată — perfecte pentru plimbări, socializare și activități în aer liber." },
      { title: "Raport calitate-preț excelent", text: `Tarife de la ${SITE.priceMin} lei/lună, cu toate serviciile incluse. Fără costuri ascunse.` },
    ],
  },
  {
    slug: "clinceni",
    name: "Empathy Clinceni",
    short: "Clinceni",
    badge: "Cea mai nouă locație",
    address: "Șos. Clinceni nr. 71, Bragadiru, Ilfov",
    image: "/img/clinceni.jpg",
    blurb:
      "Cea mai nouă și modernă locație Empathy — complet renovată în 2024. Facilități premium, grădină amenajată și acces rapid din zona de sud a Bucureștiului.",
    highlights: [
      "Acces rapid din București (15–20 minute)",
      "Facilități complet renovate în 2024",
      "Grădină amenajată cu zone de relaxare",
      "Camere moderne cu baie proprie",
      "Personal medical dedicat 24/7",
      "Parcare gratuită pentru vizitatori",
      "Transport organizat pentru vizite medicale",
    ],
    visitHours: "Luni–Duminică, 08:00–22:00",
    facts: [
      { title: "Locație strategică", text: "Pe Șoseaua Clinceni, în zona de sud a Bucureștiului — liniște și spații verzi, la 15–20 de minute de oraș." },
      { title: "Facilități premium", text: "Clădire complet renovată în 2024: camere moderne, băi adaptate, mobilier ergonomic." },
      { title: "Grădină amenajată", text: "Spații verzi întinse, alei pentru plimbări, zone de relaxare și terasă acoperită." },
      { title: "Tarife transparente", text: `Tarife de la ${SITE.priceMin} lei/lună, fără costuri ascunse.` },
    ],
  },
  {
    slug: "fortunei",
    name: "Empathy Fortunei",
    short: "Fortunei",
    badge: "Al treilea centru din Domnești",
    address: "Str. Fortunei nr. 11, Domnești, Ilfov",
    image: "/img/fortunei-01.webp",
    gallery: [
      "/img/fortunei-01.webp",
      "/img/fortunei-02.webp",
      "/img/fortunei-03.webp",
      "/img/fortunei-04.webp",
      "/img/fortunei-05.webp",
      "/img/fortunei-09.webp",
      "/img/fortunei-10.webp",
      "/img/fortunei-11.webp",
    ],
    blurb:
      "Cel mai nou cămin Empathy din Domnești — îngrijire medicală profesională 24/7, camere confortabile și același acces rapid din București.",
    highlights: [
      "Acces rapid din București (15–20 minute)",
      "Al treilea centru Empathy din Domnești",
      "Camere confortabile cu baie proprie",
      "Asistență medicală specializată 24/7",
      "Program terapeutic și kineto personalizat",
      "Tarife accesibile cu servicii complete",
    ],
    visitHours: "Luni–Duminică, 10:00–13:00 și 14:00–18:00",
    facts: [
      { title: "Locație accesibilă", text: "Pe Str. Fortunei nr. 11, în Domnești — la 15–20 de minute de București, aproape de familie." },
      { title: "Îngrijire medicală specializată", text: "Echipă completă: medici geriatri, asistente, infirmiere și kinetoterapeuți, cu colaborări la spitale din București." },
      { title: "Spații pentru socializare", text: "Zone pentru plimbări, activități recreative și ergoterapie, într-un mediu liniștit." },
      { title: "Raport calitate-preț excelent", text: `Tarife de la ${SITE.priceMin} lei/lună, cu toate serviciile incluse. Fără costuri ascunse.` },
    ],
  },
];

export const SERVICES = [
  {
    slug: "termen-lung",
    title: "Îngrijire pe termen lung",
    icon: "heart",
    text: "Cazare, masă și îngrijire completă pentru seniori autonomi sau dependenți — un cămin adevărat, nu doar o cazare.",
  },
  {
    slug: "neurologice",
    title: "Alzheimer, Parkinson & demență",
    icon: "mind",
    text: "Îngrijire specializată pentru afecțiuni neurologice, cu personal instruit și supraveghere continuă.",
  },
  {
    slug: "kinetoterapie",
    title: "Kinetoterapie & recuperare",
    icon: "move",
    text: "Kinetoterapeut permanent, programe de recuperare post-AVC, fizioterapie și exerciții pentru mobilitate.",
  },
  {
    slug: "terapie-ocupationala",
    title: "Terapie ocupațională",
    icon: "puzzle",
    text: "Activități zilnice care mențin mintea și corpul active: jocuri, muzică, lectură, ateliere și socializare.",
  },
  {
    slug: "logopedie",
    title: "Logopedie",
    icon: "voice",
    text: "Terapie logopedică pentru seniori cu tulburări de vorbire sau deglutiție, post-AVC sau afecțiuni neurologice.",
  },
  {
    slug: "nutritie-enterala",
    title: "Nutriție enterală",
    icon: "bowl",
    text: "Meniuri personalizate și alimentație enterală pentru rezidenți cu dificultăți de înghițire, sub supraveghere medicală.",
  },
  {
    slug: "escare",
    title: "Îngrijire escare & decubit",
    icon: "shield",
    text: "Prevenție și tratament al escarelor pentru persoanele imobilizate la pat, cu pansamente și repoziționare regulată.",
  },
  {
    slug: "incontinenta",
    title: "Îngrijire incontinență",
    icon: "drop",
    text: "Asistență discretă și demnă în gestionarea incontinenței, cu igienă zilnică și produse dedicate.",
  },
];

export const INCLUDED = [
  "Îngrijire medicală 24/7",
  "Medic geriatru & asistente",
  "Administrare medicamente",
  "Kinetoterapie & recuperare",
  "3 mese + 2 gustări zilnice",
  "Diete personalizate",
  "Cameră cu baie proprie",
  "Îngrijire personală completă",
  "Curățenie & spălătorie",
  "Terapie ocupațională",
  "TV, WiFi & climatizare",
  "Grădină & spații verzi",
  "Parcare gratuită vizitatori",
  "Asistență spirituală",
];

export const STEPS = [
  {
    n: 1,
    title: "Sunați sau veniți în vizită",
    text: "Ne povestiți despre situația părintelui sau bunicului. Vă invităm să vedeți căminul, camerele și echipa — vizita este gratuită și fără obligații.",
  },
  {
    n: 2,
    title: "Evaluare gratuită",
    text: "Medicul nostru evaluează starea de sănătate și gradul de dependență, apoi primiți un plan de îngrijire și un tarif exact, transparent.",
  },
  {
    n: 3,
    title: "Internare și integrare",
    text: "Semnăm contractul, stabilim împreună primul plan de îngrijire și îl ajutăm pe rezident să se adapteze. Internarea se poate face chiar în aceeași zi.",
  },
];

export const FIT = {
  good: [
    "Seniori care au nevoie de îngrijire medicală permanentă (24/7)",
    "Persoane cu Alzheimer, Parkinson, demență sau post-AVC",
    "Persoane imobilizate la pat sau cu mobilitate redusă",
    "Familii care nu mai pot asigura îngrijirea acasă, dar vor să fie aproape",
    "Seniori singuri care au nevoie de comunitate și supraveghere",
  ],
  bad: [
    "Cazuri care necesită spitalizare sau terapie intensivă",
    "Persoane cu afecțiuni psihiatrice acute, care au nevoie de unități specializate",
    "Situații în care familia nu poate menține legătura deloc — noi credem în prezența familiei",
  ],
};

export const FAQS = [
  {
    q: "Cât costă un loc la Căminul Empathy?",
    a: `Tarifele sunt între ${SITE.priceMin} și ${SITE.priceMax} lei/lună, în funcție de gradul de dependență și serviciile necesare. Prețul include cazare, 3 mese + 2 gustări, îngrijire medicală 24/7, kinetoterapie, activități, spălătorie și utilități. La evaluarea gratuită primiți un tarif exact.`,
  },
  {
    q: "Ce este inclus în tarif?",
    a: "Absolut tot: cazare în cameră cu baie proprie, masă completă cu diete personalizate, îngrijire medicală permanentă, administrare medicamente, kinetoterapie, îngrijire personală, curățenie, spălătorie, activități recreative, TV, WiFi și climatizare. Fără costuri ascunse.",
  },
  {
    q: "Primiți persoane cu Alzheimer, Parkinson sau demență?",
    a: "Da. Avem experiență și personal instruit pentru afecțiuni neurologice: Alzheimer, Parkinson, demență, recuperare post-AVC, diabet și afecțiuni cardiovasculare. Planul de îngrijire este personalizat pentru fiecare rezident.",
  },
  {
    q: "Primiți persoane imobilizate la pat?",
    a: "Da. Oferim îngrijire completă pentru persoane imobilizate: repoziționare, prevenție și tratament escare, igienă zilnică, nutriție enterală dacă este cazul și monitorizare medicală continuă.",
  },
  {
    q: "Cât de repede se poate face internarea?",
    a: "Răspundem în maximum 24 de ore, iar internarea se poate face chiar în aceeași zi, după evaluarea medicală gratuită și semnarea contractului.",
  },
  {
    q: "Care este programul de vizită?",
    a: "La locațiile din Domnești (Cetinei și Orhideelor): Luni–Duminică, 10:00–13:00 și 14:00–18:00. La Clinceni: Luni–Duminică, 08:00–22:00. Vizitele nu necesită programare — încurajăm familia să vină cât de des poate.",
  },
  {
    q: "Cine se ocupă medical de rezidenți?",
    a: "Echipa noastră include medic geriatru, asistente medicale, infirmiere și kinetoterapeuți, disponibile 24/7. Colaborăm cu spitale din București pentru investigații și tratamente complexe.",
  },
  {
    q: "Ce acte sunt necesare pentru internare?",
    a: "Act de identitate al rezidentului și al aparținătorului, fișă medicală / scrisoare medicală de la medicul de familie, analize uzuale și contractul de servicii. Vă ghidăm pas cu pas prin toată documentația.",
  },
  {
    q: "Cum comunicați cu familia?",
    a: "Zilnic, după nevoie. Aveți contact direct cu echipa căminului, primiți informări despre starea rezidentului și ne puteți suna oricând. Transparența este principiul nostru de bază.",
  },
  {
    q: "Se poate și pe termen scurt?",
    a: "Da, acceptăm și îngrijire pe termen scurt — pentru recuperare post-operatorie, perioade în care familia este plecată sau pentru a testa experiența căminului înainte de o decizie pe termen lung.",
  },
];

export const REVIEWS = [
  {
    text: "Am vizitat mai multe cămine înainte să alegem. La Empathy am simțit din prima clipă că oamenilor le pasă cu adevărat — mama s-a adaptat mult mai repede decât ne așteptam.",
    author: "Familia unui rezident",
    place: "Empathy Cetinei",
  },
  {
    text: "Comunicarea cu echipa este excelentă. Primim răspuns la orice oră și vedem că tata este îngrijit, hrănit și — cel mai important — zâmbește din nou.",
    author: "Fiica unui rezident",
    place: "Empathy Orhideelor",
  },
  {
    text: "Locația de la Clinceni este impecabilă — camere noi, grădină frumoasă, personal atent. Raportul calitate-preț este greu de egalat în zonă.",
    author: "Familia unui rezident",
    place: "Empathy Clinceni",
  },
];

export const STATS = [
  { value: "2019", label: "primul cămin Empathy" },
  { value: "4", label: "locații în Ilfov" },
  { value: "100+", label: "familii alături de noi" },
  { value: "24/7", label: "îngrijire medicală" },
];

export const GALLERY = [
  { src: "/img/g1.jpg", alt: "Rezidenți la activități în căminul Empathy" },
  { src: "/img/g2.jpg", alt: "Interior cămin Empathy — zonă de zi" },
  { src: "/img/g3.jpg", alt: "Cameră în căminul Empathy" },
  { src: "/img/g4.jpg", alt: "Activități recreative cu rezidenții" },
  { src: "/img/g5.jpg", alt: "Spații verzi și grădină Empathy" },
  { src: "/img/g6.jpg", alt: "Rezidenți la masă în cămin" },
  { src: "/img/g7.jpg", alt: "Moment de socializare în grădină" },
  { src: "/img/g8.jpg", alt: "Interior luminos în cămin" },
  { src: "/img/g9.jpg", alt: "Terasa căminului Empathy" },
  { src: "/img/g10.jpg", alt: "Activitate în aer liber" },
  { src: "/img/g11.jpg", alt: "Ziua unui rezident la Empathy" },
  { src: "/img/g12.jpg", alt: "Îngrijire cu empatie, zi de zi" },
  { src: "/img/g13.jpg", alt: "Spațiu comun în cămin" },
  { src: "/img/g14.jpg", alt: "Rezidenți și echipă Empathy" },
  { src: "/img/g15.jpg", alt: "Cameră cu lumină naturală" },
  { src: "/img/g16.jpg", alt: "Exteriorul căminului" },
];

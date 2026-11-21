export type ServiceStat = { v: string; l: string };
export type ServiceStep = { t: string; d: string };
export type ServiceFaq = { q: string; a: string };

export type ServiceDetail = {
  intro: string;
  source?: { pre: string; label: string; url: string; post?: string };
  stats: ServiceStat[];
  forWhom: string[];
  includes: string[];
  steps: ServiceStep[];
  faqs: ServiceFaq[];
  related: string[];
  image: string;
};

export const SERVICE_DETAILS: Record<string, ServiceDetail> = {
  "termen-lung": {
    intro:
      "Îngrijirea pe termen lung la căminul de bătrâni Empathy înseamnă mai mult decât o cameră și trei mese pe zi. Este un cămin adevărat: rutine stabile, echipă medicală prezentă non-stop, activități care mențin mintea activă și o comunitate în care rezidentul nu se simte singur. Fiecare plan de îngrijire este personalizat și revizuit periodic, pe măsură ce nevoile se schimbă.",
    source: { pre: "Pentru repere internaționale despre îmbătrânirea sănătoasă și îngrijirea persoanelor vârstnice, consultați", label: "Deceniul îmbătrânirii sănătoase al OMS", url: "https://www.who.int/initiatives/decade-of-healthy-ageing", post: "." },
    stats: [
      { v: "24/7", l: "prezență medicală continuă" },
      { v: "3+2", l: "mese și gustări zilnice" },
      { v: "4", l: "locații în Ilfov" },
      { v: "2019", l: "ani de experiență" },
    ],
    forWhom: [
      "Seniori autonomi care au nevoie de companie și siguranță",
      "Persoane cu boli cronice care necesită monitorizare zilnică",
      "Seniori ale căror familii nu pot asigura îngrijirea la domiciliu",
      "Persoane care se recuperază după spitalizare și au nevoie de supraveghere",
      "Vârstnici care suferă de singurătate și au nevoie de comunitate",
    ],
    includes: [
      "Cameră cu baie proprie și climatizare",
      "3 mese + 2 gustări zilnice, cu diete personalizate",
      "Îngrijire medicală 24/7 cu medic geriatru și asistente",
      "Administrare medicamente și monitorizare parametri vitali",
      "Kinetoterapie și terapie ocupațională zilnică",
      "Activități recreative, socializare și evenimente",
      "Spălătorie, curățenie și întreținere cameră",
      "WiFi, TV și spații comune amenajate",
    ],
    steps: [
      { t: "Vizită la cămin", d: "Veniți cu familia la una dintre cele 4 locații, cunoașteți echipa și vedeți camerele — gratuit, fără obligații." },
      { t: "Evaluare medicală", d: "Medicul geriatru evaluează starea de sănătate, gradul de dependență și nevoile de îngrijire." },
      { t: "Plan personalizat", d: "Primeți un plan de îngrijire individual și un tarif exact, transparent — fără costuri ascunse." },
      { t: "Internare și integrare", d: "Semnăm contractul și organizăm internarea — posibil chiar în aceeași zi. Echipa ajută rezidentul să se adapteze." },
    ],
    faqs: [
      { q: "Cât timp poate sta un rezident la cămin?", a: "Pe termen nelimitat. Mulți rezidenți stau ani de zile — căminul devine casa lor. Contractul se reînnoiește periodic și planul de îngrijire se ajustează la nevoile în evoluție." },
      { q: "Pot vizita rezidentul oricând?", a: "Da. Vizitele sunt zilnice, fără programare. La locațiile din Domnești programul este 10:00–13:00 și 14:00–18:00, la Clinceni 08:00–22:00." },
      { q: "Ce se întâmplă dacă starea de sănătate se modifică?", a: "Planul de îngrijire se revizuiește și se ajustează. Dacă apar nevoi noi (de exemplu imobilizare sau nevoi de îngrijire complexe), echipa medicală actualizează abordarea și familia este informată." },
      { q: "Este căminul de bătrâni potrivit și pentru persoane sănătoase?", a: "Da. Avem rezidenți autonomi care aleg căminul pentru siguranță, companie și activități — nu doar pentru îngrijire medicală." },
    ],
    related: ["neurologice", "kinetoterapie", "terapie-ocupationala"],
    image: "/img/g11.webp",
  },
  neurologice: {
    intro:
      "Îngrijirea persoanelor cu Alzheimer, Parkinson și demență necesită o abordare specială: rutine stabile, personal instruit să recunoască semnalele și să răspundă fără a agrava anxietatea, plus supraveghere continuă. La căminul de bătrâni Empathy, fiecare rezident cu afecțiuni neurologice primește un plan adaptat — de la stimulare cognitivă la gestionarea momentelor de confuzie.",
    source: { pre: "Pentru informații și ghiduri despre demență și Alzheimer, puteți consulta", label: "Alzheimer Europe", url: "https://www.alzheimer-europe.org/", post: "." },
    stats: [
      { v: "24/7", l: "supraveghere continuă" },
      { v: "100%", l: "personal instruit pentru demență" },
      { v: "Zilnic", l: "activități de stimulare cognitivă" },
      { v: "Familii", l: "informate zilnic despre stare" },
    ],
    forWhom: [
      "Persoane diagnosticate cu Alzheimer sau demență vasculară",
      "Pacienți cu boala Parkinson, cu sau fără fluctuații motorii",
      "Persoane cu confuzie, dezorientare sau episoade de agitație",
      "Seniori care au nevoie de rutine stabile și mediu liniștit",
      "Familii care nu mai pot asigura supravegherea acasă",
    ],
    includes: [
      "Personal instruit special pentru afecțiuni neurologice",
      "Rutine zilnice stabile, care reduc anxietatea",
      "Activități de stimulare cognitivă: puzzles, muzică, lectură",
      "Supraveghere continuă și prevenție episoade de agitație",
      "Comunicare zilnică cu familia despre starea rezidentului",
      "Camere liniștite, fără stimuli perturbatori",
      "Colaborare cu medici specialiști din București",
    ],
    steps: [
      { t: "Evaluare neurologică", d: "Medicul evaluează stadiul bolii, capacitatea cognitivă și nevoile specifice — împreună cu istoricul medical." },
      { t: "Plan de îngrijire dedicat", d: "Se stabilește un plan individual: rutine, activități cognitive, medicamente și semne de alarmă de urmărit." },
      { t: "Adaptare graduală", d: "Rezidentul se acomodează în ritm propriu, cu atenție la reacțiile la schimbare — echipa monitorizează zilnic." },
      { t: "Revizuire periodică", d: "Planul se reevaluează la schimbări de stare; familia este informată constant despre evoluție." },
    ],
    faqs: [
      { q: "Acceptați pacienți în stadiu avansat de demență?", a: "Da, cu condiția ca îngrijirea să poată fi asigurată în siguranță. La evaluare stabilim împreună dacă căminul poate acoperi toate nevoile — uneori este nevoie de monitorizare mai intensivă." },
      { q: "Cum gestionați episoadele de agitație sau confuzie?", a: "Personalul este instruit să recunoască semnalele timpurii și să răspundă cu calm, fără confruntare. Se folosesc tehnici de redirecționare, mediu liniștit și, dacă este cazul, protocolul medical stabilit de medic." },
      { q: "Pot vizita un rezident cu demență?", a: "Da, și vă încurajăm. Vizitele sunt benefice chiar și dacă rezidentul nu vă recunoaște întotdeauna — prezența familiei are impact pozitiv asupra stării lui." },
      { q: "Ce diferențiază Empathy de un cămin obișnuit pentru demență?", a: "Personal specializat, rutine individuale, activități cognitive zilnice și comunicare transparentă cu familia — plus colaborare cu medici din București pentru investigații." },
    ],
    related: ["termen-lung", "terapie-ocupationala", "logopedie"],
    image: "/img/g12.webp",
  },
  kinetoterapie: {
    intro:
      "Kinetoterapia la căminul de bătrâni Empathy este nu un extras, ci o componentă centrală a îngrijirii. Kinetoterapeutul lucrează zilnic cu fiecare rezident, cu programe personalizate: recuperare post-AVC, menținerea mobilității, prevenirea complicațiilor la persoanele imobilizate și îmbunătățirea calității vieții pentru seniorii activi.",
    source: { pre: "Kinetoterapia este o profesie reglementată — standardele de practică sunt stabilite de", label: "Colegiul Fizioterapeuților din România", url: "https://colegiulfizioterapeutilor.ro/", post: "." },
    stats: [
      { v: "Permanent", l: "kinetoterapeut angajat" },
      { v: "Zilnic", l: "ședințe individuale" },
      { v: "AVC", l: "recuperare post-AVC" },
      { v: "Mobilitate", l: "prevenție pierdere autonomie" },
    ],
    forWhom: [
      "Persoane în recuperare după accident vascular cerebral (AVC)",
      "Seniori cu mobilitate redusă sau risc de cădere",
      "Pacienți post-operatori care necesită reabilitare",
      "Persoane imobilizate la pat care au nevoie de kinetoterapie de menținere",
      "Vârstnici cu afecțiuni articulare, Parkinson sau osteoporoză",
    ],
    includes: [
      "Kinetoterapeut angajat permanent în cămin",
      "Evaluare funcțională și program personalizat",
      "Exerciții de mobilitate, echilibru și forță",
      "Recuperare post-AVC și post-operatorie",
      "Kinetoterapie de menținere pentru imobilizați",
      "Masaj terapeutic și fizioterapie",
      "Monitorizare progres și ajustare program",
    ],
    steps: [
      { t: "Evaluare funcțională", d: "Kinetoterapeutul testează mobilitatea, forța, echilibrul și autonomia — și stabilește obiectivele." },
      { t: "Program individual", d: "Se creează un plan de exerciții adaptat: frecvență, tip de exerciții, intensitate și evoluție așteptată." },
      { t: "Ședințe regulate", d: "Exercițiile se desfășoară zilnic sau de mai multe ori pe săptămână, cu încurajare și corectare permanentă." },
      { t: "Monitorizare și progres", d: "Progresul se măsoară periodic; programul se ajustează pe măsură ce rezidentul își recapătă mobilitatea." },
    ],
    faqs: [
      { q: "Este kinetoterapia inclusă în tarif?", a: "Da. Kinetoterapia face parte din serviciile incluse în tariful lunar — nu este un extra cu plată separată." },
      { q: "Pot beneficia de kinetoterapie și persoanele imobilizate?", a: "Da. Chiar și pentru imobilizați există kinetoterapie de menținere: exerciții pasive, mobilizarea articulațiilor și prevenirea contracturilor." },
      { q: "Cât durează recuperarea după un AVC?", a: "Depinde de gravitate și de momentul începerii. Cu kinetoterapie zilnică și consecventă, mulți rezidenți își recapătă parțial sau total mobilitatea — fiecare caz este diferit." },
      { q: "Este nevoie de trimitere de la medic?", a: "Nu este obligatorie, dar ne ajută. Dacă aveți un plan de recuperare de la medicul curant sau neurolog, îl integrăm în programul kinetoterapeutic." },
    ],
    related: ["termen-lung", "escare", "terapie-ocupationala"],
    image: "/img/g4.webp",
  },
  "terapie-ocupationala": {
    intro:
      "Terapia ocupațională la Empathy înseamnă că fiecare zi are un scop. Activitățile — jocuri de masă, muzică, lectură, ateliere, sărbători — sunt gândite pentru stimularea cognitivă, menținerea abilităților motorii fine și, mai ales, pentru ca rezidenții să se simtă utili, conectați și bucuroși.",
    source: { pre: "Pentru standardele internaționale ale profesiei de terapeut ocupațional, vedeți", label: "World Federation of Occupational Therapists", url: "https://wfot.org/", post: "." },
    stats: [
      { v: "Zilnic", l: "program de activități" },
      { v: "Cognitiv", l: "stimulare mentală" },
      { v: "Social", l: "comunitate activă" },
      { v: "Creativ", l: "ateliere și hobby-uri" },
    ],
    forWhom: [
      "Seniori care își doresc o rutină activă și socială",
      "Persoane cu demență care au nevoie de stimulare cognitivă",
      "Rezidenți cu depresie sau tendință la izolare",
      "Vârstnici care au hobby-uri și vor să le continue",
      "Oricine caută un mediu cu viață, nu o instituție statică",
    ],
    includes: [
      "Jocuri de masă: șah, table, remi, domino",
      "Muzică, karaoke și serări la pian",
      "Lectură, filme și discuții de grup",
      "Ateliere: pictură, desen, lucru manual",
      "Sărbători, zile de naștere și evenimente speciale",
      "Plimbări în grădină și activități în aer liber",
      "Cluburi tematice și activități sezoniere",
    ],
    steps: [
      { t: "Cunoașterea rezidentului", d: "Aflăm ce i-a plăcut dintotdeauna: muzică, grădinărit, lectură — și ce abilități mai are." },
      { t: "Program adaptat", d: "Se stabilește un program zilnic/ săptămânal care combină activități cognitive, fizice și sociale." },
      { t: "Participare activă", d: "Rezidentul este încurajat să participe — nu obligat. Fiecare preferă ritmul lui." },
      { t: "Evaluare și ajustare", d: "Se observă ce funcționează și ce nu; programul se personalizează continuu." },
    ],
    faqs: [
      { q: "Ce se întâmplă dacă rezidentul nu dorește să participe la activități?", a: "Nu îl obligăm. Fiecare are zilele lui — uneori preferă liniștea. Echipa observă și propune activități noi când momentul e potrivit." },
      { q: "Există activități pentru persoanele cu mobilitate redusă?", a: "Da. Majoritatea activităților sunt accesibile din scaun sau pat: jocuri de masă, muzică, lectură, ateliere simple." },
      { q: "Pot contribui cu idei sau voluntariat?", a: "Desigur. Ne place când familia propune activități — un atelier, o poveste, o melodie. Voluntarii sunt bineveniți." },
      { q: "Activitățile sunt incluse în tarif?", a: "Da, toate activitățile recreative și terapeutice sunt incluse în tariful lunar." },
    ],
    related: ["termen-lung", "neurologice", "kinetoterapie"],
    image: "/img/g4.webp",
  },
  logopedie: {
    intro:
      "Tulburările de vorbire și deglutiție sunt frecvente după accident vascular cerebral și în afecțiuni neurologice. Logopedia la căminul de bătrâni Empathy ajută rezidenții să-și recâștige capacitatea de a vorbi clar și de a înghiți în siguranță — cu exerciții individuale, răbdare și progres măsurabil.",
    source: { pre: "Pentru informații despre logopedie și tulburările de comunicare, consultați", label: "Asociația Logopezilor din România", url: "https://www.logopezi.ro/", post: "." },
    stats: [
      { v: "AVC", l: "cauză principală" },
      { v: "Individual", l: "exerciții personalizate" },
      { v: "Sigur", l: "înghițire protejată" },
      { v: "Continuu", l: "monitorizare progres" },
    ],
    forWhom: [
      "Persoane după AVC cu dificultăți de vorbire sau înghițire",
      "Pacienți cu afecțiuni neurologice care afectează limbajul",
      "Seniori cu disfagie (dificultăți de înghițire)",
      "Persoane cu tulburări de articulare sau voce",
      "Rezidenți care au nevoie de exerciții de deglutiție sigură",
    ],
    includes: [
      "Evaluare logopedică inițială",
      "Exerciții individuale de vorbire și articulare",
      "Terapii de deglutiție (înghițire) sigură",
      "Exerciții de respirație și control vocal",
      "Adaptarea consistenței alimentelor dacă este cazul",
      "Monitorizare progres și raportare familiei",
    ],
    steps: [
      { t: "Evaluare", d: "Logopedul testează vorbirea, înghițirea și funcțiile implicate — și stabilește obiectivele." },
      { t: "Program personalizat", d: "Se creează exerciții adaptate nivelului rezidentului: de la sunete simple la propoziții complete." },
      { t: "Ședințe regulate", d: "Exercițiile se desfășoară de mai multe ori pe săptămână, cu feedback constant." },
      { t: "Progres și integrare", d: "Se măsoară îmbunătățirea; familia este informată despre evoluție și se ajustează planul." },
    ],
    faqs: [
      { q: "După cât timp se văd rezultate?", a: "Depinde de cauza și severitatea tulburării. Uneori îmbunătățirea e vizibilă în câteva săptămâni, alteori durează luni — consecvența în exerciții este cheia." },
      { q: "Este logopedia inclusă în tarif?", a: "Da. Terapiile de logopedie fac parte din serviciile incluse în tariful lunar." },
      { q: "Ce se întâmplă cu mâncarea dacă înghițirea este afectată?", a: "Bucătăria pregătește alimente cu consistență adaptată (piure, lichide îngroșite etc.) conform indicațiilor logopedului și medicului." },
      { q: "Poate veni logopedul și la spital sau acasă?", a: "Serviciul nostru este în cămin. Dacă rezidentul este internat temporar, kinetoterapeutul și logopedul pot continua programul la întoarcere." },
    ],
    related: ["neurologice", "kinetoterapie", "nutritie-enterala"],
    image: "/img/g14.webp",
  },
  "nutritie-enterala": {
    intro:
      "Alimentația este fundamentul îngrijirii. La căminul de bătrâni Empathy, bucătăria proprie pregătește zilnic mese proaspete, adaptate dietei fiecărui rezident — diabet, hipertensiune, insuficiență renală. Pentru cei care nu pot mânca normal, oferim nutriție enterală administrată sub supraveghere medicală strictă.",
    source: { pre: "Pentru ghiduri clinice internaționale despre nutriția enterală, vedeți", label: "ESPEN — European Society for Clinical Nutrition and Metabolism", url: "https://www.espen.org/", post: "." },
    stats: [
      { v: "3+2", l: "mese și gustări zilnice" },
      { v: "Proaspăt", l: "bucătărie proprie zilnică" },
      { v: "Diete", l: "personalizate medical" },
      { v: "Medical", l: "nutriție enterală supravegheată" },
    ],
    forWhom: [
      "Seniori cu dificultăți de înghițire (disfagie)",
      "Pacienți care nu pot mânca pe cale orală",
      "Persoane cu diabet care necesită regim strict",
      "Vârstnici cu alergii sau intoleranțe alimentare",
      "Oricine are nevoie de alimentație adaptată medical",
    ],
    includes: [
      "Bucătărie proprie cu ingrediente proaspete zilnice",
      "Meniuri personalizate pentru diabet, hipertensiune, renal",
      "Diete cu consistență adaptată (piure, lichide îngroșite)",
      "Nutriție enterală administrată de personal calificat",
      "Monitorizare greutate și hidratare",
      "Suplimente și suplimente nutriționale la nevoie",
      "Asistență la masă pentru cei care au nevoie",
    ],
    steps: [
      { t: "Evaluare nutrițională", d: "Medicul și asistentele evaluează greutatea, starea nutrițională și nevoile dietetice." },
      { t: "Plan alimentar", d: "Se stabilește meniul: tip de dietă, consistență, frecvența meselor și suplimentele necesare." },
      { t: "Administrare", d: "Mesele sunt servite la ore regulate; nutriția enterală se administrează sub supraveghere, cu monitorizare." },
      { t: "Revizuire", d: "Greutatea și starea nutrițională se verifică periodic; meniul se ajustează la schimbări." },
    ],
    faqs: [
      { q: "Ce este nutriția enterală?", a: "Este administrarea hrănirii direct în tractul digestiv prin sondă, pentru persoanele care nu pot mânca pe cale orală. Se face sub supraveghere medicală, cu monitorizare permanentă." },
      { q: "Pot alege meniul rezidentului?", a: "În limita prescrierii medicale, da. Bucătăria pregătește mese variate; familia poate sugera preparate preferate care respectă dieta." },
      { q: "Cum gestionați diabetul la masă?", a: "Meniurile sunt calculate cu carbohidrați controlați, la ore regulate, cu verificarea glicemiei. Dulciurile se exclud sau se înlocuiesc cu alternative potrivite." },
      { q: "Ce se întâmplă dacă rezidentul nu mănâncă suficient?", a: "Echipa observă și raportează medicului. Se pot ajusta porțiile, consistența, programul meselor sau se introduc suplimente — fără forțare." },
    ],
    related: ["logopedie", "termen-lung", "escare"],
    image: "/img/g6.webp",
  },
  escare: {
    intro:
      "Escarele sunt una dintre cele mai grave complicații ale imobilizării la pat — dar și una dintre cele mai prevenibile. La căminul de bătrâni Empathy, îngrijirea persoanelor imobilizate include protocoale stricte de prevenție: repoziționare regulată, saltea specială, inspecție zilnică a pielii și tratament prompt la primul semn.",
    source: { pre: "Pentru ghidurile internaționale de prevenire și tratament al escarelor, consultați", label: "EPUAP — European Pressure Ulcer Advisory Panel", url: "https://epuap.org/", post: "." },
    stats: [
      { v: "Prevenție", l: "protocoale stricte" },
      { v: "Zilnic", l: "repoziționare și inspecție" },
      { v: "Saltea", l: "anti-escare specială" },
      { v: "Medical", l: "tratament prompt la semne" },
    ],
    forWhom: [
      "Persoane imobilizate la pat pe perioade lungi",
      "Pacienți cu risc crescut de escare (subnutriție, umiditate)",
      "Seniori cu diabet sau probleme circulatorii",
      "Rezidenți care necesită îngrijire complexă la pat",
      "Oricine are nevoie de îngrijire specializată în decubit",
    ],
    includes: [
      "Repoziționare regulată la fiecare 2-3 ore",
      "Saltea anti-escare și protecție zone de presiune",
      "Inspecție zilnică a pielii și documentare",
      "Pansamente și tratament escare la nevoie",
      "Hidratare și nutriție pentru piele sănătoasă",
      "Îngrijire igienică completă cu uscăciune atentă",
      "Monitorizare medicală a evoluției",
    ],
    steps: [
      { t: "Evaluare risc", d: "Se evaluează riscul de escare: mobilitate, nutriție, stare piele, comorbidități." },
      { t: "Protocol personalizat", d: "Se stabilește frecvența repoziționării, materialele necesare și punctele de atenție specifice." },
      { t: "Prevenție zilnică", d: "Repoziționare la ore fixe, inspecție pielii, hidratare și menținerea curățeniei." },
      { t: "Tratament la nevoie", d: "La primul semn de escară, se intervine: pansamente, tratament medical, ajustare protocol." },
    ],
    faqs: [
      { q: "Cât de frecvent se repoziționează un rezident imobilizat?", a: "De regulă la 2-3 ore, zi și noapte, plus la schimbarea programului de îngrijire. Frecvența se ajustează la riscul individual." },
      { q: "Ce facem dacă apare o escară?", a: "Se tratează prompt: curățare, pansamente, tratament medical dacă este cazul, și intensificarea măsurilor de prevenție. Familia este informată." },
      { q: "Este posibil să vindecăm o escară complet?", a: "Depinde de stadiu și de starea generală. Escarele în stadii incipiente se pot vindeca; cele avansate necesită tratament îndelungat. Prevenția este întotdeauna mai bună." },
      { q: "Salteaua anti-escare este inclusă?", a: "Da. Toate dotările necesare pentru prevenția escarelor sunt incluse în tariful de îngrijire." },
    ],
    related: ["kinetoterapie", "termen-lung", "incontinenta"],
    image: "/img/g12.webp",
  },
  incontinenta: {
    intro:
      "Incontinența este o realitate pentru mulți vârstnici — dar nu trebuie să însemne pierderea demnității. La căminul de bătrâni Empathy, îngrijirea discretă și respectuoasă include igienă zilnică completă, produse dedicate, toaletare programată și o atitudine care protejează intimitatea rezidentului.",
    source: { pre: "Pentru informații științifice despre incontinență, vedeți", label: "International Continence Society", url: "https://www.ics.org/", post: "." },
    stats: [
      { v: "Discret", l: "îngrijire fără judecată" },
      { v: "Zilnic", l: "igienă completă" },
      { v: "Demn", l: "intimitate protejată" },
      { v: "Medical", l: "monitorizare și tratament" },
    ],
    forWhom: [
      "Seniori cu incontinență urinară sau fecală",
      "Pacienți cu demență care au pierdut controlul sfincterian",
      "Persoane imobilizate la pat",
      "Vârstnici cu afecțiuni care afectează vezica",
      "Oricine are nevoie de asistență cu igiena intimă",
    ],
    includes: [
      "Igienă intimă zilnică completă și delicată",
      "Produse absorbante de calitate, schimbate regulat",
      "Toaletare programată la ore fixe",
      "Protecție piele și prevenție iritații",
      "Monitorizare medicală a cauzelor",
      "Discreție și respect față de intimitate",
    ],
    steps: [
      { t: "Evaluare", d: "Se evaluează tipul și severitatea incontinenței, cauzele posibile și nevoile specifice." },
      { t: "Plan de îngrijire", d: "Se stabilește programul de toaletare, produsele necesare și măsurile de igienă." },
      { t: "Rutine zilnice", d: "Igienă la ore fixe, schimbare produse, verificare piele — totul discret și respectuos." },
      { t: "Revizuire medicală", d: "Se reevaluează periodic; dacă este cazul, medicul investighează cauze reversibile (infecție, medicamente)." },
    ],
    faqs: [
      { q: "Rezidentul își pierde demnitatea?", a: "Nu. Îngrijirea se face cu discreție, în spații private, fără comentarii. Rezidentul este tratat cu respectul pe care l-ar dori pentru sine." },
      { q: "Există tratament pentru incontinență?", a: "Uneori da — medicul poate investiga cauze reversibile (infecții urinare, efecte secundare ale medicamentelor). Când nu este reversibilă, o gestionăm cu îngrijire specializată." },
      { q: "Cum se face toaletarea?", a: "La ore regulate stabilite individual, în funcție de programul rezidentului. Se folosește patul de toaletă sau toaleta adaptată, cu asistență completă dacă este necesară." },
      { q: "Produsele absorbante sunt incluse?", a: "Da. Toate produsele de igienă și absorbantele necesare sunt incluse în tariful de îngrijire." },
    ],
    related: ["escare", "termen-lung", "kinetoterapie"],
    image: "/img/g15.webp",
  },
};

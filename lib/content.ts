export type NewsItem = {
  slug: string;
  category: string;
  date: string;
  dateTime: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
  body: string[];
  highlights: string[];
};

export type EventItem = {
  slug: string;
  status: string;
  season: string;
  dateTime: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
  body: string[];
  practical: string[];
};

export const newsItems: NewsItem[] = [
  {
    slug: "nordisk-mesterskap-2025",
    category: "Konkurranse",
    date: "16. desember 2025",
    dateTime: "2025-12-16",
    title: "Historisk innsats i Nordisk mesterskap",
    intro:
      "Syv bergenske utøvere markerte seg sterkt i Helsinki med hele 15 medaljer: åtte gull, tre sølv og fire bronse.",
    image: "/images/club-community.webp",
    imageAlt: "Utøvere fra Bergen Stupeklubb samlet ved bassenget",
    body: [
      "Bergen Stupeklubb leverte en historisk sterk laginnsats under Nordisk mesterskap i Helsinki. Syv utøvere representerte klubben og tok med seg totalt 15 medaljer hjem til Bergen.",
      "Resultatet bestod av åtte gull, tre sølv og fire bronse. Bak medaljene ligger mange timer med målrettet trening, tett oppfølging fra trenerne og et lag som støtter hverandre både på kanten og i konkurransen.",
      "Mesterskapet ga verdifull erfaring mot sterke nordiske utøvere. Klubben gratulerer hele laget, trenerne og støtteapparatet med en imponerende prestasjon.",
    ],
    highlights: ["15 medaljer", "8 gull", "7 utøvere"],
  },
  {
    slug: "beste-klubb-nm-senior-og-landsfinalen",
    category: "Konkurranse",
    date: "13. desember 2023",
    dateTime: "2023-12-13",
    title: "Beste klubb i både NM senior og landsfinalen",
    intro:
      "Tjue bergensutøvere deltok i Aquarama. Hele laget bidro til at Bergen Stupeklubb gikk til topps i begge konkurransene.",
    image: "/images/diving-practice.webp",
    imageAlt: "Stuper i aksjon under en konkurranse",
    body: [
      "Bergen Stupeklubb stilte med tjue utøvere under NM senior og landsfinalen i Aquarama. Utøverne leverte sterke prestasjoner gjennom hele helgen.",
      "Resultatene kom fra både individuelle øvelser og et solid lagarbeid. Samlet gjorde innsatsen at Bergen Stupeklubb ble kåret til beste klubb i begge konkurransene.",
      "Prestasjonen viser bredden i klubben og arbeidet som legges ned gjennom hele sesongen. Vi gratulerer alle utøvere og trenere med helgens resultater.",
    ],
    highlights: ["20 utøvere", "2 lagseire", "Sterkt fellesskap"],
  },
];

export const eventItems: EventItem[] = [
  {
    slug: "stupskolen-host-2026",
    status: "Påmelding åpen",
    season: "Høst 2026",
    dateTime: "2026-08",
    title: "Påmelding til høstens Stupskole",
    intro:
      "En trygg introduksjon til stuping for barn, ungdom og voksne i Ado Arena.",
    image: "/images/coach-feedback.webp",
    imageAlt: "Trener som veileder en ny stuper ved bassenget",
    body: [
      "Stupskolen passer for deg som er nysgjerrig på stuping og ønsker en trygg start. Treningen kombinerer øvelser på land, grunnleggende teknikk og gradvis tilvenning til brett og høyder.",
      "Trenerne tilpasser øvelsene etter alder, erfaring og individuelle behov. Målet er at alle skal oppleve mestring, trygghet og idrettsglede.",
      "Etter at du har meldt interesse, tar klubben kontakt med informasjon om gruppe og oppstart.",
    ],
    practical: [
      "For barn, ungdom og voksne",
      "Trening i Ado Arena",
      "Gruppe tilpasses alder og nivå",
      "Klubben bekrefter tidspunkt før oppstart",
    ],
  },
];

export function getNewsItem(slug: string) {
  return newsItems.find((item) => item.slug === slug);
}

export function getEventItem(slug: string) {
  return eventItems.find((item) => item.slug === slug);
}

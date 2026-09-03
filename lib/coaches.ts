export type CoachSummary = {
  name: string;
  role: string;
};

export type LeadCoach = CoachSummary & {
  slug: string;
  intro: string;
  body: string[];
  specialties: string[];
};

export const leadCoaches: LeadCoach[] = [
  {
    slug: "paul-joachim-thorsen",
    name: "Paul Joachim Thorsen",
    role: "Hovedtrener",
    intro:
      "Erfaren trener, tidligere landslagsutøver og internasjonal stupdommer.",
    body: [
      "Paul Joachim startet som stuper i Stavanger Stupeklubb i 1988 og var på landslaget fra 1992 til 1999.",
      "Han har vært hovedtrener i Bergen, landslagssjef og internasjonal stupdommer. Han har også vært med på å utvikle Trener 1-kurset for stup.",
      "Som hovedtrener følger han den sportslige utviklingen i klubben og bidrar til en trygg progresjon for både utøvere og trenerteam.",
    ],
    specialties: ["Hovedtrener", "Internasjonal dommer", "Trenerutvikling"],
  },
  {
    slug: "espen-gilje-bergslien",
    name: "Espen Gilje Bergslien",
    role: "Elitetrener",
    intro:
      "Tidligere konkurransestuper med erfaring fra norske og nordiske mesterskap.",
    body: [
      "Espen startet med stuping i 2001 og har medaljer fra både norske og nordiske mesterskap.",
      "I tillegg til arbeidet med klubbens eliteutøvere er han trener på toppidrettslinjen ved Amalie Skram videregående skole.",
      "Erfaringen som utøver og trener gir ham et godt grunnlag for å følge opp teknikk, mål og utvikling på høyt nivå.",
    ],
    specialties: ["Elitetrener", "Tidligere konkurransestuper", "Toppidrett"],
  },
];

export const competitionCoaches: CoachSummary[] = [
  { name: "Claus Gundersen jr.", role: "Rekrutt" },
  { name: "Trygve Pedersen", role: "Rekrutt og elite" },
  { name: "Vårin Renate Andvik Holm", role: "Rekrutt" },
  { name: "Julie Synnøve Thorsen", role: "Rekrutt" },
  { name: "Oda Prestegård Finne", role: "Rekrutt" },
];

export const divingSchoolCoaches: CoachSummary[] = [
  { name: "Vera Valentina Hvidsten", role: "Nybegynnere" },
  { name: "Marko Borojevic", role: "Nybegynnere" },
  { name: "Anna Wæhle", role: "Nybegynnere" },
  { name: "Jone Antonsen Holmelid", role: "Nybegynnere" },
  { name: "Jonas Erik Thorsen", role: "Nybegynnere" },
  { name: "Amalie Kupka", role: "Nybegynnere" },
  { name: "Caroline Sofie Kupka", role: "Videregående" },
  { name: "Anne Sofie Holm", role: "Stupskolen" },
  { name: "Henrik Skomsvoll", role: "Stupskolen" },
  { name: "Synne Pedersen Drægri", role: "Stupskolen" },
  { name: "Sienna Pambo Sunnfør", role: "Stupskolen" },
  { name: "Isak Børslien", role: "Stupskolen" },
  { name: "Tuva Tveit-Sletten", role: "Stupskolen" },
  { name: "Pia Tveit-Sletten", role: "Stupskolen" },
];

export const specialCoaches = [
  {
    name: "Peter Henrik Kupka",
    role: "Voksengruppa",
    text: "Peter tar imot voksne i alle aldre som vil prøve stuping eller hente frem igjen kunnskap fra tidligere. Han er selv aktiv konkurransestuper.",
  },
  {
    name: "Alexander Alsaker",
    role: "E-sportlaget",
    text: "Alexander trener klubbens e-sportlag. Han er utdannet ergoterapeut og har erfaring fra både fotball og boksing, i tillegg til interesse for dataspill.",
  },
];

export function getLeadCoach(slug: string) {
  return leadCoaches.find((coach) => coach.slug === slug);
}

import okapi from "@/assets/project-okapi.jpg";
import jaguar from "@/assets/project-jaguar.jpg";
import chimp from "@/assets/project-chimp.jpg";
import frog from "@/assets/project-frog.jpg";
import redPanda from "@/assets/species-red-panda.jpg";
import canopy from "@/assets/climate-canopy.jpg";
import ranger from "@/assets/community-ranger.jpg";
import hero from "@/assets/hero-hornbill.jpg";

export const ORG_NAME = "Fondation Canopée";

export type ProjectStatus = "Urgent" | "Protégé";

export type Project = {
  slug: string;
  country: string;
  region: "Afrique" | "Amérique latine" | "Asie";
  status: ProjectStatus;
  year: number;
  title: string;
  hectares: number;
  image: string;
  summary: string;
};

export const projects: Project[] = [
  {
    slug: "borneo",
    country: "Indonésie",
    region: "Asie",
    status: "Urgent",
    year: 2026,
    title: "Stopper l’expansion du palmier à huile au cœur de Bornéo",
    hectares: 48000,
    image: hero,
    summary:
      "Une forêt primaire où vivent calaos, orangs-outans et panthères nébuleuses est menacée par de nouvelles concessions.",
  },
  {
    slug: "okapi-congo",
    country: "RD Congo",
    region: "Afrique",
    status: "Urgent",
    year: 2026,
    title: "Ultime refuge pour l’okapi et le gorille de Grauer",
    hectares: 312000,
    image: okapi,
    summary:
      "Relier deux aires protégées pour créer un corridor vital dans le bassin du Congo.",
  },
  {
    slug: "chimpanzes-cameroun",
    country: "Cameroun",
    region: "Afrique",
    status: "Urgent",
    year: 2026,
    title: "Créer une réserve pour les chimpanzés du Nigeria-Cameroun",
    hectares: 27500,
    image: chimp,
    summary:
      "La sous-espèce de chimpanzé la plus menacée d’Afrique a besoin d’une forêt protégée et gérée avec les villages voisins.",
  },
  {
    slug: "foret-seche-bolivie",
    country: "Bolivie",
    region: "Amérique latine",
    status: "Protégé",
    year: 2025,
    title: "Renforcer la plus grande forêt tropicale sèche d’Amérique du Sud",
    hectares: 540000,
    image: jaguar,
    summary: "Un bastion pour le jaguar, le tatou géant et des centaines d’espèces endémiques.",
  },
  {
    slug: "panda-roux-nepal",
    country: "Népal",
    region: "Asie",
    status: "Protégé",
    year: 2024,
    title: "Créer la forêt communautaire du panda roux",
    hectares: 9800,
    image: redPanda,
    summary: "Des forêts de rhododendrons gérées par les communautés locales pour le panda roux.",
  },
  {
    slug: "grenouilles-panama",
    country: "Panama",
    region: "Amérique latine",
    status: "Protégé",
    year: 2023,
    title: "Protéger une « île céleste » de forêt de nuages pour les amphibiens",
    hectares: 6200,
    image: frog,
    summary: "Un sommet isolé qui abrite des grenouilles de verre que l’on ne trouve nulle part ailleurs.",
  },
  {
    slug: "amazonie-perou",
    country: "Pérou",
    region: "Amérique latine",
    status: "Protégé",
    year: 2024,
    title: "Sauver 180 000 hectares d’Amazonie riche en carbone",
    hectares: 180000,
    image: canopy,
    summary: "Un massif forestier intact qui stocke des millions de tonnes de carbone.",
  },
];

export const stats = [
  { value: "28 M", label: "d’hectares protégés dans le monde, et 35 M de plus en cours", image: canopy },
  { value: "3 402", label: "espèces menacées mises à l’abri", image: jaguar },
  { value: "98 %", label: "des forêts que nous avons protégées restent intactes", image: okapi },
];

export const pillars = [
  {
    key: "especes",
    tab: "Espèces",
    title: "Sauver les espèces de l’extinction",
    text: "Un million d’espèces risquent de disparaître ce siècle, chacune unique et irremplaçable. La première cause est la destruction des habitats, et l’habitat le plus précieux est la forêt tropicale.",
    image: redPanda,
  },
  {
    key: "climat",
    tab: "Climat",
    title: "Sauver les forêts pour freiner le dérèglement climatique",
    text: "Impossible d’enrayer le changement climatique sans protéger les forêts tropicales : elles gardent le carbone enfoui dans le bois et les sols tout en retirant le CO₂ de l’air.",
    image: canopy,
  },
  {
    key: "communautes",
    tab: "Communautés",
    title: "Sauver la planète passe par les personnes",
    text: "Nous nouons des partenariats avec les défenseurs de la nature les plus engagés d’Afrique, d’Asie et d’Amérique latine, et avec les peuples autochtones qui protègent leurs terres.",
    image: ranger,
  },
] as const;

export const news = [
  {
    date: "4 nov. 2026",
    tag: "Annonce",
    title: "28 millions d’hectares protégés : un cap historique franchi",
    image: canopy,
  },
  {
    date: "21 oct. 2026",
    tag: "Terrain",
    title: "La petite grenouille derrière une grande histoire de conservation",
    image: frog,
  },
  {
    date: "9 oct. 2026",
    tag: "Communautés",
    title: "Pourquoi nous soutenons la conservation menée par les peuples autochtones",
    image: ranger,
  },
];

export const formatHectares = (n: number) =>
  new Intl.NumberFormat("fr-FR").format(n) + " ha";

import canopy from "@/assets/climate-canopy.jpg";
import ranger from "@/assets/community-ranger.jpg";
import chimp from "@/assets/project-chimp.jpg";
import gorilla from "@/assets/gorilla.jpg";
import mangrove from "@/assets/mangrove.jpg";
import savane from "@/assets/savane-mbam.jpg";
import elephants from "@/assets/hero-elephants.jpg";

import logo from "@/assets/fedec/logo_fedec.jpg.asset.json";
import dg from "@/assets/fedec/dg4.jpg.asset.json";
import enfants from "@/assets/fedec/projet-enfants-fedec.jpg.asset.json";
import pepiniere from "@/assets/fedec/projet-fedec2.jpg.asset.json";
import reunion from "@/assets/fedec/projet-fedec3.jpg.asset.json";
import pompe from "@/assets/fedec/pnmd-fedec-3.jpg.asset.json";
import sante from "@/assets/fedec/ppav-sante-fedec.jpg.asset.json";
import fablab from "@/assets/fedec/projet-fatlab-7.jpg.asset.json";
import bibliotheque from "@/assets/fedec/plan-pour-les-peuples-autchtones-vulnerables8.jpg.asset.json";
import cacao from "@/assets/fedec/recolte-de-cacao-pncm.jpg.asset.json";
import donKribi from "@/assets/fedec/don-fedec-eneo-kribi.jpg.asset.json";
import dirigeants from "@/assets/fedec/dirigeants-fedec.jpg.asset.json";
import nl3 from "@/assets/fedec/newsletter-juillet-septembre-2026.jpg.asset.json";
import nl2 from "@/assets/fedec/newsletter-avril-juin2026.jpg.asset.json";
import rapport from "@/assets/fedec/rapport-annuel-2025.jpg.asset.json";
import recrutement from "@/assets/fedec/recrutement-fedec-ok.jpg.asset.json";
import appelOffres from "@/assets/fedec/baniere-appel-doffres-pour-foyer-scolaire.png.asset.json";
import siege from "@/assets/fedec/sceance-de-travail-au-siege-de-la-fedec.jpg.asset.json";
import pMinfof from "@/assets/fedec/logo-minfof.png.asset.json";
import pWwf from "@/assets/fedec/logo-wwf.png.asset.json";
import pSnh from "@/assets/fedec/logo-snh.png.asset.json";
import pBacuda from "@/assets/fedec/logo-bacuda.png.asset.json";
import pLocal from "@/assets/fedec/1.png.asset.json";

export const images = {
  hero: elephants,
  canopy,
  ranger,
  chimp,
  gorilla,
  mangrove,
  savane,
  logo: logo.url,
  dg: dg.url,
  enfants: enfants.url,
  pepiniere: pepiniere.url,
  reunion: reunion.url,
  pompe: pompe.url,
  sante: sante.url,
  fablab: fablab.url,
  bibliotheque: bibliotheque.url,
  cacao: cacao.url,
  donKribi: donKribi.url,
  dirigeants: dirigeants.url,
  siege: siege.url,
};

export const ORG = {
  short: "FEDEC",
  name: "Fondation pour l’Environnement et le Développement au Cameroun",
  slogan: "Conserver, Régénérer, Restaurer, Financer",
  tagline: "Pour une économie régénérative au service de la nature et des communautés",
  phone: "+237 673 86 26 44",
  phoneHref: "tel:+237673862644",
  email: "info@fedec.cm",
  address: "Rue CEPER, Messa — B.P. 3937 Yaoundé, Cameroun",
  video: "https://www.youtube.com/watch?v=FWjoxtT-EWc",
  social: {
    facebook: "https://www.facebook.com/FondationFEDEC",
    linkedin:
      "https://www.linkedin.com/company/fondation-pour-l-environnement-et-le-d%C3%A9veloppement-au-cameroun-fedec/",
    x: "https://x.com/sitefedec",
  },
};

export const announcement = {
  label: "Avis d’appel d’offres N°001/26/FEDEC/DIR du 08 avril 2026",
  text: "Recrutement d’une entreprise expérimentée dans le bâtiment pour la construction d’un foyer scolaire",
};

/** Key figures from the current fedec.cm site. */
export const stats = [
  { value: "20+", label: "ans d’expérience sur le terrain" },
  { value: "1 300+", label: "bénéficiaires directs" },
  { value: "827 k ha", label: "d’aires protégées soutenues" },
  { value: "27+", label: "partenaires" },
  { value: "50+", label: "projets réalisés" },
];

export const highlightStats = [
  { value: "827 k ha", label: "soit 1/5 de la superficie des aires protégées du Cameroun", image: canopy },
  { value: "4", label: "parcs nationaux appuyés : Campo Ma’an, Mbam et Djerem, Deng Deng, Vallée du Mbéré", image: elephants },
  { value: "1 300+", label: "bénéficiaires dans les communautés locales et autochtones", image: enfants.url },
];

export type Pillar = {
  key: string;
  tab: string;
  number: string;
  title: string;
  short: string;
  text: string;
  image: string;
  actions: string[];
  enjeux: { title: string; targets: string[] }[];
};

/** The three pillars of the 2026–2035 strategic plan. */
export const pillars: Pillar[] = [
  {
    key: "environnement",
    tab: "la nature",
    number: "01",
    title: "Conservation de la biodiversité, restauration des écosystèmes et action pour le climat",
    short: "Environnement",
    text: "Conserver et gérer durablement la biodiversité des aires protégées, restaurer les écosystèmes terrestres, marins et côtiers, et renforcer la résilience climatique du Cameroun.",
    image: gorilla,
    actions: [
      "Conserver et gérer durablement la biodiversité dans les aires protégées et les zones écologiques d’intérêt particulier",
      "Protéger et restaurer les écosystèmes terrestres, marins et côtiers",
      "Contribuer à la résilience climatique et à la revitalisation de la biodiversité",
    ],
    enjeux: [
      {
        title: "Restauration des forêts et paysages dégradés",
        targets: [
          "Restaurer jusqu’à 5 millions d’hectares de terres et paysages dégradés (40 % de l’objectif national)",
          "Séquestrer 600 millions de tonnes de CO₂ sur 20 ans",
          "Générer 6 milliards USD de revenus, dont 1,5 à 2,4 milliards pour les populations locales",
        ],
      },
      {
        title: "Protection de la biodiversité et des espèces menacées",
        targets: [
          "Appuyer les plans d’aménagement d’au moins 10 autres aires protégées (plus de 2,5 millions d’hectares), dont le Parc National du Mont Cameroun et le Parc Marin Manyange Na Elombo",
          "Mettre en œuvre 10 plans d’actions pour espèces menacées",
          "Former et déployer 500 éco-gardiens supplémentaires",
          "Impliquer activement 200 communautés autochtones dans la co-gestion de la biodiversité",
          "Contribuer à la certification forestière",
        ],
      },
      {
        title: "Restauration des écosystèmes marins et côtiers",
        targets: [
          "Restaurer 4 000 à 6 000 km² d’écosystèmes côtiers et marins, soit 25 à 40 % de la zone dégradée nationale",
        ],
      },
      { title: "Action climatique", targets: ["Augmenter la sécurité énergétique"] },
    ],
  },
  {
    key: "communautes",
    tab: "les communautés",
    number: "02",
    title: "Développement économique régénératif et inclusion sociale",
    short: "Socio-économique",
    text: "Faire des communautés locales et autochtones les actrices et bénéficiaires directes d’activités économiques durables : agroforesterie, transformation locale, écotourisme, santé et éducation.",
    image: cacao.url,
    actions: [
      "Financer des activités économiques créatrices de valeur, fondées sur la régénération des écosystèmes",
      "Renforcer les capacités, la représentation, les moyens de subsistance et le bien-être des communautés locales et des peuples autochtones",
    ],
    enjeux: [
      {
        title: "Développement économique régénératif",
        targets: [
          "(Co)financer 6 projets prototypes de coopératives ou PME : agroforesterie (cacao, café), transformation locale, écotourisme et artisanat",
          "Créer entre 240 et 800 emplois durables",
          "Augmenter les revenus des familles concernées de 25 % à 70 %",
          "Fédérer un réseau d’au moins 50 entreprises engagées pour un Cameroun régénératif",
          "Faciliter l’accès au microcrédit à 500 entrepreneurs durables via 3 partenariats financiers",
        ],
      },
      {
        title: "Sécurité alimentaire",
        targets: [
          "Intégrer des cultures vivrières dans tous les projets agroforestiers",
          "Déployer des « forêts nourricières » dans 100 % des zones agroforestières de la FEDEC",
        ],
      },
      {
        title: "Inclusion sociale et bien-être",
        targets: [
          "Représentation des communautés autochtones dans 100 % des projets et au sein du Comité consultatif",
          "Au moins deux infrastructures ou services sociaux de base (santé, éducation, eau) par projet",
          "Des dispositifs de sensibilisation accessibles (radio, numérique, formations) dans 100 % des projets",
        ],
      },
    ],
  },
  {
    key: "financement",
    tab: "le financement durable",
    number: "03",
    title: "Financement à impact et partenariats pour la régénération",
    short: "Finance & collaboration",
    text: "Mobiliser des ressources nouvelles et structurer des mécanismes de financement innovants — échange dette-nature, obligations vertes et bleues, fonds à impact — au service d’un portefeuille national de projets régénératifs.",
    image: images.dirigeants,
    actions: [
      "Mobiliser les ressources et structurer des mécanismes de financement innovants pour la régénération",
      "Catalyser la co-création, le co-investissement, l’apprentissage collectif et la transformation systémique",
    ],
    enjeux: [
      {
        title: "Financement écosystémique pour l’économie régénérative",
        targets: [
          "Un cadre multi-thématique aligné avec les priorités nationales et les bailleurs (AFD, KfW…)",
          "Des mécanismes innovants : échange dette-nature, obligations vertes/bleues, fonds à impact",
          "Une infrastructure intégrée (financière, numérique, gouvernance) pour piloter un portefeuille national",
          "Un véhicule d’investissement à impact pour co-investir dans les coopératives et PME durables",
        ],
      },
      {
        title: "Alliance pour un Cameroun Régénératif",
        targets: [
          "Formaliser plus de 5 partenariats stratégiques clés",
          "Engager plus de 200 coopératives, PME, entreprises et ONG",
          "Mobiliser plus de 50 ambassadeurs de la vision",
        ],
      },
    ],
  },
];

/** Headline 2035 targets from the strategic plan. */
export const goals2035 = [
  { value: "5 M ha", label: "de terres et paysages dégradés restaurés" },
  { value: "600 Mt", label: "de CO₂ séquestrées sur 20 ans" },
  { value: "500", label: "éco-gardiens supplémentaires formés" },
  { value: "200", label: "communautés autochtones en co-gestion" },
  { value: "800", label: "emplois durables créés" },
  { value: "10", label: "nouvelles aires protégées appuyées" },
];

export type Axe = "Environnement" | "Social" | "Développement";

export type Project = {
  slug: string;
  location: string;
  axe: Axe;
  title: string;
  surface?: string;
  image: string;
  summary: string;
  href: string;
};

export const projects: Project[] = [
  {
    slug: "campo-maan",
    location: "Région du Sud",
    axe: "Environnement",
    title: "Conservation de la biodiversité au Parc National de Campo Ma’an",
    surface: "264 064 ha",
    image: images.pepiniere,
    summary:
      "Suivi écologique, lutte anti-braconnage, pépinières et appui aux communautés riveraines d’un parc qui abrite éléphants de forêt, gorilles et chimpanzés.",
    href: "https://fedec.cm/Projets/conservation-de-la-biodiversite-au-parc-national-de-campo-maan/",
  },
  {
    slug: "mbam-djerem",
    location: "Adamaoua, Centre, Est",
    axe: "Environnement",
    title: "Aménagement du Parc National du Mbam et Djerem",
    surface: "416 512 ha",
    image: savane,
    summary:
      "Créé en 2000, ce parc unique mêle forêt équatoriale et savanes soudano-guinéennes, traversé par le Djerem et le Mbam.",
    href: "https://fedec.cm/Projets/amenagement-du-parc-national-de-mbam-et-djerem/",
  },
  {
    slug: "cacao-pncm",
    location: "Campo Ma’an",
    axe: "Développement",
    title: "Les plantations de cacao transforment le quotidien des communautés riveraines",
    image: images.cacao,
    summary: "Une filière cacao durable qui génère des revenus tout en réduisant la pression sur la forêt.",
    href: "https://fedec.cm/les-plantations-de-cacao-transforment-le-quotidien-des-communautes-riveraines-du-pncm/",
  },
  {
    slug: "ppav-education",
    location: "Axe Kribi – Bipindi – Lolodorf",
    axe: "Social",
    title: "PPAV : une meilleure éducation pour tous",
    image: images.enfants,
    summary: "Améliorer l’accès à l’éducation des enfants Bakola/Bagyeli le long du pipeline Tchad-Cameroun.",
    href: "https://fedec.cm/Projets/projet-ppav-une-meilleure-education-pour-tous/",
  },
  {
    slug: "ppav-sante",
    location: "Axe Kribi – Bipindi – Lolodorf",
    axe: "Social",
    title: "PPAV : santé pour tous",
    image: images.sante,
    summary: "« Un esprit sain dans un corps sain » : un accès aux soins pour les peuples autochtones vulnérables.",
    href: "https://fedec.cm/Projets/projet-ppav-sante-pour-tous/",
  },
  {
    slug: "fablab-kribi",
    location: "Kribi",
    axe: "Développement",
    title: "FabLab – RadioLab de Kribi",
    image: images.fablab,
    summary: "Une opportunité pour l’innovation, l’entrepreneuriat et l’autonomie économique des jeunes de Kribi.",
    href: "https://fedec.cm/Projets/projet-fablab-radiolab-de-kribi/",
  },
];

export const zones = [
  { name: "Parc National de Campo Ma’an", region: "Sud" },
  { name: "Parc National du Mbam et Djerem", region: "Adamaoua, Centre, Est" },
  { name: "Parc National de Deng Deng", region: "Est" },
  { name: "Parc National de la Vallée du Mbéré", region: "Adamaoua" },
];

export type NewsItem = {
  date: string;
  tag: string;
  title: string;
  excerpt: string;
  image: string;
  href: string;
};

export const news: NewsItem[] = [
  {
    date: "27 octobre 2026",
    tag: "Newsletter",
    title: "Newsletter FEDEC | Juillet – Septembre 2026",
    excerpt:
      "Découvrez les actualités de la FEDEC, ses initiatives de conservation, les résultats communautaires et ses partenariats pour un financement durable.",
    image: nl3.url,
    href: "https://fedec.cm/newsletter-fedec-juillet-septembre-2026/",
  },
  {
    date: "18 septembre 2026",
    tag: "Newsletter",
    title: "Newsletter Avril-Juin 2026 : la conservation en action au Cameroun",
    excerpt:
      "Nos impacts sur le terrain : autonomisation communautaire, suivi écologique et projets structurants.",
    image: nl2.url,
    href: "https://fedec.cm/newsletter-fedec-avril-juin-2026-la-conservation-en-action-au-cameroun/",
  },
  {
    date: "22 juillet 2026",
    tag: "Recrutement",
    title: "La FEDEC recrute un(e) Consultant(e) spécialisé(e) en mobilisation des financements",
    excerpt: "Expert(e) en mobilisation de fonds et finance climat, basé(e) à Yaoundé.",
    image: recrutement.url,
    href: "https://fedec.cm/la-fedec-recrute-une-consultante-specialisee-en-mobilisation-des-financements/",
  },
  {
    date: "1 juillet 2026",
    tag: "Recrutement",
    title: "Devenez Responsable Communication, Engagement et Mobilisation des Fonds",
    excerpt: "La FEDEC entre dans une nouvelle ère et renforce son équipe.",
    image: recrutement.url,
    href: "https://fedec.cm/rejoignez-la-fedec-devenez-responsable-communication-engagement-et-mobilisation-des-fonds/",
  },
  {
    date: "Mai 2026",
    tag: "Publication",
    title: "Rapport annuel 2025",
    excerpt: "Le bilan complet des activités, des résultats et de la gestion financière de la Fondation.",
    image: rapport.url,
    href: "https://fedec.cm/rapport-annuel-2025/",
  },
  {
    date: "8 avril 2026",
    tag: "Appel d’offres",
    title: "Avis d’appel d’offres N°001/26/FEDEC/DIR : construction d’un foyer scolaire",
    excerpt: "Recrutement d’une entreprise expérimentée dans le bâtiment.",
    image: appelOffres.url,
    href: "https://fedec.cm/blog/",
  },
];

export const partners = [
  { name: "MINFOF", logo: pMinfof.url },
  { name: "WWF", logo: pWwf.url },
  { name: "SNH", logo: pSnh.url },
  { name: "BACUDA", logo: pBacuda.url },
  { name: "Partenaire communautaire", logo: pLocal.url },
];

export const timeline = [
  { year: "2001", text: "Création de la FEDEC, trust fund de droit néerlandais, et reconnaissance d’utilité publique par décret présidentiel n° 2001/363. COTCO libère 3,5 millions USD de dotation." },
  { year: "2002", text: "Démarrage des activités du Bureau administratif de la FEDEC à Yaoundé." },
  { year: "2003", text: "Début de la mise en œuvre des composantes conservation et peuples autochtones." },
  { year: "2006", text: "Protocole de partenariat avec la République du Cameroun : droit de siège et avantages douaniers et fiscaux." },
  { year: "2007", text: "Lancement du premier plan d’aménagement du Parc National du Mbam et Djerem." },
  { year: "2012", text: "Validation du plan directeur de la FEDEC." },
  { year: "2014", text: "Le Ministère des Forêts et de la Faune rejoint le Conseil d’Administration." },
  { year: "2025", text: "Adoption d’une vision et d’une mission renouvelées, tournées vers l’économie régénérative." },
  { year: "2026", text: "Lancement du Plan stratégique 2026–2035." },
];

export const values = [
  {
    title: "Intendance régénérative",
    text: "Prendre soin des personnes, de la planète et des cultures autochtones pour que la vie sur terre puisse prospérer.",
  },
  {
    title: "Approche holistique",
    text: "Adopter une mentalité écosystémique qui valorise l’interconnexion entre l’environnement, les communautés et l’économie.",
  },
  {
    title: "Intelligence collective",
    text: "Renforcer l’esprit de communauté et trouver ensemble des solutions innovantes par le dialogue et la collaboration.",
  },
];

export const commitments = [
  { title: "Crédibilité", text: "Respect des lois et règlements, sur les plans national et international." },
  { title: "Expertise", text: "Des équipes formées et des partenaires de mise en œuvre aux compétences avérées." },
  { title: "Transparence", text: "Toute l’information nécessaire sur la gestion des fonds est mise à disposition." },
  { title: "Sécurité", text: "Des fonds sécurisés pour que les résultats attendus soient livrés dans les délais." },
];

/** Preset donation amounts, in FCFA. */
export const DONATION_AMOUNTS = [5000, 10000, 25000, 50000];

export const formatFcfa = (n: number) => `${n.toLocaleString("fr-FR").replace(/\u202f|\u00a0/g, " ")} FCFA`;

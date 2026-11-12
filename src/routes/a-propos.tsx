import { createFileRoute, Link } from "@tanstack/react-router";
import { Handshake, ShieldCheck, Sprout } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import ranger from "@/assets/community-ranger.jpg";
import chimp from "@/assets/project-chimp.jpg";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À propos — Fondation Canopée" },
      { name: "description", content: "Notre mission, notre méthode et nos partenaires : protéger les forêts tropicales avec ceux qui y vivent." },
      { property: "og:title", content: "À propos — Fondation Canopée" },
      { property: "og:description", content: "Notre mission : protéger les forêts tropicales avec ceux qui y vivent." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Handshake, title: "Partenaires locaux", text: "Chaque projet est porté par une organisation du pays, qui connaît le terrain et les communautés." },
  { icon: ShieldCheck, title: "Protection permanente", text: "Nous visons des statuts juridiques durables : parcs nationaux, réserves, titres fonciers autochtones." },
  { icon: Sprout, title: "Efficacité", text: "Nous ciblons les forêts les plus riches et les plus menacées, là où chaque euro compte le plus." },
];

function AboutPage() {
  return (
    <>
      <PageHero eyebrow="Qui sommes-nous" title="Protéger les forêts avec ceux qui y vivent" image={chimp} />
      <section className="mx-auto grid max-w-7xl gap-14 px-5 py-20 md:grid-cols-2 md:items-center lg:px-8">
        <img src={ranger} alt="Ranger communautaire dans la forêt" loading="lazy" width={800} height={960} className="aspect-[5/6] w-full object-cover shadow-card" />
        <div>
          <p className="eyebrow text-forest">Notre mission</p>
          <h2 className="mt-3 text-4xl font-medium leading-tight">Sauver les espèces menacées en protégeant leur habitat</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            La Fondation Canopée finance l’achat et la protection de terres tropicales menacées. Nous travaillons avec des
            partenaires locaux, des peuples autochtones et des gouvernements pour créer des aires protégées durables.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Les forêts protégées restent debout, stockent du carbone et offrent un avenir aux communautés qui en dépendent.
          </p>
        </div>
      </section>
      <section className="bg-forest text-forest-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-3 lg:px-8">
          {values.map((v) => (
            <div key={v.title}>
              <v.icon className="h-10 w-10 text-ember" strokeWidth={1.6} />
              <h3 className="mt-5 text-2xl font-medium">{v.title}</h3>
              <p className="mt-3 text-forest-foreground/80">{v.text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-3xl px-5 py-20 text-center lg:px-8">
        <h2 className="text-4xl font-medium">Prêt·e à agir pour la forêt ?</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button asChild variant="donate" size="xl"><Link to="/don">Faire un don</Link></Button>
          <Button asChild variant="outline-forest" size="xl"><Link to="/projets">Voir les projets</Link></Button>
        </div>
      </section>
    </>
  );
}

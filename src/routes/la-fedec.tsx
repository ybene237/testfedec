import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Eye, Play, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { Partners } from "@/components/site/Partners";
import { commitments, images, ORG, timeline, values } from "@/lib/site-data";

export const Route = createFileRoute("/la-fedec")({
  head: () => ({
    meta: [
      { title: "Qui sommes-nous — La FEDEC" },
      {
        name: "description",
        content:
          "Fondation reconnue d’utilité publique depuis 2001, la FEDEC finance la conservation des aires protégées et l’appui aux peuples autochtones au Cameroun. Vision, mission, valeurs, histoire et gouvernance.",
      },
      { property: "og:title", content: "Qui sommes-nous — La FEDEC" },
      { property: "og:description", content: "Vision, mission, valeurs, histoire et gouvernance de la Fondation pour l’Environnement et le Développement au Cameroun." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const governance = [
  {
    title: "Conseil d’Administration",
    text: "Organe décisionnel de 10 à 13 membres, garant de la vision, de la stratégie et de la bonne gestion des fonds.",
    items: [
      "Comité financier, d’audit et de gestion des risques",
      "Comité stratégique et scientifique",
      "Comité consultatif autochtone",
      "Comités ad hoc",
    ],
  },
  {
    title: "Organes consultatifs",
    text: "Des espaces de dialogue qui relient la FEDEC à ses bailleurs et à l’ensemble des acteurs de la régénération.",
    items: ["Cercle des Bailleurs", "Alliance pour un Cameroun Régénératif"],
  },
  {
    title: "Bureau Exécutif",
    text: "Entité opérationnelle dirigée par la Direction Exécutive, organisée autour des trois piliers du plan stratégique.",
    items: ["Pilier Environnemental", "Pilier Socio-Économique", "Pilier Financements & Collaboration systémique"],
  },
];

function AboutPage() {
  return (
    <>
      <PageHero eyebrow="La FEDEC" title="Une fondation camerounaise au service de la nature et des communautés" image={images.canopy}>
        Reconnue d’utilité publique par décret présidentiel n° 2001/363 du 16 novembre 2001.
      </PageHero>

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <p className="eyebrow text-leaf">Qui sommes-nous</p>
            <h2 className="mt-3 text-3xl font-medium leading-tight md:text-5xl">Plus de 20 ans de gestion de fonds pour la conservation</h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                La Fondation pour l’Environnement et le Développement au Cameroun (FEDEC) est un trust fund de droit
                néerlandais créé en mars 2001 et enregistré à la Chambre de commerce de La Haye. Elle bénéficie d’un droit de
                siège au Cameroun depuis le 26 décembre 2006.
              </p>
              <p>
                Organisation à but non lucratif, elle est issue du Plan de Gestion Environnementale (PGE) du Pipeline
                Tchad-Cameroun, avec le soutien de la Banque mondiale, du Gouvernement du Cameroun et de COTCO. Elle gère des
                fonds de compensation pour la biodiversité et l’appui aux peuples autochtones vulnérables.
              </p>
            </div>
          </div>
          <div className="relative">
            <img src={images.siege} alt="Séance de travail au siège de la FEDEC" loading="lazy" width={600} height={301} className="aspect-[4/3] w-full object-cover shadow-card" />
            <span className="absolute -bottom-4 -left-4 hidden h-20 w-20 bg-leaf sm:block" aria-hidden />
          </div>
        </div>
      </section>

      <section className="bg-forest-deep text-forest-foreground">
        <div className="mx-auto grid max-w-7xl gap-px bg-forest-foreground/10 md:grid-cols-2">
          <div className="bg-forest-deep px-5 py-16 sm:px-10 lg:py-20">
            <Eye className="h-8 w-8 text-leaf-light" />
            <p className="eyebrow mt-4 text-leaf-light">Notre vision</p>
            <p className="mt-4 font-display text-xl leading-snug sm:text-2xl">
              Un Cameroun où les aires protégées, les paysages et les communautés locales et autochtones prospèrent en
              harmonie au sein d’écosystèmes naturels et économiques sains, soutenus par des mécanismes financiers durables
              et souverains.
            </p>
          </div>
          <div className="bg-forest-deep px-5 py-16 sm:px-10 lg:py-20">
            <Target className="h-8 w-8 text-leaf-light" />
            <p className="eyebrow mt-4 text-leaf-light">Notre mission</p>
            <p className="mt-4 font-display text-xl leading-snug sm:text-2xl">
              Financer la conservation et la gestion durable des aires protégées, la régénération et la restauration des
              forêts et des paysages du Cameroun et la transition vers une économie régénérative, au service de la
              biodiversité, du climat et des communautés locales et autochtones.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="eyebrow text-leaf">Nos valeurs</p>
          <h2 className="mt-3 text-3xl font-medium md:text-5xl">Ce qui guide notre action</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {values.map((v, i) => (
              <div key={v.title} className="border-t-4 border-leaf bg-card p-6 shadow-card sm:p-8">
                <span className="font-display text-4xl text-forest/30">0{i + 1}</span>
                <h3 className="mt-2 text-2xl font-medium">{v.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{v.text}</p>
              </div>
            ))}
          </div>
          <h3 className="mt-16 text-2xl font-medium">Nos engagements envers les partenaires</h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {commitments.map((c) => (
              <div key={c.title} className="border-l-4 border-leaf bg-card p-5">
                <p className="eyebrow text-leaf">{c.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="eyebrow text-leaf">Notre histoire</p>
          <h2 className="mt-3 text-3xl font-medium md:text-5xl">De 2001 à aujourd’hui</h2>
          <ol className="relative mt-12 space-y-10 border-l-2 border-forest/20 pl-8 md:ml-4">
            {timeline.map((t) => (
              <li key={t.year} className="relative">
                <span className="absolute -left-[2.6rem] top-1 h-4 w-4 border-4 border-background bg-leaf" aria-hidden />
                <p className="font-display text-3xl font-medium text-leaf">{t.year}</p>
                <p className="mt-2 max-w-3xl text-muted-foreground">{t.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-secondary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="eyebrow text-leaf">Gouvernance</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-medium md:text-5xl">Une gouvernance au service de la transparence</h2>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {governance.map((g) => (
              <div key={g.title} className="bg-card p-6 shadow-card sm:p-8">
                <h3 className="text-2xl font-medium">{g.title}</h3>
                <p className="mt-3 text-muted-foreground">{g.text}</p>
                <ul className="mt-5 space-y-2">
                  {g.items.map((it) => (
                    <li key={it} className="flex gap-3 text-sm">
                      <span className="mt-1.5 h-2 w-2 shrink-0 bg-leaf" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-[2fr_3fr] md:items-center lg:gap-16 lg:px-8 lg:py-24">
          <img src={images.dg} alt="Anne Virginie EDOA, Directeur Exécutif de la FEDEC" loading="lazy" width={700} height={794} className="mx-auto aspect-[7/8] w-full max-w-sm object-cover shadow-card md:max-w-none" />
          <div>
            <p className="eyebrow text-leaf">Mot de la Direction Exécutive</p>
            <blockquote className="mt-4 font-display text-xl leading-snug sm:text-2xl">
              « La FEDEC est une organisation en perpétuelle transformation. Après plus de 19 années d’engagement sur le
              terrain dans le cadre du Plan de Gestion Environnementale du Pipeline Tchad-Cameroun, nous aspirons maintenant
              à partager notre expertise en gestion et suivi des fonds de compensation. »
            </blockquote>
            <p className="mt-6 font-semibold">Anne Virginie EDOA</p>
            <p className="eyebrow text-sm text-muted-foreground">Directeur Exécutif</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="forest" size="lg">
                <Link to="/plan-strategique">Notre plan 2026–2035 <ArrowRight /></Link>
              </Button>
              <Button asChild variant="outline-forest" size="lg">
                <a href={ORG.video} target="_blank" rel="noreferrer"><Play className="fill-current" /> Voir la vidéo</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Partners />
    </>
  );
}

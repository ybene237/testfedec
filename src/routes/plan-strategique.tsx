import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { goals2035, images, ORG, pillars } from "@/lib/site-data";

export const Route = createFileRoute("/plan-strategique")({
  head: () => ({
    meta: [
      { title: "Plan stratégique 2026–2035 — FEDEC" },
      {
        name: "description",
        content:
          "Conserver, Régénérer, Restaurer, Financer : les trois piliers et les objectifs 2035 du plan stratégique de la FEDEC pour une économie régénérative au Cameroun.",
      },
      { property: "og:title", content: "Plan stratégique 2026–2035 — FEDEC" },
      { property: "og:description", content: "Trois piliers et des objectifs chiffrés pour une économie régénérative au service de la nature et des communautés." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PlanPage,
});

const context = [
  { value: "12 M ha", label: "que le Cameroun s’est engagé à restaurer d’ici 2030 (AFR100)" },
  { value: "19", label: "parcs nationaux dans le réseau d’aires protégées du pays" },
  { value: "2012", label: "date de la précédente stratégie de la FEDEC" },
];

function PlanPage() {
  return (
    <>
      <PageHero eyebrow="Plan stratégique 2026 – 2035" title={ORG.tagline} image={images.mangrove}>
        {ORG.slogan}. Un plan co-construit en 2024–2025 avec le programme de mentorat BRIDGE, ses équipes et ses partenaires.
      </PageHero>

      <section className="bg-background py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[3fr_2fr] lg:px-8">
          <div>
            <p className="eyebrow text-leaf">Pourquoi un nouveau plan</p>
            <h2 className="mt-3 text-3xl font-medium leading-tight md:text-5xl">D’un fonds de compensation à un moteur de l’économie régénérative</h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Après plus de vingt ans au service des aires protégées et des peuples autochtones, la FEDEC élargit son action :
              restauration des paysages, écosystèmes marins et côtiers, filières durables et financements innovants. Le plan
              s’inscrit dans les engagements du Cameroun (REDD+, AFR100) et dans une ambition : faire de la nature le socle
              d’une prospérité partagée.
            </p>
            <nav className="mt-8 flex flex-wrap gap-2" aria-label="Piliers">
              {pillars.map((p) => (
                <a key={p.key} href={`#${p.key}`} className="eyebrow border-2 border-forest/25 px-4 py-2 text-xs text-forest hover:border-forest">
                  {p.number} · {p.short}
                </a>
              ))}
            </nav>
          </div>
          <dl className="grid content-start gap-4">
            {context.map((c) => (
              <div key={c.label} className="border-l-4 border-leaf bg-secondary p-5">
                <dt className="font-display text-3xl font-medium text-leaf">{c.value}</dt>
                <dd className="mt-1 text-sm text-muted-foreground">{c.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {pillars.map((p, idx) => (
        <section key={p.key} id={p.key} className={`scroll-mt-28 py-20 lg:py-28 ${idx % 2 === 0 ? "bg-secondary" : "bg-background"}`}>
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className={`grid gap-10 lg:grid-cols-2 lg:items-center ${idx % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <div className="relative aspect-[4/3] overflow-hidden bg-forest-deep">
                <img src={p.image} alt="" loading="lazy" width={1000} height={750} className="h-full w-full object-cover" />
                <span className="absolute left-0 top-0 bg-leaf px-4 py-2 font-display text-2xl text-forest-foreground">{p.number}</span>
              </div>
              <div>
                <p className="eyebrow text-leaf">Pilier {p.number} · {p.short}</p>
                <h2 className="mt-3 text-3xl font-medium leading-tight md:text-4xl">{p.title}</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">{p.text}</p>
                <ul className="mt-6 space-y-3">
                  {p.actions.map((a) => (
                    <li key={a} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 bg-leaf" />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {p.enjeux.map((e) => (
                <div key={e.title} className="bg-card p-6 shadow-card sm:p-8">
                  <h3 className="text-xl font-medium">{e.title}</h3>
                  <p className="eyebrow mt-1 text-xs text-muted-foreground">Objectifs 2035</p>
                  <ul className="mt-4 space-y-3">
                    {e.targets.map((t) => (
                      <li key={t} className="flex gap-3 text-sm leading-relaxed sm:text-base">
                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-leaf" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="relative overflow-hidden bg-forest-deep text-forest-foreground">
        <img src={images.canopy} alt="" loading="lazy" width={1200} height={800} className="absolute inset-0 h-full w-full object-cover opacity-20" />
        <div className="relative mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
          <p className="eyebrow text-leaf-light">Horizon 2035</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-medium leading-tight md:text-5xl">Nos objectifs en un coup d’œil</h2>
          <dl className="mt-12 grid grid-cols-2 gap-px bg-forest-foreground/15 md:grid-cols-3">
            {goals2035.map((g) => (
              <div key={g.label} className="bg-forest-deep p-5 sm:p-8">
                <dt className="font-display text-3xl font-medium text-leaf-light sm:text-5xl">{g.value}</dt>
                <dd className="mt-2 text-sm text-forest-foreground/80 sm:text-base">{g.label}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="donate" size="xl">
              <Link to="/faire-un-don"><Heart className="fill-current" /> Soutenir le plan</Link>
            </Button>
            <Button asChild variant="frame" size="xl">
              <Link to="/contact">Devenir partenaire <ArrowRight /></Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

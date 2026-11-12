import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { formatHectares, projects, stats } from "@/lib/site-data";
import canopy from "@/assets/climate-canopy.jpg";

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Notre impact — Fondation Canopée" },
      { name: "description", content: "Hectares protégés, espèces sauvées et forêts intactes : les résultats de nos projets en Afrique, en Asie et en Amérique latine." },
      { property: "og:title", content: "Notre impact — Fondation Canopée" },
      { property: "og:description", content: "Les résultats de nos projets de conservation dans le monde." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ImpactPage,
});

const milestones = [
  { year: "1998", text: "Première réserve créée dans les forêts côtières du Cameroun." },
  { year: "2008", text: "1 million d’hectares protégés avec 20 partenaires locaux." },
  { year: "2018", text: "Lancement du programme Gardiens de la forêt pour les rangers communautaires." },
  { year: "2026", text: "28 millions d’hectares protégés dans 40 pays." },
];

function ImpactPage() {
  const regions = ["Afrique", "Amérique latine", "Asie"] as const;
  return (
    <>
      <PageHero eyebrow="Notre impact" title="Des forêts protégées, pour toujours" image={canopy}>
        Nous mesurons notre réussite à une seule chose : des forêts qui restent debout.
      </PageHero>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-20 md:grid-cols-3 lg:px-8">
        {stats.map((s) => (
          <div key={s.value} className="border-t-4 border-ember pt-6">
            <p className="font-display text-6xl font-medium text-forest">{s.value}</p>
            <p className="mt-3 text-lg text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <h2 className="text-4xl font-medium">Par région</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {regions.map((r) => {
              const list = projects.filter((p) => p.region === r);
              const total = list.reduce((a, p) => a + p.hectares, 0);
              return (
                <div key={r} className="bg-card p-8 shadow-card">
                  <p className="eyebrow text-ember">{r}</p>
                  <p className="mt-3 font-display text-4xl text-forest">{formatHectares(total)}</p>
                  <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                    {list.map((p) => (
                      <li key={p.slug}>· {p.country} — {p.title}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-20 lg:px-8">
        <h2 className="text-4xl font-medium">Notre histoire en quelques dates</h2>
        <ol className="mt-10 space-y-8 border-l-2 border-leaf pl-8">
          {milestones.map((m) => (
            <li key={m.year} className="relative">
              <span className="absolute -left-[2.6rem] top-2 h-4 w-4 rounded-full bg-ember" />
              <p className="font-display text-3xl text-forest">{m.year}</p>
              <p className="mt-1 text-lg text-muted-foreground">{m.text}</p>
            </li>
          ))}
        </ol>
        <Button asChild variant="donate" size="xl" className="mt-14">
          <Link to="/don">Rejoindre le mouvement</Link>
        </Button>
      </section>
    </>
  );
}

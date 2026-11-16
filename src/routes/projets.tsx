import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { ProjectCard } from "@/components/site/ProjectCard";
import { images, projects, zones, type Axe } from "@/lib/site-data";

export const Route = createFileRoute("/projets")({
  head: () => ({
    meta: [
      { title: "Nos projets — FEDEC" },
      { name: "description", content: "Conservation des parcs nationaux, éducation, santé et développement économique : les projets de la FEDEC au Cameroun." },
      { property: "og:title", content: "Nos projets — FEDEC" },
      { property: "og:description", content: "Les projets de la FEDEC pour la nature et les communautés du Cameroun." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});

const filters = ["Tous", "Environnement", "Social", "Développement"] as const;

function ProjectsPage() {
  const [axe, setAxe] = useState<(typeof filters)[number]>("Tous");
  const list = projects.filter((p) => axe === "Tous" || p.axe === (axe as Axe));

  return (
    <>
      <PageHero eyebrow="Axes d’intervention" title="Nos projets" image={images.savane}>
        Quatre parcs nationaux, environ 826 607 ha, et 120 km de communautés le long de l’axe Kribi – Bipindi – Lolodorf.
      </PageHero>
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="flex flex-wrap gap-8 border-b border-border pb-6">
          <FilterGroup label="Axe" options={filters} value={axe} onChange={setAxe} />
        </div>
        {list.length === 0 ? (
          <p className="py-20 text-center text-muted-foreground">Aucun projet ne correspond à ces filtres.</p>
        ) : (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        )}
      </section>
      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <p className="eyebrow text-forest">Zones d’intervention</p>
          <h2 className="mt-3 text-3xl font-medium md:text-4xl">Les aires protégées appuyées par la FEDEC</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {zones.map((z) => (
              <li key={z.name} className="border-l-4 border-leaf bg-card p-5">
                <p className="font-display text-lg">{z.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">{z.region}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

function FilterGroup<T extends string>({ label, options, value, onChange }: { label: string; options: readonly T[]; value: T; onChange: (v: T) => void }) {
  return (
    <div>
      <p className="eyebrow text-xs text-muted-foreground">{label}</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {options.map((o) => (
          <button
            key={o}
            onClick={() => onChange(o)}
            className={`eyebrow border-2 px-4 py-2 text-xs transition-colors ${
              o === value ? "border-forest bg-forest text-forest-foreground" : "border-border hover:border-forest"
            }`}
          >
            {o}
          </button>
        ))}
      </div>
    </div>
  );
}

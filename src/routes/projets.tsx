import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { ProjectCard } from "@/components/site/ProjectCard";
import { projects } from "@/lib/site-data";
import okapi from "@/assets/project-okapi.jpg";

export const Route = createFileRoute("/projets")({
  head: () => ({
    meta: [
      { title: "Projets urgents — Fondation Canopée" },
      { name: "description", content: "Découvrez les forêts que nous protégeons et les projets qui ont besoin de votre soutien maintenant." },
      { property: "og:title", content: "Projets urgents — Fondation Canopée" },
      { property: "og:description", content: "Les forêts tropicales qui ont besoin de votre soutien maintenant." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});

const filters = ["Tous", "Urgent", "Protégé"] as const;
const regions = ["Toutes", "Afrique", "Amérique latine", "Asie"] as const;

function ProjectsPage() {
  const [status, setStatus] = useState<(typeof filters)[number]>("Tous");
  const [region, setRegion] = useState<(typeof regions)[number]>("Toutes");
  const list = projects.filter(
    (p) => (status === "Tous" || p.status === status) && (region === "Toutes" || p.region === region),
  );

  return (
    <>
      <PageHero eyebrow="Agir maintenant" title="Projets urgents" image={okapi}>
        Chaque projet est mené avec un partenaire local et vise une protection permanente de la forêt.
      </PageHero>
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="flex flex-wrap gap-8 border-b border-border pb-6">
          <FilterGroup label="Statut" options={filters} value={status} onChange={setStatus} />
          <FilterGroup label="Région" options={regions} value={region} onChange={setRegion} />
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

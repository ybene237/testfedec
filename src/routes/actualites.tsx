import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { NewsCard } from "@/components/site/NewsCard";
import { images, news } from "@/lib/site-data";

export const Route = createFileRoute("/actualites")({
  head: () => ({
    meta: [
      { title: "Actualités et publications — FEDEC" },
      {
        name: "description",
        content: "Newsletters, rapports annuels, offres d’emploi et appels d’offres : toute l’actualité de la FEDEC au Cameroun.",
      },
      { property: "og:title", content: "Actualités et publications — FEDEC" },
      { property: "og:description", content: "Suivez les actions de la FEDEC sur le terrain : newsletters, rapports, recrutements et appels d’offres." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: NewsPage,
});

function NewsPage() {
  const tags = ["Tout", ...Array.from(new Set(news.map((n) => n.tag)))];
  const [tag, setTag] = useState("Tout");
  const list = news.filter((n) => tag === "Tout" || n.tag === tag);
  const [featured, ...rest] = list;

  return (
    <>
      <PageHero eyebrow="Actu FEDEC" title="Actualités et publications" image={images.donKribi}>
        Nos nouvelles du terrain, nos rapports et nos opportunités.
      </PageHero>
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="flex gap-2 overflow-x-auto border-b border-border pb-6 [scrollbar-width:none]" role="tablist">
          {tags.map((t) => (
            <button
              key={t}
              role="tab"
              aria-selected={t === tag}
              onClick={() => setTag(t)}
              className={`eyebrow shrink-0 border-2 px-4 py-2 text-xs transition-colors ${
                t === tag ? "border-forest bg-forest text-forest-foreground" : "border-border hover:border-forest"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
        {featured && (
          <a href={featured.href} target="_blank" rel="noreferrer" className="group mt-10 grid gap-6 lg:grid-cols-2 lg:items-center lg:gap-10">
            <div className="overflow-hidden bg-muted">
              <img src={featured.image} alt="" width={1000} height={600} className="aspect-[5/3] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="eyebrow bg-leaf px-2 py-0.5 text-xs text-forest-foreground">{featured.tag}</span>
                <span className="eyebrow text-xs text-muted-foreground">{featured.date}</span>
              </div>
              <h2 className="mt-4 text-3xl font-medium leading-tight group-hover:text-ember md:text-4xl">{featured.title}</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">{featured.excerpt}</p>
              <span className="eyebrow mt-5 inline-block text-sm text-ember underline underline-offset-4">Lire l’article</span>
            </div>
          </a>
        )}
        {rest.length > 0 && (
          <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {rest.map((n) => (
              <NewsCard key={n.title} item={n} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Heart, Play, Quote } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { NewsCard } from "@/components/site/NewsCard";
import { Partners } from "@/components/site/Partners";
import { ProjectCard } from "@/components/site/ProjectCard";
import { goals2035, highlightStats, images, news, ORG, pillars, projects, stats } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FEDEC — Conserver, Régénérer, Restaurer, Financer" },
      {
        name: "description",
        content:
          "Fondation camerounaise reconnue d’utilité publique : la FEDEC finance les aires protégées, la restauration des forêts et une économie régénérative au service des communautés.",
      },
      { property: "og:title", content: "FEDEC — Conserver, Régénérer, Restaurer, Financer" },
      {
        property: "og:description",
        content: "Pour une économie régénérative au service de la nature et des communautés du Cameroun. Plan stratégique 2026–2035.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const words = ["Conserver", "Régénérer", "Restaurer", "Financer"];

function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % words.length), 2600);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-forest-deep text-forest-foreground">
      <img
        src={images.hero}
        alt="Éléphants de forêt dans une forêt camerounaise"
        width={1920}
        height={1088}
        className="absolute inset-0 h-full w-full object-cover object-[70%_center] animate-slow-zoom"
      />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="absolute inset-0 bg-fade-bottom" />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-44 sm:pb-20 lg:px-8 lg:pb-24">
        <p className="eyebrow eyebrow-marker animate-rise">Plan stratégique 2026 – 2035</p>
        <h1 className="mt-6 max-w-4xl text-[2.6rem] font-medium leading-[1.02] text-shadow-soft sm:text-6xl lg:text-7xl xl:text-8xl">
          <span key={i} className="block text-leaf-light animate-word-in">{words[i]}</span>
          <span className="mt-2 block text-2xl leading-snug sm:text-4xl lg:text-5xl">
            pour une économie régénérative au service de la nature et des communautés
          </span>
        </h1>
        <div className="mt-10 flex flex-col gap-3 animate-rise sm:flex-row sm:flex-wrap sm:gap-4">
          <Button asChild variant="donate" size="xl">
            <Link to="/faire-un-don"><Heart className="fill-current" /> Faire un don</Link>
          </Button>
          <Button asChild variant="frame" size="xl">
            <Link to="/plan-strategique">Découvrir notre plan <ArrowRight /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function StatsBand() {
  return (
    <section className="bg-forest-deep text-forest-foreground">
      <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-10 px-5 py-14 sm:grid-cols-3 lg:grid-cols-5 lg:px-8">
        {stats.map((s, idx) => (
          <div key={s.label} className={`border-l-2 border-leaf-light pl-4 ${idx === 4 ? "col-span-2 sm:col-span-1" : ""}`}>
            <dt className="sr-only">{s.label}</dt>
            <dd className="font-display text-3xl font-medium text-leaf-light sm:text-4xl">{s.value}</dd>
            <dd className="mt-1 text-sm text-forest-foreground/70">{s.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function Impact() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="eyebrow text-leaf">Notre impact</p>
            <h2 className="mt-3 text-4xl font-medium leading-tight md:text-5xl">
              Plus de 20 ans au service des aires protégées du Cameroun
            </h2>
          </div>
          <p className="text-base leading-relaxed text-muted-foreground">
            Issue du Plan de Gestion Environnementale du Pipeline Tchad-Cameroun, la FEDEC gère des fonds de compensation
            pour la biodiversité et accompagne les peuples autochtones vulnérables le long de l’axe Kribi – Bipindi – Lolodorf.
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {highlightStats.map((h) => (
            <div key={h.value} className="group relative aspect-[4/5] overflow-hidden bg-forest-deep text-forest-foreground sm:aspect-[16/10] md:aspect-[3/4]">
              <img src={h.image} alt="" loading="lazy" width={800} height={1000} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-card-overlay" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="font-display text-5xl font-medium text-leaf-light lg:text-6xl">{h.value}</p>
                <p className="mt-2 max-w-xs text-base">{h.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PillarTabs() {
  const [active, setActive] = useState(0);
  const p = (pillars[active] ?? pillars[0]) as (typeof pillars)[number];
  return (
    <section className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <p className="eyebrow text-leaf">Nos trois piliers stratégiques</p>
        <h2 className="mt-3 text-4xl font-medium leading-tight md:text-5xl">
          Agir pour{" "}
          <span className="text-forest underline decoration-leaf decoration-4 underline-offset-8">{p.tab}</span>
        </h2>
        <div className="mt-8 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none]" role="tablist">
          {pillars.map((pl, idx) => (
            <button
              key={pl.key}
              role="tab"
              aria-selected={idx === active}
              onClick={() => setActive(idx)}
              className={`eyebrow shrink-0 border-2 px-4 py-3 text-xs transition-colors sm:px-5 sm:text-sm ${
                idx === active ? "border-forest bg-forest text-forest-foreground" : "border-forest/25 text-forest hover:border-forest"
              }`}
            >
              {pl.number} · {pl.short}
            </button>
          ))}
        </div>
        <div key={p.key} className="mt-10 grid gap-10 animate-rise lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden bg-forest-deep">
            <img src={p.image} alt="" loading="lazy" width={1000} height={750} className="h-full w-full object-cover" />
            <span className="absolute left-0 top-0 bg-leaf px-4 py-2 font-display text-2xl text-forest-foreground">{p.number}</span>
          </div>
          <div>
            <h3 className="text-2xl font-medium leading-snug md:text-3xl">{p.title}</h3>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">{p.text}</p>
            <ul className="mt-6 space-y-3">
              {p.actions.map((a) => (
                <li key={a} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 bg-leaf" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
            <Button asChild variant="forest" size="lg" className="mt-8">
              <Link to="/plan-strategique" hash={p.key}>Voir les objectifs 2035 <ArrowRight /></Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Goals() {
  return (
    <section className="relative overflow-hidden bg-forest-deep text-forest-foreground">
      <img src={images.mangrove} alt="" loading="lazy" width={1200} height={800} className="absolute inset-0 h-full w-full object-cover opacity-20" />
      <div className="relative mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <p className="eyebrow text-leaf-light">Horizon 2035</p>
          <h2 className="mt-3 text-4xl font-medium leading-tight md:text-5xl">Des objectifs à la hauteur des enjeux</h2>
        </div>
        <dl className="mt-12 grid grid-cols-2 gap-px bg-forest-foreground/15 md:grid-cols-3">
          {goals2035.map((g) => (
            <div key={g.label} className="bg-forest-deep p-5 sm:p-8">
              <dt className="font-display text-3xl font-medium text-leaf-light sm:text-5xl">{g.value}</dt>
              <dd className="mt-2 text-sm text-forest-foreground/80 sm:text-base">{g.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function ProjectsCarousel() {
  const ref = useRef<HTMLDivElement>(null);
  const scroll = (dir: number) => {
    const el = ref.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow text-leaf">Nos projets</p>
            <h2 className="mt-3 text-4xl font-medium leading-tight md:text-5xl">Sur le terrain, avec les communautés</h2>
          </div>
          <div className="flex gap-2">
            <button onClick={() => scroll(-1)} aria-label="Projets précédents" className="grid h-12 w-12 place-items-center border-2 border-forest text-forest hover:bg-forest hover:text-forest-foreground">
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button onClick={() => scroll(1)} aria-label="Projets suivants" className="grid h-12 w-12 place-items-center border-2 border-forest text-forest hover:bg-forest hover:text-forest-foreground">
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div ref={ref} className="-mx-5 mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 [scrollbar-width:none] lg:mx-0 lg:px-0">
          {projects.map((p) => (
            <div key={p.slug} className="w-[82%] shrink-0 snap-start sm:w-[45%] lg:w-[31.5%]">
              <ProjectCard project={p} />
            </div>
          ))}
        </div>
        <Button asChild variant="outline-forest" size="lg" className="mt-8">
          <Link to="/projets">Tous nos projets <ArrowRight /></Link>
        </Button>
      </div>
    </section>
  );
}

function Director() {
  return (
    <section className="bg-secondary">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-[2fr_3fr] md:items-center lg:gap-16 lg:px-8 lg:py-24">
        <div className="relative mx-auto w-full max-w-sm md:max-w-none">
          <img src={images.dg} alt="Anne Virginie EDOA, Directeur Exécutif de la FEDEC" loading="lazy" width={700} height={794} className="aspect-[7/8] w-full object-cover shadow-card" />
          <span className="absolute -bottom-4 -right-4 hidden h-24 w-24 bg-leaf sm:block" aria-hidden />
        </div>
        <div>
          <Quote className="h-10 w-10 text-leaf" />
          <blockquote className="mt-4 font-display text-2xl leading-snug sm:text-3xl">
            La FEDEC est une organisation en perpétuelle transformation. Après plus de 19 années d’engagement sur le terrain,
            nous aspirons maintenant à partager notre expertise en gestion et suivi des fonds de compensation.
          </blockquote>
          <p className="mt-6 font-semibold">Anne Virginie EDOA</p>
          <p className="eyebrow text-sm text-muted-foreground">Directeur Exécutif</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="forest" size="lg">
              <Link to="/la-fedec">Qui sommes-nous <ArrowRight /></Link>
            </Button>
            <Button asChild variant="outline-forest" size="lg">
              <a href={ORG.video} target="_blank" rel="noreferrer"><Play className="fill-current" /> Voir la vidéo</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function LatestNews() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow text-leaf">Actu FEDEC</p>
            <h2 className="mt-3 text-4xl font-medium leading-tight md:text-5xl">Dernières nouvelles</h2>
          </div>
          <Button asChild variant="outline-forest" size="lg">
            <Link to="/actualites">Toutes les actualités <ArrowRight /></Link>
          </Button>
        </div>
        <div className="mt-12 grid gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {news.slice(0, 3).map((n) => (
            <NewsCard key={n.title} item={n} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <StatsBand />
      <Impact />
      <PillarTabs />
      <Goals />
      <ProjectsCarousel />
      <Director />
      <LatestNews />
      <Partners />
    </>
  );
}

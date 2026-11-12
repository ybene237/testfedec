import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Heart } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Newsletter } from "@/components/site/Newsletter";
import { ProjectCard } from "@/components/site/ProjectCard";
import { news, pillars, projects, stats } from "@/lib/site-data";
import hero from "@/assets/hero-hornbill.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fondation Canopée — Protéger les terres sauvages" },
      {
        name: "description",
        content:
          "Protégez les forêts tropicales pour les espèces, le climat et les communautés. Découvrez nos projets urgents et triplez l’impact de votre don.",
      },
      { property: "og:title", content: "Fondation Canopée — Protéger les terres sauvages" },
      {
        property: "og:description",
        content: "Protégez les forêts tropicales pour les espèces, le climat et les communautés.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const words = ["les espèces", "le climat", "les communautés"];

function Index() {
  return (
    <>
      <Hero />
      <Impact />
      <Pillars />
      <ProjectsCarousel />
      <News />
      <Newsletter />
    </>
  );
}

function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % words.length), 2800);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-forest-deep text-forest-foreground">
      <img
        src={hero}
        alt="Calao rhinocéros perché dans la canopée de Bornéo"
        width={1920}
        height={1088}
        className="absolute inset-0 h-full w-full object-cover animate-slow-zoom"
      />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="absolute inset-0 bg-fade-bottom" />

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-24 pt-36 lg:px-8">
        <p className="font-label text-lg font-medium tracking-wide text-forest-foreground/80">
          Protéger les terres sauvages pour{" "}
          <span key={i} className="inline-block font-display text-2xl italic text-ember animate-word-in">
            {words[i]}
          </span>
        </p>

        <p className="eyebrow eyebrow-marker mt-14 animate-rise">Triplez votre impact</p>
        <h1 className="mt-6 max-w-2xl text-5xl font-medium leading-[1.04] text-shadow-soft animate-rise md:text-7xl">
          Stopper l’expansion du palmier à huile au cœur de Bornéo
        </h1>
        <p className="mt-6 max-w-xl text-lg text-forest-foreground/85 animate-rise">
          Jusqu’au 31 décembre, chaque euro donné est triplé par nos mécènes pour protéger 48 000 hectares de forêt primaire.
        </p>
        <div className="mt-10 flex flex-wrap gap-4 animate-rise">
          <Button asChild variant="donate" size="xl">
            <Link to="/don">
              <Heart className="fill-current" /> Tripler mon don
            </Link>
          </Button>
          <Button asChild variant="frame" size="xl">
            <Link to="/projets">Projets urgents</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function Impact() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-end">
        <div>
          <p className="eyebrow text-forest">Notre impact</p>
          <h2 className="mt-3 text-4xl font-medium leading-tight md:text-5xl">
            Préserver les habitats essentiels partout sur la planète
          </h2>
        </div>
        <div>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Depuis 1998, nous montrons que protéger l’habitat est le moyen le plus efficace de sauver les espèces. Nous
            travaillons avec des partenaires locaux pour sécuriser les forêts les plus précieuses.
          </p>
          <Button asChild variant="outline-forest" size="lg" className="mt-6">
            <Link to="/impact">
              Voir notre impact mondial <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>

      <p className="eyebrow mt-16 text-muted-foreground">Le saviez-vous ?</p>
      <ul className="mt-5 grid gap-6 md:grid-cols-3">
        {stats.map((s) => (
          <li key={s.value} className="group relative aspect-[7/6] overflow-hidden bg-forest-deep text-forest-foreground shadow-card">
            <img src={s.image} alt="" loading="lazy" width={800} height={700} className="absolute inset-0 h-full w-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-card-overlay" />
            <div className="absolute inset-x-0 bottom-0 p-7">
              <p className="font-display text-6xl font-medium text-ember">{s.value}</p>
              <p className="mt-2 max-w-[16rem] text-forest-foreground/90">{s.label}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Pillars() {
  const [active, setActive] = useState(0);
  const p = pillars[active] ?? pillars[0];
  return (
    <section className="bg-forest text-forest-foreground">
      <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="flex flex-wrap items-baseline gap-x-8 gap-y-4">
          <h2 className="text-4xl font-medium md:text-5xl">Soutenez notre action pour</h2>
          <div role="tablist" className="flex gap-6">
            {pillars.map((pl, idx) => (
              <button
                key={pl.key}
                role="tab"
                aria-selected={idx === active}
                onClick={() => setActive(idx)}
                className={`border-b-2 pb-1 font-display text-3xl italic transition-colors md:text-4xl ${
                  idx === active ? "border-ember text-ember" : "border-transparent text-forest-foreground/50 hover:text-forest-foreground"
                }`}
              >
                {pl.tab}
              </button>
            ))}
          </div>
        </div>

        <div key={p.key} className="mt-14 grid gap-12 md:grid-cols-2 md:items-center animate-rise">
          <img src={p.image} alt={p.title} loading="lazy" width={800} height={960} className="aspect-[5/6] w-full object-cover shadow-card" />
          <div>
            <p className="eyebrow text-leaf">Impact mondial</p>
            <h3 className="mt-3 text-4xl font-medium leading-tight">{p.title}</h3>
            <p className="mt-6 text-lg leading-relaxed text-forest-foreground/80">{p.text}</p>
            <Button asChild variant="frame" size="lg" className="mt-8">
              <Link to="/a-propos">En savoir plus</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectsCarousel() {
  const ref = useRef<HTMLDivElement>(null);
  const scroll = (dir: 1 | -1) => ref.current?.scrollBy({ left: dir * ref.current.clientWidth * 0.8, behavior: "smooth" });
  return (
    <section className="bg-forest-deep py-24 text-forest-foreground">
      <div className="mx-auto flex max-w-7xl items-end justify-between gap-6 px-5 lg:px-8">
        <div>
          <p className="eyebrow text-ember">Sur le terrain</p>
          <h2 className="mt-3 text-4xl font-medium md:text-5xl">Nos projets de conservation</h2>
        </div>
        <div className="flex gap-2">
          <button onClick={() => scroll(-1)} aria-label="Projets précédents" className="grid h-12 w-12 place-items-center border-2 border-forest-foreground/30 hover:border-ember hover:text-ember">
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button onClick={() => scroll(1)} aria-label="Projets suivants" className="grid h-12 w-12 place-items-center border-2 border-forest-foreground/30 hover:border-ember hover:text-ember">
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
      <div ref={ref} className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 lg:px-[max(2rem,calc((100vw-80rem)/2+2rem))]">
        {projects.map((p) => (
          <div key={p.slug} className="w-[82vw] shrink-0 snap-start sm:w-[22rem]">
            <ProjectCard project={p} />
          </div>
        ))}
      </div>
    </section>
  );
}

function News() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <p className="eyebrow text-forest">Actualités</p>
      <h2 className="mt-3 text-4xl font-medium md:text-5xl">Nouvelles de la forêt</h2>
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {news.map((n) => (
          <article key={n.title} className="group">
            <div className="overflow-hidden">
              <img src={n.image} alt="" loading="lazy" width={800} height={572} className="aspect-[7/5] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="mt-5 flex items-center gap-3">
              <span className="eyebrow text-xs text-ember-foreground bg-ember px-2 py-0.5">{n.tag}</span>
              <span className="eyebrow text-xs text-muted-foreground">{n.date}</span>
            </div>
            <h3 className="mt-3 text-2xl font-medium leading-snug group-hover:text-forest">{n.title}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}

import type { NewsItem } from "@/lib/site-data";

export function NewsCard({ item }: { item: NewsItem }) {
  return (
    <article className="group">
      <a href={item.href} target="_blank" rel="noreferrer" className="block">
        <div className="overflow-hidden bg-muted">
          <img
            src={item.image}
            alt=""
            loading="lazy"
            width={1000}
            height={600}
            className="aspect-[5/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <span className="eyebrow bg-leaf px-2 py-0.5 text-xs text-forest-foreground">{item.tag}</span>
          <span className="eyebrow text-xs text-muted-foreground">{item.date}</span>
        </div>
        <h3 className="mt-3 text-xl font-medium leading-snug group-hover:text-ember sm:text-2xl">{item.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.excerpt}</p>
        <span className="eyebrow mt-3 inline-block text-xs text-ember underline underline-offset-4">Lire l’article</span>
      </a>
    </article>
  );
}

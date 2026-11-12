import { partners } from "@/lib/site-data";

export function Partners() {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-5 py-12 md:flex-row md:justify-between lg:px-8">
        <p className="eyebrow text-center text-muted-foreground md:text-left">Ils nous font confiance</p>
        <ul className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          {partners.map((p) => (
            <li key={p.name}>
              <img src={p.logo} alt={p.name} loading="lazy" width={90} height={88} className="h-14 w-auto grayscale transition hover:grayscale-0 sm:h-16" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

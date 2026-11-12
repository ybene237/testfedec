import type { ReactNode } from "react";

export function PageHero({ eyebrow, title, image, children }: { eyebrow: string; title: string; image: string; children?: ReactNode }) {
  return (
    <section className="relative flex min-h-[62vh] items-end overflow-hidden bg-forest-deep text-forest-foreground">
      <img src={image} alt="" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover animate-slow-zoom" />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="absolute inset-0 bg-fade-bottom" />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-32 lg:px-8">
        <p className="eyebrow eyebrow-marker animate-rise">{eyebrow}</p>
        <h1 className="mt-6 max-w-3xl text-5xl font-medium leading-[1.05] text-shadow-soft animate-rise md:text-6xl">{title}</h1>
        {children && <div className="mt-6 max-w-2xl text-lg text-forest-foreground/85 animate-rise">{children}</div>}
      </div>
    </section>
  );
}

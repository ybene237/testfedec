import { ArrowUpRight, MapPin } from "lucide-react";
import type { Project } from "@/lib/site-data";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      className="group relative block aspect-[4/5] overflow-hidden bg-forest-deep shadow-card"
    >
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        width={800}
        height={1000}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-card-overlay" />
      <div className="absolute left-0 top-0 flex max-w-[85%] items-center gap-2 bg-forest-deep/85 px-4 py-2 text-forest-foreground">
        <MapPin className="h-4 w-4 shrink-0 text-leaf-light" />
        <span className="eyebrow truncate text-xs">{project.location}</span>
      </div>
      <div className="absolute inset-x-0 bottom-0 p-5 text-forest-foreground sm:p-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="eyebrow bg-leaf px-2 py-1 text-xs text-forest-foreground">{project.axe}</span>
          {project.surface && <span className="eyebrow text-xs text-forest-foreground/75">{project.surface}</span>}
        </div>
        <h3 className="mt-3 text-xl font-medium leading-tight transition-colors group-hover:text-leaf-light sm:text-2xl">
          {project.title}
          <ArrowUpRight className="ml-1 inline h-5 w-5 opacity-0 transition-opacity group-hover:opacity-100" />
        </h3>
      </div>
    </a>
  );
}

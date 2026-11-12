import { Link } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { formatHectares, type Project } from "@/lib/site-data";

export function ProjectCard({ project }: { project: Project }) {
  const urgent = project.status === "Urgent";
  return (
    <Link
      to="/don"
      className="group relative block aspect-[4/5] overflow-hidden bg-forest-deep shadow-card"
    >
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        width={1008}
        height={720}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-card-overlay" />
      <div className="absolute left-0 top-0 flex items-center gap-2 bg-forest-deep/85 px-4 py-2 text-forest-foreground">
        <MapPin className="h-4 w-4 text-ember" />
        <span className="eyebrow text-xs">{project.country}</span>
      </div>
      <div className="absolute inset-x-0 bottom-0 p-6 text-forest-foreground">
        <div className="flex items-center gap-3">
          <span className={`eyebrow px-2 py-1 text-xs ${urgent ? "bg-ember text-ember-foreground" : "bg-leaf text-ember-foreground"}`}>
            {project.status}
          </span>
          <span className="eyebrow text-xs text-forest-foreground/70">{project.year}</span>
          <span className="eyebrow text-xs text-forest-foreground/70">· {formatHectares(project.hectares)}</span>
        </div>
        <h3 className="mt-3 text-2xl font-medium leading-tight transition-colors group-hover:text-ember">
          {project.title}
        </h3>
      </div>
    </Link>
  );
}

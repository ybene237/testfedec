import { Link } from "@tanstack/react-router";
import { images } from "@/lib/site-data";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-3 text-forest-foreground" aria-label="FEDEC — accueil">
      <span className="grid shrink-0 place-items-center bg-card p-1.5">
        <img src={images.logo} alt="Logo FEDEC" width={120} height={154} className="h-10 w-auto sm:h-12" />
      </span>
      {!compact && (
        <span className="hidden flex-col leading-tight sm:flex">
          <span className="font-display text-sm font-semibold tracking-wide md:text-base">Fondation pour l’Environnement</span>
          <span className="font-display text-sm font-semibold tracking-wide md:text-base">et le Développement au Cameroun</span>
        </span>
      )}
    </Link>
  );
}

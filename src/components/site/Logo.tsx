import { Link } from "@tanstack/react-router";
import { Leaf } from "lucide-react";

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3 text-forest-foreground" aria-label="Fondation Canopée — accueil">
      <span className="grid h-11 w-11 place-items-center bg-ember text-ember-foreground">
        <Leaf className="h-6 w-6" strokeWidth={2.2} />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-2xl font-semibold tracking-wide">CANOPÉE</span>
        <span className="font-label text-[0.65rem] uppercase tracking-[0.42em] text-forest-muted">
          Fondation
        </span>
      </span>
    </Link>
  );
}

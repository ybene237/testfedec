import { Link, useRouterState } from "@tanstack/react-router";
import { Heart } from "lucide-react";

export function FloatingDonate() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  if (path === "/don") return null;
  return (
    <Link
      to="/don"
      className="fixed right-0 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-3 bg-ember px-3 py-5 text-ember-foreground shadow-ember transition-transform hover:-translate-x-1 md:flex"
    >
      <span className="eyebrow [writing-mode:vertical-rl] rotate-180">Faire un don</span>
      <Heart className="h-4 w-4 fill-current" />
    </Link>
  );
}

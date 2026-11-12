import { Link, useRouterState } from "@tanstack/react-router";
import { Heart } from "lucide-react";

export function FloatingDonate() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  if (path === "/faire-un-don") return null;
  return (
    <>
      <Link
        to="/faire-un-don"
        className="fixed right-0 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-3 bg-ember px-3 py-5 text-ember-foreground shadow-ember transition-transform hover:-translate-x-1 lg:flex"
      >
        <span className="eyebrow rotate-180 [writing-mode:vertical-rl]">Faire un don</span>
        <Heart className="h-4 w-4 fill-current" />
      </Link>
      <Link
        to="/faire-un-don"
        aria-label="Faire un don"
        className="fixed bottom-4 right-4 z-40 flex items-center gap-2 rounded-full bg-ember px-5 py-3 text-ember-foreground shadow-ember lg:hidden"
      >
        <Heart className="h-4 w-4 fill-current" />
        <span className="eyebrow text-xs">Don</span>
      </Link>
    </>
  );
}

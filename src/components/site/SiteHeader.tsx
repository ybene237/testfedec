import { Link } from "@tanstack/react-router";
import { Heart, Megaphone, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { announcement } from "@/lib/site-data";
import { Logo } from "./Logo";

export const navItems = [
  { to: "/la-fedec", label: "La FEDEC" },
  { to: "/plan-strategique", label: "Plan stratégique" },
  { to: "/projets", label: "Projets" },
  { to: "/actualites", label: "Actualités" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <Link
        to="/actualites"
        className="flex items-center justify-center gap-2 bg-ember px-4 py-2 text-center text-ember-foreground transition-colors hover:brightness-105"
      >
        <Megaphone className="hidden h-4 w-4 shrink-0 sm:block" />
        <span className="eyebrow truncate text-[0.7rem] sm:text-xs">
          {announcement.label}
          <span className="hidden md:inline"> — {announcement.text}</span>
        </span>
        <span className="eyebrow shrink-0 text-[0.7rem] underline underline-offset-4 sm:text-xs">Lire</span>
      </Link>
      <div
        className={`transition-colors duration-300 ${
          scrolled ? "bg-forest-deep/95 backdrop-blur" : "bg-forest-deep/50 backdrop-blur-[2px]"
        }`}
      >
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 py-2 sm:px-5 lg:px-8">
          <Logo />
          <nav className="hidden items-center gap-6 lg:flex xl:gap-8" aria-label="Navigation principale">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="font-label text-sm font-semibold uppercase tracking-[0.14em] text-forest-foreground/85 transition-colors hover:text-ember"
                activeProps={{ className: "text-ember" }}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild variant="donate" size="lg">
              <Link to="/faire-un-don">
                <Heart className="fill-current" /> Faire un don
              </Link>
            </Button>
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <button className="grid h-11 w-11 place-items-center text-forest-foreground lg:hidden" aria-label="Ouvrir le menu">
                <Menu className="h-7 w-7" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85vw] max-w-sm border-none bg-forest-deep text-forest-foreground">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <div className="mt-12 flex flex-col gap-5 px-2">
                {navItems.map((item) => (
                  <SheetClose asChild key={item.to}>
                    <Link to={item.to} className="font-display text-3xl hover:text-ember" activeProps={{ className: "text-ember" }}>
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Button asChild variant="donate" size="xl" className="mt-4">
                    <Link to="/faire-un-don">
                      <Heart className="fill-current" /> Faire un don
                    </Link>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

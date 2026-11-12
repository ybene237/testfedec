import { Link } from "@tanstack/react-router";
import { Heart, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Logo } from "./Logo";

const nav = [
  { to: "/projets", label: "Projets urgents" },
  { to: "/impact", label: "Notre impact" },
  { to: "/a-propos", label: "À propos" },
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
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-forest-deep/95 backdrop-blur" : "bg-forest-deep/40 backdrop-blur-[2px]"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-5 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
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
            <Link to="/don">
              <Heart className="fill-current" /> Faire un don
            </Link>
          </Button>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <button className="text-forest-foreground md:hidden" aria-label="Ouvrir le menu">
              <Menu className="h-7 w-7" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="border-none bg-forest-deep text-forest-foreground">
            <SheetTitle className="sr-only">Menu</SheetTitle>
            <div className="mt-12 flex flex-col gap-6 px-2">
              {nav.map((item) => (
                <Link key={item.to} to={item.to} className="font-display text-3xl hover:text-ember">
                  {item.label}
                </Link>
              ))}
              <Button asChild variant="donate" size="xl" className="mt-4">
                <Link to="/don">
                  <Heart className="fill-current" /> Faire un don
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

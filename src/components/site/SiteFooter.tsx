import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="bg-forest-deep text-forest-foreground/80">
      <div className="mx-auto grid max-w-7xl gap-12 border-t border-forest-foreground/10 px-5 py-16 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-6 max-w-sm text-sm leading-relaxed">
            Depuis 1998, nous protégeons les forêts tropicales les plus menacées de la planète, main dans la main avec les
            communautés locales et nos partenaires sur le terrain.
          </p>
        </div>
        <div>
          <p className="eyebrow text-ember">Explorer</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/projets" className="hover:text-ember">Projets urgents</Link></li>
            <li><Link to="/impact" className="hover:text-ember">Notre impact</Link></li>
            <li><Link to="/a-propos" className="hover:text-ember">À propos</Link></li>
            <li><Link to="/don" className="hover:text-ember">Faire un don</Link></li>
          </ul>
        </div>
        <div>
          <p className="eyebrow text-ember">Contact</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>contact@fondation-canopee.org</li>
            <li>+237 6 00 00 00 00</li>
            <li>Douala, Cameroun</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-forest-foreground/10 px-5 py-6 text-center text-xs text-forest-foreground/50">
        © {new Date().getFullYear()} Fondation Canopée. 100 % des dons affectés aux projets de terrain.
      </div>
    </footer>
  );
}

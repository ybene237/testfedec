import { Link } from "@tanstack/react-router";
import { Facebook, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { ORG } from "@/lib/site-data";
import { Logo } from "./Logo";
import { navItems } from "./SiteHeader";

export function SiteFooter() {
  return (
    <footer className="bg-forest-deep pb-20 text-forest-foreground/80 lg:pb-0">
      <div className="mx-auto grid max-w-7xl gap-12 border-t border-forest-foreground/10 px-5 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="sm:col-span-2">
          <Logo />
          <p className="mt-6 max-w-md text-sm leading-relaxed">
            Mécanisme de financement environnemental reconnu d’utilité publique au Cameroun depuis 2001.{" "}
            <span className="italic text-forest-foreground">{ORG.slogan}</span> : {ORG.tagline.toLowerCase()}.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { href: ORG.social.facebook, label: "Facebook", Icon: Facebook },
              { href: ORG.social.linkedin, label: "LinkedIn", Icon: Linkedin },
              { href: ORG.social.x, label: "X (Twitter)", Icon: Twitter },
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="grid h-10 w-10 place-items-center border border-forest-foreground/20 transition-colors hover:border-ember hover:bg-ember hover:text-ember-foreground"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="eyebrow text-leaf-light">Explorer</p>
          <ul className="mt-4 space-y-2 text-sm">
            {navItems.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="hover:text-forest-foreground hover:underline underline-offset-4">{n.label}</Link>
              </li>
            ))}
            <li><Link to="/faire-un-don" className="hover:text-forest-foreground hover:underline underline-offset-4">Faire un don</Link></li>
          </ul>
        </div>
        <div>
          <p className="eyebrow text-leaf-light">Nous joindre</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-2"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-leaf-light" /><a href={ORG.phoneHref} className="hover:text-forest-foreground hover:underline underline-offset-4">{ORG.phone}</a></li>
            <li className="flex gap-2"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-leaf-light" /><a href={`mailto:${ORG.email}`} className="hover:text-forest-foreground hover:underline underline-offset-4">{ORG.email}</a></li>
            <li className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-leaf-light" />{ORG.address}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-forest-foreground/10 px-5 py-6 text-center text-xs text-forest-foreground/50">
        © {new Date().getFullYear()} FEDEC — {ORG.name}. Tous droits réservés.
      </div>
    </footer>
  );
}

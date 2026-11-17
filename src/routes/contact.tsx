import { createFileRoute } from "@tanstack/react-router";
import { Facebook, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { images, ORG } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — FEDEC" },
      { name: "description", content: "Contactez la FEDEC à Yaoundé – Messa : téléphone, e-mail, adresse et formulaire de contact." },
      { property: "og:title", content: "Contact — FEDEC" },
      { property: "og:description", content: "Une question, un projet de partenariat ? Écrivez à la Fondation pour l’Environnement et le Développement au Cameroun." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const subjects = ["Partenariat", "Don ou parrainage", "Recrutement", "Appel d’offres", "Presse", "Autre"];
const field =
  "h-12 w-full border-2 border-border bg-background px-4 text-foreground placeholder:text-muted-foreground focus:border-forest focus:outline-none";

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero eyebrow="Contact" title="Parlons de l’avenir des forêts du Cameroun" image={images.reunion}>
        Partenaires, bailleurs, communautés, journalistes : notre équipe vous répond.
      </PageHero>
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[2fr_3fr] lg:px-8 lg:py-24">
        <div>
          <p className="eyebrow text-leaf">Nos coordonnées</p>
          <h2 className="mt-3 text-3xl font-medium md:text-4xl">Siège de la FEDEC</h2>
          <ul className="mt-8 space-y-6">
            <li className="flex gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center bg-forest text-forest-foreground"><MapPin className="h-5 w-5" /></span>
              <div><p className="eyebrow text-xs text-muted-foreground">Adresse</p><p className="mt-1">{ORG.address}</p></div>
            </li>
            <li className="flex gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center bg-forest text-forest-foreground"><Phone className="h-5 w-5" /></span>
              <div><p className="eyebrow text-xs text-muted-foreground">Téléphone</p><a href={ORG.phoneHref} className="mt-1 block hover:text-ember">{ORG.phone}</a></div>
            </li>
            <li className="flex gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center bg-forest text-forest-foreground"><Mail className="h-5 w-5" /></span>
              <div><p className="eyebrow text-xs text-muted-foreground">E-mail</p><a href={`mailto:${ORG.email}`} className="mt-1 block break-all hover:text-ember">{ORG.email}</a></div>
            </li>
          </ul>
          <div className="mt-8 flex gap-3">
            {[
              { href: ORG.social.facebook, label: "Facebook", Icon: Facebook },
              { href: ORG.social.linkedin, label: "LinkedIn", Icon: Linkedin },
              { href: ORG.social.x, label: "X (Twitter)", Icon: Twitter },
            ].map(({ href, label, Icon }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="grid h-11 w-11 place-items-center border-2 border-forest text-forest hover:bg-forest hover:text-forest-foreground">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <div className="mt-10 aspect-[4/3] w-full overflow-hidden bg-muted">
            <iframe
              title="Plan d’accès : Messa, Yaoundé"
              src="https://www.google.com/maps?q=Messa,+Yaound%C3%A9,+Cameroun&output=embed"
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="bg-secondary p-6 sm:p-10">
          {sent ? (
            <div className="py-16 text-center">
              <p className="font-display text-3xl">Merci pour votre message !</p>
              <p className="mt-3 text-muted-foreground">Notre équipe vous répondra dans les meilleurs délais.</p>
              <Button variant="outline-forest" size="lg" className="mt-8" onClick={() => setSent(false)}>Envoyer un autre message</Button>
            </div>
          ) : (
            <form
              className="grid gap-5 sm:grid-cols-2"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
                toast.success("Message envoyé. Merci !");
              }}
            >
              <h2 className="text-2xl font-medium sm:col-span-2 md:text-3xl">Écrivez-nous</h2>
              <label className="grid gap-2">
                <span className="eyebrow text-xs">Nom complet *</span>
                <input required name="name" autoComplete="name" className={field} />
              </label>
              <label className="grid gap-2">
                <span className="eyebrow text-xs">Organisation</span>
                <input name="org" autoComplete="organization" className={field} />
              </label>
              <label className="grid gap-2">
                <span className="eyebrow text-xs">E-mail *</span>
                <input required type="email" name="email" autoComplete="email" className={field} />
              </label>
              <label className="grid gap-2">
                <span className="eyebrow text-xs">Téléphone</span>
                <input type="tel" name="phone" autoComplete="tel" className={field} />
              </label>
              <label className="grid gap-2 sm:col-span-2">
                <span className="eyebrow text-xs">Objet *</span>
                <select required name="subject" defaultValue="" className={field}>
                  <option value="" disabled>Choisir un objet</option>
                  {subjects.map((s) => <option key={s}>{s}</option>)}
                </select>
              </label>
              <label className="grid gap-2 sm:col-span-2">
                <span className="eyebrow text-xs">Message *</span>
                <textarea required name="message" rows={6} className={`${field} h-auto py-3`} />
              </label>
              <Button type="submit" variant="donate" size="xl" className="sm:col-span-2 sm:justify-self-start">Envoyer le message</Button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}

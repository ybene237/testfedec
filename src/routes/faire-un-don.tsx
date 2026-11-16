import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, Heart, Sprout, TreePine } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { images, ORG } from "@/lib/site-data";

export const Route = createFileRoute("/faire-un-don")({
  head: () => ({
    meta: [
      { title: "Faire un don — FEDEC" },
      {
        name: "description",
        content: "Soutenez la FEDEC : protégez les forêts du Cameroun, restaurez les paysages et accompagnez les communautés locales et autochtones.",
      },
      { property: "og:title", content: "Faire un don — FEDEC" },
      { property: "og:description", content: "Chaque don aide à conserver, régénérer et restaurer la nature du Cameroun, avec et pour les communautés." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DonatePage,
});

export const DONATION_AMOUNTS = [5000, 10000, 25000, 50000];
const fcfa = (n: number) => `${n.toLocaleString("fr-FR").replace(/\u202f|\u00a0/g, " ")} FCFA`;

const uses = [
  { Icon: TreePine, title: "Protéger", text: "Appui aux éco-gardiens et au suivi écologique des parcs nationaux." },
  { Icon: Sprout, title: "Restaurer", text: "Pépinières, reboisement et agroforesterie avec les communautés." },
  { Icon: BookOpen, title: "Accompagner", text: "Éducation et santé des enfants Bakola/Bagyeli, parrainage d’élèves." },
];

function DonatePage() {
  const [freq, setFreq] = useState<"once" | "monthly">("once");
  const [amount, setAmount] = useState<number>(DONATION_AMOUNTS[1] ?? 10000);
  const [custom, setCustom] = useState("");
  const [done, setDone] = useState(false);
  const value = custom ? Number(custom) : amount;

  return (
    <section className="relative min-h-screen overflow-hidden bg-forest-deep pb-20 pt-36 text-forest-foreground lg:pt-44">
      <img src={images.enfants} alt="" width={800} height={550} className="absolute inset-0 h-full w-full object-cover opacity-30" />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:items-start lg:px-8">
        <div>
          <p className="eyebrow eyebrow-marker">Faire un don</p>
          <h1 className="mt-6 text-4xl font-medium leading-[1.05] text-shadow-soft sm:text-5xl md:text-6xl">
            Agissez pour la nature et les communautés du Cameroun
          </h1>
          <p className="mt-6 max-w-xl text-lg text-forest-foreground/85">
            Votre soutien finance directement nos actions de conservation, de restauration et d’appui aux peuples autochtones.
          </p>
          <ul className="mt-10 space-y-5">
            {uses.map(({ Icon, title, text }) => (
              <li key={title} className="flex gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center bg-ember text-ember-foreground"><Icon className="h-5 w-5" /></span>
                <div>
                  <p className="eyebrow text-leaf">{title}</p>
                  <p className="mt-1 text-forest-foreground/85">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-background p-6 text-foreground shadow-card sm:p-10">
          {done ? (
            <div className="py-12 text-center">
              <Heart className="mx-auto h-12 w-12 fill-ember text-ember" />
              <p className="mt-6 font-display text-3xl">Merci pour votre générosité !</p>
              <p className="mt-3 text-muted-foreground">
                Votre promesse de don de <strong className="text-foreground">{fcfa(value)}</strong>
                {freq === "monthly" ? " par mois" : ""} est bien enregistrée. Notre équipe vous contactera pour finaliser le versement.
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                Une question ? <a className="text-forest underline" href={ORG.phoneHref}>{ORG.phone}</a> · <a className="text-forest underline" href={`mailto:${ORG.email}`}>{ORG.email}</a>
              </p>
              <Button variant="outline-forest" size="lg" className="mt-8" onClick={() => setDone(false)}>Faire un autre don</Button>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (!value || value < 500) return;
                setDone(true);
              }}
            >
              <div className="grid grid-cols-2 border-2 border-forest">
                {([
                  ["once", "Don ponctuel"],
                  ["monthly", "Don mensuel"],
                ] as const).map(([k, label]) => (
                  <button
                    key={k}
                    type="button"
                    onClick={() => setFreq(k)}
                    aria-pressed={freq === k}
                    className={`eyebrow py-3 text-sm transition-colors ${freq === k ? "bg-forest text-forest-foreground" : "text-forest hover:bg-secondary"}`}
                  >
                    {label}
                  </button>
                ))}
              </div>
              <p className="eyebrow mt-8 text-xs text-muted-foreground">Choisissez un montant</p>
              <div className="mt-3 grid grid-cols-2 gap-3">
                {DONATION_AMOUNTS.map((a) => (
                  <button
                    key={a}
                    type="button"
                    onClick={() => { setAmount(a); setCustom(""); }}
                    aria-pressed={!custom && amount === a}
                    className={`border-2 px-3 py-4 font-display text-lg transition-colors sm:text-xl ${
                      !custom && amount === a ? "border-ember bg-ember text-ember-foreground" : "border-border hover:border-forest"
                    }`}
                  >
                    {fcfa(a)}
                  </button>
                ))}
              </div>
              <label className="mt-4 grid gap-2">
                <span className="eyebrow text-xs text-muted-foreground">Autre montant (FCFA)</span>
                <input
                  type="number"
                  min={500}
                  step={500}
                  inputMode="numeric"
                  value={custom}
                  onChange={(e) => setCustom(e.target.value)}
                  placeholder="Ex. 15 000"
                  className="h-12 w-full border-2 border-border bg-background px-4 focus:border-forest focus:outline-none"
                />
              </label>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2">
                  <span className="eyebrow text-xs text-muted-foreground">Nom complet *</span>
                  <input required autoComplete="name" className="h-12 w-full border-2 border-border bg-background px-4 focus:border-forest focus:outline-none" />
                </label>
                <label className="grid gap-2">
                  <span className="eyebrow text-xs text-muted-foreground">E-mail *</span>
                  <input required type="email" autoComplete="email" className="h-12 w-full border-2 border-border bg-background px-4 focus:border-forest focus:outline-none" />
                </label>
              </div>
              <Button type="submit" variant="donate" size="xl" className="mt-8 w-full">
                <Heart className="fill-current" /> Donner {value ? fcfa(value) : ""}{freq === "monthly" ? " / mois" : ""}
              </Button>
              <p className="mt-4 text-center text-xs text-muted-foreground">
                Vous préférez un virement ou un partenariat ? <Link to="/contact" className="text-forest underline">Contactez-nous</Link>.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

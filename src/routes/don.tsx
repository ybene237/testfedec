import { createFileRoute } from "@tanstack/react-router";
import { Heart, Lock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import hero from "@/assets/hero-hornbill.jpg";

export const Route = createFileRoute("/don")({
  head: () => ({
    meta: [
      { title: "Faire un don — Fondation Canopée" },
      { name: "description", content: "Votre don protège les forêts tropicales, les espèces menacées et les communautés locales. Jusqu’au 31 décembre, il est triplé." },
      { property: "og:title", content: "Faire un don — Fondation Canopée" },
      { property: "og:description", content: "Votre don protège les forêts tropicales. Jusqu’au 31 décembre, il est triplé." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DonatePage,
});

const presets = [25, 50, 100, 250];

function DonatePage() {
  const [frequency, setFrequency] = useState<"once" | "monthly">("once");
  const [amount, setAmount] = useState<number>(50);
  const [custom, setCustom] = useState("");
  const value = custom ? Number(custom) || 0 : amount;

  return (
    <section className="relative min-h-screen overflow-hidden bg-forest-deep pt-20 text-forest-foreground">
      <img src={hero} alt="" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover opacity-40" />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-2 lg:items-center lg:px-8">
        <div>
          <p className="eyebrow eyebrow-marker">Triplez votre impact</p>
          <h1 className="mt-6 text-5xl font-medium leading-[1.05] md:text-6xl">Chaque euro compte pour la forêt</h1>
          <p className="mt-6 max-w-lg text-lg text-forest-foreground/85">
            Jusqu’au 31 décembre, nos mécènes triplent chaque don pour protéger la forêt primaire de Bornéo.
          </p>
        </div>

        <form
          className="bg-card p-8 text-card-foreground shadow-card md:p-10"
          onSubmit={(e) => {
            e.preventDefault();
            if (value < 5) {
              toast.error("Le don minimum est de 5 €.");
              return;
            }
            toast.success(`Merci pour votre don de ${value} € ! Le paiement en ligne sera bientôt disponible.`);
          }}
        >
          <div className="grid grid-cols-2 border-2 border-forest">
            {(["once", "monthly"] as const).map((f) => (
              <button
                type="button"
                key={f}
                onClick={() => setFrequency(f)}
                className={`eyebrow py-3 text-sm transition-colors ${frequency === f ? "bg-forest text-forest-foreground" : "text-forest hover:bg-secondary"}`}
              >
                {f === "once" ? "Don ponctuel" : "Don mensuel"}
              </button>
            ))}
          </div>

          <p className="eyebrow mt-8 text-xs text-muted-foreground">Montant</p>
          <div className="mt-3 grid grid-cols-4 gap-3">
            {presets.map((p) => (
              <button
                type="button"
                key={p}
                onClick={() => {
                  setAmount(p);
                  setCustom("");
                }}
                className={`h-14 border-2 font-display text-xl transition-colors ${
                  !custom && amount === p ? "border-ember bg-ember text-ember-foreground" : "border-border hover:border-forest"
                }`}
              >
                {p} €
              </button>
            ))}
          </div>
          <label className="mt-3 flex h-14 items-center border-2 border-border px-4 focus-within:border-ember">
            <span className="sr-only">Autre montant</span>
            <input
              inputMode="numeric"
              value={custom}
              onChange={(e) => setCustom(e.target.value.replace(/[^0-9]/g, ""))}
              placeholder="Autre montant"
              className="flex-1 bg-transparent text-lg focus:outline-none"
            />
            <span className="text-muted-foreground">€</span>
          </label>

          <div className="mt-6 bg-secondary p-5">
            <p className="text-sm text-muted-foreground">Avec le triplement, votre impact réel :</p>
            <p className="mt-1 font-display text-3xl text-forest">
              {value * 3} €{frequency === "monthly" && <span className="text-lg"> / mois</span>}
            </p>
          </div>

          <Button type="submit" variant="donate" size="xl" className="mt-6 w-full">
            <Heart className="fill-current" /> Donner {value} €{frequency === "monthly" ? " par mois" : ""}
          </Button>
          <p className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <Lock className="h-3 w-3" /> Paiement sécurisé
          </p>
        </form>
      </div>
    </section>
  );
}

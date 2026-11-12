import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import canopy from "@/assets/climate-canopy.jpg";

export function Newsletter() {
  const [email, setEmail] = useState("");
  return (
    <section className="relative overflow-hidden bg-forest-deep text-forest-foreground">
      <img src={canopy} alt="" loading="lazy" width={800} height={960} className="absolute inset-0 h-full w-full object-cover opacity-25" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-2 lg:items-center lg:px-8">
        <div>
          <p className="eyebrow text-leaf">La lettre de la forêt</p>
          <h2 className="mt-3 text-4xl font-medium md:text-5xl">Recevez les dernières nouvelles du terrain</h2>
        </div>
        <form
          className="flex flex-col gap-3 sm:flex-row"
          onSubmit={(e) => {
            e.preventDefault();
            if (!email.includes("@")) {
              toast.error("Merci d’indiquer une adresse e-mail valide.");
              return;
            }
            toast.success("Merci ! Vous êtes inscrit·e à notre lettre.");
            setEmail("");
          }}
        >
          <label htmlFor="newsletter-email" className="sr-only">Adresse e-mail</label>
          <input
            id="newsletter-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Votre adresse e-mail"
            className="h-14 flex-1 border-2 border-forest-foreground/30 bg-forest-deep/60 px-5 text-forest-foreground placeholder:text-forest-foreground/50 focus:border-ember focus:outline-none"
          />
          <Button type="submit" variant="donate" size="xl">S’inscrire</Button>
        </form>
      </div>
    </section>
  );
}

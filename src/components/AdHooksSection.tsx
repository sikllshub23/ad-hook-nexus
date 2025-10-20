import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle, ArrowRight, Zap, Target, TrendingUp } from "lucide-react";

const AdHooksSection = () => {
  const problems = [
    "Tu n'as aucune idée de l'Accroche à utiliser pour ton offre du jour",
    "Tester des hooks au hasard te prend trop de temps et te coûte cher en budgets publicitaires inutiles",
    "Ton cerveau est fatigué de chercher des idées d'accroches qui n'ont pas encore été vues"
  ];

  const steps = [
    { number: "1", title: "Accède à l'Application Web", description: "Accès immédiat et connexion en ligne à ta bibliothèque" },
    { number: "2", title: "Définis ton objectif", description: "Vendre un produit ? Générer un lead ? Augmenter l'engagement ?" },
    { number: "3", title: "Choisis ta Catégorie", description: "Perte Évitée, Controverse, Curiosité, Solution Complète" },
    { number: "4", title: "Filtre par Ton Secteur", description: "E-commerce, Finance, Santé, Développement personnel" },
    { number: "5", title: "Copie le Canevas", description: "L'application te donne instantanément l'accroche la plus efficace" },
    { number: "6", title: "Injecte ta formule", description: "Dans la première ligne de ton titre ou les 3 premières secondes de ta vidéo" },
    { number: "7", title: "Publie et Mesure", description: "Répète l'opération. Résultats garantis sur ton CTR dès le premier jour" }
  ];

  return (
    <section id="ad-hooks-section" className="relative py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">NOTRE PREMIÈRE SOLUTION</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold leading-tight max-w-4xl mx-auto">
            <span className="gradient-text">AD HOOK CONTENT</span> : L'ARSENAL D'ACCROCHES QUI DÉTRUIT L'INVISIBILITÉ
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Un outil qui transforme tes publicités, tes Réels et tes contenus en machine à clics et à vues sans gaspiller ton budget.
          </p>
        </div>

        {/* YouTube Video */}
        <div className="max-w-2xl mx-auto">
          <div className="relative w-full" style={{ paddingBottom: "177.78%" }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-2xl shadow-lg"
              src="https://www.youtube.com/embed/IOFh_mlRDMw"
              title="AD HOOKS Presentation"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* Problem Section */}
        <div className="card-glass rounded-3xl p-8 md:p-12 space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <XCircle className="w-8 h-8 text-destructive" />
            <h3 className="text-2xl md:text-3xl font-bold">Voici le problème :</h3>
          </div>
          
          <p className="text-lg text-muted-foreground mb-6">
            Tu veux que tes contenus publicitaires ou organiques sur Meta, TikTok, YouTube arrêtent les gens dans la première seconde...
          </p>
          
          <div className="space-y-4">
            {problems.map((problem, index) => (
              <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-destructive/5 border border-destructive/20">
                <span className="text-destructive font-bold flex-shrink-0">→</span>
                <p className="text-foreground">{problem}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-6 rounded-xl bg-destructive/10 border border-destructive/30">
            <p className="text-lg font-semibold text-foreground">
              <span className="text-destructive">Résultat ?</span> → Ton Taux de Clic (CTR) stagne à 0,8 %, tes Coûts d'Acquisition (CPA) explosent, et ton audience scrolle sans même voir la valeur que tu as à offrir.
            </p>
          </div>
        </div>

        {/* Solution Section */}
        <div className="card-glass rounded-3xl p-8 md:p-12 space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <CheckCircle2 className="w-8 h-8 text-primary" />
            <h3 className="text-2xl md:text-3xl font-bold">La solution : ton plan en 7 étapes simples</h3>
          </div>
          
          <p className="text-lg text-muted-foreground">
            Avec Ad HOOKS, tu ne reçois pas seulement un répertoire de phrases, mais un vrai outil clé en main pour garantir l'impact initial :
          </p>
          
          <div className="grid md:grid-cols-2 gap-4 mt-8">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="flex gap-4 p-5 rounded-xl bg-card/50 border border-border/50 hover:border-primary/50 transition-all group"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-bold text-background group-hover:scale-110 transition-transform">
                  {step.number}
                </div>
                <div className="space-y-1">
                  <h4 className="font-semibold text-foreground">{step.title}</h4>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Results Promise */}
        <div className="card-glass rounded-3xl p-8 md:p-12 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/30">
          <div className="text-center space-y-6">
            <TrendingUp className="w-12 h-12 text-primary mx-auto" />
            <h3 className="text-2xl md:text-3xl font-bold">
              Résultats Garantis Dès Le Premier Jour
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Exactement ce que font les créateurs de contenus, les e-commerçants et les agences qui affichent des taux de clic supérieurs à 3 % en utilisant la psychologie de l'accroche éprouvée.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30 animate-pulse">
            <Target className="w-4 h-4 text-secondary" />
            <span className="text-sm font-semibold text-secondary">🚀 TARIF DE LANCEMENT SPÉCIAL</span>
          </div>
          
          <p className="text-xl text-foreground font-semibold">
            Il est temps de mettre fin à l'incertitude dans ton acquisition client.
          </p>
          
          <Button 
            size="lg"
            asChild
            className="text-base md:text-lg px-6 md:px-12 py-6 md:py-7 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all glow-effect group font-bold w-full md:w-auto max-w-full"
          >
            <a 
              href="https://digital.izonetech.store/ad-hook-pro?campaign=SCWXJ6H2E1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3"
            >
              <span className="truncate">Découvrir AD HOOKS Pro</span>
              <span className="flex-shrink-0 px-3 py-1 bg-white/20 rounded-full text-sm font-semibold">2.500 FCFA</span>
              <ArrowRight className="flex-shrink-0 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          
          <p className="text-sm text-muted-foreground">
            ✓ Accès immédiat • ✓ Garantie satisfait ou remboursé • ✓ Support premium
          </p>
        </div>
      </div>
    </section>
  );
};

export default AdHooksSection;

import { useEffect } from "react";
import { Gift, BookOpen, Sparkles } from "lucide-react";

const SurveySection = () => {
  useEffect(() => {
    // Load Fillout script
    const script = document.createElement('script');
    script.src = "https://server.fillout.com/embed/v1/";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="survey-section" className="relative py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Card Container */}
        <div className="card-glass rounded-3xl p-8 md:p-12 space-y-8">
          {/* Alert Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 border border-destructive/30">
            <span className="text-2xl">🚨</span>
            <span className="text-sm font-semibold text-destructive">Évaluation Gratuite</span>
          </div>
          
          {/* Headline */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Ton Business est-il prêt pour la{" "}
              <span className="gradient-text">croissance x5</span> ?
            </h2>
            <p className="text-lg text-muted-foreground">
              Remplis notre sondage rapide sur l'état actuel de ton business.
            </p>
          </div>
          
          {/* Benefits */}
          <div className="space-y-4 pt-4">
            <p className="text-base text-foreground font-medium">
              C'est la condition nécessaire pour recevoir la vraie :
            </p>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-primary/5 border border-primary/20">
                <BookOpen className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Le Guide Ultime de la Psychologie du Clic
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Accès en ligne - La théorie complète derrière les Hooks et comment les adapter à chaque canal d'acquisition.
                  </p>
                  <span className="inline-block mt-2 text-xs font-semibold text-primary">
                    ✓ Débloqué immédiatement après le sondage
                  </span>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 rounded-xl bg-secondary/5 border border-secondary/20">
                <Gift className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Code Promo VIP
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Tester en avant-première notre outil AD HOOKS avec une réduction exclusive.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA Button - Fillout Integration */}
          <div className="pt-6 flex justify-center">
            <div 
              data-fillout-id="44HkmcdbRQus" 
              data-fillout-embed-type="popup" 
              data-fillout-button-text="🚀 Démarrer Le Sondage" 
              data-fillout-dynamic-resize 
              data-fillout-button-size="large" 
              data-fillout-inherit-parameters 
              data-fillout-popup-size="medium"
              className="fillout-button-wrapper"
            />
          </div>
          
          {/* Trust Element */}
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground pt-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span>2-3 minutes seulement • 100% gratuit • Sans engagement</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SurveySection;

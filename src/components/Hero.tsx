import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToSurvey = () => {
    document.getElementById('survey-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="section-premium relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Premium Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background pointer-events-none" />
      
      {/* Enhanced Glow Effects */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-secondary/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        {/* Logo/Brand */}
        <div className="inline-block px-8 py-3 rounded-full border border-primary/20 bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-md mb-6 shadow-soft">
          <span className="text-sm font-bold gradient-text tracking-wide">SOFTBUSINESS</span>
        </div>
        
        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-tight">
          Simplifiez Votre{" "}
          <span className="gradient-text">Succès en Ligne</span>
        </h1>
        
        {/* Subheadline */}
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Moins de travail, plus de résultats. Accédez aux solutions qui rendent votre business en ligne simple, rapide et rentable.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
          <Button 
            onClick={scrollToSurvey}
            size="lg" 
            className="text-lg px-10 py-7 bg-gradient-to-r from-primary to-secondary hover:scale-105 transition-all glow-effect group shadow-elegant font-semibold"
          >
            Commencer Le Sondage
            <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
          </Button>
          <Button 
            variant="outline"
            size="lg"
            onClick={() => document.getElementById('ad-hooks-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-lg px-10 py-7 border-2 border-primary/30 hover:border-primary/60 hover:bg-primary/5 transition-all backdrop-blur-sm font-semibold"
          >
            Découvrir AD HOOKS
          </Button>
        </div>
        
        {/* Trust Badge */}
        <div className="pt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-base text-muted-foreground">
          <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm border border-primary/10">
            <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse shadow-lg" />
            <span className="font-medium">✨ Guide gratuit inclus</span>
          </div>
          <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm border border-secondary/10">
            <div className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse shadow-lg" />
            <span className="font-medium">🎁 Code promo VIP offert</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

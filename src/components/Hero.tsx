import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToSurvey = () => {
    document.getElementById('survey-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 py-12 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card pointer-events-none" />
      
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        {/* Logo/Brand */}
        <div className="inline-block px-6 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm mb-4">
          <span className="text-sm font-semibold gradient-text">SOFTBUSINESS</span>
        </div>
        
        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight">
          Transformez Vos Contenus En{" "}
          <span className="gradient-text">Machine À Clics</span>
        </h1>
        
        {/* Subheadline */}
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Arrêtez de gaspiller votre budget publicitaire. Découvrez les solutions qui boostent votre taux de clic et multiplient vos conversions.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button 
            onClick={scrollToSurvey}
            size="lg" 
            className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all glow-effect group"
          >
            Commencer Le Sondage
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            variant="outline"
            size="lg"
            onClick={() => document.getElementById('ad-hooks-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-lg px-8 py-6 border-primary/50 hover:bg-primary/10 transition-all"
          >
            Découvrir AD HOOKS
          </Button>
        </div>
        
        {/* Trust Badge */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span>✨ Guide gratuit inclus</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span>🎁 Code promo VIP offert</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

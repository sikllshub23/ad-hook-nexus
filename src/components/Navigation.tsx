import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setIsScrolled(currentScrollY > 20);
      
      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isHidden ? "-translate-y-full" : "translate-y-0"
      } ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div></div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Accueil
          </button>
          <button
            onClick={() => scrollToSection("survey-section")}
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Sondage
          </button>
          <button
            onClick={() => scrollToSection("ad-hooks-section")}
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            AD HOOKS
          </button>
          <Button
            size="sm"
            onClick={() => scrollToSection("survey-section")}
            className="bg-gradient-to-r from-primary to-secondary text-white"
          >
            Commencer
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="px-4 py-6 space-y-4">
            <button
              onClick={() => scrollToSection("hero")}
              className="block w-full text-left text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
            >
              Accueil
            </button>
            <button
              onClick={() => scrollToSection("survey-section")}
              className="block w-full text-left text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
            >
              Sondage
            </button>
            <button
              onClick={() => scrollToSection("ad-hooks-section")}
              className="block w-full text-left text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
            >
              AD HOOKS
            </button>
            <Button
              size="sm"
              onClick={() => scrollToSection("survey-section")}
              className="w-full bg-gradient-to-r from-primary to-secondary text-white"
            >
              Commencer
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;

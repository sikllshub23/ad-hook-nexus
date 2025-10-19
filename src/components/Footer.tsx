const Footer = () => {
  return (
    <footer className="relative border-t border-border/50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold gradient-text">SOFTBUSINESS</h3>
            <p className="text-sm text-muted-foreground">
              Solutions innovantes pour accélérer la croissance de votre business.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Liens Rapides</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#survey-section" className="hover:text-primary transition-colors">
                  Sondage Gratuit
                </a>
              </li>
              <li>
                <a href="#ad-hooks-section" className="hover:text-primary transition-colors">
                  AD HOOKS Pro
                </a>
              </li>
            </ul>
          </div>
          
          {/* Liens Utiles */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Suivez-nous</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a 
                  href="https://kloo.me/acquisition" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-primary transition-colors"
                >
                  📝 Blog
                </a>
              </li>
              <li>
                <a 
                  href="https://instagram.com/lagencenoname" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-primary transition-colors"
                >
                  📷 Instagram
                </a>
              </li>
              <li>
                <a 
                  href="https://facebook.com/lagencenoname" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-primary transition-colors"
                >
                  👥 Facebook
                </a>
              </li>
              <li>
                <a 
                  href="https://store.softbusiness.xyz" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-primary transition-colors"
                >
                  🛍️ Boutique
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} SoftBusiness. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

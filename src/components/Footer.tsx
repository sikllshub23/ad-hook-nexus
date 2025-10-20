const Footer = () => {
  return (
    <footer className="relative border-t border-border/50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-2xl font-bold gradient-text">SOFTBUSINESS</h3>
            <p className="text-base text-muted-foreground leading-relaxed max-w-md">
              SoftBusiness développe des solutions innovantes pour accélérer la croissance en ligne et hors ligne des activités commerciales.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground text-lg mb-4">Liens Rapides</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#survey-section" className="hover:text-primary transition-colors inline-flex items-center gap-2">
                  Sondage Gratuit
                </a>
              </li>
              <li>
                <a href="#ad-hooks-section" className="hover:text-primary transition-colors inline-flex items-center gap-2">
                  AD HOOKS Pro
                </a>
              </li>
            </ul>
          </div>
          
          {/* Liens Utiles */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground text-lg mb-4">Suivez-nous</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a 
                  href="https://kloo.me/acquisition" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-primary transition-colors inline-flex items-center gap-2"
                >
                  📝 Blog
                </a>
              </li>
              <li>
                <a 
                  href="https://instagram.com/lagencenoname" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-primary transition-colors inline-flex items-center gap-2"
                >
                  📷 Instagram
                </a>
              </li>
              <li>
                <a 
                  href="https://facebook.com/lagencenoname" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-primary transition-colors inline-flex items-center gap-2"
                >
                  👥 Facebook
                </a>
              </li>
              <li>
                <a 
                  href="https://digital.izonetech.store" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-primary transition-colors inline-flex items-center gap-2"
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

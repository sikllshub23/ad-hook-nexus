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
          
          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contact</h4>
            <p className="text-sm text-muted-foreground">
              Des questions ? Contactez-nous pour en savoir plus sur nos solutions.
            </p>
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

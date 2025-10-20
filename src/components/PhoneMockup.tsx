import adhooksScreenshot from "@/assets/adhooks-screenshot.png";

const PhoneMockup = () => {
  return (
    <div className="relative flex justify-center items-center py-16">
      {/* Floating Phone with 3D Effect */}
      <div className="relative animate-float">
        {/* Glow Effect Behind Phone */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 blur-3xl rounded-full scale-150 animate-pulse"></div>
        
        {/* Phone Frame */}
        <div className="relative z-10 w-[280px] md:w-[320px] bg-gradient-to-br from-card/90 to-card/50 rounded-[3rem] p-3 shadow-2xl border border-primary/30"
             style={{
               boxShadow: "0 0 60px hsl(180 100% 50% / 0.3), 0 25px 50px -12px hsl(220 25% 8% / 0.5)"
             }}>
          {/* Phone Notch */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 w-32 h-6 bg-card rounded-full z-20"></div>
          
          {/* Phone Screen */}
          <div className="relative bg-background rounded-[2.5rem] overflow-hidden">
            <img 
              src={adhooksScreenshot} 
              alt="AD HOOKS Content App" 
              className="w-full h-auto"
            />
          </div>
          
          {/* Phone Button */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-border rounded-full"></div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute -top-8 -right-8 w-16 h-16 bg-primary/20 rounded-full blur-xl animate-ping"></div>
        <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-secondary/20 rounded-full blur-xl animate-ping" style={{ animationDelay: "1s" }}></div>
      </div>
      
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotateY(-5deg) rotateX(2deg);
          }
          50% {
            transform: translateY(-20px) rotateY(5deg) rotateX(-2deg);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
          transform-style: preserve-3d;
        }
      `}</style>
    </div>
  );
};

export default PhoneMockup;

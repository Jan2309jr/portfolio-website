const Footer = () => {
  return (
    <footer className="py-20 px-4 relative overflow-hidden">
      {/* Decorative gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-primary/20" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center space-y-8">
          {/* Thank You Message */}
          <div className="space-y-4 animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-bold">
              Thanks for <br className="md:hidden" />watching
            </h2>
            
            {/* Decorative sparkles */}
            <div className="flex justify-center gap-8">
              <span className="text-4xl animate-pulse">✨</span>
              <span className="text-5xl animate-pulse" style={{ animationDelay: "0.3s" }}>✨</span>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-12 border-t border-border/30">
            <p className="text-muted-foreground">
              © {new Date().getFullYear()} Sara Howari. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

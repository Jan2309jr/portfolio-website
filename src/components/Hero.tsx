import { Button } from "@/components/ui/button";
import { Instagram, Linkedin, Twitter, Github, ChevronDown } from "lucide-react";
import heroAvatar from "@/assets/hero-avatar.png";

const Hero = () => {
  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/janani2309/", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/Jan2309jr", label: "Github" },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in">
            <p className="text-muted-foreground uppercase tracking-wider text-sm">
              WELCOME TO MY PORTFOLIO ✨
            </p>
            
            <div className="space-y-2">
              <h1 className="text-4xl md:text-6xl font-bold">
                Hi, I'm Janani
              </h1>
              <h2 className="text-4xl md:text-6xl font-bold">
                <span className="gradient-text">Machine Learning</span> Engineer
              </h2>
            </div>

            <p className="text-muted-foreground text-lg max-w-xl">
              Aspiring Machine Learning Engineer and pre-final year B.Tech CSE student.
              Passionate about building intelligent systems and transforming data into
              actionable insights through cutting-edge ML technologies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 glow-effect rounded-full px-8"
              >
                My Projects
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 border-2 hover:bg-secondary"
              >
                Download CV
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 group"
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Content - Avatar */}
          <div className="relative animate-fade-in">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-72 h-72 bg-primary rounded-full opacity-20 blur-3xl animate-pulse" />
              <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-accent rounded-full opacity-20 blur-3xl animate-pulse" />
              
              {/* Avatar with frame */}
              <div className="relative glass-card rounded-3xl p-8 glow-effect animate-float">
                <img
                  src={heroAvatar}
                  alt="Janani - Machine Learning Engineer"
                  className="w-full h-auto rounded-2xl"
                />
                
                {/* Decorative stars */}
                <div className="absolute top-8 right-8 text-primary text-2xl animate-pulse">✨</div>
                <div className="absolute top-20 right-4 text-accent text-xl animate-pulse delay-75">✨</div>
                <div className="absolute bottom-20 left-8 text-primary text-lg animate-pulse delay-150">✨</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-16 animate-bounce">
          <a
            href="#projects"
            className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-primary hover:text-white transition-all"
          >
            <ChevronDown className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const heroPortrait = "/lovable-uploads/a8d4536c-6d0a-44dd-877d-cb0f9dd9eabb.png";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden pt-24 md:pt-28 scroll-mt-28">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxLjUiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background/60 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
                  David Anand Daniel: Senior SaaS Solutions Engineer & Technical Consultant
                </h1>
                <h2 className="text-xl md:text-2xl lg:text-3xl text-primary-foreground/90 font-light">
                  Driving Revenue Growth & Streamlining Operations through Human-Centric Technology Solutions
                </h2>
              </div>

              <div className="space-y-5">
                <p className="text-primary-foreground/90 text-lg max-w-2xl leading-relaxed">
                  Over 7 years translating complex SaaS into clear business outcomes. I partner with Sales, Product, and CS to shorten cycles, lift ARR, and drive adoption. My approach blends technical depth with compelling storytelling, live prototyping, and executive alignment—so stakeholders see value fast. MBA, Grenoble Ecole de Management.
                </p>
                <ul className="list-disc pl-5 text-primary-foreground/90 space-y-1 max-w-2xl">
                  <li>Presales, Consulting, and CS leadership across EMEA/APAC</li>
                  <li>0→1 solution design, narrative demos, and pilot acceleration</li>
                  <li>Platforms: CPaaS, CX, ITSM, RevOps, and automation stacks</li>
                </ul>
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="bg-accent/20 backdrop-blur-sm rounded-lg px-4 py-3 border border-accent/30 inline-block hover-scale"
                  aria-label="Available from July 2025 — contact me"
                >
                  <span className="text-primary-foreground font-bold text-lg">
                    🚀 Available from July 2025
                  </span>
                </button>
              </div>

              <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-4 pb-12 md:pb-16">
                <Button 
                  variant="accent" 
                  size="lg"
                  onClick={() => scrollToSection("contact")}
                  className="text-lg px-8 py-4 shadow-prominent"
                >
                  Let's Connect
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => scrollToSection("experience")}
                  className="text-lg px-8 py-4 bg-primary-foreground/20 border-primary-foreground/60 text-primary-foreground hover:bg-primary-foreground hover:text-primary shadow-prominent"
                >
                  View My Work
                </Button>
                <Button variant="hero" size="lg" asChild className="text-lg px-8 py-4 shadow-prominent">
                  <a href="https://davidanand.zohobookings.com/#/4743390000000047052" target="_blank" rel="noopener noreferrer">Schedule a Call</a>
                </Button>
                <Button variant="secondary" size="lg" asChild className="text-lg px-8 py-4">
                  <Link to="/resume?print=1" target="_blank" rel="noopener noreferrer">Download Resume (PDF)</Link>
                </Button>
              </div>
            </div>

            {/* Portrait */}
            <div className="flex justify-center lg:justify-end animate-scale-in">
              <div className="relative">
                <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-glow border-4 border-primary-foreground/20">
                  <img 
                    src={heroPortrait} 
                    alt="David Anand Daniel professional portrait"
                    className="w-full h-full object-cover"
                    width="384"
                    height="384"
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-light/20 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient to prevent bleed into next section */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-background"></div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

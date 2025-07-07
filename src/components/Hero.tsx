import { Button } from "@/components/ui/button";
const heroPortrait = "/lovable-uploads/a8d4536c-6d0a-44dd-877d-cb0f9dd9eabb.png";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxLjUiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
      
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
                <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl">
                  Results-driven SaaS Solutions Expert with 7+ years in Presales, Technical Consulting & Customer Success
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-primary-foreground/90 text-lg max-w-2xl leading-relaxed">
                  Results-driven SaaS Solutions Expert with 7+ years in Presales, Technical Consulting & Customer Success, consistently delivering quantifiable business outcomes. Proven ability to translate complex technical concepts into strategic client partnerships, accelerating deal closures and achieving significant ARR growth. MBA from Grenoble Ecole de Management.
                </p>
                <div className="bg-accent/20 backdrop-blur-sm rounded-lg px-4 py-3 border border-accent/30 inline-block">
                  <p className="text-primary-foreground font-bold text-lg">
                    🚀 Available from July 2025
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  variant="accent" 
                  size="lg"
                  onClick={() => scrollToSection("contact")}
                  className="text-lg px-8 py-4 shadow-prominent"
                >
                  Connect with Me
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => scrollToSection("experience")}
                  className="text-lg px-8 py-4 bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary shadow-prominent"
                >
                  View My Work
                </Button>
              </div>
            </div>

            {/* Portrait */}
            <div className="flex justify-center lg:justify-end animate-scale-in">
              <div className="relative">
                <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-glow border-4 border-primary-foreground/20">
                  <img 
                    src={heroPortrait} 
                    alt="David Anand Daniel - Professional Portrait"
                    className="w-full h-full object-cover"
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
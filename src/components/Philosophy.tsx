import { Card, CardContent } from "@/components/ui/card";
import techConnections from "@/assets/tech-connections.jpg";

const Philosophy = () => {
  const beliefs = [
    {
      title: "Technology's True Purpose",
      description: "I believe technology's true purpose is to make life easier, not more complicated.",
      icon: "💡"
    },
    {
      title: "Human-Centric Solutions",
      description: "Behind every technical challenge is a human need. I focus on understanding the person before building the solution.",
      icon: "🤝"
    },
    {
      title: "Meaningful Impact",
      description: "The best solutions create 'aha moments' - those instances when complexity becomes clarity and challenges become opportunities.",
      icon: "✨"
    },
    {
      title: "Continuous Growth",
      description: "Whether it's mentoring colleagues or developing new approaches, I'm passionate about fostering growth in myself and others.",
      icon: "🌱"
    }
  ];

  return (
    <section id="philosophy" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Why I Love What I Do
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              My philosophy centers on a simple but powerful belief: technology should connect us, 
              not complicate our lives. Every demo, every solution, every interaction is an opportunity 
              to make someone's day better.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Philosophy Cards */}
            <div className="grid sm:grid-cols-2 gap-6 animate-slide-in">
              {beliefs.map((belief, index) => (
                <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:scale-105 bg-card border-border shadow-sm">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {belief.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-primary mb-3">
                      {belief.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {belief.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Image and Quote */}
            <div className="space-y-6 animate-fade-in">
              <div className="relative overflow-hidden rounded-lg shadow-elegant">
                <img 
                  src={techConnections} 
                  alt="Technology connecting people and solutions"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
              </div>
              
              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-8">
                  <blockquote className="text-lg font-medium italic leading-relaxed">
                    "Every challenge is an opportunity to create something meaningful. 
                    When I see a client's face light up during a demo, or when a 
                    complex integration suddenly makes sense - that's when I know 
                    we're not just selling software, we're creating solutions that matter."
                  </blockquote>
                  <footer className="mt-4 text-primary-foreground/80">
                    — David Anand Daniel
                  </footer>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
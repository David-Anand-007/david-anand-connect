import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const contactInfo = [
    {
      type: "Email",
      value: "davidanand0123@gmail.com",
      href: "mailto:davidanand0123@gmail.com",
      icon: "📧",
      description: "Best way to reach me for opportunities"
    },
    {
      type: "Phone", 
      value: "+33-0769297846",
      href: "tel:+330769297846",
      icon: "📱",
      description: "Direct line for urgent inquiries"
    },
    {
      type: "LinkedIn",
      value: "david-anand-daniel", 
      href: "https://www.linkedin.com/in/david-anand-daniel",
      icon: "💼",
      description: "Professional network and updates"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMS41Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Let's Connect & Create Impact Together
            </h2>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
              Ready to solve complex challenges and drive meaningful growth? I'm available from July 2025 
              and excited to discuss how we can work together to create exceptional solutions.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((contact, index) => (
              <Card 
                key={index}
                className="group hover:shadow-glow transition-all duration-300 hover:scale-105 animate-scale-in bg-background/95 backdrop-blur-sm border-primary-foreground/30 shadow-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {contact.icon}
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {contact.type}
                  </h3>
                  
                  <a 
                    href={contact.href}
                    className="text-primary hover:text-accent transition-colors duration-300 font-medium block mb-2"
                    target={contact.type === "LinkedIn" ? "_blank" : undefined}
                    rel={contact.type === "LinkedIn" ? "noopener noreferrer" : undefined}
                  >
                    {contact.value}
                  </a>
                  
                  <p className="text-sm text-muted-foreground">
                    {contact.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center animate-fade-in">
            <Card className="bg-background/95 backdrop-blur-sm border-primary-foreground/30 inline-block shadow-card">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Ready to Start the Conversation?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-md">
                  Whether you're looking for a technical sales expert, a strategic consultant, 
                  or someone who can bridge the gap between technology and human needs - let's talk.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    variant="accent"
                    size="lg"
                    onClick={() => window.open("mailto:davidanand0123@gmail.com", "_blank")}
                    className="text-lg px-8 py-3"
                  >
                    Send Email
                  </Button>
                  <Button 
                    variant="hero"
                    size="lg"
                    onClick={() => window.open("https://davidanand.zohobookings.com/#/4743390000000047052", "_blank")}
                    className="text-lg px-8 py-3"
                  >
                    Schedule a Call
                  </Button>
                  <Button 
                    variant="outline"
                    size="lg"
                    onClick={() => window.open("https://www.linkedin.com/in/david-anand-daniel", "_blank")}
                    className="text-lg px-8 py-3 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    View LinkedIn
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Availability Notice */}
          <div className="mt-12 text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm rounded-full px-6 py-3 border border-accent/30">
              <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
              <span className="text-primary-foreground font-medium">
                Available from July 2025
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
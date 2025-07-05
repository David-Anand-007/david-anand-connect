import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Achievements = () => {
  const achievements = [
    {
      title: "Revenue Champion",
      description: "Achieved 102% of FY2020 sales target, personally influencing $1.14M USD in Annual Recurring Revenue",
      metric: "$1.14M ARR",
      icon: "📈",
      category: "Sales Excellence"
    },
    {
      title: "Chief Closer 2020",
      description: "Recognized for exceptional deal closure performance and strategic solution positioning at Freshworks",
      metric: "Top Performer",
      icon: "🏆",
      category: "Recognition"
    },
    {
      title: "Market Pioneer",
      description: "Successfully pioneered CM.com's India operations as the first technical hire, establishing foundational processes",
      metric: "First Hire",
      icon: "🚀",
      category: "Leadership"
    },
    {
      title: "Product Innovation",
      description: "Contributed to multiple successful product launches and turned around 'unsellable' products like MMC",
      metric: "Multiple Launches",
      icon: "💡",
      category: "Innovation"
    },
    {
      title: "Customer Excellence",
      description: "Contributed to Gartner Peer Insights Customers' Choice awards in 2018 & 2019 at ManageEngine",
      metric: "2 Years Running",
      icon: "⭐",
      category: "Customer Success"
    },
    {
      title: "Breakthrough Deal",
      description: "Secured VBJ Jewellers as the first MSC Pro deal, demonstrating exceptional solution positioning",
      metric: "First MSC Pro",
      icon: "💎",
      category: "Sales Excellence"
    }
  ];

  const testimonials = [
    {
      text: "David's ability to understand client requirements and offer tailored solutions is exceptional. His technical expertise combined with relationship-building skills make him invaluable.",
      author: "Vinod Prabhu.D",
      role: "LinkedIn Testimonial",
      platform: "LinkedIn"
    },
    {
      text: "Working with David has been fantastic. His understanding of complex technical requirements and ability to build genuine client relationships sets him apart.",
      author: "Tanya Sutradhar",
      role: "LinkedIn Testimonial", 
      platform: "LinkedIn"
    },
    {
      text: "Fantastic work on the customer engagement initiatives. Your approach to building relationships has significantly improved our client satisfaction scores.",
      author: "Chetan Borkar",
      role: "Team Lead",
      platform: "Internal Recognition"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Key Achievements & Recognition
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Quantifiable results and recognition that demonstrate my commitment to excellence, 
              innovation, and creating meaningful impact for customers and organizations.
            </p>
          </div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {achievements.map((achievement, index) => (
              <Card 
                key={index}
                className="group hover:shadow-elegant transition-all duration-500 hover:scale-105 animate-scale-in bg-card border-border shadow-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                    {achievement.icon}
                  </div>
                  
                  <Badge variant="secondary" className="bg-accent/20 text-accent border border-accent/30 font-medium">
                    {achievement.category}
                  </Badge>
                  
                  <h3 className="text-lg font-semibold text-primary group-hover:text-primary-light transition-colors">
                    {achievement.title}
                  </h3>
                  
                  <div className="text-2xl font-bold text-accent bg-accent/10 border border-accent/20 rounded-lg px-4 py-2">
                    {achievement.metric}
                  </div>
                  
                  <p className="text-sm text-foreground leading-relaxed">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Testimonials Section */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-primary mb-8 text-center">
              What Colleagues & Clients Say
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card 
                  key={index}
                  className="group hover:shadow-card transition-all duration-300 hover:scale-105 bg-card border-border shadow-sm"
                >
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="text-primary text-2xl">"</div>
                      
                      <blockquote className="text-sm text-muted-foreground leading-relaxed italic">
                        {testimonial.text}
                      </blockquote>
                      
                      <div className="border-t border-border pt-4">
                        <p className="font-semibold text-foreground text-sm">
                          {testimonial.author}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {testimonial.role}
                        </p>
                        <Badge variant="secondary" className="mt-2 text-xs">
                          {testimonial.platform}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Projects & Volunteering */}
          <div className="mt-16 animate-slide-in">
            <h3 className="text-2xl font-bold text-primary mb-8 text-center">
              Projects & Volunteering
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover:shadow-card transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-4">🚀</div>
                  <h4 className="font-semibold text-primary mb-2">Finexia Startup Weekend</h4>
                  <p className="text-sm text-muted-foreground">
                    Participated in intensive startup development program, contributing to innovative fintech solutions
                  </p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-card transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-4">🇫🇷</div>
                  <h4 className="font-semibold text-primary mb-2">Old Monk French Market Entry</h4>
                  <p className="text-sm text-muted-foreground">
                    Strategic campaign analysis for international market penetration and brand positioning
                  </p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-card transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-4">👥</div>
                  <h4 className="font-semibold text-primary mb-2">Mentorship Programs</h4>
                  <p className="text-sm text-muted-foreground">
                    Active mentor for new hires and junior colleagues, fostering professional growth and development
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
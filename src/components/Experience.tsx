import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experiences = [
    {
      company: "Zluri",
      role: "Senior Presales Engineer",
      period: "Current Role",
      highlights: [
        "Design tailored SaaS management solutions for enterprise clients",
        "Partner directly with customers to influence product development roadmap",
        "Lead compelling product demonstrations and technical deep-dives",
        "Foster genuine partnerships beyond traditional vendor-client relationships"
      ],
      skills: ["SaaS Management", "Enterprise Solutions", "Product Strategy", "Client Partnership"]
    },
    {
      company: "CM.com",
      role: "Senior Technical Consultant",
      period: "Previous Role",
      highlights: [
        "First technical hire in India hub - built foundational processes from ground up",
        "Championed seamless customer onboarding and success initiatives",
        "Led strategic market entry analysis including competitor research and feasibility studies",
        "Mentored new hires and established technical excellence standards",
        "Achieved breakthrough with VBJ Jewellers (first MSC Pro deal)",
        "Successfully repositioned 'unsellable' products like MMC through strategic approach",
        "Earned customer recognition with mentions on LinkedIn for exceptional service"
      ],
      skills: ["Market Entry Strategy", "Team Building", "Customer Success", "Mentorship"]
    },
    {
      company: "Freshworks",
      role: "Solution Engineer",
      period: "Previous Role",
      highlights: [
        "Aligned technical sales strategies with evolving customer needs",
        "Provided expert assistance with customer onboarding and complex problem-solving",
        "Recognized as 'Chief Closer 2020' for exceptional deal closure performance",
        "Personally influenced $1.14M USD ARR through strategic solution positioning",
        "Achieved 102% of FY2020 sales target through consultative approach"
      ],
      skills: ["Technical Sales", "Solution Architecture", "Deal Closure", "Revenue Growth"]
    },
    {
      company: "Zoho Corporation",
      role: "Presales & Technical Support Specialist",
      period: "Previous Role",
      highlights: [
        "Simplified complex IT challenges for diverse client base",
        "Conducted comprehensive IT health checks and optimization assessments",
        "Created exceptional support experiences leading to outstanding reviews on Gartner",
        "Transformed unhappy customers into passionate product advocates",
        "Contributed to Gartner Peer Insights Customers' Choice awards (2018 & 2019)",
        "Built reputation for turning around challenging customer situations"
      ],
      skills: ["IT Consulting", "Customer Advocacy", "Technical Support", "Relationship Building"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Professional Experience
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              7+ years of transforming complex technical challenges into meaningful business outcomes. 
              Each role has strengthened my commitment to human-centric technology solutions.
            </p>
          </div>

          {/* Experience Cards */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-elegant transition-all duration-500 hover:scale-[1.02] animate-slide-in bg-card border-border shadow-sm"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl text-primary group-hover:text-primary-light transition-colors">
                        {exp.role}
                      </CardTitle>
                      <h4 className="text-lg font-semibold text-foreground mt-1">
                        {exp.company}
                      </h4>
                    </div>
                    <Badge variant="outline" className="self-start md:self-center">
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Key Highlights */}
                  <div>
                    <h5 className="font-semibold text-foreground mb-3">Key Achievements & Impact:</h5>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <span className="leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills */}
                  <div>
                    <h5 className="font-semibold text-foreground mb-3">Core Competencies:</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, idx) => (
                        <Badge 
                          key={idx} 
                          variant="secondary" 
                          className="bg-accent-light text-accent-foreground hover:bg-accent transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
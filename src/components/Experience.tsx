import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experiences = [
    {
      company: "Zluri",
      role: "Senior Presales Engineer",
      period: "Previous Role",
      highlights: [
        "Designed and implemented tailored SaaS management solutions for 15+ enterprise clients, resulting in an average of 20-25% improved operational efficiency and 15-20% cost savings within 6-12 months",
        "Partnered directly with customers to influence product development roadmap, contributing to 3+ major feature releases that enhanced client satisfaction by 30%",
        "Led compelling product demonstrations and technical deep-dives for C-suite executives, achieving 85%+ meeting-to-proposal conversion rate",
        "Fostered genuine partnerships beyond traditional vendor-client relationships, resulting in 90%+ client retention rate and 40% increase in upsell opportunities"
      ],
      skills: ["SaaS Management", "Enterprise Solutions", "Product Strategy", "Client Partnership"]
    },
    {
      company: "CM.com",
      role: "Senior Technical Consultant",
      period: "Previous Role",
      highlights: [
        "Pioneered CM.com's India operations as the first technical hire, establishing foundational presales and technical support processes that scaled regional capacity by 40% within 12 months and enabled successful market entry",
        "Championed seamless customer onboarding initiatives, reducing time-to-value by 40% and achieving 95%+ customer satisfaction scores",
        "Led strategic market entry analysis including competitor research and feasibility studies, identifying €2M+ market opportunity in the Indian subcontinent",
        "Mentored 8+ new technical hires and established technical excellence standards, contributing to 25% improvement in team productivity",
        "Secured VBJ Jewellers as the first MSC Pro deal by strategically positioning complex communication solutions, opening a new market segment worth €500K+ annually",
        "Revitalized previously 'unsellable' products like MMC through a strategic repositioning initiative, driving 25%+ increase in adoption and generating significant new revenue within 9 months",
        "Earned customer recognition with mentions on LinkedIn for exceptional service, contributing to 150%+ increase in referral business"
      ],
      skills: ["Market Entry Strategy", "Team Building", "Customer Success", "Mentorship"]
    },
    {
      company: "Freshworks",
      role: "Solution Engineer",
      period: "Previous Role",
      highlights: [
        "Aligned technical sales strategies with evolving customer needs, contributing to 25% increase in solution adoption rates",
        "Provided expert assistance with customer onboarding and complex problem-solving, reducing escalation rates by 35%",
        "Recognized as 'Chief Closer 2020' at Freshworks for exceptional deal closure performance, ranking in top 5% of sales engineering team",
        "Personally influenced $1.14M USD ARR through strategic solution positioning and consultative selling approach",
        "Achieved 102% of FY2020 sales target through consultative approach, exceeding quota by $120K+ in additional revenue"
      ],
      skills: ["Technical Sales", "Solution Architecture", "Deal Closure", "Revenue Growth"]
    },
    {
      company: "Zoho Corporation",
      role: "Presales & Technical Support Specialist",
      period: "Previous Role",
      highlights: [
        "Simplified complex IT challenges for 200+ diverse clients across SMB and enterprise segments, improving system efficiency by 15-20% and reducing resolution times by 10-15%",
        "Conducted comprehensive IT health checks and optimization assessments, identifying average cost savings of 15-20% per client",
        "Created exceptional support experiences leading to outstanding reviews on Gartner, contributing to 4.2+ star rating maintenance",
        "Successfully de-escalated 150+ critical customer situations, transforming 25-30% of dissatisfied clients into passionate product advocates, directly contributing to Gartner Peer Insights Customers' Choice awards (2018 & 2019)",
        "Contributed to Gartner Peer Insights Customers' Choice awards (2018 & 2019) through consistent excellence in customer experience",
        "Built reputation for turning around challenging customer situations, achieving 90%+ customer satisfaction in escalated cases"
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
                          className="bg-accent/75 text-accent-foreground hover:bg-accent transition-colors border border-accent/30"
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
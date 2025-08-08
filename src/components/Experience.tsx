import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const Experience = () => {
  const experiences = [
    {
      company: "Zluri",
      role: "Senior Presales Engineer",
      period: "Aug 2023 - Jul 2024 · 1 yr",
      highlights: [
        "Designed enterprise SaaS management for 15+ clients; delivered 20-25% efficiency and 15-20% cost savings within 6-12 months",
        "Partnered with key enterprises to shape 3+ roadmap features; lifted module adoption and client satisfaction ~30%",
        "Led tailored C-suite demos and deep-dives; achieved 85%+ meeting-to-proposal conversion",
        "Built strategic partnerships; sustained 90%+ retention and grew upsell pipeline ~40%"
      ],
      skills: ["SaaS Management", "Enterprise Solutions", "Product Strategy", "Client Partnership"]
    },
    {
      company: "CM.com",
      role: "Senior Technical Consultant",
      period: "Jan 2021 - Aug 2023 · 2 yrs 8 mos",
      highlights: [
        "Launched India operations; built presales/support playbooks; scaled regional capacity ~40% in 12 months, enabling market entry",
        "Cut time-to-value ~40% via streamlined onboarding and proactive success motions; 95%+ CSAT",
        "Drove GTM via competitive and feasibility analysis; identified €2M+ opportunity",
        "Mentored 8+ hires and codified excellence standards; improved team productivity ~25%",
        "Closed first MSC Pro with VBJ Jewellers; opened €500K+ annual segment",
        "Repositioned MMC; increased adoption 25%+ and generated new revenue within 9 months",
        "Earned public client recognition; boosted referrals 150%+"
      ],
      skills: ["Market Entry Strategy", "Team Building", "Customer Success", "Mentorship"]
    },
    {
      company: "Freshworks",
      role: "Solution Engineer",
      period: "Aug 2019 - Dec 2020 · 1 yr 5 mos",
      highlights: [
        "Aligned solutions to evolving needs; lifted adoption ~25%",
        "Cut escalations ~35% by leading complex onboarding and problem-solving",
        "Awarded 'Chief Closer 2020' (top 5%); influenced $1.14M ARR",
        "Achieved 102% FY2020 target via consultative selling"
      ],
      skills: ["Technical Sales", "Solution Architecture", "Deal Closure", "Revenue Growth"]
    },
    {
      company: "Zoho Corporation",
      role: "Presales & Technical Support Specialist",
      period: "Jun 2017 - Jul 2019 · 2 yrs 2 mos",
      highlights: [
        "Simplified complex IT for 200+ SMB/enterprise clients; improved efficiency 15-20% and cut resolution times 10-15%",
        "Conducted health checks and optimization; identified 15-20% average cost savings per client",
        "Delivered support that sustained 4.2+ Gartner rating; contributed to Customers' Choice (2018 & 2019)",
        "De-escalated 150+ critical cases; converted 25-30% detractors into advocates; 90%+ CSAT in escalations",
        "Built turnaround playbooks and eliminated root causes; reduced repeat escalations"
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

          {/* Section CTA */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="accent" size="lg" asChild>
              <a href="https://davidanand.zohobookings.com/#/4743390000000047052" target="_blank" rel="noopener noreferrer">
                Schedule a Call
              </a>
            </Button>
            <Button variant="hero" size="lg" asChild>
              <Link to="/resume?print=1" target="_blank" rel="noopener noreferrer">
                Download ATS Resume
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
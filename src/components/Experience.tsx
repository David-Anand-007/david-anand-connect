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
        "Addressed fragmented SaaS spend by designing and implementing tailored SaaS management solutions for 15+ enterprise clients, driving 20-25% efficiency gains and 15-20% cost savings within 6-12 months",
        "Closed feature-fit gaps by collaborating with key enterprise customers to influence 3+ roadmap features, increasing module adoption and client satisfaction by ~30%",
        "Overcame executive skepticism by leading tailored demos and technical deep-dives for C-suite, achieving an 85%+ meeting-to-proposal conversion rate",
        "Mitigated churn risk by building strategic partnerships beyond vendor-client relationships, sustaining 90%+ retention and increasing upsell opportunities by ~40%"
      ],
      skills: ["SaaS Management", "Enterprise Solutions", "Product Strategy", "Client Partnership"]
    },
    {
      company: "CM.com",
      role: "Senior Technical Consultant",
      period: "Jan 2021 - Aug 2023 · 2 yrs 8 mos",
      highlights: [
        "Launched India operations from a zero baseline by establishing presales and technical support processes, scaling regional capacity by ~40% in 12 months and enabling successful market entry",
        "Reduced time-to-value by ~40% through streamlined onboarding and proactive success motions, maintaining 95%+ CSAT",
        "Informed GTM prioritization via competitor research and feasibility studies, identifying €2M+ market opportunity in the Indian subcontinent",
        "Closed capability gaps by mentoring 8+ new technical hires and codifying excellence standards, improving team productivity by ~25%",
        "Secured VBJ Jewellers as the first MSC Pro deal by positioning complex communication solutions, opening a new €500K+ annual segment",
        "Revived previously 'unsellable' MMC via strategic repositioning, driving 25%+ adoption and generating significant new revenue within 9 months",
        "Elevated credibility with public client recognition on LinkedIn, contributing to 150%+ increase in referral business"
      ],
      skills: ["Market Entry Strategy", "Team Building", "Customer Success", "Mentorship"]
    },
    {
      company: "Freshworks",
      role: "Solution Engineer",
      period: "Aug 2019 - Dec 2020 · 1 yr 5 mos",
      highlights: [
        "Aligned solution strategy to evolving customer needs to remove adoption barriers, lifting solution uptake by ~25%",
        "Reduced escalation rates by ~35% by leading complex onboarding and problem-solving support",
        "Recognized as 'Chief Closer 2020' at Freshworks for exceptional deal closure performance (top 5% of sales engineering team)",
        "Personally influenced $1.14M USD ARR through strategic solution positioning",
        "Achieved 102% of FY2020 sales target through a consultative approach"
      ],
      skills: ["Technical Sales", "Solution Architecture", "Deal Closure", "Revenue Growth"]
    },
    {
      company: "Zoho Corporation",
      role: "Presales & Technical Support Specialist",
      period: "Jun 2017 - Jul 2019 · 2 yrs 2 mos",
      highlights: [
        "Simplified complex IT challenges for 200+ SMB/enterprise clients to stabilize environments, improving system efficiency by 15-20% and reducing resolution times by 10-15%",
        "Conducted IT health checks and optimization assessments, identifying average cost savings of 15-20% per client",
        "Delivered exceptional support experiences that helped maintain a 4.2+ Gartner rating",
        "De-escalated 150+ critical situations, converting 25-30% dissatisfied clients into advocates and supporting Gartner Peer Insights Customers' Choice (2018 & 2019)",
        "Built turnaround playbooks for high-stakes cases, achieving 90%+ CSAT in escalations",
        "Strengthened long-term relationships with proactive follow-ups and root-cause elimination, reducing repeat escalations"
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
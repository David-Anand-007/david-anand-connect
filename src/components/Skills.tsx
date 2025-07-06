import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Technical Sales & Consulting",
      skills: [
        "Technical Sales and Presales Consulting",
        "SaaS Solutions and Product Demonstrations", 
        "RFI and RFP Management",
        "Solution Architecture",
        "Competitive Analysis",
        "Revenue Generation"
      ],
      icon: "🎯"
    },
    {
      title: "Customer Success & Support",
      skills: [
        "Customer Onboarding and Success",
        "IT Health Checks and Technical Support",
        "Customer Relationship Management",
        "Problem-Solving and Troubleshooting",
        "Customer Advocacy",
        "User Experience Optimization"
      ],
      icon: "🤝"
    },
    {
      title: "Strategic & Leadership",
      skills: [
        "Market Entry Strategies",
        "Cross-Functional Collaboration",
        "Training and Mentorship",
        "Process Development",
        "Team Building",
        "Strategic Planning"
      ],
      icon: "🚀"
    },
    {
      title: "Technical Tools & Platforms",
      skills: [
        "CRM Tools (Salesforce, HubSpot)",
        "Basic JavaScript for Data Streamlining",
        "SaaS Platform Management",
        "Demo and Presentation Tools",
        "Analytics and Reporting",
        "Integration Technologies"
      ],
      icon: "⚙️"
    }
  ];

  const education = [
    {
      degree: "Master of Business Administration (MBA)",
      institution: "Grenoble Ecole de Management",
      focus: "Strategy and Marketing",
      description: "Advanced strategic thinking and marketing expertise for technology solutions"
    },
    {
      degree: "Bachelor of Engineering",
      institution: "St. Joseph's College of Engineering, Chennai",
      focus: "Mechanical Engineering",
      description: "Strong analytical foundation and problem-solving methodology"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Skills & Education
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A comprehensive skill set built through hands-on experience and continuous learning, 
              combined with strong educational foundations in both engineering and business strategy.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-card transition-all duration-300 hover:scale-105 animate-fade-in bg-card border-border shadow-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-primary group-hover:text-primary-light transition-colors">
                    <span className="text-2xl">{category.icon}</span>
                    <span className="text-lg">{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <Badge 
                        key={idx} 
                        variant="secondary" 
                        className="text-sm bg-primary/25 text-primary border border-primary/40 hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-medium"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Education Section */}
          <div className="animate-slide-in">
            <h3 className="text-2xl font-bold text-primary mb-8 text-center">
              Educational Background
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <Card 
                  key={index} 
                  className="group hover:shadow-elegant transition-all duration-300 hover:scale-105 bg-card border-border shadow-sm"
                >
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-primary group-hover:text-primary-light transition-colors">
                        {edu.degree}
                      </h4>
                      <p className="font-medium text-foreground">
                        {edu.institution}
                      </p>
                      <Badge variant="secondary" className="bg-accent/20 text-accent border border-accent/30 font-medium">
                        {edu.focus}
                      </Badge>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {edu.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
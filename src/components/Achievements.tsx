import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

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
    // Clients
    {
      text: "Incredibly knowledgeable in the SaaS and enterprise tech space... remarkable ability to translate complex concepts into clear, actionable solutions... consistently helpful, approachable, and proactive.",
      author: "Courtney Quinn",
      role: "Head of Operations",
      platform: "Client",
      date: "May 24, 2025"
    },
    {
      text: "Outstanding software sales expert... took the time to support and understand our wishes... unique blend of technical knowledge and exceptional interpersonal skills.",
      author: "Courtney Nicoll",
      role: "EVP of Operations",
      platform: "Client",
      date: "August 6, 2024"
    },
    {
      text: "Really helpful with setting up a POC for my company. He was very instrumental in resolving any issues we had.",
      author: "Caleb Murray",
      role: "IT Asset Management Professional",
      platform: "Client",
      date: "August 5, 2024"
    },
    {
      text: "Contributions proved invaluable in aligning and enhancing our marketing initiatives... proactive demeanor and commitment to refining our strategies... consistently exceeded expectations.",
      author: "Akansha Vij",
      role: "Brand | Marketing | PR & Communications Strategist",
      platform: "Client",
      date: "August 31, 2023"
    },
    {
      text: "An excellent resource... extremely professional, reliable and hands on in everything he undertakes.",
      author: "Jugal Popat",
      role: "Co-Founder",
      platform: "Client",
      date: "March 29, 2023"
    },
    {
      text: "Enthusiasm and knowledge in what he does... amazing at his job! Very helpful and good at handling client relationship.",
      author: "Tanya S Dhar",
      role: "Marketing and Communications Manager",
      platform: "Client",
      date: "October 11, 2022"
    },
    {
      text: "Instrumental in our success with the product... very talented professional that was patient with our team and went the extra mile.",
      author: "David Dillard",
      role: "VP at Batavia Inc.",
      platform: "Client",
      date: "November 16, 2021"
    },
    {
      text: "Understand the client requirements and come out with a solution he is just amazing it was great working with you.",
      author: "Vinod Prabhu D",
      role: "Hospitality & Strategic Partner",
      platform: "Client",
      date: "September 3, 2021"
    },
    {
      text: "Exceptional person... took the time to walk through every relevant feature... made sure no question was left unanswered... tailored for our use case and needs.",
      author: "Yaseer Khanani",
      role: "Director of Product & Design",
      platform: "Client",
      date: "November 13, 2020"
    },
    {
      text: "Great help with getting Freshdesk and Freshchat setup... very knowledgeable of the system and had lots of patience.",
      author: "Nathan Neyedly",
      role: "Product Manager",
      platform: "Client",
      date: "November 9, 2020"
    },
    {
      text: "Excellent support technician... nice, polite and a good professional always trying to look for a solution.",
      author: "Gustavo Perez Sagredo",
      role: "Workplace Technician",
      platform: "Client",
      date: "October 21, 2020"
    },
    {
      text: "Knowledge, professionalism, and willingness to help was hard to ignore... excellent customer service skills.",
      author: "Jake Thomas",
      role: "IT Director",
      platform: "Client",
      date: "October 16, 2020"
    },
    {
      text: "The most certain way to succeed is always to try just one more time. It seems that David must have been trained by Mr. Edison.",
      author: "Amit Varma",
      role: "Problem Solver",
      platform: "Client",
      date: "October 3, 2020"
    },
    {
      text: "Very knowledgeable, personable and helpful... guided us through leveraging the Freshworks platform to drive value.",
      author: "Darryl Sharpton",
      role: "Founder at Albany Park ®",
      platform: "Client",
      date: "April 15, 2020"
    },
    {
      text: "Knowledgeable, humble with communication and a pleasure to work with... good that you receive a great Customer Service from a Customer Service Company.",
      author: "Kirtan Patel",
      role: "Product Manager",
      platform: "Client",
      date: "April 9, 2020"
    },
    // Managers
    {
      text: "Bright positive thinking professional, who I can value as a great pre-sales product expert.",
      author: "Gleb Grozovsky",
      role: "Sales Lead India",
      platform: "Manager",
      date: "August 13, 2024"
    },
    {
      text: "Matured, top-notch soft skills, and committed. He's good at handling situations and also a quick learner.",
      author: "Dinesh Babu Jayaraman",
      role: "Associate Director of Enterprise Support",
      platform: "Manager",
      date: "July 1, 2021"
    },
    {
      text: "The star of the team... assures closure for them... very talented, soft-spoken, and knows his tech stack very well... awarded many times for pure excellence in winning complicated deals.",
      author: "Shaiju Thomas",
      role: "Global Sales Leader",
      platform: "Manager",
      date: "May 27, 2021"
    },
    {
      text: "In one word if i were to describe David, it would be 'passion'... thorough & intelligent professional always focused on his work... set the bar really high with his quick grasp on the products.",
      author: "Madhavan Veeraraghavan",
      role: "Empowering Teams | Solution Engineering",
      platform: "Manager",
      date: "February 5, 2021"
    },
    // Colleagues
    {
      text: "One of the best Presales to work with, his energy, his proactiveness really wows the customer and will fit in any team he works in.",
      author: "Satvik Chandel",
      role: "Associate Director Sales",
      platform: "Colleague",
      date: "August 6, 2024"
    },
    {
      text: "Excellent team player and a joy to be around... willingness to help others is unparalleled... always has a positive attitude and is eager to assist or advise when needed.",
      author: "Dhanush Kumar K",
      role: "Support Engineer",
      platform: "Colleague",
      date: "February 19, 2023"
    },
    {
      text: "Effortlessly makes a customer smile... willingness to help and share his expertise has always helped me and my customers achieve our goals.",
      author: "Chu Khoy Sheng",
      role: "Data-Driven Marketer",
      platform: "Colleague",
      date: "May 14, 2021"
    },
    {
      text: "One of the best at what he does - apart from being an excellent communicator and a natural problem solver, he has also developed great focus and a tremendous work ethic.",
      author: "Vivek Vengatesh",
      role: "Lead Solution Engineer",
      platform: "Colleague",
      date: "December 29, 2020"
    },
    // Working with David
    {
      text: "Assisted my company with the implementation... provided me a level of support and expertise that put me at ease... polite, professional, down to earn and an empathetic person too.",
      author: "Mark Baker",
      role: "Client",
      platform: "Working Relationship",
      date: "September 17, 2021"
    },
    {
      text: "So helpful and attentive during our sales and onboarding process... prompt responses... multiple live training and help sessions.",
      author: "Therese Stevens",
      role: "Working at different companies",
      platform: "Working Relationship",
      date: "March 12, 2021"
    },
    {
      text: "Helped guide me through evaluating Freshdesk software. He is very knowledgeable and helpful. I look forward to working with David if we implement Freshdesk.",
      author: "Summer Richards",
      role: "Client",
      platform: "Working Relationship",
      date: "March 27, 2020"
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
            
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-5xl mx-auto"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="group hover:shadow-card transition-all duration-300 hover:scale-105 bg-card border-border shadow-sm h-full">
                      <CardContent className="p-6 flex flex-col h-full">
                        <div className="space-y-4 flex-1">
                          <div className="text-primary text-2xl">"</div>
                           
                          <blockquote className="text-sm text-muted-foreground leading-relaxed italic flex-1">
                            {testimonial.text}
                          </blockquote>
                          
                          <div className="text-primary text-2xl text-right">"</div>
                          
                          <div className="border-t border-border pt-4 mt-auto">
                            <p className="font-semibold text-foreground text-sm">
                              {testimonial.author}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {testimonial.role}
                            </p>
                            <div className="flex items-center gap-2 mt-2">
                              <Badge variant="secondary" className="text-xs">
                                {testimonial.platform}
                              </Badge>
                              <span className="text-xs text-muted-foreground">
                                {testimonial.date}
                              </span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
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
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { label: "About", id: "hero" },
    { label: "Philosophy", id: "philosophy" },
    { label: "Experience", id: "experience" },
    { label: "Skills", id: "skills" },
    { label: "Achievements", id: "achievements" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-background/80 supports-[backdrop-filter]:bg-background/60 backdrop-blur-md shadow-card border-b border-border" 
        : "bg-transparent"
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className={`text-xl font-bold ${isScrolled ? "text-primary" : "text-primary-foreground"}`}>
            David Anand Daniel
          </div>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`${isScrolled ? "text-foreground hover:text-primary" : "text-primary-foreground/90 hover:text-primary-foreground"} transition-colors duration-300 font-medium`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Button 
              variant="hero" 
              size="sm"
              onClick={() => scrollToSection("contact")}
            >
              Let's Connect
            </Button>
            <Button variant="accent" size="sm" asChild>
              <Link to="/resume?print=1" target="_blank" rel="noopener noreferrer">Download ATS Resume</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
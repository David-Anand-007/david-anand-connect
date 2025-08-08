import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Resume = () => {
  const location = useLocation();
  useEffect(() => {
    document.title = "Resume | David Anand Daniel - Senior SaaS Solutions Engineer";
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get("print") === "1") {
      setTimeout(() => window.print(), 300);
    }
  }, [location.search]);

  const onPrint = () => window.print();

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="container mx-auto px-6 py-10 print:py-0">
        {/* Header */}
        <header className="flex items-start justify-between gap-6 border-b border-border pb-6 print:border-none">
          <div>
            <h1 className="text-3xl font-bold">David Anand Daniel</h1>
            <p className="text-muted-foreground">Senior SaaS Solutions Engineer & Technical Consultant</p>
            <p className="mt-2 text-sm">Available from July 2025</p>
          </div>
          <div className="flex gap-3 print:hidden">
            <Button variant="accent" onClick={onPrint}>Download PDF</Button>
            <Button variant="outline" asChild>
              <a href="mailto:davidanand0123@gmail.com">Send Email</a>
            </Button>
            <Button variant="hero" asChild>
              <a href="https://davidanand.zohobookings.com/#/4743390000000047052" target="_blank" rel="noopener noreferrer">Schedule a Call</a>
            </Button>
          </div>
        </header>

        {/* Contact */}
        <section className="mt-4 text-sm flex flex-wrap gap-x-6 gap-y-1 print:mt-2">
          <a href="mailto:davidanand0123@gmail.com" className="underline underline-offset-4">davidanand0123@gmail.com</a>
          <span>+33 07 69 29 78 46</span>
          <a href="https://www.linkedin.com/in/david-anand-daniel" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">linkedin.com/in/david-anand-daniel</a>
          <span>Grenoble, France</span>
        </section>

        {/* Summary */}
        <section className="mt-6">
          <h2 className="text-xl font-semibold">Professional Summary</h2>
          <p className="mt-2 text-sm leading-6 text-foreground">
            Results-driven SaaS Solutions Expert with 7+ years in Presales, Technical Consulting & Customer Success, consistently delivering quantifiable outcomes. Proven ability to translate complex technical concepts into strategic client partnerships, accelerating deal cycles and achieving ARR growth.
          </p>
        </section>

        {/* Core Skills */}
        <section className="mt-6">
          <h2 className="text-xl font-semibold">Core Skills</h2>
          <ul className="mt-2 grid md:grid-cols-2 gap-x-8 gap-y-1 text-sm list-disc pl-5">
            <li>Presales & Solution Engineering, SaaS Discovery & Demos</li>
            <li>Solution Architecture, RFI/RFP, Competitive Analysis</li>
            <li>Customer Onboarding, Success, and Renewal Strategy</li>
            <li>Revenue Generation, Deal Strategy, Stakeholder Management</li>
            <li>Process Development, Team Enablement & Mentorship</li>
            <li>CRM (Salesforce, HubSpot), Analytics & Reporting</li>
          </ul>
        </section>

        {/* Experience */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold">Professional Experience</h2>

          <article className="mt-4">
            <header>
              <h3 className="font-semibold">Zluri — Senior Presales Engineer</h3>
              <p className="text-xs text-muted-foreground">Aug 2023 - Jul 2024 · 1 yr</p>
            </header>
            <ul className="mt-2 space-y-1 text-sm list-disc pl-5">
              <li>Addressed fragmented SaaS spend by designing and implementing tailored management solutions for 15+ enterprises, driving 20–25% efficiency gains and 15–20% cost savings within 6–12 months.</li>
              <li>Closed feature-fit gaps by partnering with key customers to influence 3+ roadmap features, lifting module adoption and CSAT by ~30%.</li>
              <li>Overcame executive skepticism by leading targeted C‑suite demos and deep‑dives, achieving an 85%+ meeting→proposal conversion rate.</li>
              <li>Mitigated churn risk by building strategic partnerships, sustaining 90%+ retention and increasing upsell pipeline by ~40%.</li>
            </ul>
          </article>

          <article className="mt-4">
            <header>
              <h3 className="font-semibold">CM.com — Senior Technical Consultant</h3>
              <p className="text-xs text-muted-foreground">Jan 2021 - Aug 2023 · 2 yrs 8 mos</p>
            </header>
            <ul className="mt-2 space-y-1 text-sm list-disc pl-5">
              <li>Launched India operations from zero baseline by establishing presales and technical support processes, scaling regional capacity by ~40% in 12 months and enabling market entry.</li>
              <li>Reduced time‑to‑value by ~40% via streamlined onboarding and proactive success motions, maintaining 95%+ CSAT.</li>
              <li>Informed GTM prioritization with competitor and feasibility analysis, identifying €2M+ market opportunity in the Indian subcontinent.</li>
              <li>Addressed team skill gaps by mentoring 8+ hires and codifying excellence standards, improving team productivity by ~25%.</li>
              <li>Secured VBJ Jewellers as the first MSC Pro deal by positioning complex communication solutions, opening a new €500K+ annual segment.</li>
              <li>Revived previously “unsellable” MMC through strategic repositioning, driving 25%+ adoption growth and significant new revenue in 9 months.</li>
              <li>Enhanced credibility via public client recognition on LinkedIn, contributing to a 150%+ increase in referral business.</li>
            </ul>
          </article>

          <article className="mt-4">
            <header>
              <h3 className="font-semibold">Freshworks — Solution Engineer</h3>
              <p className="text-xs text-muted-foreground">Aug 2019 - Dec 2020 · 1 yr 5 mos</p>
            </header>
            <ul className="mt-2 space-y-1 text-sm list-disc pl-5">
              <li>Aligned solution strategy to evolving customer needs to remove adoption barriers, lifting solution uptake by ~25%.</li>
              <li>Reduced escalations by ~35% by assisting complex onboarding and problem‑solving.</li>
              <li>Awarded “Chief Closer 2020 at Freshworks” for exceptional deal closure performance (top 5% of team).</li>
              <li>Personally influenced $1.14M USD ARR through strategic solution positioning.</li>
              <li>Achieved 102% of FY2020 sales target through a consultative approach.</li>
            </ul>
          </article>

          <article className="mt-4">
            <header>
              <h3 className="font-semibold">Zoho Corporation (ManageEngine) — Presales & Technical Support Specialist</h3>
              <p className="text-xs text-muted-foreground">Jun 2017 - Jul 2019 · 2 yrs 2 mos</p>
            </header>
            <ul className="mt-2 space-y-1 text-sm list-disc pl-5">
              <li>Simplified complex IT challenges for 200+ SMB/enterprise clients, improving system efficiency by 15–20% and reducing resolution time by 10–15%.</li>
              <li>Conducted health checks and optimization assessments, identifying average cost savings of 15–20% per client.</li>
              <li>Delivered exceptional support that helped maintain a 4.2+ Gartner rating and contributed to Customers’ Choice awards (2018 & 2019).</li>
              <li>De‑escalated 150+ critical situations, converting 25–30% dissatisfied clients into advocates and improving retention.</li>
              <li>Built a reputation for turnaround leadership in high‑stakes cases, achieving 90%+ CSAT in escalations.</li>
            </ul>
          </article>
        </section>

        {/* Education */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold">Education</h2>
          <ul className="mt-2 text-sm list-disc pl-5">
            <li>MBA, Grenoble Ecole de Management — Strategy & Marketing</li>
            <li>B.E., St. Joseph's College of Engineering — Mechanical Engineering</li>
          </ul>
        </section>

        {/* Footer note */}
        <footer className="mt-10 text-xs text-muted-foreground print:hidden">
          This resume is ATS‑friendly: plain structure, semantic sections, and consistent headings. For a signed PDF or DOCX, contact me.
        </footer>
      </section>
    </main>
  );
};

export default Resume;

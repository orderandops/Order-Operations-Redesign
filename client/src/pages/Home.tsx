import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, ChevronRight, MessageSquare, Briefcase, FileText } from "lucide-react";
import logo from "@assets/logo.png";
import heroConsulting from "@/assets/hero-consulting.jpg";
import textMyAppImg from "@/assets/textmyapp-worker.jpg";
import payrollProofImg from "@/assets/payrollproof.jpg";
import performancePathImg from "@/assets/performancepath.jpg";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <img src={logo} alt="Order & Operations Consulting" className="h-10 object-contain" />
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#consulting" className="transition-colors hover:text-primary">Consulting</a>
            <a href="#products" className="transition-colors hover:text-primary">Software Products</a>
            <a href="#about" className="transition-colors hover:text-primary">About</a>
          </nav>
          <div className="flex items-center gap-4">
            <Button className="hidden md:inline-flex rounded-full px-6">
              Contact Us
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative pt-20 pb-32 overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="flex flex-col justify-center space-y-8">
                <div className="space-y-4">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-secondary leading-[1.1]">
                    Designed for People. <br/>
                    <span className="text-primary italic">Built to Scale.</span>
                  </h1>
                  <p className="text-lg md:text-xl text-muted-foreground max-w-[600px] leading-relaxed">
                    Stop reacting to HR fires and start building a workforce that powers your ambition. We provide the order your operations require and the intelligence your people deserve.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="rounded-full px-8 h-14 text-base bg-primary hover:bg-primary/90">
                    Take HR Foundations Assessment
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-base border-secondary text-secondary hover:bg-secondary hover:text-white">
                    Explore Solutions
                  </Button>
                </div>
              </div>
              <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none">
                <div className="aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative">
                  <div className="absolute inset-0 bg-secondary/10 mix-blend-multiply z-10" />
                  <img 
                    src={heroConsulting} 
                    alt="Professional business meeting" 
                    className="object-cover w-full h-full scale-105 transition-transform duration-700 hover:scale-100"
                  />
                </div>
                
                {/* Decorative element */}
                <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl z-20 max-w-[280px] hidden md:block">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle2 className="h-6 w-6 text-primary" />
                    </div>
                    <p className="font-semibold text-secondary">Director-Level Advisory</p>
                  </div>
                  <p className="text-sm text-muted-foreground">Expert oversight to keep your policies and engagement running smoothly.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Value Prop Section */}
        <section id="consulting" className="py-24 bg-muted/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-secondary">The Infrastructure for Your Growth</h2>
              <p className="text-lg text-muted-foreground">
                Most small businesses hit a "growth ceiling" where manual processes break and compliance becomes a liability. We replace that chaos with a professional people operations engine.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Custom Compliance Foundations",
                  description: "We map your risks across every state you operate in, building tailored policies and workflows that keep your business airtight as you scale.",
                  icon: FileText
                },
                {
                  title: "Intelligent Self-Service Hubs",
                  description: "We deploy AI-powered knowledge systems that give your employees 24/7 access to the answers they need, freeing leadership from bottlenecks.",
                  icon: MessageSquare
                },
                {
                  title: "Strategic HR Partnership",
                  description: "You don't just get a software login; you get a strategic partner. We provide expert oversight for your engagement and policies.",
                  icon: Briefcase
                }
              ].map((feature, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-border hover:shadow-md transition-shadow">
                  <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <feature.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Suite Section */}
        <section id="products" className="py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-20 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-secondary">Our Software Solutions</h2>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Purpose-built tools designed by HR experts to solve the most painful operational challenges in growing businesses.
              </p>
            </div>

            <div className="space-y-24">
              {/* TextMyApp */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 rounded-3xl overflow-hidden shadow-xl aspect-[4/3] md:aspect-video lg:aspect-[4/3]">
                  <img src={textMyAppImg} alt="Worker texting on site" className="w-full h-full object-cover" />
                </div>
                <div className="order-1 lg:order-2 space-y-6 lg:pl-12">
                  <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-primary/10 text-primary mb-2">
                    Hiring & Recruitment
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-secondary">Hire faster. Just text.</h3>
                  <p className="text-lg text-muted-foreground">
                    The only text-to-apply platform that actually completes the application—no links, no forms, no drop-off. Built for construction, trades & manufacturing.
                  </p>
                  <ul className="space-y-3 py-4">
                    {["Eliminate 80% application drop-off", "AI naturally handles English and Spanish", "Syncs directly to your internal workflow"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-secondary">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="rounded-full px-6 border-secondary text-secondary">
                    Explore TextMyApp
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* PayrollProof */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 lg:pr-12">
                  <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-secondary/10 text-secondary mb-2">
                    Compliance
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-secondary">Stop struggling with certified payroll.</h3>
                  <p className="text-lg text-muted-foreground">
                    Generate compliant WH-347 reports in minutes, not hours. AI-powered classification matching catches errors before they become penalties.
                  </p>
                  <ul className="space-y-3 py-4">
                    {["Built by a former DOL investigator", "Works with your existing payroll system", "Catches rate and classification errors early"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-secondary">
                        <CheckCircle2 className="h-5 w-5 text-secondary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="rounded-full px-6 border-secondary text-secondary">
                    Explore PayrollProof
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="rounded-3xl overflow-hidden shadow-xl aspect-[4/3] md:aspect-video lg:aspect-[4/3]">
                  <img src={payrollProofImg} alt="Payroll review" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* PerformancePath */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 rounded-3xl overflow-hidden shadow-xl aspect-[4/3] md:aspect-video lg:aspect-[4/3]">
                  <img src={performancePathImg} alt="Performance review" className="w-full h-full object-cover" />
                </div>
                <div className="order-1 lg:order-2 space-y-6 lg:pl-12">
                  <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-primary/10 text-primary mb-2">
                    Retention & Growth
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-secondary">Stop winging it with new hires.</h3>
                  <p className="text-lg text-muted-foreground">
                    From job description to promotion path — one AI-powered system for the entire employee journey. Keep your best people engaged and growing.
                  </p>
                  <ul className="space-y-3 py-4">
                    {["AI-powered job description generator", "Automated 30-60-90 day onboarding plans", "Performance reviews that write themselves"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-secondary">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="rounded-full px-6 border-secondary text-secondary">
                    Explore PerformancePath
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 bg-secondary text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-16">
              <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl font-bold font-serif">Ready to bring order to your operations?</h2>
                <p className="text-lg text-white/80 max-w-md">
                  Whether you need strategic HR consulting or powerful software tools to scale your workforce, we're here to help.
                </p>
                <div className="space-y-4">
                  <p className="text-xl font-medium">hello@orderandoperations.com</p>
                </div>
              </div>
              <div className="bg-white/10 p-8 md:p-10 rounded-3xl backdrop-blur-sm">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">First name *</label>
                      <input type="text" className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Jane" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Last name *</label>
                      <input type="text" className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email *</label>
                    <input type="email" className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="jane@company.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Company</label>
                    <input type="text" className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Your Company" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Message</label>
                    <textarea rows={4} className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary resize-none" placeholder="How can we help?"></textarea>
                  </div>
                  <Button className="w-full h-14 rounded-xl text-base bg-primary hover:bg-primary/90 text-white border-0">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-background py-12 border-t">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <img src={logo} alt="Order & Operations Consulting" className="h-8 object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all" />
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">FAQ</a>
              <a href="#" className="hover:text-primary transition-colors">Terms & Conditions</a>
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Refund Policy</a>
            </div>
            
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Order & Operations Consulting.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

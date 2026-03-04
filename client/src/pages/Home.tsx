import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, ChevronRight, MessageSquare, Briefcase, FileText } from "lucide-react";
import newLogo from "@assets/image_1772658839853.png";
import heroConsulting from "@/assets/hero-watercolor.png";
import textMyAppImg from "@/assets/textmyapp-watercolor.png";
import payrollProofImg from "@/assets/payrollproof-watercolor.png";
import performancePathImg from "@/assets/performancepath-watercolor.png";
import headshot from "@assets/Blue_Headshot_1772656554110.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <img src={newLogo} alt="Order & Operations Consulting" className="h-10 md:h-14 w-auto object-contain mix-blend-multiply" />
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium z-10">
            <a href="#consulting" className="transition-colors hover:text-primary">Consulting</a>
            <a href="#products" className="transition-colors hover:text-primary">Software Products</a>
            <a href="#about" className="transition-colors hover:text-primary">About</a>
          </nav>
          <div className="flex items-center gap-4">
            <a href="#contact">
              <Button className="hidden md:inline-flex rounded-full px-6">
                Contact Us
              </Button>
            </a>
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
                  <a href="https://darcie-coowof3d.scoreapp.com/" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="rounded-full px-8 h-14 text-base bg-primary hover:bg-primary/90 w-full sm:w-auto">
                      Take HR Foundations Assessment
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </a>
                  <a href="#products">
                    <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-base border-secondary text-secondary hover:bg-secondary hover:text-white w-full sm:w-auto">
                      Explore Solutions
                    </Button>
                  </a>
                </div>
              </div>
              <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none">
                <div className="aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative bg-white">
                  <div className="absolute inset-0 bg-secondary/5 mix-blend-multiply z-10" />
                  <img 
                    src={heroConsulting} 
                    alt="Professional business meeting watercolor" 
                    className="object-cover w-full h-full scale-105 transition-transform duration-700 hover:scale-100"
                  />
                </div>
                
                {/* Decorative element */}
                <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl z-20 max-w-[280px] hidden md:block border border-border/50">
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

        {/* About Section */}
        <section id="about" className="py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 relative mx-auto w-full max-w-[400px]">
                <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[3/4] bg-white">
                  <div className="absolute inset-0 bg-secondary/5 mix-blend-multiply z-10" />
                  <img 
                    src={headshot} 
                    alt="Darcie Gregoire, Founder" 
                    className="object-cover object-top w-full h-full scale-105 transition-transform duration-700 hover:scale-100"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-6 z-20">
                    <h3 className="text-white font-bold text-xl">Darcie Gregoire</h3>
                    <p className="text-white/80 text-sm">SPHR, SHRM-SCP</p>
                    <p className="text-primary font-medium text-sm mt-1">Founder & Principal Strategist</p>
                  </div>
                </div>
                {/* Decorative blob behind image */}
                <div className="absolute -z-10 -inset-4 bg-primary/10 rounded-full blur-3xl opacity-70"></div>
              </div>
              
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-primary/10 text-primary mb-2">
                  About Us
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-secondary">Why I started Order & Operations</h2>
                
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    I started Order & Operations Consulting after spending years inside organizations where HR slowly became everyone's job — and no one's job at the same time.
                  </p>
                  <p>
                    I watched founders, ops leaders, and finance teams get pulled into people issues they never planned to manage: answering the same questions over and over, worrying about multi-state compliance, and making judgment calls without the right systems to back them up. Not because they were doing anything wrong — but because the business had outgrown informal processes before it was ready to hire a full HR team.
                  </p>
                  <p>
                    My background spans Department of Labor investigations & enforcement, multi-state compliance, HR leadership, and systems implementation. I've seen what happens when people operations are built thoughtfully — and what it costs when they aren't. That's what led me to start this firm.
                  </p>
                </div>
                
                <div className="bg-muted/50 p-6 rounded-2xl border border-border/50 mt-6">
                  <p className="text-secondary font-medium italic text-lg text-center">
                    "Our mission is simple: give growing businesses confidence that their people operations are handled — so leaders can stay focused on growth, not HR fire drills."
                  </p>
                </div>
                
                <div className="pt-4">
                  <a href="https://www.orderandoperations.com/book-free-consultation" target="_blank" rel="noopener noreferrer">
                    <Button className="rounded-full px-8 h-12 text-base bg-secondary hover:bg-secondary/90 text-white">
                      Book a Consultation
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Suite Section */}
        <section id="products" className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-20 space-y-4 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-secondary">Our Software Solutions</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Purpose-built tools designed by HR experts to solve the most painful operational challenges in growing businesses.
              </p>
            </div>

            <div className="space-y-32">
              {/* TextMyApp */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 rounded-3xl overflow-hidden shadow-xl aspect-[4/3] md:aspect-video lg:aspect-[4/3] bg-white">
                  <img src={textMyAppImg} alt="Worker texting on site watercolor" className="w-full h-full object-cover" />
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
                  <a href="https://textmyapp.replit.app" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="rounded-full px-6 border-secondary text-secondary">
                      Explore TextMyApp
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
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
                  <a href="https://certifiedpayroll.replit.app" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="rounded-full px-6 border-secondary text-secondary">
                      Explore PayrollProof
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </div>
                <div className="rounded-3xl overflow-hidden shadow-xl aspect-[4/3] md:aspect-video lg:aspect-[4/3] bg-white">
                  <img src={payrollProofImg} alt="Payroll review watercolor" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* PerformancePath */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 rounded-3xl overflow-hidden shadow-xl aspect-[4/3] md:aspect-video lg:aspect-[4/3] bg-white">
                  <img src={performancePathImg} alt="Performance review watercolor" className="w-full h-full object-cover" />
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
                  <a href="https://performancepath.replit.app" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="rounded-full px-6 border-secondary text-secondary">
                      Explore PerformancePath
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-secondary text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-16">
              <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl font-bold font-serif">Ready to bring order to your operations?</h2>
                <p className="text-lg text-white/80 max-w-md">
                  Whether you need strategic HR consulting or powerful software tools to scale your workforce, we're here to help.
                </p>
                <div className="space-y-4">
                  <p className="text-xl font-medium">
                    <a href="mailto:hello@orderandoperations.com" className="hover:text-primary transition-colors">
                      hello@orderandoperations.com
                    </a>
                  </p>
                  <div className="pt-4">
                    <a href="https://www.linkedin.com/company/orderandoperations" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/10 hover:bg-primary transition-colors">
                      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-3xl overflow-hidden shadow-2xl h-[600px]">
                <iframe 
                  src="https://calendly.com/darcie-orderandoperations" 
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  title="Schedule a meeting with Darcie Gregoire"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-background py-12 border-t">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <img src={newLogo} alt="Order & Operations Consulting" className="h-8 object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all mix-blend-multiply" />
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <a href="https://www.orderandoperations.com/faq" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">FAQ</a>
              <a href="https://www.orderandoperations.com/terms-conditions" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Terms & Conditions</a>
              <a href="https://www.orderandoperations.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="https://www.orderandoperations.com/refund-policy" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Refund Policy</a>
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

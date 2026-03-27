import newLogo from "@assets/image_1772658839853.png";
import { MessageSquare } from "lucide-react";

export default function Apply() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <img src={newLogo} alt="Order & Operations Consulting" className="h-10 md:h-14 w-auto object-contain mix-blend-multiply" />
          </a>
          <a href="/" className="text-sm font-medium text-secondary hover:text-primary transition-colors">
            &larr; Back to Home
          </a>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="bg-secondary py-20 text-white text-center">
          <div className="container mx-auto px-4 md:px-6 max-w-2xl space-y-4">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/20 mx-auto mb-4">
              <MessageSquare className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">How to Apply for Jobs with TextMyApp</h1>
            <p className="text-lg text-white/70">Applying for a job has never been easier — no apps, no forms, just text.</p>
          </div>
        </section>

        {/* Steps */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <div className="space-y-8">
              {[
                {
                  step: "1",
                  title: "Get your application code from an employer",
                  description: "You'll find it on job postings, flyers, or the employer's website."
                },
                {
                  step: "2",
                  title: "Text your code to (704) 235-1350 or (888) 808-3231",
                  description: "Send your application code as a text message to either number."
                },
                {
                  step: "3",
                  title: "Answer a few simple questions via text",
                  description: "Our AI will guide you through the application in your preferred language — no app download required."
                },
                {
                  step: "4",
                  title: "Your application is sent directly to the employer",
                  description: "That's it! The employer receives your completed application automatically."
                }
              ].map((item) => (
                <div key={item.step} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg">
                    {item.step}
                  </div>
                  <div className="bg-white border border-border rounded-2xl p-6 flex-1 shadow-sm">
                    <h3 className="text-lg font-bold text-secondary mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Example */}
            <div className="mt-16 bg-secondary rounded-3xl p-8 text-white text-center">
              <h2 className="text-2xl font-bold mb-4">Example</h2>
              <p className="text-white/80 text-lg">
                If your code is <span className="font-bold text-primary bg-primary/20 px-2 py-0.5 rounded">APP001</span>, text <span className="font-bold text-primary bg-primary/20 px-2 py-0.5 rounded">"APP001"</span> to <span className="font-bold text-white">(704) 235-1350</span> or <span className="font-bold text-white">(888) 808-3231</span>
              </p>
            </div>

            {/* SMS Disclosures */}
            <div className="mt-12 bg-muted/50 border border-border rounded-2xl p-8 space-y-4">
              <h2 className="text-xl font-bold text-secondary">SMS Consent & Disclosures</h2>
              <p className="text-muted-foreground">
                By texting your application code to our number, you consent to receive recurring text messages about job opportunities from TextMyApp.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">·</span>
                  Message frequency varies based on your application (typically 5–10 messages).
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">·</span>
                  Message and data rates may apply.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">·</span>
                  Reply <strong>STOP</strong> at any time to opt out.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">·</span>
                  Reply <strong>HELP</strong> for assistance.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">·</span>
                  Carrier support is not available for this service.
                </li>
              </ul>
              <div className="pt-4 border-t border-border space-y-2">
                <p className="text-sm text-muted-foreground">Questions?</p>
                <a href="mailto:hello@orderandoperations.com" className="text-primary hover:underline font-medium">
                  hello@orderandoperations.com
                </a>
                <div className="flex gap-4 pt-2">
                  <a href="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
                  <a href="/terms-conditions" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms & Conditions</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-background py-12 border-t">
        <div className="container mx-auto px-4 md:px-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Order & Operations Consulting. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

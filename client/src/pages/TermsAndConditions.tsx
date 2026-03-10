import newLogo from "@assets/image_1772658839853.png";

export default function TermsAndConditions() {
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

      <main className="container mx-auto px-4 md:px-6 py-16 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-2">Terms & Conditions</h1>
        <p className="text-muted-foreground mb-12">Last updated: March 10, 2026</p>

        <div className="prose prose-lg max-w-none space-y-8 text-secondary/90">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-secondary">1. Overview</h2>
            <p>
              These Terms and Conditions ("Terms") govern your use of services provided by Order & Operations Consulting, LLC ("Company," "we," "us," or "our"), including our consulting services and software platforms. By accessing or using our services, you agree to be bound by these Terms.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-secondary">2. TextMyApp SMS Program</h2>
            <p>
              <strong>Program Name:</strong> TextMyApp by Order & Operations Consulting
            </p>
            <p>
              <strong>Program Description:</strong> TextMyApp is a text-to-apply hiring platform designed for construction, trades, and manufacturing industries. The program allows job applicants to complete employment applications entirely via SMS text messaging — no links, no forms, and no app downloads required. Employers use TextMyApp to receive completed applications directly into their workflow.
            </p>

            <h3 className="text-xl font-bold text-secondary mt-6">Message & Data Rates</h3>
            <p>
              Standard message and data rates may apply to any text messages sent or received through the TextMyApp platform. Message and data rates are determined by your wireless carrier and your mobile plan. Order & Operations Consulting is not responsible for any charges incurred from your carrier.
            </p>

            <h3 className="text-xl font-bold text-secondary mt-6">Message Frequency</h3>
            <p>
              Message frequency varies based on your interaction with the TextMyApp platform. Applicants typically receive between 5–15 messages per application session. Employers may receive message notifications as applications are submitted. Recurring messages may be sent for application status updates or follow-ups.
            </p>

            <h3 className="text-xl font-bold text-secondary mt-6">Support Contact</h3>
            <p>
              For questions or support regarding the TextMyApp SMS program, you may contact us at:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Email: <a href="mailto:hello@orderandoperations.com" className="text-primary hover:underline">hello@orderandoperations.com</a></li>
              <li>Text <strong>HELP</strong> to your assigned TextMyApp number for immediate assistance</li>
            </ul>

            <h3 className="text-xl font-bold text-secondary mt-6">Opt-Out Instructions</h3>
            <div className="bg-muted/50 border border-border rounded-2xl p-6">
              <p>
                You may opt out of receiving text messages from TextMyApp at any time.
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>
                  To opt out, text <strong className="text-secondary text-lg">STOP</strong> to your assigned TextMyApp number. You will receive a one-time confirmation message acknowledging your opt-out request, and no further messages will be sent.
                </li>
                <li>
                  To request help or support, text <strong className="text-secondary text-lg">HELP</strong> to your assigned TextMyApp number. You will receive a message with support contact information.
                </li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-secondary">3. Software Products</h2>
            <p>
              Order & Operations Consulting offers additional software solutions including PayrollProof (certified payroll compliance reporting) and PerformancePath (employee onboarding and performance management). Use of each product is subject to these general Terms and any additional terms presented at the time of enrollment or purchase.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-secondary">4. Consulting Services</h2>
            <p>
              Our consulting engagements are governed by individual service agreements entered into between the Company and the client. These Terms apply in addition to any specific consulting agreement unless otherwise stated in writing.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-secondary">5. User Responsibilities</h2>
            <p>
              By using our services, you agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate and complete information when required</li>
              <li>Use the services in compliance with all applicable local, state, and federal laws</li>
              <li>Not misuse, reverse engineer, or attempt to gain unauthorized access to any of our platforms</li>
              <li>Maintain the confidentiality of any account credentials provided to you</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-secondary">6. Intellectual Property</h2>
            <p>
              All content, software, branding, and materials provided by Order & Operations Consulting are the intellectual property of the Company and are protected by applicable copyright, trademark, and intellectual property laws. You may not reproduce, distribute, or create derivative works without our prior written consent.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-secondary">7. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Order & Operations Consulting shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services, including but not limited to loss of data, revenue, or business opportunities.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-secondary">8. Modifications</h2>
            <p>
              We reserve the right to update or modify these Terms at any time. Changes will be posted on this page with an updated effective date. Your continued use of our services after any modifications constitutes acceptance of the revised Terms.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-secondary">9. Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <p>
              Order & Operations Consulting, LLC<br />
              Email: <a href="mailto:hello@orderandoperations.com" className="text-primary hover:underline">hello@orderandoperations.com</a>
            </p>
          </section>
        </div>
      </main>

      <footer className="bg-background py-12 border-t">
        <div className="container mx-auto px-4 md:px-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Order & Operations Consulting. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

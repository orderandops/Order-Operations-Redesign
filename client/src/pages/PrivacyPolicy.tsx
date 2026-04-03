import newLogo from "@assets/image_1772658839853.png";
import { usePageMeta } from "@/hooks/use-page-meta";

export default function PrivacyPolicy() {
  usePageMeta(
    "Privacy Policy | Order & Operations Consulting",
    "Privacy policy for Order & Operations Consulting. Details what data we collect, how it is used, and confirms your information is never shared with third parties for marketing purposes."
  );
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
        <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-2">Privacy Policy</h1>
        <p className="text-muted-foreground mb-12">Last updated: March 10, 2026</p>

        <div className="prose prose-lg max-w-none space-y-8 text-secondary/90">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-secondary">1. Introduction</h2>
            <p>
              Order & Operations Consulting, LLC ("Company," "we," "us," or "our") is committed to protecting the privacy of our users, clients, and job applicants. This Privacy Policy explains what data we collect, how we use it, and the measures we take to safeguard your information when you use our website, consulting services, and software platforms — including TextMyApp, PayrollProof, and PerformancePath.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-secondary">2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>

            <h3 className="text-xl font-bold text-secondary mt-6">Information You Provide Directly</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name, email address, phone number, and other contact information submitted through forms, consultations, or scheduling tools</li>
              <li>Employment application data submitted through the TextMyApp SMS platform, including name, work experience, availability, certifications, and any other information provided during the text-based application process</li>
              <li>Payroll and employee data uploaded to PayrollProof for certified payroll report generation</li>
              <li>Employee performance, onboarding, and job description data entered into PerformancePath</li>
            </ul>

            <h3 className="text-xl font-bold text-secondary mt-6">Information Collected Automatically</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Device type, browser type, and operating system</li>
              <li>IP address and approximate geographic location (city, state, country)</li>
              <li>Pages visited, time spent on site, and interaction data (clicks, scrolls)</li>
              <li>Referring website or source</li>
            </ul>

            <h3 className="text-xl font-bold text-secondary mt-6">SMS & Text Message Data (TextMyApp)</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Phone numbers of applicants who initiate or receive text messages</li>
              <li>Content of text messages exchanged during the application process</li>
              <li>Opt-in and opt-out status</li>
              <li>Message delivery timestamps</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-secondary">3. How We Use Your Information</h2>
            <p>We use the information we collect for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To facilitate and complete job applications through the TextMyApp SMS platform</li>
              <li>To deliver employment application data to the hiring employer who uses our platform</li>
              <li>To generate certified payroll reports and compliance documentation through PayrollProof</li>
              <li>To provide employee onboarding, performance management, and career development tools through PerformancePath</li>
              <li>To provide consulting services and communicate with clients</li>
              <li>To improve our website, services, and user experience through anonymized analytics</li>
              <li>To respond to inquiries and provide customer support</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-secondary">4. Information Sharing & Third Parties</h2>
            <div className="bg-muted/50 border border-border rounded-2xl p-6">
              <p className="font-semibold text-secondary text-lg mb-3">
                We do not sell, rent, or share your personal information with third parties for marketing purposes.
              </p>
              <p>
                Your information will not be shared with or sold to outside companies for their own advertising or promotional use. We only share data in the following limited circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li><strong>With the hiring employer:</strong> Application data submitted through TextMyApp is shared with the employer who has set up the job listing. This is the core function of the platform — to deliver completed applications to the employer.</li>
                <li><strong>With service providers:</strong> We may use trusted third-party services (such as SMS delivery providers, hosting, and analytics tools) that process data on our behalf. These providers are bound by contractual obligations to keep your information confidential and use it only for the purposes we specify.</li>
                <li><strong>When required by law:</strong> We may disclose information if required to do so by law, regulation, legal process, or governmental request.</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-secondary">5. Data Security</h2>
            <p>
              We take reasonable administrative, technical, and physical measures to protect the information we collect from unauthorized access, use, alteration, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-secondary">6. Data Retention</h2>
            <p>
              We retain personal information only for as long as necessary to fulfill the purposes described in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. Application data collected through TextMyApp is retained in accordance with the employer's data retention requirements and applicable employment laws.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-secondary">7. Your Rights & Choices</h2>
            <p>You have the following rights regarding your personal information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Opt-out of SMS:</strong> Text <strong className="text-secondary text-lg">STOP</strong> to your assigned TextMyApp number at any time to stop receiving messages</li>
              <li><strong>Request support:</strong> Text <strong className="text-secondary text-lg">HELP</strong> to your assigned TextMyApp number for assistance</li>
              <li><strong>Access & correction:</strong> You may request access to or correction of your personal data by contacting us at <a href="mailto:hello@orderandoperations.com" className="text-primary hover:underline">hello@orderandoperations.com</a></li>
              <li><strong>Deletion:</strong> You may request deletion of your personal data, subject to any legal retention requirements</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-secondary">8. Children's Privacy</h2>
            <p>
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have inadvertently collected information from a minor, we will take steps to delete it promptly.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-secondary">9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised effective date. We encourage you to review this policy periodically to stay informed about how we are protecting your information.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-secondary">10. Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
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

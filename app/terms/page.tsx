import type { Metadata } from "next"
import { LegalPage } from "@/components/legal/legal-page"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for AEIV Global Private Limited and its products Blisswork, GRC, and WCAG.",
}

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of service"
      updated="Last updated: January 2025"
      sections={[
        {
          heading: "1. Acceptance of terms",
          body: [
            "By accessing this website or using any product offered by AEIV Global Private Limited (\"AEIV Global\"), including Blisswork, GRC, and WCAG, you agree to be bound by these terms of service.",
          ],
        },
        {
          heading: "2. Our services",
          body: [
            "AEIV Global provides enterprise software products focused on workplace experience, governance, risk and compliance, and digital accessibility. Specific commercial terms, service levels, and pricing for each product are agreed separately with each client.",
          ],
        },
        {
          heading: "3. Use of this website",
          body: [
            "This website is provided for informational purposes about AEIV Global and its products. You agree not to misuse the website, attempt to gain unauthorized access to our systems, or use the site for any unlawful purpose.",
          ],
        },
        {
          heading: "4. Intellectual property",
          body: [
            "All content on this website, including text, graphics, logos, and product names such as Blisswork, GRC, and WCAG, is the property of AEIV Global Private Limited unless otherwise indicated, and may not be used without prior written permission.",
          ],
        },
        {
          heading: "5. Limitation of liability",
          body: [
            "This website and its content are provided on an \"as is\" basis without warranties of any kind. AEIV Global shall not be liable for any indirect, incidental, or consequential damages arising from the use of this website.",
          ],
        },
        {
          heading: "6. Governing law",
          body: [
            "These terms are governed by the laws of India, and any disputes shall be subject to the jurisdiction of the courts of Nagpur, Maharashtra.",
          ],
        },
        {
          heading: "7. Contact us",
          body: [
            "For questions about these terms, please contact us at sidaeivarc@gmail.com or at our registered office: 24 B Layout, Bezonbagh, Nagpur, Nagpur, Maharashtra, India, 440014.",
          ],
        },
      ]}
    />
  )
}

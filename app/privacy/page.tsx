import type { Metadata } from "next"
import { LegalPage } from "@/components/legal/legal-page"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for AEIV Global Private Limited and its products Blisswork, GRC, and WCAG.",
}

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy policy"
      updated="Last updated: January 2025"
      sections={[
        {
          heading: "1. Overview",
          body: [
            "AEIV Global Private Limited (\"AEIV Global\", \"we\", \"us\", or \"our\") is committed to protecting the privacy of visitors to our website and users of our products, including Blisswork, GRC, and WCAG. This policy explains what information we collect, how we use it, and the choices you have.",
          ],
        },
        {
          heading: "2. Information we collect",
          body: [
            "When you contact us through our website or products, we may collect information you provide directly, such as your name, company, email address, and the contents of your message.",
            "We may also collect limited technical information, such as browser type and general usage patterns, to help us improve our website and services.",
          ],
        },
        {
          heading: "3. How we use your information",
          body: [
            "We use the information we collect to respond to enquiries, provide and improve our products, communicate with prospective and existing clients, and comply with applicable legal obligations, including India's Digital Personal Data Protection Act, 2023.",
          ],
        },
        {
          heading: "4. Data sharing",
          body: [
            "We do not sell personal information. We may share information with service providers who help us operate our website and business, under confidentiality obligations, or where required by law.",
          ],
        },
        {
          heading: "5. Data security",
          body: [
            "We apply reasonable administrative, technical, and organizational safeguards designed to protect the information we hold from unauthorized access, disclosure, alteration, or destruction.",
          ],
        },
        {
          heading: "6. Your rights",
          body: [
            "You may request access to, correction of, or deletion of your personal information by contacting us at sidaeivarc@gmail.com.",
          ],
        },
        {
          heading: "7. Contact us",
          body: [
            "If you have questions about this privacy policy, please write to us at sidaeivarc@gmail.com or at our registered office: 24 B Layout, Bezonbagh, Nagpur, Nagpur, Maharashtra, India, 440014.",
          ],
        },
      ]}
    />
  )
}

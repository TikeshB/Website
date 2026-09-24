import type { Metadata } from "next";
import { ContactHero } from "@/components/contact/contact-hero";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactDetails } from "@/components/contact/contact-details";

export const metadata: Metadata = {
  title: "Contact Us | AEIV Global Private Limited",
  description:
    "Get in touch with AEIV Global Private Limited, Nagpur. Reach us for demos, partnerships, or support for Blisswork, GRC, and WCAG.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <section className="relative py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
            <div className="lg:col-span-5">
              <ContactDetails />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

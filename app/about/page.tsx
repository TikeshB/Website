import type { Metadata } from "next";
import { AboutHero } from "@/components/about/about-hero";
import { AboutStory } from "@/components/about/about-story";
import { AboutValues } from "@/components/about/about-values";
import { AboutDetails } from "@/components/about/about-details";
import { CtaSection } from "@/components/landing/cta-section";

export const metadata: Metadata = {
  title: "About Us | AEIV Global Private Limited",
  description:
    "AEIV Global Private Limited is a Nagpur-based software company building Blisswork, GRC, and WCAG — focused platforms for workplace experience, governance, and accessibility.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutDetails />
      <CtaSection />
    </>
  );
}

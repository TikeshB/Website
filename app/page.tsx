import { HeroSection } from "@/components/landing/hero-section";
import { ProductsSection } from "@/components/landing/products-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { IndustriesSection } from "@/components/landing/industries-section";
import { ComplianceSection } from "@/components/landing/compliance-section";
import { MetricsSection } from "@/components/landing/metrics-section";
import { PrinciplesSection } from "@/components/landing/principles-section";
import { CtaSection } from "@/components/landing/cta-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProductsSection />
      <FeaturesSection />
      <IndustriesSection />
      <ComplianceSection />
      <MetricsSection />
      <PrinciplesSection />
      <CtaSection />
    </>
  );
}

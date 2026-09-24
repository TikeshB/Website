import type { Metadata } from "next";
import { ProductsHero } from "@/components/products/products-hero";
import { ProductsList } from "@/components/products/products-list";
import { CtaSection } from "@/components/landing/cta-section";

export const metadata: Metadata = {
  title: "Products | AEIV Global Private Limited",
  description:
    "Explore Blisswork, GRC, and WCAG — AEIV Global's platforms for workplace experience, governance and risk, and digital accessibility.",
};

export default function ProductsPage() {
  return (
    <>
      <ProductsHero />
      <ProductsList />
      <CtaSection />
    </>
  );
}

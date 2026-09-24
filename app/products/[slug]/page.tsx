import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductBySlug, products } from "@/lib/products-data";
import { ProductHero } from "@/components/products/product-hero";
import { ProductCapabilities } from "@/components/products/product-capabilities";
import { ProductSteps } from "@/components/products/product-steps";
import { ProductUseCases } from "@/components/products/product-use-cases";
import { CtaSection } from "@/components/landing/cta-section";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: `${product.name} | AEIV Global Private Limited`,
    description: product.description,
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <ProductHero product={product} />
      <ProductCapabilities product={product} />
      <ProductSteps product={product} />
      <ProductUseCases product={product} />
      <CtaSection />
    </>
  );
}

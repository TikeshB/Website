"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { products } from "@/lib/products-data";
import { AnimatedWave } from "./animated-wave";
import { AnimatedTetrahedron } from "./animated-tetrahedron";
import { AnimatedSphere } from "./animated-sphere";

const visuals = {
  wave: AnimatedWave,
  tetrahedron: AnimatedTetrahedron,
  sphere: AnimatedSphere,
};

function ProductCard({ product, index }: { product: (typeof products)[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLAnchorElement>(null);
  const Visual = visuals[product.visual];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Link
      href={`/products/${product.slug}`}
      ref={cardRef}
      className={`group relative flex flex-col border border-foreground/10 hover:border-foreground/30 transition-all duration-700 overflow-hidden ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="relative h-56 lg:h-64 overflow-hidden border-b border-foreground/10 bg-foreground/[0.02]">
        <div className="absolute inset-0 opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700">
          <Visual />
        </div>
      </div>

      <div className="flex-1 flex flex-col p-8 lg:p-10">
        <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">
          {product.tag}
        </span>
        <h3 className="text-3xl lg:text-4xl font-display mb-4 group-hover:translate-x-1 transition-transform duration-500">
          {product.name}
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-8 flex-1">{product.description}</p>
        <span className="inline-flex items-center gap-2 text-sm font-medium">
          Learn more
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

export function ProductsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="products" ref={sectionRef} className="relative py-24 lg:py-32 border-t border-foreground/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="mb-16 lg:mb-24 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div>
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-foreground/30" />
              Our products
            </span>
            <h2
              className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Three platforms.
              <br />
              <span className="text-muted-foreground">One purpose-built portfolio.</span>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-sm">
            Each AEIV Global product is built to stand on its own, and to work well alongside the others.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ProductCard key={product.slug} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

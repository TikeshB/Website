"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { products } from "@/lib/products-data";
import { AnimatedWave } from "@/components/landing/animated-wave";
import { AnimatedTetrahedron } from "@/components/landing/animated-tetrahedron";
import { AnimatedSphere } from "@/components/landing/animated-sphere";

const visuals = {
  wave: AnimatedWave,
  tetrahedron: AnimatedTetrahedron,
  sphere: AnimatedSphere,
};

function ProductRow({ product, index }: { product: (typeof products)[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const rowRef = useRef<HTMLDivElement>(null);
  const Visual = visuals[product.visual];
  const reversed = index % 2 === 1;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );
    if (rowRef.current) observer.observe(rowRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={rowRef}
      className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center py-20 lg:py-28 border-b border-foreground/10 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      <div className={reversed ? "lg:order-2" : ""}>
        <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4 block">
          {product.tag}
        </span>
        <h2 className="text-4xl lg:text-5xl font-display mb-4">{product.name}</h2>
        <p className="text-xl text-muted-foreground italic mb-6">{product.tagline}</p>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">{product.description}</p>

        <ul className="space-y-3 mb-10">
          {product.capabilities.slice(0, 3).map((capability) => (
            <li key={capability.title} className="flex items-start gap-3">
              <Check className="w-5 h-5 shrink-0 mt-0.5 text-foreground" />
              <span className="text-muted-foreground">
                <span className="text-foreground font-medium">{capability.title}</span> — {capability.description}
              </span>
            </li>
          ))}
        </ul>

        <Link
          href={`/products/${product.slug}`}
          className="inline-flex items-center gap-2 text-base font-medium border-b border-foreground pb-1 group"
        >
          Explore {product.name}
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      <div className={reversed ? "lg:order-1" : ""}>
        <div className="relative h-72 lg:h-96 border border-foreground/10 bg-foreground/[0.02] overflow-hidden">
          <Visual />
        </div>
      </div>
    </div>
  );
}

export function ProductsList() {
  return (
    <section className="relative py-4">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {products.map((product, index) => (
          <ProductRow key={product.slug} product={product} index={index} />
        ))}
      </div>
    </section>
  );
}

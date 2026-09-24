"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/lib/products-data";
import { products } from "@/lib/products-data";

export function ProductUseCases({ product }: { product: Product }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const otherProducts = products.filter((p) => p.slug !== product.slug);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-foreground/30" />
              Who it&apos;s for
            </span>
            <h2 className="text-4xl lg:text-5xl font-display tracking-tight mb-10">Built for teams like yours.</h2>
            <div className="flex flex-wrap gap-3">
              {product.useCases.map((useCase, index) => (
                <span
                  key={useCase}
                  className={`px-5 py-3 border border-foreground/10 text-base transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${index * 80 + 150}ms` }}
                >
                  {useCase}
                </span>
              ))}
            </div>
          </div>

          <div
            className={`transition-all duration-700 delay-150 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-foreground/30" />
              Explore more
            </span>
            <div className="space-y-4">
              {otherProducts.map((other) => (
                <Link
                  key={other.slug}
                  href={`/products/${other.slug}`}
                  className="flex items-center justify-between p-6 border border-foreground/10 hover:border-foreground/30 hover:bg-foreground/[0.02] transition-all duration-300 group"
                >
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground block mb-1">
                      {other.tag}
                    </span>
                    <span className="text-2xl font-display">{other.name}</span>
                  </div>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

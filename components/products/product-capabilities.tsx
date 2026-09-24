"use client";

import { useEffect, useRef, useState } from "react";
import type { Product } from "@/lib/products-data";

export function ProductCapabilities({ product }: { product: Product }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
        <div className="mb-16 lg:mb-24">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            Capabilities
          </span>
          <h2
            className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            What {product.name} does.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-foreground/10">
          {product.capabilities.map((capability, index) => (
            <div
              key={capability.title}
              className={`bg-background p-8 lg:p-12 transition-all duration-700 hover:bg-foreground/[0.02] ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <span className="font-mono text-sm text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="text-2xl font-display mt-4 mb-3">{capability.title}</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">{capability.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

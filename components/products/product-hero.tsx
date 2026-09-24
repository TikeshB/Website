"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Product } from "@/lib/products-data";
import { AnimatedWave } from "@/components/landing/animated-wave";
import { AnimatedTetrahedron } from "@/components/landing/animated-tetrahedron";
import { AnimatedSphere } from "@/components/landing/animated-sphere";

const visuals = {
  wave: AnimatedWave,
  tetrahedron: AnimatedTetrahedron,
  sphere: AnimatedSphere,
};

export function ProductHero({ product }: { product: Product }) {
  const [isVisible, setIsVisible] = useState(false);
  const Visual = visuals[product.visual];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative pt-40 pb-20 lg:pt-52 lg:pb-28 overflow-hidden border-b border-foreground/10">
      <div className="absolute right-0 top-0 w-[550px] h-[550px] opacity-30 pointer-events-none">
        <Visual />
      </div>
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <Link
          href="/products"
          className={`inline-flex items-center gap-2 text-sm font-mono text-muted-foreground mb-8 hover:text-foreground transition-colors ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <ArrowLeft className="w-4 h-4" />
          All products
        </Link>

        <span
          className={`inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="w-8 h-px bg-foreground/30" />
          {product.tag}
        </span>

        <h1
          className={`text-[clamp(3rem,10vw,8rem)] font-display leading-[0.9] tracking-tight transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {product.name}
        </h1>

        <p
          className={`text-2xl italic text-muted-foreground mt-6 transition-all duration-700 delay-150 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {product.tagline}
        </p>

        <p
          className={`text-xl text-muted-foreground max-w-2xl mt-6 leading-relaxed transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {product.longDescription}
        </p>

        <div
          className={`mt-10 flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Button
            asChild
            size="lg"
            className="bg-foreground hover:bg-foreground/90 text-background px-8 h-14 text-base rounded-full group"
          >
            <Link href="/contact">
              Request a demo
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-14 px-8 text-base rounded-full border-foreground/20 hover:bg-foreground/5"
          >
            <Link href="/products">View all products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

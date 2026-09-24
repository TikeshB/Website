"use client";

import { useEffect, useState } from "react";

export function ProductsHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative pt-40 pb-20 lg:pt-52 lg:pb-28 border-b border-foreground/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <span
          className={`inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="w-8 h-px bg-foreground/30" />
          Products
        </span>
        <h1
          className={`text-[clamp(2.5rem,8vw,7rem)] font-display leading-[0.95] tracking-tight max-w-4xl transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Three platforms, each built to do one job well.
        </h1>
        <p
          className={`text-xl lg:text-2xl text-muted-foreground max-w-2xl mt-8 leading-relaxed transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Blisswork, GRC, and WCAG can stand alone or work together as part of a single,
          coherent approach to how your organization runs.
        </p>
      </div>
    </section>
  );
}

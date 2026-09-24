"use client";

import { useEffect, useState } from "react";
import { AnimatedWave } from "@/components/landing/animated-wave";

export function AboutHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative pt-40 pb-24 lg:pt-52 lg:pb-32 overflow-hidden border-b border-foreground/10">
      <div className="absolute right-0 top-0 w-[500px] h-[500px] opacity-30 pointer-events-none">
        <AnimatedWave />
      </div>
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <span
          className={`inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="w-8 h-px bg-foreground/30" />
          About us
        </span>
        <h1
          className={`text-[clamp(2.5rem,8vw,7rem)] font-display leading-[0.95] tracking-tight max-w-4xl transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          A Nagpur company building for the world.
        </h1>
        <p
          className={`text-xl lg:text-2xl text-muted-foreground max-w-2xl mt-8 leading-relaxed transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          AEIV Global Private Limited is a software company registered in Nagpur, Maharashtra,
          building focused products for workplace experience, governance, and accessibility.
        </p>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";

export function AboutStory() {
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
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-4">
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-foreground/30" />
              Our story
            </span>
            <h2
              className={`text-4xl lg:text-5xl font-display tracking-tight transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Three problems worth solving properly.
            </h2>
          </div>
          <div
            className={`lg:col-span-8 space-y-8 text-xl text-muted-foreground leading-relaxed transition-all duration-700 delay-150 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p>
              AEIV Global Private Limited was incorporated in 2024 and is headquartered in Nagpur,
              Maharashtra. We started with a simple observation: workplace experience, governance
              and risk management, and digital accessibility are each treated as afterthoughts by
              most software — bolted on, generic, and quickly abandoned by the teams meant to use
              them.
            </p>
            <p>
              We decided to build differently. Rather than one sprawling platform trying to do
              everything, we build three focused products —{" "}
              <span className="text-foreground font-medium">Blisswork</span>,{" "}
              <span className="text-foreground font-medium">GRC</span>, and{" "}
              <span className="text-foreground font-medium">WCAG</span> — each designed around the
              specific people who rely on it every day: HR and people teams, compliance and risk
              functions, and the product and engineering teams responsible for accessible
              software.
            </p>
            <p>
              We are a young company with a clear mandate: build software that respects the people
              using it, holds up under real scrutiny, and earns trust through the details rather
              than the marketing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";

const industries = [
  { name: "BFSI", category: "Banking & Financial Services" },
  { name: "Healthcare", category: "Hospitals & Providers" },
  { name: "Government", category: "Public Sector" },
  { name: "E-commerce", category: "Retail & D2C" },
  { name: "Education", category: "EdTech & Institutions" },
  { name: "IT & ITES", category: "Technology Services" },
  { name: "Manufacturing", category: "Industrial" },
  { name: "Insurance", category: "Risk & Underwriting" },
  { name: "Legal", category: "Professional Services" },
  { name: "Real Estate", category: "Property & Construction" },
  { name: "Logistics", category: "Supply Chain" },
  { name: "Hospitality", category: "Travel & Leisure" },
];

export function IndustriesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
    <section id="industries" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div
          className={`text-center max-w-3xl mx-auto mb-16 lg:mb-24 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            Industries
            <span className="w-8 h-px bg-foreground/30" />
          </span>
          <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-6">
            Built for regulated
            <br />
            and people-first industries.
          </h2>
          <p className="text-xl text-muted-foreground">
            Wherever governance, accessibility, or employee experience matter, our products fit in.
          </p>
        </div>
      </div>

      {/* Full-width marquees outside container */}
      <div className="w-full mb-6">
        <div className="flex gap-6 marquee">
          {[...Array(2)].map((_, setIndex) => (
            <div key={setIndex} className="flex gap-6 shrink-0">
              {industries.map((industry) => (
                <div
                  key={`${industry.name}-${setIndex}`}
                  className="shrink-0 px-8 py-6 border border-foreground/10 hover:border-foreground/30 hover:bg-foreground/[0.02] transition-all duration-300 group"
                >
                  <div className="text-lg font-medium group-hover:translate-x-1 transition-transform">
                    {industry.name}
                  </div>
                  <div className="text-sm text-muted-foreground">{industry.category}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="w-full">
        <div className="flex gap-6 marquee-reverse">
          {[...Array(2)].map((_, setIndex) => (
            <div key={setIndex} className="flex gap-6 shrink-0">
              {[...industries].reverse().map((industry) => (
                <div
                  key={`${industry.name}-reverse-${setIndex}`}
                  className="shrink-0 px-8 py-6 border border-foreground/10 hover:border-foreground/30 hover:bg-foreground/[0.02] transition-all duration-300 group"
                >
                  <div className="text-lg font-medium group-hover:translate-x-1 transition-transform">
                    {industry.name}
                  </div>
                  <div className="text-sm text-muted-foreground">{industry.category}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { HeartHandshake, ShieldCheck, Accessibility, Target } from "lucide-react";

const values = [
  {
    icon: HeartHandshake,
    title: "People first",
    description: "Every product decision starts with the person who has to use it every day.",
  },
  {
    icon: ShieldCheck,
    title: "Trust through rigor",
    description: "We treat governance, security, and privacy as engineering requirements, not marketing lines.",
  },
  {
    icon: Accessibility,
    title: "Accessible by default",
    description: "Accessibility is a design constraint from day one, not a remediation project after launch.",
  },
  {
    icon: Target,
    title: "Focused, not scattered",
    description: "Three products, built deeply, rather than ten features built shallowly.",
  },
];

export function AboutValues() {
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
    <section ref={sectionRef} className="relative py-24 lg:py-32 border-t border-foreground/10 bg-foreground/[0.02]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="mb-16 lg:mb-24">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            What we value
          </span>
          <h2
            className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            The principles behind
            <br />
            <span className="text-muted-foreground">every product decision.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-foreground/10">
          {values.map((value, index) => (
            <div
              key={value.title}
              className={`bg-background p-8 lg:p-10 transition-all duration-700 group hover:bg-foreground/[0.02] ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 flex items-center justify-center border border-foreground/10 mb-6 group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                <value.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-medium mb-3">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

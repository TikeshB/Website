"use client";

import { useEffect, useState } from "react";

const principles = [
  {
    quote: "We build one product at a time, and we build it properly, rather than shipping many things half-finished.",
    author: "Product philosophy",
    role: "Design & Engineering",
    company: "AEIV Global",
    metric: "3 focused products",
  },
  {
    quote: "Accessibility and compliance aren't features you add later. They're part of how we design from the first sketch.",
    author: "Compliance philosophy",
    role: "GRC & WCAG teams",
    company: "AEIV Global",
    metric: "WCAG 2.2 aligned by design",
  },
  {
    quote: "Good workplace software should feel calm. Blisswork is built to reduce noise, not add another dashboard to check.",
    author: "Workplace philosophy",
    role: "Blisswork team",
    company: "AEIV Global",
    metric: "Built for daily use",
  },
  {
    quote: "We are a young company from Nagpur with global ambitions — and we intend to earn trust one client at a time.",
    author: "Company philosophy",
    role: "Founding team",
    company: "AEIV Global Private Limited",
    metric: "Nagpur, India · Est. 2024",
  },
];

export function PrinciplesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % principles.length);
        setIsAnimating(false);
      }, 300);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const active = principles[activeIndex];

  return (
    <section className="relative py-32 lg:py-40 border-t border-foreground/10 lg:pb-14">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            What we believe
          </span>
          <div className="flex-1 h-px bg-foreground/10" />
          <span className="font-mono text-xs text-muted-foreground">
            {String(activeIndex + 1).padStart(2, "0")} / {String(principles.length).padStart(2, "0")}
          </span>
        </div>

        {/* Main Quote */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-8">
            <blockquote
              className={`transition-all duration-300 ${
                isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
              }`}
            >
              <p className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-foreground">
                &ldquo;{active.quote}&rdquo;
              </p>
            </blockquote>

            <div
              className={`mt-12 flex items-center gap-6 transition-all duration-300 delay-100 ${
                isAnimating ? "opacity-0" : "opacity-100"
              }`}
            >
              <div className="w-16 h-16 rounded-full bg-foreground/5 border border-foreground/10 flex items-center justify-center">
                <span className="font-display text-2xl text-foreground">{active.author.charAt(0)}</span>
              </div>
              <div>
                <p className="text-lg font-medium text-foreground">{active.author}</p>
                <p className="text-muted-foreground">
                  {active.role}, {active.company}
                </p>
              </div>
            </div>
          </div>

          {/* Highlight */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <div
              className={`p-8 border border-foreground/10 transition-all duration-300 ${
                isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
              }`}
            >
              <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-4">
                In practice
              </span>
              <p className="font-display text-2xl md:text-3xl text-foreground">{active.metric}</p>
            </div>

            <div className="flex gap-2 mt-8">
              {principles.map((_, idx) => (
                <button
                  key={idx}
                  aria-label={`Show principle ${idx + 1}`}
                  onClick={() => {
                    setIsAnimating(true);
                    setTimeout(() => {
                      setActiveIndex(idx);
                      setIsAnimating(false);
                    }, 300);
                  }}
                  className={`h-2 transition-all duration-300 ${
                    idx === activeIndex ? "w-8 bg-foreground" : "w-2 bg-foreground/20 hover:bg-foreground/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-foreground/10">
          <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase mb-4 text-center">
            AEIV Global Private Limited
          </p>
          <p className="text-center text-muted-foreground text-sm">
            CIN: U62011MH2024PTC419187 &middot; Nagpur, Maharashtra, India
          </p>
        </div>
      </div>
    </section>
  );
}

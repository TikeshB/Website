"use client";

import { useEffect, useRef, useState } from "react";
import { Building2, MapPin, Mail, FileText } from "lucide-react";

const details = [
  {
    icon: Building2,
    label: "Legal name",
    value: "AEIV Global Private Limited",
  },
  {
    icon: FileText,
    label: "Corporate Identification Number (CIN)",
    value: "U62011MH2024PTC419187",
  },
  {
    icon: MapPin,
    label: "Registered address",
    value: "24 B Layout, Bezonbagh, Nagpur, Nagpur, Maharashtra, India, 440014",
  },
  {
    icon: Mail,
    label: "Email",
    value: "sidaeivarc@gmail.com",
  },
];

export function AboutDetails() {
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
        <div className="mb-16">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            Corporate details
          </span>
          <h2
            className={`text-4xl lg:text-5xl font-display tracking-tight transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Registered and based in Nagpur.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {details.map((detail, index) => (
            <div
              key={detail.label}
              className={`flex items-start gap-5 p-8 border border-foreground/10 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="shrink-0 w-11 h-11 flex items-center justify-center border border-foreground/10">
                <detail.icon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-mono uppercase tracking-wide text-muted-foreground mb-2">
                  {detail.label}
                </p>
                <p className="text-lg font-medium leading-snug">{detail.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

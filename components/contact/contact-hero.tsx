"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { AnimatedWave } from "@/components/landing/animated-wave";

const words = ["team", "product", "roadmap", "goals"];

const meta = [
  {
    label: "Email",
    value: "sidaeivarc@gmail.com",
    href: "mailto:sidaeivarc@gmail.com",
  },
  {
    label: "Registered office",
    value: "Nagpur, Maharashtra, India",
  },
  {
    label: "Response time",
    value: "Within one business day",
    live: true,
  },
];

export function ContactHero() {
  const [isVisible, setIsVisible] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden border-b border-foreground/10 pt-40 pb-16 lg:pt-52 lg:pb-20">
      <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[440px] h-[440px] lg:w-[640px] lg:h-[640px] opacity-[0.16] pointer-events-none">
        <AnimatedWave />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <span
          className={`inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="w-8 h-px bg-foreground/30" />
          Contact &middot; AEIV Global Private Limited
        </span>

        <h1
          className={`text-[clamp(2.5rem,8vw,7rem)] font-display leading-[0.95] tracking-tight max-w-4xl transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Let&apos;s talk about your{" "}
          <span className="relative inline-block">
            <span key={wordIndex} className="inline-flex">
              {words[wordIndex].split("").map((char, i) => (
                <span
                  key={`${wordIndex}-${i}`}
                  className="inline-block animate-char-in"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  {char}
                </span>
              ))}
            </span>
            <span className="absolute -bottom-1 left-0 right-0 h-3 bg-foreground/10" />
          </span>
        </h1>

        <p
          className={`text-xl lg:text-2xl text-muted-foreground max-w-2xl mt-8 leading-relaxed transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Tell us about your organization and which of our products you&apos;re interested in.
          We usually respond within one business day.
        </p>

        <div
          className={`mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-foreground/10 border border-foreground/10 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {meta.map((item) => {
            const inner = (
              <>
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                  {item.live && (
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-500" />
                    </span>
                  )}
                  {item.label}
                </span>
                <span className="text-lg font-medium flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                  {item.value}
                  {item.href && <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />}
                </span>
              </>
            );

            return item.href ? (
              <a
                key={item.label}
                href={item.href}
                className="group flex flex-col gap-3 bg-background p-6 lg:p-8 hover:bg-foreground/[0.02] transition-colors"
              >
                {inner}
              </a>
            ) : (
              <div key={item.label} className="flex flex-col gap-3 bg-background p-6 lg:p-8">
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

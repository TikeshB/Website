"use client";

import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactCta() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="relative border border-foreground p-10 lg:p-16">
          <div className="absolute top-0 right-0 w-32 h-32 border-b border-l border-foreground/10" />
          <div className="absolute bottom-0 left-0 w-32 h-32 border-t border-r border-foreground/10" />

          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-8">
            <span className="w-8 h-px bg-foreground/30" />
            Prefer to write to us directly?
          </span>

          <a href="mailto:sidaeivarc@gmail.com" className="group block">
            <span className="inline-flex items-start gap-3 text-[clamp(1.75rem,5vw,4rem)] font-display tracking-tight leading-none break-all transition-opacity group-hover:opacity-70">
              sidaeivarc@gmail.com
              <ArrowUpRight className="w-6 h-6 lg:w-10 lg:h-10 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
          </a>

          <div className="mt-12 flex flex-col sm:flex-row items-start gap-4">
            <Button
              asChild
              size="lg"
              className="bg-foreground hover:bg-foreground/90 text-background px-8 h-14 text-base rounded-full group"
            >
              <Link href="/products">
                Explore products
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-14 px-8 text-base rounded-full border-foreground/20 hover:bg-foreground/5"
            >
              <Link href="/about">About AEIV Global</Link>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-8 font-mono">
            Nagpur, Maharashtra, India &middot; CIN: U62011MH2024PTC419187
          </p>
        </div>
      </div>
    </section>
  );
}

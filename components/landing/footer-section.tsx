"use client";

import Link from "next/link";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { AnimatedWave } from "./animated-wave";
import { products } from "@/lib/products-data";

const COMPANY_EMAIL = "sidaeivarc@gmail.com";
const COMPANY_ADDRESS = "24 B Layout, Bezonbagh, Nagpur, Maharashtra, India, 440014";
const COMPANY_CIN = "U62011MH2024PTC419187";

const footerLinks = {
  Products: products.map((product) => ({ name: product.name, href: `/products/${product.slug}` })),
  Company: [
    { name: "About us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "All products", href: "/products" },
  ],
  Legal: [
    { name: "Privacy policy", href: "/privacy" },
    { name: "Terms of service", href: "/terms" },
  ],
};

export function FooterSection() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-foreground/10">
      {/* Animated wave background */}
      <div className="absolute inset-0 h-64 opacity-20 pointer-events-none overflow-hidden">
        <AnimatedWave />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Main Footer */}
        <div className="py-16 lg:py-24">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-12 lg:gap-8">
            {/* Brand Column */}
            <div className="col-span-2">
              <Link href="/" className="inline-flex items-center gap-2 mb-6">
                <span className="text-2xl font-display">AEIV Global</span>
              </Link>

              <p className="text-muted-foreground leading-relaxed mb-8 max-w-xs">
                AEIV Global Private Limited builds enterprise software for governance, accessibility, and
                workplace experience — Blisswork, GRC, and WCAG.
              </p>

              <div className="space-y-3">
                <a
                  href={`mailto:${COMPANY_EMAIL}`}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-start gap-2 group"
                >
                  <Mail className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>
                    {COMPANY_EMAIL}
                    <ArrowUpRight className="w-3 h-3 inline-block ml-1 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </span>
                </a>
                <p className="text-sm text-muted-foreground flex items-start gap-2">
                  <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{COMPANY_ADDRESS}</span>
                </p>
              </div>
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-sm font-medium mb-6">{title}</h3>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-sm text-muted-foreground">
            &copy; {year} AEIV Global Private Limited. All rights reserved.
          </p>

          <p className="text-xs font-mono text-muted-foreground">
            CIN: {COMPANY_CIN} &middot; Nagpur, Maharashtra, India
          </p>
        </div>
      </div>
    </footer>
  );
}

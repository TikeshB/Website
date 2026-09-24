"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { products } from "@/lib/products-data";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navigation() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileProductsOpen(false);
  }, [pathname]);

  const isProductsActive = pathname?.startsWith("/products");

  return (
    <header
      className={`fixed z-50 transition-all duration-500 ${
        isScrolled ? "top-4 left-4 right-4" : "top-0 left-0 right-0"
      }`}
    >
      <nav
        className={`mx-auto transition-all duration-500 ${
          isScrolled || isMobileMenuOpen
            ? "bg-background/80 backdrop-blur-xl border border-foreground/10 rounded-2xl shadow-lg max-w-[1200px]"
            : "bg-transparent max-w-[1400px]"
        }`}
      >
        <div
          className={`flex items-center justify-between transition-all duration-500 px-6 lg:px-8 ${
            isScrolled ? "h-14" : "h-20"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <span
              className={`font-display tracking-tight transition-all duration-500 ${
                isScrolled ? "text-xl" : "text-2xl"
              }`}
            >
              AEIV Global
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            <Link
              href="/"
              className={`text-sm transition-colors duration-300 relative group ${
                pathname === "/" ? "text-foreground" : "text-foreground/70 hover:text-foreground"
              }`}
            >
              Home
              <span
                className={`absolute -bottom-1 left-0 h-px bg-foreground transition-all duration-300 ${
                  pathname === "/" ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>

            {/* Products dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <Link
                href="/products"
                className={`text-sm flex items-center gap-1.5 transition-colors duration-300 ${
                  isProductsActive ? "text-foreground" : "text-foreground/70 hover:text-foreground"
                }`}
              >
                Products
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${
                    isProductsOpen ? "rotate-180" : ""
                  }`}
                />
              </Link>

              <div
                className={`absolute left-1/2 -translate-x-1/2 top-full pt-4 transition-all duration-300 ${
                  isProductsOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
              >
                <div className="w-64 border border-foreground/10 bg-background/95 backdrop-blur-xl rounded-xl shadow-lg overflow-hidden">
                  {products.map((product) => (
                    <Link
                      key={product.slug}
                      href={`/products/${product.slug}`}
                      className="block px-5 py-4 border-b border-foreground/10 last:border-b-0 hover:bg-foreground/[0.03] transition-colors group"
                    >
                      <div className="text-sm font-medium group-hover:translate-x-1 transition-transform">
                        {product.name}
                      </div>
                      <div className="text-xs text-muted-foreground mt-0.5">{product.tag}</div>
                    </Link>
                  ))}
                  <Link
                    href="/products"
                    className="block px-5 py-3 text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
                  >
                    View all products
                  </Link>
                </div>
              </div>
            </div>

            {navLinks.slice(1).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm transition-colors duration-300 relative group ${
                  pathname === link.href ? "text-foreground" : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-foreground transition-all duration-300 ${
                    pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              asChild
              size="sm"
              className={`bg-foreground hover:bg-foreground/90 text-background rounded-full transition-all duration-500 ${
                isScrolled ? "px-4 h-8 text-xs" : "px-6"
              }`}
            >
              <Link href="/contact">Contact us</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu - Full Screen Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-background z-40 transition-all duration-500 overflow-y-auto ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ top: 0 }}
      >
        <div className="flex flex-col min-h-full px-8 pt-28 pb-8">
          {/* Navigation Links */}
          <div className="flex-1 flex flex-col justify-center gap-6 py-8">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-5xl font-display text-foreground hover:text-muted-foreground transition-all duration-500 ${
                isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: isMobileMenuOpen ? "0ms" : "0ms" }}
            >
              Home
            </Link>

            <div
              className={`transition-all duration-500 ${
                isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: isMobileMenuOpen ? "75ms" : "0ms" }}
            >
              <button
                type="button"
                onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                className="flex items-center gap-3 text-5xl font-display text-foreground"
              >
                Products
                <ChevronDown
                  className={`w-8 h-8 transition-transform duration-300 ${
                    isMobileProductsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isMobileProductsOpen ? "max-h-60 mt-4" : "max-h-0"
                }`}
              >
                <div className="flex flex-col gap-4 pl-1">
                  {products.map((product) => (
                    <Link
                      key={product.slug}
                      href={`/products/${product.slug}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-xl text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {product.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {navLinks.slice(1).map((link, i) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-5xl font-display text-foreground hover:text-muted-foreground transition-all duration-500 ${
                  isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: isMobileMenuOpen ? `${(i + 2) * 75}ms` : "0ms" }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Bottom CTA */}
          <div
            className={`flex gap-4 pt-8 border-t border-foreground/10 transition-all duration-500 ${
              isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: isMobileMenuOpen ? "300ms" : "0ms" }}
          >
            <Button
              asChild
              className="flex-1 bg-foreground text-background rounded-full h-14 text-base"
            >
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                Contact us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Practice Areas", href: "/practice-areas" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-transparent py-7">
        <div className="max-w-screen-2xl mx-auto px-8 flex items-center justify-between">
          <div className="h-12" />
        </div>
      </nav>
    );
  }

  const isDarkHeroPage = pathname?.startsWith("/practice-areas");
  const navTextColor = scrolled
    ? "text-primary/70"
    : isDarkHeroPage
      ? "text-white"
      : "text-primary/70";
  const navActiveColor = "text-tertiary";
  const logoFilter = !scrolled && isDarkHeroPage ? "brightness-125" : "";
  const btnTheme =
    !scrolled && isDarkHeroPage
      ? "bg-white text-primary hover:bg-tertiary hover:text-white"
      : "bg-primary text-on-primary hover:bg-tertiary";

  const navBg = scrolled
    ? "bg-surface/90 backdrop-blur-xl border-b border-outline-variant/10 py-4 shadow-sm"
    : isDarkHeroPage
      ? "bg-primary/95 backdrop-blur-md py-7 border-b border-white/5"
      : "bg-transparent py-7";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
    >
      <div className="max-w-screen-2xl mx-auto px-8 flex items-center justify-between">
        {/* Brand Logo with Scale of Justice */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-12 w-auto flex items-center justify-center transition-transform group-hover:scale-105">
            <img
              src="/assets/logo.png"
              alt="TechShield Legal"
              className={`h-12 w-auto object-contain filter drop-shadow-sm ${logoFilter}`}
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-12">
          <div className="flex items-center gap-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative font-label text-xs uppercase tracking-[0.25em] transition-all hover:text-tertiary py-2 ${
                    isActive ? `${navActiveColor} font-bold` : navTextColor
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-tertiary" />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-4 pl-10 border-l border-outline-variant/20">
            <Link
              href={process.env.NEXT_PUBLIC_WHATSAPP_LINK || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center gap-2 text-[10px] font-label font-bold uppercase tracking-[0.2em] hover:text-tertiary transition-colors ${navTextColor}`}
            >
              <img
                src="/assets/whatapp-icon.png"
                alt="WhatsApp icon"
                className={`w-4 h-4 transition-all duration-300 ${!scrolled && isDarkHeroPage ? "invert brightness-200" : ""}`}
              />
              WhatsApp
              <span className="material-symbols-outlined text-sm">
                open_in_new
              </span>
            </Link>
            <Link
              href="/contact?service=Consultation"
              className={`btn-base px-6 py-3 text-[10px] font-label font-bold tracking-[0.2em] uppercase shadow-sm transition-all duration-300 hover:shadow-lg ${btnTheme}`}
            >
              Consult Now
            </Link>
          </div>
        </div>

        {/* Mobile menu toggle */}
        <button
          className={`lg:hidden h-8 w-8 flex items-center justify-center transition-colors ${navTextColor}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="material-symbols-outlined transition-transform duration-300">
            {mobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/10 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="lg:hidden absolute top-full left-0 right-0 bg-surface border-t border-outline-variant/10 p-6 shadow-2xl animate-in slide-in-from-top duration-300 ease-out z-50">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-label text-sm uppercase tracking-widest border-b border-outline-variant/5 pb-4 ${
                    pathname === link.href
                      ? "text-tertiary font-bold"
                      : "text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact?service=Consultation"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-base bg-primary text-on-primary text-center px-6 py-4 mt-2 text-xs font-label font-bold tracking-[0.2em] uppercase rounded-none"
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}

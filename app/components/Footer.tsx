"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-container-low border-t border-outline-variant/10">
      <div className="max-w-screen-2xl mx-auto px-8 md:px-12 py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-24">
          {/* Brand Column */}
          <div className="md:col-span-4 lg:col-span-5">
            <Link
              href="/"
              className="inline-flex items-center gap-4 mb-8 group"
            >
              <img
                src="/assets/logo.png"
                alt="TechShield Legal"
                className="h-16 md:h-20 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </Link>
            <p className="text-on-surface-variant font-light text-base leading-relaxed max-w-sm mb-10">
              Efficient, practical, and affordable legal solutions for
              businesses, startups, and property owners. Solving today's
              challenges while preventing future problems.
            </p>
            <div className="flex gap-10">
              {[
                {
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/in/geraldine-mbah-117b4131/",
                  icon: "/assets/linkedin-icon.svg",
                  glowColor: "blue",
                },
                {
                  label: "WhatsApp",
                  href: process.env.NEXT_PUBLIC_WHATSAPP_LINK || "#",
                  icon: "/assets/whatapp-icon.png",
                  glowColor: "green",
                },
              ].map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-label uppercase tracking-[0.25em] text-on-surface-variant hover:text-tertiary transition-colors group"
                >
                  <img
                    src={social.icon}
                    alt={`${social.label} icon`}
                    className="w-4 h-4 group-hover:scale-110 transition-all duration-300"
                  />
                  {social.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Links Column 1 */}
          <div className="md:col-span-2">
            <h4 className="font-label font-bold text-primary text-xs uppercase tracking-[0.3em] mb-10">
              Core Competencies
            </h4>
            <ul className="space-y-4">
              {[
                {
                  label: "Business Law",
                  href: "/key-specializations#corporate",
                },
                {
                  label: "Transactions",
                  href: "/key-specializations#transactions",
                },
                {
                  label: "Regulatory",
                  href: "/key-specializations#regulatory",
                },
                {
                  label: "Property Law",
                  href: "/key-specializations#real-estate",
                },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-on-surface-variant hover:text-tertiary transition-colors font-light text-sm tracking-wide block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="md:col-span-2">
            <h4 className="font-label font-bold text-primary text-xs uppercase tracking-[0.3em] mb-10">
              Firm Profile
            </h4>
            <ul className="space-y-4">
              {[
                { label: "Our Mission", href: "/about" },
                { label: "Principal Profile", href: "/about" },
                { label: "Key Specializations", href: "/key-specializations" },
                { label: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-on-surface-variant hover:text-tertiary transition-colors font-light text-sm tracking-wide block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-32 pt-12 border-t border-outline-variant/10 flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10">
            <span className="text-[10px] text-on-surface-variant/50 font-label tracking-[0.3em] uppercase">
              © {currentYear} TechShield Legal Services
            </span>
            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className="text-[10px] uppercase tracking-[0.2em] text-on-surface-variant/40 hover:text-primary transition-colors"
              >
                Complaints
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[10px] uppercase tracking-[0.4em] text-on-surface-variant/30 font-label">
              Integrity in Engineering
            </span>
            <span className="gold-rule w-12 opacity-30" />
          </div>
        </div>
      </div>
    </footer>
  );
}

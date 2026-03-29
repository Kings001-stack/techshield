"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyPolicyModal({
  isOpen,
  onClose,
}: PrivacyPolicyModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  if (!mounted || !isOpen) return null;

  const modal = (
    <div
      style={{ position: "fixed", inset: 0, zIndex: 99999 }}
      className="flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Modal panel */}
      <div
        className="relative bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden w-full max-w-2xl"
        style={{ maxHeight: "88vh" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-primary px-6 py-5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-white/10 items-center justify-center p-1.5 hidden sm:flex">
              <img
                src="/assets/logo.png"
                alt="TechShield Legal"
                className="h-full w-auto filter brightness-0 invert"
              />
            </div>
            <div>
              <h2 className="font-headline text-xl sm:text-2xl text-white italic tracking-tight">
                Privacy Policy
              </h2>
              <span className="text-[9px] uppercase tracking-[0.15em] text-white/40 font-label font-bold hidden sm:block">
                Regulatory Compliance &amp; Data Protection
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all cursor-pointer shrink-0"
            aria-label="Close modal"
          >
            <span className="material-symbols-outlined text-white text-xl">
              close
            </span>
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-6 py-8 sm:px-10 sm:py-10">
          <div className="max-w-2xl mx-auto">
            {/* Metadata */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-8 pb-6 border-b border-gray-200">
              <div>
                <p className="text-[10px] uppercase font-label font-black tracking-widest text-tertiary mb-0.5">
                  Effective Date
                </p>
                <p className="text-sm font-medium text-primary">
                  {new Date().toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
              <div className="w-px h-8 bg-gray-200" />
              <div>
                <p className="text-[10px] uppercase font-label font-black tracking-widest text-tertiary mb-0.5">
                  Document ID
                </p>
                <p className="text-sm font-medium text-primary">
                  TSL-PP-2024-V2
                </p>
              </div>
            </div>

            {/* Policy Sections */}
            <div className="space-y-8 text-sm text-gray-600 leading-relaxed">
              <section>
                <h3 className="text-lg font-headline text-primary italic mb-3">
                  1. Our Commitment
                </h3>
                <p>
                  TechShield Legal Services (&quot;we,&quot; &quot;our,&quot; or
                  &quot;us&quot;) operates at the intersection of law and
                  technology. We are fiercely committed to guarding the sanctity
                  of your data. This policy outlines our rigorous standards for
                  data collection, usage, and the robust safeguards we employ to
                  maintain attorney-client privilege in a digital-first
                  environment.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-headline text-primary italic mb-3">
                  2. Knowledge Acquisition
                </h3>
                <p className="mb-4">
                  In providing elite legal advisory, we collect specific
                  information subsets to ensure transactional precision:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    {
                      label: "Identity",
                      desc: "Names, corporate titles, and authorization levels",
                    },
                    {
                      label: "Contact",
                      desc: "Secured email channels, encrypted phone metadata",
                    },
                    {
                      label: "Matters",
                      desc: "Briefings, transaction history, and risk profiles",
                    },
                    {
                      label: "Technical",
                      desc: "Access timestamps, IP telemetry, and device IDs",
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="p-3 bg-gray-50 rounded-lg border border-gray-100"
                    >
                      <span className="block text-[10px] font-black uppercase text-tertiary mb-0.5 tracking-tight">
                        {item.label}
                      </span>
                      <p className="text-xs text-gray-500 leading-snug">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h3 className="text-lg font-headline text-primary italic mb-3">
                  3. Controlled Disclosure
                </h3>
                <p className="mb-2">
                  We do not monetize your data. Sharing is restricted to:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                  <li>
                    Explicitly authorized co-counsel for complex
                    cross-jurisdictional matters.
                  </li>
                  <li>
                    Compliance with sovereign subpoenas or valid court orders.
                  </li>
                  <li>
                    Trusted third-party infrastructure providers verified under
                    GDPR/NDPR standards.
                  </li>
                </ul>
              </section>

              {/* Privilege Banner */}
              <div className="p-6 bg-primary rounded-xl text-white relative overflow-hidden">
                <span className="material-symbols-outlined absolute -right-3 -bottom-3 text-[8rem] opacity-5">
                  verified_user
                </span>
                <h3 className="text-tertiary font-headline text-lg mb-2 italic">
                  The Absolute Privilege
                </h3>
                <p className="text-white/70 text-xs leading-relaxed relative z-10">
                  Communications regarding legal strategy are fortified by
                  Attorney-Client Privilege. Technical data collection does not
                  supersede this fundamental legal protection. We employ
                  end-to-end encryption protocols to mirror the confidentiality
                  of our physical boardrooms.
                </p>
              </div>

              <section>
                <h3 className="text-lg font-headline text-primary italic mb-3">
                  4. Security Architecture
                </h3>
                <p>
                  Our digital vault utilizes AES-256 encryption. We bypass
                  standard cloud vulnerabilities by employing private-instance
                  data silos, regular penetration testing by independent security
                  contractors, and strict multi-factor authentication for all
                  legal personnel access points.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-headline text-primary italic mb-3">
                  5. Sovereignty Over Your Data
                </h3>
                <p className="mb-2">You maintain irrevocable rights to:</p>
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                  <li>Inquire about processed data subsets.</li>
                  <li>Rectify historical inaccuracies.</li>
                  <li>Request permanent &apos;Erasure of Knowledge&apos;.</li>
                  <li>Withdraw operational consent at any time.</li>
                </ul>
              </section>

              {/* Contact */}
              <section className="pt-6 border-t border-gray-200">
                <h3 className="text-lg font-headline text-primary italic mb-3">
                  Inquiries &amp; Compliance
                </h3>
                <p className="text-sm mb-4">
                  For matters concerning this policy or specialized data handling
                  requests:
                </p>
                <div className="bg-primary text-white p-5 sm:p-6 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-center sm:text-left">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-tertiary font-bold mb-1">
                      Primary Compliance Channel
                    </p>
                    <p className="text-base font-headline italic">
                      enquiries@techshieldlegal.com
                    </p>
                  </div>
                  <button
                    onClick={() =>
                      (window.location.href =
                        "mailto:enquiries@techshieldlegal.com")
                    }
                    className="px-6 py-2.5 bg-tertiary text-primary text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-white transition-all cursor-pointer"
                  >
                    Message
                  </button>
                </div>
              </section>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 flex items-center justify-between shrink-0">
          <p className="text-[10px] text-gray-400 font-label uppercase tracking-widest hidden sm:block">
            © {new Date().getFullYear()} TechShield Legal Services
          </p>
          <button
            onClick={onClose}
            className="btn-base bg-primary text-white w-full sm:w-auto px-8 py-3 hover:bg-tertiary transition-all cursor-pointer flex items-center justify-center gap-2 text-sm"
          >
            Acknowledge &amp; Close
            <span className="material-symbols-outlined text-sm">
              check_circle
            </span>
          </button>
        </div>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}

"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import FadeIn from "./FadeIn";

// Background images for each specialization
const IMAGES = {
  corporate: "/assets/practice-areas/corporate.png",
  transactions: "/assets/practice-areas/transactions.png",
  regulatory: "/assets/practice-areas/regulatory.png",
  realestate: "/assets/practice-areas/real-estate.png",
  ip: "/assets/practice-areas/intellectual-property.png",
  governance: "/assets/practice-areas/governance.png",
  dispute: "/assets/practice-areas/employ.jpg",
  workshops: "/assets/practice-areas/corporate.png",
};

const specializations = [
  {
    id: "corporate",
    title: "Corporate, Business & Startup Advisory",
    image: IMAGES.corporate,
    desc: "We advise corporations, founders, and growth-stage enterprises on structuring, governance, and strategic expansion. From incorporation to complex transactions, we deliver commercially focused legal solutions that position businesses for scale and long-term success. Our team provides end-to-end support for business formation, corporate restructuring, M&A transactions, and investor relations, ensuring your corporate foundation is built for sustainable growth and regulatory compliance.",
    services: [
      "Company formation and structuring",
      "Corporate governance",
      "Shareholder and founder agreements",
      "M&A and joint ventures",
      "Corporate restructuring",
      "Investor documentation & ESOPs",
      "Due diligence & cross-border advisory",
    ],
  },
  {
    id: "transactions",
    title: "Commercial Transactions",
    image: IMAGES.transactions,
    desc: "We design and negotiate high-value commercial arrangements with precision, ensuring clarity, risk allocation, and enforceability across all business dealings. Our transactional expertise spans service agreements, supply contracts, distribution arrangements, franchise agreements, joint ventures, and strategic partnerships. We develop comprehensive contract systems, templates, and playbooks that streamline your business operations while protecting your commercial interests in every transaction.",
    services: [
      "Contract drafting and negotiation (service, supply, distribution, franchise, JV, NDA, MOU)",
      "Transaction structuring",
      "Development of contract systems, templates, and playbooks",
    ],
  },
  {
    id: "regulatory",
    title: "Regulatory Compliance & Immigration",
    image: IMAGES.regulatory,
    desc: "We provide integrated regulatory and immigration advisory to ensure seamless business operations within evolving legal frameworks. Our compliance services cover NSITF, ITF, PENCOM, BPP registration and ongoing compliance, tax compliance including TCC and VAT matters, expatriate quota applications, work permits, and tender documentation. We help businesses navigate Nigeria's complex regulatory landscape while maintaining full compliance with federal and state requirements.",
    services: [
      "Regulatory compliance (NSITF, ITF, PENCOM, BPP)",
      "Expatriate quotas and work permits",
      "Tax compliance (TCC, VAT)",
      "Tender documentation",
    ],
  },
  {
    id: "realestate",
    title: "Real Estate & Property Law",
    image: IMAGES.realestate,
    desc: "We support clients in navigating complex real estate transactions with a focus on security of title, compliance, and investment value. Our property law practice encompasses residential and commercial property acquisitions, lease negotiations, title verification and perfection, real estate investment advisory, and comprehensive estate planning services. We conduct thorough due diligence on property transactions, ensuring clear title, proper documentation, and protection of your real estate investments for generations to come.",
    services: [
      "Property acquisition",
      "Leasing and title verification",
      "Transaction documentation",
      "Real estate investment advisory",
      "Will, Trust and Estate Planning",
    ],
  },
  {
    id: "ip",
    title: "Intellectual Property",
    image: IMAGES.ip,
    desc: "We protect, manage, and enhance the value of intellectual assets across industries. Our IP practice covers trademark registration and portfolio management, copyright protection, patent applications, industrial design registration, and comprehensive enforcement strategies. We help businesses identify, protect, and monetize their intellectual property, from brand protection to technology licensing, ensuring your innovations and creative works remain secure in an increasingly competitive marketplace.",
    services: [
      "Trademark, copyright, patent, and industrial design registration",
      "Portfolio management",
      "Enforcement strategy",
    ],
  },
  {
    id: "governance",
    title: "Governance, Risk & Training",
    image: IMAGES.governance,
    desc: "We strengthen institutional frameworks and equip teams with practical, business-driven legal knowledge. Our governance advisory includes board effectiveness reviews, compliance system design, risk assessment frameworks, and policy development. We deliver bespoke training programs on contract management, corporate governance, regulatory compliance, and risk mitigation, empowering your internal teams to make informed decisions and maintain robust compliance standards across your organization.",
    services: [
      "Corporate governance advisory",
      "Compliance systems and risk frameworks",
      "Bespoke trainings on contracts, governance, and regulatory compliance",
    ],
  },
  {
    id: "dispute",
    title: "Dispute Resolution",
    image: IMAGES.dispute,
    desc: "We adopt a strategic, results-driven approach to resolving disputes while preserving commercial relationships where possible. Our dispute resolution practice emphasizes alternative dispute resolution mechanisms including mediation and arbitration, dispute prevention through proactive contract design, and strategic advisory on commercial and corporate conflicts. We focus on achieving practical business outcomes, minimizing disruption to operations, and protecting your reputation while vigorously defending your interests when litigation becomes necessary.",
    services: [
      "Mediation",
      "Arbitration strategy",
      "Dispute prevention",
      "Advisory on commercial and corporate conflicts",
    ],
  },
  {
    id: "workshops",
    title: "Workshops",
    image: IMAGES.workshops,
    desc: "We deliver targeted, high-impact workshops designed to enhance compliance, reduce risk, and build internal legal capacity within organizations. Our training programs are customized to your industry and business needs, covering topics such as contract fundamentals, regulatory compliance essentials, corporate governance best practices, and risk management strategies. These interactive sessions empower your team with practical legal knowledge, enabling them to identify issues early, make informed decisions, and reduce reliance on external counsel for routine matters.",
    services: [
      "Corporate capacity building",
      "Internal legal training",
      "Executive risk workshops",
    ],
  },
];

export default function SpecializationsGrid() {
  const [activeModal, setActiveModal] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const selectedSpec =
    activeModal !== null ? specializations[activeModal] : null;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {specializations.map((item, i) => (
          <FadeIn key={item.id} delay={i * 30}>
            <div
              onClick={() => setActiveModal(i)}
              className="group cursor-pointer relative h-80 md:h-96 bg-surface-container rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/40 group-hover:from-primary/95 group-hover:via-primary/85 transition-all duration-500" />
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-label text-[10px] text-tertiary tracking-[0.3em] font-bold">
                    0{i + 1}
                  </span>
                  <span className="material-symbols-outlined text-white/60 group-hover:text-tertiary transition-colors">
                    arrow_outward
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-headline text-white mb-3 italic leading-tight">
                  {item.title}
                </h3>

                <p className="text-sm text-white/80 line-clamp-3 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Enhanced Modal with Background Image */}
      {selectedSpec &&
        mounted &&
        createPortal(
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/75 backdrop-blur-md transition-all"
              onClick={() => setActiveModal(null)}
            />

            {/* Modal Container */}
            <div className="relative z-10 w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
              {/* Close Button */}
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-5 right-5 z-30 w-10 h-10 bg-white/20 hover:bg-white backdrop-blur-sm text-white hover:text-primary rounded-full flex items-center justify-center transition-all shadow-lg"
              >
                <span className="material-symbols-outlined text-lg">close</span>
              </button>

              {/* Header with Background Image */}
              <div className="relative h-64 md:h-80 overflow-hidden">
                {/* Background Image */}
                <img
                  src={selectedSpec.image}
                  alt={selectedSpec.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/85 to-primary/60" />

                {/* Title Content */}
                <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-12">
                  <span className="inline-block px-4 py-2 bg-tertiary/20 backdrop-blur-sm rounded-full text-[10px] font-label uppercase tracking-widest text-white font-bold mb-4 w-fit">
                    Specialty Focus
                  </span>
                  <h2 className="text-3xl md:text-5xl font-headline italic text-white leading-tight">
                    {selectedSpec.title}
                  </h2>
                </div>
              </div>

              {/* Description & Services */}
              <div className="p-8 md:p-12 bg-gradient-to-b from-surface to-white max-h-[60vh] overflow-y-auto">
                <p className="text-base md:text-lg text-on-surface-variant font-light leading-relaxed mb-8">
                  {selectedSpec.desc}
                </p>

                {/* Services List */}
                <div>
                  <h3 className="text-sm font-label uppercase tracking-widest text-tertiary mb-4 font-bold">
                    Key Services
                  </h3>
                  <ul className="space-y-3">
                    {selectedSpec.services.map((service, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-on-surface"
                      >
                        <span className="material-symbols-outlined text-tertiary text-lg mt-0.5 flex-shrink-0">
                          check_circle
                        </span>
                        <span className="text-sm md:text-base font-light">
                          {service}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}

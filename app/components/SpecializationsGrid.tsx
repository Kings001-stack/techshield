"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import FadeIn from "./FadeIn";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

// Local Lottie files mapping - using available animations
const ANIMATIONS = {
  corporate: "/assets/lottie/Office illustration.json",
  transactions: "/assets/lottie/Two businessmen.json",
  regulatory: "/assets/lottie/compliance.json",
  realestate: "/assets/lottie/real estate.json",
  ip: "/assets/lottie/Office illustration.json",
  governance: "/assets/lottie/government.json",
  dispute: "/assets/lottie/Handshake.json",
  workshops: "/assets/lottie/Two businessmen.json",
};

const specializations = [
  {
    id: "corporate",
    title: "Corporate, Business & Startup Advisory",
    animationUrl: ANIMATIONS.corporate,
    desc: "We advise corporations, founders, and growth-stage enterprises on structuring, governance, and strategic expansion. From incorporation to complex transactions, we deliver commercially focused legal solutions that position businesses for scale and long-term success.",
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
    animationUrl: ANIMATIONS.transactions,
    desc: "We design and negotiate high-value commercial arrangements with precision, ensuring clarity, risk allocation, and enforceability across all business dealings.",
    services: [
      "Contract drafting and negotiation (service, supply, distribution, franchise, JV, NDA, MOU)",
      "Transaction structuring",
      "Development of contract systems, templates, and playbooks",
    ],
  },
  {
    id: "regulatory",
    title: "Regulatory Compliance & Immigration",
    animationUrl: ANIMATIONS.regulatory,
    desc: "We provide integrated regulatory and immigration advisory to ensure seamless business operations within evolving legal frameworks.",
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
    animationUrl: ANIMATIONS.realestate,
    desc: "We support clients in navigating complex real estate transactions with a focus on security of title, compliance, and investment value.",
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
    animationUrl: ANIMATIONS.ip,
    desc: "We protect, manage, and enhance the value of intellectual assets across industries.",
    services: [
      "Trademark, copyright, patent, and industrial design registration",
      "Portfolio management",
      "Enforcement strategy",
    ],
  },
  {
    id: "governance",
    title: "Governance, Risk & Training",
    animationUrl: ANIMATIONS.governance,
    desc: "We strengthen institutional frameworks and equip teams with practical, business-driven legal knowledge.",
    services: [
      "Corporate governance advisory",
      "Compliance systems and risk frameworks",
      "Bespoke trainings on contracts, governance, and regulatory compliance",
    ],
  },
  {
    id: "dispute",
    title: "Dispute Resolution",
    animationUrl: ANIMATIONS.dispute,
    desc: "We adopt a strategic, results-driven approach to resolving disputes while preserving commercial relationships where possible.",
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
    animationUrl: ANIMATIONS.workshops,
    desc: "We deliver targeted, high-impact workshops designed to enhance compliance, reduce risk, and build internal legal capacity within organizations.",
    services: [
      "Corporate capacity building",
      "Internal legal training",
      "Executive risk workshops",
    ],
  },
];

// Reusable Lottie component to handle async fetching and rendering
function LottiePlayer({
  url,
  preloadedData,
}: {
  url: string;
  preloadedData?: any;
}) {
  const [animationData, setAnimationData] = useState<any>(
    preloadedData || null,
  );
  const [error, setError] = useState(false);

  useEffect(() => {
    // If we already have preloaded data, don't fetch again
    if (preloadedData) {
      setAnimationData(preloadedData);
      return;
    }

    setAnimationData(null);
    setError(false);

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load animation");
        return res.json();
      })
      .then((data) => setAnimationData(data))
      .catch((e) => {
        console.error("Lottie fetch error:", e);
        setError(true);
      });
  }, [url, preloadedData]);

  if (error) {
    return (
      <div className="w-full h-full flex items-center justify-center text-xs text-gray-400">
        ⚠️
      </div>
    );
  }

  if (!animationData) {
    return (
      <div className="w-16 h-16 rounded-full border-2 border-tertiary border-t-transparent animate-spin opacity-20" />
    );
  }

  return (
    <Lottie
      animationData={animationData}
      loop={true}
      autoplay={true}
      style={{ width: "100%", height: "100%" }}
    />
  );
}

export default function SpecializationsGrid() {
  const [activeModal, setActiveModal] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  const [preloadedAnimations, setPreloadedAnimations] = useState<
    Record<string, any>
  >({});

  // Preload all animations on mount
  useEffect(() => {
    setMounted(true);

    // Get unique animation URLs
    const uniqueUrls = Array.from(
      new Set(specializations.map((s) => s.animationUrl)),
    );

    // Fetch all animations in parallel
    Promise.all(
      uniqueUrls.map((url) =>
        fetch(url)
          .then((res) => res.json())
          .then((data) => ({ url, data }))
          .catch((e) => {
            console.error(`Failed to preload ${url}:`, e);
            return { url, data: null };
          }),
      ),
    ).then((results) => {
      const animationsMap: Record<string, any> = {};
      results.forEach(({ url, data }) => {
        if (data) animationsMap[url] = data;
      });
      setPreloadedAnimations(animationsMap);
    });
  }, []);

  const selectedSpec =
    activeModal !== null ? specializations[activeModal] : null;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {specializations.map((item, i) => (
          <FadeIn key={item.id} delay={i * 80}>
            <div
              onClick={() => setActiveModal(i)}
              className="group cursor-pointer relative p-8 h-full bg-surface-container rounded-2xl border border-outline-variant/10 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col justify-between"
            >
              {/* Premium Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-tertiary/0 group-hover:from-primary/5 group-hover:to-tertiary/5 transition-all duration-700" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-20 h-20 bg-white rounded-[1.5rem] shadow-sm flex items-center justify-center p-3">
                    {/* Render the Lottie Animation */}
                    <LottiePlayer
                      url={item.animationUrl}
                      preloadedData={preloadedAnimations[item.animationUrl]}
                    />
                  </div>
                  <span className="font-label text-[10px] text-outline-variant/40 group-hover:text-tertiary tracking-[0.3em] transition-colors">
                    0{i + 1}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-headline text-primary mb-4 italic leading-tight group-hover:text-tertiary transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-on-surface-variant line-clamp-3 font-light leading-relaxed mt-auto">
                  {item.desc}
                </p>

                <div className="mt-8 flex items-center gap-2 text-[10px] font-label font-bold uppercase tracking-[0.2em] text-primary/40 group-hover:text-primary transition-colors">
                  View Full Details
                  <span className="material-symbols-outlined text-sm">
                    arrow_outward
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Enhanced Modal */}
      {selectedSpec &&
        mounted &&
        createPortal(
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/75 backdrop-blur-md transition-all"
              onClick={() => setActiveModal(null)}
            />

            {/* Modal Container - Enhanced UI */}
            <div className="relative z-10 w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
              {/* Close Button */}
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-5 right-5 z-30 w-10 h-10 bg-primary/10 hover:bg-primary text-primary hover:text-white rounded-full flex items-center justify-center transition-all shadow-lg backdrop-blur-sm"
              >
                <span className="material-symbols-outlined text-lg">close</span>
              </button>

              {/* Header with Animation - Improved */}
              <div className="bg-gradient-to-br from-primary via-primary to-primary/90 p-8 md:p-12 text-center relative overflow-hidden">
                {/* Decorative background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-tertiary rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
                </div>

                <div className="relative z-10">
                  {/* Animation Container */}
                  <div className="w-28 h-28 md:w-36 md:h-36 mx-auto mb-6 bg-white rounded-3xl p-5 md:p-6 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                    <LottiePlayer
                      key={selectedSpec.id}
                      url={selectedSpec.animationUrl}
                      preloadedData={
                        preloadedAnimations[selectedSpec.animationUrl]
                      }
                    />
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl md:text-4xl font-headline italic text-white leading-tight px-4 mb-3">
                    {selectedSpec.title}
                  </h2>

                  {/* Subtitle badge */}
                  <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-[10px] font-label uppercase tracking-widest text-white/90 font-bold">
                    Specialty Focus
                  </span>
                </div>
              </div>

              {/* Description - Enhanced */}
              <div className="p-8 md:p-12 bg-gradient-to-b from-surface to-white">
                <p className="text-base md:text-lg text-on-surface-variant font-light leading-relaxed text-center max-w-xl mx-auto">
                  {selectedSpec.desc}
                </p>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}

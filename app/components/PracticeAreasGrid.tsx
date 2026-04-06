"use client";

import { useState, useEffect } from "react";
import FadeIn from "./FadeIn";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const practiceAreas = [
  {
    title: "Corporate & Commercial Law",
    description:
      "Comprehensive legal support for businesses of all sizes, from startups to established corporations.",
    icon: "corporate_fare",
    animation: "/assets/lottie/Office illustration.json",
  },
  {
    title: "Contract Law",
    description:
      "Expert drafting, review, and negotiation of commercial agreements and business contracts.",
    icon: "description",
    animation: "/assets/lottie/Two businessmen.json",
  },
  {
    title: "Real Estate Law",
    description:
      "Full-service property law including acquisitions, leasing, and estate planning.",
    icon: "home_work",
    animation: "/assets/lottie/real estate.json",
  },
  {
    title: "Intellectual Property",
    description:
      "Protection and management of trademarks, copyrights, patents, and trade secrets.",
    icon: "lightbulb",
    animation: "/assets/lottie/Office illustration.json",
  },
  {
    title: "Regulatory Compliance",
    description:
      "Guidance on navigating complex regulatory frameworks and maintaining compliance.",
    icon: "verified_user",
    animation: "/assets/lottie/compliance.json",
  },
  {
    title: "Dispute Resolution",
    description:
      "Strategic approach to resolving business disputes through mediation and arbitration.",
    icon: "balance",
    animation: "/assets/lottie/Handshake.json",
  },
];

function LottiePlayer({ url }: { url: string }) {
  const [animationData, setAnimationData] = useState<any>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
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
  }, [url]);

  if (error) {
    return (
      <div className="w-full h-full flex items-center justify-center text-xs text-gray-400">
        ⚠️
      </div>
    );
  }

  if (!animationData) {
    return (
      <div className="w-12 h-12 rounded-full border-2 border-tertiary border-t-transparent animate-spin opacity-20" />
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

export default function PracticeAreasGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
      {practiceAreas.map((area, i) => (
        <FadeIn key={i} delay={i * 30}>
          <div className="bg-surface-container p-8 md:p-10 rounded-2xl border border-outline-variant/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
            {/* Lottie Animation */}
            <div className="w-20 h-20 mb-6 bg-white rounded-2xl p-3 shadow-sm">
              <LottiePlayer url={area.animation} />
            </div>

            <h3 className="font-headline text-2xl md:text-3xl text-primary italic mb-4 leading-tight">
              {area.title}
            </h3>
            <p className="text-on-surface-variant leading-relaxed font-light">
              {area.description}
            </p>
          </div>
        </FadeIn>
      ))}
    </div>
  );
}

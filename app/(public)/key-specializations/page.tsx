import FadeIn from "@/app/components/FadeIn";
import Link from "next/link";
import SpecializationsGrid from "@/app/components/SpecializationsGrid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Key Specializations | TechShield Legal Services",
  description:
    "Explore our core legal specializations: Corporate & Business Advisory, Commercial Transactions, Regulatory Compliance, Real Estate Law, Intellectual Property, Governance & Training, Dispute Resolution, and Workshops. Expert legal solutions for Nigerian businesses.",
  keywords: [
    "corporate advisory Nigeria",
    "commercial transactions",
    "regulatory compliance Nigeria",
    "real estate law",
    "intellectual property protection",
    "corporate governance",
    "dispute resolution",
    "legal training workshops",
  ],
  openGraph: {
    title: "Key Specializations | TechShield Legal Services",
    description:
      "Expert legal specializations covering corporate law, transactions, compliance, real estate, IP, and more.",
    url: "https://techshieldlegal.com/key-specializations",
  },
};

export default function KeySpecializationsPage() {
  return (
    <div className="page-enter bg-surface pt-24 md:pt-28">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-primary">
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="/assets/practice-areas/bg-hero2.jpg"
            alt="Key Specializations"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/70 via-primary/80 to-primary/70" />
        </div>

        <div className="max-w-screen-2xl mx-auto px-6 md:px-8 lg:px-12 relative z-10">
          <FadeIn>
            <span className="inline-flex items-center gap-4 text-tertiary font-label font-bold tracking-[0.4em] mb-8 md:mb-12 uppercase text-[10px] md:text-xs">
              <span className="w-8 md:w-12 h-px bg-tertiary" />
              What We Do Best
            </span>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-end">
            <FadeIn delay={100} className="lg:col-span-8">
              <h1 className="font-headline text-5xl md:text-8xl lg:text-9xl leading-[0.95] tracking-tighter text-white italic">
                Key <br />
                Specializations
              </h1>
            </FadeIn>
            <FadeIn delay={220} className="lg:col-span-4 pb-4">
              <p className="text-white/80 text-lg md:text-2xl leading-relaxed max-w-sm font-light">
                Focused expertise delivering measurable results across
                corporate, commercial, and regulatory domains.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 md:py-32 bg-surface">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8 lg:px-12">
          <FadeIn>
            <div className="max-w-4xl mx-auto text-center mb-20">
              <h2 className="font-headline text-3xl md:text-5xl text-primary italic mb-8">
                Strategic Legal Solutions for Modern Business
              </h2>
              <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed font-light">
                At TechShield Legal Services, we don't just provide legal
                advice—we deliver strategic solutions that drive business
                growth, mitigate risk, and create sustainable competitive
                advantages. Our key specializations represent the core areas
                where we consistently deliver exceptional value to our clients.
              </p>
            </div>
          </FadeIn>

          {/* Specializations Grid */}
          <SpecializationsGrid />
        </div>
      </section>

      {/* Why These Specializations Matter */}
      <section className="py-20 md:py-32 bg-surface-container-low">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8 lg:px-12">
          <FadeIn>
            <div className="text-center mb-16 md:mb-20">
              <span className="text-[10px] md:text-xs font-label uppercase tracking-[0.4em] text-tertiary mb-6 block font-bold">
                Our Approach
              </span>
              <h2 className="font-headline text-4xl md:text-6xl text-primary italic mb-8">
                Why These Specializations?
              </h2>
              <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed font-light max-w-3xl mx-auto">
                Each specialization has been carefully developed based on market
                demand, our team's expertise, and proven track record of
                delivering results for clients across Nigeria and beyond.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {[
              {
                title: "Business-First Mindset",
                desc: "We understand that legal solutions must serve business objectives. Every recommendation is filtered through the lens of commercial viability, operational efficiency, and strategic growth.",
                icon: "business_center",
              },
              {
                title: "Regulatory Mastery",
                desc: "Nigeria's regulatory environment is complex and constantly evolving. Our deep knowledge of compliance requirements across multiple sectors ensures your business stays ahead of regulatory changes.",
                icon: "gavel",
              },
              {
                title: "Transaction Excellence",
                desc: "From startup formation to multi-million dollar M&A deals, we structure and execute transactions that protect your interests while facilitating smooth business operations.",
                icon: "handshake",
              },
              {
                title: "Capacity Building",
                desc: "We don't just solve problems—we empower your team with the knowledge and tools to prevent future issues through targeted training and governance frameworks.",
                icon: "school",
              },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="bg-surface p-8 md:p-10 rounded-2xl border border-outline-variant/10 shadow-sm hover:shadow-lg transition-all">
                  <span className="material-symbols-outlined text-4xl text-tertiary mb-6 block">
                    {item.icon}
                  </span>
                  <h3 className="font-headline text-2xl md:text-3xl text-primary italic mb-4">
                    {item.title}
                  </h3>
                  <p className="text-on-surface-variant leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Focus */}
      <section className="py-20 md:py-32 bg-surface">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8 lg:px-12">
          <FadeIn>
            <div className="text-center mb-16 md:mb-20">
              <span className="text-[10px] md:text-xs font-label uppercase tracking-[0.4em] text-tertiary mb-6 block font-bold">
                Sectors We Serve
              </span>
              <h2 className="font-headline text-4xl md:text-6xl text-primary italic mb-8">
                Cross-Industry Expertise
              </h2>
              <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed font-light max-w-3xl mx-auto">
                Our specializations serve clients across diverse industries,
                from technology startups to established real estate firms,
                ensuring tailored solutions for every sector.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              "Technology & Startups",
              "Real Estate & Property",
              "Financial Services",
              "Manufacturing",
              "Healthcare",
              "Energy & Resources",
              "Retail & E-commerce",
              "Professional Services",
            ].map((industry, i) => (
              <FadeIn key={i} delay={i * 50}>
                <div className="bg-surface-container p-6 rounded-xl text-center border border-outline-variant/10 hover:border-tertiary/30 transition-all">
                  <p className="text-sm md:text-base text-on-surface font-medium">
                    {industry}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-6 md:mx-8 lg:mx-12 px-6 md:px-12 py-32 md:py-48 text-center bg-primary rounded-2xl md:rounded-3xl mt-24 mb-24 overflow-hidden shadow-2xl relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-tertiary/20 opacity-40 pointer-events-none" />
        <FadeIn>
          <div className="max-w-4xl mx-auto relative z-10">
            <span className="w-12 md:w-16 h-px bg-tertiary mx-auto mb-8 md:mb-10 block" />
            <h2 className="font-headline text-4xl md:text-7xl lg:text-8xl text-white mb-10 md:mb-16 italic font-normal leading-[1.1]">
              Let's Discuss Your Needs
            </h2>
            <p className="text-lg md:text-2xl text-white/70 mb-12 md:mb-20 leading-relaxed font-light max-w-2xl mx-auto">
              Schedule a consultation to explore how our specialized expertise
              can address your specific business challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-8 justify-center">
              <Link
                href="/contact"
                className="btn-base bg-white text-primary w-full sm:w-auto px-10 md:px-12 py-5 md:py-6 hover:bg-tertiary hover:text-white shadow-2xl text-[10px] md:text-xs font-label uppercase tracking-widest font-bold"
              >
                Book a Consultation
              </Link>
              <Link
                href="/about"
                className="btn-base border border-white/30 text-white w-full sm:w-auto px-10 md:px-12 py-5 md:py-6 hover:bg-white/10 text-[10px] md:text-xs font-label uppercase tracking-widest font-bold"
              >
                About Our Team
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}

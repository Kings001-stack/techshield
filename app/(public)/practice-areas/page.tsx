import FadeIn from "@/app/components/FadeIn";
import Link from "next/link";

const practiceAreas = [
  {
    id: "corporate",
    title: "Corporate & Business Advisory",
    image: "/assets/practice-areas/corporate.png",
    description:
      "Holistic legal support for corporations, from entity selection to post-incorporation governance and daily operations.",
    icon: "corporate_fare",
    details: [
      "Company formation and structuring",
      "Corporate governance & compliance audits",
      "Shareholder agreements & board resolutions",
      "Drafting and review of commercial contracts",
    ],
  },
  {
    id: "transactions",
    title: "Commercial Transactions",
    image: "/assets/practice-areas/transactions.png",
    description:
      "Meticulous legal engineering for complex deals, ensuring your business interests are shielded at every negotiation phase.",
    icon: "handshake",
    details: [
      "Service and supply chain agreements",
      "M&A, joint ventures & partnerships",
      "NDA drafting and transaction advisory",
      "Regulatory risk mitigation in deal structures",
    ],
  },
  {
    id: "regulatory",
    title: "Regulatory Compliance & Immigration",
    image: "/assets/practice-areas/regulatory.png",
    description:
      "Seamlessly navigate the Nigerian regulatory landscape, ensuring all statutory certifications and work permits are in place.",
    icon: "verified_user",
    details: [
      "NSITF, ITF, and PENCOM certifications",
      "Expatriate quotas & Nigerian work permits",
      "Tender pre-qualification documentation",
      "Statutory annual returns and filings",
    ],
  },
  {
    id: "real-estate",
    title: "Real Estate & Property Law",
    image: "/assets/practice-areas/real-estate.png",
    description:
      "Securing your physical assets with thorough due diligence and precise documentation for land acquisitions and leases.",
    icon: "real_estate_agent",
    details: [
      "Property acquisition and title verification",
      "Leasehold agreements and management",
      "Sale deeds and ownership transfers",
      "Project financing for property development",
    ],
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    image: "/assets/practice-areas/intellectual-property.png",
    description:
      "Strategic advisory to protect your brand's unique identity, creative works, and industrial innovations in a competitive market.",
    icon: "copyright",
    details: [
      "Trademark registration and renewals",
      "Copyright notifications & brand protection",
      "Patent and industrial design filings",
      "IP licensing and infringement mediation",
    ],
  },
  {
    id: "governance",
    title: "Governance & Risk Training",
    image: "/assets/practice-areas/governance.png",
    description:
      "Tailored workshops and strategic manuals to empower boards and teams with robust governance and mediation frameworks.",
    icon: "model_training",
    details: [
      "Customized governance manuals",
      "Workshops on contract negotiation",
      "Strategic risk assessment training",
      "Mediation & conflict resolution sessions",
    ],
  },
];

export default function Page() {
  return (
    <div className="page-enter bg-surface overflow-x-hidden">
      {/* ── Hero ─────────────────────────── */}
      <section className="py-20 md:py-32 max-w-screen-2xl mx-auto px-6 md:px-8 lg:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-surface-container-low/30 skew-x-12 translate-x-1/4 pointer-events-none" />
        <FadeIn>
          <span className="inline-flex items-center gap-4 text-tertiary font-label font-bold tracking-[0.4em] mb-8 md:mb-12 uppercase text-[10px] md:text-xs">
            <span className="w-8 md:w-12 h-px bg-tertiary" />
            Core Competencies
          </span>
          <h1 className="font-headline text-6xl md:text-9xl text-primary tracking-tighter mb-6 md:mb-10 italic">
            Practice <br /> Areas.
          </h1>
          <p className="text-on-surface-variant text-xl md:text-2xl font-light max-w-3xl leading-relaxed">
            TechShield Legal provides precise, high-stakes legal advisory across
            corporate, commercial, and property sectors.
          </p>
        </FadeIn>
      </section>

      {/* ── Cards Grid ────────────────────── */}
      <section className="bg-surface-container-lowest py-20 md:py-32 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-2xl relative z-10 -mt-10 md:-mt-16">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {practiceAreas.map((area, i) => (
              <FadeIn
                key={area.id}
                delay={i * 100}
                direction="up"
                className="h-full"
              >
                <div
                  id={area.id}
                  className="group relative h-[320px] md:h-[400px] overflow-hidden rounded-xl md:rounded-2xl border border-outline-variant/10 shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 cursor-pointer"
                >
                  {/* Full Background Image */}
                  <img 
                    src={area.image} 
                    alt={area.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  
                  {/* Premium Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-700" />
                  <div className="absolute inset-0 border-[0.5px] border-white/5 m-3 rounded-lg md:rounded-xl pointer-events-none" />

                  {/* Content (Simplified) */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className="flex items-center gap-4 mb-2">
                       <span className="w-8 h-px bg-tertiary/60" />
                       <span className="font-label text-[10px] uppercase tracking-[0.3em] text-tertiary">
                         Specialization 0{i+1}
                       </span>
                    </div>
                    <h2 className="font-headline text-3xl md:text-4xl text-white italic leading-tight mb-2">
                      {area.title}
                    </h2>
                    
                    {/* Bottom CTA (Subtle) */}
                    <Link
                      href={`/contact?service=${encodeURIComponent(area.title)}`}
                      className="inline-flex items-center gap-3 text-[10px] font-label font-bold uppercase tracking-[0.2em] text-white/50 group-hover:text-white transition-all mt-4"
                    >
                      Establish Counsel
                      <span className="material-symbols-outlined text-[14px]">
                        arrow_outward
                      </span>
                    </Link>
                  </div>
                  
                  {/* Hover Shine Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 via-transparent to-transparent" />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom Banner ─────────────────── */}
      <section className="py-24 md:py-40 text-center bg-surface relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-8 relative z-10">
          <FadeIn>
            <h2 className="font-headline text-5xl md:text-6xl text-primary mb-8 md:mb-12 leading-tight">
              Shielding Your <br className="md:hidden" /> <span className="text-tertiary">Innovations.</span>
            </h2>
            <p className="text-on-surface-variant text-lg md:text-xl mb-12 md:mb-16 font-light max-w-2xl mx-auto leading-relaxed">
              Our multidisciplinary approach ensures that every business
              decision you make is backed by airtight legal frameworks and
              industry expertise.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 md:gap-8">
              <Link
                href="/contact"
                className="btn-base bg-primary text-white px-10 md:px-12 py-5 hover:bg-tertiary hover:shadow-2xl transition-all text-xs font-label uppercase tracking-widest font-bold"
              >
                Request Strategy Session
              </Link>
              <Link
                href={process.env.NEXT_PUBLIC_WHATSAPP_LINK || "#"}
                className="btn-base border border-primary/20 text-primary px-10 md:px-12 py-5 hover:bg-primary-container/20 transition-all flex items-center justify-center gap-2 group text-xs font-label uppercase tracking-widest font-bold"
              >
                <img
                  src="/assets/whatsapp-icon.svg"
                  alt="WhatsApp icon"
                  className="w-4 h-4 group-hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.8)] group-hover:brightness-110 transition-all duration-300"
                />
                Direct Consult
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

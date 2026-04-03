import FadeIn from "@/app/components/FadeIn";
import Link from "next/link";

const practiceAreas = [
  {
    id: "corporate",
    title: "Corporate Business Law",
    image: "/assets/practice-areas/corporate.png",
    description:
      "Strategic legal engineering for corporations, from entity selection to cross-border governance and daily industrial operations.",
    icon: "corporate_fare",
    details: [
      "Company formation and industrial structuring",
      "Corporate governance & global compliance audits",
      "Shareholder agreements & board resolutions",
      "Drafting and review of high-stakes commercial contracts",
    ],
  },
  {
    id: "real-estate",
    title: "Real Estate & Property Law",
    image: "/assets/practice-areas/real-estate.png",
    description:
      "Securing physical assets with meticulous due diligence and precise documentation for land acquisitions and leases.",
    icon: "real_estate_agent",
    details: [
      "Property acquisition and rigorous title verification",
      "Leasehold agreements and commercial management",
      "Sale deeds and ownership transfers",
      "Project financing for large-scale property development",
      "Will, Trust and Estate Planning",
    ],
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property Law",
    image: "/assets/practice-areas/intellectual-property.png",
    description:
      "Strategic advisory to protect your brand's unique identity, creative works, and industrial innovations in a competitive global market.",
    icon: "copyright",
    details: [
      "Trademark registration and international renewals",
      "Copyright notifications & brand protection strategies",
      "Patent and industrial design filings",
      "IP licensing and infringement mediation",
    ],
  },
  {
    id: "immigration",
    title: "Immigration Law",
    image: "/assets/practice-areas/governance.png",
    description:
      "Navigating the complexities of global mobility and residency, ensuring seamless transitions for talent and corporations.",
    icon: "public",
    details: [
      "Business and work permit applications",
      "Residency and citizenship advisory",
      "Expatriate quota management",
      "Compliance with international immigration protocols",
    ],
  },
  {
    id: "adr",
    title: "Alternative Dispute Resolution (ADR)",
    image: "/assets/practice-areas/transactions.png",
    description:
      "Efficient, private, and strategic resolution of disputes through mediation and arbitration, bypassing traditional litigation bottlenecks.",
    icon: "handshake",
    details: [
      "Commercial mediation and negotiation",
      "International arbitration advisory",
      "Conflict resolution framework design",
      "Private settlement agreements",
    ],
  },
  {
    id: "labor-law",
    title: "Employment & Labor Law",
    image: "/assets/practice-areas/employ.jpg",
    description:
      "Balancing organizational interests with workforce rights through precise contract drafting and labor regulatory compliance.",
    icon: "groups",
    details: [
      "Employment contract drafting and review",
      "Labor law compliance audits",
      "Workplace policy development",
      "Dismissal and redundancy advisory",
    ],
  },
];

export default function Page() {
  return (
    <div className="page-enter bg-surface overflow-x-hidden">
      {/* ── Hero ─────────────────────────── */}
      <section className="py-24 md:py-48 max-w-screen-2xl mx-auto px-6 md:px-8 lg:px-12 relative overflow-hidden bg-primary">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <img
            src="/assets/practice-areas/bg-hero.jpg"
            alt="TechShield Practice Areas"
            className="absolute inset-0 w-full h-full object-cover opacity-20 transition-transform duration-[3000ms] hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent" />
        </div>
        <FadeIn>
          <span className="inline-flex items-center gap-4 text-tertiary font-label font-bold tracking-[0.4em] mb-8 md:mb-12 uppercase text-[10px] md:text-xs">
            <span className="w-8 md:w-12 h-px bg-tertiary" />
            Core Competencies
          </span>
          <h1 className="font-headline text-6xl md:text-9xl text-white tracking-tighter mb-6 md:mb-10 italic">
            Practice <br /> Areas.
          </h1>
          <p className="text-white/70 text-xl md:text-2xl font-light max-w-3xl leading-relaxed">
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
                        Specialization 0{i + 1}
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
              Shielding Your <br className="md:hidden" />{" "}
              <span className="text-tertiary">Innovations.</span>
            </h2>
            <p className="text-on-surface-variant text-lg md:text-xl mb-12 md:mb-16 font-light max-w-2xl mx-auto leading-relaxed">
              Our multidisciplinary approach ensures that every business
              decision you make is backed by airtight legal frameworks and
              industry expertise.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-8">
              <Link
                href="/contact"
                className="btn-base bg-primary text-white w-full sm:w-auto px-10 md:px-12 py-5 hover:bg-tertiary hover:shadow-2xl transition-all text-xs font-label uppercase tracking-widest font-bold"
              >
                Book consultation
              </Link>
              <Link
                href={process.env.NEXT_PUBLIC_WHATSAPP_LINK || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-base border border-primary/20 text-primary w-full sm:w-auto px-10 md:px-12 py-5 hover:bg-primary-container/20 transition-all flex items-center justify-center gap-3 group text-xs font-label uppercase tracking-widest font-bold"
              >
                <img
                  src="/assets/whatsapp-icon.svg"
                  alt="WhatsApp icon"
                  className="w-4 h-4 transition-all duration-300 shrink-0"
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

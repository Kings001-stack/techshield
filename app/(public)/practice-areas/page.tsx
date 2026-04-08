import FadeIn from "@/app/components/FadeIn";
import Link from "next/link";

export default function PracticeAreasPage() {
  const practiceAreas = [
    {
      title: "Corporate & Commercial Law",
      description:
        "Comprehensive legal support for businesses of all sizes, from startups to established corporations.",
      icon: "corporate_fare",
    },
    {
      title: "Contract Law",
      description:
        "Expert drafting, review, and negotiation of commercial agreements and business contracts.",
      icon: "description",
    },
    {
      title: "Real Estate Law",
      description:
        "Full-service property law including acquisitions, leasing, and estate planning.",
      icon: "home_work",
    },
    {
      title: "Intellectual Property",
      description:
        "Protection and management of trademarks, copyrights, patents, and trade secrets.",
      icon: "lightbulb",
    },
    {
      title: "Regulatory Compliance",
      description:
        "Guidance on navigating complex regulatory frameworks and maintaining compliance.",
      icon: "verified_user",
    },
    {
      title: "Dispute Resolution",
      description:
        "Strategic approach to resolving business disputes through mediation and arbitration.",
      icon: "balance",
    },
  ];

  return (
    <div className="page-enter bg-surface pt-24 md:pt-28">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-primary">
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="/assets/practice-areas/bg-hero.jpg"
            alt="Practice Areas"
            className="w-full h-full object-cover opacity-20 brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/80" />
        </div>

        <div className="max-w-screen-2xl mx-auto px-6 md:px-8 lg:px-12 relative z-10">
          <FadeIn>
            <span className="inline-flex items-center gap-4 text-tertiary font-label font-bold tracking-[0.4em] mb-8 md:mb-12 uppercase text-[10px] md:text-xs">
              <span className="w-8 md:w-12 h-px bg-tertiary" />
              Legal Services Overview
            </span>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-end">
            <FadeIn delay={100} className="lg:col-span-8">
              <h1 className="font-headline text-5xl md:text-8xl lg:text-9xl leading-[0.95] tracking-tighter text-white italic">
                Practice <br />
                Areas
              </h1>
            </FadeIn>
            <FadeIn delay={220} className="lg:col-span-4 pb-4">
              <p className="text-white/80 text-lg md:text-2xl leading-relaxed max-w-sm font-light">
                Broad legal expertise across multiple practice areas to serve
                your business needs.
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
                Comprehensive Legal Services
              </h2>
              <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed font-light">
                TechShield Legal Services offers a wide range of legal practice
                areas designed to support businesses at every stage of growth.
                Our multidisciplinary approach ensures you receive integrated
                legal solutions tailored to your specific needs.
              </p>
            </div>
          </FadeIn>

          {/* Practice Areas Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {practiceAreas.map((area, i) => (
              <FadeIn key={i} delay={i * 80}>
                <div className="bg-surface-container p-8 md:p-10 rounded-2xl border border-outline-variant/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                  <span className="material-symbols-outlined text-5xl text-tertiary mb-6 block">
                    {area.icon}
                  </span>
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
        </div>
      </section>

      {/* Learn More Section */}
      <section className="py-20 md:py-32 bg-surface-container-low">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8 lg:px-12">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="font-headline text-3xl md:text-5xl text-primary italic mb-8">
                Want to Learn More?
              </h2>
              <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed font-light mb-12">
                For detailed information about our specific services and how we
                can help your business, explore our Key Specializations page.
              </p>
              <Link
                href="/key-specializations"
                className="btn-base bg-primary text-white px-10 md:px-12 py-5 md:py-6 hover:bg-tertiary shadow-lg text-[10px] md:text-xs font-label uppercase tracking-widest font-bold inline-flex items-center gap-3"
              >
                View Key Specializations
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-6 md:mx-8 lg:mx-12 px-6 md:px-12 py-32 md:py-48 text-center bg-primary rounded-2xl md:rounded-3xl mt-24 mb-24 overflow-hidden shadow-2xl relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-tertiary/20 opacity-40 pointer-events-none" />
        <FadeIn>
          <div className="max-w-4xl mx-auto relative z-10">
            <span className="w-12 md:w-16 h-px bg-tertiary mx-auto mb-8 md:mb-10 block" />
            <h2 className="font-headline text-4xl md:text-7xl lg:text-8xl text-white mb-10 md:mb-16 italic font-normal leading-[1.1]">
              Ready to Get Started?
            </h2>
            <p className="text-lg md:text-2xl text-white/70 mb-12 md:mb-20 leading-relaxed font-light max-w-2xl mx-auto">
              Contact us today to discuss how our legal services can support
              your business objectives.
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

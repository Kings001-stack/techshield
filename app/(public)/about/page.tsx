import FadeIn from "@/app/components/FadeIn";
import Link from "next/link";
import TestimonialCarousel from "@/app/components/TestimonialCarousel";
import PracticeAreasGrid from "@/app/components/PracticeAreasGrid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | TechShield Legal Services",
  description:
    "Meet Geraldine Mbah, LL.M (USA), founder of TechShield Legal Services with 15+ years experience in corporate, commercial, and property law. Learn about our mission, vision, and expert team providing strategic legal solutions for Nigerian businesses.",
  keywords: [
    "Geraldine Mbah lawyer",
    "Nigerian law firm",
    "corporate lawyer Nigeria",
    "business law firm Lagos",
    "legal services team",
  ],
  openGraph: {
    title: "About Us | TechShield Legal Services",
    description:
      "Led by Geraldine Mbah, LL.M (USA) with 15+ years experience. Expert legal team serving businesses across Nigeria.",
    url: "https://techshieldlegal.com/about",
  },
};

export default function Page() {
  return (
    <div className="page-enter bg-surface">
      {/* ── Hero with Background ─────────────────────────────── */}
      <section className="relative py-20 md:py-24 mb-8 overflow-hidden pt-24 md:pt-28">
        {/* Background Image */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="/assets/about/bg-hero.jpg"
            alt="TechShield Legal"
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-surface/60 via-surface/75 to-surface" />
        </div>

        <div className="max-w-screen-2xl mx-auto px-6 md:px-8 lg:px-12 relative z-10">
          <FadeIn>
            <span className="inline-flex items-center gap-4 text-tertiary font-label font-bold tracking-[0.4em] mb-8 md:mb-12 uppercase text-[10px] md:text-xs">
              <span className="w-8 md:w-12 h-px bg-tertiary" />
              Empowering Business Success
            </span>
          </FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-end">
            <FadeIn delay={100} className="lg:col-span-8">
              <h1 className="font-headline text-5xl md:text-8xl lg:text-9xl leading-[0.95] tracking-tighter text-primary italic">
                Solving Today. <br />
                Protecting Tomorrow.
              </h1>
            </FadeIn>
            <FadeIn delay={220} className="lg:col-span-4 pb-4">
              <p className="text-on-surface-variant text-lg md:text-2xl leading-relaxed max-w-sm font-light">
                TechShield Legal Services provides discrete, business-focused
                counsel designed to solve immediate challenges while
                architecting long-term sustainability.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Founder Bio ────────────────────────── */}
      <section className="bg-surface-container-low py-20 md:py-40 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-inner relative z-10">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32 items-start">
            {/* Portrait Container */}
            <FadeIn direction="left">
              <div className="relative group">
                <div className="aspect-[4/5] bg-gradient-to-br from-primary via-surface-container-high to-surface-container-low rounded-xl overflow-hidden shadow-2xl relative">
                  <div className="absolute inset-x-6 md:inset-x-10 bottom-0 top-12 md:top-20 bg-primary/5 -z-1" />
                  <img
                    alt="Geraldine Mbah — Founder & Lead Counsel"
                    className="w-full h-full object-contain transition-transform duration-1000 group-hover:scale-105 filter brightness-105"
                    src="/assets/pic.png"
                  />
                </div>
                {/* Signature overlay */}
                <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 hidden xl:flex w-72 h-80 bg-primary rounded-xl p-12 flex-col justify-end shadow-2xl skew-x-[-6deg]">
                  <div className="skew-x-[6deg]">
                    <span className="text-tertiary font-headline text-5xl mb-6 italic block">
                      G.M.
                    </span>
                    <p className="text-white text-[10px] tracking-[0.3em] leading-loose uppercase font-bold opacity-70">
                      Founder &amp; Principal Counsel
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Bio Content */}
            <FadeIn direction="right" delay={100} className="lg:pt-12">
              <span className="w-16 h-px bg-tertiary mb-8 md:mb-10 block" />
              <h2 className="font-headline text-3xl md:text-5xl text-primary mb-8 md:mb-12 italic leading-tight">
                About Our Founder — <br />
                Geraldine Mbah,{" "}
                <span className="text-tertiary underline underline-offset-[12px] decoration-outline-variant/30">
                  LL.M (USA)
                </span>
              </h2>
              <div className="space-y-6 md:space-y-10 text-on-surface text-base md:text-xl leading-relaxed font-light">
                <p>
                  Geraldine Mbah is a licensed Nigerian lawyer with over 15
                  years of experience in commercial, corporate, transactional,
                  and property law. She has advised startups, SMEs,
                  multinational corporations, and investors both locally and
                  globally.
                </p>
                <p>
                  Her expertise spans corporate governance, complex commercial
                  contracts, land acquisitions, and intellectual property
                  protection. She specializes in navigating the intricate
                  regulatory landscape of Nigerian business while ensuring
                  international compliance standards.
                </p>
                <div className="bg-surface-container-high px-8 md:px-12 py-8 md:py-12 border-l-4 border-tertiary relative">
                  <p className="italic font-serif text-xl md:text-3xl text-primary leading-snug">
                    &ldquo;We solve today’s business challenges efficiently and
                    affordably while equipping our clients to prevent future
                    issues and thrive sustainably.&rdquo;
                  </p>
                </div>
                <div className="pt-8 md:pt-12 flex items-center gap-6 md:gap-8">
                  <span className="w-12 h-px bg-tertiary opacity-40 shadow-sm shadow-tertiary" />
                  <span className="font-headline italic text-primary text-xl md:text-2xl">
                    Geraldine Mbah, Esq.
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Editor Bio ────────────────────────── */}
      <section className="bg-surface py-20 md:py-40">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32 items-center">
            {/* Portrait Container - Right Side on Desktop, First on Mobile */}
            <FadeIn direction="right" delay={100} className="lg:order-2">
              <div className="relative group">
                <div className="aspect-square bg-gradient-to-br from-surface-container-high to-surface-container rounded-2xl overflow-hidden shadow-lg relative max-w-md mx-auto">
                  <img
                    alt="Editor"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src="/assets/about/co-founder.png"
                  />
                </div>
              </div>
            </FadeIn>

            {/* Bio Content - Left Side on Desktop, Second on Mobile */}
            <FadeIn direction="left" className="lg:order-1">
              <span className="text-[10px] md:text-xs font-label uppercase tracking-[0.3em] text-tertiary mb-6 block font-bold">
                Editorial Team
              </span>
              <h2 className="font-headline text-3xl md:text-5xl text-primary mb-6 md:mb-8 italic leading-tight">
                Dr. Ayodeji J. Jayeoba
              </h2>
              <p className="text-sm md:text-base text-tertiary mb-8 font-medium">
                Editor, Ph.D.
              </p>
              <div className="space-y-4 md:space-y-6 text-on-surface text-base md:text-lg leading-relaxed font-light">
                <p>
                  Dr. Jayeoba oversees editorial content and quality assurance
                  for TechShield Legal Services, ensuring all published
                  materials meet the highest standards of legal accuracy and
                  professional excellence.
                </p>
                <p>
                  With a Ph.D. and extensive background in legal research and
                  documentation, Dr. Jayeoba brings meticulous attention to
                  detail and scholarly rigor to the firm's communications and
                  client-facing materials.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Client Testimonials Carousel ────────────────────────── */}
      <section className="py-32 md:py-48 bg-surface-container-low relative overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8 lg:px-12">
          <FadeIn>
            <div className="text-center mb-16 md:mb-20">
              <span className="text-[10px] md:text-xs font-label uppercase tracking-[0.4em] text-tertiary mb-6 block font-bold">
                Client Voices
              </span>
              <h2 className="font-headline text-4xl md:text-6xl text-primary italic">
                What Our Clients Say
              </h2>
            </div>
          </FadeIn>

          <TestimonialCarousel />
        </div>
      </section>

      {/* ── Mission & Vision ───────────────── */}
      <section className="py-32 md:py-56 relative overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="/assets/practice-areas/bg-hero.jpg"
            alt="TechShield Strategic Team"
            className="w-full h-full object-cover opacity-30 brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-transparent" />
        </div>

        <div className="max-w-screen-2xl mx-auto px-6 md:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-32">
            <FadeIn direction="up">
              <span className="font-label text-[10px] md:text-xs tracking-[0.4em] uppercase text-tertiary mb-6 block font-bold">
                Purpose
              </span>
              <h3 className="font-headline text-4xl md:text-6xl text-white mb-8 md:mb-12 italic border-b border-white/10 pb-6 md:pb-10">
                Our Mission
              </h3>
              <p className="text-lg md:text-2xl text-white/70 font-light leading-relaxed">
                To provide efficient, practical, and affordable legal solutions
                that address clients’ immediate business challenges while
                ensuring compliance and peace of mind.
              </p>
            </FadeIn>
            <FadeIn direction="up" delay={200}>
              <span className="font-label text-[10px] md:text-xs tracking-[0.4em] uppercase text-tertiary mb-6 block font-bold">
                Aspiration
              </span>
              <h3 className="font-headline text-4xl md:text-6xl text-white mb-8 md:mb-12 italic border-b border-white/10 pb-6 md:pb-10">
                Our Vision
              </h3>
              <p className="text-lg md:text-2xl text-white/70 font-light leading-relaxed">
                To equip businesses with the knowledge, tools, and guidance they
                need to thrive in any market, solving current issues to prevent
                future problems and ensure long-term success.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Why TechShield ──────────────────── */}
      <section className="py-32 md:py-48 relative overflow-hidden bg-primary">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop"
            className="w-full h-full object-cover grayscale"
            alt=""
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>

        <div className="max-w-screen-2xl mx-auto px-6 md:px-8 lg:px-12 relative z-10">
          <FadeIn>
            <div className="mb-20 md:mb-24 text-center">
              <span className="w-12 h-px bg-tertiary mx-auto mb-8 block" />
              <h2 className="font-headline text-5xl md:text-6xl text-white italic">
                Why TechShield?
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              {
                title: "Veteran Leadership",
                body: "Directed by Geraldine Mbah, LL.M (USA), bringing over 15 years of seasoned counsel to your boardroom.",
                icon: "shield_with_heart",
              },
              {
                title: "Multi-Sector Mastery",
                body: "Deep expertise in corporate, commercial, real estate, and IP law across local and international markets.",
                icon: "account_balance",
              },
              {
                title: "Strategic Advisory",
                body: "Practical, data-driven legal strategies designed for business owners, property investors, and growing startups.",
                icon: "monitoring",
              },
              {
                title: "Capacity Building",
                body: "Unique training programs to equip your internal teams with essential regulatory and compliance knowledge.",
                icon: "model_training",
              },
            ].map((feature, i) => (
              <FadeIn key={feature.title} delay={i * 100}>
                <div className="p-12 h-full flex flex-col items-center text-center bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all group">
                  <span className="material-symbols-outlined text-4xl text-tertiary mb-10 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </span>
                  <h3 className="text-2xl font-headline mb-6 text-white italic">
                    {feature.title}
                  </h3>
                  <p className="text-white/70 text-base leading-relaxed font-light">
                    {feature.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Practice Areas Overview ──────────────────── */}
      <section className="py-20 md:py-32 bg-surface">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8 lg:px-12">
          <FadeIn>
            <div className="text-center mb-16 md:mb-20">
              <span className="text-[10px] md:text-xs font-label uppercase tracking-[0.4em] text-tertiary mb-6 block font-bold">
                Legal Services
              </span>
              <h2 className="font-headline text-4xl md:text-6xl text-primary italic mb-8">
                Practice Areas
              </h2>
              <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed font-light max-w-3xl mx-auto">
                Our comprehensive legal services span multiple practice areas,
                providing integrated solutions for businesses at every stage of
                growth.
              </p>
            </div>
          </FadeIn>

          <PracticeAreasGrid />

          <FadeIn delay={100}>
            <div className="text-center mt-16 md:mt-20">
              <p className="text-on-surface-variant mb-8 max-w-2xl mx-auto">
                For detailed information about our specific services and
                expertise, explore our Key Specializations.
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

      {/* ── CTA ──────────────────────────────── */}
      <section className="mx-6 md:mx-8 lg:mx-12 px-6 md:px-12 py-32 md:py-48 text-center bg-primary rounded-2xl md:rounded-3xl mt-24 mb-24 overflow-hidden shadow-2xl relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-tertiary/20 opacity-40 pointer-events-none" />
        <FadeIn>
          <div className="max-w-4xl mx-auto relative z-10">
            <span className="w-12 md:w-16 h-px bg-tertiary mx-auto mb-8 md:mb-10 block" />
            <h2 className="font-headline text-4xl md:text-7xl lg:text-8xl text-white mb-10 md:mb-16 italic font-normal leading-[1.1]">
              Elevate Your Legal Strategy
            </h2>
            <p className="text-lg md:text-2xl text-white/70 mb-12 md:mb-20 leading-relaxed font-light max-w-2xl mx-auto">
              We bring multidisciplinary legal expertise with a business-focused
              mindset, delivering practical advice for sophisticated clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-8 justify-center">
              <Link
                href="/contact"
                className="btn-base bg-white text-primary w-full sm:w-auto px-10 md:px-12 py-5 md:py-6 hover:bg-tertiary hover:text-white shadow-2xl text-[10px] md:text-xs font-label uppercase tracking-widest font-bold"
              >
                Book a Consultation
              </Link>
              <Link
                href="/key-specializations"
                className="btn-base border border-white/30 text-white w-full sm:w-auto px-10 md:px-12 py-5 md:py-6 hover:bg-white/10 text-[10px] md:text-xs font-label uppercase tracking-widest font-bold"
              >
                Our Specializations
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}

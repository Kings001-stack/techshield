import FadeIn from "@/app/components/FadeIn";
import Link from "next/link";
import SpecializationsGrid from "@/app/components/SpecializationsGrid";

export default function Page() {
  return (
    <div className="page-enter bg-surface pt-24 md:pt-28">
      {/* ── Hero ─────────────────────────────── */}
      {/* ── Hero ─────────────────────────────── */}
      <section className="py-20 md:py-24 max-w-screen-2xl mx-auto px-6 md:px-8 lg:px-12 mb-8 mt-4 md:mt-0">
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
              counsel designed to solve immediate challenges while architecting
              long-term sustainability.
            </p>
          </FadeIn>
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

      {/* ── Expert Associates (Team Section) ── */}
      <section className="py-32 md:py-48 bg-surface">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <FadeIn>
            <div className="mb-20 md:mb-32 max-w-3xl text-left">
              <span className="font-label text-[10px] md:text-xs tracking-[0.5em] text-tertiary mb-6 block uppercase font-bold">
                Collaborative Excellence
              </span>
              <h2 className="font-headline text-5xl md:text-7xl text-primary italic leading-tight">
                The Technical <br /> Mindset.
              </h2>
              <p className="text-on-surface-variant text-lg md:text-2xl mt-8 font-light leading-relaxed">
                Behind our principal counsel is a multi-disciplinary team of
                legal researchers, corporate advisors, and administrative
                architects dedicated to your growth.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
            {[
              {
                name: "Olawale Benson",
                role: "Senior Associate",
                spec: "Legal Strategy & Compliance",
                img: "/assets/about/ola.jpg",
                bio: "Expert in cross-border regulatory compliance and complex commercial litigation strategy.",
              },
              {
                name: "Chinelo Okoro",
                role: "Junior Associate",
                spec: "Corporate Advisory",
                img: "/assets/about/chi.jpg",
                bio: "Focuses on startup legal architecture and intellectual property portfolio management.",
              },
              {
                name: "Chinedu Udechukwu",
                role: "Paralegal",
                spec: "Case Research & Analysis",
                img: "/assets/about/chinedu.jpg",
                bio: "Specializes in deep legal research and precision documentation for property transactions.",
              },
              {
                name: "Olisa okonkwo",
                role: "Administrative Lead",
                spec: "Client Success & Operations",
                img: "/assets/about/okon.jpg",
                bio: "Ensures seamless operational delivery and exceptional client relationship management.",
              },
            ].map((member, i) => (
              <FadeIn key={member.name} delay={i * 100}>
                <div className="group space-y-6">
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl bg-surface-container relative">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div>
                    <h3 className="font-headline text-2xl text-primary italic mb-1">
                      {member.name}
                    </h3>
                    <p className="text-[10px] font-label uppercase tracking-widest text-tertiary font-bold mb-4">
                      {member.role}
                    </p>
                    <p className="text-on-surface-variant text-sm font-light leading-relaxed opacity-80">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
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

      {/* ── Expertise Points ──────────────────── */}
      <section className="max-w-screen-2xl mx-auto px-6 md:px-8 lg:px-12 py-32 md:py-48 bg-surface">
        <FadeIn>
          <div className="mb-16 md:mb-24 text-center">
            <span className="font-label text-[10px] md:text-xs tracking-[0.5em] uppercase text-tertiary mb-4 md:mb-6 block font-bold">
              Authority & Insight
            </span>
            <h2 className="font-headline text-4xl md:text-6xl text-primary italic underline underline-offset-[12px] md:underline-offset-[16px] decoration-tertiary/10 leading-tight">
              Key Specializations
            </h2>
          </div>
        </FadeIn>

        <SpecializationsGrid />
      </section>

      {/* ── CTA ──────────────────────────────── */}
      <section className="max-w-[calc(100%-3rem)] md:max-w-screen-2xl mx-auto px-6 md:px-12 py-32 md:py-48 text-center bg-primary rounded-2xl md:rounded-3xl mb-24 overflow-hidden shadow-2xl relative">
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
                href="/practice-areas"
                className="btn-base border border-white/30 text-white w-full sm:w-auto px-10 md:px-12 py-5 md:py-6 hover:bg-white/10 text-[10px] md:text-xs font-label uppercase tracking-widest font-bold"
              >
                Practice Areas
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}

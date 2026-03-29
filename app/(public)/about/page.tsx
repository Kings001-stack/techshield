import FadeIn from "@/app/components/FadeIn";
import Link from "next/link";

export default function Page() {
  return (
    <div className="page-enter bg-surface">
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

      {/* ── Mission & Vision ───────────────── */}
      <section className="py-24 md:py-48 bg-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-surface-container-low/20 -skew-x-12 translate-x-1/2" />
        <div className="max-w-screen-2xl mx-auto px-6 md:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-40">
            <FadeIn direction="up">
              <h3 className="font-headline text-4xl md:text-6xl text-primary mb-8 md:mb-12 italic border-b border-outline-variant/30 pb-6 md:pb-10">
                Our Mission
              </h3>
              <p className="text-lg md:text-2xl text-on-surface-variant font-light leading-relaxed">
                To provide efficient, practical, and affordable legal solutions
                that address clients’ immediate business challenges while
                ensuring compliance and peace of mind.
              </p>
            </FadeIn>
            <FadeIn direction="up" delay={200}>
              <h3 className="font-headline text-4xl md:text-6xl text-primary mb-8 md:mb-12 italic border-b border-outline-variant/30 pb-6 md:pb-10">
                Our Vision
              </h3>
              <p className="text-lg md:text-2xl text-on-surface-variant font-light leading-relaxed">
                To equip businesses with the knowledge, tools, and guidance they
                need to thrive in any market, solving current issues to prevent
                future problems and ensure long-term success.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Expertise Points ──────────────────── */}
      <section className="max-w-screen-2xl mx-auto px-6 md:px-8 lg:px-12 py-20 md:py-40 bg-surface">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
          {[
            {
              text: "Corporate governance & advisory",
              icon: "account_balance",
            },
            {
              text: "Regulatory compliance & immigration",
              icon: "verified_user",
            },
            { text: "Commercial contracts & real estate", icon: "description" },
            { text: "Intellectual property strategy", icon: "lightbulb" },
            { text: "Conflict prevention & mediation", icon: "balance" },
            { text: "Corporate capacity building", icon: "trending_up" },
          ].map((item, i) => (
            <FadeIn key={item.text} delay={i * 80}>
              <div className="group relative p-8 md:p-10 bg-gradient-to-br from-surface-container-low to-surface-container rounded-2xl border border-outline-variant/20 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2">
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-tertiary/0 group-hover:from-primary/5 group-hover:via-tertiary/5 group-hover:to-primary/5 transition-all duration-700" />

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-tertiary/5 rounded-bl-full transition-all duration-500 group-hover:w-32 group-hover:h-32" />

                {/* Animated border glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    boxShadow:
                      "inset 0 0 20px rgba(var(--tertiary-rgb, 180, 140, 80), 0.1)",
                  }}
                />

                {/* Top decorative line */}
                <div className="absolute top-0 left-0 w-0 h-0.5 bg-gradient-to-r from-tertiary to-primary group-hover:w-full transition-all duration-700 ease-out" />

                {/* Icon container */}
                <div className="relative z-10 mb-6 flex items-center justify-between">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <span className="material-symbols-outlined text-2xl md:text-3xl text-primary group-hover:text-tertiary transition-colors duration-500">
                      {item.icon}
                    </span>
                  </div>
                  {/* Number indicator */}
                  <span className="font-label text-[10px] text-outline-variant/40 group-hover:text-tertiary/60 transition-colors duration-500 tracking-[0.3em]">
                    0{i + 1}
                  </span>
                </div>

                {/* Text content */}
                <div className="relative z-10">
                  <span className="text-on-surface text-base md:text-lg font-light leading-relaxed block group-hover:text-primary transition-colors duration-500">
                    {item.text}
                  </span>
                </div>

                {/* Bottom decorative element */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-tertiary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Subtle shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 via-transparent to-transparent" />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────── */}
      <section className="max-w-[calc(100%-3rem)] md:max-w-screen-2xl mx-auto px-6 md:px-12 py-24 md:py-48 text-center bg-primary rounded-2xl md:rounded-3xl mb-24 overflow-hidden shadow-2xl relative">
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
                Book Strategy Session
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

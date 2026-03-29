import FadeIn from "@/app/components/FadeIn";
import Link from "next/link";

export default function Page() {
  return (
    <div className="page-enter">
      {/* ── Hero ─────────────────────────────── */}
      <section className="relative min-h-[100vh] lg:min-h-[92vh] flex items-center overflow-hidden bg-background">
        {/* subtle background texture */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-surface-container-low opacity-20 md:opacity-40 mix-blend-multiply" />
          <div className="absolute bottom-0 left-0 w-[1px] h-1/2 md:h-3/4 bg-tertiary/30" />
        </div>

        <div className="max-w-screen-2xl mx-auto px-6 md:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-center py-20 md:py-24">
          <div className="lg:col-span-7 z-10 relative mt-8 md:mt-0">
            <FadeIn delay={0}>
              <span className="inline-flex items-center gap-4 text-tertiary font-label font-bold tracking-[0.4em] mb-8 md:mb-12 uppercase text-[10px] md:text-xs">
                <span className="w-8 md:w-12 h-px bg-tertiary" />
                Strategic Legal Engineering
              </span>
            </FadeIn>

            <FadeIn delay={120}>
              <h1 className="font-headline text-5xl md:text-8xl xl:text-9xl text-primary leading-[1] tracking-tighter mb-8 md:mb-10 italic">
                Protecting <br />
                Business Success <br />
                <em className="text-tertiary not-italic">Globally.</em>
              </h1>
            </FadeIn>

            <FadeIn delay={240}>
              <p className="text-lg md:text-2xl text-on-surface-variant max-w-2xl leading-relaxed mb-12 md:mb-16 font-light">
                Led by{" "}
                <strong className="text-primary font-medium">
                  Geraldine Mbah, LL.M (USA)
                </strong>
                , TechShield Legal provides efficient, practical, and affordable
                legal solutions for businesses, startups, and property owners.
              </p>
            </FadeIn>

            <FadeIn delay={360}>
              <div className="flex flex-col sm:flex-row gap-6 md:gap-8 items-start">
                <Link
                  href="/contact"
                  className="btn-base bg-primary text-on-primary px-8 md:px-12 py-5 hover:bg-tertiary shadow-xl hover:shadow-tertiary/20 transition-all font-label text-[10px] md:text-xs uppercase tracking-widest font-bold"
                >
                  Schedule Consultation
                </Link>
                <Link
                  href="/practice-areas"
                  className="group flex items-center gap-4 py-3 md:py-5 text-primary hover:text-tertiary transition-colors font-label text-[10px] md:text-xs uppercase tracking-widest font-bold border-b border-primary/20 hover:border-tertiary"
                >
                  Practice Areas
                  <span className="material-symbols-outlined transition-transform group-hover:translate-x-1 text-sm md:text-base">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-5 relative z-10">
            <FadeIn direction="right" delay={200}>
              <div className="relative aspect-[4/5] md:aspect-auto md:h-[600px] xl:h-[760px] w-full overflow-hidden">
                {/* Image Background Container */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-surface-container-high to-surface opacity-10" />
                <div className="absolute top-6 md:top-10 left-6 md:left-10 right-6 md:right-10 bottom-6 md:bottom-10 border border-primary/5 -z-1" />

                <img
                  alt="Geraldine Mbah — Principal Counsel at TechShield Legal Services"
                  className="w-full h-full object-contain relative drop-shadow-[0_45px_100px_rgba(0,10,25,0.15)] filter brightness-105"
                  src="/assets/pic.png"
                />

                {/* Floating badge */}
                <div className="absolute bottom-6 md:bottom-10 left-0 bg-primary-container p-6 md:p-8 shadow-2xl skew-x-[-12deg] -translate-x-4">
                  <div className="skew-x-[12deg]">
                    <span className="block text-on-primary-container font-headline text-2xl md:text-3xl italic">
                      15+ Years
                    </span>
                    <span className="block text-on-primary-container font-label text-[8px] md:text-[10px] uppercase tracking-[0.2em] font-bold mt-1 opacity-70">
                      Global Legal Expertise
                    </span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ───────────────── */}
      <section className="py-40 bg-surface">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-32">
            <FadeIn direction="up">
              <span className="font-label text-xs tracking-[0.5em] text-tertiary mb-10 block uppercase font-bold">
                The Mission
              </span>
              <h2 className="font-headline text-5xl text-primary mb-10 leading-tight">
                Empowering Growth through Precision
              </h2>
              <p className="text-on-surface-variant text-xl font-light leading-relaxed mb-12">
                To provide efficient, practical, and affordable legal solutions
                that address clients’ immediate business challenges while
                ensuring compliance and peace of mind.
              </p>
              <Link
                href="/about"
                className="text-xs font-label uppercase tracking-widest text-primary underline underline-offset-8 decoration-tertiary font-bold hover:text-tertiary transition-colors"
              >
                Learn More About the Firm
              </Link>
            </FadeIn>
            <FadeIn direction="up" delay={200}>
              <span className="font-label text-xs tracking-[0.5em] text-tertiary mb-10 block uppercase font-bold">
                The Vision
              </span>
              <h2 className="font-headline text-5xl text-primary mb-10 leading-tight">
                Architecting Future Compliance
              </h2>
              <p className="text-on-surface-variant text-xl font-light leading-relaxed mb-12">
                To equip businesses with the knowledge, tools, and guidance they
                need to thrive in any market, solving current issues to prevent
                future problems and ensure long-term success.
              </p>
              <Link
                href="/practice-areas"
                className="text-xs font-label uppercase tracking-widest text-primary underline underline-offset-8 decoration-tertiary font-bold hover:text-tertiary transition-colors"
              >
                Explore Practice Specialties
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ──────────────────── */}
      <section className="py-40 bg-primary relative overflow-hidden">
        {/* Subtle geometric overlay */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-white rounded-full scale-[2]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 border border-white rounded-full scale-[1.5]" />
        </div>

        <div className="max-w-screen-2xl mx-auto px-8 relative z-10">
          <FadeIn>
            <div className="mb-24 text-center">
              <span className="w-12 h-px bg-tertiary mx-auto mb-8 block" />
              <h2 className="font-headline text-6xl text-white italic">
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

      {/* ── CTA Final ────────────────── */}
      <section className="py-24 bg-surface max-w-screen-2xl mx-auto px-8 my-20">
        <FadeIn>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16 p-20 bg-surface-container-low rounded-3xl border border-outline-variant/5">
            <div className="text-left lg:max-w-xl">
              <h2 className="font-headline text-5xl text-primary mb-6 leading-[1.2]">
                Expert Legal <br /> Shield for your Growth.
              </h2>
              <p className="text-lg text-on-surface-variant font-light leading-relaxed">
                Connect with us today for discrete, professional advisory that
                solves today's issues and shields tomorrow's success.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 shrink-0 w-full lg:w-auto">
              <Link
                href="/contact"
                className="btn-base bg-primary text-white px-10 py-5 hover:bg-tertiary shadow-xl text-center"
              >
                Book Strategy Session
              </Link>
              <Link
                href={process.env.NEXT_PUBLIC_WHATSAPP_LINK || "#"}
                className="btn-base border border-primary/20 text-primary px-10 py-5 transition-all text-center flex items-center justify-center gap-2 group"
              >
                <img
                  src="data:image/jpeg;base64,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"
                  alt="WhatsApp icon"
                  className="w-5 h-5 group-hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.8)] group-hover:brightness-110 transition-all duration-300"
                />
                Contact via WhatsApp
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}

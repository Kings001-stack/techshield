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
            <div className="flex flex-col sm:flex-row gap-4 md:gap-8 shrink-0 w-full lg:w-auto mt-10 lg:mt-0">
              <Link
                href="/contact"
                className="btn-base bg-primary text-white w-full sm:w-auto px-10 md:px-12 py-5 hover:bg-tertiary shadow-xl text-center font-bold"
              >
                Book Strategy Session
              </Link>
              <Link
                href={process.env.NEXT_PUBLIC_WHATSAPP_LINK || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-base border border-primary/20 text-primary w-full sm:w-auto px-10 md:px-12 py-5 hover:bg-primary-container/10 transition-all flex items-center justify-center gap-3 font-bold"
              >
                <img
                  src="/assets/whatapp-icon.png"
                  alt="WhatsApp icon"
                  className="w-5 h-5 shrink-0 object-contain"
                />
                <span className="shrink-0 tracking-widest uppercase">WhatsApp Chat</span>
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}

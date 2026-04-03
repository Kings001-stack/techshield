import FadeIn from "@/app/components/FadeIn";
import Link from "next/link";
import ReviewCarousel from "@/app/components/ReviewCarousel";
import SpecializationsGrid from "@/app/components/SpecializationsGrid";

export default function Page() {
  return (
    <div className="page-enter pt-24 md:pt-28">
      {/* ── Hero ─────────────────────────────── */}
      <section className="relative min-h-[85vh] lg:min-h-[80vh] flex items-center overflow-hidden bg-background">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-[0.03] scale-105"
          />
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

          <div className="lg:col-span-5 relative z-10 w-full mt-10 md:mt-0">
            <FadeIn direction="right" delay={200}>
              <div className="relative h-[450px] sm:h-[550px] md:h-[600px] xl:h-[760px] w-full overflow-hidden shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-surface-container-high to-surface opacity-10" />
                <div className="absolute top-6 md:top-10 left-6 md:left-10 right-6 md:right-10 bottom-6 md:bottom-10 border border-primary/5 -z-1" />
                <img
                  alt="Geraldine Mbah"
                  className="w-full h-full object-contain relative drop-shadow-[0_45px_100px_rgba(0,10,25,0.15)] filter brightness-105"
                  src="/assets/pic.png"
                />
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

      {/* ── Key Specializations ──────────────────── */}
      <section className="py-32 md:py-40 bg-primary relative overflow-hidden">
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
            <div className="mb-16 md:mb-20 text-center">
              <span className="inline-flex items-center gap-4 text-tertiary font-label font-bold tracking-[0.4em] mb-8 uppercase text-[10px] md:text-xs">
                <span className="w-8 md:w-12 h-px bg-tertiary" />
                Our Expertise
              </span>
              <h2 className="font-headline text-4xl md:text-6xl text-white italic underline underline-offset-[12px] md:underline-offset-[16px] decoration-tertiary/10 leading-tight">
                Key Specializations
              </h2>
            </div>
          </FadeIn>

          <SpecializationsGrid />
        </div>
      </section>

      {/* ── Client Testimonials ─────────────── */}
      <section className="relative py-40 overflow-hidden bg-primary">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
            className="absolute inset-0 w-full h-full object-cover opacity-10 scale-110 grayscale"
            alt=""
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary via-transparent to-primary" />
        </div>
        <div className="relative z-10 max-w-screen-xl mx-auto px-8 text-center">
          <FadeIn>
            <div className="text-center mb-16 px-4">
              <span className="font-label text-xs tracking-[0.5em] text-tertiary mb-6 block uppercase font-bold">
                Endorsements
              </span>
              <h2 className="font-headline text-5xl md:text-6xl text-white italic mb-16">
                Partnering in Success
              </h2>

              {/* Integrated Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 max-w-5xl mx-auto mb-20 border-y border-white/10 py-16">
                {[
                  {
                    label: "Precision Case Closures",
                    value: "500+",
                    sub: "Successful legal outcomes",
                  },
                  {
                    label: "Corporate Entities Managed",
                    value: "150+",
                    sub: "Ongoing strategic advisory",
                  },
                  {
                    label: "Consultations Completed",
                    value: "200+",
                    sub: "Business strategy sessions",
                  },
                ].map((stat, i) => (
                  <div key={stat.label} className="text-center group">
                    <span className="block font-headline text-5xl md:text-6xl text-tertiary italic mb-4">
                      {stat.value}
                    </span>
                    <span className="block font-label text-[10px] uppercase tracking-[0.4em] text-white font-bold mb-2">
                      {stat.label}
                    </span>
                    <span className="block text-white/50 text-[10px] italic font-light">
                      {stat.sub}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
          <ReviewCarousel />
        </div>
      </section>

      {/* ── CTA Final ────────────────── */}
      <section className="py-32 md:py-48 bg-surface relative overflow-hidden">
        <div className="max-w-screen-2xl mx-auto px-8">
          <FadeIn>
            <div className="relative group flex flex-col lg:flex-row items-center justify-between gap-16 p-12 md:p-24 bg-primary rounded-[2.5rem] overflow-hidden border border-white/5 shadow-3xl">
              <div className="absolute inset-0 -z-1 opacity-20 filter grayscale group-hover:scale-105 transition-transform duration-[2000ms]">
                <img
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-transparent -z-1" />
              <div className="text-left lg:max-w-2xl relative z-10">
                <span className="w-12 h-px bg-tertiary mb-10 block" />
                <h2 className="font-headline text-5xl md:text-7xl text-white mb-8 leading-[1.1] italic">
                  Expert Legal <br /> Shield for your Growth.
                </h2>
                <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed max-w-lg">
                  Connect with us today for discrete, professional advisory that
                  solves today's issues and shields tomorrow's success.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 md:gap-8 shrink-0 w-full lg:w-auto mt-10 lg:mt-0 relative z-10">
                <Link
                  href="/contact"
                  className="btn-base bg-white text-primary w-full sm:w-auto px-10 md:px-14 py-5 md:py-6 hover:bg-tertiary hover:text-white shadow-2xl text-center font-bold font-label text-xs uppercase tracking-widest"
                >
                  Book Consultation
                </Link>
                <Link
                  href={process.env.NEXT_PUBLIC_WHATSAPP_LINK || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-base bg-white/5 backdrop-blur-md border border-white/20 text-white w-full sm:w-auto px-10 md:px-14 py-5 md:py-6 hover:bg-white/10 transition-all flex items-center justify-center gap-3 font-bold font-label text-xs uppercase tracking-widest"
                >
                  <img
                    src="/assets/whatapp-icon.png"
                    alt="WhatsApp icon"
                    className="w-5 h-5 shrink-0 object-contain brightness-0 invert"
                  />
                  <span>WhatsApp Chat</span>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

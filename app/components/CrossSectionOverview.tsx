"use client";

import FadeIn from "./FadeIn";

export default function CrossSectionOverview() {
  return (
    <div className="mb-16 md:mb-20">
      <FadeIn>
        <div className="bg-gradient-to-br from-primary/5 to-tertiary/5 rounded-3xl p-8 md:p-12 border border-outline-variant/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left: Images Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="/assets/about/team.jpeg"
                    alt="TechShield Legal Team"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="/assets/about/team2.jpeg"
                    alt="TechShield Legal Team"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right: Overview Content */}
            <div>
              <span className="text-[10px] md:text-xs font-label uppercase tracking-[0.4em] text-tertiary mb-4 block font-bold">
                Client Success Stories
              </span>
              <h3 className="font-headline text-3xl md:text-4xl text-primary italic mb-6 leading-tight">
                Trusted by Businesses Across Nigeria
              </h3>
              <p className="text-on-surface-variant text-base md:text-lg leading-relaxed font-light mb-6">
                From startups to established corporations, our clients trust us
                to deliver practical legal solutions that drive business growth
                and ensure compliance.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-outline-variant/20">
                <div>
                  <div className="text-3xl md:text-4xl font-headline text-primary italic mb-2">
                    15+
                  </div>
                  <div className="text-xs md:text-sm text-on-surface-variant font-light">
                    Years Experience
                  </div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-headline text-primary italic mb-2">
                    200+
                  </div>
                  <div className="text-xs md:text-sm text-on-surface-variant font-light">
                    Clients Served
                  </div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-headline text-primary italic mb-2">
                    98%
                  </div>
                  <div className="text-xs md:text-sm text-on-surface-variant font-light">
                    Success Rate
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}

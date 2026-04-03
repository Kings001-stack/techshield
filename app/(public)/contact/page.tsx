"use client";

import FadeIn from "@/app/components/FadeIn";
import PrivacyPolicyModal from "@/app/components/PrivacyPolicyModal";
import CountryCodePicker from "@/app/components/CountryCodePicker";
import Link from "next/link";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

function ContactForm() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "NG",
    countryCode: "+234",
    service: "",
    message: "",
    date: "",
    time: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  useEffect(() => {
    const serviceParam = searchParams.get("service");
    if (serviceParam) {
      setFormData((prev) => ({ ...prev, service: serviceParam }));
    }
  }, [searchParams]);

  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (formData.phone.replace(/\D/g, "").length < 7) {
      newErrors.phone = "Phone number is too short";
    }
    if (!formData.service) newErrors.service = "Please select a service";

    // Message is only strictly required for non-bookings
    const isBooking =
      formData.service === "Legal Consultation" ||
      (formData.date && formData.time);
    if (!isBooking && !formData.message.trim()) {
      newErrors.message = "Please describe your legal matter";
    }

    if (isBooking) {
      if (!formData.date) newErrors.date = "Please select a date";
      if (!formData.time) newErrors.time = "Please select a time";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    // Clear error for this field
    if (errors[id]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[id];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      toast.error("Please correct the errors before submitting.");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    setLoading(true);

    try {
      // Determine if this is a booking or a general inquiry
      const isBooking = formData.date && formData.time;
      const endpoint = isBooking ? "/api/bookings" : "/api/contact";

      const payload = isBooking
        ? {
            name: formData.name,
            email: formData.email,
            phone: `${formData.countryCode}${formData.phone}`,
            country: formData.country,
            service_type: formData.service,
            preferred_date: formData.date,
            preferred_time: formData.time,
          }
        : {
            name: formData.name,
            email: formData.email,
            phone: `${formData.countryCode}${formData.phone}`,
            country: formData.country,
            service_type: formData.service, // Added service_type mapping
            message: formData.message,
          };

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (res.ok) {
        toast.success(
          isBooking
            ? "Your consultation request has been received. We will confirm shortly."
            : "Your inquiry has been submitted. Our team will reach out within 24 hours.",
        );
        setFormData({
          name: "",
          email: "",
          phone: "",
          country: "NG",
          countryCode: "+234",
          service: "",
          message: "",
          date: "",
          time: "",
        });
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        throw new Error(result.error || "Something went wrong.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      toast.error(
        err instanceof Error
          ? err.message
          : "An unexpected error occurred. Please try again later.",
      );
      window.scrollTo({ top: 0, behavior: "smooth" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-enter pt-24 md:pt-28">
      {/* ── Hero ─────────────────────────────── */}
      <section className="pt-8 pb-16 md:pt-12 md:pb-24 max-w-screen-2xl mx-auto px-6 md:px-8 mb-4">
        <FadeIn>
          <span className="inline-flex items-center gap-3 text-tertiary font-label font-semibold tracking-[0.25em] mb-6 md:mb-8 uppercase text-[10px] md:text-xs">
            <span className="gold-rule" />
            Inquiry Desk
          </span>
        </FadeIn>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <FadeIn delay={100} className="max-w-3xl">
            <h1 className="font-headline text-4xl md:text-7xl text-primary leading-[1.05] tracking-tight mb-4 md:mb-6 leading-tight">
              Establish Authority.
              <br />
              Secure Your Counsel.
            </h1>
            <p className="text-on-surface-variant text-base md:text-xl max-w-xl font-light leading-relaxed">
              We provide discreet, high-level legal advisory for sophisticated
              transactions. Connect with our principal attorneys to begin your
              consultation.
            </p>
          </FadeIn>
          <FadeIn delay={200} className="hidden md:block shrink-0">
            <span className="gold-rule mb-3 block" />
            <span className="font-label text-xs uppercase tracking-[0.2em] text-tertiary font-semibold">
              Response within 24hrs
            </span>
          </FadeIn>
        </div>
      </section>

      {/* ── Main Bento ────────────────────────── */}
      <section className="max-w-screen-2xl mx-auto px-6 md:px-8 pb-24 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-6">
          {/* ── Contact Form ──────────────────── */}
          <FadeIn direction="left" className="lg:col-span-7">
            <div className="bg-surface-container-lowest p-6 md:p-12 rounded-xl shadow-[0_40px_80px_-20px_rgba(0,10,30,0.07)]">
              <h2 className="font-headline text-2xl md:text-3xl text-primary mb-2 italic">
                Direct Inquiry
              </h2>
              <p className="text-on-surface-variant text-xs md:text-sm mb-8 md:mb-10 font-light">
                All inquiries are treated with absolute confidentiality.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Row: Name + Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="sig-label">
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Julian Vane"
                      className={`sig-input ${errors.name ? "border-error ring-1 ring-error/20" : ""}`}
                    />
                    {errors.name && (
                      <p className="text-[10px] text-error font-bold uppercase tracking-widest pl-1">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="sig-label">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@firm.com"
                      className={`sig-input ${errors.email ? "border-error ring-1 ring-error/20" : ""}`}
                    />
                    {errors.email && (
                      <p className="text-[10px] text-error font-bold uppercase tracking-widest pl-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Row: Phone + Service */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="sig-label">
                      Phone & Origin
                    </label>
                    <div className="flex items-stretch gap-0 group">
                      <CountryCodePicker
                        value={formData.country}
                        onChange={(country) => {
                          setFormData((prev) => ({
                            ...prev,
                            country: country.code,
                            countryCode: country.dial_code,
                          }));
                          if (errors.phone) {
                            setErrors((prev) => {
                              const next = { ...prev };
                              delete next.phone;
                              return next;
                            });
                          }
                        }}
                      />
                      <input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="8012345678"
                        className={`sig-input flex-1 !rounded-l-none border-l-0 ${errors.phone ? "border-error ring-1 ring-error/20" : ""}`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-[10px] text-error font-bold uppercase tracking-widest pl-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="service" className="sig-label">
                      Legal Expertise
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={`sig-input cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%2374777f%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:0.7em_0.7em] bg-[right:1.2rem_center] bg-no-repeat ${errors.service ? "border-error ring-1 ring-error/20" : ""}`}
                    >
                      <option value="" disabled>
                        Choose Department…
                      </option>
                      <option value="Business Formation">
                        Corporate Structuring
                      </option>
                      <option value="Contract Review">
                        Contractual Integrity
                      </option>
                      <option value="Transactional Services">
                        Transactional Mergers
                      </option>
                      <option value="Legal Consultation">
                        Strategic Advisory
                      </option>
                      <option value="Other">Custom Counsel Inquiry</option>
                    </select>
                    {errors.service && (
                      <p className="text-[10px] text-error font-bold uppercase tracking-widest pl-1">
                        {errors.service}
                      </p>
                    )}
                  </div>
                </div>

                {/* Booking Fields (Conditional Shadowing) */}
                {(formData.service === "Legal Consultation" ||
                  formData.date) && (
                  <FadeIn
                    delay={0}
                    className="bg-surface-container-low p-6 md:p-8 rounded-xl border border-outline-variant/10 space-y-5 animate-in slide-in-from-top-4 duration-500"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="material-symbols-outlined text-tertiary">
                        calendar_today
                      </span>
                      <h3 className="font-headline text-lg text-primary italic">
                        Mandatory Scheduling
                      </h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-1.5">
                        <label htmlFor="date" className="sig-label">
                          Consultation Date
                        </label>
                        <input
                          id="date"
                          type="date"
                          value={formData.date}
                          onChange={handleChange}
                          className={`sig-input ${errors.date ? "border-error ring-1 ring-error/20" : ""}`}
                        />
                        {errors.date && (
                          <p className="text-[10px] text-error font-bold uppercase tracking-widest pl-1">
                            {errors.date}
                          </p>
                        )}
                      </div>
                      <div className="space-y-1.5">
                        <label htmlFor="time" className="sig-label">
                          Time Slot
                        </label>
                        <select
                          id="time"
                          value={formData.time}
                          onChange={handleChange}
                          className={`sig-input cursor-pointer ${errors.time ? "border-error ring-1 ring-error/20" : ""}`}
                        >
                          <option value="">Select slot...</option>
                          <option value="09:00 AM">09:00 AM</option>
                          <option value="11:00 AM">11:00 AM</option>
                          <option value="02:00 PM">02:00 PM</option>
                          <option value="04:00 PM">04:00 PM</option>
                        </select>
                        {errors.time && (
                          <p className="text-[10px] text-error font-bold uppercase tracking-widest pl-1">
                            {errors.time}
                          </p>
                        )}
                      </div>
                    </div>
                  </FadeIn>
                )}

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="sig-label">
                    Brief Matter Summary
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={formData.date ? 4 : 5}
                    placeholder="Briefly describe the legal matter or transaction you need assistance with…"
                    className={`sig-input resize-none h-40 ${errors.message ? "border-error ring-1 ring-error/20" : ""}`}
                  />
                  {errors.message && (
                    <p className="text-[10px] text-error font-bold uppercase tracking-widest pl-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Privacy note */}
                <p className="text-xs text-on-surface-variant font-light leading-relaxed">
                  By submitting this form you agree to our{" "}
                  <button
                    type="button"
                    onClick={() => setIsPrivacyModalOpen(true)}
                    className="underline underline-offset-2 hover:text-tertiary transition-colors cursor-pointer"
                  >
                    Privacy Policy
                  </button>
                  . Your information will never be shared with third parties.
                </p>

                {/* Submit */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-base gold-shimmer w-full md:w-auto bg-primary-container text-white px-12 py-4 hover:bg-primary hover:shadow-lg hover:shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading
                      ? "Processing..."
                      : formData.date && formData.time
                        ? "Schedule Consultation"
                        : "Submit Inquiry"}
                    {!loading && (
                      <span className="material-symbols-outlined text-[1.1rem]">
                        arrow_forward
                      </span>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </FadeIn>

          {/* ── Sidebar ───────────────────────── */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {/* Dark quick-contact card */}
            <FadeIn direction="right" delay={100}>
              <div className="rounded-xl bg-primary p-10 text-white flex flex-col justify-between min-h-[280px] relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                  <span className="material-symbols-outlined text-[8rem]">
                    gavel
                  </span>
                </div>
                <div className="relative z-10">
                  <h3 className="font-headline text-2xl mb-3 italic">
                    Prefer Instant Contact?
                  </h3>
                  <p className="text-on-primary-container text-sm font-light leading-relaxed mb-8 max-w-xs">
                    Our team is available via encrypted messaging for urgent
                    preliminary matters.
                  </p>
                </div>
                <div className="relative z-10 flex flex-col gap-3">
                  {[
                    {
                      icon: "/assets/whatapp-icon.png",
                      iconType: "image",
                      label: "WhatsApp",
                      value: "Direct Consultation",
                      bg: "",
                      href: process.env.NEXT_PUBLIC_WHATSAPP_LINK || "#",
                      isLink: true,
                    },
                    {
                      icon: "mail",
                      iconType: "material",
                      label: "Primary Desk",
                      value: "enquiries@techshieldlegal.com",
                      bg: "bg-surface-container-highest",
                      href: "mailto:enquiries@techshieldlegal.com",
                      isLink: true,
                    },
                  ].map((item) => {
                    const Content = (
                      <>
                        <div
                          className={`w-10 h-10 rounded-full ${item.bg} flex items-center justify-center shrink-0 overflow-hidden`}
                        >
                          {item.iconType === "svg" ||
                          item.iconType === "image" ? (
                            <img
                              src={item.icon}
                              alt={`${item.label} icon`}
                              className="w-full h-full object-contain p-1.5"
                            />
                          ) : (
                            <span className="material-symbols-outlined text-primary text-xl">
                              {item.icon}
                            </span>
                          )}
                        </div>
                        <div className="min-w-0">
                          <span className="block text-xs uppercase tracking-widest text-on-primary-container font-label mb-0.5">
                            {item.label}
                          </span>
                          <span className="text-sm font-medium truncate block">
                            {item.value}
                          </span>
                        </div>
                      </>
                    );

                    return item.isLink ? (
                      <Link
                        key={item.label}
                        href={item.href!}
                        target={
                          item.label === "WhatsApp" ? "_blank" : undefined
                        }
                        rel={
                          item.label === "WhatsApp"
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="flex items-center gap-4 rounded-lg bg-white/10 backdrop-blur-sm p-4 hover:bg-white/20 transition-all border border-white/5 group"
                      >
                        {Content}
                      </Link>
                    ) : (
                      <div
                        key={item.label}
                        className="flex items-center gap-4 rounded-lg bg-white/10 backdrop-blur-sm p-4 border border-white/5"
                      >
                        {Content}
                      </div>
                    );
                  })}
                </div>
              </div>
            </FadeIn>

            {/* Office Card */}
            <FadeIn direction="right" delay={200}>
              <div className="card-lift rounded-xl bg-surface-container-low overflow-hidden flex flex-col h-full border border-outline-variant/10">
                {/* Premium Interactive Mini Map */}
                <div className="h-56 relative group">
                  <iframe
                    title="TechShield Legal Abuja Office"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.818043685806!2d7.4725!3d9.07!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0af9a4f9a4f9%3A0x1234567890abcdef!2sDBM%20Plaza!5e0!3m2!1sen!2sng!4v1711690000000!5m2!1sen!2sng&q=DBM+Plaza+Aminu+Kano+Crescent+Wuse+II+Abuja"
                    width="100%"
                    height="100%"
                    style={{
                      border: 0,
                      filter: "grayscale(1) contrast(1.1) brightness(0.9)",
                    }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 transition-all duration-700 group-hover:grayscale-0 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 pointer-events-none border border-white/5 m-3 rounded-lg" />
                  <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-md px-3 py-1.5 rounded text-[10px] font-label font-bold uppercase tracking-[0.2em] text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse" />
                    Live Location
                  </div>
                </div>

                <div className="p-8 md:p-10 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="font-headline text-2xl text-primary mb-5 italic">
                      Chambers
                    </h3>
                    <div className="space-y-2 text-on-surface-variant font-light text-sm leading-relaxed">
                      <p>
                        DBM Plaza, Suite 212B, <br />
                        Aminu Kano Crescent, <br />
                        Wuse II, Abuja.
                      </p>
                    </div>
                  </div>
                  <div className="mt-8 pt-6 border-t border-outline-variant/30 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-primary font-label font-bold text-[10px] uppercase tracking-widest">
                      <span className="material-symbols-outlined text-base">
                        location_on
                      </span>
                    </div>
                    <span className="w-12 h-px bg-tertiary/30" />
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Privacy Policy Modal */}
      <PrivacyPolicyModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
      />
    </div>
  );
}

export default function Page() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-surface flex items-center justify-center font-headline italic text-primary">
          Loading Inquiry Desk...
        </div>
      }
    >
      <ContactForm />
    </Suspense>
  );
}

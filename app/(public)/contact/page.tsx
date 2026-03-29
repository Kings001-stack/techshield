"use client";

import FadeIn from "@/app/components/FadeIn";
import PrivacyPolicyModal from "@/app/components/PrivacyPolicyModal";
import CountryCodePicker from "@/app/components/CountryCodePicker";
import Link from "next/link";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

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

  const [status, setStatus] = useState({ type: "", message: "" });
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
    const isBooking = formData.service === "Legal Consultation" || (formData.date && formData.time);
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

  const handleChange = (e) => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      setStatus({ type: "error", message: "Please correct the errors before submitting." });
      return;
    }

    setLoading(true);
    setStatus({ type: "", message: "" });

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
            message: formData.message,
          };

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (res.ok) {
        setStatus({
          type: "success",
          message: isBooking
            ? "Your consultation request has been received. We will confirm shortly."
            : "Your inquiry has been submitted. Our team will reach out within 24 hours.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
          date: "",
          time: "",
        });
      } else {
        throw new Error(result.error || "Something went wrong.");
      }
    } catch (err) {
      setStatus({ type: "error", message: err.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-enter">
      {/* ── Hero ─────────────────────────────── */}
      <section className="py-16 md:py-24 max-w-screen-2xl mx-auto px-6 md:px-8 mb-4">
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
                {/* Status Messages */}
                {status.message && (
                  <div
                    className={`p-4 rounded-md text-sm font-medium ${
                      status.type === "success"
                        ? "bg-green-50 text-green-800 border border-green-200"
                        : "bg-red-50 text-red-800 border border-red-200"
                    }`}
                  >
                    {status.message}
                  </div>
                )}

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
                    {errors.name && <p className="text-[10px] text-error font-bold uppercase tracking-widest pl-1">{errors.name}</p>}
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
                    {errors.email && <p className="text-[10px] text-error font-bold uppercase tracking-widest pl-1">{errors.email}</p>}
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
                    {errors.phone && <p className="text-[10px] text-error font-bold uppercase tracking-widest pl-1">{errors.phone}</p>}
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
                      <option value="" disabled>Choose Department…</option>
                      <option value="Business Formation">Corporate Structuring</option>
                      <option value="Contract Review">Contractual Integrity</option>
                      <option value="Transactional Services">Transactional Mergers</option>
                      <option value="Legal Consultation">Strategic Advisory</option>
                      <option value="Other">Custom Counsel Inquiry</option>
                    </select>
                    {errors.service && <p className="text-[10px] text-error font-bold uppercase tracking-widest pl-1">{errors.service}</p>}
                  </div>
                </div>

                {/* Booking Fields (Conditional Shadowing) */}
                {(formData.service === "Legal Consultation" || formData.date) && (
                  <FadeIn
                    delay={0}
                    className="bg-surface-container-low p-6 md:p-8 rounded-xl border border-outline-variant/10 space-y-5 animate-in slide-in-from-top-4 duration-500"
                  >
                    <div className="flex items-center gap-3 mb-2">
                        <span className="material-symbols-outlined text-tertiary">calendar_today</span>
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
                        {errors.date && <p className="text-[10px] text-error font-bold uppercase tracking-widest pl-1">{errors.date}</p>}
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
                        {errors.time && <p className="text-[10px] text-error font-bold uppercase tracking-widest pl-1">{errors.time}</p>}
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
                  {errors.message && <p className="text-[10px] text-error font-bold uppercase tracking-widest pl-1">{errors.message}</p>}
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
                      icon: "data:image/jpeg;base64,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",
                      iconType: "svg",
                      label: "WhatsApp",
                      value: "Direct Consultation",
                      bg: "bg-tertiary",
                      href: process.env.NEXT_PUBLIC_WHATSAPP_LINK || "#",
                    },
                    {
                      icon: "mail",
                      iconType: "material",
                      label: "Primary Desk",
                      value: "enquiries@techshieldlegal.com",
                      bg: "bg-surface-container-highest",
                      href: "mailto:enquiries@techshieldlegal.com",
                    },
                  ].map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      target={item.label === "WhatsApp" ? "_blank" : undefined}
                      className="flex items-center gap-4 rounded-lg bg-white/10 backdrop-blur-sm p-4 hover:bg-white/20 transition-all border border-white/5 group"
                    >
                      <div
                        className={`w-10 h-10 rounded-full ${item.bg} flex items-center justify-center shrink-0`}
                      >
                        {item.iconType === "svg" ? (
                          <img
                            src={item.icon}
                            alt={`${item.label} icon`}
                            className="w-5 h-5 brightness-110 transition-all duration-300"
                            style={{
                              filter:
                                "drop-shadow(0 0 8px rgba(34,197,94,0.8)) hue-rotate(90deg) saturate(1.5)",
                            }}
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
                    </Link>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Office Card */}
            <FadeIn direction="right" delay={200}>
              <div className="card-lift rounded-xl bg-surface-container-low overflow-hidden flex flex-col h-full border border-outline-variant/10">
                {/* Visual Header for Chambers */}
                <div className="h-48 relative">
                  <img 
                    src="/assets/practice-areas/real-estate.png" 
                    alt="Law Chambers"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-5xl opacity-40">
                      gavel
                    </span>
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
                      <p className="italic text-[10px] md:text-xs pt-2 text-tertiary font-medium tracking-wide">
                        Strategizing Business Success — By Appointment Only
                      </p>
                    </div>
                  </div>
                  <div className="mt-8 pt-6 border-t border-outline-variant/30 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-primary font-label font-bold text-[10px] uppercase tracking-widest">
                      <span className="material-symbols-outlined text-base">
                        location_on
                      </span>
                      <span>Visit Us</span>
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

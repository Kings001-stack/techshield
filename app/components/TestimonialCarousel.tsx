"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  name: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Adebayo Ogunlesi",
    text: "TechShield Legal Services provided exceptional guidance during our company's expansion. Their expertise in corporate law and regulatory compliance was invaluable.",
  },
  {
    name: "Chioma Nwosu",
    text: "The team's professionalism and deep understanding of real estate law helped us navigate complex property transactions with confidence and ease.",
  },
  {
    name: "Ibrahim Musa",
    text: "Outstanding legal counsel that truly understands the startup ecosystem. TechShield helped us protect our intellectual property and structure our business for growth.",
  },
];

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const current = testimonials[index];
  const firstLetter = current.name.charAt(0).toUpperCase();

  return (
    <div className="relative max-w-5xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="bg-surface rounded-3xl p-8 md:p-12 lg:p-16 shadow-xl border border-outline-variant/10">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              {/* Circular Initial */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-primary to-tertiary border-4 border-tertiary/20 shadow-lg flex items-center justify-center">
                  <span className="text-5xl md:text-6xl font-headline text-white italic font-bold">
                    {firstLetter}
                  </span>
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="flex-1 text-center md:text-left">
                <div className="mb-6">
                  <span className="material-symbols-outlined text-4xl text-tertiary/30">
                    format_quote
                  </span>
                </div>
                <p className="text-lg md:text-2xl text-on-surface leading-relaxed font-light italic mb-8">
                  "{current.text}"
                </p>
                <div>
                  <h4 className="font-headline text-xl md:text-2xl text-primary italic">
                    {current.name}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Pagination Indicators */}
      <div className="flex justify-center gap-3 mt-8">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1 transition-all duration-500 rounded-full ${
              i === index ? "w-10 bg-tertiary" : "w-3 bg-tertiary/20"
            }`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

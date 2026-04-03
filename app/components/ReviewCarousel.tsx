"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Review {
  id: string;
  client_name: string;
  rating: number;
  review_text: string;
  created_at: string;
  content?: string;
  name?: string;
  role?: string;
}

export default function ReviewCarousel() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch("/api/reviews");
        const data = await res.json();
        if (Array.isArray(data)) setReviews(data);
      } catch (err) {
        console.error("Failed to load reviews:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, []);

  useEffect(() => {
    if (reviews.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [reviews]);

  if (loading) return null;
  if (!reviews || reviews.length === 0) return null;

  const current = reviews[index];

  return (
    <div className="relative max-w-4xl mx-auto py-16 px-6 md:px-12 text-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, scale: 0.98, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 1.02, y: -10 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="space-y-8 md:space-y-12"
        >
          <div className="flex justify-center mb-10">
            <span className="material-symbols-outlined text-tertiary/50 text-5xl md:text-7xl font-light">
              format_quote
            </span>
          </div>

          <p className="text-xl md:text-4xl text-primary font-headline italic leading-[1.3] md:leading-[1.4] max-w-3xl mx-auto font-medium">
            &ldquo;{current.content}&rdquo;
          </p>

          <div className="pt-8">
            <h4 className="font-headline text-2xl md:text-3xl text-primary italic mb-2">
              {current.name}
            </h4>
            <p className="text-[10px] md:text-xs font-label uppercase tracking-[0.3em] text-tertiary font-bold opacity-80 decoration-tertiary/20 underline underline-offset-8">
              {current.role || "Client"}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Pagination Indicators */}
      {reviews.length > 1 && (
        <div className="flex justify-center gap-3 mt-16">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1 transition-all duration-500 rounded-full ${
                i === index ? "w-10 bg-tertiary" : "w-3 bg-tertiary/20"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

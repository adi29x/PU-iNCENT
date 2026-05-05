"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

export default function TestimonialSlider({ testimonials }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <div className="relative">
      <div className="grid lg:grid-cols-3 gap-6 items-start">
        {/* Left — large active testimonial */}
        <div className="lg:col-span-2">
          <div className="relative bg-neutral-900 rounded-3xl overflow-hidden min-h-[280px] flex flex-col justify-between p-8 sm:p-10">
            {/* Decorative orb */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full -translate-y-1/3 translate-x-1/3 blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-orange-500/10 rounded-full translate-y-1/3 -translate-x-1/3 blur-xl pointer-events-none" />

            <div className="relative z-10">
              {/* Quote icon */}
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center mb-5">
                <Quote className="w-5 h-5 text-primary" fill="#FF6B00" fillOpacity={0.2} />
              </div>
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-3.5 h-3.5 text-amber-400" fill="#FBBF24" />
                ))}
              </div>

              <div className="relative min-h-[100px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.35 }}
                  >
                    <blockquote className="text-lg sm:text-xl text-white/90 leading-relaxed mb-6 font-medium font-[var(--font-inter)]">
                      &ldquo;{testimonials[current].quote}&rdquo;
                    </blockquote>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Author + controls row */}
            <div className="relative z-10 flex items-center justify-between mt-2">
              <AnimatePresence mode="wait">
                <motion.div key={`author-${current}`} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
                  className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary to-orange-400 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-base font-[var(--font-heading)]">
                      {testimonials[current].name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-white text-sm font-[var(--font-heading)]">{testimonials[current].name}</p>
                    <p className="text-xs text-white/50">{testimonials[current].role}</p>
                    {testimonials[current].cohort && (
                      <p className="text-[10px] text-primary font-semibold mt-0.5">{testimonials[current].cohort}</p>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="flex gap-2">
                <button onClick={prev}
                  className="w-9 h-9 rounded-xl border border-white/10 flex items-center justify-center text-white/50 hover:border-primary hover:text-primary hover:bg-primary/10 transition-all duration-300"
                  aria-label="Previous testimonial">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button onClick={next}
                  className="w-9 h-9 rounded-xl border border-white/10 flex items-center justify-center text-white/50 hover:border-primary hover:text-primary hover:bg-primary/10 transition-all duration-300"
                  aria-label="Next testimonial">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right — stacked mini-cards */}
        <div className="flex flex-col gap-3">
          {testimonials.map((t, i) => (
            <button key={i} onClick={() => setCurrent(i)}
              className={`w-full text-left rounded-2xl p-4 border transition-all duration-300 ${
                i === current
                  ? "bg-primary border-primary/30 shadow-orange"
                  : "bg-white border-neutral-100 shadow-soft hover:border-primary/20 hover:shadow-soft-lg"
              }`}>
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm font-[var(--font-heading)] ${
                  i === current ? "bg-white/20 text-white" : "bg-primary-50 text-primary"
                }`}>
                  {t.name.charAt(0)}
                </div>
                <div className="min-w-0">
                  <p className={`text-sm font-bold truncate font-[var(--font-heading)] ${i === current ? "text-white" : "text-neutral-900"}`}>
                    {t.name}
                  </p>
                  <p className={`text-[11px] truncate ${i === current ? "text-white/70" : "text-neutral-400"}`}>
                    {t.role}
                  </p>
                </div>
              </div>
            </button>
          ))}

          {/* Dot indicators */}
          <div className="flex gap-1.5 pt-1 px-1">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)}
                className={`h-1 rounded-full transition-all duration-300 ${
                  i === current ? "w-6 bg-primary" : "w-1.5 bg-neutral-200 hover:bg-neutral-300"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

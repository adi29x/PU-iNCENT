"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

function AnimatedCounter({ value, suffix = "", prefix = "", duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = value;
    const isFloat = !Number.isInteger(end);
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(isFloat ? parseFloat(start.toFixed(1)) : Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [value, duration, inView]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
}

export default function StatsSection({ stats, light = false }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          className={`text-center p-6 rounded-2xl ${
            light
              ? "bg-white/10 backdrop-blur-sm"
              : "bg-white shadow-soft border border-neutral-100"
          }`}
        >
          <div
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold font-[var(--font-heading)] mb-2 ${
              light ? "text-white" : "text-primary"
            }`}
          >
            <AnimatedCounter
              value={stat.value}
              suffix={stat.suffix}
              prefix={stat.prefix || ""}
            />
          </div>
          <p
            className={`text-sm font-medium ${
              light ? "text-white/70" : "text-neutral-500"
            }`}
          >
            {stat.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}

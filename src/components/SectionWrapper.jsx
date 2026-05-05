"use client";

import { motion } from "framer-motion";

export default function SectionWrapper({
  children,
  className = "",
  id,
  background = "white",
  stagger = false,
}) {
  const bgClasses = {
    white: "bg-white math-grid",
    light: "bg-neutral-50 math-grid",
    warm: "gradient-warm",
    primary: "gradient-primary text-white",
    dark: "bg-neutral-900 text-white",
  };

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: stagger ? 0.1 : 0,
      },
    },
  };

  return (
    <section
      id={id}
      className={`py-12 sm:py-16 lg:py-20 ${bgClasses[background] || ""} ${className}`}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={variants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {children}
      </motion.div>
    </section>
  );
}

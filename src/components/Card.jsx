"use client";

import { motion } from "framer-motion";

export default function Card({ children, className = "", hover = true, onClick }) {
  return (
    <motion.div
      whileHover={hover ? { y: -4 } : {}}
      onClick={onClick}
      className={`bg-white rounded-2xl p-6 shadow-soft border border-neutral-100 hover:shadow-soft-lg transition-all duration-300 ${onClick ? "cursor-pointer" : ""} ${className}`}
    >
      {children}
    </motion.div>
  );
}

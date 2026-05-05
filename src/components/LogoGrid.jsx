"use client";

import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

export default function LogoGrid({ partners }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {partners.map((partner, i) => (
        <motion.div
          key={partner.name}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05, duration: 0.4 }}
          whileHover={{ y: -4, scale: 1.05 }}
          className="bg-white rounded-2xl p-6 shadow-soft border border-neutral-100 flex flex-col items-center justify-center gap-3 hover:shadow-soft-lg hover:border-primary-100 transition-all duration-300 aspect-square"
        >
          <Building2 className="w-8 h-8 text-primary/60" />
          <span className="text-xs font-medium text-neutral-600 text-center leading-tight">{partner.name}</span>
        </motion.div>
      ))}
    </div>
  );
}

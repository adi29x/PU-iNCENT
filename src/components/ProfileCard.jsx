"use client";

import { motion } from "framer-motion";
import { User, ExternalLink } from "lucide-react";

export default function ProfileCard({ person, variant = "team" }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-white rounded-2xl p-6 shadow-soft border border-neutral-100 hover:shadow-soft-lg transition-all duration-300 text-center group"
    >
      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
        <User className="w-8 h-8 text-primary" />
      </div>
      <h3 className="font-semibold text-neutral-900 mb-1">{person.name}</h3>
      <p className="text-sm text-primary font-medium mb-1">{person.role}</p>
      {variant === "team" && person.bio && (
        <p className="text-xs text-neutral-500 leading-relaxed mt-2 line-clamp-3">{person.bio}</p>
      )}
      {variant === "mentor" && person.expertise && (
        <p className="text-xs text-neutral-400 mt-1">{person.expertise}</p>
      )}
      {variant === "student" && person.batch && (
        <p className="text-xs text-neutral-400 mt-1">{person.batch}</p>
      )}
      {person.linkedin && (
        <a href={person.linkedin} className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-neutral-100 text-neutral-400 hover:bg-primary hover:text-white transition-all duration-300 mt-4" target="_blank" rel="noopener noreferrer" aria-label={`${person.name} LinkedIn`}>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      )}
    </motion.div>
  );
}

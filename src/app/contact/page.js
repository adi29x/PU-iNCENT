"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ExternalLink, Clock, ArrowRight, MessageSquare, Globe, User } from "lucide-react";
import CTAButton from "@/components/CTAButton";
import HeroParticles from "@/components/HeroParticles";

const emails = [
  { address: "incent@poornima.edu.in", href: "mailto:incent@poornima.edu.in" },
  { address: "ecell.incent@poornima.edu.in", href: "mailto:ecell.incent@poornima.edu.in" },
];

const phones = [
  { number: "+91 98260 54814", name: "Dr. Pratish Rawat", role: "Incubation Head, PU-iNCENT", href: "tel:+919826054814" },
  { number: "+91 75996 66728", name: "Aditya Kapoor", role: "Chief Student Advisor, PU-iNCENT", href: "tel:+917599666728" },
  { number: "+91 63776 48387", name: "Himanshu Sharma", role: "Chair, PU-iNCENT", href: "tel:+916377648387" },
];

const socials = [
  { name: "LinkedIn", handle: "PU-iNCENT", href: "https://www.linkedin.com/company/puincent/" },
  { name: "Instagram", handle: "@puincent", href: "https://www.instagram.com/pu_incent/" },
  { name: "YouTube", handle: "PU-iNCENT", href: "https://youtube.com/@puincent?si=oB8wGrt48zsXKDWk" },
];

const quickLinks = [
  { label: "Apply for LaunchPad", href: "/apply", desc: "Submit your startup idea" },
  { label: "Explore Programs", href: "/programs", desc: "Browse all incubation programs and startup opportunities" },
  { label: "Meet the Team", href: "/about", desc: "Learn more about the PU-iNCENT leadership and community" },
  { label: "Partner With Us", href: "/partners", desc: "Explore collaboration opportunities with our startup ecosystem" },
];

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative py-16 lg:py-24 overflow-hidden" style={{ background: "linear-gradient(135deg, #fff5eb 0%, #fff9f5 40%, #ffffff 100%)" }}>
        <HeroParticles />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-20 pointer-events-none" style={{ background: "radial-gradient(circle, #FF6B00 0%, transparent 70%)", transform: "translate(30%, -30%)" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-2xl">
            <span className="inline-block bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">Contact</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-[var(--font-heading)] text-neutral-900 leading-tight mb-5">
              Get in Touch<br />
              <span className="text-primary">with PU-iNCENT</span>
            </h1>
            <p className="text-lg text-neutral-500 leading-relaxed max-w-xl">
              Whether you have a startup idea, want to collaborate with a leading university incubation center, or simply want to learn more about entrepreneurship opportunities at Poornima University — our team is here to assist you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* BENTO CONTACT GRID */}
      <section className="py-16 lg:py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Row 1 — Email (large dark) + Hours (orange) */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-4">

            {/* Email — dark large tile */}
            <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              className="col-span-2">
              <div className="relative overflow-hidden h-full min-h-[200px] rounded-3xl bg-neutral-900 p-8 flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full -translate-y-1/3 translate-x-1/3 blur-2xl pointer-events-none" />
                <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center mb-5">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-3">Email Us</p>
                  <div className="flex flex-col sm:flex-row gap-3 mb-3">
                    {emails.map((e) => (
                      <a key={e.address} href={e.href}
                        className="inline-block text-white font-bold font-[var(--font-heading)] text-sm hover:text-primary transition-colors duration-200 bg-white/5 hover:bg-white/10 rounded-xl px-4 py-2.5 border border-white/10">
                        {e.address}
                      </a>
                    ))}
                  </div>
                  <p className="text-xs text-white/40">We typically respond within 24 hours</p>
                </div>
              </div>
            </motion.div>

            {/* Hours — orange tile */}
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="col-span-2 lg:col-span-1">
              <div className="flex flex-col justify-between h-full min-h-[200px] rounded-3xl bg-gradient-to-br from-primary to-orange-400 p-7">
                <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-white/60 uppercase tracking-widest mb-2">Office Hours</p>
                  <p className="text-2xl font-black text-white font-[var(--font-heading)] mb-1">Mon – Sat</p>
                  <p className="text-sm text-white/70">9:00 AM – 5:00 PM IST</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Row 2 — Phone (left) + Address & Socials stacked (right) */}
          <div className="grid lg:grid-cols-3 gap-4 mb-4">

            {/* Phone — left col */}
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
              className="col-span-2 lg:col-span-1">
              <div className="h-full min-h-[260px] rounded-3xl bg-white border border-neutral-100 shadow-soft p-6 flex flex-col">
                <div className="w-11 h-11 rounded-xl bg-amber-100 flex items-center justify-center mb-5">
                  <Phone className="w-5 h-5 text-amber-600" />
                </div>
                <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-4">Call Us</p>
                <div className="space-y-4 flex-1">
                  {phones.map((p, i) => (
                    <motion.a key={i} href={p.href}
                      initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.08 }}
                      className="flex items-start gap-3 group">
                      <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary transition-colors duration-200">
                        <User className="w-3.5 h-3.5 text-amber-600 group-hover:text-white transition-colors duration-200" />
                      </div>
                      <div>
                        <p className="text-sm font-black text-neutral-900 font-[var(--font-heading)] group-hover:text-primary transition-colors duration-200">{p.number}</p>
                        <p className="text-[11px] font-semibold text-neutral-700 leading-tight">{p.name}</p>
                        <p className="text-[10px] text-neutral-400 leading-tight">{p.role}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
                <p className="text-[10px] text-neutral-300 mt-4 pt-4 border-t border-neutral-100">Mon – Sat, 9 AM – 5 PM</p>
              </div>
            </motion.div>

            {/* Right col — Address + Social stacked */}
            <div className="col-span-2 lg:col-span-2 flex flex-col gap-4">
              {/* Address */}
              <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                className="flex-1">
                <a href="https://maps.google.com/?q=Poornima+University+Jaipur" target="_blank" rel="noopener noreferrer"
                  className="flex flex-col justify-between h-full rounded-3xl bg-white border border-neutral-100 shadow-soft p-6 hover:shadow-soft-lg hover:-translate-y-0.5 hover:border-primary/20 transition-all duration-300 group block">
                  <div className="w-11 h-11 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-2">Visit Us</p>
                    <p className="text-sm font-black text-neutral-900 font-[var(--font-heading)] mb-0.5">Room No. 147, Academic Block</p>
                    <p className="text-xs font-semibold text-neutral-600 mb-1">Poornima University Campus</p>
                    <p className="text-xs text-neutral-400 leading-relaxed">IS-2027-31, Ramchandrapura,<br />Sitapura RIICO Extension, Jaipur — 302022</p>
                  </div>
                  <div className="flex items-center gap-1.5 mt-3 text-[11px] text-primary font-semibold group-hover:gap-2.5 transition-all duration-300">
                    <Globe className="w-3.5 h-3.5" /> Open in Maps
                  </div>
                </a>
              </motion.div>

              {/* Social Media */}
              <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.25 }}
                className="flex-1">
                <div className="h-full rounded-3xl bg-white border border-neutral-100 shadow-soft p-6 flex flex-col">
                  <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-4">Follow Us</p>
                  <div className="grid grid-cols-3 gap-3 flex-1">
                    {socials.map((s, i) => (
                      <motion.a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer"
                        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.06 }}
                        className="flex flex-col justify-between p-4 rounded-2xl bg-neutral-50 border border-neutral-100 hover:border-primary/20 hover:bg-primary/5 transition-all duration-300 group">
                        <ExternalLink className="w-3.5 h-3.5 text-neutral-300 group-hover:text-primary transition-colors mb-3" />
                        <div>
                          <p className="text-sm font-bold text-neutral-900 font-[var(--font-heading)]">{s.name}</p>
                          <p className="text-[11px] text-neutral-400 mt-0.5">{s.handle}</p>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK LINKS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="inline-block bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-3">Quick Access</span>
            <h2 className="text-2xl font-black text-neutral-900 font-[var(--font-heading)]">Where would you like to go?</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickLinks.map((link, i) => (
              <motion.a key={link.label} href={link.href}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="group flex flex-col justify-between rounded-2xl bg-white border border-neutral-100 shadow-soft p-5 hover:shadow-soft-lg hover:-translate-y-0.5 hover:border-primary/20 transition-all duration-300 min-h-[110px]">
                <div>
                  <p className="font-bold text-neutral-900 text-sm font-[var(--font-heading)] mb-1">{link.label}</p>
                  <p className="text-xs text-neutral-400">{link.desc}</p>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-primary font-semibold mt-3 group-hover:gap-2 transition-all duration-300">
                  Go <ArrowRight className="w-3 h-3" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-neutral-900 p-10 lg:p-14 flex flex-col lg:flex-row items-start lg:items-center gap-8">
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/4 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-orange-500/5 rounded-full translate-y-1/2 -translate-x-1/4 blur-2xl pointer-events-none" />
            <div className="flex-1 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center mb-5">
                <MessageSquare className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white font-[var(--font-heading)] mb-3">
                Ready to Start Your Journey?
              </h2>
              <p className="text-neutral-400 text-base leading-relaxed max-w-lg">
                Apply to PU-iNCENT&apos;s LaunchPad program and join a growing startup incubation ecosystem of student founders, mentors, and investors at Poornima University.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 relative z-10">
              <CTAButton href="/apply" size="lg">Apply Now</CTAButton>
              <CTAButton href="/programs" variant="outline-white" size="lg">Explore Programs</CTAButton>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

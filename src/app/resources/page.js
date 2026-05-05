"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  FileText,
  PenTool,
  Clock,
  ArrowUpRight,
  Search,
  Download,
  Star,
  ChevronRight,
  TrendingUp,
  Filter,
  Share2,
  Bookmark
} from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";
import HeroParticles from "@/components/HeroParticles";
import { resources } from "@/data/resources";

const iconMap = {
  Blog: PenTool,
  Guide: BookOpen,
  Template: FileText
};

const categories = ["All", "Guide", "Template", "Blog"];

export default function ResourcesPage() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = resources.filter((r) => {
    const matchesFilter = filter === "All" || r.category === filter;
    const matchesSearch = r.title.toLowerCase().includes(search.toLowerCase()) ||
      r.description.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const featuredResource = resources.length > 0 ? resources[0] : null;

  const magneticProps = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
    transition: { type: "spring", stiffness: 400, damping: 17 }
  };

  return (
    <>
      {/* HERO */}
      <section className="relative py-16 lg:py-24 overflow-hidden" style={{ background: "linear-gradient(135deg, #fff5eb 0%, #fff9f5 40%, #ffffff 100%)" }}>
        <HeroParticles />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-20 animate-float-slow" style={{ background: "radial-gradient(circle, #FF6B00 0%, transparent 70%)", transform: "translate(30%, -30%)" }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center lg:text-left">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-white text-primary text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6 shadow-soft border border-primary/10">
              <BookOpen className="w-3.5 h-3.5" /> Resource Hub
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black font-[var(--font-heading)] text-neutral-900 leading-tight mb-6">
              Knowledge to Build <br />
              <span className="text-primary relative inline-block">
                Great Startups
              </span>
            </h1>
            <p className="text-xl text-neutral-500 leading-relaxed mb-8 max-w-xl">
              Access curated startup guides, industry-standard templates, and expert insights from PU-iNCENT, Poornima University&apos;s startup incubation center, designed to accelerate your entrepreneurial journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* RESOURCES CONTENT */}
      <SectionWrapper background="light">
        {/* FEATURED BENTO */}
        {resources.length > 0 && featuredResource && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-12">
            {/* Featured Resource - Large */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              className="lg:col-span-2 rounded-3xl bg-neutral-900 p-8 lg:p-12 text-white relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <span className="inline-flex items-center gap-2 bg-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
                    <Star className="w-3 h-3 fill-primary" /> Featured Guide
                  </span>
                  <h3 className="text-3xl lg:text-5xl font-black font-[var(--font-heading)] mb-4 group-hover:text-primary transition-colors">
                    {featuredResource.title}
                  </h3>
                  <p className="text-white/50 text-lg leading-relaxed max-w-lg mb-8">
                    {featuredResource.description}
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-6 mt-4">
                  <motion.div {...magneticProps}>
                    <CTAButton href={featuredResource.link} size="lg">Read Full Guide</CTAButton>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Quick Stats/Action - Small */}
            <motion.div
              initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="rounded-3xl bg-white border border-neutral-100 p-8 flex flex-col justify-between shadow-soft group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="text-2xl font-black text-neutral-900 font-[var(--font-heading)] mb-2">Resource Library</h4>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  Curated templates and guides available for student founders.
                </p>
              </div>
              <div className="mt-8 space-y-3">
                <div className="flex items-center justify-between text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                  <span>Resource Availability</span>
                  <span className="text-primary">Live</span>
                </div>
                <div className="h-1.5 bg-neutral-100 rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: "100%" }} viewport={{ once: true }} className="h-full bg-primary" />
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* SEARCH & FILTER BAR */}
        {resources.length > 0 && (
          <div className="bg-white rounded-[2.5rem] p-4 lg:p-6 shadow-soft border border-neutral-100 mb-12">
            <div className="grid lg:grid-cols-12 gap-6 items-center">
              {/* Search */}
              <div className="lg:col-span-6 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Search templates, guides, blogs..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-2xl bg-neutral-50 border-transparent focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/5 transition-all text-sm outline-none"
                />
              </div>

              {/* Filter */}
              <div className="lg:col-span-6 flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-hide">
                <div className="flex items-center gap-2 mr-4 flex-shrink-0">
                  <Filter className="w-4 h-4 text-neutral-400" />
                  <span className="text-[10px] font-black text-neutral-400 uppercase tracking-widest">Category</span>
                </div>
                <div className="flex gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setFilter(cat)}
                      className={`px-5 py-2 rounded-xl text-xs font-bold transition-all flex-shrink-0 ${filter === cat ? "bg-primary text-white" : "bg-neutral-50 text-neutral-500 hover:bg-neutral-100"}`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* GRID */}
        {resources.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((res, i) => {
                const Icon = iconMap[res.category] || FileText;
                const isTemplate = res.category === "Template";

                return (
                  <motion.div
                    key={res.id}
                    layout
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ delay: i * 0.05 }}
                    className="group h-full bg-white rounded-3xl border border-neutral-100 p-8 shadow-soft hover:shadow-soft-lg hover:border-primary/20 transition-all duration-300 flex flex-col"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-14 h-14 rounded-2xl ${isTemplate ? "bg-blue-50 text-blue-600" : "bg-primary/5 text-primary"} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <Icon className="w-7 h-7" />
                      </div>
                      <span className="text-[9px] font-black uppercase tracking-widest text-neutral-400 bg-neutral-50 px-3 py-1 rounded-full">{res.category}</span>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-2xl font-black text-neutral-900 font-[var(--font-heading)] mb-3 group-hover:text-primary transition-colors leading-tight">
                        {res.title}
                      </h3>
                      <p className="text-sm text-neutral-500 leading-relaxed mb-8 line-clamp-3">
                        {res.description}
                      </p>
                    </div>

                    <div className="pt-6 border-t border-neutral-50 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1.5 text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                          <Clock className="w-3.5 h-3.5" /> {res.readTime}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-neutral-200" />
                        <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">50+ DLs</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="w-8 h-8 rounded-lg bg-neutral-50 flex items-center justify-center text-neutral-400 hover:text-primary hover:bg-primary/10 transition-all">
                          <Bookmark className="w-4 h-4" />
                        </button>
                        <a
                          href={res.link}
                          className="w-8 h-8 rounded-lg bg-neutral-50 flex items-center justify-center text-neutral-400 hover:bg-primary hover:text-white transition-all group/link"
                        >
                          <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        ) : (
          <div className="text-center py-20 bg-neutral-50 rounded-[3rem] border border-dashed border-neutral-200">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-soft">
              <BookOpen className="w-6 h-6 text-primary animate-pulse" />
            </div>
            <h3 className="text-2xl font-black text-neutral-900 font-[var(--font-heading)] mb-3">Resources Coming Soon</h3>
            <p className="text-neutral-500 max-w-sm mx-auto leading-relaxed">We are currently curating high-quality startup resources, including guides, templates, and insights to support student entrepreneurs. Check back soon to explore tools for idea validation, product development, and startup growth.</p>
          </div>
        )}
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper background="white">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="rounded-3xl bg-neutral-900 p-10 lg:p-16 relative overflow-hidden text-center lg:text-left flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-xl">
            <h2 className="text-3xl lg:text-5xl font-black text-white font-[var(--font-heading)] mb-4">Have a Great Resource?</h2>
            <p className="text-white/50 text-lg leading-relaxed">
              If you&apos;ve discovered a valuable startup guide, template, or resource that can help other founders, contribute and support the growing PU-iNCENT startup community.
            </p>
          </div>
          <div className="relative z-10 flex-shrink-0">
            <motion.div {...magneticProps}>
              <CTAButton href="/resources/submit" size="lg">Submit Resource</CTAButton>
            </motion.div>
          </div>
        </motion.div>
      </SectionWrapper>
    </>
  );
}

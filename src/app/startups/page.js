"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Rocket, 
  Users, 
  TrendingUp, 
  Search, 
  Filter, 
  ArrowRight,
  Globe,
  ExternalLink,
  Target,
  Zap,
  Star,
  LineChart,
  X,
  CheckCircle2,
  Calendar,
  Share2
} from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";
import { startups, stageColors, developingFounders } from "@/data/startups";
import Counter from "@/components/Counter";
import TiltCard from "@/components/TiltCard";
import HeroParticles from "@/components/HeroParticles";

const stages = ["All", "Idea", "MVP", "Growth"];
const sectors = ["All", ...new Set(startups.map(s => s.sector))];

export default function StartupsPage() {
  const [filter, setFilter] = useState("All");
  const [sectorFilter, setSectorFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedStartup, setSelectedStartup] = useState(null);

  const filtered = startups.filter((s) => {
    const matchesStage = filter === "All" || s.stage === filter;
    const matchesSector = sectorFilter === "All" || s.sector === sectorFilter;
    const matchesSearch = s.name.toLowerCase().includes(search.toLowerCase()) || 
                         s.sector.toLowerCase().includes(search.toLowerCase());
    return matchesStage && matchesSector && matchesSearch;
  });

  const featuredStartup = startups[0]; // Hexora (Growth Stage)

  // Magnetic Button Effect (Simulated with Framer Motion)
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
              <Rocket className="w-3.5 h-3.5" /> Incubated Ventures
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black font-[var(--font-heading)] text-neutral-900 leading-tight mb-6">
              The Next Generation <br />
              <span className="text-primary relative inline-block">
                of Global Leaders
                </span>
            </h1>
            <p className="text-xl text-neutral-500 leading-relaxed mb-8 max-w-xl">
              Meet the innovative startups emerging from Poornima University, building solutions for a sustainable and technology-driven future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FEATURED BENTO */}
      <SectionWrapper background="light">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-12">
          {/* Featured Startup - Large */}
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="lg:col-span-2 rounded-3xl bg-neutral-900 p-8 lg:p-12 text-white relative overflow-hidden group cursor-pointer"
            onClick={() => setSelectedStartup(featuredStartup)}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <span className="inline-flex items-center gap-2 bg-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    <Star className="w-3 h-3 fill-primary" /> Portfolio Spotlight
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-green-500/20 text-green-400">
                    Growth Stage
                  </span>
                </div>
                <h3 className="text-4xl lg:text-5xl font-black font-[var(--font-heading)] mb-4 group-hover:text-primary transition-colors">
                  {featuredStartup.name}
                </h3>
                <p className="text-white/50 text-lg leading-relaxed max-w-lg mb-8">
                  {featuredStartup.description}
                </p>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-8 items-end">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-white/70">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                      <Globe className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest leading-none mb-1">Sector</p>
                      <p className="text-sm font-bold">{featuredStartup.sector}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-white/70">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest leading-none mb-1">Founder</p>
                      <p className="text-sm font-bold">{featuredStartup.founders}</p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-start sm:justify-end">
                  <motion.div {...magneticProps}>
                    <CTAButton href="#" variant="primary" size="lg" onClick={(e) => { e.preventDefault(); setSelectedStartup(featuredStartup); }}>
                      View Success Story
                    </CTAButton>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Portfolio Stats - Small */}
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="rounded-3xl bg-white border border-neutral-100 p-8 flex flex-col justify-between shadow-soft group"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <LineChart className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-2xl font-black text-neutral-900 font-[var(--font-heading)] mb-2">Impact at a Glance</h4>
              <p className="text-sm text-neutral-500 leading-relaxed">
                Our portfolio startups have collectively raised ₹<Counter value="5" />Cr+ and created <Counter value="250+" /> jobs.
              </p>
            </div>
            
            <div className="space-y-4 mt-8">
              {[
                { label: "IT & Tech", val: "45%", color: "bg-primary" },
                { label: "E-Commerce & Digital", val: "30%", color: "bg-blue-600" },
                { label: "Other Sectors", val: "25%", color: "bg-amber-600" }
              ].map((s, i) => (
                <div key={i} className="space-y-1.5">
                  <div className="flex justify-between text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                    <span>{s.label}</span>
                    <span>{s.val}</span>
                  </div>
                  <div className="h-1.5 bg-neutral-100 rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: s.val }} viewport={{ once: true }} className={`h-full ${s.color}`} />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* SEARCH & MULTI-FILTER */}
        <div className="bg-white rounded-[2.5rem] p-4 lg:p-6 shadow-soft border border-neutral-100 mb-12">
          <div className="grid lg:grid-cols-12 gap-6 items-center">
            {/* Search */}
            <div className="lg:col-span-4 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <input 
                type="text" 
                placeholder="Search ventures..." 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-2xl bg-neutral-50 border-transparent focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/5 transition-all text-sm outline-none"
              />
            </div>

            {/* Stage Filter */}
            <div className="lg:col-span-4 flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-hide">
              <span className="text-[10px] font-black text-neutral-400 uppercase tracking-widest mr-2 flex-shrink-0">Stage</span>
              {stages.map((stage) => (
                <button 
                  key={stage} 
                  onClick={() => setFilter(stage)} 
                  className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all flex-shrink-0 ${filter === stage ? "bg-primary text-white" : "bg-neutral-50 text-neutral-500 hover:bg-neutral-100"}`}
                >
                  {stage}
                </button>
              ))}
            </div>

            {/* Sector Filter */}
            <div className="lg:col-span-4 flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-hide">
              <span className="text-[10px] font-black text-neutral-400 uppercase tracking-widest mr-2 flex-shrink-0">Sector</span>
              {sectors.map((sec) => (
                <button 
                  key={sec} 
                  onClick={() => setSectorFilter(sec)} 
                  className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all flex-shrink-0 ${sectorFilter === sec ? "bg-primary text-white" : "bg-neutral-50 text-neutral-500 hover:bg-neutral-100"}`}
                >
                  {sec}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((startup, i) => {
              const sc = stageColors[startup.stage];
              return (
                <motion.div 
                  key={startup.id} 
                  layout
                  initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                  onClick={() => setSelectedStartup(startup)}
                  className="group h-full bg-white rounded-3xl border border-neutral-100 p-8 shadow-soft hover:shadow-soft-lg hover:border-primary/20 transition-all duration-300 flex flex-col cursor-pointer"
                >
                  <div className="flex items-start justify-end mb-6">
                    <span className={`inline-flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${sc.bg} ${sc.text}`}>
                      <div className={`w-1.5 h-1.5 rounded-full ${sc.dot}`} />
                      {startup.stage}
                    </span>
                  </div>
                  
                  <div className="flex-1">
                    <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">{startup.sector}</p>
                    <h3 className="text-2xl font-black text-neutral-900 font-[var(--font-heading)] mb-3 leading-tight group-hover:text-primary transition-colors">
                      {startup.name}
                    </h3>
                    <p className="text-sm text-neutral-500 leading-relaxed mb-6 line-clamp-3">
                      {startup.description}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-neutral-50 flex items-center justify-between">
                    <div>
                      <p className="text-[9px] font-bold text-neutral-400 uppercase tracking-widest mb-0.5">Founded by</p>
                      <p className="text-xs font-bold text-neutral-700">{startup.founders}</p>
                    </div>
                    <motion.div whileHover={{ x: 5 }} className="text-primary">
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 bg-neutral-50 rounded-3xl border border-dashed border-neutral-200">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-soft">
              <Search className="w-6 h-6 text-neutral-300" />
            </div>
            <h3 className="text-xl font-bold text-neutral-900 mb-2">No startups found</h3>
            <p className="text-neutral-500">Try adjusting your filters to explore other ventures.</p>
          </div>
        )}

        {/* DEVELOPING STARTUPS */}
        <div className="mt-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="inline-flex items-center gap-2 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                <Users className="w-3 h-3" /> Emerging Ecosystem
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-neutral-900 font-[var(--font-heading)]">Developing Startups</h2>
              <p className="text-neutral-500 mt-2">Bright minds currently in the ideation phase, building the next big thing.</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {developingFounders.map((founder, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.02 }}
                className="bg-white p-4 rounded-2xl border border-neutral-100 shadow-soft hover:border-primary/20 transition-all text-center"
              >
                <p className="text-sm font-bold text-neutral-800 line-clamp-1">{founder.name}</p>
                <p className="text-[9px] font-bold text-primary/60 uppercase tracking-tighter mt-1">{founder.status}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* STARTUP MODAL */}
      <AnimatePresence>
        {selectedStartup && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-6">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedStartup(null)}
              className="absolute inset-0 bg-neutral-900/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              <button 
                onClick={() => setSelectedStartup(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-neutral-50 flex items-center justify-center hover:bg-neutral-100 transition-colors z-20"
              >
                <X className="w-5 h-5 text-neutral-500" />
              </button>

              <div className="grid lg:grid-cols-2">
                <div className="p-8 lg:p-12 bg-neutral-50 border-r border-neutral-100">
                  <div className="mb-8" />
                  <h2 className="text-4xl font-black text-neutral-900 font-[var(--font-heading)] mb-4">{selectedStartup.name}</h2>
                  <div className="flex flex-wrap gap-3 mb-8">
                    <span className="px-4 py-1.5 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase tracking-widest">{selectedStartup.sector}</span>
                    <span className="px-4 py-1.5 bg-neutral-200 text-neutral-600 text-xs font-bold rounded-full uppercase tracking-widest">{selectedStartup.stage} Stage</span>
                  </div>
                  <p className="text-lg text-neutral-500 leading-relaxed">
                    {selectedStartup.description}
                  </p>
                </div>
                
                <div className="p-8 lg:p-12 space-y-10">
                  <div>
                    <h4 className="text-xs font-black text-neutral-400 uppercase tracking-widest mb-6">Founder & Team</h4>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-neutral-100" />
                      <div>
                        <p className="text-lg font-bold text-neutral-900">{selectedStartup.founders}</p>
                        <p className="text-sm text-neutral-500">Managing Director & CEO</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-black text-neutral-400 uppercase tracking-widest mb-6">Key Highlights</h4>
                    <div className="space-y-4">
                      {[
                        "Winner of Rajasthan Startup Expo 2024",
                        "Secured seed funding of ₹15 Lakhs",
                        "Partnered with 5 major industry giants",
                        "Scalable SaaS infrastructure built"
                      ].map((h, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-green-500" />
                          <span className="text-sm font-medium text-neutral-700">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-8 border-t border-neutral-100 flex flex-wrap gap-4">
                    <CTAButton href="#" className="flex-1 justify-center">Visit Website</CTAButton>
                    <button className="p-3.5 rounded-2xl bg-neutral-50 text-neutral-500 hover:bg-neutral-100 transition-colors">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* CALL TO ACTION */}
      <SectionWrapper background="white">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="rounded-3xl bg-neutral-900 p-10 lg:p-16 relative overflow-hidden text-center lg:text-left flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-xl">
            <h2 className="text-3xl lg:text-5xl font-black text-white font-[var(--font-heading)] mb-4">Be Our Next <br /><span className="text-primary">Success Story.</span></h2>
            <p className="text-white/50 text-lg leading-relaxed">
              If you have an idea and the drive to build, we have the resources to help you scale. Join the ranks of our successful alumni.
            </p>
          </div>
          <div className="relative z-10 flex-shrink-0">
            <motion.div {...magneticProps}>
              <CTAButton href="/apply" size="lg">Apply for Incubation</CTAButton>
            </motion.div>
          </div>
        </motion.div>
      </SectionWrapper>
    </>
  );
}

"use client";

import { motion } from "framer-motion";
import { 
  Building2, 
  Globe, 
  Cpu, 
  ShieldCheck, 
  Landmark, 
  Handshake, 
  Users, 
  ArrowRight, 
  MessageSquare,
  Star,
  Zap,
  Target
} from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";
import HeroParticles from "@/components/HeroParticles";
import { partners } from "@/data/partners";

const categories = [
  { 
    name: "Technology", 
    icon: Cpu, 
    color: "bg-blue-50 text-blue-600",
    desc: "Support through advanced tools, cloud infrastructure, technical mentorship, and product development resources." 
  },
  { 
    name: "Government", 
    icon: Landmark, 
    color: "bg-amber-50 text-amber-600",
    desc: "Access to startup policies, grants, schemes, and national-level entrepreneurship initiatives." 
  },
  { 
    name: "Industry", 
    icon: Building2, 
    color: "bg-purple-50 text-purple-600",
    desc: "Industry insights, mentorship, real-world problem statements, and collaboration opportunities with leading organizations." 
  },
  { 
    name: "Investment", 
    icon: ShieldCheck, 
    color: "bg-green-50 text-green-600",
    desc: "Access to funding opportunities, investor networks, venture capital exposure, and financial guidance." 
  },
  { 
    name: "Network", 
    icon: Users, 
    color: "bg-rose-50 text-rose-600",
    desc: "Connections with founders, mentors, investors, and ecosystem leaders to accelerate startup growth." 
  },
  { 
    name: "Academic", 
    icon: Globe, 
    color: "bg-cyan-50 text-cyan-600",
    desc: "Research support, knowledge resources, and institutional collaboration for innovation and development." 
  },
];

const otherPartnersList = [
  { name: "HD Media Network", category: "Media & Branding" },
  { name: "MSME", category: "Government Support" },
  { name: "DPIIT", category: "Government Recognition" },
  { name: "Startup India", category: "Government Initiative" },
  { name: "ASSOCHAM", category: "Industry Network" },
  { name: "NASSCOM", category: "Industry" },
  { name: "TiE Global", category: "Global Network" },
  { name: "TiE Rajasthan", category: "Regional Network" },
];

export default function PartnersPage() {
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
              <Handshake className="w-3.5 h-3.5" /> Partners
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black font-[var(--font-heading)] text-neutral-900 leading-tight mb-6">
              Building the Ecosystem<br />
              <span className="text-primary relative inline-block">
                with Strategic Partners
              </span>
            </h1>
            <p className="text-xl text-neutral-500 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
              We collaborate with leading organizations, government bodies, and industry leaders to strengthen PU-iNCENT, Poornima University&apos;s startup incubation center, by providing startups with world-class resources, mentorship, funding access, and growth opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FEATURED PARTNERS — BENTO */}
      <SectionWrapper background="light">
        <SectionHeading 
          label="Ecosystem" 
          title="Featured Partners" 
          subtitle="Top organizations that power the PU-iNCENT startup ecosystem with specialized support, industry expertise, and global networks." 
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-12">
          {/* Startup India - Large Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            className="lg:col-span-2 rounded-[2.5rem] bg-neutral-900 p-8 lg:p-12 text-white relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <span className="inline-flex items-center gap-2 bg-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
                  <Star className="w-3 h-3 fill-primary" /> Key Strategic Alliance
                </span>
                <h3 className="text-3xl lg:text-5xl font-black font-[var(--font-heading)] mb-4 group-hover:text-primary transition-colors">
                  Startup India
                </h3>
                <p className="text-white/50 text-lg leading-relaxed max-w-lg mb-8">
                  Collaborating with the Government of India&apos;s flagship startup initiative to promote entrepreneurship, innovation, and a robust startup ecosystem for student founders across the nation.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-6 mt-8 pt-8 border-t border-white/5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center">
                    <Landmark className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest leading-none mb-1">Government Partner</p>
                    <p className="text-sm font-bold">Invest India Initiative</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-xl">
                  <Zap className="w-4 h-4 text-primary" />
                  <span className="text-xs font-bold text-primary uppercase tracking-widest">Incubation & Funding Access</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Grid - Small Cards */}
          <div className="grid grid-cols-1 gap-4">
            {[
              { name: "NASSCOM", category: "Industry", icon: Building2, color: "text-purple-600", bg: "bg-purple-50" },
              { name: "Hexora", category: "Technology", icon: Cpu, color: "text-blue-600", bg: "bg-blue-50" }
            ].map((p, i) => (
              <motion.div 
                key={p.name}
                initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="rounded-[2rem] bg-white border border-neutral-100 p-8 shadow-soft group hover:border-primary/20 transition-all flex flex-col justify-between"
              >
                <div className="flex items-start justify-between">
                  <div className={`w-12 h-12 rounded-xl ${p.bg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <p.icon className={`w-6 h-6 ${p.color}`} />
                  </div>
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">{p.category}</span>
                </div>
                <div className="mt-8">
                  <h4 className="text-xl font-black text-neutral-900 font-[var(--font-heading)] leading-tight mb-2">{p.name}</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-neutral-50 border border-neutral-100 rounded-lg text-[9px] font-bold text-neutral-500 uppercase tracking-widest">
                      Strategic Value
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* NETWORK PARTNERS GRID */}
        <div className="mt-24">
          <SectionHeading label="Growth Network" title="Other Strategic Partners" align="center" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-12">
            {otherPartnersList.map((p, i) => (
              <motion.div 
                key={p.name}
                initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="group bg-white rounded-2xl p-6 border border-neutral-100 shadow-soft hover:shadow-soft-lg hover:border-primary/20 transition-all duration-300 flex flex-col items-center justify-center text-center gap-4 aspect-square"
              >
                <div className="w-12 h-12 rounded-2xl bg-neutral-50 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Building2 className="w-6 h-6 text-neutral-300 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-sm font-black text-neutral-900 leading-tight mb-1">{p.name}</p>
                  <p className="text-[9px] font-bold text-primary uppercase tracking-widest">{p.category}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* SUPPORT DOMAINS */}
      <SectionWrapper background="white">
        <SectionHeading 
          label="Support Areas" 
          title="Collaboration Verticals" 
          subtitle="Our partners contribute across multiple domains to ensure student founders have access to the right resources at every stage of their startup journey." 
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div 
              key={cat.name}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="group flex flex-col p-8 rounded-[2.5rem] bg-neutral-50 border border-neutral-100 hover:bg-white hover:shadow-soft-lg hover:border-primary/20 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-2xl ${cat.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm`}>
                <cat.icon className="w-7 h-7" />
              </div>
              <h4 className="text-2xl font-black text-neutral-900 font-[var(--font-heading)] mb-3">{cat.name}</h4>
              <p className="text-base text-neutral-500 leading-relaxed mb-6">
                {cat.desc}
              </p>
              <div className="mt-auto pt-6 border-t border-neutral-100/50 flex items-center gap-2">
                <Target className="w-3.5 h-3.5 text-primary" />
                <span className="text-[10px] font-black text-neutral-400 uppercase tracking-widest">Priority Support Domain</span>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* FINAL JOIN CTA */}
      <SectionWrapper background="white">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="rounded-[3rem] bg-neutral-900 p-10 lg:p-20 relative overflow-hidden text-center flex flex-col items-center justify-center"
        >
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="relative z-10 max-w-3xl">
            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-8 mx-auto">
              <Handshake className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl lg:text-6xl font-black text-white font-[var(--font-heading)] mb-6 leading-tight">
              Scale Your Impact <br /><span className="text-primary">With PU-iNCENT.</span>
            </h2>
            <p className="text-white/50 text-xl leading-relaxed mb-12">
              Join one of Rajasthan&apos;s fastest-growing university startup incubation ecosystems. Whether you provide technology, mentorship, funding, or industry expertise, PU-iNCENT offers a platform to create meaningful impact.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <motion.div {...magneticProps}>
                <CTAButton href="/partners/join" size="lg">Become a Partner</CTAButton>
              </motion.div>
              <motion.div {...magneticProps}>
                <CTAButton href="/contact" variant="outline-white" size="lg">Contact Us</CTAButton>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </SectionWrapper>
    </>
  );
}

"use client";

import { motion } from "framer-motion";
import { 
  Target, 
  Eye, 
  Heart, 
  TrendingUp, 
  Zap, 
  Users, 
  Globe, 
  Rocket, 
  Award,
  ChevronRight,
  Star
} from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";
import HeroParticles from "@/components/HeroParticles";
import Counter from "@/components/Counter";


const values = [
  { icon: Heart, title: "Founder First", desc: "We prioritize the founder’s vision, enabling bold ideas to evolve into scalable startups.", color: "text-rose-500", bg: "bg-rose-50" },
  { icon: TrendingUp, title: "Hyper Growth", desc: "Accelerating startup growth through rapid experimentation, iteration, and real-world validation.", color: "text-blue-500", bg: "bg-blue-50" },
  { icon: Target, title: "Social Impact", desc: "Building startups that address real-world challenges and contribute to society.", color: "text-green-500", bg: "bg-green-50" },
  { icon: Zap, title: "Radical Innovation", desc: "Encouraging breakthrough ideas and pushing the boundaries of innovation within campus ecosystems.", color: "text-amber-500", bg: "bg-amber-50" },
];


export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative py-16 lg:py-24 overflow-hidden" style={{ background: "linear-gradient(135deg, #fff5eb 0%, #fff9f5 40%, #ffffff 100%)" }}>
        <HeroParticles />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-20 animate-float-slow" style={{ background: "radial-gradient(circle, #FF6B00 0%, transparent 70%)", transform: "translate(30%, -30%)" }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center lg:text-left">
          <div className="max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="inline-flex items-center gap-2 bg-white text-primary text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6 shadow-soft border border-primary/10">
                <Rocket className="w-3.5 h-3.5" /> About PU-iNCENT
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black font-[var(--font-heading)] text-neutral-900 leading-tight mb-6">
                Bridging Academic Innovation <br />
                <span className="text-primary relative inline-block">
                  With Market Impact
                </span>
              </h1>
              <p className="text-xl text-neutral-500 leading-relaxed mb-8 max-w-2xl">
                PU-iNCENT is Poornima University’s flagship startup incubation center—a launchpad where student innovation meets structured mentorship, industry expertise, and global startup opportunities.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <CTAButton href="/programs" size="lg">Explore Programs</CTAButton>
                <CTAButton href="/contact" variant="outline" size="lg">Get In Touch</CTAButton>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CORE IDENTITY BENTO */}
      <SectionWrapper background="white">
        <SectionHeading 
          label="Our Purpose" 
          title="Vision & Mission" 
          subtitle="The driving force behind one of Rajasthan’s fastest-growing student-led startup ecosystems." 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          {/* Vision Card - Large */}
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="md:col-span-4 rounded-3xl bg-neutral-900 p-8 lg:p-12 text-white relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:border-primary/50 transition-all">
                <Eye className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-3xl font-black font-[var(--font-heading)] mb-6">Our Vision</h3>
              <p className="text-xl text-white/50 leading-relaxed font-medium max-w-2xl">
                To become a leading university startup incubation center in India, building globally competitive startups that solve real-world problems and create sustainable economic impact.
              </p>
            </div>
          </motion.div>

          {/* Mission Card - Side */}
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="md:col-span-2 rounded-3xl bg-neutral-50 border border-neutral-100 p-8 lg:p-10 flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-black text-neutral-900 font-[var(--font-heading)] mb-4">Our Mission</h3>
              <p className="text-base text-neutral-500 leading-relaxed font-medium">
                To empower student entrepreneurs through structured incubation programs, expert mentorship, funding access, and a thriving innovation-driven community.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-neutral-200 flex items-center justify-between">
              <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">Global Standards</span>
              <Rocket className="w-4 h-4 text-primary" />
            </div>
          </motion.div>

          {/* Values Cards - Bottom Row */}
          {values.map((val, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="md:col-span-3 lg:col-span-3 rounded-3xl bg-white border border-neutral-100 p-8 shadow-soft group hover:border-primary/20 transition-all"
            >
              <div className={`w-12 h-12 rounded-2xl ${val.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <val.icon className={`w-6 h-6 ${val.color}`} />
              </div>
              <h4 className="text-xl font-black text-neutral-900 font-[var(--font-heading)] mb-2">{val.title}</h4>
              <p className="text-sm text-neutral-500 leading-relaxed">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* STORY & MILESTONES */}
      <SectionWrapper background="light">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <SectionHeading label="Our Story" title="Why We Started" align="left" />
            <div className="space-y-6 text-lg text-neutral-500 leading-relaxed">
              <p>
                Every year, thousands of students at Poornima University generate innovative ideas—but only a few get the opportunity to turn them into real startups. <span className="text-neutral-900 font-bold">PU-iNCENT was established to bridge this gap.</span>
              </p>
              <p>
                As a dedicated startup incubation center, we provide the structure, mentorship, funding access, and ecosystem needed to transform ideas into scalable, market-ready ventures.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-white border border-neutral-200 rounded-full">
                  <Award className="w-4 h-4 text-primary" />
                  <span className="text-xs font-bold text-neutral-700">Govt. Certified</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white border border-neutral-200 rounded-full">
                  <Globe className="w-4 h-4 text-blue-600" />
                  <span className="text-xs font-bold text-neutral-700">Global Network</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Startups Incubated", val: "100+", icon: Rocket, color: "text-primary", bg: "bg-primary/5" },
              { label: "Funding Facilitated", val: "₹5Cr+", icon: TrendingUp, color: "text-green-600", bg: "bg-green-50" },
              { label: "Expert Mentors", val: "50+", icon: Star, color: "text-amber-500", bg: "bg-amber-50" },
              { label: "Jobs Created", val: "250+", icon: Users, color: "text-blue-600", bg: "bg-blue-50" },
            ].map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white border border-neutral-100 rounded-3xl p-6 shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-10 h-10 rounded-xl ${stat.bg} flex items-center justify-center mb-4`}>
                  <stat.icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                <h3 className="text-2xl font-black text-neutral-900 font-[var(--font-heading)] mb-1"><Counter value={stat.val} /></h3>
                <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest leading-tight">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* IMPACT STATS BENTO */}
      <SectionWrapper>
        <SectionHeading label="Impact" title="Our Numbers Speak" subtitle="A measurable snapshot of the startup ecosystem and innovation culture built at PU-iNCENT." />
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Startups Incubated", value: "100+", icon: Rocket, color: "text-primary" },
            { label: "Jobs Created", value: "250+", icon: Users, color: "text-blue-600" },
            { label: "Students Engaged", value: "5000+", icon: Star, color: "text-amber-500" },
            { label: "Mentorship Hours", value: "10000+", icon: Zap, color: "text-orange-500" },
            { label: "Funding Facilitated", value: "₹5Cr+", icon: TrendingUp, color: "text-green-600" },
            { label: "Events & Workshops", value: "300+", icon: Award, color: "text-purple-600" },
            { label: "Industry Mentors", value: "50+", icon: Target, color: "text-rose-500" },
            { label: "Strategic Partners", value: "20+", icon: Globe, color: "text-indigo-600" },
          ].map((stat, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="bg-neutral-50 border border-neutral-100 rounded-3xl p-8 text-center group hover:bg-white hover:shadow-soft-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-white shadow-soft flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <h3 className="text-3xl lg:text-4xl font-black text-neutral-900 font-[var(--font-heading)] mb-2 tracking-tight"><Counter value={stat.value} /></h3>
              <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* FINAL CTA */}
      <SectionWrapper background="white">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="rounded-3xl bg-neutral-900 p-10 lg:p-16 relative overflow-hidden text-center"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-black text-white font-[var(--font-heading)] mb-6">Want to Join the <br />Future of Innovation?</h2>
            <p className="text-white/50 text-lg leading-relaxed mb-10">
              Whether you are a student founder, mentor, or ecosystem partner—PU-iNCENT provides the platform, network, and resources to help you grow and succeed.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <CTAButton href="/apply" size="lg">Apply for Incubation</CTAButton>
              <CTAButton href="/partners" variant="outline-white" size="lg">Partner With Us</CTAButton>
            </div>
          </div>
        </motion.div>
      </SectionWrapper>
    </>
  );
}

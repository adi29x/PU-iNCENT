"use client";

import { motion } from "framer-motion";
import { 
  Users, 
  Globe, 
  Star, 
  Zap, 
  Heart, 
  Award,
  ArrowRight,
  MessageSquare,
  ShieldCheck,
  Rocket,
  User,
  Quote
} from "lucide-react";
import { useState } from "react";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";
import HeroParticles from "@/components/HeroParticles";
import { team } from "@/data/team";

const LinkedInIcon = ({ className }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={className} 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const UserAvatar = ({ name, size = "md" }) => {
  const colors = [
    "bg-neutral-800",
    "bg-neutral-700",
    "bg-neutral-900"
  ];
  const colorIndex = name.length % colors.length;
  const sizeClasses = size === "lg" ? "w-20 h-20" : (size === "sm" ? "w-12 h-12" : "w-16 h-16");
  const iconSize = size === "lg" ? "w-10 h-10" : (size === "sm" ? "w-6 h-6" : "w-8 h-8");

  return (
    <div className={`${sizeClasses} rounded-2xl ${colors[colorIndex]} flex items-center justify-center shadow-soft border border-white/10 group-hover:scale-105 transition-transform duration-500`}>
      <User className={`${iconSize} text-primary/40`} />
    </div>
  );
};

const stats = [
  { label: "Community Members", value: "5000+", icon: Users, color: "text-primary" },
  { label: "Expert Mentors", value: "50+", icon: Star, color: "text-amber-500" },
  { label: "Partner Organizations", value: "20+", icon: ShieldCheck, color: "text-blue-500" },
  { label: "Hours of Mentorship", value: "10000+", icon: Zap, color: "text-green-500" }
];

export default function CommunityPage() {
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
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-10 animate-float" style={{ background: "radial-gradient(circle, #FF9933 0%, transparent 70%)", transform: "translate(-30%, 30%)" }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 24 }} 
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 bg-white text-primary text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6 shadow-soft border border-primary/10">
                <Users className="w-3.5 h-3.5" /> Our Ecosystem
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black font-[var(--font-heading)] text-neutral-900 leading-tight mb-6">
                A Collective of <br />
                <span className="text-primary relative inline-block">
                  Dreamers & Doers
                </span>
              </h1>
              <p className="text-xl text-neutral-500 leading-relaxed mb-10 max-w-2xl">
                The heartbeat of PU-iNCENT lies in its people—a high-octane network of industry titans, bold founders, and the student leaders of tomorrow.
              </p>
              <div className="flex flex-wrap items-center gap-5">
                <motion.div {...magneticProps}>
                  <CTAButton href="/contact" size="lg" className="px-8 h-14 rounded-xl shadow-orange">Join the Tribe</CTAButton>
                </motion.div>
                <motion.div {...magneticProps}>
                  <CTAButton href="#mentors" variant="outline" size="lg" className="px-8 h-14 rounded-xl border-neutral-200">Explore Mentors</CTAButton>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* COMMUNITY HIGHLIGHT BENTO */}
      <SectionWrapper background="white" id="team">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
          {/* Mission Bridge Card - Glass Dark */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="lg:col-span-8 rounded-[3rem] bg-neutral-900 p-8 lg:p-12 relative overflow-hidden group shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-900" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none group-hover:bg-primary/20 transition-all duration-700" />
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-30" />
            
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-5 mb-12">
                  <div className="w-16 h-16 rounded-[1.25rem] bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shadow-orange group-hover:rotate-6 transition-transform duration-500">
                    <Rocket className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-white font-[var(--font-heading)] leading-none mb-1">The Mission Bridge</h3>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">Ecosystem Architects</p>
                    </div>
                  </div>
                </div>
                
                <div className="relative mb-16">
                  <Quote className="absolute -top-10 -left-6 w-20 h-20 text-white/5" />
                  <p className="text-2xl lg:text-3xl text-white/90 leading-[1.3] font-black tracking-tight relative z-10 italic">
                    &quot;We don&apos;t just build startups; we build <span className="text-primary">founders</span>. Our community acts as both a support system and a launchpad, empowering students to take bold risks.&quot;
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5 pt-10 border-t border-white/5">
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                  <User className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <p className="text-xl font-black text-white tracking-tight">Dr. Pratish Rawat</p>
                  <p className="text-xs font-bold text-white/40 uppercase tracking-widest">Incubation Head, PU-iNCENT</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats Column */}
          <div className="lg:col-span-4 grid grid-cols-1 gap-6">
            {stats.slice(0, 2).map((s, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                className="bg-neutral-50 border border-neutral-100 rounded-[2.5rem] p-8 flex flex-col justify-between group hover:bg-white hover:shadow-soft-lg hover:border-primary/20 transition-all duration-500 cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-white shadow-soft flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                  <s.icon className={`w-6 h-6 ${s.color} group-hover:text-white transition-colors duration-500`} />
                </div>
                <div>
                  <h4 className="text-4xl font-black text-neutral-900 font-[var(--font-heading)] mb-1 tracking-tighter leading-none">{s.value}</h4>
                  <p className="text-[10px] font-black text-neutral-400 uppercase tracking-[0.2em]">{s.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {stats.slice(2, 4).map((s, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="bg-white border border-neutral-100 rounded-[2rem] p-6 flex items-center gap-6 group hover:shadow-soft-lg hover:border-primary/20 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-xl bg-neutral-50 flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-500">
                <s.icon className={`w-7 h-7 ${s.color}`} />
              </div>
              <div>
                <h4 className="text-3xl font-black text-neutral-900 font-[var(--font-heading)] leading-none mb-1 tracking-tight">{s.value}</h4>
                <p className="text-[10px] font-black text-neutral-400 uppercase tracking-widest">{s.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* EXPERT MENTORS */}
        <div id="mentors" className="bg-neutral-900 rounded-[3rem] p-8 lg:p-16 text-white mb-24 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="relative z-10 mb-12 flex flex-col md:flex-row items-end justify-between gap-6">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-2 bg-primary/20 text-primary text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                <Star className="w-3 h-3 fill-primary" /> Expert Network
              </span>
              <h2 className="text-3xl lg:text-5xl font-black font-[var(--font-heading)] mb-4">Industry Mentors</h2>
              <p className="text-white/50 text-lg">Successful founders, entrepreneurs, and domain experts mentoring student startups across various industries.</p>
            </div>
            <motion.div {...magneticProps}>
              <CTAButton href="/contact" variant="outline-white" size="md">Become a Mentor</CTAButton>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {team.mentors.map((mentor, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-[2.5rem] p-8 lg:p-10 hover:border-primary/50 transition-all group relative overflow-hidden backdrop-blur-sm"
              >
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-all" />
                <div className="flex items-start justify-between mb-10">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 group-hover:bg-primary/20 transition-all">
                    <Star className="w-6 h-6 text-primary" />
                  </div>
                  <a href={mentor.linkedin} className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-primary transition-colors border border-white/10">
                    <LinkedInIcon className="w-4 h-4" />
                  </a>
                </div>
                <h4 className="text-2xl font-black font-[var(--font-heading)] mb-2 leading-tight group-hover:text-primary transition-colors">{mentor.name}</h4>
                <p className="text-xs text-white/40 mb-8 uppercase tracking-widest font-black leading-relaxed">{mentor.role}</p>
                <div className="inline-flex px-5 py-2 bg-primary/10 border border-primary/20 rounded-full">
                  <span className="text-[10px] font-black text-primary uppercase tracking-widest">{mentor.expertise}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* STUDENT LEADERS */}
        <div className="mb-24">
          <SectionHeading label="The Energy" title="E-Cell Student Leaders" align="center" />
          
          {/* Strategic Leadership */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {team.studentLeaders.filter(l => l.role.includes("Chief") || l.role.includes("Chair")).map((leader, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="bg-white border border-neutral-100 rounded-[2.5rem] p-8 lg:p-10 shadow-soft hover:shadow-soft-lg hover:border-primary/20 transition-all group flex flex-col items-center text-center"
              >
                <div className="mb-6 group-hover:scale-105 group-hover:-rotate-3 transition-all duration-500">
                  <UserAvatar name={leader.name} size="lg" />
                </div>
                <h4 className="text-2xl font-black text-neutral-900 font-[var(--font-heading)] mb-1 group-hover:text-primary transition-colors">{leader.name}</h4>
                <p className="text-xs font-black text-primary uppercase tracking-widest mb-2">{leader.role}</p>
              </motion.div>
            ))}
          </div>

          {/* Tier 2 - Team Leaders */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-7xl mx-auto mb-16">
            {team.studentLeaders.filter(l => l.role === "Team Leader").map((leader, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white border border-neutral-100 rounded-3xl p-6 shadow-soft hover:border-primary/20 transition-all group text-center"
              >
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                  <UserAvatar name={leader.name} size="md" />
                </div>
                <h4 className="text-lg font-black text-neutral-900 font-[var(--font-heading)] mb-1 group-hover:text-primary transition-colors">{leader.name}</h4>
                <p className="text-[10px] font-black text-primary uppercase tracking-widest">{leader.role}</p>
              </motion.div>
            ))}
          </div>

          {/* Tier 3 - Deputy Leaders & Liaison */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {team.studentLeaders.filter(l => l.role.includes("Deputy") || l.role === "Liaison").map((leader, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="text-center group bg-neutral-50/30 rounded-2xl p-4 border border-transparent hover:bg-white hover:border-neutral-100 hover:shadow-soft transition-all"
              >
                <div className="flex justify-center mb-3 group-hover:scale-110 transition-transform duration-500">
                  <UserAvatar name={leader.name} size="sm" />
                </div>
                <h4 className="text-[13px] font-black text-neutral-900 font-[var(--font-heading)] mb-0.5 group-hover:text-primary transition-colors leading-tight">{leader.name}</h4>
                <p className="text-[9px] font-black text-neutral-400 uppercase tracking-widest">{leader.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* FINAL JOIN CTA */}
      <SectionWrapper background="light">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="bg-white rounded-[2.5rem] p-10 border border-neutral-100 shadow-soft group"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <MessageSquare className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-3xl font-black font-[var(--font-heading)] text-neutral-900 mb-4">Start a Conversation</h3>
            <p className="text-neutral-500 leading-relaxed mb-10 text-lg">
              Whether you have a startup idea, want to become a mentor, or explore entrepreneurship opportunities, PU-iNCENT is open to collaborate and support you.
            </p>
            <motion.div {...magneticProps}>
              <CTAButton href="/contact" variant="primary" className="w-full justify-center" size="lg">Get in Touch</CTAButton>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="bg-neutral-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <Award className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-3xl font-black font-[var(--font-heading)] mb-4">Join E-Cell</h3>
            <p className="text-white/50 leading-relaxed mb-10 text-lg">
              Become a student leader and contribute to building one of Rajasthan’s most dynamic campus startup and entrepreneurship communities.
            </p>
            <motion.div {...magneticProps}>
              <CTAButton href="/apply" variant="outline-white" className="w-full justify-center" size="lg">Apply Now</CTAButton>
            </motion.div>
          </motion.div>
        </div>
      </SectionWrapper>
    </>
  );
}

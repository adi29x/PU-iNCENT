"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Lightbulb, Search, Hammer, Presentation, Rocket, Target, CheckCircle2, Star, TrendingUp, Users, Award, Zap } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";
import TestimonialSlider from "@/components/TestimonialSlider";
import Card from "@/components/Card";
import { startups } from "@/data/startups";
import { events } from "@/data/events";
import { testimonials } from "@/data/testimonials";
import Counter from "@/components/Counter";
import Magnetic from "@/components/Magnetic";
import TiltCard from "@/components/TiltCard";
import HeroParticles from "@/components/HeroParticles";

const trustStats = [
  { val: "100+", label: "Startups" },
  { val: "50+", label: "Mentors" },
  { val: "₹5Cr+", label: "Funding" },
  { val: "300+", label: "Events" },
];

const pillars = [
  { icon: Lightbulb, label: "Ideation Support", desc: "Transform early-stage startup ideas into clearly defined, problem-driven solutions with expert mentorship.", color: "bg-amber-50 text-amber-600" },
  { icon: Target, label: "Market Validation", desc: "Validate startup ideas through structured research, real user feedback, and data-driven decision-making.", color: "bg-blue-50 text-blue-600" },
  { icon: Hammer, label: "MVP Development", desc: "Build and iterate startup products efficiently with access to technical mentorship and infrastructure.", color: "bg-green-50 text-green-600" },
  { icon: Rocket, label: "Launch & Scale", desc: "Pitch to investors, secure funding, and scale your startup with strategic guidance.", color: "bg-primary-50 text-primary" },
  { icon: Users, label: "Community & Network", desc: "Connect with founders, mentors, alumni, and investors within a growing startup ecosystem.", color: "bg-purple-50 text-purple-600" },
];

const howItWorks = [
  { step: "01", title: "Ideate", desc: "Refine your startup idea into a clear, actionable problem-solution framework.", icon: Lightbulb, color: "bg-amber-100 text-amber-600" },
  { step: "02", title: "Validate", desc: "Test with real users and build strong validation before product development.", icon: Search, color: "bg-blue-100 text-blue-600" },
  { step: "03", title: "Build", desc: "Develop your MVP with mentorship, tools, and dedicated workspace.", icon: Hammer, color: "bg-green-100 text-green-600" },
  { step: "04", title: "Pitch", desc: "Present at Demo Day to investors and move toward funding and growth.", icon: Presentation, color: "bg-purple-100 text-purple-600" },
  { step: "05", title: "Fund", desc: "Access seed funding, grants, and investor networks to accelerate startup growth.", icon: TrendingUp, color: "bg-rose-100 text-rose-600" },
];

const featuredPrograms = [
  { id: "launchpad", title: "LaunchPad", badge: "★ Flagship", tagline: "3-Month Intensive Incubation", desc: "A structured startup incubation program designed to take your idea from concept to an investor-ready product—with mentorship, funding access, workspace, and Demo Day exposure.", featured: true },
  { id: "workshops", title: "Workshops & Bootcamps", tagline: "Skill-Building Sessions", desc: "Hands-on startup workshops covering product development, design thinking, marketing, and business strategy.", featured: false },
  { id: "hackathons", title: "Hackathons & Challenges", tagline: "Build. Compete. Win.", desc: "High-impact hackathons where you build, innovate, and compete by solving real-world startup problems.", featured: false },
  { id: "mentorship", title: "Mentorship Connect", tagline: "1-on-1 Expert Guidance", desc: "Get matched with experienced founders, investors, and domain experts for personalized startup mentoring.", featured: false },
  { id: "coworking", title: "Co-Working Space", tagline: "Work. Build. Collaborate.", desc: "Access a modern startup workspace designed for builders and early-stage teams.", featured: false },
  { id: "demoday", title: "Demo Day", tagline: "Pitch to 50+ Investors", desc: "Showcase your startup to investors, venture capitalists, and industry leaders.", featured: false },
];

const highlights = [
  { icon: TrendingUp, text: "Structured incubation programs across all stages" },
  { icon: Users, text: "Access to 50+ mentors from industry and academia" },
  { icon: Award, text: "Funding support and investor network access" },
  { icon: CheckCircle2, text: "Modern co-working infrastructure" },
];


export default function HomePage() {
  const upcomingEvents = events.filter((e) => e.type === "upcoming").slice(0, 5);
  const featuredStartups = startups.slice(0, 4);

  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <>
      {/* HERO */}
      <section 
        className="relative min-h-[92vh] flex items-center overflow-hidden" 
        style={{ background: "linear-gradient(135deg, #fff5eb 0%, #fff9f5 40%, #ffffff 100%)" }}
      >
        <HeroParticles />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Animated Blob 1 */}
          <motion.div 
            animate={{ 
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 15, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.15] blur-3xl" 
            style={{ background: "radial-gradient(circle, #FF6B00 0%, transparent 70%)", transform: "translate(30%, -30%)" }} 
          />
          {/* Animated Blob 2 */}
          <motion.div 
            animate={{ 
              x: [0, -80, 0],
              y: [0, 100, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-[0.1] blur-2xl" 
            style={{ background: "radial-gradient(circle, #FF9933 0%, transparent 70%)", transform: "translate(-30%, 30%)" }} 
          />
          {/* Animated Blob 3 (Center subtle) */}
          <motion.div 
            animate={{ 
              x: [0, 50, -50, 0],
              y: [0, 50, -50, 0],
            }}
            transition={{ 
              duration: 25, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute top-1/2 left-1/2 w-[400px] h-[400px] rounded-full opacity-[0.08] blur-3xl -translate-x-1/2 -translate-y-1/2" 
            style={{ background: "radial-gradient(circle, #FFB366 0%, transparent 70%)" }} 
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left */}
            <div>
              <motion.span initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-white text-primary text-sm font-semibold px-4 py-2 rounded-full mb-6 shadow-soft border border-primary/10">
                <Rocket className="w-4 h-4" /> Poornima University&apos;s Premier Incubation Center
              </motion.span>

              <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold font-[var(--font-heading)] text-neutral-900 leading-[1.08] mb-5">
                Turn Your{" "}
                <span className="text-primary relative inline-block">
                  Ideas
                  <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 10" fill="none"><path d="M2 6C50 2 100 2 198 6" stroke="#FF6B00" strokeWidth="3" strokeLinecap="round" opacity="0.5" /></svg>
                </span>
                <br />Into Scalable Startups
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg text-neutral-500 leading-relaxed mb-8 max-w-lg">
                PU-iNCENT is Poornima University’s leading startup incubation center, helping students transform ideas into scalable, investor-ready startups through mentorship, funding support, and a strong entrepreneurial ecosystem.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap gap-4 mb-10">
                <CTAButton href="/apply" size="lg">Apply Now</CTAButton>
                <CTAButton href="/programs" variant="secondary" size="lg" icon={false}>
                  Explore Programs <ArrowRight className="w-4 h-4 ml-1 inline" />
                </CTAButton>
              </motion.div>

              {/* Trust stats */}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-wrap gap-x-6 gap-y-3">
                {trustStats.map((s) => (
                  <div key={s.label} className="flex items-baseline gap-1.5">
                    <span className="text-xl font-bold text-primary font-[var(--font-heading)]"><Counter value={s.val} /></span>
                    <span className="text-sm text-neutral-400">{s.label}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right — LaunchPad Card */}
            <TiltCard initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden lg:block">
              <div className="bg-white rounded-3xl p-8 shadow-soft-lg border border-neutral-100 relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                    <Rocket className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-neutral-900">PU-iNCENT LaunchPad</p>
                    <p className="text-xs text-neutral-400">Pre Incubation Program · Applications Open</p>
                  </div>
                  <span className="ml-auto text-[10px] font-bold bg-green-100 text-green-700 px-2.5 py-1 rounded-full uppercase tracking-wide">Live</span>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1.5 bg-amber-50 rounded-xl px-3 py-2 mb-5 w-fit">
                  {[1,2,3,4,5].map((s) => <Star key={s} className="w-3.5 h-3.5 text-amber-400" fill="#FBBF24" />)}
                  <span className="text-xs font-bold text-neutral-700 ml-1">4.9</span>
                  <span className="text-[10px] text-neutral-400 ml-0.5">Founder Rating</span>
                </div>

                <div className="space-y-3 mb-6">
                  {["Mentorship from experienced industry professionals","Access to seed funding opportunities","Demo Day with 50+ investors","Dedicated co-working space"].map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-neutral-600">{item}</span>
                    </div>
                  ))}
                </div>
                <CTAButton href="/apply" size="sm">Apply for LaunchPad</CTAButton>
              </div>

              {/* Stat pills */}
              <div className="flex gap-3 mt-4">
                {[{ val: "100+", label: "Startups Incubated" }, { val: "₹5 Cr+", label: "Funding Raised" }].map((s) => (
                  <motion.div key={s.label} animate={{ y: [0, -4, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="flex-1 bg-white rounded-2xl px-4 py-3 shadow-soft border border-neutral-100 text-center">
                    <p className="text-xl font-bold text-primary font-[var(--font-heading)]"><Counter value={s.val} /></p>
                    <p className="text-[10px] text-neutral-400 mt-0.5">{s.label}</p>
                  </motion.div>
                ))}
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <SectionWrapper background="white">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <span className="inline-block bg-primary-50 text-primary text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">About Us</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[var(--font-heading)] text-neutral-900 leading-tight mb-3">What is PU-iNCENT?</h2>
            <div className="bg-gradient-to-r from-primary-50 to-amber-50 rounded-2xl px-5 py-4 mb-5 border border-primary/10">
              <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Full Form</p>
              <p className="text-sm font-semibold text-neutral-800 leading-relaxed">
                <span className="text-primary">P</span>oornima <span className="text-primary">U</span>niversity{" "}
                <span className="text-primary">I</span>ntegrated <span className="text-primary">N</span>odal{" "}
                <span className="text-primary">C</span>enter for <span className="text-primary">E</span>ntrepreneurship and{" "}
                <span className="text-primary">N</span>ovel <span className="text-primary">T</span>echnologies
              </p>
            </div>
            <p className="text-neutral-500 text-sm leading-relaxed">
              Participate in startup events, hackathons, and networking opportunities designed to accelerate innovation and growth.
            </p>
            <p className="text-neutral-500 text-sm leading-relaxed mb-6">
              PU-iNCENT is Poornima University’s flagship startup incubation ecosystem, designed to bridge academic innovation with real-world entrepreneurship. We empower student founders at every stage—from idea validation to building investor-ready startups.
            </p>
            <div className="space-y-3 mb-8">
              {highlights.map((h, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                    <h.icon className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-neutral-600 text-sm">{h.text}</p>
                </motion.div>
              ))}
            </div>
            <CTAButton href="/about" variant="outline">Learn More About Us</CTAButton>
          </div>

          {/* 4 Pillars */}
          <div className="relative space-y-4">
            {pillars.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-soft border border-neutral-100 hover:shadow-soft-lg hover:-translate-y-0.5 transition-all duration-300">
                <div className={`w-11 h-11 rounded-xl ${item.color} flex items-center justify-center flex-shrink-0`}>
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-neutral-900 text-sm mb-0.5">{item.label}</p>
                  <p className="text-xs text-neutral-500 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          </div>
        </div>
      </SectionWrapper>

      {/* HOW IT WORKS — BENTO */}
      <SectionWrapper background="light">
        <SectionHeading label="Process" title="How It Works" subtitle="A structured startup journey from idea to a market-ready, fundable venture." />
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Large tile — step 01 */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="col-span-2 lg:col-span-1 row-span-2">
            {(() => { const HeroIcon = howItWorks[0].icon; return (
            <div className={`h-full min-h-[220px] rounded-3xl p-7 flex flex-col justify-between bg-gradient-to-br from-amber-400 to-orange-500`}>
              <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mb-4">
                <HeroIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-[10px] font-black text-white/60 uppercase tracking-widest">{howItWorks[0].step}</span>
                <h3 className="text-2xl font-black text-white mt-1 mb-2">{howItWorks[0].title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{howItWorks[0].desc}</p>
              </div>
            </div>
            );})()}
          </motion.div>
          {/* Steps 02–06 */}
          {howItWorks.slice(1).map((step, i) => (
            <motion.div key={step.step} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              className="col-span-1">
              <div className={`h-full min-h-[140px] rounded-3xl p-5 bg-white border border-neutral-100 shadow-soft hover:shadow-soft-lg hover:-translate-y-0.5 hover:border-primary/20 transition-all duration-300 flex flex-col justify-between group`}>
                <div className={`w-10 h-10 rounded-xl ${step.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-black text-neutral-300 uppercase tracking-widest">{step.step}</span>
                  <h3 className="text-base font-bold text-neutral-900 mt-0.5 mb-1">{step.title}</h3>
                  <p className="text-xs text-neutral-500 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* PROGRAMS — BENTO */}
      <SectionWrapper background="white">
        <SectionHeading label="Programs" title="What We Offer" subtitle="From startup incubation to skill development, our programs support every stage of your entrepreneurial journey." />
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {/* LaunchPad — large featured tile */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="col-span-2 lg:col-span-2 row-span-2">
            <div className="relative overflow-hidden h-full min-h-[260px] rounded-3xl bg-gradient-to-br from-primary via-orange-500 to-amber-400 p-8 flex flex-col justify-between">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.15),transparent_60%)]" />
              <div>
                <span className="inline-block text-[10px] font-black uppercase tracking-widest bg-white/20 text-white px-3 py-1 rounded-full mb-4 backdrop-blur-sm">{featuredPrograms[0].badge}</span>
                <h3 className="text-3xl font-black text-white mb-2">{featuredPrograms[0].title}</h3>
                <p className="text-white/80 text-sm font-semibold mb-2">{featuredPrograms[0].tagline}</p>
                <p className="text-white/70 text-sm leading-relaxed max-w-md">{featuredPrograms[0].desc}</p>
              </div>
              <div className="mt-6">
                <CTAButton href="/programs" variant="secondary" size="sm">Learn More</CTAButton>
              </div>
            </div>
          </motion.div>
          {/* 5 smaller program tiles */}
          {featuredPrograms.slice(1).map((prog, i) => (
            <motion.div key={prog.id} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="col-span-1">
              <div className="h-full min-h-[120px] rounded-3xl p-5 bg-white border border-neutral-100 shadow-soft hover:shadow-soft-lg hover:-translate-y-0.5 hover:border-primary/20 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-bold text-neutral-900 mb-1">{prog.title}</h3>
                  <p className="text-[11px] text-primary font-semibold mb-2">{prog.tagline}</p>
                  <p className="text-[11px] text-neutral-400 leading-relaxed">{prog.desc}</p>
                </div>
                <CTAButton href="/programs" variant="ghost" size="sm" icon={false} className="mt-3 text-xs">Learn More →</CTAButton>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-8">
          <CTAButton href="/programs" variant="ghost">View All Programs</CTAButton>
        </div>
      </SectionWrapper>

      {/* STARTUP PORTFOLIO — BENTO GRID */}
      <SectionWrapper background="light">
        <SectionHeading label="Portfolio" title="Startups We've Incubated" subtitle="Innovative student startups solving real-world problems across multiple industries." />

        <div className="grid grid-cols-2 lg:grid-cols-4 grid-rows-[auto] gap-4">

          {/* Tile 1 — Large hero (col-span-2, row-span-2) */}
          {startups[0] && (
            <TiltCard initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="col-span-2 row-span-2">
              <div className="relative h-full min-h-[280px] rounded-3xl overflow-hidden bg-gradient-to-br from-primary to-orange-400 p-8 flex flex-col justify-between group cursor-pointer hover:shadow-xl transition-shadow duration-300">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.15),transparent_60%)]" />
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <span className="text-white font-black text-2xl">{startups[0].name.charAt(0)}</span>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest bg-white/20 text-white px-3 py-1.5 rounded-full backdrop-blur-sm">{startups[0].stage}</span>
                  </div>
                  <h3 className="text-2xl font-black text-white mb-1">{startups[0].name}</h3>
                  <p className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-3">{startups[0].sector}</p>
                  <p className="text-white/80 text-sm leading-relaxed">{startups[0].description}</p>
                </div>
                <div className="flex items-center gap-2 mt-6">
                  <span className="text-xs text-white/60">Founded by</span>
                  <span className="text-xs font-semibold text-white">{startups[0].founders}</span>
                </div>
              </div>
            </TiltCard>
          )}

          {/* Tile 2 — Tall right (row-span-2) */}
          {startups[1] && (
            <TiltCard initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="col-span-1 row-span-2">
              <div className="relative h-full min-h-[280px] rounded-3xl bg-neutral-900 p-6 flex flex-col justify-between group cursor-pointer hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center mb-5">
                    <span className="text-primary font-black text-xl">{startups[1].name.charAt(0)}</span>
                  </div>
                  <span className={`inline-block text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full mb-3 ${
                    startups[1].stage === "Growth" ? "bg-green-900/50 text-green-400" : "bg-blue-900/50 text-blue-400"
                  }`}>{startups[1].stage}</span>
                  <h3 className="text-lg font-bold text-white mb-1">{startups[1].name}</h3>
                  <p className="text-primary text-xs font-semibold mb-3">{startups[1].sector}</p>
                  <p className="text-neutral-400 text-xs leading-relaxed">{startups[1].description}</p>
                </div>
                <p className="text-[10px] text-neutral-500 mt-4">{startups[1].founders}</p>
              </div>
            </TiltCard>
          )}

          {/* Tile 3 — Stat banner (col-span-1) */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="col-span-1">
            <div className="h-full min-h-[130px] rounded-3xl bg-white border border-neutral-100 shadow-soft p-5 flex flex-col justify-center items-center text-center">
              <p className="text-3xl font-black text-primary font-[var(--font-heading)]"><Counter value="100+" /></p>
              <p className="text-xs text-neutral-400 mt-1 font-medium">Startups Incubated</p>
            </div>
          </motion.div>

          {/* Tiles 4-8 — Small cards */}
          {startups.slice(2, 7).map((startup, i) => (
            <motion.div key={startup.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 + i * 0.08 }}
              className="col-span-1">
              <div className={`h-full min-h-[130px] rounded-3xl p-5 border flex flex-col justify-between group cursor-pointer hover:shadow-soft-lg hover:-translate-y-0.5 transition-all duration-300 ${
                i === 1 ? "bg-primary-50 border-primary/10" : "bg-white border-neutral-100 shadow-soft"
              }`}>
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${i === 1 ? "bg-primary/10" : "bg-neutral-100"}`}>
                    <span className={`font-black text-base ${i === 1 ? "text-primary" : "text-neutral-600"}`}>{startup.name.charAt(0)}</span>
                  </div>
                  <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                    startup.stage === "MVP" ? "bg-blue-100 text-blue-700" : startup.stage === "Growth" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"
                  }`}>{startup.stage}</span>
                </div>
                <div>
                  <h3 className="font-bold text-neutral-900 text-sm">{startup.name}</h3>
                  <p className={`text-[10px] font-semibold mt-0.5 ${i === 1 ? "text-primary" : "text-neutral-400"}`}>{startup.sector}</p>
                </div>
              </div>
            </motion.div>
          ))}

        </div>

        <div className="text-center mt-8">
          <CTAButton href="/startups" variant="outline">View All Startups</CTAButton>
        </div>
      </SectionWrapper>


      {/* EVENTS — BENTO */}
      <SectionWrapper background="white">
        <SectionHeading label="Events" title="Upcoming Events" subtitle="Engage with workshops, hackathons, and networking opportunities designed to accelerate your growth." />
        <div className="grid lg:grid-cols-2 gap-4">
          {/* Left — featured large event */}
          {upcomingEvents[0] && (() => {
            const d = new Date(upcomingEvents[0].date);
            const catColors = {
              Hackathon: "bg-purple-900/50 text-purple-300",
              Networking: "bg-blue-900/50 text-blue-300",
              Workshop: "bg-green-900/50 text-green-300",
            };
            return (
              <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
                <div className="relative h-full min-h-[300px] rounded-3xl bg-neutral-900 p-8 flex flex-col justify-between overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full -translate-y-1/3 translate-x-1/3 blur-2xl" />
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="bg-primary text-white rounded-2xl px-3 py-2 text-center">
                        <span className="block text-2xl font-black leading-none font-[var(--font-heading)]">{d.getDate()}</span>
                        <span className="text-[10px] font-semibold uppercase opacity-80">{d.toLocaleString("default", { month: "short" })}</span>
                      </div>
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${catColors[upcomingEvents[0].category] || "bg-neutral-700 text-neutral-300"}`}>
                        {upcomingEvents[0].category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-black text-white mb-3 font-[var(--font-heading)]">{upcomingEvents[0].title}</h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">{upcomingEvents[0].description}</p>
                  </div>
                  <CTAButton href="/programs#events" size="sm" className="mt-6 w-fit">Register Now</CTAButton>
                </div>
              </motion.div>
            );
          })()}

          {/* Right — 2×2 compact grid */}
          <div className="grid grid-cols-2 gap-4">
            {upcomingEvents.slice(1, 5).map((event, i) => {
              const d = new Date(event.date);
              const catColors = {
                Hackathon: "bg-purple-100 text-purple-700",
                Networking: "bg-blue-100 text-blue-700",
                Workshop: "bg-green-100 text-green-700",
              };
              return (
                <motion.div key={event.id} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i + 1) * 0.08 }}>
                  <div className="h-full min-h-[130px] rounded-3xl bg-white border border-neutral-100 shadow-soft p-5 hover:shadow-soft-lg hover:-translate-y-0.5 hover:border-primary/20 transition-all duration-300 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="bg-primary/10 text-primary rounded-xl px-2 py-1 text-center">
                          <span className="block text-base font-black leading-none font-[var(--font-heading)]">{d.getDate()}</span>
                          <span className="text-[8px] font-bold uppercase">{d.toLocaleString("default", { month: "short" })}</span>
                        </div>
                        <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${catColors[event.category] || "bg-neutral-100 text-neutral-600"}`}>
                          {event.category}
                        </span>
                      </div>
                      <h3 className="text-sm font-bold text-neutral-900 leading-snug line-clamp-2 font-[var(--font-heading)]">{event.title}</h3>
                    </div>
                    <p className="text-[10px] text-primary font-semibold mt-2 hover:underline cursor-pointer">Details →</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
        <div className="text-center mt-8">
          <CTAButton href="/programs#events" variant="outline">View All Events</CTAButton>
        </div>
      </SectionWrapper>


      {/* TESTIMONIALS */}
      <SectionWrapper background="light">
        <SectionHeading label="Testimonials" title="What Our Community Says" subtitle="Hear from founders and mentors who are part of the PU-iNCENT ecosystem." />
        <TestimonialSlider testimonials={testimonials} />
      </SectionWrapper>

      {/* CTA — SPLIT CARD */}
      <section className="py-12 lg:py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-neutral-900 grid lg:grid-cols-2">
            {/* Decorative */}
            <div className="absolute top-0 left-1/2 w-96 h-96 bg-primary/10 rounded-full -translate-y-1/2 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full translate-y-1/2 blur-2xl pointer-events-none" />
            {/* Left — copy */}
            <div className="relative z-10 p-10 lg:p-14 flex flex-col justify-center">
              <span className="inline-block bg-primary/20 text-primary text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6 w-fit">Ready to Begin?</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-[var(--font-heading)] leading-tight mb-5">
                Launch Your Startup<br />
                <span className="text-primary">at PU-iNCENT</span>
              </h2>
              <p className="text-neutral-400 text-base leading-relaxed mb-8 max-w-md">
                Join a high-growth startup incubation ecosystem and get access to mentorship, funding, and opportunities to build scalable ventures.
              </p>
              <div className="flex flex-wrap gap-4">
                <CTAButton href="/apply" size="lg">Apply Now</CTAButton>
                <CTAButton href="/contact" variant="outline-white" size="lg">Contact Us</CTAButton>
              </div>
            </div>
            {/* Right — stats grid */}
            <div className="relative z-10 p-10 lg:p-14 grid grid-cols-2 gap-4 content-center border-t lg:border-t-0 lg:border-l border-white/10">
              {[
                { val: "100+", label: "Startups Incubated" },
                { val: "50+", label: "Mentors & Experts" },
                { val: "₹5Cr+", label: "Funding Raised" },
                { val: "300+", label: "Events Conducted" },
              ].map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="bg-white/5 rounded-2xl p-5 border border-white/10 hover:border-primary/30 transition-colors duration-300">
                  <p className="text-3xl font-black text-primary font-[var(--font-heading)] mb-1"><Counter value={s.val} /></p>
                  <p className="text-xs text-neutral-400 font-medium">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

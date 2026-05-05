"use client";

import { motion } from "framer-motion";
import {
  Rocket,
  Users,
  GraduationCap,
  Handshake,
  ArrowUpRight,
  Target,
  Zap,
  CheckCircle2,
  ChevronRight,
  MessageSquare
} from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";
import HeroParticles from "@/components/HeroParticles";

const applyOptions = [
  {
    id: "launchpad",
    title: "Apply for LaunchPad",
    desc: "Our flagship startup incubation program designed to help student founders build, validate, and scale their startups with mentorship, funding support, and investor access.",
    icon: Rocket,
    color: "bg-primary/20 text-primary",
    link: "mailto:incent@poornima.edu.in?subject=LaunchPad Application",
    tag: "Applications Open",
    featured: true
  },
  {
    id: "mentor",
    title: "Become a Mentor",
    desc: "Join our mentor network and guide early-stage startups with your expertise. Flexible engagement with meaningful impact in the startup ecosystem.",
    icon: GraduationCap,
    color: "bg-blue-50 text-blue-600",
    link: "mailto:incent@poornima.edu.in?subject=Mentor Application",
    tag: "Seeking Mentors",
    featured: false
  },
  {
    id: "community",
    title: "Join the Community",
    desc: "Access events, curated resources, and networking opportunities within the ecosystem.",
    icon: Users,
    color: "bg-purple-50 text-purple-600",
    link: "mailto:incent@poornima.edu.in?subject=Community Join Request",
    tag: "Always Open",
    featured: false
  },
  {
    id: "partner",
    title: "Partner With Us",
    desc: "Collaborate to support student entrepreneurship through resources or funding.",
    icon: Handshake,
    color: "bg-amber-50 text-amber-600",
    link: "/partners/join",
    tag: "Open Now",
    featured: false
  }
];

export default function ApplyPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative py-16 lg:py-24 overflow-hidden" style={{ background: "linear-gradient(135deg, #fff5eb 0%, #fff9f5 40%, #ffffff 100%)" }}>
        <HeroParticles />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-20 animate-float-slow" style={{ background: "radial-gradient(circle, #FF6B00 0%, transparent 70%)", transform: "translate(30%, -30%)" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center lg:text-left">
          <div className="max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="inline-block bg-primary/20 text-primary text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">Get Involved</span>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black font-[var(--font-heading)] text-neutral-900 leading-tight mb-6">
                Start Your Journey <br />
                <span className="text-primary text-glow-primary">With PU-iNCENT.</span>
              </h1>
              <p className="text-xl text-neutral-500 leading-relaxed mb-8 max-w-2xl">
                Join PU-iNCENT, Poornima University’s leading startup incubation center, and take the next step in your entrepreneurial journey—whether you are building a startup, mentoring founders, or contributing to a growing innovation ecosystem.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <CTAButton href="#tracks" size="lg">Explore All Tracks</CTAButton>
                <CTAButton href="/contact" variant="outline-white" size="lg">Ask a Question</CTAButton>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TRACKS BENTO */}
      <SectionWrapper id="tracks" background="white">
        <SectionHeading
          label="The Tracks"
          title="Choose Your Path"
          subtitle="Select the option that best aligns with your goals, experience level, and stage in the startup journey."
        />

        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          {applyOptions.map((opt, i) => {
            const isFeatured = opt.featured;
            const colSpan = isFeatured ? "md:col-span-4" : (i === 1 ? "md:col-span-2" : "md:col-span-3");

            return (
              <motion.div
                key={opt.id}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className={`${colSpan} rounded-3xl p-8 lg:p-10 flex flex-col justify-between group transition-all duration-500 border ${isFeatured
                    ? "bg-neutral-900 text-white border-neutral-800"
                    : "bg-neutral-50 text-neutral-900 border-neutral-100 hover:bg-white hover:shadow-soft-lg hover:border-primary/20"
                  }`}
              >
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 ${isFeatured ? "bg-primary text-white" : "bg-white shadow-soft text-primary"
                      }`}>
                      <opt.icon className="w-7 h-7" />
                    </div>
                    <span className={`inline-flex items-center text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${isFeatured ? "bg-green-500/20 text-green-400" : "bg-primary/10 text-primary"
                      }`}>
                      {opt.tag}
                    </span>
                  </div>

                  <h3 className={`text-2xl lg:text-3xl font-black font-[var(--font-heading)] mb-4 ${isFeatured ? "text-white" : "text-neutral-900"}`}>
                    {opt.title}
                  </h3>
                  <p className={`text-base leading-relaxed mb-8 max-w-lg ${isFeatured ? "text-white/50" : "text-neutral-500"}`}>
                    {opt.desc}
                  </p>
                </div>

                <div className="relative z-10 pt-6 border-t border-neutral-100/10 flex items-center justify-between">
                  <CTAButton
                    href={opt.link}
                    variant={isFeatured ? "primary" : "outline"}
                    size="md"
                    className="w-full sm:w-auto"
                  >
                    Apply Now
                  </CTAButton>
                  <ArrowUpRight className={`w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 ${isFeatured ? "text-primary" : "text-neutral-300"}`} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </SectionWrapper>

      {/* PROCESS BENTO */}
      <SectionWrapper background="light">
        <div className="grid lg:grid-cols-3 gap-4">
          {/* Main Process */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-10 lg:p-12 border border-neutral-100 shadow-soft">
            <SectionHeading
              label="The Flow"
              title="How It Works"
              align="left"
              subtitle="A streamlined process to join the PU-iNCENT startup incubation ecosystem."
            />

            <div className="space-y-8 mt-12">
              {[
                { step: "01", title: "Choose Your Path", desc: "Select the program or role that best fits your goals." },
                { step: "02", title: "Submit Details", desc: "Share your pitch, expertise, or proposal via our secure channel." },
                { step: "03", title: "Review & Connect", desc: "Our team reviews your application and reaches out within 5 business days." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 font-black text-lg group-hover:bg-primary group-hover:text-white transition-all">
                    {item.step}
                  </div>
                  <div className="pt-2">
                    <h4 className="text-xl font-bold text-neutral-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-neutral-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Side Support Info */}
          <div className="flex flex-col gap-4">
            <div className="bg-neutral-900 rounded-3xl p-8 text-white flex-1 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
              <Zap className="w-8 h-8 text-primary mb-6" />
              <h4 className="text-xl font-black font-[var(--font-heading)] mb-2">Fast-Track</h4>
              <p className="text-sm text-white/50 leading-relaxed">
                Already have an MVP or validated startup idea? Highlight it in your application to get priority review.
              </p>
            </div>

            <div className="bg-primary rounded-3xl p-8 text-white flex-1 relative overflow-hidden group">
              <MessageSquare className="w-8 h-8 text-white/40 mb-6" />
              <h4 className="text-xl font-black font-[var(--font-heading)] mb-2">Need Help?</h4>
              <p className="text-white/80 text-sm leading-relaxed mb-6">
                Not sure which track is right for you? Connect with our startup advisors for guidance.
              </p>
              <a href="/contact" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white hover:gap-3 transition-all">
                Contact Desk <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* FINAL TRUST SECTION */}
      <SectionWrapper background="white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 rounded-3xl bg-neutral-50 border border-neutral-100 flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-neutral-900 font-[var(--font-heading)] mb-6">Your Data is Safe.</h2>
          <p className="text-lg text-neutral-500 leading-relaxed mb-10 max-w-2xl mx-auto">
            All applications are handled with strict confidentiality. Your intellectual property and personal information are protected under secure university data privacy protocols.
          </p>
          <div className="flex justify-center gap-8 text-neutral-400">
            <div className="flex items-center gap-2">
              <Target className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-widest">Secure Submission</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-widest">Founder-First Policy</span>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}

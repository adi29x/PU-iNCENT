"use client";

import { motion } from "framer-motion";
import { 
  Handshake, 
  Users, 
  Lightbulb, 
  Zap, 
  ShieldCheck, 
  BarChart3, 
  Phone, 
  Mail, 
  ArrowRight, 
  CheckCircle2, 
  FileText, 
  Briefcase
} from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";
import HeroParticles from "@/components/HeroParticles";

const benefits = [
  {
    title: "Access to Innovation",
    desc: "Gain early access to high-potential, student-led startups and innovative business ideas emerging from Poornima University’s incubation programs.",
    icon: Lightbulb,
    color: "bg-amber-50 text-amber-600",
    size: "lg"
  },
  {
    title: "Direct Talent Pipeline",
    desc: "Connect with skilled student entrepreneurs and innovators for internships, hiring, and collaborative startup projects.",
    icon: Users,
    color: "bg-blue-50 text-blue-600",
    size: "sm"
  },
  {
    title: "Brand Exposure",
    desc: "Increase your brand visibility through campus activations, digital platforms, and major startup events such as Demo Days, hackathons, and incubation programs.",
    icon: Zap,
    color: "bg-purple-50 text-purple-600",
    size: "sm"
  },
  {
    title: "Social Impact & CSR",
    desc: "Support youth entrepreneurship, innovation, and skill development while aligning with your organization’s CSR and social impact initiatives.",
    icon: ShieldCheck,
    color: "bg-green-50 text-green-600",
    size: "sm"
  },
  {
    title: "Industry Networking",
    desc: "Engage with a strong network of 50+ partners, including government bodies, startup programs, investors, and leading industry organizations.",
    icon: BarChart3,
    color: "bg-rose-50 text-rose-600",
    size: "sm"
  }
];

const partnershipTracks = [
  {
    title: "Strategic Partner",
    desc: "Deep integration with our programs and ecosystem, enabling long-term impact on campus innovation.",
    perks: ["Naming rights for cohorts", "Dedicated Demo Day opportunities", "Advisory or board-level involvement"]
  },
  {
    title: "Technology Partner",
    desc: "Enable startups with your tools, platforms, or cloud infrastructure to accelerate product development.",
    perks: ["Tool integration workshops", "Exclusive platform access", "Technical mentorship opportunities"]
  },
  {
    title: "Resource Partner",
    desc: "Provide specialized support such as legal, financial, or marketing services to early-stage startups.",
    perks: ["Service visibility within ecosystem", "Direct engagement with founders", "Opportunities for guest sessions and workshops"]
  }
];

export default function BecomePartnerPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative py-16 lg:py-24 overflow-hidden" style={{ background: "linear-gradient(135deg, #fff5eb 0%, #fff9f5 40%, #ffffff 100%)" }}>
        <HeroParticles />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-20 animate-float-slow" style={{ background: "radial-gradient(circle, #FF6B00 0%, transparent 70%)", transform: "translate(30%, -30%)" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center lg:text-left">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="inline-block bg-primary/20 text-primary text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">Become a Partner</span>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black font-[var(--font-heading)] text-neutral-900 leading-tight mb-6">
                Let&apos;s Build the Future <br />
                <span className="text-primary">Together.</span>
              </h1>
              <p className="text-xl text-neutral-500 leading-relaxed mb-8 max-w-2xl">
                Partner with PU-iNCENT, Poornima University&apos;s leading startup incubation center, to empower student innovators, access high-potential startup talent, and position your brand at the core of Rajasthan&apos;s fast-growing startup ecosystem.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <CTAButton href="mailto:incent@poornima.edu.in" size="lg">Send Proposal</CTAButton>
                <CTAButton href="#contact" variant="outline" size="lg">Talk to Us</CTAButton>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BENEFITS BENTO */}
      <SectionWrapper background="white">
        <SectionHeading 
          label="Value Proposition" 
          title="Why Partner With Us?" 
          subtitle="A partnership with PU-iNCENT—one of Rajasthan’s emerging university incubation centers—offers direct access to innovation, entrepreneurial talent, and a rapidly growing startup ecosystem." 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          {benefits.map((benefit, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className={`${benefit.size === "lg" ? "md:col-span-4" : "md:col-span-2"} rounded-3xl bg-neutral-50 border border-neutral-100 p-8 lg:p-10 flex flex-col justify-between hover:shadow-soft-lg hover:border-primary/20 transition-all duration-300 group min-h-[240px]`}
            >
              <div className={`w-14 h-14 rounded-2xl ${benefit.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <benefit.icon className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-neutral-900 font-[var(--font-heading)] mb-3 leading-tight">{benefit.title}</h3>
                <p className="text-base text-neutral-500 leading-relaxed max-w-lg">{benefit.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>


      {/* T&C + CONTACT BENTO */}
      <SectionWrapper id="contact">
        <div className="grid lg:grid-cols-3 gap-4">
          {/* Partnership Desk Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="lg:col-span-2 rounded-3xl bg-neutral-50 border border-neutral-100 p-8 lg:p-12 flex flex-col justify-center"
          >
            <div className="max-w-2xl">
              <span className="inline-block bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">Partnership Desk</span>
              <h2 className="text-4xl lg:text-5xl font-black text-neutral-900 font-[var(--font-heading)] mb-6 leading-tight">
                Let&apos;s Talk About <br />
                <span className="text-primary">Strategic Growth.</span>
              </h2>
              <p className="text-lg text-neutral-500 leading-relaxed mb-10">
                Our team is available to explore customized startup partnership opportunities aligned with your organization&apos;s growth and innovation goals.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-6 rounded-3xl bg-white shadow-soft border border-neutral-100 group hover:border-primary/20 transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                    <Phone className="w-5 h-5 text-primary group-hover:text-white" />
                  </div>
                  <p className="text-[9px] font-bold text-neutral-400 uppercase tracking-widest mb-1">Contact Person</p>
                  <p className="text-lg font-black text-neutral-900 leading-tight">Aman Nehra</p>
                  <p className="text-sm text-neutral-500 font-bold mt-1">Team Leader – Corporate Relations</p>
                  <p className="text-sm text-neutral-500 font-semibold mt-0.5">+91 90796 57236</p>
                </div>
                
                <div className="p-6 rounded-3xl bg-white shadow-soft border border-neutral-100 group hover:border-blue-600/20 transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                    <Mail className="w-5 h-5 text-blue-600 group-hover:text-white" />
                  </div>
                  <p className="text-[9px] font-bold text-neutral-400 uppercase tracking-widest mb-1">Email Proposals</p>
                  <p className="text-lg font-black text-neutral-900 leading-tight">ecell.incent@poornima.edu.in</p>
                  <p className="text-sm text-neutral-500 font-semibold mt-1">Response within 48 hours</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* T&C Bento Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="lg:col-span-1 bg-neutral-900 rounded-3xl p-8 lg:p-10 text-white relative overflow-hidden flex flex-col justify-between group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-10 group-hover:border-primary/50 transition-all">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-black font-[var(--font-heading)] mb-6">Terms of <br />Engagement</h3>
              <p className="text-base text-white/50 leading-relaxed font-medium">
                All partnership terms and conditions will be <span className="text-white underline underline-offset-4 decoration-primary">mutually defined</span> based on the scope, collaboration model, and strategic objectives.
              </p>
            </div>
            
            <div className="relative z-10 mt-12 pt-8 border-t border-white/10">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  <span className="text-[9px] font-bold text-white/40 uppercase tracking-widest">Mutual Agreement</span>
                </div>
                <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
              </div>
              <p className="text-[10px] text-white/30 font-medium">Standard partnership agreements can be shared upon proposal review and discussion.</p>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>
    </>
  );
}

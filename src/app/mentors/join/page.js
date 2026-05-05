"use client";

import { motion } from "framer-motion";
import { 
  Users, 
  GraduationCap, 
  TrendingUp, 
  Star, 
  Zap, 
  ShieldCheck, 
  ArrowRight,
  Target,
  MessageSquare,
  Award,
  Globe,
  CheckCircle2
} from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";

const benefits = [
  {
    title: "Access to Innovation",
    desc: "Get early access to high-potential student startups and fresh perspectives on emerging technologies.",
    icon: Zap,
    color: "bg-amber-50 text-amber-600"
  },
  {
    title: "Elite Network",
    desc: "Join a curated group of 100+ industry leaders, serial entrepreneurs, and venture capitalists.",
    icon: Users,
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Institutional Recognition",
    desc: "Receive official recognition as a 'Knowledge Partner' of Poornima University and PU-iNCENT.",
    icon: Award,
    color: "bg-purple-50 text-purple-600"
  },
  {
    title: "Meaningful Impact",
    desc: "Play a pivotal role in shaping the next generation of founders and solving real-world problems.",
    icon: Heart,
    color: "bg-rose-50 text-rose-600"
  }
];

const mentorTracks = [
  {
    id: "strategic",
    title: "Strategic Advisor",
    desc: "Guide founders on business modeling, go-to-market strategy, and long-term scaling.",
    focus: ["Business Model Canvas", "Market Entry", "Scaling Operations"]
  },
  {
    id: "technical",
    title: "Domain Expert",
    desc: "Provide deep-dive technical guidance on AI, Blockchain, Hardware, or specific industry verticals.",
    focus: ["Product Roadmap", "Tech Stack", "System Architecture"]
  },
  {
    id: "funding",
    title: "Investor/Pitch Mentor",
    desc: "Help startups refine their pitch decks and prepare for fundraising rounds and demo days.",
    focus: ["Pitch Deck Polish", "Valuation", "Investor Relations"]
  }
];

export default function BecomeAMentorPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative py-16 lg:py-24 overflow-hidden bg-neutral-900">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center lg:text-left">
          <div className="max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="inline-block bg-primary/20 text-primary text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">Mentorship</span>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black font-[var(--font-heading)] text-white leading-tight mb-6">
                Share Your Wisdom. <br />
                <span className="text-primary text-glow-primary">Shape the Future.</span>
              </h1>
              <p className="text-xl text-neutral-400 leading-relaxed mb-8 max-w-2xl">
                Join PU-iNCENT as a mentor to guide the next generation of student-led ventures. Your expertise can be the catalyst that transforms a campus project into a global startup.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <CTAButton href="mailto:incent@poornima.edu.in?subject=Mentor Application" size="lg">Apply to Mentor</CTAButton>
                <CTAButton href="#expectations" variant="outline-white" size="lg">Our Process</CTAButton>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY MENTOR BENTO */}
      <SectionWrapper background="white">
        <SectionHeading 
          label="The Value" 
          title="Why Mentor With Us?" 
          subtitle="Mentorship at PU-iNCENT is a mutually rewarding experience that connects you with future leaders." 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {benefits.map((benefit, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="rounded-3xl bg-neutral-50 border border-neutral-100 p-8 hover:shadow-soft-lg hover:border-primary/20 transition-all duration-300 group"
            >
              <div className={`w-12 h-12 rounded-2xl ${benefit.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <benefit.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 font-[var(--font-heading)] mb-2">{benefit.title}</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* MENTOR TRACKS BENTO */}
      <SectionWrapper background="light">
        <SectionHeading 
          label="The Tracks" 
          title="Ways to Contribute" 
          subtitle="Choose a mentorship track that aligns with your expertise and availability." 
        />
        
        <div className="grid lg:grid-cols-3 gap-6">
          {mentorTracks.map((track, i) => (
            <motion.div 
              key={track.id} 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="rounded-[2.5rem] bg-white p-10 border border-neutral-100 shadow-soft hover:shadow-soft-lg transition-all group"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="text-[10px] font-bold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full">
                  Track {i + 1}
                </span>
                <ChevronRight className="w-5 h-5 text-neutral-200 group-hover:text-primary transition-transform group-hover:translate-x-1" />
              </div>
              <h3 className="text-2xl font-black text-neutral-900 font-[var(--font-heading)] mb-4">{track.title}</h3>
              <p className="text-sm text-neutral-500 leading-relaxed mb-8">{track.desc}</p>
              
              <div className="space-y-3">
                <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-4">Core Focus Areas</p>
                {track.focus.map((item, j) => (
                  <div key={j} className="flex items-center gap-3">
                    <ShieldCheck className="w-4 h-4 text-green-500" />
                    <span className="text-xs font-bold text-neutral-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* EXPECTATIONS BENTO */}
      <SectionWrapper id="expectations">
        <div className="grid lg:grid-cols-3 gap-4">
          {/* Main Expectations */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="lg:col-span-2 rounded-3xl bg-neutral-900 p-10 lg:p-12 text-white relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="relative z-10">
              <h3 className="text-3xl font-black font-[var(--font-heading)] mb-8">Mentorship <br /><span className="text-primary text-glow-primary">Commitment.</span></h3>
              <div className="grid sm:grid-cols-2 gap-10">
                <div>
                  <h4 className="text-lg font-bold mb-4">Time Commitment</h4>
                  <ul className="space-y-4">
                    {[
                      "1-2 hours of monthly 1-on-1 sessions",
                      "Occasional guest lectures or workshops",
                      "As-needed strategic advisory via email/chat",
                      "Participation in annual Demo Day"
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3 text-sm text-white/50">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-4">Who we seek</h4>
                  <ul className="space-y-4">
                    {[
                      "Experienced startup founders",
                      "Venture Capitalists & Angel Investors",
                      "Industry specialists (AI, Fintech, etc.)",
                      "Functional experts (Legal, HR, Marketing)"
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3 text-sm text-white/50">
                        <Star className="w-5 h-5 text-primary flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Apply / Support */}
          <div className="flex flex-col gap-4">
            <motion.div 
              initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="bg-neutral-50 rounded-3xl p-8 border border-neutral-100 flex-1 flex flex-col justify-between group"
            >
              <div>
                <MessageSquare className="w-8 h-8 text-primary mb-6" />
                <h4 className="text-xl font-black text-neutral-900 font-[var(--font-heading)] mb-2">Have Questions?</h4>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  Connect with our Program Manager to discuss how your expertise can fit into our ecosystem.
                </p>
              </div>
              <a href="mailto:incent@poornima.edu.in" className="inline-flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-widest mt-8 hover:gap-3 transition-all">
                Program Desk <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="bg-primary rounded-3xl p-8 text-white flex-1 relative overflow-hidden"
            >
              <Globe className="w-8 h-8 text-white/40 mb-6" />
              <h4 className="text-xl font-black font-[var(--font-heading)] mb-2">Global Network</h4>
              <p className="text-white/80 text-sm leading-relaxed">
                Mentor remotely or in-person. Our startups are building for the world.
              </p>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* FINAL CTA */}
      <SectionWrapper background="white">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="rounded-3xl bg-neutral-900 p-10 lg:p-16 relative overflow-hidden text-center lg:text-left flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-xl">
            <h2 className="text-3xl lg:text-5xl font-black text-white font-[var(--font-heading)] mb-4">Start Your <br /><span className="text-primary">Mentorship Journey.</span></h2>
            <p className="text-white/50 text-lg leading-relaxed">
              Join a community of 100+ experts and help us build Rajasthan&apos;s most innovative startups.
            </p>
          </div>
          <div className="relative z-10 flex-shrink-0">
            <CTAButton href="mailto:incent@poornima.edu.in?subject=Mentor Application" size="lg">Apply to Mentor</CTAButton>
          </div>
        </motion.div>
      </SectionWrapper>
    </>
  );
}

// Simple icons since I missed some
function Heart(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}

function ChevronRight(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}

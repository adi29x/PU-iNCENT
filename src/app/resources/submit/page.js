"use client";

import { motion } from "framer-motion";
import { 
  Upload, 
  CheckCircle2, 
  FileText, 
  Zap, 
  ShieldCheck, 
  ArrowRight,
  Info,
  Mail,
  UserCheck
} from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";

const submissionSteps = [
  {
    title: "Draft Your Resource",
    desc: "Create a guide, template, or case study that offers clear, actionable insights and practical value.",
    icon: FileText,
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Submit for Review",
    desc: "Share your resource by submitting details along with a link (Google Drive, Notion, or PDF).",
    icon: Upload,
    color: "bg-primary/10 text-primary"
  },
  {
    title: "Curation & Review",
    desc: "Our editorial team evaluates submissions for quality, accuracy, and alignment with PU-iNCENT standards.",
    icon: ShieldCheck,
    color: "bg-green-50 text-green-600"
  },
  {
    title: "Published on Platform",
    desc: "Approved resources are featured in our library with proper contributor credits.",
    icon: Zap,
    color: "bg-purple-50 text-purple-600"
  }
];

export default function SubmitResourcePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative py-16 lg:py-24 overflow-hidden bg-neutral-900">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center lg:text-left">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="inline-block bg-primary/20 text-primary text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">Contribute</span>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black font-[var(--font-heading)] text-white leading-tight mb-6">
                Empower Others <br />
                <span className="text-primary text-glow-primary">With Knowledge.</span>
              </h1>
              <p className="text-xl text-neutral-400 leading-relaxed mb-8 max-w-2xl">
                Have a template, guide, or case study that helped you grow? Share it with the PU-iNCENT community and support the next generation of founders.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <CTAButton href="mailto:incent@poornima.edu.in" size="lg">Submit via Email</CTAButton>
                <CTAButton href="#guidelines" variant="outline-white" size="lg">Read Guidelines</CTAButton>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROCESS BENTO */}
      <SectionWrapper id="guidelines" background="white">
        <SectionHeading 
          label="The Process" 
          title="How to Contribute" 
          subtitle="We maintain high-quality standards to ensure every resource delivers meaningful value to student founders." 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {submissionSteps.map((step, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="rounded-3xl bg-neutral-50 border border-neutral-100 p-8 hover:shadow-soft-lg hover:border-primary/20 transition-all duration-300 group"
            >
              <div className={`w-12 h-12 rounded-2xl ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <step.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 font-[var(--font-heading)] mb-2">{step.title}</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* SUBMISSION INFO BENTO */}
      <SectionWrapper background="light">
        <div className="grid lg:grid-cols-3 gap-4">
          {/* Main Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="lg:col-span-2 rounded-3xl bg-white border border-neutral-100 p-8 lg:p-12 shadow-soft"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                <Info className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-2xl font-black text-neutral-900 font-[var(--font-heading)]">What We Accept</h3>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-sm font-bold text-neutral-400 uppercase tracking-widest">Formats</h4>
                <ul className="space-y-3">
                  {["Pitch Deck Templates", "Financial Models (Excel/Sheets)", "Go-To-Market Guides (Notion/PDF)", "Case Studies", "Legal & Compliance Checklists"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-semibold text-neutral-700">
                      <CheckCircle2 className="w-4 h-4 text-primary" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-sm font-bold text-neutral-400 uppercase tracking-widest">Quality Checklist</h4>
                <ul className="space-y-3">
                  {["Original content only", "Actionable and practical insights", "No promotional or sales-oriented material", "Clean, structured presentation", "Accurate and up-to-date information"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-semibold text-neutral-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Contact Bento Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="lg:col-span-1 bg-neutral-900 rounded-3xl p-8 lg:p-10 text-white relative overflow-hidden flex flex-col justify-between group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-black font-[var(--font-heading)] mb-4">Ready to <br />Contribute?</h3>
              <p className="text-base text-white/50 leading-relaxed font-medium">
                Submit your resource link or attachment directly to our editorial team for review.
              </p>
            </div>
            
            <div className="relative z-10 mt-12 pt-8 border-t border-white/10">
              <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-2">Primary Contact</p>
              <div className="flex items-center justify-between group/link cursor-pointer" onClick={() => window.location.href='mailto:incent@poornima.edu.in'}>
                <span className="text-sm font-bold text-white">incent@poornima.edu.in</span>
                <ArrowRight className="w-4 h-4 text-primary group-hover/link:translate-x-1 transition-transform" />
              </div>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* RECOGNITION */}
      <SectionWrapper>
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 rounded-3xl bg-primary/10 flex items-center justify-center mx-auto mb-8">
            <UserCheck className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-neutral-900 font-[var(--font-heading)] mb-6">Contributor Recognition</h2>
          <p className="text-lg text-neutral-500 leading-relaxed mb-10">
            Contributors receive visible credits on the resource page, access to our extended mentor network, and a “Knowledge Partner” recognition badge for their professional profile.
          </p>
          <CTAButton href="mailto:incent@poornima.edu.in" size="lg">Become a Contributor</CTAButton>
        </div>
      </SectionWrapper>
    </>
  );
}

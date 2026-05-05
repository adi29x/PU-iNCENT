"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Rocket, 
  BookOpen, 
  Trophy, 
  Users, 
  CheckCircle2, 
  ArrowRight,
  Zap,
  Target,
  ShieldCheck,
  Star,
  Globe,
  Calendar,
  MapPin,
  Clock,
  Filter,
  Share2,
  Bell
} from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";
import { programs } from "@/data/programs";
import { events, categoryColors } from "@/data/events";
import Counter from "@/components/Counter";
import HeroParticles from "@/components/HeroParticles";

const iconMap = { Rocket, BookOpen, Trophy, Users };

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const difference = +new Date(targetDate) - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          mins: Math.floor((difference / 1000 / 60) % 60),
          secs: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex gap-4">
      {Object.entries(timeLeft).map(([label, value]) => (
        <div key={label} className="text-center">
          <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-1 border border-white/10 group-hover:border-primary/50 transition-colors">
            <span className="text-lg lg:text-xl font-black text-white">{value}</span>
          </div>
          <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">{label}</span>
        </div>
      ))}
    </div>
  );
};

export default function ProgramsEventsPage() {
  const [tab, setTab] = useState("upcoming");
  const filteredEvents = events.filter((e) => e.type === tab);
  const nextMajorEvent = events[0];

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
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="inline-flex items-center gap-2 bg-white text-primary text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6 shadow-soft border border-primary/10">
                <Calendar className="w-3.5 h-3.5" /> Programs & Events
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black font-[var(--font-heading)] text-neutral-900 leading-tight mb-6">
                Engineered for <br />
                <span className="text-primary relative inline-block">
                  Founder Success
                </span>
              </h1>
              <p className="text-xl text-neutral-500 leading-relaxed mb-8 max-w-2xl">
                From structured startup incubation programs to high-impact entrepreneurship events, PU-iNCENT provides a complete ecosystem to transform your idea into a scalable startup.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <CTAButton href="#programs" size="lg">Explore Programs</CTAButton>
                <CTAButton href="#events" variant="outline" size="lg">View Events</CTAButton>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROGRAMS SECTION */}
      <SectionWrapper id="programs" background="white">
        <SectionHeading 
          label="The Tracks" 
          title="Incubation Programs" 
          subtitle="Structured startup incubation pathways designed to support founders at every stage of their entrepreneurial journey." 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          {programs.map((prog, i) => {
            const Icon = iconMap[prog.icon] || Rocket;
            const isLaunchPad = prog.id === "launchpad";
            const colSpan = isLaunchPad ? "md:col-span-4" : (i === 1 ? "md:col-span-2" : "md:col-span-3");
            
            return (
              <motion.div 
                key={prog.id} 
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className={`${colSpan} rounded-3xl p-8 lg:p-10 flex flex-col justify-between group transition-all duration-500 border ${
                  isLaunchPad 
                  ? "bg-neutral-900 text-white border-neutral-800" 
                  : "bg-neutral-50 text-neutral-900 border-neutral-100 hover:bg-white hover:shadow-soft-lg hover:border-primary/20"
                }`}
              >
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 ${
                      isLaunchPad ? "bg-primary text-white" : "bg-white shadow-soft text-primary"
                    }`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    {isLaunchPad && (
                      <span className="flex items-center gap-2 bg-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                        <Star className="w-3 h-3 fill-primary" /> Flagship
                      </span>
                    )}
                  </div>
                  
                  <h3 className={`text-2xl lg:text-3xl font-black font-[var(--font-heading)] mb-2 ${isLaunchPad ? "text-white" : "text-neutral-900"}`}>
                    {prog.title}
                  </h3>
                  <p className={`text-sm font-bold uppercase tracking-widest mb-4 ${isLaunchPad ? "text-primary" : "text-primary/70"}`}>
                    {prog.tagline}
                  </p>
                  <p className={`text-base leading-relaxed mb-8 max-w-lg ${isLaunchPad ? "text-white/50" : "text-neutral-500"}`}>
                    {prog.description}
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-y-3 mb-8">
                    {prog.features.slice(0, 4).map((f, j) => (
                      <div key={j} className="flex items-center gap-2">
                        <CheckCircle2 className={`w-4 h-4 flex-shrink-0 ${isLaunchPad ? "text-primary" : "text-primary/60"}`} />
                        <span className={`text-xs font-semibold ${isLaunchPad ? "text-white/70" : "text-neutral-700"}`}>{f}</span>
                      </div>
                    ))}
                  </div>
                  {isLaunchPad && (
                    <div className="mt-4 pt-8 border-t border-white/10">
                      <CTAButton 
                        href="https://forms.gle/impEMCFePibnUu2P6" 
                        variant="primary" 
                        size="md" 
                        external
                      >
                        Apply for LaunchPad
                      </CTAButton>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </SectionWrapper>

      {/* EVENTS SECTION */}
      <SectionWrapper id="events" background="light">
        <SectionHeading 
          label="Ecosystem" 
          title="Campus Events" 
          subtitle="From hackathons to investor meetups, participate in entrepreneurship events that drive innovation and startup growth within the PU-iNCENT ecosystem." 
        />

        {/* Featured Event - Only show if upcoming exists */}
        {nextMajorEvent && nextMajorEvent.type === "upcoming" ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-12">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="lg:col-span-2 rounded-[2.5rem] bg-neutral-900 p-8 lg:p-12 text-white relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="inline-flex items-center gap-2 bg-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                      <Star className="w-3 h-3 fill-primary" /> Upcoming Flagship
                    </span>
                    <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                  </div>
                  
                  <div className="grid lg:grid-cols-2 gap-8 items-start">
                    <div>
                      <h3 className="text-3xl lg:text-5xl font-black font-[var(--font-heading)] mb-4 group-hover:text-primary transition-colors">
                        {nextMajorEvent.title}
                      </h3>
                      <p className="text-white/50 text-lg leading-relaxed mb-8">
                        {nextMajorEvent.description}
                      </p>
                    </div>
                    <div className="flex justify-start lg:justify-end">
                      <CountdownTimer targetDate={nextMajorEvent.date} />
                    </div>
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-8 items-end pt-8 border-t border-white/5">
                  <div className="flex flex-wrap gap-6">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest leading-none mb-1">When</p>
                        <p className="text-sm font-bold">{new Date(nextMajorEvent.date).toLocaleDateString('en-US', { day: 'numeric', month: 'long' })}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest leading-none mb-1">Where</p>
                        <p className="text-sm font-bold">{nextMajorEvent.location}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-start sm:justify-end">
                    <CTAButton href={nextMajorEvent.registrationLink} variant="primary" size="lg" external>Register Now</CTAButton>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Event Stats */}
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="rounded-[2.5rem] bg-white border border-neutral-100 p-8 flex flex-col justify-between shadow-soft group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Trophy className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-2xl font-black text-neutral-900 font-[var(--font-heading)] mb-2">Event Impact</h4>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  Building a culture of innovation through shared experiences.
                </p>
              </div>
              
              <div className="space-y-4 mt-8">
                {[
                  { label: "Participants", val: "5000+", icon: Users },
                  { label: "Startups", val: "100+", icon: Rocket },
                  { label: "Teams", val: "100+", icon: Star },
                  { label: "Expert Mentors", val: "10+", icon: CheckCircle2 }
                ].map((s, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-neutral-50 flex items-center justify-center group-hover:bg-primary transition-colors">
                      <s.icon className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest leading-tight mb-0.5">{s.label}</p>
                      <p className="text-base font-black text-neutral-900 leading-none"><Counter value={s.val} /></p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        ) : null}

        {/* Tabbed Event Grid */}
        <div className="bg-white rounded-[2.5rem] p-4 lg:p-6 shadow-soft border border-neutral-100 mb-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="bg-neutral-50 p-1.5 rounded-[1.5rem] flex gap-1 w-full sm:w-auto">
              {["upcoming", "past"].map((t) => (
                <button 
                  key={t} 
                  onClick={() => setTab(t)} 
                  className={`flex-1 sm:flex-none px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all duration-300 ${tab === t ? "bg-white text-primary shadow-soft" : "text-neutral-400 hover:text-neutral-600"}`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredEvents.length > 0 ? (
              filteredEvents.slice(0, 6).map((event, i) => {
                const d = new Date(event.date);
                const colorClass = categoryColors[event.category] || "bg-neutral-100 text-neutral-600";
                
                return (
                  <motion.div 
                    key={event.id} 
                    layout
                    initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                    transition={{ delay: i * 0.05 }}
                    className="group h-full bg-white rounded-[2rem] border border-neutral-100 p-8 shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col"
                  >
                    <div className="flex items-start justify-between mb-8">
                      <div className="bg-neutral-50 rounded-2xl px-5 py-4 text-center border border-neutral-100 group-hover:bg-primary group-hover:border-primary transition-all shadow-sm">
                        <span className="block text-3xl font-black text-neutral-900 leading-none group-hover:text-white mb-1">{d.getDate()}</span>
                        <span className="text-[10px] font-bold text-neutral-400 uppercase group-hover:text-white/70 tracking-widest leading-none">{d.toLocaleString("default", { month: "short" })}</span>
                      </div>
                      <span className={`inline-flex items-center text-[9px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full ${colorClass}`}>
                        {event.category}
                      </span>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-black text-neutral-900 font-[var(--font-heading)] mb-3 leading-tight group-hover:text-primary transition-colors">
                        {event.title}
                      </h3>
                      <p className="text-sm text-neutral-500 leading-relaxed mb-8 line-clamp-3">
                        {event.description}
                      </p>
                    </div>

                    <div className="flex gap-3 mt-auto">
                      {event.type === "upcoming" ? (
                        <CTAButton href={event.registrationLink} variant="outline" size="md" className="flex-1 justify-center" external>
                          Register
                        </CTAButton>
                      ) : (
                        <div className="flex-1 text-center py-3 rounded-2xl bg-neutral-50 border border-neutral-100 text-[10px] font-black text-neutral-400 uppercase tracking-widest">
                          Completed
                        </div>
                      )}
                    </div>
                  </motion.div>
                )
              })
            ) : (
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="col-span-full py-20 text-center"
              >
                <div className="w-20 h-20 bg-neutral-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Bell className="w-10 h-10 text-neutral-200" />
                </div>
                <h3 className="text-2xl font-black text-neutral-900 mb-2">No {tab} events found</h3>
                <p className="text-neutral-500">Stay tuned for more updates from our ecosystem.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </SectionWrapper>

      {/* FINAL CTA */}
      <SectionWrapper background="white">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="rounded-[3rem] bg-neutral-900 p-10 lg:p-20 relative overflow-hidden text-center flex flex-col items-center justify-center"
        >
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="relative z-10 max-w-3xl">
            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-8 mx-auto">
              <Rocket className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl lg:text-6xl font-black text-white font-[var(--font-heading)] mb-6 leading-tight">
              Ready to Start <br /><span className="text-primary">Your Journey?</span>
            </h2>
            <p className="text-white/50 text-xl leading-relaxed mb-12">
              Join PU-iNCENT’s startup incubation ecosystem and gain access to world-class programs, mentorship, and entrepreneurship events designed for high-growth founders.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <CTAButton href="/apply" size="lg">Apply Now</CTAButton>
              <CTAButton href="/contact" variant="outline-white" size="lg">Contact Us</CTAButton>
            </div>
          </div>
        </motion.div>
      </SectionWrapper>
    </>
  );
}

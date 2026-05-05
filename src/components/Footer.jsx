import Link from "next/link";
import { Rocket, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  "Quick Links": [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Programs & Events", href: "/programs" },
    { name: "Startups", href: "/startups" },
  ],
  Community: [
    { name: "Team", href: "/community" },
    { name: "Resources", href: "/resources" },
    { name: "Partners", href: "/partners" },
  ],
  "Get Involved": [
    { name: "Apply for LaunchPad", href: "/programs" },
    { name: "Become a Mentor", href: "/apply" },
    { name: "Partner With Us", href: "/partners/join" },
  ],
};

const LiIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);
const IgIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
  </svg>
);
const YtIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M23 7s-.3-2-1.2-2.8c-1.1-1.2-2.4-1.2-3-1.3C16.3 2.8 12 2.8 12 2.8s-4.3 0-6.8.1c-.6.1-1.9.1-3 1.3C1.3 5 1 7 1 7S.7 9.1.7 11.2v2c0 2.1.3 4.2.3 4.2s.3 2 1.2 2.8c1.1 1.2 2.6 1.1 3.3 1.2C7.5 21.5 12 21.5 12 21.5s4.3 0 6.8-.2c.6-.1 1.9-.1 3-1.3.9-.8 1.2-2.8 1.2-2.8s.3-2.1.3-4.2v-2C23.3 9.1 23 7 23 7zm-13.5 8.5v-7l8 3.5-8 3.5z"/>
  </svg>
);

const socials = [
  { name: "LinkedIn", href: "https://www.linkedin.com/company/puincent/", Icon: LiIcon },
  { name: "Instagram", href: "https://www.instagram.com/pu_incent/", Icon: IgIcon },
  { name: "YouTube", href: "https://youtube.com/@puincent?si=oB8wGrt48zsXKDWk", Icon: YtIcon },
];

const VERSION = "1.0.0";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-neutral-300 relative border-t-4 border-primary mt-20 overflow-hidden">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-soft">
                <Rocket className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-2xl font-black text-white font-[var(--font-heading)] tracking-tight">PU-iNCENT</span>
                <p className="text-[10px] text-primary font-bold tracking-widest uppercase mt-0.5">Incubation Center</p>
              </div>
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed mb-8 max-w-sm">
              Poornima University Integrated Nodal Center for Entrepreneurship and Novel Technologies. Empowering student founders to transform ideas into impactful startups.
            </p>
            <div className="space-y-4 text-sm">
              <a href="mailto:incent@poornima.edu.in" className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors duration-200">
                <Mail className="w-4 h-4 text-primary" />
                incent@poornima.edu.in
              </a>
              <a href="tel:+919826054814" className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors duration-200">
                <Phone className="w-4 h-4 text-primary" />
                +91 98260 54814
              </a>
              <div className="flex items-start gap-3 text-neutral-400">
                <MapPin className="w-4 h-4 text-primary mt-1" />
                <span className="leading-relaxed">Room No. 147, Academic Block,<br />Poornima University, Jaipur — 302022</span>
              </div>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-3 mt-8">
              {socials.map(({ name, href, Icon }) => (
                <a key={name} href={href} aria-label={name} target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-neutral-400 hover:bg-primary hover:border-primary hover:text-white transition-all duration-300">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-black text-sm tracking-widest mb-6 font-[var(--font-heading)] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary inline-block" />
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href}
                      className="text-sm text-neutral-400 hover:text-primary transition-colors duration-200">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <p className="text-sm text-neutral-500">
              © {new Date().getFullYear()} PU-iNCENT, Poornima University. All rights reserved.
            </p>
            <span className="hidden sm:block text-neutral-700">|</span>
            <span className="text-xs text-neutral-400 font-mono bg-neutral-800 px-2 py-1 rounded-md">v{VERSION}</span>
          </div>
          <p className="text-sm text-neutral-500">
            Designed &amp; Developed by{" "}
            <a href="https://hexora.co.in/" target="_blank" rel="noopener noreferrer" className="text-white font-bold hover:text-primary transition-colors duration-200">
              Hexora
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

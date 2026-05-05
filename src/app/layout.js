import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import ScrollToTop from "@/components/ScrollToTop";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "PU-iNCENT | Poornima University Incubation Center",
  description:
    "PU-iNCENT is Poornima University's premier entrepreneurship incubation center. Transform your ideas into impactful startups with mentorship, funding, and resources.",
  keywords: "incubation center, startup, entrepreneurship, Poornima University, PU-iNCENT, LaunchPad, innovation, Jaipur",
  openGraph: {
    title: "PU-iNCENT | Turn Ideas Into Startups",
    description: "Poornima University's Entrepreneurship Incubation Center — mentorship, funding, and a thriving startup ecosystem.",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-white text-neutral-900 math-grid overflow-x-hidden" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
        <CustomCursor />
        <Navbar />
        <main className="flex-1 pt-16 lg:pt-20">{children}</main>
        <Footer />
        <ScrollToTop />
        <Analytics />
      </body>
    </html>
  );
}

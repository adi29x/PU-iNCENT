"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function HeroParticles() {
  const [mounted, setMounted] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for parallax
  const springConfig = { damping: 25, stiffness: 100 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Generate highly dense particles dynamically
  // Since we only render after mount, random generation is safe from hydration mismatch
  const [layers, setLayers] = useState({ layer1: [], layer2: [], layer3: [] });

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Generate dense particles
    const generateLayer = (count, sizeMin, sizeMax) => {
      return Array.from({ length: count }).map(() => ({
        t: Math.random() * 100,
        l: Math.random() * 100,
        s: Math.random() * (sizeMax - sizeMin) + sizeMin,
      }));
    };

    setLayers({
      layer1: generateLayer(50, 1.5, 4), // Deepest, smallest
      layer2: generateLayer(40, 2, 5),   // Mid
      layer3: generateLayer(30, 2.5, 6), // Closest, largest
    });

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Create 3 layers of movement
  const x1 = useTransform(smoothX, [-1, 1], [-20, 20]);
  const y1 = useTransform(smoothY, [-1, 1], [-20, 20]);

  const x2 = useTransform(smoothX, [-1, 1], [-45, 45]);
  const y2 = useTransform(smoothY, [-1, 1], [-45, 45]);

  const x3 = useTransform(smoothX, [-1, 1], [-75, 75]);
  const y3 = useTransform(smoothY, [-1, 1], [-75, 75]);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Layer 1 - Deep background, slow movement */}
      <motion.div style={{ x: x1, y: y1 }} className="absolute inset-[-100px]">
        {layers.layer1.map((dot, i) => (
          <div 
            key={`l1-${i}`}
            className="absolute rounded-full bg-primary/20"
            style={{ top: `${dot.t}%`, left: `${dot.l}%`, width: dot.s, height: dot.s }}
          />
        ))}
      </motion.div>

      {/* Layer 2 - Midground, medium movement */}
      <motion.div style={{ x: x2, y: y2 }} className="absolute inset-[-100px]">
        {layers.layer2.map((dot, i) => (
          <div 
            key={`l2-${i}`}
            className="absolute rounded-full bg-primary/30"
            style={{ top: `${dot.t}%`, left: `${dot.l}%`, width: dot.s, height: dot.s }}
          />
        ))}
      </motion.div>

      {/* Layer 3 - Foreground, fast movement */}
      <motion.div style={{ x: x3, y: y3 }} className="absolute inset-[-100px]">
        {layers.layer3.map((dot, i) => (
          <div 
            key={`l3-${i}`}
            className="absolute rounded-full bg-primary/40"
            style={{ top: `${dot.t}%`, left: `${dot.l}%`, width: dot.s, height: dot.s }}
          />
        ))}
      </motion.div>
    </div>
  );
}

"use client";

import React, { useEffect, useState, useCallback } from "react";
import { motion, useMotionValue } from "framer-motion";

const PARTICLE_COUNT = 8;

export default function CustomCursor() {
  const [isMobile, setIsMobile] = useState(false);
  const [particles, setParticles] = useState([]);

  // Cursor position
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      // Add particle
      if (Math.random() > 0.6) {
        setParticles((prev) => [
          ...prev.slice(-PARTICLE_COUNT),
          {
            id: Date.now(),
            x: e.clientX,
            y: e.clientY,
            size: Math.random() * 6 + 2,
            color: Math.random() > 0.5 ? "#FF6B00" : "#FF9933",
          },
        ]);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("resize", checkMobile);
    };
  }, [cursorX, cursorY]);

  if (isMobile) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {/* Particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ opacity: 0.8, scale: 1, x: p.x, y: p.y }}
          animate={{ opacity: 0, scale: 0, y: p.y + 20 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            backgroundColor: p.color, // Using the random orange colors defined earlier
            left: -p.size / 2,
            top: -p.size / 2,
          }}
        />
      ))}

      {/* Main Cursor Ring */}
      <motion.div
        className="absolute w-10 h-10 border-2 border-primary rounded-full"
        style={{
          x: cursorX,
          y: cursorY,
          left: -20,
          top: -20,
        }}
      />

      {/* Center Dot */}
      <motion.div
        className="absolute w-2 h-2 bg-black rounded-full"
        style={{
          x: cursorX,
          y: cursorY,
          left: -4,
          top: -4,
        }}
      />
    </div>
  );
}

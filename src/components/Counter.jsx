"use client";

import { useEffect, useState, useRef } from "react";
import { useInView, motion, useSpring, useTransform } from "framer-motion";

export default function Counter({ value, duration = 2 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  // Extract number from string like "100+" or "₹5Cr+"
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""));
  const suffix = value.replace(/[0-9]/g, "");
  const prefix = value.startsWith("₹") ? "₹" : "";
  const actualSuffix = suffix.replace("₹", "");

  const springValue = useSpring(0, {
    duration: duration * 1000,
    bounce: 0,
  });

  const displayValue = useTransform(springValue, (latest) => Math.floor(latest));

  useEffect(() => {
    if (isInView) {
      springValue.set(numericValue);
    }
  }, [isInView, numericValue, springValue]);

  return (
    <span ref={ref}>
      {prefix}
      <motion.span>{displayValue}</motion.span>
      {actualSuffix}
    </span>
  );
}

"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface HeadingParallaxProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  speed?: number; // Parallax distance multiplier
}

export function HeadingParallax({
  children,
  className = "",
  style = {},
  speed = 40,
}: HeadingParallaxProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax Y movement: moves smoothly as user scrolls past the section
  const rawY = useTransform(scrollYProgress, [0, 0.5, 1], [-speed, 0, speed]);
  const y = useSpring(rawY, { stiffness: 100, damping: 20 });

  // Subtle opacity glow & scale curve
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.5, 1, 1, 0.5]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.97, 1, 0.97]);

  return (
    <motion.div
      ref={containerRef}
      style={{
        y,
        opacity,
        scale,
        willChange: "transform",
        ...style,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

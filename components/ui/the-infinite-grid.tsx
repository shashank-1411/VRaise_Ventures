"use client";

import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { 
  motion, 
  useMotionValue, 
  useMotionTemplate, 
  useAnimationFrame 
} from "framer-motion";

export const InfiniteGridBackground = ({ children, className }: { children?: React.ReactNode; className?: string }) => {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top } = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  const gridOffsetX = useMotionValue(0);
  const gridOffsetY = useMotionValue(0);

  const speedX = 0.3; 
  const speedY = 0.3;

  useAnimationFrame(() => {
    if (!mounted) return;
    const currentX = gridOffsetX.get();
    const currentY = gridOffsetY.get();
    gridOffsetX.set((currentX + speedX) % 50);
    gridOffsetY.set((currentY + speedY) % 50);
  });

  const maskImage = useMotionTemplate`radial-gradient(350px circle at ${mouseX}px ${mouseY}px, black, transparent)`;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={cn(
        "relative w-full min-h-screen overflow-hidden bg-white",
        className
      )}
    >
      {/* Background Grid Layer Container */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Plus crosshairs in upper grid corners */}
        <div className="absolute top-24 left-[15%] text-slate-400/40 text-xl font-light pointer-events-none">+</div>
        <div className="absolute top-24 right-[15%] text-slate-400/40 text-xl font-light pointer-events-none">+</div>

        {/* Static Base Grid (Subtle & Soft) */}
        <div className="absolute inset-0 opacity-[0.38] pointer-events-none">
          <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} strokeColor="#94a3b8" strokeOpacity="0.43" />
        </div>
        
        {/* Interactive Cursor Masked Grid */}
        {mounted && (
          <motion.div 
            className="absolute inset-0 opacity-80 pointer-events-none"
            style={{ maskImage, WebkitMaskImage: maskImage }}
          >
            <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} strokeColor="#0284c7" strokeOpacity="0.8" />
          </motion.div>
        )}

        {/* Soft Ambient Glow Orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/2 top-1/4 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-sky-200/50 blur-[130px]" />
          <div className="absolute right-[5%] top-1/3 w-[350px] h-[350px] rounded-full bg-indigo-100/40 blur-[120px]" />
          <div className="absolute left-[5%] bottom-1/4 w-[400px] h-[300px] rounded-full bg-blue-100/50 blur-[140px]" />
        </div>
      </div>

      {/* Main Page Children */}
      <div className="relative z-10 w-full">
        {children}
      </div>
    </div>
  );
};

const GridPattern = ({ 
  offsetX, 
  offsetY, 
  strokeColor = "#94a3b8",
  strokeOpacity = "0.35" 
}: { 
  offsetX: any; 
  offsetY: any; 
  strokeColor?: string;
  strokeOpacity?: string;
}) => {
  return (
    <svg className="w-full h-full">
      <defs>
        <motion.pattern
          id={`grid-pattern-${strokeColor.replace("#", "")}-${strokeOpacity.replace(".", "")}`}
          width="50"
          height="50"
          patternUnits="userSpaceOnUse"
          x={offsetX}
          y={offsetY}
        >
          <path
            d="M 50 0 L 0 0 0 50"
            fill="none"
            stroke={strokeColor}
            strokeWidth="1"
            strokeOpacity={strokeOpacity}
          />
          <circle cx="0" cy="0" r="1.5" fill={strokeColor} fillOpacity="0.5" />
        </motion.pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#grid-pattern-${strokeColor.replace("#", "")}-${strokeOpacity.replace(".", "")})`} />
    </svg>
  );
};

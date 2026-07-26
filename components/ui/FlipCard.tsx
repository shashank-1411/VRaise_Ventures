"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { RotateCw } from "lucide-react";

interface FlipCardProps {
  front: React.ReactNode;
  back: React.ReactNode;
  className?: string;
  frontBg?: string;
  backBg?: string;
}

export function FlipCard({
  front,
  back,
  className,
  frontBg = "bg-white/95 backdrop-blur-xl border border-slate-200/90",
  backBg = "bg-gradient-to-br from-sky-50 via-sky-100/90 to-blue-50 text-slate-900 border-2 border-sky-300/90 shadow-xl",
}: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={cn("relative w-full h-full cursor-pointer group min-h-[270px]", className)}
      style={{ perspective: 1400 }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="w-full h-full relative"
        style={{ transformStyle: "preserve-3d", willChange: "transform" }}
        animate={{
          rotateY: isFlipped ? 180 : 0,
          scale: isFlipped ? 1.02 : 1,
        }}
        transition={{
          duration: 0.85,
          ease: [0.16, 1, 0.3, 1], // Smooth luxurious easing
        }}
      >
        {/* Front Face */}
        <div
          className={cn(
            "w-full h-full rounded-3xl p-8 transition-all flex flex-col justify-between relative overflow-hidden shadow-sm group-hover:shadow-xl",
            frontBg
          )}
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "translateZ(1px)",
          }}
        >
          {front}
          
          {/* Flip Hint Indicator */}
          <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400 mt-4 pt-2 border-t border-slate-100/60">
            <RotateCw size={12} className="animate-spin-slow text-sky-500" />
            <span>Hover to flip 3D card ↻</span>
          </div>
        </div>

        {/* Back Face (Light Blue Theme) */}
        <div
          className={cn(
            "absolute inset-0 w-full h-full rounded-3xl p-8 flex flex-col justify-between overflow-hidden shadow-xl",
            backBg
          )}
          style={{
            transform: "rotateY(180deg) translateZ(1px)",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          {back}
          
          <div className="flex items-center justify-between text-[11px] font-mono text-sky-900 font-semibold mt-4 pt-2 border-t border-sky-200/80">
            <span className="flex items-center gap-1">
              <RotateCw size={12} className="text-sky-600" /> VRaise Data Insights
            </span>
            <span className="text-sky-700 uppercase tracking-widest">[ Verified ]</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

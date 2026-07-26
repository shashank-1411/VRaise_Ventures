"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface SolutionCard {
  badge: string;
  title: string;
  oneLiners: string[];
  hoverDetail: string;
}

interface Solution3DCarouselProps {
  cards: SolutionCard[];
}

export function Solution3DCarousel({ cards }: Solution3DCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate right to left every 3.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [cards.length]);

  return (
    <div className="relative w-full max-w-5xl mx-auto py-8 px-4 flex flex-col items-center select-none overflow-hidden">
      {/* 3D Rotary Carousel Container */}
      <div className="relative w-full h-[400px] sm:h-[430px] flex items-center justify-center">
        {cards.map((card, index) => {
          // Calculate offset position relative to active index
          const offset = (index - activeIndex + cards.length) % cards.length;
          
          // 3 visible card positions: 0 = Center (Active/Bigger), 1 = Right, cards.length-1 = Left
          let position: "center" | "right" | "left" | "hidden" = "hidden";
          if (offset === 0) position = "center";
          else if (offset === 1) position = "right";
          else if (offset === cards.length - 1) position = "left";

          const variants = {
            center: {
              x: "0%",
              scale: 1.08,
              zIndex: 30,
              opacity: 1,
              filter: "blur(0px)",
            },
            right: {
              x: "62%",
              scale: 0.82,
              zIndex: 10,
              opacity: 0.5,
              filter: "blur(1px)",
            },
            left: {
              x: "-62%",
              scale: 0.82,
              zIndex: 10,
              opacity: 0.5,
              filter: "blur(1px)",
            },
            hidden: {
              x: "0%",
              scale: 0.7,
              zIndex: 0,
              opacity: 0,
              filter: "blur(4px)",
            },
          };

          return (
            <motion.div
              key={card.badge}
              initial={false}
              animate={position}
              variants={variants}
              transition={{
                duration: 0.7,
                ease: [0.32, 0.72, 0, 1],
              }}
              onClick={() => setActiveIndex(index)}
              className="absolute w-[320px] sm:w-[440px] bg-white border-2 border-slate-900 rounded-3xl p-6 sm:p-8 shadow-xl cursor-pointer flex flex-col justify-between h-[360px] sm:h-[390px]"
            >
              <div>
                {/* Badge Header */}
                <div className="flex items-center justify-between mb-4 sm:mb-5">
                  <span className="text-xs font-mono font-bold text-white bg-slate-950 px-3.5 py-1.5 rounded-full border border-slate-900">
                    {card.badge}
                  </span>
                  {position === "center" && (
                    <span className="text-[10px] font-mono font-bold text-slate-950 bg-slate-100 border border-slate-900 px-2 py-0.5 rounded">
                      ACTIVE THESIS
                    </span>
                  )}
                </div>

                <h3 className="text-base sm:text-xl font-extrabold text-slate-950 mb-3 sm:mb-4 leading-snug">
                  {card.title}
                </h3>

                {/* Clean Bullet Points */}
                <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-slate-700 font-medium mb-4 sm:mb-6">
                  {card.oneLiners.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2 sm:gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-950 mt-1.5 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Detail Box */}
              <div className="p-3 sm:p-3.5 bg-slate-100 border border-slate-900 rounded-2xl text-[11px] sm:text-xs text-slate-900 font-mono font-semibold">
                <span className="leading-tight block">{card.hoverDetail}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

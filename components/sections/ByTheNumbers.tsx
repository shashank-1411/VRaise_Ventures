"use client";

import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

function AnimatedCount({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = value;
    const duration = 1500;
    const incrementTime = 30;
    const steps = duration / incrementTime;
    const stepValue = end / steps;

    const timer = setInterval(() => {
      start += stepValue;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function ByTheNumbers() {
  const stats = [
    {
      value: 15,
      suffix: "+",
      label: "CAMPUS SCOUTS",
      display: null,
    },
    {
      value: 12,
      suffix: "+",
      label: "PARTNER UNIVERSITIES",
      display: null,
    },
    {
      value: 3,
      suffix: "",
      label: "COUNTRIES",
      display: null,
    },
    {
      value: 0,
      suffix: "",
      label: "SECTORS & STAGES",
      display: "ALL",
    },
  ];

  return (
    <section className="w-full py-24 px-4 bg-white font-sans select-none" id="by-the-numbers">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="font-mono text-xs uppercase tracking-widest text-orange-500 font-bold mb-3 block">
            By the Numbers
          </span>
          <h2
            style={{ fontFamily: 'var(--font-pt-serif), "PT Serif", serif' }}
            className="text-4xl sm:text-5xl md:text-6xl text-slate-950 leading-[1.15] mb-6 font-normal tracking-tight"
          >
            The scouting network
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-sans font-normal max-w-xl mx-auto">
            Our reach across campuses, markets and partner funds.
          </p>
        </div>

        {/* 4-Stat Interactive Container (Matching Template Screenshot) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-slate-50/80 border border-slate-200/90 rounded-3xl p-8 sm:p-12 shadow-sm"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-slate-200/90">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4, scale: 1.03 }}
                className="flex flex-col justify-center px-4 sm:px-8 text-center sm:text-left transition-transform cursor-pointer"
              >
                <div
                  style={{ fontFamily: 'var(--font-pt-serif), "PT Serif", serif' }}
                  className="text-4xl sm:text-5xl md:text-6xl text-slate-950 font-normal tracking-tight mb-2"
                >
                  {stat.display ? (
                    stat.display
                  ) : (
                    <AnimatedCount value={stat.value} suffix={stat.suffix} />
                  )}
                </div>
                <span className="font-mono text-xs uppercase tracking-widest text-slate-500 font-bold">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

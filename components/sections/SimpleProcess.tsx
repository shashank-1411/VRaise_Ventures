"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, CheckCircle2, FileCheck, Send, TrendingUp } from "lucide-react";

export default function SimpleProcess() {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Scout",
      subtitle: "Campus Discovery",
      description: "Campus scouts surface founders at the idea and pre-incubation stage.",
      color: "from-sky-500 to-blue-600",
    },
    {
      number: "02",
      icon: CheckCircle2,
      title: "Validate",
      subtitle: "Traction & Team",
      description: "We test the team, the market and the traction before anything moves forward.",
      color: "from-blue-600 to-indigo-600",
    },
    {
      number: "03",
      icon: FileCheck,
      title: "Prepare",
      subtitle: "IC Readiness",
      description: "Narrative, deck, model and data room built to investment-committee standard.",
      color: "from-indigo-600 to-blue-700",
    },
    {
      number: "04",
      icon: Send,
      title: "Connect",
      subtitle: "Investor Matching",
      description: "Matched and introduced to the funds and angels who actually invest in that thesis.",
      color: "from-blue-700 to-sky-600",
    },
    {
      number: "05",
      icon: TrendingUp,
      title: "Raise",
      subtitle: "Close & Support",
      description: "Support through diligence, negotiation and close.",
      color: "from-sky-600 to-teal-600",
    },
  ];

  return (
    <section className="w-full py-24 px-4 bg-white select-none font-sans" id="process">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="font-mono text-xs uppercase tracking-widest text-blue-600 font-bold mb-3 block">
            Venture Journey
          </span>
          <h2
            style={{ fontFamily: 'var(--font-pt-serif), "PT Serif", serif' }}
            className="text-4xl sm:text-5xl md:text-6xl text-slate-950 leading-[1.15] mb-6 font-normal tracking-tight"
          >
            The 5-Step Journey from Campus to Capital
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-sans font-normal max-w-xl mx-auto">
            Applied the same way to every company we take on, in any sector and at any stage.
          </p>
        </div>

        {/* Visual Journey Timeline Track Container */}
        <div className="relative">
          
          {/* Connecting Track Line behind milestone cards */}
          <div className="hidden lg:block absolute top-[44px] left-[8%] right-[8%] h-[3px] bg-gradient-to-r from-blue-500 via-indigo-600 to-blue-700 z-0 opacity-40 rounded-full" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.12 }}
                  whileHover={{ y: -6 }}
                  className="flex flex-col items-center text-center bg-slate-50/90 border border-slate-200/90 rounded-3xl p-6 sm:p-7 shadow-xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 group cursor-pointer"
                >
                  {/* Step Milestone Badge & Icon */}
                  <div className="relative mb-5 flex items-center justify-center">
                    {/* Floating Black Icon Circle */}
                    <div className="w-14 h-14 rounded-2xl bg-slate-950 text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-300">
                      <Icon size={22} className="text-white" />
                    </div>

                    {/* Number Badge Pill */}
                    <div className="absolute -top-2 -right-2 font-mono text-[10px] font-extrabold text-white bg-slate-900 border border-white px-2 py-0.5 rounded-full shadow-xs">
                      {step.number}
                    </div>
                  </div>

                  {/* Step Subtitle Badge */}
                  <span className="font-mono text-[10px] uppercase tracking-wider font-bold text-blue-600 mb-1.5 block">
                    {step.subtitle}
                  </span>

                  {/* Step Title in PT Serif */}
                  <h3
                    style={{ fontFamily: 'var(--font-pt-serif), "PT Serif", serif' }}
                    className="text-2xl text-slate-950 font-normal mb-3 tracking-tight"
                  >
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans font-normal">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Building2 } from "lucide-react";

export default function PartnerMarquee() {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Primary partner logos
  const primaryLogos = [
    { name: "TEN13", image: "/assets/ten13.png", category: "Syndicate Platform" },
    { name: "Pinery", image: "/assets/pinery.png", category: "Venture Fund" },
    { name: "Boardy", image: "/assets/boardy.png", category: "AI & Tech Fund" },
    { name: "Level Up Ventures", image: "/assets/levelup ventures.jpeg", category: "Pre-Seed Fund" },
  ];

  // Extended partner list for the popup modal
  const allPartners = [
    ...primaryLogos,
    { name: "Blackbird Ventures Network", image: null, category: "ANZ Tech Corridor", isText: true },
    { name: "Square Peg Syndicate", image: null, category: "Global Growth Fund", isText: true },
    { name: "AirTree Pioneer Network", image: null, category: "Early Stage", isText: true },
    { name: "GovTech Specialists", image: null, category: "GovTech & Policy", isText: true },
    { name: "Bilateral ANZ-India Syndicate", image: null, category: "Cross-Border Fund", isText: true },
    { name: "Campus Founders Angel Network", image: null, category: "University Angels", isText: true },
  ];

  const marqueeItems = [
    ...primaryLogos,
    { name: "and many more...", image: null, isMore: true },
    ...primaryLogos,
    { name: "and many more...", image: null, isMore: true },
    ...primaryLogos,
    { name: "and many more...", image: null, isMore: true },
    ...primaryLogos,
    { name: "and many more...", image: null, isMore: true },
  ];

  // Sync scrollbar progress
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll > 0) {
      setScrollProgress((scrollLeft / maxScroll) * 100);
    }
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    setScrollProgress(val);
    if (scrollRef.current) {
      const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
      scrollRef.current.scrollLeft = (val / 100) * maxScroll;
    }
  };

  return (
    <div className="w-full bg-white/40 backdrop-blur-xs border-y border-slate-200/80 py-12 overflow-hidden relative z-20 font-sans select-none">
      
      {/* Section Header */}
      <div className="max-w-6xl mx-auto text-center mb-8 px-4">
        <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-blue-600 mb-2 block">
          PARTNER NETWORK
        </span>
        <h3
          style={{ fontFamily: 'var(--font-pt-serif), "PT Serif", serif' }}
          className="text-2xl sm:text-3xl md:text-4xl text-slate-950 font-normal tracking-tight"
        >
          Some of Our Partner Funds &amp; Syndicates
        </h3>
      </div>

      {/* Marquee Container with Horizontal Scrollability */}
      <div className="relative w-full">
        
        {/* Left Gradient Fade Mask */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-20" />
        
        {/* Right Gradient Fade Mask */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-20" />

        {/* Scrollable Track Wrapper */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="w-full overflow-x-auto no-scrollbar scroll-smooth py-2 px-4"
        >
          {/* Continuous Infinite Marquee Track */}
          <motion.div
            className="flex items-center gap-6 sm:gap-8 w-max"
            animate={{ x: isHovered ? undefined : ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              duration: 40,
            }}
          >
            {marqueeItems.map((item, idx) => (
              <motion.div
                key={`${item.name}-${idx}`}
                whileHover={{ scale: 1.08, y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="flex items-center justify-center cursor-pointer shrink-0 py-2 group"
                onClick={() => {
                  if (item.isMore) setIsModalOpen(true);
                }}
              >
                {item.isMore ? (
                  /* "and many more..." clickable pill badge */
                  <div className="flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-blue-50 border border-blue-200 shadow-xs group-hover:bg-blue-600 group-hover:border-blue-600 transition-all h-20 sm:h-22">
                    <Sparkles size={16} className="text-blue-600 group-hover:text-white transition-colors" />
                    <span className="font-mono text-xs uppercase tracking-widest font-bold text-blue-600 group-hover:text-white transition-colors">
                      {item.name}
                    </span>
                  </div>
                ) : (
                  /* Full Color Partner Logo Card */
                  <div className="flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs group-hover:shadow-md group-hover:border-slate-300 transition-all h-20 sm:h-22 min-w-[150px] sm:min-w-[190px]">
                    <img
                      src={item.image!}
                      alt={item.name}
                      className="h-10 sm:h-14 max-h-14 w-auto object-contain transition-all duration-300"
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Custom Interactive Scrollbar Scroller Below Marquee */}
        <div className="max-w-xs sm:max-w-md mx-auto mt-6 px-6 flex flex-col items-center gap-2">
          <div className="w-full flex items-center gap-3">
            <span className="text-[10px] font-mono font-bold uppercase text-slate-400">Scroll</span>
            <input
              type="range"
              min="0"
              max="100"
              value={scrollProgress}
              onChange={handleSliderChange}
              className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              aria-label="Scroll partner logos"
            />
            <span className="text-[10px] font-mono font-bold uppercase text-slate-400">Drag</span>
          </div>
        </div>

      </div>

      {/* Partner Logos Popup Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Modal Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="relative w-full max-w-3xl bg-white border border-slate-200 rounded-3xl shadow-2xl p-6 sm:p-10 text-slate-950 z-10 font-sans max-h-[85vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-950 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              {/* Modal Title Header */}
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-blue-50 border border-blue-200 rounded-2xl text-blue-600">
                  <Building2 size={26} />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-blue-600 block">
                    [ VRaise Ecosystem ]
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950">
                    Partner Funds &amp; Syndicates
                  </h3>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mb-8">
                Our scout network partners with tier-1 venture funds, angel syndicates, and institutional platforms across Australia, India, and North America.
              </p>

              {/* Grid of All Partner Logos */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {allPartners.map((partner, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.03, y: -2 }}
                    className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-xs flex flex-col items-center justify-center text-center gap-2 group hover:bg-white hover:shadow-md transition-all"
                  >
                    {partner.image ? (
                      <img
                        src={partner.image}
                        alt={partner.name}
                        className="h-12 w-auto object-contain mb-1"
                      />
                    ) : (
                      <div className="h-12 flex items-center justify-center">
                        <span className="font-extrabold text-base text-slate-900 tracking-tight font-sans">
                          {partner.name}
                        </span>
                      </div>
                    )}
                    <span className="font-mono text-[10px] uppercase font-bold text-blue-600 tracking-wider">
                      {partner.category}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Modal Footer Action */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex justify-end">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-2.5 bg-slate-950 text-white font-mono text-xs uppercase font-bold tracking-wider rounded-xl hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  Close Window
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}

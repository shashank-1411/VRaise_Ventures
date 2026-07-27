"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Linkedin, Calendar, Mail } from "lucide-react";

interface VerticalFloatingDockProps {
  onOpenCallModal: () => void;
  onOpenNewsletterModal: () => void;
}

export default function VerticalFloatingDock({
  onOpenCallModal,
  onOpenNewsletterModal,
}: VerticalFloatingDockProps) {
  const iconVariants: Variants = {
    initial: { scale: 1, x: 0 },
    hover: { 
      scale: 1.2, 
      x: -3,
      transition: { type: "spring", stiffness: 400, damping: 17 }
    },
  };

  const dockItems = [
    {
      id: "linkedin",
      label: "LinkedIn",
      icon: <Linkedin size={15} className="text-slate-900 group-hover:text-white transition-colors" />,
      action: () => window.open("https://linkedin.com", "_blank"),
    },
    {
      id: "calendar",
      label: "Calendar",
      icon: <Calendar size={15} className="text-slate-900 group-hover:text-white transition-colors" />,
      action: () => window.open("https://calendly.com", "_blank"),
    },
    {
      id: "email",
      label: "Email Us",
      icon: <Mail size={15} className="text-slate-900 group-hover:text-white transition-colors" />,
      action: onOpenNewsletterModal,
    },
  ];

  return (
    <aside aria-label="Quick Access Dock" className="fixed right-3 bottom-6 sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2 z-50 font-sans">
      <div className="bg-white/95 backdrop-blur-xl border border-slate-300 shadow-xl rounded-full p-1.5 flex flex-col items-center gap-2">
        {dockItems.map((item) => (
          <div key={item.id} className="relative group">
            {/* Tooltip on Hover */}
            <div className="absolute right-full top-1/2 -translate-y-1/2 mr-2.5 px-2.5 py-1 bg-slate-950 text-white text-[11px] font-mono font-bold rounded-md shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200">
              {item.label}
              <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-slate-950" />
            </div>

            {/* Compact Icon Button */}
            <motion.button
              onClick={item.action}
              initial="initial"
              whileHover="hover"
              whileTap={{ scale: 0.9 }}
              variants={iconVariants}
              className="p-2 rounded-full bg-slate-100 hover:bg-slate-950 border border-slate-300 shadow-xs flex items-center justify-center cursor-pointer transition-colors group"
              aria-label={item.label}
            >
              {item.icon}
            </motion.button>
          </div>
        ))}
      </div>
    </aside>
  );
}

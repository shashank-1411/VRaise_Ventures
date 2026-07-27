"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Handshake, CheckCircle2, Send } from "lucide-react";
import confetti from "canvas-confetti";

interface ScoutingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ScoutingModal({ isOpen, onClose }: ScoutingModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    fundName: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    // Trigger celebration confetti
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#2563eb", "#3b82f6", "#60a5fa", "#000000", "#10b981"],
    });

    setSubmitted(true);
  };

  const handleReset = () => {
    onClose();
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", fundName: "", message: "" });
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleReset}
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="relative w-full max-w-lg bg-white border border-slate-200 rounded-3xl shadow-2xl p-6 sm:p-8 text-slate-950 z-10 font-sans"
          >
            {/* Close Button */}
            <button
              onClick={handleReset}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-950 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            {!submitted ? (
              <div className="space-y-6">
                
                {/* Modal Header */}
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-blue-50 border border-blue-200 rounded-2xl text-blue-600">
                    <Handshake size={24} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-blue-600 block">
                      [ Partner With Us ]
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-950">
                      Partner With VRaise
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Connect with our deal origination team to set up custom thesis parameters and receive curated, off-market founder pipelines.
                </p>

                {/* Short Partner Form (White & Blue Theme) */}
                <form onSubmit={handleSubmit} className="space-y-4 pt-1">
                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-700 uppercase mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Alex Morgan"
                      className="w-full h-11 px-4 text-xs sm:text-sm rounded-xl border border-slate-300 bg-slate-50 text-slate-950 placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-700 uppercase mb-1">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@fund.com"
                        className="w-full h-11 px-4 text-xs sm:text-sm rounded-xl border border-slate-300 bg-slate-50 text-slate-950 placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-700 uppercase mb-1">
                        Fund / Syndicate Name
                      </label>
                      <input
                        type="text"
                        value={formData.fundName}
                        onChange={(e) => setFormData({ ...formData, fundName: e.target.value })}
                        placeholder="Venture Capital"
                        className="w-full h-11 px-4 text-xs sm:text-sm rounded-xl border border-slate-300 bg-slate-50 text-slate-950 placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-700 uppercase mb-1">
                      Message / Mandate (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us your sector focus or investment check size..."
                      className="w-full p-3.5 text-xs sm:text-sm rounded-xl border border-slate-300 bg-slate-50 text-slate-950 placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* 3D Blue Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 bg-gradient-to-b from-blue-500 via-blue-600 to-blue-700 text-white font-mono text-xs uppercase font-extrabold tracking-wider rounded-2xl shadow-[0_8px_18px_-3px_rgba(37,99,235,0.55),inset_0_2px_3px_rgba(255,255,255,0.4),0_3px_0_0_#1d4ed8] border-t border-blue-300/60 hover:scale-[1.02] active:translate-y-0.5 transition-all cursor-pointer flex items-center justify-center gap-2 mt-2"
                  >
                    <Send size={15} />
                    <span>Submit Partnership Inquiry</span>
                  </button>
                </form>

              </div>
            ) : (
              /* Success State */
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 border border-blue-200 rounded-full flex items-center justify-center mx-auto mb-2">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-950 tracking-tight">
                  Inquiry Received!
                </h3>
                <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                  Thank you for reaching out. Our team will review your mandate and contact you within 24 hours.
                </p>
                <button
                  onClick={handleReset}
                  className="mt-4 px-8 py-3 bg-slate-950 text-white font-mono text-xs uppercase font-bold tracking-wider rounded-2xl hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, CheckCircle2, ArrowRight } from "lucide-react";
import confetti from "canvas-confetti";

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NewsletterModal({ isOpen, onClose }: NewsletterModalProps) {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // Trigger Confetti Explosion Effect
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#2563eb", "#3b82f6", "#60a5fa", "#000000", "#10b981"],
    });

    setIsSubmitted(true);
  };

  const handleResetAndClose = () => {
    onClose();
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail("");
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
            onClick={handleResetAndClose}
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="relative w-full max-w-md bg-white border border-slate-300 rounded-3xl shadow-2xl p-6 sm:p-8 text-slate-950 z-10 font-sans"
          >
            {/* Close Button */}
            <button
              onClick={handleResetAndClose}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-950 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            {!isSubmitted ? (
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-blue-50 border border-blue-200 rounded-2xl text-blue-600">
                    <Mail size={24} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-blue-600 block">
                      [ VRaise Signal ]
                    </span>
                    <h3 className="text-xl font-extrabold tracking-tight text-slate-950">
                      Subscribe to Newsletter
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Get verified, off-market early-stage deal intelligence across ANZ, India &amp; US delivered directly to your inbox every fortnight.
                </p>

                <form onSubmit={handleSubmit} className="space-y-3 pt-1">
                  <div>
                    <label htmlFor="newsletter-email" className="block text-xs font-mono font-bold text-slate-700 uppercase mb-1.5">
                      Work Email Address
                    </label>
                    <input
                      id="newsletter-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="partner@venturefund.com"
                      required
                      className="w-full h-11 px-4 text-xs sm:text-sm rounded-xl border border-slate-300 bg-slate-50 text-slate-950 placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 bg-gradient-to-b from-blue-500 via-blue-600 to-blue-700 text-white font-mono text-xs uppercase font-extrabold tracking-wider rounded-2xl shadow-[0_8px_18px_-3px_rgba(37,99,235,0.55),inset_0_2px_3px_rgba(255,255,255,0.4),0_3px_0_0_#1d4ed8] border-t border-blue-300/60 hover:scale-[1.02] active:translate-y-0.5 transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Subscribe Now</span>
                    <ArrowRight size={15} />
                  </button>
                </form>
              </div>
            ) : (
              /* Success State */
              <div className="py-6 text-center space-y-4">
                <div className="w-14 h-14 bg-emerald-50 text-emerald-600 border border-emerald-200 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-950 tracking-tight">
                  You&apos;re Subscribed!
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-xs mx-auto leading-relaxed">
                  Thank you for subscribing. You will start receiving fortnight deal flow updates.
                </p>
                <button
                  onClick={handleResetAndClose}
                  className="mt-2 px-7 py-2.5 bg-slate-950 text-white font-mono text-xs uppercase font-bold tracking-wider rounded-2xl hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            )}

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

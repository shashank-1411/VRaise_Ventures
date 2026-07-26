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

    // Trigger Confetti Explosion
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#09090b", "#3f3f46", "#71717a", "#0284c7", "#10b981"],
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
                  <div className="p-3 bg-slate-100 border border-slate-300 rounded-2xl text-slate-950">
                    <Mail size={22} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500 block">
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
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-950 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-slate-950 transition-all placeholder:text-slate-400"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 bg-slate-950 hover:bg-slate-800 text-white font-bold text-sm rounded-xl shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <span>Subscribe Now</span>
                    <ArrowRight size={16} />
                  </button>
                </form>

                <p className="text-[11px] text-slate-400 font-mono text-center pt-1">
                  No spam. Unsubscribe at any time with one click.
                </p>
              </div>
            ) : (
              <div className="text-center py-6 space-y-4">
                <div className="w-14 h-14 bg-emerald-100 border border-emerald-300 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-xs">
                  <CheckCircle2 size={30} />
                </div>

                <h3 className="text-2xl font-extrabold text-slate-950 tracking-tight">
                  You&apos;re Subscribed! 🎉
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xs mx-auto">
                  Thank you for subscribing. We&apos;ve sent a confirmation email to <span className="font-bold text-slate-900">{email}</span>.
                </p>

                <button
                  onClick={handleResetAndClose}
                  className="mt-4 px-6 py-2.5 bg-slate-950 text-white font-bold text-xs rounded-xl hover:bg-slate-800 transition-colors cursor-pointer"
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

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Copy, Check, ExternalLink } from "lucide-react";

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NewsletterModal({ isOpen, onClose }: NewsletterModalProps) {
  const [copied, setCopied] = useState(false);
  const contactEmail = "contact@vraiseventures.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
          />

          {/* Contact Card Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="relative w-full max-w-md bg-white border border-slate-300 rounded-3xl shadow-2xl p-6 sm:p-8 text-slate-950 z-10 font-sans"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-950 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-blue-50 border border-blue-200 rounded-2xl text-blue-600">
                  <Mail size={24} />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-blue-600 block">
                    Get In Touch
                  </span>
                  <h3 className="text-xl font-extrabold tracking-tight text-slate-950">
                    Direct Email Contact
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Have a question, pitch, or partnership inquiry? Reach out to our origination team directly via email.
              </p>

              {/* Email Address Display Box */}
              <div className="flex items-center justify-between bg-slate-50 border border-slate-200 rounded-2xl p-3.5">
                <span className="font-mono text-xs sm:text-sm font-bold text-slate-900 truncate">
                  {contactEmail}
                </span>
                <button
                  onClick={handleCopy}
                  className="p-2 text-slate-500 hover:text-slate-950 hover:bg-white rounded-xl transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-mono font-bold shrink-0 ml-2"
                >
                  {copied ? (
                    <>
                      <Check size={14} className="text-emerald-600" />
                      <span className="text-emerald-600">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={`mailto:${contactEmail}?subject=Inquiry%20-%20VRaise%20Ventures`}
                  className="flex-1 py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-mono text-xs uppercase font-bold tracking-wider rounded-2xl shadow-md flex items-center justify-center gap-2 transition-colors"
                >
                  <Mail size={16} />
                  <span>Send Email</span>
                  <ExternalLink size={13} className="opacity-70" />
                </a>

                <button
                  onClick={onClose}
                  className="py-3 px-5 border border-slate-300 hover:bg-slate-100 text-slate-800 font-mono text-xs uppercase font-bold tracking-wider rounded-2xl transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

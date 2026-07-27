"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const faqs = [
    {
      question: "What types of startups does VRaise work with?",
      answer:
        "All of them. VRaise is sector-agnostic and stage-agnostic — our partner funds invest across every category and at every stage. What we filter for is the quality of the team and the clarity of the opportunity, not the label on the company.",
    },
    {
      question: "How does venture readiness work?",
      answer:
        "We work directly with the founding team on narrative, metrics, deck, model and data room until the company can withstand real investor diligence. Typically a few focused weeks, not months.",
    },
    {
      question: "How do investor introductions happen?",
      answer:
        "Through our scouting agreements with partner funds. When a company matches a fund's thesis and stage, we submit it directly to the partner or associate who owns that area.",
    },
    {
      question: "Does VRaise invest directly?",
      answer:
        "No. VRaise is a scouting and readiness firm. We source and prepare companies, then introduce them to the funds we partner with. Investment decisions sit entirely with those funds.",
    },
    {
      question: "Can student founders apply?",
      answer:
        "Yes. A significant share of our deal flow begins on campus, which is where our scout network sits. Student-founded companies go through exactly the same scouting and readiness process as any other.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-24 px-4 bg-white font-sans select-none" id="faq">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="font-mono text-xs uppercase tracking-widest text-blue-600 font-bold mb-3 block">
            Frequently Asked Questions
          </span>
          <h2
            style={{ fontFamily: 'var(--font-pt-serif), "PT Serif", serif' }}
            className="text-4xl sm:text-5xl md:text-6xl text-slate-950 leading-[1.15] mb-6 font-normal tracking-tight"
          >
            Common questions
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-sans font-normal">
            Got questions? We&apos;ve answered the most important ones to guide you every step of the way.
          </p>
        </div>

        {/* FAQ Accordion List (Matching Template Screenshot) */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-slate-50/80 border border-slate-200/90 rounded-2xl overflow-hidden transition-all duration-300 hover:border-slate-300"
              >
                {/* Accordion Header Button */}
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 sm:p-7 flex items-center justify-between gap-4 text-left cursor-pointer focus:outline-none"
                >
                  <h3
                    style={{ fontFamily: 'var(--font-pt-serif), "PT Serif", serif' }}
                    className="text-xl sm:text-2xl text-slate-950 font-normal tracking-tight"
                  >
                    {faq.question}
                  </h3>

                  {/* Circular Plus/Minus Toggle Icon */}
                  <div
                    className={`w-9 h-9 min-w-[36px] rounded-full bg-slate-950 text-white flex items-center justify-center shadow-[0_8px_16px_-2px_rgba(0,0,0,0.5)] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <span className="text-xl font-bold leading-none select-none">
                      {isOpen ? "−" : "+"}
                    </span>
                  </div>
                </button>

                {/* Animated Answer Collapse */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-7 sm:px-7 sm:pb-8 text-slate-600 text-sm sm:text-base leading-relaxed font-sans font-normal border-t border-slate-200/60 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

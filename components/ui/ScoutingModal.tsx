"use client";

import React, { useState } from "react";
import { X, CheckCircle, FilePen } from "lucide-react";

interface ScoutingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ScoutingModal({ isOpen, onClose }: ScoutingModalProps) {
  const [signed, setSigned] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    fundName: "",
    stage: "Seed",
    chequeSize: "$500k - $1M",
    thesis: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!signed) {
      alert("Please sign the digital agreement before submitting.");
      return;
    }
    setSubmitted(true);
  };

  const handleReset = () => {
    setSigned(false);
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      className="modal-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleReset();
      }}
    >
      <div className="modal-content relative">
        <button
          onClick={handleReset}
          className="modal-close"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {!submitted ? (
          <div>
            <div className="modal-header mb-6">
              <span className="badge">Scouting Agreement</span>
              <h2 className="text-2xl font-black text-outlineDark">VRaise Scout Mandate</h2>
              <p className="text-sm text-text-muted mt-1">
                Enter your investment parameters to sign a non-binding referral agreement with VRaise Ventures.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-outlineDark mb-1">Your Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-3 border-2 border-outlineDark rounded-xl text-sm focus:outline-none focus:border-magentaBrand"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-outlineDark mb-1">Work Email</label>
                  <input
                    type="email"
                    required
                    placeholder="alex@fund.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-3 border-2 border-outlineDark rounded-xl text-sm focus:outline-none focus:border-magentaBrand"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-outlineDark mb-1">Fund Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Venture Capital"
                    value={formData.fundName}
                    onChange={(e) => setFormData({ ...formData, fundName: e.target.value })}
                    className="w-full p-3 border-2 border-outlineDark rounded-xl text-sm focus:outline-none focus:border-magentaBrand"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-outlineDark mb-1">Investment Stage</label>
                  <select
                    value={formData.stage}
                    onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
                    className="w-full p-3 border-2 border-outlineDark rounded-xl text-sm focus:outline-none focus:border-magentaBrand bg-white"
                  >
                    <option value="Pre-Seed">Pre-Seed</option>
                    <option value="Seed">Seed</option>
                    <option value="Series A">Series A</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-outlineDark mb-1">Cheque Size</label>
                  <select
                    value={formData.chequeSize}
                    onChange={(e) => setFormData({ ...formData, chequeSize: e.target.value })}
                    className="w-full p-3 border-2 border-outlineDark rounded-xl text-sm focus:outline-none focus:border-magentaBrand bg-white"
                  >
                    <option value="$100k - $500k">$100k - $500k</option>
                    <option value="$500k - $1M">$500k - $1M</option>
                    <option value="$1M - $3M">$1M - $3M</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-outlineDark mb-1">Investment Thesis / Mandate Details</label>
                <textarea
                  rows={3}
                  placeholder="Tell us what sectors, founders, or geographies you prioritize..."
                  value={formData.thesis}
                  onChange={(e) => setFormData({ ...formData, thesis: e.target.value })}
                  className="w-full p-3 border-2 border-outlineDark rounded-xl text-sm focus:outline-none focus:border-magentaBrand resize-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-outlineDark mb-1">Digital Signature</label>
                <div
                  onClick={() => setSigned(!signed)}
                  className={`signature-box flex items-center justify-center gap-2 ${signed ? "signed" : ""}`}
                >
                  <FilePen size={18} />
                  <span>
                    {signed
                      ? `✓ Signed by ${formData.name || "Authorized Representative"}`
                      : "Click here to add Digital Signature"}
                  </span>
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-primary w-full py-4 text-base font-bold rounded-xl mt-4"
              >
                Sign & Submit Mandate
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-8">
            <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
            <h2 className="text-2xl font-black text-outlineDark mb-2">Agreement Submitted!</h2>
            <p className="text-sm text-text-muted max-w-md mx-auto mb-6">
              Thank you, <span className="font-bold text-outlineDark">{formData.name}</span>. Your signed referral mandate for <span className="font-bold text-outlineDark">{formData.fundName}</span> has been received. Our partners will reach out within 24 hours.
            </p>
            <button onClick={handleReset} className="btn btn-primary px-8 py-3 rounded-xl">
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

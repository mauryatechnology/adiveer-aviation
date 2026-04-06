"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { inquiryTypes } from "@/data/contact";

export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", org: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    setForm({ name: "", email: "", org: "", subject: "", message: "" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-card p-10 rounded-3xl border border-border shadow-2xl relative"
    >
      {submitted ? (
        <div className="h-full flex flex-col items-center justify-center text-center py-10">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
            <CheckCircle2 className="w-10 h-10 text-primary" />
          </div>
          <h3 className="text-3xl font-heading font-black text-foreground mb-4">Message Sent!</h3>
          <p className="text-muted-foreground text-lg mb-8 max-w-sm">
            Thank you for reaching out. Our team will get back to you within 24 hours.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="text-primary font-bold uppercase tracking-widest text-sm hover:underline"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-[0.2em] text-primary ml-1">Full Name *</label>
              <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-5 py-4 bg-background border border-border rounded-xl text-foreground text-base focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-[0.2em] text-primary ml-1">Email Address *</label>
              <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-5 py-4 bg-background border border-border rounded-xl text-foreground text-base focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" placeholder="john@example.com" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-[0.2em] text-primary ml-1">Organization</label>
            <input type="text" value={form.org} onChange={(e) => setForm({ ...form, org: e.target.value })} className="w-full px-5 py-4 bg-background border border-border rounded-xl text-foreground text-base focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" placeholder="Company Name" />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-[0.2em] text-primary ml-1">Inquiry Type *</label>
            <select required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className="w-full px-5 py-4 bg-background border border-border rounded-xl text-foreground text-base focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none appearance-none">
              <option value="">Select a topic</option>
              {inquiryTypes.map((type) => (<option key={type}>{type}</option>))}
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-[0.2em] text-primary ml-1">Message *</label>
            <textarea required rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full px-5 py-4 bg-background border border-border rounded-xl text-foreground text-base focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none resize-none" placeholder="How can we help you?" />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={cn(
              "w-full px-8 py-5 bg-primary text-primary-foreground font-heading font-black uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-3 group shadow-xl shadow-primary/20 hover:bg-primary/95 active:scale-[0.98]",
              isSubmitting && "opacity-80 cursor-not-allowed"
            )}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
            <Send className={cn("w-5 h-5 transition-transform", !isSubmitting && "group-hover:translate-x-1 group-hover:-translate-y-1")} />
          </button>
        </form>
      )}
    </motion.div>
  );
}

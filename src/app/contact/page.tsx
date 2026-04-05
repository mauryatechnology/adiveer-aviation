"use client";

import { useState } from "react";
import PageHero from "@/components/common/PageHero";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Send, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", org: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    setForm({ name: "", email: "", org: "", subject: "", message: "" });
  };

  return (
    <>
      <PageHero 
        tag="Contact" 
        title="Start a Conversation" 
        description="Whether you're exploring a partnership, need a custom solution, or want to join our mission — we'd love to hear from you." 
      />
      
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            
            {/* Form Section */}
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
                      <input 
                        type="text" 
                        required 
                        value={form.name} 
                        onChange={(e) => setForm({ ...form, name: e.target.value })} 
                        className="w-full px-5 py-4 bg-background border border-border rounded-xl text-foreground text-base focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" 
                        placeholder="John Doe" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-[0.2em] text-primary ml-1">Email Address *</label>
                      <input 
                        type="email" 
                        required 
                        value={form.email} 
                        onChange={(e) => setForm({ ...form, email: e.target.value })} 
                        className="w-full px-5 py-4 bg-background border border-border rounded-xl text-foreground text-base focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" 
                        placeholder="john@example.com" 
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-[0.2em] text-primary ml-1">Organization</label>
                    <input 
                      type="text" 
                      value={form.org} 
                      onChange={(e) => setForm({ ...form, org: e.target.value })} 
                      className="w-full px-5 py-4 bg-background border border-border rounded-xl text-foreground text-base focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" 
                      placeholder="Company Name" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-[0.2em] text-primary ml-1">Inquiry Type *</label>
                    <select 
                      required 
                      value={form.subject} 
                      onChange={(e) => setForm({ ...form, subject: e.target.value })} 
                      className="w-full px-5 py-4 bg-background border border-border rounded-xl text-foreground text-base focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none appearance-none"
                    >
                      <option value="">Select a topic</option>
                      <option>Partnership Inquiry</option>
                      <option>Custom Solution Request</option>
                      <option>Career Opportunities</option>
                      <option>Media & Press</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-[0.2em] text-primary ml-1">Message *</label>
                    <textarea 
                      required 
                      rows={4} 
                      value={form.message} 
                      onChange={(e) => setForm({ ...form, message: e.target.value })} 
                      className="w-full px-5 py-4 bg-background border border-border rounded-xl text-foreground text-base focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none resize-none" 
                      placeholder="How can we help you?" 
                    />
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

            {/* Info Section */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ delay: 0.2 }} 
              className="flex flex-col justify-center"
            >
              <div className="mb-12">
                <h3 className="text-4xl font-heading font-black text-foreground mb-6">Contact Information</h3>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-md font-light">
                  We aim to respond to all qualified inquiries within 24 hours. For critical mission updates, please use your dedicated channel.
                </p>
              </div>
              
              <div className="space-y-6">
                {[
                  { icon: MapPin, title: "Headquarters", content: "Bangalore, Karnataka, India", sub: "Silicon Valley of the East" },
                  { icon: Mail, title: "Operations & Sales", content: "hello@adiveeraviations.com", sub: "24/7 Monitoring" },
                  { icon: Phone, title: "Support Line", content: "+91 (0) 80-2234-XXXX", sub: "Mon-Sat, 9AM-8PM IST" }
                ].map((item, i) => (
                  <motion.div 
                    key={item.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-start gap-6 p-6 bg-card rounded-2xl border border-border/50 hover:border-primary/20 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-[0.2em] font-black text-primary mb-1">{item.title}</h4>
                      <p className="text-xl font-heading font-bold text-foreground mb-0.5">{item.content}</p>
                      <p className="text-sm text-muted-foreground font-medium">{item.sub}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social/Trust */}
              <div className="mt-12 pt-12 border-t border-border flex items-center gap-8">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground mb-4">India Core R&D</p>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-lg bg-card border border-border" />
                    <div className="w-8 h-8 rounded-lg bg-card border border-border" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

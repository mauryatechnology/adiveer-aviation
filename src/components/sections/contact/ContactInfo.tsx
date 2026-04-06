"use client";

import { motion } from "framer-motion";
import { contactDetails } from "@/data/contact";

export function ContactInfo() {
  return (
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
        {contactDetails.map((item, i) => (
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
  );
}

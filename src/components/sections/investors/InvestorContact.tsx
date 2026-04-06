"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Mail, User, MapPin } from "lucide-react";
import { investorContact } from "@/data/investors";

export function InvestorContact() {
  return (
    <section className="py-32 bg-primary relative overflow-hidden" id="enquiry">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-white/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-black/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-1.5 bg-white/10 text-white border border-white/20 rounded-full text-[10px] font-heading font-black uppercase tracking-[0.3em] mb-6">
              Investor Access
            </div>
            <h2 className="text-4xl md:text-6xl font-heading font-black text-white mb-8 leading-tight tracking-tighter italic">
              {investorContact.headline}
            </h2>
            <p className="text-xl text-white/70 leading-relaxed font-light mb-10 max-w-xl italic">
              &quot;{investorContact.subtext}&quot;
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-4 px-10 py-5 bg-white text-primary font-heading font-black uppercase tracking-widest text-xs rounded-2xl hover:bg-primary-foreground transition-colors group shadow-2xl shadow-black/20"
            >
              Schedule Introduction <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <div className="grid gap-6">
            {investorContact.details.map((detail, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-[2.5rem] hover:bg-white/10 transition-colors group cursor-default"
              >
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-colors duration-500 shadow-inner">
                    {idx === 0 && <Mail className="w-6 h-6 text-white group-hover:text-primary transition-colors" />}
                    {idx === 1 && <User className="w-6 h-6 text-white group-hover:text-primary transition-colors" />}
                    {idx === 2 && <MapPin className="w-6 h-6 text-white group-hover:text-primary transition-colors" />}
                  </div>
                  <div className="flex-1">
                    <h5 className="text-[9px] uppercase font-black tracking-[0.2em] text-white/40 mb-1">{detail.type}</h5>
                    <p className="text-white font-heading font-bold text-lg md:text-xl leading-tight group-hover:text-white transition-colors">{detail.content}</p>
                    <p className="text-white/40 text-[10px] italic mt-1.5">{detail.sub}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

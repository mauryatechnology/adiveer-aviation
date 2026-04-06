"use client";

export function InvestorHero() {
  return (
    <section className="relative py-24 bg-card overflow-hidden">
      <div className="absolute inset-0 bg-primary/2 rounded-full blur-[160px] translate-x-1/2 -translate-y-1/2" />
      <div className="container mx-auto px-6 relative z-10 text-center">
        <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-heading font-black uppercase tracking-widest mb-8">
          Investor Relations
        </span>
        <h1 className="text-4xl md:text-7xl font-heading font-black text-foreground mb-8 tracking-tighter leading-tight">
          Invest in India&apos;s <br /><span className="text-primary italic">Deep-Tech Future</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto font-light">
          Adiveer Aviation is building the next generation of India&apos;s aerospace, AI, and autonomous
          systems capability from the ground up. We are at the intersection of Aatmanirbhar Bharat, a $90
          Billion global drone market, and India&apos;s accelerating defense modernization.
        </p>
      </div>
    </section>
  );
}

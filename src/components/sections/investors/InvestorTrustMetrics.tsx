"use client";

export function InvestorTrustMetrics() {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6 text-center">
        <p className="text-xs text-muted-foreground uppercase tracking-[0.3em] font-black mb-12">Institutional Grade Deep-Tech</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-4xl mx-auto">
          <div>
            <div className="text-3xl font-heading font-black text-foreground mb-1">50+</div>
            <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">Systems Deployed</p>
          </div>
          <div>
            <div className="text-3xl font-heading font-black text-foreground mb-1">6</div>
            <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">Tech Verticals</p>
          </div>
          <div>
            <div className="text-3xl font-heading font-black text-foreground mb-1">200k+</div>
            <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">Engineering Hours</p>
          </div>
          <div>
            <div className="text-3xl font-heading font-black text-foreground mb-1">IP-Moat</div>
            <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">Defensible Tech</p>
          </div>
        </div>
      </div>
    </section>
  );
}

import SectionHeading from "@/components/common/SectionHeading";
import { FileText, BadgeCheck } from "lucide-react";
import { legalIdentity } from "@/data/about";

export function AboutLegalIdentity() {
  return (
    <section id="legal-identity" className="py-24 bg-card/30 scroll-mt-24">
      <div className="container mx-auto px-6">
        <SectionHeading
          tag="Transparency"
          title="Legal Identity"
          description="Official corporate and regulatory information for investor confidence."
        />
        <div className="max-w-4xl mx-auto bg-background rounded-3xl border border-border shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-border bg-muted/30">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-8">
                <FileText className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading font-black text-2xl text-foreground mb-4">Corporate Info</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-light mb-8">
                Adiveer Aviation Private Limited is formally registered and compliant with all Indian corporate laws.
              </p>
              <div className="flex items-center gap-3 p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-xl">
                <BadgeCheck className="w-5 h-5 text-emerald-500" />
                <span className="text-[10px] font-heading font-black uppercase tracking-widest text-emerald-600">Active & Compliant</span>
              </div>
            </div>
            <div className="p-0">
              <div className="divide-y divide-border">
                {legalIdentity.map((item, idx) => (
                  <div key={idx} className="p-6 hover:bg-muted/50 transition-colors">
                    <span className="block text-[8px] uppercase tracking-[0.2em] font-black text-primary mb-1">{item.field}</span>
                    <span className="text-xs font-medium text-foreground tracking-tight">{item.detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

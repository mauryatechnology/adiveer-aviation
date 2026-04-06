import PageHero from "@/components/common/PageHero";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for AdiVeer Aviations.",
};

export default function PrivacyPage() {
  return (
    <div className="pb-24 min-h-[70vh] flex flex-col">
      <PageHero
        tag="Legal"
        title="Privacy Policy"
        description="We are committed to protecting your privacy and data security."
      />

      <section className="container mx-auto px-6 py-20 flex-1 flex items-center justify-center">
        <div className="bg-card border border-border p-12 rounded-[2.5rem] text-center max-w-2xl shadow-2xl shadow-primary/5">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
          </div>
          <h2 className="text-3xl font-heading font-black text-foreground mb-4 italic">Policy Update in Progress</h2>
          <p className="text-xl text-muted-foreground leading-relaxed font-light italic">
            &quot;We are currently finalizing our comprehensive privacy standards to align with our latest deep-tech deployments. This page will be updated with the full documentation shortly.&quot;
          </p>
          <div className="mt-12 h-px w-24 bg-border mx-auto" />
          <p className="mt-8 text-xs font-black uppercase tracking-widest text-primary/50">AdiVeer Legal Department</p>
        </div>
      </section>
    </div>
  );
}

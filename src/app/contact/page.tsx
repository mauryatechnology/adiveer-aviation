"use client";

import PageHero from "@/components/common/PageHero";
import { ContactForm } from "@/components/sections/contact/ContactForm";
import { ContactInfo } from "@/components/sections/contact/ContactInfo";

export default function ContactPage() {
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
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>
    </>
  );
}

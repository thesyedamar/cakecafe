"use client";

import ScrollReveal from "./ScrollReveal";

import Link from "next/link";
import { MapPin, Clock, Phone } from "lucide-react";

export default function CTASection() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A]/90 to-[#0A0A0A]" />
      </div>

      <div className="container-luxury relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <ScrollReveal>
            <div>
              <p className="text-gold tracking-[0.3em] uppercase text-sm mb-4">
                Visit Us
              </p>
              <h2 className="font-playfair text-4xl md:text-5xl text-cream mb-6 leading-tight">
                Experience The
                <br />
                <span className="gold-text">Art of Indulgence</span>
              </h2>
              <p className="text-warm-gray mb-8 leading-relaxed">
                Step into our elegantly designed space at TAJ Mall, Dargai, and
                experience the perfect blend of luxury ambiance and delicious creations.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 border border-gold/20 flex items-center justify-center">
                    <MapPin size={18} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-cream text-sm font-semibold">Location</p>
                    <p className="text-warm-gray text-sm">TAJ Mall, Dargai, Pakistan</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 border border-gold/20 flex items-center justify-center">
                    <Clock size={18} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-cream text-sm font-semibold">Hours</p>
                    <p className="text-warm-gray text-sm">Daily 9:00 AM - 11:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 border border-gold/20 flex items-center justify-center">
                    <Phone size={18} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-cream text-sm font-semibold">Call Us</p>
                    <p className="text-warm-gray text-sm">+92 300 123 4567</p>
                  </div>
                </div>
              </div>

              <Link
                href="/contact"
                className="btn-gold inline-block px-8 py-3.5 bg-gold-gradient text-black font-semibold tracking-[0.15em] uppercase text-sm hover:shadow-lg hover:shadow-gold/20 transition-all duration-300"
              >
                Get Directions
              </Link>
            </div>
          </ScrollReveal>

          {/* Map */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden border border-gold/20">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.123456789!2d71.123456!3d34.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDA3JzI0LjQiTiA3McKwMDcnMjQuNCJF!5e0!3m2!1sen!2s!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="The Cake Cafe Location"
                />
              </div>
              {/* Corner Accents */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-gold" />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-gold" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

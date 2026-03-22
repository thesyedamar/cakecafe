"use client";

import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

const stats = [
  { value: "50+", label: "Creations" },
  { value: "100%", label: "Fresh Daily" },
  { value: "Premium", label: "Ingredients" },
  { value: "5★", label: "Rated" },
];

export default function AboutSection() {
  return (
    <section className="section-padding bg-[#0A0A0A] relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-[120px]" />

      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=800&q=80"
                  alt="The Cake Cafe Interior"
                  className="w-full h-full object-cover img-hover"
                />
              </div>
              {/* Gold Border Accent */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold/30 -z-10" />
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 glass p-6">
                <p className="font-cormorant text-gold text-lg italic">
                  &ldquo;Every creation reflects perfection&rdquo;
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal direction="right" delay={0.2}>
            <div>
              <p className="text-gold tracking-[0.3em] uppercase text-sm mb-4">
                Our Story
              </p>
              <h2 className="font-playfair text-4xl md:text-5xl text-cream mb-6 leading-tight">
                A Refined Destination
                <br />
                <span className="gold-text">For Indulgence</span>
              </h2>
              <div className="gold-divider mb-8" />

              <div className="space-y-4 text-warm-gray leading-relaxed">
                <p>
                  Launched at TAJ Mall, Dargai, our first outlet sets the standard
                  for premium taste, immaculate hygiene, and elegant presentation.
                </p>
                <p>
                  Every creation reflects international-quality standards, superior
                  ingredients, and a passion for perfection. With a focus on
                  freshness, neatness, and unforgettable flavor.
                </p>
                <p>
                  THE CAKE CAFE is where luxury meets comfort — now beginning its
                  journey to expand across Pakistan.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="text-center"
                  >
                    <div className="font-playfair text-2xl md:text-3xl gold-text font-bold">
                      {stat.value}
                    </div>
                    <div className="text-xs tracking-[0.2em] uppercase text-warm-gray mt-1">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

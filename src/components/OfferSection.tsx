"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { Cake, Donut, Cookie, Coffee } from "lucide-react";

const offers = [
  {
    icon: Cake,
    title: "Artisan Cakes",
    description:
      "Expertly crafted celebration and everyday cakes using Belgian chocolate, Madagascar vanilla, and premium ingredients.",
  },
  {
    icon: Donut,
    title: "Gourmet Donuts",
    description:
      "Handcrafted donuts with unique flavors — from classic glazed to rose pistachio and beyond.",
  },
  {
    icon: Cookie,
    title: "Fresh Cookies",
    description:
      "Warm, chunky cookies baked fresh daily with the finest chocolate, nuts, and seasonal ingredients.",
  },
  {
    icon: Coffee,
    title: "Brewed Coffee",
    description:
      "Premium Arabica beans roasted to perfection — from signature espresso to specialty lattes.",
  },
];

export default function OfferSection() {
  return (
    <section className="section-padding bg-[#0A0A0A] relative">
      <div className="container-luxury">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-gold tracking-[0.3em] uppercase text-sm mb-4">
              What We Offer
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl text-cream mb-4">
              Crafted With <span className="gold-text">Passion</span>
            </h2>
            <p className="text-warm-gray max-w-xl mx-auto">
              Every item on our menu is a testament to our commitment to quality,
              freshness, and unforgettable flavor
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {offers.map((offer, index) => (
            <ScrollReveal key={offer.title} delay={index * 0.1}>
              <motion.div
                className="group relative p-8 bg-charcoal-light/50 border border-gold/10 hover:border-gold/30 transition-all duration-500 h-full"
                whileHover={{ y: -5 }}
              >
                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center mb-6 border border-gold/20 group-hover:border-gold/50 group-hover:bg-gold/5 transition-all duration-500">
                  <offer.icon
                    size={28}
                    className="text-gold group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <h3 className="font-playfair text-xl text-cream mb-3 group-hover:text-gold transition-colors">
                  {offer.title}
                </h3>
                <p className="text-warm-gray text-sm leading-relaxed">
                  {offer.description}
                </p>

                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-gold/0 group-hover:border-gold/30 transition-all duration-500" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-gold/0 group-hover:border-gold/30 transition-all duration-500" />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

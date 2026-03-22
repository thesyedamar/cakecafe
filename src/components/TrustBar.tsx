"use client";

import { motion } from "framer-motion";
import { Shield, Leaf, Sparkles, Award } from "lucide-react";

const items = [
  { icon: Award, text: "International Quality Standards" },
  { icon: Leaf, text: "Superior Ingredients" },
  { icon: Shield, text: "Immaculate Hygiene" },
  { icon: Sparkles, text: "Unforgettable Flavor" },
];

export default function TrustBar() {
  return (
    <section className="relative py-12 overflow-hidden border-y border-gold/10">
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal-light/50 to-charcoal/80" />

      <motion.div
        className="flex whitespace-nowrap relative z-10"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...items, ...items, ...items, ...items].map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 mx-8 md:mx-12"
          >
            <item.icon size={18} className="text-gold shrink-0" />
            <span className="text-sm tracking-[0.2em] uppercase text-cream/80 whitespace-nowrap">
              {item.text}
            </span>
            <span className="text-gold/30 mx-4">|</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

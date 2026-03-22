"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { menuItems } from "@/data/menu";
import ScrollReveal from "./ScrollReveal";
import { Star, MessageCircle } from "lucide-react";
import Link from "next/link";
import { WHATSAPP_NUMBER } from "@/data/menu";

const showcaseItems = menuItems.filter((item) => item.isPopular).slice(0, 4);

export default function ShowcaseSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section
      ref={containerRef}
      className="section-padding relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0A0A0A 0%, #0F0E0D 50%, #0A0A0A 100%)" }}
    >
      {/* Background Glow */}
      <motion.div
        style={{ y }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[150px]"
      />

      <div className="container-luxury relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-gold tracking-[0.3em] uppercase text-sm mb-4">
              Signature Collection
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl text-cream mb-4">
              Our Finest <span className="gold-text">Creations</span>
            </h2>
            <p className="text-warm-gray max-w-xl mx-auto">
              Each masterpiece is crafted with passion, precision, and the finest ingredients
            </p>
          </div>
        </ScrollReveal>

        {/* Horizontal Scroll Cards */}
        <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-4 md:overflow-visible">
          {showcaseItems.map((item, index) => {
            const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
              `Hi! I'd like to order: ${item.name} (PKR ${item.price.toLocaleString()})`
            )}`;

            return (
              <ScrollReveal key={item.id} delay={index * 0.15}>
                <motion.div
                  className="group min-w-[280px] md:min-w-0 snap-center"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative overflow-hidden bg-charcoal-light">
                    {/* Image */}
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Badge */}
                    {item.isNew && (
                      <div className="absolute top-4 left-4 bg-gold text-black text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1">
                        New
                      </div>
                    )}

                    {/* Content */}
                    <div className="p-5">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-playfair text-lg text-cream group-hover:text-gold transition-colors">
                          {item.name}
                        </h3>
                        <div className="flex items-center gap-1 text-gold">
                          <Star size={12} fill="currentColor" />
                          <span className="text-xs">5</span>
                        </div>
                      </div>
                      <p className="text-warm-gray text-sm mb-4 line-clamp-2">
                        {item.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="font-playfair text-xl gold-text font-semibold">
                          PKR {item.price.toLocaleString()}
                        </span>
                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-xs tracking-wider uppercase text-gold border border-gold/30 px-3 py-1.5 hover:bg-gold/10 transition-colors"
                        >
                          <MessageCircle size={12} />
                          Order
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={0.6}>
          <div className="text-center mt-12">
            <Link
              href="/menu"
              className="btn-gold inline-block px-8 py-3.5 border border-gold/40 text-gold font-semibold tracking-[0.15em] uppercase text-sm hover:bg-gold/10 transition-all duration-300"
            >
              View Full Menu
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

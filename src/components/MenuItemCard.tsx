"use client";

import { motion } from "framer-motion";
import { Star, MessageCircle } from "lucide-react";
import { MenuItem, WHATSAPP_NUMBER } from "@/data/menu";

interface MenuItemCardProps {
  item: MenuItem;
  index: number;
}

export default function MenuItemCard({ item, index }: MenuItemCardProps) {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hi! I'd like to order: ${item.name} (PKR ${item.price.toLocaleString()})`
  )}`;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group bg-charcoal-light/50 border border-gold/10 hover:border-gold/30 transition-all duration-500 overflow-hidden"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {item.isPopular && (
            <span className="bg-gold-gradient text-black text-[9px] font-bold tracking-[0.2em] uppercase px-2.5 py-1 flex items-center gap-1">
              <Star size={8} fill="currentColor" />
              Popular
            </span>
          )}
          {item.isNew && (
            <span className="bg-gold text-black text-[9px] font-bold tracking-[0.2em] uppercase px-2.5 py-1">
              New
            </span>
          )}
        </div>

        {/* Category Badge */}
        <div className="absolute top-3 right-3">
          <span className="bg-[#0A0A0A]/80 backdrop-blur-sm text-warm-gray text-[9px] tracking-[0.2em] uppercase px-2.5 py-1 border border-gold/20">
            {item.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-playfair text-lg text-cream group-hover:text-gold transition-colors duration-300">
            {item.name}
          </h3>
        </div>
        <p className="text-warm-gray text-sm leading-relaxed mb-4 line-clamp-2">
          {item.description}
        </p>
        <div className="flex items-center justify-between pt-3 border-t border-gold/10">
          <span className="font-playfair text-xl gold-text font-semibold">
            PKR {item.price.toLocaleString()}
          </span>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs tracking-wider uppercase text-gold border border-gold/30 px-4 py-2 hover:bg-gold hover:text-black transition-all duration-300"
          >
            <MessageCircle size={14} />
            Order
          </a>
        </div>
      </div>
    </motion.div>
  );
}

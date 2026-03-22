"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { menuItems, categories } from "@/data/menu";
import MenuItemCard from "./MenuItemCard";
import ScrollReveal from "./ScrollReveal";

export default function MenuGrid() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems = useMemo(() => {
    if (activeCategory === "all") return menuItems;
    return menuItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <div>
      {/* Category Filters */}
      <ScrollReveal>
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`relative px-6 py-2.5 text-sm tracking-[0.15em] uppercase transition-all duration-300 ${
                activeCategory === category.id
                  ? "text-black font-semibold"
                  : "text-warm-gray border border-gold/20 hover:border-gold/50 hover:text-gold"
              }`}
            >
              {activeCategory === category.id && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 bg-gold-gradient"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{category.name}</span>
            </button>
          ))}
        </div>
      </ScrollReveal>

      {/* Menu Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item, index) => (
            <MenuItemCard key={item.id} item={item} index={index} />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {filteredItems.length === 0 && (
        <div className="text-center py-16">
          <p className="text-warm-gray text-lg">No items in this category yet.</p>
        </div>
      )}
    </div>
  );
}

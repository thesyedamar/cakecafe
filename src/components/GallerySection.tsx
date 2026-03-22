"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { X } from "lucide-react";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80",
    alt: "Chocolate Cake",
    span: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&q=80",
    alt: "Donuts",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600&q=80",
    alt: "Cookies",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=600&q=80",
    alt: "Coffee",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1555507036-ab1f4038024a?w=600&q=80",
    alt: "Cafe Interior",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800&q=80",
    alt: "Cake Display",
    span: "col-span-2",
  },
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="section-padding bg-[#0F0E0D] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[150px]" />

      <div className="container-luxury relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-gold tracking-[0.3em] uppercase text-sm mb-4">
              Visual Journey
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl text-cream mb-4">
              Our <span className="gold-text">Gallery</span>
            </h2>
            <p className="text-warm-gray max-w-xl mx-auto">
              A glimpse into our world of artisan creations and elegant ambiance
            </p>
          </div>
        </ScrollReveal>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {galleryImages.map((image, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <motion.div
                className={`${image.span} aspect-square overflow-hidden cursor-pointer relative group`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="font-playfair text-cream text-sm">
                    {image.alt}
                  </span>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#0A0A0A]/95 flex items-center justify-center p-6"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-cream hover:text-gold transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={selectedImage}
              alt="Gallery Image"
              className="max-w-full max-h-[85vh] object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/80 via-[#0A0A0A]/60 to-[#0A0A0A]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/50 to-transparent" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[
          { left: "10%", top: "20%", delay: 0, size: 3 },
          { left: "20%", top: "60%", delay: 1, size: 2 },
          { left: "35%", top: "30%", delay: 2, size: 4 },
          { left: "50%", top: "70%", delay: 0.5, size: 2 },
          { left: "65%", top: "25%", delay: 1.5, size: 3 },
          { left: "80%", top: "55%", delay: 2.5, size: 2 },
          { left: "90%", top: "35%", delay: 0.8, size: 3 },
          { left: "45%", top: "15%", delay: 1.8, size: 2 },
          { left: "75%", top: "80%", delay: 3, size: 4 },
          { left: "15%", top: "85%", delay: 2.2, size: 2 },
        ].map((particle, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gold/30"
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 5,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p className="font-cormorant text-gold text-lg md:text-xl tracking-[0.3em] uppercase mb-4">
            Est. 2024 &bull; TAJ Mall, Dargai
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold text-cream mb-6 leading-tight"
        >
          THE CAKE
          <br />
          <span className="gold-text">CAFE</span>
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="w-24 h-[1px] bg-gold-gradient mx-auto mb-6"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="font-cormorant text-xl md:text-2xl text-warm-gray max-w-2xl mx-auto mb-8 italic"
        >
          Where luxury meets comfort — expertly crafted cakes, donuts, cookies,
          and freshly brewed coffee
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/menu"
            className="btn-gold px-8 py-3.5 bg-gold-gradient text-black font-semibold tracking-[0.15em] uppercase text-sm hover:shadow-lg hover:shadow-gold/20 transition-all duration-300"
          >
            Explore Menu
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3.5 border border-gold/40 text-gold font-semibold tracking-[0.15em] uppercase text-sm hover:bg-gold/10 transition-all duration-300"
          >
            Visit Us
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-warm-gray">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} className="text-gold" />
        </motion.div>
      </motion.div>
    </section>
  );
}

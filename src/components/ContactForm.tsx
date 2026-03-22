"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, User, Mail, Phone, MessageSquare } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-8 border border-gold/30 bg-charcoal-light/50 text-center"
      >
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold-gradient flex items-center justify-center">
          <Send size={24} className="text-black" />
        </div>
        <h3 className="font-playfair text-2xl text-cream mb-2">Message Sent!</h3>
        <p className="text-warm-gray mb-4">
          Thank you for reaching out. We&apos;ll get back to you shortly.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="text-gold text-sm tracking-wider uppercase hover:underline"
        >
          Send Another Message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name */}
      <div className="relative">
        <User
          size={16}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-warm-gray"
        />
        <input
          type="text"
          placeholder="Your Name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full pl-12 pr-4 py-3.5 bg-charcoal-light/50 border border-gold/10 text-cream placeholder-warm-gray/50 focus:border-gold/50 focus:outline-none transition-colors text-sm"
        />
      </div>

      {/* Email */}
      <div className="relative">
        <Mail
          size={16}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-warm-gray"
        />
        <input
          type="email"
          placeholder="Email Address"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full pl-12 pr-4 py-3.5 bg-charcoal-light/50 border border-gold/10 text-cream placeholder-warm-gray/50 focus:border-gold/50 focus:outline-none transition-colors text-sm"
        />
      </div>

      {/* Phone */}
      <div className="relative">
        <Phone
          size={16}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-warm-gray"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full pl-12 pr-4 py-3.5 bg-charcoal-light/50 border border-gold/10 text-cream placeholder-warm-gray/50 focus:border-gold/50 focus:outline-none transition-colors text-sm"
        />
      </div>

      {/* Message */}
      <div className="relative">
        <MessageSquare
          size={16}
          className="absolute left-4 top-4 text-warm-gray"
        />
        <textarea
          placeholder="Your Message"
          required
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full pl-12 pr-4 py-3.5 bg-charcoal-light/50 border border-gold/10 text-cream placeholder-warm-gray/50 focus:border-gold/50 focus:outline-none transition-colors text-sm resize-none"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-gold w-full py-3.5 bg-gold-gradient text-black font-semibold tracking-[0.15em] uppercase text-sm hover:shadow-lg hover:shadow-gold/20 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full"
            />
            Sending...
          </>
        ) : (
          <>
            <Send size={16} />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}

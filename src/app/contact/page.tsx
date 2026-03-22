import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/data/menu";

export const metadata: Metadata = {
  title: "Contact | THE CAKE CAFE",
  description:
    "Visit THE CAKE CAFE at TAJ Mall, Dargai. Find our location, hours, and contact information.",
};

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hi! I have a question about THE CAKE CAFE"
  )}`;

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-15"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1920&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A]/95 to-[#0A0A0A]" />
        </div>

        <div className="relative z-10 text-center px-6">
          <ScrollReveal>
            <p className="text-gold tracking-[0.3em] uppercase text-sm mb-4">
              We&apos;d Love To Hear From You
            </p>
            <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl text-cream mb-4">
              Visit <span className="gold-text">Us</span>
            </h1>
            <div className="w-24 h-[1px] bg-gold-gradient mx-auto mb-6" />
            <p className="text-warm-gray max-w-xl mx-auto text-lg">
              Step into our elegantly designed space at TAJ Mall, Dargai
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="section-padding">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <ScrollReveal direction="left">
              <div>
                <h2 className="font-playfair text-3xl text-cream mb-8">
                  Get In <span className="gold-text">Touch</span>
                </h2>

                <div className="space-y-6 mb-10">
                  {/* Location */}
                  <div className="flex items-start gap-4 p-5 bg-charcoal-light/30 border border-gold/10 hover:border-gold/20 transition-colors">
                    <div className="w-12 h-12 shrink-0 border border-gold/20 flex items-center justify-center">
                      <MapPin size={20} className="text-gold" />
                    </div>
                    <div>
                      <h3 className="font-playfair text-cream text-lg mb-1">
                        Our Location
                      </h3>
                      <p className="text-warm-gray text-sm">
                        TAJ Mall, Dargai, Pakistan
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <a
                    href="tel:+923001234567"
                    className="flex items-start gap-4 p-5 bg-charcoal-light/30 border border-gold/10 hover:border-gold/20 transition-colors group"
                  >
                    <div className="w-12 h-12 shrink-0 border border-gold/20 flex items-center justify-center">
                      <Phone size={20} className="text-gold" />
                    </div>
                    <div>
                      <h3 className="font-playfair text-cream text-lg mb-1 group-hover:text-gold transition-colors">
                        Call Us
                      </h3>
                      <p className="text-warm-gray text-sm">+92 300 123 4567</p>
                    </div>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-5 bg-charcoal-light/30 border border-gold/10 hover:border-gold/20 transition-colors group"
                  >
                    <div className="w-12 h-12 shrink-0 border border-[#25D366]/20 flex items-center justify-center">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="#25D366"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-playfair text-cream text-lg mb-1 group-hover:text-gold transition-colors">
                        WhatsApp
                      </h3>
                      <p className="text-warm-gray text-sm">
                        Chat with us directly
                      </p>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:hello@thecakecafe.pk"
                    className="flex items-start gap-4 p-5 bg-charcoal-light/30 border border-gold/10 hover:border-gold/20 transition-colors group"
                  >
                    <div className="w-12 h-12 shrink-0 border border-gold/20 flex items-center justify-center">
                      <Mail size={20} className="text-gold" />
                    </div>
                    <div>
                      <h3 className="font-playfair text-cream text-lg mb-1 group-hover:text-gold transition-colors">
                        Email
                      </h3>
                      <p className="text-warm-gray text-sm">
                        hello@thecakecafe.pk
                      </p>
                    </div>
                  </a>
                </div>

                {/* Hours */}
                <div className="p-6 bg-charcoal-light/30 border border-gold/10">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock size={20} className="text-gold" />
                    <h3 className="font-playfair text-cream text-lg">
                      Opening Hours
                    </h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between text-warm-gray">
                      <span>Monday - Friday</span>
                      <span className="text-cream">9:00 AM - 11:00 PM</span>
                    </div>
                    <div className="flex justify-between text-warm-gray">
                      <span>Saturday</span>
                      <span className="text-cream">10:00 AM - 12:00 AM</span>
                    </div>
                    <div className="flex justify-between text-warm-gray">
                      <span>Sunday</span>
                      <span className="text-cream">10:00 AM - 11:00 PM</span>
                    </div>
                  </div>
                </div>

                {/* Social */}
                <div className="mt-8">
                  <h3 className="font-playfair text-cream text-lg mb-4">
                    Follow Us
                  </h3>
                  <div className="flex gap-3">
                    <a
                      href="#"
                      className="w-12 h-12 border border-gold/20 flex items-center justify-center text-warm-gray hover:text-gold hover:border-gold/50 hover:bg-gold/5 transition-all duration-300"
                    >
                      <Instagram size={20} />
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 border border-gold/20 flex items-center justify-center text-warm-gray hover:text-gold hover:border-gold/50 hover:bg-gold/5 transition-all duration-300"
                    >
                      <Facebook size={20} />
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 border border-gold/20 flex items-center justify-center text-warm-gray hover:text-gold hover:border-gold/50 hover:bg-gold/5 transition-all duration-300"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.77a8.18 8.18 0 004.76 1.52V6.84a4.84 4.84 0 01-1-.15z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Contact Form */}
            <ScrollReveal direction="right" delay={0.2}>
              <div>
                <h2 className="font-playfair text-3xl text-cream mb-8">
                  Send a <span className="gold-text">Message</span>
                </h2>
                <ContactForm />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="relative">
        <div className="h-[400px] md:h-[500px] overflow-hidden">
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
        <div className="absolute inset-0 pointer-events-none border-y border-gold/20" />
      </section>
    </>
  );
}

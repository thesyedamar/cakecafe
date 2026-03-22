import Link from "next/link";
import { Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#0A0A0A] border-t border-gold/10">
      {/* Gold line */}
      <div className="gold-divider" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gold-gradient flex items-center justify-center">
                <span className="font-playfair text-black font-bold text-lg">T</span>
              </div>
              <span className="font-playfair text-xl font-semibold tracking-wider text-cream">
                THE CAKE CAFE
              </span>
            </Link>
            <p className="text-warm-gray text-sm leading-relaxed mb-6">
              A refined destination for indulgence, offering expertly crafted cakes,
              donuts, cookies, and freshly brewed coffee with international-quality standards.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 border border-gold/20 flex items-center justify-center text-warm-gray hover:text-gold hover:border-gold/50 transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-gold/20 flex items-center justify-center text-warm-gray hover:text-gold hover:border-gold/50 transition-all duration-300"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-gold/20 flex items-center justify-center text-warm-gray hover:text-gold hover:border-gold/50 transition-all duration-300"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.77a8.18 8.18 0 004.76 1.52V6.84a4.84 4.84 0 01-1-.15z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-lg text-cream mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/menu", label: "Our Menu" },
                { href: "/contact", label: "Visit Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-warm-gray hover:text-gold transition-colors duration-300 tracking-wider"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-playfair text-lg text-cream mb-4">Opening Hours</h3>
            <ul className="space-y-3 text-sm text-warm-gray">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span className="text-cream">9:00 AM - 11:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span className="text-cream">10:00 AM - 12:00 AM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-cream">10:00 AM - 11:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-playfair text-lg text-cream mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-gold mt-1 shrink-0" />
                <span className="text-sm text-warm-gray">
                  TAJ Mall, Dargai, Pakistan
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-gold shrink-0" />
                <a
                  href="tel:+923001234567"
                  className="text-sm text-warm-gray hover:text-gold transition-colors"
                >
                  +92 300 123 4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-gold shrink-0" />
                <a
                  href="mailto:hello@thecakecafe.pk"
                  className="text-sm text-warm-gray hover:text-gold transition-colors"
                >
                  hello@thecakecafe.pk
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="gold-divider mt-12 mb-6" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-warm-gray tracking-wider">
            &copy; {new Date().getFullYear()} THE CAKE CAFE. All rights reserved.
          </p>
          <p className="text-xs text-warm-gray tracking-wider">
            Crafted with passion at TAJ Mall, Dargai
          </p>
        </div>
      </div>
    </footer>
  );
}

import type { Metadata } from "next";
import MenuGrid from "@/components/MenuGrid";
import ScrollReveal from "@/components/ScrollReveal";
import TrustBar from "@/components/TrustBar";

export const metadata: Metadata = {
  title: "Menu | THE CAKE CAFE",
  description:
    "Explore our curated menu of expertly crafted cakes, donuts, cookies, and freshly brewed coffee at THE CAKE CAFE.",
};

export default function MenuPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-15"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=1920&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A]/95 to-[#0A0A0A]" />
        </div>

        <div className="relative z-10 text-center px-6">
          <ScrollReveal>
            <p className="text-gold tracking-[0.3em] uppercase text-sm mb-4">
              Explore Our Selection
            </p>
            <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl text-cream mb-4">
              Our <span className="gold-text">Menu</span>
            </h1>
            <div className="w-24 h-[1px] bg-gold-gradient mx-auto mb-6" />
            <p className="text-warm-gray max-w-xl mx-auto text-lg">
              Expertly crafted with passion and perfection — every creation
              reflects international-quality standards
            </p>
          </ScrollReveal>
        </div>
      </section>

      <TrustBar />

      {/* Menu */}
      <section className="section-padding">
        <div className="container-luxury">
          <MenuGrid />
        </div>
      </section>

      {/* Quality Promise */}
      <section className="section-padding bg-charcoal-light/30">
        <div className="container-luxury">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-gold tracking-[0.3em] uppercase text-sm mb-4">
                Our Promise
              </p>
              <h2 className="font-playfair text-3xl md:text-4xl text-cream mb-6">
                Freshness & Quality <span className="gold-text">Guaranteed</span>
              </h2>
              <div className="gold-divider mb-8" />
              <p className="text-warm-gray leading-relaxed mb-6">
                Every item at THE CAKE CAFE is prepared fresh daily using only the
                finest ingredients sourced from trusted suppliers worldwide. Our
                commitment to immaculate hygiene and elegant presentation ensures
                that every bite is an experience to remember.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                {[
                  {
                    title: "Baked Fresh Daily",
                    desc: "Nothing sits overnight — every item is prepared the morning of",
                  },
                  {
                    title: "Premium Sourced",
                    desc: "Belgian chocolate, Madagascar vanilla, and locally sourced dairy",
                  },
                  {
                    title: "Made With Love",
                    desc: "Each creation is handcrafted by our skilled pastry artisans",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="p-6 border border-gold/10 hover:border-gold/30 transition-colors"
                  >
                    <h3 className="font-playfair text-gold text-lg mb-2">
                      {item.title}
                    </h3>
                    <p className="text-warm-gray text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

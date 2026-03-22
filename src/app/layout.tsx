import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "THE CAKE CAFE | Where Luxury Meets Comfort",
  description:
    "A refined destination for indulgence at TAJ Mall, Dargai. Expertly crafted cakes, donuts, cookies, and freshly brewed coffee with international-quality standards.",
  keywords: [
    "cake cafe",
    "bakery",
    "dargai",
    "taj mall",
    "cakes",
    "donuts",
    "cookies",
    "coffee",
    "premium bakery",
    "pakistan",
  ],
  openGraph: {
    title: "THE CAKE CAFE | Where Luxury Meets Comfort",
    description:
      "Expertly crafted cakes, donuts, cookies, and freshly brewed coffee at TAJ Mall, Dargai.",
    type: "website",
    locale: "en_US",
    siteName: "THE CAKE CAFE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-[#0A0A0A] text-cream">
        <div className="grain-overlay" />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

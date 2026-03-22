import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ShowcaseSection from "@/components/ShowcaseSection";
import OfferSection from "@/components/OfferSection";
import GallerySection from "@/components/GallerySection";
import TrustBar from "@/components/TrustBar";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <TrustBar />
      <ShowcaseSection />
      <OfferSection />
      <GallerySection />
      <CTASection />
    </>
  );
}

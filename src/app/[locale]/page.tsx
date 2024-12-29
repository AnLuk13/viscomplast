import HeroSection from "@/app/components/landing/HeroSection";
import SponsorsSection from "@/app/components/landing/SponsorsSection";
import CatalogSection from "@/app/components/landing/CatalogSection";
import OfferSection from "@/app/components/landing/OfferSection";
import AboutSection from "@/app/components/landing/AboutSection";
import SliderSection from "@/app/components/landing/SliderSection";
import Footer from "@/app/components/footer/Footer";

export default function Home() {
  // const t = useTranslations('home');
  return (
    <div>
      <HeroSection />
      <SponsorsSection />
      <CatalogSection />
      <OfferSection />
      <AboutSection />
      <SliderSection />
      <Footer />
    </div>
  );
}
